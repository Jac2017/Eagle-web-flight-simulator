import * as THREE from 'three';

/**
 * Procedural Bald Eagle Model - built from basic Three.js primitives only.
 * No ExtrudeGeometry or Shape (which can crash on some browsers).
 */

export function createEagleModel() {
	const eagle = new THREE.Group();

	// Materials
	const bodyMat = new THREE.MeshLambertMaterial({ color: 0x2A1505, flatShading: true });
	const wingMat = new THREE.MeshLambertMaterial({ color: 0x1A0A00, flatShading: true, side: THREE.DoubleSide });
	const headMat = new THREE.MeshLambertMaterial({ color: 0xF5F0E8, flatShading: true });
	const beakMat = new THREE.MeshLambertMaterial({ color: 0xFFAA00, flatShading: true });
	const eyeMat = new THREE.MeshBasicMaterial({ color: 0x111111 });
	const tailMat = new THREE.MeshLambertMaterial({ color: 0xEEEEE0, flatShading: true });
	const talonMat = new THREE.MeshLambertMaterial({ color: 0xFFAA00, flatShading: true });
	const tipMat = new THREE.MeshLambertMaterial({ color: 0x0A0500, flatShading: true });

	// === BODY (elongated ellipsoid) ===
	const bodyGeo = new THREE.SphereGeometry(0.1, 8, 6);
	bodyGeo.scale(1.0, 0.6, 2.0);
	const body = new THREE.Mesh(bodyGeo, bodyMat);
	eagle.add(body);

	// Breast
	const breastGeo = new THREE.SphereGeometry(0.07, 6, 5);
	breastGeo.scale(1.0, 0.8, 1.2);
	const breast = new THREE.Mesh(breastGeo, new THREE.MeshLambertMaterial({ color: 0x3B2010, flatShading: true }));
	breast.position.set(0, -0.02, 0.08);
	eagle.add(breast);

	// === HEAD (white) ===
	const headGeo = new THREE.SphereGeometry(0.055, 7, 6);
	const head = new THREE.Mesh(headGeo, headMat);
	head.position.set(0, 0.04, 0.18);
	eagle.add(head);

	// Beak
	const beakGeo = new THREE.ConeGeometry(0.015, 0.06, 4);
	const beak = new THREE.Mesh(beakGeo, beakMat);
	beak.position.set(0, 0.02, 0.25);
	beak.rotation.x = Math.PI / 2;
	eagle.add(beak);

	// Eyes
	const eyeGeo = new THREE.SphereGeometry(0.008, 4, 4);
	const eyeL = new THREE.Mesh(eyeGeo, eyeMat);
	eyeL.position.set(-0.035, 0.055, 0.21);
	eagle.add(eyeL);
	const eyeR = new THREE.Mesh(eyeGeo, eyeMat);
	eyeR.position.set(0.035, 0.055, 0.21);
	eagle.add(eyeR);

	// === WINGS (flat boxes on pivot groups) ===
	const leftWingPivot = new THREE.Group();
	leftWingPivot.position.set(0.05, 0.01, 0);

	// Main wing surface - tapered using a scaled box
	const lwGeo = new THREE.BoxGeometry(0.9, 0.012, 0.18);
	lwGeo.translate(0.45, 0, 0); // pivot at body edge
	const lw = new THREE.Mesh(lwGeo, wingMat);
	leftWingPivot.add(lw);

	// Wing tip (darker, narrower)
	const ltGeo = new THREE.BoxGeometry(0.2, 0.008, 0.1);
	ltGeo.translate(0.1, 0, 0);
	const lt = new THREE.Mesh(ltGeo, tipMat);
	lt.position.set(0.85, 0, 0);
	leftWingPivot.add(lt);

	eagle.add(leftWingPivot);

	const rightWingPivot = new THREE.Group();
	rightWingPivot.position.set(-0.05, 0.01, 0);

	const rwGeo = new THREE.BoxGeometry(0.9, 0.012, 0.18);
	rwGeo.translate(-0.45, 0, 0);
	const rw = new THREE.Mesh(rwGeo, wingMat);
	rightWingPivot.add(rw);

	const rtGeo = new THREE.BoxGeometry(0.2, 0.008, 0.1);
	rtGeo.translate(-0.1, 0, 0);
	const rt = new THREE.Mesh(rtGeo, tipMat);
	rt.position.set(-0.85, 0, 0);
	rightWingPivot.add(rt);

	eagle.add(rightWingPivot);

	// === TAIL (white fan - simple flat box) ===
	const tailGeo = new THREE.BoxGeometry(0.2, 0.01, 0.25);
	const tail = new THREE.Mesh(tailGeo, tailMat);
	tail.position.set(0, 0.01, -0.22);
	eagle.add(tail);

	// Tail coverts (dark)
	const covertGeo = new THREE.BoxGeometry(0.06, 0.025, 0.08);
	const covert = new THREE.Mesh(covertGeo, bodyMat);
	covert.position.set(0, 0, -0.15);
	eagle.add(covert);

	// === TALONS ===
	for (let side = -1; side <= 1; side += 2) {
		const legGeo = new THREE.CylinderGeometry(0.005, 0.005, 0.05, 4);
		const leg = new THREE.Mesh(legGeo, talonMat);
		leg.position.set(side * 0.03, -0.07, -0.03);
		eagle.add(leg);
	}

	// Face -Z direction (forward in the game's convention)
	eagle.rotation.y = Math.PI;

	// Store wing pivots for animation
	eagle.userData.leftWing = leftWingPivot;
	eagle.userData.rightWing = rightWingPivot;
	eagle.userData.flapTime = 0;

	return eagle;
}

/**
 * Animate eagle wings based on flight state.
 */
export function updateEagleAnimation(eagleGroup, dt, throttle, isGliding, isBoosting, isTurbo) {
	if (!eagleGroup || !eagleGroup.userData || !eagleGroup.userData.leftWing) return;

	const lw = eagleGroup.userData.leftWing;
	const rw = eagleGroup.userData.rightWing;

	if (isTurbo) {
		// Swept back
		lw.rotation.z += (-0.6 - lw.rotation.z) * dt * 8;
		rw.rotation.z += (0.6 - rw.rotation.z) * dt * 8;
	} else if (isBoosting) {
		// Tucked for dive
		lw.rotation.z += (-0.5 - lw.rotation.z) * dt * 6;
		rw.rotation.z += (0.5 - rw.rotation.z) * dt * 6;
	} else if (isGliding) {
		// Spread flat with slight dihedral
		lw.rotation.z += (0.05 - lw.rotation.z) * dt * 4;
		rw.rotation.z += (-0.05 - rw.rotation.z) * dt * 4;
	} else {
		// Flapping
		eagleGroup.userData.flapTime += dt * (2 + throttle * 4);
		const flapAngle = Math.sin(eagleGroup.userData.flapTime * Math.PI * 2) * (0.2 + throttle * 0.3);
		lw.rotation.z = flapAngle;
		rw.rotation.z = -flapAngle;
	}
}
