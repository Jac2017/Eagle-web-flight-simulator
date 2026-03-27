import * as THREE from 'three';

/**
 * Procedural Bald Eagle - simple proven geometry only.
 * BoxGeometry + SphereGeometry + ConeGeometry + CylinderGeometry.
 * Every mesh created with material. No PlaneGeometry, no BufferGeometry.
 */

export function createEagleModel() {
	const eagle = new THREE.Group();

	const bodyMat = new THREE.MeshLambertMaterial({ color: 0x1E0F04 });
	const wingMat = new THREE.MeshLambertMaterial({ color: 0x150800, side: THREE.DoubleSide });
	const underMat = new THREE.MeshLambertMaterial({ color: 0x3B2515 });
	const headMat = new THREE.MeshLambertMaterial({ color: 0xF8F4EC });
	const beakMat = new THREE.MeshLambertMaterial({ color: 0xE8A000 });
	const pupilMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
	const tailMat = new THREE.MeshLambertMaterial({ color: 0xF0EDE0, side: THREE.DoubleSide });
	const talonMat = new THREE.MeshLambertMaterial({ color: 0xE8A000 });
	const tipMat = new THREE.MeshLambertMaterial({ color: 0x0A0400, side: THREE.DoubleSide });
	const neckMat = new THREE.MeshLambertMaterial({ color: 0xE8E0D0 });
	const eyeIrisMat = new THREE.MeshLambertMaterial({ color: 0xCCA000 });

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
	const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.04, 0.05, 6), neckMat);
	neck.position.set(0, 0.025, 0.17);
	neck.rotation.x = -0.25;
	eagle.add(neck);

	const headGeo = new THREE.SphereGeometry(0.042, 8, 7);
	headGeo.scale(1.0, 0.95, 1.1);
	const head = new THREE.Mesh(headGeo, headMat);
	head.position.set(0, 0.045, 0.21);
	eagle.add(head);

	// Brow
	eagle.add(Object.assign(new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.010, 0.022), neckMat), { position: new THREE.Vector3(0, 0.062, 0.225) }));

	// Beak
	const ub = new THREE.Mesh(new THREE.ConeGeometry(0.013, 0.05, 5), beakMat);
	ub.position.set(0, 0.04, 0.255); ub.rotation.x = Math.PI * 0.42;
	eagle.add(ub);
	const hook = new THREE.Mesh(new THREE.SphereGeometry(0.006, 4, 3), beakMat);
	hook.position.set(0, 0.028, 0.268);
	eagle.add(hook);
	const lb = new THREE.Mesh(new THREE.ConeGeometry(0.007, 0.025, 4), beakMat);
	lb.position.set(0, 0.030, 0.25); lb.rotation.x = Math.PI * 0.52;
	eagle.add(lb);
	eagle.add(Object.assign(new THREE.Mesh(new THREE.SphereGeometry(0.009, 5, 4), beakMat), { position: new THREE.Vector3(0, 0.048, 0.235) }));

	// Eyes
	for (const s of [-1, 1]) {
		eagle.add(Object.assign(new THREE.Mesh(new THREE.SphereGeometry(0.013, 6, 5), new THREE.MeshLambertMaterial({ color: 0x2A2010 })), { position: new THREE.Vector3(s * 0.029, 0.052, 0.226) }));
		eagle.add(Object.assign(new THREE.Mesh(new THREE.SphereGeometry(0.010, 6, 5), eyeIrisMat), { position: new THREE.Vector3(s * 0.030, 0.053, 0.228) }));
		eagle.add(Object.assign(new THREE.Mesh(new THREE.SphereGeometry(0.005, 5, 4), pupilMat), { position: new THREE.Vector3(s * 0.033, 0.053, 0.233) }));
	}

	// === WINGS - overlapping box strips from shoulder to tip, no gaps ===
	function buildWing(isLeft) {
		const sign = isLeft ? 1 : -1;
		const shoulderPivot = new THREE.Group();
		shoulderPivot.position.set(0, 0.015, 0.01);

		// Build wing as overlapping strips from root to tip
		// Each strip slightly overlaps the previous one - NO gaps possible
		const strips = [
			{ x: 0.08, w: 0.18, chord: 0.18, y: 0.005 },
			{ x: 0.22, w: 0.16, chord: 0.17, y: 0.004 },
			{ x: 0.35, w: 0.14, chord: 0.15, y: 0.003 },
			{ x: 0.47, w: 0.12, chord: 0.13, y: 0.002 },
			{ x: 0.57, w: 0.10, chord: 0.11, y: 0.001 },
			{ x: 0.65, w: 0.08, chord: 0.09, y: 0.000 },
			{ x: 0.72, w: 0.08, chord: 0.07, y: -0.001 },
		];

		for (const st of strips) {
			// Upper surface - curved box
			const geo = new THREE.BoxGeometry(st.w, 0.008, st.chord, 1, 1, 3);
			// Arch the top vertices up for camber
			const pos = geo.attributes.position;
			for (let i = 0; i < pos.count; i++) {
				const py = pos.getY(i);
				const pz = pos.getZ(i);
				if (py > 0) {
					const cN = (pz / st.chord) + 0.5;
					pos.setY(i, py + st.chord * 0.3 * cN * (1 - cN));
				}
			}
			pos.needsUpdate = true;
			geo.computeVertexNormals();

			const strip = new THREE.Mesh(geo, wingMat);
			strip.position.set(sign * st.x, st.y, -st.chord * 0.05);
			shoulderPivot.add(strip);
		}

		// Covert feather rows on top
		for (let c = 0; c < 3; c++) {
			const cW = 0.40 - c * 0.08;
			const cov = new THREE.Mesh(new THREE.BoxGeometry(cW, 0.003, 0.016), bodyMat);
			cov.position.set(sign * (0.20 + c * 0.08), 0.012 + c * 0.002, -0.02 + c * 0.012);
			shoulderPivot.add(cov);
		}

		// Elbow pivot for primaries
		const elbowPivot = new THREE.Group();
		elbowPivot.position.set(sign * 0.50, 0.005, -0.02);

		// Primary feather fingers
		const primaries = [];
		for (let f = 0; f < 5; f++) {
			const fLen = 0.14 - f * 0.015;
			const fW = 0.018 - f * 0.002;
			const fGeo = new THREE.BoxGeometry(fLen, 0.003, fW);
			fGeo.translate(sign * fLen / 2, 0, 0);
			const feather = new THREE.Mesh(fGeo, tipMat);
			feather.position.set(sign * 0.24, -0.003, -0.012 + f * 0.013);
			feather.rotation.y = sign * (f - 2) * 0.04;
			elbowPivot.add(feather);
			primaries.push(feather);
		}

		shoulderPivot.add(elbowPivot);
		return { shoulderPivot, elbowPivot, primaries };
	}

	const lw = buildWing(true);
	const rw = buildWing(false);
	eagle.add(lw.shoulderPivot);
	eagle.add(rw.shoulderPivot);

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
	eagle.add(Object.assign(new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.020, 0.07), bodyMat), { position: new THREE.Vector3(0, 0.005, 0.02) }));
	eagle.add(tailPivot);

	// === LEGS ===
	for (const side of [-1, 1]) {
		const thigh = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.010, 0.045, 5), bodyMat);
		thigh.position.set(side * 0.025, -0.045, -0.05); thigh.rotation.x = 0.5;
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
		leftShoulder: lw.shoulderPivot,
		rightShoulder: rw.shoulderPivot,
		leftElbow: lw.elbowPivot,
		rightElbow: rw.elbowPivot,
		leftPrimaries: lw.primaries,
		rightPrimaries: rw.primaries,
		tailPivot,
		flapPhase: 0,
		smoothRoll: 0,
		smoothPitch: 0,
		smoothYaw: 0,
	};

	return eagle;
}

export function updateEagleAnimation(eagleGroup, dt, state) {
	if (!eagleGroup || !eagleGroup.userData || !eagleGroup.userData.leftShoulder) return;

	const d = eagleGroup.userData;
	const ls = d.leftShoulder, rs = d.rightShoulder;
	const le = d.leftElbow, re = d.rightElbow;
	const tail = d.tailPivot;
	const lp = d.leftPrimaries, rp = d.rightPrimaries;

	const flap = state.isFlapping || false;
	const fs = state.flapStrength || 0;
	const glide = state.isGliding || false;
	const boost = state.isBoosting || false;
	const turbo = state.isTurbo || false;
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

	if (turbo) {
		ls.rotation.z = mix(ls.rotation.z, -0.7 + lra, dt * 8);
		rs.rotation.z = mix(rs.rotation.z, 0.7 + rra, dt * 8);
		le.rotation.z = mix(le.rotation.z, -0.4, dt * 6);
		re.rotation.z = mix(re.rotation.z, 0.4, dt * 6);
		ls.rotation.y = mix(ls.rotation.y, -0.15, dt * 5);
		rs.rotation.y = mix(rs.rotation.y, 0.15, dt * 5);
		if (tail) tail.rotation.x = mix(tail.rotation.x, -0.1 + pf * 0.05, dt * 5);
	} else if (boost) {
		ls.rotation.z = mix(ls.rotation.z, -0.6 + lra, dt * 7);
		rs.rotation.z = mix(rs.rotation.z, 0.6 + rra, dt * 7);
		le.rotation.z = mix(le.rotation.z, -0.35, dt * 5);
		re.rotation.z = mix(re.rotation.z, 0.35, dt * 5);
		if (tail) tail.rotation.x = mix(tail.rotation.x, 0.15 + pf * 0.05, dt * 4);
	} else if (flap && fs > 0) {
		d.flapPhase += dt * 8;
		const ph = d.flapPhase % (Math.PI * 2);
		const ma = Math.sin(ph) * 0.55 * fs;
		const ea = Math.sin(ph + 0.35) * 0.22 * fs;
		const sw = Math.cos(ph) * 0.10 * fs;
		ls.rotation.z = ma + lra + lya;
		rs.rotation.z = -ma + rra + rya;
		le.rotation.z = ea; re.rotation.z = -ea;
		ls.rotation.y = sw + ps; rs.rotation.y = -sw - ps;
		if (tail) { tail.rotation.x = Math.sin(ph + 1) * 0.06 + pf * 0.03; tail.rotation.y = yf * 0.08; }
	} else if (glide) {
		const t = performance.now() * 0.001;
		const dih = 0.08 + Math.sin(t * 0.5) * 0.015;
		ls.rotation.z = mix(ls.rotation.z, dih + lra + lya, dt * 3);
		rs.rotation.z = mix(rs.rotation.z, -dih + rra + rya, dt * 3);
		le.rotation.z = mix(le.rotation.z, 0.02 + Math.abs(rf) * 0.05, dt * 3);
		re.rotation.z = mix(re.rotation.z, -0.02 - Math.abs(rf) * 0.05, dt * 3);
		ls.rotation.y = mix(ls.rotation.y, ps, dt * 2.5);
		rs.rotation.y = mix(rs.rotation.y, -ps, dt * 2.5);
		if (tail) { tail.rotation.x = mix(tail.rotation.x, pf * 0.06, dt * 3); tail.rotation.y = mix(tail.rotation.y, yf * 0.1, dt * 3); }
		d.flapPhase = 0;
	} else {
		ls.rotation.z = mix(ls.rotation.z, 0.05 + lra, dt * 4);
		rs.rotation.z = mix(rs.rotation.z, -0.05 + rra, dt * 4);
		le.rotation.z = mix(le.rotation.z, 0, dt * 4); re.rotation.z = mix(re.rotation.z, 0, dt * 4);
		ls.rotation.y = mix(ls.rotation.y, ps, dt * 3); rs.rotation.y = mix(rs.rotation.y, -ps, dt * 3);
	}

	if (lp && rp) {
		for (let f = 0; f < Math.min(lp.length, 5); f++) {
			const sp = priSplay * (f - 2);
			if (lp[f]) lp[f].rotation.y = mix(lp[f].rotation.y, sp, dt * 3);
			if (rp[f]) rp[f].rotation.y = mix(rp[f].rotation.y, -sp, dt * 3);
		}
	}

	if (!turbo && !boost && le && re) {
		const t = performance.now() * 0.001;
		le.rotation.x = Math.sin(t * 3 + 1) * 0.008 * (1 + speed / 50);
		re.rotation.x = -Math.sin(t * 3 + 1) * 0.008 * (1 + speed / 50);
	}
}
