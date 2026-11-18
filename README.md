# AetherTable • TTRPG Projector Battlemap Utility

A high-performance, web-based digital battle map utility engineered specifically for **in-person tabletop roleplaying games (D&D, Pathfinder, Call of Cthulhu, Cyberpunk, etc.) played via digital tabletop projection**.

---

## 🌟 Key Features Overview

1. **🗺️ Dynamic Battle Map Navigation & Multi-Modal Panning**:
   - **✋ Interactive Map Pan Tool (`P` key)**: Drag anywhere on the map to freely pan across large dungeons, expansive wilderness, or multi-room complexes.
   - **Universal Right-Click Pan**: Right-click and drag anywhere at any time to pan without switching tools.
   - **Arrow Key Navigation**: Pan smoothly with `Arrow Keys` (or hold `Shift + Arrow` for rapid 180px navigation).
   - **Smooth Zoom & Centering**: `+` / `-` keys or on-screen buttons to zoom in and out; `R` key to instantly center and reset view.
   - **Viewport-Aware Placement**: Dropping any animated feature places it right at the center of your current panned view.

2. **📌 Realistic FX Placement: Per-Element Lock & Map Anchoring**:
   - **🔒 Individual Element Lock (`L` key)**: Anchors an effect's position, dimensions, rotation, perspective, and shape handles against accidental dragging or resizing. Locked effects become **click-through**, allowing GMs to effortlessly layer smoke on fire, fire on hearth logs, or water on terrain.
   - **🗺️ Scale & Move with Map (`mapAnchored`)**: Pins effects directly to the battle map coordinate system so they pan, drift, and zoom in lockstep with the map graphics underneath.
   - **Bulk Controls**: 1-click **🔒 Lock All**, **🔓 Unlock All**, and **📌 Pin All to Map** in the **🌿 Realistic FX** panel.

3. **🌿 160 Unique Animated Realistic FX (5 Broad Categories × 5 Sub-Categories)**:
   - **60 Universal Features** (Rain, downpour, blizzard, ground mist, fire, campfire, sunbeams, bats, tumbleweeds, deformable rivers, lakes, ponds, and swaying forests).
   - **25 per Setting** across **Historic & Fantasy**, **Modern & Pulp**, **Future & Sci-Fi**, and **Other & Eldritch** (160 total unique effects with zero duplicate placeholders).
   - **Collapsible Category Sections**: Save screen space with individual toggles or **▾ Expand All** / **▸ Collapse All**.
   - **🔍 Live Instant Search**: Filter features across all 160 overlays by keyword (*pond*, *fire*, *river*, *tentacles*, *drone*, etc.).

4. **🌊 Deformable Water, Custom Pools & Living Forests**:
   - **Curved River Spline Mode**: Drag cyan control points to bend water around terrain; drag amber diamonds to widen/narrow riverbanks up to 3000px.
   - **Custom Pond / Lake Polygon Mode**: Mold custom shorelines, flooded dungeon chambers, or oasis pools with perimeter handles.
   - **Living Forest Tool**: Fill irregular forest clearings and roadsides with swaying oak, pine, tropical palm, or deadwood canopies and falling leaves.

5. **🎛️ Dedicated Selected Element Attributes Popup Window**:
   - **Active Element Switcher**: Quickly switch between overlapping elements using `◀ Prev`, `Next ▶`, or the dropdown.
   - **Speed (`0.1x`–`4.0x`)**, **Intensity (`20%`–`250%`)**, **Quantity (`20%`–`400%`)**, and **Opacity (`10%`–`100%`)**.
   - **🌈 Color Grading & Tints**: Full-spectrum rainbow Hue Shift (`-180°` to `+180°`) with 1-click tint chips (*Base*, *🔥Gold*, *🧪Green*, *❄️Cyan*, *🔮Void*, *🩸Red*), Saturation (`0%`–`300%`), Brightness (`30%`–`250%`), and Blend Modes (`Normal`, `Screen`, `Color Dodge`, `Multiply`, `Overlay`, `Hard Light`).
   - **🔍 Edge Blur / Sharpen & Soft Feather**: Real-time 3×3 Laplacian convolution unsharp mask sharpening and smooth radial feathering.
   - **🌿 6-Octave Procedural Fractal Roughness (`0%` to `200%` Ultra-Gnarled)**: Procedural multi-octave FBM + ridged crevice cascade with tangential curl.
   - **📐 3D Perspective Tilt & Rotation**: 3D Pitch (`Tilt X`), Bank (`Tilt Y`), and 1-click presets (*Top-Down*, *Isometric*, *Oblique*, *Billboard*).

6. **↩ 16 Levels of Undo & Redo**:
   - Universal `Ctrl+Z` (Undo) and `Ctrl+Y` / `Ctrl+Shift+Z` (Redo) with live `0/16` step badges across the top nav bar, Realistic FX panel, and Element Inspector.

7. **✨ MapGen — AI Battlemap Studio & 4K Search (M&M GM Suite Architecture)**:
   - **2-Tab Studio**: Dedicated **✨ AI Map Generator** and **🔍 4K Battlemap Search** tabs.
   - **15 Encounter Inspiration Presets & Editable Scene Prompt**: Elven Sunken Temple, Dwarven Lava Forge, Forest River Crossing, Cozy Tavern Taproom, Ancient Crypt Dungeon, Desert Oasis Ruins, Haunted Graveyard, Pirate Cove & Shipwreck, Crystal Cavern, Mountain Rope Bridge, Gothic Cathedral Ruin, Cyberpunk Back-Alley, Sci-Fi Starship Bridge, Industrial Harbor Docks, and Custom.
   - **6 Art Styles & 13 Lighting/Atmosphere Presets**: Top-Down 4K Orthographic, Hand-Drawn / Czepeku, 3D Photorealistic, Grimdark Fantasy, Watercolor Wash, and Isometric 2.5D paired with 13 lighting moods (High Noon, Dawn, Dusk, Bright Daylight, Moonlit Night, Gaslamp, Neon Technicolor, Warm Torchlight, Arcane Glow, Foggy Mist, Storm/Lightning, Candlelit Ritual, and Underdark Bioluminescent).
   - **4K Target Pixel Resolution, Orientation & Aspect Fit/Crop**:
     - Landscape (`↔️`) / Portrait (`↕️`) toggle with 1-click presets (`3840 × 2160 4K UHD`, `2560 × 1440 2K QHD`, `1920 × 1080 FHD`, `4096 × 4096 4K Square`, `2048 × 2048 2K Square`, `3440 × 1440 Ultrawide`, `1920 × 1200 16:10`, `36"×24" Mat 3:2`, and custom `W × H` px).
     - **Auto-Upscale & Aspect Fit/Crop**: Automatically upscales and fits pasted or uploaded images to target 4K resolution using **Fill & Crop (`cover`)**, **Fit Entire Map (`contain`)**, or **Stretch to Fit (`fill`)**, plus an on-demand **⚡ Scale to Target** button.
   - **Floating Gemini Companion & 4K Search**: Under `✨ AI Map Generator`, click **🚀 Copy Prompt & Open Gemini (Floating Popup)** to copy your assembled Master Cartographer Prompt and launch Google Gemini in a companion popup window. Under `🔍 4K Battlemap Search`, search **Google 4K Images**, **Pinterest 4K**, **Reddit `r/battlemaps`**, or **ArtStation**. Right-click any image → **Copy Image** → press **`Ctrl+V`** in AetherTable to project and upscale to 4K automatically.
   - **4K Baked Export & Clipboard Copy**: **🖼️ Copy Image** and **💾 Download 4K** bake your target pixel resolution, Fit/Crop mode, Brightness, Contrast, Saturation, and 3×3 Convolution Sharpness directly into the exported file.

8. **📐 Keystone Homography & ⊞ Physical 1-Inch Grid Calibration**:
   - **4-Corner Homography (`matrix3d`)**: Complete perspective correction for projectors set at angles to the table surface.
   - **Touch-Friendly Pins**: 68px targets with 92px cushions and on-screen touch D-Pad for tablet/phone calibration without keyboards.
   - **Physical 1-Inch (25mm) Base Calibrator**: Calibrate the digital grid to match your physical miniature bases with a physical ruler.

10. **📖 In-Tool Readme & Manual Viewer (`F9` Key)**:
    - Press **`F9`** (or **`F2`**, or click the **📖 Readme (F9)** button) at any time to open the complete, draggable user guide directly inside the tool.

---

## ⌨️ Complete Keyboard Shortcuts Reference

| Key / Shortcut | Action | Description |
|----------------|--------|-------------|
| **F9** *(or F2)* | **Open Readme & Manual** | Opens or toggles the in-tool Readme guide and keybindings reference window |
| **P** | **Toggle Map Pan Mode** | Switches left mouse drag between element selection and free map panning |
| **D** | **Toggle Freehand Draw FX** | Sketch custom paths (rivers, fire walls) or shapes (lakes, groves) directly on map |
| **Right-Click + Drag** | **Universal Pan** | Pans the battle map smoothly in any tool mode without switching tools |
| **Space + Left Drag** | **Pan Map** | Hold Space and drag with left mouse button to pan |
| **Middle-Click + Drag** | **Pan Map** | Press mouse wheel and drag to pan the map |
| **Arrow Keys** | **Pan Map / Keystone Nudge** | Pans the map by 60px (or micro-nudges active keystone corner by 0.2% when calibrating) |
| **Shift + Arrow Keys** | **Fast Pan / Large Nudge** | Rapidly pans the map by 180px (or 5× keystone nudge) |
| **+** or **=** | **Zoom In** | Zooms the map in by +15% centered on the screen |
| **-** or **_** | **Zoom Out** | Zooms the map out by -13% centered on the screen |
| **Mouse Wheel** | **Cursor Zoom** | Zooms in or out centered directly on the mouse cursor position |
| **R** | **Center / Reset Map View** | Resets map pan to `(0,0)` and zoom to `100%` |
| **L** | **Lock / Unlock Effect** | Toggles position and size lock on the currently selected animated effect |
| **Ctrl + Z** | **Undo** | Reverts the last overlay, weather, or transform change (up to 16 levels) |
| **Ctrl + Y** / **Ctrl + Shift + Z** | **Redo** | Re-applies the last undone change (up to 16 levels) |
| **Delete** / **Backspace** | **Delete Effect** | Removes selected effect from map (ignored if effect is locked) |
| **H** | **Clean Play Mode (Hide UI)** | Hides all navigation bars, floating windows, and HUD for distraction-free play |
| **B** | **Blackout Curtain** | Instantly blackouts the screen to place miniatures or transition scenes secretly |
| **C** | **Keystone Calibration** | Toggles 4-corner perspective keystone calibration handles |
| **G** | **Tactical Grid Toggle** | Toggles physical tactical grid overlay On or Off |
| **F** | **Fullscreen** | Toggles browser fullscreen mode |
| **Tab** | **Cycle Keystone Corner** | Cycles active keystone pin (`TL` → `TR` → `BR` → `BL`) |
| **Escape** | **Close Windows & Deselect** | Closes all floating windows and deselects the active animated element |

---

## 📌 Lock, Anchoring & Panning Guide

### 1. 🔒 Locking Overlays for Multi-Layered FX
When building complex tactical scenes (such as laying smoke over fire, fire over wooden logs, and water around shores):
- Select any element and check **🔒 Lock Position & Size** in the Attributes popup (or press **`L`** on your keyboard).
- **Click-Through Layering**: Locked elements ignore drag and resize events, allowing you to freely click, drag, and adjust other effects on top of or behind them.
- **Accident-Proof**: Locked effects cannot be accidentally dragged, resized, rotated, or deleted with the `Delete` key.
- **Selecting Locked Elements**: Because clicks pass through locked elements on the canvas, select them using the **Active Map Element Switcher** (`◀ Prev` / `Next ▶` / dropdown) in the Attributes popup.
- **Bulk Controls**: Use **🔒 Lock All** and **🔓 Unlock All** in the **🌿 Realistic FX** panel to lock your entire scene for physical miniature play.

### 2. 🗺️ Scaling and Moving with the Battle Map
- **Map Space vs. Screen Space**:
  - **Scale & Move with Map (ON)**: The effect is locked to the battle map graphics. When you pan across the map or zoom in on a room, the effect stays anchored to that exact spot on the map artwork.
  - **Scale & Move with Map (OFF)**: The effect stays stationary relative to the projector display screen (ideal for fullscreen ambient weather, HUD scanners, or global downpours).
- **Default for New Effects**: New effects drop with **Scale & Move with Map** enabled by default. You can change this default via the checkbox in the **🌿 Realistic FX** panel.
- **Seamless Toggling**: Toggling an effect's anchor mode automatically converts its coordinates between screen space and map space without visual jumping.
- **1:1 Mouse Precision**: When dragging or resizing an effect while zoomed in or out, mouse handles automatically scale to track your cursor with exact 1:1 screen precision.

### 3. ✋ Map Panning & Navigation
- **Pan Mode Toggle**: Click **✋ Pan Mode** in the bottom HUD bar or in the **🌿 Realistic FX** panel (or press **`P`**). While Pan Mode is active, clicking and dragging anywhere on the canvas pans the map.
- **Right-Click Drag**: In any tool mode, right-clicking and dragging immediately pans the map.
- **Adding Effects While Panned**: When you pan over to a distant corner of a 4K battlemap, newly added features appear at the center of your current view rather than off-screen.

### 4. ✏️ Freehand Draw FX Tool (Lines, Paths & Shapes)
Instead of relying on corner handles to stretch a rectangle, sketch directly on the battlemap:
- **Activate Draw Mode**: Click **✏️ Draw (D)** in the bottom HUD bar, click **✏️ Draw Mode** in the Realistic FX panel, or press **`D`** on your keyboard.
- **Open Lines / Paths**: The chosen effect follows your freehand stroke as a curved ribbon.
  - *Rivers, Streams, Canals, Moats & Lava*: Water and magma shader currents flow smoothly along the drawn path with banks and bed textures.
  - *Walls of Fire, Laser Fences & Electric Arcs*: Hazards follow the drawn line, turning straight lines or winding curves into barriers.
  - *Treelines & Hedgerows*: Trees and bushes line the drawn path for natural borders and winding woodland roads.
- **Closed Shapes / Areas**: The chosen effect fills the enclosed area.
  - *Custom Lakes & Ponds*: Irregular lake perimeters, cavern pools, and swamp bogs fill the drawn shape with water ripples and lily pads.
  - *Forest Groves & Clearings*: Dense trees fill custom clearings around rocks, roads, and buildings.
  - *Hazard Pools & Weather Zones*: Spiderweb patches, boiling mud bogs, toxic chemical spills, and dense fog banks fill the custom shape.
- **Auto-Detect Loop**: If you sketch a loop and end near where you started (< 45px), the tool automatically closes the shape into an area. You can also explicitly lock **〰️ Line / Path** or **⭕ Closed Shape** mode.
- **Stroke Width & Ribbon Thickness**: Choose from `40px` (Thin), `90px` (Medium), `160px` (Wide), and `260px` (Massive), or use the continuous slider from 20px to 360px.
- **Re-Draw Existing Effects**: Select any placed effect on the battlemap and click **✏️ Redraw** in the Attributes popup (or press **`D`**) to re-sketch its curve or shape instantly.
- **Full Camera Synchronization & Undo**: Drawn strokes translate into map coordinates, staying anchored and scaled during pan/zoom. Every draw stroke is captured in the **16-level undo/redo** history (`Ctrl+Z` / `Ctrl+Y`).

---

## 🌿 160 Realistic Animated Features Catalog

### 🌍 Universal (60 Features — 12 per Category)
- **☁️ Weather & Ambiance**: 🌧️ Light Rain & Drizzle, ⛈️ Heavy Storm Downpour, ❄️ Gentle Snow Flurry, 🌨️ Howling Whiteout Blizzard, 🌫️ Rolling Ground Mist, 🌫️ Dense Swamp & Moor Fog, 🍂 Swirling Autumn Leaves, 🌸 Drifting Blossom Petals, ✨ Floating Sunlit Dust Motes, 🏜️ Swirling Desert Sandstorm, ✨ Woodland Evening Fireflies, 🌋 Volcanic Soot & Ash Fall.
- **⚠️ Hazards & Obstacles**: 🔥 Spreading Brush & Timber Fire, 💨 Thick Black Fire Smoke, 🌫️ Choking Gray Ash Cloud, 🫧 Sucking Swamp Mud Mire, 🏜️ Churning Desert Quicksand, 🖤 Boiling Natural Tar Pit, 🕸️ Thick Spiderweb Tangle, ⚡ Natural Ground Lightning Zone, 💨 Scalding Geyser Steam Vent, 🌋 Molten Volcanic Magma Fissure, ☠️ Noxious Swamp Gas Fumes, 🕳️ Collapsed Sinkhole Chasm.
- **💡 Light Sources**: 🔥 Campsite Log Campfire, 🔥 Roaring Great Bonfire, 🔥 Smoldering Dying Coals, ☀️ Golden Forest Sunbeams, 🌙 Silvery Midnight Moonbeams, 💎 Cavern Skylight Shafts, 🕯️ Flickering Wall/Post Torch, 🏮 Warm Oil Camp Lantern, 🕯️ Cluster of Wax Candles, 🪔 Indoor Hearth Fireplace, 🍄 Bioluminescent Cave Flora, 🌌 Natural Polar Aurora Skyglow.
- **🐾 Passive Actors**: 🦇 Flocking Cave Bats, 🦅 Circling Crows & Ravens, 🦅 Soaring Desert Vultures, 🕊️ Coastal Seagulls Flock, 🐀 Skittering Brown Rats, 🕷️ Scuttling Cave Spiders, 🦂 Desert Sand Scorpions, 🪲 Swarming Ground Beetles, 🐟 Freshwater Brook Trout, 🎏 Ornate Pond Koi Fish, 🦈 Reef Sharks & Ocean Fish, 🌾 Rolling Desert Tumbleweeds.
- **🌿 Environment**: 🌊 Flowing Stream / River (Deformable Spline), 🌊 Deep Rushing River Current (Deformable Spline), 🐊 Murky Bayou & Marsh Water (Deformable Spline), 🌋 Flowing Molten Lava River (Deformable Spline), 🌊 Roaring Cliff Waterfall, 💧 Subterranean Cavern Cascade, 🌳 Swaying Oak Forest Canopy, 🌲 Boreal Pine & Conifer Forest, 🌴 Dense Tropical Jungle Canopy, 🍁 Golden Autumn Maple Grove, 🏖️ Sandy Beach & Reef Surf, 🌊 Tempestuous Deep Ocean Waves.

### ⚔️ Historic & Fantasy (25 Features — 5 per Category)
- **☁️ Weather**: 🧚 Enchanted Feywild Pixie Dust, 🔥 Siege Battlefield Cinders, 🌫️ Ancient Crypt Floor Mist, ✨ Arcane Leyline Breeze, 🌊 Galleon Deck Sea Spray.
- **⚠️ Hazards**: 🕳️ Concealed Iron Punji Spike Pit, 🧪 Alchemical Green Greek Fire, 🔮 Wild Magic Runic Ground Ward, ☀️ Radiant Celestial Sanctuary Seal, ⚔️ Siege Pitch & Snare Trench.
- **💡 Lights**: 🕯️ Dungeon Iron Wall Sconce, 🪔 Temple Bronze Tripod Brazier, 🕯️ Great Hall Feast Chandelier, 🌈 Stained-Glass Cathedral Rays, 🔮 Wizard's Floating Magelight.
- **🐾 Passive Actors**: 🔵 Moorland Will-o'-the-Wisp, 🧚 Fluttering Feywild Sprite, 🐀 Plague Swarm of Crypt Rats, 🦅 Battlefield Carrion Ravens, 🪲 Tomb Golden Scarab Swarm.
- **🌿 Environment**: 🌀 Ancient Runic Teleport Circle, ⛲ Courtyard Marble Fountain, 🌸 Sacred Shrine Sakura Grove, 🏰 Castle Defensive Moat Channel (Deformable Spline), ⚡ Glowing Arcane Leyline Fracture.

### 🕵️ Modern & Pulp (25 Features — 5 per Category)
- **☁️ Weather**: 🌧️ Noir Alleyway Acid Downpour, 🏭 Industrial Chemical Smog Haze, 💨 Subway Grate & Manhole Steam, 🌪️ Route 66 Dust Devil Eddy, 🌨️ Urban Sidewalk Slush Flurry.
- **⚠️ Hazards**: 🚗 Gasoline Vehicle Wreck Blaze, ☠️ SWAT Riot Tear Gas Cloud, ⚡ Sparking Downed Power Line, 🛢️ Iridescent Garage Oil Slick, 🚧 Concertina Razorwire Barrier.
- **💡 Lights**: 🚁 Helicopter / Prison Searchlight, 🔦 Tactical SWAT Weapon Light, 💡 Sodium-Vapor City Streetlamp, 🚘 Twin Automotive Headlights, 🛢️ Alleyway 55-Gallon Burn Barrel.
- **🐾 Passive Actors**: 🕊️ City Plaza Pigeon Flock, 🐈 Prowling Stray Alley Cat, 🐀 Subway Track Sewer Rats, 📰 Windblown Street Newspaper, 🚨 Roving Security Guard Beacon.
- **🌿 Environment**: 🌊 Concrete Storm Drainage Canal (Deformable Spline), ⛲ Civic Park Plaza Fountain, 🌀 Rooftop HVAC Exhaust Fan, 🍸 Buzzing Dive-Bar Neon Sign, ⚓ Industrial Harbor Pier Wake.

### 🚀 Future & Sci-Fi (25 Features — 5 per Category)
- **☁️ Weather**: 🌧️ Cyberpunk Acid Neon Rain, 🚀 Relativistic Warp Starfield, ☢️ Nuclear Fallout Ash Drift, 🦠 Bioluminescent Xeno-Spores, 🤖 Self-Assembling Nanite Cloud.
- **⚠️ Hazards**: 🛡️ High-Voltage Laser Tripwire Grid, ⚡ Superheated Fusion Plasma Vent, ☢️ Mutagen Radioactive Sludge, ❄️ Sub-Zero Cryo Nitrogen Breach, 💥 Warp Core Overload Arc Vent.
- **💡 Lights**: 🪐 3D Tactical Planetary Holo-Table, 🎯 Targeting Reticle Hologram, 🔦 Security Drone Scanner Cone, 🚨 Emergency Red Alert Klaxon, ⏩ Floor LED Runway Chevron Strip.
- **🐾 Passive Actors**: 🛸 Sentry Surveillance Drone Swarm, 🤖 Cyber-Scuttler Maintenance Bots, 🧹 Autonomous Deck Scrubber Droid, 🐟 Digital Holographic Wireframe Koi, 🛰️ Deep-Space Telemetry Probe.
- **🌿 Environment**: 🛡️ Hexagonal Energy Shield Barrier, 💠 Quantum Transmat Teleporter, 🖥️ Tactical Command HUD Console, ⚙️ Factory Conveyor Belt Track, 🧪 Bio-Mutagen Coolant Conduit (Deformable Spline).

### 🐙 Other & Eldritch (25 Features — 5 per Category)
- **☁️ Weather**: 🩸 Eldritch Crimson Blood Rain, 💀 Necrotic Cemetery Specter Fog, 🌌 Cosmic Void Dimensional Tear, 🦴 Ashen Necropolis Bone Blizzard, 👻 Swirling Tormented Shadow Spirits.
- **⚠️ Hazards**: 🐙 Writhing Eldritch Void Tentacles, 🔥 Soul-Consuming Brimstone Hellfire, 🩸 Sacrificial Runic Blood Pool, ☣️ Choking Pestilence Plague Miasma, 🧪 Caustic Alchemical Ooze Mire.
- **💡 Lights**: 💀 Gothic Skull Ritual Candelabra, 💙 Pale Blue Spectral Witchfire, 💎 Floating Amethyst Soul Crystal, ⚙️ Victorian Steampunk Gaslamp, 🌕 Blood Moon Volumetric Shafts.
- **🐾 Passive Actors**: 👻 Floating Victorian Phantom Lady, 👁️ Wandering Eldritch All-Seeing Eye, 🕷️ Swarming Abyssal Shadow Spiders, 🐟 Deep-One Bioluminescent Anglers, 🦋 Death's-Head Crypt Lunar Moths.
- **🌿 Environment**: 🩸 Flowing Sanguine River of Blood (Deformable Spline), ⛲ Vampiric Sanguine Stone Fountain, 🌲 Twisted Haunted Deadwood Thicket, 🍄 Alien Myconid Spore-Cap Grove, 🌀 Shattered Reality Void Rift.

---

## 🎛️ Element Inspector & Visual Tuning

### Procedural 6-Octave Fractal Geometry Engine
All organic shapes (forest canopies, deciduous trees, pine whorls, palm fronds, tumbleweeds, and deformable shorelines) are driven by a procedural 6-octave harmonic modulation algorithm:
- **Fractal Roughness Slider (`0%` to `200%` Ultra-Gnarled)**:
  - `0%`: Perfectly smooth geometric circles and curves.
  - `75%` *(Default)*: Natural botanical tree silhouettes and organic riverbanks.
  - `150%`–`200%`: Craggy, deeply notched, gnarled ancient trees, skeletal briars, and jagged coves.
- **Internal Entity Scale (`0.25x` to `3.0x`)**: Adjusts the size of internal components (leaves, twigs, needles, fish, tumbleweed barbs) independent of the bounding box size.

### Color Grading, Blend Modes & Filters
- **Full-Spectrum Hue Shift**: Rotate hues `-180°` to `+180°` or choose 1-click presets (*Gold*, *Fel Green*, *Arcane Cyan*, *Void Purple*, *Crimson Blood*).
- **Color Saturation (`0%` to `300%`)** & **Brightness (`30%` to `250%`)**.
- **Blend Modes**: `Normal`, `Screen` (luminescent fire and magic), `Color Dodge` (blinding lightning and portals), `Multiply` (chasm shadows and blood stains), `Overlay`, and `Hard Light`.
- **Edge Blur / Sharpen**: Smooth Gaussian edge softening (`-100` to `0`) or razor-sharp SVG 3×3 convolution filter (`0` to `+100`).
- **Soft Edge Feathering (`0%` to `100%`)**: Blends outer element boundaries smoothly into the battle map.

---

## 🚀 Quick Start Guide

1. Open `index.html` in your web browser (Chrome, Edge, Firefox, or Brave).
2. Press **`F`** or **`F11`** for fullscreen projection mode.
3. Open **"📐 Keystone"** (or press **`C`**) to align the 4 corner pins with your table surface.
4. Open **"⊞ Grid & Minis"**, enable **Physical Miniature Calibrator**, place a miniature base on the table, and adjust the slider to lock in 1 inch = 25mm scale.
5. In **"📁 Maps"**, load a preset, drop a custom file, or enter an online URL.
6. Press **`P`** or hold **Right-Click Drag** to pan to the desired encounter area.
7. Open **"🌿 Realistic FX"**, drop animated campfires, rivers, or mist, adjust attributes in the inspector, and press **`L`** to lock them in place.
8. Press **`F9`** anytime to view this manual, or **`H`** to hide all UI menus for clean tabletop play!

---

## 📁 Project Structure

```
ttrpg-projector-battlemap/
├── index.html              # Main single-screen projector battlemap utility & floating UI
├── css/
│   └── style.css           # Dark theme, keystone handles, river handles, inspector & HUD styles
├── js/
│   ├── keystone.js         # 4-corner perspective homography solver & CSS matrix3d engine
│   ├── grid.js             # Canvas tactical grid & 1-inch miniature calibrator
│   ├── living-elements.js  # 160 realistic features, fractal geometry engine & synced audio
│   ├── dynamic-scenes.js   # Map state morphing, 3D parallax height & infinite vehicle chases
│   ├── ai-generator.js     # Toggle prompt builder, in-tool 4K map search & popout tabs
│   └── app.js              # Application coordinator, panning engine, hotkeys & presets
└── README.md               # User guide & documentation
```
