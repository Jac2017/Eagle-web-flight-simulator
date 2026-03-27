import * as THREE from 'three';

/**
 * Procedural Bald Eagle with curved wings.
 * Uses only simple primitives with vertex offsets for curvature.
 * Every mesh gets its material at creation time (no deferred assignment).
 */

/**
 * Create a single curved wing panel.
 * Takes a BoxGeometry and bends the upper vertices upward for camber.
 */
function curvedPanel(w, h, d, mat) {
	const geo = new THREE.BoxGeometry(w, h, d, 4, 1, 4);
	const pos = geo.attributes.position;
	for (let i = 0; i < pos.count; i++) {
		const y = pos.getY(i);
		const x = pos.getX(i);
		const z = pos.getZ(i);
		// Normalize chord position
		const cNorm = (z / d) + 0.5; // 0 = back edge, 1 = front edge
		const sNorm = (x / w) + 0.5; // 0 = root, 1 = tip
		if (y > 0) {
			// Upper surface: parabolic arch
			const arch = d * 0.15 * cNorm * (1 - cNorm) * (1 - sNorm * 0.4);
			pos.setY(i, arch + 0.001);
		} else {
			// Lower surface: mostly flat, very slight concavity
			pos.setY(i, -0.001);
		}
	}
	pos.needsUpdate = true;
	geo.computeVertexNormals();
	return new THREE.Mesh(geo, mat);
}

export function createEagleModel() {
	const eagle = new THREE.Group();

	// === MATERIALS ===
	const bodyMat = new THREE.MeshLambertMaterial({ color: 0x1E0F04, flatShading: true });
	const wingMat = new THREE.MeshLambertMaterial({ color: 0x150800, flatShading: true, side: THREE.DoubleSide });
	const underMat = new THREE.MeshLambertMaterial({ color: 0x3B2515, flatShading: true });
	const headMat = new THREE.MeshLambertMaterial({ color: 0xF8F4EC, flatShading: true });
	const beakMat = new THREE.MeshLambertMaterial({ color: 0xE8A000, flatShading: true });
	const eyeMat = new THREE.MeshLambertMaterial({ color: 0xCCA000 });
	const pupilMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
	const tailMat = new THREE.MeshLambertMaterial({ color: 0xF0EDE0, flatShading: true, side: THREE.DoubleSide });
	const talonMat = new THREE.MeshLambertMaterial({ color: 0xE8A000, flatShading: true });
	const tipMat = new THREE.MeshLambertMaterial({ color: 0x0A0400, flatShading: true, side: THREE.DoubleSide });
	const neckMat = new THREE.MeshLambertMaterial({ color: 0xE8E0D0, flatShading: true });

	// === BODY ===
	const bodyGeo = new THREE.SphereGeometry(1, 10, 8);
	bodyGeo.scale(0.085, 0.06, 0.22);
	eagle.add(new THREE.Mesh(bodyGeo, bodyMat));

	const keelGeo = new THREE.SphereGeometry(1, 8, 6);
	keelGeo.scale(0.07, 0.055, 0.15);
	const keel = new THREE.Mesh(keelGeo, underMat);
	keel.position.set(0, -0.018, 0.03);
	eagle.add(keel);

	// === NECK + HEAD ===
	const neckGeo = new THREE.CylinderGeometry(0.028, 0.04, 0.05, 6);
	const neck = new THREE.Mesh(neckGeo, neckMat);
	neck.position.set(0, 0.025, 0.17);
	neck.rotation.x = -0.25;
	eagle.add(neck);

	const headGeo = new THREE.SphereGeometry(0.042, 8, 7);
	headGeo.scale(1.0, 0.95, 1.1);
	const head = new THREE.Mesh(headGeo, headMat);
	head.position.set(0, 0.045, 0.21);
	eagle.add(head);

	const browGeo = new THREE.BoxGeometry(0.055, 0.010, 0.022);
	const brow = new THREE.Mesh(browGeo, neckMat);
	brow.position.set(0, 0.062, 0.225);
	eagle.add(brow);

	// Beak
	const ubGeo = new THREE.ConeGeometry(0.013, 0.05, 5);
	const ub = new THREE.Mesh(ubGeo, beakMat);
	ub.position.set(0, 0.04, 0.255);
	ub.rotation.x = Math.PI * 0.42;
	eagle.add(ub);
	const hookGeo = new THREE.SphereGeometry(0.006, 4, 3);
	const hook = new THREE.Mesh(hookGeo, beakMat);
	hook.position.set(0, 0.028, 0.268);
	eagle.add(hook);
	const lbGeo = new THREE.ConeGeometry(0.007, 0.025, 4);
	const lb = new THREE.Mesh(lbGeo, beakMat);
	lb.position.set(0, 0.030, 0.25);
	lb.rotation.x = Math.PI * 0.52;
	eagle.add(lb);
	const cereGeo = new THREE.SphereGeometry(0.009, 5, 4);
	const cere = new THREE.Mesh(cereGeo, beakMat);
	cere.position.set(0, 0.048, 0.235);
	eagle.add(cere);

	// Eyes
	for (const side of [-1, 1]) {
		const s1 = new THREE.Mesh(new THREE.SphereGeometry(0.013, 6, 5), new THREE.MeshLambertMaterial({ color: 0x2A2010 }));
		s1.position.set(side * 0.029, 0.052, 0.226);
		eagle.add(s1);
		const s2 = new THREE.Mesh(new THREE.SphereGeometry(0.010, 6, 5), eyeMat);
		s2.position.set(side * 0.030, 0.053, 0.228);
		eagle.add(s2);
		const s3 = new THREE.Mesh(new THREE.SphereGeometry(0.005, 5, 4), pupilMat);
		s3.position.set(side * 0.033, 0.053, 0.233);
		eagle.add(s3);
	}

	// === WINGS ===
	function buildWing(isLeft) {
		const sign = isLeft ? 1 : -1;
		const shoulderPivot = new THREE.Group();
		shoulderPivot.position.set(sign * 0.065, 0.015, 0.01);

		// Inner wing - curved panel
		const inner = curvedPanel(0.38, 0.01, 0.17, wingMat);
		inner.position.set(sign * 0.19, 0, 0);
		shoulderPivot.add(inner);

		// Coverts
		for (let c = 0; c < 3; c++) {
			const cGeo = new THREE.BoxGeometry(0.22 - c * 0.03, 0.003, 0.020);
			const cov = new THREE.Mesh(cGeo, bodyMat);
			cov.position.set(sign * (0.16 + c * 0.04), 0.010 + c * 0.002, -0.03 + c * 0.022);
			shoulderPivot.add(cov);
		}

		// Elbow pivot
		const elbowPivot = new THREE.Group();
		elbowPivot.position.set(sign * 0.42, 0, -0.01);

		// Outer wing - curved, narrower
		const outer = curvedPanel(0.45, 0.008, 0.11, wingMat);
		outer.position.set(sign * 0.225, 0, 0);
		elbowPivot.add(outer);

		// Primary feathers
		const primaries = [];
		for (let f = 0; f < 5; f++) {
			const fLen = 0.10 - f * 0.012;
			const fGeo = new THREE.BoxGeometry(fLen, 0.003, 0.018 - f * 0.002);
			fGeo.translate(sign * fLen / 2, 0, 0);
			const feather = new THREE.Mesh(fGeo, tipMat);
			feather.position.set(sign * 0.43, 0, -0.020 + f * 0.016);
			feather.rotation.y = sign * (f - 2) * 0.04;
			elbowPivot.add(feather);
			primaries.push(feather);
		}

		shoulderPivot.add(elbowPivot);
		return { shoulderPivot, elbowPivot, primaries };
	}

	const leftWing = buildWing(true);
	const rightWing = buildWing(false);
	eagle.add(leftWing.shoulderPivot);
	eagle.add(rightWing.shoulderPivot);

	// === TAIL ===
	const tailPivot = new THREE.Group();
	tailPivot.position.set(0, 0.008, -0.20);
	for (let t = 0; t < 9; t++) {
		const angle = (t - 4) * 0.065;
		const tGeo = new THREE.BoxGeometry(0.028, 0.005, 0.14);
		tGeo.translate(0, 0, -0.07);
		const feather = new THREE.Mesh(tGeo, tailMat);
		feather.rotation.y = angle;
		feather.position.x = Math.sin(angle) * 0.015;
		tailPivot.add(feather);
	}
	const utcGeo = new THREE.BoxGeometry(0.08, 0.020, 0.07);
	const utc = new THREE.Mesh(utcGeo, bodyMat);
	utc.position.set(0, 0.005, 0.02);
	tailPivot.add(utc);
	eagle.add(tailPivot);

	// === LEGS ===
	for (const side of [-1, 1]) {
		const thigh = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.010, 0.045, 5), bodyMat);
		thigh.position.set(side * 0.025, -0.045, -0.05);
		thigh.rotation.x = 0.5;
		eagle.add(thigh);
		const tars = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.006, 0.045, 5), talonMat);
		tars.position.set(side * 0.025, -0.078, -0.06);
		eagle.add(tars);
		for (let toe = 0; toe < 4; toe++) {
			const a = (toe - 1.5) * 0.45;
			const t = new THREE.Mesh(new THREE.CylinderGeometry(0.003, 0.001, 0.022, 3), talonMat);
			t.position.set(side * 0.025 + Math.sin(a) * 0.012, -0.098, -0.06 + Math.cos(a) * 0.01);
			t.rotation.set(0.7, 0, a * 0.3);
			eagle.add(t);
		}
	}

	eagle.rotation.y = Math.PI;

	eagle.userData = {
		leftShoulder: leftWing.shoulderPivot,
		rightShoulder: rightWing.shoulderPivot,
		leftElbow: leftWing.elbowPivot,
		rightElbow: rightWing.elbowPivot,
		leftPrimaries: leftWing.primaries,
		rightPrimaries: rightWing.primaries,
		tailPivot,
		flapPhase: 0,
		smoothRoll: 0,
		smoothPitch: 0,
		smoothYaw: 0,
	};

	return eagle;
}

/**
 * Animate eagle wings responding to pitch, roll, yaw, speed.
 */
export function updateEagleAnimation(eagleGroup, dt, state) {
	if (!eagleGroup || !eagleGroup.userData || !eagleGroup.userData.leftShoulder) return;

	const d = eagleGroup.userData;
	const ls = d.leftShoulder, rs = d.rightShoulder;
	const le = d.leftElbow, re = d.rightElbow;
	const tail = d.tailPivot;
	const lp = d.leftPrimaries, rp = d.rightPrimaries;

	const isFlapping = state.isFlapping || false;
	const flapStrength = state.flapStrength || 0;
	const isGliding = state.isGliding || false;
	const isBoosting = state.isBoosting || false;
	const isTurbo = state.isTurbo || false;
	const speed = state.speed || 15;
	const roll = state.roll || 0;
	const pitch = state.pitch || 0;
	const yaw = state.yaw || 0;

	const lrp = (a, b, t) => a + (b - a) * Math.min(1, t);

	d.smoothRoll = lrp(d.smoothRoll, roll, dt * 4);
	d.smoothPitch = lrp(d.smoothPitch, pitch, dt * 3);
	d.smoothYaw = lrp(d.smoothYaw, yaw || 0, dt * 4);

	const rf = d.smoothRoll / 45; // roll factor
	const lra = rf * 0.12; // left roll adjust
	const rra = -rf * 0.12;
	const pf = d.smoothPitch / 30; // pitch factor
	const ps = pf * 0.06; // pitch sweep
	const yf = d.smoothYaw;
	const lya = yf * 0.05;
	const rya = -yf * 0.05;
	const sn = Math.min(1, speed / 50); // speed normalized
	const priSplay = (1 - sn) * 0.06;

	if (isTurbo) {
		ls.rotation.z = lrp(ls.rotation.z, -0.7 + lra, dt * 8);
		rs.rotation.z = lrp(rs.rotation.z, 0.7 + rra, dt * 8);
		le.rotation.z = lrp(le.rotation.z, -0.4, dt * 6);
		re.rotation.z = lrp(re.rotation.z, 0.4, dt * 6);
		ls.rotation.y = lrp(ls.rotation.y, -0.15, dt * 5);
		rs.rotation.y = lrp(rs.rotation.y, 0.15, dt * 5);
		if (tail) tail.rotation.x = lrp(tail.rotation.x, -0.1 + pf * 0.05, dt * 5);
	} else if (isBoosting) {
		ls.rotation.z = lrp(ls.rotation.z, -0.6 + lra, dt * 7);
		rs.rotation.z = lrp(rs.rotation.z, 0.6 + rra, dt * 7);
		le.rotation.z = lrp(le.rotation.z, -0.35, dt * 5);
		re.rotation.z = lrp(re.rotation.z, 0.35, dt * 5);
		if (tail) tail.rotation.x = lrp(tail.rotation.x, 0.15 + pf * 0.05, dt * 4);
	} else if (isFlapping && flapStrength > 0) {
		d.flapPhase += dt * 8;
		const ph = d.flapPhase % (Math.PI * 2);
		const ma = Math.sin(ph) * 0.55 * flapStrength;
		const ea = Math.sin(ph + 0.35) * 0.22 * flapStrength;
		const sw = Math.cos(ph) * 0.10 * flapStrength;

		ls.rotation.z = ma + lra + lya;
		rs.rotation.z = -ma + rra + rya;
		le.rotation.z = ea;
		re.rotation.z = -ea;
		ls.rotation.y = sw + ps;
		rs.rotation.y = -sw - ps;

		if (tail) {
			tail.rotation.x = Math.sin(ph + 1) * 0.06 + pf * 0.03;
			tail.rotation.y = yf * 0.08;
		}
	} else if (isGliding) {
		const t = performance.now() * 0.001;
		const wob = Math.sin(t * 0.5) * 0.015;
		const dih = 0.08 + wob;

		ls.rotation.z = lrp(ls.rotation.z, dih + lra + lya, dt * 3);
		rs.rotation.z = lrp(rs.rotation.z, -dih + rra + rya, dt * 3);
		le.rotation.z = lrp(le.rotation.z, 0.02 + Math.abs(rf) * 0.05, dt * 3);
		re.rotation.z = lrp(re.rotation.z, -0.02 - Math.abs(rf) * 0.05, dt * 3);
		ls.rotation.y = lrp(ls.rotation.y, ps, dt * 2.5);
		rs.rotation.y = lrp(rs.rotation.y, -ps, dt * 2.5);

		if (tail) {
			tail.rotation.x = lrp(tail.rotation.x, pf * 0.06, dt * 3);
			tail.rotation.y = lrp(tail.rotation.y, yf * 0.1, dt * 3);
		}
		d.flapPhase = 0;
	} else {
		ls.rotation.z = lrp(ls.rotation.z, 0.05 + lra, dt * 4);
		rs.rotation.z = lrp(rs.rotation.z, -0.05 + rra, dt * 4);
		le.rotation.z = lrp(le.rotation.z, 0, dt * 4);
		re.rotation.z = lrp(re.rotation.z, 0, dt * 4);
		ls.rotation.y = lrp(ls.rotation.y, ps, dt * 3);
		rs.rotation.y = lrp(rs.rotation.y, -ps, dt * 3);
	}

	// Primary splay
	if (lp && rp) {
		for (let f = 0; f < Math.min(lp.length, 5); f++) {
			const sp = priSplay * (f - 2);
			if (lp[f]) lp[f].rotation.y = lrp(lp[f].rotation.y, sp, dt * 3);
			if (rp[f]) rp[f].rotation.y = lrp(rp[f].rotation.y, -sp, dt * 3);
		}
	}

	// Wingtip flex
	if (!isTurbo && !isBoosting && le && re) {
		const t = performance.now() * 0.001;
		le.rotation.x = Math.sin(t * 3 + 1) * 0.008 * (1 + speed / 50);
		re.rotation.x = -Math.sin(t * 3 + 1) * 0.008 * (1 + speed / 50);
	}
}
