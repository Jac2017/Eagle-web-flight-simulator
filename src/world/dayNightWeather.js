import * as Cesium from 'cesium';

/**
 * Day/Night Cycle and Weather System for Big Bear Valley.
 *
 * Day/Night:
 * - Uses real clock time mapped to game world for sun position
 * - Dawn, morning, midday, afternoon, dusk, night phases
 * - Affects Cesium lighting, fog, atmosphere, sky color
 *
 * Weather:
 * - Realistic Big Bear Valley conditions by season/time:
 *   - Winter: Snow, cold fog, overcast
 *   - Spring: Clear, thermals building in afternoon
 *   - Summer: Clear mornings, afternoon thunderstorms, hot haze in desert
 *   - Fall: Clear, golden light, occasional Santa Ana winds
 * - Affects fog density, visibility, wind, thermal strength
 */

// Time-of-day phases
const DAYPARTS = {
	NIGHT:     { start: 0,    end: 5,    name: 'Night',          fogMult: 1.5,  lightIntensity: 0.1 },
	DAWN:      { start: 5,    end: 7,    name: 'Dawn',           fogMult: 1.2,  lightIntensity: 0.4 },
	MORNING:   { start: 7,    end: 10,   name: 'Morning',        fogMult: 0.8,  lightIntensity: 0.8 },
	MIDDAY:    { start: 10,   end: 14,   name: 'Midday',         fogMult: 0.5,  lightIntensity: 1.0 },
	AFTERNOON: { start: 14,   end: 17,   name: 'Afternoon',      fogMult: 0.6,  lightIntensity: 0.9 },
	DUSK:      { start: 17,   end: 19,   name: 'Dusk',           fogMult: 1.0,  lightIntensity: 0.4 },
	EVENING:   { start: 19,   end: 21,   name: 'Evening',        fogMult: 1.3,  lightIntensity: 0.2 },
	LATE_NIGHT:{ start: 21,   end: 24,   name: 'Late Night',     fogMult: 1.5,  lightIntensity: 0.1 },
};

// Weather conditions
const WEATHER_TYPES = {
	CLEAR:       { name: 'Clear',        fogDensity: 0.00005, visibility: 1.0, windSpeed: 5,  thermalMult: 1.0 },
	PARTLY_CLOUDY:{ name: 'Partly Cloudy', fogDensity: 0.0001,  visibility: 0.9, windSpeed: 10, thermalMult: 0.8 },
	OVERCAST:    { name: 'Overcast',     fogDensity: 0.0003,  visibility: 0.6, windSpeed: 15, thermalMult: 0.3 },
	FOG:         { name: 'Mountain Fog', fogDensity: 0.001,   visibility: 0.3, windSpeed: 3,  thermalMult: 0.1 },
	HAZE:        { name: 'Desert Haze',  fogDensity: 0.0004,  visibility: 0.5, windSpeed: 8,  thermalMult: 0.6 },
	STORM:       { name: 'Thunderstorm', fogDensity: 0.0008,  visibility: 0.3, windSpeed: 30, thermalMult: 2.0 },
	SNOW:        { name: 'Snow',         fogDensity: 0.0006,  visibility: 0.4, windSpeed: 20, thermalMult: 0.0 },
	SANTA_ANA:   { name: 'Santa Ana Winds', fogDensity: 0.0002, visibility: 0.7, windSpeed: 50, thermalMult: 0.5 },
};

// Seasonal weather probability (month 0-11)
function getSeasonalWeather(month, hour) {
	// Winter (Dec-Feb)
	if (month >= 11 || month <= 1) {
		if (hour >= 6 && hour <= 10) return Math.random() < 0.3 ? 'FOG' : 'PARTLY_CLOUDY';
		if (Math.random() < 0.15) return 'SNOW';
		if (Math.random() < 0.25) return 'OVERCAST';
		return Math.random() < 0.5 ? 'CLEAR' : 'PARTLY_CLOUDY';
	}
	// Spring (Mar-May)
	if (month >= 2 && month <= 4) {
		if (hour >= 14 && Math.random() < 0.2) return 'STORM';
		return Math.random() < 0.7 ? 'CLEAR' : 'PARTLY_CLOUDY';
	}
	// Summer (Jun-Aug)
	if (month >= 5 && month <= 7) {
		if (hour >= 14 && hour <= 18 && Math.random() < 0.3) return 'STORM';
		if (hour >= 11 && hour <= 15) return Math.random() < 0.3 ? 'HAZE' : 'CLEAR';
		return 'CLEAR';
	}
	// Fall (Sep-Nov)
	if (Math.random() < 0.15) return 'SANTA_ANA';
	return Math.random() < 0.8 ? 'CLEAR' : 'PARTLY_CLOUDY';
}

export class DayNightWeatherSystem {
	constructor(cesiumViewer) {
		this.viewer = cesiumViewer;
		this.currentDaypart = 'MIDDAY';
		this.currentWeather = 'CLEAR';
		this.gameHour = 12;          // Current game hour (0-24)
		this.timeScale = 1;          // 1 = real time, 60 = 1 min = 1 hour
		this.useRealTime = true;     // Use actual clock
		this.weatherChangeTimer = 0;
		this.weatherChangeCooldown = 300; // Seconds between weather changes
		this.windDirection = 0;      // Degrees
		this.windSpeed = 5;          // m/s
		this.targetFogDensity = 0.0001;
		this.currentFogDensity = 0.0001;

		this.initialized = false;
		this.init();
	}

	init() {
		// Enable Cesium's time-based lighting
		if (this.viewer) {
			this.viewer.scene.globe.enableLighting = true;
			if (this.viewer.scene.skyAtmosphere) {
				this.viewer.scene.skyAtmosphere.show = true;
			}
		}

		// Set initial weather based on current date/time
		const now = new Date();
		this.updateTimeOfDay(now);
		this.currentWeather = getSeasonalWeather(now.getMonth(), now.getHours());
		this.applyWeather();

		this.initialized = true;
	}

	updateTimeOfDay(date) {
		// Pacific Time (Big Bear is UTC-8 / UTC-7 DST)
		const utcHour = date.getUTCHours();
		const pstOffset = -8; // Simplified, not accounting for DST
		this.gameHour = (utcHour + pstOffset + 24) % 24 + date.getUTCMinutes() / 60;

		// Determine daypart
		for (const [key, dp] of Object.entries(DAYPARTS)) {
			if (this.gameHour >= dp.start && this.gameHour < dp.end) {
				this.currentDaypart = key;
				break;
			}
		}

		// Set Cesium clock to match
		if (this.viewer && this.viewer.clock) {
			const julianDate = Cesium.JulianDate.fromDate(date);
			this.viewer.clock.currentTime = julianDate;
		}
	}

	applyWeather() {
		const weather = WEATHER_TYPES[this.currentWeather] || WEATHER_TYPES.CLEAR;
		const daypart = DAYPARTS[this.currentDaypart] || DAYPARTS.MIDDAY;

		if (!this.viewer) return;

		// Fog density: combine weather + time-of-day
		this.targetFogDensity = weather.fogDensity * daypart.fogMult;

		// Wind
		this.windSpeed = weather.windSpeed + (Math.random() - 0.5) * 5;
		this.windDirection = (this.windDirection + (Math.random() - 0.5) * 10) % 360;
	}

	update(dt) {
		if (!this.initialized || !this.viewer) return;

		// Update time
		if (this.useRealTime) {
			this.updateTimeOfDay(new Date());
		} else {
			this.gameHour = (this.gameHour + dt * this.timeScale / 3600) % 24;
		}

		// Smooth fog transition
		this.currentFogDensity += (this.targetFogDensity - this.currentFogDensity) * dt * 0.5;
		if (this.viewer.scene.fog) {
			this.viewer.scene.fog.density = this.currentFogDensity;
		}

		// Periodic weather changes
		this.weatherChangeTimer += dt;
		if (this.weatherChangeTimer > this.weatherChangeCooldown) {
			this.weatherChangeTimer = 0;
			const now = new Date();
			const newWeather = getSeasonalWeather(now.getMonth(), Math.floor(this.gameHour));
			if (newWeather !== this.currentWeather) {
				this.currentWeather = newWeather;
				this.applyWeather();
			}
		}
	}

	/**
	 * Get current conditions for display
	 */
	getConditions() {
		const daypart = DAYPARTS[this.currentDaypart] || DAYPARTS.MIDDAY;
		const weather = WEATHER_TYPES[this.currentWeather] || WEATHER_TYPES.CLEAR;
		const hour = Math.floor(this.gameHour);
		const min = Math.floor((this.gameHour - hour) * 60);

		return {
			daypartName: daypart.name,
			weatherName: weather.name,
			localTime: `${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')} PST`,
			windSpeed: Math.round(this.windSpeed),
			windDirection: Math.round(this.windDirection),
			visibility: weather.visibility,
			thermalMultiplier: weather.thermalMult,
			lightIntensity: daypart.lightIntensity,
		};
	}

	/**
	 * Get thermal multiplier for physics system
	 */
	getThermalMultiplier() {
		const weather = WEATHER_TYPES[this.currentWeather] || WEATHER_TYPES.CLEAR;
		return weather.thermalMult;
	}

	/**
	 * Get wind vector for physics/particle effects
	 */
	getWind() {
		const rad = this.windDirection * Math.PI / 180;
		return {
			x: Math.sin(rad) * this.windSpeed,
			z: Math.cos(rad) * this.windSpeed,
			speed: this.windSpeed,
			direction: this.windDirection,
		};
	}
}
