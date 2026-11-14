/**
 * AetherTable - Dynamic Scenes, Real-Time Map Morphing, 3D Parallax Depth & Infinite Vehicle Chase Engine
 * Provides:
 * 1. Real-Time Map State Morphing (0%-100% continuous blend & timed animated transitions between State A & State B)
 * 2. Multi-Layer Parallax Depth (Foreground & Background layers moving at different speeds as camera pans/drifts)
 * 3. Infinite Scrolling Backgrounds & Stationary Center Vehicles (Steam Train, Riverboat, Skyship, War Wagon)
 */

class DynamicSceneEngine {
    constructor() {
        this.bgCanvas = null;
        this.bgCtx = null;
        this.scrollCanvas = null;
        this.scrollCtx = null;
        this.vehicleCanvas = null;
        this.vehicleCtx = null;
        this.fgCanvas = null;
        this.fgCtx = null;
        this.morphImgEl = null;

        // 1. Real-Time Map Morph State
        this.morphState = {
            activeScenario: 'tavern_fire', // 'tavern_fire', 'bridge_collapse', 'ritual_blood', 'forest_rift', 'custom'
            progress: 0, // 0 to 100
            blendStyle: 'crossfade', // 'crossfade' or 'radial_spread'
            isAnimating: false,
            animTarget: 100,
            animSpeed: 18, // % per second
            stateADataUrl: null,
            stateBDataUrl: null
        };

        // 2. Multi-Layer Parallax Depth State
        this.parallaxState = {
            mode: 'none', // 'none', 'cliff', 'rooftops', 'airship', 'canopy'
            depthIntensity: 1.0, // 0.2 to 2.5
            autoSway: false,
            swaySpeed: 1.0,
            cameraPanX: 0,
            cameraPanY: 0,
            cameraZoom: 1.0
        };

        // 3. Infinite Scrolling & Stationary Vehicle Chase State
        this.chaseState = {
            enabled: false,
            terrain: 'railroad_desert', // 'railroad_desert', 'river_rapids', 'sky_clouds', 'forest_road', 'current_map'
            vehicle: 'steam_train', // 'steam_train', 'riverboat', 'skyship', 'war_wagon', 'none'
            speed: 45, // 0 to 150 (pixels/sec base * mult)
            direction: 'west', // 'west' (scrolls left, vehicle faces right), 'east', 'north', 'south'
            vehicleScale: 1.0,
            scrollOffsetX: 0,
            scrollOffsetY: 0
        };

        this.smokeParticles = [];
        this.wakeParticles = [];
        this.lastTime = performance.now();
        this.time = 0;
    }

    init() {
        this.bgCanvas = document.getElementById('parallax-bg-canvas');
        this.scrollCanvas = document.getElementById('infinite-scroll-canvas');
        this.vehicleCanvas = document.getElementById('vehicle-canvas');
        this.fgCanvas = document.getElementById('parallax-fg-canvas');
        this.morphImgEl = document.getElementById('map-morph-image');

        if (this.bgCanvas) this.bgCtx = this.bgCanvas.getContext('2d');
        if (this.scrollCanvas) this.scrollCtx = this.scrollCanvas.getContext('2d');
        if (this.vehicleCanvas) this.vehicleCtx = this.vehicleCanvas.getContext('2d');
        if (this.fgCanvas) this.fgCtx = this.fgCanvas.getContext('2d');

        this.resizeCanvases();
        window.addEventListener('resize', () => this.resizeCanvases());

        this.startLoop();
    }

    resizeCanvases() {
        const w = window.innerWidth || 1920;
        const h = window.innerHeight || 1080;
        [this.bgCanvas, this.scrollCanvas, this.vehicleCanvas, this.fgCanvas].forEach(c => {
            if (c) {
                c.width = w;
                c.height = h;
            }
        });
    }

    // ========================================================================
    // 1. REAL-TIME MAP STATE MORPHING ENGINE
    // ========================================================================

    loadMorphScenario(scenarioKey, resetProgress = true) {
        this.morphState.activeScenario = scenarioKey;
        if (resetProgress) {
            this.morphState.progress = 0;
            this.morphState.isAnimating = false;
        }

        if (scenarioKey === 'custom') {
            this.applyMorphVisuals();
            return;
        }

        const pair = this.generatePhasedMapPair(scenarioKey);
        this.morphState.stateADataUrl = pair.stateA;
        this.morphState.stateBDataUrl = pair.stateB;

        if (window.setMap) {
            window.setMap(pair.stateA, false);
        }
        if (this.morphImgEl) {
            this.morphImgEl.src = pair.stateB;
            this.morphImgEl.style.display = 'block';
        }

        // Sync environment soundscape with the chosen morph scenario
        if (window.livingElementsEngine) {
            const envMap = {
                tavern_fire: 'tavern',
                bridge_collapse: 'wind',
                ritual_blood: 'cave',
                forest_rift: 'forest'
            };
            window.livingElementsEngine.setEnvironmentSoundscape(envMap[scenarioKey] || 'forest');
        }

        this.applyMorphVisuals();
    }

    setCustomMorphImage(dataUrl) {
        this.morphState.activeScenario = 'custom';
        this.morphState.stateBDataUrl = dataUrl;
        if (this.morphImgEl) {
            this.morphImgEl.src = dataUrl;
            this.morphImgEl.style.display = 'block';
        }
        this.applyMorphVisuals();
    }

    setMorphProgress(pct) {
        this.morphState.progress = Math.max(0, Math.min(100, Number(pct) || 0));
        this.applyMorphVisuals();

        // Sync UI slider & label if present
        const slider = document.getElementById('morph-progress-slider');
        const valSpan = document.getElementById('morph-progress-val');
        if (slider && Math.abs(Number(slider.value) - this.morphState.progress) > 0.5) {
            slider.value = Math.round(this.morphState.progress);
        }
        if (valSpan) {
            valSpan.textContent = `${Math.round(this.morphState.progress)}%`;
        }

        // Dynamic environment audio shift when tavern catches fire or forest rift opens
        if (window.livingElementsEngine && window.livingElementsEngine.soundscapeMode === 'auto') {
            if (this.morphState.activeScenario === 'forest_rift' && this.morphState.progress > 60) {
                window.livingElementsEngine.setEnvironmentSoundscape('volcano');
            }
        }
    }

    setMorphBlendStyle(style) {
        this.morphState.blendStyle = style || 'crossfade';
        this.applyMorphVisuals();
    }

    animateMorphTo(targetPct = 100, speedPctPerSec = 18) {
        this.morphState.animTarget = Math.max(0, Math.min(100, targetPct));
        this.morphState.animSpeed = Math.max(2, speedPctPerSec);
        this.morphState.isAnimating = true;
    }

    applyMorphVisuals() {
        if (!this.morphImgEl) return;
        const p = this.morphState.progress / 100;

        if (!this.morphImgEl.src || p <= 0.002) {
            this.morphImgEl.style.opacity = '0';
            this.morphImgEl.style.webkitMaskImage = 'none';
            this.morphImgEl.style.maskImage = 'none';
            return;
        }

        this.morphImgEl.style.display = 'block';

        if (this.morphState.blendStyle === 'radial_spread') {
            this.morphImgEl.style.opacity = '1';
            const rInner = Math.max(0, (p * 115) - 22);
            const rOuter = Math.min(145, (p * 125) + 12);
            const maskStr = `radial-gradient(circle at 50% 50%, rgba(0,0,0,1) ${rInner}%, rgba(0,0,0,0) ${rOuter}%)`;
            this.morphImgEl.style.webkitMaskImage = maskStr;
            this.morphImgEl.style.maskImage = maskStr;
        } else {
            this.morphImgEl.style.webkitMaskImage = 'none';
            this.morphImgEl.style.maskImage = 'none';
            this.morphImgEl.style.opacity = p.toFixed(3);
        }
    }

    /**
     * Generates aligned 2560x1440 State A (Initial) and State B (Morphed) battlemaps
     */
    generatePhasedMapPair(scenarioKey) {
        const W = 2560;
        const H = 1440;

        const createCanvasPair = () => {
            const cA = document.createElement('canvas');
            cA.width = W; cA.height = H;
            const cB = document.createElement('canvas');
            cB.width = W; cB.height = H;
            return { cA, ctxA: cA.getContext('2d'), cB, ctxB: cB.getContext('2d') };
        };

        const { cA, ctxA, cB, ctxB } = createCanvasPair();

        if (scenarioKey === 'tavern_fire') {
            // STATE A: Warm Oak Tavern Taproom
            this.drawTavernState(ctxA, W, H, false);
            // STATE B: Blazing Tavern Inferno (Catching Fire)
            this.drawTavernState(ctxB, W, H, true);
        } else if (scenarioKey === 'bridge_collapse') {
            // STATE A: Intact Stone Canyon Bridge
            this.drawBridgeState(ctxA, W, H, false);
            // STATE B: Collapsed Chasm Bridge (Mid-Combat Collapse)
            this.drawBridgeState(ctxB, W, H, true);
        } else if (scenarioKey === 'ritual_blood') {
            // STATE A: Clean Marble Ritual Sanctum
            this.drawRitualState(ctxA, W, H, false);
            // STATE B: Blood-Soaked Eldritch Altar
            this.drawRitualState(ctxB, W, H, true);
        } else {
            // 'forest_rift'
            this.drawForestRiftState(ctxA, W, H, false);
            this.drawForestRiftState(ctxB, W, H, true);
        }

        return {
            stateA: cA.toDataURL('image/jpeg', 0.90),
            stateB: cB.toDataURL('image/jpeg', 0.90)
        };
    }

    drawTavernState(ctx, W, H, isBurning) {
        // 1. Timber Plank Floor
        ctx.fillStyle = isBurning ? '#1a0e09' : '#301f14';
        ctx.fillRect(0, 0, W, H);

        const plankH = 48;
        for (let y = 0; y < H; y += plankH) {
            for (let x = 0; x < W; x += 320) {
                const offset = ((y / plankH) % 2) * 160;
                const px = x - offset;
                const shade = ((px * 13 + y * 7) % 18) - 9;
                if (isBurning) {
                    ctx.fillStyle = `rgb(${30 + shade}, ${16 + Math.floor(shade * 0.5)}, ${12})`;
                } else {
                    ctx.fillStyle = `rgb(${62 + shade}, ${40 + Math.floor(shade * 0.7)}, ${24 + Math.floor(shade * 0.4)})`;
                }
                ctx.fillRect(px, y, 318, plankH - 2);
            }
        }

        // 2. Outer Stone Walls & Pillars
        ctx.fillStyle = isBurning ? '#261c1a' : '#4a4642';
        ctx.fillRect(0, 0, W, 65);
        ctx.fillRect(0, H - 65, W, 65);
        ctx.fillRect(0, 0, 65, H);
        ctx.fillRect(W - 65, 0, 65, H);

        // 3. Great Hearth Fireplace at North Wall
        ctx.fillStyle = '#332e2c';
        ctx.fillRect(W * 0.38, 10, W * 0.24, 95);
        const hearthGlow = ctx.createRadialGradient(W * 0.5, 95, 20, W * 0.5, 95, isBurning ? 850 : 420);
        hearthGlow.addColorStop(0, isBurning ? 'rgba(255, 160, 40, 0.75)' : 'rgba(255, 170, 60, 0.42)');
        hearthGlow.addColorStop(0.5, isBurning ? 'rgba(235, 55, 10, 0.42)' : 'rgba(220, 100, 20, 0.14)');
        hearthGlow.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = hearthGlow;
        ctx.fillRect(0, 0, W, H);

        // 4. Long Bar Counter & Ale Barrels (Left Side)
        ctx.fillStyle = isBurning ? '#24120b' : '#4d2e18';
        ctx.fillRect(180, 220, 130, 880);
        ctx.strokeStyle = isBurning ? '#ff5511' : '#734829';
        ctx.lineWidth = 6;
        ctx.strokeRect(180, 220, 130, 880);

        // 5. Round Oak Tavern Tables & Chairs
        const tables = [
            { x: 750, y: 420, r: 115 },
            { x: 1280, y: 450, r: 125 },
            { x: 1850, y: 420, r: 115 },
            { x: 780, y: 960, r: 120 },
            { x: 1320, y: 980, r: 130 },
            { x: 1880, y: 950, r: 115 }
        ];

        tables.forEach((t, idx) => {
            ctx.save();
            ctx.translate(t.x, t.y);
            if (isBurning && idx % 2 === 1) {
                // Smashed / collapsed burning table
                ctx.rotate(0.35);
                ctx.fillStyle = '#170c08';
                ctx.beginPath();
                ctx.ellipse(0, 0, t.r * 1.05, t.r * 0.78, 0, 0, Math.PI * 2);
                ctx.fill();
            } else {
                ctx.fillStyle = isBurning ? '#29150c' : '#5e3a20';
                ctx.beginPath();
                ctx.arc(0, 0, t.r, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = isBurning ? '#ff6a1a' : '#3b2210';
                ctx.lineWidth = 8;
                ctx.stroke();
            }
            ctx.restore();
        });

        // 6. If Burning (State B): Blazing Fire Pools, Glowing Ember Fissures, Fallen Flaming Rafters & Smoke
        if (isBurning) {
            const fireZones = [
                { x: W * 0.5, y: 260, r: 340 },
                { x: 1280, y: 450, r: 290 },
                { x: 310, y: 620, r: 310 },
                { x: 1850, y: 420, r: 260 },
                { x: 1320, y: 980, r: 330 },
                { x: 820, y: 740, r: 240 },
                { x: 2050, y: 820, r: 280 }
            ];

            ctx.save();
            ctx.globalCompositeOperation = 'lighter';
            fireZones.forEach(fz => {
                const fg = ctx.createRadialGradient(fz.x, fz.y, fz.r * 0.05, fz.x, fz.y, fz.r);
                fg.addColorStop(0, 'rgba(255, 250, 195, 0.92)');
                fg.addColorStop(0.28, 'rgba(255, 145, 25, 0.75)');
                fg.addColorStop(0.62, 'rgba(220, 40, 5, 0.42)');
                fg.addColorStop(1, 'rgba(0, 0, 0, 0)');
                ctx.fillStyle = fg;
                ctx.beginPath();
                ctx.arc(fz.x, fz.y, fz.r, 0, Math.PI * 2);
                ctx.fill();
            });

            // Fallen burning roof timbers across the floor
            const beams = [
                { x1: 520, y1: 240, x2: 1120, y2: 520 },
                { x1: 1450, y1: 310, x2: 2040, y2: 660 },
                { x1: 680, y1: 880, x2: 1380, y2: 1140 },
                { x1: 240, y1: 420, x2: 640, y2: 780 }
            ];
            beams.forEach(b => {
                ctx.strokeStyle = 'rgba(255, 110, 20, 0.85)';
                ctx.lineWidth = 34;
                ctx.lineCap = 'round';
                ctx.beginPath();
                ctx.moveTo(b.x1, b.y1);
                ctx.lineTo(b.x2, b.y2);
                ctx.stroke();

                ctx.strokeStyle = '#140a06';
                ctx.lineWidth = 22;
                ctx.stroke();

                ctx.strokeStyle = 'rgba(255, 220, 110, 0.9)';
                ctx.lineWidth = 6;
                ctx.stroke();
            });
            ctx.restore();
        }
    }

    drawBridgeState(ctx, W, H, isCollapsed) {
        // 1. Deep Canyon Chasm & Roaring River Below
        const chasmGrad = ctx.createLinearGradient(0, 0, W, 0);
        chasmGrad.addColorStop(0, '#3b2d22');
        chasmGrad.addColorStop(0.22, '#241b14');
        chasmGrad.addColorStop(0.36, '#0d2b3e');
        chasmGrad.addColorStop(0.50, '#185475');
        chasmGrad.addColorStop(0.64, '#0d2b3e');
        chasmGrad.addColorStop(0.78, '#241b14');
        chasmGrad.addColorStop(1, '#3b2d22');
        ctx.fillStyle = chasmGrad;
        ctx.fillRect(0, 0, W, H);

        // Whitewater foam streaks in the chasm river (center X: 35% to 65%)
        ctx.strokeStyle = 'rgba(195, 240, 255, 0.35)';
        ctx.lineWidth = 6;
        for (let i = 0; i < 45; i++) {
            const rx = W * 0.37 + ((i * 73) % (W * 0.26));
            const ry = (i * 97) % H;
            ctx.beginPath();
            ctx.moveTo(rx, ry);
            ctx.bezierCurveTo(rx - 15, ry + 60, rx + 15, ry + 120, rx, ry + 180);
            ctx.stroke();
        }

        // 2. Left & Right High Rock Cliff Buttes
        ctx.fillStyle = '#4f3d2f';
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(W * 0.28, 0);
        ctx.lineTo(W * 0.31, H * 0.35);
        ctx.lineTo(W * 0.27, H * 0.72);
        ctx.lineTo(W * 0.30, H);
        ctx.lineTo(0, H);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(W, 0);
        ctx.lineTo(W * 0.72, 0);
        ctx.lineTo(W * 0.69, H * 0.35);
        ctx.lineTo(W * 0.73, H * 0.72);
        ctx.lineTo(W * 0.70, H);
        ctx.lineTo(W, H);
        ctx.closePath();
        ctx.fill();

        // 3. The Grand Stone Bridge Spanning Across Center (Y: 34% to 66%)
        const bTop = H * 0.35;
        const bBot = H * 0.65;
        const bH = bBot - bTop;

        if (!isCollapsed) {
            // Intact Stone Bridge Deck
            ctx.fillStyle = '#736e65';
            ctx.fillRect(W * 0.22, bTop, W * 0.56, bH);

            // Flagstone paving pattern
            ctx.strokeStyle = '#45413b';
            ctx.lineWidth = 4;
            for (let x = W * 0.22; x < W * 0.78; x += 75) {
                for (let y = bTop; y < bBot; y += 60) {
                    ctx.strokeRect(x, y, 75, 60);
                }
            }

            // Stone Parapet Walls on North & South Edges of Bridge
            ctx.fillStyle = '#8c867b';
            ctx.fillRect(W * 0.22, bTop - 16, W * 0.56, 26);
            ctx.fillRect(W * 0.22, bBot - 10, W * 0.56, 26);
        } else {
            // COLLAPSED BRIDGE: Left & Right Broken Stumps + Gaping Chasm & Submerged Rubble
            // Left Stump (22% to 41%)
            ctx.fillStyle = '#6b655c';
            ctx.beginPath();
            ctx.moveTo(W * 0.22, bTop);
            ctx.lineTo(W * 0.41, bTop);
            ctx.lineTo(W * 0.38, bTop + bH * 0.32);
            ctx.lineTo(W * 0.42, bTop + bH * 0.68);
            ctx.lineTo(W * 0.39, bBot);
            ctx.lineTo(W * 0.22, bBot);
            ctx.closePath();
            ctx.fill();

            // Right Stump (59% to 78%)
            ctx.beginPath();
            ctx.moveTo(W * 0.78, bTop);
            ctx.lineTo(W * 0.59, bTop);
            ctx.lineTo(W * 0.62, bTop + bH * 0.36);
            ctx.lineTo(W * 0.58, bTop + bH * 0.70);
            ctx.lineTo(W * 0.61, bBot);
            ctx.lineTo(W * 0.78, bBot);
            ctx.closePath();
            ctx.fill();

            // Crashing Whitewater & Fallen Masonry Blocks in the Center Gap (40% to 60%)
            for (let r = 0; r < 28; r++) {
                const bx = W * (0.40 + (r % 7) * 0.028);
                const by = bTop - 30 + ((r * 53) % (bH + 80));
                const rad = 16 + (r % 4) * 10;

                // Foam ring around fallen stone block
                ctx.strokeStyle = 'rgba(220, 248, 255, 0.75)';
                ctx.lineWidth = 4;
                ctx.beginPath();
                ctx.arc(bx, by, rad * 1.45, 0, Math.PI * 2);
                ctx.stroke();

                ctx.fillStyle = '#544f48';
                ctx.beginPath();
                ctx.arc(bx, by, rad, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }

    drawRitualState(ctx, W, H, isBloodSoaked) {
        // 1. Polished Sanctum Floor
        ctx.fillStyle = isBloodSoaked ? '#1c0d10' : '#262930';
        ctx.fillRect(0, 0, W, H);

        // Marble Tile Grid
        const tile = 120;
        ctx.strokeStyle = isBloodSoaked ? 'rgba(95, 18, 24, 0.65)' : 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth = 3;
        for (let x = 0; x < W; x += tile) {
            for (let y = 0; y < H; y += tile) {
                ctx.strokeRect(x, y, tile, tile);
            }
        }

        const cx = W * 0.5;
        const cy = H * 0.5;

        // 2. Recessed Concentric Ritual Runes & Channels
        ctx.save();
        ctx.translate(cx, cy);

        const ringRadii = [220, 380, 540];
        ringRadii.forEach((r, idx) => {
            ctx.strokeStyle = isBloodSoaked ? 'rgba(220, 15, 30, 0.92)' : 'rgba(130, 175, 210, 0.35)';
            ctx.lineWidth = isBloodSoaked ? 18 : 10;
            ctx.beginPath();
            ctx.arc(0, 0, r, 0, Math.PI * 2);
            ctx.stroke();

            if (isBloodSoaked) {
                ctx.strokeStyle = 'rgba(255, 95, 110, 0.85)';
                ctx.lineWidth = 5;
                ctx.stroke();
            }
        });

        // 8 Radial Rune Channels
        for (let a = 0; a < 8; a++) {
            const ang = (a / 8) * Math.PI * 2;
            ctx.strokeStyle = isBloodSoaked ? 'rgba(205, 10, 25, 0.9)' : 'rgba(130, 175, 210, 0.32)';
            ctx.lineWidth = isBloodSoaked ? 16 : 8;
            ctx.beginPath();
            ctx.moveTo(Math.cos(ang) * 120, Math.sin(ang) * 120);
            ctx.lineTo(Math.cos(ang) * 540, Math.sin(ang) * 540);
            ctx.stroke();
        }

        // 3. If Blood-Soaked: Overflowing Crimson Pools, Dark Veins & Eldritch Glow
        if (isBloodSoaked) {
            const bloodGlow = ctx.createRadialGradient(0, 0, 40, 0, 0, 640);
            bloodGlow.addColorStop(0, 'rgba(220, 10, 25, 0.72)');
            bloodGlow.addColorStop(0.5, 'rgba(140, 5, 18, 0.45)');
            bloodGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = bloodGlow;
            ctx.beginPath();
            ctx.arc(0, 0, 640, 0, Math.PI * 2);
            ctx.fill();

            // Splattered crimson pools around the sanctum
            for (let p = 0; p < 18; p++) {
                const ang = (p * 1.9) % (Math.PI * 2);
                const dist = 160 + ((p * 83) % 460);
                const px = Math.cos(ang) * dist;
                const py = Math.sin(ang) * dist;
                const pr = 35 + (p % 5) * 22;

                ctx.fillStyle = 'rgba(135, 6, 15, 0.82)';
                ctx.beginPath();
                ctx.ellipse(px, py, pr * 1.2, pr * 0.85, ang, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // 4. Central Sacrificial Altar Dais
        ctx.fillStyle = isBloodSoaked ? '#381216' : '#525866';
        ctx.beginPath();
        ctx.arc(0, 0, 115, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = isBloodSoaked ? '#9e0b18' : '#7b8496';
        ctx.fillRect(-70, -45, 140, 90);
        ctx.restore();
    }

    drawForestRiftState(ctx, W, H, isRiftOpen) {
        // 1. Woodland Ground vs Scorched Ash Ground
        ctx.fillStyle = isRiftOpen ? '#1c1614' : '#243b20';
        ctx.fillRect(0, 0, W, H);

        // Organic Ground Texture Patches
        for (let i = 0; i < 90; i++) {
            const gx = (i * 197) % W;
            const gy = (i * 131) % H;
            const gr = 80 + (i % 5) * 45;
            ctx.fillStyle = isRiftOpen
                ? 'rgba(42, 24, 18, 0.45)'
                : 'rgba(48, 82, 38, 0.42)';
            ctx.beginPath();
            ctx.arc(gx, gy, gr, 0, Math.PI * 2);
            ctx.fill();
        }

        // 2. If Rift Open: Jagged Glowing Magma Chasm Splitting the Map
        if (isRiftOpen) {
            ctx.save();
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';

            const pts = [
                { x: W * 0.08, y: H * 0.58 },
                { x: W * 0.25, y: H * 0.42 },
                { x: W * 0.44, y: H * 0.56 },
                { x: W * 0.62, y: H * 0.38 },
                { x: W * 0.78, y: H * 0.54 },
                { x: W * 0.92, y: H * 0.45 }
            ];

            const trace = () => {
                ctx.beginPath();
                ctx.moveTo(pts[0].x, pts[0].y);
                for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
            };

            ctx.strokeStyle = 'rgba(220, 45, 10, 0.45)';
            ctx.lineWidth = 340;
            trace();
            ctx.stroke();

            ctx.strokeStyle = '#120806';
            ctx.lineWidth = 175;
            trace();
            ctx.stroke();

            ctx.globalCompositeOperation = 'lighter';
            ctx.strokeStyle = 'rgba(255, 115, 20, 0.92)';
            ctx.lineWidth = 115;
            trace();
            ctx.stroke();

            ctx.strokeStyle = 'rgba(255, 240, 165, 0.95)';
            ctx.lineWidth = 42;
            trace();
            ctx.stroke();
            ctx.restore();
        }

        // 3. Perimeter Trees (Lush Green in State A, Charred Embar-Ringed Trunks in State B)
        const trees = [
            { x: 280, y: 240, r: 135 }, { x: 740, y: 190, r: 120 }, { x: 1820, y: 220, r: 145 }, { x: 2260, y: 290, r: 130 },
            { x: 310, y: 1180, r: 140 }, { x: 860, y: 1210, r: 125 }, { x: 1740, y: 1190, r: 135 }, { x: 2220, y: 1150, r: 140 }
        ];
        trees.forEach(t => {
            if (isRiftOpen) {
                ctx.fillStyle = '#140d0a';
                ctx.beginPath();
                ctx.arc(t.x, t.y, t.r * 0.42, 0, Math.PI * 2);
                ctx.fill();
                ctx.strokeStyle = '#ff6a1a';
                ctx.lineWidth = 6;
                ctx.stroke();
            } else {
                ctx.fillStyle = '#1b3818';
                ctx.beginPath();
                ctx.arc(t.x, t.y, t.r, 0, Math.PI * 2);
                ctx.fill();
                ctx.fillStyle = '#2e5c27';
                ctx.beginPath();
                ctx.arc(t.x - 15, t.y - 15, t.r * 0.72, 0, Math.PI * 2);
                ctx.fill();
            }
        });
    }

    // ========================================================================
    // 2. MULTI-LAYER 3D PARALLAX DEPTH ENGINE (Foreground & Background Separation)
    // ========================================================================

    setParallaxMode(mode) {
        this.parallaxState.mode = mode || 'none';
        const active = this.parallaxState.mode !== 'none';
        if (this.bgCanvas) this.bgCanvas.style.display = active ? 'block' : 'none';
        if (this.fgCanvas) this.fgCanvas.style.display = active ? 'block' : 'none';

        // Make map slightly translucent or masked at edges in cliff/airship/rooftop parallax mode so deep BG shines through around perimeter
        const mapImg = document.getElementById('map-image');
        if (mapImg) {
            if (active && (mode === 'cliff' || mode === 'airship' || mode === 'rooftops')) {
                const mask = 'radial-gradient(ellipse 76% 74% at 50% 50%, rgba(0,0,0,1) 62%, rgba(0,0,0,0) 96%)';
                mapImg.style.webkitMaskImage = mask;
                mapImg.style.maskImage = mask;
            } else {
                mapImg.style.webkitMaskImage = 'none';
                mapImg.style.maskImage = 'none';
            }
        }
    }

    setParallaxDepth(val) {
        this.parallaxState.depthIntensity = Math.max(0.1, Math.min(2.5, Number(val) || 1.0));
    }

    setParallaxAutoSway(enabled) {
        this.parallaxState.autoSway = Boolean(enabled);
        if (!enabled) {
            // Reset any auto-sway offset on map layer
            if (window.applyPanZoom) window.applyPanZoom();
        }
    }

    onCameraPanZoom(panX, panY, zoom) {
        this.parallaxState.cameraPanX = panX || 0;
        this.parallaxState.cameraPanY = panY || 0;
        this.parallaxState.cameraZoom = zoom || 1.0;
    }

    renderParallaxLayers() {
        const mode = this.parallaxState.mode;
        if (mode === 'none' || !this.bgCtx || !this.fgCtx) return;

        const W = this.bgCanvas.width;
        const H = this.bgCanvas.height;
        const depth = this.parallaxState.depthIntensity;

        // Calculate camera offset + optional gentle auto-sway for vertical height immersion
        const swayX = this.parallaxState.autoSway ? Math.sin(this.time * 0.65) * 42 * depth : 0;
        const swayY = this.parallaxState.autoSway ? Math.cos(this.time * 0.48) * 28 * depth : 0;

        // If autoSway is active, gently shift the midplane map layer at 1.0x speed so BG (0.4x) and FG (1.6x) separate!
        if (this.parallaxState.autoSway) {
            const mapLayer = document.getElementById('map-layer');
            if (mapLayer) {
                const mx = this.parallaxState.cameraPanX + swayX * 0.45;
                const my = this.parallaxState.cameraPanY + swayY * 0.45;
                mapLayer.style.transform = `translate(${mx}px, ${my}px) scale(${this.parallaxState.cameraZoom})`;
            }
        }

        // Background moves slower (0.38x), Foreground moves faster (1.55x)
        const bgOffsetX = (this.parallaxState.cameraPanX + swayX) * 0.38 * depth;
        const bgOffsetY = (this.parallaxState.cameraPanY + swayY) * 0.38 * depth;
        const fgOffsetX = (this.parallaxState.cameraPanX + swayX) * 1.55 * depth;
        const fgOffsetY = (this.parallaxState.cameraPanY + swayY) * 1.55 * depth;

        this.bgCtx.clearRect(0, 0, W, H);
        this.fgCtx.clearRect(0, 0, W, H);

        if (mode === 'cliff') {
            this.drawCliffParallax(this.bgCtx, this.fgCtx, W, H, bgOffsetX, bgOffsetY, fgOffsetX, fgOffsetY);
        } else if (mode === 'rooftops') {
            this.drawRooftopsParallax(this.bgCtx, this.fgCtx, W, H, bgOffsetX, bgOffsetY, fgOffsetX, fgOffsetY);
        } else if (mode === 'airship') {
            this.drawAirshipParallax(this.bgCtx, this.fgCtx, W, H, bgOffsetX, bgOffsetY, fgOffsetX, fgOffsetY);
        } else if (mode === 'canopy') {
            this.drawCanopyParallax(this.bgCtx, this.fgCtx, W, H, bgOffsetX, bgOffsetY, fgOffsetX, fgOffsetY);
        }
    }

    drawCliffParallax(bgCtx, fgCtx, W, H, bgX, bgY, fgX, fgY) {
        // DEEP BACKGROUND: Misty Canyon Floor & Distant Winding River 1,000 ft below
        bgCtx.save();
        bgCtx.fillStyle = '#111921';
        bgCtx.fillRect(0, 0, W, H);

        const ox = ((bgX % 400) + 400) % 400 - 200;
        const oy = ((bgY % 400) + 400) % 400 - 200;

        // Distant canyon ridges
        bgCtx.fillStyle = '#1c2630';
        for (let i = -1; i < 6; i++) {
            const rx = i * 380 + ox;
            bgCtx.beginPath();
            bgCtx.arc(rx, H * 0.25 + oy, 220, 0, Math.PI * 2);
            bgCtx.arc(rx + 140, H * 0.8 + oy, 250, 0, Math.PI * 2);
            bgCtx.fill();
        }

        // Far-below winding turquoise river thread
        bgCtx.strokeStyle = 'rgba(65, 165, 210, 0.45)';
        bgCtx.lineWidth = 36;
        bgCtx.beginPath();
        bgCtx.moveTo(-200, H * 0.18 + oy);
        bgCtx.bezierCurveTo(W * 0.3 + ox, H * 0.05 + oy, W * 0.65 + ox, H * 0.95 + oy, W + 200, H * 0.82 + oy);
        bgCtx.stroke();
        bgCtx.restore();

        // ELEVATED FOREGROUND: Overhanging High Cliff Crags & Soaring Hawks (moves 1.55x faster)
        fgCtx.save();
        const crags = [
            { x: W * 0.06 + fgX * 0.35, y: H * 0.08 + fgY * 0.35, r: 155 },
            { x: W * 0.94 + fgX * 0.35, y: H * 0.10 + fgY * 0.35, r: 165 },
            { x: W * 0.07 + fgX * 0.35, y: H * 0.92 + fgY * 0.35, r: 160 },
            { x: W * 0.93 + fgX * 0.35, y: H * 0.90 + fgY * 0.35, r: 150 }
        ];

        crags.forEach(c => {
            // Deep drop shadow cast onto battlemap below
            fgCtx.fillStyle = 'rgba(0, 0, 0, 0.55)';
            fgCtx.beginPath();
            fgCtx.arc(c.x + 24, c.y + 28, c.r * 1.08, 0, Math.PI * 2);
            fgCtx.fill();

            // Craggy upper rock spire
            fgCtx.fillStyle = '#3d332a';
            fgCtx.beginPath();
            fgCtx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
            fgCtx.fill();

            fgCtx.fillStyle = '#57493d';
            fgCtx.beginPath();
            fgCtx.arc(c.x - 18, c.y - 18, c.r * 0.68, 0, Math.PI * 2);
            fgCtx.fill();
        });

        // Drifting high-altitude mist wisps in foreground
        for (let m = 0; m < 5; m++) {
            const mx = ((m * 430 + this.time * 28 + fgX * 0.6) % (W + 300)) - 150;
            const my = ((m * 230 + fgY * 0.6) % H);
            const g = fgCtx.createRadialGradient(mx, my, 10, mx, my, 170);
            g.addColorStop(0, 'rgba(220, 235, 245, 0.16)');
            g.addColorStop(1, 'rgba(220, 235, 245, 0)');
            fgCtx.fillStyle = g;
            fgCtx.beginPath();
            fgCtx.arc(mx, my, 170, 0, Math.PI * 2);
            fgCtx.fill();
        }
        fgCtx.restore();
    }

    drawRooftopsParallax(bgCtx, fgCtx, W, H, bgX, bgY, fgX, fgY) {
        // DEEP BACKGROUND: Dimly Lit Cobblestone Streets & Warm Streetlamps Far Below
        bgCtx.save();
        bgCtx.fillStyle = '#0e1017';
        bgCtx.fillRect(0, 0, W, H);

        const ox = ((bgX % 320) + 320) % 320;
        const oy = ((bgY % 320) + 320) % 320;

        bgCtx.strokeStyle = 'rgba(255, 255, 255, 0.04)';
        bgCtx.lineWidth = 2;
        for (let x = ox - 320; x < W + 320; x += 160) {
            for (let y = oy - 320; y < H + 320; y += 160) {
                bgCtx.strokeRect(x, y, 140, 140);
                // Warm street lantern far below
                const lg = bgCtx.createRadialGradient(x + 70, y + 70, 2, x + 70, y + 70, 48);
                lg.addColorStop(0, 'rgba(255, 175, 70, 0.35)');
                lg.addColorStop(1, 'rgba(255, 140, 30, 0)');
                bgCtx.fillStyle = lg;
                bgCtx.beginPath();
                bgCtx.arc(x + 70, y + 70, 48, 0, Math.PI * 2);
                bgCtx.fill();
            }
        }
        bgCtx.restore();

        // ELEVATED FOREGROUND: High Gothic Belltowers, Chimneys & Rope Lines Overhead
        fgCtx.save();
        const towers = [
            { x: W * 0.08 + fgX * 0.38, y: H * 0.12 + fgY * 0.38, w: 150, h: 150 },
            { x: W * 0.90 + fgX * 0.38, y: H * 0.14 + fgY * 0.38, w: 160, h: 150 },
            { x: W * 0.10 + fgX * 0.38, y: H * 0.86 + fgY * 0.38, w: 145, h: 145 },
            { x: W * 0.88 + fgX * 0.38, y: H * 0.86 + fgY * 0.38, w: 155, h: 155 }
        ];

        // Overhead rigging / banner lines between high rooftop spires
        fgCtx.strokeStyle = 'rgba(25, 22, 20, 0.65)';
        fgCtx.lineWidth = 3;
        fgCtx.beginPath();
        fgCtx.moveTo(towers[0].x, towers[0].y);
        fgCtx.lineTo(towers[1].x, towers[1].y);
        fgCtx.moveTo(towers[2].x, towers[2].y);
        fgCtx.lineTo(towers[3].x, towers[3].y);
        fgCtx.stroke();

        towers.forEach(t => {
            fgCtx.fillStyle = 'rgba(0, 0, 0, 0.58)';
            fgCtx.fillRect(t.x - t.w * 0.5 + 22, t.y - t.h * 0.5 + 24, t.w, t.h);

            fgCtx.fillStyle = '#252936';
            fgCtx.fillRect(t.x - t.w * 0.5, t.y - t.h * 0.5, t.w, t.h);
            fgCtx.strokeStyle = '#3d4559';
            fgCtx.lineWidth = 4;
            fgCtx.strokeRect(t.x - t.w * 0.5, t.y - t.h * 0.5, t.w, t.h);
        });
        fgCtx.restore();
    }

    drawAirshipParallax(bgCtx, fgCtx, W, H, bgX, bgY, fgX, fgY) {
        // DEEP BACKGROUND: Sky Blue / Twilight Abyss & Drifting Cloud Deck Miles Below
        const skyGrad = bgCtx.createLinearGradient(0, 0, 0, H);
        skyGrad.addColorStop(0, '#132942');
        skyGrad.addColorStop(0.5, '#1e4266');
        skyGrad.addColorStop(1, '#12253b');
        bgCtx.fillStyle = skyGrad;
        bgCtx.fillRect(0, 0, W, H);

        for (let c = 0; c < 14; c++) {
            const cx = ((c * 260 + this.time * 22 + bgX * 0.5) % (W + 400)) - 200;
            const cy = ((c * 170 + bgY * 0.5) % (H + 200)) - 100;
            const cr = 130 + (c % 4) * 55;
            const cg = bgCtx.createRadialGradient(cx, cy, cr * 0.1, cx, cy, cr);
            cg.addColorStop(0, 'rgba(225, 240, 255, 0.38)');
            cg.addColorStop(0.6, 'rgba(185, 215, 240, 0.18)');
            cg.addColorStop(1, 'rgba(160, 195, 230, 0)');
            bgCtx.fillStyle = cg;
            bgCtx.beginPath();
            bgCtx.arc(cx, cy, cr, 0, Math.PI * 2);
            bgCtx.fill();
        }

        // ELEVATED FOREGROUND: High Airship Yardarms, Rigging & Fast Upper Cloud Wisps
        fgCtx.save();
        for (let f = 0; f < 6; f++) {
            const fx = ((f * 390 + this.time * 55 + fgX * 0.7) % (W + 400)) - 200;
            const fy = ((f * 210 + fgY * 0.7) % H);
            const fr = 150 + (f % 3) * 45;
            const fg = fgCtx.createRadialGradient(fx, fy, 10, fx, fy, fr);
            fg.addColorStop(0, 'rgba(245, 250, 255, 0.24)');
            fg.addColorStop(1, 'rgba(245, 250, 255, 0)');
            fgCtx.fillStyle = fg;
            fgCtx.beginPath();
            fgCtx.arc(fx, fy, fr, 0, Math.PI * 2);
            fgCtx.fill();
        }
        fgCtx.restore();
    }

    drawCanopyParallax(bgCtx, fgCtx, W, H, bgX, bgY, fgX, fgY) {
        // ELEVATED FOREGROUND: Giant Overarching Treetop Boughs around Viewport Perimeter
        fgCtx.save();
        const boughs = [
            { x: W * 0.05 + fgX * 0.4, y: H * 0.08 + fgY * 0.4, r: 190 },
            { x: W * 0.50 + fgX * 0.4, y: -30 + fgY * 0.4, r: 175 },
            { x: W * 0.95 + fgX * 0.4, y: H * 0.10 + fgY * 0.4, r: 195 },
            { x: W * 0.06 + fgX * 0.4, y: H * 0.92 + fgY * 0.4, r: 185 },
            { x: W * 0.50 + fgX * 0.4, y: H + 30 + fgY * 0.4, r: 175 },
            { x: W * 0.94 + fgX * 0.4, y: H * 0.90 + fgY * 0.4, r: 190 }
        ];

        const sway = Math.sin(this.time * 1.2) * 14;
        boughs.forEach((b, i) => {
            const bx = b.x + sway * (i % 2 === 0 ? 1 : -1);
            fgCtx.fillStyle = 'rgba(8, 16, 8, 0.45)';
            fgCtx.beginPath();
            fgCtx.arc(bx + 20, b.y + 22, b.r * 1.05, 0, Math.PI * 2);
            fgCtx.fill();

            fgCtx.fillStyle = '#1b3818';
            fgCtx.beginPath();
            fgCtx.arc(bx, b.y, b.r, 0, Math.PI * 2);
            fgCtx.fill();

            fgCtx.fillStyle = '#2e5e29';
            fgCtx.beginPath();
            fgCtx.arc(bx - 16, b.y - 16, b.r * 0.72, 0, Math.PI * 2);
            fgCtx.fill();
        });
        fgCtx.restore();
    }

    // ========================================================================
    // 3. INFINITE SCROLLING BACKGROUNDS & STATIONARY VEHICLE CHASE ENGINE
    // ========================================================================

    setChaseEnabled(enabled) {
        this.chaseState.enabled = Boolean(enabled);
        if (this.scrollCanvas) {
            this.scrollCanvas.style.display = this.chaseState.enabled ? 'block' : 'none';
        }
        if (this.vehicleCanvas) {
            this.vehicleCanvas.style.display = (this.chaseState.enabled && this.chaseState.vehicle !== 'none') ? 'block' : 'none';
        }

        // Hide static map layer while using procedural scrolling terrain (unless tiling current_map)
        const mapLayer = document.getElementById('map-layer');
        if (mapLayer) {
            mapLayer.style.opacity = this.chaseState.enabled ? '0' : '1';
        }

        if (window.livingElementsEngine && window.livingElementsEngine.soundscapeMode === 'auto') {
            window.livingElementsEngine.setEnvironmentSoundscape(this.chaseState.enabled ? 'chase' : 'forest');
        }
    }

    setChaseConfig(cfg = {}) {
        Object.assign(this.chaseState, cfg);
        if (this.vehicleCanvas) {
            this.vehicleCanvas.style.display = (this.chaseState.enabled && this.chaseState.vehicle !== 'none') ? 'block' : 'none';
        }
    }

    renderChaseScene(dt) {
        if (!this.chaseState.enabled || !this.scrollCtx) return;

        const W = this.scrollCanvas.width;
        const H = this.scrollCanvas.height;
        const spd = this.chaseState.speed * 4.5; // pixels per second

        let vx = 0, vy = 0;
        if (this.chaseState.direction === 'west') vx = -spd;
        else if (this.chaseState.direction === 'east') vx = spd;
        else if (this.chaseState.direction === 'north') vy = -spd;
        else if (this.chaseState.direction === 'south') vy = spd;

        this.chaseState.scrollOffsetX = (this.chaseState.scrollOffsetX + vx * dt) % 20000;
        this.chaseState.scrollOffsetY = (this.chaseState.scrollOffsetY + vy * dt) % 20000;

        const offX = this.chaseState.scrollOffsetX;
        const offY = this.chaseState.scrollOffsetY;

        this.scrollCtx.clearRect(0, 0, W, H);

        // 1. Render Infinite Scrolling Terrain Underneath
        const terrain = this.chaseState.terrain;
        if (terrain === 'railroad_desert') {
            this.drawScrollingRailroadDesert(this.scrollCtx, W, H, offX, offY);
        } else if (terrain === 'river_rapids') {
            this.drawScrollingRiverRapids(this.scrollCtx, W, H, offX, offY);
        } else if (terrain === 'sky_clouds') {
            this.drawScrollingSkyClouds(this.scrollCtx, W, H, offX, offY);
        } else if (terrain === 'forest_road') {
            this.drawScrollingForestRoad(this.scrollCtx, W, H, offX, offY);
        } else if (terrain === 'current_map') {
            this.drawScrollingCurrentMap(this.scrollCtx, W, H, offX, offY);
        }

        // 2. Render Stationary Vehicle in the Center of the Screen
        if (this.vehicleCtx) {
            this.vehicleCtx.clearRect(0, 0, W, H);
            if (this.chaseState.vehicle !== 'none') {
                this.drawStationaryVehicle(this.vehicleCtx, W, H, dt);
            }
        }
    }

    drawScrollingRailroadDesert(ctx, W, H, offX, offY) {
        // Red-ochre desert floor
        ctx.fillStyle = '#8c583a';
        ctx.fillRect(0, 0, W, H);

        const tileW = 640;
        const startX = ((offX % tileW) + tileW) % tileW - tileW;

        // Passing desert boulders, scrub bushes & sandstone ridges
        for (let tx = startX; tx < W + tileW; tx += tileW) {
            for (let i = 0; i < 8; i++) {
                const bx = tx + ((i * 83) % tileW);
                const by = (i < 4) ? (45 + (i * 47) % (H * 0.28)) : (H * 0.72 + (i * 53) % (H * 0.24));
                const br = 18 + (i % 3) * 14;

                // Shadow
                ctx.fillStyle = 'rgba(35, 18, 10, 0.35)';
                ctx.beginPath();
                ctx.arc(bx + 6, by + 6, br, 0, Math.PI * 2);
                ctx.fill();

                // Sandstone boulder or desert bush
                ctx.fillStyle = (i % 2 === 0) ? '#6e4228' : '#4a5934';
                ctx.beginPath();
                ctx.arc(bx, by, br, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Raised Gravel Ballast Bed across Center (H * 0.36 to H * 0.64)
        const bedTop = H * 0.38;
        const bedH = H * 0.24;
        ctx.fillStyle = '#524942';
        ctx.fillRect(0, bedTop, W, bedH);

        // Wooden Railroad Crossties scrolling seamlessly
        const tieSpacing = 36;
        const tieStart = ((offX % tieSpacing) + tieSpacing) % tieSpacing - tieSpacing;
        ctx.fillStyle = '#2e1d12';
        for (let x = tieStart; x < W + tieSpacing; x += tieSpacing) {
            ctx.fillRect(x, H * 0.41, 16, H * 0.18);
        }

        // Twin Gleaming Steel Rails
        ctx.fillStyle = '#b5bec6';
        ctx.fillRect(0, H * 0.435, W, 6);
        ctx.fillRect(0, H * 0.56, W, 6);
    }

    drawScrollingRiverRapids(ctx, W, H, offX, offY) {
        // Deep canyon river water
        const waterGrad = ctx.createLinearGradient(0, 0, 0, H);
        waterGrad.addColorStop(0, '#382a1e');
        waterGrad.addColorStop(0.14, '#113a52');
        waterGrad.addColorStop(0.5, '#1d648a');
        waterGrad.addColorStop(0.86, '#113a52');
        waterGrad.addColorStop(1, '#382a1e');
        ctx.fillStyle = waterGrad;
        ctx.fillRect(0, 0, W, H);

        const tileW = 520;
        const startX = ((offX % tileW) + tileW) % tileW - tileW;

        // Scrolling Riverbanks (Top & Bottom 14% of screen)
        for (let tx = startX; tx < W + tileW; tx += tileW) {
            ctx.fillStyle = '#2d4726';
            for (let b = 0; b < 6; b++) {
                const rx = tx + b * 88;
                ctx.beginPath();
                ctx.arc(rx, 28 + (b % 2) * 16, 48, 0, Math.PI * 2);
                ctx.arc(rx, H - 28 - (b % 2) * 16, 48, 0, Math.PI * 2);
                ctx.fill();
            }

            // Whitewater Foam Streaks & River Rocks scrolling past
            ctx.strokeStyle = 'rgba(210, 245, 255, 0.42)';
            ctx.lineWidth = 4;
            for (let w = 0; w < 9; w++) {
                const wx = tx + ((w * 61) % tileW);
                const wy = H * 0.18 + ((w * 79) % (H * 0.64));
                ctx.beginPath();
                ctx.moveTo(wx, wy);
                ctx.lineTo(wx + 65, wy + Math.sin(w) * 8);
                ctx.stroke();
            }
        }
    }

    drawScrollingSkyClouds(ctx, W, H, offX, offY) {
        const skyGrad = ctx.createLinearGradient(0, 0, 0, H);
        skyGrad.addColorStop(0, '#0f243c');
        skyGrad.addColorStop(0.5, '#1f4973');
        skyGrad.addColorStop(1, '#0f243c');
        ctx.fillStyle = skyGrad;
        ctx.fillRect(0, 0, W, H);

        // Multi-speed Parallax Cloud Banks scrolling past
        const layers = [
            { mult: 0.45, count: 8, radius: 190, alpha: 0.25 },
            { mult: 1.0,  count: 10, radius: 140, alpha: 0.48 }
        ];

        layers.forEach(layer => {
            const tileW = 900;
            const startX = (((offX * layer.mult) % tileW) + tileW) % tileW - tileW;
            for (let tx = startX; tx < W + tileW; tx += tileW) {
                for (let c = 0; c < layer.count; c++) {
                    const cx = tx + ((c * 113) % tileW);
                    const cy = ((c * 137) % H);
                    const r = layer.radius * (0.8 + (c % 3) * 0.2);
                    const g = ctx.createRadialGradient(cx, cy, r * 0.1, cx, cy, r);
                    g.addColorStop(0, `rgba(240, 248, 255, ${layer.alpha})`);
                    g.addColorStop(0.6, `rgba(200, 225, 248, ${layer.alpha * 0.5})`);
                    g.addColorStop(1, 'rgba(180, 210, 240, 0)');
                    ctx.fillStyle = g;
                    ctx.beginPath();
                    ctx.arc(cx, cy, r, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        });
    }

    drawScrollingForestRoad(ctx, W, H, offX, offY) {
        // Woodland grass floor
        ctx.fillStyle = '#253d21';
        ctx.fillRect(0, 0, W, H);

        // Dirt Coach Road through Center
        ctx.fillStyle = '#5c432c';
        ctx.fillRect(0, H * 0.34, W, H * 0.32);

        // Wagon wheel ruts
        ctx.fillStyle = '#47321f';
        ctx.fillRect(0, H * 0.41, W, 10);
        ctx.fillRect(0, H * 0.57, W, 10);

        const tileW = 600;
        const startX = ((offX % tileW) + tileW) % tileW - tileW;
        for (let tx = startX; tx < W + tileW; tx += tileW) {
            for (let t = 0; t < 8; t++) {
                const x = tx + t * 76;
                const y = (t % 2 === 0) ? (H * 0.16 + (t * 23) % 70) : (H * 0.84 - (t * 19) % 70);
                const r = 48 + (t % 3) * 16;

                ctx.fillStyle = 'rgba(0,0,0,0.35)';
                ctx.beginPath();
                ctx.arc(x + 10, y + 10, r, 0, Math.PI * 2);
                ctx.fill();

                ctx.fillStyle = '#1b3318';
                ctx.beginPath();
                ctx.arc(x, y, r, 0, Math.PI * 2);
                ctx.fill();

                ctx.fillStyle = '#31592b';
                ctx.beginPath();
                ctx.arc(x - 8, y - 8, r * 0.7, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }

    drawScrollingCurrentMap(ctx, W, H, offX, offY) {
        const mapImg = document.getElementById('map-image');
        if (!mapImg || !mapImg.complete || !mapImg.naturalWidth) return;

        const sx = ((offX % W) + W) % W - W;
        const sy = ((offY % H) + H) % H - H;

        for (let x = sx; x < W + W; x += W) {
            for (let y = sy; y < H + H; y += H) {
                ctx.drawImage(mapImg, x, y, W, H);
            }
        }
    }

    /**
     * Renders the Stationary Center Vehicle so physical miniatures can battle on deck
     */
    drawStationaryVehicle(ctx, W, H, dt) {
        const cx = W * 0.5;
        const cy = H * 0.5;
        const vType = this.chaseState.vehicle;
        const scale = this.chaseState.vehicleScale || 1.0;

        // Subtle high-speed track/water/wind vibration
        const vibeY = Math.sin(this.time * 18) * 1.2;

        ctx.save();
        ctx.translate(cx, cy + vibeY);
        ctx.scale(scale, scale);

        if (vType === 'steam_train') {
            // Steam Locomotive + 2 Playable Passenger/Cargo Cars
            // Car 1 (Rear Flatbed / Cargo Car): x from -540 to -220
            // Car 2 (Center Passenger Coach - unroofed interior for minis): x from -195 to +145
            // Locomotive Engine (Front): x from +170 to +460
            const carH = 148;

            // Couplings
            ctx.fillStyle = '#1c1c1c';
            ctx.fillRect(-230, -14, 45, 28);
            ctx.fillRect(135, -14, 45, 28);

            // Rear Flatbed Cargo Car
            ctx.fillStyle = '#4a3221';
            ctx.fillRect(-540, -carH * 0.5, 320, carH);
            ctx.strokeStyle = '#291a10';
            ctx.lineWidth = 6;
            ctx.strokeRect(-540, -carH * 0.5, 320, carH);
            // Crates on rear car
            ctx.fillStyle = '#6e4c30';
            ctx.fillRect(-515, -55, 52, 52);
            ctx.fillRect(-310, 8, 58, 48);

            // Center Playable Passenger Coach (Wood floor + benches + walkways for minis)
            ctx.fillStyle = '#5c3c24';
            ctx.fillRect(-195, -carH * 0.5, 340, carH);
            ctx.strokeStyle = '#d4af37';
            ctx.lineWidth = 5;
            ctx.strokeRect(-195, -carH * 0.5, 340, carH);
            // Coach seats along top and bottom walls
            ctx.fillStyle = '#7a1f1d';
            for (let sx = -165; sx < 110; sx += 55) {
                ctx.fillRect(sx, -carH * 0.44, 38, 28);
                ctx.fillRect(sx, carH * 0.44 - 28, 38, 28);
            }

            // Front Steam Locomotive
            ctx.fillStyle = '#1e2226';
            ctx.fillRect(170, -carH * 0.48, 120, carH * 0.96); // Cab
            ctx.fillStyle = '#14171a';
            ctx.fillRect(290, -carH * 0.36, 165, carH * 0.72); // Boiler

            // Brass Cowcatcher at Front (+455)
            ctx.fillStyle = '#b8860b';
            ctx.beginPath();
            ctx.moveTo(455, -carH * 0.36);
            ctx.lineTo(498, 0);
            ctx.lineTo(455, carH * 0.36);
            ctx.closePath();
            ctx.fill();

            // Glowing Firebox in Cab
            const fbGlow = ctx.createRadialGradient(280, 0, 4, 280, 0, 45);
            fbGlow.addColorStop(0, 'rgba(255, 190, 60, 0.9)');
            fbGlow.addColorStop(1, 'rgba(255, 60, 0, 0)');
            ctx.fillStyle = fbGlow;
            ctx.beginPath();
            ctx.arc(280, 0, 45, 0, Math.PI * 2);
            ctx.fill();

            // Smokestack & Billowing Steam Plume Streaming Backwards
            ctx.fillStyle = '#0d0f12';
            ctx.beginPath();
            ctx.arc(410, 0, 20, 0, Math.PI * 2);
            ctx.fill();

            for (let s = 0; s < 14; s++) {
                const phase = (this.time * 0.85 + s / 14) % 1.0;
                const px = 410 - phase * 620;
                const py = Math.sin(this.time * 3 + s * 1.4) * (12 + phase * 38);
                const pr = 16 + phase * 58;
                const alpha = Math.sin(phase * Math.PI) * 0.48;
                ctx.fillStyle = `rgba(220, 228, 235, ${alpha})`;
                ctx.beginPath();
                ctx.arc(px, py, pr, 0, Math.PI * 2);
                ctx.fill();
            }

        } else if (vType === 'riverboat') {
            // Wide Playable Wooden Paddlewheel Riverboat Deck
            const hullW = 720;
            const hullH = 250;

            // Foamy Bow Wake & Stern Paddlewheel Churn
            ctx.strokeStyle = 'rgba(220, 248, 255, 0.65)';
            ctx.lineWidth = 6;
            ctx.beginPath();
            ctx.moveTo(hullW * 0.52, 0);
            ctx.lineTo(-hullW * 0.55, -hullH * 0.78);
            ctx.moveTo(hullW * 0.52, 0);
            ctx.lineTo(-hullW * 0.55, hullH * 0.78);
            ctx.stroke();

            // Main Hull Deck
            ctx.fillStyle = '#593a22';
            ctx.beginPath();
            ctx.moveTo(-hullW * 0.45, -hullH * 0.5);
            ctx.lineTo(hullW * 0.28, -hullH * 0.5);
            ctx.quadraticCurveTo(hullW * 0.52, 0, hullW * 0.28, hullH * 0.5);
            ctx.lineTo(-hullW * 0.45, hullH * 0.5);
            ctx.closePath();
            ctx.fill();
            ctx.strokeStyle = '#2e1c0f';
            ctx.lineWidth = 8;
            ctx.stroke();

            // Deck Plank Lines
            ctx.strokeStyle = 'rgba(0,0,0,0.28)';
            ctx.lineWidth = 2;
            for (let y = -hullH * 0.42; y <= hullH * 0.42; y += 22) {
                ctx.beginPath();
                ctx.moveTo(-hullW * 0.42, y);
                ctx.lineTo(hullW * 0.34, y);
                ctx.stroke();
            }

            // Spinning Crimson Stern Paddlewheel (-hullW * 0.50)
            ctx.fillStyle = '#8c1d18';
            ctx.fillRect(-hullW * 0.53, -hullH * 0.36, 48, hullH * 0.72);
            const bladeOffset = (this.time * 40) % 18;
            ctx.strokeStyle = '#e8d8c8';
            ctx.lineWidth = 4;
            for (let by = -hullH * 0.34 + bladeOffset; by < hullH * 0.34; by += 18) {
                ctx.beginPath();
                ctx.moveTo(-hullW * 0.53, by);
                ctx.lineTo(-hullW * 0.53 + 48, by);
                ctx.stroke();
            }

        } else if (vType === 'skyship') {
            // Arcane Skyship Galleon with Glowing Blue Aether Thrusters & Outriggers
            const hullW = 760;
            const hullH = 240;

            // Arcane Aether Wing Outriggers
            ctx.fillStyle = '#1e3f5c';
            ctx.beginPath();
            ctx.moveTo(-80, -hullH * 0.48);
            ctx.lineTo(-190, -hullH * 0.95);
            ctx.lineTo(60, -hullH * 0.48);
            ctx.closePath();
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(-80, hullH * 0.48);
            ctx.lineTo(-190, hullH * 0.95);
            ctx.lineTo(60, hullH * 0.48);
            ctx.closePath();
            ctx.fill();

            // Main Teak & Brass Skyship Deck
            ctx.fillStyle = '#4f3522';
            ctx.beginPath();
            ctx.moveTo(-hullW * 0.46, -hullH * 0.42);
            ctx.lineTo(hullW * 0.26, -hullH * 0.48);
            ctx.quadraticCurveTo(hullW * 0.54, 0, hullW * 0.26, hullH * 0.48);
            ctx.lineTo(-hullW * 0.46, hullH * 0.42);
            ctx.closePath();
            ctx.fill();
            ctx.strokeStyle = '#d4af37';
            ctx.lineWidth = 6;
            ctx.stroke();

            // Glowing Arcane Levitation Core in Center Deck
            const coreGlow = ctx.createRadialGradient(0, 0, 5, 0, 0, 68);
            coreGlow.addColorStop(0, 'rgba(180, 245, 255, 0.95)');
            coreGlow.addColorStop(0.5, 'rgba(40, 155, 255, 0.55)');
            coreGlow.addColorStop(1, 'rgba(40, 155, 255, 0)');
            ctx.fillStyle = coreGlow;
            ctx.beginPath();
            ctx.arc(0, 0, 68, 0, Math.PI * 2);
            ctx.fill();

            // Rear Thruster Plumes
            const thrustLen = 140 + Math.sin(this.time * 24) * 25;
            const tGrad = ctx.createLinearGradient(-hullW * 0.46, 0, -hullW * 0.46 - thrustLen, 0);
            tGrad.addColorStop(0, 'rgba(120, 225, 255, 0.9)');
            tGrad.addColorStop(1, 'rgba(40, 120, 255, 0)');
            ctx.fillStyle = tGrad;
            ctx.fillRect(-hullW * 0.46 - thrustLen, -hullH * 0.28, thrustLen, hullH * 0.56);

        } else if (vType === 'war_wagon') {
            // Armored War Wagon + Draft Team
            ctx.fillStyle = '#3d2b1d';
            ctx.fillRect(-260, -95, 380, 190);
            ctx.strokeStyle = '#7a8288';
            ctx.lineWidth = 8;
            ctx.strokeRect(-260, -95, 380, 190);
        }

        ctx.restore();
    }

    // ========================================================================
    // MAIN REAL-TIME LOOP
    // ========================================================================
    startLoop() {
        const tick = (now) => {
            const dt = Math.min(0.08, (now - this.lastTime) / 1000);
            this.lastTime = now;
            this.time += dt;

            // 1. Handle Animated Map State Morphing
            if (this.morphState.isAnimating) {
                const diff = this.morphState.animTarget - this.morphState.progress;
                const step = this.morphState.animSpeed * dt;
                if (Math.abs(diff) <= step) {
                    this.setMorphProgress(this.morphState.animTarget);
                    this.morphState.isAnimating = false;
                } else {
                    this.setMorphProgress(this.morphState.progress + Math.sign(diff) * step);
                }
            }

            // 2. Render Multi-Layer Parallax Depth (if active)
            if (this.parallaxState.mode !== 'none') {
                this.renderParallaxLayers();
            }

            // 3. Render Infinite Scrolling Chase & Stationary Vehicle (if active)
            if (this.chaseState.enabled) {
                this.renderChaseScene(dt);
            }

            requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
    }
}

window.dynamicSceneEngine = new DynamicSceneEngine();
