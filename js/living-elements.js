window.FEATURE_CATALOG = {
    // =========================================================================
    // 375 DEDUPLICATED MASTER ANIMATED VTT ELEMENTS CATALOG
    // 5 Genres (75 each) x 3 Geometry Placements (125 each) x 5 Subcategories
    // =========================================================================

    // -------------------------------------------------------------------------
    // ⚡ 1. CYBERPUNK & DYSTOPIAN SCI-FI (75 ELEMENTS)
    // -------------------------------------------------------------------------
    // A. Linear Motion (Directional / Traveling / Drawn Paths)
    cp_flying_headlights: { num: 1, base: 'headlights', name: 'Flying Car Headlight Beams', desc: 'Flying car headlight beams sweeping down a rain-slicked highway', variant: 'cp_flying_headlights', category: 'lighting', section: 'drawn', genre: 'cyberpunk', icon: '🚘', w: 360, h: 240 },
    cp_spinner_lightbar: { num: 2, base: 'spotlight', name: 'Police Spinner Lightbars', desc: 'Police spinner red-and-blue lightbars streaking across skyscraper glass', variant: 'cp_spinner_lightbar', category: 'lighting', section: 'drawn', genre: 'cyberpunk', icon: '🚨', w: 320, h: 220 },
    cp_fiber_conduit: { num: 3, base: 'lightstrip', name: 'Fiber-Optic Data Conduit', desc: 'Neon data pulses racing through transparent fiber-optic floor conduits', variant: 'cp_fiber_conduit', category: 'lighting', section: 'drawn', genre: 'cyberpunk', icon: '⚡', w: 480, h: 160 },
    cp_drone_searchlight: { num: 4, base: 'spotlight', name: 'Patrol Drone Searchlight', desc: 'Autonomous drone searchlight cones scanning a dark alleyway', variant: 'cp_drone_searchlight', category: 'lighting', section: 'drawn', genre: 'cyberpunk', icon: '🔦', w: 340, h: 260 },
    cp_monorail_blur: { num: 5, base: 'lightstrip', name: 'Elevated Monorail Lights', desc: 'Elevated monorail window lights blurring across a night skyline', variant: 'cp_monorail_blur', category: 'lighting', section: 'drawn', genre: 'cyberpunk', icon: '🚝', w: 520, h: 180 },
    cp_laser_grid: { num: 6, base: 'forcefield', name: 'Security Laser Grid', desc: 'Red security laser grids sweeping rhythmically down a corporate hallway', variant: 'cp_laser_grid', category: 'hazards', section: 'drawn', genre: 'cyberpunk', icon: '🔴', w: 360, h: 200 },
    cp_maglev_subway: { num: 7, base: 'conveyor', name: 'High-Speed Mag-Lev Subway', desc: 'High-speed mag-lev subway trains hurtling through an underground tunnel', variant: 'cp_maglev_subway', category: 'hazards', section: 'drawn', genre: 'cyberpunk', icon: '🚇', w: 540, h: 200 },
    cp_chemical_culvert: { num: 8, base: 'river', name: 'Chemical Runoff Culvert', desc: 'Glowing green chemical runoff surging through an open street culvert', variant: 'cp_chemical_culvert', category: 'hazards', section: 'drawn', genre: 'cyberpunk', icon: '🧪', w: 500, h: 220 },
    cp_smelter_conveyor: { num: 9, base: 'conveyor', name: 'Scrap Smelter Conveyor', desc: 'Industrial conveyor belts carrying scrap metal toward a smelter', variant: 'cp_smelter_conveyor', category: 'hazards', section: 'drawn', genre: 'cyberpunk', icon: '⚙️', w: 480, h: 190 },
    cp_patrol_track: { num: 10, base: 'patrol_actor', name: 'Armed Patrol Drone Track', desc: 'Armed patrol drones gliding along a fixed perimeter track', variant: 'cp_patrol_track', category: 'hazards', section: 'drawn', genre: 'cyberpunk', icon: '🛸', w: 360, h: 240 },
    cp_pneumatic_tube: { num: 11, base: 'lightstrip', name: 'Pneumatic Message Canister', desc: 'Pneumatic message canisters shooting through clear ceiling tubes', variant: 'cp_pneumatic_tube', category: 'props', section: 'drawn', genre: 'cyberpunk', icon: '📨', w: 460, h: 140 },
    cp_delivery_bots: { num: 12, base: 'conveyor', name: 'Warehouse Delivery Bots', desc: 'Wheeled delivery bots rolling along magnetic warehouse floor strips', variant: 'cp_delivery_bots', category: 'props', section: 'drawn', genre: 'cyberpunk', icon: '🤖', w: 460, h: 180 },
    cp_megamall_escalator: { num: 13, base: 'conveyor', name: 'Mega-Mall Escalators', desc: 'Mega-mall escalators carrying commuters between multi-level atriums', variant: 'cp_megamall_escalator', category: 'props', section: 'drawn', genre: 'cyberpunk', icon: '🏬', w: 440, h: 200 },
    cp_gantry_welder: { num: 14, base: 'sparks', name: 'Overhead Gantry Welder', desc: 'Robotic welding arms sliding along overhead factory gantry rails', variant: 'cp_gantry_welder', category: 'props', section: 'drawn', genre: 'cyberpunk', icon: '🦾', w: 460, h: 200 },
    cp_baggage_carousel: { num: 15, base: 'conveyor', name: 'Spaceport Baggage Carousel', desc: 'Spaceport baggage carousels rotating around a chrome claim terminal', variant: 'cp_baggage_carousel', category: 'props', section: 'drawn', genre: 'cyberpunk', icon: '🧳', w: 400, h: 240 },
    cp_railgun_tracers: { num: 16, base: 'sparks', name: 'Smart-Gun Railgun Tracers', desc: 'Smart-gun tracer rounds and railgun trails zipping across a street shootout', variant: 'cp_railgun_tracers', category: 'sfx', section: 'drawn', genre: 'cyberpunk', icon: '💥', w: 480, h: 180 },
    cp_emp_shockwave: { num: 17, base: 'plasma_leak', name: 'Expanding EMP Shockwave', desc: 'Blue EMP shockwave rings expanding outward from a detonated charge', variant: 'cp_emp_shockwave', category: 'sfx', section: 'drawn', genre: 'cyberpunk', icon: '⚡', w: 360, h: 360 },
    cp_riot_barrier_wave: { num: 18, base: 'forcefield', name: 'Holo Riot-Control Barrier', desc: 'Holographic riot-control barrier waves pushing crowd lines backward', variant: 'cp_riot_barrier_wave', category: 'sfx', section: 'drawn', genre: 'cyberpunk', icon: '🛡️', w: 480, h: 200 },
    cp_netrunner_stream: { num: 19, base: 'cyber_terminal', name: 'Netrunner Code Stream', desc: 'Netrunner ice-breaker code streams shooting between cyberdeck terminals', variant: 'cp_netrunner_stream', category: 'sfx', section: 'drawn', genre: 'cyberpunk', icon: '💻', w: 460, h: 180 },
    cp_skylight_rivulets: { num: 20, base: 'rain', name: 'Acid Skylight Rivulets', desc: 'Acid rain rivulets streaming diagonally down angled glass skylights', variant: 'cp_skylight_rivulets', category: 'sfx', section: 'drawn', genre: 'cyberpunk', icon: '🌧️', w: 440, h: 260 },
    cp_skytraffic_lanes: { num: 21, base: 'patrol_actor', name: 'Sky-Traffic Flight Lanes', desc: 'Multi-tiered sky-traffic lanes filled with cruising hover-vehicles', variant: 'cp_skytraffic_lanes', category: 'ambiance', section: 'drawn', genre: 'cyberpunk', icon: '🚗', w: 500, h: 240 },
    cp_windblown_flyers: { num: 22, base: 'dust', name: 'Windblown Gutter Flyers', desc: 'Wind-blown neon flyers and plastic wrappers skittering down a gutter', variant: 'cp_windblown_flyers', category: 'ambiance', section: 'drawn', genre: 'cyberpunk', icon: '📄', w: 420, h: 180 },
    cp_steam_pipe_vent: { num: 23, base: 'smoke', name: 'Ruptured Alley Steam Pipe', desc: 'Pressurized steam venting horizontally from ruptured alley pipes', variant: 'cp_steam_pipe_vent', category: 'ambiance', section: 'drawn', genre: 'cyberpunk', icon: '💨', w: 440, h: 200 },
    cp_cyber_rats_line: { num: 24, base: 'rats', name: 'Platform Cyber-Rats', desc: 'Cybernetic rats scurrying in single file along a subway platform edge', variant: 'cp_cyber_rats_line', category: 'ambiance', section: 'drawn', genre: 'cyberpunk', icon: '🐀', w: 420, h: 160 },
    cp_highrise_smog: { num: 25, base: 'smoke', name: 'High-Rise Smog Banks', desc: 'Yellowish smog banks drifting steadily past high-rise windows', variant: 'cp_highrise_smog', category: 'ambiance', section: 'drawn', genre: 'cyberpunk', icon: '🏭', w: 480, h: 240 },
    // B. Animated Textures (Tiling / Area-Fill / Volumes)
    cp_puddle_reflections: { num: 26, base: 'pond', name: 'Neon Oily Puddle Refraction', desc: 'Multi-colored neon reflections shimmering across oily street puddles', variant: 'cp_puddle_reflections', category: 'lighting', section: 'filled', genre: 'cyberpunk', icon: '🌈', w: 360, h: 260 },
    cp_algae_vat_glow: { num: 27, base: 'crystal', name: 'Biotech Algae Vat Glow', desc: 'Bioluminescent algae vats glowing softly inside a biotech basement', variant: 'cp_algae_vat_glow', category: 'lighting', section: 'filled', genre: 'cyberpunk', icon: '🧫', w: 340, h: 260 },
    cp_club_strobe_grid: { num: 28, base: 'spotlight', name: 'Nightclub Strobe Grid', desc: 'Strobe light grids pulsing across a crowded underground nightclub floor', variant: 'cp_club_strobe_grid', category: 'lighting', section: 'filled', genre: 'cyberpunk', icon: '🕺', w: 380, h: 280 },
    cp_server_led_matrix: { num: 29, base: 'cyber_terminal', name: 'Server-Rack LED Matrix', desc: 'Server-rack LED arrays blinking in synchronized binary patterns', variant: 'cp_server_led_matrix', category: 'lighting', section: 'filled', genre: 'cyberpunk', icon: '🎛️', w: 360, h: 260 },
    cp_slatted_megarays: { num: 30, base: 'sunbeams', name: 'Slatted Mega-Vent Rays', desc: 'Harsh smog-filtered sunlight slanting through slatted mega-structure vents', variant: 'cp_slatted_megarays', category: 'lighting', section: 'filled', genre: 'cyberpunk', icon: '☀️', w: 380, h: 280 },
    cp_electrified_deck: { num: 31, base: 'sparks', name: 'Electrified Metal Deck', desc: 'Electrified diamond-plate metal flooring arcing with blue voltage', variant: 'cp_electrified_deck', category: 'hazards', section: 'filled', genre: 'cyberpunk', icon: '⚡', w: 360, h: 260 },
    cp_solvent_vats: { num: 32, base: 'toxic_spill', name: 'Corrosive Solvent Vat', desc: 'Bubbling vats of corrosive industrial solvent', variant: 'cp_solvent_vats', category: 'hazards', section: 'filled', genre: 'cyberpunk', icon: '🧪', w: 340, h: 260 },
    cp_sewage_churn: { num: 33, base: 'mud', name: 'Storm-Drain Sewage Churn', desc: 'Deep storm-drain sewage churning with floating plastic refuse', variant: 'cp_sewage_churn', category: 'hazards', section: 'filled', genre: 'cyberpunk', icon: '🌊', w: 380, h: 260 },
    cp_radioactive_sludge: { num: 34, base: 'toxic_spill', name: 'Radioactive Sludge Pool', desc: 'Radioactive sludge pools glowing with rising toxic vapor bubbles', variant: 'cp_radioactive_sludge', category: 'hazards', section: 'filled', genre: 'cyberpunk', icon: '☢️', w: 360, h: 260 },
    cp_molten_slag_heap: { num: 35, base: 'lava_seam', name: 'Smoldering Slag Heap', desc: 'Smoldering heaps of molten slag glowing orange in a foundry', variant: 'cp_molten_slag_heap', category: 'hazards', section: 'filled', genre: 'cyberpunk', icon: '🔥', w: 360, h: 240 },
    cp_crt_telemetry_wall: { num: 36, base: 'cyber_terminal', name: 'CRT Telemetry Bank', desc: 'Wall-to-wall banks of CRT monitors displaying shifting static and telemetry', variant: 'cp_crt_telemetry_wall', category: 'props', section: 'filled', genre: 'cyberpunk', icon: '📺', w: 360, h: 260 },
    cp_hydroponic_misting: { num: 37, base: 'fog', name: 'Hydroponic Misting Bed', desc: 'Automated hydroponic crop trays misting rows of engineered greens', variant: 'cp_hydroponic_misting', category: 'props', section: 'filled', genre: 'cyberpunk', icon: '🌱', w: 380, h: 260 },
    cp_ewaste_pile_sparks: { num: 38, base: 'sparks', name: 'Sparking E-Waste Junkyard', desc: 'Piles of discarded e-waste sparking intermittently with dying batteries', variant: 'cp_ewaste_pile_sparks', category: 'props', section: 'filled', genre: 'cyberpunk', icon: '🔋', w: 360, h: 260 },
    cp_acrylic_coolant_floor: { num: 39, base: 'river', name: 'Server Coolant Sub-Floor', desc: 'Server-farm liquid coolant flowing beneath transparent acrylic floor tiles', variant: 'cp_acrylic_coolant_floor', category: 'props', section: 'filled', genre: 'cyberpunk', icon: '🧊', w: 400, h: 260 },
    cp_shipping_containers: { num: 40, base: 'conveyor', name: 'Mag-Crane Container Yard', desc: 'Stacked shipping containers vibrating gently near a heavy mag-crane', variant: 'cp_shipping_containers', category: 'props', section: 'filled', genre: 'cyberpunk', icon: '🏗️', w: 400, h: 280 },
    cp_cyberspace_glitch: { num: 41, base: 'cyber_terminal', name: 'Cyberspace Glitch Grid', desc: 'Digital glitch and pixel-tearing artifacts warping a cyberspace grid floor', variant: 'cp_cyberspace_glitch', category: 'sfx', section: 'filled', genre: 'cyberpunk', icon: '👾', w: 380, h: 280 },
    cp_hangar_shield: { num: 42, base: 'forcefield', name: 'Hex Hangar Energy Shield', desc: 'Shimmering hexagonal energy shields covering an open hangar bay', variant: 'cp_hangar_shield', category: 'sfx', section: 'filled', genre: 'cyberpunk', icon: '🛡️', w: 380, h: 280 },
    cp_riot_teargas_cloud: { num: 43, base: 'smoke', name: 'Riot Plaza Tear-Gas Bank', desc: 'Thick clouds of white tear gas rolling across a riot plaza', variant: 'cp_riot_teargas_cloud', category: 'sfx', section: 'filled', genre: 'cyberpunk', icon: '💨', w: 400, h: 280 },
    cp_thermal_heatmap: { num: 44, base: 'hyperspace', name: 'Thermal Heat-Map Distortion', desc: 'Thermal-vision heat-map distortion rippling over an active engine room', variant: 'cp_thermal_heatmap', category: 'sfx', section: 'filled', genre: 'cyberpunk', icon: '🌡️', w: 360, h: 260 },
    cp_nanobot_deck_swarm: { num: 45, base: 'dust', name: 'Nanobot Deck Shifting Sand', desc: 'Gray nanobot swarms shifting like metallic sand across deck plating', variant: 'cp_nanobot_deck_swarm', category: 'sfx', section: 'filled', genre: 'cyberpunk', icon: '🤖', w: 360, h: 260 },
    cp_asphalt_rain: { num: 46, base: 'rain', name: 'Cyberpunk Slanting Rain', desc: 'Diagonal cyberpunk rain with splash rings hitting wet asphalt', variant: 'cp_asphalt_rain', category: 'ambiance', section: 'filled', genre: 'cyberpunk', icon: '🌧️', w: 380, h: 280 },
    cp_street_grate_vapor: { num: 47, base: 'smoke', name: 'Subway Grate Steam Vapor', desc: 'Dense street-level vapor rising continuously from subway grates', variant: 'cp_street_grate_vapor', category: 'ambiance', section: 'filled', genre: 'cyberpunk', icon: '🌫️', w: 360, h: 260 },
    cp_slum_soot_fall: { num: 48, base: 'dust', name: 'Burned Slum Soot Fall', desc: 'Falling black soot and ash drifting over a burned-out slum', variant: 'cp_slum_soot_fall', category: 'ambiance', section: 'filled', genre: 'cyberpunk', icon: '⬛', w: 380, h: 280 },
    cp_plaza_trash_eddy: { num: 49, base: 'dust', name: 'Windy Plaza Trash Eddy', desc: 'Swirling eddies of trash spinning in a windy plaza corner', variant: 'cp_plaza_trash_eddy', category: 'ambiance', section: 'filled', genre: 'cyberpunk', icon: '🌪️', w: 340, h: 260 },
    cp_skytraffic_shadows: { num: 50, base: 'bats', name: 'Overhead Sky-Traffic Shadows', desc: 'Moving shadows of overhead sky-traffic sweeping across rooftops', variant: 'cp_skytraffic_shadows', category: 'ambiance', section: 'filled', genre: 'cyberpunk', icon: '👥', w: 400, h: 280 },
    // C. Single Elements (Spot / Focal Objects / Props)
    cp_flickering_neon: { num: 51, base: 'cyber_terminal', name: 'Broken Neon Storefront Sign', desc: 'Buzzing, half-broken neon storefront sign flickering erratically', variant: 'cp_flickering_neon', category: 'lighting', section: 'single', genre: 'cyberpunk', icon: '🍸', w: 220, h: 180 },
    cp_holo_billboard: { num: 52, base: 'hologram', name: 'Holo Corporate Billboard', desc: 'Towering holographic corporate billboard cycling through animated ads', variant: 'cp_holo_billboard', category: 'lighting', section: 'single', genre: 'cyberpunk', icon: '🏙️', w: 260, h: 240 },
    cp_bent_streetlamp: { num: 53, base: 'spotlight', name: 'Bent Sputtering Streetlamp', desc: 'Bent streetlamp sputtering and dying intermittently', variant: 'cp_bent_streetlamp', category: 'lighting', section: 'single', genre: 'cyberpunk', icon: '💡', w: 200, h: 200 },
    cp_trash_firebarrel: { num: 54, base: 'campfire', name: 'Homeless Camp Fire Barrel', desc: 'Burning trash-can fire barrel warming a homeless encampment', variant: 'cp_trash_firebarrel', category: 'lighting', section: 'single', genre: 'cyberpunk', icon: '🛢️', w: 180, h: 180 },
    cp_amber_warning_beacon: { num: 55, base: 'spotlight', name: 'Rotary Warning Beacon', desc: 'Rotating amber warning beacon spinning above a blast door', variant: 'cp_amber_warning_beacon', category: 'lighting', section: 'single', genre: 'cyberpunk', icon: '🚨', w: 180, h: 180 },
    cp_whipping_cable: { num: 56, base: 'sparks', name: 'Thrashing Power Cable', desc: 'Severed high-voltage power cable whipping around and throwing sparks', variant: 'cp_whipping_cable', category: 'hazards', section: 'single', genre: 'cyberpunk', icon: '⚡', w: 240, h: 200 },
    cp_ceiling_turret: { num: 57, base: 'patrol_actor', name: 'Automated Ceiling Turret', desc: 'Automated ceiling turret unfolding and panning left to right', variant: 'cp_ceiling_turret', category: 'hazards', section: 'single', genre: 'cyberpunk', icon: '🎯', w: 200, h: 200 },
    cp_laser_tripwire: { num: 58, base: 'forcefield', name: 'Vault Laser Tripwire', desc: 'Blinking laser tripwire spanning across a bank vault entrance', variant: 'cp_laser_tripwire', category: 'hazards', section: 'single', genre: 'cyberpunk', icon: '🔴', w: 260, h: 160 },
    cp_plasma_generator: { num: 59, base: 'plasma_leak', name: 'Overheating Plasma Core', desc: 'Overheating plasma generator venting white-hot steam bursts', variant: 'cp_plasma_generator', category: 'hazards', section: 'single', genre: 'cyberpunk', icon: '☢️', w: 240, h: 240 },
    cp_exhaust_fan: { num: 60, base: 'fan', name: 'Industrial Exhaust Fan', desc: 'Exposed industrial exhaust fan spinning with razor-sharp metal blades', variant: 'cp_exhaust_fan', category: 'hazards', section: 'single', genre: 'cyberpunk', icon: '💨', w: 220, h: 220 },
    cp_holo_city_map: { num: 61, base: 'hologram', name: '3D Holo City Map', desc: 'Floating 3D holographic city map rotating above a war-room table', variant: 'cp_holo_city_map', category: 'props', section: 'single', genre: 'cyberpunk', icon: '🗺️', w: 240, h: 240 },
    cp_matrix_terminal: { num: 62, base: 'cyber_terminal', name: 'Hacked Matrix Terminal', desc: 'Hacked computer terminal scrolling green matrix-style code', variant: 'cp_matrix_terminal', category: 'props', section: 'single', genre: 'cyberpunk', icon: '💻', w: 200, h: 180 },
    cp_noodle_stall_steam: { num: 63, base: 'smoke', name: 'Street Noodle Stall Steam', desc: 'Street-food noodle stall releasing clouds of savory cooking steam', variant: 'cp_noodle_stall_steam', category: 'props', section: 'single', genre: 'cyberpunk', icon: '🍜', w: 220, h: 200 },
    cp_dim_vending_machine: { num: 64, base: 'cyber_terminal', name: 'Fluorescent Vending Machine', desc: 'Flickering vending machine humming with dim interior fluorescent light', variant: 'cp_dim_vending_machine', category: 'props', section: 'single', genre: 'cyberpunk', icon: '🥫', w: 180, h: 200 },
    cp_ripperdoc_chair: { num: 65, base: 'cyber_terminal', name: 'Ripperdoc Surgical Chair', desc: 'Ripperdoc surgical chair with blinking vital-sign monitors', variant: 'cp_ripperdoc_chair', category: 'props', section: 'single', genre: 'cyberpunk', icon: '💺', w: 220, h: 220 },
    cp_avatar_spawn_pad: { num: 66, base: 'teleporter', name: 'Avatar Spawn Pad', desc: 'Cyberspace avatar spawn pad materializing a wireframe silhouette', variant: 'cp_avatar_spawn_pad', category: 'sfx', section: 'single', genre: 'cyberpunk', icon: '✨', w: 220, h: 220 },
    cp_sonic_suppressor: { num: 67, base: 'plasma_leak', name: 'Sonic Riot Suppressor', desc: 'Sonic riot-suppressor dish sending visible concentric air ripples', variant: 'cp_sonic_suppressor', category: 'sfx', section: 'single', genre: 'cyberpunk', icon: '📢', w: 240, h: 220 },
    cp_holo_decoy: { num: 68, base: 'hologram', name: 'Holo Decoy Projection', desc: 'Holographic decoy projection flickering with horizontal scanlines', variant: 'cp_holo_decoy', category: 'sfx', section: 'single', genre: 'cyberpunk', icon: '👤', w: 200, h: 240 },
    cp_emp_grenade: { num: 69, base: 'sparks', name: 'Armed EMP Grenade', desc: 'Armed EMP grenade sparking on the floor seconds before detonation', variant: 'cp_emp_grenade', category: 'sfx', section: 'single', genre: 'cyberpunk', icon: '💣', w: 180, h: 180 },
    cp_cryo_stasis_pod: { num: 70, base: 'smoke', name: 'Cryo-Stasis Unsealing Pod', desc: 'Cryo-stasis pod venting freezing mist as its glass hatch unseals', variant: 'cp_cryo_stasis_pod', category: 'sfx', section: 'single', genre: 'cyberpunk', icon: '❄️', w: 220, h: 240 },
    cp_security_cam: { num: 71, base: 'patrol_actor', name: 'Pivoting Security Camera', desc: 'Wall-mounted surveillance camera panning back and forth with a red LED', variant: 'cp_security_cam', category: 'ambiance', section: 'single', genre: 'cyberpunk', icon: '📹', w: 160, h: 160 },
    cp_stray_cybercat: { num: 72, base: 'rats', name: 'Fire Escape Cyber-Cat', desc: 'Stray cyber-cat flicking its metallic tail on a fire escape', variant: 'cp_stray_cybercat', category: 'ambiance', section: 'single', genre: 'cyberpunk', icon: '🐈', w: 180, h: 160 },
    cp_neon_umbrella: { num: 73, base: 'pond', name: 'Bobbing Neon Umbrella', desc: 'Discarded neon rain-umbrella bobbing gently in a deep puddle', variant: 'cp_neon_umbrella', category: 'ambiance', section: 'single', genre: 'cyberpunk', icon: '☂️', w: 180, h: 180 },
    cp_window_ac_drips: { num: 74, base: 'fountain', name: 'Dripping Window AC Unit', desc: 'Rusty window AC unit dripping steady condensation onto concrete', variant: 'cp_window_ac_drips', category: 'ambiance', section: 'single', genre: 'cyberpunk', icon: '💧', w: 160, h: 160 },
    cp_shifting_graffiti: { num: 75, base: 'cyber_terminal', name: 'Chroma-Shift Graffiti', desc: 'Digital spray-paint graffiti shifting colors on a brick wall', variant: 'cp_shifting_graffiti', category: 'ambiance', section: 'single', genre: 'cyberpunk', icon: '🎨', w: 240, h: 180 },

    // -------------------------------------------------------------------------
    // 🤠 2. WEIRD WEST & FRONTIER (75 ELEMENTS)
    // -------------------------------------------------------------------------
    // A. Linear Motion (Directional / Traveling / Drawn Paths)
    ww_locomotive_beam: { num: 76, base: 'spotlight', name: 'Locomotive Headlamp Beam', desc: 'Steam locomotive headlamp beam cutting through a pitch-black desert night', variant: 'ww_locomotive_beam', category: 'lighting', section: 'drawn', genre: 'frontier', icon: '🚂', w: 480, h: 220 },
    ww_stagecoach_lantern: { num: 77, base: 'lantern', name: 'Stagecoach Lantern Sway', desc: 'Oil lantern swaying from the rear rack of a moving stagecoach', variant: 'ww_stagecoach_lantern', category: 'lighting', section: 'drawn', genre: 'frontier', icon: '🏮', w: 320, h: 200 },
    ww_kerosene_trail: { num: 78, base: 'inferno', name: 'Racing Kerosene Trail', desc: 'Ignited kerosene trail racing across dry wooden saloon floorboards', variant: 'ww_kerosene_trail', category: 'lighting', section: 'drawn', genre: 'frontier', icon: '🔥', w: 460, h: 180 },
    ww_canyon_sunbeams: { num: 79, base: 'sunbeams', name: 'Canyon Sunbeams Shift', desc: 'Desert sunbeams shifting slowly across a red-rock canyon floor', variant: 'ww_canyon_sunbeams', category: 'lighting', section: 'drawn', genre: 'frontier', icon: '☀️', w: 480, h: 260 },
    ww_ghost_lights: { num: 80, base: 'fireflies', name: 'Railroad Ghost-Lights', desc: 'Pale blue ghost-lights drifting along abandoned railroad ties', variant: 'ww_ghost_lights', category: 'lighting', section: 'drawn', genre: 'frontier', icon: '👻', w: 440, h: 200 },
    ww_flash_flood: { num: 81, base: 'river', name: 'Arroyo Flash Flood', desc: 'Wall of muddy flash-flood water surging down a dry desert arroyo', variant: 'ww_flash_flood', category: 'hazards', section: 'drawn', genre: 'frontier', icon: '🌊', w: 520, h: 240 },
    ww_runaway_orecart: { num: 82, base: 'conveyor', name: 'Runaway Ore Cart', desc: 'Runaway ore cart hurtling down rickety wooden mine tracks', variant: 'ww_runaway_orecart', category: 'hazards', section: 'drawn', genre: 'frontier', icon: '🛒', w: 480, h: 180 },
    ww_stampede_dust: { num: 83, base: 'dust', name: 'Stampeding Longhorns', desc: 'Stampeding longhorn cattle kicking up a rolling wall of dust', variant: 'ww_stampede_dust', category: 'hazards', section: 'drawn', genre: 'frontier', icon: '🐂', w: 520, h: 260 },
    ww_flaming_tumbleweed: { num: 84, base: 'tumbleweed', name: 'Flaming Tumbleweeds', desc: 'Flaming tumbleweeds bouncing rapidly across dry prairie scrub', variant: 'ww_flaming_tumbleweed', category: 'hazards', section: 'drawn', genre: 'frontier', icon: '🔥', w: 420, h: 200 },
    ww_gatling_tracers: { num: 85, base: 'sparks', name: 'Gatling Gun Tracers', desc: 'Hand-cranked Gatling gun tracer rounds ripping down a main street', variant: 'ww_gatling_tracers', category: 'hazards', section: 'drawn', genre: 'frontier', icon: '💥', w: 480, h: 180 },
    ww_stagecoach_wheels: { num: 86, base: 'dust', name: 'Stagecoach Dust Trail', desc: 'Wooden stagecoach wheels spinning and kicking up dry trail dust', variant: 'ww_stagecoach_wheels', category: 'props', section: 'drawn', genre: 'frontier', icon: '🐎', w: 440, h: 200 },
    ww_locomotive_smoke: { num: 87, base: 'smoke', name: 'Iron Horse Locomotive', desc: 'Iron steam locomotive chugging thick black smoke along tracks', variant: 'ww_locomotive_smoke', category: 'props', section: 'drawn', genre: 'frontier', icon: '🚂', w: 520, h: 220 },
    ww_gold_sluice: { num: 88, base: 'river', name: 'Gold Panning Sluice', desc: 'Wooden gold-panning sluice box rushing with muddy creek water', variant: 'ww_gold_sluice', category: 'props', section: 'drawn', genre: 'frontier', icon: '⛏️', w: 460, h: 180 },
    ww_riverboat_wheel: { num: 89, base: 'ocean_waves', name: 'Riverboat Paddlewheel', desc: 'Sternwheeler riverboat paddlewheel churning muddy Mississippi water', variant: 'ww_riverboat_wheel', category: 'props', section: 'drawn', genre: 'frontier', icon: '🚢', w: 480, h: 220 },
    ww_telegraph_ticker: { num: 90, base: 'cyber_terminal', name: 'Telegraph Ticker Feed', desc: 'Brass telegraph ticker feeding paper tape steadily from a receiver', variant: 'ww_telegraph_ticker', category: 'props', section: 'drawn', genre: 'frontier', icon: '📠', w: 400, h: 160 },
    ww_dynamite_fuse: { num: 91, base: 'sparks', name: 'Burning Dynamite Fuse', desc: 'Sputtering dynamite fuse spark burning rapidly toward a powder keg', variant: 'ww_dynamite_fuse', category: 'sfx', section: 'drawn', genre: 'frontier', icon: '🧨', w: 420, h: 160 },
    ww_ghost_train: { num: 92, base: 'smoke', name: 'Phantom Ghost Train', desc: 'Translucent phantom ghost-train roaring silently along cursed rails', variant: 'ww_ghost_train', category: 'sfx', section: 'drawn', genre: 'frontier', icon: '👻', w: 520, h: 220 },
    ww_dust_devil: { num: 93, base: 'dust', name: 'Spinning Dust Devil', desc: 'Spinning desert dust devil swirling across a barren alkali flat', variant: 'ww_dust_devil', category: 'sfx', section: 'drawn', genre: 'frontier', icon: '🌪️', w: 380, h: 260 },
    ww_bullet_sparks: { num: 94, base: 'sparks', name: 'Ricocheting Bullets', desc: 'Ricocheting lead bullet sparks pinging off iron rails and boulders', variant: 'ww_bullet_sparks', category: 'sfx', section: 'drawn', genre: 'frontier', icon: '💥', w: 440, h: 180 },
    ww_haboob_wall: { num: 95, base: 'dust', name: 'Haboob Sandstorm Wall', desc: 'Towering haboob sandstorm wall advancing across a frontier town', variant: 'ww_haboob_wall', category: 'sfx', section: 'drawn', genre: 'frontier', icon: '🏜️', w: 500, h: 280 },
    ww_tumbleweed_street: { num: 96, base: 'tumbleweed', name: 'Rolling Tumbleweeds', desc: 'Dry tumbleweeds bouncing lazily down a quiet dirt main street', variant: 'ww_tumbleweed_street', category: 'ambiance', section: 'drawn', genre: 'frontier', icon: '🌾', w: 440, h: 200 },
    ww_canyon_river: { num: 97, base: 'river', name: 'Flowing Canyon River', desc: 'Clear canyon river flowing steadily past a weathered fishing pier', variant: 'ww_canyon_river', category: 'ambiance', section: 'drawn', genre: 'frontier', icon: '🏞️', w: 520, h: 220 },
    ww_circling_vultures: { num: 98, base: 'bats', name: 'Circling Vultures', desc: 'Turkey vultures circling slowly overhead, casting ground shadows', variant: 'ww_circling_vultures', category: 'ambiance', section: 'drawn', genre: 'frontier', icon: '🦅', w: 420, h: 260 },
    ww_slithering_snake: { num: 99, base: 'rats', name: 'Slithering Rattlesnake', desc: 'Diamondback rattlesnake slithering across sun-baked sandstone', variant: 'ww_slithering_snake', category: 'ambiance', section: 'drawn', genre: 'frontier', icon: '🐍', w: 380, h: 180 },
    ww_boardwalk_grit: { num: 100, base: 'dust', name: 'Boardwalk Desert Grit', desc: 'Fine red desert grit blowing across wooden boardwalk planks', variant: 'ww_boardwalk_grit', category: 'ambiance', section: 'drawn', genre: 'frontier', icon: '🍂', w: 440, h: 200 },
    // B. Animated Textures (Tiling / Area-Fill / Volumes)
    ww_cottonwood_sun: { num: 101, base: 'sunbeams', name: 'Dappled Cottonwood Sun', desc: 'Dappled afternoon sunlight filtering through cottonwood leaves by a creek', variant: 'ww_cottonwood_sun', category: 'lighting', section: 'filled', genre: 'frontier', icon: '🌳', w: 380, h: 280 },
    ww_boothill_moon: { num: 102, base: 'sunbeams', name: 'Cursed Boot-Hill Moon', desc: 'Sickly green moonlight bathing a cursed frontier boot-hill cemetery', variant: 'ww_boothill_moon', category: 'lighting', section: 'filled', genre: 'frontier', icon: '🌕', w: 380, h: 280 },
    ww_saloon_puddle_light: { num: 103, base: 'pond', name: 'Saloon Puddle Light', desc: 'Warm amber saloon window light rippling across muddy street puddles', variant: 'ww_saloon_puddle_light', category: 'lighting', section: 'filled', genre: 'frontier', icon: '🏮', w: 360, h: 260 },
    ww_saltflat_shimmer: { num: 104, base: 'hyperspace', name: 'Salt Flat Heat Shimmer', desc: 'Intense heat shimmer distorting the air over white salt flats', variant: 'ww_saltflat_shimmer', category: 'lighting', section: 'filled', genre: 'frontier', icon: '☀️', w: 380, h: 260 },
    ww_prairie_lightning: { num: 105, base: 'rain', name: 'Prairie Sheet Lightning', desc: 'Sheet lightning flashes illuminating a dark prairie thunderstorm', variant: 'ww_prairie_lightning', category: 'lighting', section: 'filled', genre: 'frontier', icon: '⚡', w: 400, h: 280 },
    ww_quicksand_wash: { num: 106, base: 'mud', name: 'Canyon Quicksand Pit', desc: 'Churning quicksand pit bubbling slowly in a canyon wash', variant: 'ww_quicksand_wash', category: 'hazards', section: 'filled', genre: 'frontier', icon: '🏜️', w: 360, h: 260 },
    ww_crude_oil_gusher: { num: 107, base: 'toxic_spill', name: 'Black Crude Gusher', desc: 'Thick black crude oil bubbling up from a ruptured wooden gusher', variant: 'ww_crude_oil_gusher', category: 'hazards', section: 'filled', genre: 'frontier', icon: '🛢️', w: 360, h: 260 },
    ww_prairie_brushfire: { num: 108, base: 'inferno', name: 'Prairie Brushfire', desc: 'Fast-moving prairie brushfire spreading across dry tumbleweed scrub', variant: 'ww_prairie_brushfire', category: 'hazards', section: 'filled', genre: 'frontier', icon: '🔥', w: 400, h: 260 },
    ww_canyon_rapids: { num: 109, base: 'ocean_waves', name: 'Whitewater Rapids', desc: 'White-water canyon rapids swirling violently around jagged boulders', variant: 'ww_canyon_rapids', category: 'hazards', section: 'filled', genre: 'frontier', icon: '🌊', w: 400, h: 260 },
    ww_ghosttown_ichor: { num: 110, base: 'toxic_spill', name: 'Ghost Town Cursed Ichor', desc: 'Cursed black ichor oozing upward between floorboards in a ghost town', variant: 'ww_ghosttown_ichor', category: 'hazards', section: 'filled', genre: 'frontier', icon: '🖤', w: 360, h: 260 },
    ww_wheat_field: { num: 111, base: 'forest', name: 'Swaying Wheat Field', desc: 'Golden wheat fields swaying in wind-blown waves on a homestead', variant: 'ww_wheat_field', category: 'props', section: 'filled', genre: 'frontier', icon: '🌾', w: 420, h: 300 },
    ww_buffalo_grass: { num: 112, base: 'forest', name: 'Rippling Buffalo Grass', desc: 'Tall buffalo grass rippling like an ocean across open plains', variant: 'ww_buffalo_grass', category: 'props', section: 'filled', genre: 'frontier', icon: '🌱', w: 420, h: 300 },
    ww_rope_bridge: { num: 113, base: 'conveyor', name: 'Swaying Rope Bridge', desc: 'Rope-and-plank suspension bridge swaying gently over a deep gorge', variant: 'ww_rope_bridge', category: 'props', section: 'filled', genre: 'frontier', icon: '🌉', w: 440, h: 220 },
    ww_mineshaft_timbers: { num: 114, base: 'dust', name: 'Groaning Mine Timbers', desc: 'Mine shaft ceiling timbers groaning and dropping steady trickles of dust', variant: 'ww_mineshaft_timbers', category: 'props', section: 'filled', genre: 'frontier', icon: '⛏️', w: 380, h: 260 },
    ww_muddy_corral: { num: 115, base: 'mud', name: 'Churned Mud Corral', desc: 'Muddy wooden corral churned by restless, pacing horses', variant: 'ww_muddy_corral', category: 'props', section: 'filled', genre: 'frontier', icon: '🐎', w: 380, h: 280 },
    ww_ghostrock_crater: { num: 116, base: 'crystal', name: 'Ghost-Rock Radiation', desc: 'Glowing blue Ghost-Rock radiation pulsing beneath a meteorite crater', variant: 'ww_ghostrock_crater', category: 'sfx', section: 'filled', genre: 'frontier', icon: '💎', w: 360, h: 260 },
    ww_gunsmoke_haze: { num: 117, base: 'smoke', name: 'Black-Powder Gunsmoke', desc: 'Thick gray black-powder gunsmoke hanging low after a street duel', variant: 'ww_gunsmoke_haze', category: 'sfx', section: 'filled', genre: 'frontier', icon: '💨', w: 380, h: 260 },
    ww_locust_swarm: { num: 118, base: 'dust', name: 'Locust Swarm Blanket', desc: 'Swarm of locusts blanketing a frontier cornfield', variant: 'ww_locust_swarm', category: 'sfx', section: 'filled', genre: 'frontier', icon: '🦗', w: 400, h: 280 },
    ww_shifting_dunes: { num: 119, base: 'dust', name: 'Shifting Desert Dunes', desc: 'Wind-rippled sand patterns shifting continuously across desert dunes', variant: 'ww_shifting_dunes', category: 'sfx', section: 'filled', genre: 'frontier', icon: '🏜️', w: 400, h: 280 },
    ww_blood_mist: { num: 120, base: 'fog', name: 'Battlefield Blood Mist', desc: 'Blood-red spectral mist rising from an ancient battlefield', variant: 'ww_blood_mist', category: 'sfx', section: 'filled', genre: 'frontier', icon: '🩸', w: 400, h: 280 },
    ww_mesa_wind: { num: 121, base: 'dust', name: 'Mesa Desert Wind', desc: 'Desert wind gusts blowing fine sand across flat mesa stone', variant: 'ww_mesa_wind', category: 'ambiance', section: 'filled', genre: 'frontier', icon: '💨', w: 380, h: 260 },
    ww_shallow_creek: { num: 122, base: 'pond', name: 'Shallow Pebble Creek', desc: 'Shallow creek water rippling gently over smooth river pebbles', variant: 'ww_shallow_creek', category: 'ambiance', section: 'filled', genre: 'frontier', icon: '💧', w: 380, h: 260 },
    ww_prairie_rain: { num: 123, base: 'rain', name: 'Heavy Prairie Rain', desc: 'Heavy prairie rain drumming onto dirt roads, forming muddy ruts', variant: 'ww_prairie_rain', category: 'ambiance', section: 'filled', genre: 'frontier', icon: '🌧️', w: 400, h: 280 },
    ww_mountain_snow: { num: 124, base: 'snow', name: 'Rocky Mountain Snow', desc: 'Snowflakes drifting silently over a high-altitude Rocky Mountain pass', variant: 'ww_mountain_snow', category: 'ambiance', section: 'filled', genre: 'frontier', icon: '❄️', w: 400, h: 280 },
    ww_depot_leaves: { num: 125, base: 'leaves', name: 'Depot Autumn Leaves', desc: 'Crisp autumn leaves blowing across a wooden train depot platform', variant: 'ww_depot_leaves', category: 'ambiance', section: 'filled', genre: 'frontier', icon: '🍂', w: 380, h: 260 },
    // C. Single Elements (Spot / Focal Objects / Props)
    ww_trail_campfire: { num: 126, base: 'campfire', name: 'Trail Campfire & Coffee', desc: 'Crackling trail campfire with a speckled blue coffee pot boiling over', variant: 'ww_trail_campfire', category: 'lighting', section: 'single', genre: 'frontier', icon: '☕', w: 190, h: 190 },
    ww_porch_lantern: { num: 127, base: 'lantern', name: 'Swinging Porch Lantern', desc: 'Brass kerosene lantern swinging gently on a porch iron hook', variant: 'ww_porch_lantern', category: 'lighting', section: 'single', genre: 'frontier', icon: '🏮', w: 150, h: 150 },
    ww_blacksmith_forge: { num: 128, base: 'campfire', name: 'Blacksmith Forge Coals', desc: 'Blacksmith branding iron glowing cherry-red inside forge coals', variant: 'ww_blacksmith_forge', category: 'lighting', section: 'single', genre: 'frontier', icon: '🔨', w: 200, h: 200 },
    ww_saloon_chandelier: { num: 129, base: 'lantern', name: 'Wagon-Wheel Chandelier', desc: 'Wagon-wheel chandelier of wax candles swaying in a saloon draft', variant: 'ww_saloon_chandelier', category: 'lighting', section: 'single', genre: 'frontier', icon: '🕯️', w: 210, h: 210 },
    ww_crossing_signal: { num: 130, base: 'spotlight', name: 'Railroad Crossing Signal', desc: 'Mechanical railroad crossing signal lantern blinking red', variant: 'ww_crossing_signal', category: 'lighting', section: 'single', genre: 'frontier', icon: '🚨', w: 160, h: 200 },
    ww_dynamite_bundle: { num: 131, base: 'sparks', name: 'Fizzing Dynamite Bundle', desc: 'Bundle of red dynamite sticks with a fizzing, sparking fuse', variant: 'ww_dynamite_bundle', category: 'hazards', section: 'single', genre: 'frontier', icon: '🧨', w: 180, h: 180 },
    ww_coiled_rattler: { num: 132, base: 'rats', name: 'Coiled Timber Rattler', desc: 'Coiled timber rattlesnake shaking its tail behind a desert rock', variant: 'ww_coiled_rattler', category: 'hazards', section: 'single', genre: 'frontier', icon: '🐍', w: 180, h: 180 },
    ww_beartrap: { num: 133, base: 'pit_trap', name: 'Steel Bear Trap', desc: 'Steel-jawed bear trap snapping shut on a forest trail', variant: 'ww_beartrap', category: 'hazards', section: 'single', genre: 'frontier', icon: '🪤', w: 180, h: 180 },
    ww_boiler_valve: { num: 134, base: 'smoke', name: 'Boiler Pressure Valve', desc: 'Pressurized locomotive steam boiler valve rattling and venting vapor', variant: 'ww_boiler_valve', category: 'hazards', section: 'single', genre: 'frontier', icon: '💨', w: 190, h: 190 },
    ww_gallows_trapdoor: { num: 135, base: 'pit_trap', name: 'Gallows Trapdoor', desc: 'Loose wooden gallows trapdoor creaking slightly under tension', variant: 'ww_gallows_trapdoor', category: 'hazards', section: 'single', genre: 'frontier', icon: '🪵', w: 200, h: 200 },
    ww_saloon_doors: { num: 136, base: 'fan', name: 'Batwing Saloon Doors', desc: 'Batwing wooden saloon doors flapping back and forth', variant: 'ww_saloon_doors', category: 'props', section: 'single', genre: 'frontier', icon: '🚪', w: 180, h: 180 },
    ww_windmill_pump: { num: 137, base: 'fan', name: 'Windmill Water Pump', desc: 'Tall wooden windmill water pump spinning in the desert breeze', variant: 'ww_windmill_pump', category: 'props', section: 'single', genre: 'frontier', icon: '💨', w: 220, h: 240 },
    ww_oil_derrick_pump: { num: 138, base: 'conveyor', name: 'Oil Derrick Rocker', desc: 'Iron oil derrick rocker arm pumping rhythmically up and down', variant: 'ww_oil_derrick_pump', category: 'props', section: 'single', genre: 'frontier', icon: '🏗️', w: 240, h: 220 },
    ww_player_piano: { num: 139, base: 'cyber_terminal', name: 'Ghost Player Piano', desc: 'Upright player piano keys depressing by themselves in an empty saloon', variant: 'ww_player_piano', category: 'props', section: 'single', genre: 'frontier', icon: '🎹', w: 200, h: 180 },
    ww_hangmans_noose: { num: 140, base: 'tentacles', name: 'Swaying Hangman Noose', desc: 'Hempen hangman\'s noose swaying gently from a timber beam', variant: 'ww_hangmans_noose', category: 'props', section: 'single', genre: 'frontier', icon: '🪢', w: 150, h: 220 },
    ww_ghostrock_ore: { num: 141, base: 'crystal', name: 'Unstable Ghost-Rock Ore', desc: 'Raw chunk of Ghost-Rock ore pulsing with unstable violet energy', variant: 'ww_ghostrock_ore', category: 'sfx', section: 'single', genre: 'frontier', icon: '🔮', w: 180, h: 180 },
    ww_cursed_pokerdeck: { num: 142, base: 'teleporter', name: 'Cursed Self-Shuffling Deck', desc: 'Cursed poker deck floating and shuffling itself above a felt table', variant: 'ww_cursed_pokerdeck', category: 'sfx', section: 'single', genre: 'frontier', icon: '🃏', w: 180, h: 180 },
    ww_medium_crystalball: { num: 143, base: 'crystal', name: 'Medium\'s Crystal Ball', desc: 'Traveling medium\'s crystal ball swirling with smoky desert visions', variant: 'ww_medium_crystalball', category: 'sfx', section: 'single', genre: 'frontier', icon: '🔮', w: 180, h: 180 },
    ww_gatling_barrels: { num: 144, base: 'sparks', name: 'Spinning Gatling Barrels', desc: 'Brass Gatling gun barrels spinning with bright muzzle flashes', variant: 'ww_gatling_barrels', category: 'sfx', section: 'single', genre: 'frontier', icon: '💥', w: 220, h: 180 },
    ww_geothermal_geyser: { num: 145, base: 'fountain', name: 'Erupting Hot Geyser', desc: 'Geothermal geyser erupting boiling water out of a desert fissure', variant: 'ww_geothermal_geyser', category: 'sfx', section: 'single', genre: 'frontier', icon: '⛲', w: 200, h: 240 },
    ww_wanted_posters: { num: 146, base: 'dust', name: 'Fluttering Wanted Posters', desc: 'Paper WANTED posters fluttering on a sheriff\'s office bulletin board', variant: 'ww_wanted_posters', category: 'ambiance', section: 'single', genre: 'frontier', icon: '📜', w: 180, h: 180 },
    ww_hitching_mustang: { num: 147, base: 'rats', name: 'Hitching-Post Mustang', desc: 'Hitching-post mustang flicking its tail and stomping a hoof', variant: 'ww_hitching_mustang', category: 'ambiance', section: 'single', genre: 'frontier', icon: '🐎', w: 220, h: 200 },
    ww_spitroast_rabbit: { num: 148, base: 'campfire', name: 'Spit-Roast Campfire', desc: 'Spit-roast rabbit turning slowly over open campfire coals', variant: 'ww_spitroast_rabbit', category: 'ambiance', section: 'single', genre: 'frontier', icon: '🍖', w: 180, h: 180 },
    ww_creaking_shutter: { num: 149, base: 'fan', name: 'Banging Town Shutter', desc: 'Weathered wooden shutter banging against a ghost-town wall', variant: 'ww_creaking_shutter', category: 'ambiance', section: 'single', genre: 'frontier', icon: '🪟', w: 160, h: 180 },
    ww_boot_hill_crow: { num: 150, base: 'bats', name: 'Boot-Hill Raven', desc: 'Black crow pecking at the dirt beside a tilted wooden cross', variant: 'ww_boot_hill_crow', category: 'ambiance', section: 'single', genre: 'frontier', icon: '🦅', w: 160, h: 160 },

    // -------------------------------------------------------------------------
    // 🚀 3. DEEP SPACE & HARD SCI-FI (75 ELEMENTS)
    // -------------------------------------------------------------------------
    // A. Linear Motion (Directional / Traveling / Drawn Paths)
    ds_ftl_starstreak: { num: 151, base: 'hyperspace', name: 'FTL Star-Streak Warp', desc: 'Distant stars streaking into white lines outside a bridge viewport at FTL', variant: 'ds_ftl_starstreak', category: 'lighting', section: 'drawn', genre: 'scifi', icon: '🌌', w: 520, h: 240 },
    ds_runway_lights: { num: 152, base: 'lightstrip', name: 'Runway Approach Lights', desc: 'Pulsing amber runway approach lights guiding shuttles into a docking bay', variant: 'ds_runway_lights', category: 'lighting', section: 'drawn', genre: 'scifi', icon: '🛬', w: 480, h: 160 },
    ds_solar_flare_wave: { num: 153, base: 'sunbeams', name: 'Solar Flare Radiation Wave', desc: 'Golden solar flare radiation wave washing across a planet\'s terminator line', variant: 'ds_solar_flare_wave', category: 'lighting', section: 'drawn', genre: 'scifi', icon: '☀️', w: 520, h: 260 },
    ds_sensor_sweep: { num: 154, base: 'spotlight', name: 'Tactical Sensor Sweep', desc: 'Green tactical sensor sweep beam scanning across a dark asteroid belt', variant: 'ds_sensor_sweep', category: 'lighting', section: 'drawn', genre: 'scifi', icon: '📡', w: 480, h: 220 },
    ds_evac_chevrons: { num: 155, base: 'lightstrip', name: 'Evacuation Light Chevrons', desc: 'Emergency evacuation floor strips illuminating in directional chevrons', variant: 'ds_evac_chevrons', category: 'lighting', section: 'drawn', genre: 'scifi', icon: '🚨', w: 480, h: 140 },
    ds_decompression_wind: { num: 156, base: 'smoke', name: 'Decompression Hull Breach', desc: 'Explosive decompression wind sucking loose tools and sparks toward a hull breach', variant: 'ds_decompression_wind', category: 'hazards', section: 'drawn', genre: 'scifi', icon: '💨', w: 480, h: 240 },
    ds_plasma_coolant_arc: { num: 157, base: 'plasma_leak', name: 'Plasma Conduit Arc', desc: 'Superheated plasma arcing down a ruptured reactor coolant conduit', variant: 'ds_plasma_coolant_arc', category: 'hazards', section: 'drawn', genre: 'scifi', icon: '⚡', w: 500, h: 200 },
    ds_micrometeoroid_shower: { num: 158, base: 'sparks', name: 'Micrometeoroid Shower', desc: 'Micrometeoroid shower streaking across an exterior hull catwalk', variant: 'ds_micrometeoroid_shower', category: 'hazards', section: 'drawn', genre: 'scifi', icon: '☄️', w: 480, h: 200 },
    ds_hydraulic_bulkheads: { num: 159, base: 'conveyor', name: 'Slamming Bulkhead Doors', desc: 'Heavy hydraulic bulkheads slamming shut sequentially down a corridor', variant: 'ds_hydraulic_bulkheads', category: 'hazards', section: 'drawn', genre: 'scifi', icon: '🚪', w: 460, h: 200 },
    ds_mining_laser: { num: 160, base: 'forcefield', name: 'Industrial Mining Laser', desc: 'Industrial mining laser slicing steadily across an asteroid\'s surface', variant: 'ds_mining_laser', category: 'hazards', section: 'drawn', genre: 'scifi', icon: '🔴', w: 500, h: 180 },
    ds_fuelrod_rails: { num: 161, base: 'conveyor', name: 'Reactor Fuel Rod Rails', desc: 'Automated cargo rails sliding cylindrical fuel rods into a reactor core', variant: 'ds_fuelrod_rails', category: 'props', section: 'drawn', genre: 'scifi', icon: '🔋', w: 460, h: 180 },
    ds_tracked_repair_drone: { num: 162, base: 'patrol_actor', name: 'Tracked Welding Drone', desc: 'Tracked repair drone rolling along deck plating welding hull seams', variant: 'ds_tracked_repair_drone', category: 'props', section: 'drawn', genre: 'scifi', icon: '🤖', w: 440, h: 200 },
    ds_antigrav_lift: { num: 163, base: 'lightstrip', name: 'Anti-Gravity Lift Shaft', desc: 'Vertical anti-gravity lift shaft carrying upward-drifting light motes', variant: 'ds_antigrav_lift', category: 'props', section: 'drawn', genre: 'scifi', icon: '🛗', w: 220, h: 480 },
    ds_space_elevator: { num: 164, base: 'conveyor', name: 'Orbital Space Elevator', desc: 'Orbital space-elevator car ascending past exterior station viewports', variant: 'ds_space_elevator', category: 'props', section: 'drawn', genre: 'scifi', icon: '🛰️', w: 260, h: 500 },
    ds_docking_clamps: { num: 165, base: 'fan', name: 'Steel Docking Clamps', desc: 'Heavy steel docking clamps extending and locking onto an incoming hull', variant: 'ds_docking_clamps', category: 'props', section: 'drawn', genre: 'scifi', icon: '🗜️', w: 440, h: 200 },
    ds_ion_thruster_plume: { num: 166, base: 'plasma_leak', name: 'Ion Thruster Plume', desc: 'Blue ion thruster plumes flaring behind a patrolling starfighter', variant: 'ds_ion_thruster_plume', category: 'sfx', section: 'drawn', genre: 'scifi', icon: '🚀', w: 460, h: 180 },
    ds_holo_sonar_ping: { num: 167, base: 'hologram', name: 'Holo Sonar Ping', desc: 'Holographic sonar ping expanding outward across a glass command table', variant: 'ds_holo_sonar_ping', category: 'sfx', section: 'drawn', genre: 'scifi', icon: '📡', w: 400, h: 400 },
    ds_transporter_beam: { num: 168, base: 'teleporter', name: 'Matter Transporter Beam', desc: 'Matter-transporter beam dematerializing golden particles upward', variant: 'ds_transporter_beam', category: 'sfx', section: 'drawn', genre: 'scifi', icon: '✨', w: 320, h: 420 },
    ds_containment_ripple: { num: 169, base: 'forcefield', name: 'Force-Field Impact Wave', desc: 'Containment force-field energy ripple spreading from an impact point', variant: 'ds_containment_ripple', category: 'sfx', section: 'drawn', genre: 'scifi', icon: '🛡️', w: 440, h: 240 },
    ds_nitrogen_coolant_vent: { num: 170, base: 'smoke', name: 'Liquid Nitrogen Vent', desc: 'Freezing white nitrogen coolant gas venting rapidly across a lab floor', variant: 'ds_nitrogen_coolant_vent', category: 'sfx', section: 'drawn', genre: 'scifi', icon: '❄️', w: 460, h: 200 },
    ds_tumbling_asteroids: { num: 171, base: 'dust', name: 'Tumbling Asteroid Field', desc: 'Jagged asteroids tumbling slowly past a station observation window', variant: 'ds_tumbling_asteroids', category: 'ambiance', section: 'drawn', genre: 'scifi', icon: '🪨', w: 480, h: 260 },
    ds_satellite_debris: { num: 172, base: 'dust', name: 'Derelict Satellite Debris', desc: 'Derelict satellite wreckage and solar panels drifting through orbit', variant: 'ds_satellite_debris', category: 'ambiance', section: 'drawn', genre: 'scifi', icon: '🛰️', w: 480, h: 240 },
    ds_zerog_water_droplets: { num: 173, base: 'fireflies', name: 'Zero-G Water Droplets', desc: 'Spherical zero-gravity water droplets floating lazily across a cabin', variant: 'ds_zerog_water_droplets', category: 'ambiance', section: 'drawn', genre: 'scifi', icon: '💧', w: 420, h: 240 },
    ds_nebula_drift: { num: 174, base: 'fog', name: 'Cosmic Nebula Drift', desc: 'Colorful deep-space nebula clouds shifting slowly in the background', variant: 'ds_nebula_drift', category: 'ambiance', section: 'drawn', genre: 'scifi', icon: '🌌', w: 500, h: 280 },
    ds_planetary_rings: { num: 175, base: 'hyperspace', name: 'Planetary Ice Rings', desc: 'Majestic planetary ice rings rotating outside a starship lounge', variant: 'ds_planetary_rings', category: 'ambiance', section: 'drawn', genre: 'scifi', icon: '🪐', w: 520, h: 260 },
    // B. Animated Textures (Tiling / Area-Fill / Volumes)
    ds_cherenkov_radiation: { num: 176, base: 'crystal', name: 'Cherenkov Core Glow', desc: 'Eerie blue Cherenkov radiation glowing beneath a submerged fission core', variant: 'ds_cherenkov_radiation', category: 'lighting', section: 'filled', genre: 'scifi', icon: '☢️', w: 380, h: 280 },
    ds_redalert_strobes: { num: 177, base: 'spotlight', name: 'Red-Alert Klaxon Wash', desc: 'Red-alert klaxon strobes washing rhythmically over brushed steel decking', variant: 'ds_redalert_strobes', category: 'lighting', section: 'filled', genre: 'scifi', icon: '🚨', w: 400, h: 280 },
    ds_biolum_moss: { num: 178, base: 'crystal', name: 'Bioluminescent Xenomoss', desc: 'Bioluminescent alien moss pulsing across a terraforming bio-dome floor', variant: 'ds_biolum_moss', category: 'lighting', section: 'filled', genre: 'scifi', icon: '🌿', w: 380, h: 280 },
    ds_void_starlight: { num: 179, base: 'hyperspace', name: 'Deep-Space Starfield', desc: 'Crisp starlight twinkling steadily across a deep-space void backdrop', variant: 'ds_void_starlight', category: 'lighting', section: 'filled', genre: 'scifi', icon: '✨', w: 420, h: 300 },
    ds_quantum_proc_grid: { num: 180, base: 'cyber_terminal', name: 'Quantum Processor Floor', desc: 'Sub-floor quantum processor grid pulsing with golden data traffic', variant: 'ds_quantum_proc_grid', category: 'lighting', section: 'filled', genre: 'scifi', icon: '🔲', w: 380, h: 280 },
    ds_radioactive_coolant_flood: { num: 181, base: 'toxic_spill', name: 'Radioactive Coolant Flood', desc: 'Boiling radioactive reactor coolant flooding a lower engineering bay', variant: 'ds_radioactive_coolant_flood', category: 'hazards', section: 'filled', genre: 'scifi', icon: '☢️', w: 400, h: 280 },
    ds_alien_biomass: { num: 182, base: 'tentacles', name: 'Alien Hive Creep', desc: 'Pulsing organic alien hive biomass creeping across bulkhead walls', variant: 'ds_alien_biomass', category: 'hazards', section: 'filled', genre: 'scifi', icon: '🦠', w: 380, h: 280 },
    ds_frost_fractals: { num: 183, base: 'snow', name: 'Sub-Zero Frost Deck', desc: 'Cryo-frozen metal decking cracking with spreading white frost fractals', variant: 'ds_frost_fractals', category: 'hazards', section: 'filled', genre: 'scifi', icon: '❄️', w: 380, h: 280 },
    ds_ion_storm_deck: { num: 184, base: 'sparks', name: 'Ion Storm Deck Arcs', desc: 'Electrified hull grating arcing wildly during a magnetic ion storm', variant: 'ds_ion_storm_deck', category: 'hazards', section: 'filled', genre: 'scifi', icon: '⚡', w: 380, h: 280 },
    ds_xenospore_quarantine: { num: 185, base: 'spores', name: 'Acid Xenospore Cloud', desc: 'Yellow acidic alien spore clouds blanketing a quarantine chamber', variant: 'ds_xenospore_quarantine', category: 'hazards', section: 'filled', genre: 'scifi', icon: '☣️', w: 400, h: 280 },
    ds_hydroponic_beds: { num: 186, base: 'fog', name: 'Hydroponic Garden Misting', desc: 'Tiered hydroponic garden beds misting rows of engineered space-crops', variant: 'ds_hydroponic_beds', category: 'props', section: 'filled', genre: 'scifi', icon: '🌱', w: 400, h: 280 },
    ds_cryopod_honeycomb: { num: 187, base: 'cyber_terminal', name: 'Cryo-Sleep Honeycomb Wall', desc: 'Honeycomb wall of cryo-sleep pods blinking with steady green vitals', variant: 'ds_cryopod_honeycomb', category: 'props', section: 'filled', genre: 'scifi', icon: '🛌', w: 400, h: 280 },
    ds_drone_charging_floor: { num: 188, base: 'cyber_terminal', name: 'Drone Charging Floor', desc: 'Automated drone charging floor with dozens of blinking battery LEDs', variant: 'ds_drone_charging_floor', category: 'props', section: 'filled', genre: 'scifi', icon: '🔋', w: 380, h: 280 },
    ds_ore_conveyor_crusher: { num: 189, base: 'conveyor', name: 'Ore Crusher Conveyor', desc: 'Heavy-duty conveyor grating moving mined asteroid ore into a crusher', variant: 'ds_ore_conveyor_crusher', category: 'props', section: 'filled', genre: 'scifi', icon: '⚙️', w: 420, h: 260 },
    ds_gyroscope_floor: { num: 190, base: 'fan', name: 'Sub-Bridge Gyroscope Bay', desc: 'Reinforced glass bridge floor revealing spinning gyroscopes below', variant: 'ds_gyroscope_floor', category: 'props', section: 'filled', genre: 'scifi', icon: '🧭', w: 380, h: 280 },
    ds_wormhole_tunnel: { num: 191, base: 'hyperspace', name: 'Hyperspace Wormhole Tunnel', desc: 'Swirling blue hyperspace wormhole tunnel surrounding a starship', variant: 'ds_wormhole_tunnel', category: 'sfx', section: 'filled', genre: 'scifi', icon: '🌀', w: 420, h: 300 },
    ds_gravitational_lens: { num: 192, base: 'teleporter', name: 'Gravitational Singularity Lens', desc: 'Gravitational lensing warping starlight around a singularity horizon', variant: 'ds_gravitational_lens', category: 'sfx', section: 'filled', genre: 'scifi', icon: '⚫', w: 400, h: 400 },
    ds_outpost_shield_dome: { num: 193, base: 'forcefield', name: 'Lunar Shield Dome', desc: 'Translucent energy shield dome shimmering across a lunar outpost', variant: 'ds_outpost_shield_dome', category: 'sfx', section: 'filled', genre: 'scifi', icon: '🛡️', w: 420, h: 300 },
    ds_fullroom_starchart: { num: 194, base: 'hologram', name: 'Tactical Holo Star-Chart', desc: 'Full-room holographic star-chart projection filling a tactical deck', variant: 'ds_fullroom_starchart', category: 'sfx', section: 'filled', genre: 'scifi', icon: '🌌', w: 400, h: 300 },
    ds_zerog_debris_field: { num: 195, base: 'dust', name: 'Zero-G Floating Debris', desc: 'Zero-gravity floating clipboards, pens, and dust inside a derelict hull', variant: 'ds_zerog_debris_field', category: 'sfx', section: 'filled', genre: 'scifi', icon: '📎', w: 400, h: 280 },
    ds_air_scrubber_mist: { num: 196, base: 'fog', name: 'Air-Scrubber Sterile Mist', desc: 'Sterile white air-scrubber mist drifting across clean medical lab tiles', variant: 'ds_air_scrubber_mist', category: 'ambiance', section: 'filled', genre: 'scifi', icon: '💨', w: 380, h: 260 },
    ds_comms_dish_shadows: { num: 197, base: 'bats', name: 'Rotating Comms Shadows', desc: 'Sweeping shadows of rotating comms dishes passing over lunar regolith', variant: 'ds_comms_dish_shadows', category: 'ambiance', section: 'filled', genre: 'scifi', icon: '📡', w: 400, h: 280 },
    ds_exoplanet_spores: { num: 198, base: 'spores', name: 'Floating Exoplanet Spores', desc: 'Glowing microscopic spores floating in the air of an exoplanet jungle', variant: 'ds_exoplanet_spores', category: 'ambiance', section: 'filled', genre: 'scifi', icon: '✨', w: 380, h: 260 },
    ds_xenobio_aquatank: { num: 199, base: 'pond', name: 'Zero-G Xenobiology Tank', desc: 'Gentle water ripples inside a zero-G aquatic xenobiology tank', variant: 'ds_xenobio_aquatank', category: 'ambiance', section: 'filled', genre: 'scifi', icon: '🫧', w: 380, h: 280 },
    ds_manifold_thermal_shimmer: { num: 200, base: 'hyperspace', name: 'Engine Manifold Heat Shimmer', desc: 'Subtle thermal shimmer rising from a starship\'s main engine manifolds', variant: 'ds_manifold_thermal_shimmer', category: 'ambiance', section: 'filled', genre: 'scifi', icon: '🔥', w: 380, h: 260 },
    // C. Single Elements (Spot / Focal Objects / Props)
    ds_fusion_reactor_core: { num: 201, base: 'plasma_leak', name: 'Fusion Core Plasma Pulse', desc: 'Central fusion reactor core pulsing with blinding white-blue plasma', variant: 'ds_fusion_reactor_core', category: 'lighting', section: 'single', genre: 'scifi', icon: '⚛️', w: 240, h: 240 },
    ds_dangling_led_panel: { num: 202, base: 'cyber_terminal', name: 'Dangling Flickering LED Panel', desc: 'Loose LED ceiling panel dangling by one wire and flickering in a derelict', variant: 'ds_dangling_led_panel', category: 'lighting', section: 'single', genre: 'scifi', icon: '💡', w: 180, h: 180 },
    ds_magnesium_flare: { num: 203, base: 'sparks', name: 'Magnesium Distress Flare', desc: 'Handheld magnesium distress flare burning bright red on lunar dust', variant: 'ds_magnesium_flare', category: 'lighting', section: 'single', genre: 'scifi', icon: '🔥', w: 180, h: 180 },
    ds_quarantine_holo_icon: { num: 204, base: 'hologram', name: 'Holo Quarantine Klaxon', desc: 'Rotating holographic QUARANTINE warning icon hovering over a hatch', variant: 'ds_quarantine_holo_icon', category: 'lighting', section: 'single', genre: 'scifi', icon: '☣️', w: 200, h: 200 },
    ds_specimen_jellyfish: { num: 205, base: 'fish', name: 'Specimen Alien Jellyfish', desc: 'Phosphorescent alien jellyfish pulsing inside a glass specimen cylinder', variant: 'ds_specimen_jellyfish', category: 'lighting', section: 'single', genre: 'scifi', icon: '🪼', w: 180, h: 240 },
    ds_liquid_oxygen_spray: { num: 206, base: 'smoke', name: 'Liquid Oxygen Spray', desc: 'Ruptured liquid-oxygen pipe spraying freezing vapor clouds', variant: 'ds_liquid_oxygen_spray', category: 'hazards', section: 'single', genre: 'scifi', icon: '❄️', w: 220, h: 200 },
    ds_sparking_surgical_arm: { num: 207, base: 'sparks', name: 'Malfunctioning Surgical Arm', desc: 'Malfunctioning robotic surgical arm twitching and sparking erratically', variant: 'ds_sparking_surgical_arm', category: 'hazards', section: 'single', genre: 'scifi', icon: '🦾', w: 220, h: 220 },
    ds_alien_eggsac: { num: 208, base: 'tentacles', name: 'Pulsing Alien Egg Sac', desc: 'Leathery alien egg sac pulsing with visible internal movement', variant: 'ds_alien_eggsac', category: 'hazards', section: 'single', genre: 'scifi', icon: '🥚', w: 180, h: 200 },
    ds_plasma_capacitor_arc: { num: 209, base: 'sparks', name: 'Plasma Capacitor Coils', desc: 'Exposed high-voltage plasma capacitor arcing between copper coils', variant: 'ds_plasma_capacitor_arc', category: 'hazards', section: 'single', genre: 'scifi', icon: '⚡', w: 220, h: 220 },
    ds_airlock_override_lever: { num: 210, base: 'sparks', name: 'Airlock Override Switch', desc: 'Airlock manual override lever flashing red with warning sparks', variant: 'ds_airlock_override_lever', category: 'hazards', section: 'single', genre: 'scifi', icon: '🚨', w: 160, h: 180 },
    ds_holo_planet_globe: { num: 211, base: 'hologram', name: '3D Planetary Holo-Globe', desc: 'Rotating 3D holographic planet projection hovering over a bridge table', variant: 'ds_holo_planet_globe', category: 'props', section: 'single', genre: 'scifi', icon: '🪐', w: 240, h: 240 },
    ds_cryopod_hatch_open: { num: 212, base: 'smoke', name: 'Unsealing Cryo-Pod', desc: 'Horizontal cryo-pod sliding open with a hiss of escaping frost', variant: 'ds_cryopod_hatch_open', category: 'props', section: 'single', genre: 'scifi', icon: '❄️', w: 240, h: 200 },
    ds_hull_comms_dish: { num: 213, base: 'fan', name: 'Rotating Comms Dish', desc: 'Dish-shaped deep-space communications array rotating on an exterior hull', variant: 'ds_hull_comms_dish', category: 'props', section: 'single', genre: 'scifi', icon: '📡', w: 240, h: 240 },
    ds_drydock_welder_arm: { num: 214, base: 'sparks', name: 'Drydock Laser Welder', desc: 'Articulated laser-welding arm assembling a fighter wing in drydock', variant: 'ds_drydock_welder_arm', category: 'props', section: 'single', genre: 'scifi', icon: '🦾', w: 240, h: 220 },
    ds_antigrav_gimbal_ring: { num: 215, base: 'fan', name: 'Gimbaled Gravity Ring', desc: 'Brass-and-steel artificial gravity ring spinning smoothly on gimbals', variant: 'ds_antigrav_gimbal_ring', category: 'props', section: 'single', genre: 'scifi', icon: '🔄', w: 220, h: 220 },
    ds_lab_spatial_tear: { num: 216, base: 'teleporter', name: 'Unstable Spatial Tear', desc: 'Unstable spatial tear warping light in mid-air inside a research lab', variant: 'ds_lab_spatial_tear', category: 'sfx', section: 'single', genre: 'scifi', icon: '🌀', w: 220, h: 220 },
    ds_escape_pod_launch: { num: 217, base: 'plasma_leak', name: 'Ejecting Escape Pod', desc: 'Cylindrical escape pod ejecting from a hull with a bright thruster burst', variant: 'ds_escape_pod_launch', category: 'sfx', section: 'single', genre: 'scifi', icon: '🚀', w: 240, h: 200 },
    ds_stasis_field_beam: { num: 218, base: 'forcefield', name: 'Artifact Stasis Beam', desc: 'Blue stasis beam holding an alien artifact suspended in mid-air', variant: 'ds_stasis_field_beam', category: 'sfx', section: 'single', genre: 'scifi', icon: '💎', w: 200, h: 260 },
    ds_holo_ai_avatar: { num: 219, base: 'hologram', name: 'Ship AI Holo-Avatar', desc: 'Holographic AI ship avatar flickering with scanlines on a projector pad', variant: 'ds_holo_ai_avatar', category: 'sfx', section: 'single', genre: 'scifi', icon: '🤖', w: 200, h: 240 },
    ds_orbital_cannon_charge: { num: 220, base: 'plasma_leak', name: 'Orbital Cannon Charge', desc: 'Orbital defense cannon charging up with converging energy rings', variant: 'ds_orbital_cannon_charge', category: 'sfx', section: 'single', genre: 'scifi', icon: '💥', w: 260, h: 260 },
    ds_medbay_ecg_screen: { num: 221, base: 'cyber_terminal', name: 'Med-Bay Vital Screen', desc: 'Med-bay telemetry screen scrolling a steady green ECG heartbeat line', variant: 'ds_medbay_ecg_screen', category: 'ambiance', section: 'single', genre: 'scifi', icon: '📈', w: 200, h: 180 },
    ds_hull_cleaner_droid: { num: 222, base: 'patrol_actor', name: 'Hull Cleaner Bot', desc: 'Small round hull-cleaning bot bumping gently against a bulkhead', variant: 'ds_hull_cleaner_droid', category: 'ambiance', section: 'single', genre: 'scifi', icon: '🧽', w: 160, h: 160 },
    ds_floating_drink_pouch: { num: 223, base: 'patrol_actor', name: 'Floating Zero-G Drink Pouch', desc: 'Sealed zero-G drink pouch floating and rotating slowly in mid-air', variant: 'ds_floating_drink_pouch', category: 'ambiance', section: 'single', genre: 'scifi', icon: '🧃', w: 140, h: 140 },
    ds_nav_console_standby: { num: 224, base: 'cyber_terminal', name: 'Nav Console Standby LEDs', desc: 'Navigation console indicator lights blinking in an idle standby loop', variant: 'ds_nav_console_standby', category: 'ambiance', section: 'single', genre: 'scifi', icon: '🎛️', w: 200, h: 180 },
    ds_viewport_alien_beetle: { num: 225, base: 'rats', name: 'Viewport Alien Bug', desc: 'Six-legged alien beetle skittering across a reinforced viewport', variant: 'ds_viewport_alien_beetle', category: 'ambiance', section: 'single', genre: 'scifi', icon: '🪲', w: 160, h: 160 },

    // -------------------------------------------------------------------------
    // 👁️ 4. COSMIC HORROR, NOIR & OCCULT MODERN (75 ELEMENTS)
    // -------------------------------------------------------------------------
    // A. Linear Motion (Directional / Traveling / Drawn Paths)
    ch_lighthouse_beam: { num: 226, base: 'spotlight', name: 'Lighthouse Fog Beam', desc: 'Rotating lighthouse beam cutting through thick coastal harbor fog', variant: 'ch_lighthouse_beam', category: 'lighting', section: 'drawn', genre: 'horror', icon: '🗼', w: 520, h: 260 },
    ch_flickering_streetlamps: { num: 227, base: 'spotlight', name: 'Dying Streetlamp Chain', desc: 'Iron streetlamps flickering and extinguishing one by one down an alley', variant: 'ch_flickering_streetlamps', category: 'lighting', section: 'drawn', genre: 'horror', icon: '💡', w: 480, h: 200 },
    ch_sedan_headlights: { num: 228, base: 'headlights', name: 'Noir Sedan Headlights', desc: '1930s sedan headlights slicing across wet cobblestones in a noir pursuit', variant: 'ch_sedan_headlights', category: 'lighting', section: 'drawn', genre: 'horror', icon: '🚗', w: 440, h: 220 },
    ch_floating_taper: { num: 229, base: 'torch', name: 'Floating Spectral Candle', desc: 'Floating spectral taper candle drifting down an empty mansion corridor', variant: 'ch_floating_taper', category: 'lighting', section: 'drawn', genre: 'horror', icon: '🕯️', w: 360, h: 180 },
    ch_bloodmoon_shadow: { num: 230, base: 'sunbeams', name: 'Blood-Moon Eclipse Shadow', desc: 'Blood-moon eclipse shadow creeping steadily across a stone courtyard', variant: 'ch_bloodmoon_shadow', category: 'lighting', section: 'drawn', genre: 'horror', icon: '🌘', w: 500, h: 260 },
    ch_cellar_ichor: { num: 231, base: 'river', name: 'Oozing Cellar Ichor', desc: 'Viscous black ichor oozing rapidly out from beneath a locked cellar door', variant: 'ch_cellar_ichor', category: 'hazards', section: 'drawn', genre: 'horror', icon: '🖤', w: 460, h: 200 },
    ch_shadow_tendrils: { num: 232, base: 'tentacles', name: 'Crawling Shadow Tendrils', desc: 'Living shadow tendrils slithering across floorboards toward light sources', variant: 'ch_shadow_tendrils', category: 'hazards', section: 'drawn', genre: 'horror', icon: '👥', w: 460, h: 200 },
    ch_roach_stair_tide: { num: 233, base: 'rats', name: 'Stairwell Roach Tide', desc: 'Tide of brown cockroaches pouring down a wooden stairwell', variant: 'ch_roach_stair_tide', category: 'hazards', section: 'drawn', genre: 'horror', icon: '🪳', w: 440, h: 220 },
    ch_reverse_blood_drip: { num: 234, base: 'rain', name: 'Inverted Blood Droplets', desc: 'Crimson blood droplets dripping upward from the floor toward the ceiling', variant: 'ch_reverse_blood_drip', category: 'hazards', section: 'drawn', genre: 'horror', icon: '🩸', w: 400, h: 260 },
    ch_gravefog_wall: { num: 235, base: 'fog', name: 'Freezing Grave-Fog Wall', desc: 'Rolling wall of unnatural, freezing grave-fog advancing down a street', variant: 'ch_gravefog_wall', category: 'hazards', section: 'drawn', genre: 'horror', icon: '🌫️', w: 500, h: 260 },
    ch_vintage_subway: { num: 236, base: 'conveyor', name: 'Haunted Subway Car', desc: 'Grimy 1920s subway car screeching past an empty underground platform', variant: 'ch_vintage_subway', category: 'props', section: 'drawn', genre: 'horror', icon: '🚇', w: 520, h: 200 },
    ch_elevator_needle: { num: 237, base: 'cyber_terminal', name: 'Occult Elevator Dial', desc: 'Brass elevator floor needle ticking erratically upward past the top floor', variant: 'ch_elevator_needle', category: 'props', section: 'drawn', genre: 'horror', icon: '🛗', w: 320, h: 160 },
    ch_ghost_typewriter: { num: 238, base: 'cyber_terminal', name: 'Ghost Typewriter Typing', desc: 'Vintage typewriter carriage sliding back and forth as keys type alone', variant: 'ch_ghost_typewriter', category: 'props', section: 'drawn', genre: 'horror', icon: '⌨️', w: 400, h: 180 },
    ch_dumbwaiter_lift: { num: 239, base: 'conveyor', name: 'Creaking Dumbwaiter Lift', desc: 'Wooden dumbwaiter lift creaking downward inside a haunted Victorian manor', variant: 'ch_dumbwaiter_lift', category: 'props', section: 'drawn', genre: 'horror', icon: '📦', w: 260, h: 440 },
    ch_film_projector_beam: { num: 240, base: 'spotlight', name: '16mm Projector Flickering Reel', desc: '16mm film projector casting flickering black-and-white reels onto a wall', variant: 'ch_film_projector_beam', category: 'props', section: 'drawn', genre: 'horror', icon: '📽️', w: 460, h: 220 },
    ch_noneuclidean_tiles: { num: 241, base: 'hyperspace', name: 'Non-Euclidean Floor Tiles', desc: 'Non-Euclidean geometric patterns shifting across a black-and-white tiled floor', variant: 'ch_noneuclidean_tiles', category: 'sfx', section: 'drawn', genre: 'horror', icon: '🏁', w: 460, h: 240 },
    ch_wallpaper_void_tear: { num: 242, base: 'teleporter', name: 'Floral Wallpaper Void Tear', desc: 'Reality tear ripping open in floral wallpaper, revealing starry cosmic voids', variant: 'ch_wallpaper_void_tear', category: 'sfx', section: 'drawn', genre: 'horror', icon: '🌌', w: 440, h: 240 },
    ch_madness_ripples: { num: 243, base: 'plasma_leak', name: 'Psychic Madness Ripples', desc: 'Psychic madness ripples distorting the air around a carved basalt idol', variant: 'ch_madness_ripples', category: 'sfx', section: 'drawn', genre: 'horror', icon: '🌀', w: 420, h: 240 },
    ch_drifting_apparition: { num: 244, base: 'smoke', name: 'Bookshelf Ghost Lady', desc: 'Translucent Victorian apparition drifting straight through solid bookshelves', variant: 'ch_drifting_apparition', category: 'sfx', section: 'drawn', genre: 'horror', icon: '👻', w: 420, h: 220 },
    ch_ritual_violet_mist: { num: 245, base: 'fog', name: 'Ritual Baseboard Mist', desc: 'Cursed violet mist curling along the baseboards of an occult ritual room', variant: 'ch_ritual_violet_mist', category: 'sfx', section: 'drawn', genre: 'horror', icon: '🔮', w: 480, h: 200 },
    ch_pier_coastal_fog: { num: 246, base: 'fog', name: 'Rotting Pier Fog', desc: 'Thick coastal fog rolling relentlessly across a rotting wooden pier', variant: 'ch_pier_coastal_fog', category: 'ambiance', section: 'drawn', genre: 'horror', icon: '🌫️', w: 500, h: 240 },
    ch_stainedglass_rain: { num: 247, base: 'rain', name: 'Gothic Stained-Glass Rain', desc: 'Rain streaks tapping diagonally against gothic stained-glass windows', variant: 'ch_stainedglass_rain', category: 'ambiance', section: 'drawn', genre: 'horror', icon: '🌧️', w: 440, h: 260 },
    ch_cemetery_leaves: { num: 248, base: 'leaves', name: 'Cemetery Swirling Leaves', desc: 'Crisp dead leaves swirling across a muddy cemetery path', variant: 'ch_cemetery_leaves', category: 'ambiance', section: 'drawn', genre: 'horror', icon: '🍂', w: 440, h: 200 },
    ch_crows_fullmoon: { num: 249, base: 'bats', name: 'Full-Moon Murder of Crows', desc: 'Murder of crows flying in a dark flock across a pale full moon', variant: 'ch_crows_fullmoon', category: 'ambiance', section: 'drawn', genre: 'horror', icon: '🦅', w: 460, h: 220 },
    ch_cigarette_smoke_lamp: { num: 250, base: 'smoke', name: 'Detective Cigarette Smoke', desc: 'Blue cigarette smoke drifting lazily across a detective\'s desk lamp', variant: 'ch_cigarette_smoke_lamp', category: 'ambiance', section: 'drawn', genre: 'horror', icon: '🚬', w: 400, h: 200 },
    // B. Animated Textures (Tiling / Area-Fill / Volumes)
    ch_venetian_blind_stripes: { num: 251, base: 'sunbeams', name: 'Venetian Blind Shadows', desc: 'Venetian blind shadow stripes shifting across a smoky office floor', variant: 'ch_venetian_blind_stripes', category: 'lighting', section: 'filled', genre: 'horror', icon: '🪟', w: 380, h: 280 },
    ch_harbor_indigo_moon: { num: 252, base: 'pond', name: 'Indigo Harbor Moonlight', desc: 'Eerie indigo moonlight rippling across dark, oily harbor water', variant: 'ch_harbor_indigo_moon', category: 'lighting', section: 'filled', genre: 'horror', icon: '🌊', w: 400, h: 280 },
    ch_sewer_green_gaslight: { num: 253, base: 'spotlight', name: 'Green Sewer Gaslight', desc: 'Sickly green Victorian gaslight illuminating damp brick sewer tunnels', variant: 'ch_sewer_green_gaslight', category: 'lighting', section: 'filled', genre: 'horror', icon: '🏮', w: 380, h: 260 },
    ch_frosted_lightning_flash: { num: 254, base: 'rain', name: 'Frosted-Glass Lightning', desc: 'Forked lightning flashes revealing brief silhouettes through frosted glass', variant: 'ch_frosted_lightning_flash', category: 'lighting', section: 'filled', genre: 'horror', icon: '⚡', w: 400, h: 280 },
    ch_ritual_chalk_candles: { num: 255, base: 'torch', name: 'Ritual Chalk Candle Shadows', desc: 'Flickering candle shadows dancing wildly across chalk ritual circles', variant: 'ch_ritual_chalk_candles', category: 'lighting', section: 'filled', genre: 'horror', icon: '🕯️', w: 380, h: 280 },
    ch_harbor_tentacle_water: { num: 256, base: 'tentacles', name: 'Harbor Abyssal Tentacles', desc: 'Dark harbor water writhing with shadowy tentacles just beneath the surface', variant: 'ch_harbor_tentacle_water', category: 'hazards', section: 'filled', genre: 'horror', icon: '🐙', w: 400, h: 280 },
    ch_collapsing_floorboards: { num: 257, base: 'pit_trap', name: 'Splintering Floor Collapse', desc: 'Rotting floorboards splintering and collapsing into a pitch-black cellar', variant: 'ch_collapsing_floorboards', category: 'hazards', section: 'filled', genre: 'horror', icon: '🕳️', w: 380, h: 260 },
    ch_crypt_maggot_carpet: { num: 258, base: 'rats', name: 'Writhing Maggot Carpet', desc: 'Endless carpet of pale maggots writhing across a stone crypt floor', variant: 'ch_crypt_maggot_carpet', category: 'hazards', section: 'filled', genre: 'horror', icon: '🪱', w: 380, h: 260 },
    ch_whispering_tar_pool: { num: 259, base: 'mud', name: 'Whispering Cult Tar Pool', desc: 'Bubbling pool of black tar whispering silently in a cultist temple', variant: 'ch_whispering_tar_pool', category: 'hazards', section: 'filled', genre: 'horror', icon: '🖤', w: 380, h: 280 },
    ch_creeping_hoarfrost: { num: 260, base: 'snow', name: 'Creeping Hoarfrost', desc: 'Unnatural hoarfrost creeping rapidly across walls, freezing everything solid', variant: 'ch_creeping_hoarfrost', category: 'hazards', section: 'filled', genre: 'horror', icon: '❄️', w: 400, h: 280 },
    ch_rattling_bookshelves: { num: 261, base: 'dust', name: 'Trembling Library Shelves', desc: 'Floor-to-ceiling library shelves trembling as leather tomes rattle', variant: 'ch_rattling_bookshelves', category: 'props', section: 'filled', genre: 'horror', icon: '📚', w: 400, h: 280 },
    ch_morgue_freezer_rattle: { num: 262, base: 'smoke', name: 'Rattling Morgue Drawers', desc: 'Stainless-steel morgue freezer drawers rattling violently from the inside', variant: 'ch_morgue_freezer_rattle', category: 'props', section: 'filled', genre: 'horror', icon: '🧊', w: 380, h: 260 },
    ch_breathing_padded_walls: { num: 263, base: 'tentacles', name: 'Breathing Padded Walls', desc: 'Asylum padded-cell walls pulsing slightly like breathing lungs', variant: 'ch_breathing_padded_walls', category: 'props', section: 'filled', genre: 'horror', icon: '🩺', w: 380, h: 280 },
    ch_cosmic_asphalt_puddle: { num: 264, base: 'pond', name: 'Cosmic Puddle Reflections', desc: 'Rain puddles on an asphalt street reflecting a starry alien cosmos', variant: 'ch_cosmic_asphalt_puddle', category: 'props', section: 'filled', genre: 'horror', icon: '🌌', w: 380, h: 260 },
    ch_wallpaper_blinking_eyes: { num: 265, base: 'crystal', name: 'Shifting Wallpaper Eyes', desc: 'Ornate Victorian wallpaper patterns subtly shifting into blinking eyes', variant: 'ch_wallpaper_blinking_eyes', category: 'props', section: 'filled', genre: 'horror', icon: '👁️', w: 380, h: 280 },
    ch_noir_filmgrain: { num: 266, base: 'dust', name: 'Noir Film Grain & Scratches', desc: 'Monochrome noir film grain and vertical scratches flickering over a scene', variant: 'ch_noir_filmgrain', category: 'sfx', section: 'filled', genre: 'horror', icon: '🎞️', w: 420, h: 300 },
    ch_altar_chromatic_aberration: { num: 267, base: 'teleporter', name: 'Altar Chromatic Aberration', desc: 'Reality-warping chromatic aberration pulsing around a summoning altar', variant: 'ch_altar_chromatic_aberration', category: 'sfx', section: 'filled', genre: 'horror', icon: '🌀', w: 400, h: 300 },
    ch_crttv_ghost_static: { num: 268, base: 'cyber_terminal', name: 'CRT Static Ghost Faces', desc: 'Static snow shifting into ghostly human faces across a wall of CRT TVs', variant: 'ch_crttv_ghost_static', category: 'sfx', section: 'filled', genre: 'horror', icon: '📺', w: 380, h: 280 },
    ch_gravity_inversion_room: { num: 269, base: 'dust', name: 'Gravity Inversion Zone', desc: 'Localized gravity inversion floating chairs, papers, and dust off the floor', variant: 'ch_gravity_inversion_room', category: 'sfx', section: 'filled', genre: 'horror', icon: '🪑', w: 400, h: 280 },
    ch_burning_eldritch_runes: { num: 270, base: 'sparks', name: 'Burning Eldritch Floor Runes', desc: 'Glowing eldritch runes burning sequentially into oak floorboards', variant: 'ch_burning_eldritch_runes', category: 'sfx', section: 'filled', genre: 'horror', icon: '🔥', w: 380, h: 280 },
    ch_midnight_cobblestone_rain: { num: 271, base: 'rain', name: 'Midnight Cobblestone Rain', desc: 'Heavy midnight downpour splashing into cobblestone puddles', variant: 'ch_midnight_cobblestone_rain', category: 'ambiance', section: 'filled', genre: 'horror', icon: '🌧️', w: 400, h: 280 },
    ch_crypt_ceiling_cobwebs: { num: 272, base: 'webs', name: 'Trembling Crypt Cobwebs', desc: 'Thick cobwebs trembling in an unseen draft across a crypt ceiling', variant: 'ch_crypt_ceiling_cobwebs', category: 'ambiance', section: 'filled', genre: 'horror', icon: '🕸️', w: 380, h: 260 },
    ch_chimney_woodsmoke: { num: 273, base: 'smoke', name: 'Chimney Hearth Smoke', desc: 'Faint wisp of fireplace smoke curling from a brick chimney', variant: 'ch_chimney_woodsmoke', category: 'ambiance', section: 'filled', genre: 'horror', icon: '💨', w: 360, h: 260 },
    ch_frosted_pacing_shadows: { num: 274, base: 'bats', name: 'Shadows Behind Frosted Glass', desc: 'Whispering shadow silhouettes pacing behind frosted glass', variant: 'ch_frosted_pacing_shadows', category: 'ambiance', section: 'filled', genre: 'horror', icon: '👥', w: 380, h: 260 },
    ch_crimescene_soot: { num: 275, base: 'dust', name: 'Burned Crime Scene Soot', desc: 'Floating soot particles drifting over a burned crime scene', variant: 'ch_crimescene_soot', category: 'ambiance', section: 'filled', genre: 'horror', icon: '⬛', w: 380, h: 260 },
    // C. Single Elements (Spot / Focal Objects / Props)
    ch_bankers_desklamp: { num: 276, base: 'spotlight', name: 'Green Banker\'s Desk Lamp', desc: 'Green-shaded banker\'s desk lamp buzzing on an investigator\'s desk', variant: 'ch_bankers_desklamp', category: 'lighting', section: 'single', genre: 'horror', icon: '💡', w: 180, h: 180 },
    ch_london_gaslamp: { num: 277, base: 'spotlight', name: 'London Fog Gaslamp', desc: 'Black-iron streetlamp flickering in a damp London fog', variant: 'ch_london_gaslamp', category: 'lighting', section: 'single', genre: 'horror', icon: '🏮', w: 180, h: 200 },
    ch_skull_tallow_candles: { num: 278, base: 'torch', name: 'Skull Tallow Candles', desc: 'Cluster of three dripping tallow candles stuck to a human skull', variant: 'ch_skull_tallow_candles', category: 'lighting', section: 'single', genre: 'horror', icon: '💀', w: 180, h: 180 },
    ch_purple_flame_lantern: { num: 279, base: 'lantern', name: 'Purple Flame Oil Lantern', desc: 'Ornate brass kerosene lantern burning with an eerie purple flame', variant: 'ch_purple_flame_lantern', category: 'lighting', section: 'single', genre: 'horror', icon: '🏮', w: 160, h: 180 },
    ch_pocket_lighter_flicker: { num: 280, base: 'torch', name: 'Trembling Zippo Lighter', desc: 'Pocket lighter flame snapping open and trembling in a nervous hand', variant: 'ch_pocket_lighter_flicker', category: 'lighting', section: 'single', genre: 'horror', icon: '🔥', w: 140, h: 140 },
    ch_bleeding_ritual_dagger: { num: 281, base: 'fountain', name: 'Bleeding Ritual Dagger', desc: 'Dark ritual dagger vibrating and bleeding fresh red drops onto floor', variant: 'ch_bleeding_ritual_dagger', category: 'hazards', section: 'single', genre: 'horror', icon: '🗡️', w: 160, h: 180 },
    ch_manhole_sewer_fumes: { num: 282, base: 'smoke', name: 'Bubbling Manhole Gas', desc: 'Open manhole bubbling with thick, putrid sewer gas', variant: 'ch_manhole_sewer_fumes', category: 'hazards', section: 'single', genre: 'horror', icon: '🕳️', w: 180, h: 180 },
    ch_iron_maiden_closing: { num: 283, base: 'pit_trap', name: 'Creaking Iron Maiden', desc: 'Iron maiden door slowly creaking shut with blood-stained spikes', variant: 'ch_iron_maiden_closing', category: 'hazards', section: 'single', genre: 'horror', icon: '⚰️', w: 180, h: 220 },
    ch_lab_pit_viper: { num: 284, base: 'rats', name: 'Hissing Lab Pit Viper', desc: 'Coiled pit viper hissing behind an overturned laboratory beaker', variant: 'ch_lab_pit_viper', category: 'hazards', section: 'single', genre: 'horror', icon: '🐍', w: 160, h: 160 },
    ch_elevator_cable_whip: { num: 285, base: 'sparks', name: 'Thrashing Elevator Cable', desc: 'Severed elevator cable whipping violently inside an open shaft', variant: 'ch_elevator_cable_whip', category: 'hazards', section: 'single', genre: 'horror', icon: '⚡', w: 200, h: 240 },
    ch_antique_gramophone: { num: 286, base: 'cyber_terminal', name: 'Antique Vinyl Gramophone', desc: 'Brass gramophone playing a scratched vinyl record as the needle bobs', variant: 'ch_antique_gramophone', category: 'props', section: 'single', genre: 'horror', icon: '📻', w: 200, h: 200 },
    ch_grandfather_clock: { num: 287, base: 'pit_trap', name: 'Swinging Pendulum Clock', desc: 'Mahogany grandfather clock with a swinging brass pendulum', variant: 'ch_grandfather_clock', category: 'props', section: 'single', genre: 'horror', icon: '🕰️', w: 160, h: 240 },
    ch_offhook_telephone: { num: 288, base: 'cyber_terminal', name: 'Buzzing Rotary Telephone', desc: 'Distressed rotary telephone with its receiver off the hook and buzzing', variant: 'ch_offhook_telephone', category: 'props', section: 'single', genre: 'horror', icon: '☎️', w: 160, h: 160 },
    ch_detective_ceiling_fan: { num: 289, base: 'fan', name: 'Slow Ceiling Paddle Fan', desc: 'Ceiling paddle fan turning slowly in a smoky detective agency', variant: 'ch_detective_ceiling_fan', category: 'props', section: 'single', genre: 'horror', icon: '💨', w: 220, h: 220 },
    ch_autopsy_table_drain: { num: 290, base: 'fountain', name: 'Autopsy Table Drain Gutter', desc: 'Cast-iron morgue autopsy table with blood draining into a rim gutter', variant: 'ch_autopsy_table_drain', category: 'props', section: 'single', genre: 'horror', icon: '🩸', w: 240, h: 180 },
    ch_sweating_cthulhu_idol: { num: 291, base: 'fountain', name: 'Oily Sweating Basalt Idol', desc: 'Carved basalt Cthulhu idol sweating beads of oily black liquid', variant: 'ch_sweating_cthulhu_idol', category: 'sfx', section: 'single', genre: 'horror', icon: '🗿', w: 180, h: 220 },
    ch_floating_grimoire: { num: 292, base: 'smoke', name: 'Smoking Occult Grimoire', desc: 'Open occult grimoire floating in mid-air with smoking pages', variant: 'ch_floating_grimoire', category: 'sfx', section: 'single', genre: 'horror', icon: '📖', w: 180, h: 180 },
    ch_seance_spirit_trumpet: { num: 293, base: 'fog', name: 'Séance Spirit Trumpet', desc: 'Spirit trumpet levitating above a séance table releasing ectoplasm', variant: 'ch_seance_spirit_trumpet', category: 'sfx', section: 'single', genre: 'horror', icon: '🎺', w: 180, h: 180 },
    ch_skull_ghostfire: { num: 294, base: 'inferno', name: 'Skull Green Ghost-Fire', desc: 'Human skull on a desk with green ghost-fire burning in eye sockets', variant: 'ch_skull_ghostfire', category: 'sfx', section: 'single', genre: 'horror', icon: '💀', w: 160, h: 160 },
    ch_liquid_mirror_ripple: { num: 295, base: 'pond', name: 'Rippling Liquid Mirror', desc: 'Antique mirror surface rippling like liquid when approached', variant: 'ch_liquid_mirror_ripple', category: 'sfx', section: 'single', genre: 'horror', icon: '🪞', w: 180, h: 220 },
    ch_dripping_black_umbrella: { num: 296, base: 'fountain', name: 'Dripping Wet Umbrella', desc: 'Black umbrella dripping water onto a dark entryway rug', variant: 'ch_dripping_black_umbrella', category: 'ambiance', section: 'single', genre: 'horror', icon: '☂️', w: 160, h: 180 },
    ch_dead_rose_vase: { num: 297, base: 'leaves', name: 'Dying Rose Dropping Petals', desc: 'Single dead rose in a crystal vase losing dry petals one by one', variant: 'ch_dead_rose_vase', category: 'ambiance', section: 'single', genre: 'horror', icon: '🥀', w: 140, h: 160 },
    ch_asylum_metronome: { num: 298, base: 'pit_trap', name: 'Swinging Asylum Metronome', desc: 'Ticking metronome swinging hypnotically on an asylum desk', variant: 'ch_asylum_metronome', category: 'ambiance', section: 'single', genre: 'horror', icon: '⏱️', w: 140, h: 160 },
    ch_gargoyle_pigeon: { num: 299, base: 'bats', name: 'Gargoyle Perched Pigeon', desc: 'Gray pigeon cooing and bobbing its head on a stone gargoyle ledge', variant: 'ch_gargoyle_pigeon', category: 'ambiance', section: 'single', genre: 'horror', icon: '🐦', w: 160, h: 160 },
    ch_curbside_wet_box: { num: 300, base: 'fountain', name: 'Curbside Wet Leaking Box', desc: 'Wet cardboard box sitting on a curb leaking dirty rain runoff', variant: 'ch_curbside_wet_box', category: 'ambiance', section: 'single', genre: 'horror', icon: '📦', w: 160, h: 160 },

    // -------------------------------------------------------------------------
    // ⚔️ 5. HIGH FANTASY & SWORD-AND-SORCERY (75 ELEMENTS)
    // -------------------------------------------------------------------------
    // A. Linear Motion (Directional / Traveling / Drawn Paths)
    hf_magic_missiles: { num: 301, base: 'sparks', name: 'Magic Missile Darts', desc: 'Glowing magic-missile arcane darts streaking in corkscrew spirals', variant: 'hf_magic_missiles', category: 'lighting', section: 'drawn', genre: 'fantasy', icon: '✨', w: 460, h: 180 },
    hf_flaming_arrows: { num: 302, base: 'inferno', name: 'Flaming Arrow Volley', desc: 'Flaming arrow volleys arching high through twilight sky', variant: 'hf_flaming_arrows', category: 'lighting', section: 'drawn', genre: 'fantasy', icon: '🏹', w: 500, h: 220 },
    hf_will_o_wisp: { num: 303, base: 'fireflies', name: 'Bobbing Will-o\'-the-Wisp', desc: 'Will-o\'-the-wisp bobbing and leading travelers deep into a swamp', variant: 'hf_will_o_wisp', category: 'lighting', section: 'drawn', genre: 'fantasy', icon: '✨', w: 420, h: 200 },
    hf_cathedral_sunbeams: { num: 304, base: 'sunbeams', name: 'Cathedral Golden Sunbeams', desc: 'Slanting golden sunbeams shifting through cathedral glass', variant: 'hf_cathedral_sunbeams', category: 'lighting', section: 'drawn', genre: 'fantasy', icon: '☀️', w: 480, h: 260 },
    hf_biolum_stalactite_drips: { num: 305, base: 'fountain', name: 'Glowing Crystal Drips', desc: 'Bioluminescent crystal stalactites dripping glowing drops', variant: 'hf_biolum_stalactite_drips', category: 'lighting', section: 'drawn', genre: 'fantasy', icon: '💎', w: 420, h: 240 },
    hf_dragonfire_wave: { num: 306, base: 'inferno', name: 'Dragon-Fire Scorch Wave', desc: 'Creeping wall of rolling dragon-fire scorching grass and stone', variant: 'hf_dragonfire_wave', category: 'hazards', section: 'drawn', genre: 'fantasy', icon: '🐉', w: 520, h: 220 },
    hf_rolling_boulder: { num: 307, base: 'dust', name: 'Rolling Stone Boulder', desc: 'Crushing rolling boulder trap thundering down stone hallway', variant: 'hf_rolling_boulder', category: 'hazards', section: 'drawn', genre: 'fantasy', icon: '🪨', w: 480, h: 200 },
    hf_cavern_river: { num: 308, base: 'river', name: 'Surging Cavern River', desc: 'Surging underground river rushing through dark cavern tunnel', variant: 'hf_cavern_river', category: 'hazards', section: 'drawn', genre: 'fantasy', icon: '🌊', w: 520, h: 240 },
    hf_scarab_beetle_swarm: { num: 309, base: 'rats', name: 'Dungeon Scarab Crawl', desc: 'Swarm of biting scarab beetles crawling along dungeon corridor', variant: 'hf_scarab_beetle_swarm', category: 'hazards', section: 'drawn', genre: 'fantasy', icon: '🪲', w: 440, h: 200 },
    hf_pendulum_blades: { num: 310, base: 'pit_trap', name: 'Swinging Pendulum Blades', desc: 'Sweeping pendulum blades swinging through floor channels', variant: 'hf_pendulum_blades', category: 'hazards', section: 'drawn', genre: 'fantasy', icon: '🪓', w: 480, h: 200 },
    hf_watermill_wheel: { num: 311, base: 'ocean_waves', name: 'Watermill Churning Wheel', desc: 'Wooden watermill wheel churning river water beside stone mill', variant: 'hf_watermill_wheel', category: 'props', section: 'drawn', genre: 'fantasy', icon: '⚙️', w: 460, h: 220 },
    hf_portcullis_chains: { num: 312, base: 'conveyor', name: 'Rattling Portcullis Chains', desc: 'Iron drawbridge chain rattling as portcullis lowers', variant: 'hf_portcullis_chains', category: 'props', section: 'drawn', genre: 'fantasy', icon: '🏰', w: 420, h: 220 },
    hf_dwarven_minecarts: { num: 313, base: 'conveyor', name: 'Dwarven Rail Minecarts', desc: 'Mining carts rolling along wooden rails in dwarven delve', variant: 'hf_dwarven_minecarts', category: 'props', section: 'drawn', genre: 'fantasy', icon: '🛒', w: 480, h: 180 },
    hf_royal_carriage_wheels: { num: 314, base: 'dust', name: 'Royal Carriage Wheels', desc: 'Horse-drawn royal carriage wheels rolling along cobblestones', variant: 'hf_royal_carriage_wheels', category: 'props', section: 'drawn', genre: 'fantasy', icon: '👑', w: 460, h: 200 },
    hf_tavern_sail_awning: { num: 315, base: 'fan', name: 'Flapping Canvas Awning', desc: 'Heavy canvas tavern sail awning flapping in sea wind', variant: 'hf_tavern_sail_awning', category: 'props', section: 'drawn', genre: 'fantasy', icon: '🎪', w: 420, h: 200 },
    hf_chain_lightning_arc: { num: 316, base: 'sparks', name: 'Forked Chain Lightning', desc: 'Forked chain-lightning bolt arcing between multiple armored targets', variant: 'hf_chain_lightning_arc', category: 'sfx', section: 'drawn', genre: 'fantasy', icon: '⚡', w: 480, h: 200 },
    hf_rainbow_bridge: { num: 317, base: 'lightstrip', name: 'Prismatic Bifrost Bridge', desc: 'Prismatic rainbow bridge extending across mountain chasm', variant: 'hf_rainbow_bridge', category: 'sfx', section: 'drawn', genre: 'fantasy', icon: '🌈', w: 520, h: 220 },
    hf_phantom_cavalry: { num: 318, base: 'smoke', name: 'Phantom Cavalry Charge', desc: 'Ethereal phantom cavalry charging silently across misty meadow', variant: 'hf_phantom_cavalry', category: 'sfx', section: 'drawn', genre: 'fantasy', icon: '🐎', w: 520, h: 240 },
    hf_pixiedust_leaf_vortex: { num: 319, base: 'leaves', name: 'Pixie Dust Leaf Vortex', desc: 'Swirling vortex of autumn leaves and pixie dust dancing in circle', variant: 'hf_pixiedust_leaf_vortex', category: 'sfx', section: 'drawn', genre: 'fantasy', icon: '🧚', w: 420, h: 260 },
    hf_cone_of_cold: { num: 320, base: 'snow', name: 'Cone of Cold Frost', desc: 'Freezing cone of cold white frost creeping across stone floor', variant: 'hf_cone_of_cold', category: 'sfx', section: 'drawn', genre: 'fantasy', icon: '❄️', w: 480, h: 240 },
    hf_mountain_river: { num: 321, base: 'river', name: 'Wild Mountain River', desc: 'Wild mountain river tumbling over rocks and mossy logs', variant: 'hf_mountain_river', category: 'ambiance', section: 'drawn', genre: 'fantasy', icon: '🏞️', w: 520, h: 240 },
    hf_circling_dragon: { num: 322, base: 'bats', name: 'High Circling Dragon', desc: 'Dragon circling high in thermals above mountain peaks', variant: 'hf_circling_dragon', category: 'ambiance', section: 'drawn', genre: 'fantasy', icon: '🐉', w: 460, h: 260 },
    hf_trout_stream: { num: 323, base: 'fish', name: 'Speckled Trout Stream', desc: 'Gentle meadow stream with swimming speckled trout', variant: 'hf_trout_stream', category: 'ambiance', section: 'drawn', genre: 'fantasy', icon: '🐟', w: 480, h: 220 },
    hf_bounding_deer: { num: 324, base: 'rats', name: 'Bounding Deer Herd', desc: 'Wild deer herd bounding gracefully across distant glade', variant: 'hf_bounding_deer', category: 'ambiance', section: 'drawn', genre: 'fantasy', icon: '🦌', w: 460, h: 220 },
    hf_dandelion_down: { num: 325, base: 'dust', name: 'Pasture Dandelion Seeds', desc: 'Fluffy white dandelion seeds floating across sunlit pasture', variant: 'hf_dandelion_down', category: 'ambiance', section: 'drawn', genre: 'fantasy', icon: '🌾', w: 420, h: 240 },
    // B. Animated Textures (Tiling / Area-Fill / Volumes)
    hf_godrays_stainedglass: { num: 326, base: 'sunbeams', name: 'Cathedral God Rays', desc: 'Colorful god rays streaming through cathedral stained-glass windows', variant: 'hf_godrays_stainedglass', category: 'lighting', section: 'filled', genre: 'fantasy', icon: '✨', w: 400, h: 300 },
    hf_underdark_toadstools: { num: 327, base: 'crystal', name: 'Underdark Giant Toadstools', desc: 'Bioluminescent giant toadstools pulsing softly in an Underdark cavern', variant: 'hf_underdark_toadstools', category: 'lighting', section: 'filled', genre: 'fantasy', icon: '🍄', w: 380, h: 280 },
    hf_underwater_caustics: { num: 328, base: 'pond', name: 'Underwater Caustic Light', desc: 'Shimmering underwater caustic light patterns dancing on a sandy seabed', variant: 'hf_underwater_caustics', category: 'lighting', section: 'filled', genre: 'fantasy', icon: '🌊', w: 400, h: 280 },
    hf_astral_nebula_islands: { num: 329, base: 'hyperspace', name: 'Astral Plane Nebula Void', desc: 'Ethereal astral-plane nebula clouds swirling beneath floating islands', variant: 'hf_astral_nebula_islands', category: 'lighting', section: 'filled', genre: 'fantasy', icon: '🌌', w: 420, h: 300 },
    hf_twilight_fireflies: { num: 330, base: 'fireflies', name: 'Twilight Forest Fireflies', desc: 'Golden fireflies blinking softly across a twilight forest clearing', variant: 'hf_twilight_fireflies', category: 'lighting', section: 'filled', genre: 'fantasy', icon: '✨', w: 380, h: 260 },
    hf_crusty_lavapit: { num: 331, base: 'lava_seam', name: 'Bubbling Magma Pit', desc: 'Crusty lava pit bubbling with popping molten magma blisters', variant: 'hf_crusty_lavapit', category: 'hazards', section: 'filled', genre: 'fantasy', icon: '🌋', w: 400, h: 260 },
    hf_emerald_acid_pool: { num: 332, base: 'toxic_spill', name: 'Sizzling Emerald Acid Pool', desc: 'Oozing emerald acid pool sizzling in an alchemist\'s dungeon', variant: 'hf_emerald_acid_pool', category: 'hazards', section: 'filled', genre: 'fantasy', icon: '🧪', w: 380, h: 260 },
    hf_cracking_lake_ice: { num: 333, base: 'snow', name: 'Cracking Lake Ice Fractures', desc: 'Thick lake ice cracking with spreading spiderweb fractures', variant: 'hf_cracking_lake_ice', category: 'hazards', section: 'filled', genre: 'fantasy', icon: '❄️', w: 400, h: 280 },
    hf_assassin_vines: { num: 334, base: 'tentacles', name: 'Blood Assassin Vines', desc: 'Writhing patch of thorny, blood-red assassin vines', variant: 'hf_assassin_vines', category: 'hazards', section: 'filled', genre: 'fantasy', icon: '🥀', w: 380, h: 280 },
    hf_peat_bog_gas: { num: 335, base: 'mud', name: 'Bubbling Peat Bog', desc: 'Bubbling peat bog releasing periodic bursts of swamp gas', variant: 'hf_peat_bog_gas', category: 'hazards', section: 'filled', genre: 'fantasy', icon: '🫧', w: 380, h: 260 },
    hf_forest_canopy_wind: { num: 336, base: 'forest', name: 'Swaying Forest Canopy', desc: 'Lush green forest tree canopies swaying gently in the wind', variant: 'hf_forest_canopy_wind', category: 'props', section: 'filled', genre: 'fantasy', icon: '🌳', w: 440, h: 320 },
    hf_kelp_coral_reef: { num: 337, base: 'pond', name: 'Underwater Kelp & Coral', desc: 'Undulating beds of underwater kelp and colorful coral reefs', variant: 'hf_kelp_coral_reef', category: 'props', section: 'filled', genre: 'fantasy', icon: '🪸', w: 400, h: 280 },
    hf_meadow_grass_breeze: { num: 338, base: 'forest', name: 'Rippling Summer Meadow', desc: 'Thick meadow grass rippling gently in a summer breeze', variant: 'hf_meadow_grass_breeze', category: 'props', section: 'filled', genre: 'fantasy', icon: '🌱', w: 420, h: 300 },
    hf_rainy_townsquare: { num: 339, base: 'rain', name: 'Rainy Cobblestone Square', desc: 'Wet cobblestone town square glistening with splashing raindrops', variant: 'hf_rainy_townsquare', category: 'props', section: 'filled', genre: 'fantasy', icon: '🌧️', w: 400, h: 280 },
    hf_dragon_gold_hoard: { num: 340, base: 'crystal', name: 'Glittering Gold Coin Hoard', desc: 'Dragon\'s gold coin hoard glittering with shifting metallic reflections', variant: 'hf_dragon_gold_hoard', category: 'props', section: 'filled', genre: 'fantasy', icon: '🪙', w: 400, h: 280 },
    hf_arcane_summoning_circle: { num: 341, base: 'teleporter', name: 'Arcane Summoning Circle', desc: 'Intricate arcane summoning circle pulsing with blue runes on a temple floor', variant: 'hf_arcane_summoning_circle', category: 'sfx', section: 'filled', genre: 'fantasy', icon: '🔮', w: 400, h: 300 },
    hf_wizard_golden_dome: { num: 342, base: 'forcefield', name: 'Wizard Golden Forcefield Dome', desc: 'Translucent golden forcefield dome shimmering over a wizard\'s tower', variant: 'hf_wizard_golden_dome', category: 'sfx', section: 'filled', genre: 'fantasy', icon: '🛡️', w: 420, h: 300 },
    hf_astral_void_silk: { num: 343, base: 'hyperspace', name: 'Astral Liquid Silk Void', desc: 'Astral plane starry void rippling like dark liquid silk', variant: 'hf_astral_void_silk', category: 'sfx', section: 'filled', genre: 'fantasy', icon: '🌌', w: 420, h: 300 },
    hf_flagstone_frost_spread: { num: 344, base: 'snow', name: 'Spreading Flagstone Frost', desc: 'Spreading frost crystals freezing across dungeon flagstones', variant: 'hf_flagstone_frost_spread', category: 'sfx', section: 'filled', genre: 'fantasy', icon: '❄️', w: 400, h: 280 },
    hf_magical_darkness_swirl: { num: 345, base: 'smoke', name: 'Magical Swirling Darkness', desc: 'Pitch-black magical darkness swirling with shadowy wisps', variant: 'hf_magical_darkness_swirl', category: 'sfx', section: 'filled', genre: 'fantasy', icon: '🌑', w: 400, h: 280 },
    hf_cave_drip_pond_ripples: { num: 346, base: 'pond', name: 'Cave Water Drop Ripples', desc: 'Concentric pond ripples expanding from falling cave water droplets', variant: 'hf_cave_drip_pond_ripples', category: 'ambiance', section: 'filled', genre: 'fantasy', icon: '💧', w: 380, h: 260 },
    hf_castle_morning_mist: { num: 347, base: 'fog', name: 'Castle Morning Courtyard Mist', desc: 'Rolling morning mist hugging a medieval castle courtyard', variant: 'hf_castle_morning_mist', category: 'ambiance', section: 'filled', genre: 'fantasy', icon: '🌫️', w: 400, h: 280 },
    hf_thatched_roof_snowfall: { num: 348, base: 'snow', name: 'Gentle Village Snowfall', desc: 'Soft white snowflakes accumulating gently on thatched village roofs', variant: 'hf_thatched_roof_snowfall', category: 'ambiance', section: 'filled', genre: 'fantasy', icon: '❄️', w: 400, h: 280 },
    hf_mountain_cloud_shadows: { num: 349, base: 'bats', name: 'Mountain Cloud Shadows', desc: 'Drifting cloud shadows passing slowly over a rugged mountain range', variant: 'hf_mountain_cloud_shadows', category: 'ambiance', section: 'filled', genre: 'fantasy', icon: '☁️', w: 420, h: 280 },
    hf_fairy_dust_glade: { num: 350, base: 'fireflies', name: 'Golden Fairy Dust Glade', desc: 'Sparkling golden fairy dust floating through an enchanted glade', variant: 'hf_fairy_dust_glade', category: 'ambiance', section: 'filled', genre: 'fantasy', icon: '✨', w: 380, h: 260 },
    // C. Single Elements (Spot / Focal Objects / Props)
    hf_adventurer_campfire: { num: 351, base: 'campfire', name: 'Adventurer\'s Campfire', desc: 'Crackling adventurer\'s campfire with rising orange sparks and smoke', variant: 'hf_adventurer_campfire', category: 'lighting', section: 'single', genre: 'fantasy', icon: '🔥', w: 190, h: 190 },
    hf_iron_sconce_torch: { num: 352, base: 'torch', name: 'Forged-Iron Sconce Torch', desc: 'Forged-iron wall sconce torch casting warm flickering firelight', variant: 'hf_iron_sconce_torch', category: 'lighting', section: 'single', genre: 'fantasy', icon: '🔥', w: 140, h: 140 },
    hf_tavern_hearth_fireplace: { num: 353, base: 'campfire', name: 'Tavern Hearth Fireplace', desc: 'Roaring stone tavern hearth fireplace warming a common room', variant: 'hf_tavern_hearth_fireplace', category: 'lighting', section: 'single', genre: 'fantasy', icon: '🪵', w: 220, h: 200 },
    hf_floating_pedestal_crystal: { num: 354, base: 'crystal', name: 'Spinning Pedestal Crystal', desc: 'Faceted enchanted crystal floating and spinning above a marble pedestal', variant: 'hf_floating_pedestal_crystal', category: 'lighting', section: 'single', genre: 'fantasy', icon: '💎', w: 180, h: 220 },
    hf_desk_beeswax_candles: { num: 355, base: 'torch', name: 'Wizard Desk Beeswax Candles', desc: 'Dripping beeswax candles burning down on a wizard\'s oak desk', variant: 'hf_desk_beeswax_candles', category: 'lighting', section: 'single', genre: 'fantasy', icon: '🕯️', w: 160, h: 160 },
    hf_iron_spike_floortrap: { num: 356, base: 'pit_trap', name: 'Spring-Loaded Spike Trap', desc: 'Concealed floor trap shooting iron spikes up through stone grates', variant: 'hf_iron_spike_floortrap', category: 'hazards', section: 'single', genre: 'fantasy', icon: '🕳️', w: 180, h: 180 },
    hf_dragonhead_flame_sconce: { num: 357, base: 'inferno', name: 'Dragon-Head Flame Trap', desc: 'Carved stone dragon-head sconce breathing intermittent jets of flame', variant: 'hf_dragonhead_flame_sconce', category: 'hazards', section: 'single', genre: 'fantasy', icon: '🐉', w: 180, h: 200 },
    hf_mimic_chest: { num: 358, base: 'pit_trap', name: 'Snapping Mimic Chest', desc: 'Wooden treasure chest rattling its lid and gnashing sharp mimic teeth', variant: 'hf_mimic_chest', category: 'hazards', section: 'single', genre: 'fantasy', icon: '📦', w: 180, h: 180 },
    hf_flytrap_monster_plant: { num: 359, base: 'tentacles', name: 'Giant Snapping Flytrap', desc: 'Giant Venus-flytrap monster plant snapping its thorny jaws shut', variant: 'hf_flytrap_monster_plant', category: 'hazards', section: 'single', genre: 'fantasy', icon: '🪴', w: 200, h: 200 },
    hf_falling_stalactite: { num: 360, base: 'pit_trap', name: 'Trembling Limestone Stalactite', desc: 'Heavy limestone stalactite trembling on a cave ceiling before dropping', variant: 'hf_falling_stalactite', category: 'hazards', section: 'single', genre: 'fantasy', icon: '🪨', w: 160, h: 220 },
    hf_bubbling_witch_cauldron: { num: 361, base: 'fountain', name: 'Bubbling Witch\'s Cauldron', desc: 'Cast-iron witch\'s cauldron bubbling over with green potion foam', variant: 'hf_bubbling_witch_cauldron', category: 'props', section: 'single', genre: 'fantasy', icon: '🧙‍♀️', w: 180, h: 180 },
    hf_country_windmill: { num: 362, base: 'fan', name: 'Country Hill Windmill', desc: 'Canvas-sailed wooden windmill turning steadily on a countryside hill', variant: 'hf_country_windmill', category: 'props', section: 'single', genre: 'fantasy', icon: '💨', w: 220, h: 240 },
    hf_self_flipping_spellbook: { num: 363, base: 'cyber_terminal', name: 'Self-Flipping Spellbook', desc: 'Open leather-bound spellbook flipping its own glowing parchment pages', variant: 'hf_self_flipping_spellbook', category: 'props', section: 'single', genre: 'fantasy', icon: '📖', w: 180, h: 180 },
    hf_forge_bellows: { num: 364, base: 'campfire', name: 'Forge Bellows & Coals', desc: 'Leather blacksmith\'s bellows pumping air into glowing forge coals', variant: 'hf_forge_bellows', category: 'props', section: 'single', genre: 'fantasy', icon: '🔨', w: 200, h: 200 },
    hf_creaking_tavern_sign: { num: 365, base: 'fan', name: 'Swinging Tavern Sign', desc: 'Painted wooden tavern sign creaking and swinging on iron hinges', variant: 'hf_creaking_tavern_sign', category: 'props', section: 'single', genre: 'fantasy', icon: '🪧', w: 180, h: 180 },
    hf_amethyst_portal_arch: { num: 366, base: 'teleporter', name: 'Amethyst Portal Archway', desc: 'Swirling amethyst dimensional portal standing inside a stone archway', variant: 'hf_amethyst_portal_arch', category: 'sfx', section: 'single', genre: 'fantasy', icon: '🌀', w: 220, h: 260 },
    hf_levitating_runed_greatsword: { num: 367, base: 'crystal', name: 'Levitating Runed Greatsword', desc: 'Levitating runed greatsword spinning slowly in a vertical beam of light', variant: 'hf_levitating_runed_greatsword', category: 'sfx', section: 'single', genre: 'fantasy', icon: '⚔️', w: 180, h: 260 },
    hf_azure_healing_fountain: { num: 368, base: 'fountain', name: 'Azure Healing Fountain', desc: 'Marble fountain overflowing with sparkling, azure healing water', variant: 'hf_azure_healing_fountain', category: 'sfx', section: 'single', genre: 'fantasy', icon: '⛲', w: 220, h: 220 },
    hf_floating_spectral_skull: { num: 369, base: 'smoke', name: 'Floating Ectoplasm Skull', desc: 'Floating spectral skull trailing wisps of pale blue ectoplasm', variant: 'hf_floating_spectral_skull', category: 'sfx', section: 'single', genre: 'fantasy', icon: '💀', w: 180, h: 180 },
    hf_storm_scrying_orb: { num: 370, base: 'crystal', name: 'Storm Scrying Crystal Ball', desc: 'Scrying crystal ball swirling with miniature lightning storm clouds', variant: 'hf_storm_scrying_orb', category: 'sfx', section: 'single', genre: 'fantasy', icon: '🔮', w: 180, h: 180 },
    hf_heraldic_castle_banners: { num: 371, base: 'fan', name: 'Rippling Castle Banners', desc: 'Heraldic castle banners and tournament pennants rippling in the wind', variant: 'hf_heraldic_castle_banners', category: 'ambiance', section: 'single', genre: 'fantasy', icon: '🚩', w: 180, h: 220 },
    hf_monarch_wildflowers: { num: 372, base: 'bats', name: 'Monarch Wildflower Flutter', desc: 'Monarch butterflies fluttering around a patch of blooming wildflowers', variant: 'hf_monarch_wildflowers', category: 'ambiance', section: 'single', genre: 'fantasy', icon: '🦋', w: 200, h: 180 },
    hf_roast_boar_spit: { num: 373, base: 'campfire', name: 'Spit-Roast Boar Fire', desc: 'Whole roast boar turning slowly on a spit over a kitchen fire', variant: 'hf_roast_boar_spit', category: 'ambiance', section: 'single', genre: 'fantasy', icon: '🐗', w: 200, h: 180 },
    hf_alchemist_brass_hourglass: { num: 374, base: 'fountain', name: 'Draining Brass Hourglass', desc: 'Ornate brass hourglass draining golden sand on an alchemist\'s table', variant: 'hf_alchemist_brass_hourglass', category: 'ambiance', section: 'single', genre: 'fantasy', icon: '⏳', w: 140, h: 200 },
    hf_treefrog_lilypad: { num: 375, base: 'pond', name: 'Water-Lily Pad Treefrog', desc: 'Green tree frog hopping onto a floating water-lily pad', variant: 'hf_treefrog_lilypad', category: 'ambiance', section: 'single', genre: 'fantasy', icon: '🐸', w: 160, h: 160 },

    // =========================================================================
    // LEGACY BACKWARD-COMPATIBILITY ALIASES (FOR PREVIOUSLY SAVED MAPS)
    // =========================================================================
    uni_drizzle: { base: 'rain', name: 'Light Rain & Puddle Ripples', variant: 'uni_drizzle', category: 'ambiance', section: 'filled', genre: 'fantasy', w: 360, h: 260 },
    uni_downpour: { base: 'rain', name: 'Gale Storm & Sheet Lightning', variant: 'uni_downpour', category: 'ambiance', section: 'filled', genre: 'fantasy', w: 380, h: 280 },
    uni_hailstorm: { base: 'rain', name: 'Bouncing Ice Hailstones', variant: 'uni_hailstorm', category: 'ambiance', section: 'filled', genre: 'fantasy', w: 360, h: 260 },
    uni_flurry: { base: 'snow', name: 'Crystalline 6-Point Snowflakes', variant: 'uni_flurry', category: 'ambiance', section: 'filled', genre: 'fantasy', w: 360, h: 260 },
    uni_blizzard: { base: 'snow', name: 'Howling Whiteout Snow Gale', variant: 'uni_blizzard', category: 'ambiance', section: 'filled', genre: 'fantasy', w: 380, h: 280 },
    uni_mist: { base: 'fog', name: 'Low Meadow Ground Mist', variant: 'uni_mist', category: 'ambiance', section: 'filled', genre: 'fantasy', w: 380, h: 260 },
    uni_densefog: { base: 'fog', name: 'Dense Swamp & Moor Fog', variant: 'uni_densefog', category: 'ambiance', section: 'filled', genre: 'fantasy', w: 400, h: 280 },
    uni_leaves: { base: 'leaves', name: 'Swirling Autumn Maple Leaves', variant: 'uni_leaves', category: 'ambiance', section: 'filled', genre: 'fantasy', w: 360, h: 260 },
    uni_petals: { base: 'leaves', name: 'Drifting Pink Sakura Petals', variant: 'uni_petals', category: 'ambiance', section: 'filled', genre: 'fantasy', w: 360, h: 260 },
    uni_dandelion: { base: 'dust', name: 'Floating Dandelion Seed Down', variant: 'uni_dandelion', category: 'ambiance', section: 'filled', genre: 'fantasy', w: 340, h: 240 },
    uni_sandstorm: { base: 'dust', name: 'Howling Desert Sandstorm Wall', variant: 'uni_sandstorm', category: 'ambiance', section: 'drawn', genre: 'frontier', w: 380, h: 260 },
    uni_fireflies: { base: 'fireflies', name: 'Woodland Evening Fireflies', variant: 'uni_fireflies', category: 'lighting', section: 'filled', genre: 'fantasy', w: 340, h: 240 },
    uni_wildfire: { base: 'inferno', name: 'Spreading Brush & Timber Blaze', variant: 'uni_wildfire', category: 'hazards', section: 'drawn', genre: 'frontier', w: 260, h: 200 },
    uni_blacksmoke: { base: 'smoke', name: 'Billowing Black Soot Plume', variant: 'uni_blacksmoke', category: 'hazards', section: 'drawn', genre: 'frontier', w: 260, h: 220 },
    uni_mudbog: { base: 'mud', name: 'Sucking Swamp Mud Mire', variant: 'uni_mudbog', category: 'hazards', section: 'filled', genre: 'fantasy', w: 260, h: 200 },
    uni_quicksand: { base: 'mud', name: 'Spiraling Desert Quicksand Pit', variant: 'uni_quicksand', category: 'hazards', section: 'filled', genre: 'frontier', w: 260, h: 200 },
    uni_tarpit: { base: 'mud', name: 'Boiling Black Bitumen Tar Pit', variant: 'uni_tarpit', category: 'hazards', section: 'filled', genre: 'horror', w: 260, h: 200 },
    uni_cobwebs: { base: 'webs', name: 'Giant Spiderweb & Cocoons', variant: 'uni_cobwebs', category: 'ambiance', section: 'filled', genre: 'horror', w: 240, h: 220 },
    uni_lightning: { base: 'sparks', name: 'Ground Ball-Lightning Zone', variant: 'uni_lightning', category: 'sfx', section: 'filled', genre: 'fantasy', w: 240, h: 200 },
    uni_steamvent: { base: 'steam', name: 'Scalding Rock Geyser Vent', variant: 'uni_steamvent', category: 'hazards', section: 'single', genre: 'frontier', w: 220, h: 220 },
    uni_lavapool: { base: 'lava_seam', name: 'Molten Volcanic Magma Fissure', variant: 'uni_lavapool', category: 'hazards', section: 'filled', genre: 'fantasy', w: 320, h: 180 },
    uni_poisonfumes: { base: 'smoke', name: 'Noxious Marsh Gas Fumes', variant: 'uni_poisonfumes', category: 'hazards', section: 'filled', genre: 'fantasy', w: 260, h: 220 },
    uni_rockpit: { base: 'pit_trap', name: 'Collapsed Sinkhole Chasm', variant: 'uni_rockpit', category: 'hazards', section: 'filled', genre: 'frontier', w: 220, h: 220 },
    uni_brambles: { base: 'tentacles', name: 'Razor-Thorn Briar Patch', variant: 'uni_brambles', category: 'hazards', section: 'filled', genre: 'fantasy', w: 260, h: 220 },
    uni_campfire: { base: 'campfire', name: 'Campsite Stone-Ring Log Fire', variant: 'uni_campfire', category: 'lighting', section: 'single', genre: 'fantasy', w: 190, h: 190 },
    uni_hearth: { base: 'campfire', name: 'Stone Wall Hearth & Mantel', variant: 'uni_hearth', category: 'lighting', section: 'single', genre: 'fantasy', w: 220, h: 200 },
    uni_dyingembers: { base: 'campfire', name: 'Smoldering Ash & Red Coals', variant: 'uni_dyingembers', category: 'lighting', section: 'single', genre: 'fantasy', w: 170, h: 170 },
    uni_torch: { base: 'torch', name: 'Iron Wall-Bracket Pitch Torch', variant: 'uni_torch', category: 'lighting', section: 'single', genre: 'fantasy', w: 130, h: 130 },
    uni_lantern: { base: 'lantern', name: 'Brass Hooded Oil Lantern', variant: 'uni_lantern', category: 'lighting', section: 'single', genre: 'frontier', w: 150, h: 150 },
    uni_candles: { base: 'torch', name: 'Melted Wax Pillar Candles', variant: 'uni_candles', category: 'lighting', section: 'single', genre: 'fantasy', w: 150, h: 150 },
    uni_brazier: { base: 'campfire', name: 'Standing Iron Fire Basket', variant: 'uni_brazier', category: 'lighting', section: 'single', genre: 'fantasy', w: 170, h: 170 },
    uni_sunbeams: { base: 'sunbeams', name: 'Golden Forest Sunbeams', variant: 'golden_sun', category: 'lighting', section: 'filled', genre: 'fantasy', w: 340, h: 300 },
    uni_moonbeams: { base: 'sunbeams', name: 'Silvery Midnight Moonbeams', variant: 'moonbeams', category: 'lighting', section: 'filled', genre: 'horror', w: 340, h: 300 },
    uni_caverays: { base: 'sunbeams', name: 'Cavern Ceiling Skylight Shaft', variant: 'emerald_cave', category: 'lighting', section: 'filled', genre: 'fantasy', w: 320, h: 280 },
    uni_biolum: { base: 'crystal', name: 'Glowing Cave Mushroom Ring', variant: 'uni_biolum', category: 'lighting', section: 'filled', genre: 'fantasy', w: 220, h: 220 },
    uni_aurora: { base: 'hyperspace', name: 'Shimmering Polar Aurora', variant: 'astral_aurora', category: 'lighting', section: 'filled', genre: 'fantasy', w: 360, h: 260 },
    uni_pond: { base: 'pond', name: 'Deformable Pond & Lily Pads', variant: 'pond_lily', category: 'props', section: 'filled', genre: 'fantasy', w: 360, h: 280 },
    uni_cavernpool: { base: 'pond', name: 'Deformable Crystal Cave Pool', variant: 'cavern_pool', category: 'props', section: 'filled', genre: 'fantasy', w: 360, h: 280 },
    uni_river: { base: 'river', name: 'Flowing Stream / River', variant: 'stream', category: 'ambiance', section: 'drawn', genre: 'fantasy', w: 520, h: 220 },
    uni_rapids: { base: 'river', name: 'Whitewater River Rapids', variant: 'ocean', category: 'ambiance', section: 'drawn', genre: 'frontier', w: 520, h: 240 },
    uni_swampwater: { base: 'river', name: 'Murky Bayou & Marsh Water', variant: 'swamp', category: 'ambiance', section: 'drawn', genre: 'horror', w: 480, h: 240 },
    uni_lavariver: { base: 'river', name: 'Flowing Molten Lava River', variant: 'lava', category: 'hazards', section: 'drawn', genre: 'fantasy', w: 520, h: 220 },
    uni_waterfall: { base: 'waterfall', name: 'Roaring Cliff Waterfall', variant: 'mountain_falls', category: 'ambiance', section: 'drawn', genre: 'fantasy', w: 240, h: 340 },
    uni_oakforest: { base: 'forest', name: 'Deformable Oak Forest Tool', variant: 'ancient_oak', category: 'props', section: 'filled', genre: 'fantasy', w: 440, h: 400 },
    uni_pineforest: { base: 'forest', name: 'Deformable Pine Forest Tool', variant: 'boreal_pine', category: 'props', section: 'filled', genre: 'fantasy', w: 440, h: 400 },
    uni_jungle: { base: 'forest', name: 'Deformable Jungle Palm Tool', variant: 'tropical_jungle', category: 'props', section: 'filled', genre: 'fantasy', w: 440, h: 400 },
    uni_autumnforest: { base: 'forest', name: 'Deformable Autumn Woods Tool', variant: 'autumn_maple', category: 'props', section: 'filled', genre: 'fantasy', w: 440, h: 400 },
    uni_oceansurf: { base: 'ocean_waves', name: 'Sandy Beach & Reef Surf', variant: 'tropical_reef', category: 'ambiance', section: 'filled', genre: 'fantasy', w: 480, h: 320 },
};


/**
 * Realistic Living Elements & Environmental FX Engine
 * High-fidelity, cinematic visual effects:
 * - Deformable Flowing Water (Spline River & Polygon Pool with draggable shape & width handles)
 * - Photorealistic Campfire & Torches (Additive blending, turbulent flames, embers & ash)
 * - Realistic Desert Tumbleweeds (Russian thistle lattice, rolling physics & dust kick-up)
 * - Atmospheric Weather & Procedural Web Audio Synthesizer
 */

class LivingElementsEngine {
    isRiverType(type) {
        if (type === 'river' || type === 'pond' || type === 'forest') return true;
        if (typeof window !== 'undefined' && window.FEATURE_CATALOG && window.FEATURE_CATALOG[type]) {
            const b = window.FEATURE_CATALOG[type].base;
            return b === 'river' || b === 'pond' || b === 'forest';
        }
        return false;
    }

    isForestType(type) {
        if (type === 'forest') return true;
        if (typeof window !== 'undefined' && window.FEATURE_CATALOG && window.FEATURE_CATALOG[type]) {
            return window.FEATURE_CATALOG[type].base === 'forest';
        }
        return false;
    }

    isPondType(type) {
        if (type === 'pond') return true;
        if (typeof window !== 'undefined' && window.FEATURE_CATALOG && window.FEATURE_CATALOG[type]) {
            return window.FEATURE_CATALOG[type].base === 'pond';
        }
        return false;
    }

    constructor() {
        this.container = null;
        this.weatherCanvas = null;
        this.weatherCtx = null;
        this.elements = [];
        this.selectedElementId = null;
        this.isLocked = false;
        this.nextId = 1;
        this.listeners = [];

        // Map camera (mirrors BattlemapApp.panZoom) so effects can be anchored to the map
        this.camera = { x: 0, y: 0, scale: 1.0 };
        this.anchorNewToMap = true; // New effects default to "Scale & Move with Map"

        // 16-Level Undo / Redo History Stack
        this.maxUndoSteps = 16;
        this.undoStack = [];
        this.redoStack = [];
        this.lastCommittedSnapshot = null;
        this.isRestoringHistory = false;
        this.lastSliderTickTime = 0;
        this.historyListeners = [];

        // Weather state
        this.weather = {
            type: 'none', // 'none', 'fog', 'rain', 'snow', 'dust', 'sandstorm', 'fireflies'
            intensity: 0.6,
            windAngle: 30,
            quantity: 1.0
        };

        this.weatherParticles = [];

        // Procedural Web Audio Engine & Environment Soundscapes
        this.audioCtx = null;
        this.audioNodes = {};
        this.audioIntervals = {};
        this.audioEnabled = false;
        this.masterVolume = 0.5;
        this.soundscapeMode = 'auto'; // 'auto', 'tavern', 'cave', 'wind', 'forest', 'volcano', 'chase', 'none'
        this.detectedEnvironment = 'forest';

        // Freehand Draw FX Engine State (Draw lines/paths or closed shapes directly on map)
        this.isDrawingMode = false;
        this.drawSubMode = 'auto'; // 'auto', 'line', 'shape'
        this.drawStrokeWidth = 90;
        this.drawTargetType = 'uni_river';
        this.drawTargetElementId = null;
        this.drawCanvas = null;
        this.drawCtx = null;
        this.rawDrawPoints = [];
        this.isPointerDownDrawing = false;

        this.animFrameId = null;
        this.lastTime = performance.now();
    }

    init(containerEl, weatherCanvasEl) {
        this.container = containerEl;
        this.weatherCanvas = weatherCanvasEl;
        if (this.weatherCanvas) {
            this.weatherCtx = this.weatherCanvas.getContext('2d');
            this.resizeWeather();
        }

        this.initDrawCanvas();

        this.loadSettings();
        this.lastCommittedSnapshot = JSON.stringify(this.getState());
        this.undoStack = [];
        this.redoStack = [];
        this.notifyHistoryChange();
        this.setupEventListeners();
        this.startLoop();
    }

    resizeWeather() {
        if (!this.weatherCanvas) return;
        const parent = this.weatherCanvas.parentElement;
        const rect = parent ? parent.getBoundingClientRect() : { width: window.innerWidth, height: window.innerHeight };
        this.weatherCanvas.width = rect.width || window.innerWidth;
        this.weatherCanvas.height = rect.height || window.innerHeight;
    }

    onChange(callback) {
        this.listeners.push(callback);
    }

    onHistoryChange(callback) {
        this.historyListeners.push(callback);
    }

    getHistoryStatus() {
        return {
            undoCount: this.undoStack.length,
            redoCount: this.redoStack.length,
            maxUndo: this.maxUndoSteps,
            canUndo: this.undoStack.length > 0,
            canRedo: this.redoStack.length > 0
        };
    }

    notifyHistoryChange() {
        const status = this.getHistoryStatus();
        this.historyListeners.forEach(cb => cb(status));
    }

    notify(forceStep = true) {
        const state = this.getState();
        if (!this.isRestoringHistory) {
            const currentSnap = JSON.stringify(state);
            if (this.lastCommittedSnapshot === null) {
                this.lastCommittedSnapshot = currentSnap;
            } else if (currentSnap !== this.lastCommittedSnapshot) {
                const now = performance.now();
                const shouldPushStep = forceStep || (now - this.lastSliderTickTime > 450);
                if (shouldPushStep) {
                    this.undoStack.push(this.lastCommittedSnapshot);
                    if (this.undoStack.length > this.maxUndoSteps) {
                        this.undoStack.shift();
                    }
                    this.redoStack = [];
                }
                this.lastCommittedSnapshot = currentSnap;
                this.lastSliderTickTime = forceStep ? 0 : now;
                this.notifyHistoryChange();
            }
        }
        this.listeners.forEach(cb => cb(state));
        this.saveSettings();
    }

    undo() {
        if (this.undoStack.length === 0) return false;
        const prevSnap = this.undoStack.pop();
        const currentSnap = JSON.stringify(this.getState());
        this.redoStack.push(currentSnap);
        if (this.redoStack.length > this.maxUndoSteps) {
            this.redoStack.shift();
        }

        const prevSelectedId = this.selectedElementId;
        this.isRestoringHistory = true;
        this.setState(JSON.parse(prevSnap));
        this.lastCommittedSnapshot = prevSnap;
        this.lastSliderTickTime = 0;
        if (prevSelectedId && this.elements.some(e => e.id === prevSelectedId)) {
            this.selectElement(prevSelectedId);
        } else {
            this.selectElement(null);
        }
        this.isRestoringHistory = false;

        const restoredState = this.getState();
        this.listeners.forEach(cb => cb(restoredState));
        this.saveSettings();
        this.updateAudioForElements();
        this.notifyHistoryChange();
        return true;
    }

    redo() {
        if (this.redoStack.length === 0) return false;
        const nextSnap = this.redoStack.pop();
        const currentSnap = JSON.stringify(this.getState());
        this.undoStack.push(currentSnap);
        if (this.undoStack.length > this.maxUndoSteps) {
            this.undoStack.shift();
        }

        const prevSelectedId = this.selectedElementId;
        this.isRestoringHistory = true;
        this.setState(JSON.parse(nextSnap));
        this.lastCommittedSnapshot = nextSnap;
        this.lastSliderTickTime = 0;
        if (prevSelectedId && this.elements.some(e => e.id === prevSelectedId)) {
            this.selectElement(prevSelectedId);
        } else {
            this.selectElement(null);
        }
        this.isRestoringHistory = false;

        const restoredState = this.getState();
        this.listeners.forEach(cb => cb(restoredState));
        this.saveSettings();
        this.updateAudioForElements();
        this.notifyHistoryChange();
        return true;
    }

    getState() {
        return {
            elements: this.elements.map(e => ({
                id: e.id,
                type: e.type,
                x: e.x,
                y: e.y,
                width: e.width,
                height: e.height,
                rotation: e.rotation,
                config: JSON.parse(JSON.stringify(e.config))
            })),
            weather: Object.assign({}, this.weather),
            soundscapeMode: this.soundscapeMode,
            isLocked: this.isLocked
        };
    }

    setState(state) {
        if (!state) return;
        const prevRestoring = this.isRestoringHistory;
        this.isRestoringHistory = true;
        if (state.weather) {
            this.setWeather(state.weather.type, state.weather.intensity, state.weather.windAngle, state.weather.quantity);
        }
        if (state.soundscapeMode) {
            this.soundscapeMode = state.soundscapeMode;
        }
        if (typeof state.isLocked === 'boolean') {
            this.setLocked(state.isLocked);
        }
        if (Array.isArray(state.elements)) {
            this.clearAll(false);
            state.elements.forEach(elData => {
                this.addElement(
                    elData.type,
                    elData.x,
                    elData.y,
                    elData.width,
                    elData.height,
                    elData.rotation,
                    elData.config,
                    elData.id,
                    false
                );
            });
        }
        this.isRestoringHistory = prevRestoring;
    }

    setLocked(locked) {
        this.isLocked = locked;
        if (this.container) {
            this.container.classList.toggle('elements-locked', locked);
        }
        if (locked) {
            this.selectElement(null);
        }
        this.notify();
    }

    // ------------------------------------------------------------------------
    // ELEMENT MANAGEMENT
    // ------------------------------------------------------------------------

    defaultRiverSplineNodes() {
        return [
            { dx: -240, dy: -35, w: 90 },
            { dx: -80,  dy: 40,  w: 110 },
            { dx: 85,   dy: -30, w: 115 },
            { dx: 245,  dy: 25,  w: 130 }
        ];
    }

    defaultRiverPolygonNodes() {
        return [
            { dx: -150, dy: 0 },
            { dx: -110, dy: -95 },
            { dx: 0,    dy: -120 },
            { dx: 115,  dy: -90 },
            { dx: 155,  dy: 0 },
            { dx: 110,  dy: 95 },
            { dx: 0,    dy: 120 },
            { dx: -110, dy: 90 }
        ];
    }

    defaultForestPolygonNodes() {
        return [
            { dx: -195, dy: -15 },
            { dx: -145, dy: -135 },
            { dx: -10,  dy: -165 },
            { dx: 140,  dy: -125 },
            { dx: 195,  dy: 10 },
            { dx: 145,  dy: 135 },
            { dx: 5,    dy: 165 },
            { dx: -140, dy: 125 }
        ];
    }

    addElement(type, x, y, width, height, rotation = 0, customConfig = {}, forcedId = null, shouldNotify = true) {
        const id = forcedId || `elem_${this.nextId++}`;
        if (forcedId) {
            const num = parseInt(forcedId.replace('elem_', ''), 10);
            if (!isNaN(num) && num >= this.nextId) this.nextId = num + 1;
        }

        let defaultWidth = 180;
        let defaultHeight = 180;
        let defaultConfig = {
            variant: 'default',
            intensity: 1.0,
            quantity: 1.0,
            speed: 1.0,
            opacity: 0.95,
            tiltX: 0,
            tiltY: 0
        };

        const catDef = (typeof window !== 'undefined' && window.FEATURE_CATALOG && window.FEATURE_CATALOG[type]);
        if (catDef) {
            defaultWidth = catDef.w || 260;
            defaultHeight = catDef.h || 220;
            defaultConfig = {
                variant: catDef.variant || 'default',
                num: catDef.num,
                intensity: 1.0,
                quantity: 1.0,
                speed: 1.0,
                opacity: 0.95,
                tiltX: 0,
                tiltY: 0
            };
            if (catDef.base === 'river') {
                defaultConfig.shapeMode = 'spline';
                defaultConfig.flowSpeed = 1.2;
                defaultConfig.speed = 1.2;
                defaultConfig.waterStyle = catDef.variant || 'stream';
                defaultConfig.nodes = this.defaultRiverSplineNodes();
            } else if (catDef.base === 'pond') {
                defaultConfig.shapeMode = 'polygon';
                defaultConfig.flowSpeed = 0.9;
                defaultConfig.speed = 1.0;
                defaultConfig.opacity = 0.85;
                defaultConfig.waterStyle = catDef.variant || 'pond_lily';
                defaultConfig.nodes = this.defaultRiverPolygonNodes();
            } else if (catDef.base === 'forest') {
                defaultConfig.shapeMode = 'polygon';
                defaultConfig.density = 16;
                defaultConfig.swaySpeed = 1.0;
                defaultConfig.leafFall = true;
                defaultConfig.speed = 1.0;
                defaultConfig.opacity = 0.96;
                defaultConfig.nodes = this.defaultForestPolygonNodes();
            }
        }

        if (type === 'campfire') {
            defaultWidth = 180;
            defaultHeight = 180;
            defaultConfig = { variant: 'wildfire', intensity: 1.0, speed: 1.0, opacity: 1.0, tiltX: 0, tiltY: 0, embers: true };
        } else if (type === 'torch') {
            defaultWidth = 100;
            defaultHeight = 100;
            defaultConfig = { variant: 'wildfire', intensity: 1.0, speed: 1.0, opacity: 1.0, tiltX: 0, tiltY: 0 };
        } else if (type === 'inferno') {
            defaultWidth = 240;
            defaultHeight = 180;
            defaultConfig = { variant: 'wildfire', intensity: 1.0, speed: 1.0, opacity: 0.95, tiltX: 0, tiltY: 0 };
        } else if (type === 'smoke') {
            defaultWidth = 260;
            defaultHeight = 220;
            defaultConfig = { variant: 'black_smoke', intensity: 1.0, speed: 1.0, opacity: 0.88, tiltX: 0, tiltY: 0 };
        } else if (type === 'mud') {
            defaultWidth = 240;
            defaultHeight = 190;
            defaultConfig = { variant: 'mud_bog', intensity: 1.0, speed: 1.0, opacity: 0.92, tiltX: 0, tiltY: 0 };
        } else if (type === 'sparks') {
            defaultWidth = 220;
            defaultHeight = 180;
            defaultConfig = { variant: 'storm_lightning', intensity: 1.0, speed: 1.0, opacity: 0.95, tiltX: 0, tiltY: 0 };
        } else if (type === 'river') {
            defaultWidth = 520;
            defaultHeight = 220;
            defaultConfig = {
                shapeMode: 'spline', // 'spline' (curved river) or 'polygon' (custom pool/lake)
                flowSpeed: 1.2,
                speed: 1.2,
                waterStyle: 'stream', // 'stream', 'ocean', 'swamp', 'lava', 'acid'
                variant: 'stream',
                intensity: 1.0,
                opacity: 0.78,
                caustics: 1.0,
                tiltX: 0,
                tiltY: 0,
                nodes: this.defaultRiverSplineNodes()
            };
        } else if (type === 'tumbleweed') {
            defaultWidth = 320;
            defaultHeight = 180;
            defaultConfig = { variant: 'desert_thistle', count: 12, quantity: 1.0, speed: 1.4, intensity: 1.0, opacity: 0.95, tiltX: 0, tiltY: 0, dustPuffs: true, scale: 1.0 };
        } else if (type === 'waterfall') {
            defaultWidth = 220;
            defaultHeight = 320;
            defaultConfig = { variant: 'mountain_falls', intensity: 1.0, speed: 1.2, opacity: 0.94, tiltX: 0, tiltY: 0 };
        } else if (type === 'lava_seam') {
            defaultWidth = 320;
            defaultHeight = 180;
            defaultConfig = { variant: 'magma_seam', intensity: 1.0, speed: 1.0, opacity: 0.96, tiltX: 0, tiltY: 0 };
        } else if (type === 'canopy') {
            defaultWidth = 280;
            defaultHeight = 280;
            defaultConfig = { variant: 'oak_canopy', intensity: 1.0, speed: 1.0, opacity: 0.92, tiltX: 0, tiltY: 0 };
        } else if (type === 'sunbeams') {
            defaultWidth = 340;
            defaultHeight = 300;
            defaultConfig = { variant: 'golden_sun', intensity: 1.0, speed: 1.0, opacity: 0.88, tiltX: 0, tiltY: 0 };
        } else if (type === 'hologram') {
            defaultWidth = 240;
            defaultHeight = 240;
            defaultConfig = { variant: 'tactical_planet', intensity: 1.0, speed: 1.0, opacity: 0.95, tiltX: 0, tiltY: 0, quantity: 1.0 };
        } else if (type === 'forcefield') {
            defaultWidth = 320;
            defaultHeight = 180;
            defaultConfig = { variant: 'hex_barrier', intensity: 1.0, speed: 1.0, opacity: 0.92, tiltX: 0, tiltY: 0, quantity: 1.0 };
        } else if (type === 'plasma_leak') {
            defaultWidth = 280;
            defaultHeight = 160;
            defaultConfig = { variant: 'fusion_vent', intensity: 1.0, speed: 1.2, opacity: 0.95, tiltX: 0, tiltY: 0, quantity: 1.0 };
        } else if (type === 'teleporter') {
            defaultWidth = 240;
            defaultHeight = 260;
            defaultConfig = { variant: 'transmat_pad', intensity: 1.0, speed: 1.0, opacity: 0.95, tiltX: 0, tiltY: 0, quantity: 1.0 };
        } else if (type === 'cyber_terminal') {
            defaultWidth = 260;
            defaultHeight = 200;
            defaultConfig = { variant: 'tactical_hud', intensity: 1.0, speed: 1.0, opacity: 0.95, tiltX: 0, tiltY: 0, quantity: 1.0 };
        } else if (type === 'toxic_spill') {
            defaultWidth = 260;
            defaultHeight = 200;
            defaultConfig = { variant: 'radioactive_sludge', intensity: 1.0, speed: 1.0, opacity: 0.94, tiltX: 0, tiltY: 0, quantity: 1.0 };
        } else if (type === 'ocean_waves') {
            defaultWidth = 480;
            defaultHeight = 320;
            defaultConfig = { variant: 'tropical_reef', swellSpeed: 1.0, surfFoam: 1.2, waveAngle: 25, intensity: 1.0, speed: 1.0, opacity: 0.92, tiltX: 0, tiltY: 0, quantity: 1.0 };
        } else if (type === 'pond') {
            defaultWidth = 360;
            defaultHeight = 280;
            defaultConfig = {
                shapeMode: 'polygon',
                flowSpeed: 0.9,
                speed: 1.0,
                waterStyle: 'pond_lily',
                variant: 'pond_lily',
                intensity: 1.0,
                opacity: 0.85,
                caustics: 1.0,
                tiltX: 0,
                tiltY: 0,
                nodes: this.defaultRiverPolygonNodes()
            };
        } else if (type === 'forest') {
            defaultWidth = 440;
            defaultHeight = 400;
            defaultConfig = {
                shapeMode: 'polygon',
                variant: 'ancient_oak',
                density: 16,
                swaySpeed: 1.0,
                leafFall: true,
                intensity: 1.0,
                speed: 1.0,
                opacity: 0.96,
                tiltX: 0,
                tiltY: 0,
                quantity: 1.0,
                nodes: this.defaultForestPolygonNodes()
            };
        } else if (type === 'spotlight') {
            defaultWidth = 280;
            defaultHeight = 380;
            defaultConfig = { variant: 'prison_searchlight', sweepAngle: 65, sweepSpeed: 0.8, beamColor: 'warm_white', dustMotes: true, intensity: 1.0, speed: 1.0, opacity: 0.92, tiltX: 0, tiltY: 0, quantity: 1.0 };
        } else if (type === 'bats') {
            defaultWidth = 340;
            defaultHeight = 260;
            defaultConfig = { variant: 'dungeon_bats', flockCount: 14, wingSpeed: 1.4, flightRadius: 130, altitudeShadow: true, intensity: 1.0, speed: 1.2, opacity: 0.95, tiltX: 0, tiltY: 0, quantity: 1.0 };
        } else if (type === 'rats') {
            defaultWidth = 320;
            defaultHeight = 240;
            defaultConfig = { variant: 'sewer_rats', verminCount: 12, dartSpeed: 1.5, pauseInterval: 2.0, shadow: true, intensity: 1.0, speed: 1.2, opacity: 0.95, tiltX: 0, tiltY: 0, quantity: 1.0 };
        } else if (type === 'fish') {
            defaultWidth = 340;
            defaultHeight = 260;
            defaultConfig = { variant: 'koi_pond', fishCount: 8, schoolSpeed: 1.0, caustics: true, rippleRings: true, intensity: 1.0, speed: 1.0, opacity: 0.94, tiltX: 0, tiltY: 0, quantity: 1.0 };
        } else if (type === 'patrol_actor') {
            defaultWidth = 260;
            defaultHeight = 260;
            defaultConfig = { variant: 'will_o_wisp', patrolRadius: 90, auraPulse: 1.0, particleWake: true, intensity: 1.0, speed: 1.0, opacity: 0.95, tiltX: 0, tiltY: 0, quantity: 1.0 };
        } else if (type === 'rain') {
            defaultWidth = 360;
            defaultHeight = 260;
            defaultConfig = { variant: 'storm_downpour', intensity: 1.0, speed: 1.2, opacity: 0.88, tiltX: 0, tiltY: 0, quantity: 1.0 };
        } else if (type === 'snow') {
            defaultWidth = 360;
            defaultHeight = 260;
            defaultConfig = { variant: 'blizzard_drift', intensity: 1.0, speed: 1.0, opacity: 0.88, tiltX: 0, tiltY: 0, quantity: 1.0 };
        } else if (type === 'fog') {
            defaultWidth = 380;
            defaultHeight = 260;
            defaultConfig = { variant: 'ground_mist', intensity: 1.0, speed: 0.8, opacity: 0.85, tiltX: 0, tiltY: 0, quantity: 1.0 };
        } else if (type === 'dust') {
            defaultWidth = 360;
            defaultHeight = 260;
            defaultConfig = { variant: 'sandstorm_eddy', intensity: 1.0, speed: 1.2, opacity: 0.85, tiltX: 0, tiltY: 0, quantity: 1.0 };
        } else if (type === 'hyperspace') {
            defaultWidth = 360;
            defaultHeight = 260;
            defaultConfig = { variant: 'astral_aurora', intensity: 1.0, speed: 1.0, opacity: 0.90, tiltX: 0, tiltY: 0, quantity: 1.0 };
        }

        const mergedConfig = Object.assign(defaultConfig, customConfig ? JSON.parse(JSON.stringify(customConfig)) : {});
        // Map anchoring: brand-new effects (no explicit position) follow the map by default;
        // restored/legacy effects keep whatever mode they were saved with.
        const isFreshPlacement = (x === undefined && !forcedId);
        if (mergedConfig.mapAnchored === undefined) {
            mergedConfig.mapAnchored = !!(isFreshPlacement && this.anchorNewToMap);
        }
        mergedConfig.mapAnchored = !!mergedConfig.mapAnchored;
        mergedConfig.locked = !!mergedConfig.locked;
        if (mergedConfig.fractalRoughness === undefined) mergedConfig.fractalRoughness = 0.75;
        if (mergedConfig.elementScale === undefined) mergedConfig.elementScale = mergedConfig.scale || 1.0;
        const isDeform = this.isRiverType(type);
        if (isDeform && (!Array.isArray(mergedConfig.nodes) || mergedConfig.nodes.length < 2)) {
            if (this.isForestType(type)) {
                mergedConfig.shapeMode = mergedConfig.shapeMode || 'polygon';
                mergedConfig.nodes = mergedConfig.shapeMode === 'spline'
                    ? this.defaultRiverSplineNodes()
                    : this.defaultForestPolygonNodes();
            } else if (this.isPondType(type)) {
                mergedConfig.shapeMode = mergedConfig.shapeMode || 'polygon';
                mergedConfig.nodes = mergedConfig.shapeMode === 'spline'
                    ? this.defaultRiverSplineNodes()
                    : this.defaultRiverPolygonNodes();
            } else {
                mergedConfig.nodes = mergedConfig.shapeMode === 'polygon'
                    ? this.defaultRiverPolygonNodes()
                    : this.defaultRiverSplineNodes();
            }
        }

        // New effects drop at the centre of the CURRENT view (converted into map space when anchored)
        const camScale = this.camera.scale || 1;
        const viewCx = mergedConfig.mapAnchored ? (window.innerWidth / 2 - this.camera.x) / camScale : window.innerWidth / 2;
        const viewCy = mergedConfig.mapAnchored ? (window.innerHeight / 2 - this.camera.y) / camScale : window.innerHeight / 2;

        const elObj = {
            id,
            type,
            num: catDef ? catDef.num : undefined,
            x: x !== undefined ? x : (isDeform ? viewCx : (viewCx - defaultWidth / 2)),
            y: y !== undefined ? y : (isDeform ? viewCy : (viewCy - defaultHeight / 2)),
            width: width || defaultWidth,
            height: height || defaultHeight,
            rotation: rotation || 0,
            config: mergedConfig,
            dom: null,
            canvas: null,
            ctx: null,
            handlesLayer: null,
            bbox: { minX: -300, minY: -150, width: 600, height: 300 },
            particles: [],
            dustParticles: [],
            stateTime: Math.random() * 1000
        };

        this.elements.push(elObj);
        this.renderElementDOM(elObj);

        if (shouldNotify) {
            this.selectElement(id);
            this.notify();
            this.updateAudioForElements();
        }

        return elObj;
    }

    // ------------------------------------------------------------------------
    // MAP CAMERA, MAP ANCHORING & PER-ELEMENT LOCK
    // el.x / el.y are stored in "map space" when config.mapAnchored is true
    // (screen = camera.pan + mapPoint * camera.scale) and in screen space otherwise.
    // ------------------------------------------------------------------------

    setCamera(x, y, scale) {
        this.camera.x = x;
        this.camera.y = y;
        this.camera.scale = scale || 1;
        for (let i = 0; i < this.elements.length; i++) {
            const el = this.elements[i];
            if (el.config && el.config.mapAnchored) this.positionElementDOM(el);
        }
    }

    getElementViewScale(el) {
        return (el && el.config && el.config.mapAnchored) ? (this.camera.scale || 1) : 1;
    }

    isElementLocked(el) {
        return !!(el && el.config && el.config.locked);
    }

    /** Places the wrapper on screen (position + scale + rotation + tilt) from el.x / el.y and the camera. */
    positionElementDOM(el) {
        if (!el || !el.dom) return;
        const cfg = el.config || {};
        const anchored = !!cfg.mapAnchored;
        const s = anchored ? (this.camera.scale || 1) : 1;
        const isDeform = this.isRiverType(el.type);
        const w = isDeform ? 0 : (el.width || 0);
        const h = isDeform ? 0 : (el.height || 0);

        let left = el.x;
        let top = el.y;
        if (anchored) {
            left = this.camera.x + (el.x + w / 2) * s - w / 2;
            top = this.camera.y + (el.y + h / 2) * s - h / 2;
        }
        el.dom.style.left = `${left}px`;
        el.dom.style.top = `${top}px`;

        const rot = el.rotation || 0;
        const tiltX = cfg.tiltX ? parseFloat(cfg.tiltX) : 0;
        const tiltY = cfg.tiltY ? parseFloat(cfg.tiltY) : 0;
        const scalePart = s !== 1 ? ` scale(${s})` : '';
        el.dom.style.transformOrigin = isDeform ? '0 0' : 'center center';
        if (tiltX !== 0 || tiltY !== 0) {
            el.dom.style.transform = `perspective(800px)${scalePart} rotate(${rot}deg) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
        } else {
            el.dom.style.transform = `${scalePart ? scalePart.trim() + ' ' : ''}rotate(${rot}deg)`;
        }
    }

    applyElementLockState(el) {
        if (!el || !el.dom) return;
        el.dom.classList.toggle('element-locked', this.isElementLocked(el));
        el.dom.classList.toggle('element-map-anchored', !!(el.config && el.config.mapAnchored));
    }

    setElementLocked(id, locked) {
        const el = this.elements.find(e => e.id === id);
        if (!el) return;
        el.config.locked = !!locked;
        this.applyElementLockState(el);
        this.notify();
        if (window.onElementSelected && this.selectedElementId === id) window.onElementSelected(el);
    }

    lockAllElements(locked = true) {
        this.elements.forEach(el => {
            el.config.locked = !!locked;
            this.applyElementLockState(el);
        });
        this.notify();
        const sel = this.elements.find(e => e.id === this.selectedElementId);
        if (sel && window.onElementSelected) window.onElementSelected(sel);
    }

    /** Switches an effect between "fixed to screen" and "Scale & Move with Map" without it visually jumping. */
    setElementAnchored(id, anchored) {
        const el = this.elements.find(e => e.id === id);
        if (!el) return;
        anchored = !!anchored;
        if (!!el.config.mapAnchored === anchored) return;

        const cam = this.camera;
        const s = cam.scale || 1;
        const isDeform = this.isRiverType(el.type);
        const w = isDeform ? 0 : el.width;
        const h = isDeform ? 0 : el.height;
        const cx = el.x + w / 2;
        const cy = el.y + h / 2;

        if (anchored) {
            el.x = (cx - cam.x) / s - w / 2;
            el.y = (cy - cam.y) / s - h / 2;
            if (isDeform && Array.isArray(el.config.nodes) && s !== 1) {
                el.config.nodes.forEach(n => {
                    n.dx /= s;
                    n.dy /= s;
                    if (n.w) n.w /= s;
                });
            }
        } else {
            el.x = cam.x + cx * s - w / 2;
            el.y = cam.y + cy * s - h / 2;
            if (isDeform && Array.isArray(el.config.nodes) && s !== 1) {
                el.config.nodes.forEach(n => {
                    n.dx *= s;
                    n.dy *= s;
                    if (n.w) n.w *= s;
                });
            }
        }
        el.config.mapAnchored = anchored;
        this.applyElementTransform(el);
        if (isDeform) {
            this.updateRiverBounds(el);
            this.rebuildRiverHandles(el);
        }
        this.applyElementLockState(el);
        this.notify();
        if (window.onElementSelected && this.selectedElementId === id) window.onElementSelected(el);
    }

    setAnchorAllToMap(anchored = true) {
        this.elements.forEach(el => this.setElementAnchored(el.id, anchored));
    }

    applyElementTransform(el) {
        if (!el || !el.dom) return;
        const cfg = el.config || {};
        const opacity = cfg.opacity !== undefined ? parseFloat(cfg.opacity) : 1.0;
        const flipX = cfg.flipX ? -1 : 1;
        const flipY = cfg.flipY ? -1 : 1;

        this.positionElementDOM(el);
        this.applyElementLockState(el);

        // Blend Mode (applied to element wrapper so it blends with the battlemap underneath)
        const blendMode = cfg.blendMode || 'normal';
        el.dom.style.mixBlendMode = blendMode;

        if (!this.isRiverType(el.type)) {
            el.dom.style.opacity = opacity;
        }

        // Per-Element Color Grading (Hue, Saturation, Brightness), Edge Blur/Sharpen & Feathering (applied to el.canvas so selection handles stay crisp)
        if (el.canvas) {
            if (flipX !== 1 || flipY !== 1) {
                el.canvas.style.transform = `scale(${flipX}, ${flipY})`;
            } else {
                el.canvas.style.transform = '';
            }

            const hue = cfg.hue ? parseFloat(cfg.hue) : 0;
            const sat = cfg.saturation !== undefined ? parseFloat(cfg.saturation) : 100;
            const bri = cfg.brightness !== undefined ? parseFloat(cfg.brightness) : 100;
            const edgeVal = cfg.edgeBlurSharpen ? parseFloat(cfg.edgeBlurSharpen) : 0;
            const feather = cfg.edgeFeather ? parseFloat(cfg.edgeFeather) : 0;

            const filterParts = [];
            if (hue !== 0) filterParts.push(`hue-rotate(${hue}deg)`);
            if (sat !== 100) filterParts.push(`saturate(${sat}%)`);
            if (bri !== 100) filterParts.push(`brightness(${bri}%)`);

            if (edgeVal < 0) {
                const blurPx = (Math.abs(edgeVal) * 0.15).toFixed(2);
                filterParts.push(`blur(${blurPx}px)`);
            } else if (edgeVal > 0) {
                // Hardware-accelerated 3x3 Laplacian Unsharp Convolution Filter per element
                const filterId = `el-sharpen-${el.id}`;
                const kernelId = `el-kernel-${el.id}`;
                let kernelEl = document.getElementById(kernelId);
                if (!kernelEl) {
                    const defs = document.getElementById('svg-filters-defs') || document.querySelector('svg defs');
                    if (defs) {
                        const svgNS = 'http://www.w3.org/2000/svg';
                        const filterNode = document.createElementNS(svgNS, 'filter');
                        filterNode.setAttribute('id', filterId);
                        filterNode.setAttribute('color-interpolation-filters', 'sRGB');
                        kernelEl = document.createElementNS(svgNS, 'feConvolveMatrix');
                        kernelEl.setAttribute('id', kernelId);
                        kernelEl.setAttribute('order', '3');
                        kernelEl.setAttribute('preserveAlpha', 'true');
                        filterNode.appendChild(kernelEl);
                        defs.appendChild(filterNode);
                    }
                }
                if (kernelEl) {
                    const s = (edgeVal / 100) * 0.65;
                    const d = (-0.5 * s).toFixed(4);
                    const c = (-1.0 * s).toFixed(4);
                    const m = (1.0 + 6.0 * s).toFixed(4);
                    kernelEl.setAttribute('kernelMatrix', `${d} ${c} ${d} ${c} ${m} ${c} ${d} ${c} ${d}`);
                    filterParts.push(`url(#${filterId})`);
                }
                filterParts.push(`contrast(${100 + Math.round(edgeVal * 0.35)}%)`);
            }

            el.canvas.style.filter = filterParts.length > 0 ? filterParts.join(' ') : '';

            // Soft Edge Feathering (radial vignette fade on canvas boundaries)
            if (feather > 0) {
                const stop = Math.max(5, Math.round(100 - feather * 0.88));
                const maskGrad = `radial-gradient(ellipse at center, rgba(0,0,0,1) ${stop}%, rgba(0,0,0,0) 100%)`;
                el.canvas.style.webkitMaskImage = maskGrad;
                el.canvas.style.maskImage = maskGrad;
            } else {
                el.canvas.style.webkitMaskImage = '';
                el.canvas.style.maskImage = '';
            }
        }
    }

    bringElementToFront(id) {
        const idx = this.elements.findIndex(e => e.id === id);
        if (idx === -1) return;
        const el = this.elements[idx];
        this.elements.splice(idx, 1);
        this.elements.push(el);
        if (el.dom && this.container) {
            this.container.appendChild(el.dom);
        }
        this.notify();
    }

    sendElementToBack(id) {
        const idx = this.elements.findIndex(e => e.id === id);
        if (idx === -1) return;
        const el = this.elements[idx];
        this.elements.splice(idx, 1);
        this.elements.unshift(el);
        if (el.dom && this.container && this.container.firstChild) {
            this.container.insertBefore(el.dom, this.container.firstChild);
        }
        this.notify();
    }

    resetElementAttributes(id) {
        const el = this.elements.find(e => e.id === id);
        if (!el) return;
        el.rotation = 0;
        const catDef = (typeof window !== 'undefined' && window.FEATURE_CATALOG && window.FEATURE_CATALOG[el.type]);
        Object.assign(el.config, {
            speed: 1.0,
            flowSpeed: 1.0,
            intensity: 1.0,
            quantity: 1.0,
            fractalRoughness: 0.75,
            elementScale: 1.0,
            scale: 1.0,
            opacity: this.isRiverType(el.type) ? 0.72 : 0.90,
            hue: 0,
            saturation: 100,
            brightness: 100,
            blendMode: 'normal',
            edgeBlurSharpen: 0,
            edgeFeather: 0,
            tiltX: 0,
            tiltY: 0,
            flipX: false,
            flipY: false
        });
        if (catDef && catDef.variant) {
            el.config.variant = catDef.variant;
            el.config.waterStyle = catDef.variant;
        }
        this.applyElementTransform(el);
        this.notify();
    }

    // ------------------------------------------------------------------------
    // PROCEDURAL MULTI-OCTAVE FRACTAL GEOMETRY & ENTITY SCALE ENGINE
    // Converts simple geometric circles/ellipses/stars into rich organic shapes
    // ------------------------------------------------------------------------
    fractalHarmonicMod(theta, seed = 0, rough = 0.75) {
        if (rough <= 0.01) return 1.0;
        // 6-octave FBM + ridged crevice cascade for deep, craggy organic profiles
        const n1 = Math.sin(theta * 3 + seed * 1.13) * 0.36;
        const n2 = Math.cos(theta * 5 - seed * 1.79) * 0.27;
        const n3 = Math.sin(theta * 9 + seed * 2.41) * 0.21;
        const n4 = Math.cos(theta * 15 - seed * 3.07) * 0.15;
        const n5 = Math.sin(theta * 23 + seed * 4.19) * 0.10;
        const n6 = (1.0 - 2.0 * Math.abs(Math.sin(theta * 11.5 - seed * 2.63))) * 0.13;
        const raw = n1 + n2 + n3 + n4 + n5 + n6;
        return Math.max(0.26, 1.0 + rough * 0.44 * raw);
    }

    traceFractalLobe(ctx, cx, cy, rx, ry, rot = 0, rough = 0.75, seed = 0, steps = 32, beginNewPath = true) {
        if (beginNewPath) {
            ctx.beginPath();
        }
        const safeRx = Math.max(0.5, rx);
        const safeRy = Math.max(0.5, ry);
        const useOrig = ctx._origEllipse || ctx.ellipse.bind(ctx);
        if (rough <= 0.02 || safeRx < 2 || safeRy < 2) {
            const startX = cx + safeRx * Math.cos(rot);
            const startY = cy + safeRx * Math.sin(rot);
            ctx.moveTo(startX, startY);
            useOrig(cx, cy, safeRx, safeRy, rot, 0, Math.PI * 2);
            return;
        }
        const effSteps = rough > 0.25 ? Math.max(steps, 36) : steps;
        const cosR = Math.cos(rot);
        const sinR = Math.sin(rot);
        for (let i = 0; i <= effSteps; i++) {
            const theta = (i / effSteps) * Math.PI * 2;
            const mod = this.fractalHarmonicMod(theta, seed, rough);
            const curl = theta + rough * 0.042 * Math.sin(theta * 6 + seed * 1.9);
            const lx = Math.cos(curl) * safeRx * mod;
            const ly = Math.sin(curl) * safeRy * mod;
            const px = cx + lx * cosR - ly * sinR;
            const py = cy + lx * sinR + ly * cosR;
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }
        ctx.closePath();
    }

    drawFractalTwigBranch(ctx, x1, y1, length, angle, width = 2.5, depth = 3, rough = 0.75, seed = 0, color = null) {
        const safeDepth = Math.min(4, Math.max(0, Math.round(depth)));
        if (safeDepth <= 0 || length < 1.5) return;
        if (color) {
            ctx.strokeStyle = color;
        }
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        const bend1 = Math.sin(seed * 3.7 + safeDepth * 1.9) * 0.34 * (0.4 + rough * 0.85);
        const bend2 = Math.cos(seed * 5.3 - safeDepth * 2.3) * 0.30 * (0.4 + rough * 0.85);
        const seg1 = length * 0.36;
        const seg2 = length * 0.34;
        const seg3 = length - seg1 - seg2;

        const q1x = x1 + Math.cos(angle + bend1) * seg1;
        const q1y = y1 + Math.sin(angle + bend1) * seg1;
        const q2x = q1x + Math.cos(angle - bend2 * 0.85) * seg2;
        const q2y = q1y + Math.sin(angle - bend2 * 0.85) * seg2;
        const ex = q2x + Math.cos(angle + bend1 * 0.55) * seg3;
        const ey = q2y + Math.sin(angle + bend1 * 0.55) * seg3;

        ctx.lineWidth = Math.max(0.6, width);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(q1x, q1y);
        ctx.lineTo(q2x, q2y);
        ctx.lineTo(ex, ey);
        ctx.stroke();

        if (safeDepth > 1) {
            const spread = 0.44 + Math.min(1.4, rough) * 0.28;
            this.drawFractalTwigBranch(ctx, q1x, q1y, length * 0.64, angle + spread, width * 0.65, safeDepth - 1, rough, seed + 1.7, color);
            this.drawFractalTwigBranch(ctx, q2x, q2y, length * 0.60, angle - spread * 0.92, width * 0.60, safeDepth - 1, rough, seed + 3.1, color);
            if (rough > 0.35) {
                this.drawFractalTwigBranch(ctx, ex, ey, length * 0.52, angle + spread * 0.65, width * 0.52, safeDepth - 1, rough, seed + 4.9, color);
            }
            if (rough > 0.85 && safeDepth >= 2) {
                this.drawFractalTwigBranch(ctx, ex, ey, length * 0.44, angle - spread * 0.55, width * 0.46, safeDepth - 1, rough, seed + 6.7, color);
            }
        }
    }

    installFractalContext(ctx, el) {
        if (!ctx || ctx._fractalInstalled) return;
        ctx._fractalInstalled = true;
        const origArc = ctx.arc.bind(ctx);
        const origEllipse = ctx.ellipse.bind(ctx);
        ctx._origArc = origArc;
        ctx._origEllipse = origEllipse;
        const self = this;

        ctx.arc = function (x, y, r, startAngle, endAngle, ccw) {
            const cfg = (el && el.config) || {};
            const rough = cfg.fractalRoughness !== undefined ? parseFloat(cfg.fractalRoughness) : 0.75;
            const elScale = cfg.elementScale !== undefined ? parseFloat(cfg.elementScale) : (cfg.scale || 1.0);
            let adjR = Math.max(0.1, r);

            if (el && el._autoScaleEntities && elScale !== 1.0 && adjR < (el._maxEntityRadius || 120)) {
                adjR *= elScale;
            }

            const isFullCircle = Math.abs((endAngle || 0) - (startAngle || 0)) >= Math.PI * 1.95;
            const isSolidFill = typeof ctx.fillStyle === 'string';
            if (rough > 0.04 && isFullCircle && isSolidFill && adjR >= 2.6 && !(el && el._disableAutoFractalArc)) {
                const sizeRamp = Math.max(0, Math.min(1, (adjR - 2.6) / 3.2));
                const effRough = rough * sizeRamp;
                if (effRough > 0.02) {
                    const tVal = (el && el.stateTime) || 0;
                    const seed = Math.sin(x * 0.025) * 1.7 + Math.cos(y * 0.025) * 1.7 + tVal * 0.35;
                    self.traceFractalLobe(ctx, x, y, adjR, adjR, 0, effRough, seed, 28, false);
                    return;
                }
            }
            origArc(x, y, adjR, startAngle, endAngle, ccw);
        };

        ctx.ellipse = function (x, y, rx, ry, rot, startAngle, endAngle, ccw) {
            const cfg = (el && el.config) || {};
            const rough = cfg.fractalRoughness !== undefined ? parseFloat(cfg.fractalRoughness) : 0.75;
            const elScale = cfg.elementScale !== undefined ? parseFloat(cfg.elementScale) : (cfg.scale || 1.0);
            let adjRx = Math.max(0.1, rx);
            let adjRy = Math.max(0.1, ry);

            if (el && el._autoScaleEntities && elScale !== 1.0 && Math.max(adjRx, adjRy) < (el._maxEntityRadius || 120)) {
                adjRx *= elScale;
                adjRy *= elScale;
            }

            const isFullOval = Math.abs((endAngle || 0) - (startAngle || 0)) >= Math.PI * 1.95;
            const isSolidFill = typeof ctx.fillStyle === 'string';
            const minR = Math.min(adjRx, adjRy);
            if (rough > 0.04 && isFullOval && isSolidFill && minR >= 2.6 && !(el && el._disableAutoFractalArc)) {
                const sizeRamp = Math.max(0, Math.min(1, (minR - 2.6) / 3.2));
                const effRough = rough * sizeRamp;
                if (effRough > 0.02) {
                    const tVal = (el && el.stateTime) || 0;
                    const seed = Math.sin(x * 0.025) * 1.7 + Math.cos(y * 0.025) * 1.7 + tVal * 0.35;
                    self.traceFractalLobe(ctx, x, y, adjRx, adjRy, rot || 0, effRough, seed, 28, false);
                    return;
                }
            }
            origEllipse(x, y, adjRx, adjRy, rot || 0, startAngle, endAngle, ccw);
        };
    }

    renderElementDOM(el) {
        if (!this.container) return;

        if (this.isRiverType(el.type)) {
            this.renderRiverDOM(el);
            return;
        }

        const wrapper = document.createElement('div');
        wrapper.className = `living-element living-${el.type}`;
        wrapper.setAttribute('data-id', el.id);
        wrapper.style.left = `${el.x}px`;
        wrapper.style.top = `${el.y}px`;
        wrapper.style.width = `${el.width}px`;
        wrapper.style.height = `${el.height}px`;

        const canvas = document.createElement('canvas');
        canvas.width = el.width;
        canvas.height = el.height;
        canvas.className = 'element-canvas';
        wrapper.appendChild(canvas);

        el.dom = wrapper;
        el.canvas = canvas;
        el.ctx = canvas.getContext('2d');
        this.installFractalContext(el.ctx, el);
        this.applyElementTransform(el);

        const box = document.createElement('div');
        box.className = 'element-selection-box';
        box.innerHTML = `
            <div class="element-handle handle-rotate" title="Drag to rotate (0°–360°)">⟳</div>
            <div class="element-handle handle-perspective" title="Drag to tilt in 3D Perspective (Pitch & Bank)">📐</div>
            <div class="element-handle handle-corner-nw" data-handle="nw" title="Drag top-left corner"></div>
            <div class="element-handle handle-corner-ne" data-handle="ne" title="Drag top-right corner"></div>
            <div class="element-handle handle-corner-se handle-resize" data-handle="se" title="Drag bottom-right corner">↘</div>
            <div class="element-handle handle-corner-sw" data-handle="sw" title="Drag bottom-left corner"></div>
            <div class="element-handle handle-edge-n" data-handle="n" title="Drag top edge"></div>
            <div class="element-handle handle-edge-s handle-stretch-y" data-handle="s" title="Drag bottom edge">↕</div>
            <div class="element-handle handle-edge-e handle-stretch-x" data-handle="e" title="Drag right edge">↔</div>
            <div class="element-handle handle-edge-w" data-handle="w" title="Drag left edge"></div>
            <div class="element-tag">${(window.FEATURE_CATALOG && window.FEATURE_CATALOG[el.type] && window.FEATURE_CATALOG[el.type].name) || el.type.toUpperCase()}</div>
        `;
        wrapper.appendChild(box);

        this.attachElementInteractions(el, wrapper);
        this.container.appendChild(wrapper);
    }

    // ------------------------------------------------------------------------
    // DEFORMABLE WATER / RIVER DOM & INTERACTIVE SHAPE HANDLES
    // ------------------------------------------------------------------------

    renderRiverDOM(el) {
        const wrapper = document.createElement('div');
        wrapper.className = `living-element living-river deformable-river`;
        wrapper.setAttribute('data-id', el.id);
        wrapper.style.left = `${el.x}px`;
        wrapper.style.top = `${el.y}px`;
        wrapper.style.width = `0px`;
        wrapper.style.height = `0px`;
        wrapper.style.overflow = `visible`;

        const canvas = document.createElement('canvas');
        canvas.className = 'element-canvas river-deform-canvas';
        canvas.style.pointerEvents = 'auto';
        wrapper.appendChild(canvas);

        const handlesLayer = document.createElement('div');
        handlesLayer.className = 'water-handles-layer';
        wrapper.appendChild(handlesLayer);

        el.dom = wrapper;
        el.canvas = canvas;
        el.ctx = canvas.getContext('2d');
        el.handlesLayer = handlesLayer;
        this.installFractalContext(el.ctx, el);
        this.applyElementTransform(el);

        this.updateRiverBounds(el);
        this.rebuildRiverHandles(el);
        this.attachRiverInteractions(el);

        this.container.appendChild(wrapper);
    }

    updateRiverBounds(el) {
        const nodes = el.config.nodes || [];
        if (nodes.length === 0) return;

        let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
        let maxW = 60;

        nodes.forEach(n => {
            if (n.dx < minX) minX = n.dx;
            if (n.dy < minY) minY = n.dy;
            if (n.dx > maxX) maxX = n.dx;
            if (n.dy > maxY) maxY = n.dy;
            if (n.w && n.w > maxW) maxW = n.w;
        });

        const extraPad = this.isForestType(el.type) ? 75 : 50;
        const pad = Math.ceil(maxW * 0.85) + extraPad;
        minX -= pad;
        minY -= pad;
        maxX += pad;
        maxY += pad;

        const w = Math.max(120, Math.ceil(maxX - minX));
        const h = Math.max(120, Math.ceil(maxY - minY));

        el.bbox = { minX, minY, width: w, height: h };

        if (el.canvas) {
            el.canvas.style.left = `${minX}px`;
            el.canvas.style.top = `${minY}px`;
            el.canvas.style.width = `${w}px`;
            el.canvas.style.height = `${h}px`;
            if (el.canvas.width !== w || el.canvas.height !== h) {
                el.canvas.width = w;
                el.canvas.height = h;
            }
        }
    }

    computeNodeNormals(nodes, isClosed = false) {
        const normals = [];
        const n = nodes.length;
        for (let i = 0; i < n; i++) {
            let pPrev, pNext;
            if (isClosed) {
                pPrev = nodes[(i - 1 + n) % n];
                pNext = nodes[(i + 1) % n];
            } else {
                pPrev = i > 0 ? nodes[i - 1] : nodes[i];
                pNext = i < n - 1 ? nodes[i + 1] : nodes[i];
            }
            let tx = pNext.dx - pPrev.dx;
            let ty = pNext.dy - pPrev.dy;
            const len = Math.hypot(tx, ty) || 1;
            tx /= len;
            ty /= len;
            normals.push({ nx: -ty, ny: tx, tx, ty });
        }
        return normals;
    }

    rebuildRiverHandles(el) {
        if (!el.handlesLayer) return;
        el.handlesLayer.innerHTML = '';

        const nodes = el.config.nodes || [];
        const isPolygon = el.config.shapeMode === 'polygon';
        const normals = this.computeNodeNormals(nodes, isPolygon);

        // 1. Center Move Anchor Handle (moves entire water body)
        let cx = 0, cy = 0;
        nodes.forEach(n => { cx += n.dx; cy += n.dy; });
        cx /= (nodes.length || 1);
        cy /= (nodes.length || 1);

        const moveHandle = document.createElement('div');
        moveHandle.className = 'water-handle water-handle-move';
        moveHandle.title = 'Drag to move entire water feature';
        moveHandle.innerHTML = '✥';
        moveHandle.style.left = `${cx}px`;
        moveHandle.style.top = `${cy}px`;
        moveHandle.setAttribute('data-action', 'move-all');
        el.handlesLayer.appendChild(moveHandle);

        // 2. Midpoint '+' Handles (click or drag to insert a new bend point)
        const segCount = isPolygon ? nodes.length : nodes.length - 1;
        for (let i = 0; i < segCount; i++) {
            const a = nodes[i];
            const b = nodes[(i + 1) % nodes.length];
            const mx = (a.dx + b.dx) / 2;
            const my = (a.dy + b.dy) / 2;

            const addHandle = document.createElement('div');
            addHandle.className = 'water-handle water-handle-add';
            addHandle.title = 'Click or drag to insert a new shape handle here';
            addHandle.innerHTML = '+';
            addHandle.style.left = `${mx}px`;
            addHandle.style.top = `${my}px`;
            addHandle.setAttribute('data-action', 'add-node');
            addHandle.setAttribute('data-index', i);
            el.handlesLayer.appendChild(addHandle);
        }

        // 3. Spine / Perimeter Shape Handles & Bank Width Handles
        nodes.forEach((node, idx) => {
            // Main Curve / Corner Handle
            const nodeHandle = document.createElement('div');
            nodeHandle.className = 'water-handle water-handle-node';
            nodeHandle.title = `Shape Handle #${idx + 1} • Drag to bend/reshape • Right-click to delete`;
            nodeHandle.style.left = `${node.dx}px`;
            nodeHandle.style.top = `${node.dy}px`;
            nodeHandle.setAttribute('data-action', 'drag-node');
            nodeHandle.setAttribute('data-index', idx);
            el.handlesLayer.appendChild(nodeHandle);

            // Bank Width Handle (only in Spline River mode)
            if (!isPolygon) {
                const norm = normals[idx];
                const halfW = (node.w || 100) / 2;
                const wx = node.dx + norm.nx * halfW;
                const wy = node.dy + norm.ny * halfW;

                const widthHandle = document.createElement('div');
                widthHandle.className = 'water-handle water-handle-width';
                widthHandle.title = `Width Handle #${idx + 1} (${Math.round(node.w || 100)}px) • Drag to widen or narrow river`;
                widthHandle.innerHTML = '◆';
                widthHandle.style.left = `${wx}px`;
                widthHandle.style.top = `${wy}px`;
                widthHandle.setAttribute('data-action', 'drag-width');
                widthHandle.setAttribute('data-index', idx);
                el.handlesLayer.appendChild(widthHandle);
            }
        });
    }

    updateRiverHandlePositions(el) {
        if (!el.handlesLayer) return;
        const nodes = el.config.nodes || [];
        const isPolygon = el.config.shapeMode === 'polygon';
        const normals = this.computeNodeNormals(nodes, isPolygon);

        // Update move handle
        let cx = 0, cy = 0;
        nodes.forEach(n => { cx += n.dx; cy += n.dy; });
        cx /= (nodes.length || 1);
        cy /= (nodes.length || 1);

        const moveH = el.handlesLayer.querySelector('.water-handle-move');
        if (moveH) {
            moveH.style.left = `${cx}px`;
            moveH.style.top = `${cy}px`;
        }

        // Update node & width handles
        nodes.forEach((node, idx) => {
            const nh = el.handlesLayer.querySelector(`.water-handle-node[data-index="${idx}"]`);
            if (nh) {
                nh.style.left = `${node.dx}px`;
                nh.style.top = `${node.dy}px`;
            }
            if (!isPolygon) {
                const wh = el.handlesLayer.querySelector(`.water-handle-width[data-index="${idx}"]`);
                if (wh && normals[idx]) {
                    const halfW = (node.w || 100) / 2;
                    wh.style.left = `${node.dx + normals[idx].nx * halfW}px`;
                    wh.style.top = `${node.dy + normals[idx].ny * halfW}px`;
                    wh.title = `Width Handle #${idx + 1} (${Math.round(node.w || 100)}px) • Drag to widen or narrow river`;
                }
            }
        });

        // Update midpoint '+' handles
        const segCount = isPolygon ? nodes.length : nodes.length - 1;
        for (let i = 0; i < segCount; i++) {
            const a = nodes[i];
            const b = nodes[(i + 1) % nodes.length];
            const ah = el.handlesLayer.querySelector(`.water-handle-add[data-index="${i}"]`);
            if (ah) {
                ah.style.left = `${(a.dx + b.dx) / 2}px`;
                ah.style.top = `${(a.dy + b.dy) / 2}px`;
            }
        }
    }

    attachRiverInteractions(el) {
        let dragMode = null; // 'move-all', 'drag-node', 'drag-width'
        let activeIdx = -1;
        let startClientX = 0, startClientY = 0;
        let startX = 0, startY = 0;

        const onPointerDown = (e) => {
            if (this.isLocked || this.isElementLocked(el)) return;
            const target = e.target.closest('.water-handle');
            const isCanvas = e.target === el.canvas;

            if (!target && !isCanvas) return;

            this.selectElement(el.id);

            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            startClientX = clientX;
            startClientY = clientY;

            if (target) {
                const action = target.getAttribute('data-action');
                const idx = parseInt(target.getAttribute('data-index') || '-1', 10);

                // Right-click on a node handle removes it
                if (e.button === 2 && action === 'drag-node') {
                    e.preventDefault();
                    e.stopPropagation();
                    this.removeRiverNode(el.id, idx);
                    return;
                }

                if (action === 'add-node') {
                    // Insert new node at midpoint between idx and idx+1, then immediately drag it
                    const nodes = el.config.nodes;
                    const a = nodes[idx];
                    const b = nodes[(idx + 1) % nodes.length];
                    const newNode = {
                        dx: Math.round((a.dx + b.dx) / 2),
                        dy: Math.round((a.dy + b.dy) / 2),
                        w: Math.round(((a.w || 100) + (b.w || 100)) / 2)
                    };
                    nodes.splice(idx + 1, 0, newNode);
                    this.updateRiverBounds(el);
                    this.rebuildRiverHandles(el);

                    dragMode = 'drag-node';
                    activeIdx = idx + 1;
                    startX = newNode.dx;
                    startY = newNode.dy;
                    e.stopPropagation();
                    e.preventDefault();
                    return;
                }

                if (action === 'drag-node') {
                    dragMode = 'drag-node';
                    activeIdx = idx;
                    startX = el.config.nodes[idx].dx;
                    startY = el.config.nodes[idx].dy;
                    e.stopPropagation();
                    e.preventDefault();
                    return;
                }

                if (action === 'drag-width') {
                    dragMode = 'drag-width';
                    activeIdx = idx;
                    e.stopPropagation();
                    e.preventDefault();
                    return;
                }

                if (action === 'move-all') {
                    dragMode = 'move-all';
                    startX = el.x;
                    startY = el.y;
                    e.stopPropagation();
                    e.preventDefault();
                    return;
                }
            }

            // Clicking the river canvas body moves the whole river
            if (isCanvas) {
                dragMode = 'move-all';
                startX = el.x;
                startY = el.y;
                e.stopPropagation();
            }
        };

        const onPointerMove = (e) => {
            if (!dragMode) return;
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            const clientY = e.touches ? e.touches[0].clientY : e.clientY;
            const viewScale = this.getElementViewScale(el);
            const dx = (clientX - startClientX) / viewScale;
            const dy = (clientY - startClientY) / viewScale;

            if (dragMode === 'move-all') {
                el.x = startX + dx;
                el.y = startY + dy;
                this.positionElementDOM(el);
            } else if (dragMode === 'drag-node') {
                const node = el.config.nodes[activeIdx];
                if (node) {
                    node.dx = Math.round(startX + dx);
                    node.dy = Math.round(startY + dy);
                    this.updateRiverBounds(el);
                    this.updateRiverHandlePositions(el);
                }
            } else if (dragMode === 'drag-width') {
                const node = el.config.nodes[activeIdx];
                if (node) {
                    const rect = el.dom.getBoundingClientRect();
                    const localMouseX = (clientX - rect.left) / viewScale;
                    const localMouseY = (clientY - rect.top) / viewScale;
                    const dist = Math.hypot(localMouseX - node.dx, localMouseY - node.dy);
                    node.w = Math.max(24, Math.min(3000, Math.round(dist * 2)));
                    this.updateRiverBounds(el);
                    this.updateRiverHandlePositions(el);
                }
            }
        };

        const onPointerUp = () => {
            if (dragMode) {
                dragMode = null;
                activeIdx = -1;
                this.notify();
            }
        };

        el.dom.addEventListener('mousedown', onPointerDown);
        el.dom.addEventListener('contextmenu', (e) => {
            if (e.target.closest('.water-handle')) e.preventDefault();
        });
        el.dom.addEventListener('touchstart', onPointerDown, { passive: false });

        window.addEventListener('mousemove', onPointerMove);
        window.addEventListener('touchmove', onPointerMove, { passive: false });
        window.addEventListener('mouseup', onPointerUp);
        window.addEventListener('touchend', onPointerUp);
    }

    setRiverShapeMode(id, mode) {
        const el = this.elements.find(e => e.id === id);
        if (!el || !this.isRiverType(el.type) || this.isElementLocked(el)) return;
        if (el.config.shapeMode === mode) return;

        el.config.shapeMode = mode;
        if (mode === 'polygon') {
            el.config.nodes = this.isForestType(el.type)
                ? this.defaultForestPolygonNodes()
                : this.defaultRiverPolygonNodes();
        } else {
            el.config.nodes = this.defaultRiverSplineNodes();
        }

        this.updateRiverBounds(el);
        this.rebuildRiverHandles(el);
        this.notify();
    }

    addRiverNode(id) {
        const el = this.elements.find(e => e.id === id);
        if (!el || !this.isRiverType(el.type) || this.isElementLocked(el)) return;
        const nodes = el.config.nodes;
        if (nodes.length < 2) return;

        if (el.config.shapeMode === 'polygon') {
            const last = nodes[nodes.length - 1];
            const first = nodes[0];
            nodes.push({
                dx: Math.round((last.dx + first.dx) / 2),
                dy: Math.round((last.dy + first.dy) / 2)
            });
        } else {
            const last = nodes[nodes.length - 1];
            const prev = nodes[nodes.length - 2];
            let tx = last.dx - prev.dx;
            let ty = last.dy - prev.dy;
            const len = Math.hypot(tx, ty) || 1;
            tx /= len;
            ty /= len;
            nodes.push({
                dx: Math.round(last.dx + tx * 110),
                dy: Math.round(last.dy + ty * 110),
                w: last.w || 110
            });
        }
        this.updateRiverBounds(el);
        this.rebuildRiverHandles(el);
        this.notify();
    }

    removeRiverNode(id, index = -1) {
        const el = this.elements.find(e => e.id === id);
        if (!el || !this.isRiverType(el.type) || this.isElementLocked(el)) return;
        const nodes = el.config.nodes;
        const minNodes = el.config.shapeMode === 'polygon' ? 3 : 2;
        if (nodes.length <= minNodes) return;

        if (index >= 0 && index < nodes.length) {
            nodes.splice(index, 1);
        } else {
            nodes.pop();
        }
        this.updateRiverBounds(el);
        this.rebuildRiverHandles(el);
        this.notify();
    }

    scaleRiverWidth(id, factorOrWidth) {
        const el = this.elements.find(e => e.id === id);
        if (!el || !this.isRiverType(el.type) || this.isElementLocked(el)) return;
        const nodes = el.config.nodes || [];
        const isFactor = factorOrWidth > 0 && factorOrWidth < 5;

        if (el.config.shapeMode === 'polygon') {
            let ratio = factorOrWidth;
            if (!isFactor) {
                let curAvgR = 0;
                nodes.forEach(n => { curAvgR += Math.hypot(n.dx, n.dy); });
                curAvgR /= (nodes.length || 1);
                ratio = factorOrWidth / Math.max(20, curAvgR);
            }
            nodes.forEach(n => {
                n.dx = Math.round(n.dx * ratio);
                n.dy = Math.round(n.dy * ratio);
            });
        } else {
            nodes.forEach(n => {
                const curW = n.w || 100;
                n.w = Math.max(20, Math.min(3000, Math.round(isFactor ? curW * factorOrWidth : factorOrWidth)));
            });
        }
        this.updateRiverBounds(el);
        this.updateRiverHandlePositions(el);
        this.notify(false);
    }

    // ------------------------------------------------------------------------
    // STANDARD & HAZARD ELEMENT INTERACTIONS (Drag, Rotate, Resize, Stretch, 3D Perspective)
    // ------------------------------------------------------------------------

    attachElementInteractions(el, wrapper) {
        let mode = null; // 'drag', 'rotate', 'perspective', or 'handle-nw', 'handle-ne', 'handle-se', 'handle-sw', 'handle-n', 'handle-s', 'handle-e', 'handle-w'
        let startX = 0, startY = 0;
        let origX = 0, origY = 0, origW = 0, origH = 0, origAngle = 0, origTiltX = 0, origTiltY = 0;

        const onPointerDown = (e) => {
            if (this.isLocked || this.isElementLocked(el)) return;
            this.selectElement(el.id);

            const handleEl = e.target.closest('.element-handle');
            if (handleEl) {
                if (handleEl.classList.contains('handle-rotate')) {
                    mode = 'rotate';
                    const rect = wrapper.getBoundingClientRect();
                    const cx = rect.left + rect.width / 2;
                    const cy = rect.top + rect.height / 2;
                    origAngle = Math.atan2(e.clientY - cy, e.clientX - cx) * (180 / Math.PI) - el.rotation;
                    e.stopPropagation();
                    e.preventDefault();
                    return;
                }

                if (handleEl.classList.contains('handle-perspective')) {
                    mode = 'perspective';
                    startX = e.clientX;
                    startY = e.clientY;
                    origTiltX = (el.config && el.config.tiltX) || 0;
                    origTiltY = (el.config && el.config.tiltY) || 0;
                    e.stopPropagation();
                    e.preventDefault();
                    return;
                }

                // 8-direction corner & edge drag handles
                let handleDir = handleEl.getAttribute('data-handle');
                if (!handleDir) {
                    if (handleEl.classList.contains('handle-resize') || handleEl.classList.contains('handle-corner-se')) handleDir = 'se';
                    else if (handleEl.classList.contains('handle-corner-nw')) handleDir = 'nw';
                    else if (handleEl.classList.contains('handle-corner-ne')) handleDir = 'ne';
                    else if (handleEl.classList.contains('handle-corner-sw')) handleDir = 'sw';
                    else if (handleEl.classList.contains('handle-stretch-x') || handleEl.classList.contains('handle-edge-e')) handleDir = 'e';
                    else if (handleEl.classList.contains('handle-edge-w')) handleDir = 'w';
                    else if (handleEl.classList.contains('handle-stretch-y') || handleEl.classList.contains('handle-edge-s')) handleDir = 's';
                    else if (handleEl.classList.contains('handle-edge-n')) handleDir = 'n';
                }

                if (handleDir) {
                    mode = `handle-${handleDir}`;
                    startX = e.clientX;
                    startY = e.clientY;
                    origX = el.x;
                    origY = el.y;
                    origW = el.width;
                    origH = el.height;
                    e.stopPropagation();
                    e.preventDefault();
                    return;
                }
            }

            mode = 'drag';
            startX = e.clientX;
            startY = e.clientY;
            origX = el.x;
            origY = el.y;
            e.stopPropagation();
        };

        const onPointerMove = (e) => {
            if (!mode) return;
            const viewScale = this.getElementViewScale(el);
            const rawDx = e.clientX - startX;
            const rawDy = e.clientY - startY;
            const dx = rawDx / viewScale;
            const dy = rawDy / viewScale;

            if (mode === 'drag') {
                el.x = origX + dx;
                el.y = origY + dy;
                this.positionElementDOM(el);
            } else if (mode === 'rotate') {
                const rect = wrapper.getBoundingClientRect();
                const cx = rect.left + rect.width / 2;
                const cy = rect.top + rect.height / 2;
                const currentAngle = Math.atan2(e.clientY - cy, e.clientX - cx) * (180 / Math.PI);
                el.rotation = Math.round(((currentAngle - origAngle) % 360 + 360) % 360);
                this.applyElementTransform(el);
                if (window.onElementSelected) window.onElementSelected(el);
            } else if (mode === 'perspective') {
                el.config.tiltX = Math.max(-85, Math.min(85, Math.round(origTiltX - rawDy * 0.45)));
                el.config.tiltY = Math.max(-85, Math.min(85, Math.round(origTiltY + rawDx * 0.45)));
                this.applyElementTransform(el);
                if (window.onElementSelected) window.onElementSelected(el);
            } else if (mode && mode.startsWith('handle-')) {
                const dir = mode.replace('handle-', '');
                const MAX_DIM = 6000; // No artificial limits: effects can span across the entire map
                const MIN_DIM = 20;

                let newW = origW;
                let newH = origH;
                let newX = origX;
                let newY = origY;

                if (dir === 'se') {
                    newW = Math.max(MIN_DIM, Math.min(MAX_DIM, Math.round(origW + dx)));
                    newH = Math.max(MIN_DIM, Math.min(MAX_DIM, Math.round(origH + dy)));
                } else if (dir === 'nw') {
                    newW = Math.max(MIN_DIM, Math.min(MAX_DIM, Math.round(origW - dx)));
                    newH = Math.max(MIN_DIM, Math.min(MAX_DIM, Math.round(origH - dy)));
                    newX = origX + (origW - newW);
                    newY = origY + (origH - newH);
                } else if (dir === 'ne') {
                    newW = Math.max(MIN_DIM, Math.min(MAX_DIM, Math.round(origW + dx)));
                    newH = Math.max(MIN_DIM, Math.min(MAX_DIM, Math.round(origH - dy)));
                    newY = origY + (origH - newH);
                } else if (dir === 'sw') {
                    newW = Math.max(MIN_DIM, Math.min(MAX_DIM, Math.round(origW - dx)));
                    newH = Math.max(MIN_DIM, Math.min(MAX_DIM, Math.round(origH + dy)));
                    newX = origX + (origW - newW);
                } else if (dir === 'e') {
                    newW = Math.max(MIN_DIM, Math.min(MAX_DIM, Math.round(origW + dx)));
                } else if (dir === 'w') {
                    newW = Math.max(MIN_DIM, Math.min(MAX_DIM, Math.round(origW - dx)));
                    newX = origX + (origW - newW);
                } else if (dir === 's') {
                    newH = Math.max(MIN_DIM, Math.min(MAX_DIM, Math.round(origH + dy)));
                } else if (dir === 'n') {
                    newH = Math.max(MIN_DIM, Math.min(MAX_DIM, Math.round(origH - dy)));
                    newY = origY + (origH - newH);
                }

                el.x = newX;
                el.y = newY;
                el.width = newW;
                el.height = newH;

                wrapper.style.width = `${el.width}px`;
                wrapper.style.height = `${el.height}px`;
                this.positionElementDOM(el);

                if (el.canvas) {
                    if (el.canvas.width !== el.width) el.canvas.width = el.width;
                    if (el.canvas.height !== el.height) el.canvas.height = el.height;
                }
                if (window.onElementSelected) window.onElementSelected(el);
            }
        };

        const onPointerUp = () => {
            if (mode) {
                mode = null;
                this.notify();
            }
        };

        wrapper.addEventListener('mousedown', onPointerDown);
        wrapper.addEventListener('touchstart', (e) => {
            const touch = e.touches[0];
            onPointerDown({
                clientX: touch.clientX,
                clientY: touch.clientY,
                target: e.target,
                stopPropagation: () => e.stopPropagation(),
                preventDefault: () => e.preventDefault()
            });
        }, { passive: false });

        window.addEventListener('mousemove', onPointerMove);
        window.addEventListener('touchmove', (e) => {
            const touch = e.touches[0];
            onPointerMove({ clientX: touch.clientX, clientY: touch.clientY });
        }, { passive: false });

        window.addEventListener('mouseup', onPointerUp);
        window.addEventListener('touchend', onPointerUp);
    }

    fitElementToCanvas(id) {
        const el = this.elements.find(e => e.id === id);
        if (!el || this.isElementLocked(el)) return;

        const mapViewport = document.getElementById('map-viewport') || this.container;
        const rect = mapViewport ? mapViewport.getBoundingClientRect() : { width: window.innerWidth, height: window.innerHeight };
        const fullW = Math.round(rect.width || window.innerWidth);
        const fullH = Math.round(rect.height || window.innerHeight);

        // Anchored effects cover the map itself (map space); fixed effects cover the screen.
        if (this.isRiverType(el.type)) {
            el.x = Math.round(fullW / 2);
            el.y = Math.round(fullH / 2);
            this.positionElementDOM(el);
            const spanX = fullW * 0.45;
            const spanY = fullH * 0.40;
            if (el.config.shapeMode === 'polygon') {
                const count = (el.config.nodes && el.config.nodes.length) || 8;
                el.config.nodes = [];
                for (let i = 0; i < count; i++) {
                    const ang = (i / count) * Math.PI * 2;
                    el.config.nodes.push({
                        dx: Math.round(Math.cos(ang) * spanX),
                        dy: Math.round(Math.sin(ang) * spanY)
                    });
                }
            } else {
                const count = (el.config.nodes && el.config.nodes.length) || 4;
                el.config.nodes = [];
                for (let i = 0; i < count; i++) {
                    const t = count > 1 ? (i / (count - 1)) : 0.5;
                    el.config.nodes.push({
                        dx: Math.round(-spanX + t * (spanX * 2)),
                        dy: Math.round(Math.sin(t * Math.PI * 2) * (spanY * 0.35)),
                        w: Math.round(Math.min(spanY * 0.6, 260))
                    });
                }
            }
            this.updateRiverBounds(el);
            this.rebuildRiverHandles(el);
            this.notify();
            if (window.onElementSelected) window.onElementSelected(el);
            return;
        }

        el.x = 0;
        el.y = 0;
        el.width = fullW;
        el.height = fullH;
        el.rotation = 0;
        if (el.config) {
            el.config.tiltX = 0;
            el.config.tiltY = 0;
        }

        if (el.dom) {
            el.dom.style.width = `${fullW}px`;
            el.dom.style.height = `${fullH}px`;
            this.applyElementTransform(el);
        }
        if (el.canvas) {
            el.canvas.width = fullW;
            el.canvas.height = fullH;
        }

        this.notify();
        if (window.onElementSelected) window.onElementSelected(el);
    }

    setElementDimensions(id, width, height) {
        const el = this.elements.find(e => e.id === id);
        if (!el || el.type === 'river' || this.isElementLocked(el)) return;
        const MAX_DIM = 6000;
        if (width !== undefined && !isNaN(width)) {
            el.width = Math.max(20, Math.min(MAX_DIM, Math.round(parseFloat(width))));
        }
        if (height !== undefined && !isNaN(height)) {
            el.height = Math.max(20, Math.min(MAX_DIM, Math.round(parseFloat(height))));
        }
        if (el.dom) {
            el.dom.style.width = `${el.width}px`;
            el.dom.style.height = `${el.height}px`;
            this.positionElementDOM(el);
        }
        if (el.canvas) {
            el.canvas.width = el.width;
            el.canvas.height = el.height;
        }
        this.notify(false);
        if (window.onElementSelected) window.onElementSelected(el);
    }

    selectElement(id) {
        this.selectedElementId = id;
        if (!this.container) return;
        this.container.querySelectorAll('.living-element').forEach(el => {
            el.classList.toggle('selected', el.getAttribute('data-id') === id);
        });

        const selectedObj = this.elements.find(e => e.id === id);
        if (window.onElementSelected) {
            window.onElementSelected(selectedObj);
        }
    }

    removeElement(id) {
        const idx = this.elements.findIndex(e => e.id === id);
        if (idx !== -1) {
            const el = this.elements[idx];
            if (el.dom && el.dom.parentElement) {
                el.dom.parentElement.removeChild(el.dom);
            }
            this.elements.splice(idx, 1);
            if (this.selectedElementId === id) {
                this.selectElement(null);
            }
            this.notify();
            this.updateAudioForElements();
        }
    }

    clearAll(notify = true) {
        this.elements.forEach(el => {
            if (el.dom && el.dom.parentElement) {
                el.dom.parentElement.removeChild(el.dom);
            }
        });
        this.elements = [];
        this.selectElement(null);
        if (notify) {
            this.notify();
            this.updateAudioForElements();
        }
    }

    duplicateElement(id) {
        const original = this.elements.find(e => e.id === id);
        if (!original) return null;
        return this.addElement(
            original.type,
            original.x + 40,
            original.y + 40,
            original.width,
            original.height,
            original.rotation,
            Object.assign(JSON.parse(JSON.stringify(original.config)), { locked: false })
        );
    }

    updateElementConfig(id, newConfig) {
        const el = this.elements.find(e => e.id === id);
        if (!el) return;
        el.config = Object.assign(el.config, newConfig);
        this.applyElementTransform(el);
        if (this.isRiverType(el.type)) {
            this.updateRiverBounds(el);
            this.updateRiverHandlePositions(el);
        }
        this.notify(false);
    }

    // ------------------------------------------------------------------------
    // FREEHAND DRAW FX ENGINE (DRAW LINES / SPLINES OR CLOSED SHAPES / AREAS)
    // ------------------------------------------------------------------------

    initDrawCanvas() {
        this.drawCanvas = document.getElementById('freehand-draw-canvas');
        if (this.drawCanvas) {
            this.drawCtx = this.drawCanvas.getContext('2d');
            this.resizeDrawCanvas();
        }

        const onPointerDown = (e) => {
            if (!this.isDrawingMode) return;
            // Ignore right-click pan or secondary buttons
            if (e.button !== 0 && e.touches === undefined) return;
            e.preventDefault();
            e.stopPropagation();

            const cx = e.touches ? e.touches[0].clientX : e.clientX;
            const cy = e.touches ? e.touches[0].clientY : e.clientY;
            this.rawDrawPoints = [{ x: cx, y: cy }];
            this.isPointerDownDrawing = true;
            this.renderDrawLivePreview();
        };

        const onPointerMove = (e) => {
            if (!this.isDrawingMode || !this.isPointerDownDrawing) return;
            e.preventDefault();
            const cx = e.touches ? e.touches[0].clientX : e.clientX;
            const cy = e.touches ? e.touches[0].clientY : e.clientY;
            const last = this.rawDrawPoints[this.rawDrawPoints.length - 1];
            if (!last || Math.hypot(cx - last.x, cy - last.y) >= 6) {
                this.rawDrawPoints.push({ x: cx, y: cy });
                this.renderDrawLivePreview();
            }
        };

        const onPointerUp = (e) => {
            if (!this.isDrawingMode || !this.isPointerDownDrawing) return;
            this.isPointerDownDrawing = false;
            this.finishFreehandStroke(this.rawDrawPoints);
            this.rawDrawPoints = [];
            if (this.drawCtx && this.drawCanvas) {
                this.drawCtx.clearRect(0, 0, this.drawCanvas.width, this.drawCanvas.height);
            }
        };

        const onPointerCancel = () => {
            if (!this.isDrawingMode || !this.isPointerDownDrawing) return;
            this.isPointerDownDrawing = false;
            this.rawDrawPoints = [];
            if (this.drawCtx && this.drawCanvas) {
                this.drawCtx.clearRect(0, 0, this.drawCanvas.width, this.drawCanvas.height);
            }
        };

        if (this.drawCanvas) {
            this.drawCanvas.addEventListener('mousedown', onPointerDown);
            this.drawCanvas.addEventListener('touchstart', onPointerDown, { passive: false });
        }
        window.addEventListener('mousemove', onPointerMove, { passive: false });
        window.addEventListener('touchmove', onPointerMove, { passive: false });
        window.addEventListener('mouseup', onPointerUp);
        window.addEventListener('touchend', onPointerUp);
        window.addEventListener('touchcancel', onPointerCancel);
        window.addEventListener('resize', () => this.resizeDrawCanvas());
    }

    resizeDrawCanvas() {
        if (!this.drawCanvas) return;
        const parent = this.drawCanvas.parentElement;
        const rect = parent ? parent.getBoundingClientRect() : { width: window.innerWidth, height: window.innerHeight };
        const w = rect.width || window.innerWidth;
        const h = rect.height || window.innerHeight;
        if (this.drawCanvas.width !== w || this.drawCanvas.height !== h) {
            this.drawCanvas.width = w;
            this.drawCanvas.height = h;
        }
    }

    toggleDrawMode(targetType = null, elementId = null) {
        this.setDrawMode(!this.isDrawingMode, targetType, elementId);
    }

    setDrawMode(active, targetType = null, elementId = null) {
        this.isDrawingMode = !!active;

        if (elementId) {
            this.drawTargetElementId = elementId;
            const el = this.elements.find(e => e.id === elementId);
            if (el) this.drawTargetType = el.type;
        } else if (targetType) {
            this.drawTargetType = targetType;
            this.drawTargetElementId = null;
        } else if (!this.drawTargetType) {
            if (this.selectedElementId) {
                const el = this.elements.find(e => e.id === this.selectedElementId);
                if (el) {
                    this.drawTargetType = el.type;
                    this.drawTargetElementId = el.id;
                }
            } else {
                this.drawTargetType = 'uni_river';
            }
        }

        document.body.classList.toggle('draw-mode-active', this.isDrawingMode);

        if (this.drawCanvas) {
            this.drawCanvas.style.display = this.isDrawingMode ? 'block' : 'none';
            if (this.isDrawingMode) {
                this.resizeDrawCanvas();
            } else if (this.drawCtx) {
                this.drawCtx.clearRect(0, 0, this.drawCanvas.width, this.drawCanvas.height);
            }
        }

        const banner = document.getElementById('draw-mode-banner');
        if (banner) {
            banner.style.display = this.isDrawingMode ? 'block' : 'none';
        }

        this.updateDrawUI();
    }

    setDrawSubMode(subMode) {
        if (subMode === 'auto' || subMode === 'line' || subMode === 'shape') {
            this.drawSubMode = subMode;
            this.updateDrawUI();
        }
    }

    setDrawStrokeWidth(w) {
        this.drawStrokeWidth = Math.max(10, Math.min(600, parseInt(w, 10) || 90));
        this.updateDrawUI();
    }

    setDrawTargetType(type) {
        this.drawTargetType = type;
        this.drawTargetElementId = null;
        this.updateDrawUI();
    }

    getFeatureName(type) {
        if (!type) return 'Effect';
        if (typeof window !== 'undefined' && window.FEATURE_CATALOG && window.FEATURE_CATALOG[type]) {
            return window.FEATURE_CATALOG[type].name;
        }
        return type.toUpperCase().replace(/_/g, ' ');
    }

    updateDrawUI() {
        const toggleBtn = document.getElementById('btn-toggle-draw-mode');
        const hudBtn = document.getElementById('hud-btn-draw');
        if (toggleBtn) {
            toggleBtn.classList.toggle('active', this.isDrawingMode);
            toggleBtn.innerHTML = this.isDrawingMode ? '✏️ Draw Mode: ON' : '✏️ Draw Mode: OFF';
        }
        if (hudBtn) {
            hudBtn.classList.toggle('active', this.isDrawingMode);
        }

        const featName = this.drawTargetElementId
            ? `(Re-drawing #${this.drawTargetElementId}) ${this.getFeatureName(this.drawTargetType)}`
            : this.getFeatureName(this.drawTargetType);

        const bannerTarget = document.getElementById('draw-banner-target-name');
        if (bannerTarget) bannerTarget.textContent = featName;

        const panelTarget = document.getElementById('fx-draw-target-name');
        if (panelTarget) panelTarget.textContent = featName;

        // Submode buttons sync
        document.querySelectorAll('.draw-submode-btn').forEach(btn => {
            const sm = btn.getAttribute('data-submode');
            btn.classList.toggle('active', sm === this.drawSubMode);
        });

        // Width slider & readouts
        const slider = document.getElementById('fx-draw-width-slider');
        const valDisp = document.getElementById('fx-draw-width-val');
        if (slider) slider.value = this.drawStrokeWidth;
        if (valDisp) valDisp.textContent = `${this.drawStrokeWidth}px`;

        document.querySelectorAll('.fx-draw-width-chip').forEach(chip => {
            const cw = parseInt(chip.getAttribute('data-width'), 10);
            chip.classList.toggle('active', cw === this.drawStrokeWidth);
        });
    }

    simplifyPoints(pts, tolerance = 16) {
        if (!pts || pts.length <= 3) return pts ? pts.slice() : [];
        const res = [pts[0]];
        let lastPt = pts[0];
        const tolSq = tolerance * tolerance;
        for (let i = 1; i < pts.length - 1; i++) {
            const p = pts[i];
            const distSq = (p.x - lastPt.x) ** 2 + (p.y - lastPt.y) ** 2;
            if (distSq >= tolSq) {
                res.push(p);
                lastPt = p;
            }
        }
        res.push(pts[pts.length - 1]);
        return res;
    }

    createRibbonPolygon(pts, width) {
        if (!pts || pts.length === 0) return [];
        if (pts.length === 1) {
            const r = (width || 80) / 2;
            const res = [];
            for (let a = 0; a < Math.PI * 2; a += Math.PI / 8) {
                res.push({ x: pts[0].x + Math.cos(a) * r, y: pts[0].y + Math.sin(a) * r });
            }
            return res;
        }
        const halfW = (width || 80) / 2;
        const leftPts = [];
        const rightPts = [];
        const n = pts.length;
        for (let i = 0; i < n; i++) {
            let prev = pts[Math.max(0, i - 1)];
            let next = pts[Math.min(n - 1, i + 1)];
            let dx = next.x - prev.x;
            let dy = next.y - prev.y;
            let len = Math.hypot(dx, dy) || 1;
            let nx = -dy / len;
            let ny = dx / len;
            leftPts.push({ x: pts[i].x + nx * halfW, y: pts[i].y + ny * halfW });
            rightPts.push({ x: pts[i].x - nx * halfW, y: pts[i].y - ny * halfW });
        }
        // Rounded end cap (forwards)
        const capEnd = [];
        const endP = pts[n - 1];
        const dxN = pts[n - 1].x - pts[n - 2].x;
        const dyN = pts[n - 1].y - pts[n - 2].y;
        const baseAngN = Math.atan2(dyN, dxN);
        for (let a = -Math.PI / 2; a <= Math.PI / 2; a += Math.PI / 6) {
            capEnd.push({
                x: endP.x + Math.cos(baseAngN + a) * halfW,
                y: endP.y + Math.sin(baseAngN + a) * halfW
            });
        }
        // Rounded start cap (backwards)
        const capStart = [];
        const startP = pts[0];
        const dx0 = pts[1].x - pts[0].x;
        const dy0 = pts[1].y - pts[0].y;
        const baseAng0 = Math.atan2(dy0, dx0);
        for (let a = Math.PI / 2; a <= Math.PI * 1.5; a += Math.PI / 6) {
            capStart.push({
                x: startP.x + Math.cos(baseAng0 + a) * halfW,
                y: startP.y + Math.sin(baseAng0 + a) * halfW
            });
        }
        return leftPts.concat(capEnd, rightPts.reverse(), capStart);
    }

    renderDrawLivePreview() {
        const ctx = this.drawCtx;
        if (!ctx || !this.drawCanvas) return;
        const W = this.drawCanvas.width;
        const H = this.drawCanvas.height;
        ctx.clearRect(0, 0, W, H);

        const pts = this.rawDrawPoints;
        if (!pts || pts.length < 2) return;

        const rect = this.drawCanvas.getBoundingClientRect();
        const p0 = pts[0];
        const pN = pts[pts.length - 1];
        const closeDist = Math.hypot(p0.x - pN.x, p0.y - pN.y);

        let isClosed = false;
        if (this.drawSubMode === 'shape') {
            isClosed = true;
        } else if (this.drawSubMode === 'auto') {
            let totalLen = 0;
            for (let i = 1; i < pts.length; i++) totalLen += Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y);
            const closeThreshold = Math.max(30, this.drawStrokeWidth * 0.40);
            if (pts.length >= 6 && closeDist < closeThreshold && totalLen >= closeThreshold * 2.2) {
                isClosed = true;
            }
        }

        ctx.save();

        // 1. Soft Fill Preview when Closed Shape is detected or active
        if (isClosed) {
            ctx.beginPath();
            ctx.moveTo(pts[0].x - rect.left, pts[0].y - rect.top);
            for (let i = 1; i < pts.length; i++) {
                ctx.lineTo(pts[i].x - rect.left, pts[i].y - rect.top);
            }
            ctx.closePath();
            ctx.fillStyle = 'rgba(0, 255, 200, 0.18)';
            ctx.fill();
        }

        // 2. Stroke Width Rails (Guide lines indicating thickness)
        const ribbon = this.createRibbonPolygon(pts.map(p => ({ x: p.x - rect.left, y: p.y - rect.top })), this.drawStrokeWidth);
        if (ribbon.length >= 3 && !isClosed) {
            ctx.beginPath();
            ctx.moveTo(ribbon[0].x, ribbon[0].y);
            for (let r = 1; r < ribbon.length; r++) ctx.lineTo(ribbon[r].x, ribbon[r].y);
            ctx.closePath();
            ctx.fillStyle = 'rgba(0, 255, 200, 0.12)';
            ctx.fill();
            ctx.strokeStyle = 'rgba(0, 255, 200, 0.40)';
            ctx.lineWidth = 1.5;
            ctx.setLineDash([6, 6]);
            ctx.stroke();
            ctx.setLineDash([]);
        }

        // 3. Main Center Glowing Neon Spine
        ctx.beginPath();
        ctx.moveTo(pts[0].x - rect.left, pts[0].y - rect.top);
        for (let i = 1; i < pts.length; i++) {
            ctx.lineTo(pts[i].x - rect.left, pts[i].y - rect.top);
        }
        if (isClosed) ctx.closePath();

        ctx.strokeStyle = '#00ffc8';
        ctx.lineWidth = 3.5;
        ctx.shadowColor = '#00ffc8';
        ctx.shadowBlur = 12;
        ctx.stroke();

        // 4. Start Bead
        ctx.beginPath();
        ctx.arc(p0.x - rect.left, p0.y - rect.top, 5, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.shadowBlur = 8;
        ctx.fill();

        // 5. Pulsing Head Marker at pointer
        ctx.beginPath();
        ctx.arc(pN.x - rect.left, pN.y - rect.top, 7, 0, Math.PI * 2);
        ctx.fillStyle = '#00ffc8';
        ctx.shadowBlur = 14;
        ctx.fill();

        // If loop is ready to close, draw snapping indicator
        if (isClosed && this.drawSubMode === 'auto') {
            ctx.beginPath();
            ctx.arc(p0.x - rect.left, p0.y - rect.top, 14, 0, Math.PI * 2);
            ctx.strokeStyle = '#ffbb00';
            ctx.lineWidth = 2;
            ctx.setLineDash([4, 4]);
            ctx.stroke();
        }

        ctx.restore();
    }

    finishFreehandStroke(rawPoints) {
        if (!rawPoints || rawPoints.length < 3) return;

        const simplified = this.simplifyPoints(rawPoints, 18);
        if (simplified.length < 2) return;

        const p0 = simplified[0];
        const pN = simplified[simplified.length - 1];
        const closeDist = Math.hypot(p0.x - pN.x, p0.y - pN.y);

        let totalLen = 0;
        for (let i = 1; i < simplified.length; i++) {
            totalLen += Math.hypot(simplified[i].x - simplified[i - 1].x, simplified[i].y - simplified[i - 1].y);
        }

        let isClosed = false;
        if (this.drawSubMode === 'shape') {
            isClosed = true;
        } else if (this.drawSubMode === 'auto') {
            const closeThreshold = Math.max(30, this.drawStrokeWidth * 0.40);
            if (simplified.length >= 4 && closeDist < closeThreshold && totalLen >= closeThreshold * 2.2) {
                isClosed = true;
            }
        }

        // Convert coordinates from screen to map space if target element or new element is map-anchored
        const existingEl = this.drawTargetElementId ? this.elements.find(e => e.id === this.drawTargetElementId) : null;
        const isAnchored = existingEl ? !!(existingEl.config && existingEl.config.mapAnchored) : this.anchorNewToMap;

        const rect = this.container ? this.container.getBoundingClientRect() : { left: 0, top: 0 };
        const cam = this.camera || { x: 0, y: 0, scale: 1.0 };
        const s = isAnchored ? (cam.scale || 1.0) : 1.0;

        const targetType = existingEl ? existingEl.type : (this.drawTargetType || 'uni_river');
        const isDeform = this.isRiverType(targetType);

        const mapPoints = simplified.map(pt => {
            const screenX = pt.x - rect.left;
            const screenY = pt.y - rect.top;
            if (isAnchored) {
                return {
                    x: (screenX - cam.x) / s,
                    y: (screenY - cam.y) / s
                };
            }
            return { x: screenX, y: screenY };
        });

        const effStrokeWidth = Math.max(4, Math.round(isAnchored ? (this.drawStrokeWidth / s) : this.drawStrokeWidth));

        if (isDeform) {
            // Deformable river/pond/forest: centroid + relative node deltas
            let cx = 0, cy = 0;
            mapPoints.forEach(p => { cx += p.x; cy += p.y; });
            cx = Math.round(cx / mapPoints.length);
            cy = Math.round(cy / mapPoints.length);

            const nodes = mapPoints.map(p => ({
                dx: Math.round(p.x - cx),
                dy: Math.round(p.y - cy),
                w: effStrokeWidth
            }));

            const shapeMode = isClosed ? 'polygon' : 'spline';

            if (existingEl) {
                existingEl.x = cx;
                existingEl.y = cy;
                existingEl.config.nodes = nodes;
                existingEl.config.shapeMode = shapeMode;
                this.updateRiverBounds(existingEl);
                this.positionElementDOM(existingEl);
                this.rebuildRiverHandles(existingEl);
                this.notify();
                this.selectElement(existingEl.id);
            } else {
                const newEl = this.addElement(
                    targetType,
                    cx,
                    cy,
                    null,
                    null,
                    0,
                    {
                        nodes: nodes,
                        shapeMode: shapeMode,
                        mapAnchored: isAnchored
                    }
                );
                if (newEl) this.selectElement(newEl.id);
            }
        } else {
            // All other features: bounding box + drawPolygon / drawPath
            let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
            mapPoints.forEach(p => {
                if (p.x < minX) minX = p.x;
                if (p.y < minY) minY = p.y;
                if (p.x > maxX) maxX = p.x;
                if (p.y > maxY) maxY = p.y;
            });

            const pad = Math.ceil(effStrokeWidth * 0.55) + 16;
            const w = Math.max(80, Math.ceil(maxX - minX + pad * 2));
            const h = Math.max(80, Math.ceil(maxY - minY + pad * 2));
            const elX = Math.round(minX - pad);
            const elY = Math.round(minY - pad);

            const localPts = mapPoints.map(p => ({
                x: Math.round(p.x - elX),
                y: Math.round(p.y - elY)
            }));

            const drawPolygon = isClosed ? localPts : this.createRibbonPolygon(localPts, effStrokeWidth);

            if (existingEl) {
                existingEl.x = elX;
                existingEl.y = elY;
                existingEl.width = w;
                existingEl.height = h;
                if (existingEl.dom) {
                    existingEl.dom.style.width = `${w}px`;
                    existingEl.dom.style.height = `${h}px`;
                }
                if (existingEl.canvas) {
                    existingEl.canvas.width = w;
                    existingEl.canvas.height = h;
                }
                existingEl.config.drawPolygon = drawPolygon;
                existingEl.config.drawPath = localPts;
                existingEl.config.drawMode = isClosed ? 'shape' : 'line';
                existingEl.config.strokeWidth = effStrokeWidth;
                this.positionElementDOM(existingEl);
                this.notify();
                this.selectElement(existingEl.id);
            } else {
                const newEl = this.addElement(
                    targetType,
                    elX,
                    elY,
                    w,
                    h,
                    0,
                    {
                        drawPolygon: drawPolygon,
                        drawPath: localPts,
                        drawMode: isClosed ? 'shape' : 'line',
                        strokeWidth: effStrokeWidth,
                        mapAnchored: isAnchored
                    }
                );
                if (newEl) this.selectElement(newEl.id);
            }
        }

        // Clear re-draw target after successful stroke
        this.drawTargetElementId = null;
        this.updateDrawUI();
    }

    // ------------------------------------------------------------------------
    // WEATHER ENGINE
    // ------------------------------------------------------------------------

    setWeather(type, intensity = 0.6, windAngle = 30, quantity = null) {
        this.weather.type = type;
        this.weather.intensity = intensity;
        this.weather.windAngle = windAngle;
        if (quantity !== null && quantity !== undefined) {
            this.weather.quantity = parseFloat(quantity) || 1.0;
        }
        this.weatherParticles = [];

        if (this.weatherCanvas) {
            this.weatherCanvas.style.display = type === 'none' ? 'none' : 'block';
        }
        this.notify(false);
        this.updateAudioForElements();
    }

    setWeatherQuantity(val) {
        this.weather.quantity = Math.max(0.2, Math.min(4.0, parseFloat(val) || 1.0));
        this.notify(false);
    }

    // ------------------------------------------------------------------------
    // REAL-TIME RENDERING LOOP
    // ------------------------------------------------------------------------

    startLoop() {
        const loop = (now) => {
            const dt = Math.min(0.08, (now - this.lastTime) / 1000);
            this.lastTime = now;

            for (let i = 0; i < this.elements.length; i++) {
                const el = this.elements[i];
                const spd = (el.config && (el.config.speed || el.config.flowSpeed)) || 1.0;
                el.stateTime += dt * spd;
                this.renderSingleElement(el, dt * spd);
            }

            if (this.weather.type !== 'none' && this.weatherCtx) {
                this.renderWeather(dt);
            }

            this.animFrameId = requestAnimationFrame(loop);
        };
        this.animFrameId = requestAnimationFrame(loop);
    }

    drawPathFollowFeature(el, ctx, W, H, dt, effectiveType) {
        if (!el.config || !Array.isArray(el.config.drawPath) || el.config.drawPath.length < 2) return false;

        const path = el.config.drawPath;
        const isClosed = el.config.drawMode === 'shape';
        const strokeW = el.config.strokeWidth || 60;
        const time = el.stateTime;
        const cfg = el.config;
        const intensity = cfg.intensity !== undefined ? cfg.intensity : 1.0;
        const speed = cfg.speed !== undefined ? cfg.speed : 1.0;
        const rough = Math.max(0, Math.min(2.0, parseFloat(cfg.fractalRoughness !== undefined ? cfg.fractalRoughness : 0.75)));
        const elScale = Math.max(0.25, Math.min(3.0, parseFloat(cfg.elementScale !== undefined ? cfg.elementScale : (cfg.scale || 1.0))));
        ctx._fractalRough = rough;

        // Sample points along path with step size proportional to stroke width
        const samples = [];
        const stepDist = Math.max(14, Math.round(strokeW * 0.45));
        let accum = 0;
        samples.push(path[0]);
        for (let i = 1; i < path.length; i++) {
            const pA = path[i - 1];
            const pB = path[i];
            const segLen = Math.hypot(pB.x - pA.x, pB.y - pA.y);
            if (segLen === 0) continue;
            accum += segLen;
            while (accum >= stepDist) {
                accum -= stepDist;
                const ratio = 1 - (accum / segLen);
                samples.push({
                    x: pA.x + (pB.x - pA.x) * ratio,
                    y: pA.y + (pB.y - pA.y) * ratio
                });
            }
        }
        if (samples.length < 2) samples.push(path[path.length - 1]);

        if (window.VTT_FX_DISPATCHER && window.VTT_FX_DISPATCHER.renderPath(el, ctx, W, H, dt, samples, strokeW, isClosed)) {
            return true;
        }

        // Draw depending on effect category
        const isFire = (effectiveType === 'inferno' || effectiveType === 'campfire' || effectiveType === 'torch' || effectiveType === 'lava_seam' || effectiveType === 'plasma_leak');
        const isSmoke = (effectiveType === 'smoke' || effectiveType === 'fog' || effectiveType === 'steam');
        const isMud = (effectiveType === 'mud' || effectiveType === 'toxic_spill');
        const isSparks = (effectiveType === 'sparks' || effectiveType === 'spores' || effectiveType === 'fireflies');

        if (isFire) {
            const pal = this.getFirePalette(cfg.variant || 'wildfire');
            // 1. Ambient warm radiant heat along the path
            ctx.save();
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.strokeStyle = `rgba(${pal.glowOuter}, ${0.45 * intensity})`;
            ctx.lineWidth = strokeW * 1.35;
            ctx.beginPath();
            ctx.moveTo(samples[0].x, samples[0].y);
            for (let i = 1; i < samples.length; i++) ctx.lineTo(samples[i].x, samples[i].y);
            if (isClosed) ctx.closePath();
            ctx.stroke();

            ctx.strokeStyle = `rgba(${pal.glowMid}, ${0.60 * intensity})`;
            ctx.lineWidth = strokeW * 0.85;
            ctx.stroke();
            ctx.restore();

            // 2. Multi-point flickering flame bodies along the path samples
            const flameRadius = strokeW * 0.55 * elScale;
            samples.forEach((pt, sIdx) => {
                const seed = sIdx * 13.37;
                const flick = Math.sin(time * 6.5 * speed + seed) * 0.18 + Math.cos(time * 9.2 * speed - seed * 1.3) * 0.12;
                const r = Math.max(10, flameRadius * (1 + flick));

                ctx.save();
                ctx.translate(pt.x, pt.y);
                const grad = ctx.createRadialGradient(0, 0, r * 0.1, 0, 0, r);
                grad.addColorStop(0, `rgba(${pal.core}, ${0.95 * intensity})`);
                grad.addColorStop(0.35, `rgba(${pal.mid}, ${0.85 * intensity})`);
                grad.addColorStop(0.70, `rgba(${pal.glowMid}, ${0.50 * intensity})`);
                grad.addColorStop(1, 'rgba(0,0,0,0)');
                ctx.fillStyle = grad;

                ctx.beginPath();
                const numPetals = 8;
                for (let a = 0; a <= Math.PI * 2; a += Math.PI / numPetals) {
                    const mod = this.fractalHarmonicMod(a + time * 2.5 * speed, seed, rough);
                    const pr = r * mod;
                    const px = Math.cos(a) * pr;
                    const py = Math.sin(a) * pr;
                    if (a === 0) ctx.moveTo(px, py);
                    else ctx.lineTo(px, py);
                }
                ctx.closePath();
                ctx.fill();

                // Spark embers rising
                const sparkPhase = (time * 1.5 * speed + sIdx * 0.23) % 1.0;
                const sparkY = -sparkPhase * r * 1.4;
                const sparkX = Math.sin(sparkPhase * 6 + seed) * (r * 0.5);
                ctx.beginPath();
                ctx.arc(sparkX, sparkY, Math.max(1, 2.5 * (1 - sparkPhase)), 0, Math.PI * 2);
                ctx.fillStyle = `rgba(${pal.spark}, ${(1 - sparkPhase) * 0.9})`;
                ctx.fill();

                ctx.restore();
            });
            return true;
        }

        if (isSmoke) {
            const puffRadius = strokeW * 0.65 * elScale;
            samples.forEach((pt, sIdx) => {
                const seed = sIdx * 7.73;
                const puffPhase = (time * 0.45 * speed + sIdx * 0.31) % 1.0;
                const r = puffRadius * (0.8 + 0.4 * puffPhase);
                const driftX = Math.sin(time * 0.8 + seed) * (r * 0.3);
                const driftY = -puffPhase * r * 0.6;

                ctx.save();
                ctx.translate(pt.x + driftX, pt.y + driftY);
                const grad = ctx.createRadialGradient(0, 0, r * 0.1, 0, 0, r);
                grad.addColorStop(0, `rgba(160, 168, 178, ${0.45 * (1 - puffPhase * 0.4) * intensity})`);
                grad.addColorStop(0.55, `rgba(120, 128, 138, ${0.25 * (1 - puffPhase * 0.4) * intensity})`);
                grad.addColorStop(1, 'rgba(100, 108, 118, 0)');
                ctx.fillStyle = grad;

                ctx.beginPath();
                const numPetals = 8;
                for (let a = 0; a <= Math.PI * 2; a += Math.PI / numPetals) {
                    const mod = this.fractalHarmonicMod(a + time * 0.6, seed, rough);
                    const pr = r * mod;
                    const px = Math.cos(a) * pr;
                    const py = Math.sin(a) * pr;
                    if (a === 0) ctx.moveTo(px, py);
                    else ctx.lineTo(px, py);
                }
                ctx.closePath();
                ctx.fill();
                ctx.restore();
            });
            return true;
        }

        if (isMud) {
            ctx.save();
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.strokeStyle = `rgba(38, 28, 20, ${0.85 * intensity})`;
            ctx.lineWidth = strokeW;
            ctx.beginPath();
            ctx.moveTo(samples[0].x, samples[0].y);
            for (let i = 1; i < samples.length; i++) ctx.lineTo(samples[i].x, samples[i].y);
            if (isClosed) ctx.closePath();
            ctx.stroke();

            ctx.strokeStyle = `rgba(68, 52, 38, ${0.65 * intensity})`;
            ctx.lineWidth = strokeW * 0.65;
            ctx.stroke();

            // Bubbles popping along path
            samples.forEach((pt, sIdx) => {
                const seed = sIdx * 5.17;
                const bPhase = (time * 0.8 * speed + sIdx * 0.37) % 1.0;
                if (bPhase > 0.4) {
                    const bR = (strokeW * 0.22) * Math.sin((bPhase - 0.4) / 0.6 * Math.PI);
                    const bx = pt.x + Math.sin(seed * 3) * (strokeW * 0.25);
                    const by = pt.y + Math.cos(seed * 3) * (strokeW * 0.25);
                    ctx.beginPath();
                    ctx.arc(bx, by, Math.max(1, bR), 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(110, 88, 64, ${0.75 * intensity})`;
                    ctx.fill();
                    ctx.strokeStyle = `rgba(160, 135, 105, ${0.60 * intensity})`;
                    ctx.lineWidth = 1.2;
                    ctx.stroke();
                }
            });
            ctx.restore();
            return true;
        }

        if (isSparks) {
            samples.forEach((pt, sIdx) => {
                const seed = sIdx * 9.21;
                const count = 3;
                for (let k = 0; k < count; k++) {
                    const phase = (time * 2.2 * speed + sIdx * 0.21 + k * 0.33) % 1.0;
                    const ang = seed + k * (Math.PI * 2 / count) + time * 1.5;
                    const dist = phase * (strokeW * 0.6);
                    const sx = pt.x + Math.cos(ang) * dist;
                    const sy = pt.y + Math.sin(ang) * dist;
                    ctx.beginPath();
                    ctx.arc(sx, sy, Math.max(1, 3.2 * (1 - phase)), 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(255, 220, 120, ${(1 - phase) * 0.95 * intensity})`;
                    ctx.shadowColor = '#ffbb00';
                    ctx.shadowBlur = 8;
                    ctx.fill();
                }
            });
            return true;
        }

        // Generic fallback: draw glowing stroke along the path
        ctx.save();
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.strokeStyle = `rgba(0, 255, 200, ${0.45 * intensity})`;
        ctx.lineWidth = strokeW;
        ctx.beginPath();
        ctx.moveTo(samples[0].x, samples[0].y);
        for (let i = 1; i < samples.length; i++) ctx.lineTo(samples[i].x, samples[i].y);
        if (isClosed) ctx.closePath();
        ctx.stroke();
        ctx.restore();
        return true;
    }

    renderSingleElement(el, dt) {
        const ctx = el.ctx;
        if (!ctx) return;

        el._shapeIdx = 1;
        const cfg = el.config || {};
        const elScale = Math.max(0.25, Math.min(3.0, parseFloat(cfg.elementScale !== undefined ? cfg.elementScale : (cfg.scale || 1.0))));
        const rough = cfg.fractalRoughness !== undefined ? parseFloat(cfg.fractalRoughness) : 0.75;
        ctx._fractalRough = rough;

        const catDef = (typeof window !== 'undefined' && window.FEATURE_CATALOG && window.FEATURE_CATALOG[el.type]);
        const effectiveType = catDef ? catDef.base : el.type;

        if (this.isRiverType(el.type) || effectiveType === 'river' || effectiveType === 'pond' || effectiveType === 'forest') {
            const W = el.canvas.width;
            const H = el.canvas.height;
            ctx.clearRect(0, 0, W, H);
            if (effectiveType === 'forest' || this.isForestType(el.type)) {
                el._autoScaleEntities = false;
                this.drawDeformableForest(el, ctx, dt);
            } else {
                el._autoScaleEntities = true;
                el._maxEntityRadius = 85;
                this.drawDeformableWater(el, ctx, dt);
            }
            return;
        }

        const W = el.width;
        const H = el.height;
        ctx.clearRect(0, 0, W, H);

        const isMultiEntityField = (
            effectiveType === 'rain' || effectiveType === 'snow' || effectiveType === 'fog' ||
            effectiveType === 'dust' || effectiveType === 'leaves' || effectiveType === 'fireflies' ||
            effectiveType === 'bats' || effectiveType === 'rats' || effectiveType === 'fish' ||
            effectiveType === 'inferno' || effectiveType === 'smoke' || effectiveType === 'mud' ||
            effectiveType === 'sparks' || effectiveType === 'spores' || effectiveType === 'steam' ||
            effectiveType === 'webs' || effectiveType === 'hyperspace'
        );

        el._autoScaleEntities = isMultiEntityField;
        el._maxEntityRadius = Math.min(W, H) * 0.42;

        const hasDrawClip = Array.isArray(el.config && el.config.drawPolygon) && el.config.drawPolygon.length >= 3;
        if (hasDrawClip) {
            ctx.save();
            ctx.beginPath();
            const poly = el.config.drawPolygon;
            ctx.moveTo(poly[0].x, poly[0].y);
            for (let p = 1; p < poly.length; p++) {
                ctx.lineTo(poly[p].x, poly[p].y);
            }
            ctx.closePath();
            ctx.clip();
        }

        if (hasDrawClip && this.drawPathFollowFeature && this.drawPathFollowFeature(el, ctx, W, H, dt, effectiveType)) {
            ctx.restore();
            if (this.selectedElementId === el.id && !this.isElementLocked(el)) {
                ctx.save();
                ctx.beginPath();
                const poly = el.config.drawPolygon;
                ctx.moveTo(poly[0].x, poly[0].y);
                for (let p = 1; p < poly.length; p++) ctx.lineTo(poly[p].x, poly[p].y);
                ctx.closePath();
                ctx.strokeStyle = 'rgba(0, 255, 200, 0.85)';
                ctx.lineWidth = 2.5;
                ctx.setLineDash([6, 4]);
                ctx.stroke();
                ctx.restore();
            }
            return;
        }

        const applyMotifScale = !isMultiEntityField && effectiveType !== 'tumbleweed' && Math.abs(elScale - 1.0) > 0.01;
        if (applyMotifScale) {
            ctx.save();
            ctx.translate(W * 0.5, H * 0.5);
            ctx.scale(elScale, elScale);
            ctx.translate(-W * 0.5, -H * 0.5);
        }

        if (window.VTT_FX_DISPATCHER && window.VTT_FX_DISPATCHER.render(el, ctx, W, H, dt)) {
            if (applyMotifScale) ctx.restore();
            if (hasDrawClip) {
                ctx.restore();
                if (this.selectedElementId === el.id && !this.isElementLocked(el)) {
                    ctx.save();
                    ctx.beginPath();
                    const poly = el.config.drawPolygon;
                    ctx.moveTo(poly[0].x, poly[0].y);
                    for (let p = 1; p < poly.length; p++) ctx.lineTo(poly[p].x, poly[p].y);
                    ctx.closePath();
                    ctx.strokeStyle = 'rgba(0, 255, 200, 0.85)';
                    ctx.lineWidth = 2.5;
                    ctx.setLineDash([6, 4]);
                    ctx.stroke();
                    ctx.restore();
                }
            }
            return;
        }

        if (this.drawBespokeFeature && this.drawBespokeFeature(el, ctx, W, H, dt)) {
            if (applyMotifScale) ctx.restore();
            if (hasDrawClip) {
                ctx.restore();
                if (this.selectedElementId === el.id && !this.isElementLocked(el)) {
                    ctx.save();
                    ctx.beginPath();
                    const poly = el.config.drawPolygon;
                    ctx.moveTo(poly[0].x, poly[0].y);
                    for (let p = 1; p < poly.length; p++) ctx.lineTo(poly[p].x, poly[p].y);
                    ctx.closePath();
                    ctx.strokeStyle = 'rgba(0, 255, 200, 0.85)';
                    ctx.lineWidth = 2.5;
                    ctx.setLineDash([6, 4]);
                    ctx.stroke();
                    ctx.restore();
                }
            }
            return;
        }

        switch (effectiveType) {
            case 'campfire':
                this.drawRealisticCampfire(el, ctx, W, H, dt);
                break;
            case 'torch':
                this.drawRealisticTorch(el, ctx, W, H, dt);
                break;
            case 'inferno':
                this.drawRealisticInferno(el, ctx, W, H, dt);
                break;
            case 'smoke':
                this.drawRealisticSmoke(el, ctx, W, H, dt);
                break;
            case 'mud':
                this.drawRealisticMud(el, ctx, W, H, dt);
                break;
            case 'sparks':
                this.drawRealisticSparks(el, ctx, W, H, dt);
                break;
            case 'tumbleweed':
                this.drawRealisticTumbleweed(el, ctx, W, H, dt);
                break;
            case 'waterfall':
                this.drawRealisticWaterfall(el, ctx, W, H, dt);
                break;
            case 'lava_seam':
                this.drawRealisticLavaSeam(el, ctx, W, H, dt);
                break;
            case 'canopy':
                this.drawRealisticCanopy(el, ctx, W, H, dt);
                break;
            case 'sunbeams':
                this.drawRealisticSunbeams(el, ctx, W, H, dt);
                break;
            case 'hologram':
                this.drawRealisticHologram(el, ctx, W, H, dt);
                break;
            case 'forcefield':
                this.drawRealisticForcefield(el, ctx, W, H, dt);
                break;
            case 'plasma_leak':
                this.drawRealisticPlasmaLeak(el, ctx, W, H, dt);
                break;
            case 'teleporter':
                this.drawRealisticTeleporter(el, ctx, W, H, dt);
                break;
            case 'cyber_terminal':
                this.drawRealisticCyberTerminal(el, ctx, W, H, dt);
                break;
            case 'toxic_spill':
                this.drawRealisticToxicSpill(el, ctx, W, H, dt);
                break;
            case 'ocean_waves':
                this.drawRealisticOceanWaves(el, ctx, W, H, dt);
                break;
            case 'forest':
                this.drawRealisticForest(el, ctx, W, H, dt);
                break;
            case 'spotlight':
                this.drawRealisticSpotlight(el, ctx, W, H, dt);
                break;
            case 'bats':
                this.drawRealisticBats(el, ctx, W, H, dt);
                break;
            case 'rats':
                this.drawRealisticRats(el, ctx, W, H, dt);
                break;
            case 'fish':
                this.drawRealisticFish(el, ctx, W, H, dt);
                break;
            case 'patrol_actor':
                this.drawRealisticPatrolActor(el, ctx, W, H, dt);
                break;
            case 'rain':
                this.drawRealisticLocalRain(el, ctx, W, H, dt);
                break;
            case 'snow':
                this.drawRealisticLocalSnow(el, ctx, W, H, dt);
                break;
            case 'fog':
                this.drawRealisticLocalFog(el, ctx, W, H, dt);
                break;
            case 'dust':
                this.drawRealisticLocalDust(el, ctx, W, H, dt);
                break;
            case 'hyperspace':
                this.drawRealisticLocalHyperspace(el, ctx, W, H, dt);
                break;
            case 'lantern':
                this.drawRealisticLantern(el, ctx, W, H, dt);
                break;
            case 'steam':
            case 'spores':
                this.drawRealisticSmoke(el, ctx, W, H, dt);
                break;
            case 'webs':
                this.drawRealisticMud(el, ctx, W, H, dt);
                break;
            case 'leaves':
                this.drawRealisticLocalDust(el, ctx, W, H, dt);
                break;
            case 'fireflies':
                this.drawRealisticFireflies(el, ctx, W, H, dt);
                break;
            case 'tentacles':
                this.drawRealisticTentacles(el, ctx, W, H, dt);
                break;
            case 'fountain':
                this.drawRealisticFountain(el, ctx, W, H, dt);
                break;
            case 'fan':
                this.drawRealisticIndustrialFan(el, ctx, W, H, dt);
                break;
            case 'crystal':
                this.drawRealisticFloatingCrystal(el, ctx, W, H, dt);
                break;
            case 'headlights':
                this.drawRealisticVehicleHeadlights(el, ctx, W, H, dt);
                break;
            case 'lightstrip':
                this.drawRealisticLightstrip(el, ctx, W, H, dt);
                break;
            case 'pit_trap':
                this.drawRealisticPitTrap(el, ctx, W, H, dt);
                break;
            case 'conveyor':
                this.drawRealisticConveyor(el, ctx, W, H, dt);
                break;
            default:
                this.drawRealisticTorch(el, ctx, W, H, dt);
                break;
        }

        if (applyMotifScale) {
            ctx.restore();
        }

        if (hasDrawClip) {
            ctx.restore();
            // If the element is currently selected, draw an elegant glowing neon contour along the drawn perimeter
            if (this.selectedElementId === el.id && !this.isElementLocked(el)) {
                ctx.save();
                ctx.beginPath();
                const poly = el.config.drawPolygon;
                ctx.moveTo(poly[0].x, poly[0].y);
                for (let p = 1; p < poly.length; p++) ctx.lineTo(poly[p].x, poly[p].y);
                ctx.closePath();
                ctx.strokeStyle = 'rgba(0, 255, 200, 0.85)';
                ctx.lineWidth = 2.5;
                ctx.setLineDash([6, 4]);
                ctx.stroke();
                ctx.restore();
            }
        }
    }

    getFirePalette(variant = 'wildfire') {
        if (variant === 'hellfire' || variant === 'oth_hellfire') {
            return {
                glowInner: '255, 110, 30',
                glowMid: '200, 25, 10',
                glowOuter: '90, 5, 5',
                coreHot: '255, 225, 160',
                flameMid: '245, 55, 15',
                flameOuter: '140, 10, 5',
                emberHot: '255, 190, 120',
                emberCool: '220, 30, 10'
            };
        } else if (variant === 'alchemical' || variant === 'hist_greekfire') {
            return {
                glowInner: '140, 255, 90',
                glowMid: '35, 200, 65',
                glowOuter: '10, 95, 25',
                coreHot: '235, 255, 200',
                flameMid: '65, 235, 75',
                flameOuter: '15, 120, 35',
                emberHot: '210, 255, 160',
                emberCool: '40, 210, 60'
            };
        } else if (variant === 'arcane_fire') {
            return {
                glowInner: '120, 200, 255',
                glowMid: '75, 100, 250',
                glowOuter: '45, 20, 140',
                coreHot: '230, 248, 255',
                flameMid: '65, 155, 255',
                flameOuter: '95, 35, 210',
                emberHot: '200, 240, 255',
                emberCool: '110, 80, 255'
            };
        } else if (variant === 'mod_fire') {
            return {
                glowInner: '255, 140, 30',
                glowMid: '215, 75, 10',
                glowOuter: '120, 25, 5',
                coreHot: '255, 240, 180',
                flameMid: '245, 100, 15',
                flameOuter: '160, 35, 5',
                emberHot: '255, 180, 100',
                emberCool: '180, 40, 10',
                isTireFire: true
            };
        }
        // Default 'wildfire' (Natural Blazing Orange/Gold)
        return {
            glowInner: '255, 180, 50',
            glowMid: '230, 110, 20',
            glowOuter: '160, 40, 0',
            coreHot: '255, 255, 210',
            flameMid: '255, 140, 20',
            flameOuter: '210, 45, 0',
            emberHot: '255, 230, 160',
            emberCool: '255, 90, 20'
        };
    }

    // ========================================================================
    // 1. TRUE 90° TOP-DOWN ORTHOGRAPHIC REALISTIC CAMPFIRE
    // ========================================================================
    drawRealisticCampfire(el, ctx, W, H, dt) {
        const cx = W / 2;
        const cy = H / 2;
        const time = el.stateTime;
        const intensity = el.config.intensity || 1.0;
        const pal = this.getFirePalette(el.config.variant || 'wildfire');
        const radius = Math.min(W, H) * 0.40;
        const pitRadius = radius * 0.68;
        const avgScale = Math.min(W, H) / 180;

        // 1. 360° Omnidirectional Soft Ambient Light Pool (Radiates across tabletop battlemap)
        const flicker = (Math.sin(time * 3.7) * 0.045 + Math.sin(time * 7.1) * 0.03 + Math.cos(time * 11.3) * 0.02) * intensity;
        const lightRadius = Math.max(30, (Math.max(W, H) * 0.50) * (1 + flicker));

        ctx.save();
        ctx.globalCompositeOperation = 'source-over';
        const warmGlow = ctx.createRadialGradient(cx, cy, 2, cx, cy, lightRadius);
        warmGlow.addColorStop(0, `rgba(${pal.glowInner}, 0.50)`);
        warmGlow.addColorStop(0.28, `rgba(${pal.glowMid}, 0.24)`);
        warmGlow.addColorStop(0.68, `rgba(${pal.glowOuter}, 0.08)`);
        warmGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = warmGlow;
        ctx.beginPath();
        ctx.arc(cx, cy, lightRadius, 0, Math.PI * 2);
        ctx.fill();

        // 2. Circular Ash Bed & Charcoal Floor inside firepit
        const ashGrad = ctx.createRadialGradient(cx, cy, 2, cx, cy, pitRadius);
        ashGrad.addColorStop(0, '#120d0a');
        ashGrad.addColorStop(0.65, '#1a130f');
        ashGrad.addColorStop(0.95, '#261c16');
        ashGrad.addColorStop(1, '#110c09');
        ctx.fillStyle = ashGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, pitRadius, 0, Math.PI * 2);
        ctx.fill();

        // 3. Top-Down Cobblestone Hearth Ring (12 rounded stone boulders encircling the fire)
        const stoneCount = 12;
        for (let s = 0; s < stoneCount; s++) {
            const stoneAngle = (s / stoneCount) * Math.PI * 2;
            const stoneDist = pitRadius * (0.94 + 0.07 * Math.sin(s * 4.3));
            const sx = cx + Math.cos(stoneAngle) * stoneDist;
            const sy = cy + Math.sin(stoneAngle) * stoneDist;
            const stoneW = Math.max(6, 13 * avgScale * (0.85 + 0.25 * Math.sin(s * 2.7)));
            const stoneH = Math.max(5, 10 * avgScale * (0.85 + 0.2 * Math.cos(s * 3.1)));

            ctx.save();
            ctx.translate(sx, sy);
            ctx.rotate(stoneAngle + Math.PI / 2 + (s % 3 - 1) * 0.2);

            // Shadow / dark outer edge
            ctx.fillStyle = (s % 2 === 0) ? '#24201d' : '#2f2a25';
            ctx.beginPath();
            ctx.ellipse(0, 0, stoneW, stoneH, 0, 0, Math.PI * 2);
            ctx.fill();

            // Inner fire-lit warm rim highlight
            ctx.strokeStyle = `rgba(${pal.glowMid}, ${0.35 + 0.15 * Math.sin(time * 3 + s)})`;
            ctx.lineWidth = Math.max(1, 1.8 * avgScale);
            ctx.beginPath();
            ctx.arc(0, 0, stoneW * 0.85, Math.PI * 0.7, Math.PI * 1.3);
            ctx.stroke();
            ctx.restore();
        }

        // 4. Radial Star / Criss-Cross Firewood Logs converging into the center
        const logCount = 6;
        ctx.lineCap = 'round';
        for (let l = 0; l < logCount; l++) {
            const lAngle = (l / logCount) * Math.PI * 2 + 0.25;
            const jitterAng = Math.sin(l * 2.8) * 0.15;
            const xOuter = cx + Math.cos(lAngle + jitterAng) * (pitRadius * 0.88);
            const yOuter = cy + Math.sin(lAngle + jitterAng) * (pitRadius * 0.88);
            const xInner = cx + Math.cos(lAngle + jitterAng) * (pitRadius * 0.15);
            const yInner = cy + Math.sin(lAngle + jitterAng) * (pitRadius * 0.15);

            // Dark charred bark
            ctx.strokeStyle = (l % 2 === 0) ? '#1f1610' : '#2b1e15';
            ctx.lineWidth = Math.max(3.5, 7.5 * avgScale);
            ctx.beginPath();
            ctx.moveTo(xOuter, yOuter);
            ctx.lineTo(xInner, yInner);
            ctx.stroke();

            // Glowing ember tip where log meets the central coal bed
            const logEmberHeat = 0.7 + 0.3 * Math.sin(time * 4.5 + l * 1.6);
            ctx.strokeStyle = `rgba(${pal.flameMid}, ${logEmberHeat})`;
            ctx.lineWidth = Math.max(2, 4.0 * avgScale);
            ctx.beginPath();
            ctx.moveTo(xInner + Math.cos(lAngle) * (pitRadius * 0.25), yInner + Math.sin(lAngle) * (pitRadius * 0.25));
            ctx.lineTo(xInner, yInner);
            ctx.stroke();
        }

        // 5. Central Pulsing Bed of Glowing Hot Coals
        const coalHeat = 0.75 + Math.sin(time * 4) * 0.18;
        const coalGrad = ctx.createRadialGradient(cx, cy, 1, cx, cy, pitRadius * 0.42);
        coalGrad.addColorStop(0, `rgba(${pal.coreHot}, ${coalHeat})`);
        coalGrad.addColorStop(0.45, `rgba(${pal.flameMid}, ${coalHeat * 0.85})`);
        coalGrad.addColorStop(0.85, `rgba(${pal.flameOuter}, ${coalHeat * 0.4})`);
        coalGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = coalGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, pitRadius * 0.42, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // 6. Top-Down 360° Radial Flame Tongues & Rising Swirling Motes (Additive Blending)
        if (!el.particles) el.particles = [];
        const targetParticles = Math.max(12, Math.floor(54 * intensity * (el.config.quantity || 1.0)));
        if (el.particles.length > targetParticles) el.particles.length = targetParticles;

        while (el.particles.length < targetParticles) {
            const spawnAngle = Math.random() * Math.PI * 2;
            const spawnDist = Math.random() * (pitRadius * 0.32);
            const isEmber = Math.random() < 0.30;
            const speed = (isEmber ? (24 + Math.random() * 38) : (16 + Math.random() * 32)) * avgScale;
            const vortexSpin = (Math.random() - 0.5) * 2.2;

            el.particles.push({
                x: cx + Math.cos(spawnAngle) * spawnDist,
                y: cy + Math.sin(spawnAngle) * spawnDist,
                angle: spawnAngle,
                speed: speed,
                spin: vortexSpin,
                life: 1.0,
                decay: isEmber ? (0.55 + Math.random() * 0.55) : (1.2 + Math.random() * 0.8),
                baseSize: (isEmber ? (1.8 + Math.random() * 2.2) : (12 + Math.random() * 16)) * avgScale,
                isEmber: isEmber,
                turbSeed: Math.random() * 100
            });
        }

        ctx.save();
        ctx.globalCompositeOperation = 'lighter';

        for (let i = el.particles.length - 1; i >= 0; i--) {
            const p = el.particles[i];
            p.life -= p.decay * dt;
            p.turbSeed += dt * 4;

            // In top-down orthographic view:
            // Flames expand radially outward and swirl in a subtle vortex as they rise toward the overhead camera!
            p.angle += p.spin * dt;
            const radSpeed = p.speed * (0.8 + 0.4 * Math.sin(p.turbSeed));
            p.x += Math.cos(p.angle) * radSpeed * dt;
            p.y += Math.sin(p.angle) * radSpeed * dt;

            if (p.life <= 0) {
                el.particles.splice(i, 1);
                continue;
            }

            if (p.isEmber) {
                // Swirling ember spark rising towards ceiling/camera
                const emberAlpha = Math.min(1, p.life * 1.6);
                ctx.fillStyle = p.life > 0.5 ? `rgba(${pal.emberHot}, ${emberAlpha})` : `rgba(${pal.emberCool}, ${emberAlpha})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.baseSize * (0.6 + (1 - p.life) * 0.5), 0, Math.PI * 2);
                ctx.fill();
            } else {
                // Radial flame lobe expanding in perspective as it lifts towards camera
                const curRadius = p.baseSize * (0.7 + (1 - p.life) * 0.7) * Math.sin(p.life * Math.PI);
                if (curRadius <= 0.5) continue;

                const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, curRadius);
                const alpha = Math.min(0.72, p.life * 0.92);

                grad.addColorStop(0, `rgba(${pal.coreHot}, ${alpha})`);
                grad.addColorStop(0.36, `rgba(${pal.flameMid}, ${alpha * 0.78})`);
                grad.addColorStop(0.78, `rgba(${pal.flameOuter}, ${alpha * 0.35})`);
                grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

                ctx.fillStyle = grad;
                ctx.beginPath();
                ctx.arc(p.x, p.y, curRadius, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        ctx.restore();
    }

    // ========================================================================
    // 2. TRUE 90° TOP-DOWN ORTHOGRAPHIC REALISTIC TORCH / SCONCE
    // ========================================================================
    drawRealisticTorch(el, ctx, W, H, dt) {
        const cx = W / 2;
        const cy = H / 2;
        const time = el.stateTime;
        const intensity = el.config.intensity || 0.9;
        const pal = this.getFirePalette(el.config.variant || 'wildfire');
        const avgScale = Math.min(W, H) / 120;

        const flicker = (Math.sin(time * 5.2) * 0.05 + Math.cos(time * 9.1) * 0.03 + Math.sin(time * 14.3) * 0.02) * intensity;
        const r = (Math.min(W, H) * 0.46) * (1 + flicker);

        ctx.save();
        // 1. Soft 360° Omnidirectional Radial Light Wave on Floor/Wall
        const grad = ctx.createRadialGradient(cx, cy, 2, cx, cy, r);
        grad.addColorStop(0, `rgba(${pal.glowInner}, 0.65)`);
        grad.addColorStop(0.32, `rgba(${pal.glowMid}, 0.28)`);
        grad.addColorStop(0.72, `rgba(${pal.glowOuter}, 0.08)`);
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();

        // 2. Top-down Wall Sconce / Iron Bracket Ring
        const bracketR = Math.max(5, 9 * avgScale);
        ctx.fillStyle = '#18171c';
        ctx.beginPath();
        ctx.arc(cx, cy, bracketR * 1.35, 0, Math.PI * 2);
        ctx.fill();

        // Charred torch head wrap
        ctx.fillStyle = '#2d221a';
        ctx.beginPath();
        ctx.arc(cx, cy, bracketR, 0, Math.PI * 2);
        ctx.fill();

        // 3. Intensely Glowing Flame Core
        ctx.globalCompositeOperation = 'lighter';
        const flameR = Math.max(7, Math.min(W, H) * 0.12) * (1 + flicker);
        const fGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, flameR);
        fGrad.addColorStop(0, `rgba(${pal.coreHot}, 0.96)`);
        fGrad.addColorStop(0.42, `rgba(${pal.flameMid}, 0.72)`);
        fGrad.addColorStop(0.85, `rgba(${pal.flameOuter}, 0.28)`);
        fGrad.addColorStop(1, `rgba(${pal.flameOuter}, 0)`);
        ctx.fillStyle = fGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, flameR, 0, Math.PI * 2);
        ctx.fill();

        // 4. Tiny Micro-Sparks dancing around the torch head
        const sparkCount = 4;
        for (let s = 0; s < sparkCount; s++) {
            const spPhase = (time * 2.2 + s * 1.6) % 1.0;
            const spAngle = s * (Math.PI * 2 / sparkCount) + time * 3.1;
            const spDist = bracketR * (0.8 + spPhase * 1.8);
            const sx = cx + Math.cos(spAngle) * spDist;
            const sy = cy + Math.sin(spAngle) * spDist;
            const spAlpha = Math.sin(spPhase * Math.PI) * intensity;
            ctx.fillStyle = `rgba(${pal.emberHot}, ${spAlpha})`;
            ctx.beginPath();
            ctx.arc(sx, sy, Math.max(1, 1.8 * avgScale * (1 - spPhase * 0.5)), 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.restore();
    }

    // ========================================================================
    // 2B. TRUE 90° TOP-DOWN ORTHOGRAPHIC SPREADING FIRE / INFERNO ('inferno')
    // ========================================================================
    drawRealisticInferno(el, ctx, W, H, dt) {
        const cx = W / 2;
        const cy = H / 2;
        const rx = W * 0.40;
        const ry = H * 0.38;
        const time = el.stateTime;
        const intensity = el.config.intensity || 1.0;
        const speed = el.config.speed || 1.0;
        const pal = this.getFirePalette(el.config.variant || 'wildfire');
        const avgDim = Math.sqrt(W * H);
        const rough = ctx._fractalRough !== undefined ? ctx._fractalRough : (el.config.fractalRoughness !== undefined ? parseFloat(el.config.fractalRoughness) : 0.75);

        // 1. Top-Down Scorched Earth Boundary & Radiant Ambient Heat (Fractal Erosion)
        ctx.save();
        ctx.translate(cx, cy);
        ctx.scale(1, ry / Math.max(1, rx));

        const groundGlow = ctx.createRadialGradient(0, 0, rx * 0.1, 0, 0, rx * 1.18);
        groundGlow.addColorStop(0, `rgba(18, 12, 8, 0.72)`);
        groundGlow.addColorStop(0.55, `rgba(${pal.glowOuter}, 0.38)`);
        groundGlow.addColorStop(0.85, `rgba(${pal.glowMid}, 0.15)`);
        groundGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = groundGlow;

        if (rough > 0.05) {
            // Jagged fractal scorched earth bite marks
            ctx.beginPath();
            const scorchedSteps = 24;
            for (let s = 0; s < scorchedSteps; s++) {
                const sAngle = (s / scorchedSteps) * Math.PI * 2;
                const fbm = Math.sin(s * 3.2 + 1.2) * 0.45 + Math.cos(s * 5.4 - 0.7) * 0.28 + Math.sin(s * 8.1 + 2.1) * 0.16;
                const sDist = rx * (1.05 + rough * 0.22 * fbm);
                const sx = Math.cos(sAngle) * sDist;
                const sy = Math.sin(sAngle) * sDist;
                if (s === 0) ctx.moveTo(sx, sy);
                else ctx.lineTo(sx, sy);
            }
            ctx.closePath();
            ctx.fill();
        } else {
            ctx.beginPath();
            ctx.arc(0, 0, rx * 1.18, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();

        // 2. 360° Radiating Subterranean Magma Cracks across the burnt ground
        ctx.save();
        ctx.lineCap = 'round';
        const crackCount = 10;
        for (let c = 0; c < crackCount; c++) {
            const angle = (c / crackCount) * Math.PI * 2 + 0.3;
            const pulse = 0.50 + 0.35 * Math.sin(time * 4.2 * speed + c * 1.7);
            const r1 = 0.10 + (c % 3) * 0.12;
            const r2 = 0.55 + ((c * 7) % 4) * 0.09;
            const x1 = cx + Math.cos(angle) * rx * r1;
            const y1 = cy + Math.sin(angle) * ry * r1;
            const dev = rough * (Math.sin(c * 2.5 + time) * 0.15);
            const xm = cx + Math.cos(angle + 0.18 + dev) * rx * ((r1 + r2) * 0.5);
            const ym = cy + Math.sin(angle - 0.15 + dev) * ry * ((r1 + r2) * 0.5);
            const x2 = cx + Math.cos(angle + 0.05 + dev * 0.5) * rx * r2;
            const y2 = cy + Math.sin(angle + 0.05 + dev * 0.5) * ry * r2;

            ctx.strokeStyle = `rgba(${pal.flameMid}, ${pulse * 0.75})`;
            ctx.lineWidth = Math.max(1.8, avgDim * 0.015);
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(xm, ym);
            ctx.lineTo(x2, y2);
            ctx.stroke();
        }
        ctx.restore();

        // 3. Top-Down 360° Multi-Point Licking Flames, Soot Wisps & Rising Embers
        if (!el.particles) el.particles = [];
        const targetCount = Math.max(14, Math.floor(90 * intensity * (el.config.quantity || 1.0)));
        if (el.particles.length > targetCount) el.particles.length = targetCount;

        while (el.particles.length < targetCount) {
            const theta = Math.random() * Math.PI * 2;
            const rFrac = Math.sqrt(Math.random()) * 0.88;
            const spawnX = cx + Math.cos(theta) * rx * rFrac;
            const spawnY = cy + Math.sin(theta) * ry * rFrac;

            const roll = Math.random();
            const pType = pal.isTireFire
                ? (roll < 0.20 ? 'ember' : (roll < 0.68 ? 'soot' : 'flame'))
                : (roll < 0.24 ? 'ember' : (roll < 0.36 ? 'soot' : 'flame'));
            const radAngle = Math.random() * Math.PI * 2;
            const speed = (pType === 'ember' ? (20 + Math.random() * 32) : (12 + Math.random() * 24)) * (avgDim / 200);

            el.particles.push({
                x: spawnX,
                y: spawnY,
                angle: radAngle,
                speed: speed,
                spin: (Math.random() - 0.5) * 1.8,
                life: Math.random(),
                decay: pType === 'ember' ? (0.65 + Math.random() * 0.55) : (pType === 'soot' ? (0.45 + Math.random() * 0.35) : (1.2 + Math.random() * 0.8)),
                size: pType === 'ember'
                    ? Math.max(1.5, avgDim * (0.008 + Math.random() * 0.009))
                    : (pType === 'soot' ? avgDim * (pal.isTireFire ? 0.16 : 0.09 + Math.random() * 0.08) : avgDim * (0.065 + Math.random() * 0.085)),
                pType,
                turbSeed: Math.random() * 100
            });
        }

        // Pass 1: Dark soot wisps billowing radially around outer fire boundary
        ctx.save();
        ctx.globalCompositeOperation = 'source-over';
        for (let i = 0; i < el.particles.length; i++) {
            const p = el.particles[i];
            if (p.pType !== 'soot') continue;
            const rad = p.size * (1.2 - p.life * 0.3);
            const alpha = Math.sin(p.life * Math.PI) * (pal.isTireFire ? 0.58 : 0.30);
            const sGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, rad);
            sGrad.addColorStop(0, pal.isTireFire ? `rgba(10, 8, 8, ${alpha})` : `rgba(22, 18, 16, ${alpha})`);
            sGrad.addColorStop(1, 'rgba(10, 8, 8, 0)');
            ctx.fillStyle = sGrad;
            ctx.beginPath();
            ctx.arc(p.x, p.y, rad, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();

        // Pass 2: Additive turbulent flames & glowing embers swirling in 360°
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';

        for (let i = el.particles.length - 1; i >= 0; i--) {
            const p = el.particles[i];
            p.life -= p.decay * dt;
            p.turbSeed += dt * 4.0;

            // In top-down orthographic view:
            // Flames and embers lick and swirl outward in 360° across the battlemap floor
            p.angle += p.spin * dt;
            const moveSpeed = p.speed * (0.8 + 0.3 * Math.sin(p.turbSeed));
            p.x += Math.cos(p.angle) * moveSpeed * dt;
            p.y += Math.sin(p.angle) * moveSpeed * dt;

            if (p.life <= 0) {
                const theta = Math.random() * Math.PI * 2;
                const rFrac = Math.sqrt(Math.random()) * 0.88;
                p.x = cx + Math.cos(theta) * rx * rFrac;
                p.y = cy + Math.sin(theta) * ry * rFrac;
                p.angle = Math.random() * Math.PI * 2;
                p.life = 1.0;
                continue;
            }

            if (p.pType === 'ember') {
                const eAlpha = Math.min(1, p.life * 1.6);
                ctx.fillStyle = p.life > 0.45 ? `rgba(${pal.emberHot}, ${eAlpha})` : `rgba(${pal.emberCool}, ${eAlpha})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * (0.6 + (1 - p.life) * 0.5), 0, Math.PI * 2);
                ctx.fill();
            } else if (p.pType === 'flame') {
                const curR = p.size * (0.7 + (1 - p.life) * 0.7) * Math.sin(p.life * Math.PI);
                if (curR <= 0.6) continue;

                const fGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, curR);
                const alpha = Math.min(0.65, p.life * 0.88);
                fGrad.addColorStop(0, `rgba(${pal.coreHot}, ${alpha})`);
                fGrad.addColorStop(0.35, `rgba(${pal.flameMid}, ${alpha * 0.80})`);
                fGrad.addColorStop(0.75, `rgba(${pal.flameOuter}, ${alpha * 0.35})`);
                fGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');

                ctx.fillStyle = fGrad;
                ctx.beginPath();
                ctx.arc(p.x, p.y, curR, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        ctx.restore();
    }

    // ========================================================================
    // 2C. BILLOWING SMOKE / TOXIC GAS CLOUD ('smoke')
    // ========================================================================
    getSmokePalette(variant = 'uni_blacksmoke') {
        if (variant === 'uni_poisonfumes' || variant === 'poison_gas') {
            return {
                type: 'poison',
                baseRgb: '72, 130, 20',
                puffDark: '45, 92, 14',
                puffLight: '145, 215, 45',
                moteRgb: '185, 255, 60',
                glowRgb: '130, 210, 35',
                glowAlpha: 0.35,
                moteType: 'spore',
                hasBubbles: true
            };
        } else if (variant === 'mod_smog') {
            return {
                type: 'smog',
                baseRgb: '115, 100, 72',
                puffDark: '80, 70, 48',
                puffLight: '165, 148, 110',
                moteRgb: '180, 160, 120',
                glowRgb: '145, 125, 80',
                glowAlpha: 0.20,
                moteType: 'particulate',
                hasStratification: true
            };
        } else if (variant === 'mod_teargas') {
            return {
                type: 'teargas',
                baseRgb: '228, 232, 238',
                puffDark: '175, 182, 192',
                puffLight: '252, 253, 255',
                moteRgb: '255, 255, 255',
                glowRgb: '210, 220, 230',
                glowAlpha: 0.45,
                moteType: 'powder',
                hasCanister: true
            };
        } else if (variant === 'uni_steamvent' || variant === 'mod_steam' || variant === 'steam') {
            return {
                type: 'steam',
                baseRgb: '225, 235, 245',
                puffDark: '170, 185, 202',
                puffLight: '250, 252, 255',
                moteRgb: '210, 235, 255',
                glowRgb: '190, 220, 250',
                glowAlpha: 0.30,
                moteType: 'droplet',
                isVent: variant === 'uni_steamvent',
                isGrate: variant === 'mod_steam'
            };
        } else if (variant === 'sci_spores' || variant === 'spores' || variant === 'spore_cloud') {
            return {
                type: 'alien_spores',
                baseRgb: '95, 28, 110',
                puffDark: '55, 12, 70',
                puffLight: '175, 65, 205',
                moteRgb: '34, 211, 238', // Neon cyan bioluminescent spores
                glowRgb: '192, 38, 211',
                glowAlpha: 0.40,
                moteType: 'biolum_spores'
            };
        } else if (variant === 'oth_miasma' || variant === 'shadow_miasma') {
            return {
                type: 'necromiasma',
                baseRgb: '36, 18, 52',
                puffDark: '18, 8, 28',
                puffLight: '82, 42, 118',
                moteRgb: '20, 15, 25', // Swarming black flies
                glowRgb: '107, 33, 168',
                glowAlpha: 0.32,
                moteType: 'flies'
            };
        } else if (variant === 'uni_grayfogsmoke' || variant === 'ash_fog') {
            return {
                type: 'ash_smoke',
                baseRgb: '135, 142, 152',
                puffDark: '95, 102, 112',
                puffLight: '185, 194, 205',
                moteRgb: '165, 172, 182',
                glowRgb: '115, 122, 132',
                glowAlpha: 0.18,
                moteType: 'ash'
            };
        } else if (variant === 'acid_fumes') {
            return {
                type: 'acid',
                baseRgb: '32, 148, 85',
                puffDark: '18, 92, 52',
                puffLight: '88, 225, 142',
                moteRgb: '150, 255, 190',
                glowRgb: '34, 197, 94',
                glowAlpha: 0.35,
                moteType: 'acid_spores'
            };
        }
        // Default: 'uni_blacksmoke', 'hist_smoke', 'black_smoke' (Pitch-Black Carbon Soot Plume)
        return {
            type: 'black_soot',
            baseRgb: '18, 16, 15',
            puffDark: '10, 8, 8',
            puffLight: '54, 48, 44',
            moteRgb: '255, 110, 25', // Intense fiery orange cinders
            glowRgb: '255, 65, 10',
            glowAlpha: 0.40,
            moteType: 'fire_ember',
            hasFireCore: true
        };
    }

    drawRealisticSmoke(el, ctx, W, H, dt) {
        const cx = W / 2;
        const cy = H / 2;
        const rx = W * 0.40;
        const ry = H * 0.38;
        const time = el.stateTime;
        const intensity = el.config.intensity || 1.0;
        const speed = el.config.speed || 1.0;
        const variant = el.config.variant || 'uni_blacksmoke';
        const pal = this.getSmokePalette(variant);
        const avgDim = Math.sqrt(W * H);
        const rough = ctx._fractalRough !== undefined ? ctx._fractalRough : (el.config.fractalRoughness !== undefined ? parseFloat(el.config.fractalRoughness) : 0.75);

        // ====================================================================
        // 1. BESPOKE GROUND ANCHOR / VEIL / SPECIALIZED ORIGIN MECHANICS
        // ====================================================================
        ctx.save();

        if (pal.hasFireCore) {
            // Intense glowing coal bed beneath soot plume (shows real fire source!)
            const coreGlow = ctx.createRadialGradient(cx, cy, 2, cx, cy, rx * 0.48);
            const flick = Math.sin(time * 7 * speed) * 0.08 + Math.cos(time * 11 * speed) * 0.05;
            coreGlow.addColorStop(0, `rgba(${pal.glowRgb}, ${(0.75 + flick) * intensity})`);
            coreGlow.addColorStop(0.35, `rgba(235, 90, 15, ${(0.45 + flick) * intensity})`);
            coreGlow.addColorStop(0.70, `rgba(140, 25, 5, ${(0.18 + flick) * intensity})`);
            coreGlow.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = coreGlow;
            ctx.beginPath();
            ctx.arc(cx, cy, rx * 0.48, 0, Math.PI * 2);
            ctx.fill();

            // Charred ground scorched footprint
            ctx.fillStyle = 'rgba(12, 10, 9, 0.78)';
            ctx.beginPath();
            ctx.ellipse(cx, cy, rx * 0.38, ry * 0.32, 0, 0, Math.PI * 2);
            ctx.fill();
        } else if (pal.hasBubbles) {
            // Sucking marsh mud mire with bursting iridescent methane gas bubbles!
            ctx.fillStyle = 'rgba(28, 42, 14, 0.82)';
            ctx.beginPath();
            ctx.ellipse(cx, cy, rx * 0.55, ry * 0.46, 0, 0, Math.PI * 2);
            ctx.fill();

            // 4 pulsing bubbling mud vents that pop green gas rings
            for (let b = 0; b < 4; b++) {
                const bPhase = (time * 1.4 * speed + b * 0.28) % 1.0;
                const bAngle = b * 1.57 + 0.4;
                const bx = cx + Math.cos(bAngle) * rx * 0.28;
                const by = cy + Math.sin(bAngle) * ry * 0.24;
                const br = 4 + bPhase * 16;
                ctx.strokeStyle = `rgba(163, 230, 53, ${(1 - bPhase) * 0.75 * intensity})`;
                ctx.lineWidth = 2.0;
                ctx.beginPath();
                ctx.arc(bx, by, br, 0, Math.PI * 2);
                ctx.stroke();
            }
        } else if (pal.hasStratification) {
            // Stratified horizontal petrochemical smog bands
            for (let s = 0; s < 4; s++) {
                const sy = cy - ry * 0.35 + s * (ry * 0.24);
                const sOffset = Math.sin(time * 0.6 * speed + s * 1.4) * (W * 0.08);
                const sGrad = ctx.createLinearGradient(0, sy - 14, 0, sy + 14);
                sGrad.addColorStop(0, 'rgba(115, 100, 72, 0)');
                sGrad.addColorStop(0.5, `rgba(145, 125, 80, ${0.32 * intensity})`);
                sGrad.addColorStop(1, 'rgba(115, 100, 72, 0)');
                ctx.fillStyle = sGrad;
                ctx.fillRect(cx - rx + sOffset, sy - 14, rx * 2, 28);
            }
        } else if (pal.isVent) {
            // Jagged volcanic rock fissure throat with craggy edges
            ctx.fillStyle = '#1e2124';
            ctx.strokeStyle = '#0f1113';
            ctx.lineWidth = 3;
            ctx.beginPath();
            const rockPoints = 8;
            for (let rp = 0; rp < rockPoints; rp++) {
                const ra = (rp / rockPoints) * Math.PI * 2;
                const rdist = (rx * 0.28) * (0.8 + 0.2 * Math.sin(rp * 3));
                const rpx = cx + Math.cos(ra) * rdist;
                const rpy = cy + Math.sin(ra) * (rdist * 0.65);
                if (rp === 0) ctx.moveTo(rpx, rpy);
                else ctx.lineTo(rpx, rpy);
            }
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            // Boiling hydrothermal fissure throat
            const throatGlow = ctx.createRadialGradient(cx, cy, 1, cx, cy, rx * 0.22);
            throatGlow.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
            throatGlow.addColorStop(0.6, 'rgba(186, 230, 253, 0.75)');
            throatGlow.addColorStop(1, 'rgba(14, 165, 233, 0)');
            ctx.fillStyle = throatGlow;
            ctx.beginPath();
            ctx.arc(cx, cy, rx * 0.22, 0, Math.PI * 2);
            ctx.fill();
        } else if (pal.isGrate) {
            // City cast-iron round manhole grate with steam whistling through slots
            ctx.fillStyle = '#1e232a';
            ctx.strokeStyle = '#334155';
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.arc(cx, cy, rx * 0.32, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            // Grate ventilation slots
            ctx.strokeStyle = '#090b0e';
            ctx.lineWidth = 3.5;
            ctx.lineCap = 'round';
            for (let g = -3; g <= 3; g++) {
                const gy = cy + g * 7;
                const halfW = Math.sqrt(Math.max(0, Math.pow(rx * 0.25, 2) - Math.pow(g * 7, 2)));
                if (halfW > 3) {
                    ctx.beginPath();
                    ctx.moveTo(cx - halfW, gy);
                    ctx.lineTo(cx + halfW, gy);
                    ctx.stroke();
                }
            }
        } else if (pal.hasCanister) {
            // Spinning metal CS tear-gas canister on the ground
            const canSpin = time * 4 * speed;
            ctx.save();
            ctx.translate(cx, cy);
            ctx.rotate(canSpin);
            ctx.fillStyle = '#64748b';
            ctx.fillRect(-12, -6, 24, 12);
            ctx.fillStyle = '#eab308'; // Safety yellow chemical band
            ctx.fillRect(-4, -6, 8, 12);
            ctx.strokeStyle = '#334155';
            ctx.lineWidth = 1.5;
            ctx.strokeRect(-12, -6, 24, 12);
            ctx.restore();

            // Expanding powdery white chemical ring on the floor
            ctx.strokeStyle = 'rgba(241, 245, 249, 0.45)';
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.arc(cx, cy, rx * 0.42, 0, Math.PI * 2);
            ctx.stroke();
        }

        // Ambient ground obscuration veil
        ctx.translate(cx, cy);
        ctx.scale(1, ry / Math.max(1, rx));
        const veilGrad = ctx.createRadialGradient(0, 0, rx * 0.08, 0, 0, rx * 1.15);
        veilGrad.addColorStop(0, `rgba(${pal.baseRgb}, ${0.52 * Math.min(1.4, intensity)})`);
        veilGrad.addColorStop(0.55, `rgba(${pal.baseRgb}, ${0.28 * Math.min(1.4, intensity)})`);
        veilGrad.addColorStop(1, `rgba(${pal.baseRgb}, 0)`);
        ctx.fillStyle = veilGrad;
        ctx.beginPath();
        ctx.arc(0, 0, rx * 1.15, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // ====================================================================
        // 2. VOLUMETRIC MULTI-LOBED BILLOWING SMOKE / GAS PUFFS (FRACTAL DRIVEN)
        // ====================================================================
        if (!el.particles) el.particles = [];
        const targetPuffs = Math.max(10, Math.floor(48 * intensity * (el.config.quantity || 1.0)));
        if (el.particles.length > targetPuffs) el.particles.length = targetPuffs;

        while (el.particles.length < targetPuffs) {
            const theta = Math.random() * Math.PI * 2;
            const rFrac = Math.sqrt(Math.random()) * 0.72;
            el.particles.push({
                x: cx + Math.cos(theta) * rx * rFrac,
                y: cy + Math.sin(theta) * ry * rFrac,
                vx: (pal.isVent ? 0 : (8 + Math.random() * 16)) * (W / 240),
                vy: (pal.isVent ? -(20 + Math.random() * 24) : (Math.random() - 0.55) * 14) * (H / 240),
                baseRadius: avgDim * (0.12 + Math.random() * 0.14),
                life: Math.random(),
                decay: 0.16 + Math.random() * 0.16,
                isLight: Math.random() < 0.45,
                seed: Math.random() * 100
            });
        }

        ctx.save();
        for (let i = 0; i < el.particles.length; i++) {
            const p = el.particles[i];
            p.life -= p.decay * dt * speed;

            // Fractal vortex turbulence & curl drift
            const turbFreq = 1.2 + rough * 1.8;
            const turbAmp = (14 + rough * 26) * dt * speed;
            const swirlX = Math.cos(time * turbFreq + p.seed) * turbAmp;
            const swirlY = Math.sin(time * (turbFreq * 1.2) + p.seed) * turbAmp;
            p.x += p.vx * dt * speed + swirlX;
            p.y += p.vy * dt * speed + swirlY;

            if (p.life <= 0) {
                const theta = Math.random() * Math.PI * 2;
                const rFrac = Math.sqrt(Math.random()) * 0.65;
                p.x = cx - rx * 0.12 + Math.cos(theta) * rx * rFrac;
                p.y = cy + Math.sin(theta) * ry * rFrac;
                p.life = 1.0;
            }

            // Smooth bell-curve envelope for natural appearance and fade
            const env = Math.sin(p.life * Math.PI);
            const curR = p.baseRadius * (0.85 + (1 - p.life) * 0.55);
            if (curR <= 1) continue;

            const rgb = p.isLight ? pal.puffLight : pal.puffDark;
            const alpha = env * (p.isLight ? 0.32 : 0.44) * Math.min(1.5, intensity);

            // Primary Core Smoke Puff
            const pGrad = ctx.createRadialGradient(p.x, p.y, curR * 0.08, p.x, p.y, curR);
            pGrad.addColorStop(0, `rgba(${rgb}, ${alpha})`);
            pGrad.addColorStop(0.55, `rgba(${rgb}, ${alpha * 0.60})`);
            pGrad.addColorStop(1, `rgba(${rgb}, 0)`);
            ctx.fillStyle = pGrad;
            ctx.beginPath();
            ctx.arc(p.x, p.y, curR, 0, Math.PI * 2);
            ctx.fill();

            // Multi-Lobed Fractal Billow Satellites (modulates cauliflower volume with fractal roughness slider!)
            if (rough > 0.05) {
                const lobes = 4;
                for (let l = 0; l < lobes; l++) {
                    const lAngle = (l / lobes) * Math.PI * 2 + p.seed + time * (0.6 + l * 0.2);
                    const lDist = curR * (0.32 + 0.28 * rough) * (0.75 + 0.25 * Math.sin(p.seed * 3 + l));
                    const lx = p.x + Math.cos(lAngle) * lDist;
                    const ly = p.y + Math.sin(lAngle) * lDist;
                    const lr = curR * (0.50 + 0.25 * rough) * (0.8 + 0.2 * Math.cos(p.seed * 5 + l));

                    const lGrad = ctx.createRadialGradient(lx, ly, lr * 0.08, lx, ly, lr);
                    lGrad.addColorStop(0, `rgba(${rgb}, ${alpha * 0.75})`);
                    lGrad.addColorStop(0.6, `rgba(${rgb}, ${alpha * 0.35})`);
                    lGrad.addColorStop(1, `rgba(${rgb}, 0)`);
                    ctx.fillStyle = lGrad;
                    ctx.beginPath();
                    ctx.arc(lx, ly, lr, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        }
        ctx.restore();

        // ====================================================================
        // 3. BESPOKE MOTES: FIERY EMBERS, TOXIC SPORES, BUZZING FLIES, CS POWDER
        // ====================================================================
        ctx.save();
        if (pal.moteType === 'fire_ember') {
            // Rising fiery cinders shooting up from hot firebed, tumbling and burning out!
            const emberCount = Math.floor(18 * intensity);
            for (let m = 0; m < emberCount; m++) {
                const mSeed = m * 17.3;
                const mProg = ((time * 0.7 * speed + m * 0.15) % 1.0);
                const mx = cx + (Math.sin(time * 2.5 + mSeed) * 0.35 + (m % 5 - 2) * 0.18) * rx;
                const my = cy + ry * 0.25 - mProg * (ry * 1.35) + Math.cos(time * 3.1 + m) * 8;
                const mAlpha = Math.sin(mProg * Math.PI) * intensity;
                const isHot = mProg < 0.55;

                ctx.fillStyle = isHot ? 'rgba(255, 180, 50, 0.95)' : 'rgba(255, 60, 15, 0.85)';
                ctx.beginPath();
                ctx.arc(mx, my, isHot ? 2.5 : 1.8, 0, Math.PI * 2);
                ctx.fill();

                // Burning core corona
                if (isHot) {
                    ctx.fillStyle = `rgba(255, 230, 140, ${mAlpha * 0.85})`;
                    ctx.beginPath();
                    ctx.arc(mx, my, 1.2, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        } else if (pal.moteType === 'flies') {
            // 25+ Animated buzzing black plague flies darting in erratic 3D patterns!
            const flyCount = Math.floor(26 * intensity);
            for (let f = 0; f < flyCount; f++) {
                const fSeed = f * 13.7;
                const fx = cx + Math.sin(time * 6.5 * speed + fSeed) * (rx * 0.65) + Math.cos(time * 9.2 + f) * 14;
                const fy = cy + Math.cos(time * 5.8 * speed + fSeed * 1.3) * (ry * 0.58) + Math.sin(time * 8.4 + f) * 12;

                // Tiny black fly body
                ctx.fillStyle = '#0f172a';
                ctx.beginPath();
                ctx.ellipse(fx, fy, 2.2, 1.3, time * 12 + f, 0, Math.PI * 2);
                ctx.fill();

                // Vibrating translucent fly wings
                const wingVibe = Math.sin(time * 45 + f) * 2.2;
                ctx.strokeStyle = 'rgba(226, 232, 240, 0.75)';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(fx, fy);
                ctx.lineTo(fx - 2, fy - 3 + wingVibe);
                ctx.moveTo(fx, fy);
                ctx.lineTo(fx + 2, fy - 3 - wingVibe);
                ctx.stroke();
            }
        } else if (pal.moteType === 'biolum_spores') {
            // Bioluminescent neon cyan and electric violet floating spores
            const sporeCount = Math.floor(22 * intensity);
            for (let s = 0; s < sporeCount; s++) {
                const sAngle = (s / sporeCount) * Math.PI * 2 + time * 0.35 * speed;
                const sDist = (((s * 23) % 10) / 10) * 0.82;
                const sx = cx + Math.cos(sAngle + Math.sin(time * 1.5 + s) * 0.4) * rx * sDist;
                const sy = cy + Math.sin(sAngle * 1.1 + Math.cos(time * 1.2 + s) * 0.4) * ry * sDist;
                const sPulse = Math.sin(time * 4.2 + s * 2.1) * 0.5 + 0.5;

                ctx.fillStyle = s % 2 === 0 ? `rgba(34, 211, 238, ${0.45 + sPulse * 0.55})` : `rgba(217, 70, 239, ${0.45 + sPulse * 0.55})`;
                ctx.beginPath();
                ctx.arc(sx, sy, 2.0 + sPulse * 1.4, 0, Math.PI * 2);
                ctx.fill();
            }
        } else if (pal.moteRgb) {
            // Generic droplets, CS powder, or volcanic ash flecks
            const moteCount = Math.floor(16 * intensity);
            for (let m = 0; m < moteCount; m++) {
                const mAngle = (m / moteCount) * Math.PI * 2 + time * 0.45 * speed;
                const mDist = (((m * 19) % 10) / 10) * 0.78;
                const mx = cx + Math.cos(mAngle + Math.sin(time + m) * 0.3) * rx * mDist;
                const my = cy + Math.sin(mAngle * 1.2 + Math.cos(time * 0.8 + m) * 0.3) * ry * mDist;
                const mAlpha = 0.30 + 0.35 * Math.sin(time * 3.5 + m * 2.1);
                ctx.fillStyle = `rgba(${pal.moteRgb}, ${mAlpha})`;
                ctx.beginPath();
                ctx.arc(mx, my, 1.8 + (m % 2), 0, Math.PI * 2);
                ctx.fill();
            }
        }
        ctx.restore();
    }

    // ========================================================================
    // 2C-1. REALISTIC DANCING WOODLAND FIREFLIES ('fireflies')
    // ========================================================================
    drawRealisticFireflies(el, ctx, W, H, dt) {
        const time = el.stateTime;
        const cfg = el.config || {};
        const intensity = cfg.intensity || 1.0;
        const speed = cfg.speed || 1.0;
        const variant = cfg.variant || 'uni_fireflies';
        const isFey = variant === 'fey_spores';

        const baseCount = cfg.quantity !== undefined ? Math.round(36 * cfg.quantity) : 36;
        const count = Math.max(12, Math.min(60, baseCount));

        if (!el.particles || el.particles.length !== count) {
            el.particles = [];
            for (let i = 0; i < count; i++) {
                el.particles.push({
                    x: Math.random() * W,
                    y: Math.random() * H,
                    vx: (Math.random() - 0.5) * 22,
                    vy: (Math.random() - 0.5) * 18,
                    flashFreq: 1.8 + Math.random() * 2.4,
                    flashPhase: Math.random() * Math.PI * 2,
                    colorIdx: Math.floor(Math.random() * 3)
                });
            }
        }

        ctx.save();
        for (let i = 0; i < el.particles.length; i++) {
            const p = el.particles[i];

            // Gentle wandering Brownian drift
            p.vx += Math.sin(time * 1.7 + i * 2.1) * 14 * dt * speed;
            p.vy += Math.cos(time * 1.5 + i * 1.8) * 12 * dt * speed;

            // Speed clamp
            const spd = Math.hypot(p.vx, p.vy);
            if (spd > 32 * speed) {
                p.vx = (p.vx / spd) * 32 * speed;
                p.vy = (p.vy / spd) * 32 * speed;
            }

            p.x += p.vx * dt;
            p.y += p.vy * dt;

            // Screen wrap
            if (p.x < 0) p.x = W;
            if (p.x > W) p.x = 0;
            if (p.y < 0) p.y = H;
            if (p.y > H) p.y = 0;

            // Asynchronous natural flash cycle
            const flash = Math.sin(time * p.flashFreq * speed + p.flashPhase);
            if (flash <= 0.1) continue; // firefly lamp is off

            const flashAlpha = Math.pow(flash, 2) * intensity;
            const glowR = 8 + flash * 12;

            let coreRgb = '250, 255, 180';
            let haloRgb = '190, 242, 100';
            if (isFey) {
                if (p.colorIdx === 0) { coreRgb = '220, 255, 255'; haloRgb = '56, 189, 248'; }
                else if (p.colorIdx === 1) { coreRgb = '255, 230, 255'; haloRgb = '217, 70, 239'; }
                else { coreRgb = '255, 250, 190'; haloRgb = '250, 204, 21'; }
            }

            // Soft radiant bioluminescent glow
            const g = ctx.createRadialGradient(p.x, p.y, 1, p.x, p.y, glowR);
            g.addColorStop(0, `rgba(${coreRgb}, ${flashAlpha})`);
            g.addColorStop(0.35, `rgba(${haloRgb}, ${flashAlpha * 0.65})`);
            g.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2);
            ctx.fill();

            // Tiny insect body
            ctx.fillStyle = '#1e293b';
            ctx.beginPath();
            ctx.arc(p.x, p.y, 1.4, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
    }

    // ========================================================================
    // 2C-2. REALISTIC HOODED BRASS OIL LANTERN ('lantern')
    // ========================================================================
    drawRealisticLantern(el, ctx, W, H, dt) {
        const cx = W / 2;
        const cy = H / 2;
        const time = el.stateTime;
        const intensity = el.config.intensity || 1.0;
        const speed = el.config.speed || 1.0;
        const flicker = (Math.sin(time * 6.5 * speed) * 0.05 + Math.cos(time * 11.2 * speed) * 0.03) * intensity;
        const r = (Math.min(W, H) * 0.48) * (1 + flicker);

        ctx.save();
        // 1. Warm 360° Omnidirectional Radiant Oil Lamp Glow
        const grad = ctx.createRadialGradient(cx, cy, 3, cx, cy, r);
        grad.addColorStop(0, `rgba(255, 230, 140, ${0.72 * intensity})`);
        grad.addColorStop(0.35, `rgba(245, 158, 11, ${0.32 * intensity})`);
        grad.addColorStop(0.75, `rgba(180, 83, 9, ${0.09 * intensity})`);
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();

        // 2. Hanging brass top ring
        ctx.strokeStyle = '#b45309';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.arc(cx, cy - 14, 6, 0, Math.PI * 2);
        ctx.stroke();

        // 3. Domed brass hood & octagonal frame
        ctx.fillStyle = '#78350f';
        ctx.beginPath();
        ctx.arc(cx, cy - 6, 12, Math.PI, 0);
        ctx.fill();

        // Glass housing & brass struts
        ctx.fillStyle = 'rgba(254, 243, 199, 0.45)';
        ctx.fillRect(cx - 10, cy - 6, 20, 16);

        ctx.strokeStyle = '#92400e';
        ctx.lineWidth = 2;
        ctx.strokeRect(cx - 10, cy - 6, 20, 16);
        ctx.beginPath();
        ctx.moveTo(cx, cy - 6);
        ctx.lineTo(cx, cy + 10);
        ctx.stroke();

        // Brass base
        ctx.fillStyle = '#78350f';
        ctx.fillRect(cx - 12, cy + 10, 24, 5);

        // 4. Glowing burning flame wick inside glass
        ctx.globalCompositeOperation = 'lighter';
        const flameGrad = ctx.createRadialGradient(cx, cy + 2, 0, cx, cy + 2, 7);
        flameGrad.addColorStop(0, 'rgba(255, 255, 255, 0.98)');
        flameGrad.addColorStop(0.5, 'rgba(251, 191, 36, 0.85)');
        flameGrad.addColorStop(1, 'rgba(245, 158, 11, 0)');
        ctx.fillStyle = flameGrad;
        ctx.beginPath();
        ctx.arc(cx, cy + 2, 7, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    }

    // ========================================================================
    // 2D. BUBBLING MUD / STICKY TAR PIT / QUICKSAND / WEBS ('mud')
    // ========================================================================
    getMudPalette(variant = 'uni_mudbog') {
        if (variant === 'tar_pit' || variant === 'uni_tarpit' || variant === 'oth_tarpit') {
            return {
                outerBog: '22, 20, 22',
                midBog: '12, 11, 14',
                innerCore: '6, 5, 8',
                bubbleRim: '38, 36, 42',
                specular: '200, 215, 235',
                specAlpha: 0.48
            };
        } else if (variant === 'quicksand' || variant === 'uni_quicksand') {
            return {
                outerBog: '165, 130, 82',
                midBog: '140, 105, 62',
                innerCore: '112, 80, 44',
                bubbleRim: '95, 66, 35',
                specular: '245, 225, 185',
                specAlpha: 0.32
            };
        } else if (variant === 'acid_sludge' || variant === 'sci_toxicwaste') {
            return {
                outerBog: '45, 95, 28',
                midBog: '32, 72, 18',
                innerCore: '22, 52, 10',
                bubbleRim: '95, 195, 40',
                specular: '210, 255, 130',
                specAlpha: 0.55
            };
        } else if (variant === 'sticky_webs' || variant === 'uni_cobwebs' || variant === 'hist_webs') {
            return {
                outerBog: '65, 68, 62',
                midBog: '48, 52, 46',
                innerCore: '35, 38, 34',
                bubbleRim: '185, 195, 180',
                specular: '240, 248, 240',
                specAlpha: 0.50
            };
        } else if (variant === 'mod_oil') {
            return {
                outerBog: '18, 16, 20',
                midBog: '10, 9, 12',
                innerCore: '5, 4, 6',
                bubbleRim: '60, 50, 75',
                specular: '236, 72, 153',
                specAlpha: 0.65
            };
        }
        // Default 'uni_mudbog' / 'hist_mud' / 'mud_bog' (Thick Brown Swampy Mud & Sucking Mire)
        return {
            outerBog: '76, 52, 34',
            midBog: '56, 38, 24',
            innerCore: '40, 26, 16',
            bubbleRim: '30, 18, 10',
            specular: '195, 170, 145',
            specAlpha: 0.38
        };
    }

    traceOrganicBogPath(ctx, cx, cy, rx, ry, scale = 1.0, time = 0, rough = 0.75) {
        const lobes = rough > 0.04 ? 24 : 16;
        const pts = [];
        for (let i = 0; i < lobes; i++) {
            const a = (i / lobes) * Math.PI * 2;
            const fbm = Math.sin(i * 3.0 + 1.2) * 0.48
                + Math.cos(i * 5.0 - 0.7) * 0.28
                + Math.sin(i * 9.0 + 2.1) * 0.16
                + (1.0 - 2.0 * Math.abs(Math.sin(i * 13.0 + 0.4))) * 0.08;
            const organicWobble = Math.max(0.35, 1.0 + (0.10 + rough * 0.32) * fbm + 0.015 * Math.sin(time * 1.4 + i * 2.0));
            pts.push({
                x: cx + Math.cos(a) * rx * scale * organicWobble,
                y: cy + Math.sin(a) * ry * scale * organicWobble
            });
        }

        ctx.beginPath();
        const firstMidX = (pts[lobes - 1].x + pts[0].x) / 2;
        const firstMidY = (pts[lobes - 1].y + pts[0].y) / 2;
        ctx.moveTo(firstMidX, firstMidY);
        for (let i = 0; i < lobes; i++) {
            const curr = pts[i];
            const next = pts[(i + 1) % lobes];
            ctx.quadraticCurveTo(curr.x, curr.y, (curr.x + next.x) / 2, (curr.y + next.y) / 2);
        }
        ctx.closePath();
    }

    drawRealisticMud(el, ctx, W, H, dt) {
        const cx = W / 2;
        const cy = H / 2;
        const rx = W * 0.42;
        const ry = H * 0.40;
        const time = el.stateTime;
        const intensity = el.config.intensity || 1.0;
        const variant = el.config.variant || 'mud_bog';
        const pal = this.getMudPalette(variant);
        const avgDim = Math.sqrt(W * H);
        const rough = ctx._fractalRough !== undefined ? ctx._fractalRough : (el.config.fractalRoughness !== undefined ? parseFloat(el.config.fractalRoughness) : 0.75);

        // 1. Multi-Pass Organic Feathered Bog / Tar / Mire Footprint
        ctx.save();
        this.traceOrganicBogPath(ctx, cx, cy, rx, ry, 1.02, time, rough);
        ctx.fillStyle = `rgba(${pal.outerBog}, 0.42)`;
        ctx.fill();

        this.traceOrganicBogPath(ctx, cx, cy, rx, ry, 0.90, time, rough);
        ctx.fillStyle = `rgba(${pal.midBog}, 0.68)`;
        ctx.fill();

        this.traceOrganicBogPath(ctx, cx, cy, rx, ry, 0.74, time, rough);
        ctx.fillStyle = `rgba(${pal.innerCore}, 0.76)`;
        ctx.fill();

        // Clip inside the mire for surface viscosity rings, webs, and bubbles
        this.traceOrganicBogPath(ctx, cx, cy, rx, ry, 0.94, time, rough);
        ctx.clip();

        // 2. Slow-Churning Viscosity Contours (or Quicksand Spiral / Sticky Webs)
        if (variant === 'sticky_webs') {
            // Sticky Glistening Web Strands & Mucus Filaments
            ctx.strokeStyle = `rgba(${pal.specular}, 0.36)`;
            ctx.lineWidth = 1.3;
            ctx.beginPath();
            const spokes = 14;
            for (let s = 0; s < spokes; s++) {
                const a = (s / spokes) * Math.PI * 2;
                const sag = Math.sin(time * 1.8 + s) * 4;
                ctx.moveTo(cx, cy);
                ctx.quadraticCurveTo(
                    cx + Math.cos(a + 0.15) * rx * 0.5 + sag,
                    cy + Math.sin(a + 0.15) * ry * 0.5 + sag,
                    cx + Math.cos(a) * rx * 0.95,
                    cy + Math.sin(a) * ry * 0.95
                );
            }
            for (let ring = 1; ring <= 4; ring++) {
                const rf = ring * 0.22;
                for (let s = 0; s < spokes; s++) {
                    const a1 = (s / spokes) * Math.PI * 2;
                    const a2 = ((s + 1) / spokes) * Math.PI * 2;
                    const x1 = cx + Math.cos(a1) * rx * rf;
                    const y1 = cy + Math.sin(a1) * ry * rf;
                    const x2 = cx + Math.cos(a2) * rx * rf;
                    const y2 = cy + Math.sin(a2) * ry * rf;
                    const mx = (x1 + x2) * 0.5 - (x2 - cx) * 0.08;
                    const my = (y1 + y2) * 0.5 - (y2 - cy) * 0.08;
                    ctx.moveTo(x1, y1);
                    ctx.quadraticCurveTo(mx, my, x2, y2);
                }
            }
            ctx.stroke();
        } else {
            // Viscous Mud / Tar / Quicksand Slow Churning Ripples
            ctx.strokeStyle = `rgba(${pal.specular}, ${pal.specAlpha * 0.35})`;
            ctx.lineWidth = 1.8;
            ctx.beginPath();
            for (let r = 0; r < 4; r++) {
                const phase = ((time * 0.22 + r * 0.25) % 1);
                const scale = variant === 'quicksand' ? (1.0 - phase * 0.85) : (0.2 + phase * 0.72);
                ctx.ellipse(
                    cx + Math.sin(time * 0.7 + r) * 4,
                    cy + Math.cos(time * 0.6 + r) * 4,
                    rx * scale * 0.75,
                    ry * scale * 0.75,
                    time * 0.15 + r,
                    0,
                    Math.PI * 1.35
                );
            }
            ctx.stroke();
        }

        // 3. Realistic Rising, Swelling & Popping Mud/Tar/Acid Bubbles
        if (!el.particles) el.particles = [];
        const targetBubbles = Math.max(4, Math.floor(14 * intensity * (el.config.quantity || 1.0)));
        if (el.particles.length > targetBubbles) el.particles.length = targetBubbles;

        while (el.particles.length < targetBubbles) {
            const theta = Math.random() * Math.PI * 2;
            const rFrac = Math.sqrt(Math.random()) * 0.70;
            el.particles.push({
                x: cx + Math.cos(theta) * rx * rFrac,
                y: cy + Math.sin(theta) * ry * rFrac,
                maxR: Math.max(4, avgDim * (0.025 + Math.random() * 0.038)),
                phase: Math.random(), // 0..0.75 swelling dome, 0.75..1.0 popping viscous ring
                speed: 0.28 + Math.random() * 0.32
            });
        }

        for (let i = 0; i < el.particles.length; i++) {
            const b = el.particles[i];
            b.phase += b.speed * dt;

            if (b.phase >= 1.0) {
                const theta = Math.random() * Math.PI * 2;
                const rFrac = Math.sqrt(Math.random()) * 0.70;
                b.x = cx + Math.cos(theta) * rx * rFrac;
                b.y = cy + Math.sin(theta) * ry * rFrac;
                b.maxR = Math.max(4, avgDim * (0.025 + Math.random() * 0.038));
                b.phase = 0;
            }

            if (b.phase < 0.75) {
                // Swelling glossy bubble dome
                const t = b.phase / 0.75;
                const r = b.maxR * Math.sin(t * Math.PI * 0.5);
                if (r < 1) continue;

                // Dark viscous base rim
                ctx.fillStyle = `rgba(${pal.innerCore}, 0.85)`;
                ctx.strokeStyle = `rgba(${pal.bubbleRim}, 0.9)`;
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.arc(b.x, b.y, r, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();

                // Glossy wet specular crescent on upper-left of dome
                ctx.strokeStyle = `rgba(${pal.specular}, ${pal.specAlpha * (0.5 + t * 0.5)})`;
                ctx.lineWidth = Math.max(1.2, r * 0.22);
                ctx.lineCap = 'round';
                ctx.beginPath();
                ctx.arc(b.x, b.y, r * 0.65, Math.PI * 1.1, Math.PI * 1.65);
                ctx.stroke();
            } else {
                // Popped bubble: expanding viscous sink ring
                const popT = (b.phase - 0.75) / 0.25;
                const ringR = b.maxR * (1.0 + popT * 0.65);
                const alpha = (1.0 - popT) * 0.65;

                ctx.strokeStyle = `rgba(${pal.bubbleRim}, ${alpha})`;
                ctx.lineWidth = 2.0 * (1.0 - popT * 0.5);
                ctx.beginPath();
                ctx.arc(b.x, b.y, ringR, 0, Math.PI * 2);
                ctx.stroke();

                ctx.strokeStyle = `rgba(${pal.specular}, ${alpha * 0.6})`;
                ctx.lineWidth = 1.0;
                ctx.beginPath();
                ctx.arc(b.x, b.y, ringR * 0.82, 0, Math.PI * 2);
                ctx.stroke();
            }
        }

        ctx.restore();
    }

    // ========================================================================
    // 2E. CRACKLING LIGHTNING / ARCANE GROUND HAZARD ('sparks')
    // ========================================================================
    getSparksPalette(variant = 'storm_lightning') {
        if (variant === 'arcane_surge') {
            return { core: '250, 230, 255', glow: '185, 65, 255', deep: '95, 20, 160' };
        } else if (variant === 'necrotic_rift') {
            return { core: '255, 220, 225', glow: '235, 35, 60', deep: '90, 10, 20' };
        } else if (variant === 'golden_holy') {
            return { core: '255, 252, 225', glow: '255, 195, 45', deep: '155, 95, 10' };
        }
        // Default 'storm_lightning'
        return { core: '235, 252, 255', glow: '40, 210, 255', deep: '10, 85, 155' };
    }

    drawLightningBolt(ctx, x1, y1, x2, y2, jitter = 18, segments = 7) {
        ctx.moveTo(x1, y1);
        for (let i = 1; i < segments; i++) {
            const t = i / segments;
            const bx = x1 + (x2 - x1) * t + (Math.random() - 0.5) * jitter;
            const by = y1 + (y2 - y1) * t + (Math.random() - 0.5) * jitter;
            ctx.lineTo(bx, by);
        }
        ctx.lineTo(x2, y2);
    }

    drawRealisticSparks(el, ctx, W, H, dt) {
        const cx = W / 2;
        const cy = H / 2;
        const rx = W * 0.38;
        const ry = H * 0.36;
        const time = el.stateTime;
        const intensity = el.config.intensity || 1.0;
        const pal = this.getSparksPalette(el.config.variant || 'storm_lightning');
        const avgDim = Math.sqrt(W * H);

        // 1. Ionized Ground Aura
        ctx.save();
        ctx.translate(cx, cy);
        ctx.scale(1, ry / Math.max(1, rx));
        const aura = ctx.createRadialGradient(0, 0, rx * 0.05, 0, 0, rx * 1.1);
        aura.addColorStop(0, `rgba(${pal.glow}, ${0.28 * intensity})`);
        aura.addColorStop(0.55, `rgba(${pal.deep}, ${0.14 * intensity})`);
        aura.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = aura;
        ctx.beginPath();
        ctx.arc(0, 0, rx * 1.1, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // 2. Branching High-Voltage Arcs (Additive Blending)
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        const boltCount = Math.max(1, Math.floor(4 * intensity * (el.config.quantity || 1.0)));
        const jitter = avgDim * 0.08;

        // Outer plasma halo
        ctx.strokeStyle = `rgba(${pal.glow}, 0.55)`;
        ctx.lineWidth = Math.max(3, avgDim * 0.022);
        ctx.beginPath();
        for (let b = 0; b < boltCount; b++) {
            const a1 = time * 1.7 + b * (Math.PI * 2 / boltCount);
            const a2 = a1 + Math.PI * (0.65 + 0.3 * Math.sin(time * 3 + b));
            const x1 = cx + Math.cos(a1) * rx * (0.15 + (b % 2) * 0.25);
            const y1 = cy + Math.sin(a1) * ry * (0.15 + (b % 2) * 0.25);
            const x2 = cx + Math.cos(a2) * rx * 0.88;
            const y2 = cy + Math.sin(a2) * ry * 0.88;
            this.drawLightningBolt(ctx, x1, y1, x2, y2, jitter, 6);
        }
        ctx.stroke();

        // White-hot core arc
        ctx.strokeStyle = `rgba(${pal.core}, 0.95)`;
        ctx.lineWidth = Math.max(1.2, avgDim * 0.008);
        ctx.beginPath();
        for (let b = 0; b < boltCount; b++) {
            const a1 = time * 1.7 + b * (Math.PI * 2 / boltCount);
            const a2 = a1 + Math.PI * (0.65 + 0.3 * Math.sin(time * 3 + b));
            const x1 = cx + Math.cos(a1) * rx * (0.15 + (b % 2) * 0.25);
            const y1 = cy + Math.sin(a1) * ry * (0.15 + (b % 2) * 0.25);
            const x2 = cx + Math.cos(a2) * rx * 0.88;
            const y2 = cy + Math.sin(a2) * ry * 0.88;
            this.drawLightningBolt(ctx, x1, y1, x2, y2, jitter * 0.7, 6);
        }
        ctx.stroke();

        ctx.restore();
    }

    // ========================================================================
    // 3. DEFORMABLE FLOWING WATER (Curved Spline River & Custom Polygon Pool)
    // ========================================================================
    drawDeformableWater(el, ctx, dt) {
        const nodes = el.config.nodes || [];
        if (nodes.length < 2) return;

        const rough = el.config.fractalRoughness !== undefined ? parseFloat(el.config.fractalRoughness) : 0.75;
        ctx._fractalRough = rough;
        if (el.ctx) el.ctx._fractalRough = rough;

        ctx.save();
        // Translate so (0,0) in ctx matches (el.x, el.y)
        ctx.translate(-el.bbox.minX, -el.bbox.minY);

        if (el.config.shapeMode === 'polygon') {
            this.drawPolygonWater(el, ctx, nodes);
        } else {
            this.drawSplineRiverWater(el, ctx, nodes);
        }

        ctx.restore();
    }

    /**
     * Evaluates a Catmull-Rom spline across control nodes [{dx, dy, w}, ...]
     */
    sampleRiverSpline(nodes, numSamples = 64) {
        const samples = [];
        const n = nodes.length;
        if (n < 2) return samples;

        const catmull = (p0, p1, p2, p3, t) => {
            const t2 = t * t;
            const t3 = t2 * t;
            return 0.5 * (
                (2 * p1) +
                (-p0 + p2) * t +
                (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 +
                (-p0 + 3 * p1 - 3 * p2 + p3) * t3
            );
        };

        for (let s = 0; s <= numSamples; s++) {
            const u = s / numSamples;
            const segFloat = u * (n - 1);
            const idx = Math.min(n - 2, Math.floor(segFloat));
            const localT = segFloat - idx;

            const n0 = nodes[Math.max(0, idx - 1)];
            const n1 = nodes[idx];
            const n2 = nodes[idx + 1];
            const n3 = nodes[Math.min(n - 1, idx + 2)];

            const x = catmull(n0.dx, n1.dx, n2.dx, n3.dx, localT);
            const y = catmull(n0.dy, n1.dy, n2.dy, n3.dy, localT);
            const w = catmull(n0.w || 100, n1.w || 100, n2.w || 100, n3.w || 100, localT);

            samples.push({ x, y, w: Math.max(16, w), u });
        }

        // Compute tangent & normal at each sample
        for (let i = 0; i < samples.length; i++) {
            const prev = samples[Math.max(0, i - 1)];
            const next = samples[Math.min(samples.length - 1, i + 1)];
            let tx = next.x - prev.x;
            let ty = next.y - prev.y;
            const len = Math.hypot(tx, ty) || 1;
            tx /= len;
            ty /= len;
            samples[i].tx = tx;
            samples[i].ty = ty;
            samples[i].nx = -ty;
            samples[i].ny = tx;
        }

        return samples;
    }

    traceSplineRibbonPath(ctx, samples, widthMultiplier = 1.0) {
        if (samples.length < 2) return;
        const rough = ctx._fractalRough !== undefined ? ctx._fractalRough : 0;
        ctx.beginPath();

        // Left bank forward (0 -> N) with pronounced multi-octave fractal bank crags
        for (let i = 0; i < samples.length; i++) {
            const s = samples[i];
            const fbm = Math.sin(i * 0.95 + 1.3) * 0.45
                + Math.cos(i * 2.2 - 0.6) * 0.28
                + Math.sin(i * 4.4 + 2.1) * 0.17
                + (1.0 - 2.0 * Math.abs(Math.sin(i * 7.1 + 0.4))) * 0.10;
            const bankMod = rough > 0.02
                ? Math.max(0.35, 1.0 + rough * 0.48 * fbm)
                : 1.0;
            const hw = (s.w * widthMultiplier * bankMod) / 2;
            const lx = s.x - s.nx * hw;
            const ly = s.y - s.ny * hw;
            if (i === 0) ctx.moveTo(lx, ly);
            else ctx.lineTo(lx, ly);
        }

        // Rounded downstream end cap
        const last = samples[samples.length - 1];
        const lastHW = (last.w * widthMultiplier) / 2;
        const endAngle = Math.atan2(last.ny, last.nx);
        ctx.arc(last.x, last.y, lastHW, endAngle + Math.PI, endAngle, true);

        // Right bank backward (N -> 0) with non-symmetrical multi-octave fractal bank crags
        for (let i = samples.length - 1; i >= 0; i--) {
            const s = samples[i];
            const fbm = Math.cos(i * 0.88 + 2.5) * 0.45
                + Math.sin(i * 2.4 + 1.1) * 0.28
                + Math.cos(i * 4.7 - 1.8) * 0.17
                + (1.0 - 2.0 * Math.abs(Math.cos(i * 7.4 - 0.9))) * 0.10;
            const bankMod = rough > 0.02
                ? Math.max(0.35, 1.0 + rough * 0.48 * fbm)
                : 1.0;
            const hw = (s.w * widthMultiplier * bankMod) / 2;
            const rx = s.x + s.nx * hw;
            const ry = s.y + s.ny * hw;
            ctx.lineTo(rx, ry);
        }

        // Rounded upstream start cap
        const first = samples[0];
        const firstHW = (first.w * widthMultiplier) / 2;
        const startAngle = Math.atan2(first.ny, first.nx);
        ctx.arc(first.x, first.y, firstHW, startAngle, startAngle + Math.PI, true);

        ctx.closePath();
    }

    getWaterPalette(style) {
        let waterRgb = '18, 68, 102';
        let deepRgb = '10, 44, 72';
        let causticRgb = '195, 240, 255';
        let foamRgb = '240, 252, 255';

        if (style === 'ocean') {
            waterRgb = '12, 52, 115';
            deepRgb = '6, 28, 70';
            causticRgb = '170, 225, 255';
        } else if (style === 'pond_lily') {
            waterRgb = '16, 92, 112';
            deepRgb = '8, 54, 72';
            causticRgb = '185, 248, 240';
            foamRgb = '230, 255, 250';
        } else if (style === 'cavern_pool') {
            waterRgb = '12, 48, 92';
            deepRgb = '6, 20, 52';
            causticRgb = '80, 245, 255';
            foamRgb = '180, 255, 255';
        } else if (style === 'blood_pool' || style === 'blood_river') {
            waterRgb = '135, 12, 24';
            deepRgb = '68, 4, 12';
            causticRgb = '255, 85, 105';
            foamRgb = '255, 165, 175';
        } else if (style === 'swamp' || style === 'moat_stakes') {
            waterRgb = '42, 68, 34';
            deepRgb = '24, 42, 18';
            causticRgb = '175, 210, 145';
            foamRgb = '190, 215, 165';
        } else if (style === 'concrete_canal') {
            waterRgb = '38, 64, 76';
            deepRgb = '22, 38, 46';
            causticRgb = '165, 205, 220';
            foamRgb = '215, 235, 240';
        } else if (style === 'lava') {
            waterRgb = '185, 42, 0';
            deepRgb = '235, 95, 0';
            causticRgb = '255, 215, 50';
            foamRgb = '255, 245, 170';
        } else if (style === 'acid') {
            waterRgb = '45, 135, 25';
            deepRgb = '25, 88, 12';
            causticRgb = '190, 255, 95';
            foamRgb = '225, 255, 165';
        }
        return { waterRgb, deepRgb, causticRgb, foamRgb };
    }

    drawSplineRiverWater(el, ctx, nodes) {
        const samples = this.sampleRiverSpline(nodes, 64);
        if (samples.length < 2) return;

        const time = el.stateTime;
        const style = el.config.variant || el.config.waterStyle || 'stream';
        const opacity = el.config.opacity !== undefined ? el.config.opacity : 0.72;
        const intensity = el.config.intensity !== undefined ? el.config.intensity : (el.config.caustics || 1.0);
        const qty = el.config.quantity !== undefined ? el.config.quantity : 1.0;

        if (window.VTT_FX_DISPATCHER && window.VTT_FX_DISPATCHER.renderSpline(el, ctx, samples, time, opacity, intensity, qty)) return;

        // Dedicated procedural renderers for unique waterway physics & fluid dynamics
        switch (style) {
            case 'blood_river':
                this.drawSplineBloodRiver(el, ctx, samples, time, opacity, intensity, qty);
                break;
            case 'lava':
                this.drawSplineLavaRiver(el, ctx, samples, time, opacity, intensity, qty);
                break;
            case 'ocean':
                this.drawSplineRapidsRiver(el, ctx, samples, time, opacity, intensity, qty);
                break;
            case 'swamp':
                this.drawSplineSwampRiver(el, ctx, samples, time, opacity, intensity, qty);
                break;
            case 'concrete_canal':
                this.drawSplineCanalRiver(el, ctx, samples, time, opacity, intensity, qty);
                break;
            case 'acid':
                this.drawSplineCoolantConduit(el, ctx, samples, time, opacity, intensity, qty);
                break;
            case 'moat_stakes':
                this.drawSplineMoatRiver(el, ctx, samples, time, opacity, intensity, qty);
                break;
            default:
                this.drawSplineAlpineStream(el, ctx, samples, time, opacity, intensity, qty);
                break;
        }

        // Selection Guide & Skeleton Overlay
        if (el.id === this.selectedElementId && !this.isLocked) {
            ctx.save();
            this.traceSplineRibbonPath(ctx, samples, 1.0);
            ctx.strokeStyle = 'rgba(0, 255, 200, 0.55)';
            ctx.lineWidth = 1.5;
            ctx.setLineDash([6, 5]);
            ctx.stroke();

            // Centerline spline & width struts
            ctx.strokeStyle = 'rgba(0, 255, 200, 0.35)';
            ctx.beginPath();
            samples.forEach((s, idx) => {
                if (idx === 0) ctx.moveTo(s.x, s.y);
                else ctx.lineTo(s.x, s.y);
            });
            ctx.stroke();

            // Width handle connector lines
            ctx.setLineDash([2, 3]);
            const normals = this.computeNodeNormals(nodes, false);
            ctx.beginPath();
            nodes.forEach((node, idx) => {
                const norm = normals[idx];
                const hw = (node.w || 100) / 2;
                ctx.moveTo(node.dx, node.dy);
                ctx.lineTo(node.dx + norm.nx * hw, node.dy + norm.ny * hw);
            });
            ctx.stroke();
            ctx.restore();
        }
    }

    // ------------------------------------------------------------------------
    // BESPOKE WATERWAY RENDERERS
    // ------------------------------------------------------------------------

    drawSplineBloodRiver(el, ctx, samples, time, opacity, intensity, qty) {
        const totalSamples = samples.length;

        // 1. Dried, clotted, congealed outer banks (liver-maroon to black gore)
        this.traceSplineRibbonPath(ctx, samples, 1.08);
        ctx.fillStyle = `rgba(38, 4, 8, ${opacity * 0.95})`;
        ctx.fill();

        this.traceSplineRibbonPath(ctx, samples, 0.98);
        ctx.fillStyle = `rgba(74, 8, 14, ${opacity * 0.92})`;
        ctx.fill();

        // 2. Viscous arterial blood core flow
        this.traceSplineRibbonPath(ctx, samples, 0.82);
        ctx.fillStyle = `rgba(132, 10, 20, ${opacity * 0.95})`;
        ctx.fill();

        this.traceSplineRibbonPath(ctx, samples, 0.58);
        ctx.fillStyle = `rgba(178, 16, 28, ${opacity * 0.98})`;
        ctx.fill();

        // 3. Branching capillary tendrils reaching out from the banks onto the terrain
        ctx.save();
        ctx.strokeStyle = `rgba(140, 12, 22, ${opacity * 0.75})`;
        ctx.lineWidth = 1.4;
        ctx.lineCap = 'round';
        for (let i = 4; i < totalSamples - 4; i += 6) {
            const s = samples[i];
            const side = (i % 2 === 0 ? 1 : -1);
            const hw = (s.w * 0.52);
            const bx = s.x + s.nx * hw * side;
            const by = s.y + s.ny * hw * side;
            const branchLen = 14 + (i % 5) * 5;
            const bAng = Math.atan2(s.ny * side, s.nx * side) + Math.sin(i * 1.7) * 0.45;
            const midX = bx + Math.cos(bAng) * (branchLen * 0.55);
            const midY = by + Math.sin(bAng) * (branchLen * 0.55);
            const endX = bx + Math.cos(bAng + 0.3) * branchLen;
            const endY = by + Math.sin(bAng + 0.3) * branchLen;
            ctx.beginPath();
            ctx.moveTo(bx, by);
            ctx.quadraticCurveTo(midX, midY, endX, endY);
            ctx.stroke();
        }
        ctx.restore();

        // 4. Clip to River Channel for Internal Dynamics (Clots, Floating Skulls, Froth)
        ctx.save();
        this.traceSplineRibbonPath(ctx, samples, 0.95);
        ctx.clip();

        // A. Viscous dark coagulated blood clots and scabs tumbling downstream
        const clotCount = Math.max(12, Math.round(26 * qty));
        for (let c = 0; c < clotCount; c++) {
            const speed = 7 + (c % 5) * 2.8;
            const k = Math.floor((time * speed + c * 11.7) % (totalSamples - 2));
            const s = samples[k];
            if (!s) continue;
            const vOff = Math.sin(c * 2.3 + time * 0.4) * 0.32 * s.w;
            const cx = s.x + s.nx * vOff;
            const cy = s.y + s.ny * vOff;
            const cr = 4 + (c % 4) * 2.2;
            const clotAng = time * (1.5 + (c % 3)) + c;

            // Clot body
            ctx.fillStyle = 'rgba(28, 4, 8, 0.95)';
            ctx.strokeStyle = 'rgba(88, 12, 18, 0.85)';
            ctx.lineWidth = 1.0;
            ctx.beginPath();
            ctx.ellipse(cx, cy, cr * 1.3, cr * 0.8, clotAng, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            // Wet glistening specular highlight
            ctx.fillStyle = 'rgba(255, 180, 190, 0.70)';
            ctx.beginPath();
            ctx.arc(cx - cr * 0.3, cy - cr * 0.3, cr * 0.3, 0, Math.PI * 2);
            ctx.fill();
        }

        // B. Bobbing Bleached Human Skulls & Rib Bones Floating Downstream
        const skullCount = Math.max(2, Math.round(5 * qty));
        for (let sk = 0; sk < skullCount; sk++) {
            const speed = 5.5 + (sk % 3) * 1.8;
            const k = Math.floor((time * speed + sk * 19.3) % (totalSamples - 3));
            const s = samples[k];
            if (!s) continue;
            const bob = Math.sin(time * 2.2 + sk * 1.9) * 2.5;
            const vOff = Math.sin(sk * 3.1) * 0.22 * s.w;
            const skX = s.x + s.nx * vOff;
            const skY = s.y + s.ny * vOff + bob;
            const skRot = Math.atan2(s.ty, s.tx) + Math.sin(time * 1.5 + sk) * 0.25;

            ctx.save();
            ctx.translate(skX, skY);
            ctx.rotate(skRot);

            // Bleached ivory skull cranium
            ctx.fillStyle = '#e2e8f0';
            ctx.strokeStyle = '#94a3b8';
            ctx.lineWidth = 1.0;
            ctx.beginPath();
            ctx.arc(0, -2, 7, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            // Maxilla & teeth
            ctx.fillStyle = '#cbd5e1';
            ctx.fillRect(-3, 3, 6, 4);
            ctx.strokeRect(-3, 3, 6, 4);

            // Dark eye sockets & nasal cavity
            ctx.fillStyle = '#1e1b4b';
            ctx.beginPath();
            ctx.ellipse(-2.5, -1, 1.8, 2.2, -0.2, 0, Math.PI * 2);
            ctx.ellipse(2.5, -1, 1.8, 2.2, 0.2, 0, Math.PI * 2);
            ctx.arc(0, 2, 1.0, 0, Math.PI * 2);
            ctx.fill();

            // Wet gore wash across top of skull
            ctx.fillStyle = 'rgba(165, 16, 28, 0.45)';
            ctx.beginPath();
            ctx.arc(0, -3, 6, Math.PI * 0.8, Math.PI * 2.2);
            ctx.fill();

            ctx.restore();

            // Accompanying curved ivory rib bone nearby
            const ribS = samples[Math.max(0, k - 2)];
            if (ribS) {
                const ribX = ribS.x + ribS.nx * (vOff + 10);
                const ribY = ribS.y + ribS.ny * (vOff + 10);
                ctx.strokeStyle = '#f1f5f9';
                ctx.lineWidth = 1.8;
                ctx.beginPath();
                ctx.arc(ribX, ribY, 9, skRot, skRot + Math.PI * 0.7);
                ctx.stroke();
            }
        }

        // C. Frothy Crimson Bubble Clusters & Viscous Surface Foam
        ctx.strokeStyle = `rgba(255, 145, 160, ${0.45 * intensity})`;
        ctx.fillStyle = `rgba(255, 110, 130, ${0.35 * intensity})`;
        ctx.lineWidth = 1.2;
        for (let f = 0; f < 18; f++) {
            const k = Math.floor((time * 9 + f * 5.7) % (totalSamples - 2));
            const s = samples[k];
            if (!s) continue;
            const side = Math.sin(f * 2.8) * 0.38 * s.w;
            const fx = s.x + s.nx * side;
            const fy = s.y + s.ny * side;
            const fr = 2.5 + (f % 3) * 1.5;
            ctx.beginPath();
            ctx.arc(fx, fy, fr, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        }

        ctx.restore();
    }

    drawSplineLavaRiver(el, ctx, samples, time, opacity, intensity, qty) {
        const totalSamples = samples.length;

        // 1. Scorched Black Basalt Banks with Glowing Thermal Stress Cracks
        this.traceSplineRibbonPath(ctx, samples, 1.12);
        ctx.fillStyle = 'rgba(20, 14, 12, 0.98)';
        ctx.fill();

        // Bank thermal fracture lines glowing red-hot
        ctx.save();
        for (let i = 2; i < totalSamples - 2; i += 4) {
            const s = samples[i];
            [-1, 1].forEach(side => {
                const hw = s.w * 0.54 * side;
                const bx = s.x + s.nx * hw;
                const by = s.y + s.ny * hw;
                const pulse = 0.5 + 0.5 * Math.sin(time * 3 + i);
                ctx.strokeStyle = `rgba(255, ${Math.round(80 + pulse * 60)}, 10, ${0.75 * pulse})`;
                ctx.lineWidth = 1.4;
                ctx.beginPath();
                ctx.moveTo(bx, by);
                ctx.lineTo(bx + s.nx * (12 * side), by + s.ny * (12 * side));
                ctx.stroke();
            });
        }
        ctx.restore();

        // 2. Multi-Pass Molten Magma Core
        this.traceSplineRibbonPath(ctx, samples, 0.96);
        ctx.fillStyle = `rgba(185, 30, 0, ${opacity * 0.95})`;
        ctx.fill();

        this.traceSplineRibbonPath(ctx, samples, 0.80);
        ctx.fillStyle = `rgba(245, 95, 0, ${opacity * 0.98})`;
        ctx.fill();

        this.traceSplineRibbonPath(ctx, samples, 0.55);
        ctx.fillStyle = 'rgba(255, 215, 45, 0.98)';
        ctx.fill();

        this.traceSplineRibbonPath(ctx, samples, 0.28);
        ctx.fillStyle = 'rgba(255, 252, 210, 1.0)';
        ctx.fill();

        // 3. Clip to Lava Ribbon for Drifting Crust Plates & Bursting Magma Domes
        ctx.save();
        this.traceSplineRibbonPath(ctx, samples, 0.94);
        ctx.clip();

        // A. Segmented Dark Basalt Crust Plates Drifting Downstream
        const plateCount = Math.max(8, Math.round(18 * qty));
        for (let p = 0; p < plateCount; p++) {
            const speed = 4.5 + (p % 4) * 1.8;
            const k = Math.floor((time * speed + p * 8.7) % (totalSamples - 2));
            const s = samples[k];
            if (!s) continue;
            const off = Math.sin(p * 2.7) * 0.28 * s.w;
            const px = s.x + s.nx * off;
            const py = s.y + s.ny * off;
            const pRot = Math.atan2(s.ty, s.tx);
            const pr = 10 + (p % 4) * 5;

            ctx.save();
            ctx.translate(px, py);
            ctx.rotate(pRot);

            // Dark polygonal crust plate
            ctx.fillStyle = 'rgba(28, 18, 14, 0.94)';
            ctx.strokeStyle = 'rgba(255, 140, 20, 0.85)';
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            const sides = 5 + (p % 3);
            for (let sd = 0; sd < sides; sd++) {
                const sa = (sd / sides) * Math.PI * 2;
                const rRand = pr * (0.8 + 0.3 * Math.sin(sd * 2 + p));
                const sx = Math.cos(sa) * rRand;
                const sy = Math.sin(sa) * (rRand * 0.65);
                if (sd === 0) ctx.moveTo(sx, sy);
                else ctx.lineTo(sx, sy);
            }
            ctx.closePath();
            ctx.fill();
            ctx.stroke();

            // Plate internal cooling stress fissures
            ctx.strokeStyle = 'rgba(255, 100, 10, 0.70)';
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(-pr * 0.4, 0);
            ctx.lineTo(pr * 0.4, 0);
            ctx.stroke();

            ctx.restore();
        }

        // B. Bursting Magma Domes & Ballistic Sparks
        const sparkCount = Math.max(8, Math.round(22 * qty));
        for (let sp = 0; sp < sparkCount; sp++) {
            const speed = 14 + (sp % 4) * 6;
            const k = Math.floor((time * speed + sp * 6.1) % (totalSamples - 2));
            const s = samples[k];
            if (!s) continue;
            const jitterX = Math.sin(time * 8 + sp) * 6;
            const jitterY = Math.cos(time * 9 + sp) * 6;
            const vOff = Math.sin(sp * 1.9) * 0.35 * s.w;
            const spX = s.x + s.nx * vOff + jitterX;
            const spY = s.y + s.ny * vOff + jitterY;
            const spR = 1.5 + (sp % 3) * 0.8;

            ctx.fillStyle = (sp % 2 === 0) ? '#fffbeb' : '#f97316';
            ctx.beginPath();
            ctx.arc(spX, spY, spR, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.restore();
    }

    drawSplineRapidsRiver(el, ctx, samples, time, opacity, intensity, qty) {
        const totalSamples = samples.length;

        // 1. Deep Teal-Slate Glacial Torrent
        this.traceSplineRibbonPath(ctx, samples, 1.0);
        ctx.fillStyle = `rgba(24, 76, 102, ${opacity * 0.82})`;
        ctx.fill();

        this.traceSplineRibbonPath(ctx, samples, 0.85);
        ctx.fillStyle = `rgba(18, 98, 138, ${opacity * 0.88})`;
        ctx.fill();

        this.traceSplineRibbonPath(ctx, samples, 0.65);
        ctx.fillStyle = `rgba(12, 54, 86, ${opacity * 0.94})`;
        ctx.fill();

        // 2. Clip for Rapids Cavitation Lines & Mid-Stream Boulders with V-Wakes
        ctx.save();
        this.traceSplineRibbonPath(ctx, samples, 0.96);
        ctx.clip();

        // High-velocity churning whitewater surface streamlines
        ctx.strokeStyle = `rgba(240, 252, 255, ${0.48 * intensity})`;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        const lanes = [-0.35, -0.18, 0, 0.18, 0.35];
        lanes.forEach((lane, lIdx) => {
            const laneSpeed = 22 + (lIdx % 2) * 6;
            for (let b = 0; b < totalSamples - 4; b += 3) {
                const k = Math.floor((b + time * laneSpeed) % (totalSamples - 3));
                const s1 = samples[k];
                const s2 = samples[k + 2];
                if (!s1 || !s2) continue;
                const wave1 = Math.sin(b * 0.8 + time * 6 + lIdx) * 0.06;
                const wave2 = Math.cos(b * 0.8 + time * 6 + lIdx) * 0.06;
                ctx.moveTo(s1.x + s1.nx * (lane + wave1) * s1.w, s1.y + s1.ny * (lane + wave1) * s1.w);
                ctx.lineTo(s2.x + s2.nx * (lane + wave2) * s2.w, s2.y + s2.ny * (lane + wave2) * s2.w);
            }
        });
        ctx.stroke();

        // Wet Granite Boulders with violent V-shaped rooster-tail standing waves downstream
        for (let b = 6; b < totalSamples - 6; b += 10) {
            const s = samples[b];
            const bOffset = ((b % 3) - 1) * 0.24 * s.w;
            const bx = s.x + s.nx * bOffset;
            const by = s.y + s.ny * bOffset;
            const br = Math.max(7, s.w * 0.12);
            const flowAng = Math.atan2(s.ty, s.tx);

            // Submerged base shadow
            ctx.fillStyle = 'rgba(8, 24, 36, 0.85)';
            ctx.beginPath();
            ctx.arc(bx + 2, by + 2, br * 1.15, 0, Math.PI * 2);
            ctx.fill();

            // Granite boulder
            ctx.fillStyle = '#475569';
            ctx.strokeStyle = '#334155';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.ellipse(bx, by, br * 1.25, br * 0.85, flowAng, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            // Upstream stagnation point crest
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.95)';
            ctx.lineWidth = 2.4;
            ctx.beginPath();
            ctx.arc(bx, by, br * 1.1, flowAng + Math.PI * 0.65, flowAng + Math.PI * 1.35);
            ctx.stroke();

            // Downstream V-shaped rooster-tail standing wave foam plume
            ctx.fillStyle = 'rgba(240, 250, 255, 0.88)';
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.92)';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            const vLen = br * 2.8;
            const vSpread = br * 1.4;
            ctx.moveTo(bx + Math.cos(flowAng + 0.6) * br, by + Math.sin(flowAng + 0.6) * br);
            ctx.lineTo(bx + Math.cos(flowAng) * vLen + Math.cos(flowAng + Math.PI * 0.5) * vSpread, by + Math.sin(flowAng) * vLen + Math.sin(flowAng + Math.PI * 0.5) * vSpread);
            ctx.lineTo(bx + Math.cos(flowAng) * (vLen * 0.85), by + Math.sin(flowAng) * (vLen * 0.85));
            ctx.lineTo(bx + Math.cos(flowAng) * vLen - Math.cos(flowAng + Math.PI * 0.5) * vSpread, by + Math.sin(flowAng) * vLen - Math.sin(flowAng + Math.PI * 0.5) * vSpread);
            ctx.lineTo(bx + Math.cos(flowAng - 0.6) * br, by + Math.sin(flowAng - 0.6) * br);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }

        ctx.restore();
    }

    drawSplineSwampRiver(el, ctx, samples, time, opacity, intensity, qty) {
        const totalSamples = samples.length;

        // 1. Muddy Swamp Banks & Peat Shorelines
        this.traceSplineRibbonPath(ctx, samples, 1.05);
        ctx.fillStyle = `rgba(32, 28, 16, ${opacity * 0.92})`;
        ctx.fill();

        // 2. Murky Stagnant Olive Peat Water
        this.traceSplineRibbonPath(ctx, samples, 0.98);
        ctx.fillStyle = `rgba(45, 58, 28, ${opacity * 0.85})`;
        ctx.fill();

        this.traceSplineRibbonPath(ctx, samples, 0.75);
        ctx.fillStyle = `rgba(26, 36, 18, ${opacity * 0.92})`;
        ctx.fill();

        // 3. Sunken Cypress Root Knees & Deadfall Logs
        ctx.save();
        ctx.fillStyle = '#271c14';
        ctx.strokeStyle = '#18120d';
        ctx.lineWidth = 1.2;
        for (let i = 4; i < totalSamples - 4; i += 7) {
            const s = samples[i];
            const side = (i % 2 === 0 ? 1 : -1);
            const kx = s.x + s.nx * (s.w * 0.42 * side);
            const ky = s.y + s.ny * (s.w * 0.42 * side);
            ctx.beginPath();
            ctx.ellipse(kx, ky, 8, 4.5, Math.atan2(s.ty, s.tx) + 0.6 * side, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
        }
        ctx.restore();

        // 4. Clip for Floating Duckweed & Iridescent Oil Sheen Bands
        ctx.save();
        this.traceSplineRibbonPath(ctx, samples, 0.94);
        ctx.clip();

        // Floating Green Duckweed Pod Clusters
        ctx.fillStyle = 'rgba(102, 162, 54, 0.88)';
        ctx.strokeStyle = 'rgba(64, 112, 32, 0.85)';
        ctx.lineWidth = 0.8;
        for (let d = 3; d < totalSamples - 3; d += 4) {
            const s = samples[d];
            const side = (Math.sin(d * 3.1) > 0 ? 1 : -1) * (0.32 * s.w);
            const bob = Math.sin(time * 1.4 + d) * 2;
            const dx = s.x + s.nx * side + bob;
            const dy = s.y + s.ny * side;
            for (let pod = 0; pod < 4; pod++) {
                const px = dx + Math.cos(pod * 1.5) * 5;
                const py = dy + Math.sin(pod * 1.5) * 4;
                ctx.beginPath();
                ctx.arc(px, py, 2.8, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();
            }
        }

        // Swelling Methane Marsh Gas Bubbles
        for (let b = 0; b < 10; b++) {
            const p = ((time * 0.35 + b * 0.23) % 1);
            const k = Math.floor((b * 5.7) % (totalSamples - 2));
            const s = samples[k];
            if (!s) continue;
            const bx = s.x + s.nx * (Math.sin(b * 2.1) * 0.28 * s.w);
            const by = s.y + s.ny * (Math.sin(b * 2.1) * 0.28 * s.w);
            const br = 3 + p * 8;
            const alpha = (1 - p) * 0.75;
            ctx.strokeStyle = `rgba(180, 220, 140, ${alpha})`;
            ctx.lineWidth = 1.4;
            ctx.beginPath();
            ctx.arc(bx, by, br, 0, Math.PI * 2);
            ctx.stroke();
        }

        ctx.restore();
    }

    drawSplineCanalRiver(el, ctx, samples, time, opacity, intensity, qty) {
        const totalSamples = samples.length;

        // 1. Reinforced Stepped Concrete Canal Retaining Walls
        this.traceSplineRibbonPath(ctx, samples, 1.20);
        ctx.fillStyle = 'rgba(75, 85, 99, 0.95)';
        ctx.fill();

        this.traceSplineRibbonPath(ctx, samples, 1.08);
        ctx.fillStyle = 'rgba(107, 114, 128, 0.95)';
        ctx.fill();

        // Concrete wall expansion joints & drain weep holes
        ctx.save();
        ctx.strokeStyle = 'rgba(31, 41, 55, 0.85)';
        ctx.lineWidth = 1.8;
        for (let i = 2; i < totalSamples - 2; i += 6) {
            const s = samples[i];
            [-1, 1].forEach(side => {
                const w1 = s.w * 0.54 * side;
                const w2 = s.w * 0.60 * side;
                ctx.beginPath();
                ctx.moveTo(s.x + s.nx * w1, s.y + s.ny * w1);
                ctx.lineTo(s.x + s.nx * w2, s.y + s.ny * w2);
                ctx.stroke();
            });
        }
        ctx.restore();

        // 2. High-Velocity Turbid Urban Stormwater
        this.traceSplineRibbonPath(ctx, samples, 0.96);
        ctx.fillStyle = `rgba(45, 68, 78, ${opacity * 0.88})`;
        ctx.fill();

        this.traceSplineRibbonPath(ctx, samples, 0.75);
        ctx.fillStyle = `rgba(28, 48, 58, ${opacity * 0.92})`;
        ctx.fill();

        // 3. Clip for Longitudinal Hydraulic Jump Standing Waves & Floating Flotsam
        ctx.save();
        this.traceSplineRibbonPath(ctx, samples, 0.92);
        ctx.clip();

        // Diamond-patterned hydraulic standing waves
        ctx.strokeStyle = 'rgba(186, 230, 253, 0.42)';
        ctx.lineWidth = 1.5;
        const waveSpeed = 24 * (el.config.speed || 1.0);
        for (let lane of [-0.25, 0, 0.25]) {
            ctx.beginPath();
            for (let i = 0; i < totalSamples - 2; i += 2) {
                const k = Math.floor((i + time * waveSpeed) % (totalSamples - 1));
                const s = samples[k];
                if (!s) continue;
                const waveY = Math.sin(i * 0.6 + time * 6) * 4;
                const wx = s.x + s.nx * (lane * s.w + waveY);
                const wy = s.y + s.ny * (lane * s.w + waveY);
                if (i === 0) ctx.moveTo(wx, wy);
                else ctx.lineTo(wx, wy);
            }
            ctx.stroke();
        }

        // Floating urban litter (soda can, crumpled paper)
        for (let lit = 0; lit < 4; lit++) {
            const lk = Math.floor((time * 18 + lit * 14.3) % (totalSamples - 2));
            const ls = samples[lk];
            if (!ls) continue;
            const lx = ls.x + ls.nx * (Math.sin(lit * 2.2) * 0.22 * ls.w);
            const ly = ls.y + ls.ny * (Math.sin(lit * 2.2) * 0.22 * ls.w);
            ctx.fillStyle = (lit % 2 === 0) ? '#ef4444' : '#f59e0b';
            ctx.fillRect(lx - 3, ly - 2, 6, 4);
        }

        ctx.restore();
    }

    drawSplineCoolantConduit(el, ctx, samples, time, opacity, intensity, qty) {
        const totalSamples = samples.length;

        // 1. Armored Gunmetal Conduit Housing with Bulkhead Rings
        this.traceSplineRibbonPath(ctx, samples, 1.18);
        ctx.fillStyle = 'rgba(30, 41, 59, 0.98)';
        ctx.fill();

        // Armored bulkhead clamps & yellow/black hazard chevrons
        ctx.save();
        for (let i = 3; i < totalSamples - 3; i += 8) {
            const s = samples[i];
            const pRot = Math.atan2(s.ty, s.tx);
            ctx.save();
            ctx.translate(s.x, s.y);
            ctx.rotate(pRot);
            ctx.fillStyle = '#facc15';
            ctx.fillRect(-4, -s.w * 0.58, 8, s.w * 1.16);
            ctx.fillStyle = '#0f172a';
            for (let ch = -3; ch <= 3; ch++) {
                ctx.fillRect(-3, ch * (s.w * 0.16), 6, 6);
            }
            ctx.restore();
        }
        ctx.restore();

        // 2. High-Pressure Cherenkov / Bio-Mutagen Coolant Fluid
        this.traceSplineRibbonPath(ctx, samples, 0.92);
        ctx.fillStyle = `rgba(16, 185, 129, ${opacity * 0.92})`;
        ctx.fill();

        this.traceSplineRibbonPath(ctx, samples, 0.65);
        ctx.fillStyle = 'rgba(52, 211, 153, 0.98)';
        ctx.fill();

        this.traceSplineRibbonPath(ctx, samples, 0.32);
        ctx.fillStyle = 'rgba(209, 250, 229, 1.0)';
        ctx.fill();

        // 3. Clip for High-Pressure Cavitation Shockwave Rings & Ionization Arcs
        ctx.save();
        this.traceSplineRibbonPath(ctx, samples, 0.88);
        ctx.clip();

        // Cavitation pressure shockwave rings racing downstream
        const ringCount = Math.max(4, Math.round(12 * qty));
        for (let r = 0; r < ringCount; r++) {
            const speed = 28 * (el.config.speed || 1.0);
            const k = Math.floor((time * speed + r * 7.5) % (totalSamples - 2));
            const s = samples[k];
            if (!s) continue;
            const pRot = Math.atan2(s.ty, s.tx);
            ctx.save();
            ctx.translate(s.x, s.y);
            ctx.rotate(pRot);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)';
            ctx.lineWidth = 2.0;
            ctx.beginPath();
            ctx.ellipse(0, 0, 5, s.w * 0.42, 0, 0, Math.PI * 2);
            ctx.stroke();
            ctx.restore();
        }

        // Crackling blue-white ionization electrical arcs
        if (Math.sin(time * 12) > 0.4) {
            const arcK = Math.floor((time * 15) % (totalSamples - 4));
            const s1 = samples[arcK];
            const s2 = samples[arcK + 3];
            if (s1 && s2) {
                ctx.strokeStyle = '#67e8f9';
                ctx.lineWidth = 1.6;
                ctx.beginPath();
                ctx.moveTo(s1.x - s1.nx * (s1.w * 0.35), s1.y - s1.ny * (s1.w * 0.35));
                const midX = (s1.x + s2.x) * 0.5 + (Math.random() - 0.5) * 12;
                const midY = (s1.y + s2.y) * 0.5 + (Math.random() - 0.5) * 12;
                ctx.lineTo(midX, midY);
                ctx.lineTo(s2.x + s2.nx * (s2.w * 0.35), s2.y + s2.ny * (s2.w * 0.35));
                ctx.stroke();
            }
        }

        ctx.restore();
    }

    drawSplineMoatRiver(el, ctx, samples, time, opacity, intensity, qty) {
        const totalSamples = samples.length;

        // 1. Muddy Silt Banks
        this.traceSplineRibbonPath(ctx, samples, 1.08);
        ctx.fillStyle = `rgba(45, 36, 24, ${opacity * 0.95})`;
        ctx.fill();

        // 2. Stagnant Muddy Castle Moat Water
        this.traceSplineRibbonPath(ctx, samples, 0.98);
        ctx.fillStyle = `rgba(38, 52, 34, ${opacity * 0.88})`;
        ctx.fill();

        this.traceSplineRibbonPath(ctx, samples, 0.72);
        ctx.fillStyle = `rgba(22, 32, 20, ${opacity * 0.92})`;
        ctx.fill();

        // 3. Outer & Inner Bank Double-Staggered Sharpened Defensive Palisade Stakes
        ctx.save();
        ctx.fillStyle = '#451a03';
        ctx.strokeStyle = '#1c1917';
        ctx.lineWidth = 1.3;
        for (let i = 2; i < totalSamples - 2; i += 3) {
            const s = samples[i];
            [-1, 1].forEach(side => {
                const hw = s.w * 0.48 * side;
                const sx = s.x + s.nx * hw;
                const sy = s.y + s.ny * hw;
                const stakeR = 4.2;

                // Palisade stake with chisel point
                ctx.beginPath();
                ctx.arc(sx, sy, stakeR, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();

                // Chisel cut shadow
                ctx.strokeStyle = '#78350f';
                ctx.lineWidth = 1.0;
                ctx.beginPath();
                ctx.moveTo(sx - stakeR * 0.6, sy - stakeR * 0.6);
                ctx.lineTo(sx + stakeR * 0.6, sy + stakeR * 0.6);
                ctx.stroke();
            });
        }
        ctx.restore();

        // 4. Clip for Floating Arrow Shafts & Slow Silt Whirlpools
        ctx.save();
        this.traceSplineRibbonPath(ctx, samples, 0.88);
        ctx.clip();

        // Floating broken wooden arrow shafts
        ctx.strokeStyle = '#b45309';
        ctx.lineWidth = 2.0;
        for (let a = 0; a < 6; a++) {
            const ak = Math.floor((time * 2 + a * 9.3) % (totalSamples - 2));
            const as = samples[ak];
            if (!as) continue;
            const ax = as.x + as.nx * (Math.sin(a * 2.4) * 0.25 * as.w);
            const ay = as.y + as.ny * (Math.sin(a * 2.4) * 0.25 * as.w);
            const aRot = Math.atan2(as.ty, as.tx) + 0.4;
            ctx.beginPath();
            ctx.moveTo(ax - Math.cos(aRot) * 9, ay - Math.sin(aRot) * 9);
            ctx.lineTo(ax + Math.cos(aRot) * 9, ay + Math.sin(aRot) * 9);
            ctx.stroke();
        }

        ctx.restore();
    }

    drawSplineAlpineStream(el, ctx, samples, time, opacity, intensity, qty) {
        const totalSamples = samples.length;

        // 1. Feathered Natural Stream Bed
        this.traceSplineRibbonPath(ctx, samples, 1.0);
        ctx.fillStyle = `rgba(24, 82, 118, ${opacity * 0.68})`;
        ctx.fill();

        this.traceSplineRibbonPath(ctx, samples, 0.86);
        ctx.fillStyle = `rgba(16, 68, 104, ${opacity * 0.82})`;
        ctx.fill();

        this.traceSplineRibbonPath(ctx, samples, 0.68);
        ctx.fillStyle = `rgba(10, 48, 78, ${opacity * 0.90})`;
        ctx.fill();

        // 2. Clip for Submerged Multi-Colored River Pebbles & Cellular Sunlit Caustics
        ctx.save();
        this.traceSplineRibbonPath(ctx, samples, 0.94);
        ctx.clip();

        // Submerged smooth river pebbles on the stream bed
        const pebbleColors = ['#94a3b8', '#64748b', '#b91c1c', '#d97706', '#475569', '#cbd5e1'];
        for (let p = 2; p < totalSamples - 2; p += 3) {
            const s = samples[p];
            const pSeed = p * 7.31;
            const pOff = Math.sin(pSeed) * 0.35 * s.w;
            const px = s.x + s.nx * pOff;
            const py = s.y + s.ny * pOff;
            const pr = 3.5 + (p % 4) * 1.5;
            ctx.fillStyle = pebbleColors[p % pebbleColors.length];
            ctx.beginPath();
            ctx.ellipse(px, py, pr * 1.2, pr * 0.8, pSeed, 0, Math.PI * 2);
            ctx.fill();
        }

        // Interlocking Sunlit Caustic Network Moving Downstream
        const causticAlpha = Math.min(0.95, 0.28 * intensity);
        ctx.strokeStyle = `rgba(200, 245, 255, ${causticAlpha})`;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        const lanes = [-0.32, -0.16, 0, 0.16, 0.32];
        lanes.forEach((vLane, lIdx) => {
            const speedShift = time * (10 + (lIdx % 2) * 3);
            for (let baseK = 0; baseK < totalSamples - 4; baseK += 4) {
                const k = Math.floor((baseK + speedShift) % (totalSamples - 3));
                const s1 = samples[k];
                const s2 = samples[k + 2];
                if (!s1 || !s2) continue;
                const wave1 = Math.sin(baseK * 0.6 + time * 2.8 + lIdx) * 0.08;
                const wave2 = Math.cos(baseK * 0.6 + time * 2.5 + lIdx) * 0.08;
                ctx.moveTo(s1.x + s1.nx * ((vLane + wave1) * s1.w), s1.y + s1.ny * ((vLane + wave1) * s1.w));
                ctx.lineTo(s2.x + s2.nx * ((vLane + wave2) * s2.w), s2.y + s2.ny * ((vLane + wave2) * s2.w));
            }
        });
        ctx.stroke();

        // Floating Autumn Leaves
        const leafColors = ['#dc2626', '#ea580c', '#f59e0b', '#84cc16'];
        for (let lf = 0; lf < 6; lf++) {
            const lk = Math.floor((time * 12 + lf * 11.2) % (totalSamples - 2));
            const ls = samples[lk];
            if (!ls) continue;
            const lx = ls.x + ls.nx * (Math.sin(lf * 2.3 + time * 0.5) * 0.28 * ls.w);
            const ly = ls.y + ls.ny * (Math.sin(lf * 2.3 + time * 0.5) * 0.28 * ls.w);
            const lRot = time * 2 + lf;
            ctx.save();
            ctx.translate(lx, ly);
            ctx.rotate(lRot);
            ctx.fillStyle = leafColors[lf % leafColors.length];
            ctx.beginPath();
            ctx.ellipse(0, 0, 6, 3, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }

        ctx.restore();
    }

    /**
     * Renders a Custom Pond / Pool / Lake / Flooded Room using Perimeter Handles.
     * Uses a closed Catmull-Rom spline that interpolates smoothly through all node vertices
     * so that the finished geometry exactly matches the drawn stroke shape.
     */
    traceSmoothClosedPolygon(ctx, nodes, scale = 1.0) {
        const n = nodes.length;
        if (n < 3) return;
        const rough = ctx._fractalRough !== undefined ? ctx._fractalRough : 0;

        let cx = 0, cy = 0;
        nodes.forEach(p => { cx += p.dx; cy += p.dy; });
        cx /= n;
        cy /= n;

        const pts = nodes.map(p => ({
            x: cx + (p.dx - cx) * scale,
            y: cy + (p.dy - cy) * scale
        }));

        ctx.beginPath();
        const subSteps = rough > 0.02 ? 14 : 8;

        for (let i = 0; i < n; i++) {
            const p0 = pts[(i - 1 + n) % n];
            const p1 = pts[i];
            const p2 = pts[(i + 1) % n];
            const p3 = pts[(i + 2) % n];

            for (let s = 0; s < subSteps; s++) {
                const t = s / subSteps;
                const t2 = t * t;
                const t3 = t2 * t;

                // Catmull-Rom spline formula: passes precisely through p1 at t=0 and p2 at t=1
                let x = 0.5 * (
                    (2 * p1.x) +
                    (-p0.x + p2.x) * t +
                    (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * t2 +
                    (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * t3
                );
                let y = 0.5 * (
                    (2 * p1.y) +
                    (-p0.y + p2.y) * t +
                    (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * t2 +
                    (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * t3
                );

                if (rough > 0.02) {
                    const tx = 0.5 * ((-p0.x + p2.x) + 2 * (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * t + 3 * (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * t2);
                    const ty = 0.5 * ((-p0.y + p2.y) + 2 * (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * t + 3 * (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * t2);
                    const tLen = Math.hypot(tx, ty) || 1;
                    const nx = -ty / tLen;
                    const ny = tx / tLen;

                    const windowEnv = Math.sin(t * Math.PI);
                    const phase = (i * subSteps + s) * 0.78;
                    const fbm = Math.sin(phase * 1.7 + i * 2.1) * 0.44
                        + Math.cos(phase * 3.9 - i * 1.3) * 0.28
                        + Math.sin(phase * 7.5 + i * 3.4) * 0.16
                        + (1.0 - 2.0 * Math.abs(Math.sin(phase * 12.3 + i))) * 0.12;
                    const spanLen = Math.hypot(p2.x - p1.x, p2.y - p1.y) || 1;
                    const disp = rough * Math.min(65, spanLen * 0.42) * windowEnv * fbm;
                    x += nx * disp;
                    y += ny * disp;
                }

                if (i === 0 && s === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
        }
        ctx.closePath();
    }

    sampleSmoothClosedPolygon(nodes, subdivisions = 6) {
        const n = nodes.length;
        if (n < 3) return [];
        const poly = [];
        for (let i = 0; i < n; i++) {
            const p0 = nodes[(i - 1 + n) % n];
            const p1 = nodes[i];
            const p2 = nodes[(i + 1) % n];
            const p3 = nodes[(i + 2) % n];
            for (let s = 0; s < subdivisions; s++) {
                const t = s / subdivisions;
                const t2 = t * t;
                const t3 = t2 * t;
                poly.push({
                    x: 0.5 * ((2 * p1.dx) + (-p0.dx + p2.dx) * t + (2 * p0.dx - 5 * p1.dx + 4 * p2.dx - p3.dx) * t2 + (-p0.dx + 3 * p1.dx - 3 * p2.dx + p3.dx) * t3),
                    y: 0.5 * ((2 * p1.dy) + (-p0.dy + p2.dy) * t + (2 * p0.dy - 5 * p1.dy + 4 * p2.dy - p3.dy) * t2 + (-p0.dy + 3 * p1.dy - 3 * p2.dy + p3.dy) * t3)
                });
            }
        }
        return poly;
    }

    isPointInPolygon(x, y, poly) {
        let inside = false;
        for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
            const xi = poly[i].x, yi = poly[i].y;
            const xj = poly[j].x, yj = poly[j].y;
            const intersect = ((yi > y) !== (yj > y)) &&
                (x < (xj - xi) * (y - yi) / ((yj - yi) || 1e-7) + xi);
            if (intersect) inside = !inside;
        }
        return inside;
    }

    drawPolygonWater(el, ctx, nodes) {
        if (nodes.length < 3) return;

        const time = el.stateTime;
        const style = el.config.variant || el.config.waterStyle || 'pond_lily';
        const opacity = el.config.opacity !== undefined ? el.config.opacity : 0.82;
        const intensity = el.config.intensity !== undefined ? el.config.intensity : 1.0;
        const qty = el.config.quantity !== undefined ? el.config.quantity : 1.0;

        if (window.VTT_FX_DISPATCHER && window.VTT_FX_DISPATCHER.renderPolygon(el, ctx, nodes, time, opacity, intensity, qty)) return;

        // Dedicated procedural renderers for unique pool types
        switch (style) {
            case 'blood_pool':
                this.drawPolygonBloodPool(el, ctx, nodes, time, opacity, intensity, qty);
                break;
            case 'cavern_pool':
                this.drawPolygonCavernPool(el, ctx, nodes, time, opacity, intensity, qty);
                break;
            case 'ocean':
            case 'tropical_reef':
                this.drawPolygonOceanSurf(el, ctx, nodes, time, opacity, intensity, qty);
                break;
            default:
                this.drawPolygonLilyPond(el, ctx, nodes, time, opacity, intensity, qty);
                break;
        }

        // Selection Outline
        if (el.id === this.selectedElementId && !this.isLocked) {
            ctx.save();
            this.traceSmoothClosedPolygon(ctx, nodes, 1.0);
            ctx.strokeStyle = 'rgba(0, 255, 200, 0.6)';
            ctx.lineWidth = 1.5;
            ctx.setLineDash([6, 4]);
            ctx.stroke();

            // Control polygon hull
            ctx.strokeStyle = 'rgba(0, 255, 200, 0.28)';
            ctx.setLineDash([2, 3]);
            ctx.beginPath();
            nodes.forEach((n, idx) => {
                if (idx === 0) ctx.moveTo(n.dx, n.dy);
                else ctx.lineTo(n.dx, n.dy);
            });
            ctx.closePath();
            ctx.stroke();
            ctx.restore();
        }
    }

    // ------------------------------------------------------------------------
    // BESPOKE POLYGON POOL RENDERERS
    // ------------------------------------------------------------------------

    drawPolygonBloodPool(el, ctx, nodes, time, opacity, intensity, qty) {
        const { minX, minY, width, height } = el.bbox;
        const polyPts = this.sampleSmoothClosedPolygon(nodes, 5);

        // 1. Dried, congealed gore rim
        this.traceSmoothClosedPolygon(ctx, nodes, 1.06);
        ctx.fillStyle = `rgba(38, 4, 8, ${opacity * 0.95})`;
        ctx.fill();

        // 2. Multi-tier arterial crimson blood body
        this.traceSmoothClosedPolygon(ctx, nodes, 1.0);
        ctx.fillStyle = `rgba(110, 8, 18, ${opacity * 0.92})`;
        ctx.fill();

        this.traceSmoothClosedPolygon(ctx, nodes, 0.92);
        ctx.fillStyle = `rgba(148, 12, 22, ${opacity * 0.95})`;
        ctx.fill();

        this.traceSmoothClosedPolygon(ctx, nodes, 0.78);
        ctx.fillStyle = `rgba(182, 16, 30, ${opacity * 0.98})`;
        ctx.fill();

        // 3. Clip for Glowing Sacrificial Pentagram, Drifting Clots & Skulls
        ctx.save();
        this.traceSmoothClosedPolygon(ctx, nodes, 0.98);
        ctx.clip();

        // Center calculation
        let cx = 0, cy = 0;
        nodes.forEach(p => { cx += p.dx; cy += p.dy; });
        cx /= nodes.length;
        cy /= nodes.length;

        // Submerged Glowing Sacrificial Pentagram & Occult Arcane Runes
        const ringR = Math.min(width, height) * 0.26;
        const pulse = 0.6 + 0.4 * Math.sin(time * 2.8);
        ctx.strokeStyle = `rgba(255, 55, 75, ${0.75 * pulse * intensity})`;
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        ctx.arc(cx, cy, ringR, 0, Math.PI * 2);
        ctx.stroke();

        ctx.beginPath();
        for (let p = 0; p < 5; p++) {
            const a1 = (p * 4 * Math.PI) / 5 + time * 0.35;
            const px = cx + Math.cos(a1) * ringR;
            const py = cy + Math.sin(a1) * ringR;
            if (p === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.stroke();

        // Runic boundary glyphs burning around the circle
        ctx.fillStyle = `rgba(255, 120, 140, ${0.85 * pulse * intensity})`;
        for (let g = 0; g < 8; g++) {
            const ga = (g / 8) * Math.PI * 2 - time * 0.25;
            const gx = cx + Math.cos(ga) * (ringR * 1.15);
            const gy = cy + Math.sin(ga) * (ringR * 1.15);
            ctx.fillRect(gx - 2, gy - 2, 4, 4);
        }

        // Drifting bleached human skulls orbiting the pool center
        const skullCount = Math.max(2, Math.round(4 * qty));
        for (let s = 0; s < skullCount; s++) {
            const sa = time * 0.45 + (s / skullCount) * Math.PI * 2;
            const sDist = ringR * (0.55 + 0.25 * Math.sin(s * 2.1));
            const sx = cx + Math.cos(sa) * sDist;
            const sy = cy + Math.sin(sa) * (sDist * 0.85);

            ctx.save();
            ctx.translate(sx, sy);
            ctx.rotate(sa + Math.PI * 0.5);

            // Cranium
            ctx.fillStyle = '#f1f5f9';
            ctx.strokeStyle = '#94a3b8';
            ctx.lineWidth = 1.0;
            ctx.beginPath();
            ctx.arc(0, -2, 8, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();

            // Jaw
            ctx.fillStyle = '#cbd5e1';
            ctx.fillRect(-3.5, 4, 7, 4);
            ctx.strokeRect(-3.5, 4, 7, 4);

            // Eye orbits
            ctx.fillStyle = '#1e1b4b';
            ctx.beginPath();
            ctx.arc(-2.5, -1, 1.8, 0, Math.PI * 2);
            ctx.arc(2.5, -1, 1.8, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();
        }

        // Concentric Viscous Crimson Ripple Rings & Bubbles
        for (let r = 0; r < 5; r++) {
            const phase = ((time * 0.4 + r * 0.22) % 1);
            const curR = phase * (ringR * 1.6);
            const alpha = (1 - phase) * 0.55 * intensity;
            ctx.strokeStyle = `rgba(255, 120, 140, ${alpha})`;
            ctx.lineWidth = 1.4;
            ctx.beginPath();
            ctx.arc(cx, cy, curR, 0, Math.PI * 2);
            ctx.stroke();
        }

        ctx.restore();
    }

    drawPolygonCavernPool(el, ctx, nodes, time, opacity, intensity, qty) {
        const { minX, minY, width, height } = el.bbox;
        const polyPts = this.sampleSmoothClosedPolygon(nodes, 5);

        // 1. Damp Cavern Stone Shoreline
        this.traceSmoothClosedPolygon(ctx, nodes, 1.05);
        ctx.fillStyle = `rgba(24, 30, 42, ${opacity * 0.88})`;
        ctx.fill();

        // 2. Subterranean Sapphire-Indigo Basin
        this.traceSmoothClosedPolygon(ctx, nodes, 1.0);
        ctx.fillStyle = `rgba(12, 42, 82, ${opacity * 0.85})`;
        ctx.fill();

        this.traceSmoothClosedPolygon(ctx, nodes, 0.92);
        ctx.fillStyle = `rgba(8, 28, 64, ${opacity * 0.90})`;
        ctx.fill();

        this.traceSmoothClosedPolygon(ctx, nodes, 0.78);
        ctx.fillStyle = `rgba(4, 16, 42, ${opacity * 0.95})`;
        ctx.fill();

        // 3. Clip for Ceiling Water Drips, Submerged Quartz Crystals & Luminous Motes
        ctx.save();
        this.traceSmoothClosedPolygon(ctx, nodes, 0.98);
        ctx.clip();

        // Submerged Glowing Multi-Faceted Quartz Crystals
        let cx = 0, cy = 0;
        nodes.forEach(p => { cx += p.dx; cy += p.dy; });
        cx /= nodes.length;
        cy /= nodes.length;

        const pulse = 0.7 + 0.3 * Math.sin(time * 2.5);
        const crystalCount = 6;
        for (let c = 0; c < crystalCount; c++) {
            const ang = (c / crystalCount) * Math.PI * 2 + 0.35;
            const dist = 28 + (c % 2) * 36;
            const gx = cx + Math.cos(ang) * dist;
            const gy = cy + Math.sin(ang) * dist;
            if (!this.isPointInPolygon(gx, gy, polyPts)) continue;

            // Prismatic glow aura
            const glow = ctx.createRadialGradient(gx, gy, 1, gx, gy, 28);
            glow.addColorStop(0, `rgba(34, 211, 238, ${0.85 * pulse * intensity})`);
            glow.addColorStop(0.5, `rgba(168, 85, 247, ${0.45 * pulse * intensity})`);
            glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = glow;
            ctx.beginPath();
            ctx.arc(gx, gy, 28, 0, Math.PI * 2);
            ctx.fill();

            // Multi-faceted crystal prism shard
            ctx.fillStyle = '#cffafe';
            ctx.strokeStyle = '#38bdf8';
            ctx.lineWidth = 1.0;
            ctx.beginPath();
            ctx.moveTo(gx, gy - 11);
            ctx.lineTo(gx + 6, gy);
            ctx.lineTo(gx, gy + 11);
            ctx.lineTo(gx - 6, gy);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }

        // Ceiling Stalactite Water Droplets creating expanding ripple rings
        for (let d = 0; d < 4; d++) {
            const seed = (d + 1) * 7823;
            const dx = minX + width * (0.25 + ((seed % 500) / 1000));
            const dy = minY + height * (0.25 + (((seed * 3) % 500) / 1000));
            const phase = (time * 0.45 + d * 0.28) % 1.0;
            const maxR = 34 + (d % 3) * 12;
            const curR = phase * maxR;
            const alpha = (1 - phase) * 0.65 * intensity;

            ctx.strokeStyle = `rgba(186, 230, 253, ${alpha})`;
            ctx.lineWidth = 1.4;
            ctx.beginPath();
            ctx.arc(dx, dy, curR, 0, Math.PI * 2);
            ctx.stroke();
        }

        ctx.restore();
    }

    drawPolygonLilyPond(el, ctx, nodes, time, opacity, intensity, qty) {
        const { minX, minY, width, height } = el.bbox;
        const polyPts = this.sampleSmoothClosedPolygon(nodes, 5);

        // 1. Natural Sandy / Grassy Rim
        this.traceSmoothClosedPolygon(ctx, nodes, 1.05);
        ctx.fillStyle = `rgba(168, 152, 118, ${opacity * 0.35})`;
        ctx.fill();

        // 2. Clear Emerald-Tinted Woodland Water
        this.traceSmoothClosedPolygon(ctx, nodes, 1.0);
        ctx.fillStyle = `rgba(18, 92, 112, ${opacity * 0.75})`;
        ctx.fill();

        this.traceSmoothClosedPolygon(ctx, nodes, 0.94);
        ctx.fillStyle = `rgba(12, 68, 88, ${opacity * 0.85})`;
        ctx.fill();

        this.traceSmoothClosedPolygon(ctx, nodes, 0.82);
        ctx.fillStyle = `rgba(8, 48, 66, ${opacity * 0.92})`;
        ctx.fill();

        // 3. Clip for Sunlit Caustics, Lily Pads & Blooming Lotus Blossoms
        ctx.save();
        this.traceSmoothClosedPolygon(ctx, nodes, 0.98);
        ctx.clip();

        // Sunlit Caustic Web
        const causticAlpha = Math.min(0.95, 0.22 * intensity);
        ctx.strokeStyle = `rgba(185, 248, 240, ${causticAlpha})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        for (let y = minY + 20; y < minY + height - 20; y += 28) {
            for (let x = minX + 20; x < minX + width - 20; x += 34) {
                const wx = Math.sin(x * 0.03 + time * 1.8 + y * 0.02) * 7;
                const wy = Math.cos(y * 0.03 + time * 1.5 + x * 0.02) * 5;
                ctx.moveTo(x + wx, y + wy);
                ctx.lineTo(x + wx + 16, y + wy + 3);
            }
        }
        ctx.stroke();

        // 3D-Layered Green Lily Pads & Blooming Pink Lotus Flowers
        const padSpacing = Math.max(36, Math.round(74 / Math.sqrt(qty)));
        for (let py = minY + 32; py < minY + height - 32; py += padSpacing) {
            for (let px = minX + 32; px < minX + width - 32; px += padSpacing) {
                const hash = Math.abs(Math.sin(px * 12.9898 + py * 78.233) * 43758.5453);
                const jx = px + ((hash % 1) - 0.5) * (padSpacing * 0.65);
                const jy = py + (((hash * 17) % 1) - 0.5) * (padSpacing * 0.65);
                if (!this.isPointInPolygon(jx, jy, polyPts)) continue;
                if ((hash % 1) > 0.58) continue;

                const padR = 9 + ((hash * 7) % 7);
                const notchAngle = (hash * Math.PI * 2) + Math.sin(time * 1.4 + hash) * 0.12;
                const bobX = jx + Math.sin(time * 1.5 + hash) * 1.8;
                const bobY = jy + Math.cos(time * 1.3 + hash) * 1.5;

                // Lily pad shadow on pond bed
                ctx.fillStyle = 'rgba(4, 24, 18, 0.38)';
                ctx.beginPath();
                ctx.arc(bobX + 2, bobY + 2, padR, notchAngle + 0.25, notchAngle + Math.PI * 2 - 0.25);
                ctx.lineTo(bobX + 2, bobY + 2);
                ctx.closePath();
                ctx.fill();

                // Notched green lily pad
                ctx.fillStyle = (Math.floor(hash * 10) % 2 === 0) ? 'rgba(34, 138, 62, 0.92)' : 'rgba(52, 162, 74, 0.90)';
                ctx.beginPath();
                ctx.arc(bobX, bobY, padR, notchAngle + 0.25, notchAngle + Math.PI * 2 - 0.25);
                ctx.lineTo(bobX, bobY);
                ctx.closePath();
                ctx.fill();

                // Radial veins on leaf
                ctx.strokeStyle = 'rgba(22, 101, 52, 0.65)';
                ctx.lineWidth = 0.8;
                for (let v = 0; v < 5; v++) {
                    const va = notchAngle + 0.6 + v * 0.9;
                    ctx.beginPath();
                    ctx.moveTo(bobX, bobY);
                    ctx.lineTo(bobX + Math.cos(va) * (padR * 0.85), bobY + Math.sin(va) * (padR * 0.85));
                    ctx.stroke();
                }

                // Blooming pink/white lotus flower on every 3rd lily pad
                if (Math.floor(hash * 100) % 3 === 0) {
                    ctx.fillStyle = (Math.floor(hash * 100) % 2 === 0) ? 'rgba(255, 165, 205, 0.95)' : 'rgba(255, 240, 248, 0.95)';
                    for (let pet = 0; pet < 6; pet++) {
                        const pa = (pet / 6) * Math.PI * 2 + time * 0.3;
                        ctx.beginPath();
                        ctx.ellipse(
                            bobX + Math.cos(pa) * (padR * 0.28),
                            bobY + Math.sin(pa) * (padR * 0.28),
                            padR * 0.32,
                            padR * 0.16,
                            pa,
                            0,
                            Math.PI * 2
                        );
                        ctx.fill();
                    }
                    // Yellow stamen center
                    ctx.fillStyle = 'rgba(250, 204, 21, 0.98)';
                    ctx.beginPath();
                    ctx.arc(bobX, bobY, padR * 0.16, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        }

        ctx.restore();
    }

    drawPolygonOceanSurf(el, ctx, nodes, time, opacity, intensity, qty) {
        const { minX, minY, width, height } = el.bbox;
        const polyPts = this.sampleSmoothClosedPolygon(nodes, 5);

        // 1. Wet Beach Sand Embankment
        this.traceSmoothClosedPolygon(ctx, nodes, 1.05);
        ctx.fillStyle = `rgba(217, 191, 143, ${opacity * 0.45})`;
        ctx.fill();

        // 2. Turquoise-to-Deep-Cobalt Ocean Surface
        this.traceSmoothClosedPolygon(ctx, nodes, 1.0);
        ctx.fillStyle = `rgba(14, 165, 233, ${opacity * 0.78})`;
        ctx.fill();

        this.traceSmoothClosedPolygon(ctx, nodes, 0.92);
        ctx.fillStyle = `rgba(2, 132, 199, ${opacity * 0.85})`;
        ctx.fill();

        this.traceSmoothClosedPolygon(ctx, nodes, 0.78);
        ctx.fillStyle = `rgba(3, 105, 161, ${opacity * 0.92})`;
        ctx.fill();

        // 3. Clip for Rolling White Breakers & Swash Lines
        ctx.save();
        this.traceSmoothClosedPolygon(ctx, nodes, 0.96);
        ctx.clip();

        // Rolling White Foam Breakers
        const waveCount = 5;
        for (let w = 0; w < waveCount; w++) {
            const p = ((time * 0.3 + w / waveCount) % 1.0);
            const waveY = minY + height * (0.15 + p * 0.75);
            const waveH = Math.sin(p * Math.PI);

            ctx.strokeStyle = `rgba(255, 255, 255, ${waveH * 0.85 * intensity})`;
            ctx.lineWidth = 3.0 * waveH;
            ctx.beginPath();
            for (let x = minX; x < minX + width; x += 16) {
                const swell = Math.sin(x * 0.04 + time * 2.5 + w) * 9;
                if (x === minX) ctx.moveTo(x, waveY + swell);
                else ctx.lineTo(x, waveY + swell);
            }
            ctx.stroke();

            // Bubbles & sea spume behind breaker
            ctx.fillStyle = `rgba(240, 249, 255, ${waveH * 0.45 * intensity})`;
            for (let sp = 0; sp < 12; sp++) {
                const spX = minX + (sp / 12) * width + Math.sin(time + sp) * 10;
                const spY = waveY + Math.cos(time + sp) * 6;
                ctx.beginPath();
                ctx.arc(spX, spY, 2.5, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        ctx.restore();
    }

    // ========================================================================
    // 3B. DEFORMABLE FOREST / WOODS TOOL (Polygon Grove Fill & Curved Treeline)
    // ========================================================================
    drawDeformableForest(el, ctx, dt) {
        const nodes = el.config.nodes || [];
        if (nodes.length < 2) return;

        const time = el.stateTime;
        const cfg = el.config || {};
        const intensity = cfg.intensity !== undefined ? cfg.intensity : 1.0;
        const speed = cfg.speed !== undefined ? cfg.speed : 1.0;
        const qty = Math.max(0.2, Math.min(4.0, cfg.quantity !== undefined ? cfg.quantity : 1.0));
        const elScale = Math.max(0.25, Math.min(3.0, parseFloat(cfg.elementScale !== undefined ? cfg.elementScale : (cfg.scale !== undefined ? cfg.scale : 1.0)) || 1.0));
        const rough = Math.max(0, Math.min(2.0, parseFloat(cfg.fractalRoughness !== undefined ? cfg.fractalRoughness : 0.75)));
        ctx._fractalRough = rough;
        if (el.ctx) el.ctx._fractalRough = rough;
        const variant = cfg.variant || 'ancient_oak';
        const pal = this.getForestPalette(variant);
        const isPolygon = (cfg.shapeMode || 'polygon') === 'polygon';

        ctx.save();
        ctx.translate(-el.bbox.minX, -el.bbox.minY);

        // 1. Forest Floor Undergrowth & Soft Canopy Ground Shadow inside Deformable Perimeter
        ctx.save();
        let polyPts = [];
        let splineSamples = [];
        if (isPolygon && nodes.length >= 3) {
            this.traceSmoothClosedPolygon(ctx, nodes, 1.0);
            polyPts = this.sampleSmoothClosedPolygon(nodes, 6);
        } else {
            splineSamples = this.sampleRiverSpline(nodes, 48);
            this.traceSplineRibbonPath(ctx, splineSamples, 1.0);
        }
        ctx.fillStyle = pal.shadow;
        ctx.fill();
        ctx.restore();

        // 2. Deterministically Populate Swaying Trees Inside the Deformable Polygon or Along the Treeline Spline
        const candidateTrees = [];
        const { minX, minY, width, height } = el.bbox;
        const spacing = Math.max(28, Math.round(72 / Math.sqrt(qty)));

        if (isPolygon && polyPts.length >= 3) {
            // Grid-aligned in local (dx, dy) space so dragging a single handle keeps existing trees anchored!
            const startX = Math.floor(minX / spacing) * spacing;
            const endX = minX + width;
            const startY = Math.floor(minY / spacing) * spacing;
            const endY = minY + height;

            for (let gy = startY; gy <= endY; gy += spacing) {
                for (let gx = startX; gx <= endX; gx += spacing) {
                    const hash1 = Math.abs(Math.sin(gx * 12.9898 + gy * 78.233) * 43758.5453) % 1;
                    const hash2 = Math.abs(Math.sin(gx * 39.346 + gy * 11.135) * 29183.123) % 1;
                    const hash3 = Math.abs(Math.sin(gx * 73.156 + gy * 52.719) * 19283.456) % 1;

                    const tx = gx + (hash1 - 0.5) * spacing * 0.72;
                    const ty = gy + (hash2 - 0.5) * spacing * 0.72;

                    if (this.isPointInPolygon(tx, ty, polyPts)) {
                        candidateTrees.push({
                            cx: tx,
                            cy: ty,
                            radius: (26 + hash3 * 24) * (0.85 + 0.15 * Math.min(1.5, 1 / Math.sqrt(qty))) * elScale,
                            aspect: 0.88 + (hash1 * 0.22),
                            phase: hash1 * Math.PI * 2,
                            lobes: 6 + Math.floor(hash2 * 4),
                            hash: hash3
                        });
                    }
                }
            }
        } else if (splineSamples.length >= 2) {
            // Curved Treeline / Hedgerow Mode: populate trees along the spline ribbon
            const stepDist = Math.max(2, Math.round(4 / Math.sqrt(qty)));
            for (let i = 1; i < splineSamples.length - 1; i += stepDist) {
                const s = splineSamples[i];
                const rowCount = Math.max(1, Math.round((s.w / 75) * Math.sqrt(qty)));
                for (let r = 0; r < rowCount; r++) {
                    const seed = i * 137 + r * 491;
                    const h1 = Math.abs(Math.sin(seed * 12.9898) * 43758.5453) % 1;
                    const h2 = Math.abs(Math.cos(seed * 78.233) * 29183.123) % 1;
                    const lat = rowCount === 1 ? (h1 - 0.5) * 0.35 : ((r / (rowCount - 1)) - 0.5) * 0.75;
                    candidateTrees.push({
                        cx: s.x + s.nx * (lat * s.w),
                        cy: s.y + s.ny * (lat * s.w),
                        radius: (26 + h2 * 22) * elScale,
                        aspect: 0.9 + h1 * 0.2,
                        phase: h1 * Math.PI * 2,
                        lobes: 6 + (seed % 4),
                        hash: h2
                    });
                }
            }
        }

        // Sort by Y for top-down 2.5D canopy occlusion
        candidateTrees.sort((a, b) => a.cy - b.cy);

        const forestWindX = (Math.sin(time * 1.1 * speed) * 0.65 + Math.sin(time * 0.55 * speed) * 0.35) * 9.5 * intensity;
        const forestWindY = (Math.cos(time * 0.95 * speed) * 0.6 + Math.sin(time * 0.7 * speed) * 0.4) * 7.5 * intensity;
        const baseOpacity = cfg.opacity !== undefined ? cfg.opacity : 0.96;

        // 3. Render Each Top-Down Tree with Fractal Botanical Architecture
        for (let t = 0; t < candidateTrees.length; t++) {
            const tree = candidateTrees[t];
            const cx = tree.cx;
            const cy = tree.cy;
            const rx = tree.radius;
            const ry = tree.radius * tree.aspect;
            const localSwayX = forestWindX + Math.sin(time * 1.8 * speed + tree.phase) * (rx * 0.08) * intensity;
            const localSwayY = forestWindY + Math.cos(time * 1.5 * speed + tree.phase) * (ry * 0.06) * intensity;
            const localRot = Math.sin(time * 1.4 * speed + tree.phase) * 0.07 * intensity;

            // Fractal Dappled Ground Shadow
            ctx.fillStyle = pal.shadow;
            this.traceFractalLobe(
                ctx,
                cx + rx * 0.16 + localSwayX * 0.4,
                cy + ry * 0.22 + localSwayY * 0.4,
                rx * 0.90,
                ry * 0.86,
                localRot * 0.4,
                rough * 0.85,
                tree.phase + 0.5,
                22
            );
            ctx.fill();

            if (variant === 'boreal_pine') {
                // Conifer Multi-Octave Needle-Bough Whorls tapering smoothly across 4 layered evergreen tiers
                const tiers = [
                    { color: pal.deep, r: rx * 0.98, points: 11, sway: 0.48, alpha: 0.95 },
                    { color: pal.mid, r: rx * 0.75, points: 10, sway: 0.80, alpha: 0.94 },
                    { color: pal.light, r: rx * 0.53, points: 9, sway: 1.12, alpha: 0.92 },
                    { color: pal.highlight, r: rx * 0.31, points: 7, sway: 1.40, alpha: 0.90 }
                ];
                tiers.forEach((tier, ti) => {
                    ctx.fillStyle = tier.color;
                    ctx.globalAlpha = tier.alpha * baseOpacity;
                    ctx.beginPath();
                    const scx = cx + localSwayX * tier.sway;
                    const scy = cy + localSwayY * tier.sway;
                    const subSteps = 96;
                    for (let p = 0; p <= subSteps; p++) {
                        const theta = (p / subSteps) * Math.PI * 2;
                        const ang = theta + tree.phase + ti * 0.42 + localRot * (1 + ti * 0.12);
                        const primaryWhorl = 0.72 + 0.28 * Math.cos(theta * tier.points);
                        const subWhorl = 0.14 * Math.sin(theta * tier.points * 3 + tree.phase + ti * 1.3);
                        const needleBristle = 0.09 * Math.cos(theta * tier.points * 7 - tree.phase * 1.7 + ti)
                            + 0.06 * (1.0 - 2.0 * Math.abs(Math.sin(theta * (tier.points * 2 + 3) + tree.phase)));
                        const rad = tier.r * Math.max(0.28, primaryWhorl + rough * (subWhorl + needleBristle));
                        const px = scx + Math.cos(ang) * rad;
                        const py = scy + Math.sin(ang) * (rad * (ry / rx));
                        if (p === 0) ctx.moveTo(px, py);
                        else ctx.lineTo(px, py);
                    }
                    ctx.closePath();
                    ctx.fill();
                });
                // Central pine leader spire
                ctx.fillStyle = pal.highlight;
                this.traceFractalLobe(ctx, cx + localSwayX * 1.5, cy + localSwayY * 1.5, Math.max(2.5, rx * 0.12), Math.max(2.5, ry * 0.12), localRot, rough * 0.6, tree.phase, 14);
                ctx.fill();
            } else if (variant === 'tropical_jungle') {
                // Multi-Tiered Radiating Tropical Palm Crown (Understory Shade Fronds -> Upper Sunlit Fronds)
                const palmTiers = [
                    { count: 7, lenMult: 0.96, widthMult: 0.26, sway: 0.65, colEven: pal.deep, colOdd: pal.mid, alpha: 0.92, rotOff: 0 },
                    { count: 7, lenMult: 0.82, widthMult: 0.23, sway: 1.05, colEven: pal.mid, colOdd: pal.light, alpha: 0.94, rotOff: 0.45 }
                ];
                palmTiers.forEach((pt, pti) => {
                    for (let f = 0; f < pt.count; f++) {
                        const fAng = (f / pt.count) * Math.PI * 2 + tree.phase + pt.rotOff + localRot * (1.0 + pti * 0.35);
                        const fLen = rx * pt.lenMult * (0.86 + 0.14 * Math.sin(f * 2.3 + tree.phase + pti));
                        const fDroop = Math.sin(time * 2.2 * speed + f + pti) * rx * 0.045 * intensity;
                        ctx.save();
                        ctx.translate(cx + localSwayX * pt.sway, cy + localSwayY * pt.sway);
                        ctx.rotate(fAng);
                        ctx.fillStyle = (f % 2 === 0) ? pt.colEven : pt.colOdd;
                        ctx.globalAlpha = pt.alpha * baseOpacity;

                        ctx.beginPath();
                        ctx.moveTo(0, 0);
                        const segs = 28;
                        for (let s = 1; s <= segs; s++) {
                            const u = s / segs;
                            const env = Math.sin(u * Math.PI) * rx * pt.widthMult;
                            const leafletNotch = (Math.sin(u * Math.PI * 14 + f) * 0.65 + (1.0 - 2.0 * Math.abs(Math.cos(u * Math.PI * 9 - f))) * 0.35);
                            const riffle = rough * rx * 0.068 * Math.sin(u * Math.PI) * leafletNotch;
                            ctx.lineTo(u * fLen, -Math.max(0.5, env + riffle) + fDroop * u);
                        }
                        ctx.lineTo(fLen * 1.03, fDroop);
                        for (let s = segs; s >= 1; s--) {
                            const u = s / segs;
                            const env = Math.sin(u * Math.PI) * rx * pt.widthMult;
                            const leafletNotch = (Math.cos(u * Math.PI * 14 + f) * 0.65 + (1.0 - 2.0 * Math.abs(Math.sin(u * Math.PI * 9 + f))) * 0.35);
                            const riffle = rough * rx * 0.068 * Math.sin(u * Math.PI) * leafletNotch;
                            ctx.lineTo(u * fLen, Math.max(0.5, env + riffle) + fDroop * u);
                        }
                        ctx.closePath();
                        ctx.fill();

                        // Central frond spine (rachis)
                        ctx.strokeStyle = pal.highlight;
                        ctx.lineWidth = Math.max(1.0, rx * 0.028);
                        ctx.beginPath();
                        ctx.moveTo(0, 0);
                        ctx.quadraticCurveTo(fLen * 0.5, fDroop * 0.5, fLen * 0.92, fDroop);
                        ctx.stroke();
                        ctx.restore();
                    }
                });
                // Central coconut cluster
                ctx.fillStyle = pal.trunk;
                ctx.globalAlpha = 0.95 * baseOpacity;
                for (let c = 0; c < 3; c++) {
                    const ca = (c / 3) * Math.PI * 2 + tree.phase;
                    ctx.beginPath();
                    ctx.arc(cx + localSwayX + Math.cos(ca) * rx * 0.07, cy + localSwayY + Math.sin(ca) * rx * 0.07, rx * 0.085, 0, Math.PI * 2);
                    ctx.fill();
                }
            } else if (variant === 'haunted_deadwood') {
                // Recursive Fractal Skeletal Gnarled Deadwood Branches & Tattered Spanish Moss
                ctx.globalAlpha = 0.95 * baseOpacity;
                const branches = 6 + (tree.lobes % 3);
                const maxDepth = rough > 0.85 ? 4 : (rough > 0.45 ? 3 : 2);
                for (let b = 0; b < branches; b++) {
                    const bAng = (b / branches) * Math.PI * 2 + tree.phase + localRot;
                    const bLen = rx * (0.52 + 0.14 * Math.sin(b * 2.1 + tree.phase));
                    this.drawFractalTwigBranch(
                        ctx,
                        cx + localSwayX * 0.35,
                        cy + localSwayY * 0.35,
                        bLen,
                        bAng,
                        Math.max(2.4, rx * 0.11),
                        maxDepth,
                        rough,
                        tree.phase + b * 1.9,
                        pal.trunk
                    );
                }
                // Gnarled central trunk burl
                ctx.fillStyle = pal.trunk;
                this.traceFractalLobe(ctx, cx + localSwayX * 0.35, cy + localSwayY * 0.35, rx * 0.20, ry * 0.19, localRot, rough, tree.phase, 14);
                ctx.fill();

                // Tattered fractal Spanish moss wisps layered in two depth tiers
                ctx.fillStyle = pal.mid;
                ctx.globalAlpha = 0.68 * baseOpacity;
                for (let m = 0; m < 5; m++) {
                    const ma = (m / 5) * Math.PI * 2 + tree.phase;
                    const mx = cx + localSwayX * 0.95 + Math.cos(ma) * rx * 0.42;
                    const my = cy + localSwayY * 0.95 + Math.sin(ma) * ry * 0.42;
                    this.traceFractalLobe(ctx, mx, my, rx * 0.26, rx * 0.14, ma + localRot, Math.max(0.3, rough), tree.phase + m, 14);
                    ctx.fill();
                }
                ctx.fillStyle = pal.highlight;
                ctx.globalAlpha = 0.62 * baseOpacity;
                for (let m = 0; m < 5; m++) {
                    const ma = (m / 5) * Math.PI * 2 + tree.phase + 0.5;
                    const mx = cx + localSwayX * 1.15 + Math.cos(ma) * rx * 0.48;
                    const my = cy + localSwayY * 1.15 + Math.sin(ma) * ry * 0.48;
                    this.traceFractalLobe(ctx, mx, my, rx * 0.22, rx * 0.11, ma + localRot, Math.max(0.35, rough), tree.phase + m + 2.1, 14);
                    ctx.fill();
                }
            } else if (variant === 'alien_fungal') {
                // Giant Bioluminescent Myconid Spore-Cap Mushroom with Multi-Tier Ruffled Fractal Margin
                const capX = cx + localSwayX * 0.85;
                const capY = cy + localSwayY * 0.85;
                ctx.globalAlpha = 0.95 * baseOpacity;
                ctx.fillStyle = pal.deep;
                this.traceFractalLobe(ctx, capX, capY, rx * 0.90, ry * 0.86, localRot, rough * 0.95, tree.phase, 26);
                ctx.fill();

                ctx.fillStyle = pal.mid;
                this.traceFractalLobe(ctx, capX - rx * 0.03, capY - ry * 0.03, rx * 0.70, ry * 0.67, localRot + 0.3, rough * 0.85, tree.phase + 1.7, 24);
                ctx.fill();

                ctx.fillStyle = pal.light;
                this.traceFractalLobe(ctx, capX - rx * 0.06, capY - ry * 0.06, rx * 0.46, ry * 0.44, localRot + 0.6, rough * 0.75, tree.phase + 3.1, 20);
                ctx.fill();

                // Wavy organic radial gill striations
                ctx.strokeStyle = 'rgba(45, 10, 68, 0.44)';
                ctx.lineWidth = Math.max(1.0, rx * 0.024);
                const gillCount = 14;
                for (let g = 0; g < gillCount; g++) {
                    const ga = (g / gillCount) * Math.PI * 2 + localRot;
                    const gBend = Math.sin(g * 2.3 + tree.phase) * rough * rx * 0.10;
                    ctx.beginPath();
                    ctx.moveTo(capX + Math.cos(ga) * rx * 0.18, capY + Math.sin(ga) * ry * 0.18);
                    ctx.quadraticCurveTo(
                        capX + Math.cos(ga + 0.15) * rx * 0.48 + gBend,
                        capY + Math.sin(ga + 0.15) * ry * 0.48 + gBend,
                        capX + Math.cos(ga) * rx * 0.78,
                        capY + Math.sin(ga) * ry * 0.76
                    );
                    ctx.stroke();
                }

                // Glowing cyan/teal bioluminescent fractal pustule clusters
                const pulse = 0.65 + 0.35 * Math.sin(time * 3 + tree.phase);
                ctx.fillStyle = pal.highlight;
                ctx.globalAlpha = pulse * baseOpacity;
                for (let sp = 0; sp < 7; sp++) {
                    const sa = (sp / 7) * Math.PI * 2 + tree.phase;
                    const sd = rx * (0.32 + (sp % 3) * 0.16);
                    const spx = capX + Math.cos(sa) * sd;
                    const spy = capY + Math.sin(sa) * sd;
                    const spR = rx * (0.09 + 0.03 * Math.sin(sp * 1.9));
                    this.traceFractalLobe(ctx, spx, spy, spR, spR * 0.9, sa, rough * 0.7, tree.phase + sp, 12);
                    ctx.fill();
                }
            } else {
                // Deciduous Billowy 4-Tier Fractal Canopy (Ancient Oak, Autumn Maple, Sacred Cherry Blossom)
                // 1. Interior Forked Trunk & Boughs peeking through understory foliage
                ctx.globalAlpha = 0.85 * baseOpacity;
                const boughDepth = rough > 0.65 ? 3 : 2;
                for (let b = 0; b < 5; b++) {
                    const bAng = (b / 5) * Math.PI * 2 + tree.phase + localRot * 0.5;
                    this.drawFractalTwigBranch(
                        ctx,
                        cx + localSwayX * 0.25,
                        cy + localSwayY * 0.25,
                        rx * 0.48,
                        bAng,
                        Math.max(2, rx * 0.08),
                        boughDepth,
                        rough,
                        tree.phase + b,
                        pal.trunk
                    );
                }

                // 2. Multi-Tiered Billowing Foliage Crown (Deep Understory -> Mid Boughs -> Sunlit Crown -> Top Highlights)
                const tiers = [
                    { color: pal.deep, count: tree.lobes, rMult: 0.54, sizeMult: 0.52, centerMult: 0.62, sway: 0.65, alpha: 0.95 },
                    { color: pal.mid, count: tree.lobes + 1, rMult: 0.42, sizeMult: 0.45, centerMult: 0.48, sway: 0.90, alpha: 0.93 },
                    { color: pal.light, count: tree.lobes, rMult: 0.29, sizeMult: 0.38, centerMult: 0.35, sway: 1.15, alpha: 0.90 },
                    { color: pal.highlight, count: Math.max(4, tree.lobes - 1), rMult: 0.16, sizeMult: 0.29, centerMult: 0.22, sway: 1.35, alpha: 0.86 }
                ];

                for (let ti = 0; ti < tiers.length; ti++) {
                    const tier = tiers[ti];
                    const tierCx = cx + localSwayX * tier.sway;
                    const tierCy = cy + localSwayY * tier.sway;

                    // Deep inter-bough crevice shadows tucked under upper canopy tiers for rich 3D layering
                    if (ti === 1 && rough > 0.2) {
                        ctx.fillStyle = pal.shadow;
                        ctx.globalAlpha = Math.min(0.65, 0.28 + rough * 0.18) * baseOpacity;
                        for (let c = 0; c < tier.count; c++) {
                            const cAng = ((c + 0.5) / tier.count) * Math.PI * 2 + tree.phase;
                            const cxOff = tierCx + Math.cos(cAng + localRot) * rx * 0.46;
                            const cyOff = tierCy + Math.sin(cAng + localRot) * ry * 0.46;
                            this.traceFractalLobe(ctx, cxOff, cyOff, rx * 0.22, ry * 0.20, cAng, rough * 0.9, tree.phase + c * 2.1, 14);
                            ctx.fill();
                        }
                    }

                    ctx.fillStyle = tier.color;
                    ctx.globalAlpha = tier.alpha * baseOpacity;

                    // Central cohesive canopy dome for this tier
                    this.traceFractalLobe(
                        ctx,
                        tierCx,
                        tierCy,
                        rx * tier.centerMult,
                        ry * tier.centerMult,
                        localRot + ti * 0.4,
                        rough * 0.85,
                        tree.phase + ti * 2.3,
                        20
                    );
                    ctx.fill();

                    // Ring of billowing fractal leaf-cluster lobes + peripheral sub-clump leaf tufts around this tier
                    for (let l = 0; l < tier.count; l++) {
                        const lAng = (l / tier.count) * Math.PI * 2 + ti * 0.48 + tree.phase;
                        const flutter = Math.sin(time * 2.5 * speed + l * 2.1 + tree.phase) * (rx * 0.035) * intensity;
                        const lx = tierCx + Math.cos(lAng + localRot) * rx * tier.rMult + flutter;
                        const ly = tierCy + Math.sin(lAng + localRot) * ry * tier.rMult - flutter * 0.5;
                        const lobeRx = rx * tier.sizeMult * (0.88 + 0.12 * Math.sin(l * 1.9 + ti));
                        const lobeRy = ry * tier.sizeMult * (0.86 + 0.12 * Math.cos(l * 2.3 + ti));

                        this.traceFractalLobe(
                            ctx,
                            lx,
                            ly,
                            lobeRx,
                            lobeRy,
                            lAng + localRot,
                            rough,
                            tree.phase + ti * 3.1 + l * 1.37,
                            20
                        );
                        ctx.fill();

                        // Secondary fractal sub-clump leaf tufts on the outer rim of each bough
                        if (rough > 0.25 && ti < 3) {
                            for (let sub = -1; sub <= 1; sub += 2) {
                                const subAng = lAng + localRot + sub * (0.38 + 0.08 * rough);
                                const subX = lx + Math.cos(subAng) * lobeRx * 0.62;
                                const subY = ly + Math.sin(subAng) * lobeRy * 0.62;
                                this.traceFractalLobe(
                                    ctx,
                                    subX,
                                    subY,
                                    lobeRx * 0.52,
                                    lobeRy * 0.50,
                                    subAng,
                                    rough * 1.05,
                                    tree.phase + ti * 5.3 + l * 2.7 + sub,
                                    16
                                );
                                ctx.fill();
                            }
                        }
                    }
                }
            }
        }

        // 4. Drifting Windblown Leaves / Petals / Spores across the Deformable Forest
        ctx.globalAlpha = 0.88 * baseOpacity;
        ctx.fillStyle = pal.leaf;
        const leafCount = Math.min(45, Math.max(8, Math.round(18 * qty)));
        for (let lp = 0; lp < leafCount; lp++) {
            const lx = minX + ((lp * 97 + time * 28 * speed) % Math.max(40, width));
            const ly = minY + ((lp * 61 + time * 14 * speed + Math.sin(time * 2 + lp) * 18) % Math.max(40, height));
            if (isPolygon && polyPts.length >= 3 && !this.isPointInPolygon(lx, ly, polyPts)) continue;
            ctx.save();
            ctx.translate(lx, ly);
            ctx.rotate(time * 2.2 + lp);
            this.traceFractalLobe(ctx, 0, 0, 3.6 * elScale, 1.8 * elScale, 0, rough * 0.65, lp * 1.7, 10);
            ctx.fill();
            ctx.restore();
        }

        // 5. Selection Perimeter Outline & Control Hull when Selected
        if (el.id === this.selectedElementId && !this.isLocked) {
            ctx.save();
            ctx.globalAlpha = 1.0;
            if (isPolygon && nodes.length >= 3) {
                this.traceSmoothClosedPolygon(ctx, nodes, 1.0);
                ctx.strokeStyle = 'rgba(74, 222, 128, 0.72)';
                ctx.lineWidth = 1.8;
                ctx.setLineDash([6, 4]);
                ctx.stroke();

                ctx.strokeStyle = 'rgba(0, 255, 200, 0.32)';
                ctx.setLineDash([2, 3]);
                ctx.beginPath();
                nodes.forEach((n, idx) => {
                    if (idx === 0) ctx.moveTo(n.dx, n.dy);
                    else ctx.lineTo(n.dx, n.dy);
                });
                ctx.closePath();
                ctx.stroke();
            } else if (splineSamples.length >= 2) {
                this.traceSplineRibbonPath(ctx, splineSamples, 1.0);
                ctx.strokeStyle = 'rgba(74, 222, 128, 0.72)';
                ctx.lineWidth = 1.8;
                ctx.setLineDash([6, 4]);
                ctx.stroke();
            }
            ctx.restore();
        }

        ctx.restore();
    }

    // ========================================================================
    // 4. PHOTOREALISTIC DESERT TUMBLEWEEDS (Fractal Tangled Briar Cage)
    // ========================================================================
    drawRealisticTumbleweed(el, ctx, W, H, dt) {
        if (!el.particles) el.particles = [];
        if (!el.dustParticles) el.dustParticles = [];

        const cfg = el.config || {};
        const baseCount = cfg.count !== undefined ? cfg.count : 12;
        const qty = cfg.quantity !== undefined ? cfg.quantity : 1.0;
        const targetCount = Math.max(1, Math.min(50, Math.round(baseCount * qty)));
        const speed = (cfg.speed || 1.8) * 85;
        const elScale = Math.max(0.25, Math.min(3.0, parseFloat(cfg.elementScale !== undefined ? cfg.elementScale : (cfg.scale !== undefined ? cfg.scale : 1.0)) || 1.0));
        const rough = Math.max(0, Math.min(2.0, parseFloat(cfg.fractalRoughness !== undefined ? cfg.fractalRoughness : 0.75)));

        // Trim if entity count decreased
        if (el.particles.length > targetCount) {
            el.particles.length = targetCount;
        }

        const isInitial = el.particles.length === 0;
        while (el.particles.length < targetCount) {
            const baseRadius = 18 + Math.random() * 16;
            const radius = baseRadius * elScale;
            // On initial spawn, distribute tumbleweeds across the full width [0, W]
            const initX = isInitial
                ? (Math.random() * W)
                : (-Math.random() * W * 0.4 - radius * 2);

            el.particles.push({
                x: initX,
                y: 20 + Math.random() * Math.max(20, H - 40),
                baseRadius: baseRadius,
                radius: radius,
                rotation: Math.random() * Math.PI * 2,
                dustCooldown: Math.random() * 0.3,
                seed: Math.floor(Math.random() * 1000)
            });
        }

        // 1. Update and render Fractal Ground Dust Puffs kick-up
        for (let d = el.dustParticles.length - 1; d >= 0; d--) {
            const dp = el.dustParticles[d];
            dp.life -= dt * 1.8;
            dp.x += dp.vx * dt;
            dp.y += dp.vy * dt;
            dp.size += dt * 14 * elScale;

            if (dp.life <= 0) {
                el.dustParticles.splice(d, 1);
                continue;
            }

            ctx.save();
            ctx.fillStyle = `rgba(200, 175, 135, ${dp.life * 0.28})`;
            this.traceFractalLobe(ctx, dp.x, dp.y, dp.size * 1.15, dp.size * 0.85, dp.life * 2, rough * 0.8, d * 1.7, 14);
            ctx.fill();
            ctx.restore();
        }

        // 2. Render each Tumbleweed with Live Element Scale & Fractal Briar Brambles
        for (let i = 0; i < el.particles.length; i++) {
            const tw = el.particles[i];
            if (!tw.baseRadius) tw.baseRadius = tw.radius || 22;
            const r = tw.baseRadius * elScale;
            tw.radius = r;

            tw.x += speed * dt;

            const rotSpeed = speed / Math.max(8, r);
            tw.rotation += rotSpeed * dt;

            const terrainMicroBump = Math.sin(tw.x * 0.08 + tw.seed) * 2.5 * elScale;
            const currentY = tw.y + terrainMicroBump;

            tw.dustCooldown -= dt;
            if (tw.dustCooldown <= 0 && cfg.dustPuffs !== false) {
                el.dustParticles.push({
                    x: tw.x - r * 0.4,
                    y: currentY + r * 0.85,
                    vx: -speed * 0.2,
                    vy: -(Math.random() * 8),
                    size: (3 + Math.random() * 4) * elScale,
                    life: 1.0
                });
                tw.dustCooldown = 0.25 + Math.random() * 0.3;
            }

            if (tw.x > W + r * 2) {
                tw.x = -r * 2 - Math.random() * 60;
                tw.y = 20 + Math.random() * Math.max(20, H - 40);
            }

            // Soft Fractal Ground Shadow
            ctx.save();
            ctx.fillStyle = 'rgba(40, 28, 18, 0.34)';
            this.traceFractalLobe(ctx, tw.x + 4 * elScale, currentY + r * 0.86, r * 0.88, r * 0.30, 0.1, rough * 0.75, tw.seed, 16);
            ctx.fill();
            ctx.restore();

            // Render 3D Tangled Fractal Briar & Thistle Cage
            ctx.save();
            ctx.translate(tw.x, currentY);
            ctx.rotate(tw.rotation);

            const colDeep = '#4f3c28';
            const colMid = '#7d6645';
            const colLight = '#a89068';
            const colHighlight = '#cbb48c';

            // A. Central Gnarled Root Knot
            ctx.fillStyle = colDeep;
            this.traceFractalLobe(ctx, 0, 0, r * 0.22, r * 0.18, tw.seed, Math.max(0.3, rough), tw.seed, 12);
            ctx.fill();

            // B. Recursive Bifurcating Woody Stems (Fractal Twig Branches)
            const mainBranches = 7 + Math.floor(rough * 6);
            const branchDepth = rough > 0.9 ? 4 : (rough > 0.45 ? 3 : 2);
            const baseStemWidth = Math.max(1.2, r * 0.068);
            for (let b = 0; b < mainBranches; b++) {
                const bAng = (Math.PI * 2 / mainBranches) * b + Math.sin(b * 2.3 + tw.seed) * 0.22;
                const bLen = r * (0.46 + 0.14 * Math.sin(b * 3.1 + tw.seed));
                this.drawFractalTwigBranch(
                    ctx,
                    0,
                    0,
                    bLen,
                    bAng,
                    baseStemWidth,
                    branchDepth,
                    rough,
                    tw.seed + b * 1.73,
                    (b % 2 === 0) ? colDeep : colMid
                );
            }

            // C. 6 Foreshortened 3D Fractal-Perturbed Briar Cage Hoops
            ctx.lineWidth = Math.max(1.0, r * 0.045);
            const hoopCount = 6;
            for (let h = 0; h < hoopCount; h++) {
                ctx.strokeStyle = (h % 2 === 0) ? colMid : colLight;
                const hRot = (Math.PI / hoopCount) * h + (tw.seed % 3) * 0.2;
                const hoopRx = r * (0.86 + 0.08 * Math.sin(h * 1.9));
                const hoopRy = r * (0.48 + 0.18 * Math.cos(h * 2.3));
                this.traceFractalLobe(
                    ctx,
                    0,
                    0,
                    hoopRx,
                    hoopRy,
                    hRot,
                    Math.max(0.18, rough * 0.92),
                    tw.seed + h * 4.1,
                    24
                );
                ctx.stroke();
            }

            // D. Outer Hooked Bramble Spurs & Dry Thistle Barbs
            const spurCount = Math.round(20 + rough * 22);
            ctx.strokeStyle = colHighlight;
            ctx.lineWidth = Math.max(0.85, r * 0.032);
            ctx.beginPath();
            for (let t = 0; t < spurCount; t++) {
                const angle = (Math.PI * 2 / spurCount) * t;
                const rInner = r * (0.56 + 0.16 * Math.sin(t * 3.7 + tw.seed));
                const rOuter = r * (0.86 + 0.24 * this.fractalHarmonicMod(angle, tw.seed + t, rough));
                const midAng = angle + (t % 2 === 0 ? 1 : -1) * (0.16 + rough * 0.20);
                const x0 = Math.cos(angle) * rInner;
                const y0 = Math.sin(angle) * rInner;
                const xm = Math.cos(midAng) * ((rInner + rOuter) * 0.52);
                const ym = Math.sin(midAng) * ((rInner + rOuter) * 0.52);
                const tipX = Math.cos(angle) * rOuter;
                const tipY = Math.sin(angle) * rOuter;
                ctx.moveTo(x0, y0);
                ctx.quadraticCurveTo(xm, ym, tipX, tipY);
                // Hooked bramble barb at tip
                const barbLen = Math.max(2.0, r * (0.09 + rough * 0.09));
                ctx.lineTo(tipX + Math.sin(angle) * barbLen, tipY - Math.cos(angle) * barbLen);
                // Secondary lateral thorn spur on midpoint when rough > 0.35
                if (rough > 0.35) {
                    const latDir = (t % 2 === 0 ? 1 : -1);
                    ctx.moveTo(xm, ym);
                    ctx.lineTo(xm + Math.cos(midAng + latDir * 0.85) * barbLen * 0.85, ym + Math.sin(midAng + latDir * 0.85) * barbLen * 0.85);
                }
            }
            ctx.stroke();

            ctx.restore();
        }
    }

    // ========================================================================
    // 4B. CASCADING WATERFALL ('waterfall') - Seamless Phase-Continuous Loop
    // ========================================================================
    getWaterfallPalette(variant = 'mountain_falls') {
        if (variant === 'cavern_falls') {
            return {
                deep: '10, 38, 62',
                mid: '22, 88, 128',
                crest: '135, 225, 250',
                foam: '220, 248, 255',
                mist: '175, 230, 250',
                rock: '#1c242b'
            };
        } else if (variant === 'swamp_spillway') {
            return {
                deep: '24, 48, 30',
                mid: '46, 88, 52',
                crest: '145, 195, 130',
                foam: '215, 238, 195',
                mist: '175, 205, 160',
                rock: '#25291e'
            };
        } else if (variant === 'lava_falls') {
            return {
                deep: '115, 18, 6',
                mid: '215, 58, 12',
                crest: '255, 165, 35',
                foam: '255, 240, 150',
                mist: '255, 120, 40',
                rock: '#1d1412'
            };
        }
        // Default 'mountain_falls'
        return {
            deep: '16, 68, 108',
            mid: '38, 132, 185',
            crest: '165, 232, 255',
            foam: '242, 252, 255',
            mist: '220, 245, 255',
            rock: '#2c333a'
        };
    }

    // ========================================================================
    // 4B. TRUE 90° TOP-DOWN ORTHOGRAPHIC WATERFALL / CLIFF CHUTE ('waterfall')
    // ========================================================================
    drawRealisticWaterfall(el, ctx, W, H, dt) {
        const time = el.stateTime;
        const intensity = el.config.intensity || 1.0;
        const pal = this.getWaterfallPalette(el.config.variant || 'mountain_falls');

        const cliffY = H * 0.38;
        const plungeY = H * 0.52;
        const poolH = H - plungeY;
        const cx = W * 0.5;
        const fallW = W * 0.78;
        const leftX = (W - fallW) * 0.5;
        const rightX = leftX + fallW;

        ctx.save();

        // 1. Lower Plunge Pool Basin (Deep water receiver at lower elevation)
        const poolGrad = ctx.createRadialGradient(cx, plungeY + poolH * 0.45, fallW * 0.08, cx, plungeY + poolH * 0.45, fallW * 0.65);
        poolGrad.addColorStop(0, `rgba(${pal.deep}, 0.95)`);
        poolGrad.addColorStop(0.55, `rgba(${pal.mid}, 0.88)`);
        poolGrad.addColorStop(1, `rgba(${pal.deep}, 0.75)`);
        ctx.fillStyle = poolGrad;
        ctx.beginPath();
        ctx.rect(0, cliffY, W, H - cliffY);
        ctx.fill();

        // 2. Seamless Expanding Circular/Elliptical Ripple Waves in Plunge Pool
        const rippleCount = 5;
        for (let r = 0; r < rippleCount; r++) {
            const phase = (time * 0.55 + r / rippleCount) % 1.0;
            const rAlpha = Math.sin(phase * Math.PI) * 0.48 * intensity;
            const rWidth = fallW * (0.20 + phase * 0.75);
            const rHeight = poolH * (0.25 + phase * 0.65);
            ctx.strokeStyle = `rgba(${pal.foam}, ${rAlpha})`;
            ctx.lineWidth = Math.max(1.2, (2.8 - phase * 1.8));
            ctx.beginPath();
            ctx.ellipse(cx, plungeY + phase * poolH * 0.35, rWidth * 0.5, rHeight * 0.5, 0, 0, Math.PI * 2);
            ctx.stroke();
        }

        // 3. Upper River Channel Shelf (Top-down upper river flowing towards the cliff lip)
        const upperGrad = ctx.createLinearGradient(0, 0, 0, cliffY);
        upperGrad.addColorStop(0, `rgba(${pal.deep}, 0.92)`);
        upperGrad.addColorStop(0.65, `rgba(${pal.mid}, 0.90)`);
        upperGrad.addColorStop(1, `rgba(${pal.crest}, 0.95)`);
        ctx.fillStyle = upperGrad;
        ctx.beginPath();
        ctx.rect(leftX, 0, fallW, cliffY);
        ctx.fill();

        // Upper water flow streamlines accelerating toward the cliff edge
        const streamCount = Math.max(4, Math.floor(12 * (el.config.quantity || 1.0)));
        ctx.lineCap = 'round';
        for (let s = 0; s < streamCount; s++) {
            const laneFrac = (s + 0.5) / streamCount;
            const xPos = leftX + laneFrac * fallW;
            const flowPhase = (time * (1.1 + (s % 3) * 0.25) + s * 0.18) % 1.0;
            const y1 = flowPhase * cliffY * 0.7;
            const y2 = Math.min(cliffY, y1 + cliffY * 0.35);

            ctx.strokeStyle = `rgba(${pal.foam}, ${0.45 * Math.sin(flowPhase * Math.PI) * intensity})`;
            ctx.lineWidth = Math.max(1.5, fallW * 0.014);
            ctx.beginPath();
            ctx.moveTo(xPos + Math.sin(time * 3 + s) * 4, y1);
            ctx.lineTo(xPos + Math.sin(time * 3 + s + 1) * 4, y2);
            ctx.stroke();
        }

        // 4. Exposed Rocky Cliff Precipice & Boulders framing the drop edge
        const rockCount = 9;
        ctx.fillStyle = pal.rock || '#252b30';
        for (let b = 0; b < rockCount; b++) {
            const bx = leftX + (b / (rockCount - 1)) * fallW;
            const by = cliffY + Math.sin(b * 1.8) * (H * 0.02);
            const brx = (fallW / rockCount) * 0.65;
            const bry = H * 0.038;
            ctx.beginPath();
            ctx.ellipse(bx, by, brx, bry, (b % 3 - 1) * 0.2, 0, Math.PI * 2);
            ctx.fill();

            // Wet rock specular highlight
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.22)';
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.arc(bx, by - 2, brx * 0.6, Math.PI * 1.1, Math.PI * 1.9);
            ctx.stroke();
        }

        // Flanking riverbank boulders
        ctx.fillStyle = pal.rock || '#252b30';
        ctx.beginPath();
        ctx.ellipse(leftX - 8, cliffY, fallW * 0.12, H * 0.08, 0, 0, Math.PI * 2);
        ctx.ellipse(rightX + 8, cliffY, fallW * 0.12, H * 0.08, 0, 0, Math.PI * 2);
        ctx.fill();

        // 5. Plunging Chute & Whitewater Cascades Spilling over the Cliff Lip
        const chuteGrad = ctx.createLinearGradient(0, cliffY, 0, plungeY);
        chuteGrad.addColorStop(0, `rgba(${pal.crest}, 0.95)`);
        chuteGrad.addColorStop(0.5, `rgba(${pal.foam}, 0.98)`);
        chuteGrad.addColorStop(1, `rgba(${pal.foam}, 0.90)`);
        ctx.fillStyle = chuteGrad;
        ctx.beginPath();
        ctx.moveTo(leftX + fallW * 0.02, cliffY);
        ctx.lineTo(rightX - fallW * 0.02, cliffY);
        ctx.lineTo(rightX + fallW * 0.04, plungeY);
        ctx.lineTo(leftX - fallW * 0.04, plungeY);
        ctx.closePath();
        ctx.fill();

        // Falling torrent streaks across the chute
        const chuteStreams = Math.max(6, Math.floor(18 * intensity * (el.config.quantity || 1.0)));
        for (let c = 0; c < chuteStreams; c++) {
            const laneFrac = (c + 0.5) / chuteStreams;
            const cPhase = (time * (1.6 + (c % 4) * 0.2) + c * 0.15) % 1.0;
            const cx1 = leftX + laneFrac * fallW + Math.sin(time * 4 + c) * 3;
            const cy1 = cliffY + cPhase * (plungeY - cliffY);
            const cy2 = Math.min(plungeY, cy1 + (plungeY - cliffY) * 0.5);

            ctx.strokeStyle = (c % 2 === 0) ? `rgba(${pal.foam}, 0.90)` : `rgba(255, 255, 255, 0.95)`;
            ctx.lineWidth = Math.max(1.8, fallW * 0.022);
            ctx.beginPath();
            ctx.moveTo(cx1, cy1);
            ctx.lineTo(cx1 + (laneFrac - 0.5) * 6, cy2);
            ctx.stroke();
        }

        // 6. Intense Boiling White-Water Plunge Impact Foam
        const foamGrad = ctx.createRadialGradient(cx, plungeY + 4, 2, cx, plungeY + 4, fallW * 0.52);
        foamGrad.addColorStop(0, `rgba(${pal.foam}, 0.96)`);
        foamGrad.addColorStop(0.48, `rgba(${pal.foam}, 0.82)`);
        foamGrad.addColorStop(0.85, `rgba(${pal.crest}, 0.40)`);
        foamGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = foamGrad;
        ctx.beginPath();
        ctx.ellipse(cx, plungeY + 6, fallW * 0.52, H * 0.085, 0, 0, Math.PI * 2);
        ctx.fill();

        // Boiling foam churning bubbles
        const bubbleCount = Math.max(8, Math.floor(20 * (el.config.quantity || 1.0)));
        for (let b = 0; b < bubbleCount; b++) {
            const bPhase = (time * 1.4 + b * 0.35) % 1.0;
            const bx = cx + Math.sin(b * 3.7 + time * 0.8) * (fallW * 0.44);
            const by = plungeY + 4 + Math.cos(b * 2.1) * (H * 0.04) + bPhase * (H * 0.06);
            const br = Math.max(2, 5 * (1 - bPhase * 0.4));
            const bAlpha = Math.sin(bPhase * Math.PI) * 0.75 * intensity;

            ctx.fillStyle = `rgba(${pal.foam}, ${bAlpha})`;
            ctx.beginPath();
            ctx.arc(bx, by, br, 0, Math.PI * 2);
            ctx.fill();
        }

        // 7. Radial Billowing Mist Clouds Drifting from Plunge Zone
        const mistCount = Math.max(4, Math.floor(14 * (el.config.quantity || 1.0)));
        for (let m = 0; m < mistCount; m++) {
            const mPhase = (time * 0.42 + m / mistCount) % 1.0;
            const env = Math.sin(mPhase * Math.PI);
            const mx = cx + Math.sin(m * 2.5 + time * 0.6) * (fallW * 0.50);
            const my = plungeY + (mPhase - 0.2) * (H * 0.28);
            const mr = fallW * (0.16 + mPhase * 0.26);

            const mGrad = ctx.createRadialGradient(mx, my, mr * 0.05, mx, my, mr);
            mGrad.addColorStop(0, `rgba(${pal.mist}, ${env * 0.45 * intensity})`);
            mGrad.addColorStop(0.55, `rgba(${pal.foam}, ${env * 0.22 * intensity})`);
            mGrad.addColorStop(1, `rgba(${pal.mist}, 0)`);
            ctx.fillStyle = mGrad;
            ctx.beginPath();
            ctx.arc(mx, my, mr, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.restore();
    }

    // ========================================================================
    // 4C. PULSING LAVA SEAMS ('lava_seam') - Seamless Volcanic Crust Fissure
    // ========================================================================
    getLavaSeamPalette(variant = 'magma_seam') {
        if (variant === 'hell_crack') {
            return {
                glowOuter: '145, 10, 18',
                glowMid: '225, 28, 15',
                veinMid: '255, 75, 20',
                coreHot: '255, 230, 155',
                spark: '255, 160, 90'
            };
        } else if (variant === 'leyline_seam') {
            return {
                glowOuter: '25, 75, 165',
                glowMid: '55, 155, 255',
                veinMid: '110, 215, 255',
                coreHot: '235, 252, 255',
                spark: '175, 240, 255'
            };
        } else if (variant === 'acid_fault') {
            return {
                glowOuter: '20, 105, 28',
                glowMid: '55, 195, 45',
                veinMid: '135, 245, 65',
                coreHot: '235, 255, 190',
                spark: '190, 255, 120'
            };
        }
        // Default 'magma_seam'
        return {
            glowOuter: '155, 28, 5',
            glowMid: '235, 85, 12',
            veinMid: '255, 150, 20',
            coreHot: '255, 248, 190',
            spark: '255, 205, 95'
        };
    }

    drawRealisticLavaSeam(el, ctx, W, H, dt) {
        const time = el.stateTime;
        const intensity = el.config.intensity || 1.0;
        const pal = this.getLavaSeamPalette(el.config.variant || 'magma_seam');
        const cy = H * 0.5;
        const startX = W * 0.08;
        const endX = W * 0.92;
        const spanW = endX - startX;

        // Deterministic jagged fault vertices along the seam
        const mainNodes = [
            { x: startX, y: cy + H * 0.04 },
            { x: startX + spanW * 0.16, y: cy - H * 0.10 },
            { x: startX + spanW * 0.34, y: cy + H * 0.08 },
            { x: startX + spanW * 0.52, y: cy - H * 0.07 },
            { x: startX + spanW * 0.70, y: cy + H * 0.11 },
            { x: startX + spanW * 0.86, y: cy - H * 0.05 },
            { x: endX, y: cy + H * 0.02 }
        ];

        const branches = [
            [{ x: mainNodes[1].x, y: mainNodes[1].y }, { x: mainNodes[1].x + spanW * 0.06, y: cy - H * 0.28 }, { x: mainNodes[1].x + spanW * 0.13, y: cy - H * 0.34 }],
            [{ x: mainNodes[2].x, y: mainNodes[2].y }, { x: mainNodes[2].x - spanW * 0.05, y: cy + H * 0.27 }, { x: mainNodes[2].x + spanW * 0.04, y: cy + H * 0.36 }],
            [{ x: mainNodes[3].x, y: mainNodes[3].y }, { x: mainNodes[3].x + spanW * 0.08, y: cy - H * 0.26 }],
            [{ x: mainNodes[4].x, y: mainNodes[4].y }, { x: mainNodes[4].x + spanW * 0.07, y: cy + H * 0.30 }]
        ];

        // Rhythmic seamless breathing heat pulse
        const heatPulse = 0.72 + 0.28 * Math.sin(time * 2.4) * Math.cos(time * 1.1);

        ctx.save();

        // 1. Subterranean Heat Aura along the fault
        const auraGrad = ctx.createRadialGradient(W * 0.5, cy, W * 0.04, W * 0.5, cy, W * 0.48);
        auraGrad.addColorStop(0, `rgba(${pal.glowMid}, ${0.38 * heatPulse * intensity})`);
        auraGrad.addColorStop(0.55, `rgba(${pal.glowOuter}, ${0.20 * heatPulse * intensity})`);
        auraGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = auraGrad;
        ctx.beginPath();
        ctx.ellipse(W * 0.5, cy, W * 0.48, H * 0.42, 0, 0, Math.PI * 2);
        ctx.fill();

        const tracePolyline = (pts) => {
            ctx.beginPath();
            ctx.moveTo(pts[0].x, pts[0].y);
            for (let i = 1; i < pts.length; i++) {
                ctx.lineTo(pts[i].x, pts[i].y);
            }
        };

        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        // 2. Charred Basalt Crust Cavity (dark rocky rim)
        ctx.strokeStyle = 'rgba(18, 12, 10, 0.88)';
        ctx.lineWidth = Math.max(8, H * 0.13);
        tracePolyline(mainNodes);
        ctx.stroke();

        branches.forEach(b => {
            ctx.lineWidth = Math.max(4, H * 0.065);
            tracePolyline(b);
            ctx.stroke();
        });

        // 3. Outer Magma Glow & Pulsing Molten Interior (Additive 'lighter')
        ctx.globalCompositeOperation = 'lighter';

        ctx.strokeStyle = `rgba(${pal.glowMid}, ${0.65 * heatPulse})`;
        ctx.lineWidth = Math.max(6, H * 0.095 * (0.9 + 0.15 * heatPulse));
        tracePolyline(mainNodes);
        ctx.stroke();

        ctx.strokeStyle = `rgba(${pal.veinMid}, ${0.85 * heatPulse})`;
        ctx.lineWidth = Math.max(3.5, H * 0.052 * (0.85 + 0.2 * heatPulse));
        tracePolyline(mainNodes);
        ctx.stroke();

        branches.forEach((b, idx) => {
            const bPulse = 0.65 + 0.35 * Math.sin(time * 2.8 + idx * 1.4);
            ctx.strokeStyle = `rgba(${pal.glowMid}, ${0.55 * bPulse})`;
            ctx.lineWidth = Math.max(3, H * 0.048);
            tracePolyline(b);
            ctx.stroke();

            ctx.strokeStyle = `rgba(${pal.coreHot}, ${0.75 * bPulse})`;
            ctx.lineWidth = Math.max(1.4, H * 0.018);
            tracePolyline(b);
            ctx.stroke();
        });

        // 4. White-Hot Traveling Magma Surges along the Main Fault (Seamless Modulo Phase)
        ctx.strokeStyle = `rgba(${pal.coreHot}, ${0.92 * heatPulse})`;
        ctx.lineWidth = Math.max(2, H * 0.024);
        tracePolyline(mainNodes);
        ctx.stroke();

        for (let p = 0; p < 5; p++) {
            const surgePhase = (time * 0.28 + p * 0.2) % 1.0;
            const totalSegs = mainNodes.length - 1;
            const exactIdx = surgePhase * totalSegs;
            const segIdx = Math.min(totalSegs - 1, Math.floor(exactIdx));
            const t = exactIdx - segIdx;
            const sx = mainNodes[segIdx].x + (mainNodes[segIdx + 1].x - mainNodes[segIdx].x) * t;
            const sy = mainNodes[segIdx].y + (mainNodes[segIdx + 1].y - mainNodes[segIdx].y) * t;
            const sRad = H * (0.045 + 0.02 * Math.sin(surgePhase * Math.PI));

            const sGrad = ctx.createRadialGradient(sx, sy, 0, sx, sy, sRad);
            sGrad.addColorStop(0, `rgba(${pal.coreHot}, ${0.9 * Math.sin(surgePhase * Math.PI)})`);
            sGrad.addColorStop(0.5, `rgba(${pal.veinMid}, ${0.55 * Math.sin(surgePhase * Math.PI)})`);
            sGrad.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = sGrad;
            ctx.beginPath();
            ctx.arc(sx, sy, sRad, 0, Math.PI * 2);
            ctx.fill();
        }

        // 5. Seamless Rising Sparks / Magma Blisters
        const sparkCount = Math.max(3, Math.floor(14 * intensity * (el.config.quantity || 1.0)));
        for (let s = 0; s < sparkCount; s++) {
            const sPhase = (time * (0.55 + (s % 4) * 0.12) + s * 0.17) % 1.0;
            const nodeIdx = s % mainNodes.length;
            const basePt = mainNodes[nodeIdx];
            const px = basePt.x + Math.sin(time * 2 + s * 3.1) * (W * 0.035);
            const py = basePt.y - sPhase * (H * 0.28);
            const alpha = Math.sin(sPhase * Math.PI) * 0.9;

            ctx.fillStyle = `rgba(${pal.spark}, ${alpha})`;
            ctx.beginPath();
            ctx.arc(px, py, Math.max(1.3, H * 0.012 * (1 - sPhase * 0.4)), 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.restore();
    }

    // ========================================================================
    // 4D. SWAYING TREE CANOPIES ('canopy') - Seamless Wind-Swayed Foliage
    // ========================================================================
    getCanopyPalette(variant = 'oak_canopy') {
        if (variant === 'autumn_maple') {
            return {
                shadow: 'rgba(18, 10, 6, 0.34)',
                deep: '#5e1f12',
                mid: '#9e3816',
                light: '#d6681e',
                highlight: '#f29f38',
                leaf: '235, 115, 35'
            };
        } else if (variant === 'pine_crown') {
            return {
                shadow: 'rgba(8, 16, 12, 0.36)',
                deep: '#12291e',
                mid: '#1e4231',
                light: '#2d5e46',
                highlight: '#468263',
                leaf: '65, 125, 92'
            };
        } else if (variant === 'jungle_palm') {
            return {
                shadow: 'rgba(10, 20, 10, 0.32)',
                deep: '#193d18',
                mid: '#2b6926',
                light: '#479636',
                highlight: '#78c452',
                leaf: '110, 195, 75'
            };
        } else if (variant === 'dead_willow') {
            return {
                shadow: 'rgba(12, 10, 14, 0.30)',
                deep: '#2b2421',
                mid: '#473c35',
                light: '#63554b',
                highlight: '#827266',
                leaf: '130, 115, 102'
            };
        }
        // Default 'oak_canopy'
        return {
            shadow: 'rgba(10, 18, 10, 0.34)',
            deep: '#1b361a',
            mid: '#2b5428',
            light: '#3f7838',
            highlight: '#63a352',
            leaf: '95, 162, 78'
        };
    }

    drawRealisticCanopy(el, ctx, W, H, dt) {
        const time = el.stateTime;
        const cfg = el.config || {};
        const intensity = cfg.intensity || 1.0;
        const rough = Math.max(0, Math.min(2.0, parseFloat(cfg.fractalRoughness !== undefined ? cfg.fractalRoughness : 0.75)));
        const pal = this.getCanopyPalette(cfg.variant || 'oak_canopy');
        const cx = W * 0.5;
        const cy = H * 0.5;
        const rx = W * 0.38;
        const ry = H * 0.38;

        // Smooth multi-harmonic wind sway (seamless continuous sine/cosine)
        const windX = (Math.sin(time * 1.35) * 0.65 + Math.sin(time * 0.7) * 0.35) * (W * 0.032) * intensity;
        const windY = (Math.cos(time * 1.15) * 0.6 + Math.sin(time * 0.85) * 0.4) * (H * 0.024) * intensity;
        const windRot = Math.sin(time * 1.2) * 0.045 * intensity;

        ctx.save();

        // 1. Offset Dappled Ground Shadow (moves slightly less than upper crown for 3D height)
        ctx.fillStyle = pal.shadow;
        const shadowLobes = 9;
        for (let i = 0; i < shadowLobes; i++) {
            const ang = (i / shadowLobes) * Math.PI * 2;
            const lx = cx + W * 0.045 + windX * 0.5 + Math.cos(ang) * rx * 0.52;
            const ly = cy + H * 0.055 + windY * 0.5 + Math.sin(ang) * ry * 0.52;
            this.traceFractalLobe(ctx, lx, ly, rx * 0.46, ry * 0.44, ang * 0.5, rough * 0.85, i * 1.37, 18);
            ctx.fill();
        }

        // 2. Interior Subtle Trunk / Main Boughs (partially visible under foliage)
        const boughDepth = rough > 0.65 ? 3 : 2;
        for (let b = 0; b < 6; b++) {
            const ang = (b / 6) * Math.PI * 2 + 0.3 + windRot * 0.5;
            this.drawFractalTwigBranch(
                ctx,
                cx + windX * 0.3,
                cy + windY * 0.3,
                rx * 0.54,
                ang,
                Math.max(2.5, Math.min(W, H) * 0.032),
                boughDepth,
                rough,
                b * 1.7,
                'rgba(42, 28, 18, 0.62)'
            );
        }

        // 3. Multi-Tiered Leaf Clusters (Deep Understory -> Mid Boughs -> Sunlit Crown -> Top Highlights)
        const tiers = [
            { color: pal.deep, count: 10, dist: 0.54, size: 0.48, centerMult: 0.62, swayMult: 0.65, alpha: 0.94 },
            { color: pal.mid, count: 12, dist: 0.42, size: 0.42, centerMult: 0.48, swayMult: 0.90, alpha: 0.92 },
            { color: pal.light, count: 10, dist: 0.30, size: 0.35, centerMult: 0.34, swayMult: 1.15, alpha: 0.89 },
            { color: pal.highlight, count: 7, dist: 0.18, size: 0.27, centerMult: 0.22, swayMult: 1.35, alpha: 0.84 }
        ];

        tiers.forEach((tier, tIdx) => {
            const tierCx = cx + windX * tier.swayMult;
            const tierCy = cy + windY * tier.swayMult;

            // Deep inter-bough crevice shadows tucked under upper canopy tiers
            if (tIdx === 1 && rough > 0.2) {
                ctx.fillStyle = pal.shadow;
                ctx.globalAlpha = Math.min(0.65, 0.28 + rough * 0.18);
                for (let c = 0; c < tier.count; c++) {
                    const cAng = ((c + 0.5) / tier.count) * Math.PI * 2;
                    const cxOff = tierCx + Math.cos(cAng + windRot) * rx * 0.46;
                    const cyOff = tierCy + Math.sin(cAng + windRot) * ry * 0.46;
                    this.traceFractalLobe(ctx, cxOff, cyOff, rx * 0.22, ry * 0.20, cAng, rough * 0.9, c * 2.1, 14);
                    ctx.fill();
                }
            }

            ctx.fillStyle = tier.color;
            ctx.globalAlpha = tier.alpha;

            // Central cohesive dome for this canopy tier
            this.traceFractalLobe(ctx, tierCx, tierCy, rx * tier.centerMult, ry * tier.centerMult, windRot + tIdx * 0.4, rough * 0.85, tIdx * 2.3, 20);
            ctx.fill();

            for (let c = 0; c < tier.count; c++) {
                const baseAngle = (c / tier.count) * Math.PI * 2 + tIdx * 0.55;
                const localFlutter = Math.sin(time * 2.1 + c * 1.7 + tIdx) * (rx * 0.028) * intensity;
                const distR = tier.dist * (0.84 + 0.16 * Math.sin(c * 2.3 + tIdx));
                const lx = tierCx + Math.cos(baseAngle + windRot) * rx * distR + localFlutter;
                const ly = tierCy + Math.sin(baseAngle + windRot) * ry * distR - localFlutter * 0.6;
                const lobeRx = rx * tier.size * (0.88 + 0.14 * Math.cos(c * 1.9));
                const lobeRy = ry * tier.size * (0.86 + 0.14 * Math.sin(c * 2.7));

                this.traceFractalLobe(ctx, lx, ly, lobeRx, lobeRy, baseAngle + windRot, rough, tIdx * 3.1 + c * 1.37, 20);
                ctx.fill();

                if (rough > 0.25 && tIdx < 3) {
                    for (let sub = -1; sub <= 1; sub += 2) {
                        const subAng = baseAngle + windRot + sub * (0.38 + 0.08 * rough);
                        const subX = lx + Math.cos(subAng) * lobeRx * 0.62;
                        const subY = ly + Math.sin(subAng) * lobeRy * 0.62;
                        this.traceFractalLobe(ctx, subX, subY, lobeRx * 0.52, lobeRy * 0.50, subAng, rough * 1.05, tIdx * 5.3 + c * 2.7 + sub, 16);
                        ctx.fill();
                    }
                }
            }
        });

        // 4. Drifting Windblown Leaves (Seamless Phase-Wrapped Loop)
        ctx.globalAlpha = 1.0;
        const leafCount = Math.max(2, Math.floor(8 * intensity * (cfg.quantity || 1.0)));
        for (let l = 0; l < leafCount; l++) {
            const lPhase = (time * (0.28 + (l % 3) * 0.07) + l / leafCount) % 1.0;
            const env = Math.sin(lPhase * Math.PI);
            const startAng = (l * 2.1) % (Math.PI * 2);
            const lx = cx + Math.cos(startAng) * rx * 0.35 + lPhase * rx * 0.75 + Math.sin(time * 2.5 + l) * 10;
            const ly = cy + Math.sin(startAng) * ry * 0.35 + lPhase * ry * 0.45 + Math.cos(time * 2.1 + l) * 8;
            const leafRot = time * 2.4 + l * 1.5;

            ctx.save();
            ctx.translate(lx, ly);
            ctx.rotate(leafRot);
            ctx.fillStyle = `rgba(${pal.leaf}, ${env * 0.85})`;
            this.traceFractalLobe(ctx, 0, 0, Math.max(2.5, W * 0.016), Math.max(1.3, H * 0.008), 0, rough * 0.65, l * 1.7, 10);
            ctx.fill();
            ctx.restore();
        }

        ctx.restore();
    }

    // ========================================================================
    // 4E. MOVING SUNBEAMS ('sunbeams') - Volumetric God Rays & Dust Motes
    // ========================================================================
    getSunbeamPalette(variant = 'golden_sun') {
        if (variant === 'moonbeams') {
            return {
                rayCore: '185, 225, 255',
                rayOuter: '95, 155, 235',
                mote: '220, 242, 255'
            };
        } else if (variant === 'cathedral_rays') {
            return {
                rayCore: '255, 210, 145',
                rayOuter: '215, 115, 65',
                mote: '255, 235, 190'
            };
        } else if (variant === 'cavern_skylight') {
            return {
                rayCore: '185, 255, 235',
                rayOuter: '65, 185, 165',
                mote: '215, 255, 245'
            };
        }
        // Default 'golden_sun'
        return {
            rayCore: '255, 242, 175',
            rayOuter: '245, 185, 65',
            mote: '255, 250, 210'
        };
    }

    // ========================================================================
    // 4E. TRUE 90° TOP-DOWN ORTHOGRAPHIC SUNBEAMS / SKYLIGHT POOL ('sunbeams')
    // ========================================================================
    drawRealisticSunbeams(el, ctx, W, H, dt) {
        const time = el.stateTime;
        const intensity = el.config.intensity || 1.0;
        const pal = this.getSunbeamPalette(el.config.variant || 'golden_sun');
        const cx = W * 0.5;
        const cy = H * 0.5;
        const rx = W * 0.42;
        const ry = H * 0.38;

        ctx.save();
        ctx.globalCompositeOperation = 'lighter';

        // 1. Soft Floor Illumination Pool (Top-down skylight / canopy opening)
        const shimmer = 0.85 + 0.15 * Math.sin(time * 1.8) * Math.cos(time * 0.9);
        const poolGrad = ctx.createRadialGradient(cx, cy, rx * 0.05, cx, cy, rx * 1.05);
        poolGrad.addColorStop(0, `rgba(${pal.rayCore}, ${0.55 * shimmer * intensity})`);
        poolGrad.addColorStop(0.35, `rgba(${pal.rayCore}, ${0.32 * shimmer * intensity})`);
        poolGrad.addColorStop(0.72, `rgba(${pal.rayOuter}, ${0.12 * shimmer * intensity})`);
        poolGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = poolGrad;
        ctx.beginPath();
        ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
        ctx.fill();

        // 2. Organic Shimmering Caustic Light Webs across the floor
        const causticCount = 6;
        for (let c = 0; c < causticCount; c++) {
            const cAngle = (c / causticCount) * Math.PI * 2 + time * 0.25;
            const cDist = rx * (0.25 + 0.25 * Math.sin(time * 1.2 + c * 1.5));
            const cRadX = rx * (0.28 + 0.12 * Math.cos(time * 1.4 + c * 2.1));
            const cRadY = ry * (0.24 + 0.10 * Math.sin(time * 1.1 + c * 1.8));
            const cAlpha = (0.16 + 0.10 * Math.sin(time * 2.1 + c)) * intensity;

            const cGrad = ctx.createRadialGradient(cx + Math.cos(cAngle) * cDist, cy + Math.sin(cAngle) * cDist, 2, cx + Math.cos(cAngle) * cDist, cy + Math.sin(cAngle) * cDist, cRadX);
            cGrad.addColorStop(0, `rgba(${pal.rayCore}, ${cAlpha})`);
            cGrad.addColorStop(0.65, `rgba(${pal.rayOuter}, ${cAlpha * 0.45})`);
            cGrad.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = cGrad;
            ctx.beginPath();
            ctx.ellipse(cx + Math.cos(cAngle) * cDist, cy + Math.sin(cAngle) * cDist, cRadX, cRadY, cAngle, 0, Math.PI * 2);
            ctx.fill();
        }

        // 3. Floating Illuminated Golden Dust Motes in 360° currents
        const moteCount = Math.max(8, Math.floor(32 * intensity * (el.config.quantity || 1.0)));
        for (let m = 0; m < moteCount; m++) {
            const mPhase = (time * (0.12 + (m % 5) * 0.025) + m / moteCount) % 1.0;
            const env = Math.sin(mPhase * Math.PI);
            const mAngle = (m * 2.399) + time * (0.18 + (m % 3) * 0.05);
            const mDist = rx * Math.sqrt((m % 17) / 17) * 0.88;
            const mx = cx + Math.cos(mAngle) * mDist;
            const my = cy + Math.sin(mAngle) * (mDist * (ry / rx));
            const mRad = 1.2 + (m % 3) * 0.8;
            const twinkle = 0.5 + 0.5 * Math.sin(time * 3.5 + m * 2.1);

            ctx.fillStyle = `rgba(${pal.mote}, ${env * twinkle * 0.90 * intensity})`;
            ctx.beginPath();
            ctx.arc(mx, my, mRad, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.restore();
    }

    // ========================================================================
    // 5A. TRUE 90° TOP-DOWN ORTHOGRAPHIC SCI-FI HOLOGRAPHIC MAP ('hologram')
    // ========================================================================
    drawRealisticHologram(el, ctx, W, H, dt) {
        const time = el.stateTime;
        const intensity = el.config.intensity || 1.0;
        const qty = el.config.quantity !== undefined ? el.config.quantity : 1.0;
        const variant = el.config.variant || 'tactical_planet';

        const flicker = 0.92 + 0.08 * Math.sin(time * 4.2);

        ctx.save();
        ctx.globalCompositeOperation = 'lighter';

        let color = '0, 240, 255';
        if (variant === 'skull_hazard') color = '255, 60, 60';
        else if (variant === 'beacon') color = '255, 190, 40';
        else if (variant === 'reticle') color = '0, 255, 150';

        const cx = W / 2;
        const cy = H / 2;
        const radius = Math.min(W, H) * 0.38;

        // 1. Concentric Floor Holo-Pad Emitter Rings & Cardinal Markings
        ctx.strokeStyle = `rgba(${color}, ${0.35 * intensity * flicker})`;
        ctx.lineWidth = 1.0;
        ctx.beginPath();
        ctx.arc(cx, cy, radius * 1.12, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = `rgba(${color}, ${0.65 * intensity * flicker})`;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.arc(cx, cy, radius * 0.98, 0, Math.PI * 2);
        ctx.stroke();

        // 12 Degree tick marks around the ring
        const ticks = 12;
        ctx.lineWidth = 1.2;
        for (let t = 0; t < ticks; t++) {
            const tAngle = (t / ticks) * Math.PI * 2 + time * 0.15;
            const r1 = radius * 1.02;
            const r2 = (t % 3 === 0) ? radius * 1.12 : radius * 1.07;
            ctx.beginPath();
            ctx.moveTo(cx + Math.cos(tAngle) * r1, cy + Math.sin(tAngle) * r1);
            ctx.lineTo(cx + Math.cos(tAngle) * r2, cy + Math.sin(tAngle) * r2);
            ctx.stroke();
        }

        // 2. Tactical Content by Variant (Top-Down Orthographic Projections)
        ctx.strokeStyle = `rgba(${color}, ${0.85 * intensity * flicker})`;
        ctx.lineWidth = 1.5;

        if (variant === 'tactical_planet') {
            // Rotating Wireframe Planet viewed from top-down
            ctx.beginPath();
            ctx.arc(cx, cy, radius * 0.85, 0, Math.PI * 2);
            ctx.stroke();

            // Latitude rings
            for (let lat = 1; lat <= 3; lat++) {
                const rLat = radius * 0.85 * (lat / 3.5);
                ctx.beginPath();
                ctx.arc(cx, cy, rLat, 0, Math.PI * 2);
                ctx.stroke();
            }

            // Rotating longitude spokes
            const rotSpeed = time * 0.6;
            for (let lon = 0; lon < 6; lon++) {
                const phase = rotSpeed + (lon * Math.PI) / 6;
                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.lineTo(cx + Math.cos(phase) * radius * 0.85, cy + Math.sin(phase) * radius * 0.85);
                ctx.stroke();
            }

            // Orbital satellite ring with tracking orb
            const orbRot = time * 0.9;
            ctx.beginPath();
            ctx.arc(cx, cy, radius * 1.18, 0, Math.PI * 2);
            ctx.stroke();

            const satX = cx + Math.cos(orbRot) * radius * 1.18;
            const satY = cy + Math.sin(orbRot) * radius * 1.18;
            ctx.fillStyle = `rgba(${color}, ${intensity})`;
            ctx.beginPath();
            ctx.arc(satX, satY, 3.5, 0, Math.PI * 2);
            ctx.fill();

            ctx.font = '9px monospace';
            ctx.fillStyle = `rgba(${color}, ${0.75 * intensity * flicker})`;
            ctx.fillText(`SAT-01 // LAT:${(Math.sin(time) * 45).toFixed(1)}°`, cx - radius * 0.7, cy + radius * 0.9 + 14);

        } else if (variant === 'reticle') {
            const spin = time * 0.9;
            ctx.beginPath();
            ctx.arc(cx, cy, radius * 0.88, spin, spin + Math.PI * 0.7);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(cx, cy, radius * 0.88, spin + Math.PI, spin + Math.PI * 1.7);
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(cx, cy, radius * 0.58, -spin * 1.3, -spin * 1.3 + Math.PI * 0.8);
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(cx, cy, radius * 0.58, -spin * 1.3 + Math.PI, -spin * 1.3 + Math.PI * 1.8);
            ctx.stroke();

            const bLen = radius * 0.30;
            const bPad = radius * 0.85;
            ctx.beginPath();
            ctx.moveTo(cx - bPad, cy - bPad + bLen); ctx.lineTo(cx - bPad, cy - bPad); ctx.lineTo(cx - bPad + bLen, cy - bPad);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(cx + bPad - bLen, cy - bPad); ctx.lineTo(cx + bPad, cy - bPad); ctx.lineTo(cx + bPad, cy - bPad + bLen);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(cx + bPad, cy + bPad - bLen); ctx.lineTo(cx + bPad, cy + bPad); ctx.lineTo(cx + bPad - bLen, cy + bPad);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(cx - bPad + bLen, cy + bPad); ctx.lineTo(cx - bPad, cy + bPad); ctx.lineTo(cx - bPad, cy + bPad - bLen);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(cx - 10, cy); ctx.lineTo(cx + 10, cy);
            ctx.moveTo(cx, cy - 10); ctx.lineTo(cx, cy + 10);
            ctx.stroke();

            const lockPulse = Math.sin(time * 6) > 0;
            ctx.font = '9px monospace';
            ctx.fillStyle = lockPulse ? `rgba(${color}, 1.0)` : `rgba(${color}, 0.4)`;
            ctx.fillText('TARGET LOCK: 98.4%', cx - 44, cy + radius * 0.85 + 14);

        } else if (variant === 'beacon') {
            const beaconPulse = (time * 1.5) % 1.0;
            for (let b = 0; b < 3; b++) {
                const bFrac = (beaconPulse + b / 3) % 1.0;
                const bR = radius * 0.2 + bFrac * radius * 0.85;
                ctx.strokeStyle = `rgba(${color}, ${(1 - bFrac) * 0.85 * intensity})`;
                ctx.beginPath();
                ctx.arc(cx, cy, bR, 0, Math.PI * 2);
                ctx.stroke();
            }

            ctx.fillStyle = `rgba(${color}, ${intensity * flicker})`;
            ctx.beginPath();
            ctx.moveTo(cx, cy - 18);
            ctx.lineTo(cx + 10, cy);
            ctx.lineTo(cx, cy + 18);
            ctx.lineTo(cx - 10, cy);
            ctx.closePath();
            ctx.fill();

            ctx.font = '9px monospace';
            ctx.fillStyle = `rgba(${color}, ${0.85 * intensity})`;
            ctx.fillText('SOS BEACON // CH-7', cx - 50, cy + radius * 0.85 + 14);

        } else if (variant === 'skull_hazard') {
            ctx.lineWidth = 2.0;
            ctx.beginPath();
            ctx.moveTo(cx, cy - radius * 0.85);
            ctx.lineTo(cx + radius * 0.85, cy + radius * 0.65);
            ctx.lineTo(cx - radius * 0.85, cy + radius * 0.65);
            ctx.closePath();
            ctx.stroke();

            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.arc(cx, cy - 6, radius * 0.38, Math.PI, 0);
            ctx.lineTo(cx + radius * 0.28, cy + 12);
            ctx.lineTo(cx - radius * 0.28, cy + 12);
            ctx.closePath();
            ctx.stroke();

            ctx.fillStyle = `rgba(${color}, ${0.9 * intensity * flicker})`;
            ctx.beginPath();
            ctx.arc(cx - 9, cy - 4, 5, 0, Math.PI * 2);
            ctx.arc(cx + 9, cy - 4, 5, 0, Math.PI * 2);
            ctx.fill();

            ctx.font = '9px monospace';
            ctx.fillStyle = `rgba(${color}, ${0.9 * intensity})`;
            ctx.fillText('LETHAL BIOHAZARD', cx - 44, cy + radius * 0.85 + 14);

        } else {
            // starship_schematic
            ctx.beginPath();
            ctx.moveTo(cx, cy - radius * 0.75);
            ctx.lineTo(cx + radius * 0.20, cy - radius * 0.15);
            ctx.lineTo(cx + radius * 0.75, cy + radius * 0.35);
            ctx.lineTo(cx + radius * 0.30, cy + radius * 0.35);
            ctx.lineTo(cx + radius * 0.20, cy + radius * 0.65);
            ctx.lineTo(cx - radius * 0.20, cy + radius * 0.65);
            ctx.lineTo(cx - radius * 0.30, cy + radius * 0.35);
            ctx.lineTo(cx - radius * 0.75, cy + radius * 0.35);
            ctx.lineTo(cx - radius * 0.20, cy - radius * 0.15);
            ctx.closePath();
            ctx.stroke();

            const shieldPulse = 0.5 + 0.5 * Math.sin(time * 3);
            ctx.strokeStyle = `rgba(${color}, ${0.4 * shieldPulse * intensity})`;
            ctx.beginPath();
            ctx.arc(cx, cy, radius * 0.95, 0, Math.PI * 2);
            ctx.stroke();

            ctx.font = '9px monospace';
            ctx.fillStyle = `rgba(${color}, ${0.8 * intensity})`;
            ctx.fillText('SCHEMATIC // INTERCEPTOR', cx - 65, cy + radius * 0.85 + 14);
        }

        // 3. Radial Pulse Scan Wave & Holographic Motes
        const scanPhase = (time * 0.65) % 1.0;
        ctx.strokeStyle = `rgba(${color}, ${(1 - scanPhase) * 0.45 * intensity})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(cx, cy, radius * 1.25 * scanPhase, 0, Math.PI * 2);
        ctx.stroke();

        const moteCount = Math.floor(16 * qty);
        for (let m = 0; m < moteCount; m++) {
            const mProg = ((time * 0.5 + m / moteCount) % 1.0);
            const mAngle = m * 2.4 + time * 1.2;
            const mDist = radius * 0.9 * Math.sqrt((m % 11) / 11);
            const mx = cx + Math.cos(mAngle) * mDist;
            const my = cy + Math.sin(mAngle) * mDist;
            const mAlpha = Math.sin(mProg * Math.PI) * 0.75 * intensity;
            ctx.fillStyle = `rgba(${color}, ${mAlpha})`;
            ctx.fillRect(mx, my, 1.8, 1.8);
        }

        ctx.restore();
    }

    drawRealisticForcefield(el, ctx, W, H, dt) {
        const time = el.stateTime;
        const intensity = el.config.intensity || 1.0;
        const qty = el.config.quantity !== undefined ? el.config.quantity : 1.0;
        const variant = el.config.variant || 'hex_barrier';

        ctx.save();
        ctx.globalCompositeOperation = 'lighter';

        let color = '0, 230, 255';
        if (variant === 'laser_grid') color = '255, 30, 50';
        else if (variant === 'plasma_curtain') color = '210, 50, 255';
        else if (variant === 'void_containment') color = '255, 185, 20';

        const pad = 8;
        const fw = W - pad * 2;
        const fh = H - pad * 2;

        const borderGlow = 0.7 + 0.3 * Math.sin(time * 3);
        ctx.strokeStyle = `rgba(${color}, ${0.85 * borderGlow * intensity})`;
        ctx.lineWidth = 2.5;
        ctx.strokeRect(pad, pad, fw, fh);

        ctx.strokeStyle = `rgba(${color}, ${0.28 * borderGlow * intensity})`;
        ctx.lineWidth = 6;
        ctx.strokeRect(pad - 2, pad - 2, fw + 4, fh + 4);

        if (variant === 'hex_barrier' || variant === 'void_containment') {
            const hexSize = 22 / Math.sqrt(qty);
            const hexH = hexSize * Math.sqrt(3);
            const cols = Math.ceil(fw / (hexSize * 1.5)) + 1;
            const rows = Math.ceil(fh / hexH) + 1;

            ctx.lineWidth = 1.0;
            for (let c = 0; c < cols; c++) {
                for (let r = 0; r < rows; r++) {
                    const hx = pad + c * hexSize * 1.5;
                    const hy = pad + r * hexH + (c % 2 ? hexH / 2 : 0);
                    if (hx > W - pad || hy > H - pad) continue;

                    const wave = Math.sin((hx + hy) * 0.025 - time * 3.5);
                    const hexAlpha = Math.max(0.08, (wave * 0.5 + 0.5) * 0.65) * intensity;

                    ctx.strokeStyle = `rgba(${color}, ${hexAlpha})`;
                    ctx.beginPath();
                    for (let a = 0; a < 6; a++) {
                        const angle = (Math.PI / 3) * a;
                        const px = hx + hexSize * 0.58 * Math.cos(angle);
                        const py = hy + hexSize * 0.58 * Math.sin(angle);
                        if (a === 0) ctx.moveTo(px, py);
                        else ctx.lineTo(px, py);
                    }
                    ctx.closePath();
                    ctx.stroke();

                    if (wave > 0.85) {
                        ctx.fillStyle = `rgba(${color}, ${(wave - 0.85) * 4 * intensity})`;
                        ctx.fillRect(hx - 1.5, hy - 1.5, 3, 3);
                    }
                }
            }

        } else if (variant === 'laser_grid') {
            const spacing = 24 / Math.sqrt(qty);
            ctx.lineWidth = 1.2;

            for (let y = pad + spacing; y < H - pad; y += spacing) {
                const pulse = 0.5 + 0.5 * Math.sin(time * 5 + y * 0.2);
                ctx.strokeStyle = `rgba(${color}, ${pulse * 0.85 * intensity})`;
                ctx.beginPath();
                ctx.moveTo(pad, y);
                ctx.lineTo(W - pad, y);
                ctx.stroke();
            }

            for (let x = pad + spacing; x < W - pad; x += spacing) {
                const pulse = 0.5 + 0.5 * Math.sin(time * 5 + x * 0.2);
                ctx.strokeStyle = `rgba(${color}, ${pulse * 0.85 * intensity})`;
                ctx.beginPath();
                ctx.moveTo(x, pad);
                ctx.lineTo(x, H - pad);
                ctx.stroke();
            }

            // Smooth traveling grid node pulse instead of random per-frame flicker
            const nodeX = pad + ((time * 48) % Math.max(10, fw));
            const nodeY = pad + ((time * 32) % Math.max(10, fh));
            ctx.fillStyle = `rgba(255, 255, 255, ${0.75 * intensity})`;
            ctx.beginPath();
            ctx.arc(nodeX, nodeY, 2.5, 0, Math.PI * 2);
            ctx.fill();

        } else {
            // plasma_curtain
            const bands = Math.floor(18 * qty);
            for (let b = 0; b < bands; b++) {
                const bx = pad + (b / bands) * fw;
                const wave = Math.sin(bx * 0.05 + time * 3.2);
                const pGrad = ctx.createLinearGradient(bx, pad, bx, H - pad);
                const pAlpha = (0.2 + 0.25 * wave) * intensity;
                pGrad.addColorStop(0, `rgba(${color}, ${pAlpha * 0.8})`);
                pGrad.addColorStop(0.5, `rgba(${color}, ${pAlpha})`);
                pGrad.addColorStop(1, `rgba(${color}, ${pAlpha * 0.8})`);
                ctx.fillStyle = pGrad;
                ctx.fillRect(bx, pad, fw / bands + 2, fh);
            }
        }

        // Smoothly traveling perimeter energy nodes
        for (let a = 0; a < 2; a++) {
            const edgeX = pad + ((time * 60 + a * fw * 0.5) % Math.max(10, fw));
            const edgeY = a === 0 ? pad : (H - pad);
            ctx.fillStyle = `rgba(255, 255, 255, ${0.75 * intensity})`;
            ctx.beginPath();
            ctx.arc(edgeX, edgeY, 2.2, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.restore();
    }

    drawRealisticPlasmaLeak(el, ctx, W, H, dt) {
        const time = el.stateTime;
        const intensity = el.config.intensity || 1.0;
        const speed = el.config.speed || 1.0;
        const qty = el.config.quantity !== undefined ? el.config.quantity : 1.0;
        const variant = el.config.variant || 'fusion_vent';

        ctx.save();
        ctx.globalCompositeOperation = 'lighter';

        let coreColor = '0, 245, 255';
        let hotColor = '255, 255, 255';
        let edgeColor = '0, 110, 255';
        if (variant === 'warp_overload') {
            coreColor = '230, 40, 255';
            edgeColor = '100, 10, 180';
        } else if (variant === 'superheated_jet') {
            coreColor = '255, 175, 20';
            edgeColor = '230, 50, 10';
        }

        const ox = W * 0.14;
        const oy = H * 0.5;
        const jetLen = W * 0.76;

        ctx.fillStyle = '#222';
        ctx.fillRect(ox - 16, oy - 24, 16, 48);
        ctx.fillStyle = `rgba(${coreColor}, ${0.85 * intensity})`;
        ctx.fillRect(ox - 2, oy - 20, 4, 40);

        const flareRad = 16 + Math.sin(time * 20) * 3;
        const flareGrad = ctx.createRadialGradient(ox, oy, 2, ox, oy, flareRad);
        flareGrad.addColorStop(0, `rgba(${hotColor}, ${intensity})`);
        flareGrad.addColorStop(0.5, `rgba(${coreColor}, ${0.8 * intensity})`);
        flareGrad.addColorStop(1, `rgba(${coreColor}, 0)`);
        ctx.fillStyle = flareGrad;
        ctx.beginPath();
        ctx.arc(ox, oy, flareRad, 0, Math.PI * 2);
        ctx.fill();

        const diamondCount = 5;
        const dSpacing = 32;
        for (let d = 1; d <= diamondCount; d++) {
            const dx = ox + d * dSpacing;
            const dPulse = 0.8 + 0.2 * Math.sin(time * 30 + d * 1.5);
            const dw = 14 * dPulse;
            const dh = 10 * dPulse;

            ctx.fillStyle = `rgba(${hotColor}, ${0.9 * intensity * dPulse})`;
            ctx.beginPath();
            ctx.moveTo(dx - dw * 0.5, oy);
            ctx.lineTo(dx, oy - dh * 0.5);
            ctx.lineTo(dx + dw * 0.5, oy);
            ctx.lineTo(dx, oy + dh * 0.5);
            ctx.closePath();
            ctx.fill();
        }

        const puffCount = Math.floor(32 * qty);
        for (let p = 0; p < puffCount; p++) {
            const pProg = ((time * speed * 2.2 + p / puffCount) % 1.0);
            const px = ox + pProg * jetLen;
            const spread = pProg * (H * 0.38);
            const py = oy + Math.sin(pProg * 8 + p * 2.1) * spread;
            const pRad = 8 + pProg * 26;
            const pAlpha = (1 - pProg) * 0.45 * intensity;

            const puffGrad = ctx.createRadialGradient(px, py, 2, px, py, pRad);
            puffGrad.addColorStop(0, `rgba(${coreColor}, ${pAlpha})`);
            puffGrad.addColorStop(0.7, `rgba(${edgeColor}, ${pAlpha * 0.5})`);
            puffGrad.addColorStop(1, 'rgba(0,0,0,0)');

            ctx.fillStyle = puffGrad;
            ctx.beginPath();
            ctx.arc(px, py, pRad, 0, Math.PI * 2);
            ctx.fill();
        }

        for (let a = 0; a < 3; a++) {
            ctx.strokeStyle = `rgba(${hotColor}, ${0.82 * intensity})`;
            ctx.lineWidth = 1.3;
            ctx.beginPath();
            let curX = ox;
            let curY = oy + (a - 1) * 7;
            ctx.moveTo(curX, curY);
            for (let seg = 1; seg <= 4; seg++) {
                curX += 22;
                curY = oy + (a - 1) * 7 + Math.sin(time * 9 * speed + a * 2.1 + seg * 1.6) * (6 + seg * 2.5);
                ctx.lineTo(curX, curY);
            }
            ctx.stroke();
        }

        ctx.restore();
    }

    // ========================================================================
    // 5D. TRUE 90° TOP-DOWN ORTHOGRAPHIC QUANTUM TELEPORTER ('teleporter')
    // ========================================================================
    drawRealisticTeleporter(el, ctx, W, H, dt) {
        const time = el.stateTime;
        const intensity = el.config.intensity || 1.0;
        const qty = el.config.quantity !== undefined ? el.config.quantity : 1.0;
        const variant = el.config.variant || 'transmat_pad';

        ctx.save();
        ctx.globalCompositeOperation = 'lighter';

        let color = '0, 235, 255';
        if (variant === 'warp_gate') color = '180, 50, 255';
        else if (variant === 'precursor_ring') color = '40, 255, 130';
        else if (variant === 'disintegration_field') color = '255, 45, 60';

        const cx = W / 2;
        const cy = H / 2;
        const padR = Math.min(W, H) * 0.42;

        // 1. Top-Down Reinforced Transmat Floor Pad (Hex / Circular Rim)
        const ringPulse = 0.82 + 0.18 * Math.sin(time * 3);
        ctx.strokeStyle = `rgba(${color}, ${0.9 * ringPulse * intensity})`;
        ctx.lineWidth = 2.2;
        ctx.beginPath();
        ctx.arc(cx, cy, padR, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = `rgba(${color}, ${0.45 * ringPulse * intensity})`;
        ctx.lineWidth = 1.0;
        ctx.beginPath();
        ctx.arc(cx, cy, padR * 1.08, 0, Math.PI * 2);
        ctx.stroke();

        // 2. 6 Outer Energy Pylons & Radial Floor Power Conduits
        const pylonCount = 6;
        ctx.lineCap = 'round';
        for (let p = 0; p < pylonCount; p++) {
            const angle = (Math.PI * 2 / pylonCount) * p;
            const px = cx + Math.cos(angle) * padR;
            const py = cy + Math.sin(angle) * padR;

            // Power conduit line to center core
            const conduitPulse = 0.4 + 0.3 * Math.sin(time * 4 + p * 1.2);
            ctx.strokeStyle = `rgba(${color}, ${conduitPulse * intensity})`;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(px, py);
            ctx.stroke();

            // Pylon emitter node
            ctx.fillStyle = `rgba(${color}, ${intensity})`;
            ctx.beginPath();
            ctx.arc(px, py, 4.5, 0, Math.PI * 2);
            ctx.fill();

            ctx.strokeStyle = '#fff';
            ctx.lineWidth = 1.0;
            ctx.beginPath();
            ctx.arc(px, py, 2.0, 0, Math.PI * 2);
            ctx.stroke();
        }

        // 3. Counter-Rotating Concentric Runic Rings
        const rotOuter = time * 0.45;
        const rotInner = -time * 0.65;

        // Outer glyph ring
        ctx.strokeStyle = `rgba(${color}, ${0.70 * intensity})`;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.arc(cx, cy, padR * 0.72, 0, Math.PI * 2);
        ctx.stroke();

        for (let g = 0; g < 8; g++) {
            const ga = rotOuter + g * (Math.PI / 4);
            const gx = cx + Math.cos(ga) * (padR * 0.72);
            const gy = cy + Math.sin(ga) * (padR * 0.72);
            ctx.fillStyle = `rgba(${color}, ${0.85 * intensity})`;
            ctx.fillRect(gx - 2, gy - 2, 4, 4);
        }

        // Inner glyph ring
        ctx.strokeStyle = `rgba(${color}, ${0.80 * intensity})`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(cx, cy, padR * 0.46, 0, Math.PI * 2);
        ctx.stroke();

        for (let g = 0; g < 6; g++) {
            const ga = rotInner + g * (Math.PI / 3);
            const gx = cx + Math.cos(ga) * (padR * 0.46);
            const gy = cy + Math.sin(ga) * (padR * 0.46);
            ctx.fillStyle = `rgba(${color}, ${0.95 * intensity})`;
            ctx.beginPath();
            ctx.arc(gx, gy, 2, 0, Math.PI * 2);
            ctx.fill();
        }

        // 4. Central Quantum Singularity Core (Intense Glowing Vortex)
        const coreHeat = 0.85 + 0.15 * Math.sin(time * 5);
        const coreGrad = ctx.createRadialGradient(cx, cy, 1, cx, cy, padR * 0.28);
        coreGrad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
        coreGrad.addColorStop(0.35, `rgba(${color}, ${coreHeat * 0.9})`);
        coreGrad.addColorStop(0.75, `rgba(${color}, ${coreHeat * 0.4})`);
        coreGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = coreGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, padR * 0.28, 0, Math.PI * 2);
        ctx.fill();

        // 5. Transmat Motes Swirling in a 360° Spiral Vortex
        const moteCount = Math.floor(40 * qty);
        for (let m = 0; m < moteCount; m++) {
            const mProg = ((time * 0.7 + m / moteCount) % 1.0);
            const mVortexAngle = m * 2.399 + time * 2.5 + mProg * 4.0;
            const mDist = padR * Math.sqrt(mProg) * 0.95;
            const mx = cx + Math.cos(mVortexAngle) * mDist;
            const my = cy + Math.sin(mVortexAngle) * mDist;
            const mAlpha = Math.sin(mProg * Math.PI) * 0.90 * intensity;
            const mSize = 1.5 + mProg * 2.2;

            ctx.fillStyle = `rgba(${color}, ${mAlpha})`;
            ctx.fillRect(mx - mSize * 0.5, my - mSize * 0.5, mSize, mSize);
        }

        // 6. Planar Shockwave Waves Expanding Outward in 360° across floor
        const shockProg = (time * 0.45) % 1.0;
        const shockAlpha = (1 - shockProg) * 0.65 * intensity;
        ctx.strokeStyle = `rgba(${color}, ${shockAlpha})`;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.arc(cx, cy, padR * shockProg * 1.35, 0, Math.PI * 2);
        ctx.stroke();

        ctx.restore();
    }

    drawRealisticCyberTerminal(el, ctx, W, H, dt) {
        const time = el.stateTime;
        const intensity = el.config.intensity || 1.0;
        const variant = el.config.variant || 'tactical_hud';

        ctx.save();
        ctx.globalCompositeOperation = 'lighter';

        let color = '0, 240, 255';
        if (variant === 'neon_sign') color = '255, 30, 160';
        else if (variant === 'reactor_terminal') color = '255, 40, 40';
        else if (variant === 'cyber_workstation') color = '0, 255, 120';

        const pad = 10;
        const tw = W - pad * 2;
        const th = H - pad * 2;

        ctx.strokeStyle = `rgba(${color}, ${0.85 * intensity})`;
        ctx.lineWidth = 1.5;
        const chamf = 12;
        ctx.beginPath();
        ctx.moveTo(pad + chamf, pad);
        ctx.lineTo(W - pad - chamf, pad);
        ctx.lineTo(W - pad, pad + chamf);
        ctx.lineTo(W - pad, H - pad - chamf);
        ctx.lineTo(W - pad - chamf, H - pad);
        ctx.lineTo(pad + chamf, H - pad);
        ctx.lineTo(pad, H - pad - chamf);
        ctx.lineTo(pad, pad + chamf);
        ctx.closePath();
        ctx.stroke();

        for (let l = 0; l < 3; l++) {
            const ledAlpha = (Math.sin(time * 6 + l * 2) > 0) ? 0.9 : 0.3;
            ctx.fillStyle = `rgba(${color}, ${ledAlpha * intensity})`;
            ctx.beginPath();
            ctx.arc(pad + 20 + l * 12, pad + 8, 2.5, 0, Math.PI * 2);
            ctx.fill();
        }

        if (variant === 'tactical_hud') {
            const rcx = W * 0.42;
            const rcy = H * 0.52;
            const rRad = Math.min(tw, th) * 0.36;

            ctx.strokeStyle = `rgba(${color}, ${0.35 * intensity})`;
            ctx.lineWidth = 1.0;
            ctx.beginPath();
            ctx.arc(rcx, rcy, rRad, 0, Math.PI * 2);
            ctx.arc(rcx, rcy, rRad * 0.5, 0, Math.PI * 2);
            ctx.moveTo(rcx - rRad, rcy); ctx.lineTo(rcx + rRad, rcy);
            ctx.moveTo(rcx, rcy - rRad); ctx.lineTo(rcx, rcy + rRad);
            ctx.stroke();

            const sweep = time * 2.2;
            ctx.strokeStyle = `rgba(${color}, ${0.9 * intensity})`;
            ctx.lineWidth = 1.8;
            ctx.beginPath();
            ctx.moveTo(rcx, rcy);
            ctx.lineTo(rcx + Math.cos(sweep) * rRad, rcy + Math.sin(sweep) * rRad);
            ctx.stroke();

            const blips = [
                { a: 0.8, dist: 0.65 },
                { a: 2.4, dist: 0.82 },
                { a: 4.5, dist: 0.45 }
            ];
            blips.forEach(b => {
                const diff = (sweep - b.a) % (Math.PI * 2);
                if (diff >= 0 && diff < 1.2) {
                    const bx = rcx + Math.cos(b.a) * rRad * b.dist;
                    const by = rcy + Math.sin(b.a) * rRad * b.dist;
                    const bAlpha = (1 - diff / 1.2) * intensity;
                    ctx.fillStyle = `rgba(255, 60, 60, ${bAlpha})`;
                    ctx.beginPath();
                    ctx.arc(bx, by, 3.5, 0, Math.PI * 2);
                    ctx.fill();
                }
            });

            ctx.strokeStyle = `rgba(${color}, ${0.85 * intensity})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            const waveY = H - pad - 18;
            for (let x = pad + 15; x < W - pad - 15; x += 4) {
                const wy = waveY + Math.sin(x * 0.12 - time * 8) * 8 * Math.cos(time * 2);
                if (x === pad + 15) ctx.moveTo(x, wy);
                else ctx.lineTo(x, wy);
            }
            ctx.stroke();

        } else if (variant === 'neon_sign') {
            ctx.font = 'bold 22px sans-serif';
            ctx.textAlign = 'center';
            const flicker = 0.85 + 0.15 * Math.sin(time * 28);
            ctx.fillStyle = `rgba(${color}, ${flicker * intensity})`;
            ctx.fillText('アクセス制限', W / 2, H * 0.45);

            ctx.font = 'bold 12px monospace';
            ctx.fillText('RESTRICTED AREA // LVL 5', W / 2, H * 0.65);

        } else if (variant === 'reactor_terminal') {
            const alertPulse = Math.sin(time * 6) > 0;
            ctx.fillStyle = alertPulse ? `rgba(255, 40, 40, ${0.9 * intensity})` : `rgba(255, 40, 40, ${0.3 * intensity})`;
            ctx.font = 'bold 14px monospace';
            ctx.textAlign = 'center';
            ctx.fillText('⚠️ REACTOR OVERLOAD', W / 2, H * 0.38);

            const gaugeProg = 0.65 + 0.3 * Math.sin(time * 2);
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
            ctx.strokeRect(W * 0.15, H * 0.52, W * 0.7, 14);
            ctx.fillStyle = `rgba(255, 50, 50, ${intensity})`;
            ctx.fillRect(W * 0.15, H * 0.52, W * 0.7 * gaugeProg, 14);

            ctx.font = '10px monospace';
            ctx.fillText(`CORE TEMP: ${(gaugeProg * 4500).toFixed(0)} K`, W / 2, H * 0.78);

        } else {
            ctx.font = '10px monospace';
            ctx.fillStyle = `rgba(${color}, ${0.85 * intensity})`;
            const lines = [
                '0x7F4B > MEM_ALLOC OK',
                'PORT 8080 : LISTENING',
                'CRYPTO_HASH: 9F2A..E8',
                'DATA STREAM: SYNCHRONIZED',
                'NET_SYS: RUNNING'
            ];
            lines.forEach((l, idx) => {
                ctx.fillText(l, pad + 16, pad + 32 + idx * 18);
            });
        }

        ctx.restore();
    }

    drawRealisticToxicSpill(el, ctx, W, H, dt) {
        const time = el.stateTime;
        const intensity = el.config.intensity || 1.0;
        const qty = el.config.quantity !== undefined ? el.config.quantity : 1.0;
        const variant = el.config.variant || 'radioactive_sludge';

        const cx = W / 2;
        const cy = H / 2;
        const baseRad = Math.min(W, H) * 0.38;

        if (variant === 'radioactive_sludge') {
            // ================================================================
            // LEAKING BIOHAZARD BARREL SPILL
            // ================================================================
            ctx.save();

            // 1. Chartreuse Sludge Puddle Body with Corrosive Edges
            const innerCol = '57, 255, 20';
            const edgeCol = '15, 80, 10';
            const vaporCol = '120, 255, 80';

            ctx.beginPath();
            const steps = 36;
            for (let i = 0; i <= steps; i++) {
                const angle = (Math.PI * 2 / steps) * i;
                const rOff = Math.sin(angle * 3 + time * 0.8) * 10 + Math.cos(angle * 5 - time * 0.5) * 7;
                const r = baseRad + rOff;
                const px = cx + Math.cos(angle) * r;
                const py = cy + Math.sin(angle) * (r * 0.72);
                if (i === 0) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
            }
            ctx.closePath();

            const puddleGrad = ctx.createRadialGradient(cx, cy, 4, cx, cy, baseRad * 1.1);
            puddleGrad.addColorStop(0, `rgba(${innerCol}, ${0.88 * intensity})`);
            puddleGrad.addColorStop(0.7, `rgba(${edgeCol}, ${0.78 * intensity})`);
            puddleGrad.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = puddleGrad;
            ctx.fill();

            ctx.strokeStyle = `rgba(${innerCol}, ${0.70 * intensity})`;
            ctx.lineWidth = 2.0;
            ctx.stroke();

            // 2. Dented Yellow 55-Gallon Steel Biohazard Barrel Resting on its Side
            const bx = cx - baseRad * 0.38;
            const by = cy - baseRad * 0.22;
            const bW = baseRad * 0.65;
            const bH = baseRad * 0.38;
            const bRot = -0.32;

            ctx.save();
            ctx.translate(bx, by);
            ctx.rotate(bRot);

            // Barrel drop shadow in the sludge
            ctx.fillStyle = 'rgba(6, 40, 8, 0.65)';
            ctx.beginPath();
            ctx.ellipse(3, 4, bW * 0.52, bH * 0.52, 0, 0, Math.PI * 2);
            ctx.fill();

            // Yellow steel cylindrical drum body
            ctx.fillStyle = '#eab308';
            ctx.strokeStyle = '#ca8a04';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.roundRect(-bW * 0.5, -bH * 0.5, bW, bH, 6);
            ctx.fill();
            ctx.stroke();

            // Heavy reinforced steel chime hoops / rib rings
            ctx.strokeStyle = '#854d0e';
            ctx.lineWidth = 3;
            [-0.28, 0, 0.28].forEach(xOff => {
                ctx.beginPath();
                ctx.moveTo(bW * xOff, -bH * 0.5);
                ctx.lineTo(bW * xOff, bH * 0.5);
                ctx.stroke();
            });

            // Black hazard warning diagonal stripes on top and bottom
            ctx.fillStyle = '#18181b';
            ctx.fillRect(-bW * 0.5, -bH * 0.5, bW * 0.16, bH);

            // Black Biohazard Trefoil Symbol on side of drum
            ctx.fillStyle = '#0f172a';
            ctx.beginPath();
            ctx.arc(bW * 0.08, 0, 4.5, 0, Math.PI * 2);
            ctx.fill();
            for (let a = 0; a < 3; a++) {
                const ang = (a / 3) * Math.PI * 2;
                ctx.beginPath();
                ctx.arc(bW * 0.08 + Math.cos(ang) * 6, Math.sin(ang) * 6, 3.5, 0, Math.PI * 2);
                ctx.fill();
            }

            // Puncture rupture hole at lower edge with sludge stream pouring out
            ctx.fillStyle = '#09090b';
            ctx.beginPath();
            ctx.ellipse(bW * 0.35, bH * 0.32, 5, 3.5, 0.4, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();

            // 3. Sizzling Acid Bubbles in Sludge
            const bubbleCount = Math.floor(18 * qty);
            for (let b = 0; b < bubbleCount; b++) {
                const bProg = ((time * 0.85 + b / bubbleCount) % 1.0);
                const bAngle = b * 3.7;
                const bDist = (baseRad * 0.65) * Math.sin(b * 1.3);
                const pbx = cx + Math.cos(bAngle) * bDist;
                const pby = cy + Math.sin(bAngle) * (bDist * 0.72);
                const bRad = 2 + bProg * 5;
                const bAlpha = Math.sin(bProg * Math.PI) * intensity;

                ctx.fillStyle = `rgba(${innerCol}, ${bAlpha * 0.9})`;
                ctx.beginPath();
                ctx.arc(pbx, pby, bRad, 0, Math.PI * 2);
                ctx.fill();

                ctx.fillStyle = `rgba(255, 255, 255, ${bAlpha * 0.8})`;
                ctx.beginPath();
                ctx.arc(pbx - bRad * 0.3, pby - bRad * 0.3, bRad * 0.3, 0, Math.PI * 2);
                ctx.fill();
            }

            // 4. Corrosive Toxic Vapor Plumes
            const vaporCount = Math.floor(14 * qty);
            for (let v = 0; v < vaporCount; v++) {
                const vProg = ((time * 0.45 + v / vaporCount) % 1.0);
                const vx = cx + Math.sin(v * 4.2 + time) * (baseRad * 0.65);
                const vy = cy - vProg * 38;
                const vRad = 12 + vProg * 22;
                const vAlpha = (1 - vProg) * 0.24 * intensity;

                const vGrad = ctx.createRadialGradient(vx, vy, 2, vx, vy, vRad);
                vGrad.addColorStop(0, `rgba(${vaporCol}, ${vAlpha})`);
                vGrad.addColorStop(1, 'rgba(0,0,0,0)');
                ctx.fillStyle = vGrad;
                ctx.beginPath();
                ctx.arc(vx, vy, vRad, 0, Math.PI * 2);
                ctx.fill();
            }

            ctx.restore();
            return;
        }

        if (variant === 'cryo_coolant') {
            // ================================================================
            // SUB-ZERO CRYO NITROGEN BREACH & DENDRITIC FROST
            // ================================================================
            ctx.save();

            // 1. Spilling Sub-Zero Liquid Nitrogen Pool
            const innerCol = '0, 225, 255';
            const edgeCol = '12, 74, 138';
            const vaporCol = '200, 245, 255';

            ctx.beginPath();
            const steps = 36;
            for (let i = 0; i <= steps; i++) {
                const angle = (Math.PI * 2 / steps) * i;
                const rOff = Math.sin(angle * 4 + time * 0.5) * 8 + Math.cos(angle * 6 - time * 0.3) * 6;
                const r = baseRad + rOff;
                const px = cx + Math.cos(angle) * r;
                const py = cy + Math.sin(angle) * (r * 0.72);
                if (i === 0) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
            }
            ctx.closePath();

            const puddleGrad = ctx.createRadialGradient(cx, cy, 4, cx, cy, baseRad * 1.1);
            puddleGrad.addColorStop(0, `rgba(${innerCol}, ${0.85 * intensity})`);
            puddleGrad.addColorStop(0.7, `rgba(${edgeCol}, ${0.75 * intensity})`);
            puddleGrad.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = puddleGrad;
            ctx.fill();

            // 2. Dendritic Fractal Ice Needles & Frost Crystals Branching Outward
            ctx.strokeStyle = 'rgba(224, 242, 254, 0.85)';
            ctx.lineWidth = 1.6;
            ctx.lineCap = 'round';
            const needleBranches = 12;
            for (let n = 0; n < needleBranches; n++) {
                const na = (n / needleBranches) * Math.PI * 2 + Math.sin(n * 2.3) * 0.2;
                const startR = baseRad * 0.85;
                const sx = cx + Math.cos(na) * startR;
                const sy = cy + Math.sin(na) * (startR * 0.72);
                const nLen = 18 + (n % 4) * 8;
                const ex = sx + Math.cos(na) * nLen;
                const ey = sy + Math.sin(na) * nLen;
                ctx.beginPath();
                ctx.moveTo(sx, sy);
                ctx.lineTo(ex, ey);
                // Sub-branches
                ctx.moveTo(sx + Math.cos(na) * (nLen * 0.5), sy + Math.sin(na) * (nLen * 0.5));
                ctx.lineTo(sx + Math.cos(na + 0.5) * (nLen * 0.8), sy + Math.sin(na + 0.5) * (nLen * 0.8));
                ctx.moveTo(sx + Math.cos(na) * (nLen * 0.5), sy + Math.sin(na) * (nLen * 0.5));
                ctx.lineTo(sx + Math.cos(na - 0.5) * (nLen * 0.8), sy + Math.sin(na - 0.5) * (nLen * 0.8));
                ctx.stroke();
            }

            // 3. Ruptured Brushed-Aluminum Cryo-Tank Venting Gas
            const tx = cx - baseRad * 0.35;
            const ty = cy - baseRad * 0.18;
            const tW = baseRad * 0.62;
            const tH = baseRad * 0.34;

            ctx.save();
            ctx.translate(tx, ty);
            ctx.rotate(0.25);

            // Tank metal cylinder with cyan cryo-frosting
            ctx.fillStyle = '#94a3b8';
            ctx.strokeStyle = '#64748b';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.roundRect(-tW * 0.5, -tH * 0.5, tW, tH, 7);
            ctx.fill();
            ctx.stroke();

            // Cryo frost crust
            ctx.fillStyle = 'rgba(240, 249, 255, 0.75)';
            ctx.fillRect(-tW * 0.45, -tH * 0.45, tW * 0.9, tH * 0.25);

            // Vent valve & pressure gauge
            ctx.fillStyle = '#0284c7';
            ctx.beginPath();
            ctx.arc(tW * 0.35, 0, 5, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();

            // 4. Rolling Freezing White-Cyan Nitrogen Fog Hugging Floor
            const vaporCount = Math.floor(18 * qty);
            for (let v = 0; v < vaporCount; v++) {
                const vProg = ((time * 0.38 + v / vaporCount) % 1.0);
                const vx = cx + Math.cos(v * 3.7 + time * 0.3) * (baseRad * (0.4 + vProg * 0.7));
                const vy = cy + Math.sin(v * 3.7 + time * 0.3) * (baseRad * (0.3 + vProg * 0.5)) + vProg * 8;
                const vRad = 16 + vProg * 26;
                const vAlpha = (1 - vProg) * 0.32 * intensity;

                const vGrad = ctx.createRadialGradient(vx, vy, 2, vx, vy, vRad);
                vGrad.addColorStop(0, `rgba(${vaporCol}, ${vAlpha})`);
                vGrad.addColorStop(1, 'rgba(0,0,0,0)');
                ctx.fillStyle = vGrad;
                ctx.beginPath();
                ctx.arc(vx, vy, vRad, 0, Math.PI * 2);
                ctx.fill();
            }

            ctx.restore();
            return;
        }

        // Generic fallback for alien_mutagen / caustic_acid
        ctx.save();
        ctx.globalCompositeOperation = 'lighter';
        let innerCol = '230, 20, 190';
        let edgeCol = '80, 5, 70';
        let vaporCol = '255, 120, 220';
        if (variant === 'caustic_acid') {
            innerCol = '250, 220, 10';
            edgeCol = '120, 80, 5';
            vaporCol = '255, 240, 120';
        }

        ctx.beginPath();
        const steps = 36;
        for (let i = 0; i <= steps; i++) {
            const angle = (Math.PI * 2 / steps) * i;
            const rOff = Math.sin(angle * 3 + time * 0.6) * 12 + Math.cos(angle * 5 - time * 0.4) * 8;
            const r = baseRad + rOff;
            const px = cx + Math.cos(angle) * r;
            const py = cy + Math.sin(angle) * (r * 0.75);
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }
        ctx.closePath();

        const puddleGrad = ctx.createRadialGradient(cx, cy, 4, cx, cy, baseRad * 1.1);
        puddleGrad.addColorStop(0, `rgba(${innerCol}, ${0.85 * intensity})`);
        puddleGrad.addColorStop(0.7, `rgba(${edgeCol}, ${0.75 * intensity})`);
        puddleGrad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = puddleGrad;
        ctx.fill();

        ctx.strokeStyle = `rgba(${innerCol}, ${0.65 * intensity})`;
        ctx.lineWidth = 2.0;
        ctx.stroke();
        ctx.restore();
    }

    // ========================================================================
    // 5. PHOTOREALISTIC ATMOSPHERIC WEATHER
    // ========================================================================
    renderWeather(dt) {
        const ctx = this.weatherCtx;
        const W = this.weatherCanvas.width;
        const H = this.weatherCanvas.height;

        ctx.clearRect(0, 0, W, H);
        const { type, intensity, windAngle } = this.weather;
        const qty = (this.weather.quantity !== undefined) ? this.weather.quantity : 1.0;
        const rad = (windAngle * Math.PI) / 180;
        const windX = Math.cos(rad);
        const windY = Math.sin(rad);

        if (type === 'fog') {
            const count = Math.max(3, Math.floor(18 * qty));
            if (this.weatherParticles.length > count) this.weatherParticles.length = count;
            while (this.weatherParticles.length < count) {
                this.weatherParticles.push({
                    x: Math.random() * W,
                    y: Math.random() * H,
                    radius: 180 + Math.random() * 160,
                    speed: 12 + Math.random() * 18,
                    alpha: (0.08 + Math.random() * 0.08) * intensity
                });
            }

            for (let i = 0; i < this.weatherParticles.length; i++) {
                const p = this.weatherParticles[i];
                p.x += windX * p.speed * dt;
                p.y += windY * p.speed * dt * 0.4;

                if (p.x > W + p.radius) p.x = -p.radius;
                if (p.x < -p.radius) p.x = W + p.radius;

                const grad = ctx.createRadialGradient(p.x, p.y, p.radius * 0.05, p.x, p.y, p.radius);
                grad.addColorStop(0, `rgba(215, 230, 240, ${p.alpha})`);
                grad.addColorStop(0.5, `rgba(200, 220, 235, ${p.alpha * 0.6})`);
                grad.addColorStop(1, 'rgba(190, 210, 230, 0)');

                ctx.fillStyle = grad;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();
            }

        } else if (type === 'rain') {
            const count = Math.max(15, Math.floor(220 * intensity * qty));
            if (this.weatherParticles.length > count) this.weatherParticles.length = count;
            while (this.weatherParticles.length < count) {
                const isNear = Math.random() < 0.35;
                this.weatherParticles.push({
                    x: Math.random() * W,
                    y: -Math.random() * 60,
                    len: isNear ? (18 + Math.random() * 14) : (10 + Math.random() * 10),
                    speed: isNear ? (750 + Math.random() * 300) : (500 + Math.random() * 200),
                    alpha: isNear ? 0.45 : 0.22,
                    isNear: isNear
                });
            }

            ctx.strokeStyle = 'rgba(210, 235, 255, 0.6)';
            ctx.lineWidth = 1.1;
            ctx.beginPath();

            for (let i = 0; i < this.weatherParticles.length; i++) {
                const p = this.weatherParticles[i];
                p.x += windX * 140 * dt;
                p.y += p.speed * dt;

                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.x + windX * p.len * 0.25, p.y + p.len);

                if (p.y > H) {
                    p.y = -20;
                    p.x = Math.random() * W;
                }
            }
            ctx.stroke();

        } else if (type === 'sandstorm') {
            const count = Math.max(15, Math.floor(180 * intensity * qty));
            if (this.weatherParticles.length > count) this.weatherParticles.length = count;
            while (this.weatherParticles.length < count) {
                this.weatherParticles.push({
                    x: Math.random() * W,
                    y: Math.random() * H,
                    size: 1 + Math.random() * 2.5,
                    speed: 280 + Math.random() * 240,
                    alpha: 0.25 + Math.random() * 0.35
                });
            }

            for (let i = 0; i < this.weatherParticles.length; i++) {
                const p = this.weatherParticles[i];
                p.x += windX * p.speed * dt;
                p.y += windY * p.speed * dt * 0.35;

                if (p.x > W + 20) p.x = -20;
                if (p.x < -20) p.x = W + 20;

                ctx.fillStyle = `rgba(215, 185, 140, ${p.alpha})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            }

        } else if (type === 'fireflies') {
            const count = Math.max(6, Math.floor(50 * intensity * qty));
            if (this.weatherParticles.length > count) this.weatherParticles.length = count;
            while (this.weatherParticles.length < count) {
                this.weatherParticles.push({
                    x: Math.random() * W,
                    y: Math.random() * H,
                    radius: 2 + Math.random() * 2,
                    vx: (Math.random() - 0.5) * 20,
                    vy: (Math.random() - 0.5) * 20,
                    phase: Math.random() * Math.PI * 2
                });
            }

            for (let i = 0; i < this.weatherParticles.length; i++) {
                const p = this.weatherParticles[i];
                p.phase += dt * 2.5;
                p.x += p.vx * dt + Math.sin(p.phase) * 12 * dt;
                p.y += p.vy * dt + Math.cos(p.phase * 0.8) * 12 * dt;

                if (p.x < 0) p.x = W;
                if (p.x > W) p.x = 0;
                if (p.y < 0) p.y = H;
                if (p.y > H) p.y = 0;

                const glow = Math.max(0.1, 0.5 + Math.sin(p.phase) * 0.5);
                ctx.fillStyle = `rgba(210, 255, 120, ${glow})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();
            }

        } else if (type === 'snow') {
            const count = Math.max(15, Math.floor(165 * intensity * qty));
            if (this.weatherParticles.length > count) this.weatherParticles.length = count;
            while (this.weatherParticles.length < count) {
                const depth = 0.35 + Math.random() * 0.65;
                this.weatherParticles.push({
                    x: Math.random() * W,
                    y: Math.random() * H,
                    radius: (1.4 + Math.random() * 2.8) * depth,
                    speedY: (38 + Math.random() * 52) * depth,
                    driftX: (18 + Math.random() * 26) * depth,
                    phase: Math.random() * Math.PI * 2,
                    alpha: (0.45 + Math.random() * 0.45) * depth
                });
            }

            for (let i = 0; i < this.weatherParticles.length; i++) {
                const p = this.weatherParticles[i];
                p.phase += dt * 1.8;
                p.x += (windX * p.driftX + Math.sin(p.phase) * 16) * dt;
                p.y += p.speedY * dt;

                if (p.y > H + 10) {
                    p.y = -10;
                    p.x = Math.random() * W;
                }
                if (p.x > W + 10) p.x = -10;
                if (p.x < -10) p.x = W + 10;

                ctx.fillStyle = `rgba(240, 248, 255, ${p.alpha})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();
            }

        } else if (type === 'dust') {
            const count = Math.max(10, Math.floor(95 * intensity * qty));
            if (this.weatherParticles.length > count) this.weatherParticles.length = count;
            while (this.weatherParticles.length < count) {
                this.weatherParticles.push({
                    x: Math.random() * W,
                    y: Math.random() * H,
                    radius: 1.0 + Math.random() * 2.2,
                    vx: (Math.random() - 0.35) * 16,
                    vy: (Math.random() - 0.55) * 12,
                    phase: Math.random() * Math.PI * 2,
                    warm: Math.random() < 0.65
                });
            }

            for (let i = 0; i < this.weatherParticles.length; i++) {
                const p = this.weatherParticles[i];
                p.phase += dt * 1.4;
                p.x += (p.vx + windX * 10 + Math.sin(p.phase) * 6) * dt;
                p.y += (p.vy + windY * 6 + Math.cos(p.phase * 0.9) * 5) * dt;

                if (p.x < -10) p.x = W + 10;
                if (p.x > W + 10) p.x = -10;
                if (p.y < -10) p.y = H + 10;
                if (p.y > H + 10) p.y = -10;

                const shimmer = (0.22 + 0.38 * (0.5 + 0.5 * Math.sin(p.phase))) * Math.min(1.2, intensity);
                ctx.fillStyle = p.warm
                    ? `rgba(245, 228, 185, ${shimmer})`
                    : `rgba(210, 225, 240, ${shimmer})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();
            }
        } else if (type === 'hyperspace') {
            const count = Math.max(25, Math.floor(180 * intensity * qty));
            if (this.weatherParticles.length > count) this.weatherParticles.length = count;
            const cx = W / 2;
            const cy = H / 2;
            const maxR = Math.sqrt(cx * cx + cy * cy);

            while (this.weatherParticles.length < count) {
                const angle = Math.random() * Math.PI * 2;
                const r = Math.random() * maxR;
                this.weatherParticles.push({
                    angle: angle,
                    r: r,
                    speed: 260 + Math.random() * 340,
                    trail: 16 + Math.random() * 36,
                    isBlue: Math.random() < 0.65
                });
            }

            ctx.save();
            ctx.globalCompositeOperation = 'lighter';

            const warpGrad = ctx.createRadialGradient(cx, cy, 2, cx, cy, 140);
            warpGrad.addColorStop(0, `rgba(0, 220, 255, ${0.45 * intensity})`);
            warpGrad.addColorStop(0.6, `rgba(120, 50, 255, ${0.18 * intensity})`);
            warpGrad.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = warpGrad;
            ctx.beginPath();
            ctx.arc(cx, cy, 140, 0, Math.PI * 2);
            ctx.fill();

            for (let i = 0; i < this.weatherParticles.length; i++) {
                const p = this.weatherParticles[i];
                const accel = 1 + (p.r / maxR) * 2.8;
                p.r += p.speed * accel * dt;

                const headX = cx + Math.cos(p.angle) * p.r;
                const headY = cy + Math.sin(p.angle) * p.r;
                const tailR = Math.max(0, p.r - p.trail * accel);
                const tailX = cx + Math.cos(p.angle) * tailR;
                const tailY = cy + Math.sin(p.angle) * tailR;

                const alpha = Math.min(1.0, (p.r / (maxR * 0.35))) * 0.9 * intensity;
                const col = p.isBlue ? `rgba(160, 235, 255, ${alpha})` : `rgba(255, 255, 255, ${alpha})`;

                ctx.strokeStyle = col;
                ctx.lineWidth = 1.0 + (p.r / maxR) * 2.0;
                ctx.beginPath();
                ctx.moveTo(tailX, tailY);
                ctx.lineTo(headX, headY);
                ctx.stroke();

                if (p.r > maxR) {
                    p.r = Math.random() * 30;
                    p.angle = Math.random() * Math.PI * 2;
                }
            }
            ctx.restore();

        } else if (type === 'neon_rain') {
            const count = Math.max(20, Math.floor(220 * intensity * qty));
            if (this.weatherParticles.length > count) this.weatherParticles.length = count;

            while (this.weatherParticles.length < count) {
                const isMagenta = Math.random() < 0.45;
                this.weatherParticles.push({
                    x: Math.random() * W,
                    y: -Math.random() * 80,
                    len: 20 + Math.random() * 22,
                    speed: 680 + Math.random() * 280,
                    isMagenta: isMagenta,
                    splashRadius: 0,
                    splashed: false
                });
            }

            ctx.save();
            ctx.globalCompositeOperation = 'lighter';
            for (let i = 0; i < this.weatherParticles.length; i++) {
                const p = this.weatherParticles[i];
                p.x += windX * 120 * dt;
                p.y += p.speed * dt;

                const col = p.isMagenta ? '255, 30, 140' : '0, 245, 255';
                ctx.strokeStyle = `rgba(${col}, ${0.75 * intensity})`;
                ctx.lineWidth = 1.4;
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.x + windX * p.len * 0.25, p.y + p.len);
                ctx.stroke();

                if (p.y > H - 15 && !p.splashed) {
                    p.splashed = true;
                    p.splashRadius = 2;
                }

                if (p.splashed) {
                    p.splashRadius += dt * 32;
                    const sAlpha = Math.max(0, 1 - p.splashRadius / 14) * 0.8 * intensity;
                    ctx.strokeStyle = `rgba(${col}, ${sAlpha})`;
                    ctx.lineWidth = 1.0;
                    ctx.beginPath();
                    ctx.ellipse(p.x, H - 8, p.splashRadius * 1.5, p.splashRadius * 0.5, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }

                if (p.y > H + 20) {
                    p.y = -20;
                    p.x = Math.random() * W;
                    p.splashed = false;
                    p.splashRadius = 0;
                }
            }
            ctx.restore();
        }
    }

    // ========================================================================
    // 6. PROCEDURAL AMBIENT AUDIO SYNTHESIZER
    // ========================================================================
    initAudio() {
        if (this.audioCtx) return;
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.audioCtx = new AudioContext();
        } catch (e) {}
    }

    toggleAudio(enable) {
        if (enable === undefined) enable = !this.audioEnabled;
        this.audioEnabled = enable;
        if (this.audioEnabled) {
            this.initAudio();
            if (this.audioCtx && this.audioCtx.state === 'suspended') {
                this.audioCtx.resume();
            }
        }
        this.updateAudioForElements();
        return this.audioEnabled;
    }

    setMasterVolume(val) {
        this.masterVolume = Math.max(0, Math.min(1, val));
        this.updateAudioForElements();
    }

    setSoundscapeMode(mode) {
        this.soundscapeMode = mode || 'auto';
        this.notify();
        this.updateAudioForElements();
    }

    setEnvironmentSoundscape(envKey) {
        this.detectedEnvironment = envKey || 'forest';
        this.updateAudioForElements();
    }

    getEffectiveSoundscape() {
        if (this.soundscapeMode && this.soundscapeMode !== 'auto') {
            return this.soundscapeMode;
        }
        return this.detectedEnvironment || 'forest';
    }

    updateAudioForElements() {
        if (!this.audioEnabled || !this.audioCtx) {
            this.stopAllAudio();
            return;
        }

        const hasCampfire = this.elements.some(e => e.type === 'campfire' || e.type === 'torch' || e.type === 'inferno');
        const hasRiver = this.elements.some(e => e.type === 'river' || e.type === 'mud');
        const hasWaterfall = this.elements.some(e => e.type === 'waterfall');
        const hasLavaSeam = this.elements.some(e => e.type === 'lava_seam');
        const hasRain = this.weather.type === 'rain';
        const hasWindWeather = this.weather.type === 'sandstorm' || this.weather.type === 'snow';

        if (hasCampfire && !this.audioNodes['fire']) {
            this.startFireSound();
        } else if (!hasCampfire && this.audioNodes['fire']) {
            this.stopSound('fire');
        } else if (this.audioNodes['fire']) {
            this.audioNodes['fire'].gain.gain.value = this.masterVolume * 0.42;
        }

        if (hasRiver && !this.audioNodes['river']) {
            this.startRiverSound();
        } else if (!hasRiver && this.audioNodes['river']) {
            this.stopSound('river');
        } else if (this.audioNodes['river']) {
            this.audioNodes['river'].gain.gain.value = this.masterVolume * 0.36;
        }

        if (hasWaterfall && !this.audioNodes['waterfall']) {
            this.startWaterfallSound();
        } else if (!hasWaterfall && this.audioNodes['waterfall']) {
            this.stopSound('waterfall');
        } else if (this.audioNodes['waterfall']) {
            this.audioNodes['waterfall'].gain.gain.value = this.masterVolume * 0.44;
        }

        if (hasRain && !this.audioNodes['rain']) {
            this.startRainSound();
        } else if (!hasRain && this.audioNodes['rain']) {
            this.stopSound('rain');
        } else if (this.audioNodes['rain']) {
            this.audioNodes['rain'].gain.gain.value = this.masterVolume * 0.32;
        }

        // Synced Map Environment Soundscape
        let targetEnv = this.getEffectiveSoundscape();
        if (this.soundscapeMode === 'auto') {
            if (this.elements.some(e => e.type === 'hologram' || e.type === 'teleporter')) targetEnv = 'starship';
            else if (this.elements.some(e => e.type === 'cyber_terminal')) targetEnv = 'cyberpunk';
            else if (this.elements.some(e => e.type === 'plasma_leak' || e.type === 'forcefield' || e.type === 'toxic_spill')) targetEnv = 'reactor';
            else if (hasLavaSeam) targetEnv = 'volcano';
            else if (hasWindWeather) targetEnv = 'wind';
        }

        const envKeys = ['env_tavern', 'env_cave', 'env_wind', 'env_forest', 'env_volcano', 'env_chase', 'env_starship', 'env_cyberpunk', 'env_reactor'];
        const activeKey = targetEnv && targetEnv !== 'none' ? `env_${targetEnv}` : null;

        envKeys.forEach(k => {
            if (k !== activeKey && this.audioNodes[k]) {
                this.stopSound(k);
            }
        });

        if (activeKey && !this.audioNodes[activeKey]) {
            if (targetEnv === 'tavern') this.startTavernSoundscape();
            else if (targetEnv === 'cave') this.startCaveSoundscape();
            else if (targetEnv === 'wind') this.startWindSoundscape();
            else if (targetEnv === 'forest') this.startForestSoundscape();
            else if (targetEnv === 'volcano') this.startVolcanoSoundscape();
            else if (targetEnv === 'chase') this.startChaseSoundscape();
            else if (targetEnv === 'starship') this.startStarshipSoundscape();
            else if (targetEnv === 'cyberpunk') this.startCyberpunkSoundscape();
            else if (targetEnv === 'reactor') this.startReactorSoundscape();
        } else if (activeKey && this.audioNodes[activeKey] && this.audioNodes[activeKey].gain) {
            this.audioNodes[activeKey].gain.gain.value = this.masterVolume * (this.audioNodes[activeKey].baseMult || 0.35);
        }
    }

    startFireSound() {
        if (!this.audioCtx) return;
        const bufferSize = this.audioCtx.sampleRate * 2;
        const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            const noise = (Math.random() * 2 - 1) * 0.08;
            const pop = Math.random() < 0.003 ? (Math.random() * 2 - 1) * 0.75 : 0;
            data[i] = noise + pop;
        }

        const noiseNode = this.audioCtx.createBufferSource();
        noiseNode.buffer = buffer;
        noiseNode.loop = true;

        const filter = this.audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 850;

        const gain = this.audioCtx.createGain();
        gain.gain.value = this.masterVolume * 0.42;

        noiseNode.connect(filter);
        filter.connect(gain);
        gain.connect(this.audioCtx.destination);

        noiseNode.start();
        this.audioNodes['fire'] = { source: noiseNode, gain };
    }

    startRiverSound() {
        if (!this.audioCtx) return;
        const bufferSize = this.audioCtx.sampleRate * 2;
        const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * 0.28;
        }

        const noiseNode = this.audioCtx.createBufferSource();
        noiseNode.buffer = buffer;
        noiseNode.loop = true;

        const filter = this.audioCtx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 420;
        filter.Q.value = 1.6;

        const gain = this.audioCtx.createGain();
        gain.gain.value = this.masterVolume * 0.36;

        noiseNode.connect(filter);
        filter.connect(gain);
        gain.connect(this.audioCtx.destination);

        noiseNode.start();
        this.audioNodes['river'] = { source: noiseNode, gain };
    }

    startWaterfallSound() {
        if (!this.audioCtx) return;
        const bufferSize = this.audioCtx.sampleRate * 2;
        const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
        const data = buffer.getChannelData(0);
        let lastOut = 0;
        for (let i = 0; i < bufferSize; i++) {
            const white = Math.random() * 2 - 1;
            lastOut = (lastOut + 0.04 * white) / 1.04;
            data[i] = lastOut * 1.6;
        }

        const noiseNode = this.audioCtx.createBufferSource();
        noiseNode.buffer = buffer;
        noiseNode.loop = true;

        const filter = this.audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 620;

        const gain = this.audioCtx.createGain();
        gain.gain.value = this.masterVolume * 0.44;

        noiseNode.connect(filter);
        filter.connect(gain);
        gain.connect(this.audioCtx.destination);

        noiseNode.start();
        this.audioNodes['waterfall'] = { source: noiseNode, gain };
    }

    startRainSound() {
        if (!this.audioCtx) return;
        const bufferSize = this.audioCtx.sampleRate * 2;
        const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = (Math.random() * 2 - 1) * 0.22;
        }

        const noiseNode = this.audioCtx.createBufferSource();
        noiseNode.buffer = buffer;
        noiseNode.loop = true;

        const filter = this.audioCtx.createBiquadFilter();
        filter.type = 'highpass';
        filter.frequency.value = 1100;

        const gain = this.audioCtx.createGain();
        gain.gain.value = this.masterVolume * 0.32;

        noiseNode.connect(filter);
        filter.connect(gain);
        gain.connect(this.audioCtx.destination);

        noiseNode.start();
        this.audioNodes['rain'] = { source: noiseNode, gain };
    }

    // --- SYNCED ENVIRONMENT SOUNDSCAPES ---

    startCaveSoundscape() {
        if (!this.audioCtx) return;
        const sr = this.audioCtx.sampleRate;
        const buffer = this.audioCtx.createBuffer(1, sr * 3, sr);
        const data = buffer.getChannelData(0);
        let b0 = 0;
        for (let i = 0; i < data.length; i++) {
            const w = Math.random() * 2 - 1;
            b0 = (b0 + 0.015 * w) / 1.015;
            data[i] = b0 * 1.8;
        }

        const src = this.audioCtx.createBufferSource();
        src.buffer = buffer;
        src.loop = true;

        const filter = this.audioCtx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 145;
        filter.Q.value = 3.2;

        const gain = this.audioCtx.createGain();
        gain.gain.value = this.masterVolume * 0.38;

        src.connect(filter);
        filter.connect(gain);
        gain.connect(this.audioCtx.destination);
        src.start();

        // Periodic resonant subterranean water drips with echo
        const dripTimer = setInterval(() => {
            if (!this.audioEnabled || !this.audioCtx || !this.audioNodes['env_cave']) return;
            if (Math.random() > 0.65) return;
            try {
                const now = this.audioCtx.currentTime;
                const osc = this.audioCtx.createOscillator();
                const dGain = this.audioCtx.createGain();
                const baseFreq = 950 + Math.random() * 650;
                osc.type = 'sine';
                osc.frequency.setValueAtTime(baseFreq, now);
                osc.frequency.exponentialRampToValueAtTime(baseFreq * 1.45, now + 0.09);

                dGain.gain.setValueAtTime(this.masterVolume * 0.14, now);
                dGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);

                osc.connect(dGain);
                dGain.connect(this.audioCtx.destination);
                osc.start(now);
                osc.stop(now + 0.3);
            } catch (e) {}
        }, 1800);

        this.audioNodes['env_cave'] = { source: src, gain, interval: dripTimer, baseMult: 0.38 };
    }

    startTavernSoundscape() {
        if (!this.audioCtx) return;
        const sr = this.audioCtx.sampleRate;
        const buffer = this.audioCtx.createBuffer(1, sr * 4, sr);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < data.length; i++) {
            const t = i / sr;
            // Modulated warm murmur envelope simulating crowd chatter syllables
            const syllableEnv = 0.55 + 0.45 * Math.sin(t * 6.2) * Math.cos(t * 9.7 + Math.sin(t * 2.3));
            data[i] = (Math.random() * 2 - 1) * 0.22 * syllableEnv;
        }

        const src = this.audioCtx.createBufferSource();
        src.buffer = buffer;
        src.loop = true;

        const filter = this.audioCtx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 390;
        filter.Q.value = 1.2;

        const gain = this.audioCtx.createGain();
        gain.gain.value = this.masterVolume * 0.34;

        src.connect(filter);
        filter.connect(gain);
        gain.connect(this.audioCtx.destination);
        src.start();

        // Periodic clinking tankards / glasses & warm lute harmonic notes
        const clinkTimer = setInterval(() => {
            if (!this.audioEnabled || !this.audioCtx || !this.audioNodes['env_tavern']) return;
            if (Math.random() > 0.55) return;
            try {
                const now = this.audioCtx.currentTime;
                const osc = this.audioCtx.createOscillator();
                const cGain = this.audioCtx.createGain();
                const isClink = Math.random() < 0.5;
                osc.type = isClink ? 'triangle' : 'sine';
                const freq = isClink ? (2200 + Math.random() * 900) : [293.66, 329.63, 392.0, 440.0][Math.floor(Math.random() * 4)];
                osc.frequency.setValueAtTime(freq, now);

                cGain.gain.setValueAtTime(this.masterVolume * (isClink ? 0.08 : 0.06), now);
                cGain.gain.exponentialRampToValueAtTime(0.0001, now + (isClink ? 0.16 : 0.65));

                osc.connect(cGain);
                cGain.connect(this.audioCtx.destination);
                osc.start(now);
                osc.stop(now + (isClink ? 0.18 : 0.68));
            } catch (e) {}
        }, 2300);

        this.audioNodes['env_tavern'] = { source: src, gain, interval: clinkTimer, baseMult: 0.34 };
    }

    startWindSoundscape() {
        if (!this.audioCtx) return;
        const sr = this.audioCtx.sampleRate;
        const buffer = this.audioCtx.createBuffer(1, sr * 4, sr);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < data.length; i++) {
            const t = i / sr;
            const gust = 0.5 + 0.5 * Math.sin(t * Math.PI * 0.5);
            data[i] = (Math.random() * 2 - 1) * 0.26 * gust;
        }

        const src = this.audioCtx.createBufferSource();
        src.buffer = buffer;
        src.loop = true;

        const filter = this.audioCtx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 540;
        filter.Q.value = 4.2;

        // LFO to sweep wind howl frequency smoothly
        const lfo = this.audioCtx.createOscillator();
        const lfoGain = this.audioCtx.createGain();
        lfo.frequency.value = 0.22;
        lfoGain.gain.value = 260;
        lfo.connect(filter.frequency);
        lfo.start();

        const gain = this.audioCtx.createGain();
        gain.gain.value = this.masterVolume * 0.35;

        src.connect(filter);
        filter.connect(gain);
        gain.connect(this.audioCtx.destination);
        src.start();

        this.audioNodes['env_wind'] = { source: src, lfo, gain, baseMult: 0.35 };
    }

    startForestSoundscape() {
        if (!this.audioCtx) return;
        const sr = this.audioCtx.sampleRate;
        const buffer = this.audioCtx.createBuffer(1, sr * 4, sr);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < data.length; i++) {
            const t = i / sr;
            const breeze = 0.55 + 0.45 * Math.sin(t * Math.PI * 0.5);
            data[i] = (Math.random() * 2 - 1) * 0.14 * breeze;
        }

        const src = this.audioCtx.createBufferSource();
        src.buffer = buffer;
        src.loop = true;

        const filter = this.audioCtx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.value = 920;
        filter.Q.value = 1.5;

        const gain = this.audioCtx.createGain();
        gain.gain.value = this.masterVolume * 0.26;

        src.connect(filter);
        filter.connect(gain);
        gain.connect(this.audioCtx.destination);
        src.start();

        // Gentle woodland bird song chirps
        const birdTimer = setInterval(() => {
            if (!this.audioEnabled || !this.audioCtx || !this.audioNodes['env_forest']) return;
            if (Math.random() > 0.5) return;
            try {
                const now = this.audioCtx.currentTime;
                const osc = this.audioCtx.createOscillator();
                const bGain = this.audioCtx.createGain();
                const f1 = 1850 + Math.random() * 800;
                osc.type = 'sine';
                osc.frequency.setValueAtTime(f1, now);
                osc.frequency.linearRampToValueAtTime(f1 * 1.18, now + 0.08);
                osc.frequency.linearRampToValueAtTime(f1 * 0.94, now + 0.18);

                bGain.gain.setValueAtTime(this.masterVolume * 0.06, now);
                bGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);

                osc.connect(bGain);
                bGain.connect(this.audioCtx.destination);
                osc.start(now);
                osc.stop(now + 0.24);
            } catch (e) {}
        }, 2800);

        this.audioNodes['env_forest'] = { source: src, gain, interval: birdTimer, baseMult: 0.26 };
    }

    startVolcanoSoundscape() {
        if (!this.audioCtx) return;
        const sr = this.audioCtx.sampleRate;
        const buffer = this.audioCtx.createBuffer(1, sr * 3, sr);
        const data = buffer.getChannelData(0);
        let b0 = 0;
        for (let i = 0; i < data.length; i++) {
            const w = Math.random() * 2 - 1;
            b0 = (b0 + 0.02 * w) / 1.02;
            data[i] = b0 * 2.2;
        }

        const src = this.audioCtx.createBufferSource();
        src.buffer = buffer;
        src.loop = true;

        const filter = this.audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 115;

        const gain = this.audioCtx.createGain();
        gain.gain.value = this.masterVolume * 0.48;

        src.connect(filter);
        filter.connect(gain);
        gain.connect(this.audioCtx.destination);
        src.start();

        this.audioNodes['env_volcano'] = { source: src, gain, baseMult: 0.48 };
    }

    startChaseSoundscape() {
        if (!this.audioCtx) return;
        const sr = this.audioCtx.sampleRate;
        const buffer = this.audioCtx.createBuffer(1, sr * 2, sr);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < data.length; i++) {
            const t = i / sr;
            // Rhythmic chug / propulsion pulse (4 beats per second)
            const chug = 0.4 + 0.6 * Math.pow(0.5 + 0.5 * Math.sin(t * Math.PI * 8), 2);
            data[i] = (Math.random() * 2 - 1) * 0.25 * chug;
        }

        const src = this.audioCtx.createBufferSource();
        src.buffer = buffer;
        src.loop = true;

        const filter = this.audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 340;

        const gain = this.audioCtx.createGain();
        gain.gain.value = this.masterVolume * 0.36;

        src.connect(filter);
        filter.connect(gain);
        gain.connect(this.audioCtx.destination);
        src.start();

        this.audioNodes['env_chase'] = { source: src, gain, baseMult: 0.36 };
    }

    startStarshipSoundscape() {
        if (!this.audioCtx) return;
        const sr = this.audioCtx.sampleRate;
        const buffer = this.audioCtx.createBuffer(1, sr * 3, sr);
        const data = buffer.getChannelData(0);
        let b0 = 0;
        for (let i = 0; i < data.length; i++) {
            const w = Math.random() * 2 - 1;
            b0 = (b0 + 0.01 * w) / 1.01;
            data[i] = b0 * 1.5;
        }

        const noiseSrc = this.audioCtx.createBufferSource();
        noiseSrc.buffer = buffer;
        noiseSrc.loop = true;

        const noiseFilter = this.audioCtx.createBiquadFilter();
        noiseFilter.type = 'lowpass';
        noiseFilter.frequency.value = 95;

        const osc = this.audioCtx.createOscillator();
        osc.type = 'sine';
        osc.frequency.value = 48;

        const masterGain = this.audioCtx.createGain();
        masterGain.gain.value = this.masterVolume * 0.40;

        noiseSrc.connect(noiseFilter);
        noiseFilter.connect(masterGain);
        osc.connect(masterGain);
        masterGain.connect(this.audioCtx.destination);

        noiseSrc.start();
        osc.start();

        const chirpTimer = setInterval(() => {
            if (!this.audioEnabled || !this.audioCtx || !this.audioNodes['env_starship']) return;
            if (Math.random() > 0.6) return;
            try {
                const now = this.audioCtx.currentTime;
                const cOsc = this.audioCtx.createOscillator();
                const cGain = this.audioCtx.createGain();
                const freqs = [1760, 1975, 2349, 2637, 3135];
                cOsc.type = 'sine';
                cOsc.frequency.setValueAtTime(freqs[Math.floor(Math.random() * freqs.length)], now);
                cGain.gain.setValueAtTime(this.masterVolume * 0.08, now);
                cGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);
                cOsc.connect(cGain);
                cGain.connect(this.audioCtx.destination);
                cOsc.start(now);
                cOsc.stop(now + 0.14);
            } catch (e) {}
        }, 2200);

        this.audioNodes['env_starship'] = { source: noiseSrc, extraOsc: osc, gain: masterGain, interval: chirpTimer, baseMult: 0.40 };
    }

    startCyberpunkSoundscape() {
        if (!this.audioCtx) return;
        const sr = this.audioCtx.sampleRate;
        const buffer = this.audioCtx.createBuffer(1, sr * 4, sr);
        const data = buffer.getChannelData(0);
        let b0 = 0;
        for (let i = 0; i < data.length; i++) {
            const w = Math.random() * 2 - 1;
            b0 = (b0 + 0.02 * w) / 1.02;
            data[i] = b0 * 1.8;
        }

        const citySrc = this.audioCtx.createBufferSource();
        citySrc.buffer = buffer;
        citySrc.loop = true;

        const cityFilter = this.audioCtx.createBiquadFilter();
        cityFilter.type = 'bandpass';
        cityFilter.frequency.value = 280;
        cityFilter.Q.value = 1.0;

        const humOsc = this.audioCtx.createOscillator();
        humOsc.type = 'sawtooth';
        humOsc.frequency.value = 60;

        const humFilter = this.audioCtx.createBiquadFilter();
        humFilter.type = 'lowpass';
        humFilter.frequency.value = 180;

        const masterGain = this.audioCtx.createGain();
        masterGain.gain.value = this.masterVolume * 0.36;

        citySrc.connect(cityFilter);
        cityFilter.connect(masterGain);
        humOsc.connect(humFilter);
        humFilter.connect(masterGain);
        masterGain.connect(this.audioCtx.destination);

        citySrc.start();
        humOsc.start();

        const sirenTimer = setInterval(() => {
            if (!this.audioEnabled || !this.audioCtx || !this.audioNodes['env_cyberpunk']) return;
            if (Math.random() > 0.5) return;
            try {
                const now = this.audioCtx.currentTime;
                const sOsc = this.audioCtx.createOscillator();
                const sGain = this.audioCtx.createGain();
                sOsc.type = 'triangle';
                const baseF = 620 + Math.random() * 200;
                sOsc.frequency.setValueAtTime(baseF, now);
                sOsc.frequency.linearRampToValueAtTime(baseF * 1.25, now + 0.6);
                sGain.gain.setValueAtTime(this.masterVolume * 0.05, now);
                sGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.7);
                sOsc.connect(sGain);
                sGain.connect(this.audioCtx.destination);
                sOsc.start(now);
                sOsc.stop(now + 0.75);
            } catch (e) {}
        }, 3400);

        this.audioNodes['env_cyberpunk'] = { source: citySrc, extraOsc: humOsc, gain: masterGain, interval: sirenTimer, baseMult: 0.36 };
    }

    startReactorSoundscape() {
        if (!this.audioCtx) return;
        const osc = this.audioCtx.createOscillator();
        osc.type = 'sawtooth';
        osc.frequency.value = 68;

        const filter = this.audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 220;
        filter.Q.value = 4.0;

        const lfo = this.audioCtx.createOscillator();
        lfo.type = 'sine';
        lfo.frequency.value = 1.2;
        const lfoGain = this.audioCtx.createGain();
        lfoGain.gain.value = 70;
        lfo.connect(lfoGain);
        lfoGain.connect(filter.frequency);

        const masterGain = this.audioCtx.createGain();
        masterGain.gain.value = this.masterVolume * 0.42;

        osc.connect(filter);
        filter.connect(masterGain);
        masterGain.connect(this.audioCtx.destination);

        osc.start();
        lfo.start();

        const ventTimer = setInterval(() => {
            if (!this.audioEnabled || !this.audioCtx || !this.audioNodes['env_reactor']) return;
            if (Math.random() > 0.45) return;
            try {
                const now = this.audioCtx.currentTime;
                const sr = this.audioCtx.sampleRate;
                const buf = this.audioCtx.createBuffer(1, Math.floor(sr * 0.8), sr);
                const d = buf.getChannelData(0);
                for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * 0.25;
                const nSrc = this.audioCtx.createBufferSource();
                nSrc.buffer = buf;
                const hp = this.audioCtx.createBiquadFilter();
                hp.type = 'highpass';
                hp.frequency.value = 1400;
                const vGain = this.audioCtx.createGain();
                vGain.gain.setValueAtTime(this.masterVolume * 0.2, now);
                vGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.7);
                nSrc.connect(hp);
                hp.connect(vGain);
                vGain.connect(this.audioCtx.destination);
                nSrc.start(now);
            } catch (e) {}
        }, 4000);

        this.audioNodes['env_reactor'] = { source: osc, lfo, gain: masterGain, interval: ventTimer, baseMult: 0.42 };
    }

    stopSound(key) {
        if (this.audioNodes[key]) {
            try {
                if (this.audioNodes[key].interval) clearInterval(this.audioNodes[key].interval);
                if (this.audioNodes[key].lfo) this.audioNodes[key].lfo.stop();
                if (this.audioNodes[key].extraOsc) this.audioNodes[key].extraOsc.stop();
                this.audioNodes[key].source.stop();
                this.audioNodes[key].source.disconnect();
            } catch (e) {}
            delete this.audioNodes[key];
        }
    }

    // ========================================================================
    // 25 REALISTIC LIVING OVERLAYS & HAZARDS: DETAILED DRAWING ENGINES
    // ========================================================================

    getOceanWavesPalette(variant = 'tropical_reef') {
        switch (variant) {
            case 'deep_atlantic':
                return {
                    deep: 'rgba(12, 25, 48, 0.95)',
                    mid: 'rgba(28, 64, 115, 0.90)',
                    shallow: 'rgba(56, 115, 185, 0.85)',
                    crest: 'rgba(215, 235, 255, 0.96)',
                    foam: 'rgba(255, 255, 255, 0.94)',
                    shimmer: 'rgba(180, 220, 255, 0.45)'
                };
            case 'stormy_tempest':
                return {
                    deep: 'rgba(18, 24, 34, 0.96)',
                    mid: 'rgba(45, 58, 72, 0.92)',
                    shallow: 'rgba(78, 96, 114, 0.88)',
                    crest: 'rgba(240, 244, 248, 0.98)',
                    foam: 'rgba(255, 255, 255, 0.96)',
                    shimmer: 'rgba(200, 220, 240, 0.50)'
                };
            case 'bioluminescent_night':
                return {
                    deep: 'rgba(4, 8, 22, 0.97)',
                    mid: 'rgba(8, 28, 64, 0.92)',
                    shallow: 'rgba(0, 140, 200, 0.82)',
                    crest: 'rgba(0, 255, 220, 0.98)',
                    foam: 'rgba(120, 255, 245, 0.95)',
                    shimmer: 'rgba(80, 240, 255, 0.70)'
                };
            case 'abyssal_eldritch':
                return {
                    deep: 'rgba(18, 6, 28, 0.97)',
                    mid: 'rgba(52, 12, 72, 0.92)',
                    shallow: 'rgba(110, 25, 135, 0.82)',
                    crest: 'rgba(216, 70, 239, 0.96)',
                    foam: 'rgba(167, 243, 208, 0.92)',
                    shimmer: 'rgba(240, 171, 252, 0.60)'
                };
            case 'tropical_reef':
            default:
                return {
                    deep: 'rgba(6, 78, 105, 0.95)',
                    mid: 'rgba(14, 165, 179, 0.90)',
                    shallow: 'rgba(45, 212, 191, 0.84)',
                    crest: 'rgba(240, 253, 250, 0.98)',
                    foam: 'rgba(255, 255, 255, 0.95)',
                    shimmer: 'rgba(153, 246, 228, 0.55)'
                };
        }
    }

    drawRealisticOceanWaves(el, ctx, W, H, dt) {
        const time = el.stateTime;
        const cfg = el.config || {};
        const intensity = cfg.intensity || 1.0;
        const speed = (cfg.speed || 1.0) * (cfg.swellSpeed || 1.0);
        const pal = this.getOceanWavesPalette(cfg.variant || 'tropical_reef');
        const waveAngle = ((cfg.waveAngle || 25) * Math.PI) / 180;

        ctx.save();

        // 1. Base Ocean Gradient
        const bgGrad = ctx.createLinearGradient(0, 0, Math.cos(waveAngle) * W, Math.sin(waveAngle) * H);
        bgGrad.addColorStop(0, pal.deep);
        bgGrad.addColorStop(0.5, pal.mid);
        bgGrad.addColorStop(1, pal.shallow);
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, W, H);

        // 2. Rolling Ocean Swells & Crests
        const numWaves = 5;
        const waveSpacing = (W + H) / numWaves;
        const progressOffset = (time * speed * 35) % waveSpacing;

        for (let w = 0; w < numWaves + 2; w++) {
            const dist = w * waveSpacing - progressOffset;
            const waveProgress = (dist / (W + H));
            const swellHeight = (22 + Math.sin(time * 1.4 + w * 2.1) * 6) * intensity;

            ctx.save();
            ctx.beginPath();

            // Draw rolling wave front
            const steps = 30;
            const normalX = Math.cos(waveAngle);
            const normalY = Math.sin(waveAngle);
            const perpX = -normalY;
            const perpY = normalX;

            for (let s = -5; s <= steps + 5; s++) {
                const lateral = (s / steps) * Math.max(W, H) * 1.6 - Math.max(W, H) * 0.3;
                const waveCurvature = Math.sin(s * 0.45 + time * 2.2 + w) * 16 + Math.cos(s * 0.9 + time * 1.2) * 8;
                const px = W * 0.5 + normalX * (dist - (W + H) * 0.5) + perpX * lateral + normalX * waveCurvature;
                const py = H * 0.5 + normalY * (dist - (W + H) * 0.5) + perpY * lateral + normalY * waveCurvature;

                if (s === -5) ctx.moveTo(px, py);
                else ctx.lineTo(px, py);
            }

            // Draw swell shading gradient
            ctx.lineWidth = swellHeight;
            ctx.strokeStyle = pal.mid;
            ctx.stroke();

            // Breaking White-Water Crest
            ctx.lineWidth = Math.max(3, swellHeight * 0.32);
            ctx.strokeStyle = pal.crest;
            ctx.stroke();

            // Frothing Spindrift & White Foam Edge
            ctx.lineWidth = Math.max(1.5, swellHeight * 0.16);
            ctx.strokeStyle = pal.foam;
            ctx.stroke();

            ctx.restore();

            // 3. Trailing Dissolving Sea Foam Latticework
            if (!el.particles) el.particles = [];
            const foamTarget = Math.min(60, Math.round(35 * (cfg.quantity || 1.0)));
            while (el.particles.length < foamTarget) {
                el.particles.push({
                    u: Math.random(),
                    v: Math.random(),
                    r: Math.random() * 4 + 1.5,
                    life: Math.random(),
                    alpha: Math.random() * 0.7 + 0.3
                });
            }

            ctx.fillStyle = pal.foam;
            for (let f = 0; f < el.particles.length; f++) {
                const fp = el.particles[f];
                fp.life -= dt * 0.4 * speed;
                if (fp.life <= 0) {
                    fp.life = 1.0;
                    fp.u = Math.random();
                    fp.v = Math.random();
                    fp.r = Math.random() * 4 + 1.5;
                    fp.alpha = Math.random() * 0.6 + 0.3;
                }

                const fx = fp.u * W + Math.sin(time * 1.5 + f) * 6;
                const fy = fp.v * H + Math.cos(time * 1.3 + f) * 5;
                ctx.globalAlpha = fp.alpha * fp.life * (cfg.opacity || 0.92);
                ctx.beginPath();
                ctx.arc(fx, fy, fp.r, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // 4. Subtle Surface Sun Shimmer
        ctx.globalAlpha = 0.35 * intensity;
        ctx.fillStyle = pal.shimmer;
        for (let sh = 0; sh < 12; sh++) {
            const sx = (W * 0.1 + (sh * 73 + time * 18) % (W * 0.8));
            const sy = (H * 0.15 + (sh * 47 + Math.sin(time * 2 + sh) * 30) % (H * 0.7));
            ctx.beginPath();
            ctx.ellipse(sx, sy, 9, 3, 0.4, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.restore();
    }

    getForestPalette(variant = 'ancient_oak') {
        switch (variant) {
            case 'autumn_maple':
                return {
                    trunk: 'rgba(54, 30, 18, 0.85)',
                    shadow: 'rgba(25, 12, 6, 0.35)',
                    deep: 'rgba(154, 52, 18, 0.92)',
                    mid: 'rgba(217, 83, 30, 0.90)',
                    light: 'rgba(234, 138, 38, 0.88)',
                    highlight: 'rgba(250, 199, 72, 0.82)',
                    leaf: 'rgba(230, 100, 30, 0.9)'
                };
            case 'boreal_pine':
                return {
                    trunk: 'rgba(40, 30, 22, 0.88)',
                    shadow: 'rgba(10, 20, 16, 0.38)',
                    deep: 'rgba(18, 52, 38, 0.94)',
                    mid: 'rgba(28, 84, 58, 0.92)',
                    light: 'rgba(45, 118, 82, 0.88)',
                    highlight: 'rgba(74, 158, 114, 0.80)',
                    leaf: 'rgba(40, 120, 80, 0.85)'
                };
            case 'tropical_jungle':
                return {
                    trunk: 'rgba(48, 36, 24, 0.85)',
                    shadow: 'rgba(8, 28, 14, 0.36)',
                    deep: 'rgba(12, 68, 32, 0.94)',
                    mid: 'rgba(22, 128, 56, 0.92)',
                    light: 'rgba(48, 184, 76, 0.88)',
                    highlight: 'rgba(110, 225, 110, 0.82)',
                    leaf: 'rgba(40, 190, 80, 0.9)'
                };
            case 'cherry_blossom':
                return {
                    trunk: 'rgba(56, 38, 34, 0.85)',
                    shadow: 'rgba(40, 20, 28, 0.32)',
                    deep: 'rgba(180, 72, 110, 0.92)',
                    mid: 'rgba(230, 115, 155, 0.90)',
                    light: 'rgba(255, 168, 198, 0.88)',
                    highlight: 'rgba(255, 218, 232, 0.84)',
                    leaf: 'rgba(255, 150, 185, 0.9)'
                };
            case 'haunted_deadwood':
                return {
                    trunk: 'rgba(32, 28, 30, 0.92)',
                    shadow: 'rgba(10, 8, 12, 0.45)',
                    deep: 'rgba(45, 42, 48, 0.90)',
                    mid: 'rgba(68, 64, 74, 0.86)',
                    light: 'rgba(96, 92, 104, 0.80)',
                    highlight: 'rgba(140, 138, 150, 0.70)',
                    leaf: 'rgba(80, 75, 85, 0.75)'
                };
            case 'alien_fungal':
                return {
                    trunk: 'rgba(45, 20, 60, 0.88)',
                    shadow: 'rgba(20, 5, 30, 0.40)',
                    deep: 'rgba(78, 18, 105, 0.94)',
                    mid: 'rgba(138, 43, 184, 0.92)',
                    light: 'rgba(192, 75, 245, 0.88)',
                    highlight: 'rgba(0, 255, 220, 0.85)',
                    leaf: 'rgba(0, 240, 210, 0.85)'
                };
            case 'ancient_oak':
            default:
                return {
                    trunk: 'rgba(48, 32, 20, 0.88)',
                    shadow: 'rgba(12, 24, 10, 0.36)',
                    deep: 'rgba(20, 65, 25, 0.94)',
                    mid: 'rgba(36, 105, 42, 0.92)',
                    light: 'rgba(65, 148, 68, 0.88)',
                    highlight: 'rgba(115, 198, 102, 0.82)',
                    leaf: 'rgba(55, 135, 60, 0.9)'
                };
        }
    }

    drawRealisticForest(el, ctx, W, H, dt) {
        const time = el.stateTime;
        const cfg = el.config || {};
        const intensity = cfg.intensity || 1.0;
        const speed = cfg.speed || 1.0;
        const elScale = Math.max(0.25, Math.min(3.0, parseFloat(cfg.elementScale !== undefined ? cfg.elementScale : (cfg.scale !== undefined ? cfg.scale : 1.0)) || 1.0));
        const rough = Math.max(0, Math.min(2.0, parseFloat(cfg.fractalRoughness !== undefined ? cfg.fractalRoughness : 0.75)));
        const pal = this.getForestPalette(cfg.variant || 'ancient_oak');

        // Handle entity scaling explicitly per-tree so branches and foliage scale together
        const prevAutoScale = el._autoScaleEntities;
        el._autoScaleEntities = false;

        // Multi-tree population persistence
        const baseDensity = cfg.density !== undefined ? cfg.density : 16;
        const qty = cfg.quantity !== undefined ? cfg.quantity : 1.0;
        const targetTreeCount = Math.max(6, Math.min(40, Math.round(baseDensity * qty)));

        if (!el.forestTrees || el.forestTrees.length !== targetTreeCount) {
            el.forestTrees = [];
            // Seeded pseudo-random distribution
            for (let i = 0; i < targetTreeCount; i++) {
                const seed = (i + 1) * 9301 + 49297;
                const rnd1 = ((seed % 233280) / 233280);
                const rnd2 = (((seed * 3) % 233280) / 233280);
                const rnd3 = (((seed * 7) % 233280) / 233280);
                const rnd4 = (((seed * 11) % 233280) / 233280);

                el.forestTrees.push({
                    u: 0.12 + rnd1 * 0.76,
                    v: 0.12 + rnd2 * 0.76,
                    radius: 28 + rnd3 * 36,
                    aspect: 0.85 + rnd4 * 0.3,
                    phase: rnd1 * Math.PI * 2,
                    lobes: 6 + Math.floor(rnd2 * 5),
                    speciesVariant: i % 3
                });
            }
            // Sort trees by Y coordinate for correct top-down 2.5D visual occlusion
            el.forestTrees.sort((a, b) => a.v - b.v);
        }

        ctx.save();

        // 1. Unified Wind Swell passing across the entire forest
        const forestWindX = (Math.sin(time * 1.1 * speed) * 0.65 + Math.sin(time * 0.55 * speed) * 0.35) * (W * 0.024) * intensity;
        const forestWindY = (Math.cos(time * 0.95 * speed) * 0.6 + Math.sin(time * 0.7 * speed) * 0.4) * (H * 0.018) * intensity;

        // 2. Render each tree in the forest with Fractal Botanical Detail
        for (let t = 0; t < el.forestTrees.length; t++) {
            const tree = el.forestTrees[t];
            const cx = tree.u * W;
            const cy = tree.v * H;
            const rx = tree.radius * (W / 440) * elScale;
            const ry = tree.radius * tree.aspect * (H / 400) * elScale;

            // Per-tree out-of-sync multi-harmonic sway
            const localSwayX = forestWindX + Math.sin(time * 1.8 * speed + tree.phase) * (rx * 0.07) * intensity;
            const localSwayY = forestWindY + Math.cos(time * 1.5 * speed + tree.phase) * (ry * 0.05) * intensity;
            const localRot = Math.sin(time * 1.4 * speed + tree.phase) * 0.06 * intensity;

            // A. Offset Fractal Ground Shadow
            ctx.fillStyle = pal.shadow;
            for (let s = 0; s < tree.lobes; s++) {
                const ang = (s / tree.lobes) * Math.PI * 2;
                const sx = cx + rx * 0.15 + localSwayX * 0.4 + Math.cos(ang) * rx * 0.65;
                const sy = cy + ry * 0.22 + localSwayY * 0.4 + Math.sin(ang) * ry * 0.65;
                this.traceFractalLobe(ctx, sx, sy, rx * 0.48, ry * 0.45, ang * 0.5, rough * 0.85, tree.phase + s, 16);
                ctx.fill();
            }

            // B. Recursive Forked Boughs / Branches (peek through leaves)
            const boughDepth = rough > 0.65 ? 3 : 2;
            for (let b = 0; b < 5; b++) {
                const bAng = (b / 5) * Math.PI * 2 + tree.phase + localRot * 0.5;
                this.drawFractalTwigBranch(
                    ctx,
                    cx + localSwayX * 0.25,
                    cy + localSwayY * 0.25,
                    rx * 0.48,
                    bAng,
                    Math.max(2, rx * 0.08),
                    boughDepth,
                    rough,
                    tree.phase + b,
                    pal.trunk
                );
            }

            // C. Multi-Tier Fractal Canopy Foliage Lobes (Deep -> Mid -> Sunlit -> Highlights)
            const tiers = [
                { color: pal.deep, count: tree.lobes, rMult: 0.54, sizeMult: 0.50, centerMult: 0.62, sway: 0.65, alpha: 0.94 },
                { color: pal.mid, count: tree.lobes + 1, rMult: 0.42, sizeMult: 0.44, centerMult: 0.48, sway: 0.90, alpha: 0.92 },
                { color: pal.light, count: tree.lobes, rMult: 0.30, sizeMult: 0.37, centerMult: 0.34, sway: 1.15, alpha: 0.89 },
                { color: pal.highlight, count: Math.max(4, tree.lobes - 1), rMult: 0.17, sizeMult: 0.28, centerMult: 0.22, sway: 1.35, alpha: 0.84 }
            ];

            for (let ti = 0; ti < tiers.length; ti++) {
                const tier = tiers[ti];
                const tierCx = cx + localSwayX * tier.sway;
                const tierCy = cy + localSwayY * tier.sway;

                if (ti === 1 && rough > 0.2) {
                    ctx.fillStyle = pal.shadow;
                    ctx.globalAlpha = Math.min(0.65, 0.28 + rough * 0.18) * (cfg.opacity || 0.95);
                    for (let c = 0; c < tier.count; c++) {
                        const cAng = ((c + 0.5) / tier.count) * Math.PI * 2 + tree.phase;
                        const cxOff = tierCx + Math.cos(cAng + localRot) * rx * 0.46;
                        const cyOff = tierCy + Math.sin(cAng + localRot) * ry * 0.46;
                        this.traceFractalLobe(ctx, cxOff, cyOff, rx * 0.22, ry * 0.20, cAng, rough * 0.9, tree.phase + c * 2.1, 14);
                        ctx.fill();
                    }
                }

                ctx.fillStyle = tier.color;
                ctx.globalAlpha = tier.alpha * (cfg.opacity || 0.95);

                // Central cohesive dome for this canopy tier
                this.traceFractalLobe(
                    ctx,
                    tierCx,
                    tierCy,
                    rx * tier.centerMult,
                    ry * tier.centerMult,
                    localRot + ti * 0.4,
                    rough * 0.85,
                    tree.phase + ti * 2.3,
                    20
                );
                ctx.fill();

                for (let l = 0; l < tier.count; l++) {
                    const lAng = (l / tier.count) * Math.PI * 2 + ti * 0.45 + tree.phase;
                    const flutter = Math.sin(time * 2.5 * speed + l * 2.1 + tree.phase) * (rx * 0.035) * intensity;
                    const lx = tierCx + Math.cos(lAng + localRot) * rx * tier.rMult + flutter;
                    const ly = tierCy + Math.sin(lAng + localRot) * ry * tier.rMult - flutter * 0.5;
                    const lobeRx = rx * tier.sizeMult * (0.86 + 0.14 * Math.sin(l * 1.9));
                    const lobeRy = ry * tier.sizeMult * (0.84 + 0.14 * Math.cos(l * 2.3));

                    this.traceFractalLobe(ctx, lx, ly, lobeRx, lobeRy, lAng + localRot, rough, tree.phase + ti * 3.1 + l * 1.3, 20);
                    ctx.fill();

                    if (rough > 0.25 && ti < 3) {
                        for (let sub = -1; sub <= 1; sub += 2) {
                            const subAng = lAng + localRot + sub * (0.38 + 0.08 * rough);
                            const subX = lx + Math.cos(subAng) * lobeRx * 0.62;
                            const subY = ly + Math.sin(subAng) * lobeRy * 0.62;
                            this.traceFractalLobe(ctx, subX, subY, lobeRx * 0.52, lobeRy * 0.50, subAng, rough * 1.05, tree.phase + ti * 5.3 + l * 2.7 + sub, 16);
                            ctx.fill();
                        }
                    }
                }
            }
        }

        // 3. Drifting Windblown Leaves blowing through the forest
        if (!el.particles) el.particles = [];
        const leafTarget = Math.min(40, Math.round(20 * qty));
        while (el.particles.length < leafTarget) {
            el.particles.push({
                x: Math.random() * W,
                y: Math.random() * H,
                vx: 25 + Math.random() * 35,
                vy: 10 + Math.random() * 20,
                size: 2.5 + Math.random() * 3,
                rot: Math.random() * Math.PI * 2,
                rotSpeed: (Math.random() - 0.5) * 6
            });
        }

        ctx.fillStyle = pal.leaf;
        for (let lp = 0; lp < el.particles.length; lp++) {
            const p = el.particles[lp];
            p.x += (p.vx * speed + forestWindX * 1.5) * dt;
            p.y += (p.vy * speed + forestWindY * 1.2) * dt;
            p.rot += p.rotSpeed * dt;

            if (p.x > W + 20) p.x = -20;
            if (p.y > H + 20) p.y = -20;

            ctx.globalAlpha = 0.85 * (cfg.opacity || 0.95);
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rot);
            this.traceFractalLobe(ctx, 0, 0, p.size * 1.4 * elScale, p.size * 0.7 * elScale, 0, rough * 0.65, lp * 1.7, 10);
            ctx.fill();
            ctx.restore();
        }

        el._autoScaleEntities = prevAutoScale;
        ctx.restore();
    }

    getSpotlightPalette(variant = 'prison_searchlight') {
        switch (variant) {
            case 'tactical_flashlight':
                return {
                    beamCore: 'rgba(235, 245, 255, 0.48)',
                    beamEdge: 'rgba(180, 215, 255, 0.05)',
                    poolCenter: 'rgba(245, 250, 255, 0.88)',
                    poolEdge: 'rgba(160, 210, 255, 0.0)',
                    glow: 'rgba(200, 230, 255, 0.65)',
                    motes: 'rgba(255, 255, 255, 0.85)'
                };
            case 'cyber_spotlight':
                return {
                    beamCore: 'rgba(0, 255, 220, 0.45)',
                    beamEdge: 'rgba(0, 200, 255, 0.04)',
                    poolCenter: 'rgba(180, 255, 245, 0.85)',
                    poolEdge: 'rgba(0, 220, 255, 0.0)',
                    glow: 'rgba(0, 255, 230, 0.75)',
                    motes: 'rgba(120, 255, 240, 0.9)'
                };
            case 'stage_spotlight':
                return {
                    beamCore: 'rgba(255, 230, 160, 0.46)',
                    beamEdge: 'rgba(255, 190, 80, 0.05)',
                    poolCenter: 'rgba(255, 245, 200, 0.88)',
                    poolEdge: 'rgba(255, 180, 60, 0.0)',
                    glow: 'rgba(255, 210, 110, 0.70)',
                    motes: 'rgba(255, 245, 180, 0.85)'
                };
            case 'red_alert_siren':
                return {
                    beamCore: 'rgba(255, 45, 45, 0.50)',
                    beamEdge: 'rgba(200, 10, 10, 0.05)',
                    poolCenter: 'rgba(255, 120, 120, 0.90)',
                    poolEdge: 'rgba(180, 0, 0, 0.0)',
                    glow: 'rgba(255, 30, 30, 0.80)',
                    motes: 'rgba(255, 160, 160, 0.85)'
                };
            case 'prison_searchlight':
            default:
                return {
                    beamCore: 'rgba(255, 250, 215, 0.46)',
                    beamEdge: 'rgba(255, 235, 170, 0.05)',
                    poolCenter: 'rgba(255, 255, 230, 0.88)',
                    poolEdge: 'rgba(255, 225, 140, 0.0)',
                    glow: 'rgba(255, 240, 160, 0.70)',
                    motes: 'rgba(255, 250, 220, 0.85)'
                };
        }
    }

    drawRealisticSpotlight(el, ctx, W, H, dt) {
        const time = el.stateTime;
        const cfg = el.config || {};
        const intensity = cfg.intensity || 1.0;
        const speed = (cfg.speed || 1.0) * (cfg.sweepSpeed || 0.8);
        const pal = this.getSpotlightPalette(cfg.variant || 'prison_searchlight');

        ctx.save();

        const sourceX = W * 0.5;
        const sourceY = 12;

        // Smooth sweeping oscillation
        const sweepSpan = (W * 0.38) * intensity;
        const sweepX = Math.sin(time * 1.2 * speed) * sweepSpan;
        const targetX = W * 0.5 + sweepX;
        const targetY = H * 0.76;
        const poolRx = (W * 0.28) * intensity;
        const poolRy = (H * 0.16) * intensity;

        // 1. Volumetric Beam Cone
        const beamAngle = Math.atan2(targetY - sourceY, targetX - sourceX);
        const perpX = -Math.sin(beamAngle);
        const perpY = Math.cos(beamAngle);
        const sourceWidth = 8;
        const targetSpread = poolRx * 1.1;

        const coneGrad = ctx.createLinearGradient(sourceX, sourceY, targetX, targetY);
        coneGrad.addColorStop(0, pal.beamCore);
        coneGrad.addColorStop(0.7, pal.beamEdge);
        coneGrad.addColorStop(1, 'rgba(0,0,0,0)');

        ctx.fillStyle = coneGrad;
        ctx.beginPath();
        ctx.moveTo(sourceX - perpX * sourceWidth, sourceY - perpY * sourceWidth);
        ctx.lineTo(targetX - perpX * targetSpread, targetY - perpY * targetSpread);
        ctx.lineTo(targetX + perpX * targetSpread, targetY + perpY * targetSpread);
        ctx.lineTo(sourceX + perpX * sourceWidth, sourceY + perpY * sourceWidth);
        ctx.closePath();
        ctx.fill();

        // 2. Floor Illumination Pool (where miniatures stand)
        const poolGrad = ctx.createRadialGradient(targetX, targetY, 0, targetX, targetY, poolRx);
        poolGrad.addColorStop(0, pal.poolCenter);
        poolGrad.addColorStop(0.55, pal.beamCore);
        poolGrad.addColorStop(1, pal.poolEdge);

        ctx.fillStyle = poolGrad;
        ctx.beginPath();
        ctx.ellipse(targetX, targetY, poolRx, poolRy, 0, 0, Math.PI * 2);
        ctx.fill();

        // 3. Floating Illuminated Dust Motes inside the beam
        if (!el.particles) el.particles = [];
        const moteTarget = Math.min(50, Math.round(25 * (cfg.quantity || 1.0)));
        while (el.particles.length < moteTarget) {
            el.particles.push({
                u: Math.random(),
                v: Math.random(),
                r: Math.random() * 2.2 + 0.8,
                phase: Math.random() * Math.PI * 2,
                driftSpeed: 0.4 + Math.random() * 0.8
            });
        }

        ctx.fillStyle = pal.motes;
        for (let m = 0; m < el.particles.length; m++) {
            const mote = el.particles[m];
            mote.v += dt * 0.1 * mote.driftSpeed;
            if (mote.v > 1.0) mote.v = 0;

            const my = sourceY + mote.v * (targetY - sourceY);
            const beamWidthAtY = sourceWidth + mote.v * (targetSpread - sourceWidth);
            const currentBeamCenter = sourceX + mote.v * (targetX - sourceX);
            const mx = currentBeamCenter + (mote.u - 0.5) * beamWidthAtY * 1.5;

            const shimmer = (Math.sin(time * 3 + mote.phase) * 0.35 + 0.65) * intensity;
            ctx.globalAlpha = shimmer * (cfg.opacity || 0.92);
            ctx.beginPath();
            ctx.arc(mx, my, mote.r, 0, Math.PI * 2);
            ctx.fill();
        }

        // 4. Source Lamp Emitter Flare
        const bulbGrad = ctx.createRadialGradient(sourceX, sourceY, 0, sourceX, sourceY, 18);
        bulbGrad.addColorStop(0, pal.poolCenter);
        bulbGrad.addColorStop(0.4, pal.glow);
        bulbGrad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = bulbGrad;
        ctx.beginPath();
        ctx.arc(sourceX, sourceY, 18, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    }

    drawRealisticBats(el, ctx, W, H, dt) {
        const time = el.stateTime;
        const cfg = el.config || {};
        const intensity = cfg.intensity || 1.0;
        const speed = (cfg.speed || 1.2) * (cfg.wingSpeed || 1.4);
        const variant = cfg.variant || 'dungeon_bats';

        const baseCount = cfg.flockCount !== undefined ? cfg.flockCount : 14;
        const qty = cfg.quantity !== undefined ? cfg.quantity : 1.0;
        const targetCount = Math.max(4, Math.min(45, Math.round(baseCount * qty)));

        if (!el.particles || el.particles.length !== targetCount) {
            el.particles = [];
            for (let i = 0; i < targetCount; i++) {
                el.particles.push({
                    x: W * 0.5 + (Math.random() - 0.5) * W * 0.6,
                    y: H * 0.5 + (Math.random() - 0.5) * H * 0.6,
                    vx: (Math.random() - 0.5) * 60,
                    vy: (Math.random() - 0.5) * 60,
                    size: 7 + Math.random() * 5,
                    wingPhase: Math.random() * Math.PI * 2,
                    wingFreq: 14 + Math.random() * 6,
                    altitude: 18 + Math.random() * 14
                });
            }
        }

        ctx.save();

        const colorMap = {
            dungeon_bats: { body: 'rgba(28, 22, 28, 0.95)', shadow: 'rgba(10, 8, 12, 0.38)' },
            cemetery_crows: { body: 'rgba(16, 18, 24, 0.95)', shadow: 'rgba(8, 10, 16, 0.40)' },
            desert_vultures: { body: 'rgba(56, 42, 32, 0.92)', shadow: 'rgba(30, 20, 15, 0.35)' },
            harbor_gulls: { body: 'rgba(235, 240, 245, 0.95)', shadow: 'rgba(40, 50, 60, 0.30)' },
            surveillance_drones: { body: 'rgba(40, 45, 52, 0.95)', led: 'rgba(0, 255, 200, 0.95)', shadow: 'rgba(10, 15, 20, 0.42)' }
        };
        const colors = colorMap[variant] || colorMap.dungeon_bats;

        for (let i = 0; i < el.particles.length; i++) {
            const b = el.particles[i];

            // Flocking / Circling dynamics
            const cx = W * 0.5;
            const cy = H * 0.5;
            const toCenterX = cx - b.x;
            const toCenterY = cy - b.y;
            const distCenter = Math.hypot(toCenterX, toCenterY);

            // Orbit force
            const orbitForce = 85;
            b.vx += (-toCenterY / (distCenter + 20) * orbitForce + toCenterX * 0.15) * dt * speed;
            b.vy += (toCenterX / (distCenter + 20) * orbitForce + toCenterY * 0.15) * dt * speed;

            // Small turbulence flutter
            b.vx += Math.sin(time * 3 + i * 2) * 20 * dt;
            b.vy += Math.cos(time * 2.8 + i * 2.2) * 20 * dt;

            // Speed limit clamp
            const spd = Math.hypot(b.vx, b.vy);
            const maxSpd = 90 * speed;
            if (spd > maxSpd) {
                b.vx = (b.vx / spd) * maxSpd;
                b.vy = (b.vy / spd) * maxSpd;
            }

            b.x += b.vx * dt;
            b.y += b.vy * dt;

            const heading = Math.atan2(b.vy, b.vx);
            const wingFlap = Math.sin(time * b.wingFreq * speed + b.wingPhase);
            const wingSpan = b.size * (0.55 + 0.45 * Math.abs(wingFlap));

            // A. Offset Ground Shadow (Miniatures see creature's shadow beneath)
            const shadowX = b.x + b.altitude * 0.55;
            const shadowY = b.y + b.altitude * 0.65;
            ctx.fillStyle = colors.shadow;
            ctx.beginPath();
            ctx.ellipse(shadowX, shadowY, b.size * 0.65, b.size * 0.35, heading, 0, Math.PI * 2);
            ctx.fill();

            // B. Flying Creature Body & Animated Wings
            ctx.save();
            ctx.translate(b.x, b.y);
            ctx.rotate(heading);

            ctx.fillStyle = colors.body;
            ctx.beginPath();
            // Torso & head
            ctx.ellipse(0, 0, b.size * 0.65, b.size * 0.28, 0, 0, Math.PI * 2);
            ctx.fill();

            // Left & Right Articulated Wings
            ctx.beginPath();
            // Left wing
            ctx.moveTo(b.size * 0.15, 0);
            ctx.quadraticCurveTo(-b.size * 0.2, -wingSpan * 1.5, -b.size * 0.8, -wingSpan);
            ctx.lineTo(-b.size * 0.3, 0);
            // Right wing
            ctx.moveTo(b.size * 0.15, 0);
            ctx.quadraticCurveTo(-b.size * 0.2, wingSpan * 1.5, -b.size * 0.8, wingSpan);
            ctx.lineTo(-b.size * 0.3, 0);
            ctx.fill();

            // Sci-Fi Drone Blinking LED
            if (variant === 'surveillance_drones') {
                const blink = Math.sin(time * 8 + i) > 0 ? 1 : 0.2;
                ctx.fillStyle = colors.led;
                ctx.globalAlpha = blink;
                ctx.beginPath();
                ctx.arc(b.size * 0.45, 0, 2, 0, Math.PI * 2);
                ctx.fill();
            }

            ctx.restore();
        }

        ctx.restore();
    }

    drawRealisticRats(el, ctx, W, H, dt) {
        const time = el.stateTime;
        const cfg = el.config || {};
        const intensity = cfg.intensity || 1.0;
        const speed = (cfg.speed || 1.2) * (cfg.dartSpeed || 1.5);
        const variant = cfg.variant || 'sewer_rats';

        const baseCount = cfg.verminCount !== undefined ? cfg.verminCount : 12;
        const qty = cfg.quantity !== undefined ? cfg.quantity : 1.0;
        const targetCount = Math.max(3, Math.min(35, Math.round(baseCount * qty)));

        if (!el.particles || el.particles.length !== targetCount) {
            el.particles = [];
            for (let i = 0; i < targetCount; i++) {
                el.particles.push({
                    x: Math.random() * W,
                    y: Math.random() * H,
                    targetX: Math.random() * W,
                    targetY: Math.random() * H,
                    state: 'darting', // 'darting' or 'sniffing'
                    timer: 0.5 + Math.random() * 1.5,
                    size: 8 + Math.random() * 4,
                    heading: Math.random() * Math.PI * 2,
                    tailPhase: Math.random() * Math.PI * 2
                });
            }
        }

        ctx.save();

        const colorMap = {
            sewer_rats: { body: 'rgba(52, 44, 40, 0.95)', tail: 'rgba(215, 160, 160, 0.85)', eyes: 'rgba(200, 30, 30, 0.9)' },
            swarming_spiders: { body: 'rgba(18, 16, 20, 0.96)', legs: 'rgba(32, 28, 36, 0.92)', eyes: 'rgba(255, 40, 40, 0.9)' },
            robo_scuttlers: { body: 'rgba(65, 75, 85, 0.96)', legs: 'rgba(180, 195, 210, 0.92)', eyes: 'rgba(0, 255, 200, 0.95)' },
            shadow_crawlers: { body: 'rgba(28, 10, 36, 0.95)', tail: 'rgba(120, 40, 160, 0.85)', eyes: 'rgba(220, 80, 255, 0.95)' },
            cave_scorpions: { body: 'rgba(75, 55, 38, 0.95)', tail: 'rgba(95, 70, 45, 0.9)', eyes: 'rgba(255, 180, 40, 0.9)' }
        };
        const colors = colorMap[variant] || colorMap.sewer_rats;

        for (let i = 0; i < el.particles.length; i++) {
            const r = el.particles[i];
            r.timer -= dt;

            if (r.timer <= 0) {
                if (r.state === 'darting') {
                    // Stop to sniff / pause
                    r.state = 'sniffing';
                    r.timer = 0.6 + Math.random() * 1.2;
                } else {
                    // Pick new dart target
                    r.state = 'darting';
                    r.timer = 1.0 + Math.random() * 2.0;
                    r.targetX = Math.max(20, Math.min(W - 20, r.x + (Math.random() - 0.5) * 160));
                    r.targetY = Math.max(20, Math.min(H - 20, r.y + (Math.random() - 0.5) * 160));
                }
            }

            if (r.state === 'darting') {
                const dx = r.targetX - r.x;
                const dy = r.targetY - r.y;
                const dist = Math.hypot(dx, dy);
                if (dist > 4) {
                    const moveAngle = Math.atan2(dy, dx);
                    // Smooth heading rotation
                    r.heading = moveAngle;
                    const step = Math.min(dist, 75 * speed * dt);
                    r.x += Math.cos(moveAngle) * step;
                    r.y += Math.sin(moveAngle) * step;
                }
            }

            // Ground Contact Shadow
            ctx.fillStyle = 'rgba(10, 10, 12, 0.35)';
            ctx.beginPath();
            ctx.ellipse(r.x + 2, r.y + 3, r.size * 0.6, r.size * 0.35, r.heading, 0, Math.PI * 2);
            ctx.fill();

            ctx.save();
            ctx.translate(r.x, r.y);
            ctx.rotate(r.heading);

            if (variant === 'swarming_spiders') {
                // Arachnid Body & 8 Articulated Scuttling Legs
                ctx.fillStyle = colors.body;
                ctx.beginPath();
                ctx.arc(-r.size * 0.25, 0, r.size * 0.45, 0, Math.PI * 2); // Abdomen
                ctx.arc(r.size * 0.3, 0, r.size * 0.3, 0, Math.PI * 2); // Cephalothorax
                ctx.fill();

                // 8 Legs
                ctx.strokeStyle = colors.legs;
                ctx.lineWidth = 1.4;
                for (let leg = 0; leg < 4; leg++) {
                    const legAngle = (leg - 1.5) * 0.5;
                    const legFlutter = Math.sin(time * 20 * speed + leg + i) * 3;
                    // Left leg
                    ctx.beginPath();
                    ctx.moveTo(r.size * 0.1, -r.size * 0.2);
                    ctx.lineTo(r.size * 0.1 + Math.cos(legAngle) * r.size * 0.9, -r.size * 0.8 + legFlutter);
                    ctx.stroke();
                    // Right leg
                    ctx.beginPath();
                    ctx.moveTo(r.size * 0.1, r.size * 0.2);
                    ctx.lineTo(r.size * 0.1 + Math.cos(legAngle) * r.size * 0.9, r.size * 0.8 - legFlutter);
                    ctx.stroke();
                }
            } else {
                // Rodent Teardrop Body
                ctx.fillStyle = colors.body;
                ctx.beginPath();
                ctx.ellipse(0, 0, r.size * 0.7, r.size * 0.38, 0, 0, Math.PI * 2);
                ctx.fill();

                // Snout / Head
                ctx.beginPath();
                ctx.moveTo(r.size * 0.5, -r.size * 0.25);
                ctx.lineTo(r.size * 1.1, 0);
                ctx.lineTo(r.size * 0.5, r.size * 0.25);
                ctx.fill();

                // Ears
                ctx.beginPath();
                ctx.arc(r.size * 0.25, -r.size * 0.32, 2.2, 0, Math.PI * 2);
                ctx.arc(r.size * 0.25, r.size * 0.32, 2.2, 0, Math.PI * 2);
                ctx.fill();

                // Sinuous Waving Tail
                ctx.strokeStyle = colors.tail;
                ctx.lineWidth = 1.3;
                ctx.beginPath();
                ctx.moveTo(-r.size * 0.65, 0);
                for (let seg = 1; seg <= 5; seg++) {
                    const tailX = -r.size * 0.65 - seg * (r.size * 0.28);
                    const wave = Math.sin(time * 12 * speed + seg * 0.8 + r.tailPhase) * (seg * 1.5);
                    ctx.lineTo(tailX, wave);
                }
                ctx.stroke();

                // Beady glowing eyes
                ctx.fillStyle = colors.eyes;
                ctx.beginPath();
                ctx.arc(r.size * 0.7, -r.size * 0.14, 1.2, 0, Math.PI * 2);
                ctx.arc(r.size * 0.7, r.size * 0.14, 1.2, 0, Math.PI * 2);
                ctx.fill();
            }

            ctx.restore();
        }

        ctx.restore();
    }

    drawRealisticFish(el, ctx, W, H, dt) {
        const time = el.stateTime;
        const cfg = el.config || {};
        const intensity = cfg.intensity || 1.0;
        const speed = (cfg.speed || 1.0) * (cfg.schoolSpeed || 1.0);
        const variant = cfg.variant || 'koi_pond';

        const baseCount = cfg.fishCount !== undefined ? cfg.fishCount : 8;
        const qty = cfg.quantity !== undefined ? cfg.quantity : 1.0;
        const targetCount = Math.max(2, Math.min(25, Math.round(baseCount * qty)));

        if (!el.particles || el.particles.length !== targetCount) {
            el.particles = [];
            for (let i = 0; i < targetCount; i++) {
                el.particles.push({
                    x: Math.random() * W,
                    y: Math.random() * H,
                    speedMult: 0.8 + Math.random() * 0.4,
                    heading: Math.random() * Math.PI * 2,
                    turnRate: 0,
                    size: 14 + Math.random() * 8,
                    colorVariant: i % 4,
                    swimPhase: Math.random() * Math.PI * 2
                });
            }
        }

        ctx.save();

        const colorMap = {
            koi_pond: [
                { body: 'rgba(235, 90, 30, 0.95)', spots: 'rgba(255, 255, 255, 0.9)' },
                { body: 'rgba(245, 245, 250, 0.95)', spots: 'rgba(230, 45, 25, 0.9)' },
                { body: 'rgba(255, 170, 0, 0.95)', spots: 'rgba(25, 25, 30, 0.9)' },
                { body: 'rgba(255, 255, 255, 0.95)', spots: 'rgba(25, 25, 30, 0.9)' }
            ],
            ocean_sharks: [
                { body: 'rgba(75, 88, 102, 0.92)', spots: 'rgba(200, 210, 220, 0.8)' },
                { body: 'rgba(92, 108, 125, 0.92)', spots: 'rgba(220, 230, 240, 0.8)' }
            ],
            river_trout: [
                { body: 'rgba(85, 105, 75, 0.92)', spots: 'rgba(215, 120, 80, 0.85)' },
                { body: 'rgba(105, 120, 90, 0.92)', spots: 'rgba(240, 215, 140, 0.85)' }
            ],
            abyssal_biolum: [
                { body: 'rgba(22, 18, 35, 0.95)', spots: 'rgba(0, 255, 220, 0.95)', glow: 'rgba(0, 255, 220, 0.7)' },
                { body: 'rgba(35, 18, 45, 0.95)', spots: 'rgba(216, 70, 239, 0.95)', glow: 'rgba(216, 70, 239, 0.7)' }
            ],
            drone_minnows: [
                { body: 'rgba(65, 80, 95, 0.95)', spots: 'rgba(0, 220, 255, 0.95)', glow: 'rgba(0, 220, 255, 0.8)' }
            ]
        };
        const paletteList = colorMap[variant] || colorMap.koi_pond;

        for (let i = 0; i < el.particles.length; i++) {
            const f = el.particles[i];
            const pal = paletteList[f.colorVariant % paletteList.length];

            // Gentle natural cruising and turning
            f.turnRate += (Math.random() - 0.5) * 1.5 * dt;
            f.turnRate = Math.max(-0.8, Math.min(0.8, f.turnRate * 0.95));
            f.heading += f.turnRate * dt * speed;

            // Forward motion
            const fSpeed = 48 * f.speedMult * speed;
            f.x += Math.cos(f.heading) * fSpeed * dt;
            f.y += Math.sin(f.heading) * fSpeed * dt;

            // Screen boundary wrapping
            if (f.x < -40) f.x = W + 40;
            if (f.x > W + 40) f.x = -40;
            if (f.y < -40) f.y = H + 40;
            if (f.y > H + 40) f.y = -40;

            // Sinuous spine oscillation
            const swimOsc = Math.sin(time * 6 * speed * f.speedMult + f.swimPhase);

            // A. Submerged Depth Shadow cast on river/sea bed
            ctx.fillStyle = 'rgba(6, 20, 28, 0.32)';
            ctx.beginPath();
            ctx.ellipse(f.x + 8, f.y + 10, f.size * 0.7, f.size * 0.28, f.heading, 0, Math.PI * 2);
            ctx.fill();

            // B. Swimming Fish Body
            ctx.save();
            ctx.translate(f.x, f.y);
            ctx.rotate(f.heading);

            // Sinuous Backbone Points (Head -> Mid -> Tail)
            const midWave = swimOsc * (f.size * 0.14);
            const tailWave = swimOsc * (f.size * 0.38);

            ctx.fillStyle = pal.body;
            ctx.beginPath();
            ctx.moveTo(f.size * 0.8, 0); // Snout
            ctx.quadraticCurveTo(0, -f.size * 0.35, -f.size * 0.5, midWave - f.size * 0.12);
            ctx.lineTo(-f.size * 0.9, tailWave); // Tail root
            ctx.lineTo(-f.size * 0.5, midWave + f.size * 0.12);
            ctx.quadraticCurveTo(0, f.size * 0.35, f.size * 0.8, 0);
            ctx.fill();

            // Caudal Tail Fin (flapping rhythmically)
            ctx.beginPath();
            ctx.moveTo(-f.size * 0.85, tailWave * 0.8);
            ctx.lineTo(-f.size * 1.35, tailWave * 1.4 - f.size * 0.3);
            ctx.quadraticCurveTo(-f.size * 1.1, tailWave * 1.2, -f.size * 1.35, tailWave * 1.4 + f.size * 0.3);
            ctx.closePath();
            ctx.fill();

            // Pectoral Fins
            ctx.beginPath();
            ctx.ellipse(f.size * 0.15, -f.size * 0.35, f.size * 0.25, f.size * 0.1, -0.4, 0, Math.PI * 2);
            ctx.ellipse(f.size * 0.15, f.size * 0.35, f.size * 0.25, f.size * 0.1, 0.4, 0, Math.PI * 2);
            ctx.fill();

            // Color Spots / Scales
            ctx.fillStyle = pal.spots;
            ctx.beginPath();
            ctx.arc(f.size * 0.1, midWave * 0.5, f.size * 0.22, 0, Math.PI * 2);
            ctx.arc(-f.size * 0.3, midWave * 0.8, f.size * 0.16, 0, Math.PI * 2);
            ctx.fill();

            // Bioluminescent Angler Lure
            if (pal.glow) {
                ctx.fillStyle = pal.spots;
                ctx.beginPath();
                ctx.arc(f.size * 1.15, -midWave * 0.5, 3.5, 0, Math.PI * 2);
                ctx.fill();
            }

            ctx.restore();
        }

        ctx.restore();
    }

    drawRealisticPatrolActor(el, ctx, W, H, dt) {
        const time = el.stateTime;
        const cfg = el.config || {};
        const intensity = cfg.intensity || 1.0;
        const speed = cfg.speed || 1.0;
        const variant = cfg.variant || 'will_o_wisp';

        ctx.save();

        // Closed-loop Lissajous patrol path (loops indefinitely without jump cuts)
        const radius = (cfg.patrolRadius || 90) * (Math.min(W, H) / 240);
        const cx = W * 0.5 + Math.sin(time * 0.7 * speed) * radius * 0.85;
        const cy = H * 0.5 + Math.sin(time * 1.4 * speed) * (radius * 0.48);

        // Variant Color Definitions
        const styles = {
            will_o_wisp: { core: '220, 255, 240', mid: '45, 212, 191', outer: '13, 148, 136' },
            gothic_ghost: { core: '235, 245, 255', mid: '147, 197, 253', outer: '59, 130, 246' },
            patrol_drone: { core: '255, 255, 255', mid: '0, 255, 200', outer: '6, 182, 212' },
            fey_sprite: { core: '255, 245, 180', mid: '250, 204, 21', outer: '217, 119, 6' },
            eldritch_eye: { core: '255, 120, 220', mid: '216, 70, 239', outer: '147, 51, 234' }
        };
        const col = styles[variant] || styles.will_o_wisp;

        // 1. Trailing Ethereal Particle Wake / Wisps
        if (!el.particles) el.particles = [];
        const wakeTarget = Math.min(35, Math.round(18 * (cfg.quantity || 1.0)));
        while (el.particles.length < wakeTarget) {
            el.particles.push({
                x: cx,
                y: cy,
                r: Math.random() * 6 + 2,
                life: Math.random(),
                decay: 0.5 + Math.random() * 0.7
            });
        }

        for (let p = 0; p < el.particles.length; p++) {
            const part = el.particles[p];
            part.life -= dt * part.decay * speed;
            if (part.life <= 0) {
                part.life = 1.0;
                part.x = cx + (Math.random() - 0.5) * 8;
                part.y = cy + (Math.random() - 0.5) * 8;
                part.r = Math.random() * 6 + 2;
            }

            ctx.fillStyle = `rgba(${col.mid}, ${part.life * 0.45 * intensity})`;
            ctx.beginPath();
            ctx.arc(part.x, part.y, part.r * part.life, 0, Math.PI * 2);
            ctx.fill();
        }

        // 2. Multi-Layer Pulsing Core Aura
        const pulse = Math.sin(time * 3 * speed) * 0.15 + 0.85;
        const auraR = 32 * pulse * intensity;

        const auraGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, auraR);
        auraGrad.addColorStop(0, `rgba(${col.core}, ${0.95 * (cfg.opacity || 0.95)})`);
        auraGrad.addColorStop(0.35, `rgba(${col.mid}, ${0.75 * (cfg.opacity || 0.95)})`);
        auraGrad.addColorStop(0.7, `rgba(${col.outer}, ${0.35 * (cfg.opacity || 0.95)})`);
        auraGrad.addColorStop(1, 'rgba(0,0,0,0)');

        ctx.fillStyle = auraGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, auraR, 0, Math.PI * 2);
        ctx.fill();

        // 3. Dense Inner Core
        ctx.fillStyle = `rgba(${col.core}, 0.98)`;
        ctx.beginPath();
        ctx.arc(cx, cy, 7 * pulse, 0, Math.PI * 2);
        ctx.fill();

        // 4. Variant Specific Embellishments
        if (variant === 'fey_sprite') {
            // Gossamer Fluttering Wings
            const wingFlap = Math.sin(time * 18 * speed);
            ctx.fillStyle = 'rgba(255, 255, 255, 0.75)';
            ctx.beginPath();
            ctx.ellipse(cx - 10, cy, 14, 5 * Math.abs(wingFlap), -0.5, 0, Math.PI * 2);
            ctx.ellipse(cx + 10, cy, 14, 5 * Math.abs(wingFlap), 0.5, 0, Math.PI * 2);
            ctx.fill();
        } else if (variant === 'patrol_drone') {
            // Rotating Sensor Scanner Rings
            ctx.strokeStyle = `rgba(${col.mid}, 0.85)`;
            ctx.lineWidth = 1.4;
            ctx.beginPath();
            ctx.ellipse(cx, cy, 18, 7, time * 2, 0, Math.PI * 2);
            ctx.stroke();
        }

        ctx.restore();
    }

    // ------------------------------------------------------------------------
    // LOCALIZED ATMOSPHERIC WEATHER ZONES (Drop & position directly on maps)
    // ------------------------------------------------------------------------

    drawRealisticLocalRain(el, ctx, W, H, dt) {
        const time = el.stateTime;
        const cfg = el.config || {};
        const intensity = cfg.intensity || 1.0;
        const speed = cfg.speed || 1.2;
        const variant = cfg.variant || el.type || 'uni_downpour';

        const isNeon = variant === 'sci_neonrain' || variant === 'neon_rain';
        const isBlood = variant === 'oth_bloodrain' || variant === 'blood_rain';
        const isHail = variant === 'uni_hailstorm';
        const isSeaSpume = variant === 'hist_seaspume';
        const isDrizzle = variant === 'uni_drizzle';

        if (!el.particles) el.particles = [];
        const baseTarget = isHail ? 35 : (isDrizzle ? 45 : (isNeon ? 65 : 85));
        const dropCount = Math.min(140, Math.round(baseTarget * (cfg.quantity || 1.0)));

        while (el.particles.length < dropCount) {
            el.particles.push({
                x: Math.random() * W,
                y: Math.random() * H,
                len: isHail ? (6 + Math.random() * 5) : (isDrizzle ? (8 + Math.random() * 8) : (14 + Math.random() * 16)),
                speedMult: 0.75 + Math.random() * 0.5,
                bounceLife: 0,
                colorIdx: Math.floor(Math.random() * 2),
                seed: Math.random() * 100
            });
        }
        if (el.particles.length > dropCount) el.particles.length = dropCount;

        ctx.save();
        for (let i = 0; i < el.particles.length; i++) {
            const p = el.particles[i];

            if (isHail) {
                // Hard bouncing ice hailstones
                p.y += 340 * p.speedMult * speed * dt;
                p.x += 45 * speed * dt;

                if (p.y > H - 10) {
                    // Ice shatter impact
                    ctx.strokeStyle = 'rgba(224, 242, 254, 0.85)';
                    ctx.lineWidth = 1.5;
                    ctx.beginPath();
                    ctx.arc(p.x, H - 8, 5, 0, Math.PI * 2);
                    ctx.stroke();

                    // Tiny ice shrapnel bits
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
                    ctx.fillRect(p.x - 3, H - 9, 2, 2);
                    ctx.fillRect(p.x + 3, H - 7, 2, 2);

                    p.y = -10;
                    p.x = Math.random() * W;
                }

                // Hail stone sphere
                const hg = ctx.createRadialGradient(p.x - 1, p.y - 1, 0, p.x, p.y, p.len * 0.45);
                hg.addColorStop(0, 'rgba(255, 255, 255, 0.98)');
                hg.addColorStop(0.6, 'rgba(186, 230, 253, 0.88)');
                hg.addColorStop(1, 'rgba(56, 189, 248, 0.65)');
                ctx.fillStyle = hg;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.len * 0.45, 0, Math.PI * 2);
                ctx.fill();

            } else if (isNeon) {
                // Cyberpunk electric neon cyan & magenta rain
                p.y += 280 * p.speedMult * speed * dt;
                p.x += 55 * speed * dt;

                const isCyan = p.colorIdx === 0;
                const neonColor = isCyan ? 'rgba(34, 211, 238, 0.95)' : 'rgba(244, 63, 94, 0.95)';
                const glowColor = isCyan ? 'rgba(6, 182, 212, 0.45)' : 'rgba(225, 29, 72, 0.45)';

                if (p.y > H - 8) {
                    // Expanding neon splash ripples
                    ctx.strokeStyle = neonColor;
                    ctx.lineWidth = 1.8;
                    ctx.beginPath();
                    ctx.ellipse(p.x, H - 6, 9, 3.5, 0, 0, Math.PI * 2);
                    ctx.stroke();

                    p.y = -p.len;
                    p.x = Math.random() * W;
                }

                ctx.strokeStyle = neonColor;
                ctx.lineWidth = 1.8;
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.x + 4, p.y + p.len * intensity);
                ctx.stroke();

            } else if (isBlood) {
                // Viscous dark crimson blood rain
                p.y += 210 * p.speedMult * speed * dt;
                p.x += 40 * speed * dt;

                if (p.y > H - 8) {
                    // Blood splatter puddle
                    ctx.fillStyle = 'rgba(153, 27, 27, 0.75)';
                    ctx.beginPath();
                    ctx.ellipse(p.x, H - 6, 8, 3, 0, 0, Math.PI * 2);
                    ctx.fill();

                    p.y = -p.len;
                    p.x = Math.random() * W;
                }

                ctx.strokeStyle = 'rgba(185, 28, 28, 0.92)';
                ctx.lineWidth = 2.0;
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.x + 3, p.y + p.len * intensity);
                ctx.stroke();

            } else if (isSeaSpume) {
                // Coastal ocean salt brine spume blowing horizontally
                p.y += 120 * p.speedMult * speed * dt;
                p.x += 160 * speed * dt; // Heavy horizontal gale slant

                if (p.x > W) {
                    p.x = -10;
                    p.y = Math.random() * H;
                }
                if (p.y > H) p.y = 0;

                ctx.fillStyle = 'rgba(240, 253, 250, 0.85)';
                ctx.beginPath();
                ctx.arc(p.x, p.y, 2.0 + Math.sin(time * 3 + p.seed) * 1.0, 0, Math.PI * 2);
                ctx.fill();

            } else {
                // Natural Rain (Downpour / Drizzle / Noir City Rain)
                p.y += (isDrizzle ? 180 : 250) * p.speedMult * speed * dt;
                p.x += (isDrizzle ? 35 : 65) * speed * dt;

                if (p.y > H) {
                    p.y = 0;
                    p.x = Math.random() * W;

                    // Ground Splash Ring
                    ctx.strokeStyle = 'rgba(200, 230, 255, 0.45)';
                    ctx.lineWidth = 1.2;
                    ctx.beginPath();
                    ctx.ellipse(p.x, H - 4, 6, 2.2, 0, 0, Math.PI * 2);
                    ctx.stroke();
                }

                ctx.strokeStyle = isDrizzle ? 'rgba(186, 230, 253, 0.65)' : 'rgba(215, 235, 255, 0.82)';
                ctx.lineWidth = isDrizzle ? 1.0 : 1.5;
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p.x + (isDrizzle ? 2.5 : 4), p.y + p.len * intensity);
                ctx.stroke();
            }
        }
        ctx.restore();
    }

    drawRealisticLocalSnow(el, ctx, W, H, dt) {
        const time = el.stateTime;
        const cfg = el.config || {};
        const speed = cfg.speed || 1.0;
        const intensity = cfg.intensity || 1.0;
        const variant = cfg.variant || el.type || 'uni_flurry';

        const isAshBlizzard = variant === 'oth_ashblizzard';
        const isSleet = variant === 'mod_fallout_sleet';
        const isGale = variant === 'uni_blizzard';

        if (!el.particles) el.particles = [];
        const baseCount = isGale ? 95 : (isAshBlizzard ? 80 : 55);
        const flakeCount = Math.min(130, Math.round(baseCount * (cfg.quantity || 1.0)));

        while (el.particles.length < flakeCount) {
            el.particles.push({
                x: Math.random() * W,
                y: Math.random() * H,
                r: isGale ? (1.5 + Math.random() * 2.5) : (2.0 + Math.random() * 2.8),
                sway: Math.random() * Math.PI * 2,
                speedMult: 0.6 + Math.random() * 0.6,
                angle: Math.random() * Math.PI * 2,
                spin: (Math.random() - 0.5) * 3
            });
        }
        if (el.particles.length > flakeCount) el.particles.length = flakeCount;

        ctx.save();
        for (let i = 0; i < el.particles.length; i++) {
            const f = el.particles[i];

            if (isAshBlizzard) {
                // Sinister Silent Hill dark volcanic soot & ash blizzard
                f.y += 110 * f.speedMult * speed * dt;
                f.x += 140 * speed * dt + Math.sin(time * 3 + f.sway) * 28 * dt;
                f.angle += f.spin * dt;

                if (f.x > W) f.x = -10;
                if (f.y > H) { f.y = 0; f.x = Math.random() * W; }

                ctx.save();
                ctx.translate(f.x, f.y);
                ctx.rotate(f.angle);
                ctx.fillStyle = i % 3 === 0 ? 'rgba(24, 24, 27, 0.92)' : 'rgba(82, 82, 91, 0.85)';
                ctx.fillRect(-f.r, -f.r * 0.6, f.r * 2, f.r * 1.2);
                ctx.restore();

            } else if (isSleet) {
                // Freezing urban chemical sleet
                f.y += 240 * f.speedMult * speed * dt;
                f.x += 75 * speed * dt;

                if (f.y > H) { f.y = 0; f.x = Math.random() * W; }

                ctx.strokeStyle = 'rgba(203, 213, 225, 0.78)';
                ctx.lineWidth = 1.4;
                ctx.beginPath();
                ctx.moveTo(f.x, f.y);
                ctx.lineTo(f.x + 3, f.y + 7);
                ctx.stroke();

            } else if (isGale) {
                // Blinding howling whiteout blizzard
                f.y += 90 * f.speedMult * speed * dt;
                f.x += 180 * speed * dt + Math.sin(time * 4 + f.sway) * 35 * dt;

                if (f.x > W) f.x = -15;
                if (f.y > H) { f.y = 0; f.x = Math.random() * W; }

                ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
                ctx.beginPath();
                ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
                ctx.fill();

            } else {
                // Gentle crystalline 6-pointed snowflakes
                f.y += 45 * f.speedMult * speed * dt;
                f.x += Math.sin(time * 2 + f.sway) * 22 * dt;
                f.angle += f.spin * 0.5 * dt;

                if (f.y > H) { f.y = 0; f.x = Math.random() * W; }

                ctx.save();
                ctx.translate(f.x, f.y);
                ctx.rotate(f.angle);
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.92)';
                ctx.lineWidth = 1.2;
                // Hexagonal crystalline arms
                for (let a = 0; a < 3; a++) {
                    ctx.beginPath();
                    ctx.moveTo(-f.r * 1.2, 0);
                    ctx.lineTo(f.r * 1.2, 0);
                    ctx.stroke();
                    ctx.rotate(Math.PI / 3);
                }
                ctx.restore();
            }
        }
        ctx.restore();
    }

    drawRealisticLocalFog(el, ctx, W, H, dt) {
        const time = el.stateTime;
        const cfg = el.config || {};
        const intensity = cfg.intensity || 1.0;
        const speed = cfg.speed || 0.8;
        const variant = cfg.variant || el.type || 'uni_mist';
        const rough = ctx._fractalRough !== undefined ? ctx._fractalRough : (el.config.fractalRoughness !== undefined ? parseFloat(el.config.fractalRoughness) : 0.75);

        const isGhost = variant === 'oth_ghostfog';
        const isDungeon = variant === 'hist_dungeonmist';
        const isDense = variant === 'uni_densefog';

        if (!el.particles) el.particles = [];
        const puffCount = Math.min(32, Math.round((isDense ? 24 : 16) * (cfg.quantity || 1.0)));

        while (el.particles.length < puffCount) {
            el.particles.push({
                x: Math.random() * W,
                y: Math.random() * H,
                r: 45 + Math.random() * 45,
                phase: Math.random() * Math.PI * 2,
                driftSpeed: 0.5 + Math.random() * 0.5,
                seed: Math.random() * 100
            });
        }
        if (el.particles.length > puffCount) el.particles.length = puffCount;

        ctx.save();
        for (let i = 0; i < el.particles.length; i++) {
            const p = el.particles[i];
            p.x += 16 * p.driftSpeed * speed * dt;
            if (p.x > W + p.r) p.x = -p.r;

            const alpha = (Math.sin(time * 0.8 + p.phase) * 0.12 + (isDense ? 0.34 : 0.22)) * intensity;

            let fogColor = '220, 230, 242';
            if (isGhost) fogColor = '52, 211, 153'; // Eerie luminescent spectral mist
            else if (isDungeon) fogColor = '165, 185, 175'; // Murky damp greenish-gray crypt mist
            else if (isDense) fogColor = '210, 218, 226'; // Pea-soup river fog

            const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r);
            grad.addColorStop(0, `rgba(${fogColor}, ${alpha})`);
            grad.addColorStop(0.65, `rgba(${fogColor}, ${alpha * 0.55})`);
            grad.addColorStop(1, `rgba(${fogColor}, 0)`);

            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fill();

            // Fractal ragged mist wisps when rough > 0.05
            if (rough > 0.05) {
                const wAngle = time * 0.5 + p.seed;
                const wx = p.x + Math.cos(wAngle) * p.r * 0.45 * rough;
                const wy = p.y + Math.sin(wAngle) * p.r * 0.35 * rough;
                const wr = p.r * (0.45 + rough * 0.25);
                const wGrad = ctx.createRadialGradient(wx, wy, 0, wx, wy, wr);
                wGrad.addColorStop(0, `rgba(${fogColor}, ${alpha * 0.7})`);
                wGrad.addColorStop(1, `rgba(${fogColor}, 0)`);
                ctx.fillStyle = wGrad;
                ctx.beginPath();
                ctx.arc(wx, wy, wr, 0, Math.PI * 2);
                ctx.fill();
            }

            // Ghostly screaming skull / spectral silhouette subtly appearing in ghost fog
            if (isGhost && i % 4 === 0) {
                const sVis = Math.sin(time * 1.5 + p.seed);
                if (sVis > 0.45) {
                    const skullAlpha = (sVis - 0.45) * 0.75 * intensity;
                    ctx.save();
                    ctx.translate(p.x, p.y);
                    ctx.fillStyle = `rgba(167, 243, 208, ${skullAlpha})`;
                    // Ghostly skull dome
                    ctx.beginPath();
                    ctx.arc(0, -4, 8, 0, Math.PI * 2);
                    ctx.fill();
                    // Jaw
                    ctx.fillRect(-4, 2, 8, 5);
                    // Hollow eye sockets
                    ctx.fillStyle = `rgba(6, 78, 59, ${skullAlpha * 1.2})`;
                    ctx.beginPath();
                    ctx.arc(-3, -4, 2, 0, Math.PI * 2);
                    ctx.arc(3, -4, 2, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.restore();
                }
            }
        }
        ctx.restore();
    }

    drawRealisticLocalDust(el, ctx, W, H, dt) {
        const time = el.stateTime;
        const cfg = el.config || {};
        const speed = cfg.speed || 1.2;
        const intensity = cfg.intensity || 1.0;
        const variant = cfg.variant || el.type || 'uni_dustmotes';

        if (!el.particles) el.particles = [];
        const baseTarget = variant === 'mod_dustdevil' ? 45 : (variant === 'uni_sandstorm' ? 75 : (variant === 'mod_trash' ? 24 : 50));
        const moteCount = Math.min(90, Math.round(baseTarget * (cfg.quantity || 1.0)));

        while (el.particles.length < moteCount) {
            el.particles.push({
                x: Math.random() * W,
                y: Math.random() * H,
                r: Math.random() * 2.2 + 0.8,
                phase: Math.random() * Math.PI * 2,
                spin: (Math.random() - 0.5) * 3,
                angle: Math.random() * Math.PI * 2,
                speedMult: 0.7 + Math.random() * 0.6,
                colorIdx: Math.floor(Math.random() * 4),
                seed: Math.random() * 100
            });
        }
        if (el.particles.length > moteCount) el.particles.length = moteCount;

        ctx.save();

        if (variant === 'uni_leaves' || variant === 'hist_leaves' || variant === 'autumn_maple') {
            // Detailed 5-lobed autumn leaves (crimson, scarlet, amber, russet) fluttering in 3D
            const leafColors = ['#dc2626', '#ea580c', '#f59e0b', '#b45309'];
            for (let i = 0; i < el.particles.length; i++) {
                const m = el.particles[i];
                m.x += (Math.cos(time * 1.5 + m.phase) * 24 + 32) * speed * dt;
                m.y += (Math.sin(time * 1.8 + m.phase) * 18 + 14) * speed * dt;
                m.angle += m.spin * dt;

                if (m.x > W + 15) m.x = -15;
                if (m.y > H + 15) { m.y = -15; m.x = Math.random() * W; }

                ctx.save();
                ctx.translate(m.x, m.y);
                ctx.rotate(m.angle);
                const flutter = Math.sin(time * 4 + m.phase);
                ctx.scale(1, Math.max(0.25, Math.abs(flutter))); // 3D tumbling perspective

                const lr = 7 * intensity;
                ctx.fillStyle = leafColors[m.colorIdx % leafColors.length];
                ctx.beginPath();
                // 5-point maple silhouette
                ctx.moveTo(0, -lr * 1.2);
                ctx.lineTo(lr * 0.45, -lr * 0.45);
                ctx.lineTo(lr * 1.1, -lr * 0.3);
                ctx.lineTo(lr * 0.6, lr * 0.35);
                ctx.lineTo(lr * 0.85, lr * 1.0);
                ctx.lineTo(0, lr * 0.65);
                ctx.lineTo(-lr * 0.85, lr * 1.0);
                ctx.lineTo(-lr * 0.6, lr * 0.35);
                ctx.lineTo(-lr * 1.1, -lr * 0.3);
                ctx.lineTo(-lr * 0.45, -lr * 0.45);
                ctx.closePath();
                ctx.fill();

                // Leaf stem & central vein
                ctx.strokeStyle = '#451a03';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(0, -lr * 1.2);
                ctx.lineTo(0, lr * 1.3);
                ctx.stroke();

                ctx.restore();
            }

        } else if (variant === 'uni_petals' || variant === 'cherry_blossom') {
            // Delicate pink & blush white sakura cherry blossom petals
            for (let i = 0; i < el.particles.length; i++) {
                const m = el.particles[i];
                m.x += (Math.cos(time * 1.8 + m.phase) * 20 + 26) * speed * dt;
                m.y += (Math.sin(time * 2.1 + m.phase) * 14 + 18) * speed * dt;
                m.angle += m.spin * 0.8 * dt;

                if (m.x > W + 10) m.x = -10;
                if (m.y > H + 10) { m.y = -10; m.x = Math.random() * W; }

                ctx.save();
                ctx.translate(m.x, m.y);
                ctx.rotate(m.angle);
                const flutter = Math.sin(time * 3.5 + m.phase);
                ctx.scale(1, Math.max(0.3, Math.abs(flutter)));

                const pr = 5 * intensity;
                ctx.fillStyle = m.colorIdx % 2 === 0 ? 'rgba(251, 207, 232, 0.95)' : 'rgba(244, 114, 182, 0.90)';
                ctx.beginPath();
                ctx.ellipse(0, 0, pr * 1.2, pr * 0.7, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
            }

        } else if (variant === 'uni_dandelion') {
            // White feathery starburst dandelion seed down
            for (let i = 0; i < el.particles.length; i++) {
                const m = el.particles[i];
                m.x += (Math.cos(time * 1.2 + m.phase) * 18 + 20) * speed * dt;
                m.y += (Math.sin(time * 1.5 + m.phase) * 12 + 8) * speed * dt;
                m.angle += m.spin * 0.4 * dt;

                if (m.x > W + 10) m.x = -10;
                if (m.y > H + 10) { m.y = -10; m.x = Math.random() * W; }

                ctx.save();
                ctx.translate(m.x, m.y);
                ctx.rotate(m.angle);

                // Tiny seed kernel
                ctx.fillStyle = '#78350f';
                ctx.beginPath();
                ctx.ellipse(0, 4, 1.2, 2.5, 0, 0, Math.PI * 2);
                ctx.fill();

                // Slender stalk
                ctx.strokeStyle = 'rgba(245, 245, 244, 0.85)';
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(0, 4);
                ctx.lineTo(0, -2);
                ctx.stroke();

                // Radiating white parachute filaments (pappus starburst)
                for (let f = 0; f < 7; f++) {
                    const fa = (f / 7) * Math.PI - Math.PI;
                    ctx.beginPath();
                    ctx.moveTo(0, -2);
                    ctx.lineTo(Math.cos(fa) * 6, -2 + Math.sin(fa) * 5);
                    ctx.stroke();
                }
                ctx.restore();
            }

        } else if (variant === 'hist_battleash') {
            // Siege battlefield war cinders: tumbling scorched charcoal flakes with glowing orange ember cores!
            for (let i = 0; i < el.particles.length; i++) {
                const m = el.particles[i];
                m.x += (Math.cos(time * 2.2 + m.phase) * 32 + 42) * speed * dt;
                m.y += (Math.sin(time * 2.8 + m.phase) * 22 - 12) * speed * dt; // Rising updrafts!
                m.angle += m.spin * dt;

                if (m.x > W + 15) m.x = -15;
                if (m.y < -15) { m.y = H + 15; m.x = Math.random() * W; }

                ctx.save();
                ctx.translate(m.x, m.y);
                ctx.rotate(m.angle);

                // Scorched charcoal flake
                ctx.fillStyle = '#18181b';
                ctx.beginPath();
                ctx.fillRect(-3, -2, 6, 4);

                // Incandescent glowing ember core
                const pulse = Math.sin(time * 6 + m.phase) * 0.5 + 0.5;
                ctx.fillStyle = `rgba(255, ${Math.floor(80 + pulse * 120)}, 20, ${0.75 + pulse * 0.25})`;
                ctx.beginPath();
                ctx.arc(0, 0, 1.8, 0, Math.PI * 2);
                ctx.fill();

                ctx.restore();
            }

        } else if (variant === 'mod_dustdevil') {
            // Animated rotating 3D dust devil vortex!
            const cx = W * 0.5;
            const cy = H * 0.5;
            for (let i = 0; i < el.particles.length; i++) {
                const m = el.particles[i];
                // Spiraling vortex around center cone
                const heightProg = (i / el.particles.length); // 0 at base, 1 at wide top
                const coneR = (20 + heightProg * 75) * intensity;
                const vAngle = time * (4.5 - heightProg * 1.8) * speed + m.phase;

                const vx = cx + Math.cos(vAngle) * coneR + Math.sin(time * 2) * 15;
                const vy = cy + (heightProg - 0.5) * (H * 0.75) + Math.sin(vAngle * 2) * 8;

                ctx.fillStyle = `rgba(217, 185, 135, ${0.45 + (1 - heightProg) * 0.45})`;
                ctx.beginPath();
                ctx.arc(vx, vy, 2.2 + heightProg * 3.5, 0, Math.PI * 2);
                ctx.fill();
            }

        } else if (variant === 'mod_trash') {
            // Blowing city street litter: tumbling newspapers, crushed soda cans, plastic bags
            for (let i = 0; i < el.particles.length; i++) {
                const m = el.particles[i];
                m.x += (Math.cos(time * 1.7 + m.phase) * 28 + 48) * speed * dt;
                m.y += (Math.sin(time * 2.2 + m.phase) * 16 + 12) * speed * dt;
                m.angle += m.spin * 1.5 * dt;

                if (m.x > W + 20) m.x = -20;
                if (m.y > H + 20) { m.y = -20; m.x = Math.random() * W; }

                ctx.save();
                ctx.translate(m.x, m.y);
                ctx.rotate(m.angle);

                if (m.colorIdx === 0) {
                    // Fluttering newspaper sheet
                    ctx.fillStyle = '#f1f5f9';
                    ctx.fillRect(-7, -5, 14, 10);
                    ctx.fillStyle = '#64748b';
                    ctx.fillRect(-5, -3, 10, 1.5);
                    ctx.fillRect(-5, 0, 10, 1.5);
                    ctx.fillRect(-5, 3, 6, 1.5);
                } else if (m.colorIdx === 1) {
                    // Crushed soda can
                    ctx.fillStyle = '#ef4444';
                    ctx.fillRect(-5, -3, 10, 6);
                    ctx.fillStyle = '#e2e8f0';
                    ctx.fillRect(-5, -3, 3, 6);
                } else {
                    // Translucent crumpled plastic bag
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
                    ctx.strokeStyle = 'rgba(203, 213, 225, 0.65)';
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.ellipse(0, 0, 8, 5, time * 2, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.stroke();
                }
                ctx.restore();
            }

        } else if (variant === 'sci_ash') {
            // Radioactive fallout ash drift with glowing Cherenkov green/cyan halos
            for (let i = 0; i < el.particles.length; i++) {
                const m = el.particles[i];
                m.x += (Math.cos(time * 1.4 + m.phase) * 20 + 26) * speed * dt;
                m.y += 32 * speed * dt;

                if (m.x > W + 10) m.x = -10;
                if (m.y > H + 10) { m.y = -10; m.x = Math.random() * W; }

                // Eerie glowing halo
                const pulse = Math.sin(time * 4 + m.phase) * 0.4 + 0.6;
                const rg = ctx.createRadialGradient(m.x, m.y, 1, m.x, m.y, 6);
                rg.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
                rg.addColorStop(0.4, `rgba(52, 211, 153, ${0.75 * pulse})`);
                rg.addColorStop(1, 'rgba(52, 211, 153, 0)');
                ctx.fillStyle = rg;
                ctx.beginPath();
                ctx.arc(m.x, m.y, 6, 0, Math.PI * 2);
                ctx.fill();
            }

        } else if (variant === 'sci_nanites') {
            // Scintillating cybernetic nanite swarm with dynamic vector connections!
            for (let i = 0; i < el.particles.length; i++) {
                const m = el.particles[i];
                m.x += (Math.cos(time * 2.8 + m.phase) * 35 + Math.sin(time * 4) * 15) * speed * dt;
                m.y += (Math.sin(time * 2.5 + m.phase) * 30 + Math.cos(time * 3.5) * 15) * speed * dt;

                if (m.x > W) m.x = 0;
                if (m.x < 0) m.x = W;
                if (m.y > H) m.y = 0;
                if (m.y < 0) m.y = H;

                // Microscopic glowing cyan diamond
                ctx.fillStyle = '#22d3ee';
                ctx.beginPath();
                ctx.moveTo(m.x, m.y - 3);
                ctx.lineTo(m.x + 3, m.y);
                ctx.lineTo(m.x, m.y + 3);
                ctx.lineTo(m.x - 3, m.y);
                ctx.closePath();
                ctx.fill();

                // Telemetry vector line to nearest neighbour
                if (i > 0 && i % 3 === 0) {
                    const prev = el.particles[i - 1];
                    const dist = Math.hypot(m.x - prev.x, m.y - prev.y);
                    if (dist < 45) {
                        ctx.strokeStyle = `rgba(34, 211, 238, ${(1 - dist / 45) * 0.75})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(m.x, m.y);
                        ctx.lineTo(prev.x, prev.y);
                        ctx.stroke();
                    }
                }
            }

        } else if (variant === 'uni_sandstorm' || variant === 'mod_sandstorm') {
            // Violent desert sandstorm: high-speed horizontal streaks of sand & grit
            for (let i = 0; i < el.particles.length; i++) {
                const m = el.particles[i];
                m.x += 240 * m.speedMult * speed * dt;
                m.y += Math.sin(time * 3 + m.phase) * 15 * speed * dt;

                if (m.x > W) { m.x = -15; m.y = Math.random() * H; }

                ctx.strokeStyle = i % 2 === 0 ? 'rgba(234, 179, 8, 0.85)' : 'rgba(245, 158, 11, 0.75)';
                ctx.lineWidth = 1.6;
                ctx.beginPath();
                ctx.moveTo(m.x, m.y);
                ctx.lineTo(m.x + 14 * intensity, m.y + 2);
                ctx.stroke();
            }

        } else {
            // Floating Sunlit Dust Motes & Volcanic Ash Fall
            const isAsh = variant === 'ash_fall' || variant === 'uni_ashfall';
            ctx.fillStyle = isAsh ? 'rgba(161, 161, 170, 0.85)' : 'rgba(254, 240, 138, 0.85)';

            for (let i = 0; i < el.particles.length; i++) {
                const m = el.particles[i];
                m.x += (Math.cos(time * 1.5 + m.phase) * 20 + 24) * speed * dt;
                m.y += (Math.sin(time * 1.8 + m.phase) * 14 + (isAsh ? 22 : 6)) * speed * dt;

                if (m.x > W) m.x = 0;
                if (m.y > H) m.y = 0;
                if (m.y < 0) m.y = H;

                ctx.beginPath();
                ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
                ctx.fill();

                if (!isAsh) {
                    // Sunlit luminous halo
                    ctx.fillStyle = 'rgba(254, 240, 138, 0.25)';
                    ctx.beginPath();
                    ctx.arc(m.x, m.y, m.r * 2.4, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.fillStyle = 'rgba(254, 240, 138, 0.85)';
                }
            }
        }

        ctx.restore();
    }

    drawRealisticLocalHyperspace(el, ctx, W, H, dt) {
        const time = el.stateTime;
        const cfg = el.config || {};
        const intensity = cfg.intensity || 1.0;
        const speed = cfg.speed || 1.0;

        ctx.save();

        const cx = W * 0.5;
        const cy = H * 0.5;
        const radius = Math.min(W, H) * 0.45;

        // Swirling Astral Aurora Ribbon
        const ribbons = 4;
        for (let r = 0; r < ribbons; r++) {
            const rPhase = time * 1.6 * speed + (r * Math.PI) / ribbons;
            const grad = ctx.createLinearGradient(0, 0, W, H);
            grad.addColorStop(0, 'rgba(0, 255, 200, 0.4)');
            grad.addColorStop(0.5, 'rgba(168, 85, 247, 0.45)');
            grad.addColorStop(1, 'rgba(59, 130, 246, 0.4)');

            ctx.strokeStyle = grad;
            ctx.lineWidth = 14 + r * 4;
            ctx.beginPath();
            for (let a = 0; a <= Math.PI * 2; a += 0.2) {
                const waveR = radius * (0.65 + Math.sin(a * 3 + rPhase) * 0.22);
                const x = cx + Math.cos(a) * waveR;
                const y = cy + Math.sin(a) * waveR;
                if (a === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.stroke();
        }

        ctx.restore();
    }


    // ========================================================================
    // 100 ANIMATED FEATURES: CATALOG & SPECIALIZED DRAWING ENGINES
    // ========================================================================

    drawRealisticTentacles(el, ctx, W, H, dt) {
        const time = el.stateTime;
        const cfg = el.config || {};
        const intensity = cfg.intensity || 1.0;
        const speed = cfg.speed || 1.0;
        const variant = cfg.variant || 'void_purple';
        const cx = W * 0.5;
        const cy = H * 0.5;

        ctx.save();

        // 1. Abyssal / Root / Flesh Pit Hole
        const holeR = Math.min(W, H) * 0.22;
        const holeGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, holeR);
        if (variant === 'slimy_green') {
            holeGrad.addColorStop(0, 'rgba(12, 24, 8, 0.98)');
            holeGrad.addColorStop(0.7, 'rgba(28, 52, 18, 0.92)');
            holeGrad.addColorStop(1, 'rgba(45, 85, 25, 0.0)');
        } else if (variant === 'crimson_blood') {
            holeGrad.addColorStop(0, 'rgba(35, 4, 8, 0.98)');
            holeGrad.addColorStop(0.7, 'rgba(95, 12, 22, 0.94)');
            holeGrad.addColorStop(1, 'rgba(145, 18, 30, 0.0)');
        } else {
            holeGrad.addColorStop(0, 'rgba(5, 0, 10, 0.98)');
            holeGrad.addColorStop(0.7, 'rgba(25, 5, 38, 0.95)');
            holeGrad.addColorStop(1, 'rgba(68, 12, 95, 0.0)');
        }
        ctx.fillStyle = holeGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, holeR, 0, Math.PI * 2);
        ctx.fill();

        // 2. 6 Writhing Tentacles / Briar Vines / Sinew Tendrils
        const tentacleCount = 6;
        for (let t = 0; t < tentacleCount; t++) {
            const baseAngle = (t / tentacleCount) * Math.PI * 2 + time * 0.15;
            const segments = 10;
            const segLen = (Math.min(W, H) * 0.38) / segments;

            let currX = cx + Math.cos(baseAngle) * (holeR * 0.5);
            let currY = cy + Math.sin(baseAngle) * (holeR * 0.5);

            const points = [{ x: currX, y: currY, w: 14 }];

            for (let s = 1; s <= segments; s++) {
                const sAngle = baseAngle + Math.sin(time * 2.2 * speed + s * 0.6 + t) * 0.45 * intensity;
                currX += Math.cos(sAngle) * segLen;
                currY += Math.sin(sAngle) * segLen;
                const width = Math.max(2, 14 * (1 - s / segments));
                points.push({ x: currX, y: currY, w: width });
            }

            // Draw Body
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            for (let p = 1; p < points.length; p++) {
                ctx.beginPath();
                if (variant === 'slimy_green') {
                    ctx.strokeStyle = `rgba(${35 + p * 4}, ${95 + p * 8}, ${25 + p * 3}, 0.94)`;
                } else if (variant === 'crimson_blood') {
                    ctx.strokeStyle = `rgba(${145 + p * 8}, ${18 + p * 3}, ${32 + p * 4}, 0.94)`;
                } else {
                    ctx.strokeStyle = `rgba(${120 + p * 8}, 28, ${160 + p * 8}, 0.92)`;
                }
                ctx.lineWidth = points[p].w * intensity;
                ctx.moveTo(points[p - 1].x, points[p - 1].y);
                ctx.lineTo(points[p].x, points[p].y);
                ctx.stroke();

                // Suckers / Thorns / Nodes along inner curve
                if (p % 2 === 0 && points[p].w > 4) {
                    if (variant === 'slimy_green') {
                        ctx.fillStyle = 'rgba(185, 220, 130, 0.9)';
                    } else if (variant === 'crimson_blood') {
                        ctx.fillStyle = 'rgba(255, 140, 150, 0.88)';
                    } else {
                        ctx.fillStyle = 'rgba(230, 180, 255, 0.85)';
                    }
                    ctx.beginPath();
                    ctx.arc(points[p].x + 3, points[p].y + 3, points[p].w * 0.25, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        }

        ctx.restore();
    }

    drawRealisticFountain(el, ctx, W, H, dt) {
        const time = el.stateTime;
        const cfg = el.config || {};
        const intensity = cfg.intensity || 1.0;
        const speed = cfg.speed || 1.0;
        const variant = cfg.variant || 'clear_water';
        const cx = W * 0.5;
        const cy = H * 0.5;
        const radius = Math.min(W, H) * 0.42;

        ctx.save();

        // 1. Stone / Copper / Obsidian Basin Outer Rim
        ctx.fillStyle = variant === 'blood_fount' ? 'rgba(45, 20, 24, 0.96)' : 'rgba(75, 85, 95, 0.95)';
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = variant === 'blood_fount' ? 'rgba(70, 28, 32, 0.95)' : 'rgba(100, 115, 130, 0.95)';
        ctx.beginPath();
        ctx.arc(cx, cy, radius * 0.92, 0, Math.PI * 2);
        ctx.fill();

        // 2. Basin Liquid Pool
        const poolGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius * 0.88);
        if (variant === 'blood_fount') {
            poolGrad.addColorStop(0, 'rgba(220, 20, 40, 0.92)');
            poolGrad.addColorStop(0.7, 'rgba(155, 10, 25, 0.95)');
            poolGrad.addColorStop(1, 'rgba(90, 5, 15, 0.98)');
        } else if (variant === 'alchemical_glow') {
            poolGrad.addColorStop(0, 'rgba(74, 222, 128, 0.90)');
            poolGrad.addColorStop(0.7, 'rgba(22, 163, 74, 0.94)');
            poolGrad.addColorStop(1, 'rgba(20, 83, 45, 0.96)');
        } else {
            poolGrad.addColorStop(0, 'rgba(14, 165, 233, 0.88)');
            poolGrad.addColorStop(0.7, 'rgba(2, 132, 199, 0.92)');
            poolGrad.addColorStop(1, 'rgba(3, 105, 161, 0.95)');
        }
        ctx.fillStyle = poolGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, radius * 0.88, 0, Math.PI * 2);
        ctx.fill();

        // 3. Concentric Expanding Liquid Ripples
        const rippleCount = 4;
        ctx.lineWidth = 1.4;
        for (let r = 0; r < rippleCount; r++) {
            const ripR = ((time * 30 * speed + r * (radius * 0.2)) % (radius * 0.8));
            const ripAlpha = (1 - ripR / (radius * 0.8)) * 0.55 * intensity;
            if (variant === 'blood_fount') {
                ctx.strokeStyle = `rgba(255, 130, 140, ${ripAlpha})`;
            } else if (variant === 'alchemical_glow') {
                ctx.strokeStyle = `rgba(187, 247, 208, ${ripAlpha})`;
            } else {
                ctx.strokeStyle = `rgba(224, 242, 254, ${ripAlpha})`;
            }
            ctx.beginPath();
            ctx.arc(cx, cy, ripR, 0, Math.PI * 2);
            ctx.stroke();
        }

        // 4. Central Ornate Pedestal
        ctx.fillStyle = variant === 'blood_fount' ? 'rgba(35, 12, 16, 0.98)' : 'rgba(55, 65, 75, 0.98)';
        ctx.beginPath();
        ctx.arc(cx, cy, radius * 0.24, 0, Math.PI * 2);
        ctx.fill();

        // 5. Upward Jet & Splashing Droplets
        if (variant === 'blood_fount') {
            ctx.fillStyle = 'rgba(255, 90, 105, 0.92)';
        } else if (variant === 'alchemical_glow') {
            ctx.fillStyle = 'rgba(220, 255, 230, 0.92)';
        } else {
            ctx.fillStyle = 'rgba(255, 255, 255, 0.92)';
        }
        ctx.beginPath();
        ctx.arc(cx, cy, radius * 0.12, 0, Math.PI * 2);
        ctx.fill();

        const dropCount = 14;
        for (let d = 0; d < dropCount; d++) {
            const dAng = (d / dropCount) * Math.PI * 2 + time * 0.8;
            const dDist = radius * (0.28 + 0.35 * Math.sin(time * 3 * speed + d * 1.5));
            ctx.beginPath();
            ctx.arc(cx + Math.cos(dAng) * dDist, cy + Math.sin(dAng) * dDist, 2.2, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.restore();
    }

    drawRealisticIndustrialFan(el, ctx, W, H, dt) {
        const time = el.stateTime;
        const cfg = el.config || {};
        const speed = cfg.speed || 1.0;
        const cx = W * 0.5;
        const cy = H * 0.5;
        const radius = Math.min(W, H) * 0.42;

        ctx.save();

        // 1. Metal Duct Housing
        ctx.fillStyle = 'rgba(35, 40, 48, 0.95)';
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = 'rgba(100, 110, 125, 0.95)';
        ctx.lineWidth = 4;
        ctx.stroke();

        // 2. Interior Shadow
        ctx.fillStyle = 'rgba(15, 18, 22, 0.95)';
        ctx.beginPath();
        ctx.arc(cx, cy, radius * 0.88, 0, Math.PI * 2);
        ctx.fill();

        // 3. Four Rotating Aerodynamic Fan Blades
        const bladeAngle = time * 18 * speed;
        for (let b = 0; b < 4; b++) {
            const ang = bladeAngle + (b * Math.PI) / 2;
            ctx.save();
            ctx.translate(cx, cy);
            ctx.rotate(ang);

            // Blade Shadow
            ctx.fillStyle = 'rgba(5, 5, 8, 0.45)';
            ctx.beginPath();
            ctx.ellipse(radius * 0.45 + 4, 4, radius * 0.42, radius * 0.18, 0.25, 0, Math.PI * 2);
            ctx.fill();

            // Metal Blade
            const bladeGrad = ctx.createLinearGradient(0, -radius * 0.15, radius * 0.85, radius * 0.15);
            bladeGrad.addColorStop(0, 'rgba(160, 175, 190, 0.95)');
            bladeGrad.addColorStop(0.5, 'rgba(215, 225, 235, 0.98)');
            bladeGrad.addColorStop(1, 'rgba(110, 125, 140, 0.92)');
            ctx.fillStyle = bladeGrad;
            ctx.beginPath();
            ctx.ellipse(radius * 0.45, 0, radius * 0.42, radius * 0.18, 0.25, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();
        }

        // 4. Central Hub & Motor Cap
        ctx.fillStyle = 'rgba(65, 75, 85, 0.98)';
        ctx.beginPath();
        ctx.arc(cx, cy, radius * 0.22, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = 'rgba(200, 210, 225, 0.85)';
        ctx.lineWidth = 2;
        ctx.stroke();

        // 5. Protective Steel Wire Grille
        ctx.strokeStyle = 'rgba(140, 150, 165, 0.55)';
        ctx.lineWidth = 1.2;
        for (let g = 0; g < 6; g++) {
            const gAng = (g / 6) * Math.PI;
            ctx.beginPath();
            ctx.moveTo(cx + Math.cos(gAng) * radius, cy + Math.sin(gAng) * radius);
            ctx.lineTo(cx - Math.cos(gAng) * radius, cy - Math.sin(gAng) * radius);
            ctx.stroke();
        }

        ctx.restore();
    }

    drawRealisticFloatingCrystal(el, ctx, W, H, dt) {
        const time = el.stateTime;
        const cfg = el.config || {};
        const intensity = cfg.intensity || 1.0;
        const speed = cfg.speed || 1.0;
        const variant = cfg.variant || 'arcane_violet';
        const cx = W * 0.5;
        const cy = H * 0.5;

        ctx.save();

        // Vertical bobbing
        const bob = Math.sin(time * 2.2 * speed) * 8;

        let auraTop = '192, 132, 252';
        let auraMid = '147, 51, 234';
        let auraBot = '107, 33, 168';
        let crysLight = '233, 213, 255';
        let crysMid = '192, 132, 252';
        let crysDark = '126, 34, 206';
        if (variant === 'sapphire_mana') {
            auraTop = '56, 189, 248';
            auraMid = '14, 165, 233';
            auraBot = '3, 105, 161';
            crysLight = '224, 242, 254';
            crysMid = '56, 189, 248';
            crysDark = '2, 132, 199';
        } else if (variant === 'emerald_fel') {
            auraTop = '74, 222, 128';
            auraMid = '22, 163, 74';
            auraBot = '20, 83, 45';
            crysLight = '220, 252, 231';
            crysMid = '74, 222, 128';
            crysDark = '21, 128, 61';
        }

        // 1. Soft Pulsing Ground Glow Aura
        const auraGrad = ctx.createRadialGradient(cx, cy + 20, 0, cx, cy + 20, 70 * intensity);
        auraGrad.addColorStop(0, `rgba(${auraTop}, 0.65)`);
        auraGrad.addColorStop(0.5, `rgba(${auraMid}, 0.28)`);
        auraGrad.addColorStop(1, `rgba(${auraBot}, 0.0)`);
        ctx.fillStyle = auraGrad;
        ctx.beginPath();
        ctx.ellipse(cx, cy + 20, 70 * intensity, 40 * intensity, 0, 0, Math.PI * 2);
        ctx.fill();

        // 2. Revolving Orbital Energy Motes
        const motes = 4;
        for (let m = 0; m < motes; m++) {
            const mAng = time * 2.5 * speed + (m * Math.PI * 2) / motes;
            const mx = cx + Math.cos(mAng) * 45;
            const my = (cy + bob) + Math.sin(mAng) * 22;
            ctx.fillStyle = `rgba(${crysLight}, 0.95)`;
            ctx.beginPath();
            ctx.arc(mx, my, 2.5, 0, Math.PI * 2);
            ctx.fill();
        }

        // 3. Faceted Gemstone / Monolith
        ctx.save();
        ctx.translate(cx, cy + bob);

        const crystalGrad = ctx.createLinearGradient(-25, -45, 25, 45);
        crystalGrad.addColorStop(0, `rgba(${crysLight}, 0.98)`);
        crystalGrad.addColorStop(0.4, `rgba(${crysMid}, 0.95)`);
        crystalGrad.addColorStop(1, `rgba(${crysDark}, 0.92)`);

        ctx.fillStyle = crystalGrad;
        ctx.beginPath();
        ctx.moveTo(0, -45);
        ctx.lineTo(24, -10);
        ctx.lineTo(0, 45);
        ctx.lineTo(-24, -10);
        ctx.closePath();
        ctx.fill();

        // Top Left Highlight Facet
        ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
        ctx.beginPath();
        ctx.moveTo(0, -45);
        ctx.lineTo(0, 45);
        ctx.lineTo(-24, -10);
        ctx.closePath();
        ctx.fill();

        // Facet Bevel Edges
        ctx.strokeStyle = `rgba(${crysLight}, 0.85)`;
        ctx.lineWidth = 1.4;
        ctx.stroke();

        ctx.restore();
        ctx.restore();
    }

    drawRealisticVehicleHeadlights(el, ctx, W, H, dt) {
        const time = el.stateTime;
        const cfg = el.config || {};
        const intensity = cfg.intensity || 1.0;
        const speed = cfg.speed || 1.0;
        const variant = cfg.variant || 'warm_halogen';

        ctx.save();

        const beamSpacing = W * 0.32;
        const leftX = W * 0.5 - beamSpacing * 0.5;
        const rightX = W * 0.5 + beamSpacing * 0.5;
        const sourceY = 10;
        const targetY = H * 0.88;
        const spread = W * 0.28;

        let c0 = '255, 255, 235';
        let c1 = '255, 245, 200';
        let c2 = '255, 240, 180';
        if (variant === 'xenon_white') {
            c0 = '235, 248, 255';
            c1 = '195, 230, 255';
            c2 = '150, 210, 255';
        } else if (variant === 'tactical_amber') {
            c0 = '255, 235, 190';
            c1 = '255, 195, 100';
            c2 = '245, 158, 11';
        }

        const drawCone = (sx) => {
            const sweepShift = variant === 'xenon_white' ? Math.sin(time * 1.4 * speed) * (W * 0.14) : 0;
            const tx = sx + (sx - W * 0.5) * 0.3 + sweepShift;
            const coneGrad = ctx.createLinearGradient(sx, sourceY, tx, targetY);
            coneGrad.addColorStop(0, `rgba(${c0}, ${0.52 * intensity})`);
            coneGrad.addColorStop(0.7, `rgba(${c1}, ${0.14 * intensity})`);
            coneGrad.addColorStop(1, `rgba(${c2}, 0.0)`);

            ctx.fillStyle = coneGrad;
            ctx.beginPath();
            ctx.moveTo(sx - 5, sourceY);
            ctx.lineTo(tx - spread, targetY);
            ctx.lineTo(tx + spread, targetY);
            ctx.lineTo(sx + 5, sourceY);
            ctx.closePath();
            ctx.fill();

            // Floor illumination pool
            const poolGrad = ctx.createRadialGradient(tx, targetY, 0, tx, targetY, spread);
            poolGrad.addColorStop(0, `rgba(${c0}, ${0.85 * intensity})`);
            poolGrad.addColorStop(0.6, `rgba(${c1}, ${0.35 * intensity})`);
            poolGrad.addColorStop(1, `rgba(${c2}, 0.0)`);
            ctx.fillStyle = poolGrad;
            ctx.beginPath();
            ctx.ellipse(tx, targetY, spread, spread * 0.45, 0, 0, Math.PI * 2);
            ctx.fill();

            // Lamp lens glow
            ctx.fillStyle = 'rgba(255, 255, 255, 0.98)';
            ctx.beginPath();
            ctx.arc(sx, sourceY, 6, 0, Math.PI * 2);
            ctx.fill();
        };

        if (variant === 'xenon_white') {
            drawCone(W * 0.5);
        } else {
            drawCone(leftX);
            drawCone(rightX);
        }

        ctx.restore();
    }

    drawRealisticLightstrip(el, ctx, W, H, dt) {
        const time = el.stateTime;
        const cfg = el.config || {};
        const speed = cfg.speed || 1.2;
        const variant = cfg.variant || 'cyan_chevron';

        ctx.save();

        // 1. Floor Base Track
        ctx.fillStyle = 'rgba(20, 25, 32, 0.95)';
        ctx.fillRect(0, H * 0.25, W, H * 0.5);

        ctx.strokeStyle = 'rgba(75, 85, 100, 0.85)';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(0, H * 0.25, W, H * 0.5);

        // 2. Running Neon Chevrons >>>
        const chevronCount = 8;
        const spacing = W / chevronCount;
        const runOffset = (time * 65 * speed) % spacing;
        const chevronColor = variant === 'amber_warning' ? '250, 204, 21' : '0, 255, 200';

        for (let c = -1; c <= chevronCount + 1; c++) {
            const cx = c * spacing + runOffset;
            const cy = H * 0.5;
            const pulse = (Math.sin(time * 6 * speed + c) * 0.3 + 0.7);

            ctx.strokeStyle = `rgba(${chevronColor}, ${pulse * 0.9})`;
            ctx.lineWidth = 3.5;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';

            ctx.beginPath();
            ctx.moveTo(cx - 10, cy - 14);
            ctx.lineTo(cx + 6, cy);
            ctx.lineTo(cx - 10, cy + 14);
            ctx.stroke();
        }

        ctx.restore();
    }

    drawRealisticPitTrap(el, ctx, W, H, dt) {
        const time = el.stateTime;
        const cx = W * 0.5;
        const cy = H * 0.5;
        const radius = Math.min(W, H) * 0.42;

        ctx.save();

        // 1. Broken Stone Perimeter Edge
        ctx.fillStyle = 'rgba(38, 30, 24, 0.95)';
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fill();

        // 2. Pitch Black Bottom Pit
        const pitGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius * 0.88);
        pitGrad.addColorStop(0, 'rgba(5, 5, 8, 0.98)');
        pitGrad.addColorStop(0.8, 'rgba(15, 12, 10, 0.95)');
        pitGrad.addColorStop(1, 'rgba(45, 35, 28, 0.85)');
        ctx.fillStyle = pitGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, radius * 0.88, 0, Math.PI * 2);
        ctx.fill();

        // 3. Sharpened Iron Spikes pointing upward
        const spikeCount = 9;
        ctx.fillStyle = 'rgba(160, 165, 175, 0.95)';
        ctx.strokeStyle = 'rgba(40, 45, 50, 0.95)';
        ctx.lineWidth = 1;

        for (let s = 0; s < spikeCount; s++) {
            const ang = (s / spikeCount) * Math.PI * 2;
            const dist = radius * (s % 2 === 0 ? 0.45 : 0.25);
            const sx = cx + Math.cos(ang) * dist;
            const sy = cy + Math.sin(ang) * dist;

            ctx.beginPath();
            ctx.moveTo(sx, sy - 8);
            ctx.lineTo(sx + 3, sy + 6);
            ctx.lineTo(sx - 3, sy + 6);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
        }

        ctx.restore();
    }

    drawRealisticConveyor(el, ctx, W, H, dt) {
        const time = el.stateTime;
        const cfg = el.config || {};
        const speed = cfg.speed || 1.2;

        ctx.save();

        // Industrial Rubber Track
        ctx.fillStyle = 'rgba(28, 32, 38, 0.98)';
        ctx.fillRect(0, 0, W, H);

        // Slats moving continuously
        const slatWidth = 24;
        const offset = (time * 50 * speed) % slatWidth;

        ctx.strokeStyle = 'rgba(55, 62, 72, 0.85)';
        ctx.lineWidth = 2;
        for (let x = -slatWidth; x < W + slatWidth; x += slatWidth) {
            const sx = x + offset;
            ctx.beginPath();
            ctx.moveTo(sx, 12);
            ctx.lineTo(sx, H - 12);
            ctx.stroke();
        }

        // Top and bottom yellow/black hazard stripes
        const stripeW = 16;
        for (let sx = -stripeW; sx < W + stripeW; sx += stripeW * 2) {
            ctx.fillStyle = '#facc15';
            ctx.fillRect(sx, 0, stripeW, 10);
            ctx.fillRect(sx, H - 10, stripeW, 10);
            ctx.fillStyle = '#111827';
            ctx.fillRect(sx + stripeW, 0, stripeW, 10);
            ctx.fillRect(sx + stripeW, H - 10, stripeW, 10);
        }

        ctx.restore();
    }

    // ------------------------------------------------------------------------
    // BESPOKE PROCEDURAL RENDERER FOR SPECIALIZED CATALOG FEATURES
    // Ensures all 160 features render a 100% unique visual animation
    // ------------------------------------------------------------------------
    drawBespokeFeature(el, ctx, W, H, dt) {
        const time = el.stateTime || 0;
        const cfg = el.config || {};
        const variant = cfg.variant || el.type;
        const speed = cfg.speed || 1.0;
        const intensity = cfg.intensity || 1.0;
        const density = cfg.particleDensity || 1.0;
        const cx = W * 0.5;
        const cy = H * 0.5;
        const minDim = Math.min(W, H);

        switch (variant) {
            // 1. Stone Wall Hearth & Mantel (Rectangular stone fireplace with directional room glow)
            case 'uni_hearth': {
                ctx.save();
                // Directional warm room light projecting downward from the hearth
                const roomGlow = ctx.createRadialGradient(cx, H * 0.35, 6, cx, H * 0.55, Math.max(W, H) * 0.65);
                const flick = Math.sin(time * 9 * speed) * 0.06 + Math.cos(time * 14 * speed) * 0.04;
                roomGlow.addColorStop(0, `rgba(255, 190, 90, ${(0.58 + flick) * intensity})`);
                roomGlow.addColorStop(0.5, `rgba(255, 110, 25, ${(0.28 + flick) * intensity})`);
                roomGlow.addColorStop(1, 'rgba(255, 60, 0, 0)');
                ctx.fillStyle = roomGlow;
                ctx.fillRect(0, 0, W, H);

                // Slate front hearthstone slab
                ctx.fillStyle = '#2d3138';
                ctx.strokeStyle = '#17191d';
                ctx.lineWidth = 2;
                ctx.fillRect(W * 0.14, H * 0.16, W * 0.72, H * 0.42);
                ctx.strokeRect(W * 0.14, H * 0.16, W * 0.72, H * 0.42);

                // U-shaped thick stone chimney walls & side pillars
                ctx.fillStyle = '#4b525c';
                ctx.fillRect(W * 0.12, H * 0.08, W * 0.76, H * 0.14);
                ctx.fillRect(W * 0.12, H * 0.08, W * 0.15, H * 0.36);
                ctx.fillRect(W * 0.73, H * 0.08, W * 0.15, H * 0.36);

                // Recessed dark firebox interior
                ctx.fillStyle = '#141110';
                ctx.fillRect(W * 0.27, H * 0.18, W * 0.46, H * 0.24);

                // Split hearth logs & iron andirons
                ctx.fillStyle = '#3b2313';
                ctx.fillRect(W * 0.31, H * 0.23, W * 0.38, H * 0.06);
                ctx.fillRect(W * 0.33, H * 0.30, W * 0.34, H * 0.06);

                // Roaring hearth flames along the logs
                ctx.globalCompositeOperation = 'screen';
                for (let i = 0; i < 7; i++) {
                    const fx = W * (0.33 + i * 0.055) + Math.sin(time * 8 + i) * 3;
                    const fy = H * 0.29 + Math.cos(time * 10 + i * 2) * 3;
                    const r = minDim * (0.07 + 0.025 * Math.sin(time * 12 + i));
                    const fg = ctx.createRadialGradient(fx, fy, 1, fx, fy + 6, r);
                    fg.addColorStop(0, 'rgba(255, 250, 200, 0.95)');
                    fg.addColorStop(0.5, 'rgba(255, 130, 20, 0.75)');
                    fg.addColorStop(1, 'rgba(220, 30, 0, 0)');
                    ctx.fillStyle = fg;
                    ctx.beginPath();
                    ctx.arc(fx, fy, r, 0, Math.PI * 2);
                    ctx.fill();
                }
                ctx.restore();
                return true;
            }

            // 2. Smoldering Ash & Red Coals (Realistic charred split logs + incandescent glowing fissure veins + powdery ash)
            case 'uni_dyingembers': {
                ctx.save();
                const r = minDim * 0.38;
                const pulse = 0.70 + 0.30 * Math.sin(time * 2.8 * speed);

                // 1. Soft 360° Omnidirectional Radiant Heat Glow
                const amb = ctx.createRadialGradient(cx, cy, r * 0.1, cx, cy, r * 1.35);
                amb.addColorStop(0, `rgba(255, 75, 15, ${0.48 * pulse * intensity})`);
                amb.addColorStop(0.45, `rgba(194, 65, 12, ${0.22 * pulse * intensity})`);
                amb.addColorStop(0.80, `rgba(124, 45, 10, ${0.08 * pulse * intensity})`);
                amb.addColorStop(1, 'rgba(0, 0, 0, 0)');
                ctx.fillStyle = amb;
                ctx.beginPath();
                ctx.arc(cx, cy, r * 1.35, 0, Math.PI * 2);
                ctx.fill();

                // 2. Outer Scorched Hearth Pit & Ash Bed
                const ashGrad = ctx.createRadialGradient(cx, cy, 2, cx, cy, r * 0.85);
                ashGrad.addColorStop(0, '#1c1917');
                ashGrad.addColorStop(0.65, '#292524');
                ashGrad.addColorStop(0.92, '#171412');
                ashGrad.addColorStop(1, 'rgba(15, 13, 11, 0)');
                ctx.fillStyle = ashGrad;
                ctx.beginPath();
                ctx.arc(cx, cy, r * 0.85, 0, Math.PI * 2);
                ctx.fill();

                // Powdery white/gray wood ash patches around the perimeter
                ctx.fillStyle = 'rgba(214, 211, 209, 0.45)';
                for (let a = 0; a < 6; a++) {
                    const aAngle = a * 1.05 + 0.3;
                    const aDist = r * (0.45 + (a % 3) * 0.12);
                    const ax = cx + Math.cos(aAngle) * aDist;
                    const ay = cy + Math.sin(aAngle) * aDist;
                    ctx.beginPath();
                    ctx.ellipse(ax, ay, 9 + a * 2, 5 + (a % 2) * 2, aAngle, 0, Math.PI * 2);
                    ctx.fill();
                }

                // 3. Central Deep Glowing Coal Bed (Incandescent embers nestled between logs)
                const coalHeat = 0.65 + 0.35 * Math.sin(time * 3.5 * speed);
                const coalGrad = ctx.createRadialGradient(cx, cy, 1, cx, cy, r * 0.42);
                coalGrad.addColorStop(0, `rgba(255, 235, 180, ${coalHeat * intensity})`);
                coalGrad.addColorStop(0.35, `rgba(249, 115, 22, ${coalHeat * 0.9 * intensity})`);
                coalGrad.addColorStop(0.70, `rgba(185, 28, 28, ${coalHeat * 0.6 * intensity})`);
                coalGrad.addColorStop(1, 'rgba(0,0,0,0)');
                ctx.fillStyle = coalGrad;
                ctx.beginPath();
                ctx.arc(cx, cy, r * 0.42, 0, Math.PI * 2);
                ctx.fill();

                // 4. Realistic Crossed Charred Split Oak Logs
                const logAngles = [0.35, 1.45, 2.35, 3.25];
                for (let l = 0; l < logAngles.length; l++) {
                    const la = logAngles[l];
                    ctx.save();
                    ctx.translate(cx, cy);
                    ctx.rotate(la);

                    const logLen = r * 1.05;
                    const logW = r * 0.22;

                    // Charred dark bark
                    ctx.fillStyle = '#1c1917';
                    ctx.beginPath();
                    ctx.roundRect(-logLen * 0.5, -logW * 0.5, logLen, logW, 3);
                    ctx.fill();

                    // Split log bark edge highlights
                    ctx.strokeStyle = '#292524';
                    ctx.lineWidth = 1.5;
                    ctx.stroke();

                    // Glowing fiery longitudinal fissure cracks running along the wood grain
                    const crackPulse = Math.sin(time * 3.8 * speed + l * 1.5) * 0.5 + 0.5;
                    ctx.strokeStyle = `rgba(255, ${Math.floor(120 + crackPulse * 110)}, 30, ${0.75 + crackPulse * 0.25})`;
                    ctx.lineWidth = 2.0;
                    ctx.beginPath();
                    ctx.moveTo(-logLen * 0.38, 0);
                    ctx.lineTo(-logLen * 0.1, -1);
                    ctx.lineTo(logLen * 0.15, 1);
                    ctx.lineTo(logLen * 0.38, -0.5);
                    ctx.stroke();

                    // White powdery ash dusting the top face of the log
                    ctx.fillStyle = 'rgba(228, 228, 231, 0.45)';
                    ctx.fillRect(-logLen * 0.35, -logW * 0.35, logLen * 0.7, logW * 0.25);

                    ctx.restore();
                }

                // 5. Delicate Curling Wisps of Pale White Woodsmoke rising from the hottest coals
                for (let s = 0; s < 6; s++) {
                    const prog = ((time * 0.4 * speed + s * 0.16) % 1.0);
                    const sx = cx + Math.sin(time * 2.0 + s * 1.8) * (r * 0.28 * prog);
                    const sy = cy - prog * (r * 0.85);
                    const sr = 5 + prog * 18;
                    const sAlpha = Math.sin(prog * Math.PI) * 0.35 * intensity;

                    const sg = ctx.createRadialGradient(sx, sy, 0, sx, sy, sr);
                    sg.addColorStop(0, `rgba(228, 228, 231, ${sAlpha})`);
                    sg.addColorStop(0.5, `rgba(212, 212, 216, ${sAlpha * 0.5})`);
                    sg.addColorStop(1, 'rgba(212, 212, 216, 0)');
                    ctx.fillStyle = sg;
                    ctx.beginPath();
                    ctx.arc(sx, sy, sr, 0, Math.PI * 2);
                    ctx.fill();
                }

                ctx.restore();
                return true;
            }

            // 3. Standing Iron Fire Basket (Wrought-iron ribbed cage + coals + central blaze)
            case 'uni_brazier': {
                ctx.save();
                const r = minDim * 0.34;
                const glow = ctx.createRadialGradient(cx, cy, 4, cx, cy, r * 1.35);
                glow.addColorStop(0, `rgba(255, 180, 60, ${0.55 * intensity})`);
                glow.addColorStop(0.55, `rgba(255, 90, 15, ${0.22 * intensity})`);
                glow.addColorStop(1, 'rgba(0,0,0,0)');
                ctx.fillStyle = glow;
                ctx.beginPath();
                ctx.arc(cx, cy, r * 1.35, 0, Math.PI * 2);
                ctx.fill();

                // 4 splayed iron legs
                ctx.strokeStyle = '#1f242b';
                ctx.lineWidth = 5;
                for (let l = 0; l < 4; l++) {
                    const a = l * Math.PI * 0.5 + Math.PI * 0.25;
                    ctx.beginPath();
                    ctx.moveTo(cx, cy);
                    ctx.lineTo(cx + Math.cos(a) * r * 0.82, cy + Math.sin(a) * r * 0.82);
                    ctx.stroke();
                }

                // Iron basket bowl & glowing coal core
                ctx.fillStyle = '#181a1f';
                ctx.beginPath();
                ctx.arc(cx, cy, r * 0.62, 0, Math.PI * 2);
                ctx.fill();

                ctx.globalCompositeOperation = 'screen';
                for (let f = 0; f < 6; f++) {
                    const a = time * 4 * speed + f * 1.04;
                    const fx = cx + Math.cos(a) * (r * 0.16);
                    const fy = cy + Math.sin(a) * (r * 0.16);
                    const fr = r * (0.38 + 0.08 * Math.sin(time * 9 + f));
                    const fg = ctx.createRadialGradient(fx, fy, 1, fx, fy, fr);
                    fg.addColorStop(0, 'rgba(255, 250, 190, 0.9)');
                    fg.addColorStop(0.5, 'rgba(255, 120, 20, 0.7)');
                    fg.addColorStop(1, 'rgba(200, 20, 0, 0)');
                    ctx.fillStyle = fg;
                    ctx.beginPath();
                    ctx.arc(fx, fy, fr, 0, Math.PI * 2);
                    ctx.fill();
                }
                ctx.globalCompositeOperation = 'source-over';

                // 8 radial wrought-iron cage ribs & outer ring over the coals
                ctx.strokeStyle = '#2d333d';
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.arc(cx, cy, r * 0.62, 0, Math.PI * 2);
                ctx.stroke();
                for (let rib = 0; rib < 8; rib++) {
                    const ra = (rib / 8) * Math.PI * 2;
                    ctx.beginPath();
                    ctx.moveTo(cx + Math.cos(ra) * r * 0.35, cy + Math.sin(ra) * r * 0.35);
                    ctx.lineTo(cx + Math.cos(ra) * r * 0.64, cy + Math.sin(ra) * r * 0.64);
                    ctx.stroke();
                }
                ctx.restore();
                return true;
            }

            // 4. Bronze Tripod Temple Brazier (Hammered bronze bowl, 3 lion-paw legs, golden-amber incense fire)
            case 'hist_brazier': {
                ctx.save();
                const r = minDim * 0.36;
                // 3 ornate bronze tripod legs
                for (let l = 0; l < 3; l++) {
                    const a = (l / 3) * Math.PI * 2 - Math.PI * 0.5;
                    const lx = cx + Math.cos(a) * r * 0.85;
                    const ly = cy + Math.sin(a) * r * 0.85;
                    ctx.strokeStyle = '#92622a';
                    ctx.lineWidth = 6;
                    ctx.beginPath();
                    ctx.moveTo(cx, cy);
                    ctx.lineTo(lx, ly);
                    ctx.stroke();
                    ctx.fillStyle = '#d99b43';
                    ctx.beginPath();
                    ctx.arc(lx, ly, 5.5, 0, Math.PI * 2);
                    ctx.fill();
                }
                // Hammered bronze pan with engraved gold rim
                ctx.fillStyle = '#5c3a16';
                ctx.strokeStyle = '#eab308';
                ctx.lineWidth = 3.5;
                ctx.beginPath();
                ctx.arc(cx, cy, r * 0.64, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();

                // Sacred golden-emerald temple flames
                ctx.globalCompositeOperation = 'screen';
                for (let i = 0; i < 7; i++) {
                    const ang = time * 3 * speed + i * 0.9;
                    const fx = cx + Math.cos(ang) * r * 0.18;
                    const fy = cy + Math.sin(ang) * r * 0.18;
                    const fr = r * (0.36 + 0.08 * Math.sin(time * 8 + i));
                    const fg = ctx.createRadialGradient(fx, fy, 1, fx, fy, fr);
                    fg.addColorStop(0, 'rgba(255, 255, 210, 0.95)');
                    fg.addColorStop(0.5, 'rgba(245, 185, 35, 0.75)');
                    fg.addColorStop(1, 'rgba(16, 185, 129, 0)');
                    ctx.fillStyle = fg;
                    ctx.beginPath();
                    ctx.arc(fx, fy, fr, 0, Math.PI * 2);
                    ctx.fill();
                }
                ctx.restore();
                return true;
            }

            // 5. Dwarven Forge, Pumping Bellows & Anvil
            case 'hist_forge': {
                ctx.save();
                const pump = 0.5 + 0.5 * Math.sin(time * 3.5 * speed);
                // Stone forge structure on left
                ctx.fillStyle = '#373b44';
                ctx.strokeStyle = '#181b20';
                ctx.lineWidth = 2.5;
                ctx.fillRect(W * 0.08, H * 0.18, W * 0.44, H * 0.64);
                ctx.strokeRect(W * 0.08, H * 0.18, W * 0.44, H * 0.64);

                // White-hot coal pit inside forge flaring with bellows pump
                const coalX = W * 0.30;
                const coalY = H * 0.50;
                const coalR = minDim * 0.22;
                ctx.fillStyle = '#181210';
                ctx.beginPath();
                ctx.arc(coalX, coalY, coalR, 0, Math.PI * 2);
                ctx.fill();

                const fg = ctx.createRadialGradient(coalX, coalY, 2, coalX, coalY, coalR * (1.2 + pump * 0.45));
                fg.addColorStop(0, `rgba(255, 255, 230, ${0.85 + pump * 0.15})`);
                fg.addColorStop(0.45, `rgba(255, 140, 20, ${0.7 + pump * 0.25})`);
                fg.addColorStop(1, 'rgba(220, 30, 0, 0)');
                ctx.fillStyle = fg;
                ctx.beginPath();
                ctx.arc(coalX, coalY, coalR * 1.5, 0, Math.PI * 2);
                ctx.fill();

                // Animated leather bellows on right-top pumping air into the coal bed
                const bScale = 0.72 + pump * 0.28;
                ctx.fillStyle = '#6b3e23';
                ctx.strokeStyle = '#c8963e';
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.moveTo(W * 0.46, H * 0.42);
                ctx.lineTo(W * (0.46 + 0.36 * bScale), H * (0.42 - 0.16 * bScale));
                ctx.lineTo(W * (0.46 + 0.40 * bScale), H * 0.42);
                ctx.lineTo(W * (0.46 + 0.36 * bScale), H * (0.42 + 0.16 * bScale));
                ctx.closePath();
                ctx.fill();
                ctx.stroke();

                // Heavy steel Anvil on oak stump at bottom-right
                ctx.fillStyle = '#4e3521';
                ctx.beginPath();
                ctx.arc(W * 0.72, H * 0.74, minDim * 0.12, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#64748b';
                ctx.fillRect(W * 0.66, H * 0.70, W * 0.12, H * 0.08);
                ctx.beginPath();
                ctx.moveTo(W * 0.66, H * 0.70);
                ctx.lineTo(W * 0.60, H * 0.74);
                ctx.lineTo(W * 0.66, H * 0.78);
                ctx.fill();
                ctx.restore();
                return true;
            }

            // 6. Iron Wall-Bracket Pitch Torch
            case 'uni_torch': {
                ctx.save();
                const tx = cx;
                const ty = H * 0.46;
                // Warm flickering torchlight pool
                const glow = ctx.createRadialGradient(tx, ty, 2, tx, ty, minDim * 0.46);
                glow.addColorStop(0, `rgba(255, 220, 120, ${0.65 * intensity})`);
                glow.addColorStop(0.5, `rgba(255, 115, 20, ${0.28 * intensity})`);
                glow.addColorStop(1, 'rgba(0,0,0,0)');
                ctx.fillStyle = glow;
                ctx.beginPath();
                ctx.arc(tx, ty, minDim * 0.46, 0, Math.PI * 2);
                ctx.fill();

                // Iron wall plate & angled bracket arm from top edge
                ctx.fillStyle = '#272b33';
                ctx.fillRect(cx - 18, 4, 36, 8);
                ctx.strokeStyle = '#383e49';
                ctx.lineWidth = 5;
                ctx.beginPath();
                ctx.moveTo(cx, 8);
                ctx.lineTo(tx, ty);
                ctx.stroke();

                // Pitch-wrapped torch head & flame
                ctx.fillStyle = '#4a2c18';
                ctx.beginPath();
                ctx.arc(tx, ty, 9, 0, Math.PI * 2);
                ctx.fill();

                const fx = tx + Math.sin(time * 11 * speed) * 3.5;
                const fy = ty + Math.cos(time * 9 * speed) * 3.5;
                const fg = ctx.createRadialGradient(fx, fy, 1, tx, ty, 20);
                fg.addColorStop(0, 'rgba(255, 255, 210, 0.98)');
                fg.addColorStop(0.45, 'rgba(255, 140, 20, 0.85)');
                fg.addColorStop(1, 'rgba(220, 30, 0, 0)');
                ctx.fillStyle = fg;
                ctx.beginPath();
                ctx.arc(fx, fy, 20, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
                return true;
            }

            // 7. Heraldic Twin-Torch Sconce (Two angled torches on a steel shield wall plate)
            case 'hist_sconce': {
                ctx.save();
                // Embossed steel shield plate at top
                ctx.fillStyle = '#475569';
                ctx.strokeStyle = '#94a3b8';
                ctx.lineWidth = 2;
                ctx.fillRect(W * 0.25, 6, W * 0.50, 12);
                ctx.strokeRect(W * 0.25, 6, W * 0.50, 12);

                const spots = [
                    { x: W * 0.34, y: H * 0.48 },
                    { x: W * 0.66, y: H * 0.48 }
                ];
                spots.forEach((pt, idx) => {
                    ctx.strokeStyle = '#334155';
                    ctx.lineWidth = 4.5;
                    ctx.beginPath();
                    ctx.moveTo(cx, 12);
                    ctx.lineTo(pt.x, pt.y);
                    ctx.stroke();

                    const fx = pt.x + Math.sin(time * 10 * speed + idx * 2) * 3;
                    const fy = pt.y + Math.cos(time * 8 * speed + idx * 2) * 3;
                    const fg = ctx.createRadialGradient(fx, fy, 1, pt.x, pt.y, minDim * 0.28);
                    fg.addColorStop(0, 'rgba(255, 250, 200, 0.95)');
                    fg.addColorStop(0.4, 'rgba(255, 135, 25, 0.72)');
                    fg.addColorStop(1, 'rgba(220, 40, 0, 0)');
                    ctx.fillStyle = fg;
                    ctx.beginPath();
                    ctx.arc(pt.x, pt.y, minDim * 0.28, 0, Math.PI * 2);
                    ctx.fill();
                });
                ctx.restore();
                return true;
            }

            // 8. Melted Wax Pillar Candles (7 distinct ivory wax pillars & gentle teardrop wicks)
            case 'uni_candles': {
                ctx.save();
                const candles = [
                    { x: 0.50, y: 0.50, r: 10 },
                    { x: 0.34, y: 0.42, r: 8 },
                    { x: 0.65, y: 0.40, r: 8.5 },
                    { x: 0.32, y: 0.62, r: 7 },
                    { x: 0.66, y: 0.60, r: 7.5 },
                    { x: 0.47, y: 0.30, r: 6.5 },
                    { x: 0.52, y: 0.70, r: 7 }
                ];
                const amb = ctx.createRadialGradient(cx, cy, 4, cx, cy, minDim * 0.48);
                amb.addColorStop(0, `rgba(255, 215, 130, ${0.48 * intensity})`);
                amb.addColorStop(1, 'rgba(255, 150, 40, 0)');
                ctx.fillStyle = amb;
                ctx.beginPath();
                ctx.arc(cx, cy, minDim * 0.48, 0, Math.PI * 2);
                ctx.fill();

                candles.forEach((c, i) => {
                    const px = W * c.x;
                    const py = H * c.y;
                    // Melted wax puddle
                    ctx.fillStyle = 'rgba(245, 238, 215, 0.88)';
                    ctx.beginPath();
                    ctx.arc(px, py, c.r * 1.25, 0, Math.PI * 2);
                    ctx.fill();
                    // Pillar top
                    ctx.fillStyle = '#fffbeb';
                    ctx.strokeStyle = '#d6c7a1';
                    ctx.lineWidth = 1.2;
                    ctx.beginPath();
                    ctx.arc(px, py, c.r, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.stroke();
                    // Flickering candle wick flame
                    const wx = px + Math.sin(time * 7 * speed + i * 1.4) * 2;
                    const wy = py + Math.cos(time * 6 * speed + i * 1.7) * 2;
                    const fg = ctx.createRadialGradient(wx, wy, 0.5, wx, wy, c.r * 1.4);
                    fg.addColorStop(0, 'rgba(255, 255, 240, 0.98)');
                    fg.addColorStop(0.5, 'rgba(255, 190, 50, 0.85)');
                    fg.addColorStop(1, 'rgba(255, 100, 0, 0)');
                    ctx.fillStyle = fg;
                    ctx.beginPath();
                    ctx.arc(wx, wy, c.r * 1.4, 0, Math.PI * 2);
                    ctx.fill();
                });
                ctx.restore();
                return true;
            }

            // 9. Great Hall Iron Chandelier (8-candle wrought-iron wheel suspended on chains)
            case 'hist_candelabra': {
                ctx.save();
                const r = minDim * 0.36;
                const swayX = Math.sin(time * 1.2 * speed) * 3;
                const swayY = Math.cos(time * 0.9 * speed) * 3;
                const wx = cx + swayX;
                const wy = cy + swayY;

                // Ambient chandelier floor light
                const glow = ctx.createRadialGradient(wx, wy, r * 0.2, wx, wy, r * 1.3);
                glow.addColorStop(0, `rgba(255, 215, 130, ${0.48 * intensity})`);
                glow.addColorStop(1, 'rgba(255, 140, 30, 0)');
                ctx.fillStyle = glow;
                ctx.beginPath();
                ctx.arc(wx, wy, r * 1.3, 0, Math.PI * 2);
                ctx.fill();

                // Wrought iron wheel & 8 spokes
                ctx.strokeStyle = '#1e242b';
                ctx.lineWidth = 4;
                ctx.beginPath();
                ctx.arc(wx, wy, r, 0, Math.PI * 2);
                ctx.stroke();

                for (let i = 0; i < 8; i++) {
                    const a = (i / 8) * Math.PI * 2 + time * 0.08 * speed;
                    const kx = wx + Math.cos(a) * r;
                    const ky = wy + Math.sin(a) * r;
                    ctx.strokeStyle = '#2d3540';
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.moveTo(wx, wy);
                    ctx.lineTo(kx, ky);
                    ctx.stroke();

                    // Candle cup & flame
                    ctx.fillStyle = '#fef3c7';
                    ctx.beginPath();
                    ctx.arc(kx, ky, 4.5, 0, Math.PI * 2);
                    ctx.fill();
                    const fg = ctx.createRadialGradient(kx, ky, 1, kx, ky, 12);
                    fg.addColorStop(0, 'rgba(255, 255, 220, 0.98)');
                    fg.addColorStop(0.5, 'rgba(255, 180, 40, 0.75)');
                    fg.addColorStop(1, 'rgba(255, 90, 0, 0)');
                    ctx.fillStyle = fg;
                    ctx.beginPath();
                    ctx.arc(kx, ky, 12, 0, Math.PI * 2);
                    ctx.fill();
                }
                ctx.restore();
                return true;
            }

            // 10. Orbiting Wizard Magelights (3 dancing arcane spheres in cyan, magenta, gold)
            case 'hist_witchlight': {
                ctx.save();
                const orbs = [
                    { c1: '56, 189, 248', phase: 0 },
                    { c1: '232, 121, 249', phase: 2.094 },
                    { c1: '250, 204, 21', phase: 4.188 }
                ];
                const r = minDim * 0.28;
                ctx.globalCompositeOperation = 'screen';
                orbs.forEach((o, i) => {
                    const a = time * 2.2 * speed + o.phase;
                    const ox = cx + Math.cos(a) * r * (0.8 + 0.2 * Math.sin(time * 3 + i));
                    const oy = cy + Math.sin(a * 1.5) * r * 0.75;
                    const g = ctx.createRadialGradient(ox, oy, 1, ox, oy, 26);
                    g.addColorStop(0, 'rgba(255, 255, 255, 0.98)');
                    g.addColorStop(0.35, `rgba(${o.c1}, 0.85)`);
                    g.addColorStop(1, `rgba(${o.c1}, 0)`);
                    ctx.fillStyle = g;
                    ctx.beginPath();
                    ctx.arc(ox, oy, 26, 0, Math.PI * 2);
                    ctx.fill();
                });
                ctx.restore();
                return true;
            }

            // 11. Horned Skull Occult Candelabra (Bone skull + 5 black ritual candles with violet-crimson flames)
            case 'oth_candlelabra': {
                ctx.save();
                const r = minDim * 0.34;
                // Curved bone horns
                ctx.strokeStyle = '#d6d3d1';
                ctx.lineWidth = 6;
                ctx.beginPath();
                ctx.arc(cx - r * 0.35, cy, r * 0.55, Math.PI * 0.6, Math.PI * 1.4);
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(cx + r * 0.35, cy, r * 0.55, -Math.PI * 0.4, Math.PI * 0.4);
                ctx.stroke();

                // Central bone cranium
                ctx.fillStyle = '#e7e5e4';
                ctx.beginPath();
                ctx.ellipse(cx, cy, r * 0.35, r * 0.42, 0, 0, Math.PI * 2);
                ctx.fill();

                // 5 black wax occult candles with violet-crimson flames
                const pts = [
                    { x: cx, y: cy - r * 0.1 },
                    { x: cx - r * 0.65, y: cy - r * 0.35 },
                    { x: cx + r * 0.65, y: cy - r * 0.35 },
                    { x: cx - r * 0.65, y: cy + r * 0.35 },
                    { x: cx + r * 0.65, y: cy + r * 0.35 }
                ];
                pts.forEach((p, idx) => {
                    ctx.fillStyle = '#18181b';
                    ctx.strokeStyle = '#991b1b';
                    ctx.lineWidth = 1.5;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, 6, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.stroke();

                    const fx = p.x + Math.sin(time * 9 * speed + idx) * 2;
                    const fy = p.y + Math.cos(time * 8 * speed + idx) * 2;
                    const fg = ctx.createRadialGradient(fx, fy, 1, fx, fy, 16);
                    fg.addColorStop(0, 'rgba(255, 230, 255, 0.98)');
                    fg.addColorStop(0.45, 'rgba(192, 38, 211, 0.82)');
                    fg.addColorStop(1, 'rgba(220, 38, 38, 0)');
                    ctx.fillStyle = fg;
                    ctx.beginPath();
                    ctx.arc(fx, fy, 16, 0, Math.PI * 2);
                    ctx.fill();
                });
                ctx.restore();
                return true;
            }

            // 12. Spectral Corpse-Candle Cage (Iron gibbet cage + skull + eerie teal corpse-flame)
            case 'oth_ghostlight': {
                ctx.save();
                const bobX = cx + Math.sin(time * 2.2 * speed) * 5;
                const bobY = cy + Math.cos(time * 1.7 * speed) * 4;
                const r = minDim * 0.28;
                const g = ctx.createRadialGradient(bobX, bobY, 2, bobX, bobY, r * 1.5);
                g.addColorStop(0, 'rgba(204, 251, 241, 0.95)');
                g.addColorStop(0.4, 'rgba(45, 212, 191, 0.65)');
                g.addColorStop(1, 'rgba(13, 148, 136, 0)');
                ctx.fillStyle = g;
                ctx.beginPath();
                ctx.arc(bobX, bobY, r * 1.5, 0, Math.PI * 2);
                ctx.fill();

                // Rusted iron cage bars
                ctx.strokeStyle = '#27272a';
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.arc(bobX, bobY, r * 0.55, 0, Math.PI * 2);
                ctx.stroke();
                ctx.beginPath();
                ctx.moveTo(bobX - r * 0.55, bobY);
                ctx.lineTo(bobX + r * 0.55, bobY);
                ctx.moveTo(bobX, bobY - r * 0.55);
                ctx.lineTo(bobX, bobY + r * 0.55);
                ctx.stroke();
                ctx.restore();
                return true;
            }

            // 13. Glowing Cave Mushroom Ring (Fairy ring of 9 bioluminescent spotted mushroom caps)
            case 'uni_biolum': {
                ctx.save();
                const ringR = minDim * 0.33;
                for (let i = 0; i < 9; i++) {
                    const a = (i / 9) * Math.PI * 2;
                    const mx = cx + Math.cos(a) * ringR;
                    const my = cy + Math.sin(a) * ringR;
                    const capR = 9 + (i % 3) * 3.5;
                    const pulse = 0.65 + 0.35 * Math.sin(time * 3 * speed + i * 0.8);

                    const glow = ctx.createRadialGradient(mx, my, 1, mx, my, capR * 2.4);
                    glow.addColorStop(0, `rgba(45, 212, 191, ${0.65 * pulse * intensity})`);
                    glow.addColorStop(0.6, `rgba(139, 92, 246, ${0.28 * pulse * intensity})`);
                    glow.addColorStop(1, 'rgba(0,0,0,0)');
                    ctx.fillStyle = glow;
                    ctx.beginPath();
                    ctx.arc(mx, my, capR * 2.4, 0, Math.PI * 2);
                    ctx.fill();

                    // Mushroom cap
                    ctx.fillStyle = i % 2 === 0 ? '#0d9488' : '#6d28d9';
                    ctx.strokeStyle = '#5eead4';
                    ctx.lineWidth = 1.5;
                    ctx.beginPath();
                    ctx.arc(mx, my, capR, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.stroke();

                    // Glowing bioluminescent spots on cap
                    ctx.fillStyle = '#ccfbf1';
                    for (let sp = 0; sp < 3; sp++) {
                        const sa = a + sp * 2.1;
                        ctx.beginPath();
                        ctx.arc(mx + Math.cos(sa) * capR * 0.45, my + Math.sin(sa) * capR * 0.45, 2, 0, Math.PI * 2);
                        ctx.fill();
                    }
                }
                ctx.restore();
                return true;
            }

            // 14. Bouncing Ice Hailstones
            case 'uni_hailstorm': {
                ctx.save();
                const count = Math.max(12, Math.floor(28 * density));
                for (let i = 0; i < count; i++) {
                    const prog = ((time * (1.2 + (i % 4) * 0.2) * speed + i * 0.17) % 1);
                    const hx = ((i * 73) % W);
                    const hy = ((i * 47) % H);
                    if (prog < 0.55) {
                        // Falling ice pellet
                        const fallP = prog / 0.55;
                        ctx.fillStyle = 'rgba(224, 242, 254, 0.92)';
                        ctx.beginPath();
                        ctx.arc(hx - (1 - fallP) * 24, hy - (1 - fallP) * 28, 3.5, 0, Math.PI * 2);
                        ctx.fill();
                    } else {
                        // Shatter & 3 bouncing ice fragments on impact
                        const bP = (prog - 0.55) / 0.45;
                        ctx.strokeStyle = `rgba(186, 230, 253, ${(1 - bP) * 0.75})`;
                        ctx.lineWidth = 1.5;
                        ctx.beginPath();
                        ctx.arc(hx, hy, bP * 14, 0, Math.PI * 2);
                        ctx.stroke();
                        for (let b = 0; b < 3; b++) {
                            const ba = i + b * 2.09;
                            ctx.fillStyle = `rgba(240, 249, 255, ${1 - bP})`;
                            ctx.beginPath();
                            ctx.arc(hx + Math.cos(ba) * bP * 16, hy + Math.sin(ba) * bP * 16, 2.2, 0, Math.PI * 2);
                            ctx.fill();
                        }
                    }
                }
                ctx.restore();
                return true;
            }

            // 15. Floating Dandelion Seed Down (Fluffy white pappus seed parachutes)
            case 'uni_dandelion': {
                ctx.save();
                const count = Math.max(8, Math.floor(18 * density));
                for (let i = 0; i < count; i++) {
                    const px = ((i * 67 + time * 18 * speed) % W);
                    const py = ((i * 53 + Math.sin(time * 1.4 + i) * 16 + H) % H);
                    const rot = Math.sin(time * 1.8 + i) * 0.4;
                    ctx.save();
                    ctx.translate(px, py);
                    ctx.rotate(rot);
                    // Delicate radial seed filaments
                    ctx.strokeStyle = 'rgba(255, 255, 255, 0.78)';
                    ctx.lineWidth = 1;
                    for (let r = 0; r < 8; r++) {
                        const a = (r / 8) * Math.PI * 2;
                        ctx.beginPath();
                        ctx.moveTo(0, 0);
                        ctx.lineTo(Math.cos(a) * 6, Math.sin(a) * 6);
                        ctx.stroke();
                    }
                    // Tiny brown seed achene on stem
                    ctx.fillStyle = '#fef08a';
                    ctx.beginPath();
                    ctx.arc(0, 0, 1.8, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.restore();
                }
                ctx.restore();
                return true;
            }

            // 16. Razor-Thorn Briar Patch (Gnarled creeping thorny bramble vines)
            case 'uni_brambles': {
                ctx.save();
                const vineCount = 9;
                for (let v = 0; v < vineCount; v++) {
                    ctx.strokeStyle = v % 2 === 0 ? '#3f2e1e' : '#293822';
                    ctx.lineWidth = 4.5;
                    ctx.lineCap = 'round';
                    ctx.beginPath();
                    const startY = (v / vineCount) * H * 0.8 + H * 0.1;
                    for (let s = 0; s <= 10; s++) {
                        const t = s / 10;
                        const vx = W * 0.08 + t * W * 0.84;
                        const vy = startY + Math.sin(t * Math.PI * 3 + v * 1.5 + time * 1.6 * speed) * 14;
                        if (s === 0) ctx.moveTo(vx, vy);
                        else ctx.lineTo(vx, vy);
                    }
                    ctx.stroke();

                    // Sharp crimson-tipped thorns along each vine
                    for (let s = 1; s < 10; s += 2) {
                        const t = s / 10;
                        const vx = W * 0.08 + t * W * 0.84;
                        const vy = startY + Math.sin(t * Math.PI * 3 + v * 1.5 + time * 1.6 * speed) * 14;
                        const dir = (s % 4 === 1) ? -1 : 1;
                        ctx.fillStyle = '#dc2626';
                        ctx.beginPath();
                        ctx.moveTo(vx - 3, vy);
                        ctx.lineTo(vx + 3, vy);
                        ctx.lineTo(vx, vy + dir * 8);
                        ctx.closePath();
                        ctx.fill();
                    }
                }
                ctx.restore();
                return true;
            }

            // 17. Swinging Pendulum Scythe Trap (Gleaming crescent steel blade sweeping through a floor slot)
            case 'hist_pendulum': {
                ctx.save();
                // Dark floor slot track
                ctx.fillStyle = '#0f1318';
                ctx.strokeStyle = '#475569';
                ctx.lineWidth = 2;
                ctx.fillRect(W * 0.12, cy - 8, W * 0.76, 16);
                ctx.strokeRect(W * 0.12, cy - 8, W * 0.76, 16);

                // Swinging scythe blade position
                const swing = Math.sin(time * 3.8 * speed);
                const bx = cx + swing * (W * 0.30);
                const bladeLen = H * 0.36;

                // Motion blur whoosh arc
                ctx.fillStyle = 'rgba(148, 163, 184, 0.22)';
                ctx.beginPath();
                ctx.ellipse(bx, cy, 26, bladeLen, 0, 0, Math.PI * 2);
                ctx.fill();

                // Gleaming steel crescent scythe blade
                const steelGrad = ctx.createLinearGradient(bx - 16, cy - bladeLen, bx + 16, cy + bladeLen);
                steelGrad.addColorStop(0, '#f8fafc');
                steelGrad.addColorStop(0.5, '#94a3b8');
                steelGrad.addColorStop(1, '#e2e8f0');
                ctx.fillStyle = steelGrad;
                ctx.strokeStyle = '#1e293b';
                ctx.lineWidth = 1.8;
                ctx.beginPath();
                ctx.moveTo(bx, cy - bladeLen);
                ctx.quadraticCurveTo(bx + 22, cy, bx, cy + bladeLen);
                ctx.quadraticCurveTo(bx - 10, cy, bx, cy - bladeLen);
                ctx.fill();
                ctx.stroke();
                ctx.restore();
                return true;
            }

            // 18. Cast-Iron Manhole Steam Grate (Circular sewer cover + venting steam plume)
            case 'mod_steam': {
                ctx.save();
                const r = minDim * 0.30;
                // Cast-iron manhole rim & waffle grid
                ctx.fillStyle = '#27272a';
                ctx.strokeStyle = '#52525b';
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.arc(cx, cy, r, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();

                // Venting white street steam clouds
                for (let i = 0; i < 8; i++) {
                    const p = ((time * 0.55 * speed + i * 0.125) % 1);
                    const sx = cx + Math.cos(i * 1.7 + time) * r * (0.2 + p * 0.9);
                    const sy = cy + Math.sin(i * 1.7 + time) * r * (0.2 + p * 0.9);
                    const sr = r * (0.35 + p * 0.75);
                    const sg = ctx.createRadialGradient(sx, sy, 2, sx, sy, sr);
                    sg.addColorStop(0, `rgba(241, 245, 249, ${(1 - p) * 0.55 * intensity})`);
                    sg.addColorStop(1, 'rgba(241, 245, 249, 0)');
                    ctx.fillStyle = sg;
                    ctx.beginPath();
                    ctx.arc(sx, sy, sr, 0, Math.PI * 2);
                    ctx.fill();
                }
                ctx.restore();
                return true;
            }

            // 19. Concertina Razorwire Barrier (Coiled steel loops + glinting razor barbs)
            case 'mod_barbed': {
                ctx.save();
                const loops = 11;
                const startX = W * 0.08;
                const spanW = W * 0.84;
                for (let i = 0; i < loops; i++) {
                    const lx = startX + (i / (loops - 1)) * spanW;
                    ctx.strokeStyle = '#94a3b8';
                    ctx.lineWidth = 2.5;
                    ctx.beginPath();
                    ctx.ellipse(lx, cy, spanW / loops * 0.65, H * 0.30, 0.25, 0, Math.PI * 2);
                    ctx.stroke();

                    // Glinting razor barbs
                    const glint = 0.5 + 0.5 * Math.sin(time * 5 * speed + i);
                    ctx.fillStyle = `rgba(248, 250, 252, ${0.5 + glint * 0.5})`;
                    ctx.beginPath();
                    ctx.arc(lx, cy - H * 0.26, 2.5, 0, Math.PI * 2);
                    ctx.arc(lx, cy + H * 0.26, 2.5, 0, Math.PI * 2);
                    ctx.fill();
                }
                ctx.restore();
                return true;
            }

            // 20. Iridescent Garage Oil Slick (Multi-spectral thin-film optical interference rainbow swirls)
            case 'mod_oil': {
                ctx.save();
                const rx = W * 0.42;
                const ry = H * 0.38;

                // Wet asphalt base rim
                ctx.fillStyle = 'rgba(24, 24, 27, 0.95)';
                ctx.beginPath();
                ctx.ellipse(cx, cy, rx * 1.08, ry * 1.08, 0.1, 0, Math.PI * 2);
                ctx.fill();

                // Pitch-black petroleum pool interior
                ctx.fillStyle = 'rgba(9, 9, 11, 0.98)';
                ctx.beginPath();
                ctx.ellipse(cx, cy, rx, ry, 0.1, 0, Math.PI * 2);
                ctx.fill();

                // Multi-spectral thin-film optical interference rainbow bands
                ctx.save();
                ctx.beginPath();
                ctx.ellipse(cx, cy, rx * 0.96, ry * 0.96, 0.1, 0, Math.PI * 2);
                ctx.clip();

                const bands = 7;
                for (let b = bands; b >= 1; b--) {
                    const frac = b / bands;
                    const hue = (time * 30 * speed + b * 55) % 360;
                    ctx.strokeStyle = `hsla(${hue}, 90%, 65%, 0.48)`;
                    ctx.lineWidth = 9;
                    ctx.beginPath();
                    const waveX = Math.sin(time * 1.5 + b) * 8;
                    const waveY = Math.cos(time * 1.2 + b) * 6;
                    ctx.ellipse(
                        cx + waveX,
                        cy + waveY,
                        rx * frac * 0.88,
                        ry * frac * 0.88,
                        b * 0.35 + time * 0.1,
                        0,
                        Math.PI * 2
                    );
                    ctx.stroke();
                }

                // Glistening wet petroleum specular arcs
                ctx.strokeStyle = 'rgba(255, 255, 255, 0.65)';
                ctx.lineWidth = 2.2;
                ctx.beginPath();
                ctx.arc(cx - rx * 0.3, cy - ry * 0.3, rx * 0.35, Math.PI * 1.1, Math.PI * 1.7);
                ctx.stroke();

                ctx.restore();
                ctx.restore();
                return true;
            }

            // 21. Police Red/Blue Strobe Bar (Alternating dual emergency strobe cones)
            case 'mod_policebar': {
                ctx.save();
                const rot = time * 7.5 * speed;
                // Red left dome & rotating beam
                const lx = cx - W * 0.14;
                const rx = cx + W * 0.14;
                const drawStrobe = (sx, col, angle) => {
                    ctx.save();
                    ctx.translate(sx, cy);
                    ctx.rotate(angle);
                    const g = ctx.createRadialGradient(0, 0, 2, 0, 0, minDim * 0.48);
                    g.addColorStop(0, `rgba(${col}, 0.95)`);
                    g.addColorStop(0.5, `rgba(${col}, 0.38)`);
                    g.addColorStop(1, `rgba(${col}, 0)`);
                    ctx.fillStyle = g;
                    ctx.beginPath();
                    ctx.moveTo(0, 0);
                    ctx.arc(0, 0, minDim * 0.48, -0.55, 0.55);
                    ctx.closePath();
                    ctx.fill();
                    ctx.restore();
                };
                drawStrobe(lx, '239, 68, 68', rot);
                drawStrobe(lx, '239, 68, 68', rot + Math.PI);
                drawStrobe(rx, '59, 130, 246', -rot + 1.2);
                drawStrobe(rx, '59, 130, 246', -rot + 1.2 + Math.PI);

                // Lightbar housing
                ctx.fillStyle = '#1e293b';
                ctx.fillRect(cx - W * 0.22, cy - 8, W * 0.44, 16);
                ctx.fillStyle = '#ef4444';
                ctx.fillRect(cx - W * 0.20, cy - 6, W * 0.18, 12);
                ctx.fillStyle = '#3b82f6';
                ctx.fillRect(cx + W * 0.02, cy - 6, W * 0.18, 12);
                ctx.restore();
                return true;
            }

            // 22. Pivoting CCTV Security Camera (Sweeping green/red infrared cone + camera body)
            case 'mod_traffic_drone': {
                ctx.save();
                const originX = cx;
                const originY = H * 0.18;
                const pan = Math.sin(time * 1.4 * speed) * 0.65;
                ctx.save();
                ctx.translate(originX, originY);
                ctx.rotate(Math.PI * 0.5 + pan);

                // Sweeping infrared detection cone
                const coneR = minDim * 0.72;
                const cg = ctx.createRadialGradient(0, 0, 6, 0, 0, coneR);
                cg.addColorStop(0, 'rgba(34, 197, 94, 0.45)');
                cg.addColorStop(0.7, 'rgba(34, 197, 94, 0.16)');
                cg.addColorStop(1, 'rgba(34, 197, 94, 0)');
                ctx.fillStyle = cg;
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.arc(0, 0, coneR, -0.38, 0.38);
                ctx.closePath();
                ctx.fill();

                // Armored CCTV housing
                ctx.fillStyle = '#cbd5e1';
                ctx.strokeStyle = '#334155';
                ctx.lineWidth = 2;
                ctx.fillRect(-10, -8, 28, 16);
                ctx.strokeRect(-10, -8, 28, 16);
                // Blinking red recording LED
                if (Math.sin(time * 6) > 0) {
                    ctx.fillStyle = '#ef4444';
                    ctx.beginPath();
                    ctx.arc(12, -4, 2.5, 0, Math.PI * 2);
                    ctx.fill();
                }
                ctx.restore();
                ctx.restore();
                return true;
            }

            // 23. Electrified Subway Tracks (Ties, running steel rails, and sparking 3rd rail)
            case 'mod_subway_tracks': {
                ctx.save();
                // Gravel ballast bed
                ctx.fillStyle = 'rgba(39, 39, 42, 0.85)';
                ctx.fillRect(0, H * 0.15, W, H * 0.70);

                // Timber/concrete railroad ties
                const tieStep = 26;
                ctx.fillStyle = '#3f2e21';
                for (let x = 8; x < W; x += tieStep) {
                    ctx.fillRect(x, H * 0.20, 12, H * 0.60);
                }

                // Twin steel running rails + live electrified 3rd rail
                ctx.fillStyle = '#94a3b8';
                ctx.fillRect(0, H * 0.30, W, 5);
                ctx.fillRect(0, H * 0.65, W, 5);
                ctx.fillStyle = '#eab308';
                ctx.fillRect(0, H * 0.80, W, 4);

                // High-voltage electric arc flashes along the 3rd rail
                const sparkX = ((time * 95 * speed) % (W - 40)) + 20;
                const sparkY = H * 0.81;
                const sg = ctx.createRadialGradient(sparkX, sparkY, 1, sparkX, sparkY, 24);
                sg.addColorStop(0, 'rgba(255, 255, 255, 0.98)');
                sg.addColorStop(0.4, 'rgba(56, 189, 248, 0.82)');
                sg.addColorStop(1, 'rgba(56, 189, 248, 0)');
                ctx.fillStyle = sg;
                ctx.beginPath();
                ctx.arc(sparkX, sparkY, 24, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
                return true;
            }

            // 24. Gelatinous Cube / Dungeon Ooze (Translucent undulating acid cube + suspended dissolving skeleton & corroded broadsword)
            case 'oth_ooze': {
                ctx.save();
                const wobbleX = Math.sin(time * 3.2 * speed) * 5;
                const wobbleY = Math.cos(time * 2.7 * speed) * 5;
                const pad = minDim * 0.12;
                const cw = W - pad * 2 + wobbleX;
                const ch = H - pad * 2 + wobbleY;

                // 1. Wet acid slime trail footprint on floor
                ctx.fillStyle = 'rgba(34, 197, 94, 0.18)';
                ctx.beginPath();
                ctx.ellipse(cx, cy + ch * 0.35, cw * 0.55, ch * 0.22, 0, 0, Math.PI * 2);
                ctx.fill();

                // 2. Translucent undulating gelatinous cube body
                const cubeGrad = ctx.createLinearGradient(cx - cw * 0.5, cy - ch * 0.5, cx + cw * 0.5, cy + ch * 0.5);
                cubeGrad.addColorStop(0, 'rgba(134, 239, 172, 0.50)');
                cubeGrad.addColorStop(0.5, 'rgba(74, 222, 128, 0.35)');
                cubeGrad.addColorStop(1, 'rgba(34, 197, 94, 0.60)');
                ctx.fillStyle = cubeGrad;
                ctx.strokeStyle = 'rgba(187, 247, 208, 0.90)';
                ctx.lineWidth = 3.5;
                ctx.beginPath();
                ctx.roundRect(cx - cw * 0.5, cy - ch * 0.5, cw, ch, 8);
                ctx.fill();
                ctx.stroke();

                // 3. 3D Faceted isometric transparent bevel lines & specular sheen
                ctx.strokeStyle = 'rgba(240, 253, 244, 0.75)';
                ctx.lineWidth = 1.8;
                ctx.strokeRect(cx - cw * 0.40, cy - ch * 0.40, cw * 0.80, ch * 0.80);

                ctx.beginPath();
                ctx.moveTo(cx - cw * 0.5, cy - ch * 0.5);
                ctx.lineTo(cx - cw * 0.40, cy - ch * 0.40);
                ctx.moveTo(cx + cw * 0.5, cy - ch * 0.5);
                ctx.lineTo(cx + cw * 0.40, cy - ch * 0.40);
                ctx.moveTo(cx + cw * 0.5, cy + ch * 0.5);
                ctx.lineTo(cx + cw * 0.40, cy + ch * 0.40);
                ctx.moveTo(cx - cw * 0.5, cy + ch * 0.5);
                ctx.lineTo(cx - cw * 0.40, cy + ch * 0.40);
                ctx.stroke();

                // 4. Suspended Dissolved Contents
                // A. Bleached human skull floating half-digested
                const sx = cx - cw * 0.16 + Math.sin(time * 1.8 * speed) * 6;
                const sy = cy - ch * 0.14 + Math.cos(time * 1.5 * speed) * 6;
                ctx.save();
                ctx.translate(sx, sy);
                ctx.rotate(Math.sin(time * 1.2) * 0.2);

                // Skull cranium
                ctx.fillStyle = '#f8fafc';
                ctx.strokeStyle = '#94a3b8';
                ctx.lineWidth = 1.0;
                ctx.beginPath();
                ctx.arc(0, -2, 8, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();

                // Maxilla & teeth
                ctx.fillStyle = '#e2e8f0';
                ctx.fillRect(-3, 4, 6, 4);
                ctx.strokeRect(-3, 4, 6, 4);

                // Eye sockets
                ctx.fillStyle = '#1e293b';
                ctx.beginPath();
                ctx.arc(-2.5, -1, 1.8, 0, Math.PI * 2);
                ctx.arc(2.5, -1, 1.8, 0, Math.PI * 2);
                ctx.fill();

                // Spinal vertebrae trailing beneath skull
                ctx.fillStyle = '#cbd5e1';
                for (let v = 0; v < 4; v++) {
                    ctx.fillRect(-2, 10 + v * 4, 4, 3);
                }
                ctx.restore();

                // B. Corroded adventurer's steel broadsword suspended diagonally
                const swX = cx + cw * 0.12 + Math.cos(time * 1.6 * speed) * 5;
                const swY = cy + ch * 0.05 + Math.sin(time * 1.4 * speed) * 5;
                ctx.save();
                ctx.translate(swX, swY);
                ctx.rotate(-0.65 + Math.sin(time * 1.1) * 0.1);

                // Corroded blade with acid pitting
                ctx.fillStyle = '#94a3b8';
                ctx.strokeStyle = '#475569';
                ctx.lineWidth = 1.0;
                ctx.fillRect(-2, -22, 4, 28);
                ctx.strokeRect(-2, -22, 4, 28);

                // Crossguard & pommel
                ctx.fillStyle = '#78350f';
                ctx.fillRect(-7, 6, 14, 3);
                ctx.fillStyle = '#ca8a04';
                ctx.beginPath();
                ctx.arc(0, 14, 2.5, 0, Math.PI * 2);
                ctx.fill();

                // Fizzing acidic micro-bubbles on blade
                ctx.fillStyle = 'rgba(240, 253, 244, 0.9)';
                for (let b = 0; b < 4; b++) {
                    const byOff = -18 + b * 6;
                    ctx.beginPath();
                    ctx.arc(3, byOff + Math.sin(time * 8 + b) * 2, 1.5, 0, Math.PI * 2);
                    ctx.fill();
                }
                ctx.restore();

                // 5. Internal Digestive Vacuoles & Air Bubbles
                for (let v = 0; v < 6; v++) {
                    const vx = cx + Math.sin(v * 2.3 + time * 0.8) * (cw * 0.32);
                    const vy = cy + Math.cos(v * 2.1 + time * 0.7) * (ch * 0.30);
                    const vr = 2.5 + (v % 3) * 2.2;
                    ctx.fillStyle = 'rgba(220, 252, 231, 0.65)';
                    ctx.strokeStyle = 'rgba(74, 222, 128, 0.85)';
                    ctx.lineWidth = 1.0;
                    ctx.beginPath();
                    ctx.arc(vx, vy, vr, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.stroke();
                }

                ctx.restore();
                return true;
            }

            // 25. Grasping Necrotic Shadow Hands (Skeletal dark hands reaching out of floor rifts)
            case 'oth_shadow_hands': {
                ctx.save();
                const count = Math.max(5, Math.floor(9 * density));
                for (let i = 0; i < count; i++) {
                    const hx = W * (0.15 + ((i * 37) % 70) / 100);
                    const hy = H * (0.18 + ((i * 53) % 64) / 100);
                    const reach = 0.6 + 0.4 * Math.sin(time * 3.5 * speed + i * 1.4);

                    // Dark necrotic floor rift
                    ctx.fillStyle = 'rgba(88, 28, 135, 0.55)';
                    ctx.beginPath();
                    ctx.ellipse(hx, hy, 14, 8, 0, 0, Math.PI * 2);
                    ctx.fill();

                    // Palm + 5 grasping shadow fingers
                    ctx.fillStyle = '#09090b';
                    ctx.strokeStyle = '#a855f7';
                    ctx.lineWidth = 1.5;
                    ctx.beginPath();
                    ctx.arc(hx, hy, 6 * reach, 0, Math.PI * 2);
                    ctx.fill();
                    for (let f = -2; f <= 2; f++) {
                        const fa = -Math.PI * 0.5 + f * 0.35 + Math.sin(time * 5 + i + f) * 0.15;
                        ctx.beginPath();
                        ctx.moveTo(hx, hy);
                        ctx.lineTo(hx + Math.cos(fa) * 14 * reach, hy + Math.sin(fa) * 14 * reach);
                        ctx.stroke();
                    }
                }
                ctx.restore();
                return true;
            }

            // 26. Autonomous Deck Scrubber Droid & Deep-Space Telemetry Probe
            case 'sci_cleaner':
            case 'sci_probe': {
                ctx.save();
                const px = cx + Math.sin(time * 1.4 * speed) * (W * 0.26);
                const py = cy + Math.sin(time * 2.8 * speed) * (H * 0.22);
                if (variant === 'sci_cleaner') {
                    // Wet polished deck trail
                    ctx.strokeStyle = 'rgba(56, 189, 248, 0.22)';
                    ctx.lineWidth = 24;
                    ctx.lineCap = 'round';
                    ctx.beginPath();
                    ctx.moveTo(cx - W * 0.24, cy);
                    ctx.lineTo(px, py);
                    ctx.stroke();

                    // Disc scrubber chassis
                    ctx.fillStyle = '#e2e8f0';
                    ctx.strokeStyle = '#0284c7';
                    ctx.lineWidth = 3;
                    ctx.beginPath();
                    ctx.arc(px, py, 16, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.stroke();
                } else {
                    // Telemetry probe with 4 sensor dishes & scanner pulse
                    const pulseR = ((time * 40 * speed) % 36) + 8;
                    ctx.strokeStyle = `rgba(56, 189, 248, ${1 - pulseR / 44})`;
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.arc(px, py, pulseR, 0, Math.PI * 2);
                    ctx.stroke();

                    ctx.strokeStyle = '#94a3b8';
                    ctx.lineWidth = 2;
                    for (let a = 0; a < 4; a++) {
                        const ang = time * 2 + a * Math.PI * 0.5;
                        ctx.beginPath();
                        ctx.moveTo(px, py);
                        ctx.lineTo(px + Math.cos(ang) * 20, py + Math.sin(ang) * 20);
                        ctx.stroke();
                    }
                    ctx.fillStyle = '#1e293b';
                    ctx.beginPath();
                    ctx.arc(px, py, 11, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.fillStyle = '#38bdf8';
                    ctx.beginPath();
                    ctx.arc(px, py, 4.5, 0, Math.PI * 2);
                    ctx.fill();
                }
                ctx.restore();
                return true;
            }

            // 27. Clockwork Steampunk Gaslamp (Rotating brass gears + glowing emerald-amber gas mantle)
            case 'oth_gaslamp': {
                ctx.save();
                const r = minDim * 0.34;
                const glow = ctx.createRadialGradient(cx, cy, 3, cx, cy, r * 1.35);
                glow.addColorStop(0, `rgba(167, 243, 208, ${0.85 * intensity})`);
                glow.addColorStop(0.45, `rgba(245, 158, 11, ${0.42 * intensity})`);
                glow.addColorStop(1, 'rgba(0,0,0,0)');
                ctx.fillStyle = glow;
                ctx.beginPath();
                ctx.arc(cx, cy, r * 1.35, 0, Math.PI * 2);
                ctx.fill();

                // Rotating brass cogwheel
                ctx.save();
                ctx.translate(cx, cy);
                ctx.rotate(time * 1.5 * speed);
                ctx.strokeStyle = '#d97706';
                ctx.lineWidth = 4;
                ctx.beginPath();
                ctx.arc(0, 0, r * 0.55, 0, Math.PI * 2);
                ctx.stroke();
                for (let t = 0; t < 8; t++) {
                    const a = (t / 8) * Math.PI * 2;
                    ctx.beginPath();
                    ctx.moveTo(Math.cos(a) * r * 0.45, Math.sin(a) * r * 0.45);
                    ctx.lineTo(Math.cos(a) * r * 0.68, Math.sin(a) * r * 0.68);
                    ctx.stroke();
                }
                ctx.restore();

                // Glowing gas mantle core
                ctx.fillStyle = '#ecfdf5';
                ctx.beginPath();
                ctx.arc(cx, cy, 8, 0, Math.PI * 2);
                ctx.fill();
                ctx.restore();
                return true;
            }

            // 28A. Spiraling Desert Quicksand Pit (Multi-tier sand vortex + subsidence terraces + central sink funnel)
            case 'uni_quicksand': {
                ctx.save();
                const rx = W * 0.42;
                const ry = H * 0.38;

                // Outer desert sand embankment
                ctx.fillStyle = 'rgba(194, 155, 96, 0.95)';
                ctx.beginPath();
                ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
                ctx.fill();

                // Subsidence terraced sand shelves
                for (let tier = 4; tier >= 1; tier--) {
                    const f = tier / 4;
                    ctx.fillStyle = tier % 2 === 0 ? 'rgba(165, 128, 76, 0.95)' : 'rgba(182, 145, 88, 0.95)';
                    ctx.beginPath();
                    ctx.ellipse(cx, cy, rx * f, ry * f, 0, 0, Math.PI * 2);
                    ctx.fill();
                }

                // Inward-spiraling granular sand vortex flow lines
                for (let r = 6; r >= 1; r--) {
                    const frac = r / 6;
                    ctx.strokeStyle = r % 2 === 0 ? 'rgba(115, 82, 38, 0.75)' : 'rgba(245, 218, 160, 0.65)';
                    ctx.lineWidth = 3.5;
                    ctx.beginPath();
                    const rot = -time * (2.2 / frac) * speed;
                    ctx.ellipse(cx, cy, rx * frac, ry * frac, rot, 0, Math.PI * 1.75);
                    ctx.stroke();
                }

                // Granular sand particles spiraling inward
                for (let p = 0; p < 12; p++) {
                    const prog = ((time * 0.35 * speed + p / 12) % 1.0);
                    const pDist = (1.0 - prog * 0.85);
                    const pAng = time * 3.5 * speed + p * 1.8;
                    const px = cx + Math.cos(pAng) * rx * pDist;
                    const py = cy + Math.sin(pAng) * ry * pDist;
                    ctx.fillStyle = (p % 2 === 0) ? '#fef08a' : '#78350f';
                    ctx.beginPath();
                    ctx.arc(px, py, 2.0, 0, Math.PI * 2);
                    ctx.fill();
                }

                // Deep central sink funnel vortex
                ctx.fillStyle = 'rgba(38, 24, 10, 0.98)';
                ctx.beginPath();
                ctx.arc(cx, cy, minDim * 0.09, 0, Math.PI * 2);
                ctx.fill();

                ctx.restore();
                return true;
            }

            // 28B. Boiling Black Bitumen Tar Pit (Viscous swelling bitumen domes + trapped prehistoric mammoth tusks & ribs)
            case 'uni_tarpit': {
                ctx.save();
                const rx = W * 0.44;
                const ry = H * 0.38;

                // Crusted hardened bitumen & gravel outer bank
                ctx.fillStyle = 'rgba(28, 25, 23, 0.98)';
                ctx.beginPath();
                ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
                ctx.fill();

                // Glossy pitch-black boiling bitumen lake interior
                ctx.fillStyle = 'rgba(10, 10, 12, 0.98)';
                ctx.strokeStyle = 'rgba(68, 64, 60, 0.85)';
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.ellipse(cx, cy, rx * 0.90, ry * 0.90, 0, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();

                // Trapped Prehistoric Mammoth Tusk jutting out of the tar
                const tuskX = cx + rx * 0.22;
                const tuskY = cy - ry * 0.15;
                ctx.save();
                ctx.translate(tuskX, tuskY);
                ctx.rotate(-0.45);

                // Tusk shadow in tar
                ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
                ctx.beginPath();
                ctx.ellipse(2, 4, 18, 5, 0.3, 0, Math.PI * 2);
                ctx.fill();

                // Curved ivory tusk
                ctx.fillStyle = '#fef08a';
                ctx.strokeStyle = '#ca8a04';
                ctx.lineWidth = 1.2;
                ctx.beginPath();
                ctx.moveTo(-16, 8);
                ctx.quadraticCurveTo(0, -6, 22, -18);
                ctx.quadraticCurveTo(4, -1, -12, 12);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();

                // Tar dripping coating the base of the tusk
                ctx.fillStyle = '#09090b';
                ctx.beginPath();
                ctx.moveTo(-16, 8);
                ctx.lineTo(-4, 0);
                ctx.lineTo(-12, 12);
                ctx.closePath();
                ctx.fill();

                ctx.restore();

                // Trapped Prehistoric Rib Bones jutting out on opposite side
                const ribX = cx - rx * 0.28;
                const ribY = cy + ry * 0.12;
                ctx.strokeStyle = '#fef9c3';
                ctx.lineWidth = 2.4;
                ctx.beginPath();
                ctx.arc(ribX, ribY, 14, -0.6, Math.PI * 0.45);
                ctx.stroke();
                ctx.beginPath();
                ctx.arc(ribX + 8, ribY + 4, 12, -0.6, Math.PI * 0.45);
                ctx.stroke();

                // Massive Viscous Swelling Tar Domes & Popping Sink Rings
                for (let b = 0; b < 7; b++) {
                    const p = ((time * 0.40 * speed + b * 0.15) % 1);
                    const bx = cx + Math.cos(b * 2.3) * rx * 0.45;
                    const by = cy + Math.sin(b * 2.3) * ry * 0.45;

                    if (p < 0.72) {
                        // Swelling glossy black tar dome
                        const t = p / 0.72;
                        const br = (4 + t * 16);
                        ctx.fillStyle = '#18181b';
                        ctx.strokeStyle = '#3f3f46';
                        ctx.lineWidth = 1.5;
                        ctx.beginPath();
                        ctx.arc(bx, by, br, 0, Math.PI * 2);
                        ctx.fill();
                        ctx.stroke();

                        // Wet specular highlight on dome
                        ctx.fillStyle = 'rgba(212, 212, 216, 0.75)';
                        ctx.beginPath();
                        ctx.arc(bx - br * 0.32, by - br * 0.32, br * 0.28, 0, Math.PI * 2);
                        ctx.fill();
                    } else {
                        // Popped tar bubble: viscous collapsing sink ring
                        const popT = (p - 0.72) / 0.28;
                        const ringR = 16 * (1.0 + popT * 0.55);
                        const alpha = (1.0 - popT) * 0.75;
                        ctx.strokeStyle = `rgba(113, 113, 122, ${alpha})`;
                        ctx.lineWidth = 2.0 * (1.0 - popT * 0.5);
                        ctx.beginPath();
                        ctx.arc(bx, by, ringR, 0, Math.PI * 2);
                        ctx.stroke();
                    }
                }

                ctx.restore();
                return true;
            }

            // 29. Whipping Downed Power Cable & Riot Tear-Gas Canister Plume
            case 'mod_wire':
            case 'mod_teargas': {
                ctx.save();
                if (variant === 'mod_wire') {
                    // Thrashing black insulated utility cable + violent blue-white arc flash at tip
                    const tipX = W * 0.68 + Math.sin(time * 9 * speed) * (W * 0.18);
                    const tipY = cy + Math.cos(time * 11 * speed) * (H * 0.28);
                    ctx.strokeStyle = '#18181b';
                    ctx.lineWidth = 6;
                    ctx.lineCap = 'round';
                    ctx.beginPath();
                    ctx.moveTo(W * 0.08, cy);
                    ctx.quadraticCurveTo(cx, cy + Math.sin(time * 7 * speed) * 38, tipX, tipY);
                    ctx.stroke();

                    const sg = ctx.createRadialGradient(tipX, tipY, 1, tipX, tipY, 32);
                    sg.addColorStop(0, 'rgba(255, 255, 255, 0.98)');
                    sg.addColorStop(0.4, 'rgba(56, 189, 248, 0.85)');
                    sg.addColorStop(1, 'rgba(56, 189, 248, 0)');
                    ctx.fillStyle = sg;
                    ctx.beginPath();
                    ctx.arc(tipX, tipY, 32, 0, Math.PI * 2);
                    ctx.fill();
                } else {
                    // Spinning metallic riot tear-gas canister venting yellow-green gas jets
                    const canX = cx + Math.sin(time * 2 * speed) * 14;
                    const canY = cy + Math.cos(time * 2 * speed) * 10;
                    for (let g = 0; g < 10; g++) {
                        const p = ((time * 0.6 * speed + g * 0.1) % 1);
                        const a = g * 0.628 + time * 1.5;
                        const gx = canX + Math.cos(a) * p * minDim * 0.42;
                        const gy = canY + Math.sin(a) * p * minDim * 0.42;
                        const gr = 12 + p * 28;
                        const cg = ctx.createRadialGradient(gx, gy, 2, gx, gy, gr);
                        cg.addColorStop(0, `rgba(190, 242, 100, ${(1 - p) * 0.55 * intensity})`);
                        cg.addColorStop(1, 'rgba(163, 230, 53, 0)');
                        ctx.fillStyle = cg;
                        ctx.beginPath();
                        ctx.arc(gx, gy, gr, 0, Math.PI * 2);
                        ctx.fill();
                    }
                    ctx.save();
                    ctx.translate(canX, canY);
                    ctx.rotate(time * 5 * speed);
                    ctx.fillStyle = '#64748b';
                    ctx.fillRect(-10, -5, 20, 10);
                    ctx.fillStyle = '#eab308';
                    ctx.fillRect(-4, -5, 8, 10);
                    ctx.restore();
                }
                ctx.restore();
                return true;
            }

            // 30. Prowling Black Alley Cat, City Pigeons, Urban Roaches, Scarabs, Butterflies & Lunar Moths
            case 'mod_alleycat':
            case 'mod_pigeons':
            case 'mod_cockroaches':
            case 'hist_scarabs':
            case 'hist_butterflies':
            case 'oth_moths': {
                ctx.save();
                if (variant === 'mod_alleycat') {
                    // Sleek black cat patrolling a figure-8 path with swaying tail & glowing yellow eyes
                    const a = time * 1.1 * speed;
                    const px = cx + Math.sin(a) * (W * 0.28);
                    const py = cy + Math.sin(a * 2) * (H * 0.22);
                    const heading = Math.atan2(Math.cos(a * 2) * 2 * (H * 0.22), Math.cos(a) * (W * 0.28));
                    ctx.translate(px, py);
                    ctx.rotate(heading);
                    // Body & head
                    ctx.fillStyle = '#09090b';
                    ctx.beginPath();
                    ctx.ellipse(0, 0, 14, 6, 0, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.beginPath();
                    ctx.arc(14, 0, 6, 0, Math.PI * 2);
                    ctx.fill();
                    // Pointed ears
                    ctx.beginPath();
                    ctx.moveTo(12, -5);
                    ctx.lineTo(17, -9);
                    ctx.lineTo(17, -2);
                    ctx.moveTo(12, 5);
                    ctx.lineTo(17, 9);
                    ctx.lineTo(17, 2);
                    ctx.fill();
                    // Glowing yellow eyes
                    ctx.fillStyle = '#facc15';
                    ctx.beginPath();
                    ctx.arc(17, -2.2, 1.3, 0, Math.PI * 2);
                    ctx.arc(17, 2.2, 1.3, 0, Math.PI * 2);
                    ctx.fill();
                    // Swaying tail
                    ctx.strokeStyle = '#09090b';
                    ctx.lineWidth = 3;
                    ctx.beginPath();
                    ctx.moveTo(-13, 0);
                    ctx.quadraticCurveTo(-22, Math.sin(time * 6) * 8, -28, Math.cos(time * 6) * 6);
                    ctx.stroke();
                } else if (variant === 'hist_butterflies' || variant === 'oth_moths') {
                    const count = Math.max(6, Math.floor(11 * density));
                    for (let i = 0; i < count; i++) {
                        const a = time * 1.5 * speed + i * 1.3;
                        const bx = cx + Math.cos(a + i) * (W * 0.34 * ((i % 3 + 1) / 3));
                        const by = cy + Math.sin(a * 1.3 + i) * (H * 0.34 * ((i % 3 + 1) / 3));
                        const flap = 0.35 + 0.65 * Math.abs(Math.sin(time * 12 * speed + i));
                        ctx.save();
                        ctx.translate(bx, by);
                        ctx.rotate(a + Math.PI * 0.5);
                        ctx.fillStyle = variant === 'oth_moths'
                            ? 'rgba(226, 232, 240, 0.88)'
                            : (i % 2 === 0 ? 'rgba(249, 115, 22, 0.9)' : 'rgba(56, 189, 248, 0.9)');
                        ctx.beginPath();
                        ctx.ellipse(-4 * flap, 0, 5 * flap, 7, -0.2, 0, Math.PI * 2);
                        ctx.ellipse(4 * flap, 0, 5 * flap, 7, 0.2, 0, Math.PI * 2);
                        ctx.fill();
                        ctx.restore();
                    }
                } else {
                    // Scarabs, Cockroaches, or Pigeons
                    const count = Math.max(8, Math.floor(14 * density));
                    for (let i = 0; i < count; i++) {
                        const a = time * 1.8 * speed + i * 1.7;
                        const bx = ((i * 61 + Math.cos(a) * 28 + W) % W);
                        const by = ((i * 43 + Math.sin(a * 1.4) * 24 + H) % H);
                        ctx.save();
                        ctx.translate(bx, by);
                        ctx.rotate(a);
                        if (variant === 'hist_scarabs') {
                            ctx.fillStyle = '#eab308';
                            ctx.strokeStyle = '#14b8a6';
                            ctx.lineWidth = 1.2;
                            ctx.beginPath();
                            ctx.ellipse(0, 0, 5.5, 4, 0, 0, Math.PI * 2);
                            ctx.fill();
                            ctx.stroke();
                        } else if (variant === 'mod_cockroaches') {
                            ctx.fillStyle = '#78350f';
                            ctx.beginPath();
                            ctx.ellipse(0, 0, 5, 2.6, 0, 0, Math.PI * 2);
                            ctx.fill();
                        } else {
                            // City Pigeons
                            ctx.fillStyle = '#94a3b8';
                            ctx.beginPath();
                            ctx.ellipse(0, 0, 6.5, 4.2, 0, 0, Math.PI * 2);
                            ctx.fill();
                            ctx.fillStyle = '#10b981';
                            ctx.beginPath();
                            ctx.arc(4, 0, 2.2, 0, Math.PI * 2);
                            ctx.fill();
                        }
                        ctx.restore();
                    }
                }
                ctx.restore();
                return true;
            }

            // 31. Brimstone Pentagram Hellfire & Swirling Leyline Runes
            case 'oth_hellfire':
            case 'hist_leylinesurge': {
                ctx.save();
                const r = minDim * 0.38;
                const isHell = variant === 'oth_hellfire';
                const col = isHell ? '239, 68, 68' : '56, 189, 248';
                const glowCol = isHell ? '245, 158, 11' : '168, 85, 247';

                ctx.save();
                ctx.translate(cx, cy);
                ctx.rotate(time * (isHell ? 0.35 : 0.65) * speed);

                // Outer ritual circle
                ctx.strokeStyle = `rgba(${col}, 0.85)`;
                ctx.lineWidth = 3;
                ctx.beginPath();
                ctx.arc(0, 0, r, 0, Math.PI * 2);
                ctx.stroke();

                // 5-point pentagram or 6-point arcane hexagram
                ctx.strokeStyle = `rgba(${glowCol}, 0.9)`;
                ctx.lineWidth = 2.5;
                ctx.beginPath();
                const pts = isHell ? 5 : 6;
                for (let i = 0; i <= pts; i++) {
                    const step = isHell ? i * 2 : i;
                    const a = (step / pts) * Math.PI * 2 - Math.PI * 0.5;
                    const px = Math.cos(a) * r * 0.92;
                    const py = Math.sin(a) * r * 0.92;
                    if (i === 0) ctx.moveTo(px, py);
                    else ctx.lineTo(px, py);
                }
                ctx.stroke();
                ctx.restore();
                ctx.restore();
                return true;
            }

            // 32. Civic Park Plaza Fountain & Gargoyle Sanguine Blood Fountain
            case 'mod_fountain':
            case 'blood_fount': {
                ctx.save();
                const r = minDim * 0.40;
                const isBlood = variant === 'blood_fount';
                // Stone basin rim
                ctx.fillStyle = isBlood ? '#271215' : '#475569';
                ctx.strokeStyle = isBlood ? '#7f1d1d' : '#94a3b8';
                ctx.lineWidth = 4;
                ctx.beginPath();
                ctx.arc(cx, cy, r, 0, Math.PI * 2);
                ctx.fill();
                ctx.stroke();

                // Water or Blood pool interior
                ctx.fillStyle = isBlood ? 'rgba(153, 27, 27, 0.92)' : 'rgba(14, 165, 233, 0.85)';
                ctx.beginPath();
                ctx.arc(cx, cy, r * 0.86, 0, Math.PI * 2);
                ctx.fill();

                // 8 perimeter arcing jets shooting toward center
                const jetCount = isBlood ? 4 : 8;
                for (let j = 0; j < jetCount; j++) {
                    const a = (j / jetCount) * Math.PI * 2;
                    const sx = cx + Math.cos(a) * r * 0.82;
                    const sy = cy + Math.sin(a) * r * 0.82;
                    ctx.strokeStyle = isBlood ? 'rgba(248, 113, 113, 0.85)' : 'rgba(224, 242, 254, 0.88)';
                    ctx.lineWidth = 2.5;
                    ctx.beginPath();
                    ctx.moveTo(sx, sy);
                    ctx.lineTo(cx + Math.cos(a) * r * 0.18, cy + Math.sin(a) * r * 0.18);
                    ctx.stroke();
                }
                ctx.restore();
                return true;
            }

            default:
                return false;
        }
    }

    stopAllAudio() {
        Object.keys(this.audioNodes).forEach(k => this.stopSound(k));
    }

    // ------------------------------------------------------------------------
    // SETTINGS PERSISTENCE
    // ------------------------------------------------------------------------
    setupEventListeners() {
        window.addEventListener('resize', () => this.resizeWeather());

        window.addEventListener('pointerdown', (e) => {
            if (
                !e.target.closest('.living-element') &&
                !e.target.closest('.floating-panel') &&
                !e.target.closest('.app-header') &&
                !e.target.closest('.hud-bar')
            ) {
                this.selectElement(null);
            }
        });

        window.addEventListener('keydown', (e) => {
            if (document.activeElement && (document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA' || document.activeElement.tagName === 'SELECT')) {
                return;
            }
            if ((e.ctrlKey || e.metaKey) && !e.altKey) {
                const k = (e.key || '').toLowerCase();
                if (k === 'z' && !e.shiftKey) {
                    if (this.undo()) {
                        e.preventDefault();
                    }
                    return;
                }
                if (k === 'y' || (k === 'z' && e.shiftKey)) {
                    if (this.redo()) {
                        e.preventDefault();
                    }
                    return;
                }
            }
            if (this.selectedElementId && (e.key === 'Delete' || e.key === 'Backspace')) {
                const selEl = this.elements.find(x => x.id === this.selectedElementId);
                if (selEl && this.isElementLocked(selEl)) return; // Locked effects can't be deleted by accident
                this.removeElement(this.selectedElementId);
                e.preventDefault();
            }
            if (this.selectedElementId && (e.key || '').toLowerCase() === 'l' && !e.ctrlKey && !e.metaKey && !e.altKey) {
                const selEl = this.elements.find(x => x.id === this.selectedElementId);
                if (selEl) this.setElementLocked(selEl.id, !this.isElementLocked(selEl));
            }
            if ((e.key || '').toLowerCase() === 'd' && !e.ctrlKey && !e.metaKey && !e.altKey) {
                this.toggleDrawMode();
            }
            if (e.key === 'Escape' && this.isDrawingMode) {
                this.setDrawMode(false);
            }
        });
    }

    saveSettings() {
        try {
            localStorage.setItem('ttrpg_living_elements', JSON.stringify(this.getState()));
        } catch (e) {}
    }

    loadSettings() {
        try {
            const saved = localStorage.getItem('ttrpg_living_elements');
            if (saved) {
                const state = JSON.parse(saved);
                this.setState(state);
            }
        } catch (e) {}
    }
}

window.livingElementsEngine = new LivingElementsEngine();
