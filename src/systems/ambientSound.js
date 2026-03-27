import { soundManager } from '../utils/soundManager';

/**
 * Ambient Sound System - Location and speed-aware environmental audio.
 *
 * Manages ambient sounds that change based on:
 * - Speed (wind intensity scales with airspeed)
 * - Altitude (high altitude = thinner wind, low = ground sounds)
 * - Location (wilderness, city, water, desert)
 * - Flight state (flapping wingbeat sounds, dive rush)
 */

export class AmbientSoundSystem {
	constructor() {
		this.currentBiome = 'wilderness';
		this.lastBiomeCheck = 0;
		this.biomeCheckInterval = 3000; // Check every 3s

		// Track what's currently playing
		this.windPlaying = false;
		this.windVolume = 0;
		this.targetWindVolume = 0;
	}

	/**
	 * Determine ambient biome from position
	 */
	getBiome(lon, lat, alt) {
		const altM = alt * 0.3048;

		// High altitude - just wind
		if (altM > 3000) return 'highalt';

		// Over water (Big Bear Lake area)
		if (lat > 34.23 && lat < 34.27 && lon > -116.95 && lon < -116.85) return 'water';

		// City centers
		const cities = [
			{ lon: -118.24, lat: 34.05, r: 0.12 },  // LA
			{ lon: -115.14, lat: 36.17, r: 0.08 },   // Vegas
			{ lon: -117.16, lat: 32.72, r: 0.08 },   // San Diego
			{ lon: -112.07, lat: 33.45, r: 0.10 },   // Phoenix
		];
		for (const c of cities) {
			const d = Math.sqrt((lon - c.lon) ** 2 + (lat - c.lat) ** 2);
			if (d < c.r) return 'city';
		}

		// Desert
		if (lat > 34.5 && lon > -117.5) return 'desert';
		if (lat > 33.5 && lon > -116.5 && altM < 600) return 'desert';

		// Mountain/forest
		if (altM > 1500) return 'mountain';

		return 'wilderness';
	}

	/**
	 * Update ambient sounds every frame
	 */
	update(dt, state) {
		if (!soundManager || !soundManager.listener) return;

		const speed = state.speed || 0;
		const alt = state.alt || 0;
		const isFlapping = state.isFlapping || false;
		const isBoosting = state.isBoosting || false;
		const isTurbo = state.isTurbo || false;

		// === WIND SOUND - scales with speed ===
		// Wind is the primary flight sound for an eagle
		const minWindSpeed = 8;   // Below this, very quiet
		const maxWindSpeed = 80;  // Full wind roar

		if (speed > minWindSpeed) {
			const windFactor = Math.min(1.0, (speed - minWindSpeed) / (maxWindSpeed - minWindSpeed));
			// Wind volume: gentle breeze at low speed, rushing at high speed
			this.targetWindVolume = 0.08 + windFactor * 0.55;

			// Turbo/dive = louder, more intense wind
			if (isTurbo) this.targetWindVolume = Math.min(0.9, this.targetWindVolume * 1.5);
			if (isBoosting) this.targetWindVolume = Math.min(0.85, this.targetWindVolume * 1.3);
		} else {
			// Very slow / perched - ambient quiet breeze
			this.targetWindVolume = 0.05;
		}

		// Smooth wind volume transitions
		this.windVolume += (this.targetWindVolume - this.windVolume) * dt * 3;

		// Use the existing 'wind' sound as our primary ambient
		if (soundManager.sounds.has('wind')) {
			if (!this.windPlaying) {
				soundManager.play('wind', 0.5);
				this.windPlaying = true;
			}
			soundManager.setVolume('wind', this.windVolume);
		}

		// === JET ENGINE REPURPOSED AS WING RUSH ===
		// The 'jet-engine' sound works as a low rumble for fast flight
		if (soundManager.sounds.has('jet-engine')) {
			if (soundManager.isPlaying('jet-engine')) {
				// Scale: quiet rumble at cruise, louder at high speed
				const rushVol = speed > 30 ? Math.min(0.3, (speed - 30) / 200) : 0;
				soundManager.setVolume('jet-engine', rushVol);
			}
		}

		// === FLAPPING SOUNDS ===
		// Use 'pitch' sound as wing beat (rhythmic swoosh)
		if (isFlapping && state.flapStrength > 0.3) {
			if (!soundManager.isPlaying('pitch')) {
				soundManager.play('pitch', 0.1);
			}
			// Flap whoosh volume
			soundManager.setVolume('pitch', 0.15 + state.flapStrength * 0.2);
		} else {
			if (soundManager.isPlaying('pitch') && !isFlapping) {
				soundManager.stop('pitch', 0.3);
			}
		}

		// === BOOST/DIVE RUSH ===
		if (isBoosting) {
			if (!soundManager.isPlaying('boost')) {
				soundManager.play('boost');
			}
		}

		// === BIOME CHECK (less frequent) ===
		const now = Date.now();
		if (now - this.lastBiomeCheck > this.biomeCheckInterval) {
			this.lastBiomeCheck = now;
			this.currentBiome = this.getBiome(state.lon, state.lat, state.alt);
		}
	}

	/**
	 * Start ambient sounds when flight begins
	 */
	startFlight() {
		this.windPlaying = false;
		this.windVolume = 0.05;
	}

	/**
	 * Get current biome for display
	 */
	getCurrentBiome() {
		return this.currentBiome;
	}
}
