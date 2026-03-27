import * as THREE from 'three';
import * as Cesium from 'cesium';
import { movePosition } from '../utils/math';

/**
 * NPC System - Prey animals and rival birds at ecologically correct altitudes.
 *
 * GROUND PREY (spawn at terrain level near nest/meadows):
 *   Rabbit, Squirrel, Mouse, Marmot - scurry on the ground
 *
 * WATER PREY (spawn at lake surface):
 *   Trout, Bass, Kokanee - visible in Big Bear Lake
 *
 * AIRBORNE (fly at various altitudes):
 *   Raven, Crow - rival birds competing for territory
 */

const PREY_TYPES = {
	// Ground animals - near the nest, meadows, forest edges
	RABBIT:   { category: 'ground', speed: 3,  color: 0x8B7355, size: [0.12, 0.08, 0.15], score: 300 },
	SQUIRREL: { category: 'ground', speed: 4,  color: 0x7A5A3A, size: [0.06, 0.05, 0.10], score: 200 },
	MOUSE:    { category: 'ground', speed: 2,  color: 0x9A8A7A, size: [0.03, 0.02, 0.05], score: 100 },
	MARMOT:   { category: 'ground', speed: 2,  color: 0x6A5A3A, size: [0.15, 0.10, 0.20], score: 400 },

	// Fish - in Big Bear Lake
	TROUT:    { category: 'water',  speed: 2,  color: 0x6A8A6A, size: [0.08, 0.03, 0.25], score: 500 },
	BASS:     { category: 'water',  speed: 1.5,color: 0x4A6A4A, size: [0.10, 0.04, 0.30], score: 500 },
	KOKANEE:  { category: 'water',  speed: 2.5,color: 0xAA5555, size: [0.06, 0.03, 0.20], score: 600 },

	// Airborne rivals - fly at various altitudes
	RAVEN:    { category: 'air',    speed: 18, color: 0x111111, size: [0.15, 0.06, 0.18], score: 500, wingColor: 0x0A0A0A },
	CROW:     { category: 'air',    speed: 15, color: 0x1A1A1A, size: [0.10, 0.05, 0.14], score: 400, wingColor: 0x111111 },
};

// Spawn weights (probability distribution)
const SPAWN_TABLE = [
	{ type: 'RABBIT',   weight: 15 },
	{ type: 'SQUIRREL', weight: 15 },
	{ type: 'MOUSE',    weight: 10 },
	{ type: 'MARMOT',   weight: 5 },
	{ type: 'TROUT',    weight: 12 },
	{ type: 'BASS',     weight: 10 },
	{ type: 'KOKANEE',  weight: 8 },
	{ type: 'RAVEN',    weight: 15 },
	{ type: 'CROW',     weight: 10 },
];

const TOTAL_WEIGHT = SPAWN_TABLE.reduce((s, e) => s + e.weight, 0);

// Big Bear Lake bounds for fish spawning
const LAKE = { lonMin: -116.95, lonMax: -116.86, latMin: 34.235, latMax: 34.255, elevation: 2060 };

// Nest area for ground prey
const NEST_AREA = { lon: -116.9155, lat: 34.2433, radiusM: 2000 };

function pickType() {
	let r = Math.random() * TOTAL_WEIGHT;
	for (const entry of SPAWN_TABLE) {
		r -= entry.weight;
		if (r <= 0) return entry.type;
	}
	return 'RAVEN';
}

/**
 * Create a simple procedural mesh for a prey animal
 */
function createPreyMesh(typeName) {
	const info = PREY_TYPES[typeName];
	if (!info) return null;

	const group = new THREE.Group();
	const mat = new THREE.MeshLambertMaterial({ color: info.color, flatShading: true });
	const [sx, sy, sz] = info.size;

	if (info.category === 'ground') {
		// Body
		const bodyGeo = new THREE.SphereGeometry(1, 6, 5);
		bodyGeo.scale(sx, sy, sz);
		const body = new THREE.Mesh(bodyGeo, mat);
		group.add(body);

		// Head
		const headGeo = new THREE.SphereGeometry(sy * 0.8, 5, 4);
		const head = new THREE.Mesh(headGeo, mat);
		head.position.set(0, sy * 0.3, sz * 0.9);
		group.add(head);

		// Eyes
		const eyeMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
		for (const side of [-1, 1]) {
			const eyeGeo = new THREE.SphereGeometry(sy * 0.15, 4, 3);
			const eye = new THREE.Mesh(eyeGeo, eyeMat);
			eye.position.set(side * sy * 0.4, sy * 0.5, sz * 1.0);
			group.add(eye);
		}

		if (typeName === 'RABBIT') {
			// Ears
			for (const side of [-1, 1]) {
				const earGeo = new THREE.BoxGeometry(0.015, 0.06, 0.01);
				const ear = new THREE.Mesh(earGeo, mat);
				ear.position.set(side * 0.02, sy + 0.03, sz * 0.8);
				group.add(ear);
			}
			// White tail
			const tailGeo = new THREE.SphereGeometry(0.02, 4, 3);
			const tail = new THREE.Mesh(tailGeo, new THREE.MeshLambertMaterial({ color: 0xEEEEEE }));
			tail.position.set(0, sy * 0.3, -sz * 0.7);
			group.add(tail);
		}

	} else if (info.category === 'water') {
		// Fish body (elongated)
		const bodyGeo = new THREE.SphereGeometry(1, 6, 5);
		bodyGeo.scale(sx * 0.6, sy, sz);
		const body = new THREE.Mesh(bodyGeo, mat);
		group.add(body);

		// Tail fin
		const tailGeo = new THREE.BoxGeometry(sx * 0.3, sy * 2, 0.01);
		const tail = new THREE.Mesh(tailGeo, mat);
		tail.position.set(0, 0, -sz * 0.9);
		tail.rotation.y = 0.2;
		group.add(tail);

		// Dorsal fin
		const finGeo = new THREE.BoxGeometry(0.005, sy * 0.8, sx * 0.4);
		const fin = new THREE.Mesh(finGeo, mat);
		fin.position.set(0, sy * 0.8, 0);
		group.add(fin);

		// Silver belly
		const bellyGeo = new THREE.SphereGeometry(1, 5, 4);
		bellyGeo.scale(sx * 0.4, sy * 0.5, sz * 0.8);
		const belly = new THREE.Mesh(bellyGeo, new THREE.MeshLambertMaterial({ color: 0xCCCCCC }));
		belly.position.y = -sy * 0.3;
		group.add(belly);

	} else if (info.category === 'air') {
		// Bird body
		const bodyGeo = new THREE.SphereGeometry(1, 6, 5);
		bodyGeo.scale(sx * 0.5, sy, sz);
		const body = new THREE.Mesh(bodyGeo, mat);
		group.add(body);

		// Head
		const headGeo = new THREE.SphereGeometry(sy * 0.7, 5, 4);
		const head = new THREE.Mesh(headGeo, mat);
		head.position.set(0, sy * 0.3, sz * 0.8);
		group.add(head);

		// Beak
		const beakGeo = new THREE.ConeGeometry(0.008, 0.03, 4);
		const beak = new THREE.Mesh(beakGeo, new THREE.MeshLambertMaterial({ color: 0x222222 }));
		beak.position.set(0, sy * 0.2, sz * 1.1);
		beak.rotation.x = Math.PI / 2;
		group.add(beak);

		// Wings
		const wingMat = new THREE.MeshLambertMaterial({ color: info.wingColor || info.color, side: THREE.DoubleSide, flatShading: true });
		for (const side of [-1, 1]) {
			const wingGeo = new THREE.BoxGeometry(sx * 2.5, 0.005, sz * 0.6);
			wingGeo.translate(side * sx * 1.25, 0, 0);
			const wing = new THREE.Mesh(wingGeo, wingMat);
			wing.position.y = sy * 0.2;
			group.add(wing);
		}

		// Tail
		const tailGeo = new THREE.BoxGeometry(sx * 0.5, 0.005, sz * 0.5);
		const tail = new THREE.Mesh(tailGeo, mat);
		tail.position.set(0, 0, -sz * 0.7);
		group.add(tail);
	}

	group.traverse(c => { c.layers.set(0); });
	return group;
}

export class NPCSystem {
	constructor(viewer, scene, loader) {
		this.viewer = viewer;
		this.scene = scene;
		this.loader = loader;
		this.npcs = [];
		this.lastSpawnTime = 0;
		this.loaded = true; // No external model needed

		this._scratchMatrix = new Cesium.Matrix4();
		this._scratchHPR = new Cesium.HeadingPitchRoll();
		this._scratchCartesian = new Cesium.Cartesian3();
		this._scratchThreeMatrix = new THREE.Matrix4();
		this._scratchCameraMatrix = new Cesium.Matrix4();
	}

	isOverLake(lon, lat) {
		return lon >= LAKE.lonMin && lon <= LAKE.lonMax && lat >= LAKE.latMin && lat <= LAKE.latMax;
	}

	spawnNPC(playerLon, playerLat, playerAlt) {
		const typeName = pickType();
		const info = PREY_TYPES[typeName];
		if (!info) return null;

		let lon, lat, alt, heading, speed;
		heading = Math.random() * 360;
		speed = info.speed + (Math.random() - 0.5) * info.speed * 0.4;

		if (info.category === 'ground') {
			// Spawn near the nest area at ground level - NOT over water
			let attempts = 0;
			do {
				const angle = Math.random() * Math.PI * 2;
				const dist = 100 + Math.random() * NEST_AREA.radiusM;
				const mPerDegLon = 111320 * Math.cos(NEST_AREA.lat * Math.PI / 180);
				lon = NEST_AREA.lon + Math.cos(angle) * dist / mPerDegLon;
				lat = NEST_AREA.lat + Math.sin(angle) * dist / 111320;
				attempts++;
			} while (this.isOverLake(lon, lat) && attempts < 10);

			// Get terrain height
			const cartographic = Cesium.Cartographic.fromDegrees(lon, lat);
			const terrainHeight = this.viewer.scene.globe.getHeight(cartographic);
			alt = (terrainHeight !== undefined ? terrainHeight : 2070) + 0.3;

		} else if (info.category === 'water') {
			// Fish spawn ONLY in Big Bear Lake water
			lon = LAKE.lonMin + 0.05 * (LAKE.lonMax - LAKE.lonMin) + Math.random() * 0.9 * (LAKE.lonMax - LAKE.lonMin);
			lat = LAKE.latMin + 0.05 * (LAKE.latMax - LAKE.latMin) + Math.random() * 0.9 * (LAKE.latMax - LAKE.latMin);
			alt = LAKE.elevation - 0.5 + Math.random() * 0.8; // At/slightly below water surface

		} else {
			// Airborne - spawn around the player at flying altitude
			const angle = Math.random() * Math.PI * 2;
			const dist = 500 + Math.random() * 3000;
			const mPerDegLon = 111320 * Math.cos(playerLat * Math.PI / 180);
			lon = playerLon + Math.cos(angle) * dist / mPerDegLon;
			lat = playerLat + Math.sin(angle) * dist / 111320;
			alt = playerAlt + (Math.random() - 0.5) * 300;
			alt = Math.max(alt, 2100); // Don't spawn below mountain level
		}

		const name = typeName + ' ' + (100 + Math.floor(Math.random() * 900));
		return this.createNPC(name, typeName, info, lon, lat, alt, heading, speed);
	}

	createNPC(name, typeName, info, lon, lat, alt, heading, speed) {
		const mesh = createPreyMesh(typeName);
		if (!mesh) return null;

		mesh.matrixAutoUpdate = false;
		this.scene.add(mesh);

		const npc = {
			id: name + '_' + Math.random().toString(36).substr(2, 9),
			mesh, name, typeName,
			category: info.category,
			lon, lat, alt,
			heading, speed,
			pitch: 0, roll: 0,
			targetHeading: heading,
			targetPitch: 0,
			behaviorTimer: 2 + Math.random() * 5,
			terrainCheckTimer: Math.random() * 2,
			time: Math.random() * 100,
			destroyed: false,
			score: info.score,
		};

		this.npcs.push(npc);
		return npc;
	}

	update(dt, playerPos) {
		const viewMatrix = this.viewer.camera.viewMatrix;

		for (let i = this.npcs.length - 1; i >= 0; i--) {
			const npc = this.npcs[i];
			if (npc.destroyed) {
				this.scene.remove(npc.mesh);
				this.npcs.splice(i, 1);
				continue;
			}
			npc.time += dt;

			// === BEHAVIOR ===
			npc.behaviorTimer -= dt;
			if (npc.behaviorTimer <= 0) {
				if (npc.category === 'ground') {
					// Ground animals: random scurrying, occasionally stop
					npc.targetHeading = (npc.heading + (Math.random() - 0.5) * 120) % 360;
					npc.speed = Math.random() > 0.3 ? PREY_TYPES[npc.typeName].speed : 0; // Sometimes stop
					npc.behaviorTimer = 1 + Math.random() * 4;
				} else if (npc.category === 'water') {
					// Fish: slow direction changes, stay at surface
					npc.targetHeading = (npc.heading + (Math.random() - 0.5) * 90) % 360;
					npc.behaviorTimer = 2 + Math.random() * 5;
				} else {
					// Air: ravens/crows fly more dynamically
					npc.targetHeading = (npc.heading + (Math.random() - 0.5) * 180) % 360;
					npc.targetPitch = (Math.random() - 0.5) * 15;
					npc.behaviorTimer = 3 + Math.random() * 6;
				}
			}

			// === TERRAIN AVOIDANCE (air only) ===
			if (npc.category === 'air') {
				npc.terrainCheckTimer -= dt;
				if (npc.terrainCheckTimer <= 0) {
					npc.terrainCheckTimer = 0.5;
					const cartographic = Cesium.Cartographic.fromDegrees(npc.lon, npc.lat);
					const terrainHeight = this.viewer.scene.globe.getHeight(cartographic);
					if (terrainHeight !== undefined) {
						const relativeAlt = npc.alt - terrainHeight;
						if (relativeAlt < 80) {
							npc.targetPitch = 15;
							if (relativeAlt < 30) npc.targetPitch = 30;
						}
					}
				}
			}

			// === MOVEMENT ===
			// Heading smoothing
			let headingDiff = npc.targetHeading - npc.heading;
			while (headingDiff < -180) headingDiff += 360;
			while (headingDiff > 180) headingDiff -= 360;
			const turnRate = npc.category === 'air' ? 60 : 120;
			const maxTurn = turnRate * dt;
			npc.heading = (npc.heading + Math.max(-maxTurn, Math.min(maxTurn, headingDiff)) + 360) % 360;

			if (npc.category === 'air') {
				npc.pitch += (npc.targetPitch - npc.pitch) * dt * 0.6;
				// Bank when turning
				if (Math.abs(headingDiff) > 0.5) {
					npc.roll += (-Math.sign(headingDiff) * Math.min(1, Math.abs(headingDiff) / 45) * 45 - npc.roll) * dt * 3;
				} else {
					npc.roll += (0 - npc.roll) * dt * 3;
				}
			}

			// Move
			if (npc.speed > 0) {
				if (npc.category === 'ground') {
					// Ground: move along surface, never enter water
					const newPos = movePosition(npc.lon, npc.lat, npc.alt, npc.heading, 0, npc.speed * dt);
					if (this.isOverLake(newPos.lon, newPos.lat)) {
						// About to enter water - turn away
						npc.heading = (npc.heading + 140 + Math.random() * 80) % 360;
						npc.targetHeading = npc.heading;
					} else {
						npc.lon = newPos.lon;
						npc.lat = newPos.lat;
					}
					// Keep on terrain surface
					const cart = Cesium.Cartographic.fromDegrees(npc.lon, npc.lat);
					const th = this.viewer.scene.globe.getHeight(cart);
					if (th !== undefined) npc.alt = th + 0.3;
				} else if (npc.category === 'water') {
					// Fish: stay strictly in lake water, reverse at boundaries
					const newPos = movePosition(npc.lon, npc.lat, npc.alt, npc.heading, 0, npc.speed * dt);
					if (newPos.lon < LAKE.lonMin || newPos.lon > LAKE.lonMax ||
						newPos.lat < LAKE.latMin || newPos.lat > LAKE.latMax) {
						// Hit lake edge - turn around
						npc.heading = (npc.heading + 150 + Math.random() * 60) % 360;
						npc.targetHeading = npc.heading;
					} else {
						npc.lon = newPos.lon;
						npc.lat = newPos.lat;
					}
					// Fish stay at/below water surface, occasionally surface
					npc.alt = LAKE.elevation - 0.3 + Math.sin(npc.time * 1.5) * 0.4;
				} else {
					const newPos = movePosition(npc.lon, npc.lat, npc.alt, npc.heading, npc.pitch, npc.speed * dt);
					npc.lon = newPos.lon;
					npc.lat = newPos.lat;
					npc.alt = newPos.alt;
				}
			}

			// === RENDER (transform to camera space) ===
			const pos = Cesium.Cartesian3.fromDegrees(npc.lon, npc.lat, npc.alt, undefined, this._scratchCartesian);

			this._scratchHPR.heading = Cesium.Math.toRadians(npc.heading);
			this._scratchHPR.pitch = Cesium.Math.toRadians(npc.pitch);
			this._scratchHPR.roll = Cesium.Math.toRadians(npc.roll);

			const modelMatrix = Cesium.Transforms.headingPitchRollToFixedFrame(
				pos, this._scratchHPR, Cesium.Ellipsoid.WGS84,
				Cesium.Transforms.eastNorthUpToFixedFrame, this._scratchMatrix
			);

			const cameraSpaceMatrix = Cesium.Matrix4.multiply(viewMatrix, modelMatrix, this._scratchCameraMatrix);
			for (let j = 0; j < 16; j++) {
				this._scratchThreeMatrix.elements[j] = cameraSpaceMatrix[j];
			}

			npc.mesh.matrix.copy(this._scratchThreeMatrix);
			npc.mesh.updateMatrixWorld(true);
		}

		// === SPAWNING - maintain 12 NPCs, more near nest ===
		if (this.npcs.length < 12 && Date.now() - this.lastSpawnTime > 2000) {
			this.spawnNPC(playerPos.lon, playerPos.lat, playerPos.alt);
			this.lastSpawnTime = Date.now();
		}
	}

	clear() {
		this.npcs.forEach(npc => this.scene.remove(npc.mesh));
		this.npcs = [];
	}
}
