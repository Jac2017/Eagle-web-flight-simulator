import * as THREE from 'three';

/**
 * Procedural Bald Eagle with curved wings that respond to flight inputs.
 *
 * Wings use CylinderGeometry scaled to create airfoil-like cross sections
 * (thick leading edge, thin trailing edge, curved upper surface).
 * Safe primitives only - no custom BufferGeometry indexing.
 */

/**
 * Create a curved wing section using a squashed/tapered cylinder.
 * This gives a rounded leading edge and tapered trailing edge
 * without any custom buffer geometry.
 */
function createWingSection(span, rootChord, tipChord, isLeft) {
	const sign = isLeft ? 1 : -1;
	const group = new THREE.Group();

	// Build wing from multiple spanwise slices for a tapered, curved shape
	const slices = 6;
	for (let i = 0; i < slices; i++) {
		const t0 = i / slices;
		const t1 = (i + 1) / slices;
		const tMid = (t0 + t1) / 2;

		const chord = rootChord + (tipChord - rootChord) * tMid;
		const sliceSpan = span / slices;
		const xPos = sign * (t0 * span + sliceSpan / 2);

		// Each slice: a box that's wider at front (leading edge) via slight rotation
		// and scaled to taper
		const sliceGeo = new THREE.BoxGeometry(sliceSpan, 1, chord);

		// Deform vertices to create camber (curve upper surface up)
		const pos = sliceGeo.attributes.position;
		for (let v = 0; v < pos.count; v++) {
			const y = pos.getY(v);
			const z = pos.getZ(v);
			const chordPos = (z / chord) + 0.5; // 0=trailing, 1=leading

			if (y > 0) {
				// Upper surface: arch up with parabolic camber
				const camber = 0.4 * chord * chordPos * (1 - chordPos);
				pos.setY(v, y * 0.008 + camber);
			} else {
				// Lower surface: flatter, slight concave
				const camber = 0.1 * chord * chordPos * (1 - chordPos);
				pos.setY(v, y * 0.004 - camber * 0.3);
			}
		}
		pos.needsUpdate = true;
		sliceGeo.computeVertexNormals();

		const slice = new THREE.Mesh(sliceGeo);
		slice.position.x = xPos;
		// Slight sweep: trailing edge sweeps back toward tip
		slice.position.z = -tMid * rootChord * 0.08;
		// Slight twist: tip has less angle of incidence (washout)
		slice.rotation.x = tMid * 0.03;
		group.add(slice);
	}

	return group;
}

export function createEagleModel() {
	const eagle = new THREE.Group();

	// === MATERIALS ===
	const bodyMat = new THREE.MeshStandardMaterial({ color: 0x1E0F04, roughness: 0.85, flatShading: true });
	const wingMat = new THREE.MeshStandardMaterial({ color: 0x150800, roughness: 0.80, flatShading: true, side: THREE.DoubleSide });
	const wingUnderMat = new THREE.MeshStandardMaterial({ color: 0x2A1A0A, roughness: 0.85, flatShading: true, side: THREE.DoubleSide });
	const underMat = new THREE.MeshStandardMaterial({ color: 0x3B2515, roughness: 0.85, flatShading: true });
	const headMat = new THREE.MeshStandardMaterial({ color: 0xF8F4EC, roughness: 0.55, flatShading: true });
	const beakMat = new THREE.MeshStandardMaterial({ color: 0xE8A000, roughness: 0.35, metalness: 0.1, flatShading: true });
	const eyeMat = new THREE.MeshStandardMaterial({ color: 0xCCA000, roughness: 0.3, metalness: 0.2 });
	const pupilMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
	const tailMat = new THREE.MeshStandardMaterial({ color: 0xF0EDE0, roughness: 0.65, flatShading: true, side: THREE.DoubleSide });
	const talonMat = new THREE.MeshStandardMaterial({ color: 0xE8A000, roughness: 0.5, flatShading: true });
	const tipMat = new THREE.MeshStandardMaterial({ color: 0x0A0400, roughness: 0.85, flatShading: true, side: THREE.DoubleSide });
	const neckMat = new THREE.MeshStandardMaterial({ color: 0xE8E0D0, roughness: 0.6, flatShading: true });

	// === BODY ===
	const bodyGeo = new THREE.SphereGeometry(1, 10, 8);
	bodyGeo.scale(0.085, 0.06, 0.22);
	eagle.add(new THREE.Mesh(bodyGeo, bodyMat));

	// Keel
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

	// Brow ridge
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

	// Cere
	const cereGeo = new THREE.SphereGeometry(0.009, 5, 4);
	const cere = new THREE.Mesh(cereGeo, beakMat);
	cere.position.set(0, 0.048, 0.235);
	eagle.add(cere);

	// Eyes
	for (const side of [-1, 1]) {
		const socketGeo = new THREE.SphereGeometry(0.013, 6, 5);
		const socket = new THREE.Mesh(socketGeo, new THREE.MeshStandardMaterial({ color: 0x2A2010, roughness: 0.9 }));
		socket.position.set(side * 0.029, 0.052, 0.226);
		eagle.add(socket);
		const irisGeo = new THREE.SphereGeometry(0.010, 6, 5);
		const iris = new THREE.Mesh(irisGeo, eyeMat);
		iris.position.set(side * 0.030, 0.053, 0.228);
		eagle.add(iris);
		const pupGeo = new THREE.SphereGeometry(0.005, 5, 4);
		const pup = new THREE.Mesh(pupGeo, pupilMat);
		pup.position.set(side * 0.033, 0.053, 0.233);
		eagle.add(pup);
	}

	// === WINGS ===
	function buildWing(isLeft) {
		const sign = isLeft ? 1 : -1;

		// Shoulder pivot (main wing rotation point)
		const shoulderPivot = new THREE.Group();
		shoulderPivot.position.set(sign * 0.065, 0.015, 0.01);

		// Inner wing - curved airfoil sections
		const innerWing = createWingSection(0.38, 0.17, 0.12, isLeft);
		innerWing.traverse(c => { if (c.isMesh) c.material = wingMat; });
		shoulderPivot.add(innerWing);

		// Covert feather layers on inner wing
		for (let c = 0; c < 3; c++) {
			const covGeo = new THREE.BoxGeometry(0.22 - c * 0.03, 0.003, 0.020);
			covGeo.translate(sign * (0.16 + c * 0.04), 0, 0);
			const cov = new THREE.Mesh(covGeo, bodyMat);
			cov.position.set(0, 0.010 + c * 0.002, -0.03 + c * 0.022);
			shoulderPivot.add(cov);
		}

		// Elbow pivot
		const elbowPivot = new THREE.Group();
		elbowPivot.position.set(sign * 0.42, 0, -0.01);

		// Outer wing - curved airfoil, narrower
		const outerWing = createWingSection(0.45, 0.12, 0.04, isLeft);
		outerWing.traverse(c => { if (c.isMesh) c.material = wingMat; });
		elbowPivot.add(outerWing);

		// Primary feather "fingers" - 5 separated, slightly curved
		const primaries = [];
		for (let f = 0; f < 5; f++) {
			const fLen = 0.10 - f * 0.012;
			const fChord = 0.020 - f * 0.002;

			// Each primary: a thin curved slab
			const fGeo = new THREE.BoxGeometry(fLen, 0.003, fChord);
			// Curve it slightly
			const fPos = fGeo.attributes.position;
			for (let v = 0; v < fPos.count; v++) {
				const lx = fPos.getX(v);
				const ly = fPos.getY(v);
				// Slight upward curve at tip
				fPos.setY(v, ly + Math.abs(lx) * lx * 0.3);
			}
			fPos.needsUpdate = true;
			fGeo.computeVertexNormals();
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
		const thighGeo = new THREE.CylinderGeometry(0.014, 0.010, 0.045, 5);
		const thigh = new THREE.Mesh(thighGeo, bodyMat);
		thigh.position.set(side * 0.025, -0.045, -0.05);
		thigh.rotation.x = 0.5;
		eagle.add(thigh);

		const tarsGeo = new THREE.CylinderGeometry(0.005, 0.006, 0.045, 5);
		const tars = new THREE.Mesh(tarsGeo, talonMat);
		tars.position.set(side * 0.025, -0.078, -0.06);
		eagle.add(tars);

		for (let toe = 0; toe < 4; toe++) {
			const tAngle = (toe - 1.5) * 0.45;
			const toeGeo = new THREE.CylinderGeometry(0.003, 0.001, 0.022, 3);
			const toeMesh = new THREE.Mesh(toeGeo, talonMat);
			toeMesh.position.set(side * 0.025 + Math.sin(tAngle) * 0.012, -0.098, -0.06 + Math.cos(tAngle) * 0.010);
			toeMesh.rotation.set(0.7, 0, tAngle * 0.3);
			eagle.add(toeMesh);
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
 * Animate the eagle. Wings respond to every flight input.
 */
export function updateEagleAnimation(eagleGroup, dt, state) {
	if (!eagleGroup || !eagleGroup.userData || !eagleGroup.userData.leftShoulder) return;

	const d = eagleGroup.userData;
	const ls = d.leftShoulder;
	const rs = d.rightShoulder;
	const le = d.leftElbow;
	const re = d.rightElbow;
	const tail = d.tailPivot;
	const lp = d.leftPrimaries;
	const rp = d.rightPrimaries;

	const isFlapping = state.isFlapping || false;
	const flapStrength = state.flapStrength || 0;
	const isGliding = state.isGliding || false;
	const isBoosting = state.isBoosting || false;
	const isTurbo = state.isTurbo || false;
	const speed = state.speed || 15;
	const roll = state.roll || 0;
	const pitch = state.pitch || 0;
	const yaw = state.yaw || 0;

	const lerp = (a, b, t) => a + (b - a) * Math.min(1, t);

	// Smooth tracking
	d.smoothRoll = lerp(d.smoothRoll, roll, dt * 4);
	d.smoothPitch = lerp(d.smoothPitch, pitch, dt * 3);
	d.smoothYaw = lerp(d.smoothYaw, yaw || 0, dt * 4);

	// Input-driven adjustments
	const rollFactor = d.smoothRoll / 45;
	const leftRollAdj = rollFactor * 0.12;
	const rightRollAdj = -rollFactor * 0.12;
	const pitchFactor = d.smoothPitch / 30;
	const pitchSweep = pitchFactor * 0.06;
	const yawFactor = d.smoothYaw;
	const leftYawAdj = yawFactor * 0.05;
	const rightYawAdj = -yawFactor * 0.05;
	const speedNorm = Math.min(1, speed / 50);
	const primarySplay = (1 - speedNorm) * 0.06;

	if (isTurbo) {
		ls.rotation.z = lerp(ls.rotation.z, -0.7 + leftRollAdj, dt * 8);
		rs.rotation.z = lerp(rs.rotation.z, 0.7 + rightRollAdj, dt * 8);
		le.rotation.z = lerp(le.rotation.z, -0.4, dt * 6);
		re.rotation.z = lerp(re.rotation.z, 0.4, dt * 6);
		ls.rotation.y = lerp(ls.rotation.y, -0.15, dt * 5);
		rs.rotation.y = lerp(rs.rotation.y, 0.15, dt * 5);
		if (tail) tail.rotation.x = lerp(tail.rotation.x, -0.1 + pitchFactor * 0.05, dt * 5);
	} else if (isBoosting) {
		ls.rotation.z = lerp(ls.rotation.z, -0.6 + leftRollAdj, dt * 7);
		rs.rotation.z = lerp(rs.rotation.z, 0.6 + rightRollAdj, dt * 7);
		le.rotation.z = lerp(le.rotation.z, -0.35, dt * 5);
		re.rotation.z = lerp(re.rotation.z, 0.35, dt * 5);
		if (tail) tail.rotation.x = lerp(tail.rotation.x, 0.15 + pitchFactor * 0.05, dt * 4);
	} else if (isFlapping && flapStrength > 0) {
		d.flapPhase += dt * 8;
		const phase = d.flapPhase % (Math.PI * 2);
		const mainAngle = Math.sin(phase) * 0.55 * flapStrength;
		const elbowAngle = Math.sin(phase + 0.35) * 0.22 * flapStrength;
		const sweepAngle = Math.cos(phase) * 0.10 * flapStrength;

		ls.rotation.z = mainAngle + leftRollAdj + leftYawAdj;
		rs.rotation.z = -mainAngle + rightRollAdj + rightYawAdj;
		le.rotation.z = elbowAngle;
		re.rotation.z = -elbowAngle;
		ls.rotation.y = sweepAngle + pitchSweep;
		rs.rotation.y = -sweepAngle - pitchSweep;

		if (tail) {
			tail.rotation.x = Math.sin(phase + 1) * 0.06 + pitchFactor * 0.03;
			tail.rotation.y = yawFactor * 0.08;
		}
	} else if (isGliding) {
		const time = performance.now() * 0.001;
		const wobble = Math.sin(time * 0.5) * 0.015;
		const dihedral = 0.08 + wobble;

		ls.rotation.z = lerp(ls.rotation.z, dihedral + leftRollAdj + leftYawAdj, dt * 3);
		rs.rotation.z = lerp(rs.rotation.z, -dihedral + rightRollAdj + rightYawAdj, dt * 3);
		le.rotation.z = lerp(le.rotation.z, 0.02 + Math.abs(rollFactor) * 0.05, dt * 3);
		re.rotation.z = lerp(re.rotation.z, -0.02 - Math.abs(rollFactor) * 0.05, dt * 3);
		ls.rotation.y = lerp(ls.rotation.y, pitchSweep, dt * 2.5);
		rs.rotation.y = lerp(rs.rotation.y, -pitchSweep, dt * 2.5);

		if (tail) {
			tail.rotation.x = lerp(tail.rotation.x, pitchFactor * 0.06, dt * 3);
			tail.rotation.y = lerp(tail.rotation.y, yawFactor * 0.1, dt * 3);
		}
		d.flapPhase = 0;
	} else {
		ls.rotation.z = lerp(ls.rotation.z, 0.05 + leftRollAdj, dt * 4);
		rs.rotation.z = lerp(rs.rotation.z, -0.05 + rightRollAdj, dt * 4);
		le.rotation.z = lerp(le.rotation.z, 0, dt * 4);
		re.rotation.z = lerp(re.rotation.z, 0, dt * 4);
		ls.rotation.y = lerp(ls.rotation.y, pitchSweep, dt * 3);
		rs.rotation.y = lerp(rs.rotation.y, -pitchSweep, dt * 3);
	}

	// Primary splay
	if (lp && rp) {
		for (let f = 0; f < Math.min(lp.length, 5); f++) {
			const splay = primarySplay * (f - 2);
			if (lp[f]) lp[f].rotation.y = lerp(lp[f].rotation.y, splay, dt * 3);
			if (rp[f]) rp[f].rotation.y = lerp(rp[f].rotation.y, -splay, dt * 3);
		}
	}

	// Wingtip flex
	if (!isTurbo && !isBoosting) {
		const time = performance.now() * 0.001;
		const tipFlex = Math.sin(time * 3 + 1) * 0.008 * (1 + speed / 50);
		if (le) le.rotation.x = tipFlex;
		if (re) re.rotation.x = -tipFlex;
	}
}
