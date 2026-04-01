import * as THREE from 'three';

/**
 * Procedural Bald Eagle - ONLY unmodified BoxGeometry, SphereGeometry,
 * ConeGeometry, CylinderGeometry. Zero vertex manipulation.
 */

export function createEagleModel() {
	const eagle = new THREE.Group();

	const body_m = new THREE.MeshLambertMaterial({ color: 0x1E0F04 });
	const wing_m = new THREE.MeshLambertMaterial({ color: 0x150800, side: THREE.DoubleSide });
	const head_m = new THREE.MeshLambertMaterial({ color: 0xF8F4EC });
	const beak_m = new THREE.MeshLambertMaterial({ color: 0xE8A000 });
	const tail_m = new THREE.MeshLambertMaterial({ color: 0xF0EDE0, side: THREE.DoubleSide });
	const talon_m = new THREE.MeshLambertMaterial({ color: 0xE8A000 });
	const tip_m = new THREE.MeshLambertMaterial({ color: 0x0A0400, side: THREE.DoubleSide });
	const dark_m = new THREE.MeshLambertMaterial({ color: 0x2A2010 });
	const iris_m = new THREE.MeshLambertMaterial({ color: 0xCCA000 });
	const blk_m = new THREE.MeshBasicMaterial({ color: 0x000000 });

	// BODY
	var g, m;
	g = new THREE.SphereGeometry(1, 8, 6); g.scale(0.09, 0.06, 0.22);
	eagle.add(new THREE.Mesh(g, body_m));

	// BREAST
	g = new THREE.SphereGeometry(1, 6, 5); g.scale(0.07, 0.05, 0.14);
	m = new THREE.Mesh(g, new THREE.MeshLambertMaterial({ color: 0x3B2515 }));
	m.position.set(0, -0.015, 0.03); eagle.add(m);

	// NECK
	m = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.035, 0.04, 6), head_m);
	m.position.set(0, 0.025, 0.16); m.rotation.x = -0.2; eagle.add(m);

	// HEAD
	g = new THREE.SphereGeometry(0.04, 8, 6); g.scale(1, 0.9, 1.1);
	m = new THREE.Mesh(g, head_m); m.position.set(0, 0.045, 0.20); eagle.add(m);

	// BROW
	m = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.008, 0.02), head_m);
	m.position.set(0, 0.06, 0.22); eagle.add(m);

	// UPPER BEAK
	m = new THREE.Mesh(new THREE.ConeGeometry(0.012, 0.045, 4), beak_m);
	m.position.set(0, 0.038, 0.245); m.rotation.x = 1.3; eagle.add(m);

	// LOWER BEAK
	m = new THREE.Mesh(new THREE.ConeGeometry(0.007, 0.02, 3), beak_m);
	m.position.set(0, 0.028, 0.24); m.rotation.x = 1.7; eagle.add(m);

	// EYES
	[-1, 1].forEach(function(s) {
		m = new THREE.Mesh(new THREE.SphereGeometry(0.012, 5, 4), dark_m);
		m.position.set(s*0.028, 0.05, 0.22); eagle.add(m);
		m = new THREE.Mesh(new THREE.SphereGeometry(0.009, 5, 4), iris_m);
		m.position.set(s*0.029, 0.051, 0.224); eagle.add(m);
		m = new THREE.Mesh(new THREE.SphereGeometry(0.005, 4, 3), blk_m);
		m.position.set(s*0.031, 0.051, 0.228); eagle.add(m);
	});

	// WINGS
	function makeWing(left) {
		var s = left ? 1 : -1;
		var pivot = new THREE.Group();
		pivot.position.set(0, 0.012, 0.01);

		// 7 overlapping strips - root to tip, no gaps
		var strips = [
			[0.08, 0.16, 0.18],
			[0.20, 0.14, 0.17],
			[0.31, 0.13, 0.15],
			[0.41, 0.12, 0.13],
			[0.50, 0.10, 0.11],
			[0.58, 0.09, 0.09],
			[0.65, 0.08, 0.07],
		];
		for (var i = 0; i < strips.length; i++) {
			var st = strips[i];
			// Top surface
			m = new THREE.Mesh(new THREE.BoxGeometry(st[1], 0.006, st[2]), wing_m);
			m.position.set(s * st[0], 0.003 - i*0.001, 0);
			pivot.add(m);
			// Bottom surface (slightly darker, offset down)
			m = new THREE.Mesh(new THREE.BoxGeometry(st[1]*0.95, 0.004, st[2]*0.9),
				new THREE.MeshLambertMaterial({ color: 0x2A1A0A, side: THREE.DoubleSide }));
			m.position.set(s * st[0], -0.002 - i*0.001, 0);
			pivot.add(m);
		}

		// Elbow pivot for primaries
		var elbow = new THREE.Group();
		elbow.position.set(s * 0.50, 0, -0.01);

		var primaries = [];
		for (var f = 0; f < 5; f++) {
			var fl = 0.13 - f*0.012;
			m = new THREE.Mesh(new THREE.BoxGeometry(fl, 0.003, 0.016 - f*0.002), tip_m);
			m.position.set(s * (0.22 + fl/2), -0.002, -0.01 + f*0.012);
			m.rotation.y = s * (f-2) * 0.04;
			elbow.add(m);
			primaries.push(m);
		}

		pivot.add(elbow);
		return { pivot: pivot, elbow: elbow, primaries: primaries };
	}

	var lw = makeWing(true);
	var rw = makeWing(false);
	eagle.add(lw.pivot);
	eagle.add(rw.pivot);

	// TAIL
	var tailPivot = new THREE.Group();
	tailPivot.position.set(0, 0.005, -0.19);
	for (var t = 0; t < 9; t++) {
		var a = (t - 4) * 0.06;
		m = new THREE.Mesh(new THREE.BoxGeometry(0.025, 0.004, 0.13), tail_m);
		m.position.set(Math.sin(a)*0.012, 0, -0.065);
		m.rotation.y = a;
		tailPivot.add(m);
	}
	m = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.018, 0.06), body_m);
	m.position.set(0, 0.004, 0.02);
	tailPivot.add(m);
	eagle.add(tailPivot);

	// LEGS
	[-1, 1].forEach(function(s) {
		m = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.008, 0.04, 4), body_m);
		m.position.set(s*0.025, -0.04, -0.05); m.rotation.x = 0.5; eagle.add(m);
		m = new THREE.Mesh(new THREE.CylinderGeometry(0.004, 0.005, 0.04, 4), talon_m);
		m.position.set(s*0.025, -0.07, -0.06); eagle.add(m);
	});

	eagle.rotation.y = Math.PI;

	eagle.userData = {
		leftShoulder: lw.pivot,
		rightShoulder: rw.pivot,
		leftElbow: lw.elbow,
		rightElbow: rw.elbow,
		leftPrimaries: lw.primaries,
		rightPrimaries: rw.primaries,
		tailPivot: tailPivot,
		flapPhase: 0,
		smoothRoll: 0,
		smoothPitch: 0,
		smoothYaw: 0
	};

	return eagle;
}

export function updateEagleAnimation(eagleGroup, dt, state) {
	if (!eagleGroup || !eagleGroup.userData || !eagleGroup.userData.leftShoulder) return;

	var d = eagleGroup.userData;
	var ls = d.leftShoulder, rs = d.rightShoulder;
	var le = d.leftElbow, re = d.rightElbow;
	var tail = d.tailPivot;
	var lp = d.leftPrimaries, rp = d.rightPrimaries;

	var flap = state.isFlapping || false;
	var fs = state.flapStrength || 0;
	var glide = state.isGliding || false;
	var boost = state.isBoosting || false;
	var turbo = state.isTurbo || false;
	var speed = state.speed || 15;

	function mix(a, b, t) { return a + (b - a) * Math.min(1, t); }

	d.smoothRoll = mix(d.smoothRoll, state.roll || 0, dt * 4);
	d.smoothPitch = mix(d.smoothPitch, state.pitch || 0, dt * 3);
	d.smoothYaw = mix(d.smoothYaw, state.yaw || 0, dt * 4);

	var rf = d.smoothRoll / 45;
	var lra = rf * 0.12, rra = -rf * 0.12;
	var pf = d.smoothPitch / 30;
	var ps = pf * 0.06;
	var yf = d.smoothYaw;

	if (turbo) {
		ls.rotation.z = mix(ls.rotation.z, -0.7 + lra, dt * 8);
		rs.rotation.z = mix(rs.rotation.z, 0.7 + rra, dt * 8);
		le.rotation.z = mix(le.rotation.z, -0.4, dt * 6);
		re.rotation.z = mix(re.rotation.z, 0.4, dt * 6);
		if (tail) tail.rotation.x = mix(tail.rotation.x, -0.1, dt * 5);
	} else if (boost) {
		ls.rotation.z = mix(ls.rotation.z, -0.6 + lra, dt * 7);
		rs.rotation.z = mix(rs.rotation.z, 0.6 + rra, dt * 7);
		le.rotation.z = mix(le.rotation.z, -0.35, dt * 5);
		re.rotation.z = mix(re.rotation.z, 0.35, dt * 5);
		if (tail) tail.rotation.x = mix(tail.rotation.x, 0.15, dt * 4);
	} else if (flap && fs > 0) {
		d.flapPhase += dt * 8;
		var ph = d.flapPhase % (Math.PI * 2);
		var ma = Math.sin(ph) * 0.55 * fs;
		var ea = Math.sin(ph + 0.35) * 0.22 * fs;
		var sw = Math.cos(ph) * 0.10 * fs;
		ls.rotation.z = ma + lra; rs.rotation.z = -ma + rra;
		le.rotation.z = ea; re.rotation.z = -ea;
		ls.rotation.y = sw + ps; rs.rotation.y = -sw - ps;
		if (tail) { tail.rotation.x = Math.sin(ph + 1) * 0.06; tail.rotation.y = yf * 0.08; }
	} else if (glide) {
		var dih = 0.08 + Math.sin(performance.now() * 0.0005) * 0.015;
		ls.rotation.z = mix(ls.rotation.z, dih + lra, dt * 3);
		rs.rotation.z = mix(rs.rotation.z, -dih + rra, dt * 3);
		le.rotation.z = mix(le.rotation.z, 0.02, dt * 3);
		re.rotation.z = mix(re.rotation.z, -0.02, dt * 3);
		ls.rotation.y = mix(ls.rotation.y, ps, dt * 2.5);
		rs.rotation.y = mix(rs.rotation.y, -ps, dt * 2.5);
		if (tail) { tail.rotation.x = mix(tail.rotation.x, pf * 0.06, dt * 3); tail.rotation.y = mix(tail.rotation.y, yf * 0.1, dt * 3); }
		d.flapPhase = 0;
	} else {
		ls.rotation.z = mix(ls.rotation.z, 0.05 + lra, dt * 4);
		rs.rotation.z = mix(rs.rotation.z, -0.05 + rra, dt * 4);
		le.rotation.z = mix(le.rotation.z, 0, dt * 4);
		re.rotation.z = mix(re.rotation.z, 0, dt * 4);
	}

	var sn = Math.min(1, speed / 50);
	var priSplay = (1 - sn) * 0.06;
	if (lp && rp) {
		for (var f = 0; f < 5; f++) {
			var sp = priSplay * (f - 2);
			if (lp[f]) lp[f].rotation.y = mix(lp[f].rotation.y, sp, dt * 3);
			if (rp[f]) rp[f].rotation.y = mix(rp[f].rotation.y, -sp, dt * 3);
		}
	}
}
