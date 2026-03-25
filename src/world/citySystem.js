import * as THREE from 'three';

/**
 * City Building System - Procedural 3D buildings for major cities within the territory.
 *
 * Uses instanced meshes for performance. Building heights, density, and styles
 * vary by city size and character. Buildings are seeded randomly for consistency.
 */

// Major cities with their characteristics
const CITIES = [
	// === MAJOR METRO ===
	{
		name: 'Los Angeles',
		lon: -118.2437, lat: 34.0522, elevation: 90,
		radius: 5000,           // City extent in meters
		density: 0.7,           // Building probability per cell
		minHeight: 5, maxHeight: 280, // Building heights in meters
		downtownRadius: 1500,   // Dense tall core
		style: 'modern',
		gridSize: 30,
	},
	{
		name: 'Downtown LA',
		lon: -118.2468, lat: 34.0407, elevation: 90,
		radius: 1200,
		density: 0.9,
		minHeight: 30, maxHeight: 310,
		downtownRadius: 600,
		style: 'modern',
		gridSize: 25,
	},
	{
		name: 'Las Vegas (City)',
		lon: -115.1398, lat: 36.1699, elevation: 610,
		radius: 4000,
		density: 0.6,
		minHeight: 5, maxHeight: 100,
		downtownRadius: 1000,
		style: 'modern',
		gridSize: 30,
	},
	{
		name: 'San Diego',
		lon: -117.1611, lat: 32.7157, elevation: 20,
		radius: 3500,
		density: 0.65,
		minHeight: 5, maxHeight: 150,
		downtownRadius: 800,
		style: 'modern',
		gridSize: 28,
	},
	{
		name: 'Phoenix',
		lon: -112.0740, lat: 33.4484, elevation: 340,
		radius: 5000,
		density: 0.5,
		minHeight: 5, maxHeight: 130,
		downtownRadius: 1000,
		style: 'modern',
		gridSize: 35,
	},
	// === MID-SIZE CITIES ===
	{
		name: 'Long Beach',
		lon: -118.1937, lat: 33.7701, elevation: 10,
		radius: 2000,
		density: 0.6,
		minHeight: 5, maxHeight: 90,
		downtownRadius: 500,
		style: 'modern',
		gridSize: 28,
	},
	{
		name: 'Riverside',
		lon: -117.3755, lat: 33.9806, elevation: 260,
		radius: 1800,
		density: 0.45,
		minHeight: 5, maxHeight: 50,
		downtownRadius: 400,
		style: 'suburban',
		gridSize: 35,
	},
	{
		name: 'San Bernardino',
		lon: -117.2898, lat: 34.1083, elevation: 330,
		radius: 1500,
		density: 0.4,
		minHeight: 5, maxHeight: 40,
		downtownRadius: 400,
		style: 'suburban',
		gridSize: 35,
	},
	{
		name: 'Bakersfield',
		lon: -119.0187, lat: 35.3733, elevation: 120,
		radius: 2000,
		density: 0.4,
		minHeight: 4, maxHeight: 40,
		downtownRadius: 500,
		style: 'suburban',
		gridSize: 35,
	},
	{
		name: 'Palm Springs',
		lon: -116.5453, lat: 33.8303, elevation: 150,
		radius: 1200,
		density: 0.35,
		minHeight: 4, maxHeight: 30,
		downtownRadius: 300,
		style: 'resort',
		gridSize: 40,
	},
	{
		name: 'Santa Barbara',
		lon: -119.6982, lat: 34.4208, elevation: 15,
		radius: 1500,
		density: 0.5,
		minHeight: 4, maxHeight: 30,
		downtownRadius: 400,
		style: 'spanish',
		gridSize: 30,
	},
	{
		name: 'Pasadena',
		lon: -118.1445, lat: 34.1478, elevation: 260,
		radius: 1200,
		density: 0.5,
		minHeight: 5, maxHeight: 50,
		downtownRadius: 400,
		style: 'modern',
		gridSize: 30,
	},
	{
		name: 'Glendale',
		lon: -118.2551, lat: 34.1425, elevation: 180,
		radius: 1000,
		density: 0.55,
		minHeight: 5, maxHeight: 70,
		downtownRadius: 400,
		style: 'modern',
		gridSize: 28,
	},
	{
		name: 'Burbank',
		lon: -118.3090, lat: 34.1808, elevation: 180,
		radius: 1000,
		density: 0.5,
		minHeight: 5, maxHeight: 50,
		downtownRadius: 400,
		style: 'modern',
		gridSize: 30,
	},
	{
		name: 'Tucson',
		lon: -110.9747, lat: 32.2226, elevation: 730,
		radius: 2500,
		density: 0.4,
		minHeight: 4, maxHeight: 60,
		downtownRadius: 600,
		style: 'desert',
		gridSize: 35,
	},
	{
		name: 'Henderson',
		lon: -114.9817, lat: 36.0395, elevation: 590,
		radius: 1500,
		density: 0.4,
		minHeight: 4, maxHeight: 30,
		downtownRadius: 400,
		style: 'suburban',
		gridSize: 35,
	},
	{
		name: 'Anaheim',
		lon: -117.9145, lat: 33.8366, elevation: 50,
		radius: 1500,
		density: 0.55,
		minHeight: 5, maxHeight: 50,
		downtownRadius: 500,
		style: 'modern',
		gridSize: 30,
	},
	{
		name: 'Irvine',
		lon: -117.8265, lat: 33.6846, elevation: 25,
		radius: 1500,
		density: 0.5,
		minHeight: 5, maxHeight: 50,
		downtownRadius: 400,
		style: 'modern',
		gridSize: 30,
	},
	{
		name: 'Oxnard',
		lon: -119.1771, lat: 34.1975, elevation: 15,
		radius: 1000,
		density: 0.4,
		minHeight: 4, maxHeight: 25,
		downtownRadius: 300,
		style: 'suburban',
		gridSize: 35,
	},
	{
		name: 'Fresno',
		lon: -119.7871, lat: 36.7378, elevation: 93,
		radius: 2000,
		density: 0.45,
		minHeight: 4, maxHeight: 50,
		downtownRadius: 500,
		style: 'suburban',
		gridSize: 35,
	},
];

// Building color palettes by style
const STYLE_COLORS = {
	modern: [0x8899AA, 0x6677AA, 0x99AABB, 0xAABBCC, 0x556677, 0x778899, 0x445566, 0xBBCCDD],
	suburban: [0xDDCCAA, 0xCCBB99, 0xBBAA88, 0xEEDDBB, 0xC8B896, 0xBFAF8D],
	resort: [0xF5E6CC, 0xE8D5B5, 0xFFEDD0, 0xF0DEC0, 0xE0CCB0],
	spanish: [0xE8C8A0, 0xD4A875, 0xF0D8B8, 0xCC9966, 0xBB8855],
	desert: [0xD2B48C, 0xC8AD7F, 0xBFA882, 0xD4B896, 0xCCA670],
};

// Seeded random for deterministic building placement
function seededRandom(x, y) {
	let seed = (x * 73856093) ^ (y * 19349663);
	seed = ((seed >> 16) ^ seed) * 0x45d9f3b;
	seed = ((seed >> 16) ^ seed) * 0x45d9f3b;
	seed = (seed >> 16) ^ seed;
	return (seed & 0x7fffffff) / 0x7fffffff;
}

const MAX_BUILDINGS = 5000;

export class CitySystem {
	constructor(cesiumViewer, threeScene) {
		this.viewer = cesiumViewer;
		this.scene = threeScene;

		// Instanced mesh for buildings
		this.buildingInstances = null;
		this.roofInstances = null;

		// Track which city cells are generated
		this.generatedCities = new Map(); // cityName -> { buildings: [...] }
		this.activeCities = [];

		this.lastUpdateTime = 0;
		this.initialized = false;

		this.init();
	}

	init() {
		const boxGeo = new THREE.BoxGeometry(1, 1, 1);
		boxGeo.translate(0, 0.5, 0); // Origin at base

		const buildingMat = new THREE.MeshLambertMaterial({
			color: 0x8899AA,
			flatShading: true,
		});

		this.buildingInstances = new THREE.InstancedMesh(boxGeo, buildingMat, MAX_BUILDINGS);
		this.buildingInstances.count = 0;
		this.buildingInstances.frustumCulled = false;
		this.buildingInstances.layers.set(0);
		this.scene.add(this.buildingInstances);

		// Pre-generate all cities (buildings are stored as data, rendered via instancing)
		for (const city of CITIES) {
			this.generateCity(city);
		}

		this.initialized = true;
	}

	generateCity(city) {
		const buildings = [];
		const cells = Math.ceil(city.radius / city.gridSize);
		const colors = STYLE_COLORS[city.style] || STYLE_COLORS.modern;

		for (let cx = -cells; cx <= cells; cx++) {
			for (let cz = -cells; cz <= cells; cz++) {
				const localX = cx * city.gridSize;
				const localZ = cz * city.gridSize;
				const dist = Math.sqrt(localX * localX + localZ * localZ);

				if (dist > city.radius) continue;

				const rand = seededRandom(cx + city.lon * 10000, cz + city.lat * 10000);
				if (rand > city.density) continue;

				// Road grid gaps (every Nth cell is a road)
				const roadInterval = city.style === 'modern' ? 4 : 5;
				if (cx % roadInterval === 0 || cz % roadInterval === 0) continue;

				// Height based on distance from downtown
				const distFactor = 1 - Math.min(1, dist / city.radius);
				const downtownFactor = dist < city.downtownRadius
					? 1 - (dist / city.downtownRadius) * 0.5
					: 0.3 * (1 - (dist - city.downtownRadius) / (city.radius - city.downtownRadius));

				const heightRand = seededRandom(cx * 200 + city.lon * 5000, cz * 200 + city.lat * 5000);
				const baseHeight = city.minHeight + (city.maxHeight - city.minHeight) * downtownFactor * heightRand;
				const height = Math.max(city.minHeight, baseHeight);

				// Building size
				const widthRand = seededRandom(cx * 300, cz * 300);
				const width = city.gridSize * 0.4 + widthRand * city.gridSize * 0.4;
				const depth = city.gridSize * 0.4 + seededRandom(cx * 400, cz * 400) * city.gridSize * 0.4;

				// Color
				const colorIdx = Math.floor(seededRandom(cx * 500, cz * 500) * colors.length) % colors.length;

				buildings.push({
					x: localX + (rand - 0.5) * city.gridSize * 0.3,
					z: localZ + (seededRandom(cx * 600, cz * 600) - 0.5) * city.gridSize * 0.3,
					width, depth, height,
					color: colors[colorIdx],
				});
			}
		}

		this.generatedCities.set(city.name, { city, buildings });
	}

	update(dt, state) {
		if (!this.initialized) return;

		const now = Date.now();
		if (now - this.lastUpdateTime < 300) return;
		this.lastUpdateTime = now;

		const eagleLon = state.lon;
		const eagleLat = state.lat;
		const eagleAlt = state.alt;
		const eagleAltM = eagleAlt * 0.3048;

		const metersPerDegreeLat = 111320;
		const metersPerDegreeLon = 111320 * Math.cos(THREE.MathUtils.degToRad(eagleLat));

		// Max render distance based on altitude
		const maxRenderDist = Math.max(8000, eagleAltM * 10);

		const matrix = new THREE.Matrix4();
		const position = new THREE.Vector3();
		const quaternion = new THREE.Quaternion();
		const scale = new THREE.Vector3();
		const color = new THREE.Color();

		let idx = 0;

		for (const [name, { city, buildings }] of this.generatedCities) {
			// Distance from eagle to city center
			const cityDx = (city.lon - eagleLon) * metersPerDegreeLon;
			const cityDz = (city.lat - eagleLat) * metersPerDegreeLat;
			const cityDist = Math.sqrt(cityDx * cityDx + cityDz * cityDz);

			// Skip cities too far away
			if (cityDist > maxRenderDist + city.radius) continue;

			const cityDy = city.elevation - eagleAltM;

			for (const bldg of buildings) {
				if (idx >= MAX_BUILDINGS) break;

				const worldX = cityDx + bldg.x;
				const worldZ = -cityDz - bldg.z;
				const bldgDist = Math.sqrt(worldX * worldX + worldZ * worldZ);

				if (bldgDist > maxRenderDist) continue;

				// LOD: reduce detail for distant buildings
				let h = bldg.height;
				if (bldgDist > maxRenderDist * 0.7) {
					// Only show taller buildings at distance
					if (h < 20) continue;
				}

				position.set(worldX, cityDy, worldZ);
				scale.set(bldg.width, h, bldg.depth);
				matrix.compose(position, quaternion, scale);
				this.buildingInstances.setMatrixAt(idx, matrix);

				color.setHex(bldg.color);
				// Slight variation
				const v = 0.85 + seededRandom(Math.floor(bldg.x), Math.floor(bldg.z)) * 0.3;
				color.multiplyScalar(v);
				this.buildingInstances.setColorAt(idx, color);

				idx++;
			}
			if (idx >= MAX_BUILDINGS) break;
		}

		this.buildingInstances.count = idx;
		if (idx > 0) {
			this.buildingInstances.instanceMatrix.needsUpdate = true;
			if (this.buildingInstances.instanceColor)
				this.buildingInstances.instanceColor.needsUpdate = true;
		}
	}

	dispose() {
		if (this.buildingInstances) {
			this.scene.remove(this.buildingInstances);
			this.buildingInstances.dispose();
		}
	}
}
