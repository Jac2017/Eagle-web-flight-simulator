import * as THREE from 'three';
import * as Cesium from 'cesium';

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

// Tree species with their characteristics
const TREE_SPECIES = {
	jeffreyPine: {
		trunkHeight: 20,   // meters (~65 ft)
		trunkRadius: 0.4,
		crownHeight: 12,
		crownRadius: 4,
		trunkColor: 0x5C3A1E,
		crownColor: 0x2D5A27,
		altMin: 1500,  // meters (~5000 ft)
		altMax: 2400,  // meters (~7800 ft)
		density: 0.6,
	},
	whiteFir: {
		trunkHeight: 25,
		trunkRadius: 0.5,
		crownHeight: 18,
		crownRadius: 3.5,
		trunkColor: 0x6B4226,
		crownColor: 0x1B4D1B,
		altMin: 1700,
		altMax: 2700,
		density: 0.5,
	},
	lodgepolePine: {
		trunkHeight: 18,
		trunkRadius: 0.3,
		crownHeight: 10,
		crownRadius: 2.5,
		trunkColor: 0x7A5230,
		crownColor: 0x3A6B35,
		altMin: 2100,
		altMax: 3000,
		density: 0.7,
	},
	scrubOak: {
		trunkHeight: 6,
		trunkRadius: 0.2,
		crownHeight: 5,
		crownRadius: 3,
		trunkColor: 0x5A3E28,
		crownColor: 0x4A7A3A,
		altMin: 1000,
		altMax: 1800,
		density: 0.3,
	},
	alpinePine: {
		trunkHeight: 8,
		trunkRadius: 0.25,
		crownHeight: 6,
		crownRadius: 2,
		trunkColor: 0x6B4A30,
		crownColor: 0x2A5530,
		altMin: 2700,
		altMax: 3500,
		density: 0.15,
	}
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
		// Create trunk geometry (cylinder)
		this.trunkGeometry = new THREE.CylinderGeometry(0.3, 0.5, 1.0, 5, 1);
		this.trunkGeometry.translate(0, 0.5, 0); // Origin at base

		// Create conifer crown geometry (cone)
		this.crownGeometries.conifer = new THREE.ConeGeometry(1.0, 1.0, 6, 1);
		this.crownGeometries.conifer.translate(0, 0.5, 0);

		// Create deciduous crown geometry (sphere)
		this.crownGeometries.deciduous = new THREE.SphereGeometry(1.0, 5, 4);

		// Create instanced meshes
		const trunkMaterial = new THREE.MeshLambertMaterial({
			color: 0x5C3A1E,
			flatShading: true
		});

		const crownMaterial = new THREE.MeshLambertMaterial({
			color: 0x2D5A27,
			flatShading: true,
		});

		this.trunkInstances = new THREE.InstancedMesh(
			this.trunkGeometry,
			trunkMaterial,
			TREE_CONFIG.maxTrees
		);
		this.trunkInstances.count = 0;
		this.trunkInstances.frustumCulled = false;
		this.trunkInstances.layers.set(0);

		this.crownInstances = new THREE.InstancedMesh(
			this.crownGeometries.conifer,
			crownMaterial,
			TREE_CONFIG.maxTrees
		);
		this.crownInstances.count = 0;
		this.crownInstances.frustumCulled = false;
		this.crownInstances.layers.set(0);

		this.scene.add(this.trunkInstances);
		this.scene.add(this.crownInstances);

		this.initialized = true;
	}

	/**
	 * Get the appropriate tree species for a given altitude
	 */
	getSpeciesForAltitude(altMeters) {
		const candidates = [];
		for (const [name, species] of Object.entries(TREE_SPECIES)) {
			if (altMeters >= species.altMin && altMeters <= species.altMax) {
				candidates.push({ name, ...species });
			}
		}
		return candidates;
	}

	/**
	 * Check if a position is likely water (Big Bear Lake, etc.)
	 */
	isWaterArea(lon, lat) {
		// Big Bear Lake approximate bounds
		if (lat > 34.23 && lat < 34.27 && lon > -116.95 && lon < -116.85) {
			return true;
		}
		// Baldwin Lake
		if (lat > 34.27 && lat < 34.30 && lon > -116.85 && lon < -116.80) {
			return true;
		}
		return false;
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
		const species = this.getSpeciesForAltitude(altMeters);
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
		const eagleAlt = state.alt;

		// Don't render trees if too high (they'd be invisible)
		if (eagleAlt > 5000) {
			this.trunkInstances.count = 0;
			this.crownInstances.count = 0;
			return;
		}

		// Adaptive render distance based on altitude
		const renderDist = Math.min(
			TREE_CONFIG.renderDistance,
			Math.max(400, eagleAlt * 1.5)
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

		// Build instance matrices
		let treeIdx = 0;
		const matrix = new THREE.Matrix4();
		const position = new THREE.Vector3();
		const quaternion = new THREE.Quaternion();
		const scale = new THREE.Vector3();
		const color = new THREE.Color();

		for (const [key, trees] of this.activeCells) {
			for (const tree of trees) {
				if (treeIdx >= TREE_CONFIG.maxTrees) break;

				const dist = Math.sqrt(tree.x * tree.x + tree.z * tree.z);
				if (dist > renderDist) continue;

				// LOD: skip small details for distant trees
				const lodScale = dist > TREE_CONFIG.lodFar ? 0.7 :
					dist > TREE_CONFIG.lodNear ? 0.85 : 1.0;

				const sp = tree.species;
				const sz = tree.sizeScale * lodScale;

				// Height above eagle's terrain (relative positioning)
				const relativeHeight = tree.terrainHeight - eagleAlt;

				// Trunk instance
				position.set(tree.x, relativeHeight, tree.z);
				scale.set(
					sp.trunkRadius * sz * 2,
					sp.trunkHeight * sz,
					sp.trunkRadius * sz * 2
				);
				matrix.compose(position, quaternion, scale);
				this.trunkInstances.setMatrixAt(treeIdx, matrix);

				// Trunk color with variation
				color.setHex(sp.trunkColor);
				const colorVar = 0.8 + seededRandom(Math.floor(tree.x), Math.floor(tree.z)) * 0.4;
				color.multiplyScalar(colorVar);
				this.trunkInstances.setColorAt(treeIdx, color);

				// Crown instance (positioned on top of trunk)
				position.set(tree.x, relativeHeight + sp.trunkHeight * sz * 0.7, tree.z);
				scale.set(
					sp.crownRadius * sz * 2,
					sp.crownHeight * sz,
					sp.crownRadius * sz * 2
				);
				matrix.compose(position, quaternion, scale);
				this.crownInstances.setMatrixAt(treeIdx, matrix);

				// Crown color with seasonal variation
				color.setHex(sp.crownColor);
				const greenVar = 0.7 + seededRandom(Math.floor(tree.x) + 1000, Math.floor(tree.z) + 1000) * 0.6;
				color.multiplyScalar(greenVar);
				this.crownInstances.setColorAt(treeIdx, color);

				treeIdx++;
			}
			if (treeIdx >= TREE_CONFIG.maxTrees) break;
		}

		this.trunkInstances.count = treeIdx;
		this.crownInstances.count = treeIdx;

		if (treeIdx > 0) {
			this.trunkInstances.instanceMatrix.needsUpdate = true;
			this.crownInstances.instanceMatrix.needsUpdate = true;
			if (this.trunkInstances.instanceColor) this.trunkInstances.instanceColor.needsUpdate = true;
			if (this.crownInstances.instanceColor) this.crownInstances.instanceColor.needsUpdate = true;
		}

		this.lastUpdatePos = { lon: eagleLon, lat: eagleLat };
	}

	/**
	 * Force regeneration (e.g., after teleport/spawn)
	 */
	clear() {
		this.activeCells.clear();
		this.trunkInstances.count = 0;
		this.crownInstances.count = 0;
	}

	dispose() {
		if (this.trunkInstances) {
			this.scene.remove(this.trunkInstances);
			this.trunkInstances.dispose();
		}
		if (this.crownInstances) {
			this.scene.remove(this.crownInstances);
			this.crownInstances.dispose();
		}
		if (this.trunkGeometry) this.trunkGeometry.dispose();
		for (const g of Object.values(this.crownGeometries)) g.dispose();
	}
}
