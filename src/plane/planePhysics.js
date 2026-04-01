import * as THREE from 'three';

/**
 * Eagle Flight Physics - True aerodynamic model.
 *
 * Core principle: An eagle has NO engine. All thrust comes from flapping.
 * Between flaps, the eagle glides - trading altitude for airspeed.
 *
 * Forces acting on the eagle:
 * 1. GRAVITY - always pulling down (9.8 m/s²)
 * 2. LIFT - perpendicular to wing surface, proportional to v² and AoA
 * 3. DRAG - opposing motion, proportional to v² (parasitic + induced)
 * 4. THRUST - only from flapping wings (discrete bursts of force)
 * 5. THERMALS - vertical air currents providing free lift
 *
 * Flight modes:
 * - FLAPPING: W key / mobile button. Each flap cycle generates a burst
 *   of thrust + lift. Costs energy. Sustains level flight or climb.
 * - GLIDING: Default when not flapping. Wings spread. Slowly loses altitude
 *   but maintains/gains speed from gravity component along glide path.
 *   Eagles can glide 20m forward for every 1m of altitude lost.
 * - DIVING: Space key. Wings tucked. Steep descent gaining speed rapidly.
 * - TURBO: Shift key. Supernatural 400kt travel mode.
 */
export class PlanePhysics {
	constructor() {
		// Airspeed (m/s game units)
		this.speed = 15;
		this.maxSpeed = 50;          // Max from flapping alone
		this.minSpeed = 4;           // Stall speed
		this.maxDiveSpeed = 120;     // Terminal in full dive
		this.turboSpeed = 400;       // Turbo mode

		// Wing parameters (real golden eagle values)
		this.mass = 5.0;             // kg
		this.wingArea = 0.65;        // m²
		this.wingspan = 2.1;         // m
		this.aspectRatio = this.wingspan * this.wingspan / this.wingArea; // ~6.8

		// Aerodynamic coefficients
		this.clMax = 1.6;            // Max lift coefficient (at ~12° AoA)
		this.cd0 = 0.02;            // Zero-lift drag coefficient (body + friction)
		this.cdWingSpread = 0.008;   // Additional drag from spread wings
		this.k = 1 / (Math.PI * this.aspectRatio * 0.85); // Induced drag factor (Oswald eff ~0.85)

		// Flap mechanics
		this.isFlapping = false;
		this.flapStrength = 0;       // 0-1 current flap power output
		this.flapCooldown = 0;       // Time until next flap impulse
		this.flapCycleDuration = 0.35; // Seconds per full flap cycle
		this.flapThrustImpulse = 25; // Thrust per downstroke (N)
		this.flapLiftImpulse = 15;   // Extra lift per downstroke (N)
		this.flapDecay = 3.0;        // How fast flap force decays between strokes
		this.flapInput = false;      // Is flap key held?
		this.flapPrevInput = false;

		// Gravity
		this.gravity = 9.8;
		this.airDensity = 1.225;

		// Glide state
		this.isGliding = true;
		this.wingSpread = 1.0;       // 0 = tucked, 1 = fully spread
		this.verticalSpeed = 0;
		this.glideRatio = 20;

		// Thermal system
		this.thermalLift = 0;
		this.thermalStrength = 0;
		this.thermalTimer = 0;
		this.inThermal = false;

		// Orientation
		this.pitch = 0;
		this.roll = 0;
		this.heading = 0;

		// Control rates
		this.pitchRate = 2.0;
		this.rollRate = 3.2;
		this.yawRate = 1.0;

		// Power dive
		this.isBoosting = false;
		this.boostTimeRemaining = 0;
		this.boostDuration = 4.0;
		this.boostMultiplier = 2.5;
		this.boostRotations = 0;
		this.boostPressed = false;

		// Turbo
		this.isTurbo = false;
		this.turboPressed = false;
		this.turboWindup = 0;

		// Throttle (kept for compatibility - maps from flap state)
		this.throttle = 0;

		this.quaternion = new THREE.Quaternion();
	}

	boost() {
		if (this.boostTimeRemaining <= 0) {
			this.isBoosting = true;
			this.boostTimeRemaining = this.boostDuration;
		}
	}

	reset(lon, lat, alt, heading, pitch, roll) {
		this.heading = heading || 0;
		this.pitch = pitch || 0;
		this.roll = roll || 0;
		this.speed = 15;
		this.verticalSpeed = 0;
		this.thermalLift = 0;
		this.thermalStrength = 0;
		this.isGliding = true;
		this.isFlapping = false;
		this.flapStrength = 0;
		this.flapCooldown = 0;
		this.wingSpread = 1.0;
		this.isTurbo = false;
		this.turboWindup = 0;

		const euler = new THREE.Euler(
			THREE.MathUtils.degToRad(this.pitch),
			THREE.MathUtils.degToRad(this.heading),
			THREE.MathUtils.degToRad(this.roll),
			'YXZ'
		);
		this.quaternion.setFromEuler(euler);
	}

	/**
	 * Air density at altitude (barometric formula)
	 */
	getAirDensity(altFeet) {
		const altM = altFeet * 0.3048;
		return this.airDensity * Math.exp(-altM / 8500);
	}

	/**
	 * Lift coefficient from angle of attack.
	 * Linear below stall, drops above ~15°.
	 */
	getLiftCoefficient(aoaDeg) {
		if (aoaDeg < -5) return -0.2;
		if (aoaDeg < 12) return this.clMax * (aoaDeg / 12);
		if (aoaDeg < 18) return this.clMax * (1 - (aoaDeg - 12) / 12); // Stall
		return 0.1; // Deep stall
	}

	/**
	 * Thermal updraft simulation
	 */
	updateThermals(dt, altitude) {
		this.thermalTimer += dt;
		const altFactor = Math.max(0, 1.0 - (altitude - 2000) / 15000);

		const t = this.thermalTimer;
		const pulse = Math.sin(t * 0.3) * 0.4 + Math.sin(t * 0.7 + 1.5) * 0.3 + Math.sin(t * 1.2 + 3) * 0.3;
		this.thermalStrength = Math.max(0, pulse) * altFactor;
		this.inThermal = this.thermalStrength > 0.15;

		const bankBonus = Math.abs(this.roll) > 15 && Math.abs(this.roll) < 45 ? 1.5 : 1.0;
		this.thermalLift = this.thermalStrength * 3.0 * bankBonus * this.wingSpread;
	}

	update(input, dt) {
		// === BOOST (power dive) ===
		if (this.boostTimeRemaining > 0) {
			this.boostTimeRemaining -= dt;
			if (this.boostTimeRemaining <= 0) {
				this.isBoosting = false;
				this.boostTimeRemaining = 0;
			}
		}

		if (input.boost) {
			if (!this.boostPressed && !this.isBoosting && !this.isTurbo) this.boost();
			this.boostPressed = true;
		} else {
			this.boostPressed = false;
		}

		// === TURBO ===
		if (input.turbo) {
			if (!this.turboPressed) {
				this.isTurbo = !this.isTurbo;
				if (this.isTurbo) { this.isBoosting = false; this.boostTimeRemaining = 0; }
			}
			this.turboPressed = true;
		} else {
			this.turboPressed = false;
		}
		this.turboWindup = this.isTurbo
			? Math.min(1, this.turboWindup + dt * 0.7)
			: Math.max(0, this.turboWindup - dt * 1.5);

		// === FLAPPING (W key / flap input) ===
		this.flapInput = input.flap || false;

		if (this.flapInput && !this.isBoosting && !this.isTurbo) {
			this.isFlapping = true;
			this.isGliding = false;

			// Each flap cycle: ramp up, deliver impulse, decay
			this.flapCooldown -= dt;
			if (this.flapCooldown <= 0) {
				// Downstroke! Deliver thrust + lift impulse
				this.flapStrength = 1.0;
				this.flapCooldown = this.flapCycleDuration;
			}
		} else if (!this.flapInput) {
			this.isFlapping = false;
			if (!this.isBoosting && !this.isTurbo) {
				this.isGliding = true;
			}
		}

		// Flap strength decays between downstrokes
		this.flapStrength = Math.max(0, this.flapStrength - this.flapDecay * dt);

		// === WING SPREAD ===
		if (this.isTurbo || this.turboWindup > 0.1) {
			this.wingSpread += (0.15 - this.wingSpread) * dt * 6;
		} else if (this.isBoosting) {
			this.wingSpread += (0.2 - this.wingSpread) * dt * 5;
			this.isGliding = false;
		} else if (this.isGliding) {
			this.wingSpread += (1.0 - this.wingSpread) * dt * 3;
		} else {
			// Flapping: oscillate 0.4 - 0.9
			this.wingSpread = 0.65 + this.flapStrength * 0.25;
		}

		// Set throttle for compatibility
		this.throttle = this.isFlapping ? 0.3 + this.flapStrength * 0.7 : 0;

		// === AERODYNAMIC FORCES ===
		const rho = this.getAirDensity(0);
		const v = this.speed;
		const q = 0.5 * rho * v * v; // Dynamic pressure

		// Angle of attack (simplified from pitch)
		const aoaDeg = Math.max(-10, Math.min(20, -this.pitch * 0.3));
		const cl = this.getLiftCoefficient(aoaDeg) * this.wingSpread;

		// Lift force (perpendicular to flight path)
		const lift = q * this.wingArea * cl;

		// Drag force (opposing motion)
		const cdInduced = this.k * cl * cl; // Induced drag from generating lift
		const cdTotal = this.cd0 + cdInduced + (this.wingSpread * this.cdWingSpread);
		let drag = q * this.wingArea * cdTotal;

		// Reduce drag when tucked
		if (this.isBoosting) drag *= 0.25;
		if (this.isTurbo || this.turboWindup > 0.1) drag *= 0.05;

		// Thrust from flapping (impulse-based)
		let thrust = 0;
		if (this.isFlapping) {
			thrust = this.flapThrustImpulse * this.flapStrength;
		}

		// === SPEED UPDATE ===
		// Net force along flight path: thrust - drag + gravity component
		const pitchRad = THREE.MathUtils.degToRad(this.pitch);
		const gravityComponent = this.mass * this.gravity * Math.sin(pitchRad);

		const netForce = thrust - drag + gravityComponent;
		const accel = netForce / this.mass;
		this.speed += accel * dt;

		// Speed limits
		let maxSpd = this.isBoosting ? this.maxDiveSpeed : this.maxSpeed;
		if (this.pitch < -20 && !this.isBoosting) {
			maxSpd += (this.maxDiveSpeed - this.maxSpeed) * Math.min(1, Math.abs(this.pitch) / 60);
		}
		if (this.isTurbo || this.turboWindup > 0.01) maxSpd = this.turboSpeed;

		this.speed = Math.max(this.minSpeed, Math.min(maxSpd, this.speed));

		// Turbo ramp
		if (this.isTurbo || this.turboWindup > 0.01) {
			const eased = this.turboWindup * this.turboWindup * (3 - 2 * this.turboWindup);
			this.speed += (this.turboSpeed * eased - this.speed) * dt * 2.5;
		}

		// Boost ramp
		if (this.isBoosting) {
			this.speed += (this.maxDiveSpeed * 0.8 - this.speed) * dt * 3;
		}

		// === VERTICAL SPEED ===
		this.updateThermals(dt, 0);

		// Net vertical: lift - weight + thermals + flap lift impulse
		const weight = this.mass * this.gravity;
		const flapLift = this.isFlapping ? this.flapLiftImpulse * this.flapStrength : 0;
		const netVertical = (lift + flapLift - weight + this.thermalLift * this.mass) / this.mass;
		this.verticalSpeed += (netVertical * 0.15 - this.verticalSpeed) * dt * 2;

		// Stall behavior: nose drops when too slow
		if (this.speed <= this.minSpeed * 1.3 && !this.isBoosting && !this.isTurbo) {
			this.pitch = THREE.MathUtils.lerp(this.pitch, Math.min(this.pitch, -8), dt * 0.8);
		}

		// === CONTROL ===
		const speedNorm = Math.min(1.2, this.speed / this.maxSpeed);
		const controlEff = speedNorm > 0.3 ? 0.5 + speedNorm * 0.5 : speedNorm / 0.3 * 0.5;

		const localPitch = input.pitch * this.pitchRate * dt * controlEff;
		const localRoll = input.roll * this.rollRate * dt * controlEff;
		const localYaw = input.yaw * this.yawRate * dt * controlEff;

		const qPitch = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), localPitch);
		const qRoll = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), localRoll);
		const qYaw = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), localYaw);

		this.quaternion.multiply(qYaw).multiply(qPitch).multiply(qRoll).normalize();

		const euler = new THREE.Euler().setFromQuaternion(this.quaternion, 'YXZ');
		this.heading = THREE.MathUtils.radToDeg(euler.y);
		this.pitch = THREE.MathUtils.radToDeg(euler.x);
		this.roll = THREE.MathUtils.radToDeg(euler.z);

		return {
			speed: this.speed,
			pitch: this.pitch,
			roll: this.roll,
			heading: this.heading,
			isBoosting: this.isBoosting,
			boostTimeRemaining: this.boostTimeRemaining,
			boostDuration: this.boostDuration,
			boostRotations: this.boostRotations,
			isGliding: this.isGliding,
			isFlapping: this.isFlapping,
			flapStrength: this.flapStrength,
			wingSpread: this.wingSpread,
			thermalStrength: this.thermalStrength,
			inThermal: this.inThermal,
			verticalSpeed: this.verticalSpeed,
			flapPhase: this.flapCooldown,
			liftForce: lift,
			isTurbo: this.isTurbo,
			turboWindup: this.turboWindup,
		};
	}
}
