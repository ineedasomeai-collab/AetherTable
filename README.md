# AetherTable • TTRPG Projector Battlemap Utility

A high-performance, web-based digital battle map utility engineered specifically for **in-person tabletop roleplaying games (D&D, Pathfinder, etc.) played via digital tabletop projection**.

---

## 🌟 Key Features

### 1. In-Person Tabletop Projection & Dual-Stage Visual Tuning
- **Direct Single-Display Projector Utility**: Engineered to run directly on the connected projector display with zero multi-window hassle or unnecessary complexity.
- **🛡️ 64px Bottom Ad Dead Space (Web Publishing Safe Zone)**: The bottom 64 pixels of the viewport are reserved as a protected dead space so that bottom banner advertisements never block, clip, or interfere with floating menus, calibration pins, HUD bars, or touch buttons. All panel drag boundaries, maximum panel heights, and HUD positions automatically clamp above the safe zone.
- **🖱️ Draggable Floating Control Windows**: Every control panel (**🌿 Realistic FX**, **📐 Keystone**, **⊞ Grid & Minis**, **📁 Maps**, **⚙ Display**, **✨ Map Finder & AI**, **🎬 Dynamic Scenes**, and **Element Inspector**) can be grabbed by its header bar (styled with a visual grip indicator `⠿`) and freely dragged anywhere around the screen so menus never obscure your effects or miniatures. Clicking anywhere on a panel automatically brings it to the top.
- **🔄 Intuitive Before/After Phased Map Shift (Direct in 📁 Maps Panel)**: Seamlessly morph between pristine and destroyed states mid-combat right where GMs manage their maps. Features dual slots (**Phase A: Normal** and **Phase B: Destroyed/Shifted**), 1-click **⚡ Instant Flip A/B**, **▶ 3s Cinematic Shift**, a smooth 0%–100% transition slider, and 4 instant scenario presets (*Tavern Taproom ↔ Fire*, *Stone Bridge ↔ Collapse*, *Temple ↔ Blood Ritual*, *Starship ↔ Meltdown*).
- **🖼️ Independent Map Image Adjustments**: Fine-tune each map's **Image Brightness**, **Image Contrast**, and **Image Sharpness (Detail Boost)** (powered by a real-time 3×3 SVG Laplacian convolution unsharp filter) directly in the **📁 Maps** or **⚙ Display** panel—completely separate from your global projector calibration.
- **📽️ Global Projector Optics Tuning**: Keep your room/table hardware settings dialed in with **Projector Brightness Boost**, **Projector Contrast Enhancement**, **Color Saturation**, and **Invert Colors** for high-contrast visibility on dark gaming mats.
- **Dramatic Blackout Curtain (`B` key)**: Instantly blackout the projection to stealthily transition scenes or place physical miniatures without spoiling encounters.
- **Clean Play Mode (`H` key)**: Hides all UI bars and menus for an immersive, distraction-free tabletop gaming experience.

### 2. Built-in 4-Corner Keystone Correction (Perspective Homography)
- **📱 Touch-Friendly Inset Pins (iPad & Smartphone Optimized)**:
  - Corners are moved inward from the extreme outer display edges (**default 6.0% Touch-Safe Inset**) so handles sit comfortably inside the viewport—completely eliminating edge swipe interference, status bar blocking, and bezel shadows.
  - **Large 68px Touch Targets** with an expanded **92px invisible touch cushion (`::after`)**, high-visibility glowing center pinpoint dot, outer dashed bullseye ring, and active grab scaling (`1.45x`).
  - **Intelligent Offset Badges**: Live coordinate tags (`TL`, `TR`, `BL`, `BR`) are dynamically offset towards the center of the screen so they are never covered by thumbs or pushed off-screen.
  - **Pointer Events & Pointer Capture**: Uses modern W3C Pointer Events (`setPointerCapture`) for buttery-smooth dragging that prevents touch drop-offs or iPad rubber-band scrolling.
- **📱 Virtual Touch D-Pad (No Keyboard Needed)**:
  - On iPads and smartphones without a physical keyboard, tap **↖ TL**, **↗ TR**, **↙ BL**, or **↘ BR** and use the on-screen **▲ ◀ ▶ ▼ D-Pad** to micro-nudge corners with single taps while standing beside the gaming table.
  - Step precision toggles: **Fine (0.2%)**, **Medium (1.0%)**, and **Fast (5.0%)**.
- **📐 Corner Inset Margin Slider (0% to 15%) & Presets**:
  - Adjust the **Corner Inset Slider** to symmetrically move all 4 corners in or out simultaneously, or choose 1-click presets: **📱 6% Touch-Safe Inset**, **📐 10% Table Mat Inset**, or **↔ 0% Outer Edge**.
- **CSS 3D `matrix3d` Homography**: Real-time 8-parameter projective transformation applied directly to the battle map, animated overlays, video, and grid.
- **Physical Keyboard Micro-Nudge**:
  - Click any corner pin and nudge with **Arrow Keys** (0.2% step).
  - Hold **Shift** for 5x step, **Alt** for 0.2x micro-step.
  - Press **Tab** to cycle between corners.
- **Alignment Test Cards**: Built-in crosshatch grid, concentric circles, diagonals, and 90° corner squareness markers to verify square grid lines on your tabletop.

### 3. 160 Realistic Animated Features & Hazards (5 Broad Categories: Universal + 4 Genres across 5 Sub-Categories)
Subtle, high-fidelity physical overlays with natural motion, lighting, and unconstrained **8-Point Corner/Edge Dragging, Full-Map Fit, 3D Perspective Tilt, Density & Entity Quantity** customization:
- 🗂️ **Organized 160-Feature Matrix with 5 Broad Setting Tabs & 5 Sub-Category Filters**:
  - **5 Broad Settings (60 Universal + 25 per Genre = 160 Total)**:
    - **🌍 Universal (60 Features — 12 per Category)**: All setting-agnostic, truly universal environmental animations (Rain, Downpour, Snow, Blizzard, Mist, Dense Fog, Autumn Leaves, Blossom Petals, Dust Motes, Sandstorm, Fireflies, Volcanic Ash, Wildfire, Black Smoke, Gray Ash, Swamp Mud, Quicksand, Tar Pit, Spiderwebs, Ground Lightning, Steam Vents, Magma Fissures, Swamp Gas, Sinkholes, Campfires, Bonfires, Dying Coals, Sunbeams, Moonbeams, Cavern Skylights, Torches, Lanterns, Candles, Hearth Fire, Bioluminescent Flora, Polar Aurora, Cave Bats, Crows/Ravens, Vultures, Seagulls, Rats, Spiders, Scorpions, Beetles, Trout, Koi, Reef Sharks, Tumbleweeds, Flowing Streams/Rivers, River Rapids, Bayou Swamp Water, Molten Lava Rivers, Cliff Waterfalls, Cavern Cascades, Oak Forest Canopies, Boreal Pine Forests, Tropical Jungles, Autumn Maple Groves, Sandy Beach Surf, and Tempestuous Deep Ocean Waves).
    - **⚔️ Historic & Fantasy (25 Features — 5 per Category)**: Sword & Sorcery, Dark Fantasy, Bronze Age, Medieval Siege, Feywild, Pirates.
    - **🕵️ Modern & Pulp (25 Features — 5 per Category)**: Pulp Action, Weird West, Noir Detective, Urban Fantasy, Tactical SWAT & Espionage.
    - **🚀 Future & Sci-Fi (25 Features — 5 per Category)**: Space Opera, Cyberpunk, Hard Sci-Fi, Mecha & Kaiju, Post-Apocalyptic.
    - **🐙 Other & Eldritch (25 Features — 5 per Category)**: Gothic Horror, Gaslamp & Steampunk, Cosmic & Eldritch Horror, Supernatural.
  - **5 Distinct Sub-Categories per Setting (12 per category in Universal; 5 per category in each Genre)**:
    - **☁️ Weather & Ambiance (32 total)**: Localized precipitation, mist, atmospheric motes, and phenomena.
    - **⚠️ Hazards & Obstacles (32 total)**: Damaging terrain, burning zones, traps, and tactical obstacles.
    - **💡 Light Sources (32 total)**: Natural and artificial illumination, torches, beams, spotlights, and beacons.
    - **🐾 Passive Actors (32 total)**: Autonomous critters, flocking silhouettes, ambient life, and roving entities.
    - **🌿 Environment (32 total)**: Deformable spline rivers, waterfalls, waving forest fills, ocean surf, portals, and architectural fixtures.
  - **🔍 Live Instant Search (`#fx-search-input`)**: Real-time multi-keyword filter that instantly finds features across all 160 overlays by name, theme, or category (e.g. *rain*, *forest*, *river*, *fire*, *drone*, *tentacles*).

#### 📜 The 160 Animated Features Breakdown:
1. **🌍 Universal (60 Features — 12 per Category)**:
   - *Weather (12)*: 🌧️ Light Rain & Drizzle, ⛈️ Heavy Storm Downpour, ❄️ Gentle Snow Flurry, 🌨️ Howling Whiteout Blizzard, 🌫️ Rolling Ground Mist, 🌫️ Dense Swamp & Moor Fog, 🍂 Swirling Autumn Leaves, 🌸 Drifting Blossom Petals, ✨ Floating Sunlit Dust Motes, 🏜️ Swirling Desert Sandstorm, ✨ Woodland Evening Fireflies, 🌋 Volcanic Soot & Ash Fall.
   - *Hazards (12)*: 🔥 Spreading Brush & Timber Fire, 💨 Thick Black Fire Smoke, 🌫️ Choking Gray Ash Cloud, 🫧 Sucking Swamp Mud Mire, 🏜️ Churning Desert Quicksand, 🖤 Boiling Natural Tar Pit, 🕸️ Thick Spiderweb Tangle, ⚡ Natural Ground Lightning Zone, 💨 Scalding Geyser Steam Vent, 🌋 Molten Volcanic Magma Fissure, ☠️ Noxious Swamp Gas Fumes, 🕳️ Collapsed Sinkhole Chasm.
   - *Lights (12)*: 🔥 Campsite Log Campfire, 🔥 Roaring Great Bonfire, 🔥 Smoldering Dying Coals, ☀️ Golden Forest Sunbeams, 🌙 Silvery Midnight Moonbeams, 💎 Cavern Skylight Shafts, 🕯️ Flickering Wall/Post Torch, 🏮 Warm Oil Camp Lantern, 🕯️ Cluster of Wax Candles, 🪔 Indoor Hearth Fireplace, 🍄 Bioluminescent Cave Flora, 🌌 Natural Polar Aurora Skyglow.
   - *Passive Actors (12)*: 🦇 Flocking Cave Bats, 🦅 Circling Crows & Ravens, 🦅 Soaring Desert Vultures, 🕊️ Coastal Seagulls Flock, 🐀 Skittering Brown Rats, 🕷️ Scuttling Cave Spiders, 🦂 Desert Sand Scorpions, 🪲 Swarming Ground Beetles, 🐟 Freshwater Brook Trout, 🎏 Ornate Pond Koi Fish, 🦈 Reef Sharks & Ocean Fish, 🌾 Rolling Desert Tumbleweeds.
   - *Environment (12)*: 🌊 Flowing Stream / River (Deformable Spline), 🌊 Deep Rushing River Current (Deformable Spline), 🐊 Murky Bayou & Marsh Water (Deformable Spline), 🌋 Flowing Molten Lava River (Deformable Spline), 🌊 Roaring Cliff Waterfall, 💧 Subterranean Cavern Cascade, 🌳 Swaying Oak Forest Canopy, 🌲 Boreal Pine & Conifer Forest, 🌴 Dense Tropical Jungle Canopy, 🍁 Golden Autumn Maple Grove, 🏖️ Sandy Beach & Reef Surf, 🌊 Tempestuous Deep Ocean Waves.

2. **⚔️ Historic & Fantasy (25 Features — 5 per Category)**:
   - *Weather (5)*: 🧚 Enchanted Feywild Pixie Dust, 🔥 Siege Battlefield Cinders, 🌫️ Ancient Crypt Floor Mist, ✨ Arcane Leyline Breeze, 🌊 Galleon Deck Sea Spray.
   - *Hazards (5)*: 🕳️ Concealed Iron Punji Spike Pit, 🧪 Alchemical Green Greek Fire, 🔮 Wild Magic Runic Ground Ward, ☀️ Radiant Celestial Sanctuary Seal, ⚔️ Siege Pitch & Snare Trench.
   - *Lights (5)*: 🕯️ Dungeon Iron Wall Sconce, 🪔 Temple Bronze Tripod Brazier, 🕯️ Great Hall Feast Chandelier, 🌈 Stained-Glass Cathedral Rays, 🔮 Wizard's Floating Magelight.
   - *Passive Actors (5)*: 🔵 Moorland Will-o'-the-Wisp, 🧚 Fluttering Feywild Sprite, 🐀 Plague Swarm of Crypt Rats, 🦅 Battlefield Carrion Ravens, 🪲 Tomb Golden Scarab Swarm.
   - *Environment (5)*: 🌀 Ancient Runic Teleport Circle, ⛲ Courtyard Marble Fountain, 🌸 Sacred Shrine Sakura Grove, 🏰 Castle Defensive Moat Channel (Deformable Spline), ⚡ Glowing Arcane Leyline Fracture.

3. **🕵️ Modern & Pulp (25 Features — 5 per Category)**:
   - *Weather (5)*: 🌧️ Noir Alleyway Acid Downpour, 🏭 Industrial Chemical Smog Haze, 💨 Subway Grate & Manhole Steam, 🌪️ Route 66 Dust Devil Eddy, 🌨️ Urban Sidewalk Slush Flurry.
   - *Hazards (5)*: 🚗 Gasoline Vehicle Wreck Blaze, ☠️ SWAT Riot Tear Gas Cloud, ⚡ Sparking Downed Power Line, 🛢️ Iridescent Garage Oil Slick, 🚧 Concertina Razorwire Barrier.
   - *Lights (5)*: 🚁 Helicopter / Prison Searchlight, 🔦 Tactical SWAT Weapon Light, 💡 Sodium-Vapor City Streetlamp, 🚘 Twin Automotive Headlights, 🛢️ Alleyway 55-Gallon Burn Barrel.
   - *Passive Actors (5)*: 🕊️ City Plaza Pigeon Flock, 🐈 Prowling Stray Alley Cat, 🐀 Subway Track Sewer Rats, 📰 Windblown Street Newspaper, 🚨 Roving Security Guard Beacon.
   - *Environment (5)*: 🌊 Concrete Storm Drainage Canal (Deformable Spline), ⛲ Civic Park Plaza Fountain, 🌀 Rooftop HVAC Exhaust Fan, 🍸 Buzzing Dive-Bar Neon Sign, ⚓ Industrial Harbor Pier Wake.

4. **🚀 Future & Sci-Fi (25 Features — 5 per Category)**:
   - *Weather (5)*: 🌧️ Cyberpunk Acid Neon Rain, 🚀 Relativistic Warp Starfield, ☢️ Nuclear Fallout Ash Drift, 🦠 Bioluminescent Xeno-Spores, 🤖 Self-Assembling Nanite Cloud.
   - *Hazards (5)*: 🛡️ High-Voltage Laser Tripwire Grid, ⚡ Superheated Fusion Plasma Vent, ☢️ Mutagen Radioactive Sludge, ❄️ Sub-Zero Cryo Nitrogen Breach, 💥 Warp Core Overload Arc Vent.
   - *Lights (5)*: 🪐 3D Tactical Planetary Holo-Table, 🎯 Targeting Reticle Hologram, 🔦 Security Drone Scanner Cone, 🚨 Emergency Red Alert Klaxon, ⏩ Floor LED Runway Chevron Strip.
   - *Passive Actors (5)*: 🛸 Sentry Surveillance Drone Swarm, 🤖 Cyber-Scuttler Maintenance Bots, 🧹 Autonomous Deck Scrubber Droid, 🐟 Digital Holographic Wireframe Koi, 🛰️ Deep-Space Telemetry Probe.
   - *Environment (5)*: 🛡️ Hexagonal Energy Shield Barrier, 💠 Quantum Transmat Teleporter, 🖥️ Tactical Command HUD Console, ⚙️ Factory Conveyor Belt Track, 🧪 Bio-Mutagen Coolant Conduit (Deformable Spline).

5. **🐙 Other & Eldritch (25 Features — 5 per Category)**:
   - *Weather (5)*: 🩸 Eldritch Crimson Blood Rain, 💀 Necrotic Cemetery Specter Fog, 🌌 Cosmic Void Dimensional Tear, 🦴 Ashen Necropolis Bone Blizzard, 👻 Swirling Tormented Shadow Spirits.
   - *Hazards (5)*: 🐙 Writhing Eldritch Void Tentacles, 🔥 Soul-Consuming Brimstone Hellfire, 🩸 Sacrificial Runic Blood Pool, ☣️ Choking Pestilence Plague Miasma, 🧪 Caustic Alchemical Ooze Mire.
   - *Lights (5)*: 💀 Gothic Skull Ritual Candelabra, 💙 Pale Blue Spectral Witchfire, 💎 Floating Amethyst Soul Crystal, ⚙️ Victorian Steampunk Gaslamp, 🌕 Blood Moon Volumetric Shafts.
   - *Passive Actors (5)*: 👻 Floating Victorian Phantom Lady, 👁️ Wandering Eldritch All-Seeing Eye, 🕷️ Swarming Abyssal Shadow Spiders, 🐟 Deep-One Bioluminescent Anglers, 🦋 Death's-Head Crypt Lunar Moths.
   - *Environment (5)*: 🩸 Flowing Sanguine River of Blood (Deformable Spline), ⛲ Vampiric Sanguine Stone Fountain, 🌲 Twisted Haunted Deadwood Thicket, 🍄 Alien Myconid Spore-Cap Grove, 🌀 Shattered Reality Void Rift.

- 📐 **True 90° Top-Down Orthographic Perspective (Tabletop Gaming Standard)**:
  - All Living Environmental Overlays and Hazards default to authentic **90° Top-Down Orthographic Satellite View** so effects blend naturally with top-down battlemaps and real physical miniatures standing upright on the table surface.
- 🎛️ **Dedicated Selected Element Attributes Popup Window (`#element-inspector-panel`)**:
  - Clicking any animated element on the map (or dropping a new element from the 160-feature library) automatically pops open a **separate, draggable Attributes Popup Window** on the left side of the screen (independent of the right-side FX library so it is never covered or closed when switching menus):
    - **🎯 Active Map Element Switcher**: Jump between any placed overlays on the map using **◀ Prev**, **Next ▶**, or the **Active Element Dropdown** (`#1`, `#2`, etc.)—ideal when multiple effects overlap.
    - **🎨 Visual Style / Variant & Layering**: Switch color/material variants, **🗺️ Cover Map (100%)**, **⬆ Bring to Front**, **⬇ Send to Back**, and **⇄ Flip X / ⇅ Flip Y**.
    - **⚡ Animation Speed, Intensity, Opacity & Entity Density**:
      - **Animation / Flow Speed (`0.1x`–`4.0x`)**
      - **Effect Intensity / Radiance (`20%`–`250%`)**
      - **Entity Quantity / Particle Density (`20%`–`400%`)** + Active Tumbleweed Count (`1`–`50`)
      - **Overlay Opacity (`10%`–`100%`)**
    - **🌈 Color Grading: Hue Shift, Saturation, Brightness & Blend Mode**:
      - **Hue Shift (`-180°` to `+180°`)** with a full-spectrum rainbow slider and 1-click tint presets (*Base 0°*, *🔥Gold*, *🧪Green*, *❄️Cyan*, *🔮Void*, *🩸Red*) to recolor any fire, river, fog, forest, or portal on the fly.
      - **Color Saturation (`0%` Monochrome to `300%` Hyper-Neon)** & **Element Brightness (`30%`–`250%`)**.
      - **Blend Mode (`Normal`, `Screen`, `Color Dodge`, `Multiply`, `Overlay`, `Hard Light`)**.
    - **🔍 Edge Blur / Sharpen & Soft Edge Feathering**:
      - **Edge Blur (`<0`) ↔ Sharpen (`>0`) (`-100` to `+100`)**: Drag left for smooth Gaussian Blur (`0.1px`–`15px` for soft mist or depth-of-field canopies) or drag right for hardware-accelerated **SVG 3×3 Laplacian Convolution Unsharp Mask** sharpening.
      - **Soft Edge Feather (`0%`–`100%`)**: Dissolves rectangular element borders smoothly into the map via a radial alpha mask.
    - **📏 Size, Stretch & 📐 3D Perspective**: Width/Height pixel inputs, non-uniform aspect stretch (`0.1x`–`10.0x`), 3D Pitch (`Tilt X`), Bank (`Tilt Y`), Rotation (`0°–360°`), and 1-click presets (`📐 Top-Down`, `🎮 Isometric`, `🏛️ Oblique`, `👁️ Billboard`).
- 🌊 **Deformable Flowing Water & Custom Pools (with Interactive Shape Handles)**:
  - **Curved River Path Mode (`spline`)**: Drag **cyan spine handles** directly on the map to bend and curve the river around terrain, drag **amber diamond handles** to widen or narrow specific riverbanks (up to 3000px wide), click **+** midpoint handles to insert new river bends, or right-click a node to remove it.
  - **Custom Pool / Lake Mode (`polygon`)**: Switch any water element to Pool Mode to mold custom-shaped lakes, flooded dungeon rooms, or oasis ponds using perimeter handles.
  - Used by `hist_river`, `mod_canal`, `sci_conduit`, and `oth_blood_river`!
- 🔊 **Integrated Environment Soundscapes Synced to the Map**: Procedural Web Audio API synthesizer that automatically layers fantasy and sci-fi environments (Tavern Chatter, Cave Echoes, Howling Wilderness, Forest Breeze, Volcanic Rumbling, Train Chases, Starship Bridge Drone, Cyberpunk City AC Hum, and Fusion Reactor Plasma Thrum).
- 🔒 **Lock Overlays**: Lock all elements when playing so physical miniatures can be placed and moved without accidentally displacing digital graphics.

### 3B. Dynamic Scenes: Real-Time Map State Morphing, 3D Parallax & Infinite Vehicle Chases (`🎬 Dynamic Scenes`)
- 🔥 **Real-Time Map State Morphing (Phased Battlemaps)**:
  - Seamlessly morph between two map states in real time using the **0%–100% Morph Slider** or **1-Click Animated Morph Transition** (*Smooth Crossfade* or *Shockwave / Radial Spread*):
    - 🍺 **Warm Tavern Taproom ↔ 🔥 Blazing Tavern Inferno (Catching Fire)**
    - 🌉 **Intact Stone Canyon Bridge ↔ 💥 Collapsed Chasm Bridge (Mid-Combat Collapse)**
    - 🏛️ **Clean Marble Ritual Sanctum ↔ 🩸 Blood-Soaked Eldritch Altar**
    - 🌲 **Sunlit Forest Glade ↔ 🌋 Scorched Hellfire Rift**
    - 📥 **Custom Uploaded State B Map**: Upload any second-state map image to morph between your current map and State B in real time.
- 🏔️ **Multi-Layer 3D Parallax Vertical Height**:
  - Separates the **Deep Background Layer** (`0.38x` camera pan speed) and **Elevated Foreground Layer** (`1.55x` camera pan speed) as the camera pans or drifts (plus an optional **Gentle Auto-Sway Camera Drift**), creating a strong sense of vertical height on **High Cliffs & Canyon Chasms**, **City Rooftops & Deep Cobblestone Streets**, **High-Altitude Skyships & Cloud Decks**, or **Giant Forest Treetop Walks**.
- 🚂 **Infinite Scrolling Backgrounds & Stationary Center Vehicles**:
  - Built for **train robberies, riverboat chases, war wagon ambushes, or skyship battles**: the vehicle (**Steam Train & Cars**, **Paddlewheel Riverboat**, **Arcane Skyship Galleon**, or **Armored War Wagon**) remains stationary in the center of the table for your physical miniatures while **Desert Canyon Railroad Tracks**, **Whitewater River Rapids**, **High-Altitude Cloud Seas**, **Winding Forest Roads**, or **your current tiled map** continuously scroll past underneath at adjustable speed and direction!

### 4. Physical Miniatures & Grid Calibration
- **Physical 1-Inch (25mm) Base Calibrator**: Place a real miniature base or physical ruler onto the projected table target box, then adjust the slider until the digital box matches your physical miniature base.
- **Grid Geometries**: Square, Hexagonal (Pointy-top), Hexagonal (Flat-top), Dot Matrix, Crosshairs, and Isometric.
- **Projector High-Visibility Styling**:
  - High-contrast colors: Arcane Cyan, High-Contrast White, Parchment Amber, Fluorescent Green, Crimson Red, Stealth Black.
  - Line styles: Solid, Dashed, Dotted, or **Projector Glow** (neon halo for textured or dark maps).
  - Thickness (1px–5px) and Opacity sliders.
- **Tile Offset Alignment**: Nudge buttons (←, →, ↑, ↓) to align grid lines with pre-drawn map artwork.
- **Tactical Coordinates**: Alphanumeric labels (A1, B2, etc.) for tactical combat callouts.

### 5. Interactive Prompt Builder & In-Tool / Popout Map Studio (Zero API Key Required)
- **📐 Output Size Intent & Aspect Ratio Presets**: Set the intended physical output mat dimensions or screen ratio with 1-click chips:
  - **`[24"x36" Mat (2:3)]`**: Standard battlemat format (`24x36 inches, 2:3 aspect ratio`).
  - **`[16:9 Widescreen]`**: Full-HD/4K standard widescreen TV & projector displays.
  - **`[4:3 Projector]`**: Traditional 4:3 conference/tabletop projector optics.
  - **`[30"x40" Large]`**: Large convention tournament battle mat.
  - **`[18"x24" Medium]`**: Compact tabletop gaming mat.
  - **`[1:1 Square]`**: Square grid combat arena.
  - **`[21:9 Ultra]`**: Ultrawide immersive cinema panoramic display.
  - Automatically injects size constraints into your assembled prompt and formats the keyless generator resolution!
- **Interactive Toggle-Based Prompt Builder**: Every clause of the master cartographer prompt (*"Masterpiece tabletop RPG battle map"*, *"ultra-high resolution 4K orthographic top-down satellite view"*, *"completely flat 2D perspective, perfectly perpendicular 90-degree camera angle"*, *"razor sharp 8K textures"*, *"raytraced ambient occlusion"*, *"cinematic lighting"*, *"clean tactical gaming surface"*, *"ungridded seamless floor, no grid lines, no hexes"*, *"no miniatures, no characters, no figures"*, *"no text labels, no watermark"*, *"trending on Artstation"*, etc.) is an interactive toggle chip that **auto-pastes** directly into the search/prompt box as you toggle it on or off.
- **In-Tool 4K Map Search**: Search thousands of ultra-HD community battlemaps (`r/battlemaps`) directly inside the tool and load or save them with one click.
- **In-Tool Keyless AI Map Generator**: Render custom top-down AI maps right inside the panel with zero API keys.
- **1-Click Pop-Out Browser Tabs**: Launch a dedicated side-by-side popout window for **Google Gemini** (using your existing Google Pro login), **Google Images (pre-filtered for Large 4K)**, **Reddit `r/battlemaps`**, or **Pinterest** with your assembled toggle prompt automatically copied to the clipboard.
- **Instant Clipboard Paste (`Ctrl+V`) & Save to Disk**: Right-click *"Copy Image"* in any popout tab and press **`Ctrl+V`** anywhere in AetherTable (or drag-and-drop across windows) to immediately project the map onto your table, and click **💾 Save Current Map** to save it to your computer.

### 6. Battle Map Media Support
- **Preset Tactical Maps**: Built-in high-res procedural vector maps (Forest Glade, Desert Oasis Dunes, Ancient Crypt Vault, Tavern Taproom, Volcanic Lava Chasm).
- **Custom Local Files**: Drag-and-drop or upload PNG, JPG, WEBP, and GIF images.
- **Animated Video Battlemaps**: Full support for looping MP4 and WebM video battlemaps (e.g. Dynamic Dungeons, Beneos).
- **Web URLs**: Paste direct image or video URLs.
- **Pan & Zoom**: Mouse wheel zoom, Space + drag pan, Middle-click pan, and 🔄 Reset Zoom.

---

## 🚀 Quick Start Guide

### Running the Utility
1. Open `index.html` in any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, or Brave).
2. Press **F11** or click the fullscreen icon for a full tabletop view.
3. Open **"📐 Keystone"** (or press **C**) to align corner pins with your table surface or battle mat.
4. In **"⊞ Grid & Minis"**, turn on **Physical Miniature Calibrator**, place a physical miniature on the table, and adjust the slider to lock in your 1-inch scale!
5. Drop realistic animated campfires, flowing water, or tumbleweeds onto the map, lock overlays, and begin your campaign.
6. Press **H** whenever you want to hide all UI menus for clean tabletop play.

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| **H** | Toggle / Hide all UI menus (Clean view for physical play) |
| **B** | Instant Blackout curtain (Stealth room transitions) |
| **C** | Toggle Keystone corner pin calibration |
| **G** | Toggle tactical grid On / Off |
| **F** | Toggle Fullscreen |
| **R** | Reset Pan & Zoom to fit screen |
| **Space + Drag** | Pan battle map |
| **Mouse Wheel** | Zoom in / Zoom out |
| **Arrow Keys** | Micro-nudge active keystone corner pin (0.2% precision) |
| **Shift + Arrow** | Large-nudge active keystone corner (5x step) |
| **Alt + Arrow** | Ultra-fine nudge active keystone corner (0.2x step) |
| **Tab** | Cycle between keystone corners (TL → TR → BR → BL) |
| **Delete / Backspace** | Delete currently selected living element / overlay |
| **Escape** | Close open floating panels and deselect active element |

---

## 📁 Project Structure

```
ttrpg-projector-battlemap/
├── index.html              # Single-screen projector battlemap utility & floating UI
├── css/
│   └── style.css           # Dark UI, keystone handles, water shape handles & prompt studio styles
├── js/
│   ├── keystone.js         # 4-corner homography solver & CSS matrix3d engine
│   ├── grid.js             # Canvas tactical grid & 1-inch miniature calibrator
│   ├── living-elements.js  # Seamless waterfalls, lava seams, canopies, sunbeams, rivers, fire, weather & synced soundscapes
│   ├── dynamic-scenes.js   # Real-time map state morphing, 3D parallax vertical height & infinite scrolling vehicle chases
│   ├── ai-generator.js     # Toggle prompt builder, in-tool 4K search & popout launchers
│   └── app.js              # Coordinator, 2.5K raster preset maps, clipboard paste & hotkeys
└── README.md               # User guide & documentation
```
