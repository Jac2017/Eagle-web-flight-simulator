# Shadow's Hunt - Big Bear Valley

A web-based bald eagle flight simulator set in Big Bear Valley, California. Fly as **Shadow**, a golden eagle soaring over real-world satellite terrain with realistic wing-based physics, 3D procedural forests, reflective lakes, and a 500-mile hunting territory.

Built with **CesiumJS** (real-world terrain and satellite imagery) and **Three.js** (3D objects, trees, water shaders), fully playable on desktop and mobile devices with gyroscope tilt controls.

---

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run serve
```

Open `http://localhost:3000` in your browser. On mobile, connect to the same network and use your computer's local IP address.

After `npm run build`, the `dist/` folder contains a complete self-contained deployable package. Upload it to any static hosting service (Netlify, Vercel, GitHub Pages, S3, or any HTTP server).

---

## How to Play

### Desktop Controls

| Control | Action |
|---------|--------|
| **W / S** | Increase / decrease wing power (flapping effort) |
| **Arrow Up / Down** | Pitch down / up |
| **Arrow Left / Right** | Roll left / right |
| **A / D** | Yaw (rudder turn) |
| **SPACE** | Power dive (tuck wings, accelerate steeply) |
| **SHIFT** | Turbo boost toggle (400 knots for cross-territory travel) |
| **F / ENTER** | Talon strike / catch prey |
| **1 / 2 / Q** | Switch attack mode |
| **V** | Eagle screech (scare ravens) |
| **ESC / P** | Pause / tactical menu |
| **Z** | Skip dialogue |
| **Mouse drag** | Look around / orbit camera |

### Mobile Controls (Android / iOS)

- **Tilt phone** left/right to roll, forward/back to pitch
- **Throttle slider** (left side) - slide up/down for wing power
- **TALON** button - hold to strike
- **TURBO** button - toggle 400-knot turbo boost for cross-territory travel
- **DIVE** button - tap for power dive
- **SWITCH** button - change attack mode
- **SCREECH** button - eagle screech
- **LEVEL** button - recalibrate tilt to current phone position
- **Pause** button (top right)
- **Touch drag** on viewport to look around

The game automatically enters fullscreen and locks to landscape orientation on mobile for the best experience.

---

## Game Overview

### Story
You are **Shadow**, a golden eagle nesting in Big Bear Valley's Jeffrey pines. Jackie calls from the nest - the eaglets are hungry. Soar over the San Bernardino Mountains, hunt prey in Big Bear Lake, and defend your territory from ravens.

### Gameplay
- **Hunt prey** (fish, rabbits, squirrels, mice) to score points
- **Defend territory** from ravens and crows
- **Explore** a 500-mile radius around Big Bear Valley over real satellite terrain
- **Master eagle flight** - use thermals, gliding, and diving to cover vast distances efficiently

### Tutorial
On first flight, Jackie guides you through the controls via typewriter-style dialogue. Press **Z** to skip messages. The tutorial completes automatically and won't repeat.

---

## Technical Architecture

### Dual Rendering System
The game combines two 3D engines layered together:

1. **CesiumJS** (background layer) - Renders the entire Earth with real satellite imagery and world terrain elevation data. Provides accurate geographic coordinates, terrain height sampling, and atmospheric effects.

2. **Three.js** (foreground layer) - Renders the eagle model, 3D trees, water surfaces, weapons, particles, and HUD overlays with transparency composited over the Cesium terrain.

### Source Structure

```
src/
  main.js                  # Game loop, state machine, system integration
  plane/
    planePhysics.js        # Eagle aerodynamics and flight model
    planeController.js     # Input handling (keyboard, mouse, touch, gyroscope)
    jetFlame.js            # Visual effects (unused for eagle)
  world/
    cesiumWorld.js         # CesiumJS initialization, camera control
    treeSystem.js          # Multi-biome procedural flora with instanced meshes
    waterSystem.js         # Water rendering with custom GLSL shaders
    landmarks.js           # Named POI 3D structures (ski resort, Vegas, Hollywood, etc.)
    citySystem.js          # Procedural 3D buildings for 20+ major cities
    trafficSystem.js       # Highway vehicles, boats, aircraft
    nestSystem.js          # Eagle nest with Jackie, eggs, and chicks
    dayNightWeather.js     # Day/night cycle and weather system
    territory.js           # 500-mile territory boundary system
    regions.js             # Geolocation utilities
  systems/
    weaponSystem.js        # Talon strike, dive attack, screech mechanics
    npcSystem.js           # Prey and raven AI spawning/behavior
    dialogueSystem.js      # Tutorial dialogue from Jackie
  ui/
    hud.js                 # HUD rendering, compass, minimap, eagle status
  utils/
    math.js                # Spherical coordinate movement calculations
    particles.js           # Explosion and effect particles
    soundManager.js        # Audio system (Three.js AudioListener)
  style.css                # All styles including responsive breakpoints

public/
  assets/
    models/                # Eagle 3D model (GLB format)
    sounds/                # 28 sound effects (engine, weapons, ambient, UI)
    fonts/                 # AceCombat custom font
    images/                # Screenshots, icons

index.html                 # Main HTML with all UI markup
vite.config.js             # Build configuration with CesiumJS plugin
```

---

## Key Systems

### Eagle Flight Physics (`planePhysics.js`)

The flight model simulates real eagle aerodynamics rather than jet aircraft:

- **Wing-based lift** - Calculated from airspeed, angle of attack, wing area (0.65 m2), and air density using the lift equation: `L = 0.5 * rho * v^2 * S * Cl`
- **Angle of attack** - Lift coefficient peaks at 12-15 degrees AoA and drops in stall above 18 degrees
- **Drag model** - Parasitic drag (body) + induced drag (from lift generation), scaled by wing aspect ratio (7.0, realistic for eagles)
- **Gliding** - When throttle is below 15%, wings spread fully. Eagles achieve 20:1 glide ratio (20m forward per 1m altitude loss)
- **Thermal updrafts** - Simulated thermal patches provide vertical lift. Stronger when banking (circling) at 15-45 degrees and at lower altitudes over sun-heated terrain
- **Power dive** - SPACE tucks wings (wing spread drops to 0.2), reducing drag by 70%, allowing speeds up to 120 units (matching real eagle stoop speeds of 150+ mph)
- **Gravity** - Always acting along flight path. Diving gains speed, climbing costs speed
- **Air density** - Decreases with altitude (exponential model), reducing lift at high altitudes
- **Stall behavior** - Below minimum airspeed, the eagle naturally drops its nose to regain speed
- **Wing animation state** - Tracks flap phase, flap frequency (3 Hz at full effort), and wing spread (0.0 tucked to 1.0 fully spread)

Speed ranges:

| Mode | Speed |
|------|-------|
| Stall | < 5 units |
| Gliding cruise | 15-25 units |
| Flapping cruise | 25-45 units |
| Power dive | up to 120 units |
| **Turbo boost** | **400 knots** (~460 mph) |

### Multi-Biome Flora System (`treeSystem.js`)

Procedural vegetation across 5 biomes with 20+ species, matching real Southern California geography:

**Mountain Biome** (Big Bear area, San Bernardino Mountains):

| Species | Height | Altitude Band | Density |
|---------|--------|---------------|---------|
| Jeffrey Pine | 20m (65 ft) | 5,000 - 7,800 ft | 60% |
| White Fir | 25m (82 ft) | 5,600 - 8,900 ft | 50% |
| Lodgepole Pine | 18m (59 ft) | 6,900 - 9,800 ft | 70% |
| Scrub Oak | 6m (20 ft) | 3,300 - 5,900 ft | 30% |
| Alpine Pine | 8m (26 ft) | 8,900 - 11,500 ft | 15% |

**Desert Biome** (Mojave, 29 Palms, Fort Irwin, Phoenix, Tucson):

| Species | Height | Altitude Band | Density |
|---------|--------|---------------|---------|
| Joshua Tree | 8m (26 ft) | 1,300 - 5,900 ft | 12% |
| Saguaro Cactus | 10m (33 ft) | 650 - 3,900 ft | 6% |
| Creosote Bush | 2m (6.5 ft) | 0 - 4,900 ft | 20% |
| Desert Sage | 1.2m (4 ft) | 0 - 6,500 ft | 25% |
| Smokey Tree | 5m (16 ft) | 300 - 2,950 ft | 8% |

**Coastal/Palm Biome** (LA coast, Palm Springs, San Diego):

| Species | Height | Altitude Band | Density |
|---------|--------|---------------|---------|
| California Fan Palm | 18m (59 ft) | 0 - 1,640 ft | 30% |
| Date Palm | 15m (49 ft) | 0 - 980 ft | 25% |
| Mexican Fan Palm | 25m (82 ft) | 0 - 2,300 ft | 20% |
| Eucalyptus | 20m (65 ft) | 0 - 1,970 ft | 15% |

**Urban Biome** (LA, San Diego, Phoenix, Vegas, major cities):

| Species | Height | Altitude Band | Density |
|---------|--------|---------------|---------|
| London Plane Tree | 12m (39 ft) | 0 - 1,640 ft | 15% |
| Jacaranda | 10m (33 ft) | 0 - 1,640 ft | 10% |
| Urban Oak | 14m (46 ft) | 0 - 2,625 ft | 12% |

**Chaparral Biome** (foothills, mid-altitude):

| Species | Height | Altitude Band | Density |
|---------|--------|---------------|---------|
| Manzanita | 3m (10 ft) | 980 - 4,900 ft | 35% |
| California Laurel | 10m (33 ft) | 650 - 3,930 ft | 20% |
| Ceanothus | 4m (13 ft) | 650 - 4,900 ft | 30% |

Technical details:
- **Biome detection** from lat/lon/altitude using real SoCal geography boundaries
- **Instanced meshes** (up to 3,000 trees) for GPU-efficient rendering
- **LOD system** - Full detail within 500m, simplified at 500-1,500m, minimal beyond
- **Seeded random** placement for deterministic, consistent forests across sessions
- **Biome fallback** - If no species match, tries adjacent biome types
- **Water exclusion** - No trees placed over Big Bear Lake, Baldwin Lake, Lake Arrowhead, Silverwood Lake
- **Adaptive render distance** - Fewer trees rendered at high altitude
- **Color variation** - Per-tree trunk and crown color randomization for natural appearance
- **Grid-based streaming** - Trees generated in 40m cells, streamed around eagle position

### Landmark System (`landmarks.js`)

Named real-world points of interest with custom 3D structures:

| Landmark | Location | Key Structures |
|----------|----------|----------------|
| **Big Bear Ski Resort** | Snow Summit/Bear Mountain | Lodge buildings, ski lift towers, parking area |
| **Las Vegas Strip** | Las Vegas Blvd | Luxor pyramid with light beam, Bellagio, Wynn, STRAT tower (350m), MGM Grand, Paris Eiffel replica, Caesars, Aria, Venetian, Cosmopolitan, Mandalay Bay, strip road |
| **Hollywood Hills** | Hollywood Sign area | 9 sign letters (14m tall white), Griffith Observatory dome |
| **Twentynine Palms** | Marine Corps base | Base buildings, hangars, 2.5km runway, control tower, barracks |
| **Fort Irwin NTC** | National Training Center | Command buildings, hangars, motor pool, barracks, comms tower, water tower |
| **Reagan Presidential Library** | Simi Valley | Museum (Spanish Colonial), Air Force One Pavilion, courtyard, tower |
| **Rose Bowl** | Pasadena | 200m oval stadium with segmented walls, green field, parking lots |

Technical details:
- Each landmark has multiple custom 3D structures (boxes, pyramids, domes, cylinders, hangars, stadiums)
- Distance-adaptive rendering with visibility scaling
- Automatic LOD - landmarks visible from farther at higher altitude
- All structures use shared geometry cache for GPU efficiency

### City Building System (`citySystem.js`)

Procedural 3D buildings for 20 major cities across the territory:

**Major metros** (thousands of buildings):

| City | Max Building Height | Radius | Style |
|------|-------------------|--------|-------|
| Los Angeles / Downtown LA | 310m (1,017 ft) | 5km | Modern glass/steel |
| Las Vegas | 100m | 4km | Modern |
| San Diego | 150m | 3.5km | Modern |
| Phoenix | 130m | 5km | Modern |

**Mid-size cities** (hundreds of buildings):

| City | Max Height | Style |
|------|-----------|-------|
| Long Beach | 90m | Modern |
| Riverside | 50m | Suburban |
| San Bernardino | 40m | Suburban |
| Bakersfield | 40m | Suburban |
| Palm Springs | 30m | Resort |
| Santa Barbara | 30m | Spanish Colonial |
| Pasadena | 50m | Modern |
| Glendale | 70m | Modern |
| Burbank | 50m | Modern |
| Tucson | 60m | Desert |
| Henderson | 30m | Suburban |
| Anaheim | 50m | Modern |
| Irvine | 50m | Modern |
| Oxnard | 25m | Suburban |
| Fresno | 50m | Suburban |

Technical details:
- Up to 5,000 instanced building meshes for GPU performance
- **Downtown density gradient** - Taller, denser buildings near city center, shorter toward edges
- **Road grid gaps** - Every Nth cell left empty to create street grid pattern
- **Style-based color palettes** - Modern (blue-gray), suburban (tan), resort (cream), Spanish (terracotta), desert (sand)
- **LOD filtering** - Only tall buildings rendered at distance; short buildings culled
- **Per-building variation** - Size, height, color randomized within style constraints
- **Distance-based rendering** - Cities only rendered when eagle is within range
- **Window lighting** - Semi-transparent warm/cool lit window strips on building faces
- **Rooftop details** - AC units, mechanical rooms on buildings over 30m; red-lit antenna on buildings over 80m
- **Stepped architecture** - Buildings over 60m can have setback/stepped tops (narrower upper section)

### World Traffic System (`trafficSystem.js`)

Living world with vehicles, boats, and aircraft:

**Highway Vehicles** (up to 800 instanced):

| Highway | Lanes | Density | Route |
|---------|-------|---------|-------|
| I-15 | 4 | 80% | LA to Las Vegas |
| I-10 | 4 | 70% | LA to Phoenix |
| I-5 | 3 | 60% | LA to Bakersfield |
| I-405 | 5 | 90% | Long Beach to Van Nuys |
| SR-18/138 | 1 | 30% | Big Bear Highway |
| US-95 | 2 | 40% | Vegas northbound |
| SR-62 | 1 | 20% | 29 Palms Highway |

- Cars (85%) and trucks (15%) with realistic color distributions
- Per-lane offsets, bidirectional traffic flow
- Speed variation: 55-90 mph for cars, 40-63 mph for trucks
- Vehicles animate along waypoint routes, wrapping at endpoints

**Boats** (up to 80 instanced):

| Water Body | Count | Types |
|------------|-------|-------|
| Big Bear Lake | 8 | Motorboats, sailboats |
| Lake Arrowhead | 4 | Small craft |
| Silverwood Lake | 3 | Recreation |
| San Diego Bay | 12 | Large ships, sailboats, motorboats |
| Long Beach Harbor | 15 | Cargo ships, recreational |
| Lake Mead | 6 | Recreational |

- Three vessel types: cargo/large (20%), sailboats (30%), motorboats (50%)
- Patrol patterns within water body radius with turn-back behavior
- Water bobbing animation with gentle roll

**Aircraft** (up to 20 instanced):

| Corridor | Altitude | Speed | Count |
|----------|----------|-------|-------|
| LAX Approach | 3,000m | 130 kts | 3 |
| LAX Departure N | 8,000m | 200 kts | 2 |
| Vegas Approach S | 4,000m | 140 kts | 2 |
| Phoenix Route | 11,000m | 250 kts | 2 |
| SF-SD Corridor | 10,000m | 240 kts | 2 |
| Military (Edwards) | 5,000m | 300 kts | 1 |
| SoCal Helicopters | 500m | 60 kts | 3 |

- Commercial airliners (large, white), military jets, and helicopters
- Fly along realistic corridors with bounce-back at endpoints
- Size varies by type: helicopters (12m), jets (15m), airliners (60m)

### Water Rendering (`waterSystem.js`)

Custom GLSL shaders for realistic lake surfaces:

Water bodies modeled:

| Lake | Length | Width | Max Depth | Elevation |
|------|--------|-------|-----------|-----------|
| Big Bear Lake | 11 km (7 mi) | 1.6 km (1 mi) | 22m (72 ft) | 6,752 ft |
| Baldwin Lake | 2.5 km | 1.8 km | 3m (seasonal) | 6,726 ft |
| Lake Arrowhead | 1.8 km | 0.9 km | 56m (184 ft) | 5,174 ft |
| Silverwood Lake | 3.2 km | 0.8 km | 55m (180 ft) | 3,445 ft |
| Gregory Lake | 0.4 km | 0.2 km | 8m (26 ft) | 4,593 ft |

Shader features:
- **Wave displacement** - Three overlapping sine waves at different frequencies and amplitudes animate the surface vertex positions
- **Fresnel reflections** - Sky color blends with water color based on view angle (more reflection at glancing angles)
- **Depth-based coloring** - Shallow areas show light teal, deep areas show navy, interpolated by distance from center
- **Specular highlights** - Sun reflection off wave normals with 128 shininess
- **Caustic animation** - Overlapping sine patterns create shimmering light refraction effect
- **Shoreline fade** - Opacity decreases near edges for natural blending with terrain
- **Distance culling** - Lakes hidden beyond 30km for performance
- **Altitude-scaled waves** - Waves are calmer when viewed from high altitude

### Territory System (`territory.js`)

The eagle's hunting range centered on Big Bear Valley:

- **Center**: 34.2439 N, 116.9114 W (Big Bear Valley)
- **Radius**: 500 miles (805 km)
- **Coverage**: San Bernardino Mountains, Mojave Desert, Los Angeles basin, Joshua Tree, Pacific coast, parts of Nevada/Arizona, Sierra Nevada foothills
- **Visual boundary**: Dashed golden circle on the map with "THE NEST" marker at center
- **Enforcement**: Eagle is gently turned back when reaching the boundary. Warning notification at 20 miles from edge.
- **Zone names**: Dynamic region identification (e.g., "Big Bear Valley - Home Territory", "San Bernardino Mountains", "High Desert", "Pacific Coast")

### Eagle Nest (`nestSystem.js`)

Detailed 3D model of the Big Bear eagle cam nest - the game's home base:

- **Location**: 34.2433 N, 116.9155 W, in a Jeffrey Pine at ~2,070m elevation
- **Nest tree**: 30m tall Jeffrey Pine with 7 major branches, bark rings, and 8 foliage clusters
- **The nest**: 2m wide stick nest with raised rim, 20+ individual sticks, moss/grass lining
- **Jackie**: Adult bald eagle with dark brown body, white head, yellow beak, folded wings, white tail feathers - animated with subtle breathing and head movement
- **Eggs and chick**: 2 off-white eggs and 1 fluffy gray eaglet with dark eyes and tiny beak - chick wiggles
- **Default spawn**: Eagle launches from 50m above the nest facing southwest toward the lake
- **Respawn point**: Returning to nest after crash takes eagle back here
- **Visibility**: Nest rendered within 2km of eagle for performance

### Day/Night Cycle and Weather (`dayNightWeather.js`)

Real-time environmental conditions affecting the entire world:

**Day/Night Phases** (mapped to Pacific Standard Time):

| Phase | Hours | Fog | Light |
|-------|-------|-----|-------|
| Night | 00:00-05:00 | 1.5x | 10% |
| Dawn | 05:00-07:00 | 1.2x | 40% |
| Morning | 07:00-10:00 | 0.8x | 80% |
| Midday | 10:00-14:00 | 0.5x | 100% |
| Afternoon | 14:00-17:00 | 0.6x | 90% |
| Dusk | 17:00-19:00 | 1.0x | 40% |
| Evening | 19:00-21:00 | 1.3x | 20% |
| Late Night | 21:00-24:00 | 1.5x | 10% |

**Weather Conditions** (seasonal, changes every ~5 minutes):

| Condition | Fog Density | Visibility | Wind | Thermals |
|-----------|-------------|-----------|------|----------|
| Clear | Very Low | 100% | 5 kt | 100% |
| Partly Cloudy | Low | 90% | 10 kt | 80% |
| Overcast | Medium | 60% | 15 kt | 30% |
| Mountain Fog | High | 30% | 3 kt | 10% |
| Desert Haze | Medium | 50% | 8 kt | 60% |
| Thunderstorm | Very High | 30% | 30 kt | 200% (strong updrafts) |
| Snow | High | 40% | 20 kt | 0% |
| Santa Ana Winds | Medium | 70% | 50 kt | 50% |

**Seasonal patterns**:
- **Winter**: Snow, fog, overcast likely
- **Spring**: Clear with afternoon storm buildups
- **Summer**: Clear mornings, afternoon thunderstorms, desert haze
- **Fall**: Clear skies, golden light, occasional Santa Ana winds

### HUD System (`hud.js`)

Military-style heads-up display adapted for eagle flight:

- **Compass tape** - Scrolling heading display with cardinal direction indicators
- **Speed indicator** - Current airspeed with angular box styling
- **Altitude indicator** - Feet above sea level
- **Minimap** - CesiumJS satellite view with prey/raven markers
- **Eagle flight status panel**:
  - Flight mode: SOARING / GLIDING / FLAPPING / DIVING / RIDING THERMAL
  - Thermal indicator with strength percentage
  - Wing spread bar (0-100%)
  - Lift force readout
  - Vertical speed (ft/min) with color coding (green = climbing, red = descending)
- **Weapon status** - Talon strike, dive attack, eagle screech with ammo/cooldown
- **Region notifications** - Entering new area alerts
- **PULL UP warning** - Ground proximity warning system
- **Kill notifications** - Glitch-text animation on prey catch
- **Coordinates** - Real lat/lon position display

### NPC System (`npcSystem.js`)

AI-controlled prey and predators:

- **Prey types**: Trout, Bass, Rabbit, Squirrel, Mouse (smaller, easier targets)
- **Predators**: Raven, Crow (compete for territory, can be scared with screech)
- **Spawning**: Up to 5 NPCs within 1-6km of player, respawning every 3 seconds
- **AI behavior**: NPCs fly with varied speeds (15-45 units), avoid terrain, adjust pitch when too close to ground
- **Scoring**: +500 points per prey caught

### Sound System (`soundManager.js`)

28 sound effects managed through Three.js AudioListener:

- Eagle flight: wind, wing flaps, boost whoosh
- Hunting: talon strike, dive attack, screech
- UI: button clicks, hovers, weapon switch
- Environment: ambient, terrain warning
- Effects: explosions, glitch transitions

### Mobile Support (`planeController.js`)

Full mobile gameplay via:

- **DeviceOrientation API** - Gyroscope/accelerometer for tilt-based flight control
- **iOS 13+ permission** - `DeviceOrientationEvent.requestPermission()` called on user gesture
- **Tilt mapping**: 3 degree deadzone, 35 degree max angle, automatic coordinated yaw from roll
- **Touch controls**: Throttle slider, action buttons, viewport camera drag
- **Fullscreen + landscape lock** on flight entry
- **Safe area insets** for notched phones (iPhone X+)

### Responsive Design

Four CSS breakpoints ensure the UI works at all screen sizes:

| Breakpoint | Target | Key Adjustments |
|------------|--------|-----------------|
| 1024px and below | Tablets | Tighter HUD spacing, smaller minimap |
| 768px and below | Phone landscape | Compact HUD, mobile-sized weapons, scaled menus |
| 480px and below | Phone portrait | Ultra-compact layout |
| 450px height and below | Short landscape | Minimized top/bottom HUD |

---

## Game States

The game uses a state machine with six states:

```
MENU --> PICK_SPAWN --> TRANSITIONING --> FLYING <--> PAUSED
                                           |
                                           v
                                        CRASHED --> PICK_SPAWN
```

1. **MENU** - Main menu with start, settings, help, credits, about
2. **PICK_SPAWN** - Interactive map for choosing spawn location (click or search)
3. **TRANSITIONING** - Camera flyover animation to spawn point
4. **FLYING** - Active gameplay with full controls and HUD
5. **PAUSED** - Tactical pause with territory map and coordinates
6. **CRASHED** - Ground collision, option to return to nest

---

## Settings

Accessible from main menu or pause menu:

- **Graphics Quality**: Low / Medium / High (resolution scaling and terrain detail)
- **Anti-Aliasing**: FXAA toggle
- **Fog Effects**: Atmospheric fog and haze
- **Mouse Sensitivity**: 0.05 - 1.0 slider
- **Show HUD**: Toggle all HUD elements
- **Show Horizon Lines**: Pitch ladder overlay
- **Sound**: Enable/disable all audio
- **Minimap Range**: 1km / 5km / 10km

Settings persist in localStorage.

---

## Deployment

### Static Hosting (Netlify, Vercel, GitHub Pages, S3)

```bash
npm run build
# Upload the dist/ folder to your hosting provider
```

The `dist/` folder is completely self-contained with relative paths. No server-side configuration needed.

### Docker / Custom Server

Any HTTP server serving the `dist/` folder works:

```bash
npm run build
npx serve dist/
# or
cd dist && python3 -m http.server 8080
```

### Mobile Testing on Local Network

```bash
npm run dev
# Open http://<your-ip>:3000 on your phone (same WiFi network)
```

---

## Requirements

- **Browser**: Chrome 80+, Firefox 75+, Safari 14+, Edge 80+
- **WebGL**: Required (hardware-accelerated GPU)
- **Internet**: Required for CesiumJS satellite terrain tiles (streamed from Cesium Ion)
- **Mobile**: Android 8+ / iOS 13+ for gyroscope controls
- **Node.js**: 18+ (for development/building only)

---

## Credits

- **Original Flight Simulator**: [Dimar Tarmizi](https://tarmizi.id) - Web Flight Simulator
- **3D Engine**: [CesiumJS](https://cesium.com/) (terrain and satellite imagery) + [Three.js](https://threejs.org/) (3D rendering)
- **Terrain Data**: Cesium World Terrain
- **Eagle Adaptation**: Shadow's Hunt game adaptation with eagle flight physics, 3D forests, water shaders, territory system, and mobile controls
- **F-15 Model**: SIpriv (GLB format, used as eagle placeholder)
- **Font**: AceCombat ACES07 Regular

---

## License

ISC
