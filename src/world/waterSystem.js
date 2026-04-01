import * as THREE from 'three';
import * as Cesium from 'cesium';

/**
 * Water Rendering System - Realistic water for Big Bear Lake and surrounding water bodies.
 *
 * Features:
 * - Animated wave displacement
 * - Fresnel-based reflections (sky color blended with water color by view angle)
 * - Depth-based color (shallow = lighter blue/green, deep = dark blue)
 * - Specular highlights from sun
 * - Transparency/opacity based on depth
 * - Animated surface normals for ripple effect
 */

// Real water body definitions around Big Bear Valley
const WATER_BODIES = [
	{
		name: 'Big Bear Lake',
		// Approximate polygon for Big Bear Lake
		center: { lon: -116.9050, lat: 34.2440 },
		// Lake dimensions in meters
		lengthM: 11000,  // ~7 miles long
		widthM: 1600,    // ~1 mile wide
		maxDepth: 22,     // meters (~72 ft)
		elevation: 2060,  // meters (~6,752 ft)
		rotation: -15,    // degrees from east-west
		shape: 'ellipse',
	},
	{
		name: 'Baldwin Lake',
		center: { lon: -116.8200, lat: 34.2800 },
		lengthM: 2500,
		widthM: 1800,
		maxDepth: 3,      // Seasonal/dry lake
		elevation: 2050,
		rotation: 0,
		shape: 'ellipse',
	},
	{
		name: 'Lake Arrowhead',
		center: { lon: -117.1890, lat: 34.2580 },
		lengthM: 1800,
		widthM: 900,
		maxDepth: 56,     // meters
		elevation: 1572,
		rotation: -30,
		shape: 'ellipse',
	},
	{
		name: 'Silverwood Lake',
		center: { lon: -117.3330, lat: 34.2940 },
		lengthM: 3200,
		widthM: 800,
		maxDepth: 55,
		elevation: 1050,
		rotation: -45,
		shape: 'ellipse',
	},
	{
		name: 'Gregory Lake',
		center: { lon: -117.2580, lat: 34.2290 },
		lengthM: 400,
		widthM: 200,
		maxDepth: 8,
		elevation: 1400,
		rotation: 10,
		shape: 'ellipse',
	}
];

// Custom water shader
const waterVertexShader = `
	uniform float time;
	uniform float waveAmplitude;
	uniform float waveFrequency;
	varying vec2 vUv;
	varying vec3 vWorldPosition;
	varying vec3 vNormal;
	varying float vDepth;

	void main() {
		vUv = uv;

		// Wave displacement
		vec3 pos = position;
		float wave1 = sin(pos.x * waveFrequency + time * 1.2) * waveAmplitude;
		float wave2 = sin(pos.z * waveFrequency * 0.7 + time * 0.8) * waveAmplitude * 0.6;
		float wave3 = cos((pos.x + pos.z) * waveFrequency * 0.5 + time * 1.5) * waveAmplitude * 0.3;
		pos.y += wave1 + wave2 + wave3;

		// Depth based on distance from center (elliptical)
		float distFromCenter = length(uv - vec2(0.5, 0.5)) * 2.0;
		vDepth = 1.0 - distFromCenter * distFromCenter;

		// Calculate displaced normal for ripples
		float dx = cos(pos.x * waveFrequency + time * 1.2) * waveAmplitude * waveFrequency;
		float dz = cos(pos.z * waveFrequency * 0.7 + time * 0.8) * waveAmplitude * 0.6 * waveFrequency * 0.7;
		vNormal = normalize(vec3(-dx, 1.0, -dz));

		vWorldPosition = (modelMatrix * vec4(pos, 1.0)).xyz;
		gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
	}
`;

const waterFragmentShader = `
	uniform float time;
	uniform vec3 shallowColor;
	uniform vec3 deepColor;
	uniform vec3 skyColor;
	uniform vec3 sunDirection;
	uniform float maxDepthMeters;
	uniform float opacity;
	varying vec2 vUv;
	varying vec3 vWorldPosition;
	varying vec3 vNormal;
	varying float vDepth;

	void main() {
		// View direction
		vec3 viewDir = normalize(cameraPosition - vWorldPosition);

		// Fresnel effect - more reflection at glancing angles
		float fresnel = pow(1.0 - max(dot(viewDir, vNormal), 0.0), 3.0);
		fresnel = mix(0.05, 0.8, fresnel);

		// Depth-based water color
		float depthFactor = clamp(vDepth * maxDepthMeters / 20.0, 0.0, 1.0);
		vec3 waterColor = mix(shallowColor, deepColor, depthFactor);

		// Animated caustic-like pattern
		float caustic = sin(vUv.x * 40.0 + time * 0.5) * sin(vUv.y * 40.0 + time * 0.3) * 0.5 + 0.5;
		caustic = pow(caustic, 3.0) * 0.15;
		waterColor += vec3(caustic * 0.5, caustic * 0.8, caustic);

		// Sun specular reflection
		vec3 reflectDir = reflect(-sunDirection, vNormal);
		float specular = pow(max(dot(viewDir, reflectDir), 0.0), 128.0);
		vec3 specularColor = vec3(1.0, 0.95, 0.8) * specular * 2.0;

		// Combine: water color + fresnel sky reflection + specular
		vec3 finalColor = mix(waterColor, skyColor, fresnel) + specularColor;

		// Edge fade for shoreline
		float edgeDist = length(vUv - vec2(0.5, 0.5)) * 2.0;
		float edgeFade = 1.0 - smoothstep(0.85, 1.0, edgeDist);

		// Opacity varies with depth (shallow = more transparent)
		float alpha = mix(0.6, 0.92, depthFactor) * edgeFade * opacity;

		gl_FragColor = vec4(finalColor, alpha);
	}
`;

export class WaterSystem {
	constructor(cesiumViewer, threeScene) {
		this.viewer = cesiumViewer;
		this.scene = threeScene;
		this.waterMeshes = [];
		this.uniforms = null;
		this.initialized = false;

		this.init();
	}

	init() {
		// Shared uniforms for all water bodies
		this.uniforms = {
			time: { value: 0 },
			waveAmplitude: { value: 0.3 },
			waveFrequency: { value: 0.15 },
			shallowColor: { value: new THREE.Color(0x4A90A4) },  // Light teal
			deepColor: { value: new THREE.Color(0x0A2E5C) },     // Deep navy
			skyColor: { value: new THREE.Color(0x87CEEB) },       // Sky blue
			sunDirection: { value: new THREE.Vector3(0.5, 0.8, 0.3).normalize() },
			maxDepthMeters: { value: 22 },
			opacity: { value: 1.0 },
		};

		// Create water mesh for each water body
		for (const body of WATER_BODIES) {
			const mesh = this.createWaterMesh(body);
			if (mesh) {
				this.waterMeshes.push({ mesh, body });
				this.scene.add(mesh);
			}
		}

		this.initialized = true;
	}

	createWaterMesh(body) {
		// Create elliptical geometry
		const segmentsX = 64;
		const segmentsZ = 32;

		const geometry = new THREE.PlaneGeometry(
			body.lengthM,
			body.widthM,
			segmentsX,
			segmentsZ
		);

		// Shape into ellipse by removing vertices outside ellipse boundary
		const positions = geometry.attributes.position;
		for (let i = 0; i < positions.count; i++) {
			const x = positions.getX(i);
			const z = positions.getY(i); // PlaneGeometry uses Y for the second dimension
			const nx = x / (body.lengthM / 2);
			const nz = z / (body.widthM / 2);
			const dist = nx * nx + nz * nz;

			// Squash vertices outside ellipse to the edge
			if (dist > 1.0) {
				const scale = 1.0 / Math.sqrt(dist);
				positions.setX(i, x * scale);
				positions.setY(i, z * scale);
			}
		}
		positions.needsUpdate = true;

		// Rotate to horizontal (XZ plane)
		geometry.rotateX(-Math.PI / 2);

		// Apply lake rotation
		if (body.rotation) {
			geometry.rotateY(THREE.MathUtils.degToRad(body.rotation));
		}

		// Per-body uniforms clone
		const bodyUniforms = {
			...this.uniforms,
			maxDepthMeters: { value: body.maxDepth },
		};

		const material = new THREE.ShaderMaterial({
			uniforms: bodyUniforms,
			vertexShader: waterVertexShader,
			fragmentShader: waterFragmentShader,
			transparent: true,
			side: THREE.DoubleSide,
			depthWrite: false,
		});

		const mesh = new THREE.Mesh(geometry, material);
		mesh.renderOrder = -1; // Render before other transparent objects
		mesh.layers.set(0);
		mesh.frustumCulled = false;

		return mesh;
	}

	/**
	 * Update water positions and animations relative to eagle
	 */
	update(dt, state) {
		if (!this.initialized) return;

		// Update shared time uniform
		const time = performance.now() * 0.001;

		const eagleLon = state.lon;
		const eagleLat = state.lat;
		const eagleAlt = state.alt;

		// Meters per degree at current latitude
		const metersPerDegreeLat = 111320;
		const metersPerDegreeLon = 111320 * Math.cos(THREE.MathUtils.degToRad(eagleLat));

		for (const { mesh, body } of this.waterMeshes) {
			// Update time uniform per material
			mesh.material.uniforms.time.value = time;

			// Calculate lake center position relative to eagle
			const dx = (body.center.lon - eagleLon) * metersPerDegreeLon;
			const dz = (body.center.lat - eagleLat) * metersPerDegreeLat;
			const dy = body.elevation - eagleAlt * 0.3048; // Eagle alt is in feet

			// Position the water mesh relative to eagle
			mesh.position.set(dx, dy, -dz);

			// Distance-based visibility
			const dist = Math.sqrt(dx * dx + dz * dz);
			mesh.visible = dist < 30000; // Hide beyond 30km

			// Wave amplitude varies with altitude (calmer from high up)
			const waveScale = Math.max(0.05, 1.0 - (eagleAlt * 0.3048 - body.elevation) / 5000);
			mesh.material.uniforms.waveAmplitude.value = 0.3 * waveScale;

			// Update sun direction based on time of day (simplified)
			const sunAngle = time * 0.02; // Slow rotation
			mesh.material.uniforms.sunDirection.value.set(
				Math.cos(sunAngle) * 0.5,
				0.8,
				Math.sin(sunAngle) * 0.3
			).normalize();
		}
	}

	/**
	 * Check if a lon/lat is over water (used by tree system)
	 */
	static isOverWater(lon, lat) {
		for (const body of WATER_BODIES) {
			const dx = (lon - body.center.lon) * 111320 * Math.cos(lat * Math.PI / 180);
			const dz = (lat - body.center.lat) * 111320;

			// Rotate into lake's frame
			const angle = -(body.rotation || 0) * Math.PI / 180;
			const rx = dx * Math.cos(angle) - dz * Math.sin(angle);
			const rz = dx * Math.sin(angle) + dz * Math.cos(angle);

			// Check ellipse
			const nx = rx / (body.lengthM / 2);
			const nz = rz / (body.widthM / 2);
			if (nx * nx + nz * nz <= 1.0) {
				return true;
			}
		}
		return false;
	}

	dispose() {
		for (const { mesh } of this.waterMeshes) {
			this.scene.remove(mesh);
			mesh.geometry.dispose();
			mesh.material.dispose();
		}
		this.waterMeshes = [];
	}
}
