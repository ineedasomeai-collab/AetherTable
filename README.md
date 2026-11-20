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

3. **🌿 375 Deduplicated Master Animated VTT Elements (5 Distinct Genres × 3 Physical Geometries)**:
   - **100% Dedicated Procedural Canvas Renderers (Zero Generic Color-Shifted Fallbacks)**: Every single one of the 375 elements across all 5 genres possesses its own dedicated procedural renderer module (`js/fx/` architecture) with unique physical geometry silhouettes, distinct kinetic motion patterns, and multi-octave fractal noise detail:
     - **⚡ Cyberpunk & Dystopian Sci-Fi (75, `js/fx/fx-cyberpunk.js`)**: High-speed maglev subways, flying car headlight sweeps, netrunner code streams, sewer solvent vats, holographic billboards, ripperdoc chairs, and pivoting CCTV cameras.
     - **🤠 Weird West & Frontier (75, `js/fx/fx-frontier.js`)**: Steam locomotive beams, arroyo flash floods, Gatling gun tracer fire, spinning dust devils, ghost-rock craters, tumbleweeds, and batwing saloon doors.
     - **🚀 Deep Space & Hard Sci-Fi (75, `js/fx/fx-space.js`)**: FTL star-streak warps, reactor coolant arcs, tracked repair drones, Cherenkov core glows, alien hive biomass, and 3D planetary holo-globes.
     - **👁️ Cosmic Horror, Noir & Occult Modern (75, `js/fx/fx-horror.js`)**: Fog lighthouse beams, crawling shadow tendrils, weeping basalt idols, vintage subways, venetian blind office shadows, and flickering London gaslamps.
     - **⚔️ High Fantasy & Sword-and-Sorcery (75, `js/fx/fx-fantasy.js`)**: Magic missile corkscrews, dragon-fire scorch waves, underground cavern rivers, cathedral god rays, bubbling witch cauldrons, and animated mimic chests.
   - **✨ 100% Transparent Non-Focal Backdrop Architecture (Zero Opaque Bounding Boxes)**:
     - Comprehensive codebase audit removing artificial background rectangles, fake wooden/stone floor fills, and opaque bounding boxes across all 375 effects (`js/fx/*.js` and `js/living-elements.js`).
     - Only the active focal animated elements (light cones, illuminated beams, vehicles, tracks, runes, hazard fluids, props, and kinetic particles) are rendered.
     - All "not important bits" are 100% transparent, enabling natural multi-layer stacking (e.g., placing campfires, smoke, rain, and headlights directly on top of battlemaps without obscuring the underlying map artwork).
   - **3 Physical Geometry Modes (125 Elements Each)**:
     - **〰️ Drawn Lines & Paths (125)**: Directional traveling paths and continuous ribbons that follow your stroke (headlight beams, flash floods, mining lasers, laser grids, conduits, and rivers).
     - **⭕ Filled Areas & Volumes (125)**: Custom enclosed perimeters and atmospheric textures (neon reflections, wheat fields, alien spore clouds, hoarfrost decks, and astral voids).
     - **🎯 Single Props & Focal Objects (125)**: Standalone point placements (broken neon signs, campfires, repair droids, bleeding daggers, and floating spellbooks).
   - **5 Subcategories per Geometry & Genre (25 Each per Section, 75 Total per Category)**:
     - **💡 Lighting & Optical Beams**: Beams, lanterns, glowing conduits, neon signs, and god rays.
     - **⚠️ Hazards, Traps & Active Barriers**: Flash floods, laser grids, acid pools, spike pits, and mimic chests.
     - **⚙️ Props, Machinery & Conveyance**: Locomotives, subway cars, conveyor tracks, windmills, and cauldrons.
     - **✨ Special Effects, Magic & Phenomena**: Shockwaves, wormholes, psychic madness ripples, and summoning circles.
     - **🌫️ Ambiance, Weather & Atmosphere**: Dust storms, coastal fog, falling soot, and wildlife colonies.
   - **Genre Quick-Filter Bar & Live Keyword Search**: Instant 1-click genre chips (`🌐 All 375`, `⚡ Cyber 75`, `🤠 West 75`, `🚀 Space 75`, `👁️ Horror 75`, `⚔️ Fantasy 75`) paired with sub-millisecond search that filters across titles, descriptions, and tags while dynamically updating tab count badges.
   - **Soundscape Cleanout**: Clutter-free tabletop audio — removed redundant synthesized in-browser audio so GMs can run their preferred sound setups (Spotify, Syrinscape, Discord, or Bluetooth speakers) without in-browser audio clutter.

4. **🌊 Deformable Waterways, Custom Pools, Living Forests & Complete Procedural Geometry Overhaul (Zero Sameness)**:
   - **True Procedural Structural Differentiation Across All Variants (No Fake Color Swaps)**:
     - Every single variant across base elements now features 100% distinct procedural geometry, physical foundation structures, custom particle silhouettes, and unique kinetic behaviors:
     - **Campfire & Torch**:
       - *Wildfire*: Natural cobblestone hearth with 12 rounded fieldstones, radial split-timber logs with dark charred bark, and soft flame lobes.
       - *Hellfire*: Brimstone altar with 8 sharp inward-pointing obsidian fang teeth, cracked basalt plates with molten magma fissures, and triangular erupting flame spires with exploding cinder shards.
       - *Alchemical*: Transmutation floor mandala etched in emerald runes, wrought-iron 3-legged tripod with brass collars, central boiling glass alembic vessel, and serpentine flame ribbons with popping froth bubbles.
       - *Arcane Fire*: Dual rotating runic summon rings, 6 floating levitating mana crystal shards bobbing in a hexagonal orbit, and needle/diamond flame spires with celestial stardust.
       - *Burn Barrel / Industrial*: 55-gallon corrugated steel drum with crimped lip, 6 punched side air vents shooting flue flame jets, charred scrap/rebar bed, and billowing petroleum soot.
     - **Volumetric Smoke & Atmospheric Gases**:
       - *Black Carbon Soot*: Glowing coal firebed with rolling turbulent dark cumulus puffs and rising fiery cinders.
       - *Stratified Ash Fog*: Low-contrast horizontal drifting haze layers with settling flat gray ash flakes and soft obscuration.
       - *Marsh Poison Gas*: Sucking mud mire with 4 bubbling mud vents popping caustic green gas rings and creeping ground tendrils.
       - *Caustic Acid Fumes*: Dissolving limestone floor craters with sizzling foam edges, corrosive spiraling vapor wisps, and micro-droplets.
       - *Fungal Spore Miasma*: 5 rooted, fleshy bulbous fungal toadstool caps that pulse and expel rings of glowing bioluminescent spores.
       - *Abyssal Void Miasma*: Dark matter reality void tear with reaching shadow claws and swarming necrotic void motes.
     - **Viscous Ground Hazards & Bogs**:
       - *Mud Bog*: Viscous brown mire with organic mud clods, slow suction ripples, and bursting thick mud domes.
       - *Tar Pit*: Inky black pitch pool with iridescent petroleum rainbow sheen ribbons, embedded prehistoric animal skull & bone flotsam, and stretching elastic sticky tar strings.
       - *Quicksand*: Deep central sinkhole with Archimedean sand spiral ridges churning inward and cascading granular sand motes.
       - *Acid Sludge*: Caustic glowing emerald ooze with chemical erosion banks, sizzling foam rings, and popping acidic blisters.
       - *Sticky Webs*: 16 radial tensile anchor silk lines, 5 concentric catenary spiral silk rings, vibrating cocooned trapped prey silhouette, and glistening morning dew glints.
     - **Sparks & Arcane Electrical Hazards**:
       - *Forked Lightning*: Violent branching electrical fork arcs with acute angles, rapid snap nodes, and electric plasma sparks.
       - *Arcane Surge*: Concentric rotating mathematical rune circles with inscribed 7-pointed heptagram sigils and orbiting 3D faceted mana polyhedra (diamonds, cubes, octahedra).
       - *Necrotic Rift*: Jagged vertical reality fracture seam with weeping dark matter tendrils, reaching skeletal shadow claws, and a pulsing crimson singularity core.
       - *Sanctified Sunburst*: Sacred geometry 12-ray triangular sunburst ground mandala with 3 concentric interlocking holy rings and floating golden stardust cross-flares.
     - **Living Tree Canopies**:
       - *Summer Oak*: Multi-lobed rounded deciduous cloud-like leaf clusters arranged in natural organic tiers with dappled sunlight.
       - *Autumn Maple*: 5-pointed serrated star-leaf clusters rendered in rich golden crimson and burnt amber with fluttering star flakes.
       - *Conifer Pine Crown*: Multi-tiered concentric star-burst needle whorls with stiff evergreen boughs and central pinecones.
       - *Tropical Palm*: 9 radiating arching curved palm fronds with dozens of paired feather leaflets branching from a central coconut cluster hub.
       - *Weeping Deadwood*: Zero leaves! Gnarled, bare skeletal wooden boughs with 18 hanging, drooping weeping vine cords swaying heavily on the breeze.
     - **Waterfalls & Cataracts**:
       - *Alpine Cataract*: Natural granite rock shelf with weathered boulders, accelerating river lanes, and foaming plunge pool.
       - *Crystal Cavern Veil*: Subterranean cascade dropping between hanging crystalline stalactites into an emerald-cyan bioluminescent crystal basin.
       - *Timber Sluice Weir*: Heavy timber sluice weir with vertical wooden pilings, horizontal crossbeam sills, and rectangular spillway bays.
       - *Molten Magma Cataract*: Basalt cliff lips with floating dark cooling slag crust chunks and exploding volcanic flare bursts.
     - **Pulsing Lava Seams & Bedrock Fractures**:
       - *Basalt Magma Trench*: Jagged cooling crust plates drifting over roaring yellow-orange magma channels with traveling molten surges.
       - *Obsidian Brimstone Chasm*: 10 razor-sharp obsidian spikes flanking a deep sulfurous chasm with rising demonic cinder shards.
       - *Leyline Mana Fracture*: Pure geometric crystal bedrock fracture with floating levitating mana prisms.
       - *Vitriol Erosion Fault*: Dissolving limestone trench where boiling emerald vitriol eats into the stone banks with sizzling foam bubbles.
   - **Curved River Spline Mode**: Drag cyan control points to bend water around terrain; drag amber diamonds to widen/narrow riverbanks up to 3000px.
   - **8 Bespoke Procedural Waterway Physics Engines**: Completely eliminated generic color-shifted waterways:
     - `🩸 River of Blood`: Visceral dark maroon arterial flow, congealed dried liver-crust shores, rotating dark blood clots with specular glints, frothy crimson bubbles, branching capillary tendrils, and bobbing bleached human skulls & rib bones drifting downstream.
     - `🌋 Molten Lava River`: Scorched basalt banks with glowing orange thermal stress cracks, multi-pass incandescent yellow-white magma core, drifting dark polygonal cooling crust plates that collide and fracture, and bursting magma domes throwing flying cinder sparks.
     - `🌊 Whitewater River Rapids`: Deep teal-slate glacial torrent with partially submerged wet granite boulders, violent V-shaped standing wave rooster tails, and foaming cavitation eddies.
     - `🐊 Murky Bayou Swamp Water`: Sluggish olive-brown peat water with shimmering iridescent oil sheens, rotting sunken cypress knees, and swelling methane marsh gas bubbles.
     - `🌊 Concrete Storm-Drain Canal`: Stepped concrete retaining walls with expansion joints and weep holes, rapid urban runoff stormwater with diamond standing wave shockwaves, and floating flotsam.
     - `🧪 Reactor Coolant Conduit`: Armored gunmetal conduit casing with yellow/black hazard chevrons and bulkhead clamps, luminescent Cherenkov/emerald plasma fluid, cavitation shockwave rings, and crackling ionization electrical arcs.
     - `🏰 Castle Moat`: Stagnant muddy water with double-staggered rows of sharpened wooden palisade stakes with chisel tips driven into inner and outer embankments.
     - `🌲 Alpine Forest Stream`: Crystal-clear babbling mountain brook over smooth multi-colored river gravel pebbles with cellular sunlit caustics and floating autumn leaves.
   - **Custom Pond / Lake Polygon Mode**: Mold custom shorelines, flooded dungeon chambers, or oasis pools with perimeter handles:
     - `🩸 Ritual Blood Pool`: Congealed gore rim, glowing carved sacrificial pentagram & occult runes burning beneath the gore, drifting dark clots, and floating bleached skulls.
     - `💎 Crystal Cavern Pool`: Subterranean sapphire pool with ceiling stalactite water drop impacts creating concentric expanding interference wave rings, and submerged glowing quartz crystal geodes emitting prismatic caustic flares.
     - `💧 Woodland Lily Pond`: Clear emerald-tinted water with sunlit caustics, 3D notched green lily pads with radial leaf veins, drop shadows, and blooming 6-petal pink, white & gold lotus flowers.
     - `🏝️ Ocean Surf`: Translucent turquoise ocean shallows, submerged coral reef silhouettes, rolling white foam surf breakers, and receding backwash swash lines.
   - **Living Forest Tool**: Fill irregular forest clearings and roadsides with swaying oak, pine, tropical palm, or deadwood canopies and falling leaves.

5. **🎛️ Dedicated Selected Element Attributes Popup Window**:
   - **Active Element Switcher**: Quickly switch between overlapping elements using `◀ Prev`, `Next ▶`, or the dropdown.
   - **Speed (`0.1x`–`4.0x`)**, **Intensity (`20%`–`250%`)**, **Quantity (`20%`–`400%`)**, and **Opacity (`10%`–`100%`)**.
   - **🌈 Color Grading & Tints**: Full-spectrum rainbow Hue Shift (`-180°` to `+180°`) with 1-click tint chips (*Base*, *🔥Gold*, *🧪Green*, *❄️Cyan*, *🔮Void*, *🩸Red*), Saturation (`0%`–`300%`), Brightness (`30%`–`250%`), and Blend Modes (`Normal`, `Screen`, `Color Dodge`, `Multiply`, `Overlay`, `Hard Light`).
   - **🔍 Edge Blur / Sharpen & Soft Feather**: Real-time 3×3 Laplacian convolution unsharp mask sharpening and smooth radial feathering.
   - **🌿 6-Octave Procedural Fractal Roughness Engine (`0%` Smooth to `200%` Ultra-Gnarled)**: True multi-octave FBM + ridged crevice cascade that actively drives all spline ribbons (rivers, canals, conduits), polygon areas (lakes, pools, groves), and procedural bogs — as well as volumetric smoke, toxic gas clouds, industrial smog, and spreading wildfire boundaries! At `0%`, shapes and billows are mathematically smooth and laminar; at `75%` (default), shorelines develop natural rocky erosion, smoke puffs billow with organic cauliflower lobes, and flame perimeters develop natural licking tongues; at `150%`–`200%`, waterways become deeply gouged canyon gorges, and smoke/fumes become fiercely shredded, chaotic storm billows with violent vortex curls.
   - **📐 3D Perspective Tilt & Rotation**: 3D Pitch (`Tilt X`), Bank (`Tilt Y`), and 1-click presets (*Top-Down*, *Isometric*, *Oblique*, *Billboard*).

6. **↩ 16 Levels of Undo & Redo**:
   - Universal `Ctrl+Z` (Undo) and `Ctrl+Y` / `Ctrl+Shift+Z` (Redo) with live `0/16` step badges across the top nav bar, Realistic FX panel, and Element Inspector.

7. **✨ MapGen — AI Battlemap Studio (Bespoke Gemini Workflow)**:
   - **Bespoke Encounter Scene**: Dedicated, roomy scene description area designed for rapid typing directly at the game table — no canned preset dropdowns.
   - **6 Art Styles & Pruned Lighting Atmosphere**: Top-Down 4K Orthographic, Hand-Drawn / Czepeku, 3D Photorealistic, Grimdark Fantasy, Watercolor Wash, and Isometric 2.5D paired with non-redundant lighting moods (Bright Daylight, Dawn, Dusk, Moonlit Night, Warm Torchlight, Gaslamp / Lantern, Neon Technicolor, Arcane Glow, Foggy Mist, Storm & Lightning, Candlelit Ritual, and Underdark Bioluminescent).
   - **4K Target Pixel Resolution, Orientation & Aspect Fit/Crop**:
     - Landscape (`↔️`) / Portrait (`↕️`) toggle with 1-click presets (`3840 × 2160 4K UHD`, `2560 × 1440 2K QHD`, `1920 × 1080 FHD`, `4096 × 4096 4K Square`, `2048 × 2048 2K Square`, `3440 × 1440 Ultrawide`, `1920 × 1200 16:10`, `36"×24" Mat 3:2`, and custom `W × H` px).
     - **Auto-Upscale & Aspect Fit/Crop**: Automatically upscales and fits pasted or uploaded images to target 4K resolution using **Fill & Crop (`cover`)**, **Fit Entire Map (`contain`)**, or **Stretch to Fit (`fill`)**, plus an on-demand **⚡ Scale to Target** button.
   - **Floating Gemini Companion (One-Click Launch)**: Click **🚀 Copy Prompt & Open Gemini (Floating Popup)** to copy your assembled Master Cartographer Prompt and open Google Gemini side-by-side with your battlemap. Press `Ctrl+V` in Gemini, generate your map, right-click &rarr; **"Copy Image"** &rarr; press **`Ctrl+V`** right in AetherTable to instantly project and upscale to 4K!
   - **Quick Import, Paste & 4K Baked Export**: Direct image URL loader, 1-click clipboard paste (`Ctrl+V`), local file upload, **🖼️ Copy Image**, and **💾 Download 4K** with image adjustments baked in.
   - **Session Map History with Clear Button**: Quick thumbnails reel of all session maps with an instant **🗑️ Clear History** button to wipe unwanted maps.

8. **📐 Keystone Homography (Projector Calibration)**:
   - **4-Corner Homography (`matrix3d`)**: Complete projective perspective correction allowing projectors mounted at arbitrary tilt or angle to project a perfectly square, undistorted image onto the table.
   - **Touch-Friendly Pins**: Large 68px targets with 92px outer grab zones and on-screen touch D-Pad for tablet or mobile calibration without keyboards.
   - **Fine Keyboard Nudge**: Use `Tab` to cycle corner pins (`TL` → `TR` → `BR` → `BL`) and arrow keys to micro-nudge corners by `0.2%` (or `Shift + Arrow` for `1.0%`).
   - **Persistent Profiles**: Save and load keystone presets for different projection venues and table setups.

9. **⊞ Physical 1-Inch (25mm) Miniature Grid Calibration**:
   - **Physical Ruler Matching**: Place a standard 1-inch physical miniature base or ruler onto the table projection and adjust the slider to match grid squares to real-world dimensions.
   - **Multiple Grid Formats**: Square grid, Flat-Top Hex, Pointy-Top Hex, and Isometric grid overlays with customizable line weight, opacity, and color.
   - **Fine Sub-Pixel Offsets**: Align grid lines with imported map graphics using sub-pixel X and Y translation controls.

10. **🖥️ Display Optics Engine (Brightness, Contrast, Sharpness & Gamma)**:
    - **Optical Compensation**: Dedicated visual post-processing engine to compensate for ambient room light, low-lumen projectors, or textured tabletop surfaces.
    - **Brightness (`50%`–`200%`) & Contrast (`50%`–`250%`)**: Cut through bright room lighting with enhanced shadow/highlight punch.
    - **Edge Sharpness Unsharp Mask**: Real-time SVG 3×3 convolution kernel sharpening to restore crisp details through soft projector optics.
    - **Color Saturation (`0%`–`250%`) & Gamma**: Adjust color vibrancy and midtone contrast for matte or semi-gloss table surfaces.

11. **📖 In-Tool Readme & Manual Viewer (`F9` Key)**:
    - Press **`F9`** (or **`F2`**, or click the **📖 Readme (F9)** button) at any time to open the complete, draggable user guide directly inside the tool.

---

## ⌨️ Complete Keyboard Shortcuts Reference

| Key / Shortcut | Action | Description |
|----------------|--------|-------------|
| **1** | **Maps & Studio** | Opens / closes the Map Finder, 4K Upscale & AI Map Studio panel |
| **2** | **Realistic FX** | Opens / closes the 375 Realistic FX & Living Overlays library |
| **3** | **Tactical Grid** | Opens / closes the Grid & 1-Inch Physical Miniature Calibrator |
| **4** | **Keystone** | Opens / closes the 4-Corner Projector Keystone Homography panel |
| **5** | **Display Optics** | Opens / closes the Display Brightness, Contrast & Sharpness panel |
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

## 🌿 375 Deduplicated Master Animated VTT Elements Catalog

Every single entry across all **375 items** has its own bespoke object, physical motion, and visual identity — with **zero concept duplication** across genres or subcategories.

### 🌐 Structural Symmetry of the Catalog
- **5 Genres (75 Elements Each)**: Cyberpunk &amp; Dystopian Sci-Fi, Weird West &amp; Frontier, Deep Space &amp; Hard Sci-Fi, Cosmic Horror &amp; Occult Modern, High Fantasy &amp; Sword-and-Sorcery.
- **3 Physical Geometry Modes (125 Elements Each / 25 per Genre)**:
  - **〰️ Drawn Lines &amp; Paths (125)**: Continuous directional traveling paths and ribbons that follow strokes and splines.
  - **⭕ Filled Areas &amp; Textures (125)**: Custom enclosed perimeters, deformable polygons, and atmospheric area-fills.
  - **🎯 Single Props &amp; Spot Objects (125)**: Standalone point placements, focal objects, and localized hazards.
- **5 Subcategories per Geometry (25 Elements per Category per Section = 75 Total per Category)**:
  - **💡 Lighting &amp; Optical Beams (75)**
  - **⚠️ Hazards, Traps &amp; Active Barriers (75)**
  - **⚙️ Props, Machinery &amp; Conveyance (75)**
  - **✨ Special Effects, Magic &amp; Phenomena (75)**
  - **🌫️ Ambiance, Weather &amp; Atmosphere (75)**

---

### ⚡ 1. Cyberpunk & Dystopian Sci-Fi (75 Elements, #1–75)
- **A. Linear Motion (Drawn Paths #1–25)**:
  - *Lighting*: Flying car headlight beams (#1), Police spinner lightbars (#2), Fiber-optic data conduits (#3), Patrol drone searchlights (#4), Elevated monorail window blur (#5).
  - *Hazards*: Red security laser grids (#6), High-speed maglev subway trains (#7), Chemical runoff culverts (#8), Scrap metal smelter conveyors (#9), Armed perimeter patrol drones (#10).
  - *Props*: Pneumatic message canisters (#11), Warehouse delivery bots (#12), Mega-mall escalators (#13), Overhead gantry welders (#14), Spaceport baggage carousels (#15).
  - *Special Effects*: Smart-gun railgun tracers (#16), Expanding EMP shockwave rings (#17), Holographic riot-control barriers (#18), Netrunner ice-breaker code streams (#19), Acid skylight rain rivulets (#20).
  - *Ambiance*: Multi-tier sky-traffic lanes (#21), Windblown gutter flyers (#22), Ruptured alley steam pipes (#23), Platform cyber-rats (#24), High-rise smog banks (#25).
- **B. Animated Textures (Filled Areas #26–50)**:
  - *Lighting*: Neon oily puddle refractions (#26), Biotech algae vat glow (#27), Nightclub strobe grids (#28), Server-rack LED matrices (#29), Slatted mega-vent sunlight rays (#30).
  - *Hazards*: Electrified metal decking (#31), Corrosive solvent vats (#32), Storm-drain sewage churn (#33), Radioactive sludge pools (#34), Smoldering foundry slag heaps (#35).
  - *Props*: CRT telemetry monitor banks (#36), Hydroponic crop misting beds (#37), Sparking e-waste piles (#38), Server coolant sub-flooring (#39), Mag-crane shipping container yards (#40).
  - *Special Effects*: Cyberspace glitch grids (#41), Hex hangar energy shields (#42), Riot tear-gas banks (#43), Thermal heat-map distortion (#44), Nanobot deck sand swarms (#45).
  - *Ambiance*: Diagonal acid rain with splash rings (#46), Dense subway grate street vapor (#47), Burned slum soot fall (#48), Windy plaza trash eddies (#49), Overhead sky-traffic shadows (#50).
- **C. Single Elements (Focal Props #51–75)**:
  - *Lighting*: Broken neon storefront signs (#51), Holographic corporate billboards (#52), Bent sputtering streetlamps (#53), Homeless camp fire barrels (#54), Rotary warning beacons (#55).
  - *Hazards*: Thrashing severed power cables (#56), Automated ceiling turrets (#57), Vault laser tripwires (#58), Overheating plasma cores (#59), Industrial exhaust fans (#60).
  - *Props*: 3D holographic city maps (#61), Hacked matrix terminals (#62), Street noodle stall steam (#63), Fluorescent vending machines (#64), Ripperdoc surgical chairs (#65).
  - *Special Effects*: Cyberspace avatar spawn pads (#66), Sonic riot suppressors (#67), Holographic decoy projections (#68), Armed EMP grenades (#69), Cryo-stasis unsealing pods (#70).
  - *Ambiance*: Pivoting CCTV cameras (#71), Fire-escape cyber-cats (#72), Bobbing neon umbrellas (#73), Dripping window AC units (#74), Chroma-shift digital graffiti (#75).

---

### 🤠 2. Weird West & Frontier (75 Elements, #76–150)
- **A. Linear Motion (Drawn Paths #76–100)**:
  - *Lighting*: Steam locomotive headlamp beams (#76), Stagecoach lanterns (#77), Racing kerosene trails (#78), Canyon floor sunbeams (#79), Railroad ghost-lights (#80).
  - *Hazards*: Arroyo flash floods (#81), Runaway ore carts (#82), Stampeding longhorns (#83), Flaming tumbleweeds (#84), Gatling gun tracer fire (#85).
  - *Props*: Stagecoach dust trails (#86), Iron horse steam locomotives (#87), Gold-panning sluice boxes (#88), Riverboat paddlewheels (#89), Telegraph ticker paper feeds (#90).
  - *Special Effects*: Burning dynamite fuses (#91), Phantom ghost-trains (#92), Spinning desert dust devils (#93), Lead bullet ricochets (#94), Haboob sandstorm walls (#95).
  - *Ambiance*: Rolling tumbleweeds (#96), Clear canyon rivers (#97), Circling turkey vultures (#98), Slithering rattlesnakes (#99), Boardwalk desert grit (#100).
- **B. Animated Textures (Filled Areas #101–125)**:
  - *Lighting*: Dappled cottonwood sunlight (#101), Boot-hill green moonlight (#102), Saloon puddle window light (#103), Salt flat heat shimmer (#104), Prairie sheet lightning (#105).
  - *Hazards*: Canyon quicksand pits (#106), Crude oil gushers (#107), Prairie brushfires (#108), Whitewater canyon rapids (#109), Ghost-town cursed ichor (#110).
  - *Props*: Swaying golden wheat fields (#111), Rippling buffalo grass (#112), Swaying rope bridges (#113), Groaning mine shaft timbers (#114), Churned mud corrals (#115).
  - *Special Effects*: Ghost-rock radiation (#116), Black-powder gunsmoke haze (#117), Locust swarm blankets (#118), Shifting desert dunes (#119), Battlefield blood mist (#120).
  - *Ambiance*: Mesa desert winds (#121), Shallow pebble creeks (#122), Heavy prairie rain & muddy ruts (#123), Rocky Mountain snowfalls (#124), Train depot autumn leaves (#125).
- **C. Single Elements (Focal Props #126–150)**:
  - *Lighting*: Trail campfires & coffee pots (#126), Swinging porch lanterns (#127), Blacksmith forge coals (#128), Wagon-wheel chandeliers (#129), Railroad crossing signals (#130).
  - *Hazards*: Fizzing dynamite bundles (#131), Coiled timber rattlesnakes (#132), Steel bear traps (#133), Boiler pressure valves (#134), Gallows trapdoors (#135).
  - *Props*: Batwing saloon doors (#136), Windmill water pumps (#137), Oil derrick rocker arms (#138), Ghost player pianos (#139), Swaying hangman nooses (#140).
  - *Special Effects*: Unstable ghost-rock ore (#141), Cursed self-shuffling poker decks (#142), Medium's crystal balls (#143), Spinning Gatling barrels (#144), Geothermal hot geysers (#145).
  - *Ambiance*: Fluttering wanted posters (#146), Hitching-post mustangs (#147), Spit-roast campfire rabbits (#148), Banging ghost-town shutters (#149), Boot-hill ravens (#150).

---

### 🚀 3. Deep Space & Hard Sci-Fi (75 Elements, #151–225)
- **A. Linear Motion (Drawn Paths #151–175)**:
  - *Lighting*: FTL star-streak warps (#151), Docking runway approach lights (#152), Solar flare radiation waves (#153), Tactical sensor sweeps (#154), Evacuation light chevrons (#155).
  - *Hazards*: Decompression hull breach winds (#156), Superheated plasma conduit arcs (#157), Micrometeoroid showers (#158), Slamming hydraulic bulkheads (#159), Mining lasers (#160).
  - *Props*: Fuel rod cargo rails (#161), Tracked welding drones (#162), Anti-gravity lift shafts (#163), Orbital space elevators (#164), Steel docking clamps (#165).
  - *Special Effects*: Blue ion thruster plumes (#166), Holographic sonar pings (#167), Matter transporter beams (#168), Containment forcefield ripples (#169), Liquid nitrogen coolant vents (#170).
  - *Ambiance*: Tumbling asteroid fields (#171), Derelict satellite debris (#172), Zero-G water droplets (#173), Cosmic nebula clouds (#174), Planetary ice rings (#175).
- **B. Animated Textures (Filled Areas #176–200)**:
  - *Lighting*: Cherenkov core radiation (#176), Red-alert klaxon strobes (#177), Bioluminescent xenomoss (#178), Deep-space starfields (#179), Quantum processor floors (#180).
  - *Hazards*: Radioactive coolant floods (#181), Alien hive biomass (#182), Sub-zero frost decking (#183), Ion storm deck arcs (#184), Acid xenospore quarantine clouds (#185).
  - *Props*: Hydroponic garden misting (#186), Cryo-sleep honeycomb walls (#187), Drone charging floors (#188), Ore crusher conveyors (#189), Sub-bridge gyroscope bays (#190).
  - *Special Effects*: Hyperspace wormhole tunnels (#191), Gravitational singularity lenses (#192), Lunar outpost shield domes (#193), Tactical holo star-charts (#194), Zero-G floating debris fields (#195).
  - *Ambiance*: Air-scrubber sterile mist (#196), Rotating comms dish shadows (#197), Exoplanet jungle spores (#198), Zero-G aquatic xenobiology tanks (#199), Engine manifold heat shimmer (#200).
- **C. Single Elements (Focal Props #201–225)**:
  - *Lighting*: Fusion reactor plasma cores (#201), Dangling flickering LED panels (#202), Magnesium distress flares (#203), Holographic quarantine icons (#204), Specimen alien jellyfish (#205).
  - *Hazards*: Ruptured liquid oxygen sprays (#206), Malfunctioning surgical arms (#207), Pulsing alien egg sacs (#208), High-voltage plasma capacitors (#209), Airlock override switches (#210).
  - *Props*: 3D planetary holo-globes (#211), Unsealing cryo-pods (#212), Rotating exterior comms dishes (#213), Drydock laser welders (#214), Gimbaled gravity rings (#215).
  - *Special Effects*: Unstable spatial tears (#216), Ejecting escape pods (#217), Artifact stasis beams (#218), Ship AI holo-avatars (#219), Orbital defense cannon charging (#220).
  - *Ambiance*: Med-bay vital screens (#221), Hull cleaner droids (#222), Floating zero-G drink pouches (#223), Nav console standby loops (#224), Viewport alien bugs (#225).

---

### 👁️ 4. Cosmic Horror, Noir & Occult Modern (75 Elements, #226–300)
- **A. Linear Motion (Drawn Paths #226–250)**:
  - *Lighting*: Lighthouse fog beams (#226), Dying streetlamp chains (#227), Noir sedan headlights (#228), Floating spectral candles (#229), Blood-moon eclipse shadows (#230).
  - *Hazards*: Oozing cellar ichor (#231), Crawling shadow tendrils (#232), Stairwell roach tides (#233), Inverted blood droplets (#234), Freezing grave-fog walls (#235).
  - *Props*: Haunted 1920s subway cars (#236), Occult elevator dials (#237), Ghost typewriters (#238), Creaking dumbwaiter lifts (#239), 16mm film projectors (#240).
  - *Special Effects*: Non-Euclidean floor tiles (#241), Floral wallpaper void tears (#242), Psychic madness ripples (#243), Bookshelf ghost ladies (#244), Ritual violet mist (#245).
  - *Ambiance*: Rotting pier coastal fog (#246), Gothic stained-glass rain (#247), Cemetery dead leaves (#248), Full-moon murder of crows (#249), Detective cigarette smoke (#250).
- **B. Animated Textures (Filled Areas #251–275)**:
  - *Lighting*: Venetian blind office shadows (#251), Indigo harbor moonlight (#252), Green sewer gaslight (#253), Frosted-glass lightning flashes (#254), Ritual chalk candle shadows (#255).
  - *Hazards*: Harbor abyssal tentacles (#256), Splintering floorboard collapses (#257), Writhing crypt maggot carpets (#258), Whispering cult tar pools (#259), Creeping hoarfrost (#260).
  - *Props*: Trembling library shelves (#261), Rattling morgue drawers (#262), Breathing padded walls (#263), Cosmic asphalt puddle reflections (#264), Shifting wallpaper eyes (#265).
  - *Special Effects*: Noir film grain & scratches (#266), Altar chromatic aberration (#267), CRT static ghost faces (#268), Gravity inversion zones (#269), Burning eldritch floor runes (#270).
  - *Ambiance*: Midnight cobblestone rain (#271), Trembling crypt cobwebs (#272), Chimney hearth smoke (#273), Shadows behind frosted glass (#274), Burned crime scene soot (#275).
- **C. Single Elements (Focal Props #276–300)**:
  - *Lighting*: Green banker's desk lamps (#276), London fog gaslamps (#277), Skull tallow candles (#278), Purple flame lanterns (#279), Trembling Zippo lighters (#280).
  - *Hazards*: Bleeding ritual daggers (#281), Bubbling manhole sewer gas (#282), Creaking iron maidens (#283), Laboratory pit vipers (#284), Thrashing elevator cables (#285).
  - *Props*: Antique vinyl gramophones (#286), Swinging pendulum clocks (#287), Buzzing rotary telephones (#288), Slow ceiling paddle fans (#289), Autopsy table drain gutters (#290).
  - *Special Effects*: Oily sweating basalt idols (#291), Smoking occult grimoires (#292), Séance spirit trumpets (#293), Skull green ghost-fire (#294), Rippling liquid mirrors (#295).
  - *Ambiance*: Dripping wet umbrellas (#296), Dying rose dropping petals (#297), Swinging asylum metronomes (#298), Gargoyle perched pigeons (#299), Curbside leaking wet boxes (#300).

---

### ⚔️ 5. High Fantasy & Sword-and-Sorcery (75 Elements, #301–375)
- **A. Linear Motion (Drawn Paths #301–325)**:
  - *Lighting*: Magic missile corkscrews (#301), Flaming arrow volleys (#302), Bobbing will-o'-the-wisps (#303), Cathedral golden sunbeams (#304), Glowing crystal drips (#305).
  - *Hazards*: Dragon-fire scorch waves (#306), Rolling stone boulders (#307), Surging cavern rivers (#308), Dungeon scarab crawls (#309), Swinging pendulum blades (#310).
  - *Props*: Watermill churning wheels (#311), Rattling portcullis chains (#312), Dwarven rail minecarts (#313), Royal carriage wheels (#314), Flapping canvas awnings (#315).
  - *Special Effects*: Forked chain lightning arcs (#316), Prismatic Bifrost bridges (#317), Phantom cavalry charges (#318), Pixie dust leaf vortexes (#319), Cone of cold frost (#320).
  - *Ambiance*: Wild mountain rivers (#321), High circling dragons (#322), Speckled trout streams (#323), Bounding deer herds (#324), Pasture dandelion seeds (#325).
- **B. Animated Textures (Filled Areas #326–350)**:
  - *Lighting*: Cathedral stained-glass god rays (#326), Underdark giant toadstools (#327), Underwater caustic light (#328), Astral plane nebula voids (#329), Twilight forest fireflies (#330).
  - *Hazards*: Bubbling magma pits (#331), Sizzling emerald acid pools (#332), Cracking lake ice fractures (#333), Blood assassin vines (#334), Bubbling peat bogs (#335).
  - *Props*: Swaying forest canopies (#336), Underwater kelp & coral reefs (#337), Rippling summer meadows (#338), Rainy cobblestone squares (#339), Glittering gold coin hoards (#340).
  - *Special Effects*: Arcane summoning circles (#341), Wizard golden forcefield domes (#342), Astral liquid silk voids (#343), Spreading flagstone frost (#344), Magical swirling darkness (#345).
  - *Ambiance*: Cave water drop ripples (#346), Castle morning courtyard mist (#347), Gentle village snowfalls (#348), Mountain cloud shadows (#349), Golden fairy dust glades (#350).
- **C. Single Elements (Focal Props #351–375)**:
  - *Lighting*: Adventurer's campfires (#351), Forged-iron sconce torches (#352), Tavern hearth fireplaces (#353), Spinning pedestal crystals (#354), Wizard desk beeswax candles (#355).
  - *Hazards*: Spring-loaded spike traps (#356), Dragon-head flame sconces (#357), Snapping mimic chests (#358), Giant snapping flytraps (#359), Trembling limestone stalactites (#360).
  - *Props*: Bubbling witch's cauldrons (#361), Country hill windmills (#362), Self-flipping spellbooks (#363), Forge bellows & coals (#364), Swinging tavern signs (#365).
  - *Special Effects*: Amethyst portal archways (#366), Levitating runed greatswords (#367), Azure healing fountains (#368), Floating ectoplasm skulls (#369), Storm scrying crystal balls (#370).
  - *Ambiance*: Rippling castle banners (#371), Monarch wildflower flutter (#372), Spit-roast boar fires (#373), Draining brass hourglasses (#374), Water-lily pad treefrogs (#375).

---

## 🎛️ Element Inspector & Visual Tuning

### Procedural 6-Octave Fractal Geometry Engine
All organic shapes (forest canopies, deciduous trees, pine whorls, palm fronds, tumbleweeds, and deformable shorelines) are driven by a procedural 6-octave harmonic modulation algorithm:
- **Fractal Roughness Slider (`0%` to `200%` Ultra-Gnarled)**:
  - `0%`: Perfectly smooth geometric circles and curves.
  - `75%` *(Default)*: Natural botanical tree silhouettes and organic riverbanks.
  - `150%`–`200%`: Craggy, deeply notched, gnarled ancient trees, skeletal briars, and jagged coves.
- **Internal Entity Scale (`0.25x` to `3.0x`)**: Adjusts the size of internal components (leaves, twigs, needles, fish, tumbleweed barbs) independent of the bounding box size.
- **〰️ Path Width Variance & Organic Taper Slider (`0%` to `150%`)**:
  - `0% Uniform`: Classic uniform ribbon / constant stroke width.
  - `40% Natural`: Gentle procedural width drift mimicking real meandering waterways, fissures, and trails.
  - `80% Organic`: Pronounced rhythmic swelling into deep pools and pinching into narrow rapids or chasms.
  - `130%–150% Wild Bulge & Taper`: High-contrast organic variance with multi-harmonic fractal edge jitter and smooth open-ended endpoint tapering.
  - Available both in the **Freehand Draw Tool Bar** (for sketch-time control and live preview) and in the **Selected Element Inspector** (for dynamic post-draw fine-tuning).

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
AetherTable/
├── index.html              # Main single-screen projector battlemap utility & floating UI
├── css/
│   └── style.css           # Dark theme, keystone handles, river handles, inspector & HUD styles
├── js/
│   ├── keystone.js         # 4-corner perspective homography solver & CSS matrix3d engine
│   ├── grid.js             # Canvas tactical grid & 1-inch miniature calibrator
│   ├── living-elements.js  # 375 deduplicated master features & procedural fractal geometry engine
│   ├── ai-generator.js     # Gemini 4K prompt studio, 4K upscale/crop pipeline & session history
│   └── app.js              # Application coordinator, panning engine, freehand draw & hotkeys
└── README.md               # User guide & documentation
```
