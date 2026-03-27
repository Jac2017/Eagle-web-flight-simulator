import * as THREE from 'three';

/**
 * Procedural Bald Eagle - anatomically detailed with multi-segment wings.
 *
 * Real bald eagle reference:
 * - Body length: ~80cm, Wingspan: ~2m, Weight: ~4-6kg
 * - Dark chocolate-brown body plumage
 * - Bright white head and tail
 * - Large yellow-orange hooked beak
 * - Golden-yellow eyes with fierce brow ridge
 * - Yellow scaled feet with black talons
 */

export function createEagleModel() {
	const eagle = new THREE.Group();

	// === MATERIALS (PBR for realistic look) ===
	const bodyMat = new THREE.MeshStandardMaterial({ color: 0x1E0F04, roughness: 0.85, metalness: 0.0, flatShading: true });
	const wingTopMat = new THREE.MeshStandardMaterial({ color: 0x150800, roughness: 0.80, flatShading: true, side: THREE.DoubleSide });
	const wingUnderMat = new THREE.MeshStandardMaterial({ color: 0x2A1A0A, roughness: 0.85, flatShading: true, side: THREE.DoubleSide });
	const underMat = new THREE.MeshStandardMaterial({ color: 0x3B2515, roughness: 0.85, flatShading: true });
	const headMat = new THREE.MeshStandardMaterial({ color: 0xF8F4EC, roughness: 0.55, flatShading: true });
	const beakMat = new THREE.MeshStandardMaterial({ color: 0xE8A000, roughness: 0.35, metalness: 0.1, flatShading: true });
	const eyeMat = new THREE.MeshStandardMaterial({ color: 0xCCA000, roughness: 0.3, metalness: 0.2 });
	const pupilMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
	const tailMat = new THREE.MeshStandardMaterial({ color: 0xF0EDE0, roughness: 0.65, flatShading: true });
	const talonMat = new THREE.MeshStandardMaterial({ color: 0xE8A000, roughness: 0.5, flatShading: true });
	const featherTipMat = new THREE.MeshStandardMaterial({ color: 0x0A0400, roughness: 0.85, flatShading: true, side: THREE.DoubleSide });
	const neckMat = new THREE.MeshStandardMaterial({ color: 0xE8E0D0, roughness: 0.6, flatShading: true });

	// === BODY - streamlined teardrop shape ===
	const bodyGeo = new THREE.SphereGeometry(1, 10, 8);
	bodyGeo.scale(0.085, 0.06, 0.22);
	const body = new THREE.Mesh(bodyGeo, bodyMat);
	eagle.add(body);

	// Keel/breast
	const keelGeo = new THREE.SphereGeometry(1, 8, 6);
	keelGeo.scale(0.07, 0.055, 0.15);
	const keel = new THREE.Mesh(keelGeo, underMat);
	keel.position.set(0, -0.018, 0.03);
	eagle.add(keel);

	// Back ridge (slightly raised spine area)
	const spineGeo = new THREE.BoxGeometry(0.03, 0.008, 0.16);
	const spine = new THREE.Mesh(spineGeo, bodyMat);
	spine.position.set(0, 0.04, -0.02);
	eagle.add(spine);

	// === NECK (transition from brown body to white head) ===
	const neckGeo = new THREE.CylinderGeometry(0.028, 0.04, 0.05, 6);
	const neck = new THREE.Mesh(neckGeo, neckMat);
	neck.position.set(0, 0.025, 0.17);
	neck.rotation.x = -0.25;
	eagle.add(neck);

	// Neck feather ruff
	const ruffGeo = new THREE.SphereGeometry(0.032, 6, 5);
	ruffGeo.scale(1, 0.7, 1);
	const ruff = new THREE.Mesh(ruffGeo, headMat);
	ruff.position.set(0, 0.015, 0.16);
	eagle.add(ruff);

	// === HEAD ===
	const headGeo = new THREE.SphereGeometry(0.042, 8, 7);
	headGeo.scale(1.0, 0.95, 1.1);
	const head = new THREE.Mesh(headGeo, headMat);
	head.position.set(0, 0.045, 0.21);
	eagle.add(head);

	// Crown (top of head slightly raised)
	const crownGeo = new THREE.SphereGeometry(0.025, 6, 5);
	crownGeo.scale(1.2, 0.5, 1.0);
	const crown = new THREE.Mesh(crownGeo, headMat);
	crown.position.set(0, 0.068, 0.21);
	eagle.add(crown);

	// Brow ridge (gives the fierce eagle stare)
	const browGeo = new THREE.BoxGeometry(0.055, 0.010, 0.022);
	const brow = new THREE.Mesh(browGeo, new THREE.MeshStandardMaterial({ color: 0xEAE6D8, roughness: 0.7, flatShading: true }));
	brow.position.set(0, 0.062, 0.225);
	eagle.add(brow);

	// === BEAK (hooked raptor beak) ===
	// Upper mandible - curves down
	const upperBeakGeo = new THREE.ConeGeometry(0.013, 0.05, 5);
	const upperBeak = new THREE.Mesh(upperBeakGeo, beakMat);
	upperBeak.position.set(0, 0.04, 0.255);
	upperBeak.rotation.x = Math.PI * 0.42;
	eagle.add(upperBeak);

	// Hook tip
	const hookGeo = new THREE.SphereGeometry(0.006, 4, 3);
	hookGeo.scale(0.8, 1.2, 1);
	const hook = new THREE.Mesh(hookGeo, beakMat);
	hook.position.set(0, 0.028, 0.268);
	eagle.add(hook);

	// Lower mandible
	const lowerBeakGeo = new THREE.ConeGeometry(0.007, 0.025, 4);
	const lowerBeak = new THREE.Mesh(lowerBeakGeo, beakMat);
	lowerBeak.position.set(0, 0.030, 0.25);
	lowerBeak.rotation.x = Math.PI * 0.52;
	eagle.add(lowerBeak);

	// Cere (fleshy area at beak base)
	const cereGeo = new THREE.SphereGeometry(0.009, 5, 4);
	const cere = new THREE.Mesh(cereGeo, beakMat);
	cere.position.set(0, 0.048, 0.235);
	eagle.add(cere);

	// === EYES ===
	for (const side of [-1, 1]) {
		// Eye socket indent (darker)
		const socketGeo = new THREE.SphereGeometry(0.013, 6, 5);
		const socket = new THREE.Mesh(socketGeo, new THREE.MeshStandardMaterial({ color: 0x2A2010, roughness: 0.9 }));
		socket.position.set(side * 0.029, 0.052, 0.226);
		eagle.add(socket);

		// Golden iris
		const irisGeo = new THREE.SphereGeometry(0.010, 6, 5);
		const iris = new THREE.Mesh(irisGeo, eyeMat);
		iris.position.set(side * 0.030, 0.053, 0.228);
		eagle.add(iris);

		// Black pupil
		const pupilGeo = new THREE.SphereGeometry(0.005, 5, 4);
		const pupil = new THREE.Mesh(pupilGeo, pupilMat);
		pupil.position.set(side * 0.033, 0.053, 0.233);
		eagle.add(pupil);
	}

	// === WINGS - multi-segment with feather detail ===
	function buildWing(isLeft) {
		const sign = isLeft ? 1 : -1;
		const pivot = new THREE.Group();
		pivot.position.set(sign * 0.065, 0.015, 0.01);

		// Shoulder/scapular area (connects to body)
		const shoulderGeo = new THREE.BoxGeometry(0.12, 0.015, 0.10);
		shoulderGeo.translate(sign * 0.06, 0, 0.01);
		const shoulder = new THREE.Mesh(shoulderGeo, wingTopMat);
		pivot.add(shoulder);

		// Inner wing (secondaries) - broader chord
		const innerGeo = new THREE.BoxGeometry(0.32, 0.010, 0.17);
		innerGeo.translate(sign * 0.28, -0.002, 0);
		const inner = new THREE.Mesh(innerGeo, wingTopMat);
		pivot.add(inner);

		// Wing underside coverts
		const underCovGeo = new THREE.BoxGeometry(0.30, 0.004, 0.13);
		underCovGeo.translate(sign * 0.27, -0.007, 0);
		const underCov = new THREE.Mesh(underCovGeo, wingUnderMat);
		pivot.add(underCov);

		// Upper covert feather layers
		for (let c = 0; c < 3; c++) {
			const covGeo = new THREE.BoxGeometry(0.25 - c * 0.04, 0.004, 0.025);
			covGeo.translate(sign * (0.18 + c * 0.04), 0, 0);
			const cov = new THREE.Mesh(covGeo, bodyMat);
			cov.position.set(0, 0.006 + c * 0.002, -0.04 + c * 0.025);
			pivot.add(cov);
		}

		// Elbow pivot (for folding)
		const elbowPivot = new THREE.Group();
		elbowPivot.position.set(sign * 0.44, 0, 0);

		// Outer wing (primaries) - narrower, longer
		const outerGeo = new THREE.BoxGeometry(0.42, 0.008, 0.11);
		outerGeo.translate(sign * 0.21, 0, 0);
		const outer = new THREE.Mesh(outerGeo, wingTopMat);
		elbowPivot.add(outer);

		// Outer underside
		const outerUnderGeo = new THREE.BoxGeometry(0.40, 0.003, 0.09);
		outerUnderGeo.translate(sign * 0.20, -0.005, 0);
		const outerUnder = new THREE.Mesh(outerUnderGeo, wingUnderMat);
		elbowPivot.add(outerUnder);

		// Primary feather "fingers" - 5 separated tips
		for (let f = 0; f < 5; f++) {
			const fLen = 0.10 - f * 0.015;
			const fGeo = new THREE.BoxGeometry(fLen, 0.004, 0.020);
			fGeo.translate(sign * fLen / 2, 0, 0);
			const feather = new THREE.Mesh(fGeo, featherTipMat);
			feather.position.set(sign * 0.40, 0, -0.035 + f * 0.022);
			feather.rotation.y = sign * (f - 2) * 0.05;
			elbowPivot.add(feather);
		}

		pivot.add(elbowPivot);
		return { pivot, elbowPivot };
	}

	const leftWing = buildWing(true);
	const rightWing = buildWing(false);
	eagle.add(leftWing.pivot);
	eagle.add(rightWing.pivot);

	// === TAIL - fan of white feathers ===
	const tailPivot = new THREE.Group();
	tailPivot.position.set(0, 0.008, -0.20);

	// 9 tail feathers in a fan
	for (let t = 0; t < 9; t++) {
		const angle = (t - 4) * 0.065;
		const tGeo = new THREE.BoxGeometry(0.028, 0.005, 0.14);
		tGeo.translate(0, 0, -0.07);
		const feather = new THREE.Mesh(tGeo, tailMat);
		feather.rotation.y = angle;
		feather.position.x = Math.sin(angle) * 0.015;
		tailPivot.add(feather);
	}

	// Upper tail coverts (dark, cover base of tail)
	const utcGeo = new THREE.BoxGeometry(0.08, 0.020, 0.07);
	const utc = new THREE.Mesh(utcGeo, bodyMat);
	utc.position.set(0, 0.005, 0.02);
	tailPivot.add(utc);

	// Under tail coverts (white)
	const ltcGeo = new THREE.BoxGeometry(0.06, 0.012, 0.05);
	const ltc = new THREE.Mesh(ltcGeo, tailMat);
	ltc.position.set(0, -0.008, 0.01);
	tailPivot.add(ltc);

	eagle.add(tailPivot);

	// === LEGS & TALONS ===
	for (const side of [-1, 1]) {
		// Feathered thigh
		const thighGeo = new THREE.CylinderGeometry(0.014, 0.010, 0.045, 5);
		const thigh = new THREE.Mesh(thighGeo, bodyMat);
		thigh.position.set(side * 0.025, -0.045, -0.05);
		thigh.rotation.x = 0.5;
		eagle.add(thigh);

		// Tarsus (yellow scaled)
		const tarsGeo = new THREE.CylinderGeometry(0.005, 0.006, 0.045, 5);
		const tars = new THREE.Mesh(tarsGeo, talonMat);
		tars.position.set(side * 0.025, -0.078, -0.06);
		eagle.add(tars);

		// Toes with curved talons
		for (let toe = 0; toe < 4; toe++) {
			const tAngle = (toe - 1.5) * 0.45;
			const toeGeo = new THREE.CylinderGeometry(0.003, 0.001, 0.022, 3);
			const toeMesh = new THREE.Mesh(toeGeo, toe < 3 ? talonMat : new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.5 }));
			toeMesh.position.set(
				side * 0.025 + Math.sin(tAngle) * 0.012,
				-0.098,
				-0.06 + Math.cos(tAngle) * 0.010
			);
			toeMesh.rotation.x = 0.7;
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
	};

	return eagle;
}

/**
 * Animate the eagle based on flight state.
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
	const pitch = state.pitch || 0;

	const lerp = (a, b, t) => a + (b - a) * Math.min(1, t);

	if (isTurbo) {
		lw.rotation.z = lerp(lw.rotation.z, -0.7, dt * 8);
		rw.rotation.z = lerp(rw.rotation.z, 0.7, dt * 8);
		le.rotation.z = lerp(le.rotation.z, -0.3, dt * 6);
		re.rotation.z = lerp(re.rotation.z, 0.3, dt * 6);
		if (tail) tail.rotation.x = lerp(tail.rotation.x, -0.1, dt * 5);
	} else if (isBoosting) {
		lw.rotation.z = lerp(lw.rotation.z, -0.6, dt * 7);
		rw.rotation.z = lerp(rw.rotation.z, 0.6, dt * 7);
		le.rotation.z = lerp(le.rotation.z, -0.4, dt * 5);
		re.rotation.z = lerp(re.rotation.z, 0.4, dt * 5);
		if (tail) tail.rotation.x = lerp(tail.rotation.x, 0.15, dt * 4);
	} else if (isFlapping && flapStrength > 0) {
		d.flapPhase += dt * 8;
		const phase = d.flapPhase % (Math.PI * 2);

		// Powerful downstroke / lighter upstroke
		const mainAngle = Math.sin(phase) * 0.55 * flapStrength;
		const elbowAngle = Math.sin(phase + 0.3) * 0.2 * flapStrength;

		lw.rotation.z = mainAngle;
		rw.rotation.z = -mainAngle;
		le.rotation.z = elbowAngle;
		re.rotation.z = -elbowAngle;

		// Forward sweep on downstroke
		lw.rotation.y = Math.cos(phase) * 0.08 * flapStrength;
		rw.rotation.y = -Math.cos(phase) * 0.08 * flapStrength;

		if (tail) tail.rotation.x = Math.sin(phase + 1) * 0.05;
	} else if (isGliding) {
		const dihedral = 0.08 + Math.sin(performance.now() * 0.0005) * 0.02;
		lw.rotation.z = lerp(lw.rotation.z, dihedral, dt * 3);
		rw.rotation.z = lerp(rw.rotation.z, -dihedral, dt * 3);
		le.rotation.z = lerp(le.rotation.z, 0.02, dt * 3);
		re.rotation.z = lerp(re.rotation.z, -0.02, dt * 3);
		lw.rotation.y = lerp(lw.rotation.y, 0, dt * 2);
		rw.rotation.y = lerp(rw.rotation.y, 0, dt * 2);

		if (tail) tail.rotation.x = lerp(tail.rotation.x, pitch * 0.003, dt * 3);
		d.flapPhase = 0;
	} else {
		lw.rotation.z = lerp(lw.rotation.z, 0.05, dt * 4);
		rw.rotation.z = lerp(rw.rotation.z, -0.05, dt * 4);
		le.rotation.z = lerp(le.rotation.z, 0, dt * 4);
		re.rotation.z = lerp(re.rotation.z, 0, dt * 4);
		lw.rotation.y = lerp(lw.rotation.y, 0, dt * 3);
		rw.rotation.y = lerp(rw.rotation.y, 0, dt * 3);
	}
}
