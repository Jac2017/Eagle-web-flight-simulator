import * as THREE from 'three';
import * as Cesium from 'cesium';
import { WaterSystem } from './waterSystem';

/**
 * 3D Tree System - Procedural forest rendering for Big Bear Valley region.
 *
 * Uses instanced meshes for performance. Trees are placed based on altitude
 * zones matching real Big Bear Valley vegetation:
 * - Below 5,000ft: Chaparral/scrub (sparse short trees)
 * - 5,000-7,000ft: Mixed conifer forest (Jeffrey pine, white fir)
 * - 7,000-9,000ft: Dense conifer forest (lodgepole pine, limber pine)
 * - Above 9,000ft: Alpine/subalpine (sparse, stunted trees)
 * - Water/lake areas: No trees
 */

const TREE_CONFIG = {
	// How far from the eagle to render trees (meters)
	renderDistance: 2000,
	// Grid cell size for tree placement (meters)
	cellSize: 40,
	// Max trees in the scene at once
	maxTrees: 3000,
	// Update interval for tree placement (ms)
	updateInterval: 500,
	// Tree LOD distances
	lodNear: 500,
	lodFar: 1500,
};

// Tree/flora species with their characteristics
// Organized by biome - altitude and lat/lon determine which biome applies
const TREE_SPECIES = {
	// === MOUNTAIN CONIFERS (Big Bear area) ===
	jeffreyPine: {
		trunkHeight: 20, trunkRadius: 0.4,
		crownHeight: 12, crownRadius: 4,
		trunkColor: 0x5C3A1E, crownColor: 0x2D5A27,
		altMin: 1500, altMax: 2400, density: 0.6,
		biome: 'mountain',
	},
	whiteFir: {
		trunkHeight: 25, trunkRadius: 0.5,
		crownHeight: 18, crownRadius: 3.5,
		trunkColor: 0x6B4226, crownColor: 0x1B4D1B,
		altMin: 1700, altMax: 2700, density: 0.5,
		biome: 'mountain',
	},
	lodgepolePine: {
		trunkHeight: 18, trunkRadius: 0.3,
		crownHeight: 10, crownRadius: 2.5,
		trunkColor: 0x7A5230, crownColor: 0x3A6B35,
		altMin: 2100, altMax: 3000, density: 0.7,
		biome: 'mountain',
	},
	scrubOak: {
		trunkHeight: 6, trunkRadius: 0.2,
		crownHeight: 5, crownRadius: 3,
		trunkColor: 0x5A3E28, crownColor: 0x4A7A3A,
		altMin: 1000, altMax: 1800, density: 0.3,
		biome: 'mountain',
	},
	alpinePine: {
		trunkHeight: 8, trunkRadius: 0.25,
		crownHeight: 6, crownRadius: 2,
		trunkColor: 0x6B4A30, crownColor: 0x2A5530,
		altMin: 2700, altMax: 3500, density: 0.15,
		biome: 'mountain',
	},

	// === DESERT FLORA (Mojave, 29 Palms, Fort Irwin area) ===
	joshuaTree: {
		trunkHeight: 8, trunkRadius: 0.3,
		crownHeight: 4, crownRadius: 3,
		trunkColor: 0x8B7355, crownColor: 0x6B8E4E,
		altMin: 400, altMax: 1800, density: 0.12,
		biome: 'desert',
	},
	saguaroCactus: {
		trunkHeight: 10, trunkRadius: 0.4,
		crownHeight: 2, crownRadius: 0.5,
		trunkColor: 0x4A7A4A, crownColor: 0x5A8A5A,
		altMin: 200, altMax: 1200, density: 0.06,
		biome: 'desert',
	},
	creosoteBush: {
		trunkHeight: 2, trunkRadius: 0.1,
		crownHeight: 2, crownRadius: 1.5,
		trunkColor: 0x6B5A3E, crownColor: 0x7A8B50,
		altMin: 0, altMax: 1500, density: 0.2,
		biome: 'desert',
	},
	desertSage: {
		trunkHeight: 1.2, trunkRadius: 0.05,
		crownHeight: 1, crownRadius: 0.8,
		trunkColor: 0x8A7A60, crownColor: 0x9AA87A,
		altMin: 0, altMax: 2000, density: 0.25,
		biome: 'desert',
	},
	smokeyTree: {
		trunkHeight: 5, trunkRadius: 0.15,
		crownHeight: 4, crownRadius: 2.5,
		trunkColor: 0x7A6B55, crownColor: 0x8A9A7A,
		altMin: 100, altMax: 900, density: 0.08,
		biome: 'desert',
	},

	// === PALM TREES (LA, coastal, Palm Springs, Vegas) ===
	californiaFanPalm: {
		trunkHeight: 18, trunkRadius: 0.3,
		crownHeight: 5, crownRadius: 4,
		trunkColor: 0x8B7355, crownColor: 0x3A8B3A,
		altMin: 0, altMax: 500, density: 0.3,
		biome: 'coastal',
	},
	datePalm: {
		trunkHeight: 15, trunkRadius: 0.35,
		crownHeight: 6, crownRadius: 4.5,
		trunkColor: 0x7A6B50, crownColor: 0x2D7A2D,
		altMin: 0, altMax: 300, density: 0.25,
		biome: 'coastal',
	},
	mexicanFanPalm: {
		trunkHeight: 25, trunkRadius: 0.25,
		crownHeight: 4, crownRadius: 3.5,
		trunkColor: 0x9A8A6A, crownColor: 0x4A9A4A,
		altMin: 0, altMax: 700, density: 0.2,
		biome: 'urban',
	},

	// === URBAN TREES (city streets and parks) ===
	urbanLondonPlane: {
		trunkHeight: 12, trunkRadius: 0.3,
		crownHeight: 8, crownRadius: 5,
		trunkColor: 0x7A6A5A, crownColor: 0x3A7A30,
		altMin: 0, altMax: 500, density: 0.15,
		biome: 'urban',
	},
	urbanJacaranda: {
		trunkHeight: 10, trunkRadius: 0.25,
		crownHeight: 6, crownRadius: 5,
		trunkColor: 0x5A4A3A, crownColor: 0x7A5AAA, // Purple blooms!
		altMin: 0, altMax: 500, density: 0.1,
		biome: 'urban',
	},
	urbanOak: {
		trunkHeight: 14, trunkRadius: 0.4,
		crownHeight: 10, crownRadius: 7,
		trunkColor: 0x5A4830, crownColor: 0x3A6A28,
		altMin: 0, altMax: 800, density: 0.12,
		biome: 'urban',
	},
	eucalyptus: {
		trunkHeight: 20, trunkRadius: 0.35,
		crownHeight: 10, crownRadius: 4,
		trunkColor: 0x9A8A7A, crownColor: 0x5A8A5A,
		altMin: 0, altMax: 600, density: 0.15,
		biome: 'coastal',
	},

	// === CHAPARRAL (foothills, below mountains) ===
	manzanita: {
		trunkHeight: 3, trunkRadius: 0.1,
		crownHeight: 3, crownRadius: 2,
		trunkColor: 0x8A3020, crownColor: 0x4A6A30,
		altMin: 300, altMax: 1500, density: 0.35,
		biome: 'chaparral',
	},
	californiaLaurel: {
		trunkHeight: 10, trunkRadius: 0.3,
		crownHeight: 7, crownRadius: 5,
		trunkColor: 0x5A4A30, crownColor: 0x2A5A20,
		altMin: 200, altMax: 1200, density: 0.2,
		biome: 'chaparral',
	},
	ceanothus: {
		trunkHeight: 4, trunkRadius: 0.15,
		crownHeight: 3, crownRadius: 2.5,
		trunkColor: 0x6A5A40, crownColor: 0x3A7A50,
		altMin: 200, altMax: 1500, density: 0.3,
		biome: 'chaparral',
	},
};

// Simple seeded random for deterministic tree placement
function seededRandom(x, y) {
	let seed = (x * 73856093) ^ (y * 19349663);
	seed = ((seed >> 16) ^ seed) * 0x45d9f3b;
	seed = ((seed >> 16) ^ seed) * 0x45d9f3b;
	seed = (seed >> 16) ^ seed;
	return (seed & 0x7fffffff) / 0x7fffffff;
}

export class TreeSystem {
	constructor(cesiumViewer, threeScene) {
		this.viewer = cesiumViewer;
		this.scene = threeScene;

		// Instanced meshes for each tree type component
		this.trunkInstances = null;
		this.crownInstances = null;

		// Track which grid cells have trees
		this.activeCells = new Map();
		this.lastUpdateTime = 0;
		this.lastUpdatePos = { lon: 0, lat: 0 };

		// Tree data arrays
		this.treePositions = [];   // World-relative positions
		this.treeCount = 0;

		// Shared geometries
		this.trunkGeometry = null;
		this.crownGeometries = {};

		this.initialized = false;
		this.init();
	}

	init() {
		// Trunk geometry (cylinder)
		this.trunkGeometry = new THREE.CylinderGeometry(0.3, 0.5, 1.0, 5, 1);
		this.trunkGeometry.translate(0, 0.5, 0);

		// Crown geometries for different tree types
		this.crownGeometries.conifer = new THREE.ConeGeometry(1.0, 1.0, 6, 1);
		this.crownGeometries.conifer.translate(0, 0.5, 0);
		this.crownGeometries.deciduous = new THREE.SphereGeometry(1.0, 5, 4);
		this.crownGeometries.deciduous.translate(0, 0, 0);
		// Palm crown: flattened sphere (wide, short)
		this.crownGeometries.palm = new THREE.SphereGeometry(1.0, 6, 4);
		this.crownGeometries.palm.scale(1, 0.4, 1);
		this.crownGeometries.palm.translate(0, 0.2, 0);
		// Cactus: tall cylinder
		this.crownGeometries.cactus = new THREE.CylinderGeometry(0.3, 0.4, 1.0, 5, 1);
		this.crownGeometries.cactus.translate(0, 0.5, 0);

		// Trunk instanced mesh (shared by all trees)
		const trunkMaterial = new THREE.MeshLambertMaterial({ color: 0x5C3A1E, flatShading: true });
		this.trunkInstances = new THREE.InstancedMesh(this.trunkGeometry, trunkMaterial, TREE_CONFIG.maxTrees);
		this.trunkInstances.count = 0;
		this.trunkInstances.frustumCulled = false;
		this.trunkInstances.layers.set(0);

		// Separate crown instanced meshes for each shape type
		const coniferMat = new THREE.MeshLambertMaterial({ color: 0x2D5A27, flatShading: true });
		this.coniferInstances = new THREE.InstancedMesh(this.crownGeometries.conifer, coniferMat, TREE_CONFIG.maxTrees);
		this.coniferInstances.count = 0;
		this.coniferInstances.frustumCulled = false;
		this.coniferInstances.layers.set(0);

		const deciduousMat = new THREE.MeshLambertMaterial({ color: 0x3A7A30, flatShading: true });
		this.deciduousInstances = new THREE.InstancedMesh(this.crownGeometries.deciduous, deciduousMat, 1000);
		this.deciduousInstances.count = 0;
		this.deciduousInstances.frustumCulled = false;
		this.deciduousInstances.layers.set(0);

		const palmMat = new THREE.MeshLambertMaterial({ color: 0x3A8B3A, flatShading: true });
		this.palmInstances = new THREE.InstancedMesh(this.crownGeometries.palm, palmMat, 500);
		this.palmInstances.count = 0;
		this.palmInstances.frustumCulled = false;
		this.palmInstances.layers.set(0);

		const cactusMat = new THREE.MeshLambertMaterial({ color: 0x4A7A4A, flatShading: true });
		this.cactusInstances = new THREE.InstancedMesh(this.crownGeometries.cactus, cactusMat, 500);
		this.cactusInstances.count = 0;
		this.cactusInstances.frustumCulled = false;
		this.cactusInstances.layers.set(0);

		// Keep legacy reference for compatibility
		this.crownInstances = this.coniferInstances;

		this.scene.add(this.trunkInstances);
		this.scene.add(this.coniferInstances);
		this.scene.add(this.deciduousInstances);
		this.scene.add(this.palmInstances);
		this.scene.add(this.cactusInstances);

		this.initialized = true;
	}

	/**
	 * Determine the biome for a given lat/lon position.
	 * Based on real Southern California geography.
	 */
	getBiome(lon, lat, altMeters) {
		// High altitude = mountain biome regardless
		if (altMeters > 1500) return 'mountain';

		// Chaparral foothills (mid-altitude around mountains)
		if (altMeters > 600 && altMeters < 1500) return 'chaparral';

		// Desert biome - east of the mountains, inland
		// Mojave: roughly north of 34.5°, east of -117.5°
		// Also 29 Palms area, Fort Irwin
		if (lat > 34.5 && lon > -117.5) return 'desert';
		if (lat > 33.5 && lon > -116.5 && altMeters < 600) return 'desert';
		// Coachella/Palm Springs desert
		if (lat < 34.0 && lat > 33.3 && lon > -116.8 && lon < -115.5) return 'desert';
		// Phoenix area
		if (lat < 34.0 && lon > -113.0) return 'desert';
		// Tucson area
		if (lat < 33.0 && lon > -112.0) return 'desert';

		// Coastal biome - near the Pacific
		if (lon < -117.5 && altMeters < 300) return 'coastal';
		if (lon < -118.0 && lat < 34.5) return 'coastal';

		// Urban biome - near major city centers
		const urbanCenters = [
			{ lon: -118.24, lat: 34.05, r: 0.15 },  // LA
			{ lon: -118.19, lat: 33.77, r: 0.08 },   // Long Beach
			{ lon: -117.16, lat: 32.72, r: 0.12 },   // San Diego
			{ lon: -115.14, lat: 36.17, r: 0.1 },    // Las Vegas
			{ lon: -117.91, lat: 33.84, r: 0.08 },   // Anaheim
			{ lon: -118.14, lat: 34.15, r: 0.05 },   // Pasadena
			{ lon: -112.07, lat: 33.45, r: 0.12 },   // Phoenix
			{ lon: -117.38, lat: 33.98, r: 0.06 },   // Riverside
			{ lon: -117.29, lat: 34.11, r: 0.05 },   // San Bernardino
		];
		for (const c of urbanCenters) {
			const d = Math.sqrt((lon - c.lon) ** 2 + (lat - c.lat) ** 2);
			if (d < c.r) return 'urban';
		}

		// Default: chaparral for mid-altitude, desert for low flat areas
		if (altMeters < 300 && lat > 34.5) return 'desert';
		return 'chaparral';
	}

	/**
	 * Get the appropriate tree species for a given altitude and biome
	 */
	getSpeciesForPosition(altMeters, lon, lat) {
		const biome = this.getBiome(lon, lat, altMeters);
		const candidates = [];
		for (const [name, species] of Object.entries(TREE_SPECIES)) {
			if (altMeters >= species.altMin && altMeters <= species.altMax) {
				// Species must match biome OR be a universal type
				if (species.biome === biome) {
					candidates.push({ name, ...species });
				}
			}
		}
		// If no candidates, try nearby biomes
		if (candidates.length === 0) {
			const fallbackBiomes = {
				mountain: ['chaparral'],
				chaparral: ['mountain', 'coastal'],
				desert: ['chaparral'],
				coastal: ['urban', 'chaparral'],
				urban: ['coastal', 'chaparral'],
			};
			const fallbacks = fallbackBiomes[biome] || [];
			for (const fb of fallbacks) {
				for (const [name, species] of Object.entries(TREE_SPECIES)) {
					if (altMeters >= species.altMin && altMeters <= species.altMax && species.biome === fb) {
						candidates.push({ name, ...species });
					}
				}
				if (candidates.length > 0) break;
			}
		}
		return candidates;
	}

	/**
	 * Check if a position is over water using WaterSystem's definitive boundaries
	 */
	isWaterArea(lon, lat) {
		return WaterSystem.isOverWater(lon, lat);
	}

	/**
	 * Generate trees for a grid cell at the given position
	 */
	generateTreesForCell(cellX, cellZ, eagleLon, eagleLat, eagleAlt) {
		const key = `${cellX},${cellZ}`;
		if (this.activeCells.has(key)) return;

		// Cell center in meters relative to eagle
		const offsetX = cellX * TREE_CONFIG.cellSize;
		const offsetZ = cellZ * TREE_CONFIG.cellSize;

		// Convert to approximate lon/lat
		const metersPerDegreeLat = 111320;
		const metersPerDegreeLon = 111320 * Math.cos(THREE.MathUtils.degToRad(eagleLat));
		const cellLon = eagleLon + offsetX / metersPerDegreeLon;
		const cellLat = eagleLat + offsetZ / metersPerDegreeLat;

		// Skip water areas
		if (this.isWaterArea(cellLon, cellLat)) {
			this.activeCells.set(key, []);
			return;
		}

		// Get terrain height for this cell
		const cartographic = Cesium.Cartographic.fromDegrees(cellLon, cellLat);
		const terrainHeight = this.viewer.scene.globe.getHeight(cartographic);
		if (terrainHeight === undefined || terrainHeight === null) {
			return; // Terrain not loaded yet, try again later
		}

		const altMeters = terrainHeight; // Already in meters from Cesium
		const species = this.getSpeciesForPosition(altMeters, cellLon, cellLat);
		if (species.length === 0) {
			this.activeCells.set(key, []);
			return;
		}

		// Deterministic random for this cell
		const rand = seededRandom(cellX, cellZ);
		const trees = [];

		// Place trees based on density
		const numSubcells = 3;
		for (let sx = 0; sx < numSubcells; sx++) {
			for (let sz = 0; sz < numSubcells; sz++) {
				const subRand = seededRandom(cellX * 100 + sx, cellZ * 100 + sz);

				// Pick species based on sub-random
				const speciesIdx = Math.floor(subRand * species.length) % species.length;
				const sp = species[speciesIdx];

				// Density check
				if (seededRandom(cellX * 200 + sx, cellZ * 200 + sz) > sp.density) continue;

				// Position within subcell with jitter
				const jitterX = seededRandom(cellX * 300 + sx, cellZ * 300 + sz) * 0.8;
				const jitterZ = seededRandom(cellX * 400 + sx, cellZ * 400 + sz) * 0.8;
				const localX = offsetX + (sx + jitterX) * (TREE_CONFIG.cellSize / numSubcells);
				const localZ = offsetZ + (sz + jitterZ) * (TREE_CONFIG.cellSize / numSubcells);

				// Size variation (±30%)
				const sizeVariation = 0.7 + seededRandom(cellX * 500 + sx, cellZ * 500 + sz) * 0.6;

				trees.push({
					x: localX,
					z: localZ,
					terrainHeight: terrainHeight,
					species: sp,
					sizeScale: sizeVariation,
				});
			}
		}

		this.activeCells.set(key, trees);
	}

	/**
	 * Update tree instances based on eagle position.
	 * Trees are rendered in Cesium's ENU (East-North-Up) frame relative to eagle.
	 */
	update(dt, state) {
		if (!this.initialized) return;

		const now = Date.now();
		if (now - this.lastUpdateTime < TREE_CONFIG.updateInterval) return;
		this.lastUpdateTime = now;

		const eagleLon = state.lon;
		const eagleLat = state.lat;
		const eagleAltM = state.alt * 0.3048; // Convert feet to meters

		// Don't render trees if too high (they'd be invisible)
		if (eagleAltM > 3000) {
			this.trunkInstances.count = 0;
			this.coniferInstances.count = 0;
			this.deciduousInstances.count = 0;
			this.palmInstances.count = 0;
			this.cactusInstances.count = 0;
			return;
		}

		// Adaptive render distance based on altitude (meters)
		const renderDist = Math.min(
			TREE_CONFIG.renderDistance,
			Math.max(400, eagleAltM * 2)
		);

		// Calculate grid cell range
		const cellsPerSide = Math.ceil(renderDist / TREE_CONFIG.cellSize);

		// Current eagle cell
		const eagleCellX = Math.round(0); // Eagle is always at center
		const eagleCellZ = Math.round(0);

		// Clean up distant cells
		const maxCellDist = cellsPerSide + 2;
		for (const [key, trees] of this.activeCells) {
			const [cx, cz] = key.split(',').map(Number);
			if (Math.abs(cx) > maxCellDist || Math.abs(cz) > maxCellDist) {
				this.activeCells.delete(key);
			}
		}

		// Generate new cells
		for (let cx = -cellsPerSide; cx <= cellsPerSide; cx++) {
			for (let cz = -cellsPerSide; cz <= cellsPerSide; cz++) {
				const dist = Math.sqrt(cx * cx + cz * cz) * TREE_CONFIG.cellSize;
				if (dist > renderDist) continue;
				this.generateTreesForCell(cx, cz, eagleLon, eagleLat, eagleAlt);
			}
		}

		// Build instance matrices - route trees to correct crown shape
		let trunkIdx = 0;
		let coniferIdx = 0;
		let deciduousIdx = 0;
		let palmIdx = 0;
		let cactusIdx = 0;
		const matrix = new THREE.Matrix4();
		const position = new THREE.Vector3();
		const quaternion = new THREE.Quaternion();
		const scale = new THREE.Vector3();
		const color = new THREE.Color();

		// Determine which crown type each biome uses
		const biomeShape = {
			mountain: 'conifer', chaparral: 'deciduous',
			desert: 'cactus', coastal: 'palm', urban: 'deciduous',
		};

		for (const [key, trees] of this.activeCells) {
			for (const tree of trees) {
				if (trunkIdx >= TREE_CONFIG.maxTrees) break;

				const dist = Math.sqrt(tree.x * tree.x + tree.z * tree.z);
				if (dist > renderDist) continue;

				const lodScale = dist > TREE_CONFIG.lodFar ? 0.7 :
					dist > TREE_CONFIG.lodNear ? 0.85 : 1.0;

				const sp = tree.species;
				const sz = tree.sizeScale * lodScale;
				const relativeHeight = tree.terrainHeight - eagleAltM;

				// Trunk
				position.set(tree.x, relativeHeight, tree.z);
				scale.set(sp.trunkRadius * sz * 2, sp.trunkHeight * sz, sp.trunkRadius * sz * 2);
				matrix.compose(position, quaternion, scale);
				this.trunkInstances.setMatrixAt(trunkIdx, matrix);
				color.setHex(sp.trunkColor);
				color.multiplyScalar(0.8 + seededRandom(Math.floor(tree.x), Math.floor(tree.z)) * 0.4);
				this.trunkInstances.setColorAt(trunkIdx, color);
				trunkIdx++;

				// Crown - pick the right instanced mesh based on biome
				position.set(tree.x, relativeHeight + sp.trunkHeight * sz * 0.7, tree.z);
				scale.set(sp.crownRadius * sz * 2, sp.crownHeight * sz, sp.crownRadius * sz * 2);
				matrix.compose(position, quaternion, scale);
				color.setHex(sp.crownColor);
				color.multiplyScalar(0.7 + seededRandom(Math.floor(tree.x) + 1000, Math.floor(tree.z) + 1000) * 0.6);

				const shape = biomeShape[sp.biome] || 'conifer';
				if (shape === 'conifer' && coniferIdx < TREE_CONFIG.maxTrees) {
					this.coniferInstances.setMatrixAt(coniferIdx, matrix);
					this.coniferInstances.setColorAt(coniferIdx, color);
					coniferIdx++;
				} else if (shape === 'deciduous' && deciduousIdx < 1000) {
					this.deciduousInstances.setMatrixAt(deciduousIdx, matrix);
					this.deciduousInstances.setColorAt(deciduousIdx, color);
					deciduousIdx++;
				} else if (shape === 'palm' && palmIdx < 500) {
					this.palmInstances.setMatrixAt(palmIdx, matrix);
					this.palmInstances.setColorAt(palmIdx, color);
					palmIdx++;
				} else if (shape === 'cactus' && cactusIdx < 500) {
					this.cactusInstances.setMatrixAt(cactusIdx, matrix);
					this.cactusInstances.setColorAt(cactusIdx, color);
					cactusIdx++;
				} else if (coniferIdx < TREE_CONFIG.maxTrees) {
					// Fallback to conifer
					this.coniferInstances.setMatrixAt(coniferIdx, matrix);
					this.coniferInstances.setColorAt(coniferIdx, color);
					coniferIdx++;
				}
			}
			if (trunkIdx >= TREE_CONFIG.maxTrees) break;
		}

		this.trunkInstances.count = trunkIdx;
		this.coniferInstances.count = coniferIdx;
		this.deciduousInstances.count = deciduousIdx;
		this.palmInstances.count = palmIdx;
		this.cactusInstances.count = cactusIdx;

		const updateInst = (inst) => {
			if (inst.count > 0) {
				inst.instanceMatrix.needsUpdate = true;
				if (inst.instanceColor) inst.instanceColor.needsUpdate = true;
			}
		};
		updateInst(this.trunkInstances);
		updateInst(this.coniferInstances);
		updateInst(this.deciduousInstances);
		updateInst(this.palmInstances);
		updateInst(this.cactusInstances);

		this.lastUpdatePos = { lon: eagleLon, lat: eagleLat };
	}

	/**
	 * Force regeneration (e.g., after teleport/spawn)
	 */
	clear() {
		this.activeCells.clear();
		this.trunkInstances.count = 0;
		this.coniferInstances.count = 0;
		this.deciduousInstances.count = 0;
		this.palmInstances.count = 0;
		this.cactusInstances.count = 0;
	}

	dispose() {
		[this.trunkInstances, this.coniferInstances, this.deciduousInstances,
		 this.palmInstances, this.cactusInstances].forEach(inst => {
			if (inst) { this.scene.remove(inst); inst.dispose(); }
		});
		if (this.trunkGeometry) this.trunkGeometry.dispose();
		for (const g of Object.values(this.crownGeometries)) g.dispose();
	}
}
