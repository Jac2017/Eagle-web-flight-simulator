import * as THREE from 'three';

/**
 * Eagle flight physics - models wing-based lift, gliding, thermals, and gravity.
 *
 * An eagle generates lift from its wings proportional to airspeed and angle of attack.
 * It can glide long distances with minimal energy loss, ride thermals to gain altitude,
 * and tuck wings for a power dive. Flapping (throttle) provides thrust.
 */
export class PlanePhysics {
	constructor() {
		// Eagle flight parameters (speeds in m/s conceptual units)
		this.speed = 15;          // Current airspeed
		this.maxSpeed = 45;       // Max sustained flapping speed (~45 mph for golden eagle)
		this.minSpeed = 5;        // Stall speed - below this, wings can't generate lift
		this.maxDiveSpeed = 120;  // Terminal velocity in full tuck dive (~150+ mph)
		this.throttle = 0.3;      // Wing effort (0 = gliding, 1 = full power flapping)

		// Wing aerodynamics
		this.wingArea = 0.65;        // Wing area factor (golden eagle ~0.65 m²)
		this.liftCoefficient = 1.8;  // Lift coefficient at optimal angle of attack
		this.dragCoefficient = 0.02; // Parasitic drag (streamlined body)
		this.inducedDragFactor = 0.04; // Induced drag from lift generation
		this.aspectRatio = 7.0;      // Wing aspect ratio (wingspan²/area) - eagles ~7

		// Thrust from flapping
		this.flapPower = 18.0;    // Thrust force from full flapping effort
		this.glideDrag = 0.005;   // Very low drag when gliding (wings spread)

		// Gravity and environment
		this.gravity = 9.8;
		this.airDensity = 1.225;  // kg/m³ at sea level (decreases with altitude)

		// Thermal system
		this.thermalLift = 0;        // Current thermal lift force
		this.thermalStrength = 0;    // 0-1 thermal intensity at current position
		this.thermalTimer = 0;       // Timer for thermal variation
		this.inThermal = false;

		// Glide state
		this.isGliding = false;      // Wings spread, no flapping
		this.glideRatio = 20;        // Eagles can glide ~20:1 (20m forward per 1m drop)
		this.verticalSpeed = 0;      // Track vertical velocity separately

		// Orientation
		this.pitch = 0;
		this.roll = 0;
		this.heading = 0;

		// Control rates - eagles are more agile than jets but smoother
		this.pitchRate = 2.2;
		this.rollRate = 3.5;
		this.yawRate = 1.2;

		// Power dive (tuck wings)
		this.isBoosting = false;
		this.boostTimeRemaining = 0;
		this.boostDuration = 4.0;     // Longer dive duration
		this.boostMultiplier = 2.5;   // Speed multiplier in dive
		this.boostRotations = 0;      // Eagles don't barrel roll in dives
		this.boostPressed = false;

		// Turbo boost - supernatural speed for cross-territory travel
		// 400 knots = ~206 m/s. In game units, we map this to speed 400
		this.isTurbo = false;
		this.turboSpeed = 400;        // 400 knots equivalent
		this.turboPressed = false;
		this.turboWindup = 0;         // 0-1 ramp-up factor
		this.turboTrailTimer = 0;

		// Wing animation state
		this.flapPhase = 0;           // Current flap cycle phase (0-2π)
		this.flapFrequency = 3.0;     // Flaps per second at full effort
		this.wingSpread = 1.0;        // 1.0 = fully spread (gliding), 0.0 = tucked

		this.quaternion = new THREE.Quaternion();
	}

	boost() {
		if (this.boostTimeRemaining <= 0) {
			this.isBoosting = true;
			this.boostTimeRemaining = this.boostDuration;
			this.wingSpread = 0.2; // Tuck wings for dive
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
		this.isGliding = false;
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
	 * Calculate air density at altitude (decreases ~12% per 1000m)
	 */
	getAirDensity(altitude) {
		const altMeters = altitude * 0.3048; // feet to meters
		return this.airDensity * Math.exp(-altMeters / 8500);
	}

	/**
	 * Calculate lift force from wings based on speed and angle of attack
	 */
	calculateLift(speed, pitchDeg, density) {
		// Angle of attack approximation from pitch
		const aoa = Math.max(-15, Math.min(20, -pitchDeg)); // Negative pitch = positive AoA for lift
		const aoaRad = THREE.MathUtils.degToRad(aoa);

		// Lift coefficient varies with angle of attack (simplified)
		// Peak lift around 12-15° AoA, stall above ~18°
		let cl;
		if (aoa < -5) {
			cl = 0; // Negative lift regime
		} else if (aoa < 15) {
			cl = this.liftCoefficient * Math.sin(aoaRad * 3.5) * 0.8;
		} else {
			// Stall - lift drops sharply
			cl = this.liftCoefficient * 0.6 * (1 - (aoa - 15) / 10);
		}

		// Lift = 0.5 * density * v² * wingArea * Cl * wingSpread
		const lift = 0.5 * density * speed * speed * this.wingArea * Math.max(0, cl) * this.wingSpread;
		return lift;
	}

	/**
	 * Calculate drag (parasitic + induced from lift)
	 */
	calculateDrag(speed, density, isGliding) {
		// Parasitic drag - always present, increases with speed²
		const cd = isGliding ? this.glideDrag : this.dragCoefficient;
		const parasitic = 0.5 * density * speed * speed * this.wingArea * cd;

		// Induced drag - cost of generating lift (less for high aspect ratio wings)
		const induced = this.inducedDragFactor * density * speed * this.wingArea / (Math.PI * this.aspectRatio);

		// Wing-tucked dive has much less drag
		if (this.isTurbo || this.turboWindup > 0.1) {
			return parasitic * 0.05; // Supernatural turbo - almost no drag
		}
		if (this.isBoosting) {
			return parasitic * 0.3; // Streamlined tuck
		}

		return parasitic + induced;
	}

	/**
	 * Simulate thermal updrafts based on position and time
	 */
	updateThermals(dt, altitude) {
		this.thermalTimer += dt;

		// Thermals are stronger at lower altitudes over sun-heated terrain
		// and weaker at high altitude. Big Bear Valley has good thermals over
		// sun-facing slopes and open areas
		const altFeet = altitude;
		const altFactor = Math.max(0, 1.0 - (altFeet - 2000) / 15000); // Weaker above 17000ft

		// Simulate thermal patches using overlapping sine waves
		const t = this.thermalTimer;
		const thermalPulse = (
			Math.sin(t * 0.3) * 0.4 +
			Math.sin(t * 0.7 + 1.5) * 0.3 +
			Math.sin(t * 1.2 + 3.0) * 0.3
		);

		// Thermal strength: 0 to ~3 m/s vertical lift
		this.thermalStrength = Math.max(0, thermalPulse) * altFactor;
		this.inThermal = this.thermalStrength > 0.15;

		// Thermal lift force (stronger when wings are spread and circling)
		const bankBonus = Math.abs(this.roll) > 15 && Math.abs(this.roll) < 45 ? 1.5 : 1.0;
		this.thermalLift = this.thermalStrength * 3.0 * bankBonus * this.wingSpread;
	}

	update(input, dt) {
		// --- Boost (power dive) ---
		if (this.boostTimeRemaining > 0) {
			this.boostTimeRemaining -= dt;
			if (this.boostTimeRemaining <= 0) {
				this.isBoosting = false;
				this.boostTimeRemaining = 0;
				this.wingSpread = 1.0; // Spread wings again
			}
		}

		if (input.boost) {
			if (!this.boostPressed && !this.isBoosting && !this.isTurbo) {
				this.boost();
			}
			this.boostPressed = true;
		} else {
			this.boostPressed = false;
		}

		// --- Turbo boost (Shift key / mobile turbo button) ---
		if (input.turbo) {
			if (!this.turboPressed) {
				this.isTurbo = !this.isTurbo; // Toggle on/off
				if (this.isTurbo) {
					this.isBoosting = false;
					this.boostTimeRemaining = 0;
				}
			}
			this.turboPressed = true;
		} else {
			this.turboPressed = false;
		}

		// Turbo windup ramp (takes ~1.5s to reach full turbo speed)
		if (this.isTurbo) {
			this.turboWindup = Math.min(1.0, this.turboWindup + dt * 0.7);
		} else {
			this.turboWindup = Math.max(0, this.turboWindup - dt * 1.5);
		}

		// --- Throttle as wing effort ---
		this.throttle = input.throttle;

		// Determine gliding state: low throttle = gliding
		this.isGliding = this.throttle < 0.15 && !this.isBoosting && !this.isTurbo;

		// Wing spread: 1.0 when gliding/soaring, decreases during power flapping
		if (this.isTurbo || this.turboWindup > 0.1) {
			// Turbo: wings swept back like a peregrine falcon stoop
			this.wingSpread += (0.15 - this.wingSpread) * dt * 6;
		} else if (this.isBoosting) {
			this.wingSpread += (0.2 - this.wingSpread) * dt * 5; // Tuck for dive
		} else if (this.isGliding) {
			this.wingSpread += (1.0 - this.wingSpread) * dt * 3; // Full spread for glide
		} else {
			// Flapping: wings oscillate but average ~0.8 spread
			this.flapPhase += dt * this.flapFrequency * this.throttle * Math.PI * 2;
			this.wingSpread = 0.7 + Math.sin(this.flapPhase) * 0.15;
		}

		// --- Calculate forces ---
		const density = this.getAirDensity(0); // Simplified, could use state.alt

		// Thrust from flapping
		let thrust = 0;
		if (!this.isGliding && !this.isBoosting) {
			thrust = this.flapPower * this.throttle;
		}

		// Drag
		const drag = this.calculateDrag(this.speed, density, this.isGliding);

		// Net horizontal acceleration
		let accel = thrust - drag;

		// Gravity component along flight path
		const pitchRad = THREE.MathUtils.degToRad(this.pitch);
		const gravityAlongPath = this.gravity * Math.sin(pitchRad);
		// Diving adds speed, climbing costs speed
		accel += gravityAlongPath;

		// Speed limits
		let maxSpd = this.isBoosting ? this.maxDiveSpeed : this.maxSpeed;
		if (this.pitch < -20) {
			// Diving allows higher speed even without boost
			maxSpd = this.maxSpeed + (this.maxDiveSpeed - this.maxSpeed) * Math.min(1, Math.abs(this.pitch) / 60);
		}

		// Turbo override - 400 knots
		if (this.isTurbo || this.turboWindup > 0.01) {
			maxSpd = this.turboSpeed;
		}

		// Update speed
		this.speed += accel * dt;
		this.speed = Math.max(this.minSpeed, Math.min(maxSpd, this.speed));

		// Boost override
		if (this.isBoosting) {
			const targetSpeed = this.maxDiveSpeed * 0.8;
			this.speed += (targetSpeed - this.speed) * dt * 3;
		}

		// Turbo speed override - ramp to 400 knots with easing
		if (this.isTurbo || this.turboWindup > 0.01) {
			const eased = this.turboWindup * this.turboWindup * (3 - 2 * this.turboWindup); // smoothstep
			const targetTurbo = this.turboSpeed * eased;
			this.speed += (targetTurbo - this.speed) * dt * 2.5;
		}

		// --- Vertical speed from thermals and lift ---
		this.updateThermals(dt, 0);

		// Calculate lift
		const lift = this.calculateLift(this.speed, this.pitch, density);
		const weightForce = this.gravity; // Simplified unit mass

		// Vertical balance: lift + thermals - gravity
		const netVertical = (lift - weightForce + this.thermalLift) * 0.1; // Scale factor
		this.verticalSpeed += (netVertical - this.verticalSpeed) * dt * 2;

		// --- Control responsiveness ---
		// Eagles are more maneuverable at moderate speeds
		const speedNorm = this.speed / this.maxSpeed;
		const controlEffectiveness = speedNorm > 0.3
			? Math.min(1.2, 0.5 + speedNorm * 0.7)  // Good control at moderate+ speed
			: speedNorm / 0.3 * 0.5;                  // Poor control at very low speed

		// Stall behavior: if too slow, eagle drops and banks
		if (this.speed <= this.minSpeed * 1.2 && !this.isBoosting) {
			// Gentle nose-down tendency when slow (eagle naturally dives to regain speed)
			this.pitch = THREE.MathUtils.lerp(this.pitch, Math.min(this.pitch, -5), dt * 0.5);
		}

		const localPitch = input.pitch * this.pitchRate * dt * controlEffectiveness;
		const localRoll = input.roll * this.rollRate * dt * controlEffectiveness;
		const localYaw = input.yaw * this.yawRate * dt * controlEffectiveness;

		const qPitch = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), localPitch);
		const qRoll = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 0, 1), localRoll);
		const qYaw = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), localYaw);

		this.quaternion.multiply(qYaw);
		this.quaternion.multiply(qPitch);
		this.quaternion.multiply(qRoll);

		this.quaternion.normalize();

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
			// Eagle-specific state
			isGliding: this.isGliding,
			wingSpread: this.wingSpread,
			thermalStrength: this.thermalStrength,
			inThermal: this.inThermal,
			verticalSpeed: this.verticalSpeed,
			flapPhase: this.flapPhase,
			liftForce: this.calculateLift(this.speed, this.pitch, density),
			isTurbo: this.isTurbo,
			turboWindup: this.turboWindup,
		};
	}
}
