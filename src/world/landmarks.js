import * as THREE from 'three';
import * as Cesium from 'cesium';

/**
 * Landmark System - Specific real-world points of interest rendered as 3D structures.
 * Each landmark has custom geometry matching its real-world appearance.
 */

// All landmark definitions with real coordinates and 3D structure specs
export const LANDMARKS = [
	// =================== BIG BEAR AREA ===================
	{
		name: 'Big Bear Ski Resort',
		description: 'Snow Summit & Bear Mountain ski area',
		lon: -116.8595, lat: 34.2272, elevation: 2400,
		structures: [
			{ type: 'lodge', width: 40, depth: 25, height: 12, color: 0x8B6914, roofColor: 0x4A3000 },
			{ type: 'lodge', width: 30, depth: 20, height: 10, color: 0x8B6914, roofColor: 0x4A3000, offsetX: 60, offsetZ: 20 },
			{ type: 'tower', width: 4, depth: 4, height: 25, color: 0x888888, offsetX: -30, offsetZ: -20 }, // Ski lift tower
			{ type: 'tower', width: 4, depth: 4, height: 25, color: 0x888888, offsetX: -30, offsetZ: 40 },
			{ type: 'tower', width: 4, depth: 4, height: 25, color: 0x888888, offsetX: -30, offsetZ: 100 },
			{ type: 'tower', width: 4, depth: 4, height: 25, color: 0x888888, offsetX: -30, offsetZ: 160 },
			// Parking lot flat area
			{ type: 'flat', width: 80, depth: 60, height: 0.3, color: 0x333333, offsetX: 80, offsetZ: -30 },
		],
		labelOffset: 30,
	},
	// =================== LAS VEGAS ===================
	{
		name: 'Las Vegas Strip',
		description: 'The famous Las Vegas Boulevard casino strip',
		lon: -115.1728, lat: 36.1147, elevation: 610,
		structures: [
			// Luxor Pyramid
			{ type: 'pyramid', width: 100, depth: 100, height: 110, color: 0x1A1A1A, offsetX: 0, offsetZ: -200 },
			// Mandalay Bay
			{ type: 'skyscraper', width: 60, depth: 40, height: 145, color: 0xC4A654, offsetX: -80, offsetZ: -350 },
			// Bellagio
			{ type: 'skyscraper', width: 80, depth: 35, height: 155, color: 0xE8DCC8, offsetX: 0, offsetZ: 100 },
			// Caesars Palace
			{ type: 'skyscraper', width: 70, depth: 50, height: 120, color: 0xF5F0E0, offsetX: 60, offsetZ: 250 },
			// Wynn
			{ type: 'curved_tower', width: 50, depth: 50, height: 190, color: 0x8B4513, offsetX: -50, offsetZ: 500 },
			// Stratosphere/STRAT
			{ type: 'tower', width: 12, depth: 12, height: 350, color: 0xCCCCCC, offsetX: 0, offsetZ: 900 },
			// MGM Grand
			{ type: 'skyscraper', width: 90, depth: 70, height: 90, color: 0x006400, offsetX: 100, offsetZ: -100 },
			// Aria
			{ type: 'skyscraper', width: 55, depth: 40, height: 180, color: 0x4682B4, offsetX: 30, offsetZ: 0 },
			// Cosmopolitan
			{ type: 'skyscraper', width: 45, depth: 35, height: 185, color: 0x708090, offsetX: -40, offsetZ: 50 },
			// Venetian tower
			{ type: 'skyscraper', width: 60, depth: 45, height: 145, color: 0xDEB887, offsetX: 40, offsetZ: 400 },
			// Paris Las Vegas Eiffel Tower replica
			{ type: 'tower', width: 8, depth: 8, height: 165, color: 0x696969, offsetX: 50, offsetZ: 150 },
			// Strip road
			{ type: 'flat', width: 35, depth: 1400, height: 0.5, color: 0x222222, offsetX: 0, offsetZ: 200 },
		],
		labelOffset: 360,
	},
	// =================== HOLLYWOOD ===================
	{
		name: 'Hollywood Hills',
		description: 'Hollywood Sign and surrounding hills',
		lon: -118.3215, lat: 34.1341, elevation: 480,
		structures: [
			// Hollywood Sign letters (each letter as a tall thin box)
			{ type: 'sign_letter', width: 3, depth: 1, height: 14, color: 0xFFFFFF, offsetX: -50, offsetZ: 0 }, // H
			{ type: 'sign_letter', width: 3, depth: 1, height: 14, color: 0xFFFFFF, offsetX: -38, offsetZ: 0 }, // O
			{ type: 'sign_letter', width: 3, depth: 1, height: 14, color: 0xFFFFFF, offsetX: -26, offsetZ: 0 }, // L
			{ type: 'sign_letter', width: 3, depth: 1, height: 14, color: 0xFFFFFF, offsetX: -14, offsetZ: 0 }, // L
			{ type: 'sign_letter', width: 3, depth: 1, height: 14, color: 0xFFFFFF, offsetX: -2, offsetZ: 0 },  // Y
			{ type: 'sign_letter', width: 3, depth: 1, height: 14, color: 0xFFFFFF, offsetX: 10, offsetZ: 0 },  // W
			{ type: 'sign_letter', width: 3, depth: 1, height: 14, color: 0xFFFFFF, offsetX: 22, offsetZ: 0 },  // O
			{ type: 'sign_letter', width: 3, depth: 1, height: 14, color: 0xFFFFFF, offsetX: 34, offsetZ: 0 },  // O
			{ type: 'sign_letter', width: 3, depth: 1, height: 14, color: 0xFFFFFF, offsetX: 46, offsetZ: 0 },  // D
			// Griffith Observatory
			{ type: 'dome', width: 20, depth: 20, height: 15, color: 0xE8DCC8, offsetX: 200, offsetZ: -300 },
			{ type: 'box', width: 40, depth: 30, height: 8, color: 0xE8DCC8, offsetX: 200, offsetZ: -300 },
		],
		labelOffset: 20,
	},
	// =================== 29 PALMS ===================
	{
		name: 'Twentynine Palms',
		description: 'Marine Corps Air Ground Combat Center',
		lon: -116.0542, lat: 34.1356, elevation: 600,
		structures: [
			// Main base buildings
			{ type: 'military_building', width: 60, depth: 30, height: 8, color: 0xC2B280, offsetX: 0, offsetZ: 0 },
			{ type: 'military_building', width: 40, depth: 25, height: 6, color: 0xC2B280, offsetX: 80, offsetZ: 30 },
			{ type: 'military_building', width: 50, depth: 20, height: 7, color: 0xC2B280, offsetX: -70, offsetZ: 50 },
			// Hangars
			{ type: 'hangar', width: 50, depth: 40, height: 15, color: 0x808080, offsetX: 0, offsetZ: -100 },
			{ type: 'hangar', width: 50, depth: 40, height: 15, color: 0x808080, offsetX: 70, offsetZ: -100 },
			// Runway
			{ type: 'flat', width: 45, depth: 2500, height: 0.3, color: 0x2A2A2A, offsetX: 200, offsetZ: 0 },
			// Control tower
			{ type: 'tower', width: 8, depth: 8, height: 25, color: 0x808080, offsetX: 150, offsetZ: -50 },
			// Barracks
			{ type: 'box', width: 30, depth: 12, height: 5, color: 0xC2B280, offsetX: -150, offsetZ: -30 },
			{ type: 'box', width: 30, depth: 12, height: 5, color: 0xC2B280, offsetX: -150, offsetZ: -60 },
			{ type: 'box', width: 30, depth: 12, height: 5, color: 0xC2B280, offsetX: -150, offsetZ: -90 },
		],
		labelOffset: 30,
	},
	// =================== FORT IRWIN NTC ===================
	{
		name: 'Fort Irwin NTC',
		description: 'National Training Center - US Army desert warfare training',
		lon: -116.6833, lat: 35.2628, elevation: 730,
		structures: [
			// Main post buildings
			{ type: 'military_building', width: 80, depth: 40, height: 10, color: 0xC2B280, offsetX: 0, offsetZ: 0 },
			{ type: 'military_building', width: 60, depth: 30, height: 8, color: 0xC2B280, offsetX: 100, offsetZ: 40 },
			// Motor pool / vehicle park
			{ type: 'flat', width: 200, depth: 150, height: 0.3, color: 0xA89070, offsetX: -200, offsetZ: 0 },
			// Hangars
			{ type: 'hangar', width: 60, depth: 50, height: 18, color: 0x707070, offsetX: 0, offsetZ: -150 },
			{ type: 'hangar', width: 60, depth: 50, height: 18, color: 0x707070, offsetX: 80, offsetZ: -150 },
			// Barracks complex
			{ type: 'box', width: 40, depth: 15, height: 6, color: 0xC2B280, offsetX: -100, offsetZ: 80 },
			{ type: 'box', width: 40, depth: 15, height: 6, color: 0xC2B280, offsetX: -100, offsetZ: 110 },
			{ type: 'box', width: 40, depth: 15, height: 6, color: 0xC2B280, offsetX: -100, offsetZ: 140 },
			// Antenna/comms tower
			{ type: 'tower', width: 5, depth: 5, height: 40, color: 0xAAAAAA, offsetX: 150, offsetZ: -80 },
			// Water tower
			{ type: 'water_tower', width: 10, depth: 10, height: 30, color: 0xCCCCCC, offsetX: 180, offsetZ: 50 },
		],
		labelOffset: 45,
	},
	// =================== REAGAN PRESIDENTIAL LIBRARY ===================
	{
		name: 'Reagan Presidential Library',
		description: 'Ronald Reagan Presidential Library & Museum, Simi Valley',
		lon: -118.8200, lat: 34.2597, elevation: 470,
		structures: [
			// Main museum building (Spanish Colonial style)
			{ type: 'box', width: 70, depth: 50, height: 12, color: 0xF5E6CC, offsetX: 0, offsetZ: 0 },
			{ type: 'box', width: 30, depth: 60, height: 10, color: 0xF5E6CC, offsetX: -50, offsetZ: 10 },
			// Air Force One Pavilion (large hangar)
			{ type: 'hangar', width: 60, depth: 80, height: 22, color: 0xDDD5C0, offsetX: 80, offsetZ: -50 },
			// Courtyard
			{ type: 'flat', width: 40, depth: 40, height: 0.2, color: 0xD2B48C, offsetX: 0, offsetZ: 60 },
			// Tower/bell element
			{ type: 'tower', width: 6, depth: 6, height: 18, color: 0xF5E6CC, offsetX: -20, offsetZ: -30 },
			// Parking
			{ type: 'flat', width: 100, depth: 60, height: 0.3, color: 0x333333, offsetX: -100, offsetZ: -60 },
		],
		labelOffset: 25,
	},
	// =================== ROSE BOWL ===================
	{
		name: 'Rose Bowl',
		description: 'Rose Bowl Stadium, Pasadena',
		lon: -118.1676, lat: 34.1613, elevation: 260,
		structures: [
			// Stadium bowl (oval ring)
			{ type: 'stadium', width: 200, depth: 150, height: 25, color: 0xA89070, offsetX: 0, offsetZ: 0 },
			// Field (green interior)
			{ type: 'flat', width: 110, depth: 75, height: 0.5, color: 0x228B22, offsetX: 0, offsetZ: 0 },
			// Parking lots
			{ type: 'flat', width: 200, depth: 100, height: 0.3, color: 0x333333, offsetX: 0, offsetZ: -140 },
			{ type: 'flat', width: 150, depth: 100, height: 0.3, color: 0x333333, offsetX: 200, offsetZ: 0 },
		],
		labelOffset: 30,
	},
];

// Shared geometries cache
const geoCache = {};

function getBoxGeo() {
	if (!geoCache.box) geoCache.box = new THREE.BoxGeometry(1, 1, 1);
	return geoCache.box;
}

function getConeGeo() {
	if (!geoCache.cone) geoCache.cone = new THREE.ConeGeometry(0.5, 1, 4);
	return geoCache.cone;
}

function getCylinderGeo() {
	if (!geoCache.cylinder) geoCache.cylinder = new THREE.CylinderGeometry(0.5, 0.5, 1, 8);
	return geoCache.cylinder;
}

function getSphereGeo() {
	if (!geoCache.sphere) geoCache.sphere = new THREE.SphereGeometry(0.5, 8, 6);
	return geoCache.sphere;
}

function getTorusGeo() {
	if (!geoCache.torus) geoCache.torus = new THREE.TorusGeometry(1, 0.15, 8, 32);
	return geoCache.torus;
}

/**
 * Create a 3D mesh for a structure definition
 */
function createStructureMesh(struct) {
	const group = new THREE.Group();
	const mat = new THREE.MeshLambertMaterial({ color: struct.color, flatShading: true });

	switch (struct.type) {
		case 'box':
		case 'military_building':
		case 'sign_letter':
		case 'lodge': {
			const mesh = new THREE.Mesh(getBoxGeo(), mat);
			mesh.scale.set(struct.width, struct.height, struct.depth);
			mesh.position.y = struct.height / 2;
			group.add(mesh);
			// Roof for lodge
			if (struct.type === 'lodge' && struct.roofColor) {
				const roofMat = new THREE.MeshLambertMaterial({ color: struct.roofColor, flatShading: true });
				const roof = new THREE.Mesh(getConeGeo(), roofMat);
				roof.scale.set(struct.width * 1.1, struct.height * 0.5, struct.depth * 1.1);
				roof.position.y = struct.height + struct.height * 0.25;
				group.add(roof);
			}
			break;
		}
		case 'skyscraper':
		case 'curved_tower': {
			const mesh = new THREE.Mesh(getBoxGeo(), mat);
			mesh.scale.set(struct.width, struct.height, struct.depth);
			mesh.position.y = struct.height / 2;
			group.add(mesh);
			// Window stripes
			const stripeMat = new THREE.MeshLambertMaterial({
				color: 0x88AACC,
				transparent: true,
				opacity: 0.4
			});
			for (let i = 0; i < 5; i++) {
				const stripe = new THREE.Mesh(getBoxGeo(), stripeMat);
				const y = struct.height * 0.15 + (struct.height * 0.7 * i / 5);
				stripe.scale.set(struct.width + 0.5, struct.height * 0.08, struct.depth + 0.5);
				stripe.position.y = y;
				group.add(stripe);
			}
			break;
		}
		case 'tower': {
			const mesh = new THREE.Mesh(getCylinderGeo(), mat);
			mesh.scale.set(struct.width, struct.height, struct.depth);
			mesh.position.y = struct.height / 2;
			group.add(mesh);
			// Top platform
			const platMat = new THREE.MeshLambertMaterial({ color: 0xAAAAAA });
			const plat = new THREE.Mesh(getCylinderGeo(), platMat);
			plat.scale.set(struct.width * 2, 2, struct.depth * 2);
			plat.position.y = struct.height;
			group.add(plat);
			break;
		}
		case 'water_tower': {
			// Legs
			const legMat = new THREE.MeshLambertMaterial({ color: 0x888888 });
			for (let i = 0; i < 4; i++) {
				const leg = new THREE.Mesh(getCylinderGeo(), legMat);
				const angle = (i / 4) * Math.PI * 2;
				leg.scale.set(1, struct.height * 0.7, 1);
				leg.position.set(Math.cos(angle) * 3, struct.height * 0.35, Math.sin(angle) * 3);
				group.add(leg);
			}
			// Tank
			const tank = new THREE.Mesh(getSphereGeo(), mat);
			tank.scale.set(struct.width, struct.width * 0.6, struct.depth);
			tank.position.y = struct.height * 0.75;
			group.add(tank);
			break;
		}
		case 'pyramid': {
			const pyGeo = new THREE.ConeGeometry(0.707, 1, 4); // Square base pyramid
			pyGeo.rotateY(Math.PI / 4);
			const mesh = new THREE.Mesh(pyGeo, mat);
			mesh.scale.set(struct.width, struct.height, struct.depth);
			mesh.position.y = struct.height / 2;
			group.add(mesh);
			// Spotlight beam (the Luxor light)
			const beamMat = new THREE.MeshBasicMaterial({
				color: 0xFFFF88,
				transparent: true,
				opacity: 0.15
			});
			const beam = new THREE.Mesh(getCylinderGeo(), beamMat);
			beam.scale.set(3, 500, 3);
			beam.position.y = struct.height + 250;
			group.add(beam);
			break;
		}
		case 'dome': {
			const dome = new THREE.Mesh(getSphereGeo(), mat);
			dome.scale.set(struct.width, struct.height, struct.depth);
			dome.position.y = struct.height / 2;
			group.add(dome);
			break;
		}
		case 'hangar': {
			// Half-cylinder hangar shape
			const mesh = new THREE.Mesh(getBoxGeo(), mat);
			mesh.scale.set(struct.width, struct.height, struct.depth);
			mesh.position.y = struct.height / 2;
			group.add(mesh);
			// Rounded roof
			const roofMat = new THREE.MeshLambertMaterial({ color: struct.color, flatShading: true });
			const roof = new THREE.Mesh(getCylinderGeo(), roofMat);
			roof.scale.set(struct.width, struct.depth, struct.width * 0.3);
			roof.rotation.z = Math.PI / 2;
			roof.position.y = struct.height;
			group.add(roof);
			break;
		}
		case 'stadium': {
			// Oval stadium ring using torus
			const outerMat = new THREE.MeshLambertMaterial({ color: struct.color, flatShading: true });
			// Create stadium as extruded ring using boxes for walls
			const segments = 32;
			const rx = struct.width / 2;
			const rz = struct.depth / 2;
			const wallThickness = 15;
			for (let i = 0; i < segments; i++) {
				const angle = (i / segments) * Math.PI * 2;
				const x = Math.cos(angle) * rx;
				const z = Math.sin(angle) * rz;
				const wall = new THREE.Mesh(getBoxGeo(), outerMat);
				wall.scale.set(wallThickness, struct.height, wallThickness);
				wall.position.set(x, struct.height / 2, z);
				wall.lookAt(0, struct.height / 2, 0);
				group.add(wall);
			}
			break;
		}
		case 'flat':
		default: {
			const mesh = new THREE.Mesh(getBoxGeo(), mat);
			mesh.scale.set(struct.width, struct.height || 0.5, struct.depth);
			mesh.position.y = (struct.height || 0.5) / 2;
			group.add(mesh);
			break;
		}
	}

	group.position.set(struct.offsetX || 0, 0, struct.offsetZ || 0);

	// Set all children to layer 0
	group.traverse(child => { child.layers.set(0); });

	return group;
}

export class LandmarkSystem {
	constructor(cesiumViewer, threeScene) {
		this.viewer = cesiumViewer;
		this.scene = threeScene;
		this.landmarkGroups = []; // { group, landmark, visible }
		this.initialized = false;

		this.init();
	}

	init() {
		for (const lm of LANDMARKS) {
			const group = new THREE.Group();
			group.visible = false;

			for (const struct of lm.structures) {
				const mesh = createStructureMesh(struct);
				group.add(mesh);
			}

			group.traverse(child => { child.layers.set(0); });
			this.scene.add(group);
			this.landmarkGroups.push({ group, landmark: lm, visible: false });
		}

		this.initialized = true;
	}

	update(dt, state) {
		if (!this.initialized) return;

		const eagleLon = state.lon;
		const eagleLat = state.lat;
		const eagleAlt = state.alt;
		const eagleAltM = eagleAlt * 0.3048;

		const metersPerDegreeLat = 111320;
		const metersPerDegreeLon = 111320 * Math.cos(THREE.MathUtils.degToRad(eagleLat));

		for (const entry of this.landmarkGroups) {
			const lm = entry.landmark;

			const dx = (lm.lon - eagleLon) * metersPerDegreeLon;
			const dz = (lm.lat - eagleLat) * metersPerDegreeLat;
			const dist = Math.sqrt(dx * dx + dz * dz);

			// Visibility based on distance and altitude
			const maxRenderDist = Math.max(5000, eagleAltM * 8);
			const visible = dist < maxRenderDist;

			entry.group.visible = visible;

			if (visible) {
				const dy = lm.elevation - eagleAltM;
				entry.group.position.set(dx, dy, -dz);

				// Scale for distance (keeps landmarks visible from far away)
				const scaleFactor = dist > 3000 ? 1.0 + (dist - 3000) / 20000 : 1.0;
				entry.group.scale.setScalar(scaleFactor);
			}
		}
	}

	dispose() {
		for (const entry of this.landmarkGroups) {
			this.scene.remove(entry.group);
			entry.group.traverse(child => {
				if (child.geometry) child.geometry.dispose();
				if (child.material) child.material.dispose();
			});
		}
		this.landmarkGroups = [];
	}
}
