/**
 * Main Application Coordinator
 * Connects Keystone, Grid, Living Elements, AI Generator, Fog of War, and UI
 */

class BattlemapApp {
    constructor() {
        this.currentMap = {
            src: '',
            isVideo: false,
            name: 'Default Grid'
        };

        this.panZoom = {
            x: 0,
            y: 0,
            scale: 1.0,
            isPanning: false,
            startX: 0,
            startY: 0
        };

        // Global Projector Optics & Hardware Calibration (applied to #map-layer)
        this.filters = {
            brightness: 100,
            contrast: 100,
            saturation: 100,
            invert: false
        };

        // Per-Map Image Adjustments (applied directly to #map-image / #map-video, independent of projector optics)
        this.imageAdjustments = {
            brightness: 100,
            contrast: 100,
            saturation: 100,
            sharpness: 0
        };

        this.isBlackout = false;
        this.isUIHidden = false;
        this.panMode = false;
        this.activePanelId = null;

        // Curated 4K Tactical Environments (lazy on-demand 4K procedural generation + live 160x90 canvas thumbnails)
        this.presets = [
            { id: 'forest', name: 'Forest River Crossing', soundscape: 'forest' },
            { id: 'dungeon', name: 'Ancient Crypt Dungeon', soundscape: 'cave' },
            { id: 'cavern', name: 'Volcanic Lava Chasm', soundscape: 'volcano' },
            { id: 'tavern', name: 'Cozy Tavern Taproom', soundscape: 'tavern' },
            { id: 'desert', name: 'Desert Oasis Ruins', soundscape: 'wind' },
            { id: 'cyber', name: 'Cyberpunk Neon Alley', soundscape: 'city' },
            { id: 'crystal', name: 'Underdark Crystal Cavern', soundscape: 'cave' },
            { id: 'ship', name: 'Starship Command Bridge', soundscape: 'wind' }
        ];
    }

    init() {
        this.cacheElements();
        this.initEngines();
        this.bindEvents();
        this.initDraggablePanels();
        this.loadSettings();

        // Start on a clean tactical grid backdrop until the user pastes, uploads, or loads a map
        const titleEl = document.getElementById('active-map-name');
        if (titleEl) titleEl.textContent = 'Tactical Grid';
    }

    renderPresetThumbnails() {
        if (!window.aiMapGenerator) return;
        document.querySelectorAll('.preset-thumb-canvas').forEach(canvas => {
            const presetId = canvas.getAttribute('data-preset-canvas');
            const presetSpec = window.aiMapGenerator.CURATED_MAPS.find(m => m.id === presetId);
            if (presetSpec && typeof presetSpec.render === 'function') {
                const ctx = canvas.getContext('2d');
                presetSpec.render(ctx, canvas.width || 160, canvas.height || 90);
            }
        });
    }

    cacheElements() {
        this.dom = {
            container: document.getElementById('keystone-container'),
            viewport: document.getElementById('keystone-viewport'),
            overlay: document.getElementById('keystone-overlay'),
            mapLayer: document.getElementById('map-layer'),
            mapImage: document.getElementById('map-image'),
            mapVideo: document.getElementById('map-video'),
            backdrop: document.getElementById('map-default-backdrop'),
            gridCanvas: document.getElementById('grid-canvas'),
            weatherCanvas: document.getElementById('weather-canvas'),
            elementsLayer: document.getElementById('living-elements-layer'),
            blackoutCurtain: document.getElementById('blackout-curtain'),
            header: document.querySelector('.app-header'),
            hudBar: document.querySelector('.hud-bar'),
            unhideHint: document.getElementById('unhide-hint'),
            panels: document.querySelectorAll('.floating-panel')
        };
    }

    initEngines() {
        window.keystoneEngine.init(this.dom.container, this.dom.viewport, this.dom.overlay);
        window.gridEngine.init(this.dom.gridCanvas);
        window.livingElementsEngine.init(this.dom.elementsLayer, this.dom.weatherCanvas);
        if (window.dynamicSceneEngine) {
            window.dynamicSceneEngine.init();
        }

        // Expose helpers for DynamicSceneEngine
        window.setMap = (src, isVideo, name) => this.setMap(src, isVideo, name);
        window.applyPanZoom = () => this.applyPanZoom();

        // Living elements selected callback
        window.onElementSelected = (el) => {
            this.updateElementInspector(el);
        };
    }

    // ------------------------------------------------------------------------
    // MAP LOADING & PAN / ZOOM
    // ------------------------------------------------------------------------

    setMap(src, isVideo = false, name = 'Custom Map') {
        this.currentMap = { src, isVideo, name };

        if (isVideo) {
            this.dom.mapImage.style.display = 'none';
            this.dom.mapVideo.style.display = 'block';
            this.dom.mapVideo.src = src;
            this.dom.mapVideo.play().catch(() => {});
        } else {
            this.dom.mapVideo.style.display = 'none';
            this.dom.mapVideo.pause();
            this.dom.mapImage.style.display = 'block';
            this.dom.mapImage.onload = () => {
                const nw = this.dom.mapImage.naturalWidth || 0;
                const nh = this.dom.mapImage.naturalHeight || 0;
                const dimsEl = document.getElementById('ai-active-map-dims');
                const upscaleBtn = document.getElementById('btn-ai-upscale-4k');
                if (dimsEl && nw > 0 && nh > 0) {
                    const targetW = (window.aiMapGenerator && window.aiMapGenerator.state) ? window.aiMapGenerator.state.w : 3840;
                    const targetH = (window.aiMapGenerator && window.aiMapGenerator.state) ? window.aiMapGenerator.state.h : 2160;
                    const isExactTarget = (nw === targetW && nh === targetH);
                    dimsEl.textContent = isExactTarget
                        ? `${nw} \u00D7 ${nh} px (Target Match \u2713)`
                        : `${nw} \u00D7 ${nh} px`;
                    dimsEl.style.color = isExactTarget ? 'var(--primary)' : '#fbbf24';
                    if (upscaleBtn) {
                        upscaleBtn.style.display = isExactTarget ? 'none' : 'inline-flex';
                    }
                }
            };
            this.dom.mapImage.src = src;
        }

        if (this.dom.backdrop) {
            this.dom.backdrop.style.display = 'none';
        }

        // Update map title display if any
        const titleEl = document.getElementById('active-map-name');
        if (titleEl) titleEl.textContent = name;

        // Reset Pan & Zoom
        this.resetPanZoom();
        this.saveSettings();
    }

    /**
     * Loads and processes an image (pasted, uploaded, or URL) through the 4K MapGen pipeline
     * so auto-upscale & aspect fit/crop are respected automatically.
     */
    async loadAndProcessMapImage(srcUrl, label = 'Custom Map', forceUpscale = false, provider = 'Imported') {
        if (!window.aiMapGenerator) {
            this.setMap(srcUrl, false, label);
            return;
        }
        try {
            const processed = await window.aiMapGenerator.processAndFitImage(srcUrl, forceUpscale);
            const finalUrl = processed.dataUrl || srcUrl;
            this.setMap(finalUrl, false, label);
            window.aiMapGenerator.addToHistory({
                id: `map_${Date.now()}`,
                prompt: label,
                provider: processed.wasAdjusted ? `${provider} (${processed.width}\u00D7${processed.height})` : provider,
                url: finalUrl
            });
            return processed;
        } catch (err) {
            this.setMap(srcUrl, false, label);
            window.aiMapGenerator.addToHistory({
                id: `map_${Date.now()}`,
                prompt: label,
                provider: provider,
                url: srcUrl
            });
            return null;
        }
    }

    async reprocessActiveMapToTarget() {
        if (!this.currentMap || !this.currentMap.src || this.currentMap.isVideo || !window.aiMapGenerator) return null;
        const processed = await window.aiMapGenerator.processAndFitImage(this.currentMap.src, true);
        if (processed && processed.dataUrl) {
            this.setMap(processed.dataUrl, false, this.currentMap.name);
        }
        return processed;
    }

    loadPreset(presetId) {
        const p = this.presets.find(item => item.id === presetId);
        let dataUrl = null;
        let mapTitle = p ? p.name : 'Tactical Map';

        if (window.aiMapGenerator) {
            const generated = window.aiMapGenerator.generateCurated4KMap(presetId);
            if (generated && generated.dataUrl) {
                dataUrl = generated.dataUrl;
                mapTitle = generated.title || mapTitle;
            }
        }
        if (!dataUrl) {
            dataUrl = this.generateForestMapSVG();
        }

        this.setMap(dataUrl, false, mapTitle);
    }

    resetPanZoom() {
        this.panZoom = {
            x: 0,
            y: 0,
            scale: 1.0,
            isPanning: false,
            startX: 0,
            startY: 0
        };
        this.applyPanZoom();
    }

    applyPanZoom() {
        if (this.dom.mapLayer) {
            this.dom.mapLayer.style.transform = `translate(${this.panZoom.x}px, ${this.panZoom.y}px) scale(${this.panZoom.scale})`;
        }
        // Effects pinned to the map ("Scale & Move with Map") follow the same camera
        if (window.livingElementsEngine && window.livingElementsEngine.setCamera) {
            window.livingElementsEngine.setCamera(this.panZoom.x, this.panZoom.y, this.panZoom.scale);
        }
        if (window.dynamicSceneEngine) {
            window.dynamicSceneEngine.onCameraPanZoom(this.panZoom.x, this.panZoom.y, this.panZoom.scale);
        }
        const pct = `${Math.round(this.panZoom.scale * 100)}%`;
        const zoomBadge = document.getElementById('fx-view-zoom-badge');
        if (zoomBadge) zoomBadge.textContent = pct;
        const hudZoomBadge = document.getElementById('hud-zoom-badge');
        if (hudZoomBadge) hudZoomBadge.textContent = pct;
    }

    /** Zoom the map by a factor around a screen point (defaults to the centre of the screen). */
    zoomBy(factor, cx = window.innerWidth / 2, cy = window.innerHeight / 2) {
        const newScale = Math.max(0.2, Math.min(6.0, this.panZoom.scale * factor));
        const ratio = newScale / this.panZoom.scale;
        this.panZoom.x = cx - (cx - this.panZoom.x) * ratio;
        this.panZoom.y = cy - (cy - this.panZoom.y) * ratio;
        this.panZoom.scale = newScale;
        this.applyPanZoom();
    }

    /** Nudge the map by a number of screen pixels (arrow keys). */
    panBy(dx, dy) {
        this.panZoom.x += dx;
        this.panZoom.y += dy;
        this.applyPanZoom();
    }

    setPanMode(on) {
        this.panMode = !!on;
        if (this.dom.container) this.dom.container.classList.toggle('pan-mode-active', this.panMode);
        const fxBtn = document.getElementById('btn-fx-pan-mode');
        if (fxBtn) {
            fxBtn.textContent = this.panMode ? '\u270B Pan Mode: ON' : '\u270B Pan Mode: Off';
            fxBtn.classList.toggle('active', this.panMode);
        }
        const hudBtn = document.getElementById('hud-btn-pan');
        if (hudBtn) hudBtn.classList.toggle('active', this.panMode);
    }

    togglePanMode() {
        this.setPanMode(!this.panMode);
    }

    applyFilters() {
        const { brightness, contrast, saturation, invert } = this.filters;
        const filterStr = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%) ${invert ? 'invert(1)' : ''}`;
        if (this.dom.mapLayer) {
            this.dom.mapLayer.style.filter = filterStr;
        }

        // Sync Projector Optics UI readouts & sliders
        const bSlider = document.getElementById('proj-brightness');
        const bVal = document.getElementById('proj-brightness-val');
        const cSlider = document.getElementById('proj-contrast');
        const cVal = document.getElementById('proj-contrast-val');
        const sSlider = document.getElementById('proj-saturation');
        const sVal = document.getElementById('proj-saturation-val');
        const invToggle = document.getElementById('proj-invert');

        if (bSlider) bSlider.value = brightness;
        if (bVal) bVal.textContent = `${brightness}%`;
        if (cSlider) cSlider.value = contrast;
        if (cVal) cVal.textContent = `${contrast}%`;
        if (sSlider) sSlider.value = saturation;
        if (sVal) sVal.textContent = `${saturation}%`;
        if (invToggle) invToggle.checked = !!invert;

        this.saveSettings();
    }

    /**
     * Applies independent Map Image Adjustments (Brightness, Contrast, Saturation, and SVG Convolution Sharpness)
     * directly to the map asset (#map-image / #map-video), separate from Projector Optics
     */
    applyImageAdjustments() {
        const { brightness, contrast, saturation = 100, sharpness } = this.imageAdjustments;

        // Update 3x3 Unsharp / Laplacian Convolution Kernel when sharpness > 0
        const kernelEl = document.getElementById('map-sharpen-kernel');
        if (kernelEl && sharpness > 0) {
            const s = (sharpness / 100) * 0.45;
            const d = (-0.5 * s).toFixed(4);
            const c = (-1.0 * s).toFixed(4);
            const m = (1.0 + 6.0 * s).toFixed(4);
            kernelEl.setAttribute('kernelMatrix', `${d} ${c} ${d} ${c} ${m} ${c} ${d} ${c} ${d}`);
        }

        const sharpenUrl = sharpness > 0 ? ' url(#map-sharpen-filter)' : '';
        const assetFilter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%)${sharpenUrl}`;

        if (this.dom.mapImage) {
            this.dom.mapImage.style.filter = assetFilter;
        }
        const morphImg = document.getElementById('map-morph-image');
        if (morphImg) {
            morphImg.style.filter = assetFilter;
        }
        if (this.dom.mapVideo) {
            this.dom.mapVideo.style.filter = assetFilter;
        }

        // Sync all Image Adjustment sliders & readouts in both Maps panel and Display panel
        document.querySelectorAll('.img-brightness-slider').forEach(el => { el.value = brightness; });
        document.querySelectorAll('.img-brightness-val').forEach(el => { el.textContent = `${brightness}%`; });

        document.querySelectorAll('.img-contrast-slider').forEach(el => { el.value = contrast; });
        document.querySelectorAll('.img-contrast-val').forEach(el => { el.textContent = `${contrast}%`; });

        document.querySelectorAll('.img-saturation-slider').forEach(el => { el.value = saturation; });
        document.querySelectorAll('.img-saturation-val').forEach(el => { el.textContent = `${saturation}%`; });

        document.querySelectorAll('.img-sharpness-slider').forEach(el => { el.value = sharpness; });
        document.querySelectorAll('.img-sharpness-val').forEach(el => { el.textContent = `${sharpness}%`; });

        this.saveSettings();
    }

    toggleBlackout(forceVal) {
        this.isBlackout = forceVal !== undefined ? forceVal : !this.isBlackout;
        this.dom.blackoutCurtain.classList.toggle('active', this.isBlackout);

        const btn = document.getElementById('btn-blackout');
        if (btn) btn.classList.toggle('active', this.isBlackout);
    }

    toggleUI(forceVal) {
        this.isUIHidden = forceVal !== undefined ? forceVal : !this.isUIHidden;
        this.dom.header.classList.toggle('ui-hidden', this.isUIHidden);
        this.dom.hudBar.classList.toggle('ui-hidden', this.isUIHidden);

        // Close all floating panels when hiding UI
        if (this.isUIHidden) {
            this.closeAllPanels(true);
            this.dom.unhideHint.classList.add('visible');
            setTimeout(() => {
                this.dom.unhideHint.classList.remove('visible');
            }, 3000);
        }
    }

    toggleFullscreen() {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(() => {});
        } else {
            document.exitFullscreen().catch(() => {});
        }
    }

    // ------------------------------------------------------------------------
    // PANEL MANAGEMENT
    // ------------------------------------------------------------------------

    togglePanel(panelId) {
        const panel = document.getElementById(panelId);
        if (!panel) return;

        const isActive = panel.classList.contains('active');
        this.closeAllPanels(false);

        if (!isActive) {
            panel.classList.add('active');
            this.activePanelId = panelId;

            // Highlight corresponding nav btn
            const btn = document.querySelector(`[data-panel="${panelId}"]`);
            if (btn) btn.classList.add('active');
        } else {
            this.activePanelId = null;
        }
    }

    closeAllPanels(includeInspector = false) {
        this.dom.panels.forEach(p => {
            if (!includeInspector && p.id === 'element-inspector-panel') return;
            p.classList.remove('active');
        });
        document.querySelectorAll('.nav-btn[data-panel]').forEach(b => b.classList.remove('active'));
        this.activePanelId = null;
    }

    initDraggablePanels() {
        this.highestPanelZIndex = 200;

        // Bring clicked panel to top z-index
        document.querySelectorAll('.floating-panel').forEach(panel => {
            panel.addEventListener('pointerdown', () => {
                this.highestPanelZIndex++;
                panel.style.zIndex = this.highestPanelZIndex;
            }, { passive: true });
        });

        // Make each panel draggable by its .panel-header
        document.querySelectorAll('.floating-panel .panel-header').forEach(header => {
            const panel = header.closest('.floating-panel');
            if (!panel) return;

            let isDragging = false;
            let startX = 0;
            let startY = 0;
            let startLeft = 0;
            let startTop = 0;

            header.addEventListener('pointerdown', (e) => {
                // Ignore interactive controls inside header (close button, toggles, etc.)
                if (e.target.closest('.panel-close-btn') || e.target.closest('button') || e.target.closest('input') || e.target.closest('select')) {
                    return;
                }

                isDragging = true;
                header.setPointerCapture(e.pointerId);

                this.highestPanelZIndex++;
                panel.style.zIndex = this.highestPanelZIndex;

                const rect = panel.getBoundingClientRect();
                panel.style.transform = 'none';
                panel.style.right = 'auto';
                panel.style.bottom = 'auto';
                panel.style.left = `${rect.left}px`;
                panel.style.top = `${rect.top}px`;

                startX = e.clientX;
                startY = e.clientY;
                startLeft = rect.left;
                startTop = rect.top;

                header.classList.add('is-dragging');
            });

            header.addEventListener('pointermove', (e) => {
                if (!isDragging) return;
                const dx = e.clientX - startX;
                const dy = e.clientY - startY;

                let newLeft = startLeft + dx;
                let newTop = startTop + dy;

                const adDeadSpace = 64; // 64px reserved bottom dead space for web ad banner
                const maxLeft = Math.max(0, window.innerWidth - panel.offsetWidth - 8);
                const maxTop = Math.max(8, window.innerHeight - panel.offsetHeight - adDeadSpace);
                newLeft = Math.max(8, Math.min(maxLeft, newLeft));
                newTop = Math.max(8, Math.min(maxTop, newTop));

                panel.style.left = `${newLeft}px`;
                panel.style.top = `${newTop}px`;
            });

            const stopDrag = (e) => {
                if (!isDragging) return;
                isDragging = false;
                header.classList.remove('is-dragging');
                try {
                    header.releasePointerCapture(e.pointerId);
                } catch (err) {}
            };

            header.addEventListener('pointerup', stopDrag);
            header.addEventListener('pointercancel', stopDrag);
        });
    }

    // ------------------------------------------------------------------------
    // ELEMENT INSPECTOR PANEL
    // ------------------------------------------------------------------------

    getVariantOptionsForType(type) {
        const catDef = (typeof window !== 'undefined' && window.FEATURE_CATALOG && window.FEATURE_CATALOG[type]);
        const baseType = catDef ? catDef.base : type;
        switch (baseType) {
            case 'inferno':
                return [
                    { value: 'wildfire', label: '\u{1F525} Forest Inferno (Charred Timber Boughs & Licking Flames)' },
                    { value: 'hellfire', label: '\u{1F30B} Tectonic Hellscape (Basalt Crust Plates & Erupting Spires)' },
                    { value: 'alchemical', label: '\u{1F9EA} Corrosive Chemical Fire (Dissolved Floor & Frothing Acid Pools)' },
                    { value: 'arcane_fire', label: '\u2728 Summoning Mandala (Arcane Sigil Geometry & Orbiting Polyhedra)' }
                ];
            case 'smoke':
                return [
                    { value: 'black_smoke', label: '\u{1F4A8} Carbon Soot Plume (Charcoal Firebed & Turbulent Cumulus Billows)' },
                    { value: 'ash_fog', label: '\u{1F32B}\uFE0F Stratified Ash Haze (Horizontal Fog Layers & Tumbling Flakes)' },
                    { value: 'poison_gas', label: '\u2620\uFE0F Marsh Gas Blanket (Bubbling Mud Vents & Creeping Tendrils)' },
                    { value: 'acid_fumes', label: '\u{1F9EA} Caustic Vitriol Wisps (Dissolving Limestone Crater & Sizzling Foam)' },
                    { value: 'spore_cloud', label: '\u{1F344} Fungal Spore Miasma (5 Fleshy Rooted Pods & Spore Puffs)' },
                    { value: 'shadow_miasma', label: '\u{1F311} Abyssal Void Miasma (Reality Void Tear, Claw Tendrils & Flies)' }
                ];
            case 'mud':
                return [
                    { value: 'mud_bog', label: '\u{1FAE7} Viscous Sucking Mire (Organic Mud Lobes & Bursting Domes)' },
                    { value: 'tar_pit', label: '\u{1F5A4} Inky Pitch Pit (Iridescent Petroleum Sheen & Sunken Bones)' },
                    { value: 'quicksand', label: '\u{1F3DC}\uFE0F Granular Vortex (Archimedean Sand Funnel & Sinkhole Motes)' },
                    { value: 'acid_sludge', label: '\u{1F9EA} Caustic Ooze Pit (Chemical Erosion Banks & Sizzling Foam)' },
                    { value: 'sticky_webs', label: '\u{1F578}\uFE0F Orb-Weaver Web (Radial Tensile Lines, Catenary Rings & Trapped Prey)' }
                ];
            case 'sparks':
                return [
                    { value: 'storm_lightning', label: '\u26A1 Forked Lightning (Acute Branching Arcs & Stepped Leaders)' },
                    { value: 'arcane_surge', label: '\u{1F52E} Arcane Rune Array (Concentric Rune Circles, Heptagram & Polyhedra)' },
                    { value: 'necrotic_rift', label: '\u{1FA78} Dimensional Void Tear (Reality Fracture Seam & Reaching Claws)' },
                    { value: 'golden_holy', label: '\u2728 Sanctified Sunburst (12-Ray Sunburst Mandala & Sacred Rings)' }
                ];
            case 'tumbleweed':
                return [
                    { value: 'desert_thistle', label: '\u{1F33E} Desert Thistle (Dried Briar Cage & Dust Trail)' },
                    { value: 'flaming_tumbleweed', label: '\u{1F525} Flaming Tumbleweed (Ember Core & Scorch Trail)' },
                    { value: 'barbed_wire', label: '\u{1FA78} Barbed Wire Tangle (Rusted Steel Coils & Friction Sparks)' }
                ];
            case 'campfire':
                return [
                    { value: 'wildfire', label: '\u{1F525} Campsite Hearth (12 Fieldstones & Criss-Cross Timber Logs)' },
                    { value: 'hellfire', label: '\u{1F30B} Brimstone Altar (8 Obsidian Fang Teeth & Cracked Basalt Slabs)' },
                    { value: 'alchemical', label: '\u{1F9EA} Alchemist\'s Crucible (Iron Tripod, Transmutation Sigil & Alembic)' },
                    { value: 'arcane_fire', label: '\u2728 Runic Hearth (6 Levitating Mana Crystals & Dual Rune Rings)' },
                    { value: 'mod_fire', label: '\u{1F6E2}\uFE0F Burn Barrel (55-Gal Steel Drum & Side Vent Flame Jets)' }
                ];
            case 'torch':
                return [
                    { value: 'wildfire', label: '\u{1F525} Pitch Stake Torch (Carved Timber Stake & Charred Burlap Wrap)' },
                    { value: 'hellfire', label: '\u{1F30B} Demon Claw Sconce (4 Iron Talons & Basalt Ember Core)' },
                    { value: 'alchemical', label: '\u{1F9EA} Phosphor Burner (Coiled Copper Condenser & Boiling Glass Vial)' },
                    { value: 'arcane_fire', label: '\u2728 Floating Mana Shard (Hovering Faceted Crystal & Mini Rune Aura)' },
                    { value: 'mod_fire', label: '\u{1F527} Industrial Gas Jet (Steel Wall Flange & Brass Burner Nozzle)' }
                ];
            case 'river':
            case 'pond':
                return [
                    { value: 'pond_lily', label: '\u{1F4A7} Lily Pond (Lily Pads, Lotus Blossoms & Shimmering Waters)' },
                    { value: 'cavern_pool', label: '\u{1F48E} Cavern Pool (Subterranean Stalagmites & Glowing Crystal Basins)' },
                    { value: 'blood_pool', label: '\u{1FA78} Sacrificial Pool (Runic Basin & Coagulated Blood)' },
                    { value: 'stream', label: '\u{1F30A} Alpine Stream (Rippling Shallows & Riverbed Stones)' },
                    { value: 'ocean', label: '\u{1F30A} Rapids River (Heavy Whitewater Crests & High-Speed Current)' },
                    { value: 'swamp', label: '\u{1F33F} Bayou Channel (Murky Duckweed Mats & Mangrove Stems)' },
                    { value: 'moat_stakes', label: '\u{1F3F0} Fortress Moat (Defensive Palisade Stakes & Murky Water)' },
                    { value: 'concrete_canal', label: '\u{1F3D9}\uFE0F Drainage Canal (Reinforced Concrete Slopes & Grate Outflow)' },
                    { value: 'lava', label: '\u{1F30B} Magma River (Cooling Basalt Crusts & Roaring Molten Channels)' },
                    { value: 'blood_river', label: '\u{1FA78} River of Blood (Viscous Crimson Fluid & Bone Flotsam)' },
                    { value: 'acid', label: '\u{1F9EA} Industrial Sluice (Corrosive Chemical Effluent & Metal Baffles)' }
                ];
            case 'waterfall':
                return [
                    { value: 'mountain_falls', label: '\u{1F30A} Alpine Cataract (Granite Rock Shelves & Foaming Plunge)' },
                    { value: 'cavern_falls', label: '\u{1F48E} Crystal Cavern Veil (Subterranean Stalactites & Biolum Basin)' },
                    { value: 'swamp_spillway', label: '\u{1F33F} Timber Sluice Weir (Heavy Wooden Pilings & Baffle Gates)' },
                    { value: 'lava_falls', label: '\u{1F30B} Molten Magma Cataract (Basalt Lips & Floating Slag Crusts)' }
                ];
            case 'lava_seam':
                return [
                    { value: 'magma_seam', label: '\u{1F30B} Basalt Magma Trench (Cooling Crust Plates & Molten Surges)' },
                    { value: 'hell_crack', label: '\u{1FA78} Obsidian Brimstone Chasm (10 Razor Spikes & Sulfurous Geysers)' },
                    { value: 'leyline_seam', label: '\u{1F52E} Leyline Mana Fracture (Geometric Crystal Prisms & Prismatic Core)' },
                    { value: 'acid_fault', label: '\u{1F9EA} Vitriol Erosion Fault (Dissolving Limestone & Sizzling Seep)' }
                ];
            case 'canopy':
                return [
                    { value: 'oak_canopy', label: '\u{1F333} Summer Oak (Rounded Deciduous Lobes & Dappled Sunlight)' },
                    { value: 'autumn_maple', label: '\u{1F341} Autumn Maple (5-Pointed Serrated Star Clumps & Crimson Flakes)' },
                    { value: 'pine_crown', label: '\u{1F332} Conifer Pine Crown (Concentric Star-Burst Needle Whorls & Cones)' },
                    { value: 'jungle_palm', label: '\u{1F334} Tropical Palm (9 Radiating Arching Fronds & Coconut Hub)' },
                    { value: 'dead_willow', label: '\u{1F940} Weeping Deadwood (Gnarled Bare Skeletal Boughs & Hanging Vines)' }
                ];
            case 'sunbeams':
                return [
                    { value: 'golden_sun', label: '\u2600\uFE0F Warm Golden Sunbeams & Dust Motes' },
                    { value: 'moonbeams', label: '\u{1F319} Silvery-Blue Midnight Moonbeams' },
                    { value: 'cathedral_rays', label: ' stained-glass Amber Cathedral Rays' },
                    { value: 'cavern_skylight', label: '\u{1F48E} Emerald-Cyan Cavern Skylight Shafts' }
                ];
            case 'hologram':
                return [
                    { value: 'tactical_planet', label: '\u{1FA90} Rotating Planetary Sphere' },
                    { value: 'reticle', label: '\u{1F3AF} Targeting Reticle & Weapon Lock' },
                    { value: 'beacon', label: '\u{1F4E1} Distress Beacon / Holo-Relay' },
                    { value: 'skull_hazard', label: '\u2620\uFE0F Cyber Hazard / Containment Warning' },
                    { value: 'starship_schematic', label: '\u{1F680} Starship Blueprint Schematic' }
                ];
            case 'forcefield':
                return [
                    { value: 'hex_barrier', label: '\u{1F6E1}\uFE0F Hexagonal Energy Shield Matrix (Cyan)' },
                    { value: 'laser_grid', label: '\u{1F534} High-Voltage Laser Grid (Crimson)' },
                    { value: 'plasma_curtain', label: '\u{1F7E3} Ionized Plasma Curtain (Violet)' },
                    { value: 'void_containment', label: '\u26A1 Void Singularity Containment (Gold)' }
                ];
            case 'plasma_leak':
                return [
                    { value: 'fusion_vent', label: '\u{1F537} Fusion Coolant Breach & Mach Diamonds' },
                    { value: 'warp_overload', label: '\u{1F7E3} Warp Core Radiation Overload' },
                    { value: 'superheated_jet', label: '\u26A1 Superheated Plasma Jet (Gold)' }
                ];
            case 'teleporter':
                return [
                    { value: 'transmat_pad', label: '\u{1F4A0} Quantum Transmat Pad & Light Pillar' },
                    { value: 'warp_gate', label: '\u{1F300} Swirling Hyperspace Vortex Gate' },
                    { value: 'precursor_ring', label: '\u2728 Alien Precursor Resonator (Emerald)' },
                    { value: 'disintegration_field', label: '\u{1FA78} Matter Deconstruction Field (Crimson)' }
                ];
            case 'cyber_terminal':
                return [
                    { value: 'tactical_hud', label: '\u{1F5A5}\uFE0F Tactical HUD & Radar Sweep' },
                    { value: 'cyber_workstation', label: '\u2328\uFE0F Cyber Console & Data Stream' },
                    { value: 'neon_sign', label: '\u{1F3EE} Cyberpunk Neon Sign (RESTRICTED)' },
                    { value: 'reactor_terminal', label: '\u26A0\uFE0F Reactor Core Warning Console' }
                ];
            case 'toxic_spill':
                return [
                    { value: 'radioactive_sludge', label: '\u2622\uFE0F Radioactive Waste (Neon Toxic Green)' },
                    { value: 'alien_mutagen', label: '\u{1F9EA} Alien Mutagen Xenoblood (Violet)' },
                    { value: 'caustic_acid', label: '\u2697\uFE0F Sizzling High-Density Acid Pool' },
                    { value: 'cryo_coolant', label: '\u2744\uFE0F Sub-Zero Liquid Nitrogen Spill (Cyan Fog)' }
                ];
            case 'ocean_waves':
                return [
                    { value: 'tropical_reef', label: '\u{1F3DD}\uFE0F Tropical Turquoise Reef Surf' },
                    { value: 'deep_atlantic', label: '\u{1F30A} Deep Atlantic Storm Swell' },
                    { value: 'stormy_tempest', label: '\u26C8\uFE0F Stormy Tempest & Spindrift' },
                    { value: 'bioluminescent_night', label: '\u2728 Bioluminescent Neon Night Tide' },
                    { value: 'abyssal_eldritch', label: '\u{1F419} Abyssal Eldritch Purple Surge' }
                ];
            case 'forest':
                return [
                    { value: 'ancient_oak', label: '\u{1F333} Ancient Oak & Summer Leaves' },
                    { value: 'autumn_maple', label: '\u{1F341} Golden Autumn Maple Canopy' },
                    { value: 'boreal_pine', label: '\u{1F332} Boreal Pine Evergreen Taiga' },
                    { value: 'tropical_jungle', label: '\u{1F334} Lush Tropical Jungle Palms' },
                    { value: 'cherry_blossom', label: '\u{1F338} Blooming Cherry Blossom Grove' },
                    { value: 'haunted_deadwood', label: '\u{1F940} Haunted Deadwood Thicket' },
                    { value: 'alien_fungal', label: '\u{1F344} Bioluminescent Fungal Canopy' }
                ];
            case 'spotlight':
                return [
                    { value: 'prison_searchlight', label: '\u{1F526} Prison Watchtower Searchlight' },
                    { value: 'tactical_flashlight', label: '\u{1F6A8} Tactical SWAT LED Flashlight' },
                    { value: 'cyber_spotlight', label: '\u{1F6F8} Cyber Security Drone Beam' },
                    { value: 'stage_spotlight', label: '\u{1F3AD} Warm Amber Followspot' },
                    { value: 'red_alert_siren', label: '\u{1F534} Red Alert Rotating Beacon' }
                ];
            case 'bats':
                return [
                    { value: 'dungeon_bats', label: '\u{1F987} Swarming Dungeon Cave Bats' },
                    { value: 'cemetery_crows', label: '\u{1F985} Murder of Cemetery Crows / Ravens' },
                    { value: 'desert_vultures', label: '\u{1F985} Circling Desert Vultures' },
                    { value: 'harbor_gulls', label: '\u{1F54A}\uFE0F Gliding Coastal Seagulls' },
                    { value: 'surveillance_drones', label: '\u{1F6F0}\uFE0F Micro Surveillance Drone Swarm' }
                ];
            case 'rats':
                return [
                    { value: 'sewer_rats', label: '\u{1F400} Skittering Sewer Dungeon Rats' },
                    { value: 'bounding_deer', label: '\u{1F98C} Bounding Deer Herd (Pure 90\u00B0 Overhead Stags & Does)' },
                    { value: 'swarming_spiders', label: '\u{1F577}\uFE0F Swarming 8-Legged Spiders' },
                    { value: 'robo_scuttlers', label: '\u{1F916} Cybernetic Brass Robo-Beetles' },
                    { value: 'shadow_crawlers', label: '\u{1F311} Shadow Miasma Crawlers' },
                    { value: 'cave_scorpions', label: '\u{1F982} Dungeon Cave Scorpions' }
                ];
            case 'fish':
                return [
                    { value: 'koi_pond', label: '\u{1F38F} Ornate Swimming Koi Pond' },
                    { value: 'ocean_sharks', label: '\u{1F988} Predatory Ocean Sharks & Reef Fish' },
                    { value: 'river_trout', label: '\u{1F41F} Speckled Brook River Trout' },
                    { value: 'abyssal_biolum', label: '\u2728 Abyssal Bioluminescent Anglers' },
                    { value: 'drone_minnows', label: '\u{1F6F8} Cybernetic Aquatic Scout Minnows' }
                ];
            case 'patrol_actor':
                return [
                    { value: 'will_o_wisp', label: '\u2728 Wandering Will-o\'-the-Wisp' },
                    { value: 'gothic_ghost', label: '\u{1F47B} Floating Spectral Phantom' },
                    { value: 'patrol_drone', label: '\u{1F6F8} Sentry Security Patrol Drone' },
                    { value: 'fey_sprite', label: '\u{1F9DA} Glowing Fey Forest Sprite' },
                    { value: 'eldritch_eye', label: '\u{1F441}\uFE0F Floating Eldritch Arcane Eye' }
                ];
            case 'rain':
                return [
                    { value: 'storm_downpour', label: '\u{1F327}\uFE0F Heavy Downpour & Ground Splashes' },
                    { value: 'drizzle', label: '\u{1F326}\uFE0F Gentle Atmospheric Drizzle' },
                    { value: 'neon_rain', label: '\u{1F3EE} Cyberpunk Neon Rain' },
                    { value: 'acid_rain', label: '\u{1F9EA} Caustic Toxic Acid Rain' }
                ];
            case 'snow':
                return [
                    { value: 'blizzard_drift', label: '\u2744\uFE0F Mountain Snow Blizzard' },
                    { value: 'flurry', label: '\u{1F328}\uFE0F Gentle Winter Flurry' },
                    { value: 'ash_storm', label: '\u{1F30B} Volcanic Ash & Cinder Drift' }
                ];
            case 'fog':
                return [
                    { value: 'ground_mist', label: '\u{1F32B}\uFE0F Low Rolling Ground Mist' },
                    { value: 'swamp_fog', label: '\u{1F33F} Murky Bayou Swamp Fog' },
                    { value: 'toxic_smog', label: '\u2623\uFE0F Virulent Green Toxic Smog' },
                    { value: 'cemetery_shroud', label: '\u26B0\uFE0F Gothic Cemetery Shroud' }
                ];
            case 'dust':
                return [
                    { value: 'sandstorm_eddy', label: '\u{1F3DC}\uFE0F Raging Desert Sandstorm' },
                    { value: 'dust_motes', label: '\u2728 Floating Ambient Dust Motes' },
                    { value: 'ash_fall', label: '\u{1F30B} Post-Apocalyptic Ash Fall' }
                ];
            case 'hyperspace':
                return [
                    { value: 'astral_aurora', label: '\u{1F30C} Swirling Astral Aurora' },
                    { value: 'warp_stars', label: '\u{1F680} Hyperspace Warp Stars' },
                    { value: 'void_rift', label: '\u{1F300} Dimensional Void Rift' }
                ];
            case 'tentacles':
                return [
                    { value: 'abyssal_purple', label: '\u{1F419} Abyssal Purple Void Tentacles' },
                    { value: 'slimy_green', label: '\u{1F9EA} Slimy Acid Tentacles' },
                    { value: 'crimson_blood', label: '\u{1FA78} Crimson Flesh Tendrils' }
                ];
            case 'fountain':
                return [
                    { value: 'crystal_clear', label: '\u26F2 Crystal Clear Basin Fountain' },
                    { value: 'blood_fount', label: '\u{1FA78} Sanguine Blood Fountain' },
                    { value: 'alchemical_glow', label: '\u2728 Luminescent Alchemical Font' }
                ];
            case 'fan':
                return [
                    { value: 'metal_duct', label: '\u{1F4A8} Industrial Duct Fan' },
                    { value: 'warning_hazard', label: '\u26A0\uFE0F Caution Striped Extraction Vent' }
                ];
            case 'crystal':
                return [
                    { value: 'amethyst_gem', label: '\u{1F48E} Floating Amethyst Crystal' },
                    { value: 'emerald_fel', label: '\u{1F49A} Glowing Fel Emerald' },
                    { value: 'plasma_shard', label: '\u{1F537} Hyper-Space Warp Shard' }
                ];
            case 'headlights':
                return [
                    { value: 'halogen_pair', label: '\u{1F4A1} Twin Halogen Vehicle Beams' },
                    { value: 'xenon_blue', label: '\u{1F699} Xenon High-Beams' },
                    { value: 'amber_fog', label: '\u{1F7E8} Amber Heavy-Duty Foglights' }
                ];
            case 'lightstrip':
                return [
                    { value: 'cyan_chevrons', label: '\u{1F7E2} Cyan Running Chevrons' },
                    { value: 'amber_hazard', label: '\u{1F7E1} Caution Emergency Running Strip' },
                    { value: 'red_alert', label: '\u{1F534} Red Alert Evacuation Guide' }
                ];
            case 'pit_trap':
                return [
                    { value: 'iron_spikes', label: '\u{1F573}\uFE0F Concealed Spike Pit Trap' },
                    { value: 'abyssal_chasm', label: '\u{1F311} Bottomless Abyssal Chasm' }
                ];
            case 'conveyor':
                return [
                    { value: 'hazard_track', label: '\u2699\uFE0F Industrial Hazard Conveyor Track' },
                    { value: 'cargo_belt', label: '\u{1F4E6} Starship Cargo Slat Belt' }
                ];
            default:
                return [];
        }
    }

    updateElementInspector(el) {
        const inspector = document.getElementById('element-inspector-panel');
        if (!inspector) return;

        if (!el) {
            inspector.classList.remove('active');
            return;
        }

        // Open and elevate the dedicated Selected Element Attributes Popup Window
        inspector.classList.add('active');
        this.highestPanelZIndex = (this.highestPanelZIndex || 250) + 1;
        inspector.style.zIndex = this.highestPanelZIndex;

        const labelMap = {
            inferno: 'SPREADING FIRE',
            lava_seam: 'PULSING LAVA SEAM',
            smoke: 'SMOKE / GAS',
            mud: 'MUD / STICKY MIRE',
            sparks: 'LIGHTNING HAZARD',
            river: 'FLOWING WATER',
            waterfall: 'CASCADING WATERFALL',
            canopy: 'SWAYING CANOPY',
            sunbeams: 'MOVING SUNBEAMS',
            campfire: 'LOG CAMPFIRE',
            torch: 'FLICKERING TORCH',
            tumbleweed: 'TUMBLEWEED',
            hologram: 'HOLOGRAPHIC EMITTER',
            forcefield: 'FORCEFIELD BARRIER',
            plasma_leak: 'PLASMA LEAK / JET',
            teleporter: 'QUANTUM TELEPORTER',
            cyber_terminal: 'CYBER TERMINAL / HUD',
            toxic_spill: 'TOXIC CHEMICAL SPILL',
            ocean_waves: 'OCEANIC WAVES & SURF',
            forest: 'WAVING FOREST FILL',
            spotlight: 'SWEEPING SEARCHLIGHT',
            bats: 'FLOCKING CREATURES',
            rats: 'SKITTERING VERMIN',
            fish: 'SWIMMING FISH POND',
            patrol_actor: 'PATROLLING ENTITY',
            rain: 'LOCALIZED RAIN ZONE',
            snow: 'LOCALIZED SNOW ZONE',
            fog: 'LOCALIZED FOG BANK',
            dust: 'LOCALIZED DUST / SAND',
            hyperspace: 'LOCALIZED ASTRAL AURORA'
        };
        const catDef = (typeof window !== 'undefined' && window.FEATURE_CATALOG && window.FEATURE_CATALOG[el.type]);
        const title = inspector.querySelector('.inspector-element-type');
        if (title) title.textContent = (catDef && catDef.name) || labelMap[el.type] || el.type.toUpperCase();

        // 0. Populate Active Map Elements Switcher Dropdown
        const activeSelect = inspector.querySelector('#inspector-active-el-select');
        const countBadge = inspector.querySelector('#inspector-active-count-badge');
        const allEls = (window.livingElementsEngine && window.livingElementsEngine.elements) || [];
        if (countBadge) countBadge.textContent = `${allEls.length} on map`;
        if (activeSelect) {
            activeSelect.innerHTML = allEls.map((item, idx) => {
                const cDef = window.FEATURE_CATALOG && window.FEATURE_CATALOG[item.type];
                const itemName = (cDef && cDef.name) || labelMap[item.type] || item.type.toUpperCase();
                return `<option value="${item.id}">#${idx + 1}: ${itemName}</option>`;
            }).join('');
            activeSelect.value = el.id;
        }

        // Sync Lock / Map-Anchor toggles and dim geometry controls while locked
        const isElLocked = !!(el.config && el.config.locked);
        const lockCheckbox = inspector.querySelector('#inspector-lock-el');
        const anchorCheckbox = inspector.querySelector('#inspector-anchor-map');
        if (lockCheckbox) lockCheckbox.checked = isElLocked;
        if (anchorCheckbox) anchorCheckbox.checked = !!(el.config && el.config.mapAnchored);
        inspector.classList.toggle('element-is-locked', isElLocked);

        // Sync Flip X / Flip Y buttons
        const btnFlipX = inspector.querySelector('#btn-el-flip-x');
        const btnFlipY = inspector.querySelector('#btn-el-flip-y');
        if (btnFlipX) btnFlipX.classList.toggle('active', !!(el.config && el.config.flipX));
        if (btnFlipY) btnFlipY.classList.toggle('active', !!(el.config && el.config.flipY));

        // 1. Populate Variant Dropdown
        const variantGroup = inspector.querySelector('#inspector-variant-group');
        const variantSelect = inspector.querySelector('#inspector-variant-select');
        const variants = this.getVariantOptionsForType(el.type).slice();
        if (variantGroup && variantSelect) {
            const curVariant = (el.config && (el.config.variant || el.config.waterStyle)) || (variants[0] && variants[0].value) || 'default';
            if (curVariant && !variants.some(v => v.value === curVariant)) {
                variants.unshift({
                    value: curVariant,
                    label: `\u2728 ${(catDef && catDef.name) || curVariant} (Default)`
                });
            }
            if (variants.length > 0) {
                variantGroup.style.display = 'flex';
                variantSelect.innerHTML = variants.map(v => `<option value="${v.value}">${v.label}</option>`).join('');
                variantSelect.value = curVariant;
            } else {
                variantGroup.style.display = 'none';
            }
        }

        // 2. Show/Hide Deformable Pond/River/Forest vs Standard Size/Stretch
        const standardGroup = inspector.querySelector('#inspector-group-standard-transform');
        const riverGroup = inspector.querySelector('#inspector-group-river');
        const effectiveBase = (catDef && catDef.base) || el.type;
        const isDeformable = (window.livingElementsEngine && window.livingElementsEngine.isRiverType(el.type)) ||
            effectiveBase === 'river' || effectiveBase === 'pond' || effectiveBase === 'forest';

        if (isDeformable) {
            if (standardGroup) standardGroup.style.display = 'none';
            if (riverGroup) riverGroup.style.display = 'flex';

            const shapeHint = inspector.querySelector('#inspector-shape-hint');
            const shapeLabel = inspector.querySelector('#inspector-shape-mode-label');
            const shapeSelect = inspector.querySelector('#inspector-river-shape');

            if (effectiveBase === 'forest') {
                if (shapeHint) {
                    shapeHint.innerHTML = `\u{1F333} <b style="color: var(--primary);">Forest Shape Handles Active:</b> Drag <b>cyan circles</b> on the map to shape the forest around roads or clearings, click <b>+</b> to add corners, or use <b>Entity Quantity</b> above to add/remove trees!`;
                }
                if (shapeLabel) shapeLabel.textContent = 'Forest Shape Mode';
                if (shapeSelect) {
                    shapeSelect.innerHTML = `
                        <option value="polygon">\u{1F333} Custom Forest Grove Fill (Perimeter Handles)</option>
                        <option value="spline">\u{1F332} Curved Treeline / Hedgerow (Path &amp; Width Handles)</option>
                    `;
                }
            } else {
                if (shapeHint) {
                    shapeHint.innerHTML = `\u{1F4A7} <b style="color: var(--primary);">Water Shape Handles Active:</b> Drag <b>cyan circles</b> on the map to shape the pond/river, <b>amber diamonds</b> to widen banks, or click <b>+</b> to add handles!`;
                }
                if (shapeLabel) shapeLabel.textContent = 'Water / Pond Shape Mode';
                if (shapeSelect) {
                    shapeSelect.innerHTML = `
                        <option value="polygon">\u{1F4A7} Custom Pond / Pool / Lake (Perimeter Handles)</option>
                        <option value="spline">\u{1F30A} Curved River / Stream Path (Bend &amp; Width Handles)</option>
                    `;
                }
            }

            if (shapeSelect && el.config) {
                shapeSelect.value = el.config.shapeMode || (effectiveBase === 'river' ? 'spline' : 'polygon');
            }
        } else {
            if (standardGroup) standardGroup.style.display = 'flex';
            if (riverGroup) riverGroup.style.display = 'none';

            const avgSize = Math.round(Math.sqrt(el.width * el.height));
            const aspect = parseFloat((el.width / Math.max(1, el.height)).toFixed(2));

            const sizeSlider = inspector.querySelector('#inspector-size');
            const sizeVal = inspector.querySelector('#inspector-size-val');
            if (sizeSlider) sizeSlider.value = Math.max(30, Math.min(4000, avgSize));
            if (sizeVal) sizeVal.textContent = `${el.width}\u00D7${el.height}px`;

            const aspectSlider = inspector.querySelector('#inspector-aspect');
            const aspectVal = inspector.querySelector('#inspector-aspect-val');
            if (aspectSlider) aspectSlider.value = Math.max(0.1, Math.min(10.0, aspect));
            if (aspectVal) aspectVal.textContent = `${aspect.toFixed(2)}x`;

            const widthInput = inspector.querySelector('#inspector-width-input');
            const heightInput = inspector.querySelector('#inspector-height-input');
            if (widthInput) widthInput.value = el.width;
            if (heightInput) heightInput.value = el.height;
        }

        // 3. Sync 3D Perspective Tilt X/Y & Rotation Angle (All Elements)
        const tiltX = (el.config && el.config.tiltX) || 0;
        const tiltY = (el.config && el.config.tiltY) || 0;
        const rot = Math.round(((el.rotation || 0) % 360 + 360) % 360);

        const tiltXSlider = inspector.querySelector('#inspector-tilt-x');
        const tiltXVal = inspector.querySelector('#inspector-tilt-x-val');
        if (tiltXSlider) tiltXSlider.value = tiltX;
        if (tiltXVal) tiltXVal.textContent = `${tiltX}\u00B0`;

        const tiltYSlider = inspector.querySelector('#inspector-tilt-y');
        const tiltYVal = inspector.querySelector('#inspector-tilt-y-val');
        if (tiltYSlider) tiltYSlider.value = tiltY;
        if (tiltYVal) tiltYVal.textContent = `${tiltY}\u00B0`;

        const rotSlider = inspector.querySelector('#inspector-rotation');
        const rotVal = inspector.querySelector('#inspector-rotation-val');
        if (rotSlider) rotSlider.value = rot;
        if (rotVal) rotVal.textContent = `${rot}\u00B0`;

        // Sync Perspective Preset buttons active state
        const presetBtns = inspector.querySelectorAll('.perspective-preset-btn');
        presetBtns.forEach(btn => {
            const px = parseInt(btn.dataset.tiltX, 10);
            const py = parseInt(btn.dataset.tiltY, 10);
            if (Math.abs(tiltX - px) <= 3 && Math.abs(tiltY - py) <= 3) {
                btn.classList.add('active');
                btn.style.borderColor = 'var(--accent-amber)';
                btn.style.background = 'rgba(255, 170, 0, 0.22)';
                btn.style.color = 'var(--accent-amber)';
            } else {
                btn.classList.remove('active');
                btn.style.borderColor = '';
                btn.style.background = '';
                btn.style.color = '';
            }
        });

        // 4. Sync Speed, Intensity, Opacity & Quantity (All Elements)
        const spd = (el.config && (el.config.speed !== undefined ? el.config.speed : el.config.flowSpeed)) || 1.0;
        const inten = (el.config && el.config.intensity !== undefined) ? el.config.intensity : 1.0;
        const opac = (el.config && el.config.opacity !== undefined) ? el.config.opacity : 0.9;

        const speedSlider = inspector.querySelector('#inspector-speed');
        const speedVal = inspector.querySelector('#inspector-speed-val');
        if (speedSlider) speedSlider.value = spd;
        if (speedVal) speedVal.textContent = `${spd.toFixed(1)}x`;

        const intenSlider = inspector.querySelector('#inspector-intensity');
        const intenVal = inspector.querySelector('#inspector-intensity-val');
        if (intenSlider) intenSlider.value = inten;
        if (intenVal) intenVal.textContent = `${Math.round(inten * 100)}%`;

        const opacSlider = inspector.querySelector('#inspector-opacity');
        const opacVal = inspector.querySelector('#inspector-opacity-val');
        if (opacSlider) opacSlider.value = opac;
        if (opacVal) opacVal.textContent = `${Math.round(opac * 100)}%`;

        const qty = (el.config && el.config.quantity !== undefined) ? el.config.quantity : 1.0;
        const qtySlider = inspector.querySelector('#inspector-quantity');
        const qtyVal = inspector.querySelector('#inspector-quantity-val');
        if (qtySlider) qtySlider.value = qty;
        if (qtyVal) qtyVal.textContent = `${Math.round(qty * 100)}%`;

        // 4B. Sync Fractal Roughness & Internal Element Size
        const fracRough = (el.config && el.config.fractalRoughness !== undefined) ? parseFloat(el.config.fractalRoughness) : 0.75;
        const elScale = (el.config && el.config.elementScale !== undefined)
            ? parseFloat(el.config.elementScale)
            : ((el.config && el.config.scale !== undefined) ? parseFloat(el.config.scale) : 1.0);

        const fracSlider = inspector.querySelector('#inspector-fractal-roughness');
        const fracVal = inspector.querySelector('#inspector-fractal-roughness-val');
        if (fracSlider) fracSlider.value = fracRough;
        if (fracVal) fracVal.textContent = `${Math.round(fracRough * 100)}%`;

        const elScaleSlider = inspector.querySelector('#inspector-element-scale');
        const elScaleVal = inspector.querySelector('#inspector-element-scale-val');
        if (elScaleSlider) elScaleSlider.value = elScale;
        if (elScaleVal) elScaleVal.textContent = `${elScale.toFixed(2)}x (${Math.round(elScale * 100)}%)`;

        // 4C. Sync Path Width Variance (Organic Taper & Jitter)
        const widthVar = (el.config && el.config.widthVariance !== undefined) ? parseFloat(el.config.widthVariance) : 0.0;
        const widthVarSlider = inspector.querySelector('#inspector-width-variance');
        const widthVarVal = inspector.querySelector('#inspector-width-variance-val');
        if (widthVarSlider) widthVarSlider.value = widthVar;
        if (widthVarVal) {
            const pct = Math.round(widthVar * 100);
            widthVarVal.textContent = pct === 0 ? '0% (Uniform)' : `${pct}% (Organic)`;
        }
        inspector.querySelectorAll('.inspector-variance-chip').forEach(chip => {
            const cv = parseFloat(chip.getAttribute('data-variance') || 0);
            chip.classList.toggle('active', Math.abs(cv - widthVar) < 0.05);
        });

        const twGroup = inspector.querySelector('#inspector-tumbleweed-group');
        const twSlider = inspector.querySelector('#inspector-tumbleweed-count');
        const twVal = inspector.querySelector('#inspector-tumbleweed-count-val');
        if (twGroup) {
            const baseType = (catDef && catDef.base) || el.type;
            if (baseType === 'tumbleweed') {
                twGroup.style.display = 'block';
                const count = (el.config && el.config.count !== undefined) ? el.config.count : 12;
                if (twSlider) twSlider.value = count;
                if (twVal) twVal.textContent = `${count}`;
            } else {
                twGroup.style.display = 'none';
            }
        }

        // 5. Sync Color Grading: Hue Shift, Saturation, Brightness & Blend Mode
        const hue = (el.config && el.config.hue) ? parseInt(el.config.hue, 10) : 0;
        const sat = (el.config && el.config.saturation !== undefined) ? parseInt(el.config.saturation, 10) : 100;
        const bri = (el.config && el.config.brightness !== undefined) ? parseInt(el.config.brightness, 10) : 100;
        const blend = (el.config && el.config.blendMode) || 'normal';

        const hueSlider = inspector.querySelector('#inspector-hue');
        const hueVal = inspector.querySelector('#inspector-hue-val');
        if (hueSlider) hueSlider.value = hue;
        if (hueVal) hueVal.textContent = `${hue > 0 ? '+' : ''}${hue}\u00B0`;

        inspector.querySelectorAll('.inspector-hue-chip').forEach(chip => {
            const chipHue = parseInt(chip.getAttribute('data-hue') || '0', 10);
            chip.classList.toggle('active', Math.abs(chipHue - hue) <= 4);
        });

        const satSlider = inspector.querySelector('#inspector-saturation');
        const satVal = inspector.querySelector('#inspector-saturation-val');
        if (satSlider) satSlider.value = sat;
        if (satVal) satVal.textContent = `${sat}%`;

        const briSlider = inspector.querySelector('#inspector-brightness');
        const briVal = inspector.querySelector('#inspector-brightness-val');
        if (briSlider) briSlider.value = bri;
        if (briVal) briVal.textContent = `${bri}%`;

        const blendSelect = inspector.querySelector('#inspector-blend-mode');
        if (blendSelect) blendSelect.value = blend;

        // 6. Sync Edge Blur / Sharpen & Soft Edge Feathering
        const edgeBS = (el.config && el.config.edgeBlurSharpen) ? parseInt(el.config.edgeBlurSharpen, 10) : 0;
        const feather = (el.config && el.config.edgeFeather) ? parseInt(el.config.edgeFeather, 10) : 0;

        const edgeBSSlider = inspector.querySelector('#inspector-edge-blur-sharpen');
        const edgeBSVal = inspector.querySelector('#inspector-edge-blur-sharpen-val');
        if (edgeBSSlider) edgeBSSlider.value = edgeBS;
        if (edgeBSVal) {
            if (edgeBS < 0) edgeBSVal.textContent = `${edgeBS} (Blur ${(Math.abs(edgeBS) * 0.15).toFixed(1)}px)`;
            else if (edgeBS > 0) edgeBSVal.textContent = `+${edgeBS} (Sharpen)`;
            else edgeBSVal.textContent = `0 (Normal)`;
        }

        const featherSlider = inspector.querySelector('#inspector-edge-feather');
        const featherVal = inspector.querySelector('#inspector-edge-feather-val');
        if (featherSlider) featherSlider.value = feather;
        if (featherVal) featherVal.textContent = `${feather}%`;
    }

    // ------------------------------------------------------------------------
    // EVENT BINDINGS
    // ------------------------------------------------------------------------

    bindEvents() {
        // Navigation button panel toggling
        document.querySelectorAll('.nav-btn[data-panel]').forEach(btn => {
            btn.addEventListener('click', () => {
                const panelId = btn.getAttribute('data-panel');
                this.togglePanel(panelId);
            });
        });

        // Panel close buttons (close only the specific panel; if closing inspector, deselect element)
        document.querySelectorAll('.panel-close-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const panel = btn.closest('.floating-panel');
                if (panel && panel.id === 'element-inspector-panel') {
                    panel.classList.remove('active');
                    if (window.livingElementsEngine) {
                        window.livingElementsEngine.selectElement(null);
                    }
                } else if (panel) {
                    panel.classList.remove('active');
                    const navBtn = document.querySelector(`.nav-btn[data-panel="${panel.id}"]`);
                    if (navBtn) navBtn.classList.remove('active');
                    if (this.activePanelId === panel.id) this.activePanelId = null;
                } else {
                    this.closeAllPanels(false);
                }
            });
        });

        // Blackout button
        const btnBlackout = document.getElementById('btn-blackout');
        if (btnBlackout) {
            btnBlackout.addEventListener('click', () => this.toggleBlackout());
        }

        // Fullscreen button
        const btnFullscreen = document.getElementById('btn-fullscreen');
        if (btnFullscreen) {
            btnFullscreen.addEventListener('click', () => this.toggleFullscreen());
        }

        // Hide UI button
        const btnHideUI = document.getElementById('btn-hide-ui');
        if (btnHideUI) {
            btnHideUI.addEventListener('click', () => this.toggleUI(true));
        }

        // Preset battle maps clicks
        document.querySelectorAll('.preset-card').forEach(card => {
            card.addEventListener('click', () => {
                const presetId = card.getAttribute('data-preset');
                this.loadPreset(presetId);
            });
        });

        // Drag & Drop File OR Cross-Window Browser Image Drop on viewport, plus #map-file-input change
        const dropzone = document.getElementById('map-dropzone');
        const fileInput = document.getElementById('map-file-input');

        if (fileInput) {
            fileInput.addEventListener('change', (e) => {
                if (e.target.files && e.target.files[0]) {
                    this.handleFileUpload(e.target.files[0]);
                }
            });
        }

        if (dropzone && fileInput) {
            dropzone.addEventListener('click', () => fileInput.click());
        }

        window.addEventListener('dragover', (e) => {
            e.preventDefault();
            if (dropzone) dropzone.classList.add('dragover');
        });
        window.addEventListener('dragleave', (e) => {
            if (e.clientX === 0 && e.clientY === 0 && dropzone) {
                dropzone.classList.remove('dragover');
            }
        });
        window.addEventListener('drop', (e) => {
            e.preventDefault();
            if (dropzone) dropzone.classList.remove('dragover');

            // 1. Local file or dragged image blob
            if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                this.handleFileUpload(e.dataTransfer.files[0]);
                return;
            }

            // 2. Dragged directly from a popout browser tab (HTML img or URI)
            const htmlData = e.dataTransfer.getData('text/html');
            if (htmlData) {
                const match = htmlData.match(/<img[^>]+src=["']([^"']+)["']/i);
                if (match && match[1]) {
                    const imgUrl = match[1].replace(/&amp;/g, '&');
                    this.loadAndProcessMapImage(imgUrl, 'Dropped Browser Map', false, 'Web Drop');
                    return;
                }
            }

            const uriData = e.dataTransfer.getData('text/uri-list') || e.dataTransfer.getData('text/plain');
            if (uriData && /^https?:\/\//i.test(uriData.trim())) {
                const cleanUrl = uriData.trim().split('\n')[0].trim();
                const isVid = cleanUrl.endsWith('.mp4') || cleanUrl.endsWith('.webm');
                if (isVid) {
                    this.setMap(cleanUrl, true, 'Dropped Web Video Map');
                } else {
                    this.loadAndProcessMapImage(cleanUrl, 'Dropped Web Map', false, 'Web Drop');
                }
            }
        });

        // Global Clipboard Paste (Ctrl+V) for pasting copied maps or image URLs from Gemini / AI Studio / Google Images popouts
        window.addEventListener('paste', (e) => {
            if (!e.clipboardData) return;

            // 1. Check for image blob in clipboard
            if (e.clipboardData.items) {
                for (const item of e.clipboardData.items) {
                    if (item.type && item.type.startsWith('image/')) {
                        const blob = item.getAsFile();
                        if (blob) {
                            e.preventDefault();
                            this.handleFileUpload(blob, 'Pasted Clipboard Map');
                            return;
                        }
                    }
                }
            }

            // 2. If not typing inside an input/textarea, also accept pasted image URLs (https://... or data:image/...)
            const activeTag = document.activeElement ? document.activeElement.tagName : '';
            if (activeTag !== 'INPUT' && activeTag !== 'TEXTAREA') {
                const text = e.clipboardData.getData('text/plain');
                if (text && (/^https?:\/\/\S+/i.test(text.trim()) || /^data:image\//i.test(text.trim()))) {
                    e.preventDefault();
                    this.loadAndProcessMapImage(text.trim(), 'Pasted URL Map', false, 'Clipboard URL');
                }
            }
        });

        // Listen for cross-window EXTERNAL_IMAGE_PASTE messages (matching M&M GM Suite MapGen companion protocol)
        window.addEventListener('message', (e) => {
            if (e.data && e.data.type === 'EXTERNAL_IMAGE_PASTE' && e.data.dataUrl) {
                this.loadAndProcessMapImage(e.data.dataUrl, 'Companion Pasted Map', false, 'Companion');
            }
        });

        // URL Map Loader (Maps Panel)
        const urlInput = document.getElementById('map-url-input');
        const btnLoadUrl = document.getElementById('btn-load-map-url');
        if (btnLoadUrl && urlInput) {
            btnLoadUrl.addEventListener('click', () => {
                const url = urlInput.value.trim();
                if (url) {
                    const isVid = url.endsWith('.mp4') || url.endsWith('.webm');
                    if (isVid) {
                        this.setMap(url, true, 'URL Video Map');
                    } else {
                        this.loadAndProcessMapImage(url, 'URL Map', false, 'Direct URL');
                    }
                    urlInput.value = '';
                }
            });
        }

        // Keystone Panel controls
        const btnCalibrate = document.getElementById('btn-toggle-calibrate');
        if (btnCalibrate) {
            btnCalibrate.addEventListener('click', () => {
                window.keystoneEngine.toggleCalibrating();
                btnCalibrate.classList.toggle('active', window.keystoneEngine.isCalibrating);
            });
        }

        const btnResetKeystone = document.getElementById('btn-reset-keystone');
        if (btnResetKeystone) {
            btnResetKeystone.addEventListener('click', () => {
                if (confirm('Reset keystone corner pins to full edge-to-edge screen?')) {
                    window.keystoneEngine.reset(0.0);
                    const slider = document.getElementById('keystone-inset-slider');
                    if (slider) slider.value = 0.0;
                    const val = document.getElementById('keystone-inset-val');
                    if (val) val.textContent = '0.0%';
                    document.querySelectorAll('.keystone-inset-chip').forEach(c => {
                        c.classList.toggle('active', c.getAttribute('data-inset') === '0');
                    });
                }
            });
        }

        const patternSelect = document.getElementById('keystone-test-pattern');
        if (patternSelect) {
            patternSelect.addEventListener('change', (e) => {
                window.keystoneEngine.setTestPattern(e.target.value);
            });
        }

        // Corner Inset Slider & Preset Chips
        const insetSlider = document.getElementById('keystone-inset-slider');
        const insetVal = document.getElementById('keystone-inset-val');
        if (insetSlider) {
            insetSlider.addEventListener('input', (e) => {
                const val = parseFloat(e.target.value);
                if (insetVal) insetVal.textContent = `${val.toFixed(1)}%`;
                window.keystoneEngine.setInset(val);
                document.querySelectorAll('.keystone-inset-chip').forEach(c => {
                    c.classList.toggle('active', Math.abs(parseFloat(c.getAttribute('data-inset')) - val) < 0.2);
                });
            });
        }

        document.querySelectorAll('.keystone-inset-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                document.querySelectorAll('.keystone-inset-chip').forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                const val = parseFloat(chip.getAttribute('data-inset'));
                if (insetSlider) insetSlider.value = val;
                if (insetVal) insetVal.textContent = `${val.toFixed(1)}%`;
                window.keystoneEngine.setInset(val);
            });
        });

        // Touch Screen Corner Selector Chips
        document.querySelectorAll('.keystone-corner-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const corner = btn.getAttribute('data-corner');
                window.keystoneEngine.setActiveCorner(corner);
            });
        });

        // Touch Screen Step Selector Chips
        let currentKeystoneNudgeStep = 0.2;
        document.querySelectorAll('.keystone-step-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                document.querySelectorAll('.keystone-step-chip').forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                currentKeystoneNudgeStep = parseFloat(chip.getAttribute('data-step'));
            });
        });

        // Touch Screen D-Pad Nudge Buttons
        document.querySelectorAll('.btn-nudge-keystone').forEach(btn => {
            btn.addEventListener('click', () => {
                const nx = parseFloat(btn.getAttribute('data-nudge-x')) * currentKeystoneNudgeStep;
                const ny = parseFloat(btn.getAttribute('data-nudge-y')) * currentKeystoneNudgeStep;
                const active = window.keystoneEngine.activeCorner || 'tl';
                window.keystoneEngine.nudge(active, nx, ny);
            });
        });

        // Grid Controls
        this.bindGridControls();

        // Living Elements Controls
        this.bindLivingElementsControls();

        // Dynamic Scenes (Map State Morphing, 3D Parallax & Infinite Vehicle Chase) Controls
        this.bindDynamicScenesControls();

        // Intuitive Before/After Phased Map Shift Controls in Map Panel
        this.bindQuickMapShiftControls();

        // AI Generator Controls
        this.bindAIGeneratorControls();

        // Projector Filter Controls
        this.bindProjectorControls();

        // Pan & Zoom Listeners on viewport
        this.bindPanZoomListeners();

        // Global Keyboard Shortcuts
        this.bindKeyboardShortcuts();

        // Readme & User Manual Panel Controls (Hotkey: F9)
        this.bindReadmeControls();
    }

    bindReadmeControls() {
        const readmePanel = document.getElementById('readme-panel');
        if (!readmePanel) return;

        // Quick Jump Chips
        readmePanel.querySelectorAll('.readme-jump-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                const targetId = chip.getAttribute('data-target');
                const targetEl = readmePanel.querySelector(`#${targetId}`);
                if (targetEl) {
                    targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Search Filter inside Readme
        const searchInput = readmePanel.querySelector('#readme-search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase().trim();
                const cards = readmePanel.querySelectorAll('.readme-card');
                cards.forEach(card => {
                    const text = card.textContent.toLowerCase();
                    card.style.display = (!query || text.includes(query)) ? 'flex' : 'none';
                });
            });
        }

        // Open raw README.md
        const openRawBtn = readmePanel.querySelector('#btn-open-raw-readme');
        if (openRawBtn) {
            openRawBtn.addEventListener('click', () => {
                window.open('README.md', '_blank');
            });
        }
    }

    handleFileUpload(file, customLabel) {
        const isVideo = (file.type && file.type.startsWith('video/')) || (file.name && (file.name.endsWith('.mp4') || file.name.endsWith('.webm')));
        const label = customLabel || file.name || 'Imported Map';
        const reader = new FileReader();
        reader.onload = async (e) => {
            const dataUrl = e.target.result;
            if (isVideo) {
                this.setMap(dataUrl, true, label);
            } else {
                await this.loadAndProcessMapImage(dataUrl, label, false, 'Imported');
            }
        };
        reader.readAsDataURL(file);
    }

    async copyMapToClipboard() {
        if (!window.aiMapGenerator || !this.currentMap || !this.currentMap.src || this.currentMap.isVideo) {
            return false;
        }
        try {
            const targetW = window.aiMapGenerator.state ? window.aiMapGenerator.state.w : 3840;
            const targetH = window.aiMapGenerator.state ? window.aiMapGenerator.state.h : 2160;
            const canvas = window.aiMapGenerator.renderFinalAdjustedCanvas(this.dom.mapImage, targetW, targetH, this.imageAdjustments);
            const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/png'));
            if (blob && navigator.clipboard && window.ClipboardItem) {
                await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
                return { width: targetW, height: targetH };
            }
        } catch (err) {
            console.warn('Clipboard image copy fallback:', err);
        }
        return false;
    }

    async saveMapToDisk(srcUrl, mapName = 'battlemap') {
        const targetUrl = srcUrl || (this.currentMap && this.currentMap.src);
        if (!targetUrl) {
            alert('No map is currently loaded to save.');
            return;
        }

        const safeName = (mapName || this.currentMap.name || 'battlemap')
            .toLowerCase()
            .replace(/[^a-z0-9-_]+/g, '-')
            .replace(/^-+|-+$/g, '') || 'battlemap';

        try {
            // When exporting the active map image, bake target 4K resolution, fit/crop mode, brightness, contrast, saturation & sharpness
            if (!srcUrl && !this.currentMap.isVideo && window.aiMapGenerator && this.dom.mapImage && this.dom.mapImage.complete && this.dom.mapImage.naturalWidth > 0) {
                const targetW = window.aiMapGenerator.state ? window.aiMapGenerator.state.w : 3840;
                const targetH = window.aiMapGenerator.state ? window.aiMapGenerator.state.h : 2160;
                const canvas = window.aiMapGenerator.renderFinalAdjustedCanvas(this.dom.mapImage, targetW, targetH, this.imageAdjustments);
                const bakedUrl = canvas.toDataURL('image/jpeg', 0.94);
                const a = document.createElement('a');
                a.href = bakedUrl;
                a.download = `${safeName}-${targetW}x${targetH}.jpg`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                return;
            }

            if (targetUrl.startsWith('data:')) {
                const a = document.createElement('a');
                a.href = targetUrl;
                a.download = `${safeName}.jpg`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                return;
            }

            // Try fetching blob for clean direct file download
            const resp = await fetch(targetUrl, { mode: 'cors' });
            const blob = await resp.blob();
            const blobUrl = URL.createObjectURL(blob);
            const ext = blob.type.includes('png') ? 'png' : (blob.type.includes('webp') ? 'webp' : 'jpg');
            const a = document.createElement('a');
            a.href = blobUrl;
            a.download = `${safeName}.${ext}`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            setTimeout(() => URL.revokeObjectURL(blobUrl), 5000);
        } catch (err) {
            // Fallback if external host blocks CORS blob fetch: open image in new tab to right-click Save
            window.open(targetUrl, '_blank', 'noopener');
        }
    }

    bindGridControls() {
        // Grid Type chips
        document.querySelectorAll('.grid-type-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                document.querySelectorAll('.grid-type-chip').forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                const type = chip.getAttribute('data-type');
                window.gridEngine.setConfig({ type: type });
            });
        });

        // Grid Size Slider (1 inch calibrator)
        const sizeSlider = document.getElementById('grid-size-slider');
        const sizeDisplay = document.getElementById('grid-size-display');
        if (sizeSlider) {
            sizeSlider.addEventListener('input', (e) => {
                const val = parseInt(e.target.value, 10);
                if (sizeDisplay) sizeDisplay.textContent = `${val}px`;
                window.gridEngine.setConfig({ size: val });
            });
        }

        // Grid Opacity Slider
        const opacitySlider = document.getElementById('grid-opacity-slider');
        const opacityDisplay = document.getElementById('grid-opacity-display');
        if (opacitySlider) {
            opacitySlider.addEventListener('input', (e) => {
                const val = parseFloat(e.target.value);
                if (opacityDisplay) opacityDisplay.textContent = `${Math.round(val * 100)}%`;
                window.gridEngine.setConfig({ opacity: val });
            });
        }

        // Grid Thickness Slider
        const widthSlider = document.getElementById('grid-width-slider');
        if (widthSlider) {
            widthSlider.addEventListener('input', (e) => {
                window.gridEngine.setConfig({ lineWidth: parseFloat(e.target.value) });
            });
        }

        // Color Swatches
        document.querySelectorAll('.grid-color-swatch').forEach(swatch => {
            swatch.addEventListener('click', () => {
                document.querySelectorAll('.grid-color-swatch').forEach(s => s.classList.remove('active'));
                swatch.classList.add('active');
                const color = swatch.getAttribute('data-color');
                window.gridEngine.setConfig({ color: color, glowColor: color });
            });
        });

        // Grid Line Style
        const styleSelect = document.getElementById('grid-style-select');
        if (styleSelect) {
            styleSelect.addEventListener('change', (e) => {
                window.gridEngine.setConfig({ style: e.target.value });
            });
        }

        // Grid Coordinates Toggle
        const coordToggle = document.getElementById('grid-coords-toggle');
        if (coordToggle) {
            coordToggle.addEventListener('change', (e) => {
                window.gridEngine.setConfig({ showCoordinates: e.target.checked });
            });
        }

        // Physical Mini Calibrator Overlay Toggle
        const calibToggle = document.getElementById('grid-calibrator-toggle');
        if (calibToggle) {
            calibToggle.addEventListener('change', (e) => {
                window.gridEngine.setConfig({ showCalibrator: e.target.checked });
            });
        }

        // Grid Offset Nudge Buttons
        document.querySelectorAll('.grid-nudge-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const dx = parseInt(btn.getAttribute('data-dx') || 0, 10);
                const dy = parseInt(btn.getAttribute('data-dy') || 0, 10);
                const cur = window.gridEngine.getState();
                window.gridEngine.setConfig({
                    offsetX: cur.offsetX + dx,
                    offsetY: cur.offsetY + dy
                });
            });
        });
    }

    bindLivingElementsControls() {
        // Drop new living element buttons or set as active Freehand Draw tool
        document.querySelectorAll('.btn-add-element').forEach(btn => {
            btn.addEventListener('click', () => {
                const type = btn.getAttribute('data-element-type');
                const eng = window.livingElementsEngine;
                if (eng && eng.isDrawingMode) {
                    eng.setDrawTargetType(type);
                    return;
                }
                // Drops at the centre of the CURRENT view (respects map pan / zoom & the
                // "new effects Scale & Move with Map" preference inside the engine)
                if (eng) eng.addElement(type);
            });
        });

        // Open Element Attributes Popup Button
        const openInspBtn = document.getElementById('btn-open-element-inspector');
        if (openInspBtn) {
            openInspBtn.addEventListener('click', () => {
                const eng = window.livingElementsEngine;
                if (!eng) return;
                let targetId = eng.selectedElementId;
                if (!targetId && eng.elements && eng.elements.length > 0) {
                    targetId = eng.elements[eng.elements.length - 1].id;
                }
                if (targetId) {
                    eng.selectElement(targetId);
                } else {
                    alert('Drop any animated feature onto the map first, or click an existing feature on the map to adjust its attributes!');
                }
            });
        }

        // Lock Elements Toggle
        const lockBtn = document.getElementById('btn-lock-elements');
        if (lockBtn) {
            lockBtn.addEventListener('click', () => {
                const cur = window.livingElementsEngine.isLocked;
                window.livingElementsEngine.setLocked(!cur);
                lockBtn.classList.toggle('active', !cur);
                lockBtn.innerHTML = !cur ? '\u{1F512} Locked (Touch-Safe)' : '\u{1F513} Unlock Overlays';
            });
        }

        // Map View: Pan Mode, Zoom, Reset, plus bulk Lock / Pin controls
        const fxPanBtn = document.getElementById('btn-fx-pan-mode');
        if (fxPanBtn) fxPanBtn.addEventListener('click', () => this.togglePanMode());
        const fxZoomOut = document.getElementById('btn-fx-zoom-out');
        if (fxZoomOut) fxZoomOut.addEventListener('click', () => this.zoomBy(0.87));
        const fxZoomIn = document.getElementById('btn-fx-zoom-in');
        if (fxZoomIn) fxZoomIn.addEventListener('click', () => this.zoomBy(1.15));
        const fxResetView = document.getElementById('btn-fx-reset-view');
        if (fxResetView) fxResetView.addEventListener('click', () => this.resetPanZoom());

        const fxNewAnchor = document.getElementById('fx-new-anchor-default');
        if (fxNewAnchor) {
            fxNewAnchor.addEventListener('change', () => {
                window.livingElementsEngine.anchorNewToMap = fxNewAnchor.checked;
            });
            window.livingElementsEngine.anchorNewToMap = fxNewAnchor.checked;
        }
        const fxLockAll = document.getElementById('btn-fx-lock-all');
        if (fxLockAll) fxLockAll.addEventListener('click', () => window.livingElementsEngine.lockAllElements(true));
        const fxUnlockAll = document.getElementById('btn-fx-unlock-all');
        if (fxUnlockAll) fxUnlockAll.addEventListener('click', () => window.livingElementsEngine.lockAllElements(false));
        const fxAnchorAll = document.getElementById('btn-fx-anchor-all');
        if (fxAnchorAll) fxAnchorAll.addEventListener('click', () => window.livingElementsEngine.setAnchorAllToMap(true));

        // Clear All Elements
        const clearBtn = document.getElementById('btn-clear-elements');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                if (confirm('Clear all dropped animated overlays from the map?')) {
                    window.livingElementsEngine.clearAll();
                }
            });
        }

        // Freehand Draw FX Tool Controls
        const drawToggleBtn = document.getElementById('btn-toggle-draw-mode');
        if (drawToggleBtn) {
            drawToggleBtn.addEventListener('click', () => {
                if (window.livingElementsEngine) window.livingElementsEngine.toggleDrawMode();
            });
        }

        const bannerCloseBtn = document.getElementById('btn-draw-banner-close');
        if (bannerCloseBtn) {
            bannerCloseBtn.addEventListener('click', () => {
                if (window.livingElementsEngine) window.livingElementsEngine.setDrawMode(false);
            });
        }

        const hudDrawBtn = document.getElementById('hud-btn-draw');
        if (hudDrawBtn) {
            hudDrawBtn.addEventListener('click', () => {
                if (window.livingElementsEngine) window.livingElementsEngine.toggleDrawMode();
            });
        }

        document.querySelectorAll('.draw-submode-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const sm = btn.getAttribute('data-submode');
                if (window.livingElementsEngine) window.livingElementsEngine.setDrawSubMode(sm);
            });
        });

        const drawWidthSlider = document.getElementById('fx-draw-width-slider');
        if (drawWidthSlider) {
            drawWidthSlider.addEventListener('input', (e) => {
                if (window.livingElementsEngine) window.livingElementsEngine.setDrawStrokeWidth(e.target.value);
            });
        }

        document.querySelectorAll('.fx-draw-width-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                const w = parseInt(chip.getAttribute('data-width'), 10);
                if (window.livingElementsEngine) window.livingElementsEngine.setDrawStrokeWidth(w);
            });
        });

        const drawVarSlider = document.getElementById('fx-draw-variance-slider');
        if (drawVarSlider) {
            drawVarSlider.addEventListener('input', (e) => {
                if (window.livingElementsEngine) window.livingElementsEngine.setDrawWidthVariance(e.target.value);
            });
        }

        document.querySelectorAll('.fx-draw-variance-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                const v = parseFloat(chip.getAttribute('data-variance') || 0);
                if (window.livingElementsEngine) window.livingElementsEngine.setDrawWidthVariance(v);
            });
        });

        // 16-Level Undo / Redo Buttons & Live Badge Counters
        const undoBtns = document.querySelectorAll('.btn-undo-action');
        const redoBtns = document.querySelectorAll('.btn-redo-action');
        const updateUndoRedoUI = (status) => {
            const st = status || (window.livingElementsEngine && window.livingElementsEngine.getHistoryStatus
                ? window.livingElementsEngine.getHistoryStatus()
                : { undoCount: 0, redoCount: 0, maxUndo: 16, canUndo: false, canRedo: false });
            undoBtns.forEach(btn => {
                btn.disabled = !st.canUndo;
                const badge = btn.querySelector('.undo-step-badge');
                if (badge) badge.textContent = `${st.undoCount}/${st.maxUndo}`;
            });
            redoBtns.forEach(btn => {
                btn.disabled = !st.canRedo;
                const badge = btn.querySelector('.redo-step-badge');
                if (badge) badge.textContent = st.redoCount > 0 ? `${st.redoCount}` : '';
            });
        };

        undoBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                if (window.livingElementsEngine && window.livingElementsEngine.undo) {
                    window.livingElementsEngine.undo();
                }
            });
        });

        redoBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                if (window.livingElementsEngine && window.livingElementsEngine.redo) {
                    window.livingElementsEngine.redo();
                }
            });
        });

        if (window.livingElementsEngine && window.livingElementsEngine.onHistoryChange) {
            window.livingElementsEngine.onHistoryChange((status) => {
                updateUndoRedoUI(status);
                // Sync weather chips & sliders if weather was undone/redone
                const w = window.livingElementsEngine.weather;
                if (w) {
                    document.querySelectorAll('.weather-chip').forEach(c => {
                        c.classList.toggle('active', c.getAttribute('data-weather') === w.type);
                    });
                    const wIntSlider = document.getElementById('weather-intensity-slider');
                    const wIntVal = document.getElementById('weather-intensity-val');
                    if (wIntSlider && w.intensity !== undefined) {
                        wIntSlider.value = w.intensity;
                        if (wIntVal) wIntVal.textContent = `${Math.round(w.intensity * 100)}%`;
                    }
                    const wQtySlider = document.getElementById('weather-quantity-slider');
                    const wQtyVal = document.getElementById('weather-quantity-val');
                    if (wQtySlider && w.quantity !== undefined) {
                        wQtySlider.value = w.quantity;
                        if (wQtyVal) wQtyVal.textContent = `${Math.round(w.quantity * 100)}%`;
                    }
                }
            });
            updateUndoRedoUI();
        }

        // Atmospheric Weather Chips
        document.querySelectorAll('.weather-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                document.querySelectorAll('.weather-chip').forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                const weatherType = chip.getAttribute('data-weather');
                window.livingElementsEngine.setWeather(weatherType);
            });
        });

        // Weather Intensity & Quantity Sliders
        const weatherSlider = document.getElementById('weather-intensity-slider');
        const weatherIntensityVal = document.getElementById('weather-intensity-val');
        if (weatherSlider) {
            weatherSlider.addEventListener('input', (e) => {
                const val = parseFloat(e.target.value);
                if (weatherIntensityVal) weatherIntensityVal.textContent = `${Math.round(val * 100)}%`;
                const cur = window.livingElementsEngine.weather;
                window.livingElementsEngine.setWeather(cur.type, val, cur.windAngle, cur.quantity);
            });
        }

        const weatherQtySlider = document.getElementById('weather-quantity-slider');
        const weatherQtyVal = document.getElementById('weather-quantity-val');
        if (weatherQtySlider) {
            weatherQtySlider.addEventListener('input', (e) => {
                const val = parseFloat(e.target.value);
                if (weatherQtyVal) weatherQtyVal.textContent = `${Math.round(val * 100)}%`;
                window.livingElementsEngine.setWeatherQuantity(val);
            });
        }

        // 375 Deduplicated Living FX Controls: 5 Genre Chips, 3 Physical Geometry Tabs, & Search
        const genreChips = document.querySelectorAll('.fx-genre-chip');
        const sectionTabs = document.querySelectorAll('.fx-section-tab');
        const searchInput = document.getElementById('fx-search-input');
        const countDisplay = document.getElementById('fx-count-display');
        const sectionContainers = document.querySelectorAll('.fx-section-container');
        const groupCards = document.querySelectorAll('.fx-group-card');
        const allItemBtns = document.querySelectorAll('.btn-add-element');

        let activeGenre = 'all';

        const applyFXFilters = () => {
            const query = (searchInput ? searchInput.value : '').trim().toLowerCase();
            const activeSectionTab = document.querySelector('.fx-section-tab.active');
            const selectedSection = activeSectionTab ? activeSectionTab.getAttribute('data-section') : 'drawn';

            // Calculate and update tab counts based on activeGenre
            sectionTabs.forEach(tab => {
                const sec = tab.getAttribute('data-section');
                let count = 0;
                allItemBtns.forEach(btn => {
                    const bSec = btn.getAttribute('data-section');
                    const bGenre = btn.getAttribute('data-genre');
                    if (bSec === sec && (activeGenre === 'all' || bGenre === activeGenre)) {
                        count++;
                    }
                });
                const countSpan = tab.querySelector('.tab-count');
                if (countSpan) countSpan.textContent = count;
            });

            let visibleTotal = 0;

            if (query.length > 0) {
                // In search mode, search across all 375 buttons in all 3 physical sections respecting genre filter
                sectionContainers.forEach(container => { container.style.display = 'block'; });
                groupCards.forEach(card => {
                    let hasMatchingBtn = false;
                    const btns = card.querySelectorAll('.btn-add-element');
                    btns.forEach(btn => {
                        const bGenre = btn.getAttribute('data-genre') || '';
                        if (activeGenre !== 'all' && bGenre !== activeGenre) {
                            btn.style.display = 'none';
                            return;
                        }
                        const txt = (btn.textContent || '').toLowerCase();
                        const title = (btn.getAttribute('title') || '').toLowerCase();
                        const type = (btn.getAttribute('data-element-type') || '').toLowerCase();
                        const subcat = (btn.getAttribute('data-subcat') || '').toLowerCase();
                        if (txt.includes(query) || title.includes(query) || type.includes(query) || subcat.includes(query) || bGenre.includes(query)) {
                            btn.style.display = 'inline-flex';
                            hasMatchingBtn = true;
                            visibleTotal++;
                        } else {
                            btn.style.display = 'none';
                        }
                    });
                    card.style.display = hasMatchingBtn ? 'flex' : 'none';
                    card.classList.toggle('force-expanded', hasMatchingBtn);
                });
                if (countDisplay) {
                    countDisplay.textContent = `Found ${visibleTotal} matching`;
                }
            } else {
                // Normal browsing mode: filter by selected section & active genre
                const targetId = 'fx-section-' + selectedSection;
                sectionContainers.forEach(container => {
                    const id = container.id || '';
                    if (id === targetId) {
                        container.style.display = 'block';
                        container.classList.add('active');
                    } else {
                        container.style.display = 'none';
                        container.classList.remove('active');
                    }
                });

                groupCards.forEach(card => {
                    let hasVisibleInCard = false;
                    const btns = card.querySelectorAll('.btn-add-element');
                    btns.forEach(btn => {
                        const bGenre = btn.getAttribute('data-genre') || '';
                        if (activeGenre === 'all' || bGenre === activeGenre) {
                            btn.style.display = 'inline-flex';
                            hasVisibleInCard = true;
                            visibleTotal++;
                        } else {
                            btn.style.display = 'none';
                        }
                    });
                    // Only show card if it belongs to the active section container and has visible buttons
                    const parentContainer = card.closest('.fx-section-container');
                    const isInActiveSection = parentContainer && parentContainer.id === targetId;
                    if (isInActiveSection) {
                        card.style.display = hasVisibleInCard ? 'flex' : 'none';
                    }
                    card.classList.remove('force-expanded');
                });

                if (countDisplay) {
                    const genreLabels = {
                        all: 'All Genres',
                        cyberpunk: 'Cyberpunk',
                        frontier: 'Weird West',
                        scifi: 'Deep Space',
                        horror: 'Cosmic Horror',
                        fantasy: 'High Fantasy'
                    };
                    const gName = genreLabels[activeGenre] || activeGenre;
                    const secName = selectedSection === 'drawn' ? 'Drawn Paths' : (selectedSection === 'filled' ? 'Filled Areas' : 'Single Props');
                    if (activeGenre === 'all') {
                        countDisplay.textContent = `Showing 125 in ${secName} (375 Total)`;
                    } else {
                        countDisplay.textContent = `Showing 25 in ${secName} (${gName} \u2022 75 Total)`;
                    }
                }
            }
        };

        // Genre Quick-Filter Chips
        genreChips.forEach(chip => {
            chip.addEventListener('click', () => {
                genreChips.forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                activeGenre = chip.getAttribute('data-genre') || 'all';
                applyFXFilters();
            });
        });

        // Collapsible Category Card Headers (click any category title to expand/collapse)
        groupCards.forEach(card => {
            const headerLabel = card.querySelector(':scope > .setting-label');
            if (headerLabel) {
                headerLabel.title = 'Click to expand or collapse this category';
                headerLabel.addEventListener('click', (e) => {
                    e.stopPropagation();
                    if (card.classList.contains('force-expanded')) {
                        card.classList.remove('force-expanded');
                        card.classList.add('collapsed');
                    } else {
                        card.classList.toggle('collapsed');
                    }
                });
            }
        });

        // Collapsible Whole-Map Atmospheric Weather section
        document.querySelectorAll('.fx-collapsible-extra').forEach(extraCard => {
            const headerLabel = extraCard.querySelector(':scope > .setting-label');
            if (headerLabel) {
                headerLabel.title = 'Click to expand or collapse whole-map weather controls';
                headerLabel.addEventListener('click', (e) => {
                    e.stopPropagation();
                    extraCard.classList.toggle('collapsed');
                });
            }
        });

        // Expand All / Collapse All buttons
        const expandAllBtn = document.getElementById('btn-fx-expand-all');
        if (expandAllBtn) {
            expandAllBtn.addEventListener('click', () => {
                groupCards.forEach(card => {
                    card.classList.remove('collapsed');
                });
            });
        }
        const collapseAllBtn = document.getElementById('btn-fx-collapse-all');
        if (collapseAllBtn) {
            collapseAllBtn.addEventListener('click', () => {
                groupCards.forEach(card => {
                    card.classList.remove('force-expanded');
                    card.classList.add('collapsed');
                });
            });
        }

        sectionTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                sectionTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                if (searchInput) searchInput.value = '';
                const section = tab.getAttribute('data-section');
                // Smart sync with Draw Mode submode when tab switches
                const eng = window.livingElementsEngine;
                if (eng) {
                    if (section === 'drawn') {
                        eng.setDrawSubMode('line');
                        eng.setDrawTargetType('uni_river');
                    } else if (section === 'filled') {
                        eng.setDrawSubMode('shape');
                        eng.setDrawTargetType('uni_pond');
                    }
                }
                applyFXFilters();
            });
        });

        if (searchInput) {
            searchInput.addEventListener('input', () => {
                applyFXFilters();
            });
        }

        // Initialize FX panel view
        applyFXFilters();

        // Element Inspector Bindings
        this.bindInspectorControls();
    }

    // Intuitive Before/After Phased Battlemap Shift (Mid-Combat Morphing)
    bindQuickMapShiftControls() {
        if (!window.dynamicSceneEngine) return;
        const dse = window.dynamicSceneEngine;

        const quickChips = document.querySelectorAll('.quick-morph-chip');
        const slider = document.getElementById('quick-morph-slider');
        const sliderVal = document.getElementById('quick-morph-slider-val');
        const badge = document.getElementById('quick-morph-badge');
        const btnInstantFlip = document.getElementById('btn-quick-instant-flip');
        const btnCinematicShift = document.getElementById('btn-quick-cinematic-morph');
        const btnSetPhaseA = document.getElementById('btn-quick-set-phase-a');
        const btnUploadB = document.getElementById('btn-quick-upload-phase-b');
        const fileInputB = document.getElementById('quick-phase-b-file-input');

        const updateDisplay = (progress) => {
            const p = Math.round(progress);
            if (slider) slider.value = p;
            if (sliderVal) sliderVal.textContent = `${p}%`;
            if (badge) {
                if (p === 0) badge.textContent = '0% Phase A';
                else if (p === 100) badge.textContent = '100% Phase B';
                else badge.textContent = `${p}% Morphing`;
            }
            // Sync with Dynamic Scenes panel slider if open
            const dsSlider = document.getElementById('morph-progress-slider');
            const dsVal = document.getElementById('morph-progress-val');
            if (dsSlider) dsSlider.value = p;
            if (dsVal) dsVal.textContent = `${p}%`;
        };

        // Quick Scenario Presets
        quickChips.forEach(chip => {
            chip.addEventListener('click', () => {
                quickChips.forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                const scenario = chip.getAttribute('data-scenario');
                dse.loadMorphScenario(scenario, true);
                updateDisplay(0);
            });
        });

        // Smooth Slider
        if (slider) {
            slider.addEventListener('input', (e) => {
                dse.morphState.isAnimating = false;
                if (!dse.morphState.stateBDataUrl && dse.morphState.activeScenario !== 'custom') {
                    dse.loadMorphScenario(dse.morphState.activeScenario || 'tavern_fire', false);
                }
                const val = parseFloat(e.target.value);
                dse.setMorphProgress(val);
                updateDisplay(val);
            });
        }

        // Instant Flip A/B
        if (btnInstantFlip) {
            btnInstantFlip.addEventListener('click', () => {
                dse.morphState.isAnimating = false;
                if (!dse.morphState.stateBDataUrl && dse.morphState.activeScenario !== 'custom') {
                    dse.loadMorphScenario(dse.morphState.activeScenario || 'tavern_fire', false);
                }
                const cur = dse.morphState.progress;
                const target = cur < 50 ? 100 : 0;
                dse.setMorphProgress(target);
                updateDisplay(target);
            });
        }

        // 3s Cinematic Shift
        if (btnCinematicShift) {
            btnCinematicShift.addEventListener('click', () => {
                if (!dse.morphState.stateBDataUrl && dse.morphState.activeScenario !== 'custom') {
                    dse.loadMorphScenario(dse.morphState.activeScenario || 'tavern_fire', false);
                }
                const cur = dse.morphState.progress;
                const target = cur < 50 ? 100 : 0;
                dse.animateMorphTo(target, 28); // Smooth 3-second transition

                // Sync UI during animation
                const pollInterval = setInterval(() => {
                    if (!dse.morphState.isAnimating) {
                        clearInterval(pollInterval);
                        updateDisplay(dse.morphState.progress);
                    } else {
                        updateDisplay(dse.morphState.progress);
                    }
                }, 50);
            });
        }

        // Use Current Map as Phase A
        if (btnSetPhaseA) {
            btnSetPhaseA.addEventListener('click', () => {
                if (this.currentMap && this.currentMap.src) {
                    dse.morphState.stateADataUrl = this.currentMap.src;
                    const mapImg = document.getElementById('map-image');
                    if (mapImg) mapImg.src = this.currentMap.src;
                    btnSetPhaseA.textContent = '\u2713 Phase A Set';
                    setTimeout(() => { btnSetPhaseA.textContent = 'Use Current Map'; }, 1500);
                }
            });
        }

        // Upload Custom Phase B Map
        if (btnUploadB && fileInputB) {
            btnUploadB.addEventListener('click', () => fileInputB.click());
            fileInputB.addEventListener('change', (e) => {
                if (e.target.files && e.target.files[0]) {
                    const reader = new FileReader();
                    reader.onload = (ev) => {
                        dse.setCustomMorphImage(ev.target.result);
                        dse.setMorphProgress(50);
                        updateDisplay(50);
                        btnUploadB.textContent = '\u2713 Custom B Loaded';
                        setTimeout(() => { btnUploadB.textContent = 'Upload Custom B'; }, 2000);
                    };
                    reader.readAsDataURL(e.target.files[0]);
                }
            });
        }
    }

    bindDynamicScenesControls() {
        if (!window.dynamicSceneEngine) return;
        const dse = window.dynamicSceneEngine;

        // 1. Real-Time Map State Morphing
        const scenarioSelect = document.getElementById('morph-scenario-select');
        const btnLoadScenario = document.getElementById('btn-load-morph-scenario');
        const morphSlider = document.getElementById('morph-progress-slider');
        const blendSelect = document.getElementById('morph-blend-style');
        const btnAnim100 = document.getElementById('btn-morph-animate-100');
        const btnAnim0 = document.getElementById('btn-morph-animate-0');
        const btnUploadB = document.getElementById('btn-upload-morph-b');
        const fileInputB = document.getElementById('morph-b-file-input');

        if (btnLoadScenario && scenarioSelect) {
            btnLoadScenario.addEventListener('click', () => {
                dse.loadMorphScenario(scenarioSelect.value, true);
            });
        }
        if (scenarioSelect) {
            scenarioSelect.addEventListener('change', (e) => {
                if (e.target.value !== 'custom') {
                    dse.loadMorphScenario(e.target.value, true);
                }
            });
        }
        if (morphSlider) {
            morphSlider.addEventListener('input', (e) => {
                dse.morphState.isAnimating = false;
                if (!dse.morphState.stateBDataUrl && dse.morphState.activeScenario !== 'custom') {
                    dse.loadMorphScenario(dse.morphState.activeScenario, false);
                }
                dse.setMorphProgress(parseFloat(e.target.value));
            });
        }
        if (blendSelect) {
            blendSelect.addEventListener('change', (e) => {
                dse.setMorphBlendStyle(e.target.value);
            });
        }
        if (btnAnim100) {
            btnAnim100.addEventListener('click', () => {
                if (!dse.morphState.stateBDataUrl && dse.morphState.activeScenario !== 'custom') {
                    dse.loadMorphScenario(dse.morphState.activeScenario, false);
                }
                dse.animateMorphTo(100, 22);
            });
        }
        if (btnAnim0) {
            btnAnim0.addEventListener('click', () => {
                dse.animateMorphTo(0, 25);
            });
        }
        if (btnUploadB && fileInputB) {
            btnUploadB.addEventListener('click', () => fileInputB.click());
            fileInputB.addEventListener('change', (e) => {
                if (e.target.files && e.target.files[0]) {
                    const reader = new FileReader();
                    reader.onload = (ev) => {
                        if (scenarioSelect) scenarioSelect.value = 'custom';
                        dse.setCustomMorphImage(ev.target.result);
                        dse.setMorphProgress(50);
                    };
                    reader.readAsDataURL(e.target.files[0]);
                }
            });
        }

        // 2. Multi-Layer 3D Parallax Vertical Height
        const parallaxModeSelect = document.getElementById('parallax-mode-select');
        const parallaxDepthSlider = document.getElementById('parallax-depth-slider');
        const parallaxDepthVal = document.getElementById('parallax-depth-val');
        const parallaxAutoSway = document.getElementById('parallax-autosway-toggle');

        if (parallaxModeSelect) {
            parallaxModeSelect.addEventListener('change', (e) => {
                dse.setParallaxMode(e.target.value);
            });
        }
        if (parallaxDepthSlider) {
            parallaxDepthSlider.addEventListener('input', (e) => {
                const v = parseFloat(e.target.value);
                if (parallaxDepthVal) parallaxDepthVal.textContent = `${v.toFixed(1)}x`;
                dse.setParallaxDepth(v);
            });
        }
        if (parallaxAutoSway) {
            parallaxAutoSway.addEventListener('change', (e) => {
                dse.setParallaxAutoSway(e.target.checked);
            });
        }

        // 3. Infinite Scrolling Vehicle Chase Mode
        const btnToggleChase = document.getElementById('btn-toggle-chase');
        const chaseVehicleSelect = document.getElementById('chase-vehicle-select');
        const chaseTerrainSelect = document.getElementById('chase-terrain-select');
        const chaseSpeedSlider = document.getElementById('chase-speed-slider');
        const chaseSpeedVal = document.getElementById('chase-speed-val');

        if (btnToggleChase) {
            btnToggleChase.addEventListener('click', () => {
                const next = !dse.chaseState.enabled;
                dse.setChaseEnabled(next);
                btnToggleChase.classList.toggle('active', next);
                btnToggleChase.innerHTML = next ? '\u23F9 Chase Active: ON' : '\u25B6 Start Chase: OFF';
            });
        }
        if (chaseVehicleSelect) {
            chaseVehicleSelect.addEventListener('change', (e) => {
                const v = e.target.value;
                dse.setChaseConfig({ vehicle: v });
                // Auto-pair terrain if appropriate
                if (v === 'steam_train' && chaseTerrainSelect) {
                    chaseTerrainSelect.value = 'railroad_desert';
                    dse.setChaseConfig({ terrain: 'railroad_desert' });
                } else if (v === 'riverboat' && chaseTerrainSelect) {
                    chaseTerrainSelect.value = 'river_rapids';
                    dse.setChaseConfig({ terrain: 'river_rapids' });
                } else if (v === 'skyship' && chaseTerrainSelect) {
                    chaseTerrainSelect.value = 'sky_clouds';
                    dse.setChaseConfig({ terrain: 'sky_clouds' });
                } else if (v === 'war_wagon' && chaseTerrainSelect) {
                    chaseTerrainSelect.value = 'forest_road';
                    dse.setChaseConfig({ terrain: 'forest_road' });
                }
            });
        }
        if (chaseTerrainSelect) {
            chaseTerrainSelect.addEventListener('change', (e) => {
                dse.setChaseConfig({ terrain: e.target.value });
            });
        }
        if (chaseSpeedSlider) {
            chaseSpeedSlider.addEventListener('input', (e) => {
                const spd = parseInt(e.target.value, 10);
                if (chaseSpeedVal) chaseSpeedVal.textContent = `${spd} mph`;
                dse.setChaseConfig({ speed: spd });
            });
        }
        document.querySelectorAll('.chase-dir-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                document.querySelectorAll('.chase-dir-chip').forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                dse.setChaseConfig({ direction: chip.getAttribute('data-dir') });
            });
        });
    }

    bindInspectorControls() {
        const inspector = document.getElementById('element-inspector-panel');
        if (!inspector) return;

        // 0. Active Map Element Switcher (Prev / Dropdown / Next)
        const activeSelect = inspector.querySelector('#inspector-active-el-select');
        const btnPrevEl = inspector.querySelector('#btn-inspector-prev-el');
        const btnNextEl = inspector.querySelector('#btn-inspector-next-el');

        if (activeSelect) {
            activeSelect.addEventListener('change', (e) => {
                const targetId = e.target.value;
                if (targetId && window.livingElementsEngine) {
                    window.livingElementsEngine.selectElement(targetId);
                }
            });
        }

        if (btnPrevEl) {
            btnPrevEl.addEventListener('click', () => {
                const eng = window.livingElementsEngine;
                if (!eng || !eng.elements || eng.elements.length === 0) return;
                const curIdx = eng.elements.findIndex(x => x.id === eng.selectedElementId);
                const prevIdx = (curIdx - 1 + eng.elements.length) % eng.elements.length;
                eng.selectElement(eng.elements[prevIdx].id);
            });
        }

        if (btnNextEl) {
            btnNextEl.addEventListener('click', () => {
                const eng = window.livingElementsEngine;
                if (!eng || !eng.elements || eng.elements.length === 0) return;
                const curIdx = eng.elements.findIndex(x => x.id === eng.selectedElementId);
                const nextIdx = (curIdx + 1) % eng.elements.length;
                eng.selectElement(eng.elements[nextIdx].id);
            });
        }

        // 0B. Lock Position & Size / Scale & Move with Map
        const lockCheck = inspector.querySelector('#inspector-lock-el');
        if (lockCheck) {
            lockCheck.addEventListener('change', () => {
                const id = window.livingElementsEngine.selectedElementId;
                if (id) window.livingElementsEngine.setElementLocked(id, lockCheck.checked);
            });
        }
        const anchorCheck = inspector.querySelector('#inspector-anchor-map');
        if (anchorCheck) {
            anchorCheck.addEventListener('change', () => {
                const id = window.livingElementsEngine.selectedElementId;
                if (id) window.livingElementsEngine.setElementAnchored(id, anchorCheck.checked);
            });
        }

        // 1. Visual Style / Variant selector
        const variantSelect = inspector.querySelector('#inspector-variant-select');
        if (variantSelect) {
            variantSelect.addEventListener('change', (e) => {
                const id = window.livingElementsEngine.selectedElementId;
                const val = e.target.value;
                if (id) {
                    window.livingElementsEngine.updateElementConfig(id, {
                        variant: val,
                        waterStyle: val
                    });
                }
            });
        }

        // 1B. Instant Cover Entire Map, Layer Order & Flip X/Y
        const btnFitMap = inspector.querySelector('#btn-fit-element-map');
        if (btnFitMap) {
            btnFitMap.addEventListener('click', () => {
                const id = window.livingElementsEngine.selectedElementId;
                if (id) {
                    window.livingElementsEngine.fitElementToCanvas(id);
                    const el = window.livingElementsEngine.elements.find(x => x.id === id);
                    if (el) this.updateElementInspector(el);
                }
            });
        }

        const btnBringFront = inspector.querySelector('#btn-el-bring-front');
        if (btnBringFront) {
            btnBringFront.addEventListener('click', () => {
                const id = window.livingElementsEngine.selectedElementId;
                if (id) window.livingElementsEngine.bringElementToFront(id);
            });
        }

        const btnSendBack = inspector.querySelector('#btn-el-send-back');
        if (btnSendBack) {
            btnSendBack.addEventListener('click', () => {
                const id = window.livingElementsEngine.selectedElementId;
                if (id) window.livingElementsEngine.sendElementToBack(id);
            });
        }

        const btnFlipX = inspector.querySelector('#btn-el-flip-x');
        if (btnFlipX) {
            btnFlipX.addEventListener('click', () => {
                const id = window.livingElementsEngine.selectedElementId;
                const el = window.livingElementsEngine.elements.find(x => x.id === id);
                if (el && el.config) {
                    const next = !el.config.flipX;
                    window.livingElementsEngine.updateElementConfig(id, { flipX: next });
                    btnFlipX.classList.toggle('active', next);
                }
            });
        }

        const btnFlipY = inspector.querySelector('#btn-el-flip-y');
        if (btnFlipY) {
            btnFlipY.addEventListener('click', () => {
                const id = window.livingElementsEngine.selectedElementId;
                const el = window.livingElementsEngine.elements.find(x => x.id === id);
                if (el && el.config) {
                    const next = !el.config.flipY;
                    window.livingElementsEngine.updateElementConfig(id, { flipY: next });
                    btnFlipY.classList.toggle('active', next);
                }
            });
        }

        // 2. Overall Size slider & Unconstrained Dimensions (up to 6000px)
        const sizeSlider = inspector.querySelector('#inspector-size');
        const sizeVal = inspector.querySelector('#inspector-size-val');
        const aspectSlider = inspector.querySelector('#inspector-aspect');
        const aspectVal = inspector.querySelector('#inspector-aspect-val');
        const widthInput = inspector.querySelector('#inspector-width-input');
        const heightInput = inspector.querySelector('#inspector-height-input');

        const applySizeAndAspect = (baseSize, aspectRatio) => {
            const id = window.livingElementsEngine.selectedElementId;
            const el = window.livingElementsEngine.elements.find(x => x.id === id);
            if (!el || window.livingElementsEngine.isRiverType(el.type)) return;

            el.width = Math.max(20, Math.min(6000, Math.round(baseSize * Math.sqrt(aspectRatio))));
            el.height = Math.max(20, Math.min(6000, Math.round(baseSize / Math.sqrt(aspectRatio))));

            if (el.dom) {
                el.dom.style.width = `${el.width}px`;
                el.dom.style.height = `${el.height}px`;
            }
            if (el.canvas) {
                el.canvas.width = el.width;
                el.canvas.height = el.height;
            }
            if (sizeVal) sizeVal.textContent = `${el.width}\u00D7${el.height}px`;
            if (aspectVal) aspectVal.textContent = `${aspectRatio.toFixed(2)}x`;
            if (widthInput) widthInput.value = el.width;
            if (heightInput) heightInput.value = el.height;
            window.livingElementsEngine.notify();
        };

        if (sizeSlider) {
            sizeSlider.addEventListener('input', (e) => {
                const base = parseInt(e.target.value, 10) || 180;
                const aspect = aspectSlider ? parseFloat(aspectSlider.value) || 1.0 : 1.0;
                applySizeAndAspect(base, aspect);
            });
        }

        if (aspectSlider) {
            aspectSlider.addEventListener('input', (e) => {
                const aspect = parseFloat(e.target.value) || 1.0;
                const base = sizeSlider ? parseInt(sizeSlider.value, 10) || 180 : 180;
                applySizeAndAspect(base, aspect);
            });
        }

        if (widthInput) {
            widthInput.addEventListener('input', (e) => {
                const id = window.livingElementsEngine.selectedElementId;
                const val = parseFloat(e.target.value);
                if (id && !isNaN(val)) {
                    window.livingElementsEngine.setElementDimensions(id, val, undefined);
                    const el = window.livingElementsEngine.elements.find(x => x.id === id);
                    if (el && sizeVal) sizeVal.textContent = `${el.width}\u00D7${el.height}px`;
                }
            });
        }

        if (heightInput) {
            heightInput.addEventListener('input', (e) => {
                const id = window.livingElementsEngine.selectedElementId;
                const val = parseFloat(e.target.value);
                if (id && !isNaN(val)) {
                    window.livingElementsEngine.setElementDimensions(id, undefined, val);
                    const el = window.livingElementsEngine.elements.find(x => x.id === id);
                    if (el && sizeVal) sizeVal.textContent = `${el.width}\u00D7${el.height}px`;
                }
            });
        }

        const btnResetAspect = inspector.querySelector('#btn-reset-aspect');
        if (btnResetAspect) {
            btnResetAspect.addEventListener('click', () => {
                if (aspectSlider) aspectSlider.value = 1.0;
                const base = sizeSlider ? parseInt(sizeSlider.value, 10) || 180 : 180;
                applySizeAndAspect(base, 1.0);
            });
        }

        // 2B. Entity Quantity / Density Slider & Active Tumbleweed Count
        const qtySlider = inspector.querySelector('#inspector-quantity');
        const qtyVal = inspector.querySelector('#inspector-quantity-val');
        if (qtySlider) {
            qtySlider.addEventListener('input', (e) => {
                const val = parseFloat(e.target.value);
                if (qtyVal) qtyVal.textContent = `${Math.round(val * 100)}%`;
                const id = window.livingElementsEngine.selectedElementId;
                if (id) window.livingElementsEngine.updateElementConfig(id, { quantity: val });
            });
        }

        const twCountSlider = inspector.querySelector('#inspector-tumbleweed-count');
        const twCountVal = inspector.querySelector('#inspector-tumbleweed-count-val');
        if (twCountSlider) {
            twCountSlider.addEventListener('input', (e) => {
                const val = parseInt(e.target.value, 10);
                if (twCountVal) twCountVal.textContent = `${val}`;
                const id = window.livingElementsEngine.selectedElementId;
                if (id) window.livingElementsEngine.updateElementConfig(id, { count: val });
            });
        }

        // 2C. Fractal Roughness (Organic Detail) & Internal Element Size Sliders
        const fracSlider = inspector.querySelector('#inspector-fractal-roughness');
        const fracVal = inspector.querySelector('#inspector-fractal-roughness-val');
        if (fracSlider) {
            fracSlider.addEventListener('input', (e) => {
                const val = parseFloat(e.target.value);
                if (fracVal) fracVal.textContent = `${Math.round(val * 100)}%`;
                const id = window.livingElementsEngine.selectedElementId;
                if (id) window.livingElementsEngine.updateElementConfig(id, { fractalRoughness: val });
            });
        }

        const elScaleSlider = inspector.querySelector('#inspector-element-scale');
        const elScaleVal = inspector.querySelector('#inspector-element-scale-val');
        if (elScaleSlider) {
            elScaleSlider.addEventListener('input', (e) => {
                const val = parseFloat(e.target.value);
                if (elScaleVal) elScaleVal.textContent = `${val.toFixed(2)}x (${Math.round(val * 100)}%)`;
                const id = window.livingElementsEngine.selectedElementId;
                if (id) window.livingElementsEngine.updateElementConfig(id, { elementScale: val, scale: val });
            });
        }

        const widthVarSlider = inspector.querySelector('#inspector-width-variance');
        const widthVarVal = inspector.querySelector('#inspector-width-variance-val');
        if (widthVarSlider) {
            widthVarSlider.addEventListener('input', (e) => {
                const val = parseFloat(e.target.value);
                const pct = Math.round(val * 100);
                if (widthVarVal) widthVarVal.textContent = pct === 0 ? '0% (Uniform)' : `${pct}% (Organic)`;
                const id = window.livingElementsEngine.selectedElementId;
                if (id) window.livingElementsEngine.updateElementConfig(id, { widthVariance: val });
                inspector.querySelectorAll('.inspector-variance-chip').forEach(chip => {
                    const cv = parseFloat(chip.getAttribute('data-variance') || 0);
                    chip.classList.toggle('active', Math.abs(cv - val) < 0.05);
                });
            });
        }

        inspector.querySelectorAll('.inspector-variance-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                const val = parseFloat(chip.getAttribute('data-variance') || 0);
                if (widthVarSlider) widthVarSlider.value = val;
                const pct = Math.round(val * 100);
                if (widthVarVal) widthVarVal.textContent = pct === 0 ? '0% (Uniform)' : `${pct}% (Organic)`;
                const id = window.livingElementsEngine.selectedElementId;
                if (id) window.livingElementsEngine.updateElementConfig(id, { widthVariance: val });
                inspector.querySelectorAll('.inspector-variance-chip').forEach(c => {
                    const cv = parseFloat(c.getAttribute('data-variance') || 0);
                    c.classList.toggle('active', Math.abs(cv - val) < 0.05);
                });
            });
        });

        const btnResetFractal = inspector.querySelector('#btn-reset-el-fractal');
        if (btnResetFractal) {
            btnResetFractal.addEventListener('click', () => {
                const id = window.livingElementsEngine.selectedElementId;
                if (id) {
                    window.livingElementsEngine.updateElementConfig(id, { fractalRoughness: 0.75, elementScale: 1.0, scale: 1.0, widthVariance: 0.0 });
                    const el = window.livingElementsEngine.elements.find(x => x.id === id);
                    if (el) this.updateElementInspector(el);
                }
            });
        }

        // 3. 3D Perspective Tilt X / Tilt Y & Rotation Angle (for all elements)
        const tiltXSlider = inspector.querySelector('#inspector-tilt-x');
        const tiltXVal = inspector.querySelector('#inspector-tilt-x-val');
        if (tiltXSlider) {
            tiltXSlider.addEventListener('input', (e) => {
                const val = parseInt(e.target.value, 10);
                if (tiltXVal) tiltXVal.textContent = `${val}\u00B0`;
                const id = window.livingElementsEngine.selectedElementId;
                if (id) window.livingElementsEngine.updateElementConfig(id, { tiltX: val });
            });
        }

        const tiltYSlider = inspector.querySelector('#inspector-tilt-y');
        const tiltYVal = inspector.querySelector('#inspector-tilt-y-val');
        if (tiltYSlider) {
            tiltYSlider.addEventListener('input', (e) => {
                const val = parseInt(e.target.value, 10);
                if (tiltYVal) tiltYVal.textContent = `${val}\u00B0`;
                const id = window.livingElementsEngine.selectedElementId;
                if (id) window.livingElementsEngine.updateElementConfig(id, { tiltY: val });
            });
        }

        const rotSlider = inspector.querySelector('#inspector-rotation');
        const rotVal = inspector.querySelector('#inspector-rotation-val');
        if (rotSlider) {
            rotSlider.addEventListener('input', (e) => {
                const id = window.livingElementsEngine.selectedElementId;
                const el = window.livingElementsEngine.elements.find(x => x.id === id);
                if (el) {
                    el.rotation = parseInt(e.target.value, 10);
                    if (rotVal) rotVal.textContent = `${el.rotation}\u00B0`;
                    window.livingElementsEngine.applyElementTransform(el);
                    window.livingElementsEngine.notify();
                }
            });
        }

        const btnResetPerspective = inspector.querySelector('#btn-reset-perspective');
        if (btnResetPerspective) {
            btnResetPerspective.addEventListener('click', () => {
                const id = window.livingElementsEngine.selectedElementId;
                const el = window.livingElementsEngine.elements.find(x => x.id === id);
                if (el) {
                    el.rotation = 0;
                    window.livingElementsEngine.updateElementConfig(id, { tiltX: 0, tiltY: 0 });
                    this.updateElementInspector(el);
                }
            });
        }

        // 1-Click Perspective Preset buttons
        const presetBtns = inspector.querySelectorAll('.perspective-preset-btn');
        presetBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const tx = parseInt(btn.dataset.tiltX, 10);
                const ty = parseInt(btn.dataset.tiltY, 10);
                const id = window.livingElementsEngine.selectedElementId;
                if (id) {
                    window.livingElementsEngine.updateElementConfig(id, { tiltX: tx, tiltY: ty });
                    const el = window.livingElementsEngine.elements.find(x => x.id === id);
                    if (el) this.updateElementInspector(el);
                }
            });
        });

        // 4. Animation Speed, Intensity & Opacity (for all elements)
        const speedSlider = inspector.querySelector('#inspector-speed');
        const speedVal = inspector.querySelector('#inspector-speed-val');
        if (speedSlider) {
            speedSlider.addEventListener('input', (e) => {
                const val = parseFloat(e.target.value);
                if (speedVal) speedVal.textContent = `${val.toFixed(1)}x`;
                const id = window.livingElementsEngine.selectedElementId;
                if (id) window.livingElementsEngine.updateElementConfig(id, { speed: val, flowSpeed: val });
            });
        }

        const intenSlider = inspector.querySelector('#inspector-intensity');
        const intenVal = inspector.querySelector('#inspector-intensity-val');
        if (intenSlider) {
            intenSlider.addEventListener('input', (e) => {
                const val = parseFloat(e.target.value);
                if (intenVal) intenVal.textContent = `${Math.round(val * 100)}%`;
                const id = window.livingElementsEngine.selectedElementId;
                if (id) window.livingElementsEngine.updateElementConfig(id, { intensity: val });
            });
        }

        const opacSlider = inspector.querySelector('#inspector-opacity');
        const opacVal = inspector.querySelector('#inspector-opacity-val');
        if (opacSlider) {
            opacSlider.addEventListener('input', (e) => {
                const val = parseFloat(e.target.value);
                if (opacVal) opacVal.textContent = `${Math.round(val * 100)}%`;
                const id = window.livingElementsEngine.selectedElementId;
                if (id) window.livingElementsEngine.updateElementConfig(id, { opacity: val });
            });
        }

        // 4B. Color Grading: Hue Shift, Saturation, Brightness & Blend Mode
        const hueSlider = inspector.querySelector('#inspector-hue');
        const hueVal = inspector.querySelector('#inspector-hue-val');
        if (hueSlider) {
            hueSlider.addEventListener('input', (e) => {
                const val = parseInt(e.target.value, 10) || 0;
                if (hueVal) hueVal.textContent = `${val > 0 ? '+' : ''}${val}\u00B0`;
                inspector.querySelectorAll('.inspector-hue-chip').forEach(chip => {
                    const ch = parseInt(chip.getAttribute('data-hue') || '0', 10);
                    chip.classList.toggle('active', Math.abs(ch - val) <= 4);
                });
                const id = window.livingElementsEngine.selectedElementId;
                if (id) window.livingElementsEngine.updateElementConfig(id, { hue: val });
            });
        }

        inspector.querySelectorAll('.inspector-hue-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                const val = parseInt(chip.getAttribute('data-hue') || '0', 10);
                if (hueSlider) hueSlider.value = val;
                if (hueVal) hueVal.textContent = `${val > 0 ? '+' : ''}${val}\u00B0`;
                inspector.querySelectorAll('.inspector-hue-chip').forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                const id = window.livingElementsEngine.selectedElementId;
                if (id) window.livingElementsEngine.updateElementConfig(id, { hue: val });
            });
        });

        const satSlider = inspector.querySelector('#inspector-saturation');
        const satVal = inspector.querySelector('#inspector-saturation-val');
        if (satSlider) {
            satSlider.addEventListener('input', (e) => {
                const val = parseInt(e.target.value, 10);
                if (satVal) satVal.textContent = `${val}%`;
                const id = window.livingElementsEngine.selectedElementId;
                if (id) window.livingElementsEngine.updateElementConfig(id, { saturation: val });
            });
        }

        const briSlider = inspector.querySelector('#inspector-brightness');
        const briVal = inspector.querySelector('#inspector-brightness-val');
        if (briSlider) {
            briSlider.addEventListener('input', (e) => {
                const val = parseInt(e.target.value, 10);
                if (briVal) briVal.textContent = `${val}%`;
                const id = window.livingElementsEngine.selectedElementId;
                if (id) window.livingElementsEngine.updateElementConfig(id, { brightness: val });
            });
        }

        const blendSelect = inspector.querySelector('#inspector-blend-mode');
        if (blendSelect) {
            blendSelect.addEventListener('change', (e) => {
                const id = window.livingElementsEngine.selectedElementId;
                if (id) window.livingElementsEngine.updateElementConfig(id, { blendMode: e.target.value });
            });
        }

        const btnResetColor = inspector.querySelector('#btn-reset-el-color');
        if (btnResetColor) {
            btnResetColor.addEventListener('click', () => {
                const id = window.livingElementsEngine.selectedElementId;
                if (id) {
                    window.livingElementsEngine.updateElementConfig(id, {
                        hue: 0,
                        saturation: 100,
                        brightness: 100,
                        blendMode: 'normal'
                    });
                    const el = window.livingElementsEngine.elements.find(x => x.id === id);
                    if (el) this.updateElementInspector(el);
                }
            });
        }

        // 4C. Edge Blur / Sharpen & Soft Edge Feathering
        const edgeBSSlider = inspector.querySelector('#inspector-edge-blur-sharpen');
        const edgeBSVal = inspector.querySelector('#inspector-edge-blur-sharpen-val');
        if (edgeBSSlider) {
            edgeBSSlider.addEventListener('input', (e) => {
                const val = parseInt(e.target.value, 10) || 0;
                if (edgeBSVal) {
                    if (val < 0) edgeBSVal.textContent = `${val} (Blur ${(Math.abs(val) * 0.15).toFixed(1)}px)`;
                    else if (val > 0) edgeBSVal.textContent = `+${val} (Sharpen)`;
                    else edgeBSVal.textContent = `0 (Normal)`;
                }
                const id = window.livingElementsEngine.selectedElementId;
                if (id) window.livingElementsEngine.updateElementConfig(id, { edgeBlurSharpen: val });
            });
        }

        const featherSlider = inspector.querySelector('#inspector-edge-feather');
        const featherVal = inspector.querySelector('#inspector-edge-feather-val');
        if (featherSlider) {
            featherSlider.addEventListener('input', (e) => {
                const val = parseInt(e.target.value, 10) || 0;
                if (featherVal) featherVal.textContent = `${val}%`;
                const id = window.livingElementsEngine.selectedElementId;
                if (id) window.livingElementsEngine.updateElementConfig(id, { edgeFeather: val });
            });
        }

        const btnResetEdges = inspector.querySelector('#btn-reset-el-edges');
        if (btnResetEdges) {
            btnResetEdges.addEventListener('click', () => {
                const id = window.livingElementsEngine.selectedElementId;
                if (id) {
                    window.livingElementsEngine.updateElementConfig(id, {
                        edgeBlurSharpen: 0,
                        edgeFeather: 0
                    });
                    const el = window.livingElementsEngine.elements.find(x => x.id === id);
                    if (el) this.updateElementInspector(el);
                }
            });
        }

        // 5. Deformable River Shape Mode & Handle Buttons
        const riverShapeSelect = inspector.querySelector('#inspector-river-shape');
        if (riverShapeSelect) {
            riverShapeSelect.addEventListener('change', (e) => {
                const id = window.livingElementsEngine.selectedElementId;
                if (id) window.livingElementsEngine.setRiverShapeMode(id, e.target.value);
            });
        }

        const btnAddNode = inspector.querySelector('#btn-river-add-node');
        if (btnAddNode) {
            btnAddNode.addEventListener('click', () => {
                const id = window.livingElementsEngine.selectedElementId;
                if (id) window.livingElementsEngine.addRiverNode(id);
            });
        }

        const btnRemoveNode = inspector.querySelector('#btn-river-remove-node');
        if (btnRemoveNode) {
            btnRemoveNode.addEventListener('click', () => {
                const id = window.livingElementsEngine.selectedElementId;
                if (id) window.livingElementsEngine.removeRiverNode(id);
            });
        }

        const btnNarrower = inspector.querySelector('#btn-river-narrower');
        if (btnNarrower) {
            btnNarrower.addEventListener('click', () => {
                const id = window.livingElementsEngine.selectedElementId;
                if (id) window.livingElementsEngine.scaleRiverWidth(id, 0.85);
            });
        }

        const btnWider = inspector.querySelector('#btn-river-wider');
        if (btnWider) {
            btnWider.addEventListener('click', () => {
                const id = window.livingElementsEngine.selectedElementId;
                if (id) window.livingElementsEngine.scaleRiverWidth(id, 1.15);
            });
        }

        // Redraw with Freehand Draw Tool
        const redrawBtn = inspector.querySelector('#btn-inspector-redraw');
        if (redrawBtn) {
            redrawBtn.addEventListener('click', () => {
                const id = window.livingElementsEngine.selectedElementId;
                if (id) {
                    window.livingElementsEngine.setDrawMode(true, null, id);
                }
            });
        }

        // 6. Duplicate, Reset All & Delete buttons
        const dupBtn = inspector.querySelector('#btn-inspector-duplicate');
        if (dupBtn) {
            dupBtn.addEventListener('click', () => {
                const id = window.livingElementsEngine.selectedElementId;
                if (id) window.livingElementsEngine.duplicateElement(id);
            });
        }

        const resetAllBtn = inspector.querySelector('#btn-inspector-reset-all');
        if (resetAllBtn) {
            resetAllBtn.addEventListener('click', () => {
                const id = window.livingElementsEngine.selectedElementId;
                if (id) {
                    window.livingElementsEngine.resetElementAttributes(id);
                    const el = window.livingElementsEngine.elements.find(x => x.id === id);
                    if (el) this.updateElementInspector(el);
                }
            });
        }

        const delBtn = inspector.querySelector('#btn-inspector-delete');
        if (delBtn) {
            delBtn.addEventListener('click', () => {
                const id = window.livingElementsEngine.selectedElementId;
                if (id) window.livingElementsEngine.removeElement(id);
            });
        }
    }

    bindAIGeneratorControls() {
        const locationInput = document.getElementById('ai-location-input');
        const directUrlInput = document.getElementById('ai-direct-map-url');
        const btnLoadDirectUrl = document.getElementById('btn-load-direct-url');
        const togglesContainer = document.getElementById('prompt-toggles-container');
        const promptInput = document.getElementById('ai-prompt-input');
        const btnResetPrompt = document.getElementById('btn-reset-prompt');
        const btnCopyPrompt = document.getElementById('btn-copy-assembled-prompt');
        const btnAllCore = document.getElementById('btn-toggles-all-core');
        const btnClearToggles = document.getElementById('btn-toggles-clear');
        const btnOpenGeminiPopup = document.getElementById('btn-open-gemini-popup');
        const statusBox = document.getElementById('ai-gen-status');
        const btnPasteClipboard = document.getElementById('btn-paste-clipboard-map');
        const btnUploadFromPanel = document.getElementById('btn-upload-from-ai-panel');
        const btnCopyCurrent = document.getElementById('btn-copy-current-map');
        const btnSaveCurrent = document.getElementById('btn-save-current-map');
        const btnClearHistory = document.getElementById('btn-clear-ai-history');
        const fileInput = document.getElementById('map-file-input');

        const resWInput = document.getElementById('ai-res-w');
        const resHInput = document.getElementById('ai-res-h');
        const chkAutoUpscale = document.getElementById('ai-chk-autoupscale');
        const btnUpscale4K = document.getElementById('btn-ai-upscale-4k');
        const sizeBadge = document.getElementById('ai-size-intent-badge');

        const showStatus = (msg, isError = false, autoHideMs = 5000) => {
            if (!statusBox) return;
            statusBox.style.display = 'block';
            statusBox.style.color = isError ? 'var(--accent-danger)' : 'var(--primary)';
            statusBox.style.borderColor = isError ? 'rgba(255,71,87,0.4)' : 'rgba(0,255,200,0.3)';
            statusBox.innerHTML = msg;
            if (autoHideMs > 0) {
                clearTimeout(this._statusTimer);
                this._statusTimer = setTimeout(() => {
                    statusBox.style.display = 'none';
                }, autoHideMs);
            }
        };

        // Syncs active toggles + location + style + lighting + resolution directly into the master prompt box
        const syncPromptBox = () => {
            if (!promptInput || !window.aiMapGenerator) return;
            const loc = locationInput ? locationInput.value : '';
            promptInput.value = window.aiMapGenerator.buildAssembledPrompt(loc);
        };

        // Renders the interactive quality & surface toggle chips
        const renderToggles = () => {
            if (!togglesContainer || !window.aiMapGenerator) return;
            togglesContainer.innerHTML = '';
            window.aiMapGenerator.promptToggles.forEach(t => {
                const chip = document.createElement('div');
                chip.className = `prompt-toggle-chip ${t.active ? 'active' : ''}`;
                chip.title = `Toggle prompt modifier: "${t.text}"`;
                chip.innerHTML = `<span class="chip-check">${t.active ? '\u2713' : '+'}</span><span>${t.label}</span>`;
                chip.addEventListener('click', () => {
                    window.aiMapGenerator.togglePromptChip(t.id);
                    renderToggles();
                    syncPromptBox();
                });
                togglesContainer.appendChild(chip);
            });
        };

        // 1. Bespoke Encounter Location & Scene (typed in at table)
        if (locationInput) {
            locationInput.addEventListener('input', () => {
                window.aiMapGenerator.setLocation(locationInput.value);
                syncPromptBox();
            });
        }

        // 2. Art Style & Perspective Chips
        document.querySelectorAll('.ai-style-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                document.querySelectorAll('.ai-style-chip').forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                const styleVal = chip.getAttribute('data-style');
                window.aiMapGenerator.setStyle(styleVal);
                syncPromptBox();
            });
        });

        // 3. Lighting & Atmosphere Chips (13 presets)
        document.querySelectorAll('.ai-lighting-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                document.querySelectorAll('.ai-lighting-chip').forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                const lightVal = chip.getAttribute('data-light');
                window.aiMapGenerator.setLighting(lightVal);
                syncPromptBox();
            });
        });

        // 4. Target Pixel Resolution, Orientation & Aspect Fit/Crop
        const orientChips = document.querySelectorAll('.ai-orientation-chip');
        const resChips = document.querySelectorAll('.ai-res-chip');
        const fitChips = document.querySelectorAll('.ai-fit-chip');

        const syncResolutionAndFitUI = () => {
            if (!window.aiMapGenerator) return;
            const st = window.aiMapGenerator.state;
            const spec = window.aiMapGenerator.refreshOrientedSizeSpec();

            if (resWInput) resWInput.value = st.w;
            if (resHInput) resHInput.value = st.h;
            if (chkAutoUpscale) chkAutoUpscale.checked = !!st.autoUpscale;
            if (sizeBadge && spec && spec.badge) sizeBadge.textContent = spec.badge;

            orientChips.forEach(oc => {
                const isMatch = oc.getAttribute('data-orientation') === st.orientation;
                oc.classList.toggle('active', isMatch);
            });

            let matchedPreset = false;
            resChips.forEach(rc => {
                const rw = parseInt(rc.getAttribute('data-w'), 10);
                const rh = parseInt(rc.getAttribute('data-h'), 10);
                if (rw > 0 && rh > 0) {
                    const isMatch = (rw === st.w && rh === st.h) || (rh === st.w && rw === st.h);
                    rc.classList.toggle('active', isMatch);
                    if (isMatch) matchedPreset = true;
                } else {
                    rc.classList.toggle('active', !matchedPreset);
                }
            });

            fitChips.forEach(fc => {
                const isMatch = fc.getAttribute('data-fit') === st.fitMode;
                fc.classList.toggle('active', isMatch);
            });
        };

        orientChips.forEach(oc => {
            oc.addEventListener('click', () => {
                const nextOrient = oc.getAttribute('data-orientation') || 'landscape';
                window.aiMapGenerator.setOrientation(nextOrient);
                syncResolutionAndFitUI();
                syncPromptBox();
            });
        });

        resChips.forEach(rc => {
            rc.addEventListener('click', () => {
                const rw = parseInt(rc.getAttribute('data-w'), 10);
                const rh = parseInt(rc.getAttribute('data-h'), 10);
                const rLabel = rc.getAttribute('data-ratio') || '';
                if (rw > 0 && rh > 0) {
                    const curOrient = window.aiMapGenerator.state.orientation;
                    const finalW = (curOrient === 'portrait' && rw > rh) ? rh : rw;
                    const finalH = (curOrient === 'portrait' && rw > rh) ? rw : rh;
                    window.aiMapGenerator.setResolution(finalW, finalH, rLabel);
                    syncResolutionAndFitUI();
                    syncPromptBox();
                } else if (resWInput) {
                    resWInput.focus();
                }
            });
        });

        const onCustomResChange = () => {
            const w = parseInt(resWInput ? resWInput.value : 3840, 10) || 3840;
            const h = parseInt(resHInput ? resHInput.value : 2160, 10) || 2160;
            window.aiMapGenerator.setResolution(w, h, `${w}\u00D7${h} Custom`);
            syncResolutionAndFitUI();
            syncPromptBox();
        };

        if (resWInput) resWInput.addEventListener('change', onCustomResChange);
        if (resHInput) resHInput.addEventListener('change', onCustomResChange);

        if (chkAutoUpscale) {
            chkAutoUpscale.addEventListener('change', (e) => {
                window.aiMapGenerator.setAutoUpscale(e.target.checked);
            });
        }

        fitChips.forEach(fc => {
            fc.addEventListener('click', () => {
                const mode = fc.getAttribute('data-fit') || 'cover';
                window.aiMapGenerator.setFitMode(mode);
                syncResolutionAndFitUI();
            });
        });

        if (btnUpscale4K) {
            btnUpscale4K.addEventListener('click', async () => {
                const st = window.aiMapGenerator.state;
                showStatus(`\u26A1 Upscaling & fitting active map to <b>${st.w} \u00D7 ${st.h} px (${st.fitMode})</b>...`, false, 0);
                const res = await this.reprocessActiveMapToTarget();
                if (res && res.dataUrl) {
                    showStatus(`\u2705 Active map scaled & fitted to <b>${res.width} \u00D7 ${res.height} px</b>!`, false, 4500);
                } else {
                    showStatus(`\u26A0\uFE0F Could not reprocess active map.`, true, 4000);
                }
            });
        }

        // Core defaults / Clear all toggles / Reset prompt buttons
        if (btnAllCore) {
            btnAllCore.addEventListener('click', () => {
                window.aiMapGenerator.setAllToggles(true, true);
                renderToggles();
                syncPromptBox();
            });
        }

        if (btnClearToggles) {
            btnClearToggles.addEventListener('click', () => {
                window.aiMapGenerator.setAllToggles(false, false);
                renderToggles();
                syncPromptBox();
            });
        }

        if (btnResetPrompt) {
            btnResetPrompt.addEventListener('click', () => {
                window.aiMapGenerator.setAllToggles(true, true);
                renderToggles();
                syncPromptBox();
                showStatus(`\u{1F504} Master prompt reset to current studio selections.`, false, 3000);
            });
        }

        // Copy assembled prompt button
        if (btnCopyPrompt && promptInput) {
            btnCopyPrompt.addEventListener('click', async () => {
                try {
                    await navigator.clipboard.writeText(promptInput.value);
                    const oldText = btnCopyPrompt.innerHTML;
                    btnCopyPrompt.innerHTML = '\u2705 Copied!';
                    setTimeout(() => { btnCopyPrompt.innerHTML = oldText; }, 2000);
                } catch (e) {
                    promptInput.select();
                    document.execCommand('copy');
                }
            });
        }

        // 5. Google Gemini Companion Popup Launcher
        if (btnOpenGeminiPopup) {
            btnOpenGeminiPopup.addEventListener('click', async () => {
                const loc = locationInput ? locationInput.value.trim() : '';
                const assembled = promptInput ? promptInput.value.trim() : '';
                await window.aiMapGenerator.openPopoutSearch('gemini', loc, assembled);
                showStatus(`\u{1F31F} <b>Gemini Companion Popup Opened & Prompt Copied!</b> Press <b>Ctrl+V</b> in Gemini to generate your 4K map, then right-click the image &rarr; <b>"Copy Image"</b> &rarr; press <b>Ctrl+V</b> right here in AetherTable!`, false, 10000);
            });
        }

        // Direct Image URL Loader
        if (btnLoadDirectUrl && directUrlInput) {
            const triggerDirectUrl = async () => {
                const url = directUrlInput.value.trim();
                if (!url) return;
                showStatus(`\u23F3 Loading & processing map URL to target 4K resolution...`, false, 0);
                const res = await this.loadAndProcessMapImage(url, 'Direct URL Map', false, 'Direct URL');
                directUrlInput.value = '';
                if (res) {
                    showStatus(`\u2705 Loaded & fitted map (<b>${res.width}\u00D7${res.height} px</b>) onto the tabletop!`, false, 4500);
                }
            };
            btnLoadDirectUrl.addEventListener('click', triggerDirectUrl);
            directUrlInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    triggerDirectUrl();
                }
            });
        }

        // Quick Paste Image from Clipboard button
        if (btnPasteClipboard) {
            btnPasteClipboard.addEventListener('click', async () => {
                try {
                    if (!navigator.clipboard || !navigator.clipboard.read) {
                        showStatus(`\u{1F4A1} Press <b>Ctrl+V</b> (or Cmd+V) anywhere in this window to paste your copied map image!`, false, 6000);
                        return;
                    }
                    const items = await navigator.clipboard.read();
                    for (const item of items) {
                        const imgType = item.types.find(t => t.startsWith('image/'));
                        if (imgType) {
                            const blob = await item.getType(imgType);
                            this.handleFileUpload(blob, 'Pasted Clipboard Map');
                            showStatus(`\u2705 Pasted & auto-fitted clipboard map onto the tabletop!`, false, 4000);
                            return;
                        }
                    }
                    showStatus(`\u26A0\uFE0F No image found on clipboard. Right-click an image in Gemini and choose <b>"Copy Image"</b> first, or press <b>Ctrl+V</b>.`, true, 5000);
                } catch (err) {
                    showStatus(`\u{1F4A1} Press <b>Ctrl+V</b> on your keyboard anywhere in this window to paste your copied map image!`, false, 6000);
                }
            });
        }

        // Quick Upload File button inside AI panel
        if (btnUploadFromPanel && fileInput) {
            btnUploadFromPanel.addEventListener('click', () => {
                fileInput.click();
            });
        }

        // Copy Current 4K Baked Map to Clipboard button
        if (btnCopyCurrent) {
            btnCopyCurrent.addEventListener('click', async () => {
                const res = await this.copyMapToClipboard();
                if (res) {
                    showStatus(`\u2705 Copied <b>${res.width}\u00D7${res.height} px</b> adjusted map image to clipboard!`, false, 4000);
                } else {
                    showStatus(`\u26A0\uFE0F Could not copy map image to clipboard. Try <b>\u{1F4BE} Download 4K</b> instead.`, true, 4000);
                }
            });
        }

        // Save Current 4K Baked Map to Disk button
        if (btnSaveCurrent) {
            btnSaveCurrent.addEventListener('click', () => {
                this.saveMapToDisk(null, this.currentMap.name);
                const st = window.aiMapGenerator ? window.aiMapGenerator.state : { w: 3840, h: 2160 };
                showStatus(`\u{1F4BE} Exported <b>${st.w}\u00D7${st.h} px</b> battlemap (with brightness, contrast, saturation & sharpness baked in)!`, false, 4500);
            });
        }

        // Clear Session Maps History
        if (btnClearHistory) {
            btnClearHistory.addEventListener('click', () => {
                if (window.aiMapGenerator) {
                    window.aiMapGenerator.clearHistory();
                    showStatus(`\u{1F5D1}\uFE0F Session map history cleared.`, false, 3000);
                }
            });
        }

        // Initialize UI state
        renderToggles();
        syncResolutionAndFitUI();
        syncPromptBox();

        // Render AI / Session History
        this.renderAIHistory();
        window.aiMapGenerator.onChange(() => this.renderAIHistory());
    }

    renderAIHistory() {
        const historyContainer = document.getElementById('ai-history-reel');
        if (!historyContainer) return;

        const history = (window.aiMapGenerator && window.aiMapGenerator.history) ? window.aiMapGenerator.history : [];
        historyContainer.innerHTML = '';

        if (history.length === 0) {
            historyContainer.innerHTML = '<span style="font-size: 11px; color: var(--text-dim); padding: 4px 0;">No session maps stored. Paste or generate maps to see them here.</span>';
            return;
        }

        history.forEach(item => {
            const card = document.createElement('div');
            card.className = 'ai-history-item';
            card.title = `${item.prompt} (${item.provider || 'Map'})`;
            card.innerHTML = `
                <img src="${item.url}" alt="${item.prompt}">
                <span style="position: absolute; bottom: 2px; right: 2px; background: rgba(0,0,0,0.75); font-size: 8px; color: var(--primary); padding: 1px 4px; border-radius: 2px; text-transform: uppercase;">${item.provider || 'Map'}</span>
            `;
            card.addEventListener('click', () => {
                this.setMap(item.url, false, item.prompt);
            });
            historyContainer.appendChild(card);
        });
    }

    bindProjectorControls() {
        // 1. Global Projector Optics Controls (applied to #map-layer)
        const brightSlider = document.getElementById('proj-brightness');
        const contrastSlider = document.getElementById('proj-contrast');
        const satSlider = document.getElementById('proj-saturation');
        const invertToggle = document.getElementById('proj-invert');
        const btnResetProj = document.getElementById('btn-reset-proj-optics');

        if (brightSlider) {
            brightSlider.addEventListener('input', (e) => {
                this.filters.brightness = parseInt(e.target.value, 10);
                this.applyFilters();
            });
        }
        if (contrastSlider) {
            contrastSlider.addEventListener('input', (e) => {
                this.filters.contrast = parseInt(e.target.value, 10);
                this.applyFilters();
            });
        }
        if (satSlider) {
            satSlider.addEventListener('input', (e) => {
                this.filters.saturation = parseInt(e.target.value, 10);
                this.applyFilters();
            });
        }
        if (invertToggle) {
            invertToggle.addEventListener('change', (e) => {
                this.filters.invert = e.target.checked;
                this.applyFilters();
            });
        }
        if (btnResetProj) {
            btnResetProj.addEventListener('click', () => {
                this.filters = {
                    brightness: 100,
                    contrast: 100,
                    saturation: 100,
                    invert: false
                };
                this.applyFilters();
            });
        }

        // 2. Independent Map Image Adjustment Controls (applied to #map-image / #map-video)
        document.querySelectorAll('.img-brightness-slider').forEach(slider => {
            slider.addEventListener('input', (e) => {
                this.imageAdjustments.brightness = parseInt(e.target.value, 10);
                this.applyImageAdjustments();
            });
        });

        document.querySelectorAll('.img-contrast-slider').forEach(slider => {
            slider.addEventListener('input', (e) => {
                this.imageAdjustments.contrast = parseInt(e.target.value, 10);
                this.applyImageAdjustments();
            });
        });

        document.querySelectorAll('.img-saturation-slider').forEach(slider => {
            slider.addEventListener('input', (e) => {
                this.imageAdjustments.saturation = parseInt(e.target.value, 10);
                this.applyImageAdjustments();
            });
        });

        document.querySelectorAll('.img-sharpness-slider').forEach(slider => {
            slider.addEventListener('input', (e) => {
                this.imageAdjustments.sharpness = parseInt(e.target.value, 10);
                this.applyImageAdjustments();
            });
        });

        document.querySelectorAll('.btn-reset-img-adjust').forEach(btn => {
            btn.addEventListener('click', () => {
                this.imageAdjustments = {
                    brightness: 100,
                    contrast: 100,
                    saturation: 100,
                    sharpness: 0
                };
                this.applyImageAdjustments();
            });
        });
    }

    bindPanZoomListeners() {
        const viewport = this.dom.container;
        if (!viewport) return;

        let isSpacePressed = false;
        const restingCursor = () => (this.panMode ? '' : 'default');

        window.addEventListener('keydown', (e) => {
            if (e.code === 'Space' && !document.activeElement.matches('input, textarea')) {
                isSpacePressed = true;
                viewport.style.cursor = 'grab';
            }
        });

        window.addEventListener('keyup', (e) => {
            if (e.code === 'Space') {
                isSpacePressed = false;
                viewport.style.cursor = restingCursor();
            }
        });

        viewport.addEventListener('mousedown', (e) => {
            // Pan with Space + Left click, Middle click, or plain Left click while Pan Mode is on
            const panModeDrag = this.panMode && e.button === 0 && !e.target.closest('.keystone-handle');
            if (isSpacePressed || e.button === 1 || panModeDrag) {
                this.panZoom.isPanning = true;
                this.panZoom.startX = e.clientX - this.panZoom.x;
                this.panZoom.startY = e.clientY - this.panZoom.y;
                viewport.style.cursor = 'grabbing';
                viewport.classList.add('panning');
                e.preventDefault();
            }
        });

        window.addEventListener('mousemove', (e) => {
            if (this.panZoom.isPanning) {
                this.panZoom.x = e.clientX - this.panZoom.startX;
                this.panZoom.y = e.clientY - this.panZoom.startY;
                this.applyPanZoom();
            }
        });

        window.addEventListener('mouseup', () => {
            if (this.panZoom.isPanning) {
                this.panZoom.isPanning = false;
                viewport.classList.remove('panning');
                viewport.style.cursor = isSpacePressed ? 'grab' : restingCursor();
            }
        });

        // Mouse wheel zoom
        viewport.addEventListener('wheel', (e) => {
            if (e.target.closest('.floating-panel') || e.target.closest('.app-header')) return;
            e.preventDefault();

            const zoomFactor = e.deltaY < 0 ? 1.08 : 0.92;
            const newScale = Math.max(0.2, Math.min(6.0, this.panZoom.scale * zoomFactor));

            // Zoom centered on cursor
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            this.panZoom.x = mouseX - (mouseX - this.panZoom.x) * (newScale / this.panZoom.scale);
            this.panZoom.y = mouseY - (mouseY - this.panZoom.y) * (newScale / this.panZoom.scale);
            this.panZoom.scale = newScale;

            this.applyPanZoom();
        }, { passive: false });
    }

    bindKeyboardShortcuts() {
        window.addEventListener('keydown', (e) => {
            // Safe Function Key: F9 (and secondary F2) toggles the in-tool Readme Manual & Keybindings at any time
            if (e.key === 'F9' || e.code === 'F9' || e.key === 'F2' || e.code === 'F2') {
                e.preventDefault();
                this.togglePanel('readme-panel');
                return;
            }

            if (document.activeElement && document.activeElement.matches('input, textarea')) return;
            if (e.ctrlKey || e.metaKey || e.altKey) return;

            // Arrow keys pan the map (Shift = faster); +/- zoom around the screen centre
            const tag = document.activeElement && document.activeElement.tagName;
            if (tag !== 'SELECT') {
                const step = e.shiftKey ? 180 : 60;
                if (e.key === 'ArrowLeft')  { this.panBy(step, 0);  e.preventDefault(); return; }
                if (e.key === 'ArrowRight') { this.panBy(-step, 0); e.preventDefault(); return; }
                if (e.key === 'ArrowUp')    { this.panBy(0, step);  e.preventDefault(); return; }
                if (e.key === 'ArrowDown')  { this.panBy(0, -step); e.preventDefault(); return; }
                if (e.key === '+' || e.key === '=') { this.zoomBy(1.15); return; }
                if (e.key === '-' || e.key === '_') { this.zoomBy(0.87); return; }
            }

            switch (e.key.toLowerCase()) {
                case '1':
                    this.togglePanel('ai-generator-panel');
                    break;
                case '2':
                    this.togglePanel('elements-panel');
                    break;
                case '3':
                    this.togglePanel('grid-panel');
                    break;
                case '4':
                    this.togglePanel('keystone-panel');
                    break;
                case '5':
                    this.togglePanel('projector-settings-panel');
                    break;
                case 'p':
                    this.togglePanMode();
                    break;
                case 'h':
                    this.toggleUI();
                    break;
                case 'b':
                    this.toggleBlackout();
                    break;
                case 'c':
                    window.keystoneEngine.toggleCalibrating();
                    break;
                case 'g':
                    const curGrid = window.gridEngine.getState();
                    window.gridEngine.setConfig({ enabled: !curGrid.enabled });
                    break;
                case 'f':
                    if (e.key === 'f' && !e.ctrlKey) {
                        this.toggleFullscreen();
                    }
                    break;
                case 'r':
                    this.resetPanZoom();
                    break;
                case 'd':
                    if (window.livingElementsEngine) {
                        window.livingElementsEngine.toggleDrawMode();
                    }
                    break;
                case 'escape':
                    if (window.livingElementsEngine && window.livingElementsEngine.isDrawingMode) {
                        window.livingElementsEngine.setDrawMode(false);
                        break;
                    }
                    this.closeAllPanels();
                    window.livingElementsEngine.selectElement(null);
                    break;
            }
        });
    }

    saveSettings() {
        try {
            localStorage.setItem('ttrpg_app_settings', JSON.stringify({
                filters: this.filters,
                imageAdjustments: this.imageAdjustments
            }));
        } catch (e) {}
    }

    loadSettings() {
        try {
            const saved = localStorage.getItem('ttrpg_app_settings');
            if (saved) {
                const data = JSON.parse(saved);
                if (data.filters) {
                    this.filters = Object.assign(this.filters, data.filters);
                }
                if (data.imageAdjustments) {
                    this.imageAdjustments = Object.assign(this.imageAdjustments, data.imageAdjustments);
                }
            }
        } catch (e) {}
        this.applyFilters();
        this.applyImageAdjustments();
    }
}

// Instantiate and initialize when DOM is ready
window.battlemapApp = new BattlemapApp();
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.battlemapApp.init();
    });
} else {
    window.battlemapApp.init();
}
