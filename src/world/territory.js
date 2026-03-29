import * as Cesium from 'cesium';

/**
 * Territory System - Defines the 500-mile radius hunting territory
 * centered on Big Bear Valley, California.
 *
 * Big Bear Valley center: 34.2439°N, 116.9114°W
 * 500 miles = ~804.67 km
 *
 * This covers a vast area including:
 * - San Bernardino Mountains
 * - Mojave Desert to the north
 * - Los Angeles basin to the west
 * - Joshua Tree to the east
 * - Parts of Nevada and Arizona
 * - Pacific coast and Channel Islands
 * - Sierra Nevada foothills
 */

// Big Bear Valley center coordinates
export const TERRITORY_CENTER = {
	lon: -116.9114,
	lat: 34.2439,
};

// 500 miles in meters
export const TERRITORY_RADIUS_MILES = 500;
export const TERRITORY_RADIUS_METERS = TERRITORY_RADIUS_MILES * 1609.34; // ~804,670 meters
export const TERRITORY_RADIUS_KM = TERRITORY_RADIUS_METERS / 1000;

// Approximate degrees for the radius (at this latitude)
// 1 degree latitude ≈ 111.32 km
// 1 degree longitude ≈ 111.32 * cos(34.24°) ≈ 92.1 km
export const TERRITORY_RADIUS_DEG_LAT = TERRITORY_RADIUS_KM / 111.32;
export const TERRITORY_RADIUS_DEG_LON = TERRITORY_RADIUS_KM / (111.32 * Math.cos(TERRITORY_CENTER.lat * Math.PI / 180));

/**
 * Calculate distance from a point to Big Bear Valley center in meters.
 */
export function distanceFromCenter(lon, lat) {
	const dLat = (lat - TERRITORY_CENTER.lat) * Math.PI / 180;
	const dLon = (lon - TERRITORY_CENTER.lon) * Math.PI / 180;
	const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.cos(TERRITORY_CENTER.lat * Math.PI / 180) * Math.cos(lat * Math.PI / 180) *
		Math.sin(dLon / 2) * Math.sin(dLon / 2);
	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	return 6371000 * c; // Earth radius in meters
}

/**
 * Check if a position is within the territory.
 */
export function isInTerritory(lon, lat) {
	return distanceFromCenter(lon, lat) <= TERRITORY_RADIUS_METERS;
}

/**
 * Get distance to territory boundary (positive = inside, negative = outside)
 */
export function distanceToBoundary(lon, lat) {
	return TERRITORY_RADIUS_METERS - distanceFromCenter(lon, lat);
}

/**
 * Get heading back to territory center from a point
 */
export function headingToCenter(lon, lat) {
	const dLon = (TERRITORY_CENTER.lon - lon) * Math.PI / 180;
	const lat1 = lat * Math.PI / 180;
	const lat2 = TERRITORY_CENTER.lat * Math.PI / 180;

	const y = Math.sin(dLon) * Math.cos(lat2);
	const x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
	let heading = Math.atan2(y, x) * 180 / Math.PI;
	return (heading + 360) % 360;
}

/**
 * Get a description of the region within the territory based on distance/direction
 */
export function getTerritoryZone(lon, lat) {
	const dist = distanceFromCenter(lon, lat);
	const distMiles = dist / 1609.34;

	if (distMiles < 5) return 'Big Bear Valley - Home Territory';
	if (distMiles < 20) return 'San Bernardino Mountains';
	if (distMiles < 50) return 'Mountain Ranges';

	// Direction-based zones
	const heading = headingToCenter(lon, lat);
	const reverseHeading = (heading + 180) % 360;

	if (reverseHeading >= 315 || reverseHeading < 45) {
		if (distMiles < 150) return 'High Desert';
		return 'Mojave Desert';
	} else if (reverseHeading >= 45 && reverseHeading < 135) {
		if (distMiles < 100) return 'Inland Empire';
		return 'Colorado Desert';
	} else if (reverseHeading >= 135 && reverseHeading < 225) {
		if (distMiles < 80) return 'Los Angeles Basin';
		if (distMiles < 200) return 'Pacific Coast';
		return 'Pacific Ocean';
	} else {
		if (distMiles < 100) return 'Cajon Pass Region';
		return 'Central Valley';
	}
}

/**
 * Create a Cesium entity showing the territory boundary on the map
 */
export function createTerritoryBoundary(viewer) {
	if (!viewer) return null;

	// Create circle boundary
	const positions = [];
	const segments = 128;
	for (let i = 0; i <= segments; i++) {
		const angle = (i / segments) * Math.PI * 2;
		const lat = TERRITORY_CENTER.lat + TERRITORY_RADIUS_DEG_LAT * Math.sin(angle);
		const lon = TERRITORY_CENTER.lon + TERRITORY_RADIUS_DEG_LON * Math.cos(angle);
		positions.push(lon, lat);
	}

	const boundaryEntity = viewer.entities.add({
		polyline: {
			positions: Cesium.Cartesian3.fromDegreesArray(positions),
			width: 2,
			material: new Cesium.PolylineDashMaterialProperty({
				color: Cesium.Color.fromCssColorString('rgba(255, 200, 50, 0.5)'),
				dashLength: 16,
			}),
			clampToGround: true,
		}
	});

	// Center marker
	const centerEntity = viewer.entities.add({
		position: Cesium.Cartesian3.fromDegrees(TERRITORY_CENTER.lon, TERRITORY_CENTER.lat),
		point: {
			pixelSize: 8,
			color: Cesium.Color.fromCssColorString('rgba(255, 200, 50, 0.7)'),
			outlineColor: Cesium.Color.WHITE,
			outlineWidth: 1,
			disableDepthTestDistance: Number.POSITIVE_INFINITY,
		},
		label: {
			text: 'THE NEST',
			font: '12pt sans-serif',
			style: Cesium.LabelStyle.FILL_AND_OUTLINE,
			outlineWidth: 2,
			verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
			pixelOffset: new Cesium.Cartesian2(0, -12),
			disableDepthTestDistance: Number.POSITIVE_INFINITY,
			fillColor: Cesium.Color.fromCssColorString('rgba(255, 200, 50, 0.9)'),
		}
	});

	// Key landmark labels visible on the map
	const landmarks = [
		{ name: 'LAS VEGAS', lon: -115.1728, lat: 36.1147, icon: '🎰' },
		{ name: 'HOLLYWOOD', lon: -118.3215, lat: 34.1341, icon: '🎬' },
		{ name: '29 PALMS', lon: -116.0542, lat: 34.1356, icon: '🌴' },
		{ name: 'FT IRWIN NTC', lon: -116.6833, lat: 35.2628, icon: '⭐' },
		{ name: 'REAGAN LIBRARY', lon: -118.8200, lat: 34.2597, icon: '🏛' },
		{ name: 'ROSE BOWL', lon: -118.1676, lat: 34.1613, icon: '🏟' },
		{ name: 'BIG BEAR SKI', lon: -116.8595, lat: 34.2272, icon: '⛷' },
		{ name: 'LOS ANGELES', lon: -118.2437, lat: 34.0522, icon: '🏙' },
		{ name: 'SAN DIEGO', lon: -117.1611, lat: 32.7157, icon: '🏙' },
		{ name: 'PHOENIX', lon: -112.0740, lat: 33.4484, icon: '🏜' },
		{ name: 'PALM SPRINGS', lon: -116.5453, lat: 33.8303, icon: '🌴' },
		{ name: 'BAKERSFIELD', lon: -119.0187, lat: 35.3733, icon: '🏙' },
	];

	const landmarkEntities = [];
	for (const lm of landmarks) {
		const entity = viewer.entities.add({
			position: Cesium.Cartesian3.fromDegrees(lm.lon, lm.lat),
			point: {
				pixelSize: 6,
				color: Cesium.Color.fromCssColorString('rgba(255, 120, 40, 0.8)'),
				outlineColor: Cesium.Color.WHITE,
				outlineWidth: 1,
				disableDepthTestDistance: Number.POSITIVE_INFINITY,
			},
			label: {
				text: lm.icon + ' ' + lm.name,
				font: '11pt sans-serif',
				style: Cesium.LabelStyle.FILL_AND_OUTLINE,
				outlineWidth: 2,
				outlineColor: Cesium.Color.BLACK,
				verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
				pixelOffset: new Cesium.Cartesian2(0, -10),
				disableDepthTestDistance: Number.POSITIVE_INFINITY,
				fillColor: Cesium.Color.fromCssColorString('rgba(255, 200, 100, 0.95)'),
				scaleByDistance: new Cesium.NearFarScalar(1000, 1.0, 500000, 0.4),
			}
		});
		landmarkEntities.push(entity);
	}

	return { boundaryEntity, centerEntity, landmarkEntities };
}
