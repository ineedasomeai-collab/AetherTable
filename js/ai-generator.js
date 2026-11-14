/**
 * AI Prompt Builder & In-Tool / Popout Map Studio
 * Zero API Key Required:
 * 1) Interactive Toggle-Based Master Cartographer Prompt Builder (auto-pastes toggled phrases into the prompt/search box)
 * 2) In-Tool Live 4K Battlemap Search (queries r/battlemaps & r/dndmaps directly inside the tool)
 * 3) In-Tool Keyless AI Map Generator (Flux engine, no API key)
 * 4) 1-Click Popout Browser Windows for Google Gemini (Google Pro account), Google Images 4K, Reddit & Pinterest
 */

class AIMapGenerator {
    constructor() {
        this.history = [];
        this.searchResults = [];
        this.isSearching = false;
        this.isGenerating = false;
        this.listeners = [];
        this.aspectRatio = localStorage.getItem('ttrpg_ai_aspect_ratio') || '2:3';
        this.sizeIntent = localStorage.getItem('ttrpg_ai_size_intent') || '24x36';
        this.sizeDesc = 'designed for 24x36 inch physical tabletop battle mat, 2:3 aspect ratio, --ar 2:3';
        this.popoutWin = null;

        // Master Cartographer Prompt Toggles
        // Each toggle represents a segment of the master prompt that auto-pastes into the search/prompt box when active
        this.promptToggles = [
            {
                id: 'masterpiece',
                label: '🏆 Masterpiece RPG Map',
                role: 'prefix',
                text: 'Masterpiece tabletop RPG battle map',
                active: true
            },
            {
                id: 'ortho4k',
                label: '🛰️ 4K Ortho Satellite View',
                role: 'view',
                text: 'ultra-high resolution 4K orthographic top-down satellite view',
                active: true
            },
            {
                id: 'flat2d',
                label: '📐 Flat 2D 90° Camera',
                role: 'post',
                text: 'completely flat 2D perspective, perfectly perpendicular 90-degree camera angle',
                active: true
            },
            {
                id: 'textures8k',
                label: '💎 Razor Sharp 8K Textures',
                role: 'post',
                text: 'razor sharp 8K textures',
                active: true
            },
            {
                id: 'raytraced',
                label: '🌑 Raytraced Ambient Occlusion',
                role: 'post',
                text: 'raytraced ambient occlusion',
                active: true
            },
            {
                id: 'cinematic',
                label: '🎬 Cinematic Lighting',
                role: 'post',
                text: 'cinematic lighting',
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
                text: 'no text labels, no watermark',
                active: true
            },
            {
                id: 'artstation',
                label: '🎨 Trending on Artstation',
                role: 'post',
                text: 'trending on Artstation',
                active: true
            },
            {
                id: 'ue5',
                label: '🎮 Unreal Engine 5 Render',
                role: 'post',
                text: 'Unreal Engine 5 photorealistic environment render',
                active: false
            },
            {
                id: 'handpainted',
                label: '🖌️ Czepeku / FA Style',
                role: 'post',
                text: 'detailed cartography in the style of Czepeku and Forgotten Adventures',
                active: false
            },
            {
                id: 'torchlit',
                label: '🔥 Warm Torchlight & Shadows',
                role: 'post',
                text: 'dramatic warm flickering torchlight and deep subterranean shadows',
                active: false
            }
        ];

        this.loadSavedState();
    }

    onChange(callback) {
        this.listeners.push(callback);
    }

    notify() {
        const data = {
            history: this.history,
            searchResults: this.searchResults,
            toggles: this.promptToggles
        };
        this.listeners.forEach(cb => cb(data));
        this.saveState();
    }

    setAspectRatio(ratio) {
        this.aspectRatio = ratio;
        localStorage.setItem('ttrpg_ai_aspect_ratio', ratio);
    }

    setSizeIntent(size, ratio, desc) {
        this.sizeIntent = size;
        this.aspectRatio = ratio;
        this.sizeDesc = desc;
        localStorage.setItem('ttrpg_ai_size_intent', size);
        localStorage.setItem('ttrpg_ai_aspect_ratio', ratio);
        this.saveState();
    }

    /**
     * Toggle a specific prompt phrase chip on or off
     */
    togglePromptChip(id, forceState) {
        const item = this.promptToggles.find(t => t.id === id);
        if (!item) return;
        item.active = forceState !== undefined ? forceState : !item.active;
        this.saveState();
        return item.active;
    }

    /**
     * Set all core prompt toggles on or off
     */
    setAllToggles(activeState, coreOnly = false) {
        const coreIds = [
            'masterpiece', 'ortho4k', 'flat2d', 'textures8k', 'raytraced',
            'cinematic', 'tactical', 'ungridded', 'nominis', 'notext', 'artstation'
        ];
        this.promptToggles.forEach(t => {
            if (coreOnly) {
                t.active = coreIds.includes(t.id) ? activeState : false;
            } else {
                t.active = activeState;
            }
        });
        this.saveState();
    }

    /**
     * Builds the full assembled prompt from active toggles + user location text + size intent
     */
    buildAssembledPrompt(locationText = '') {
        const loc = (locationText || '').trim() || 'a ruined sunken elven temple with turquoise water pools and mossy stone columns';

        const activePrefix = this.promptToggles.filter(t => t.active && t.role === 'prefix').map(t => t.text);
        const activeView = this.promptToggles.filter(t => t.active && t.role === 'view').map(t => t.text);
        const activePost = this.promptToggles.filter(t => t.active && t.role === 'post').map(t => t.text);

        const parts = [];

        if (activePrefix.length > 0) {
            parts.push(activePrefix.join(', '));
        }

        if (activeView.length > 0) {
            parts.push(`${activeView.join(', ')} of ${loc}`);
        } else {
            parts.push(loc);
        }

        if (activePost.length > 0) {
            parts.push(activePost.join(', '));
        }

        if (this.sizeDesc) {
            parts.push(this.sizeDesc);
        }

        return parts.join(', ') + '.';
    }

    /**
     * Builds a clean search engine query for Google Images / Reddit from the location & key toggles & size intent
     */
    buildSearchQuery(locationText = '') {
        const loc = (locationText || '').trim() || 'ruined temple';
        const hasUngridded = this.promptToggles.some(t => t.id === 'ungridded' && t.active);
        const has4k = this.promptToggles.some(t => t.id === 'ortho4k' && t.active);
        const extras = ['top down RPG battlemap'];
        if (hasUngridded) extras.push('ungridded');
        if (has4k) extras.push('4k');
        if (this.sizeIntent && this.sizeIntent !== '1:1') extras.push(this.sizeIntent);
        return `${loc} ${extras.join(' ')}`.trim();
    }

    /**
     * Launches a dedicated Popout Browser Window for searching or generating maps,
     * and automatically copies the assembled prompt to the user's clipboard.
     */
    async openPopoutSearch(target, locationText, assembledPrompt) {
        const fullPrompt = (assembledPrompt || this.buildAssembledPrompt(locationText)).trim();
        const cleanQuery = this.buildSearchQuery(locationText);
        const rawLoc = (locationText || '').trim() || 'fantasy dungeon';

        // Always copy the full assembled prompt to clipboard so user can press Ctrl+V immediately
        try {
            await navigator.clipboard.writeText(fullPrompt);
        } catch (e) {}

        let url = '';
        if (target === 'gemini') {
            url = 'https://gemini.google.com/app';
        } else if (target === 'google_images') {
            // Google Images filtered to Large (4K/HD) images
            url = `https://www.google.com/search?tbm=isch&tbs=isz:l&q=${encodeURIComponent(cleanQuery)}`;
        } else if (target === 'reddit') {
            url = `https://www.reddit.com/r/battlemaps/search/?q=${encodeURIComponent(rawLoc)}&restrict_sr=1&sort=top`;
        } else if (target === 'pinterest') {
            url = `https://www.pinterest.com/search/pins/?q=${encodeURIComponent(rawLoc + ' dnd battlemap top down')}`;
        } else {
            url = `https://www.google.com/search?tbm=isch&tbs=isz:l&q=${encodeURIComponent(cleanQuery)}`;
        }

        const width = Math.min(1200, Math.round(window.screen.availWidth * 0.72));
        const height = Math.min(860, Math.round(window.screen.availHeight * 0.82));
        const left = Math.max(20, window.screen.availWidth - width - 30);
        const top = 50;

        const features = `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes,status=no,toolbar=yes,menubar=no,location=yes`;
        this.popoutWin = window.open(url, 'AetherTableMapFinderPopout', features);
        if (this.popoutWin) {
            this.popoutWin.focus();
        }
        return { url, copiedPrompt: fullPrompt };
    }

    /**
     * Searches high-resolution TTRPG battlemaps directly inside the tool
     * using Reddit's public JSON API across r/battlemaps and r/dndmaps (Zero API key required)
     */
    async searchMapsInTool(locationQuery) {
        const query = (locationQuery || '').trim() || 'forest river';
        this.isSearching = true;

        try {
            const url1 = `https://www.reddit.com/r/battlemaps/search.json?q=${encodeURIComponent(query)}&restrict_sr=1&sort=top&t=all&limit=30&raw_json=1`;
            const resp = await fetch(url1, {
                headers: { 'Accept': 'application/json' }
            });

            if (!resp.ok) {
                throw new Error(`Search request returned HTTP ${resp.status}`);
            }

            const data = await resp.json();
            const posts = (data && data.data && Array.isArray(data.data.children)) ? data.data.children : [];

            const results = [];
            for (const child of posts) {
                const p = child.data;
                if (!p || p.over_18) continue;

                let fullUrl = '';
                let thumbUrl = '';

                // Direct image post (i.redd.it or i.imgur.com)
                if (p.url && /\.(jpg|jpeg|png|webp)(\?.*)?$/i.test(p.url)) {
                    fullUrl = p.url;
                } else if (p.preview && p.preview.images && p.preview.images[0] && p.preview.images[0].source) {
                    fullUrl = p.preview.images[0].source.url;
                } else if (p.media_metadata) {
                    // Reddit gallery post: grab first high-res gallery image
                    const firstKey = Object.keys(p.media_metadata)[0];
                    const meta = p.media_metadata[firstKey];
                    if (meta && meta.s && meta.s.u) {
                        fullUrl = meta.s.u;
                    }
                }

                if (!fullUrl) continue;

                // Pick a fast preview thumbnail for the grid
                if (p.preview && p.preview.images && p.preview.images[0]) {
                    const resolutions = p.preview.images[0].resolutions || [];
                    const med = resolutions.find(r => r.width >= 320 && r.width <= 960) || resolutions[resolutions.length - 1];
                    thumbUrl = med ? med.url : fullUrl;
                } else {
                    thumbUrl = fullUrl;
                }

                const width = p.preview?.images?.[0]?.source?.width || 0;
                const height = p.preview?.images?.[0]?.source?.height || 0;

                results.push({
                    id: `reddit_${p.id}`,
                    title: p.title || query,
                    url: fullUrl,
                    thumb: thumbUrl,
                    width,
                    height,
                    author: p.author ? `u/${p.author}` : 'r/battlemaps',
                    permalink: `https://www.reddit.com${p.permalink}`
                });

                if (results.length >= 18) break;
            }

            this.searchResults = results;
            this.notify();
            return results;
        } finally {
            this.isSearching = false;
        }
    }

    /**
     * Generates a custom AI battlemap directly inside the tool using the assembled toggle prompt
     * (Uses keyless Flux engine so the user never needs an API key)
     */
    async generateKeylessMap(assembledPrompt, labelName = 'Custom AI Battlemap') {
        const promptToUse = (assembledPrompt || '').trim();
        if (!promptToUse) {
            throw new Error('Prompt box is empty. Toggle on a few prompt chips or enter a location first.');
        }

        if (this.isGenerating) {
            throw new Error('A map is already rendering. Please wait a moment...');
        }

        this.isGenerating = true;
        const seed = Math.floor(Math.random() * 1000000);

        let width = 1280;
        let height = 720;
        if (this.aspectRatio === '2:3' || this.sizeIntent === '24x36') {
            width = 1152;
            height = 768;
        } else if (this.aspectRatio === '4:3') {
            width = 1024;
            height = 768;
        } else if (this.aspectRatio === '3:4' || this.sizeIntent === '30x40' || this.sizeIntent === '18x24') {
            width = 1024;
            height = 768;
        } else if (this.aspectRatio === '1:1') {
            width = 1024;
            height = 1024;
        } else if (this.aspectRatio === '21:9') {
            width = 1344;
            height = 576;
        }

        try {
            const encodedPrompt = encodeURIComponent(promptToUse);
            const url = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=${width}&height=${height}&model=flux&seed=${seed}&nologo=true&enhance=false`;

            await new Promise((resolve, reject) => {
                const img = new Image();
                img.crossOrigin = 'anonymous';
                const timeout = setTimeout(() => {
                    reject(new Error('In-tool AI generation timed out. Try using the Pop Out Google Gemini button or searching 4K maps!'));
                }, 45000);

                img.onload = () => {
                    clearTimeout(timeout);
                    resolve(url);
                };
                img.onerror = () => {
                    clearTimeout(timeout);
                    resolve(url);
                };
                img.src = url;
            });

            const item = {
                id: `map_${Date.now()}`,
                prompt: labelName,
                fullPrompt: promptToUse,
                seed: seed,
                provider: 'Flux AI',
                url: url,
                timestamp: new Date().toISOString()
            };

            this.addToHistory(item);
            return item;
        } finally {
            this.isGenerating = false;
        }
    }

    addToHistory(item) {
        // Avoid duplicate URLs at the top
        this.history = this.history.filter(h => h.url !== item.url);
        this.history.unshift(item);
        if (this.history.length > 20) this.history.pop();
        this.notify();
    }

    saveState() {
        try {
            const toggleStates = {};
            this.promptToggles.forEach(t => { toggleStates[t.id] = t.active; });
            localStorage.setItem('ttrpg_prompt_toggles', JSON.stringify(toggleStates));

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
