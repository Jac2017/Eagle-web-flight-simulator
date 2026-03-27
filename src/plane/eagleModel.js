import * as THREE from 'three';

/**
 * Procedural Bald Eagle - organic curved wings, no gaps.
 *
 * Wings are built as continuous surfaces from shoulder to wingtip.
 * Each wing is a single mesh with visible camber (curved top, flat bottom).
 * No separate inner/outer segments with gaps between them.
 */

/**
 * Build a single continuous wing mesh from root to tip.
 * Uses a PlaneGeometry laid on XZ, then deforms Y for airfoil camber,
 * tapers Z for chord reduction, and sweeps Z for leading edge sweep.
 */
function buildContinuousWing(span, rootChord, tipChord, isLeft, mat) {
	const sign = isLeft ? 1 : -1;
	const segsSpan = 10; // Spanwise resolution
	const segsChord = 6; // Chordwise resolution

	// PlaneGeometry on XZ plane: X = spanwise, Z = chordwise
	const geo = new THREE.PlaneGeometry(span, rootChord, segsSpan, segsChord);
	// Rotate so it lies flat (PlaneGeometry defaults to XY)
	geo.rotateX(-Math.PI / 2);

	const pos = geo.attributes.position;
	for (let i = 0; i < pos.count; i++) {
		let x = pos.getX(i); // spanwise: -span/2 to +span/2
		let y = pos.getY(i); // 0 (after rotation)
		let z = pos.getZ(i); // chordwise: -rootChord/2 to +rootChord/2

		// Normalize spanwise (0 = root, 1 = tip)
		const sNorm = (x / span) + 0.5;
		// Normalize chordwise (0 = trailing edge, 1 = leading edge)
		const cNorm = (z / rootChord) + 0.5;

		// Taper: chord shrinks from root to tip
		const localChord = rootChord + (tipChord - rootChord) * sNorm;
		z = (cNorm - 0.5) * localChord;

		// Sweep: leading edge moves backward toward tip
		z -= sNorm * sNorm * rootChord * 0.2;

		// CAMBER: upper surface curves up, creating visible arch
		const camberAmount = localChord * 0.35; // 35% of chord = very visible
		const camber = camberAmount * 4 * cNorm * (1 - cNorm); // Parabolic
		// Thickness: thicker near 30% chord
		const thickProfile = 0.008 * (1 - sNorm * 0.6); // Thinner at tip
		y = camber + thickProfile;

		// Slight dihedral built into rest shape (tips slightly higher)
		y += sNorm * sNorm * 0.015;

		// Washout: tip twisted to lower angle of incidence
		const twist = sNorm * 0.04;
		const zRot = z * Math.cos(twist) - y * Math.sin(twist);
		const yRot = z * Math.sin(twist) + y * Math.cos(twist);

		// Flip X for correct side
		pos.setXYZ(i, sign * sNorm * span, yRot, zRot);
	}

	pos.needsUpdate = true;
	geo.computeVertexNormals();

	const mesh = new THREE.Mesh(geo, mat);
	return mesh;
}

export function createEagleModel() {
	const eagle = new THREE.Group();

	// === MATERIALS ===
	const bodyMat = new THREE.MeshLambertMaterial({ color: 0x1E0F04 });
	const wingMat = new THREE.MeshLambertMaterial({ color: 0x150800, side: THREE.DoubleSide });
	const underMat = new THREE.MeshLambertMaterial({ color: 0x3B2515 });
	const headMat = new THREE.MeshLambertMaterial({ color: 0xF8F4EC });
	const beakMat = new THREE.MeshLambertMaterial({ color: 0xE8A000 });
	const eyeMat = new THREE.MeshLambertMaterial({ color: 0xCCA000 });
	const pupilMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
	const tailMat = new THREE.MeshLambertMaterial({ color: 0xF0EDE0, side: THREE.DoubleSide });
	const talonMat = new THREE.MeshLambertMaterial({ color: 0xE8A000 });
	const tipMat = new THREE.MeshLambertMaterial({ color: 0x0A0400, side: THREE.DoubleSide });
	const neckMat = new THREE.MeshLambertMaterial({ color: 0xE8E0D0 });

	// === BODY ===
	const bodyGeo = new THREE.SphereGeometry(1, 10, 8);
	bodyGeo.scale(0.085, 0.06, 0.22);
	eagle.add(new THREE.Mesh(bodyGeo, bodyMat));

	// Keel/breast
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

	// Brow
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
		eagle.add(Object.assign(new THREE.Mesh(new THREE.SphereGeometry(0.013, 6, 5), new THREE.MeshLambertMaterial({ color: 0x2A2010 })), { position: new THREE.Vector3(side * 0.029, 0.052, 0.226) }));
		eagle.add(Object.assign(new THREE.Mesh(new THREE.SphereGeometry(0.010, 6, 5), eyeMat), { position: new THREE.Vector3(side * 0.030, 0.053, 0.228) }));
		eagle.add(Object.assign(new THREE.Mesh(new THREE.SphereGeometry(0.005, 5, 4), pupilMat), { position: new THREE.Vector3(side * 0.033, 0.053, 0.233) }));
	}

	// === WINGS - continuous curved surface, no gaps ===
	function buildWing(isLeft) {
		const sign = isLeft ? 1 : -1;

		// Shoulder pivot
		const shoulderPivot = new THREE.Group();
		shoulderPivot.position.set(0, 0.015, 0.01);

		// SINGLE continuous wing surface from body to near-tip
		const mainWing = buildContinuousWing(0.85, 0.18, 0.06, isLeft, wingMat);
		shoulderPivot.add(mainWing);

		// Covert feather layers (on top of wing surface)
		for (let c = 0; c < 4; c++) {
			const covW = 0.50 - c * 0.08;
			const covGeo = new THREE.BoxGeometry(covW, 0.003, 0.018);
			covGeo.translate(sign * (0.15 + c * 0.06), 0, 0);
			const cov = new THREE.Mesh(covGeo, bodyMat);
			cov.position.set(0, 0.012 + c * 0.002, -0.02 + c * 0.015);
			shoulderPivot.add(cov);
		}

		// Elbow pivot (for fold animation - positioned partway along wing)
		const elbowPivot = new THREE.Group();
		elbowPivot.position.set(sign * 0.50, 0.01, -0.02);

		// Primary feathers extending beyond main wing
		const primaries = [];
		for (let f = 0; f < 5; f++) {
			const fLen = 0.14 - f * 0.015;
			const fW = 0.020 - f * 0.002;
			const fGeo = new THREE.BoxGeometry(fLen, 0.003, fW);
			// Curve each feather slightly upward at tip
			const fPos = fGeo.attributes.position;
			for (let v = 0; v < fPos.count; v++) {
				const fx = fPos.getX(v);
				fPos.setY(v, fPos.getY(v) + Math.abs(fx) * fx * 0.15);
			}
			fPos.needsUpdate = true;
			fGeo.computeVertexNormals();
			fGeo.translate(sign * fLen / 2, 0, 0);

			const feather = new THREE.Mesh(fGeo, tipMat);
			feather.position.set(sign * 0.33, -0.005, -0.015 + f * 0.014);
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
			const tm = new THREE.Mesh(new THREE.CylinderGeometry(0.003, 0.001, 0.022, 3), talonMat);
			tm.position.set(side * 0.025 + Math.sin(a) * 0.012, -0.098, -0.06 + Math.cos(a) * 0.01);
			tm.rotation.set(0.7, 0, a * 0.3);
			eagle.add(tm);
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
 * Animate wings responding to pitch, roll, yaw, speed.
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

	const mix = (a, b, t) => a + (b - a) * Math.min(1, t);

	d.smoothRoll = mix(d.smoothRoll, roll, dt * 4);
	d.smoothPitch = mix(d.smoothPitch, pitch, dt * 3);
	d.smoothYaw = mix(d.smoothYaw, yaw || 0, dt * 4);

	const rf = d.smoothRoll / 45;
	const lra = rf * 0.12, rra = -rf * 0.12;
	const pf = d.smoothPitch / 30;
	const ps = pf * 0.06;
	const yf = d.smoothYaw;
	const lya = yf * 0.05, rya = -yf * 0.05;
	const sn = Math.min(1, speed / 50);
	const priSplay = (1 - sn) * 0.06;

	if (isTurbo) {
		ls.rotation.z = mix(ls.rotation.z, -0.7 + lra, dt * 8);
		rs.rotation.z = mix(rs.rotation.z, 0.7 + rra, dt * 8);
		le.rotation.z = mix(le.rotation.z, -0.4, dt * 6);
		re.rotation.z = mix(re.rotation.z, 0.4, dt * 6);
		ls.rotation.y = mix(ls.rotation.y, -0.15, dt * 5);
		rs.rotation.y = mix(rs.rotation.y, 0.15, dt * 5);
		if (tail) tail.rotation.x = mix(tail.rotation.x, -0.1 + pf * 0.05, dt * 5);
	} else if (isBoosting) {
		ls.rotation.z = mix(ls.rotation.z, -0.6 + lra, dt * 7);
		rs.rotation.z = mix(rs.rotation.z, 0.6 + rra, dt * 7);
		le.rotation.z = mix(le.rotation.z, -0.35, dt * 5);
		re.rotation.z = mix(re.rotation.z, 0.35, dt * 5);
		if (tail) tail.rotation.x = mix(tail.rotation.x, 0.15 + pf * 0.05, dt * 4);
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

		ls.rotation.z = mix(ls.rotation.z, dih + lra + lya, dt * 3);
		rs.rotation.z = mix(rs.rotation.z, -dih + rra + rya, dt * 3);
		le.rotation.z = mix(le.rotation.z, 0.02 + Math.abs(rf) * 0.05, dt * 3);
		re.rotation.z = mix(re.rotation.z, -0.02 - Math.abs(rf) * 0.05, dt * 3);
		ls.rotation.y = mix(ls.rotation.y, ps, dt * 2.5);
		rs.rotation.y = mix(rs.rotation.y, -ps, dt * 2.5);

		if (tail) {
			tail.rotation.x = mix(tail.rotation.x, pf * 0.06, dt * 3);
			tail.rotation.y = mix(tail.rotation.y, yf * 0.1, dt * 3);
		}
		d.flapPhase = 0;
	} else {
		ls.rotation.z = mix(ls.rotation.z, 0.05 + lra, dt * 4);
		rs.rotation.z = mix(rs.rotation.z, -0.05 + rra, dt * 4);
		le.rotation.z = mix(le.rotation.z, 0, dt * 4);
		re.rotation.z = mix(re.rotation.z, 0, dt * 4);
		ls.rotation.y = mix(ls.rotation.y, ps, dt * 3);
		rs.rotation.y = mix(rs.rotation.y, -ps, dt * 3);
	}

	if (lp && rp) {
		for (let f = 0; f < Math.min(lp.length, 5); f++) {
			const sp = priSplay * (f - 2);
			if (lp[f]) lp[f].rotation.y = mix(lp[f].rotation.y, sp, dt * 3);
			if (rp[f]) rp[f].rotation.y = mix(rp[f].rotation.y, -sp, dt * 3);
		}
	}

	if (!isTurbo && !isBoosting && le && re) {
		const t = performance.now() * 0.001;
		le.rotation.x = Math.sin(t * 3 + 1) * 0.008 * (1 + speed / 50);
		re.rotation.x = -Math.sin(t * 3 + 1) * 0.008 * (1 + speed / 50);
	}
}
