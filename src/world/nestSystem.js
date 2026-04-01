import * as THREE from 'three';

/**
 * Eagle Nest - Detailed 3D model of the Big Bear bald eagle nest.
 *
 * Based on the real Friends of Big Bear Valley eagle cam nest:
 * - Located in a tall Jeffrey Pine tree near Big Bear Lake
 * - Nest is approximately 2m (6ft) wide, 1.5m deep
 * - Jackie (the adult eagle) sits on the nest with 2-3 eaglets
 * - The nest tree is on a hillside overlooking the lake
 *
 * Exact location: 34.2433°N, 116.9155°W, ~2070m elevation
 * The nest is at approximately 30m height in the tree
 */

// Nest location (real coordinates near Big Bear Lake shore)
export const NEST_LOCATION = {
	lon: -116.9155,
	lat: 34.2433,
	elevation: 2070,   // meters (ground level)
	treeHeight: 30,    // meters (nest height in tree)
	heading: 210,      // Southwest facing, toward the lake
};

export class NestSystem {
	constructor(threeScene) {
		this.scene = threeScene;
		this.nestGroup = new THREE.Group();
		this.jackieGroup = null;
		this.chicksGroup = null;
		this.time = 0;

		this.buildNest();
		this.scene.add(this.nestGroup);
		this.nestGroup.visible = false;
		this.nestGroup.traverse(child => { child.layers.set(0); });
	}

	buildNest() {
		// ============ THE NEST TREE (tall Jeffrey Pine) ============
		const trunkMat = new THREE.MeshLambertMaterial({ color: 0x5C3A1E, flatShading: true });
		const barkMat = new THREE.MeshLambertMaterial({ color: 0x4A2E15, flatShading: true });

		// Main trunk - tapered cylinder
		const trunkGeo = new THREE.CylinderGeometry(0.3, 0.6, NEST_LOCATION.treeHeight, 8);
		const trunk = new THREE.Mesh(trunkGeo, trunkMat);
		trunk.position.y = NEST_LOCATION.treeHeight / 2;
		this.nestGroup.add(trunk);

		// Bark texture rings
		for (let i = 0; i < 6; i++) {
			const ringGeo = new THREE.TorusGeometry(0.35 + (1 - i / 6) * 0.15, 0.04, 4, 8);
			const ring = new THREE.Mesh(ringGeo, barkMat);
			ring.position.y = 3 + i * 4.5;
			ring.rotation.x = Math.PI / 2;
			this.nestGroup.add(ring);
		}

		// Major branches
		const branchMat = new THREE.MeshLambertMaterial({ color: 0x6B4226, flatShading: true });
		const branches = [
			{ y: 22, angle: 0, length: 6, tilt: 0.6 },
			{ y: 24, angle: Math.PI * 0.6, length: 7, tilt: 0.5 },
			{ y: 26, angle: Math.PI * 1.2, length: 5.5, tilt: 0.55 },
			{ y: 28, angle: Math.PI * 0.3, length: 5, tilt: 0.4 },
			{ y: 28, angle: Math.PI * 1.5, length: 4.5, tilt: 0.45 },
			// Nest support branches
			{ y: 29, angle: Math.PI * 0.8, length: 3, tilt: 0.2 },
			{ y: 29, angle: Math.PI * 1.8, length: 3.5, tilt: 0.15 },
		];

		for (const b of branches) {
			const branchGeo = new THREE.CylinderGeometry(0.05, 0.15, b.length, 5);
			branchGeo.translate(0, b.length / 2, 0);
			const branch = new THREE.Mesh(branchGeo, branchMat);
			branch.position.y = b.y;
			branch.rotation.z = b.tilt;
			branch.rotation.y = b.angle;
			this.nestGroup.add(branch);
		}

		// Crown foliage (pine needle clusters)
		const foliageMat = new THREE.MeshLambertMaterial({ color: 0x2D5A27, flatShading: true });
		const darkFoliageMat = new THREE.MeshLambertMaterial({ color: 0x1B4D1B, flatShading: true });
		const foliagePositions = [
			{ x: 0, y: 32, z: 0, r: 3.5 },
			{ x: 2, y: 30, z: 1, r: 2.5 },
			{ x: -2.5, y: 29, z: -1, r: 2.8 },
			{ x: 1, y: 28, z: -2, r: 2.2 },
			{ x: -1, y: 31, z: 2, r: 2.5 },
			{ x: 3, y: 27, z: 0, r: 2 },
			{ x: -3, y: 26, z: 1, r: 2.3 },
			{ x: 0, y: 34, z: 0, r: 2 },
		];

		for (const f of foliagePositions) {
			const fGeo = new THREE.SphereGeometry(f.r, 5, 4);
			// Flatten slightly to look like pine clusters
			fGeo.scale(1, 0.6, 1);
			const mat = f.y > 30 ? foliageMat : darkFoliageMat;
			const foliage = new THREE.Mesh(fGeo, mat);
			foliage.position.set(f.x, f.y, f.z);
			this.nestGroup.add(foliage);
		}

		// ============ THE NEST ============
		// Large stick nest - approximately 2m wide, 1m deep
		const nestBaseMat = new THREE.MeshLambertMaterial({ color: 0x6B5A3A, flatShading: true });
		const nestDarkMat = new THREE.MeshLambertMaterial({ color: 0x4A3A20, flatShading: true });

		// Nest base - flattened cylinder with rough edges
		const nestBaseGeo = new THREE.CylinderGeometry(1.0, 1.2, 0.6, 12);
		const nestBase = new THREE.Mesh(nestBaseGeo, nestBaseMat);
		nestBase.position.set(0.5, NEST_LOCATION.treeHeight, 0.3);
		this.nestGroup.add(nestBase);

		// Nest rim - torus for the raised edge
		const nestRimGeo = new THREE.TorusGeometry(1.0, 0.15, 6, 16);
		const nestRim = new THREE.Mesh(nestRimGeo, nestDarkMat);
		nestRim.position.set(0.5, NEST_LOCATION.treeHeight + 0.3, 0.3);
		nestRim.rotation.x = Math.PI / 2;
		this.nestGroup.add(nestRim);

		// Stick details around the nest
		const stickMat = new THREE.MeshLambertMaterial({ color: 0x7A6A4A, flatShading: true });
		for (let i = 0; i < 20; i++) {
			const angle = (i / 20) * Math.PI * 2;
			const r = 0.9 + Math.random() * 0.4;
			const stickGeo = new THREE.CylinderGeometry(0.02, 0.02, 0.3 + Math.random() * 0.5, 3);
			const stick = new THREE.Mesh(stickGeo, stickMat);
			stick.position.set(
				0.5 + Math.cos(angle) * r,
				NEST_LOCATION.treeHeight + 0.2,
				0.3 + Math.sin(angle) * r
			);
			stick.rotation.z = (Math.random() - 0.5) * 0.8;
			stick.rotation.x = (Math.random() - 0.5) * 0.8;
			this.nestGroup.add(stick);
		}

		// Nest lining (softer material in center - grass, moss, down)
		const liningMat = new THREE.MeshLambertMaterial({ color: 0x8A7A5A, flatShading: true });
		const liningGeo = new THREE.CylinderGeometry(0.7, 0.8, 0.15, 10);
		const lining = new THREE.Mesh(liningGeo, liningMat);
		lining.position.set(0.5, NEST_LOCATION.treeHeight + 0.1, 0.3);
		this.nestGroup.add(lining);

		// ============ JACKIE (adult bald eagle on nest) ============
		this.jackieGroup = new THREE.Group();
		this.jackieGroup.position.set(0.5, NEST_LOCATION.treeHeight + 0.4, 0.3);

		// Body - dark brown, oval
		const bodyMat = new THREE.MeshLambertMaterial({ color: 0x2A1A0A, flatShading: true });
		const bodyGeo = new THREE.SphereGeometry(0.35, 6, 5);
		bodyGeo.scale(1, 0.7, 1.3);
		const body = new THREE.Mesh(bodyGeo, bodyMat);
		body.position.y = 0.2;
		this.jackieGroup.add(body);

		// White head
		const headMat = new THREE.MeshLambertMaterial({ color: 0xFAFAFA, flatShading: true });
		const headGeo = new THREE.SphereGeometry(0.15, 6, 5);
		const head = new THREE.Mesh(headGeo, headMat);
		head.position.set(0, 0.45, 0.25);
		this.jackieGroup.add(head);

		// Yellow beak
		const beakMat = new THREE.MeshLambertMaterial({ color: 0xFFCC00, flatShading: true });
		const beakGeo = new THREE.ConeGeometry(0.04, 0.12, 4);
		const beak = new THREE.Mesh(beakGeo, beakMat);
		beak.position.set(0, 0.42, 0.38);
		beak.rotation.x = Math.PI / 2;
		this.jackieGroup.add(beak);

		// Eyes (dark dots)
		const eyeMat = new THREE.MeshBasicMaterial({ color: 0x111111 });
		const eyeGeo = new THREE.SphereGeometry(0.02, 4, 4);
		const eyeL = new THREE.Mesh(eyeGeo, eyeMat);
		eyeL.position.set(-0.06, 0.47, 0.33);
		this.jackieGroup.add(eyeL);
		const eyeR = new THREE.Mesh(eyeGeo, eyeMat);
		eyeR.position.set(0.06, 0.47, 0.33);
		this.jackieGroup.add(eyeR);

		// White tail feathers
		const tailMat = new THREE.MeshLambertMaterial({ color: 0xEEEEEE, flatShading: true });
		const tailGeo = new THREE.BoxGeometry(0.15, 0.04, 0.3);
		const tail = new THREE.Mesh(tailGeo, tailMat);
		tail.position.set(0, 0.15, -0.35);
		this.jackieGroup.add(tail);

		// Wings (folded at sides)
		const wingMat = new THREE.MeshLambertMaterial({ color: 0x1A0A00, flatShading: true });
		const wingGeo = new THREE.BoxGeometry(0.05, 0.2, 0.5);
		const wingL = new THREE.Mesh(wingGeo, wingMat);
		wingL.position.set(-0.25, 0.25, -0.05);
		wingL.rotation.z = 0.2;
		this.jackieGroup.add(wingL);
		const wingR = new THREE.Mesh(wingGeo, wingMat);
		wingR.position.set(0.25, 0.25, -0.05);
		wingR.rotation.z = -0.2;
		this.jackieGroup.add(wingR);

		this.nestGroup.add(this.jackieGroup);

		// ============ EAGLETS / EGGS ============
		this.chicksGroup = new THREE.Group();
		this.chicksGroup.position.set(0.5, NEST_LOCATION.treeHeight + 0.3, 0.3);

		// 2 eggs (white/off-white ovals)
		const eggMat = new THREE.MeshLambertMaterial({ color: 0xF5F0E0, flatShading: true });
		const eggGeo = new THREE.SphereGeometry(0.06, 6, 5);
		eggGeo.scale(1, 0.7, 1.2);

		const egg1 = new THREE.Mesh(eggGeo, eggMat);
		egg1.position.set(-0.15, 0.05, 0.1);
		this.chicksGroup.add(egg1);

		const egg2 = new THREE.Mesh(eggGeo, eggMat);
		egg2.position.set(0.1, 0.05, -0.05);
		this.chicksGroup.add(egg2);

		// 1 fluffy chick (small gray/white ball with dark eyes)
		const chickMat = new THREE.MeshLambertMaterial({ color: 0xCCCCCC, flatShading: true });
		const chickBody = new THREE.SphereGeometry(0.08, 5, 4);
		const chick = new THREE.Mesh(chickBody, chickMat);
		chick.position.set(0.2, 0.1, 0.15);
		this.chicksGroup.add(chick);

		// Chick head
		const chickHeadGeo = new THREE.SphereGeometry(0.05, 5, 4);
		const chickHead = new THREE.Mesh(chickHeadGeo, chickMat);
		chickHead.position.set(0.2, 0.2, 0.2);
		this.chicksGroup.add(chickHead);

		// Chick eyes
		const chickEyeL = new THREE.Mesh(eyeGeo, eyeMat);
		chickEyeL.position.set(0.17, 0.22, 0.24);
		this.chicksGroup.add(chickEyeL);
		const chickEyeR = new THREE.Mesh(eyeGeo, eyeMat);
		chickEyeR.position.set(0.23, 0.22, 0.24);
		this.chicksGroup.add(chickEyeR);

		// Chick beak
		const chickBeakGeo = new THREE.ConeGeometry(0.015, 0.04, 3);
		const chickBeak = new THREE.Mesh(chickBeakGeo, new THREE.MeshLambertMaterial({ color: 0x333333 }));
		chickBeak.position.set(0.2, 0.21, 0.26);
		chickBeak.rotation.x = Math.PI / 2;
		this.chicksGroup.add(chickBeak);

		this.nestGroup.add(this.chicksGroup);
	}

	/**
	 * Update nest position and animation relative to eagle
	 */
	update(dt, state) {
		this.time += dt;

		const eagleLon = state.lon;
		const eagleLat = state.lat;
		const eagleAlt = state.alt;
		const eagleAltM = eagleAlt * 0.3048;

		const mPerDegLat = 111320;
		const mPerDegLon = 111320 * Math.cos(THREE.MathUtils.degToRad(eagleLat));

		const dx = (NEST_LOCATION.lon - eagleLon) * mPerDegLon;
		const dz = (NEST_LOCATION.lat - eagleLat) * mPerDegLat;
		const dy = NEST_LOCATION.elevation - eagleAltM;
		const dist = Math.sqrt(dx * dx + dz * dz);

		// Only visible within 2km
		this.nestGroup.visible = dist < 2000;

		if (this.nestGroup.visible) {
			this.nestGroup.position.set(dx, dy, -dz);

			// Jackie subtle breathing/head movement
			if (this.jackieGroup) {
				this.jackieGroup.rotation.y = Math.sin(this.time * 0.3) * 0.15;
				// Slight body rise/fall (breathing)
				this.jackieGroup.position.y = NEST_LOCATION.treeHeight + 0.4 + Math.sin(this.time * 0.8) * 0.01;
			}

			// Chick wiggle
			if (this.chicksGroup) {
				this.chicksGroup.children.forEach((child, i) => {
					if (i >= 2) { // Only the chick moves, not eggs
						child.position.y += Math.sin(this.time * 2 + i) * 0.001;
					}
				});
			}
		}
	}

	/**
	 * Get the spawn position above the nest
	 */
	static getSpawnPosition() {
		return {
			lon: NEST_LOCATION.lon,
			lat: NEST_LOCATION.lat,
			alt: (NEST_LOCATION.elevation + NEST_LOCATION.treeHeight + 50) / 0.3048, // Convert to feet, 50m above nest
			heading: NEST_LOCATION.heading,
		};
	}

	dispose() {
		this.scene.remove(this.nestGroup);
		this.nestGroup.traverse(child => {
			if (child.geometry) child.geometry.dispose();
			if (child.material) child.material.dispose();
		});
	}
}
