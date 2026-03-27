import * as THREE from 'three';

/**
 * Procedural Bald Eagle - anatomically proportioned with multi-segment wings.
 *
 * Real bald eagle proportions:
 * - Body length: ~80cm nose to tail
 * - Wingspan: ~2m (6.5 ft)
 * - Weight: ~4-6 kg
 * - Wing chord: ~25cm
 */

export function createEagleModel() {
	const eagle = new THREE.Group();

	// === MATERIALS ===
	const bodyMat = new THREE.MeshStandardMaterial({ color: 0x1E0F04, roughness: 0.8, metalness: 0.0, flatShading: true });
	const underMat = new THREE.MeshStandardMaterial({ color: 0x3B2515, roughness: 0.85, flatShading: true });
	const wingTopMat = new THREE.MeshStandardMaterial({ color: 0x15080 , roughness: 0.75, flatShading: true, side: THREE.DoubleSide });
	const wingUnderMat = new THREE.MeshStandardMaterial({ color: 0x2A1A0A, roughness: 0.8, flatShading: true, side: THREE.DoubleSide });
	const headMat = new THREE.MeshStandardMaterial({ color: 0xF8F4EC, roughness: 0.6, flatShading: true });
	const beakMat = new THREE.MeshStandardMaterial({ color: 0xE8A000, roughness: 0.4, metalness: 0.1, flatShading: true });
	const eyeMat = new THREE.MeshStandardMaterial({ color: 0xCCA000, roughness: 0.3, metalness: 0.2 }); // Golden iris
	const pupilMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
	const tailMat = new THREE.MeshStandardMaterial({ color: 0xF0EDE0, roughness: 0.7, flatShading: true });
	const talonMat = new THREE.MeshStandardMaterial({ color: 0xE8A000, roughness: 0.5, flatShading: true });
	const featherTipMat = new THREE.MeshStandardMaterial({ color: 0x0A0400, roughness: 0.8, flatShading: true, side: THREE.DoubleSide });

	// === BODY - streamlined fuselage shape ===
	const bodyGeo = new THREE.SphereGeometry(1, 10, 8);
	bodyGeo.scale(0.08, 0.055, 0.20);
	const body = new THREE.Mesh(bodyGeo, bodyMat);
	eagle.add(body);

	// Keel/breast (lighter, rounder underside)
	const keelGeo = new THREE.SphereGeometry(1, 8, 6);
	keelGeo.scale(0.065, 0.05, 0.14);
	const keel = new THREE.Mesh(keelGeo, underMat);
	keel.position.set(0, -0.015, 0.04);
	eagle.add(keel);

	// Neck
	const neckGeo = new THREE.CylinderGeometry(0.03, 0.04, 0.06, 6);
	const neck = new THREE.Mesh(neckGeo, headMat);
	neck.position.set(0, 0.02, 0.17);
	neck.rotation.x = -0.3;
	eagle.add(neck);

	// === HEAD ===
	const headGeo = new THREE.SphereGeometry(0.04, 8, 7);
	headGeo.scale(1.0, 0.95, 1.15);
	const head = new THREE.Mesh(headGeo, headMat);
	head.position.set(0, 0.04, 0.20);
	eagle.add(head);

	// Brow ridge (fierce look)
	const browGeo = new THREE.BoxGeometry(0.06, 0.012, 0.025);
	const brow = new THREE.Mesh(browGeo, new THREE.MeshStandardMaterial({ color: 0xEAE6D8, roughness: 0.7, flatShading: true }));
	brow.position.set(0, 0.058, 0.215);
	eagle.add(brow);

	// Beak - upper and lower mandible
	const upperBeakGeo = new THREE.ConeGeometry(0.012, 0.055, 4);
	const upperBeak = new THREE.Mesh(upperBeakGeo, beakMat);
	upperBeak.position.set(0, 0.035, 0.25);
	upperBeak.rotation.x = Math.PI * 0.45;
	eagle.add(upperBeak);

	const lowerBeakGeo = new THREE.ConeGeometry(0.008, 0.03, 3);
	const lowerBeak = new THREE.Mesh(lowerBeakGeo, beakMat);
	lowerBeak.position.set(0, 0.025, 0.245);
	lowerBeak.rotation.x = Math.PI * 0.55;
	eagle.add(lowerBeak);

	// Cere (fleshy area at beak base)
	const cereGeo = new THREE.SphereGeometry(0.008, 5, 4);
	const cere = new THREE.Mesh(cereGeo, beakMat);
	cere.position.set(0, 0.042, 0.23);
	eagle.add(cere);

	// Eyes with golden iris
	for (const side of [-1, 1]) {
		const irisGeo = new THREE.SphereGeometry(0.009, 6, 5);
		const iris = new THREE.Mesh(irisGeo, eyeMat);
		iris.position.set(side * 0.028, 0.05, 0.225);
		eagle.add(iris);

		const pupilGeo = new THREE.SphereGeometry(0.005, 5, 4);
		const pupil = new THREE.Mesh(pupilGeo, pupilMat);
		pupil.position.set(side * 0.032, 0.05, 0.23);
		eagle.add(pupil);
	}

	// === WINGS - multi-segment with feather groups ===
	function buildWing(isLeft) {
		const sign = isLeft ? 1 : -1;
		const pivot = new THREE.Group();
		pivot.position.set(sign * 0.06, 0.01, 0.01);

		// Inner wing (humerus + secondaries) - wider, closer to body
		const innerGeo = new THREE.BoxGeometry(0.40, 0.010, 0.16);
		innerGeo.translate(sign * 0.20, 0, 0);
		const inner = new THREE.Mesh(innerGeo, wingTopMat);
		pivot.add(inner);

		// Outer elbow pivot (for more realistic fold)
		const elbowPivot = new THREE.Group();
		elbowPivot.position.set(sign * 0.40, 0, 0);

		// Outer wing (radius/ulna + primaries) - narrower, longer
		const outerGeo = new THREE.BoxGeometry(0.50, 0.008, 0.12);
		outerGeo.translate(sign * 0.25, 0, 0);
		const outer = new THREE.Mesh(outerGeo, wingTopMat);
		elbowPivot.add(outer);

		// Primary feather tips - separated "fingers"
		for (let f = 0; f < 5; f++) {
			const fLen = 0.08 + (4 - f) * 0.02;
			const fGeo = new THREE.BoxGeometry(fLen, 0.005, 0.022);
			fGeo.translate(sign * fLen / 2, 0, 0);
			const feather = new THREE.Mesh(fGeo, featherTipMat);
			feather.position.set(
				sign * 0.48,
				0,
				-0.04 + f * 0.025
			);
			feather.rotation.y = sign * (f - 2) * 0.06;
			elbowPivot.add(feather);
		}

		// Wing underside color strip
		const underGeo = new THREE.BoxGeometry(0.48, 0.003, 0.10);
		underGeo.translate(sign * 0.24, -0.005, 0);
		const under = new THREE.Mesh(underGeo, wingUnderMat);
		elbowPivot.add(under);

		pivot.add(elbowPivot);

		// Wing covert feathers (small overlapping layers on top)
		for (let c = 0; c < 3; c++) {
			const covGeo = new THREE.BoxGeometry(0.35 - c * 0.05, 0.004, 0.03);
			covGeo.translate(sign * (0.15 + c * 0.04), 0, 0);
			const cov = new THREE.Mesh(covGeo, bodyMat);
			cov.position.set(0, 0.006 + c * 0.003, -0.03 + c * 0.03);
			pivot.add(cov);
		}

		return { pivot, elbowPivot };
	}

	const leftWing = buildWing(true);
	const rightWing = buildWing(false);
	eagle.add(leftWing.pivot);
	eagle.add(rightWing.pivot);

	// === TAIL - fan of feathers ===
	const tailPivot = new THREE.Group();
	tailPivot.position.set(0, 0.005, -0.18);

	for (let t = 0; t < 7; t++) {
		const angle = (t - 3) * 0.08;
		const tGeo = new THREE.BoxGeometry(0.035, 0.005, 0.15);
		tGeo.translate(0, 0, -0.075);
		const feather = new THREE.Mesh(tGeo, tailMat);
		feather.rotation.y = angle;
		feather.position.x = Math.sin(angle) * 0.02;
		tailPivot.add(feather);
	}

	// Dark tail coverts
	const tCovGeo = new THREE.BoxGeometry(0.07, 0.02, 0.06);
	const tCov = new THREE.Mesh(tCovGeo, bodyMat);
	tCov.position.set(0, 0.005, 0.02);
	tailPivot.add(tCov);
	eagle.add(tailPivot);

	// === LEGS & TALONS (tucked during flight) ===
	for (const side of [-1, 1]) {
		// Thigh (feathered)
		const thighGeo = new THREE.CylinderGeometry(0.012, 0.008, 0.04, 5);
		const thigh = new THREE.Mesh(thighGeo, bodyMat);
		thigh.position.set(side * 0.025, -0.045, -0.04);
		thigh.rotation.x = 0.4;
		eagle.add(thigh);

		// Tarsus (yellow scaled leg)
		const tarsGeo = new THREE.CylinderGeometry(0.005, 0.006, 0.04, 4);
		const tars = new THREE.Mesh(tarsGeo, talonMat);
		tars.position.set(side * 0.025, -0.075, -0.05);
		eagle.add(tars);

		// Toes with talons
		for (let toe = 0; toe < 3; toe++) {
			const tAngle = (toe - 1) * 0.5;
			const toeGeo = new THREE.CylinderGeometry(0.003, 0.001, 0.025, 3);
			const toeMesh = new THREE.Mesh(toeGeo, talonMat);
			toeMesh.position.set(
				side * 0.025 + Math.sin(tAngle) * 0.01,
				-0.095,
				-0.05 + Math.cos(tAngle) * 0.008
			);
			toeMesh.rotation.x = 0.6;
			toeMesh.rotation.z = tAngle * 0.3;
			eagle.add(toeMesh);
		}
	}

	// Orient: face -Z (game forward)
	eagle.rotation.y = Math.PI;

	// Store animation references
	eagle.userData = {
		leftWing: leftWing.pivot,
		rightWing: rightWing.pivot,
		leftElbow: leftWing.elbowPivot,
		rightElbow: rightWing.elbowPivot,
		tailPivot,
		flapPhase: 0,
		flapActive: false,
		lastFlapStrength: 0,
	};

	return eagle;
}

/**
 * Animate the eagle based on flight state.
 * Called every frame from the game loop.
 */
export function updateEagleAnimation(eagleGroup, dt, state) {
	if (!eagleGroup || !eagleGroup.userData || !eagleGroup.userData.leftWing) return;

	const d = eagleGroup.userData;
	const lw = d.leftWing;
	const rw = d.rightWing;
	const le = d.leftElbow;
	const re = d.rightElbow;
	const tail = d.tailPivot;

	const isFlapping = state.isFlapping || false;
	const flapStrength = state.flapStrength || 0;
	const isGliding = state.isGliding || false;
	const isBoosting = state.isBoosting || false;
	const isTurbo = state.isTurbo || false;
	const speed = state.speed || 15;
	const pitch = state.pitch || 0;

	if (isTurbo) {
		// Swept back at high speed
		lw.rotation.z += (-0.7 - lw.rotation.z) * dt * 8;
		rw.rotation.z += (0.7 - rw.rotation.z) * dt * 8;
		le.rotation.z += (-0.3 - le.rotation.z) * dt * 6;
		re.rotation.z += (0.3 - re.rotation.z) * dt * 6;
		if (tail) tail.rotation.x += (-0.1 - tail.rotation.x) * dt * 5;
	} else if (isBoosting) {
		// Tucked dive
		lw.rotation.z += (-0.6 - lw.rotation.z) * dt * 7;
		rw.rotation.z += (0.6 - rw.rotation.z) * dt * 7;
		le.rotation.z += (-0.4 - le.rotation.z) * dt * 5;
		re.rotation.z += (0.4 - re.rotation.z) * dt * 5;
		if (tail) tail.rotation.x += (0.15 - tail.rotation.x) * dt * 4;
	} else if (isFlapping && flapStrength > 0) {
		// Active flapping - powerful downstroke/upstroke cycle
		d.flapPhase += dt * 8; // Fast flap cycle
		const phase = d.flapPhase % (Math.PI * 2);

		// Downstroke: wings sweep down powerfully
		// Upstroke: wings fold slightly inward and lift
		const mainAngle = Math.sin(phase) * 0.55 * flapStrength;
		const elbowAngle = Math.sin(phase + 0.3) * 0.2 * flapStrength;

		lw.rotation.z = mainAngle;
		rw.rotation.z = -mainAngle;
		le.rotation.z = elbowAngle;
		re.rotation.z = -elbowAngle;

		// Wings sweep forward on downstroke for thrust
		lw.rotation.y = Math.cos(phase) * 0.08 * flapStrength;
		rw.rotation.y = -Math.cos(phase) * 0.08 * flapStrength;

		// Body bobs slightly with each flap
		eagleGroup.position.y += Math.sin(phase * 2) * 0.002 * flapStrength;

		// Tail adjusts for balance
		if (tail) tail.rotation.x = Math.sin(phase + 1) * 0.05;

		d.lastFlapStrength = flapStrength;
	} else if (isGliding) {
		// Soaring - wings spread wide with slight dihedral
		const dihedral = 0.08 + Math.sin(performance.now() * 0.0005) * 0.02; // Gentle wobble
		lw.rotation.z += (dihedral - lw.rotation.z) * dt * 3;
		rw.rotation.z += (-dihedral - rw.rotation.z) * dt * 3;

		// Elbows slightly extended
		le.rotation.z += (0.02 - le.rotation.z) * dt * 3;
		re.rotation.z += (-0.02 - re.rotation.z) * dt * 3;

		// Neutral wing sweep
		lw.rotation.y += (0 - lw.rotation.y) * dt * 2;
		rw.rotation.y += (0 - rw.rotation.y) * dt * 2;

		// Tail acts as rudder/elevator
		if (tail) {
			tail.rotation.x += (pitch * 0.003 - tail.rotation.x) * dt * 3;
		}

		d.flapPhase = 0; // Reset for next flap
	} else {
		// Transitioning / idle - wings settling to glide position
		lw.rotation.z += (0.05 - lw.rotation.z) * dt * 4;
		rw.rotation.z += (-0.05 - rw.rotation.z) * dt * 4;
		le.rotation.z += (0 - le.rotation.z) * dt * 4;
		re.rotation.z += (0 - re.rotation.z) * dt * 4;
		lw.rotation.y += (0 - lw.rotation.y) * dt * 3;
		rw.rotation.y += (0 - rw.rotation.y) * dt * 3;
	}
}
