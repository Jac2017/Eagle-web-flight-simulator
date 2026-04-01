import * as THREE from 'three';
import * as Cesium from 'cesium';

/**
 * World Traffic System - Vehicles on highways, boats on water, aircraft in the sky.
 *
 * Uses instanced meshes for all moving objects. Vehicles follow predefined highway
 * routes, boats patrol water bodies, and commercial aircraft follow flight corridors.
 */

// ===================== HIGHWAY DEFINITIONS =====================
// Major highways/interstates as polyline routes (simplified waypoints)
const HIGHWAYS = [
	{
		name: 'I-15 (LA to Vegas)',
		lanes: 4,
		vehicleDensity: 0.8,
		waypoints: [
			{ lon: -118.26, lat: 34.05 },  // LA
			{ lon: -117.91, lat: 34.13 },  // Fontana
			{ lon: -117.39, lat: 34.17 },  // Cajon Pass
			{ lon: -117.29, lat: 34.38 },  // Victorville
			{ lon: -117.00, lat: 34.83 },  // Barstow
			{ lon: -116.17, lat: 35.26 },  // Baker
			{ lon: -115.55, lat: 35.60 },  // Primm
			{ lon: -115.17, lat: 36.08 },  // South Vegas
			{ lon: -115.14, lat: 36.17 },  // Vegas Strip
		],
	},
	{
		name: 'I-10 (LA to Phoenix)',
		lanes: 4,
		vehicleDensity: 0.7,
		waypoints: [
			{ lon: -118.24, lat: 34.04 },
			{ lon: -117.88, lat: 34.00 },  // Pomona
			{ lon: -117.38, lat: 33.98 },  // Riverside
			{ lon: -116.97, lat: 33.93 },  // Beaumont
			{ lon: -116.54, lat: 33.83 },  // Palm Springs
			{ lon: -115.50, lat: 33.72 },  // Desert Center
			{ lon: -114.57, lat: 33.42 },  // Blythe
			{ lon: -113.50, lat: 33.45 },
			{ lon: -112.07, lat: 33.45 },  // Phoenix
		],
	},
	{
		name: 'I-5 (LA to Bakersfield)',
		lanes: 3,
		vehicleDensity: 0.6,
		waypoints: [
			{ lon: -118.24, lat: 34.05 },
			{ lon: -118.38, lat: 34.19 },  // Burbank
			{ lon: -118.53, lat: 34.39 },  // Santa Clarita
			{ lon: -118.73, lat: 34.74 },  // Gorman
			{ lon: -118.94, lat: 34.97 },  // Grapevine
			{ lon: -119.02, lat: 35.37 },  // Bakersfield
		],
	},
	{
		name: 'SR-18/138 (Big Bear Highway)',
		lanes: 1,
		vehicleDensity: 0.3,
		waypoints: [
			{ lon: -117.29, lat: 34.25 },  // San Bernardino foothills
			{ lon: -117.09, lat: 34.25 },  // Running Springs
			{ lon: -116.94, lat: 34.24 },  // Big Bear Dam
			{ lon: -116.86, lat: 34.24 },  // Big Bear Lake village
			{ lon: -116.78, lat: 34.26 },  // Fawnskin
		],
	},
	{
		name: 'I-405 (LA)',
		lanes: 5,
		vehicleDensity: 0.9,
		waypoints: [
			{ lon: -118.37, lat: 33.79 },  // Long Beach
			{ lon: -118.39, lat: 33.94 },  // Torrance
			{ lon: -118.43, lat: 34.02 },  // LAX area
			{ lon: -118.47, lat: 34.08 },  // Westside
			{ lon: -118.49, lat: 34.17 },  // Sherman Oaks
			{ lon: -118.47, lat: 34.23 },  // Van Nuys
		],
	},
	{
		name: 'US-95 (Vegas to NV)',
		lanes: 2,
		vehicleDensity: 0.4,
		waypoints: [
			{ lon: -115.14, lat: 36.17 },
			{ lon: -115.12, lat: 36.30 },
			{ lon: -115.14, lat: 36.50 },
			{ lon: -115.32, lat: 36.78 },
		],
	},
	{
		name: 'SR-62 (29 Palms Hwy)',
		lanes: 1,
		vehicleDensity: 0.2,
		waypoints: [
			{ lon: -116.54, lat: 34.05 },  // Yucca Valley
			{ lon: -116.28, lat: 34.07 },  // Joshua Tree
			{ lon: -116.05, lat: 34.14 },  // 29 Palms
			{ lon: -115.75, lat: 34.25 },  // Amboy
		],
	},
];

// ===================== BOAT DEFINITIONS =====================
const BOAT_AREAS = [
	{ name: 'Big Bear Lake', centerLon: -116.905, centerLat: 34.244, radiusM: 4000, count: 8, elevation: 2060 },
	{ name: 'Lake Arrowhead', centerLon: -117.189, centerLat: 34.258, radiusM: 800, count: 4, elevation: 1572 },
	{ name: 'Silverwood Lake', centerLon: -117.333, centerLat: 34.294, radiusM: 1200, count: 3, elevation: 1050 },
	{ name: 'San Diego Bay', centerLon: -117.175, centerLat: 32.685, radiusM: 3000, count: 12, elevation: 0 },
	{ name: 'Long Beach Harbor', centerLon: -118.19, centerLat: 33.74, radiusM: 4000, count: 15, elevation: 0 },
	{ name: 'Lake Mead (edge)', centerLon: -114.78, centerLat: 36.02, radiusM: 5000, count: 6, elevation: 372 },
];

// ===================== AIRCRAFT CORRIDORS =====================
const FLIGHT_CORRIDORS = [
	{ name: 'LAX Approach', startLon: -119.5, startLat: 33.8, endLon: -118.41, endLat: 33.94, altitude: 3000, count: 3, speed: 130 },
	{ name: 'LAX Departure N', startLon: -118.41, startLat: 33.94, endLon: -118.8, endLat: 34.8, altitude: 8000, count: 2, speed: 200 },
	{ name: 'Vegas Approach S', startLon: -115.5, startLat: 35.5, endLon: -115.15, endLat: 36.08, altitude: 4000, count: 2, speed: 140 },
	{ name: 'Phoenix Route', startLon: -118.0, startLat: 34.0, endLon: -112.0, endLat: 33.5, altitude: 11000, count: 2, speed: 250 },
	{ name: 'SF-SD Corridor', startLon: -118.5, startLat: 35.5, endLon: -117.2, endLat: 32.7, altitude: 10000, count: 2, speed: 240 },
	{ name: 'Military (Edwards)', startLon: -117.9, startLat: 34.9, endLon: -116.7, endLat: 35.3, altitude: 5000, count: 1, speed: 300 },
	{ name: 'SoCal Helicopters', startLon: -118.3, startLat: 34.0, endLon: -117.8, endLat: 34.1, altitude: 500, count: 3, speed: 60 },
];

// ===================== SKI SLOPES (Big Bear) =====================
const SKI_SLOPES = [
	// Bear Mountain slopes
	{ name: 'Bear Mountain Main', topLon: -116.8580, topLat: 34.2260, topAlt: 2680,
	  botLon: -116.8610, botLat: 34.2290, botAlt: 2440, count: 15 },
	{ name: 'Bear Mountain East', topLon: -116.8555, topLat: 34.2255, topAlt: 2650,
	  botLon: -116.8575, botLat: 34.2285, botAlt: 2450, count: 10 },
	// Snow Summit slopes
	{ name: 'Snow Summit Main', topLon: -116.8650, topLat: 34.2275, topAlt: 2600,
	  botLon: -116.8680, botLat: 34.2310, botAlt: 2400, count: 12 },
	{ name: 'Snow Summit West', topLon: -116.8670, topLat: 34.2270, topAlt: 2580,
	  botLon: -116.8695, botLat: 34.2300, botAlt: 2410, count: 8 },
];

const MAX_SKIERS = 60;
const MAX_SAILS = 30; // Visible sail triangles above sailboats
const MAX_CONTRAILS = 40; // Contrail segments behind jets

// Deterministic random
function seededRandom(x, y) {
	let seed = (x * 73856093) ^ (y * 19349663);
	seed = ((seed >> 16) ^ seed) * 0x45d9f3b;
	seed = ((seed >> 16) ^ seed) * 0x45d9f3b;
	seed = (seed >> 16) ^ seed;
	return (seed & 0x7fffffff) / 0x7fffffff;
}

const MAX_VEHICLES = 800;
const MAX_BOATS = 80;
const MAX_AIRCRAFT = 20;
const MAX_LIFT_PARTS = 60; // Lift towers + cross-arms

export class TrafficSystem {
	constructor(cesiumViewer, threeScene) {
		this.viewer = cesiumViewer;
		this.scene = threeScene;

		// Vehicle instanced mesh (colored boxes)
		this.vehicleInstances = null;
		// Boat instanced mesh
		this.boatInstances = null;
		// Aircraft instanced mesh
		this.aircraftInstances = null;

		this.vehicles = [];
		this.boats = [];
		this.aircraft = [];
		this.skiers = [];
		this.contrailSegments = [];

		// Additional instance meshes
		this.skierInstances = null;
		this.sailInstances = null;
		this.contrailInstances = null;

		this.lastUpdateTime = 0;
		this.time = 0;
		this.initialized = false;

		this.init();
	}

	init() {
		// Vehicle geometry - small boxes for cars/trucks
		const vehicleGeo = new THREE.BoxGeometry(1, 1, 1);
		vehicleGeo.translate(0, 0.5, 0);
		const vehicleMat = new THREE.MeshLambertMaterial({ color: 0xCCCCCC, flatShading: true });
		this.vehicleInstances = new THREE.InstancedMesh(vehicleGeo, vehicleMat, MAX_VEHICLES);
		this.vehicleInstances.count = 0;
		this.vehicleInstances.frustumCulled = false;
		this.vehicleInstances.layers.set(0);
		this.scene.add(this.vehicleInstances);

		// Boat geometry - wider, flatter
		const boatGeo = new THREE.BoxGeometry(1, 1, 1);
		boatGeo.translate(0, 0.5, 0);
		const boatMat = new THREE.MeshLambertMaterial({ color: 0xFFFFFF, flatShading: true });
		this.boatInstances = new THREE.InstancedMesh(boatGeo, boatMat, MAX_BOATS);
		this.boatInstances.count = 0;
		this.boatInstances.frustumCulled = false;
		this.boatInstances.layers.set(0);
		this.scene.add(this.boatInstances);

		// Aircraft geometry - elongated boxes
		const planeGeo = new THREE.BoxGeometry(1, 1, 1);
		planeGeo.translate(0, 0.5, 0);
		const planeMat = new THREE.MeshLambertMaterial({ color: 0xEEEEEE, flatShading: true });
		this.aircraftInstances = new THREE.InstancedMesh(planeGeo, planeMat, MAX_AIRCRAFT);
		this.aircraftInstances.count = 0;
		this.aircraftInstances.frustumCulled = false;
		this.aircraftInstances.layers.set(0);
		this.scene.add(this.aircraftInstances);

		// Skier instances (small colored dots on slopes)
		const skierGeo = new THREE.BoxGeometry(1, 1, 1);
		skierGeo.translate(0, 0.5, 0);
		const skierMat = new THREE.MeshLambertMaterial({ color: 0xFF0000 });
		this.skierInstances = new THREE.InstancedMesh(skierGeo, skierMat, MAX_SKIERS);
		this.skierInstances.count = 0;
		this.skierInstances.frustumCulled = false;
		this.skierInstances.layers.set(0);
		this.scene.add(this.skierInstances);

		// Sail instances (white triangular sails above sailboats)
		const sailGeo = new THREE.ConeGeometry(0.5, 1, 3);
		sailGeo.translate(0, 0.5, 0);
		const sailMat = new THREE.MeshLambertMaterial({ color: 0xFFFFFF, side: THREE.DoubleSide });
		this.sailInstances = new THREE.InstancedMesh(sailGeo, sailMat, MAX_SAILS);
		this.sailInstances.count = 0;
		this.sailInstances.frustumCulled = false;
		this.sailInstances.layers.set(0);
		this.scene.add(this.sailInstances);

		// Contrail instances (white elongated boxes behind jets)
		const contrailGeo = new THREE.BoxGeometry(1, 1, 1);
		contrailGeo.translate(0, 0.5, 0);
		const contrailMat = new THREE.MeshBasicMaterial({ color: 0xFFFFFF, transparent: true, opacity: 0.5 });
		this.contrailInstances = new THREE.InstancedMesh(contrailGeo, contrailMat, MAX_CONTRAILS);
		this.contrailInstances.count = 0;
		this.contrailInstances.frustumCulled = false;
		this.contrailInstances.layers.set(0);
		this.scene.add(this.contrailInstances);

		// Chairlift tower instances
		const liftGeo = new THREE.BoxGeometry(1, 1, 1);
		liftGeo.translate(0, 0.5, 0);
		const liftMat = new THREE.MeshLambertMaterial({ color: 0x777777 });
		this.liftInstances = new THREE.InstancedMesh(liftGeo, liftMat, MAX_LIFT_PARTS);
		this.liftInstances.count = 0;
		this.liftInstances.frustumCulled = false;
		this.liftInstances.layers.set(0);
		this.scene.add(this.liftInstances);

		// Precompute lift tower positions (data only, rendered via instancing)
		this.liftTowers = [];
		for (const slope of SKI_SLOPES) {
			const heading = Math.atan2(slope.botLon - slope.topLon, slope.botLat - slope.topLat);
			for (let t = 0; t <= 4; t++) {
				const frac = t / 4;
				const tLon = slope.topLon + (slope.botLon - slope.topLon) * frac;
				const tLat = slope.topLat + (slope.botLat - slope.topLat) * frac;
				const tAlt = slope.topAlt + (slope.botAlt - slope.topAlt) * frac;
				const offsetLon = Math.cos(heading + Math.PI/2) * 15 / (111320 * Math.cos(tLat * Math.PI / 180));
				const offsetLat = Math.sin(heading + Math.PI/2) * 15 / 111320;
				const height = 10 + (1 - frac) * 5;
				// Tower post
				this.liftTowers.push({ lon: tLon + offsetLon, lat: tLat + offsetLat, alt: tAlt, w: 0.8, h: height, d: 0.8 });
				// Cross-arm
				this.liftTowers.push({ lon: tLon + offsetLon, lat: tLat + offsetLat, alt: tAlt + height, w: 5, h: 0.4, d: 0.4 });
			}
		}

		this.spawnVehicles();
		this.spawnBoats();
		this.spawnAircraft();
		this.spawnSkiers();

		this.initialized = true;
	}

	spawnVehicles() {
		for (const hwy of HIGHWAYS) {
			const wps = hwy.waypoints;
			// Place vehicles along the route
			for (let s = 0; s < wps.length - 1; s++) {
				const a = wps[s], b = wps[s + 1];
				const segLen = Math.sqrt((b.lon - a.lon) ** 2 + (b.lat - a.lat) ** 2);
				// Vehicles spaced proportional to density and lanes
				const numVehicles = Math.floor(segLen * 500 * hwy.vehicleDensity * hwy.lanes);
				for (let v = 0; v < numVehicles; v++) {
					if (this.vehicles.length >= MAX_VEHICLES) break;
					const t = seededRandom(s * 100 + v, this.vehicles.length) ;
					const lon = a.lon + (b.lon - a.lon) * t;
					const lat = a.lat + (b.lat - a.lat) * t;
					// Lane offset
					const laneIdx = Math.floor(seededRandom(v * 3, s * 7) * hwy.lanes);
					const laneOffset = (laneIdx - hwy.lanes / 2) * 0.00003; // ~3m per lane
					const heading = Math.atan2(b.lon - a.lon, b.lat - a.lat);
					const perpLon = Math.cos(heading) * laneOffset;
					const perpLat = -Math.sin(heading) * laneOffset;

					// Speed variation
					const baseSpeed = 25 + seededRandom(v * 5, s * 3) * 15; // 25-40 m/s (55-90 mph)
					const isTruck = seededRandom(v * 9, s * 11) < 0.15;

					// Color: car colors
					const carColors = [0xCC0000, 0x0044AA, 0x333333, 0xFFFFFF, 0x888888, 0xCCCCCC, 0x004400, 0x222222, 0xAA6600, 0x660000];
					const truckColors = [0xFFFFFF, 0xDDDDDD, 0x444444, 0xFFCC00, 0x0066CC];
					const colors = isTruck ? truckColors : carColors;
					const color = colors[Math.floor(seededRandom(v * 13, s * 17) * colors.length)];

					this.vehicles.push({
						lon: lon + perpLon,
						lat: lat + perpLat,
						speed: isTruck ? baseSpeed * 0.7 : baseSpeed,
						heading: heading,
						segIdx: s,
						segT: t,
						highway: hwy,
						isTruck,
						color,
						width: isTruck ? 2.5 : 1.8,
						height: isTruck ? 4.0 : 1.5,
						length: isTruck ? 12 : 4.5,
						direction: seededRandom(v * 19, s * 23) > 0.5 ? 1 : -1, // forward or backward on highway
					});
				}
			}
		}
	}

	spawnBoats() {
		for (const area of BOAT_AREAS) {
			for (let i = 0; i < area.count; i++) {
				if (this.boats.length >= MAX_BOATS) break;
				const angle = seededRandom(i * 7, this.boats.length * 13) * Math.PI * 2;
				const dist = seededRandom(i * 11, this.boats.length * 17) * 0.7; // Stay within 70% of radius
				const mPerDegLat = 111320;
				const mPerDegLon = 111320 * Math.cos(area.centerLat * Math.PI / 180);

				const isLarge = seededRandom(i * 23, this.boats.length * 29) < 0.2;
				const isSailboat = !isLarge && seededRandom(i * 31, this.boats.length * 37) < 0.3;

				this.boats.push({
					lon: area.centerLon + Math.cos(angle) * dist * area.radiusM / mPerDegLon,
					lat: area.centerLat + Math.sin(angle) * dist * area.radiusM / mPerDegLat,
					elevation: area.elevation,
					speed: isLarge ? 3 : (isSailboat ? 2 : 5), // m/s
					heading: seededRandom(i * 41, this.boats.length * 43) * Math.PI * 2,
					turnRate: (seededRandom(i * 47, this.boats.length * 53) - 0.5) * 0.3,
					isLarge,
					isSailboat,
					width: isLarge ? 15 : (isSailboat ? 3 : 4),
					height: isLarge ? 8 : (isSailboat ? 6 : 2),
					length: isLarge ? 40 : (isSailboat ? 8 : 6),
					color: isLarge ? 0x334455 : (isSailboat ? 0xFFFFFF : 0xDDDDDD),
					area,
				});
			}
		}
	}

	spawnAircraft() {
		for (const corridor of FLIGHT_CORRIDORS) {
			for (let i = 0; i < corridor.count; i++) {
				if (this.aircraft.length >= MAX_AIRCRAFT) break;
				const t = seededRandom(i * 7, this.aircraft.length * 11);
				const lon = corridor.startLon + (corridor.endLon - corridor.startLon) * t;
				const lat = corridor.startLat + (corridor.endLat - corridor.startLat) * t;

				const isHelicopter = corridor.altitude < 1000;
				const isJet = corridor.speed > 250;

				// High altitude jets produce contrails
				const hasContrail = corridor.altitude > 7000 && !isHelicopter;

				this.aircraft.push({
					lon, lat,
					altitude: corridor.altitude + (seededRandom(i * 13, this.aircraft.length * 17) - 0.5) * 500,
					speed: corridor.speed + (seededRandom(i * 19, this.aircraft.length * 23) - 0.5) * 20,
					heading: Math.atan2(
						corridor.endLon - corridor.startLon,
						corridor.endLat - corridor.startLat
					),
					corridor, t, direction: 1,
					isHelicopter, isJet, hasContrail,
					width: isHelicopter ? 8 : (isJet ? 12 : 35),
					height: isHelicopter ? 4 : (isJet ? 5 : 12),
					length: isHelicopter ? 12 : (isJet ? 15 : 60),
					color: isHelicopter ? 0x444444 : (isJet ? 0x888888 : 0xFAFAFA),
					// Track last positions for contrail
					prevPositions: [],
				});
			}
		}
	}

	spawnSkiers() {
		for (const slope of SKI_SLOPES) {
			for (let i = 0; i < slope.count; i++) {
				if (this.skiers.length >= MAX_SKIERS) break;

				const t = seededRandom(i * 7, this.skiers.length * 13);
				const lon = slope.topLon + (slope.botLon - slope.topLon) * t;
				const lat = slope.topLat + (slope.botLat - slope.topLat) * t;
				const alt = slope.topAlt + (slope.botAlt - slope.topAlt) * t;
				// Slight lateral spread across the run
				const mPerDegLon = 111320 * Math.cos(lat * Math.PI / 180);
				const spread = (seededRandom(i * 17, this.skiers.length * 23) - 0.5) * 40;
				const heading = Math.atan2(slope.botLon - slope.topLon, slope.botLat - slope.topLat);

				// Random gear color
				const jacketColors = [0xFF0000, 0x0044FF, 0x00AA00, 0xFF6600, 0xFFFF00, 0xFF00FF, 0x000000, 0xFFFFFF];
				const color = jacketColors[Math.floor(seededRandom(i * 31, this.skiers.length * 37) * jacketColors.length)];

				const isSnowboarder = seededRandom(i * 41, this.skiers.length * 43) > 0.6;

				this.skiers.push({
					lon: lon + Math.cos(heading + Math.PI/2) * spread / mPerDegLon,
					lat: lat + Math.sin(heading + Math.PI/2) * spread / 111320,
					alt,
					speed: isSnowboarder ? (4 + seededRandom(i * 47, this.skiers.length * 53) * 8) : (5 + seededRandom(i * 47, this.skiers.length * 53) * 10),
					slope, t, heading, color, isSnowboarder,
					direction: 1, // 1 = going down, -1 = going up (chairlift)
				});
			}
		}
	}

	update(dt, state) {
		if (!this.initialized) return;

		this.time += dt;

		const eagleLon = state.lon;
		const eagleLat = state.lat;
		const eagleAlt = state.alt;
		const eagleAltM = eagleAlt * 0.3048;

		const mPerDegLat = 111320;
		const mPerDegLon = 111320 * Math.cos(THREE.MathUtils.degToRad(eagleLat));

		const matrix = new THREE.Matrix4();
		const position = new THREE.Vector3();
		const quat = new THREE.Quaternion();
		const scale = new THREE.Vector3();
		const color = new THREE.Color();
		const euler = new THREE.Euler();

		// ========== UPDATE & RENDER VEHICLES ==========
		const vehicleRenderDist = Math.max(3000, eagleAltM * 5);
		let vIdx = 0;

		for (const v of this.vehicles) {
			// Animate: move along highway
			const wps = v.highway.waypoints;
			const a = wps[v.segIdx], b = wps[v.segIdx + 1];
			if (!a || !b) continue;

			v.segT += v.direction * v.speed * dt / (111320 * Math.sqrt((b.lon - a.lon) ** 2 + (b.lat - a.lat) ** 2));

			// Wrap at segment ends
			if (v.segT > 1.0) {
				v.segT = 0;
				v.segIdx = Math.min(v.segIdx + 1, wps.length - 2);
				if (v.segIdx >= wps.length - 2) {
					v.segIdx = 0; v.direction = 1;
				}
			} else if (v.segT < 0) {
				v.segT = 1.0;
				v.segIdx = Math.max(v.segIdx - 1, 0);
				if (v.segIdx <= 0) {
					v.segIdx = wps.length - 2; v.direction = -1;
				}
			}

			const a2 = wps[v.segIdx], b2 = wps[v.segIdx + 1];
			if (!a2 || !b2) continue;
			v.lon = a2.lon + (b2.lon - a2.lon) * v.segT;
			v.lat = a2.lat + (b2.lat - a2.lat) * v.segT;

			// Distance check
			const dx = (v.lon - eagleLon) * mPerDegLon;
			const dz = (v.lat - eagleLat) * mPerDegLat;
			const dist = Math.sqrt(dx * dx + dz * dz);
			if (dist > vehicleRenderDist || vIdx >= MAX_VEHICLES) continue;

			// Terrain-relative height (vehicles are on ground)
			const dy = -eagleAltM; // Approximate: vehicles at sea level + terrain

			position.set(dx, dy, -dz);
			euler.set(0, v.heading, 0);
			quat.setFromEuler(euler);
			scale.set(v.width, v.height, v.length);
			matrix.compose(position, quat, scale);
			this.vehicleInstances.setMatrixAt(vIdx, matrix);

			color.setHex(v.color);
			this.vehicleInstances.setColorAt(vIdx, color);
			vIdx++;
		}

		this.vehicleInstances.count = vIdx;
		if (vIdx > 0) {
			this.vehicleInstances.instanceMatrix.needsUpdate = true;
			if (this.vehicleInstances.instanceColor) this.vehicleInstances.instanceColor.needsUpdate = true;
		}

		// ========== UPDATE & RENDER BOATS ==========
		const boatRenderDist = Math.max(5000, eagleAltM * 6);
		let bIdx = 0;

		for (const boat of this.boats) {
			// Animate: boats patrol in circles/patterns
			boat.heading += boat.turnRate * dt;
			const bMPerDegLon = 111320 * Math.cos(boat.lat * Math.PI / 180);
			boat.lon += Math.sin(boat.heading) * boat.speed * dt / bMPerDegLon;
			boat.lat += Math.cos(boat.heading) * boat.speed * dt / mPerDegLat;

			// Keep within area radius
			const aDx = (boat.lon - boat.area.centerLon) * bMPerDegLon;
			const aDz = (boat.lat - boat.area.centerLat) * mPerDegLat;
			const aDist = Math.sqrt(aDx * aDx + aDz * aDz);
			if (aDist > boat.area.radiusM * 0.8) {
				// Turn back toward center
				const toCenter = Math.atan2(boat.area.centerLon - boat.lon, boat.area.centerLat - boat.lat);
				boat.heading += (toCenter - boat.heading) * dt * 2;
			}

			// Distance check from eagle
			const dx = (boat.lon - eagleLon) * mPerDegLon;
			const dz = (boat.lat - eagleLat) * mPerDegLat;
			const dist = Math.sqrt(dx * dx + dz * dz);
			if (dist > boatRenderDist || bIdx >= MAX_BOATS) continue;

			const dy = boat.elevation - eagleAltM;
			// Bob on water
			const bob = Math.sin(this.time * 1.5 + bIdx * 2.3) * 0.3;

			position.set(dx, dy + bob, -dz);
			euler.set(0, boat.heading, Math.sin(this.time * 2 + bIdx) * 0.05); // slight roll
			quat.setFromEuler(euler);
			scale.set(boat.width, boat.height, boat.length);
			matrix.compose(position, quat, scale);
			this.boatInstances.setMatrixAt(bIdx, matrix);

			color.setHex(boat.color);
			this.boatInstances.setColorAt(bIdx, color);
			bIdx++;
		}

		this.boatInstances.count = bIdx;
		if (bIdx > 0) {
			this.boatInstances.instanceMatrix.needsUpdate = true;
			if (this.boatInstances.instanceColor) this.boatInstances.instanceColor.needsUpdate = true;
		}

		// ========== UPDATE & RENDER AIRCRAFT ==========
		const acRenderDist = Math.max(15000, eagleAltM * 8);
		let aIdx = 0;

		for (const ac of this.aircraft) {
			// Animate: fly along corridor
			const c = ac.corridor;
			ac.t += ac.direction * ac.speed * dt / (111320 * Math.sqrt(
				(c.endLon - c.startLon) ** 2 + (c.endLat - c.startLat) ** 2
			));

			// Bounce at ends
			if (ac.t > 1.0) { ac.t = 1.0; ac.direction = -1; }
			if (ac.t < 0) { ac.t = 0; ac.direction = 1; }

			ac.lon = c.startLon + (c.endLon - c.startLon) * ac.t;
			ac.lat = c.startLat + (c.endLat - c.startLat) * ac.t;

			// Distance check
			const dx = (ac.lon - eagleLon) * mPerDegLon;
			const dz = (ac.lat - eagleLat) * mPerDegLat;
			const dy = ac.altitude - eagleAltM;
			const dist = Math.sqrt(dx * dx + dz * dz + dy * dy);
			if (dist > acRenderDist || aIdx >= MAX_AIRCRAFT) continue;

			position.set(dx, dy, -dz);
			const acHeading = ac.direction > 0 ? ac.heading : ac.heading + Math.PI;
			euler.set(0, acHeading, 0);
			quat.setFromEuler(euler);
			scale.set(ac.width, ac.height, ac.length);
			matrix.compose(position, quat, scale);
			this.aircraftInstances.setMatrixAt(aIdx, matrix);

			color.setHex(ac.color);
			this.aircraftInstances.setColorAt(aIdx, color);
			aIdx++;
		}

		this.aircraftInstances.count = aIdx;
		if (aIdx > 0) {
			this.aircraftInstances.instanceMatrix.needsUpdate = true;
			if (this.aircraftInstances.instanceColor) this.aircraftInstances.instanceColor.needsUpdate = true;
		}

		// ========== CHAIRLIFT TOWERS (instanced) ==========
		if (this.liftTowers && this.liftInstances) {
			const liftRenderDist = Math.max(6000, eagleAltM * 5);
			let lIdx = 0;
			for (const t of this.liftTowers) {
				if (lIdx >= MAX_LIFT_PARTS) break;
				const tdx = (t.lon - eagleLon) * mPerDegLon;
				const tdz = (t.lat - eagleLat) * mPerDegLat;
				const dist = Math.sqrt(tdx * tdx + tdz * tdz);
				if (dist > liftRenderDist) continue;

				// Sample terrain for tower base altitude
				let tAlt = t.alt;
				try {
					const tc = Cesium.Cartographic.fromDegrees(t.lon, t.lat);
					const tth = this.viewer.scene.globe.getHeight(tc);
					if (tth !== undefined && tth !== null) tAlt = tth;
				} catch(e) {}

				const tdy = tAlt - eagleAltM;
				position.set(tdx, tdy, -tdz);
				quat.identity();
				scale.set(t.w, t.h, t.d);
				matrix.compose(position, quat, scale);
				this.liftInstances.setMatrixAt(lIdx, matrix);
				color.setHex(0x777777);
				this.liftInstances.setColorAt(lIdx, color);
				lIdx++;
			}
			this.liftInstances.count = lIdx;
			if (lIdx > 0) {
				this.liftInstances.instanceMatrix.needsUpdate = true;
				if (this.liftInstances.instanceColor) this.liftInstances.instanceColor.needsUpdate = true;
			}
		}

		// ========== SAILS ON SAILBOATS ==========
		let sIdx = 0;
		for (const boat of this.boats) {
			if (!boat.isSailboat || sIdx >= MAX_SAILS) continue;
			const dx = (boat.lon - eagleLon) * mPerDegLon;
			const dz = (boat.lat - eagleLat) * mPerDegLat;
			const dist = Math.sqrt(dx * dx + dz * dz);
			if (dist > boatRenderDist) continue;

			const dy = boat.elevation - eagleAltM;
			const bob = Math.sin(this.time * 1.5 + sIdx * 2.3) * 0.3;

			// Sail rises above the boat hull
			position.set(dx, dy + bob + boat.height * 0.8, -dz);
			euler.set(0, boat.heading + 0.3, Math.sin(this.time + sIdx) * 0.1);
			quat.setFromEuler(euler);
			scale.set(boat.width * 0.6, boat.height * 1.5, boat.width * 0.4);
			matrix.compose(position, quat, scale);
			this.sailInstances.setMatrixAt(sIdx, matrix);
			color.setHex(0xFFFFFF);
			this.sailInstances.setColorAt(sIdx, color);
			sIdx++;
		}
		this.sailInstances.count = sIdx;
		if (sIdx > 0) {
			this.sailInstances.instanceMatrix.needsUpdate = true;
			if (this.sailInstances.instanceColor) this.sailInstances.instanceColor.needsUpdate = true;
		}

		// ========== SKIERS ON SLOPES ==========
		const skierRenderDist = Math.max(6000, eagleAltM * 5);
		let kIdx = 0;
		for (const skier of this.skiers) {
			const sl = skier.slope;
			const segLen = Math.sqrt(
				((sl.botLon - sl.topLon) * mPerDegLon) ** 2 +
				((sl.botLat - sl.topLat) * mPerDegLat) ** 2
			);
			skier.t += skier.direction * skier.speed * dt / Math.max(1, segLen);

			if (skier.t > 1.0) { skier.t = 1.0; skier.direction = -1; skier.speed = 2; }
			if (skier.t < 0) { skier.t = 0; skier.direction = 1; skier.speed = skier.isSnowboarder ? (4 + Math.random() * 8) : (5 + Math.random() * 10); }

			skier.lon = sl.topLon + (sl.botLon - sl.topLon) * skier.t;
			skier.lat = sl.topLat + (sl.botLat - sl.topLat) * skier.t;

			// Use terrain height instead of hardcoded altitude
			try {
				var cart = Cesium.Cartographic.fromDegrees(skier.lon, skier.lat);
				var th = this.viewer.scene.globe.getHeight(cart);
				if (th !== undefined && th !== null) {
					skier.alt = th + 1.0;
				} else {
					skier.alt = sl.topAlt + (sl.botAlt - sl.topAlt) * skier.t;
				}
			} catch(e) {
				skier.alt = sl.topAlt + (sl.botAlt - sl.topAlt) * skier.t;
			}

			const dx = (skier.lon - eagleLon) * mPerDegLon;
			const dz = (skier.lat - eagleLat) * mPerDegLat;
			const dist = Math.sqrt(dx * dx + dz * dz);
			if (dist > skierRenderDist || kIdx >= MAX_SKIERS) continue;

			const dy = skier.alt - eagleAltM;

			// Scale skiers bigger at distance so they're visible
			const distScale = Math.max(1, dist / 500);

			position.set(dx, dy, -dz);
			euler.set(0, skier.heading, 0);
			quat.setFromEuler(euler);
			scale.set(0.8 * distScale, 1.8 * distScale, 0.8 * distScale);
			matrix.compose(position, quat, scale);
			this.skierInstances.setMatrixAt(kIdx, matrix);
			color.setHex(skier.color);
			this.skierInstances.setColorAt(kIdx, color);
			kIdx++;
		}
		this.skierInstances.count = kIdx;
		if (kIdx > 0) {
			this.skierInstances.instanceMatrix.needsUpdate = true;
			if (this.skierInstances.instanceColor) this.skierInstances.instanceColor.needsUpdate = true;
		}

		// ========== CONTRAILS BEHIND HIGH-ALT JETS ==========
		let cIdx = 0;
		for (const ac of this.aircraft) {
			if (!ac.hasContrail || cIdx >= MAX_CONTRAILS) continue;
			const dx = (ac.lon - eagleLon) * mPerDegLon;
			const dz = (ac.lat - eagleLat) * mPerDegLat;
			const dy = ac.altitude - eagleAltM;
			const dist = Math.sqrt(dx * dx + dz * dz);
			if (dist > acRenderDist) continue;

			// Contrail: long thin white box behind the aircraft
			const acHeading = ac.direction > 0 ? ac.heading : ac.heading + Math.PI;
			const trailLen = 300 + ac.speed * 2; // Longer at higher speed
			const behindX = dx - Math.sin(acHeading) * trailLen * 0.5;
			const behindZ = -dz + Math.cos(acHeading) * trailLen * 0.5;

			position.set(behindX, dy, behindZ);
			euler.set(0, acHeading, 0);
			quat.setFromEuler(euler);
			scale.set(3, 2, trailLen);
			matrix.compose(position, quat, scale);
			this.contrailInstances.setMatrixAt(cIdx, matrix);
			color.setHex(0xFFFFFF);
			this.contrailInstances.setColorAt(cIdx, color);
			cIdx++;
		}
		this.contrailInstances.count = cIdx;
		if (cIdx > 0) {
			this.contrailInstances.instanceMatrix.needsUpdate = true;
			if (this.contrailInstances.instanceColor) this.contrailInstances.instanceColor.needsUpdate = true;
		}
	}

	dispose() {
		[this.vehicleInstances, this.boatInstances, this.aircraftInstances,
		 this.skierInstances, this.sailInstances, this.contrailInstances, this.liftInstances].forEach(inst => {
			if (inst) {
				this.scene.remove(inst);
				inst.dispose();
			}
		});
	}
}
