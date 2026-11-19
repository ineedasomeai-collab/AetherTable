/**
 * MapGen — AI Battlemap Studio & 4K Map Finder Engine
 * Modeled after the M&M 4e GM Suite MapGen Studio (Zero API Key Required):
 * 1. 2-Tab Studio Architecture:
 *    - Tab 1 (✨ AI Map Generator): 15 Quick Inspiration Presets, 6 Art Style & Perspective chips,
 *      13 Lighting & Atmosphere chips, Target Pixel Resolution (3840x2160 4K UHD, 2K, FHD, 4K Square,
 *      Ultrawide, Physical Mat sizes, Landscape/Portrait swap, Custom WxH), Aspect Fit/Crop modes
 *      (Fill & Crop 'cover', Fit Entire Map 'contain', Stretch 'fill'), Auto-Upscale to 4K,
 *      optional detail toggles, Master Cartographer Prompt, and Floating Companion Popup launchers
 *      for Google Gemini, Google AI Studio, and Google 4K Search.
 *    - Tab 2 (🔍 4K Battlemap Search & Instant 4K Maps): Floating companion search launchers for
 *      Google 4K Images, Pinterest 4K, Reddit r/battlemaps, and ArtStation Maps, Direct URL / Paste
 *      loader, and 8 Instant Curated 4K Procedural Battlemaps (3840x2160 1-click load with live canvas thumbs).
 * 2. High-Quality Bicubic 4K Canvas Processing Pipeline:
 *    - Auto-upscales and center-crops/fits smaller pasted or loaded images to exact target resolution,
 *      and bakes Brightness, Contrast, Saturation & 3x3 Convolution Sharpness into Copy & Download exports.
 */

class AIMapGenerator {
    constructor() {
        this.history = [];
        this.searchResults = [];
        this.isSearching = false;
        this.isGenerating = false;
        this.listeners = [];
        this.popoutWin = null;

        // Master State (Mirrors M&M GM Suite MapGen state + AetherTable physical mat orientation)
        this.state = {
            location: 'Ruined sunken elven temple with turquoise water pools and mossy stone columns',
            style: '4K Orthographic Top-Down Satellite View, razor sharp textures, clean tactical surface',
            lighting: 'bright natural daylight, high contrast, clean visibility',
            w: 3840,
            h: 2160,
            tag: '3840×2160 (4K UHD)',
            orientation: 'landscape', // 'landscape' | 'portrait'
            sizeIntent: '3840x2160',
            fit: 'cover', // 'cover' (Fill & Crop) | 'contain' (Fit Entire Map) | 'fill' (Stretch)
            autoUpscale: true,
            customEdited: false,
            rawImageObj: null,
            rawImageSrc: '',
            currentMapName: 'Forest Glade & Stream'
        };

        // Optional Fine-Detail & Constraint Toggles
        this.promptToggles = [
            {
                id: 'flat2d',
                label: '📐 Flat 2D 90° Camera',
                role: 'post',
                text: 'completely flat 2D perpendicular 90-degree camera angle',
                active: true
            },
            {
                id: 'tactical',
                label: '🎯 Clean Tactical Surface',
                role: 'post',
                text: 'clean tactical gaming surface',
                active: true
            },
            {
                id: 'ungridded',
                label: '🚫 Ungridded / No Grid or Hexes',
                role: 'post',
                text: 'ungridded seamless floor, no grid lines, no hexes',
                active: true
            },
            {
                id: 'nominis',
                label: '🚫 No Minis / Characters',
                role: 'post',
                text: 'no miniatures, no characters, no figures',
                active: true
            },
            {
                id: 'notext',
                label: '🚫 No Text / Watermarks',
                role: 'post',
                text: 'no text labels, no watermarks',
                active: true
            },
            {
                id: 'textures8k',
                label: '💎 Ultra-HD Crisp Cartography',
                role: 'post',
                text: 'ultra-high definition, crisp tactical cartography',
                active: true
            },
            {
                id: 'raytraced',
                label: '🌑 Raytraced Ambient Occlusion',
                role: 'post',
                text: 'raytraced ambient occlusion',
                active: false
            }
        ];

        // 8 Instant Curated 4K Procedural Battlemap Presets (3840x2160 UHD)
        this.curatedPresets = [
            {
                id: 'forest',
                name: 'Ancient Forest River',
                tag: '3840×2160 (4K)',
                icon: '🌲',
                soundscape: 'forest',
                draw: (ctx, w, h) => this.drawCuratedForestRiver(ctx, w, h)
            },
            {
                id: 'dungeon',
                name: 'Stone Crypt Dungeon',
                tag: '3840×2160 (4K)',
                icon: '🏰',
                soundscape: 'cave',
                draw: (ctx, w, h) => this.drawCuratedCryptDungeon(ctx, w, h)
            },
            {
                id: 'cavern',
                name: 'Molten Lava Chasm',
                tag: '3840×2160 (4K)',
                icon: '🌋',
                soundscape: 'volcano',
                draw: (ctx, w, h) => this.drawCuratedLavaChasm(ctx, w, h)
            },
            {
                id: 'tavern',
                name: 'Cozy Tavern Taproom',
                tag: '3840×2160 (4K)',
                icon: '🍺',
                soundscape: 'tavern',
                draw: (ctx, w, h) => this.drawCuratedTavernTaproom(ctx, w, h)
            },
            {
                id: 'desert',
                name: 'Desert Oasis Ruins',
                tag: '3840×2160 (4K)',
                icon: '🏜️',
                soundscape: 'wind',
                draw: (ctx, w, h) => this.drawCuratedDesertOasis(ctx, w, h)
            },
            {
                id: 'cyber',
                name: 'Cyberpunk Rain Alley',
                tag: '3840×2160 (4K)',
                icon: '🏙️',
                soundscape: 'cyberpunk',
                draw: (ctx, w, h) => this.drawCuratedCyberpunkAlley(ctx, w, h)
            },
            {
                id: 'crystal',
                name: 'Luminous Crystal Cavern',
                tag: '3840×2160 (4K)',
                icon: '🔮',
                soundscape: 'cave',
                draw: (ctx, w, h) => this.drawCuratedCrystalCavern(ctx, w, h)
            },
            {
                id: 'ship',
                name: 'Starship Command Deck',
                tag: '3840×2160 (4K)',
                icon: '🚀',
                soundscape: 'starship',
                draw: (ctx, w, h) => this.drawCuratedStarshipBridge(ctx, w, h)
            }
        ];

        this._presetCache = {};
        // Alias CURATED_MAPS for app.js thumbnail & grid renderers
        this.CURATED_MAPS = this.curatedPresets.map(p => ({
            id: p.id,
            title: p.name,
            subtitle: p.tag,
            soundscape: p.soundscape,
            render: p.draw
        }));
        this.loadSavedState();
    }

    onChange(callback) {
        this.listeners.push(callback);
    }

    notify() {
        const data = {
            history: this.history,
            searchResults: this.searchResults,
            toggles: this.promptToggles,
            state: this.state
        };
        this.listeners.forEach(cb => cb(data));
        this.saveState();
    }

    // ------------------------------------------------------------------------
    // FLOATING AI COMPANION POPUP WINDOW (M&M GM Suite Pattern)
    // Opens a compact companion window docked on the right side of the screen
    // ------------------------------------------------------------------------
    openFloatingAIPopup(url, title = 'MapStudioCompanion') {
        const sw = window.screen.availWidth || 1920;
        const sh = window.screen.availHeight || 1080;
        const w = Math.min(680, Math.max(520, Math.floor(sw * 0.42)));
        const h = Math.min(880, Math.max(640, Math.floor(sh * 0.88)));
        const left = Math.max(10, sw - w - 24);
        const top = Math.max(10, Math.floor((sh - h) / 2));
        const features = `width=${w},height=${h},left=${left},top=${top},menubar=no,toolbar=no,location=yes,status=no,resizable=yes,scrollbars=yes`;
        this.popoutWin = window.open(url, title, features);
        if (this.popoutWin) {
            try { this.popoutWin.focus(); } catch (e) {}
        }
        return this.popoutWin;
    }

    // ------------------------------------------------------------------------
    // RESOLUTION, ORIENTATION & ASPECT FIT/CROP MANAGEMENT
    // ------------------------------------------------------------------------
    setResolution(w, h, tag = '') {
        let numW = Math.max(256, Math.min(8192, parseInt(w, 10) || 3840));
        let numH = Math.max(256, Math.min(8192, parseInt(h, 10) || 2160));

        // Respect active Landscape / Portrait orientation for non-square presets
        if (numW !== numH) {
            if (this.state.orientation === 'portrait' && numW > numH) {
                const tmp = numW; numW = numH; numH = tmp;
            } else if (this.state.orientation === 'landscape' && numH > numW) {
                const tmp = numW; numW = numH; numH = tmp;
            }
        }

        this.state.w = numW;
        this.state.h = numH;
        const orientSuffix = numW === numH ? 'Square' : (this.state.orientation === 'portrait' ? 'Portrait' : 'Landscape');
        this.state.tag = tag || `${numW}×${numH} (${orientSuffix})`;
        this.saveState();
        return { w: numW, h: numH, tag: this.state.tag };
    }

    setOrientation(orientation) {
        const next = (orientation === 'portrait') ? 'portrait' : 'landscape';
        const changed = (this.state.orientation !== next);
        this.state.orientation = next;
        this.orientation = next;

        if (changed && this.state.w !== this.state.h) {
            const tmp = this.state.w;
            this.state.w = this.state.h;
            this.state.h = tmp;
        }
        const orientLabel = this.state.w === this.state.h ? 'Square' : (next === 'portrait' ? 'Portrait' : 'Landscape');
        this.state.tag = `${this.state.w}×${this.state.h} (${orientLabel})`;
        this.saveState();
        return { w: this.state.w, h: this.state.h, tag: this.state.tag, orientation: next };
    }

    refreshOrientedSizeSpec() {
        const w = this.state.w || 3840;
        const h = this.state.h || 2160;
        const orientLabel = w === h ? 'Square' : (w > h ? 'Landscape' : 'Portrait');
        const badge = `${w} × ${h} (${orientLabel})`;
        this.state.tag = badge;
        this.state.fitMode = this.state.fit || 'cover';
        return { w, h, badge, orientation: this.state.orientation };
    }

    setFitMode(fitMode) {
        if (['cover', 'contain', 'fill'].includes(fitMode)) {
            this.state.fit = fitMode;
            this.state.fitMode = fitMode;
            this.saveState();
        }
        return this.state.fit;
    }

    setAutoUpscale(enabled) {
        this.state.autoUpscale = !!enabled;
        this.saveState();
        return this.state.autoUpscale;
    }

    setStyle(styleText) {
        if (styleText) {
            this.state.style = styleText;
            this.saveState();
        }
    }

    setLighting(lightingText) {
        if (lightingText) {
            this.state.lighting = lightingText;
            this.saveState();
        }
    }

    setLocation(locText) {
        this.state.location = locText || '';
        this.saveState();
    }

    // ------------------------------------------------------------------------
    // MASTER CARTOGRAPHER PROMPT ASSEMBLY (M&M GM Suite + Toggle Modifiers)
    // ------------------------------------------------------------------------
    buildAssembledPrompt(locationText) {
        if (locationText !== undefined) {
            this.state.location = locationText;
        }
        const loc = (this.state.location || '').trim() || 'Ruined sunken elven temple with turquoise water pools and mossy stone columns';
        const w = this.state.w || 3840;
        const h = this.state.h || 2160;
        const orientWord = w === h
            ? '1:1 square arena orientation'
            : (w > h ? 'landscape horizontal orientation' : 'portrait vertical orientation');

        const activePost = this.promptToggles.filter(t => t.active).map(t => t.text);

        const parts = [
            'Masterpiece tabletop RPG battle map',
            `${this.state.style} of ${loc}`,
            this.state.lighting,
            `native ${w}x${h} pixel resolution (${orientWord})`
        ];

        if (activePost.length > 0) {
            parts.push(activePost.join(', '));
        }

        return parts.join(', ') + '.';
    }

    togglePromptChip(id, forceState) {
        const item = this.promptToggles.find(t => t.id === id);
        if (!item) return false;
        item.active = forceState !== undefined ? forceState : !item.active;
        this.saveState();
        return item.active;
    }

    setAllToggles(activeState, coreOnly = false) {
        const coreIds = ['flat2d', 'tactical', 'ungridded', 'nominis', 'notext', 'textures8k'];
        this.promptToggles.forEach(t => {
            if (coreOnly) {
                t.active = coreIds.includes(t.id) ? activeState : false;
            } else {
                t.active = activeState;
            }
        });
        this.saveState();
    }

    buildSearchQuery(locationText) {
        const raw = (locationText !== undefined ? locationText : this.state.location) || 'forest river';
        const concise = raw
            .replace(/^a\s+|^an\s+|^the\s+/i, '')
            .replace(/\b(with|and|of|in|on)\b.*$/i, '')
            .trim() || raw.trim() || 'fantasy dungeon';
        return `${concise} battlemap 4k`;
    }

    // ------------------------------------------------------------------------
    // POPOUT SEARCH & AI STUDIO LAUNCHERS
    // ------------------------------------------------------------------------
    async openPopoutSearch(target = 'gemini', locationText, assembledPrompt) {
        const fullPrompt = (assembledPrompt || this.buildAssembledPrompt(locationText)).trim();

        // Always copy prompt to clipboard so user can immediately press Ctrl+V in Gemini
        try {
            await navigator.clipboard.writeText(fullPrompt);
        } catch (e) {}

        const url = 'https://gemini.google.com/app';
        const winName = 'GeminiBattlemapPopup';

        this.openFloatingAIPopup(url, winName);
        return { url, copiedPrompt: fullPrompt };
    }

    // ------------------------------------------------------------------------
    // TARGET 4K CANVAS UPSCALING, ASPECT FIT/CROP & CONVOLUTION SHARPNESS
    // ------------------------------------------------------------------------
    renderFinalAdjustedCanvas(sourceImg, targetW, targetH, adjustments = {}) {
        const img = sourceImg || this.state.rawImageObj || document.getElementById('map-image');
        if (!img || !(img.naturalWidth || img.width)) return null;

        const tw = targetW || this.state.w || 3840;
        const th = targetH || this.state.h || 2160;
        const sw = img.naturalWidth || img.width;
        const sh = img.naturalHeight || img.height;

        const brightness = adjustments.brightness !== undefined ? adjustments.brightness : 100;
        const contrast = adjustments.contrast !== undefined ? adjustments.contrast : 100;
        const saturation = adjustments.saturation !== undefined ? adjustments.saturation : 100;
        const sharpness = adjustments.sharpness !== undefined ? adjustments.sharpness : 0;
        const fit = adjustments.fit || this.state.fit || 'cover';

        const canvas = document.createElement('canvas');
        canvas.width = tw;
        canvas.height = th;
        const ctx = canvas.getContext('2d');
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';

        if (brightness !== 100 || contrast !== 100 || saturation !== 100) {
            ctx.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%)`;
        }

        if (fit === 'cover') {
            // Fill & Center-Crop: fills entire target 4K resolution with zero distortion
            const scale = Math.max(tw / sw, th / sh);
            const cropW = tw / scale;
            const cropH = th / scale;
            const cropX = (sw - cropW) / 2;
            const cropY = (sh - cropH) / 2;
            ctx.drawImage(img, cropX, cropY, cropW, cropH, 0, 0, tw, th);
        } else if (fit === 'contain') {
            // Fit Entire Map: preserves full image with clean obsidian borders
            ctx.fillStyle = '#0a0d14';
            ctx.fillRect(0, 0, tw, th);
            const scale = Math.min(tw / sw, th / sh);
            const dw = sw * scale;
            const dh = sh * scale;
            const dx = (tw - dw) / 2;
            const dy = (th - dh) / 2;
            ctx.drawImage(img, 0, 0, sw, sh, dx, dy, dw, dh);
        } else {
            // Stretch to exact dimensions
            ctx.drawImage(img, 0, 0, sw, sh, 0, 0, tw, th);
        }

        ctx.filter = 'none';

        if (sharpness > 0) {
            this.applySharpnessConvolution(ctx, tw, th, (sharpness / 100) * 1.35);
        }

        return canvas;
    }

    applySharpnessConvolution(ctx, w, h, s) {
        try {
            const src = ctx.getImageData(0, 0, w, h);
            const dst = ctx.createImageData(w, h);
            const sData = src.data;
            const dData = dst.data;
            const centerWeight = 1 + 4 * s;
            const negWeight = -s;

            for (let y = 1; y < h - 1; y++) {
                const rowOffset = y * w;
                const prevRow = (y - 1) * w;
                const nextRow = (y + 1) * w;
                for (let x = 1; x < w - 1; x++) {
                    const idx = (rowOffset + x) * 4;
                    const upIdx = (prevRow + x) * 4;
                    const dnIdx = (nextRow + x) * 4;
                    const lfIdx = (rowOffset + x - 1) * 4;
                    const rtIdx = (rowOffset + x + 1) * 4;

                    for (let c = 0; c < 3; c++) {
                        const val = centerWeight * sData[idx + c] +
                            negWeight * (sData[upIdx + c] + sData[dnIdx + c] + sData[lfIdx + c] + sData[rtIdx + c]);
                        dData[idx + c] = val < 0 ? 0 : (val > 255 ? 255 : val);
                    }
                    dData[idx + 3] = sData[idx + 3];
                }
            }
            ctx.putImageData(dst, 0, 0);
        } catch (e) {
            // Ignore if cross-origin image taints canvas
        }
    }

    /**
     * Loads an image source, optionally auto-upscaling & fitting it to Target 4K Resolution (`state.w` x `state.h`),
     * and returns `{ dataUrl, finalUrl, width, height, originalWidth, originalHeight, wasUpscaled, wasAdjusted }`.
     */
    processAndFitImage(srcUrl, forceUpscaleOrName = false, maybeForceUpscale = false) {
        const forceUpscale = (typeof forceUpscaleOrName === 'boolean') ? forceUpscaleOrName : !!maybeForceUpscale;
        const name = (typeof forceUpscaleOrName === 'string') ? forceUpscaleOrName : 'Battlemap';
        return new Promise((resolve) => {
            const tryLoad = (useCors) => {
                const img = new Image();
                if (useCors && !srcUrl.startsWith('data:')) {
                    img.crossOrigin = 'anonymous';
                }
                img.onload = () => {
                    this.state.rawImageObj = img;
                    this.state.rawImageSrc = srcUrl;
                    this.state.currentMapName = name || 'Battlemap';

                    const nw = img.naturalWidth || img.width || 1920;
                    const nh = img.naturalHeight || img.height || 1080;
                    const targetW = this.state.w || 3840;
                    const targetH = this.state.h || 2160;
                    const isDifferent = (nw !== targetW || nh !== targetH);

                    if ((forceUpscale || (this.state.autoUpscale && isDifferent))) {
                        try {
                            const c = this.renderFinalAdjustedCanvas(img, targetW, targetH, {
                                brightness: 100,
                                contrast: 100,
                                saturation: 100,
                                sharpness: 0,
                                fit: this.state.fit
                            });
                            if (c) {
                                const dataUrl = c.toDataURL('image/jpeg', 0.94);
                                resolve({
                                    dataUrl: dataUrl,
                                    finalUrl: dataUrl,
                                    width: targetW,
                                    height: targetH,
                                    originalWidth: nw,
                                    originalHeight: nh,
                                    wasUpscaled: true,
                                    wasAdjusted: true
                                });
                                return;
                            }
                        } catch (err) {
                            // Cross-origin image tainted canvas; fall back to native srcUrl
                        }
                    }

                    resolve({
                        dataUrl: srcUrl,
                        finalUrl: srcUrl,
                        width: nw,
                        height: nh,
                        originalWidth: nw,
                        originalHeight: nh,
                        wasUpscaled: false,
                        wasAdjusted: false
                    });
                };
                img.onerror = () => {
                    if (useCors && !srcUrl.startsWith('data:')) {
                        // Retry without crossOrigin attribute so external non-CORS URLs still display
                        tryLoad(false);
                    } else {
                        resolve({
                            dataUrl: srcUrl,
                            finalUrl: srcUrl,
                            width: this.state.w || 3840,
                            height: this.state.h || 2160,
                            originalWidth: 0,
                            originalHeight: 0,
                            wasUpscaled: false,
                            wasAdjusted: false
                        });
                    }
                };
                img.src = srcUrl;
            };

            tryLoad(true);
        });
    }

    // ------------------------------------------------------------------------
    // CURATED 4K PROCEDURAL BATTLEMAP GENERATOR (8 High-Detail 3840x2160 Maps)
    // ------------------------------------------------------------------------
    generateCurated4KMap(presetId, customW, customH) {
        const preset = this.curatedPresets.find(p => p.id === presetId) || this.curatedPresets[0];
        const w = customW || this.state.w || 3840;
        const h = customH || this.state.h || 2160;
        const cacheKey = `${preset.id}_${w}x${h}`;

        if (this._presetCache[cacheKey]) {
            return {
                id: preset.id,
                name: preset.name,
                title: preset.name,
                url: this._presetCache[cacheKey],
                dataUrl: this._presetCache[cacheKey],
                width: w,
                height: h,
                soundscape: preset.soundscape
            };
        }

        const canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        preset.draw(ctx, w, h);

        const dataUrl = canvas.toDataURL('image/jpeg', 0.93);
        this._presetCache[cacheKey] = dataUrl;

        return {
            id: preset.id,
            name: preset.name,
            title: preset.name,
            url: dataUrl,
            dataUrl: dataUrl,
            width: w,
            height: h,
            soundscape: preset.soundscape
        };
    }

    async generateKeylessMap(assembledPrompt, locLabel) {
        return this.generateSceneMatched4KMap(locLabel || assembledPrompt, locLabel);
    }

    async searchMapsInTool(query) {
        const q = (query || 'battlemap').trim();
        const items = [];
        try {
            const url = `https://www.reddit.com/r/battlemaps/search.json?q=${encodeURIComponent(q)}&restrict_sr=1&sort=top&limit=18`;
            const resp = await fetch(url);
            if (resp.ok) {
                const json = await resp.json();
                const children = (json && json.data && json.data.children) ? json.data.children : [];
                for (const c of children) {
                    const d = c.data;
                    if (!d || !d.url) continue;
                    if (/\.(jpg|jpeg|png|webp)$/i.test(d.url)) {
                        items.push({
                            id: d.id,
                            title: d.title || q,
                            url: d.url,
                            thumb: (d.thumbnail && /^https?:\/\//.test(d.thumbnail)) ? d.thumbnail : d.url,
                            width: (d.preview && d.preview.images && d.preview.images[0] && d.preview.images[0].source) ? d.preview.images[0].source.width : 3840,
                            height: (d.preview && d.preview.images && d.preview.images[0] && d.preview.images[0].source) ? d.preview.images[0].source.height : 2160
                        });
                    }
                }
            }
        } catch (e) {
            // Local file:// or offline mode: fall back to matching Curated 4K Procedural Maps
        }

        if (items.length === 0) {
            this.curatedPresets.forEach(p => {
                const c = document.createElement('canvas');
                c.width = 320;
                c.height = 180;
                p.draw(c.getContext('2d'), 320, 180);
                const thumbUrl = c.toDataURL('image/jpeg', 0.85);
                items.push({
                    id: `curated_${p.id}`,
                    curatedId: p.id,
                    title: `${p.name} (4K Procedural)`,
                    url: thumbUrl,
                    thumb: thumbUrl,
                    width: this.state.w || 3840,
                    height: this.state.h || 2160
                });
            });
        }

        this.searchResults = items;
        return items;
    }

    /**
     * Generates a custom 4K procedural battlemap matched to the user's scene keywords & target resolution
     */
    async generateSceneMatched4KMap(sceneText, labelName) {
        const text = ((sceneText || this.state.location || '') + ' ' + (this.state.lighting || '')).toLowerCase();
        let matchId = 'forest';

        if (/cyber|neon|alley|street|modern|city|noir|asphalt/.test(text)) matchId = 'cyber';
        else if (/starship|sci-fi|scifi|bridge|space|deck|hull|laser|cargo/.test(text)) matchId = 'ship';
        else if (/crystal|biolum|mushroom|underdark|fey|amethyst|cave/.test(text)) matchId = 'crystal';
        else if (/lava|magma|volcan|forge|dwarv|hell|inferno|brimstone/.test(text)) matchId = 'cavern';
        else if (/tavern|inn|taproom|bar|hearth|pub|feast/.test(text)) matchId = 'tavern';
        else if (/desert|oasis|sand|dune|canyon|arid|pyramid|ruin/.test(text)) matchId = 'desert';
        else if (/crypt|dungeon|tomb|cathedral|temple|graveyard|gothic|vault|castle/.test(text)) matchId = 'dungeon';
        else matchId = 'forest';

        const w = this.state.w || 3840;
        const h = this.state.h || 2160;
        const generated = this.generateCurated4KMap(matchId, w, h);
        const item = {
            id: `map_${Date.now()}`,
            prompt: labelName || generated.name,
            fullPrompt: this.buildAssembledPrompt(),
            provider: `4K Studio (${w}×${h})`,
            url: generated.url,
            width: w,
            height: h,
            soundscape: generated.soundscape,
            timestamp: new Date().toISOString()
        };
        this.addToHistory(item);
        return item;
    }

    // ------------------------------------------------------------------------
    // 8 PROCEDURAL 4K CARTOGRAPHIC RENDERERS (Works at both 160x90 thumb & 3840x2160 4K)
    // ------------------------------------------------------------------------

    drawCuratedForestRiver(ctx, w, h) {
        const baseGrad = ctx.createRadialGradient(w * 0.5, h * 0.5, w * 0.08, w * 0.5, h * 0.5, w * 0.72);
        baseGrad.addColorStop(0, '#2a4724');
        baseGrad.addColorStop(0.55, '#1e361a');
        baseGrad.addColorStop(1, '#142612');
        ctx.fillStyle = baseGrad;
        ctx.fillRect(0, 0, w, h);

        // Organic forest floor moss & turf patches (deterministic pseudo-random so thumbs & 4K match)
        for (let i = 0; i < 320; i++) {
            const s1 = Math.abs(Math.sin(i * 12.9898) * 43758.5453) % 1;
            const s2 = Math.abs(Math.cos(i * 78.233) * 29183.123) % 1;
            const s3 = Math.abs(Math.sin(i * 39.346) * 19283.456) % 1;
            ctx.fillStyle = (i % 3 === 0) ? 'rgba(46, 82, 38, 0.35)' : (i % 2 === 0 ? 'rgba(22, 44, 20, 0.35)' : 'rgba(58, 42, 26, 0.22)');
            ctx.beginPath();
            ctx.arc(s1 * w, s2 * h, (0.004 + s3 * 0.014) * w, 0, Math.PI * 2);
            ctx.fill();
        }

        // Winding Dirt Forest Road
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#4a3828';
        ctx.lineWidth = h * 0.11;
        ctx.beginPath();
        ctx.moveTo(0, h * 0.52);
        ctx.bezierCurveTo(w * 0.32, h * 0.46, w * 0.68, h * 0.58, w, h * 0.50);
        ctx.stroke();

        ctx.strokeStyle = '#5e4835';
        ctx.lineWidth = h * 0.07;
        ctx.stroke();

        // Meandering River Channel
        ctx.strokeStyle = '#163e63';
        ctx.lineWidth = h * 0.22;
        ctx.beginPath();
        ctx.moveTo(w * 0.44, -h * 0.05);
        ctx.bezierCurveTo(w * 0.34, h * 0.38, w * 0.62, h * 0.62, w * 0.48, h * 1.05);
        ctx.stroke();

        ctx.strokeStyle = '#1e5b8a';
        ctx.lineWidth = h * 0.16;
        ctx.stroke();

        ctx.strokeStyle = '#38bdf8';
        ctx.globalAlpha = 0.32;
        ctx.lineWidth = h * 0.09;
        ctx.stroke();
        ctx.globalAlpha = 1.0;

        // Rustic Timber Bridge at River Crossing
        const bx = w * 0.37, by = h * 0.45, bw = w * 0.22, bh = h * 0.13;
        ctx.fillStyle = 'rgba(0,0,0,0.45)';
        ctx.fillRect(bx + w * 0.006, by + h * 0.01, bw, bh);
        ctx.fillStyle = '#6b3410';
        ctx.fillRect(bx, by, bw, bh);
        ctx.strokeStyle = '#3d1d06';
        ctx.lineWidth = Math.max(1, w * 0.0025);
        const step = bw / 12;
        for (let x = bx; x <= bx + bw; x += step) {
            ctx.beginPath();
            ctx.moveTo(x, by);
            ctx.lineTo(x, by + bh);
            ctx.stroke();
        }

        // Ancient Standing Stone Circle on East Bank
        const cx = w * 0.76, cy = h * 0.32, rr = w * 0.075;
        for (let s = 0; s < 8; s++) {
            const ang = (s / 8) * Math.PI * 2;
            const sx = cx + Math.cos(ang) * rr;
            const sy = cy + Math.sin(ang) * rr;
            ctx.fillStyle = 'rgba(0,0,0,0.45)';
            ctx.beginPath();
            ctx.arc(sx + w * 0.004, sy + h * 0.006, w * 0.011, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#6c757d';
            ctx.beginPath();
            ctx.arc(sx, sy, w * 0.010, 0, Math.PI * 2);
            ctx.fill();
        }

        // Perimeter Tree Canopies
        for (let i = 0; i < 36; i++) {
            const h1 = Math.abs(Math.sin(i * 91.7) * 43758.5) % 1;
            const h2 = Math.abs(Math.cos(i * 47.3) * 29183.1) % 1;
            const tx = (i % 2 === 0) ? (h1 * w * 0.30) : (w * 0.68 + h1 * w * 0.30);
            const ty = h2 * h;
            if (Math.abs(ty - h * 0.52) < h * 0.12) continue;
            const tr = (0.024 + (i % 4) * 0.007) * w;
            ctx.fillStyle = 'rgba(0, 0, 0, 0.42)';
            ctx.beginPath();
            ctx.arc(tx + tr * 0.18, ty + tr * 0.22, tr, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#143318';
            ctx.beginPath();
            ctx.arc(tx, ty, tr, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#1f4f24';
            ctx.beginPath();
            ctx.arc(tx - tr * 0.12, ty - tr * 0.12, tr * 0.74, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    drawCuratedCryptDungeon(ctx, w, h) {
        ctx.fillStyle = '#0b0e14';
        ctx.fillRect(0, 0, w, h);

        const rx = w * 0.08, ry = h * 0.09, rw = w * 0.84, rh = h * 0.82;
        ctx.fillStyle = '#171c26';
        ctx.fillRect(rx, ry, rw, rh);

        const cols = 28, rows = 16;
        const tw = rw / cols, th = rh / rows;
        ctx.lineWidth = Math.max(1, w * 0.0012);
        for (let c = 0; c < cols; c++) {
            for (let r = 0; r < rows; r++) {
                const hash = Math.abs(Math.sin(c * 19.3 + r * 43.7) * 1397.1) % 1;
                const shade = Math.floor(hash * 16);
                ctx.fillStyle = `rgb(${26 + shade}, ${31 + shade}, ${40 + shade})`;
                ctx.fillRect(rx + c * tw + 1, ry + r * th + 1, tw - 2, th - 2);
            }
        }

        // Central Ritual Dais & Runic Circle
        const cx = w * 0.5, cy = h * 0.5;
        ctx.fillStyle = '#202736';
        ctx.beginPath();
        ctx.arc(cx, cy, h * 0.20, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = Math.max(1.5, w * 0.002);
        ctx.beginPath();
        ctx.arc(cx, cy, h * 0.16, 0, Math.PI * 2);
        ctx.stroke();

        // Sarcophagi Altar Slab
        ctx.fillStyle = '#334155';
        ctx.fillRect(cx - w * 0.045, cy - h * 0.06, w * 0.09, h * 0.12);
        ctx.strokeStyle = '#64748b';
        ctx.strokeRect(cx - w * 0.045, cy - h * 0.06, w * 0.09, h * 0.12);

        // 8 Heavy Columns & Warm Brazier Torch Pools
        const xPositions = [w * 0.22, w * 0.38, w * 0.62, w * 0.78];
        const yPositions = [h * 0.26, h * 0.74];
        xPositions.forEach(px => {
            yPositions.forEach(py => {
                const g = ctx.createRadialGradient(px, py, w * 0.005, px, py, w * 0.09);
                g.addColorStop(0, 'rgba(251, 146, 60, 0.55)');
                g.addColorStop(0.5, 'rgba(234, 88, 12, 0.18)');
                g.addColorStop(1, 'rgba(0,0,0,0)');
                ctx.fillStyle = g;
                ctx.beginPath();
                ctx.arc(px, py, w * 0.09, 0, Math.PI * 2);
                ctx.fill();

                ctx.fillStyle = '#0f172a';
                ctx.beginPath();
                ctx.arc(px, py, w * 0.022, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = '#475569';
                ctx.lineWidth = Math.max(1.5, w * 0.002);
                ctx.stroke();
            });
        });

        ctx.strokeStyle = '#06080c';
        ctx.lineWidth = Math.max(3, w * 0.008);
        ctx.strokeRect(rx, ry, rw, rh);
    }

    drawCuratedLavaChasm(ctx, w, h) {
        ctx.fillStyle = '#181316';
        ctx.fillRect(0, 0, w, h);

        // Craggy Basalt Floor Texture
        for (let i = 0; i < 240; i++) {
            const h1 = Math.abs(Math.sin(i * 33.1) * 9973.3) % 1;
            const h2 = Math.abs(Math.cos(i * 61.7) * 7919.7) % 1;
            ctx.fillStyle = (i % 2 === 0) ? 'rgba(38, 28, 32, 0.5)' : 'rgba(18, 12, 15, 0.5)';
            ctx.beginPath();
            ctx.arc(h1 * w, h2 * h, (0.006 + (i % 5) * 0.004) * w, 0, Math.PI * 2);
            ctx.fill();
        }

        // Molten Magma Chasm River
        const g = ctx.createLinearGradient(w * 0.30, 0, w * 0.70, 0);
        g.addColorStop(0, '#9a1b08');
        g.addColorStop(0.25, '#ea580c');
        g.addColorStop(0.5, '#fde047');
        g.addColorStop(0.75, '#ea580c');
        g.addColorStop(1, '#9a1b08');

        ctx.lineCap = 'round';
        ctx.strokeStyle = g;
        ctx.lineWidth = w * 0.24;
        ctx.beginPath();
        ctx.moveTo(w * 0.54, -h * 0.05);
        ctx.quadraticCurveTo(w * 0.40, h * 0.50, w * 0.52, h * 1.05);
        ctx.stroke();

        // Dwarven Obsidian Bridge Span
        ctx.fillStyle = '#292524';
        ctx.fillRect(w * 0.32, h * 0.43, w * 0.36, h * 0.14);
        ctx.strokeStyle = '#57534e';
        ctx.lineWidth = Math.max(2, w * 0.003);
        ctx.strokeRect(w * 0.32, h * 0.43, w * 0.36, h * 0.14);

        // Radiant Magma Heat Glow
        const aura = ctx.createRadialGradient(w * 0.5, h * 0.5, w * 0.05, w * 0.5, h * 0.5, w * 0.55);
        aura.addColorStop(0, 'rgba(249, 115, 22, 0.28)');
        aura.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = aura;
        ctx.fillRect(0, 0, w, h);
    }

    drawCuratedTavernTaproom(ctx, w, h) {
        ctx.fillStyle = '#1f0d04';
        ctx.fillRect(0, 0, w, h);

        const plankH = h / 26;
        ctx.lineWidth = Math.max(1, w * 0.001);
        ctx.strokeStyle = '#1c0a02';
        for (let r = 0; r < 26; r++) {
            const y = r * plankH;
            ctx.fillStyle = (r % 2 === 0) ? '#472009' : '#3b1906';
            ctx.fillRect(0, y, w, plankH);
            ctx.strokeRect(0, y, w, plankH);
        }

        // L-Shaped Oak Bar Counter
        ctx.fillStyle = '#260e03';
        ctx.fillRect(w * 0.08, h * 0.14, w * 0.36, h * 0.08);
        ctx.fillRect(w * 0.38, h * 0.14, w * 0.06, h * 0.42);
        ctx.strokeStyle = '#78350f';
        ctx.lineWidth = Math.max(2, w * 0.002);
        ctx.strokeRect(w * 0.08, h * 0.14, w * 0.36, h * 0.08);

        // Round Tavern Tables & Stools
        const tables = [
            [w * 0.64, h * 0.28], [w * 0.84, h * 0.28],
            [w * 0.64, h * 0.66], [w * 0.84, h * 0.66],
            [w * 0.24, h * 0.72]
        ];
        tables.forEach(([tx, ty]) => {
            ctx.fillStyle = 'rgba(0,0,0,0.45)';
            ctx.beginPath();
            ctx.arc(tx + w * 0.005, ty + h * 0.008, w * 0.044, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#2e1205';
            ctx.beginPath();
            ctx.arc(tx, ty, w * 0.042, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = '#92400e';
            ctx.lineWidth = Math.max(2, w * 0.002);
            ctx.stroke();
        });

        // Roaring North Hearth Glow
        const fg = ctx.createRadialGradient(w * 0.55, 0, w * 0.01, w * 0.55, 0, w * 0.38);
        fg.addColorStop(0, 'rgba(251, 146, 60, 0.72)');
        fg.addColorStop(0.5, 'rgba(234, 88, 12, 0.25)');
        fg.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = fg;
        ctx.fillRect(0, 0, w, h);
    }

    drawCuratedDesertOasis(ctx, w, h) {
        const sandGrad = ctx.createLinearGradient(0, 0, w, h);
        sandGrad.addColorStop(0, '#d99b52');
        sandGrad.addColorStop(0.5, '#c28138');
        sandGrad.addColorStop(1, '#a66824');
        ctx.fillStyle = sandGrad;
        ctx.fillRect(0, 0, w, h);

        // Windblown Sand Dune Ripples
        ctx.strokeStyle = 'rgba(120, 68, 18, 0.35)';
        ctx.lineWidth = h * 0.018;
        for (let i = 0; i < 7; i++) {
            const y = (i + 0.5) * (h / 7);
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.bezierCurveTo(w * 0.33, y - h * 0.05, w * 0.66, y + h * 0.05, w, y - h * 0.02);
            ctx.stroke();
        }

        // Verdant Fringe & Turquoise Oasis Pool
        ctx.fillStyle = '#2f5e27';
        ctx.beginPath();
        ctx.ellipse(w * 0.5, h * 0.52, w * 0.24, h * 0.23, 0.15, 0, Math.PI * 2);
        ctx.fill();

        const og = ctx.createRadialGradient(w * 0.5, h * 0.52, w * 0.01, w * 0.5, h * 0.52, w * 0.22);
        og.addColorStop(0, '#0369a1');
        og.addColorStop(0.65, '#0891b2');
        og.addColorStop(1, '#0d9488');
        ctx.fillStyle = og;
        ctx.beginPath();
        ctx.ellipse(w * 0.5, h * 0.52, w * 0.21, h * 0.19, 0.15, 0, Math.PI * 2);
        ctx.fill();

        // Crumbling Sandstone Ruin Columns
        [[w * 0.24, h * 0.28], [w * 0.76, h * 0.28], [w * 0.24, h * 0.74], [w * 0.76, h * 0.74]].forEach(([px, py]) => {
            ctx.fillStyle = '#fde68a';
            ctx.fillRect(px - w * 0.022, py - h * 0.035, w * 0.044, h * 0.07);
            ctx.strokeStyle = '#78350f';
            ctx.lineWidth = Math.max(1.5, w * 0.002);
            ctx.strokeRect(px - w * 0.022, py - h * 0.035, w * 0.044, h * 0.07);
        });
    }

    drawCuratedCyberpunkAlley(ctx, w, h) {
        ctx.fillStyle = '#090d16';
        ctx.fillRect(0, 0, w, h);

        // Wet Asphalt Street & Sidewalks
        ctx.fillStyle = '#111827';
        ctx.fillRect(w * 0.16, 0, w * 0.68, h);
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = Math.max(2, w * 0.003);
        ctx.strokeRect(w * 0.16, -10, w * 0.68, h + 20);

        // Neon Rain Puddle Reflections
        const p1 = ctx.createRadialGradient(w * 0.42, h * 0.38, w * 0.01, w * 0.42, h * 0.38, w * 0.18);
        p1.addColorStop(0, 'rgba(6, 182, 212, 0.48)');
        p1.addColorStop(1, 'rgba(6, 182, 212, 0)');
        ctx.fillStyle = p1;
        ctx.beginPath();
        ctx.ellipse(w * 0.42, h * 0.38, w * 0.18, h * 0.11, 0.3, 0, Math.PI * 2);
        ctx.fill();

        const p2 = ctx.createRadialGradient(w * 0.58, h * 0.66, w * 0.01, w * 0.58, h * 0.66, w * 0.20);
        p2.addColorStop(0, 'rgba(236, 72, 153, 0.48)');
        p2.addColorStop(1, 'rgba(236, 72, 153, 0)');
        ctx.fillStyle = p2;
        ctx.beginPath();
        ctx.ellipse(w * 0.58, h * 0.66, w * 0.20, h * 0.12, -0.25, 0, Math.PI * 2);
        ctx.fill();

        // Cyan & Hot-Pink Storefront Neon Glows
        const neonCyan = ctx.createLinearGradient(0, 0, w * 0.22, 0);
        neonCyan.addColorStop(0, 'rgba(6, 182, 212, 0.85)');
        neonCyan.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = neonCyan;
        ctx.fillRect(0, 0, w * 0.22, h);

        const neonPink = ctx.createLinearGradient(w, 0, w * 0.78, 0);
        neonPink.addColorStop(0, 'rgba(236, 72, 153, 0.85)');
        neonPink.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = neonPink;
        ctx.fillRect(w * 0.78, 0, w * 0.22, h);
    }

    drawCuratedCrystalCavern(ctx, w, h) {
        ctx.fillStyle = '#090c15';
        ctx.fillRect(0, 0, w, h);

        // Subterranean Dark Lake
        const lake = ctx.createRadialGradient(w * 0.5, h * 0.5, w * 0.02, w * 0.5, h * 0.5, w * 0.36);
        lake.addColorStop(0, '#1e1b4b');
        lake.addColorStop(0.6, '#0f172a');
        lake.addColorStop(1, '#090c15');
        ctx.fillStyle = lake;
        ctx.fillRect(0, 0, w, h);

        const clusters = [
            [w * 0.24, h * 0.28, '#a855f7'],
            [w * 0.76, h * 0.32, '#06b6d4'],
            [w * 0.32, h * 0.74, '#ec4899'],
            [w * 0.72, h * 0.72, '#8b5cf6'],
            [w * 0.50, h * 0.50, '#38bdf8']
        ];
        clusters.forEach(([cx, cy, col]) => {
            const rad = ctx.createRadialGradient(cx, cy, w * 0.005, cx, cy, w * 0.16);
            rad.addColorStop(0, col);
            rad.addColorStop(0.35, col + '55');
            rad.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = rad;
            ctx.beginPath();
            ctx.arc(cx, cy, w * 0.16, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#f8fafc';
            for (let a = 0; a < Math.PI * 2; a += Math.PI / 4) {
                ctx.beginPath();
                ctx.moveTo(cx, cy);
                ctx.lineTo(cx + Math.cos(a - 0.18) * (w * 0.015), cy + Math.sin(a - 0.18) * (w * 0.015));
                ctx.lineTo(cx + Math.cos(a) * (w * 0.045), cy + Math.sin(a) * (w * 0.045));
                ctx.closePath();
                ctx.fill();
            }
        });
    }

    drawCuratedStarshipBridge(ctx, w, h) {
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(0, 0, w, h);

        // Metallic Deck Plating Grid
        ctx.strokeStyle = '#1e293b';
        ctx.lineWidth = Math.max(1, w * 0.0012);
        const pw = w / 20, ph = h / 12;
        for (let x = 0; x < w; x += pw) {
            for (let y = 0; y < h; y += ph) {
                ctx.strokeRect(x, y, pw, ph);
            }
        }

        // Central Astrogation Holo-Table
        ctx.fillStyle = '#090d16';
        ctx.beginPath();
        ctx.arc(w * 0.5, h * 0.5, w * 0.085, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = Math.max(2, w * 0.0025);
        ctx.stroke();

        const hg = ctx.createRadialGradient(w * 0.5, h * 0.5, w * 0.005, w * 0.5, h * 0.5, w * 0.10);
        hg.addColorStop(0, 'rgba(56, 189, 248, 0.72)');
        hg.addColorStop(0.6, 'rgba(56, 189, 248, 0.20)');
        hg.addColorStop(1, 'rgba(56, 189, 248, 0)');
        ctx.fillStyle = hg;
        ctx.beginPath();
        ctx.arc(w * 0.5, h * 0.5, w * 0.10, 0, Math.PI * 2);
        ctx.fill();

        // Tactical Command Consoles
        ctx.fillStyle = '#334155';
        ctx.fillRect(w * 0.34, h * 0.18, w * 0.32, h * 0.06);
        ctx.fillRect(w * 0.26, h * 0.76, w * 0.48, h * 0.06);
        ctx.strokeStyle = '#0ea5e9';
        ctx.lineWidth = Math.max(1, w * 0.0015);
        ctx.strokeRect(w * 0.34, h * 0.18, w * 0.32, h * 0.06);
        ctx.strokeRect(w * 0.26, h * 0.76, w * 0.48, h * 0.06);
    }

    // ------------------------------------------------------------------------
    // HISTORY & PERSISTENCE
    // ------------------------------------------------------------------------
    addToHistory(item) {
        if (!item || !item.url) return;
        this.history = this.history.filter(h => h.url !== item.url);
        this.history.unshift(item);
        if (this.history.length > 20) this.history.pop();
        this.notify();
    }

    clearHistory() {
        this.history = [];
        try {
            localStorage.removeItem('ttrpg_ai_history');
        } catch (e) {}
        this.notify();
    }

    saveState() {
        try {
            const toggleStates = {};
            this.promptToggles.forEach(t => { toggleStates[t.id] = t.active; });
            localStorage.setItem('ttrpg_prompt_toggles', JSON.stringify(toggleStates));

            localStorage.setItem('ttrpg_mapgen_state', JSON.stringify({
                location: this.state.location,
                style: this.state.style,
                lighting: this.state.lighting,
                w: this.state.w,
                h: this.state.h,
                tag: this.state.tag,
                orientation: this.state.orientation,
                fit: this.state.fit,
                autoUpscale: this.state.autoUpscale
            }));

            const lightweight = this.history.slice(0, 10).map(h => ({
                id: h.id,
                prompt: h.prompt,
                provider: h.provider || 'Saved',
                url: (h.url && h.url.length < 350000) ? h.url : ''
            })).filter(h => h.url);
            localStorage.setItem('ttrpg_ai_history', JSON.stringify(lightweight));
        } catch (e) {}
    }

    loadSavedState() {
        try {
            const savedState = localStorage.getItem('ttrpg_mapgen_state');
            if (savedState) {
                const parsed = JSON.parse(savedState);
                Object.assign(this.state, parsed);
            }

            const savedToggles = localStorage.getItem('ttrpg_prompt_toggles');
            if (savedToggles) {
                const map = JSON.parse(savedToggles);
                this.promptToggles.forEach(t => {
                    if (typeof map[t.id] === 'boolean') {
                        t.active = map[t.id];
                    }
                });
            }

            const savedHistory = localStorage.getItem('ttrpg_ai_history');
            if (savedHistory) {
                this.history = JSON.parse(savedHistory);
            }
        } catch (e) {}
    }
}

// Global instance
window.aiMapGenerator = new AIMapGenerator();
