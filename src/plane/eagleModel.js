import * as THREE from 'three';

/**
 * Procedural Bald Eagle Model
 *
 * Built entirely from Three.js geometry - no external GLB needed.
 * Modeled after a golden/bald eagle in flight:
 * - Dark brown body and wings
 * - White head and tail (bald eagle)
 * - Yellow beak and talons
 * - ~2m wingspan when spread
 */

const BODY_COLOR = 0x2A1505;
const WING_COLOR = 0x1A0A00;
const WING_UNDER = 0x3B2010;
const HEAD_COLOR = 0xF5F0E8;
const BEAK_COLOR = 0xFFAA00;
const EYE_COLOR = 0x111111;
const TAIL_COLOR = 0xEEEEE0;
const TALON_COLOR = 0xFFAA00;

// Shared materials
const bodyMat = new THREE.MeshLambertMaterial({ color: BODY_COLOR, flatShading: true });
const wingMat = new THREE.MeshLambertMaterial({ color: WING_COLOR, flatShading: true, side: THREE.DoubleSide });
const wingUnderMat = new THREE.MeshLambertMaterial({ color: WING_UNDER, flatShading: true, side: THREE.DoubleSide });
const headMat = new THREE.MeshLambertMaterial({ color: HEAD_COLOR, flatShading: true });
const beakMat = new THREE.MeshLambertMaterial({ color: BEAK_COLOR, flatShading: true });
const eyeMat = new THREE.MeshBasicMaterial({ color: EYE_COLOR });
const tailMat = new THREE.MeshLambertMaterial({ color: TAIL_COLOR, flatShading: true, side: THREE.DoubleSide });
const talonMat = new THREE.MeshLambertMaterial({ color: TALON_COLOR, flatShading: true });

/**
 * Create a wing shape using a custom buffer geometry for a tapered, curved wing
 */
function createWingGeometry(isLeft) {
	const shape = new THREE.Shape();
	const sign = isLeft ? 1 : -1;

	// Wing profile: starts narrow at body, widens, tapers at tip
	shape.moveTo(0, 0);
	shape.lineTo(0, -0.08);           // trailing edge at body
	shape.quadraticCurveTo(0.4 * sign, -0.12, 0.9 * sign, -0.06); // trailing edge curve
	shape.lineTo(1.0 * sign, 0);      // wing tip
	shape.quadraticCurveTo(0.5 * sign, 0.04, 0, 0.03); // leading edge

	const extrudeSettings = {
		depth: 0.012,
		bevelEnabled: false,
	};

	const geo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
	return geo;
}

/**
 * Create the tail fan geometry
 */
function createTailGeometry() {
	const shape = new THREE.Shape();
	shape.moveTo(0, 0);
	shape.lineTo(-0.12, -0.25);
	shape.quadraticCurveTo(0, -0.3, 0.12, -0.25);
	shape.lineTo(0, 0);

	const geo = new THREE.ExtrudeGeometry(shape, { depth: 0.008, bevelEnabled: false });
	return geo;
}

/**
 * Create a complete procedural bald eagle model.
 * Returns { group, leftWing, rightWing } for animation.
 */
export function createEagleModel() {
	const eagle = new THREE.Group();

	// ===== BODY (elongated ellipsoid) =====
	const bodyGeo = new THREE.SphereGeometry(0.1, 8, 6);
	bodyGeo.scale(1.0, 0.6, 2.0); // Elongate along Z (forward)
	const body = new THREE.Mesh(bodyGeo, bodyMat);
	body.position.set(0, 0, 0);
	eagle.add(body);

	// ===== BREAST (slightly lighter, rounder front) =====
	const breastMat = new THREE.MeshLambertMaterial({ color: 0x3B2010, flatShading: true });
	const breastGeo = new THREE.SphereGeometry(0.07, 6, 5);
	breastGeo.scale(1.0, 0.8, 1.2);
	const breast = new THREE.Mesh(breastGeo, breastMat);
	breast.position.set(0, -0.02, 0.08);
	eagle.add(breast);

	// ===== HEAD (white sphere) =====
	const headGeo = new THREE.SphereGeometry(0.055, 7, 6);
	headGeo.scale(0.9, 0.9, 1.1);
	const head = new THREE.Mesh(headGeo, headMat);
	head.position.set(0, 0.04, 0.18);
	eagle.add(head);

	// ===== BEAK (yellow cone) =====
	const beakGeo = new THREE.ConeGeometry(0.015, 0.06, 4);
	const beak = new THREE.Mesh(beakGeo, beakMat);
	beak.position.set(0, 0.02, 0.25);
	beak.rotation.x = Math.PI / 2; // Point forward
	eagle.add(beak);

	// ===== EYES =====
	const eyeGeo = new THREE.SphereGeometry(0.008, 5, 4);
	const eyeL = new THREE.Mesh(eyeGeo, eyeMat);
	eyeL.position.set(-0.035, 0.055, 0.21);
	eagle.add(eyeL);
	const eyeR = new THREE.Mesh(eyeGeo, eyeMat);
	eyeR.position.set(0.035, 0.055, 0.21);
	eagle.add(eyeR);

	// Eye brow ridge (slight overhang gives fierce look)
	const browMat = new THREE.MeshLambertMaterial({ color: 0x1A0A00, flatShading: true });
	const browGeo = new THREE.BoxGeometry(0.015, 0.006, 0.02);
	const browL = new THREE.Mesh(browGeo, browMat);
	browL.position.set(-0.033, 0.062, 0.215);
	eagle.add(browL);
	const browR = new THREE.Mesh(browGeo, browMat);
	browR.position.set(0.033, 0.062, 0.215);
	eagle.add(browR);

	// ===== WINGS (pivot groups for animation) =====
	const leftWingPivot = new THREE.Group();
	leftWingPivot.position.set(0.05, 0.01, 0); // Attach point on body

	const leftWingGeo = createWingGeometry(true);
	const leftWing = new THREE.Mesh(leftWingGeo, wingMat);
	leftWing.rotation.x = -0.05; // Slight dihedral
	leftWingPivot.add(leftWing);

	// Wing feather tips (darker)
	const tipMatL = new THREE.MeshLambertMaterial({ color: 0x0A0500, flatShading: true });
	const tipGeoL = new THREE.BoxGeometry(0.15, 0.01, 0.04);
	const tipL = new THREE.Mesh(tipGeoL, tipMatL);
	tipL.position.set(0.85, -0.03, 0.006);
	leftWingPivot.add(tipL);

	eagle.add(leftWingPivot);

	const rightWingPivot = new THREE.Group();
	rightWingPivot.position.set(-0.05, 0.01, 0);

	const rightWingGeo = createWingGeometry(false);
	const rightWing = new THREE.Mesh(rightWingGeo, wingMat);
	rightWing.rotation.x = -0.05;
	rightWingPivot.add(rightWing);

	const tipGeoR = new THREE.BoxGeometry(0.15, 0.01, 0.04);
	const tipR = new THREE.Mesh(tipGeoR, tipMatL);
	tipR.position.set(-0.85, -0.03, 0.006);
	rightWingPivot.add(tipR);

	eagle.add(rightWingPivot);

	// ===== TAIL FEATHERS (white fan) =====
	const tailGeo = createTailGeometry();
	const tail = new THREE.Mesh(tailGeo, tailMat);
	tail.position.set(0, 0.01, -0.2);
	tail.rotation.x = 0.15; // Slight upward angle
	eagle.add(tail);

	// Dark tail coverts (where tail meets body)
	const covertGeo = new THREE.BoxGeometry(0.06, 0.025, 0.08);
	const covert = new THREE.Mesh(covertGeo, bodyMat);
	covert.position.set(0, 0, -0.15);
	eagle.add(covert);

	// ===== TALONS (tucked under body during flight) =====
	for (let side = -1; side <= 1; side += 2) {
		const legGeo = new THREE.CylinderGeometry(0.005, 0.005, 0.05, 4);
		const leg = new THREE.Mesh(legGeo, talonMat);
		leg.position.set(side * 0.03, -0.07, -0.03);
		eagle.add(leg);

		// Three toes
		for (let t = 0; t < 3; t++) {
			const toeAngle = (t - 1) * 0.4;
			const toeGeo = new THREE.CylinderGeometry(0.003, 0.002, 0.025, 3);
			const toe = new THREE.Mesh(toeGeo, talonMat);
			toe.position.set(
				side * 0.03 + Math.sin(toeAngle) * 0.01,
				-0.09,
				-0.03 + Math.cos(toeAngle) * 0.01
			);
			toe.rotation.x = 0.5;
			toe.rotation.z = toeAngle * 0.5;
			eagle.add(toe);
		}
	}

	// Orient eagle to face -Z (forward in Three.js convention for this game)
	eagle.rotation.y = Math.PI;

	// Store wing pivots for animation
	eagle.userData.leftWing = leftWingPivot;
	eagle.userData.rightWing = rightWingPivot;
	eagle.userData.flapTime = 0;

	return eagle;
}

/**
 * Animate the eagle's wings based on flight state.
 *
 * @param {THREE.Group} eagleGroup - The eagle model group
 * @param {number} dt - Delta time
 * @param {number} throttle - 0 to 1 wing effort
 * @param {boolean} isGliding - Wings spread flat
 * @param {boolean} isBoosting - Wings tucked
 * @param {boolean} isTurbo - Wings swept back
 */
export function updateEagleAnimation(eagleGroup, dt, throttle, isGliding, isBoosting, isTurbo) {
	if (!eagleGroup || !eagleGroup.userData.leftWing) return;

	const lw = eagleGroup.userData.leftWing;
	const rw = eagleGroup.userData.rightWing;

	if (isTurbo) {
		// Swept back - wings angled tightly
		const target = -0.6;
		lw.rotation.z = lw.rotation.z + (target - lw.rotation.z) * dt * 8;
		rw.rotation.z = rw.rotation.z + (-target - rw.rotation.z) * dt * 8;
		lw.rotation.x = lw.rotation.x + (0.3 - lw.rotation.x) * dt * 5;
		rw.rotation.x = rw.rotation.x + (0.3 - rw.rotation.x) * dt * 5;
	} else if (isBoosting) {
		// Tucked for dive
		const target = -0.5;
		lw.rotation.z = lw.rotation.z + (target - lw.rotation.z) * dt * 6;
		rw.rotation.z = rw.rotation.z + (-target - rw.rotation.z) * dt * 6;
	} else if (isGliding) {
		// Spread flat - slight dihedral
		lw.rotation.z = lw.rotation.z + (0.05 - lw.rotation.z) * dt * 4;
		rw.rotation.z = rw.rotation.z + (-0.05 - rw.rotation.z) * dt * 4;
		lw.rotation.x = lw.rotation.x + (-0.05 - lw.rotation.x) * dt * 3;
		rw.rotation.x = rw.rotation.x + (-0.05 - rw.rotation.x) * dt * 3;
	} else {
		// Flapping - sinusoidal wing beat
		eagleGroup.userData.flapTime += dt * (2 + throttle * 4); // 2-6 Hz
		const flapAngle = Math.sin(eagleGroup.userData.flapTime * Math.PI * 2) * (0.2 + throttle * 0.3);

		lw.rotation.z = flapAngle;
		rw.rotation.z = -flapAngle;

		// Slight forward sweep on downstroke
		const sweepAngle = Math.cos(eagleGroup.userData.flapTime * Math.PI * 2) * 0.05;
		lw.rotation.y = sweepAngle;
		rw.rotation.y = -sweepAngle;
	}
}
