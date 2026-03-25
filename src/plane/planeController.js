export class PlaneController {
	constructor() {
		this.keys = {};
		this.prevKeys = {};
		window.addEventListener('keydown', (e) => this.keys[e.key.toLowerCase()] = true);
		window.addEventListener('keyup', (e) => this.keys[e.key.toLowerCase()] = false);

		this.mouseDragging = false;
		this.mouseDeltaX = 0;
		this.mouseDeltaY = 0;
		this.lastMouseX = 0;
		this.lastMouseY = 0;

		window.addEventListener('mousedown', (e) => {
			if (e.button === 0) {
				this.mouseDragging = true;
				this.lastMouseX = e.clientX;
				this.lastMouseY = e.clientY;
			}
		});

		window.addEventListener('mousemove', (e) => {
			if (this.mouseDragging) {
				this.mouseDeltaX += e.clientX - this.lastMouseX;
				this.mouseDeltaY += e.clientY - this.lastMouseY;
				this.lastMouseX = e.clientX;
				this.lastMouseY = e.clientY;
			}
		});

		window.addEventListener('mouseup', (e) => {
			if (e.button === 0) {
				this.mouseDragging = false;
			}
		});

		this.input = {
			throttle: 0,
			pitch: 0,
			roll: 0,
			yaw: 0,
			boost: false,
			turbo: false,
			cameraYaw: 0,
			cameraPitch: 0,
			isDragging: false,
			fire: false,
			fireFlare: false,
			weaponIndex: -1,
			toggleWeapon: false
		};

		this.sensitivity = 0.2;

		// Mobile / device orientation support
		this.isMobile = this.detectMobile();
		this.tiltEnabled = false;
		this.tiltPitch = 0;   // Device pitch (forward/back tilt)
		this.tiltRoll = 0;    // Device roll (left/right tilt)
		this.tiltCalibration = { pitch: 0, roll: 0 }; // Neutral position
		this.tiltSensitivity = 1.0;

		// Touch control state
		this.touchThrottle = 0;
		this.touchBoosting = false;
		this.touchTurbo = false;
		this.touchFiring = false;
		this.touchFlare = false;
		this.touchWeaponToggle = false;
		this.touchPrevWeaponToggle = false;

		// Touch camera (one-finger look around)
		this.touchCameraDragging = false;
		this.touchCameraDeltaX = 0;
		this.touchCameraDeltaY = 0;
		this.lastTouchX = 0;
		this.lastTouchY = 0;
		this.cameraFingerID = null;

		if (this.isMobile) {
			this.initMobileControls();
		}
	}

	detectMobile() {
		return /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
			|| ('ontouchstart' in window)
			|| (navigator.maxTouchPoints > 0);
	}

	async initMobileControls() {
		// Create touch controls overlay
		this.createTouchUI();

		// Request device orientation permission (required on iOS 13+)
		await this.requestOrientationPermission();

		// Listen for device orientation
		window.addEventListener('deviceorientation', (e) => {
			if (!this.tiltEnabled) return;

			// beta = pitch (-180 to 180, phone tilted forward/back)
			// gamma = roll (-90 to 90, phone tilted left/right)
			const rawPitch = e.beta || 0;
			const rawRoll = e.gamma || 0;

			// Apply calibration offset
			this.tiltPitch = rawPitch - this.tiltCalibration.pitch;
			this.tiltRoll = rawRoll - this.tiltCalibration.roll;
		}, true);

		// Touch events for camera look-around on the main viewport
		const cesiumContainer = document.getElementById('cesiumContainer');
		const threeContainer = document.getElementById('threeContainer');
		const target = threeContainer || cesiumContainer || document.body;

		target.addEventListener('touchstart', (e) => this.handleViewTouchStart(e), { passive: false });
		target.addEventListener('touchmove', (e) => this.handleViewTouchMove(e), { passive: false });
		target.addEventListener('touchend', (e) => this.handleViewTouchEnd(e), { passive: false });
	}

	async requestOrientationPermission() {
		if (typeof DeviceOrientationEvent !== 'undefined' &&
			typeof DeviceOrientationEvent.requestPermission === 'function') {
			try {
				const permission = await DeviceOrientationEvent.requestPermission();
				if (permission === 'granted') {
					this.tiltEnabled = true;
				}
			} catch (err) {
				console.warn('Device orientation permission denied:', err);
				this.tiltEnabled = false;
			}
		} else {
			// Android and older iOS don't need permission
			this.tiltEnabled = true;
		}
	}

	/**
	 * Calibrate the tilt to the current phone position as "neutral"
	 */
	calibrateTilt() {
		this.tiltCalibration.pitch = this.tiltPitch + this.tiltCalibration.pitch;
		this.tiltCalibration.roll = this.tiltRoll + this.tiltCalibration.roll;
	}

	createTouchUI() {
		// Create mobile controls container
		const container = document.createElement('div');
		container.id = 'mobile-controls';
		container.style.cssText = `
			position: fixed; top: 0; left: 0; width: 100%; height: 100%;
			pointer-events: none; z-index: 25; display: none;
		`;

		// --- Left side: Throttle slider ---
		const throttleArea = document.createElement('div');
		throttleArea.id = 'mobile-throttle';
		throttleArea.style.cssText = `
			position: absolute; left: 8px; top: 50%; transform: translateY(-50%);
			width: 44px; height: 200px; pointer-events: auto;
			background: rgba(0,0,0,0.4); border: 1px solid rgba(212,160,23,0.5);
			border-radius: 6px; display: flex; flex-direction: column;
			align-items: center; justify-content: flex-end;
			touch-action: none;
		`;

		const throttleFill = document.createElement('div');
		throttleFill.id = 'mobile-throttle-fill';
		throttleFill.style.cssText = `
			width: 100%; background: rgba(212,160,23,0.5);
			border-radius: 0 0 5px 5px; transition: height 0.05s;
			position: absolute; bottom: 0; height: 30%;
		`;
		throttleArea.appendChild(throttleFill);

		const throttleLabel = document.createElement('div');
		throttleLabel.style.cssText = `
			position: absolute; top: -18px; left: 0; width: 100%; text-align: center;
			font-size: 9px; color: #d4a017; pointer-events: none;
		`;
		throttleLabel.textContent = 'WING POWER';
		throttleArea.appendChild(throttleLabel);

		// Throttle touch handler
		let throttleTouchID = null;
		throttleArea.addEventListener('touchstart', (e) => {
			e.preventDefault();
			e.stopPropagation();
			const touch = e.changedTouches[0];
			throttleTouchID = touch.identifier;
			this.updateThrottleFromTouch(touch, throttleArea);
		}, { passive: false });

		throttleArea.addEventListener('touchmove', (e) => {
			e.preventDefault();
			e.stopPropagation();
			for (const touch of e.changedTouches) {
				if (touch.identifier === throttleTouchID) {
					this.updateThrottleFromTouch(touch, throttleArea);
				}
			}
		}, { passive: false });

		throttleArea.addEventListener('touchend', (e) => {
			for (const touch of e.changedTouches) {
				if (touch.identifier === throttleTouchID) {
					throttleTouchID = null;
				}
			}
		});

		// --- Right side: Action buttons ---
		const buttonsArea = document.createElement('div');
		buttonsArea.id = 'mobile-buttons';
		buttonsArea.style.cssText = `
			position: absolute; right: 8px; bottom: 40%;
			display: flex; flex-direction: column; gap: 8px;
			pointer-events: auto; align-items: center;
		`;

		const makeButton = (id, label, color, size = 52) => {
			const btn = document.createElement('div');
			btn.id = id;
			btn.style.cssText = `
				width: ${size}px; height: ${size}px; border-radius: 50%;
				background: ${color}; border: 2px solid rgba(255,255,255,0.3);
				display: flex; align-items: center; justify-content: center;
				font-size: 9px; color: #fff; text-align: center;
				user-select: none; touch-action: none;
				line-height: 1.1; font-weight: bold;
			`;
			btn.textContent = label;
			return btn;
		};

		const fireBtn = makeButton('mobile-fire', 'TALON', 'rgba(220,50,50,0.6)', 58);
		const turboBtn = makeButton('mobile-turbo', 'TURBO', 'rgba(255,140,0,0.6)', 52);
		const boostBtn = makeButton('mobile-boost', 'DIVE', 'rgba(50,120,220,0.6)', 48);
		const weaponBtn = makeButton('mobile-weapon', 'SWITCH', 'rgba(212,160,23,0.5)', 42);
		const flareBtn = makeButton('mobile-flare', 'SCREECH', 'rgba(100,200,100,0.5)', 42);
		const calibrateBtn = makeButton('mobile-calibrate', 'LEVEL', 'rgba(150,150,150,0.5)', 36);

		// Fire button - hold to fire
		fireBtn.addEventListener('touchstart', (e) => {
			e.preventDefault(); e.stopPropagation();
			this.touchFiring = true;
			fireBtn.style.background = 'rgba(255,80,80,0.8)';
		}, { passive: false });
		fireBtn.addEventListener('touchend', (e) => {
			this.touchFiring = false;
			fireBtn.style.background = 'rgba(220,50,50,0.6)';
		});

		// Turbo button - toggle 400 knot travel mode
		turboBtn.addEventListener('touchstart', (e) => {
			e.preventDefault(); e.stopPropagation();
			this.touchTurbo = true;
			turboBtn.style.background = this.touchTurbo ? 'rgba(255,180,0,0.9)' : 'rgba(255,140,0,0.6)';
			setTimeout(() => { turboBtn.style.background = 'rgba(255,140,0,0.6)'; }, 200);
		}, { passive: false });

		// Boost button - tap to dive
		boostBtn.addEventListener('touchstart', (e) => {
			e.preventDefault(); e.stopPropagation();
			this.touchBoosting = true;
			boostBtn.style.background = 'rgba(80,160,255,0.8)';
		}, { passive: false });
		boostBtn.addEventListener('touchend', (e) => {
			this.touchBoosting = false;
			boostBtn.style.background = 'rgba(50,120,220,0.6)';
		});

		// Weapon switch
		weaponBtn.addEventListener('touchstart', (e) => {
			e.preventDefault(); e.stopPropagation();
			this.touchWeaponToggle = true;
			weaponBtn.style.background = 'rgba(212,160,23,0.8)';
			setTimeout(() => { weaponBtn.style.background = 'rgba(212,160,23,0.5)'; }, 200);
		}, { passive: false });

		// Flare/screech
		flareBtn.addEventListener('touchstart', (e) => {
			e.preventDefault(); e.stopPropagation();
			this.touchFlare = true;
			flareBtn.style.background = 'rgba(140,240,140,0.8)';
		}, { passive: false });
		flareBtn.addEventListener('touchend', (e) => {
			this.touchFlare = false;
			flareBtn.style.background = 'rgba(100,200,100,0.5)';
		});

		// Calibrate tilt
		calibrateBtn.addEventListener('touchstart', (e) => {
			e.preventDefault(); e.stopPropagation();
			this.calibrateTilt();
			calibrateBtn.style.background = 'rgba(200,200,200,0.8)';
			setTimeout(() => { calibrateBtn.style.background = 'rgba(150,150,150,0.5)'; }, 300);
		}, { passive: false });

		buttonsArea.appendChild(fireBtn);
		buttonsArea.appendChild(turboBtn);
		buttonsArea.appendChild(boostBtn);
		buttonsArea.appendChild(weaponBtn);
		buttonsArea.appendChild(flareBtn);
		buttonsArea.appendChild(calibrateBtn);

		// --- Pause button (top right) ---
		const pauseBtn = document.createElement('div');
		pauseBtn.id = 'mobile-pause';
		pauseBtn.style.cssText = `
			position: absolute; top: 8px; right: 8px; width: 36px; height: 36px;
			background: rgba(0,0,0,0.5); border: 1px solid rgba(212,160,23,0.5);
			border-radius: 4px; display: flex; align-items: center; justify-content: center;
			font-size: 18px; color: #d4a017; pointer-events: auto;
			touch-action: none; user-select: none;
		`;
		pauseBtn.textContent = '⏸';
		pauseBtn.addEventListener('touchstart', (e) => {
			e.preventDefault(); e.stopPropagation();
			// Simulate pressing Escape
			window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
			setTimeout(() => {
				window.dispatchEvent(new KeyboardEvent('keyup', { key: 'Escape' }));
			}, 100);
		}, { passive: false });

		container.appendChild(throttleArea);
		container.appendChild(buttonsArea);
		container.appendChild(pauseBtn);

		document.body.appendChild(container);
		this.mobileControlsContainer = container;
	}

	updateThrottleFromTouch(touch, throttleArea) {
		const rect = throttleArea.getBoundingClientRect();
		const y = touch.clientY - rect.top;
		const height = rect.height;
		// Top = full throttle, bottom = no throttle
		const throttle = 1.0 - Math.max(0, Math.min(1, y / height));
		this.touchThrottle = throttle;

		// Update visual
		const fill = document.getElementById('mobile-throttle-fill');
		if (fill) {
			fill.style.height = `${throttle * 100}%`;
		}
	}

	handleViewTouchStart(e) {
		// Only use touches not on mobile controls
		if (e.target.closest('#mobile-controls')) return;

		const touch = e.changedTouches[0];
		if (this.cameraFingerID === null) {
			this.cameraFingerID = touch.identifier;
			this.lastTouchX = touch.clientX;
			this.lastTouchY = touch.clientY;
			this.touchCameraDragging = true;
		}
	}

	handleViewTouchMove(e) {
		for (const touch of e.changedTouches) {
			if (touch.identifier === this.cameraFingerID) {
				this.touchCameraDeltaX += touch.clientX - this.lastTouchX;
				this.touchCameraDeltaY += touch.clientY - this.lastTouchY;
				this.lastTouchX = touch.clientX;
				this.lastTouchY = touch.clientY;
			}
		}
	}

	handleViewTouchEnd(e) {
		for (const touch of e.changedTouches) {
			if (touch.identifier === this.cameraFingerID) {
				this.cameraFingerID = null;
				this.touchCameraDragging = false;
			}
		}
	}

	/**
	 * Show/hide mobile controls
	 */
	setMobileVisible(visible) {
		if (this.mobileControlsContainer) {
			this.mobileControlsContainer.style.display = visible ? 'block' : 'none';
		}
	}

	setSensitivity(value) {
		this.sensitivity = value;
	}

	update() {
		// --- Desktop keyboard input ---
		this.input.boost = !!this.keys[' '];
		this.input.turbo = !!this.keys['shift'];
		this.input.isDragging = this.mouseDragging;

		this.input.fire = !!this.keys['enter'] || !!this.keys['f'];
		this.input.fireFlare = !!this.keys['v'];

		this.input.toggleWeapon = (!!this.keys['q'] && !this.prevKeys['q']);

		this.input.weaponIndex = -1;
		if (this.keys['1']) this.input.weaponIndex = 0;
		if (this.keys['2']) this.input.weaponIndex = 1;

		const accelRate = 0.5;
		if (this.keys['w']) {
			this.input.throttle = Math.min(1, this.input.throttle + accelRate * 0.016);
		} else if (this.keys['s']) {
			this.input.throttle = Math.max(0, this.input.throttle - accelRate * 0.016);
		}

		const pitchTarget = (this.keys['arrowup'] ? -1 : (this.keys['arrowdown'] ? 1 : 0));
		this.input.pitch = this.lerp(this.input.pitch, pitchTarget, 0.1);

		const rollTarget = (this.keys['arrowleft'] ? -1 : (this.keys['arrowright'] ? 1 : 0));
		this.input.roll = this.lerp(this.input.roll, rollTarget, 0.1);

		const yawTarget = (this.keys['a'] ? -1 : (this.keys['d'] ? 1 : 0));
		this.input.yaw = this.lerp(this.input.yaw, yawTarget, 0.1);

		// --- Mobile tilt input (overrides keyboard if active) ---
		if (this.isMobile && this.tiltEnabled) {
			// Map device tilt to flight controls
			// Roll: tilting phone left/right controls eagle roll
			const tiltDeadzone = 3; // degrees
			const tiltMaxAngle = 35; // degrees for full control

			let rollFromTilt = 0;
			if (Math.abs(this.tiltRoll) > tiltDeadzone) {
				rollFromTilt = Math.max(-1, Math.min(1,
					(this.tiltRoll - Math.sign(this.tiltRoll) * tiltDeadzone) /
					(tiltMaxAngle - tiltDeadzone)
				));
			}

			let pitchFromTilt = 0;
			if (Math.abs(this.tiltPitch) > tiltDeadzone) {
				pitchFromTilt = Math.max(-1, Math.min(1,
					(this.tiltPitch - Math.sign(this.tiltPitch) * tiltDeadzone) /
					(tiltMaxAngle - tiltDeadzone)
				));
			}

			// Apply tilt - smooth it
			this.input.roll = this.lerp(this.input.roll, rollFromTilt * this.tiltSensitivity, 0.15);
			this.input.pitch = this.lerp(this.input.pitch, pitchFromTilt * this.tiltSensitivity, 0.15);

			// Yaw from stronger roll (coordinated turn)
			if (Math.abs(rollFromTilt) > 0.3) {
				this.input.yaw = this.lerp(this.input.yaw, rollFromTilt * 0.4, 0.1);
			} else {
				this.input.yaw = this.lerp(this.input.yaw, 0, 0.1);
			}
		}

		// --- Mobile touch input (merge with keyboard) ---
		if (this.isMobile) {
			// Throttle from touch slider
			this.input.throttle = this.touchThrottle;

			// Boost from touch button
			this.input.boost = this.input.boost || this.touchBoosting;
			this.input.turbo = this.input.turbo || this.touchTurbo;

			// Fire from touch button
			this.input.fire = this.input.fire || this.touchFiring;

			// Flare from touch button
			this.input.fireFlare = this.input.fireFlare || this.touchFlare;

			// Weapon toggle from touch
			if (this.touchWeaponToggle && !this.touchPrevWeaponToggle) {
				this.input.toggleWeapon = true;
			}
			this.touchPrevWeaponToggle = this.touchWeaponToggle;
			this.touchWeaponToggle = false;

			// Camera from touch drag on viewport
			if (this.touchCameraDragging) {
				this.input.isDragging = true;
				this.input.cameraYaw += this.touchCameraDeltaX * this.sensitivity;
				this.input.cameraPitch -= this.touchCameraDeltaY * this.sensitivity;
				this.input.cameraPitch = Math.max(-85, Math.min(85, this.input.cameraPitch));
				this.touchCameraDeltaX = 0;
				this.touchCameraDeltaY = 0;
			}
		}

		// --- Desktop mouse camera ---
		if (this.mouseDragging) {
			this.input.cameraYaw += this.mouseDeltaX * this.sensitivity;
			this.input.cameraPitch -= this.mouseDeltaY * this.sensitivity;

			this.input.cameraPitch = Math.max(-85, Math.min(85, this.input.cameraPitch));

			this.mouseDeltaX = 0;
			this.mouseDeltaY = 0;
		} else if (!this.touchCameraDragging) {
			this.input.cameraYaw = this.lerp(this.input.cameraYaw, 0, 0.1);
			this.input.cameraPitch = this.lerp(this.input.cameraPitch, 0, 0.1);
		}

		this.prevKeys = { ...this.keys };

		return this.input;
	}

	reset() {
		this.input.cameraYaw = 0;
		this.input.cameraPitch = 0;
		this.mouseDragging = false;
		this.mouseDeltaX = 0;
		this.mouseDeltaY = 0;
		this.input.throttle = 0;
		this.input.pitch = 0;
		this.input.roll = 0;
		this.input.yaw = 0;
		this.touchThrottle = 0;
		this.touchBoosting = false;
		this.touchFiring = false;
		this.touchFlare = false;
	}

	lerp(start, end, amt) {
		return (1 - amt) * start + amt * end;
	}
}
