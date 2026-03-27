import * as THREE from 'three';

/**
 * Procedural Bald Eagle with airfoil-shaped wings.
 *
 * Wing cross-section: cambered airfoil (curved top, flatter bottom)
 * Wing planform: tapers from root to tip with swept leading edge
 * Wings respond dynamically to pitch, roll, yaw, and speed
 */

/**
 * Create a cambered airfoil wing section as BufferGeometry.
 * The wing has a curved upper surface and flatter lower surface,
 * tapering from root chord to tip chord along the span.
 *
 * @param {number} span - Wing half-span length
 * @param {number} rootChord - Chord (front-to-back width) at wing root
 * @param {number} tipChord - Chord at wing tip
 * @param {number} camber - Max camber height (curvature of upper surface)
 * @param {number} thickness - Airfoil thickness at thickest point
 * @param {number} segments - Number of spanwise segments (more = smoother flex)
 * @param {number} chordSegs - Number of chordwise segments
 * @param {boolean} isLeft - Left wing (positive X) or right
 */
function createAirfoilWing(span, rootChord, tipChord, camber, thickness, segments, chordSegs, isLeft) {
	const sign = isLeft ? 1 : -1;
	const vertices = [];
	const indices = [];
	const normals = [];
	const uvs = [];

	for (let i = 0; i <= segments; i++) {
		const t = i / segments; // 0 at root, 1 at tip
		const x = sign * t * span;
		const chord = rootChord + (tipChord - rootChord) * t;
		const localCamber = camber * (1 - t * 0.6); // Less camber at tip
		const localThickness = thickness * (1 - t * 0.5); // Thinner at tip
		// Sweep: leading edge moves back toward tip
		const sweep = t * t * rootChord * 0.15;

		for (let j = 0; j <= chordSegs; j++) {
			const s = j / chordSegs; // 0 at leading edge, 1 at trailing edge

			// Airfoil profile: NACA-like camber line
			const camberLine = 4 * localCamber * s * (1 - s); // Parabolic camber
			// Thickness distribution: thicker near 30% chord, thin at edges
			const thickDist = localThickness * (2.969 * Math.sqrt(s) - 1.26 * s - 3.516 * s * s + 2.843 * s * s * s - 1.015 * s * s * s * s) * 0.6;

			const z = -chord * s + chord * 0.3 + sweep; // Chordwise position (leading edge forward)

			// Upper surface vertex
			vertices.push(x, camberLine + Math.max(thickDist, 0.001), z);
			normals.push(0, 1, 0);
			uvs.push(t, s);

			// Lower surface vertex
			vertices.push(x, camberLine - Math.max(thickDist, 0.001) * 0.5, z);
			normals.push(0, -1, 0);
			uvs.push(t, s);
		}
	}

	// Build triangle indices
	const vertsPerRow = (chordSegs + 1) * 2;
	for (let i = 0; i < segments; i++) {
		for (let j = 0; j < chordSegs; j++) {
			const base = i * vertsPerRow + j * 2;
			const next = base + vertsPerRow;

			// Upper surface triangles
			indices.push(base, next, base + 2);
			indices.push(base + 2, next, next + 2);

			// Lower surface triangles (reversed winding)
			indices.push(base + 1, base + 3, next + 1);
			indices.push(base + 3, next + 3, next + 1);
		}
	}

	// Leading edge strip (connects upper and lower)
	for (let i = 0; i < segments; i++) {
		const base = i * vertsPerRow;
		const next = base + vertsPerRow;
		indices.push(base, base + 1, next);
		indices.push(base + 1, next + 1, next);
	}

	// Trailing edge strip
	for (let i = 0; i < segments; i++) {
		const base = i * vertsPerRow + chordSegs * 2;
		const next = base + vertsPerRow;
		indices.push(base, next, base + 1);
		indices.push(base + 1, next, next + 1);
	}

	const geo = new THREE.BufferGeometry();
	geo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
	geo.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3));
	geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
	geo.setIndex(indices);
	geo.computeVertexNormals();

	return geo;
}

export function createEagleModel() {
	const eagle = new THREE.Group();

	// === MATERIALS ===
	const bodyMat = new THREE.MeshStandardMaterial({ color: 0x1E0F04, roughness: 0.85, flatShading: true });
	const wingTopMat = new THREE.MeshStandardMaterial({ color: 0x150800, roughness: 0.80, flatShading: true, side: THREE.DoubleSide });
	const wingUnderMat = new THREE.MeshStandardMaterial({ color: 0x2A1A0A, roughness: 0.85, flatShading: true, side: THREE.DoubleSide });
	const underMat = new THREE.MeshStandardMaterial({ color: 0x3B2515, roughness: 0.85, flatShading: true });
	const headMat = new THREE.MeshStandardMaterial({ color: 0xF8F4EC, roughness: 0.55, flatShading: true });
	const beakMat = new THREE.MeshStandardMaterial({ color: 0xE8A000, roughness: 0.35, metalness: 0.1, flatShading: true });
	const eyeMat = new THREE.MeshStandardMaterial({ color: 0xCCA000, roughness: 0.3, metalness: 0.2 });
	const pupilMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
	const tailMat = new THREE.MeshStandardMaterial({ color: 0xF0EDE0, roughness: 0.65, flatShading: true, side: THREE.DoubleSide });
	const talonMat = new THREE.MeshStandardMaterial({ color: 0xE8A000, roughness: 0.5, flatShading: true });
	const featherTipMat = new THREE.MeshStandardMaterial({ color: 0x0A0400, roughness: 0.85, flatShading: true, side: THREE.DoubleSide });
	const neckMat = new THREE.MeshStandardMaterial({ color: 0xE8E0D0, roughness: 0.6, flatShading: true });

	// === BODY ===
	const bodyGeo = new THREE.SphereGeometry(1, 10, 8);
	bodyGeo.scale(0.085, 0.06, 0.22);
	eagle.add(new THREE.Mesh(bodyGeo, bodyMat));

	const keelGeo = new THREE.SphereGeometry(1, 8, 6);
	keelGeo.scale(0.07, 0.055, 0.15);
	const keel = new THREE.Mesh(keelGeo, underMat);
	keel.position.set(0, -0.018, 0.03);
	eagle.add(keel);

	// Spine ridge
	const spineGeo = new THREE.BoxGeometry(0.025, 0.007, 0.15);
	const spine = new THREE.Mesh(spineGeo, bodyMat);
	spine.position.set(0, 0.042, -0.02);
	eagle.add(spine);

	// === NECK + HEAD ===
	const neckGeo = new THREE.CylinderGeometry(0.028, 0.04, 0.05, 6);
	const neck = new THREE.Mesh(neckGeo, neckMat);
	neck.position.set(0, 0.025, 0.17);
	neck.rotation.x = -0.25;
	eagle.add(neck);

	const ruffGeo = new THREE.SphereGeometry(0.032, 6, 5);
	ruffGeo.scale(1, 0.7, 1);
	eagle.add(Object.assign(new THREE.Mesh(ruffGeo, headMat), { position: new THREE.Vector3(0, 0.015, 0.16) }));

	const headGeo = new THREE.SphereGeometry(0.042, 8, 7);
	headGeo.scale(1.0, 0.95, 1.1);
	const head = new THREE.Mesh(headGeo, headMat);
	head.position.set(0, 0.045, 0.21);
	eagle.add(head);

	// Brow ridge
	const browGeo = new THREE.BoxGeometry(0.055, 0.010, 0.022);
	const brow = new THREE.Mesh(browGeo, new THREE.MeshStandardMaterial({ color: 0xEAE6D8, roughness: 0.7, flatShading: true }));
	brow.position.set(0, 0.062, 0.225);
	eagle.add(brow);

	// Beak
	const upperBeakGeo = new THREE.ConeGeometry(0.013, 0.05, 5);
	const upperBeak = new THREE.Mesh(upperBeakGeo, beakMat);
	upperBeak.position.set(0, 0.04, 0.255);
	upperBeak.rotation.x = Math.PI * 0.42;
	eagle.add(upperBeak);

	const hookGeo = new THREE.SphereGeometry(0.006, 4, 3);
	hookGeo.scale(0.8, 1.2, 1);
	const hook = new THREE.Mesh(hookGeo, beakMat);
	hook.position.set(0, 0.028, 0.268);
	eagle.add(hook);

	const lowerBeakGeo = new THREE.ConeGeometry(0.007, 0.025, 4);
	const lowerBeak = new THREE.Mesh(lowerBeakGeo, beakMat);
	lowerBeak.position.set(0, 0.030, 0.25);
	lowerBeak.rotation.x = Math.PI * 0.52;
	eagle.add(lowerBeak);

	// Cere
	const cereGeo = new THREE.SphereGeometry(0.009, 5, 4);
	eagle.add(Object.assign(new THREE.Mesh(cereGeo, beakMat), { position: new THREE.Vector3(0, 0.048, 0.235) }));

	// Eyes
	for (const side of [-1, 1]) {
		const socketGeo = new THREE.SphereGeometry(0.013, 6, 5);
		eagle.add(Object.assign(new THREE.Mesh(socketGeo, new THREE.MeshStandardMaterial({ color: 0x2A2010, roughness: 0.9 })), { position: new THREE.Vector3(side * 0.029, 0.052, 0.226) }));
		const irisGeo = new THREE.SphereGeometry(0.010, 6, 5);
		eagle.add(Object.assign(new THREE.Mesh(irisGeo, eyeMat), { position: new THREE.Vector3(side * 0.030, 0.053, 0.228) }));
		const pupGeo = new THREE.SphereGeometry(0.005, 5, 4);
		eagle.add(Object.assign(new THREE.Mesh(pupGeo, pupilMat), { position: new THREE.Vector3(side * 0.033, 0.053, 0.233) }));
	}

	// === WINGS (cambered airfoil, multi-segment) ===
	function buildWing(isLeft) {
		const sign = isLeft ? 1 : -1;
		const shoulderPivot = new THREE.Group();
		shoulderPivot.position.set(sign * 0.065, 0.015, 0.01);

		// Inner wing: airfoil-shaped, 6 spanwise segments for flex
		const innerGeo = createAirfoilWing(
			0.38,   // span
			0.17,   // root chord
			0.12,   // tip chord
			0.012,  // camber
			0.008,  // thickness
			6,      // span segments
			5,      // chord segments
			isLeft
		);
		const inner = new THREE.Mesh(innerGeo, wingTopMat);
		shoulderPivot.add(inner);

		// Inner wing underside (slightly different color)
		const innerUnder = new THREE.Mesh(innerGeo.clone(), wingUnderMat);
		innerUnder.scale.y = -0.5;
		shoulderPivot.add(innerUnder);

		// Covert feather rows on inner wing
		for (let c = 0; c < 3; c++) {
			const covGeo = new THREE.BoxGeometry(0.22 - c * 0.03, 0.003, 0.020);
			covGeo.translate(sign * (0.16 + c * 0.04), 0, 0);
			const cov = new THREE.Mesh(covGeo, bodyMat);
			cov.position.set(0, 0.008 + c * 0.002, -0.03 + c * 0.022);
			shoulderPivot.add(cov);
		}

		// Elbow pivot
		const elbowPivot = new THREE.Group();
		elbowPivot.position.set(sign * 0.42, 0, 0);

		// Outer wing: airfoil-shaped, 8 segments for more flex at tips
		const outerGeo = createAirfoilWing(
			0.48,   // span (longer than inner)
			0.12,   // root chord
			0.04,   // tip chord (narrow tip)
			0.010,  // camber
			0.006,  // thickness (thinner)
			8,       // more segments for tip flex
			4,       // chord segments
			isLeft
		);
		const outer = new THREE.Mesh(outerGeo, wingTopMat);
		elbowPivot.add(outer);

		const outerUnder = new THREE.Mesh(outerGeo.clone(), wingUnderMat);
		outerUnder.scale.y = -0.5;
		elbowPivot.add(outerUnder);

		// Primary feather "fingers" - 5 separated tips with individual flex
		const primaries = [];
		for (let f = 0; f < 5; f++) {
			const fLen = 0.10 - f * 0.012;
			const fGeo = createAirfoilWing(fLen, 0.022, 0.008, 0.004, 0.003, 3, 2, isLeft);
			const feather = new THREE.Mesh(fGeo, featherTipMat);
			feather.position.set(sign * 0.46, 0, -0.025 + f * 0.018);
			feather.rotation.y = sign * (f - 2) * 0.04;
			elbowPivot.add(feather);
			primaries.push(feather);
		}

		shoulderPivot.add(elbowPivot);

		// Wrist pivot (between elbow and primaries for fine control)
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
	tailPivot.add(Object.assign(new THREE.Mesh(utcGeo, bodyMat), { position: new THREE.Vector3(0, 0.005, 0.02) }));
	const ltcGeo = new THREE.BoxGeometry(0.06, 0.012, 0.05);
	tailPivot.add(Object.assign(new THREE.Mesh(ltcGeo, tailMat), { position: new THREE.Vector3(0, -0.008, 0.01) }));
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
			const toeMat2 = toe < 3 ? talonMat : new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.5 });
			const toeMesh = new THREE.Mesh(toeGeo, toeMat2);
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
		// Smooth tracking for responsive wing positions
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

	// Smooth input tracking for natural lag
	d.smoothRoll = lerp(d.smoothRoll, roll, dt * 4);
	d.smoothPitch = lerp(d.smoothPitch, pitch, dt * 3);
	d.smoothYaw = lerp(d.smoothYaw, yaw || 0, dt * 4);

	// === ROLL RESPONSE: banking wing tucks slightly, other extends ===
	const rollFactor = d.smoothRoll / 45; // Normalized -1 to 1
	const leftRollAdj = rollFactor * 0.12;  // Left wing adjusts to roll
	const rightRollAdj = -rollFactor * 0.12;

	// === PITCH RESPONSE: wings sweep back on pitch up, forward on pitch down ===
	const pitchFactor = d.smoothPitch / 30;
	const pitchSweep = pitchFactor * 0.06; // Wings rotate fore/aft

	// === YAW RESPONSE: asymmetric wing extension ===
	const yawFactor = d.smoothYaw;
	const leftYawAdj = yawFactor * 0.05;
	const rightYawAdj = -yawFactor * 0.05;

	// === SPEED RESPONSE: primaries close at high speed, splay at low speed ===
	const speedNorm = Math.min(1, speed / 50);
	const primarySplay = (1 - speedNorm) * 0.06; // More splay at low speed

	if (isTurbo) {
		// Swept back tight
		ls.rotation.z = lerp(ls.rotation.z, -0.7 + leftRollAdj, dt * 8);
		rs.rotation.z = lerp(rs.rotation.z, 0.7 + rightRollAdj, dt * 8);
		le.rotation.z = lerp(le.rotation.z, -0.4, dt * 6);
		re.rotation.z = lerp(re.rotation.z, 0.4, dt * 6);
		ls.rotation.y = lerp(ls.rotation.y, -0.15, dt * 5);
		rs.rotation.y = lerp(rs.rotation.y, 0.15, dt * 5);
		if (tail) tail.rotation.x = lerp(tail.rotation.x, -0.1 + pitchFactor * 0.05, dt * 5);
	} else if (isBoosting) {
		// Tucked dive with roll response
		ls.rotation.z = lerp(ls.rotation.z, -0.6 + leftRollAdj, dt * 7);
		rs.rotation.z = lerp(rs.rotation.z, 0.6 + rightRollAdj, dt * 7);
		le.rotation.z = lerp(le.rotation.z, -0.35, dt * 5);
		re.rotation.z = lerp(re.rotation.z, 0.35, dt * 5);
		if (tail) tail.rotation.x = lerp(tail.rotation.x, 0.15 + pitchFactor * 0.05, dt * 4);
	} else if (isFlapping && flapStrength > 0) {
		// Active flapping with roll/pitch/yaw response
		d.flapPhase += dt * 8;
		const phase = d.flapPhase % (Math.PI * 2);

		// Asymmetric downstroke: downstroke pulls hard, upstroke is lighter
		const downPhase = Math.sin(phase);
		const mainAngle = downPhase * 0.55 * flapStrength;

		// Elbow leads slightly on downstroke, lags on upstroke
		const elbowPhase = Math.sin(phase + 0.35);
		const elbowAngle = elbowPhase * 0.22 * flapStrength;

		// Forward sweep on downstroke for thrust
		const sweepAngle = Math.cos(phase) * 0.10 * flapStrength;

		ls.rotation.z = mainAngle + leftRollAdj + leftYawAdj;
		rs.rotation.z = -mainAngle + rightRollAdj + rightYawAdj;
		le.rotation.z = elbowAngle;
		re.rotation.z = -elbowAngle;
		ls.rotation.y = sweepAngle + pitchSweep;
		rs.rotation.y = -sweepAngle - pitchSweep;

		// Tail pumps for balance during flapping
		if (tail) {
			tail.rotation.x = Math.sin(phase + 1) * 0.06 + pitchFactor * 0.03;
			tail.rotation.y = yawFactor * 0.08; // Tail rudders in yaw
		}
	} else if (isGliding) {
		// Soaring: gentle dihedral with constant roll/pitch/yaw response
		const time = performance.now() * 0.001;
		const wobble = Math.sin(time * 0.5) * 0.015; // Thermal wobble
		const dihedral = 0.08 + wobble;

		ls.rotation.z = lerp(ls.rotation.z, dihedral + leftRollAdj + leftYawAdj, dt * 3);
		rs.rotation.z = lerp(rs.rotation.z, -dihedral + rightRollAdj + rightYawAdj, dt * 3);

		// Elbows: slight flex during glide, more when banking
		le.rotation.z = lerp(le.rotation.z, 0.02 + Math.abs(rollFactor) * 0.05, dt * 3);
		re.rotation.z = lerp(re.rotation.z, -0.02 - Math.abs(rollFactor) * 0.05, dt * 3);

		// Wings sweep with pitch
		ls.rotation.y = lerp(ls.rotation.y, pitchSweep, dt * 2.5);
		rs.rotation.y = lerp(rs.rotation.y, -pitchSweep, dt * 2.5);

		// Tail as elevator and rudder
		if (tail) {
			tail.rotation.x = lerp(tail.rotation.x, pitchFactor * 0.06, dt * 3);
			tail.rotation.y = lerp(tail.rotation.y, yawFactor * 0.1, dt * 3);
			// Tail fans wider at slow speed (more control surface)
			tail.scale.x = lerp(tail.scale.x, 1 + (1 - speedNorm) * 0.3, dt * 2);
		}

		d.flapPhase = 0;
	} else {
		// Transition / settling
		ls.rotation.z = lerp(ls.rotation.z, 0.05 + leftRollAdj, dt * 4);
		rs.rotation.z = lerp(rs.rotation.z, -0.05 + rightRollAdj, dt * 4);
		le.rotation.z = lerp(le.rotation.z, 0, dt * 4);
		re.rotation.z = lerp(re.rotation.z, 0, dt * 4);
		ls.rotation.y = lerp(ls.rotation.y, pitchSweep, dt * 3);
		rs.rotation.y = lerp(rs.rotation.y, -pitchSweep, dt * 3);
	}

	// === PRIMARY FEATHER SPLAY (all flight modes) ===
	if (lp && rp) {
		for (let f = 0; f < Math.min(lp.length, 5); f++) {
			const splay = primarySplay * (f - 2);
			if (lp[f]) lp[f].rotation.y = lerp(lp[f].rotation.y, splay, dt * 3);
			if (rp[f]) rp[f].rotation.y = lerp(rp[f].rotation.y, -splay, dt * 3);
		}
	}

	// === WINGTIP FLEX (wind buffet) ===
	if (!isTurbo && !isBoosting) {
		const time = performance.now() * 0.001;
		const tipFlex = Math.sin(time * 3 + 1) * 0.008 * (1 + speed / 50);
		if (le) le.rotation.x = tipFlex;
		if (re) re.rotation.x = -tipFlex;
	}
}
