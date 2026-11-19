/**
 * AetherTable VTT - Eldritch & Gothic Horror FX (75 Unique Elements)
 * Procedural Canvas Renderers for Elements 226 through 300.
 * Every element features bespoke geometry, distinct kinetic animation,
 * and dynamic integration with the Fractal / Detail slider.
 */
(function() {
    'use strict';
    const reg = window.VTT_FX_DISPATCHER ? window.VTT_FX_DISPATCHER.register : null;
    if (!reg) return;
    const FX = window.VTT_FX || {};

    // =========================================================================
    // A. LINEAR MOTION (226 - 250)
    // =========================================================================

    // 226. Rotating Lighthouse Beam Cutting Through Fog
    reg(['ch_lighthouse_beam', 'item_226'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#05070d';
        ctx.fillRect(0, 0, W, H);
        const rot = time * 1.5 * speed;
        // Lighthouse lantern tower on left
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(10, H * 0.4, 25 * elScale, 40 * elScale);
        // Piercing white beam sweeping across coastal fog
        FX.drawVolumetricCone(ctx, 35 * elScale, H * 0.5, rot, Math.max(W, H) * 0.9, 0.45, `rgba(255, 255, 255, ${0.85 * intensity})`, 'rgba(148, 163, 184, 0)');
        // Billowing sea fog wisps
        for (let f = 0; f < 6; f++) {
            const fx = ((time * 30 + f * 45) % (W + 60)) - 30;
            const fy = H * 0.6 + Math.sin(f * 2) * 20;
            FX.drawRadialGlow(ctx, fx, fy, 2, 35 * elScale, `rgba(203, 213, 225, ${0.25 * intensity})`, 'rgba(203, 213, 225, 0)');
        }
    });

    // 227. Dying Streetlamps Flickering Down an Alley
    reg(['ch_flickering_streetlamps', 'item_227'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        ctx.fillStyle = '#0a0d14';
        ctx.fillRect(0, 0, W, H);
        const lamps = 4;
        for (let l = 0; l < lamps; l++) {
            const lx = (W / lamps) * (l + 0.5);
            ctx.fillStyle = '#1c1917';
            ctx.fillRect(lx - 3, cy - 25 * elScale, 6, 50 * elScale);
            // Flickering one by one down alley
            const flick = (Math.sin(time * 6 * speed + l * 2) > -0.2);
            if (flick) {
                FX.drawRadialGlow(ctx, lx, cy - 25 * elScale, 2, 28 * elScale, `rgba(254, 240, 138, ${0.9 * intensity})`, 'rgba(234, 179, 8, 0)');
            }
        }
    });

    // 228. Noir Sedan Headlights on Wet Cobblestones
    reg(['ch_sedan_headlights', 'item_228'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        ctx.fillStyle = '#090d16';
        ctx.fillRect(0, 0, W, H);
        // Cobblestone wet reflections
        ctx.strokeStyle = '#1e293b';
        ctx.lineWidth = 1;
        for (let x = 0; x < W; x += 18) {
            for (let y = 0; y < H; y += 14) { ctx.strokeRect(x, y, 16, 12); }
        }
        // Sedan headlights slicing through rain
        FX.drawVolumetricCone(ctx, W * 0.1, cy - 10 * elScale, 0, W * 0.85, 0.42, `rgba(254, 240, 138, ${0.85 * intensity})`, 'rgba(234, 179, 8, 0)');
        FX.drawVolumetricCone(ctx, W * 0.1, cy + 10 * elScale, 0, W * 0.85, 0.42, `rgba(254, 240, 138, ${0.85 * intensity})`, 'rgba(234, 179, 8, 0)');
    });

    // 229. Floating Spectral Candle Taper
    reg(['ch_floating_taper', 'item_229'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5 + Math.sin(time * 1.5 * speed) * 30;
        const cy = H * 0.5 + Math.cos(time * 1.2 * speed) * 15;
        // White taper candle wax cylinder
        ctx.fillStyle = '#f8fafc';
        ctx.fillRect(cx - 3 * elScale, cy, 6 * elScale, 22 * elScale);
        // Ethereal pale blue floating candle flame
        FX.drawRadialGlow(ctx, cx, cy - 4 * elScale, 1, 35 * elScale, `rgba(224, 242, 254, ${0.95 * intensity})`, 'rgba(56, 189, 248, 0)');
    });

    // 230. Blood-Moon Eclipse Shadow Creeping
    reg(['ch_bloodmoon_shadow', 'item_230'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#450a0a';
        ctx.fillRect(0, 0, W, H);
        // Blood-red lunar glow
        const moonGrad = ctx.createRadialGradient(W * 0.5, H * 0.5, 10, W * 0.5, H * 0.5, Math.max(W, H) * 0.6);
        moonGrad.addColorStop(0, `rgba(220, 38, 38, ${0.8 * intensity})`);
        moonGrad.addColorStop(1, '#180303');
        ctx.fillStyle = moonGrad;
        ctx.fillRect(0, 0, W, H);
        // Creeping dark eclipse shadow
        const shadowX = ((time * 40 * speed) % (W + 150)) - 75;
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.beginPath(); ctx.arc(shadowX, H * 0.5, Math.min(W, H) * 0.45, 0, Math.PI * 2); ctx.fill();
    });

    // 231. Sewer Blood Torrent
    reg(['ch_cellar_ichor', 'item_231', 'ch_sewer_blood_torrent'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        const rH = 55 * elScale;
        // Victorian brick sewer canal
        ctx.fillStyle = '#1c1917';
        ctx.fillRect(0, cy - rH * 0.6, W, rH * 1.2);
        // Surging deep crimson arterial blood torrent
        const bloodGrad = ctx.createLinearGradient(0, cy - rH * 0.5, 0, cy + rH * 0.5);
        bloodGrad.addColorStop(0, '#450a0a');
        bloodGrad.addColorStop(0.5, `rgba(220, 38, 38, ${0.95 * intensity})`);
        bloodGrad.addColorStop(1, '#2d0606');
        ctx.fillStyle = bloodGrad;
        ctx.fillRect(0, cy - rH * 0.5, W, rH);
        // Clotted froth ripples
        ctx.strokeStyle = `rgba(254, 202, 202, ${0.55 * intensity})`;
        ctx.lineWidth = 1.5;
        for (let r = 0; r < 8; r++) {
            const rx = (r * (W / 8) + time * 120 * speed) % W;
            ctx.beginPath(); ctx.arc(rx, cy + Math.sin(r) * (rH * 0.25), 8, 0, Math.PI); ctx.stroke();
        }
    });

    // 232. Venomous Centipedes Scuttling
    reg(['ch_shadow_tendrils', 'item_232', 'ch_centipede_scuttle'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        const headX = ((time * 85 * speed) % (W + 60)) - 30;
        // Segmented black chitin body with yellow legs
        for (let s = 14; s >= 0; s--) {
            const sx = headX - s * (5 * elScale);
            const sy = cy + Math.sin(time * 8 * speed - s * 0.5) * (10 * elScale);
            ctx.fillStyle = '#1c1917';
            ctx.beginPath(); ctx.arc(sx, sy, 4.5 * elScale, 0, Math.PI * 2); ctx.fill();
            // Legs waving
            ctx.strokeStyle = '#eab308';
            ctx.lineWidth = 1.2;
            const legWiggle = Math.sin(time * 15 + s) * 4;
            ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(sx - 3, sy - 8 * elScale + legWiggle); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(sx, sy); ctx.lineTo(sx - 3, sy + 8 * elScale - legWiggle); ctx.stroke();
        }
    });

    // 233. Retracting Dungeon Chasm Spikes
    reg(['ch_roach_stair_tide', 'item_233', 'ch_chasm_spikes'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(0, cy - 25 * elScale, W, 50 * elScale);
        // Stabbing iron spikes
        const isStab = (Math.sin(time * 4 * speed) > 0.3);
        const spikeH = isStab ? 22 * elScale : 4;
        ctx.fillStyle = '#94a3b8';
        for (let x = 15; x < W; x += 22) {
            ctx.beginPath();
            ctx.moveTo(x - 4, cy + 20 * elScale);
            ctx.lineTo(x, cy + 20 * elScale - spikeH);
            ctx.lineTo(x + 4, cy + 20 * elScale);
            ctx.closePath();
            ctx.fill();
        }
    });

    // 234. Sinuous Blackened Flesh Tendril
    reg(['ch_reverse_blood_drip', 'item_234', 'ch_creeping_tendril'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        ctx.strokeStyle = '#2d0606';
        ctx.lineWidth = 7 * elScale;
        ctx.beginPath();
        ctx.moveTo(0, cy);
        for (let x = 20; x < W; x += 30) {
            ctx.lineTo(x, cy + Math.sin(time * 3 * speed + x * 0.05) * (16 * elScale));
        }
        ctx.stroke();
        // Slime drips
        for (let x = 30; x < W; x += 55) {
            ctx.fillStyle = `rgba(185, 28, 28, ${0.75 * intensity})`;
            ctx.beginPath(); ctx.arc(x, cy + 12 * elScale, 3 * elScale, 0, Math.PI * 2); ctx.fill();
        }
    });

    // 235. Boiling Corpse Fat Grate Discharge
    reg(['ch_gravefog_wall', 'item_235', 'ch_iron_maidens_grate'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        ctx.fillStyle = '#1c1917';
        ctx.fillRect(0, cy - 20 * elScale, W, 40 * elScale);
        // Yellow-brown boiling tallow fat
        ctx.fillStyle = `rgba(202, 138, 4, ${0.75 * intensity})`;
        ctx.fillRect(0, cy - 10 * elScale, W, 20 * elScale);
        for (let b = 0; b < 6; b++) {
            const bx = (b * (W / 6) + time * 35) % W;
            ctx.beginPath(); ctx.arc(bx, cy, 5 * elScale, 0, Math.PI * 2); ctx.fill();
        }
    });

    // 236. Victorian Funeral Hearse Rolling
    reg(['ch_vintage_subway', 'item_236', 'ch_funeral_hearse'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        const hearseX = ((time * 65 * speed) % (W + 120)) - 60;
        ctx.save();
        ctx.translate(hearseX, cy);
        ctx.fillStyle = '#090d16';
        ctx.fillRect(-30 * elScale, -16 * elScale, 60 * elScale, 32 * elScale);
        // Glass coffin window with black velvet drapery
        ctx.fillStyle = `rgba(255, 255, 255, ${0.2 * intensity})`;
        ctx.fillRect(-22 * elScale, -12 * elScale, 44 * elScale, 18 * elScale);
        // Swaying black ostrich plumes on roof corners
        for (let p = -1; p <= 1; p += 2) {
            ctx.fillStyle = '#0f172a';
            ctx.beginPath(); ctx.arc(p * 25 * elScale, -22 * elScale + Math.sin(time * 3) * 3, 5 * elScale, 0, Math.PI * 2); ctx.fill();
        }
        ctx.restore();
    });

    // 237. Creaking Dumbwaiter Shaft
    reg(['ch_elevator_needle', 'item_237', 'ch_creaky_dumbwaiter'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5;
        ctx.fillStyle = '#1c1917';
        ctx.fillRect(cx - 20 * elScale, 0, 40 * elScale, H);
        // Descending wooden service box
        const boxY = (time * 50 * speed) % (H + 40) - 20;
        ctx.fillStyle = '#451a03';
        ctx.fillRect(cx - 16 * elScale, boxY, 32 * elScale, 32 * elScale);
        ctx.strokeStyle = '#78350f';
        ctx.lineWidth = 2;
        ctx.strokeRect(cx - 16 * elScale, boxY, 32 * elScale, 32 * elScale);
    });

    // 238. Cathedral Bell Rope Vibrating
    reg(['ch_ghost_typewriter', 'item_238', 'ch_bell_pull_rope'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5;
        const vib = Math.sin(time * 12 * speed) * (8 * elScale);
        ctx.strokeStyle = '#d97706';
        ctx.lineWidth = 4 * elScale;
        ctx.beginPath(); ctx.moveTo(cx, 0); ctx.quadraticCurveTo(cx + vib, H * 0.5, cx, H); ctx.stroke();
    });

    // 239. Shattered Rose Stained-Glass Skylight Halos
    reg(['ch_dumbwaiter_lift', 'item_239', 'ch_stained_glass_skylight'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#0a0a14';
        ctx.fillRect(0, 0, W, H);
        const saintCols = ['#dc2626', '#2563eb', '#16a34a', '#ca8a04'];
        for (let s = 0; s < 4; s++) {
            const sx = (s + 0.5) * (W / 4);
            const sy = H * 0.5 + Math.sin(time + s) * 10;
            FX.drawRadialGlow(ctx, sx, sy, 2, 28 * elScale, saintCols[s], 'rgba(0,0,0,0)');
        }
    });

    // 240. Meat Hook Rail Carrying Carcasses
    reg(['ch_film_projector_beam', 'item_240', 'ch_taxidermy_gantry'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.4;
        ctx.fillStyle = '#334155';
        ctx.fillRect(0, cy - 4, W, 8);
        const hooks = 3;
        for (let h = 0; h < hooks; h++) {
            const hx = ((time * 40 * speed + h * (W / hooks)) % (W + 60)) - 30;
            ctx.fillStyle = '#571c1c';
            ctx.fillRect(hx - 8 * elScale, cy + 12 * elScale, 16 * elScale, 35 * elScale);
        }
    });

    // 241. Violet Exorcism Lightning Arcs
    reg(['ch_noneuclidean_tiles', 'item_241', 'ch_exorcism_energy_arc'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        ctx.strokeStyle = `rgba(168, 85, 247, ${0.95 * intensity})`;
        ctx.lineWidth = 3;
        ctx.shadowColor = '#a855f7';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.moveTo(0, cy);
        for (let x = 20; x < W; x += 25) {
            ctx.lineTo(x, cy + (FX.hash(x + Math.floor(time * 15)) - 0.5) * 25);
        }
        ctx.lineTo(W, cy);
        ctx.stroke();
        ctx.shadowBlur = 0;
    });

    // 242. Grim Reaper Scythe Cleave Wake
    reg(['ch_wallpaper_void_tear', 'item_242', 'ch_scythe_cleave'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cleaveX = ((time * 160 * speed) % (W + 100)) - 50;
        ctx.strokeStyle = `rgba(224, 242, 254, ${0.85 * intensity})`;
        ctx.lineWidth = 3.5;
        ctx.beginPath();
        ctx.arc(cleaveX, H * 0.5, 45 * elScale, -Math.PI * 0.4, Math.PI * 0.4);
        ctx.stroke();
    });

    // 243. Swirling Soul Stream Torrent
    reg(['ch_madness_ripples', 'item_243', 'ch_soul_stream_vortex'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const souls = Math.round(15 + rough * 20);
        for (let s = 0; s < souls; s++) {
            const sx = ((s * (W / souls) + time * 120 * speed) % (W + 40)) - 20;
            const sy = H * 0.5 + Math.sin(time * 3 + s) * (18 * elScale);
            FX.drawRadialGlow(ctx, sx, sy, 1, 10 * elScale, `rgba(224, 242, 254, ${0.8 * intensity})`, 'rgba(147, 197, 253, 0)');
        }
    });

    // 244. Sickly Green Eldritch Obelisk Beam
    reg(['ch_drifting_apparition', 'item_244', 'ch_eldritch_portal_beam'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        const beamGrad = ctx.createLinearGradient(0, cy - 25 * elScale, 0, cy + 25 * elScale);
        beamGrad.addColorStop(0, 'rgba(6, 78, 59, 0)');
        beamGrad.addColorStop(0.5, `rgba(52, 211, 153, ${0.9 * intensity})`);
        beamGrad.addColorStop(1, 'rgba(6, 78, 59, 0)');
        ctx.fillStyle = beamGrad;
        ctx.fillRect(0, cy - 25 * elScale, W, 50 * elScale);
    });

    // 245. Arterial Blood Spurts Pulsing
    reg(['ch_ritual_violet_mist', 'item_245', 'ch_blood_squirt_arterial'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        const spurts = 3;
        for (let s = 0; s < spurts; s++) {
            const phase = (time * 3 * speed + s * 0.33) % 1.0;
            const sx = phase * W;
            const sy = cy + Math.sin(s * 2) * 10;
            ctx.fillStyle = `rgba(220, 38, 38, ${(1 - phase) * 0.95 * intensity})`;
            ctx.beginPath(); ctx.arc(sx, sy, 6 * (1 - phase) * elScale, 0, Math.PI * 2); ctx.fill();
        }
    });

    // 246. Fog Wisps Snaking on Cobblestones
    reg(['ch_pier_coastal_fog', 'item_246', 'ch_fog_wisps_cobblestone'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        for (let w = 0; w < 4; w++) {
            const wx = ((time * 45 * speed + w * (W * 0.3)) % (W + 60)) - 30;
            const wy = H * 0.6 + Math.sin(time + w) * 14;
            FX.drawRadialGlow(ctx, wx, wy, 2, 28 * elScale, `rgba(241, 245, 249, ${0.35 * intensity})`, 'rgba(241, 245, 249, 0)');
        }
    });

    // 247. Bloated Black Graveyard Slugs
    reg(['ch_stainedglass_rain', 'item_247', 'ch_graveyard_black_slugs'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        for (let s = 0; s < 3; s++) {
            const sx = ((time * 20 * speed + s * 80) % (W + 60)) - 30;
            ctx.fillStyle = '#0f172a';
            ctx.beginPath(); ctx.ellipse(sx, cy, 14 * elScale, 6 * elScale, 0, 0, Math.PI * 2); ctx.fill();
        }
    });

    // 248. Agitated Black Crows Flapping
    reg(['ch_cemetery_leaves', 'item_248', 'ch_circling_crows'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const crows = 6;
        for (let c = 0; c < crows; c++) {
            const cx = (FX.hash(c * 17) * W + time * 110 * speed) % (W + 40) - 20;
            const cy = H * 0.4 + Math.sin(time * 5 + c) * 20;
            ctx.fillStyle = '#020617';
            ctx.beginPath(); ctx.arc(cx, cy, 4 * elScale, 0, Math.PI * 2); ctx.fill();
            // Flapping wings
            const wingY = Math.sin(time * 14 + c) * 6;
            ctx.beginPath(); ctx.moveTo(cx - 8, cy + wingY); ctx.lineTo(cx, cy); ctx.lineTo(cx + 8, cy + wingY); ctx.stroke();
        }
    });

    // 249. Rhythmic Dungeon Condensation Drips
    reg(['ch_crows_fullmoon', 'item_249', 'ch_dripping_water_dungeon'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const drips = 4;
        for (let d = 0; d < drips; d++) {
            const dx = (d + 0.5) * (W / drips);
            const dropY = (time * 80 * speed + d * 25) % H;
            ctx.fillStyle = `rgba(148, 163, 184, ${0.75 * intensity})`;
            ctx.beginPath(); ctx.arc(dx, dropY, 2.5, 0, Math.PI * 2); ctx.fill();
        }
    });

    // 250. Withered Autumn Leaves Skittering
    reg(['ch_cigarette_smoke_lamp', 'item_250', 'ch_autumn_leaves_eddy'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const leaves = Math.round(15 + rough * 20);
        for (let l = 0; l < leaves; l++) {
            const lx = ((l * (W / leaves) + time * 75 * speed) % (W + 40)) - 20;
            const ly = H * 0.6 + Math.sin(time * 3 + l) * 15;
            ctx.fillStyle = (l % 2 === 0) ? '#78350f' : '#b45309';
            ctx.fillRect(lx, ly, 6 * elScale, 4 * elScale);
        }
    });

    // =========================================================================
    // B. ANIMATED TEXTURES & AREA-FILLS (251 - 275)
    // =========================================================================

    // 251. Eerie Green Moonlight Mausoleum
    reg(['ch_venetian_blind_stripes', 'item_251', 'ch_eerie_green_moonlight'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#062c1e';
        ctx.fillRect(0, 0, W, H);
        FX.drawRadialGlow(ctx, W * 0.5, H * 0.4, 10, Math.max(W, H) * 0.65, `rgba(167, 243, 208, ${0.45 * intensity})`, 'rgba(6, 78, 59, 0)');
    });

    // 252. Melted Wax Church Candelabra Alcoves
    reg(['ch_harbor_indigo_moon', 'item_252', 'ch_candelabra_wall_glow'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#1c1917';
        ctx.fillRect(0, 0, W, H);
        for (let x = 20; x < W; x += 40) {
            FX.drawRadialGlow(ctx, x, H * 0.5, 2, 22 * elScale, `rgba(254, 215, 170, ${0.85 * intensity})`, 'rgba(234, 88, 12, 0)');
        }
    });

    // 253. Cathedral Floor Stained-Glass Projection
    reg(['ch_sewer_green_gaslight', 'item_253', 'ch_stained_glass_projection'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(0, 0, W, H);
        const cols = ['#b91c1c', '#1d4ed8', '#047857', '#ca8a04'];
        for (let i = 0; i < 4; i++) {
            const ix = (i % 2) * (W * 0.5);
            const iy = Math.floor(i / 2) * (H * 0.5);
            ctx.fillStyle = cols[i];
            ctx.fillRect(ix + 10, iy + 10, W * 0.5 - 20, H * 0.5 - 20);
        }
    });

    // 254. Decaying Mansion Violet Lightning
    reg(['ch_frosted_lightning_flash', 'item_254', 'ch_pale_lightning_mansion'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#09090b';
        ctx.fillRect(0, 0, W, H);
        if (Math.sin(time * 4 * speed) > 0.85) {
            ctx.fillStyle = `rgba(216, 180, 254, ${0.85 * intensity})`;
            ctx.fillRect(0, 0, W, H);
        }
    });

    // 255. Submerged Glowing Yellow Eyes
    reg(['ch_ritual_chalk_candles', 'item_255', 'ch_submerged_biolum_eyes'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#022c22';
        ctx.fillRect(0, 0, W, H);
        for (let e = 0; e < 6; e++) {
            const ex = FX.hash(e * 19) * W;
            const ey = FX.hash(e * 31) * H;
            const blink = Math.sin(time * 3 + e) > 0.2;
            if (blink) {
                FX.drawRadialGlow(ctx, ex - 6, ey, 1, 6, '#fef08a', 'rgba(0,0,0,0)');
                FX.drawRadialGlow(ctx, ex + 6, ey, 1, 6, '#fef08a', 'rgba(0,0,0,0)');
            }
        }
    });

    // 256. Bubbling Black Pitch Tar Pit
    reg(['ch_harbor_tentacle_water', 'item_256', 'ch_bubbling_tar_pit'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#0a0a0a';
        ctx.fillRect(0, 0, W, H);
        for (let b = 0; b < 8; b++) {
            const bx = FX.hash(b * 13) * W;
            const by = FX.hash(b * 29) * H;
            const br = Math.sin(time * 2 + b) * 8 * elScale;
            if (br > 0) {
                ctx.fillStyle = '#262626';
                ctx.beginPath(); ctx.arc(bx, by, br, 0, Math.PI * 2); ctx.fill();
            }
        }
    });

    // 257. Pool of Thick Clotted Blood
    reg(['ch_collapsing_floorboards', 'item_257', 'ch_pool_clotted_blood'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#2d0606';
        ctx.fillRect(0, 0, W, H);
        FX.drawRadialGlow(ctx, W * 0.5, H * 0.5, 5, Math.min(W, H) * 0.5, `rgba(185, 28, 28, ${0.9 * intensity})`, 'rgba(69, 10, 10, 0)');
    });

    // 258. Pulsating Mutated Flesh Carpet
    reg(['ch_crypt_maggot_carpet', 'item_258', 'ch_creeping_flesh_carpet'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#831843';
        ctx.fillRect(0, 0, W, H);
        // Vein networks
        ctx.strokeStyle = '#4c0519';
        ctx.lineWidth = 2;
        for (let y = 15; y < H; y += 30) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.bezierCurveTo(W * 0.33, y + Math.sin(time * 3 + y) * 12, W * 0.66, y - Math.sin(time * 3 + y) * 12, W, y);
            ctx.stroke();
        }
    });

    // 259. Formaldehyde Embalming Specimen Vat
    reg(['ch_whispering_tar_pool', 'item_259', 'ch_caustic_embalming_pool'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(0, 0, W, H);
        FX.drawRadialGlow(ctx, W * 0.5, H * 0.5, 10, Math.min(W, H) * 0.5, `rgba(167, 243, 208, ${0.65 * intensity})`, 'rgba(6, 78, 59, 0)');
    });

    // 260. Squirming Pale White Maggots
    reg(['ch_creeping_hoarfrost', 'item_260', 'ch_writhing_maggots'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#1c1917';
        ctx.fillRect(0, 0, W, H);
        const maggots = Math.round(40 + rough * 50);
        ctx.fillStyle = '#f8fafc';
        for (let m = 0; m < maggots; m++) {
            const mx = FX.hash(m * 17) * W + Math.sin(time * 8 + m) * 3;
            const my = FX.hash(m * 31) * H + Math.cos(time * 8 + m) * 3;
            ctx.fillRect(mx, my, 4 * elScale, 2 * elScale);
        }
    });

    // 261. Heavy Cobweb Curtains in Vault
    reg(['ch_rattling_bookshelves', 'item_261', 'ch_cobweb_vault_ceiling'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(0, 0, W, H);
        ctx.strokeStyle = `rgba(226, 232, 240, ${0.35 * intensity})`;
        ctx.lineWidth = 1;
        for (let x = 0; x < W; x += 30) {
            ctx.beginPath(); ctx.moveTo(x, 0); ctx.quadraticCurveTo(x + 15, H * 0.5, x + 30, 0); ctx.stroke();
        }
    });

    // 262. Mildewed Rotting Bookshelf Stacks
    reg(['ch_morgue_freezer_rattle', 'item_262', 'ch_rotting_bookshelf_stacks'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#29180c';
        ctx.fillRect(0, 0, W, H);
        for (let y = 15; y < H; y += 35) {
            ctx.fillStyle = '#78350f';
            ctx.fillRect(0, y, W, 8);
        }
    });

    // 263. Cloudy Glass Embalming Jars
    reg(['ch_breathing_padded_walls', 'item_263', 'ch_embalming_jar_shelves'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(0, 0, W, H);
        for (let x = 20; x < W; x += 40) {
            ctx.fillStyle = `rgba(52, 211, 153, ${0.55 * intensity})`;
            ctx.fillRect(x - 10, H * 0.35, 20 * elScale, 30 * elScale);
        }
    });

    // 264. Hanging Rusty Iron Gibbet Cages
    reg(['ch_cosmic_asphalt_puddle', 'item_264', 'ch_iron_cages_ossuary'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#18181b';
        ctx.fillRect(0, 0, W, H);
        for (let c = 0; c < 3; c++) {
            const cx = (c + 0.5) * (W / 3);
            ctx.strokeStyle = '#52525b';
            ctx.lineWidth = 2.5;
            ctx.strokeRect(cx - 15 * elScale, H * 0.25, 30 * elScale, 45 * elScale);
        }
    });

    // 265. Torture Rack Chains Swaying
    reg(['ch_wallpaper_blinking_eyes', 'item_265', 'ch_torture_rack_chains'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#1c1917';
        ctx.fillRect(0, 0, W, H);
        for (let x = 25; x < W; x += 50) {
            const sway = Math.sin(time * 3 * speed + x) * 6;
            ctx.strokeStyle = '#78716c';
            ctx.lineWidth = 3;
            ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x + sway, H); ctx.stroke();
        }
    });

    // 266. Demonic Summoning Circle Runes in Blood
    reg(['ch_noir_filmgrain', 'item_266', 'ch_summoning_circle_runes'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        ctx.fillStyle = '#1c0a0a';
        ctx.fillRect(0, 0, W, H);
        ctx.strokeStyle = `rgba(220, 38, 38, ${0.9 * intensity})`;
        ctx.lineWidth = 2.5;
        ctx.beginPath(); ctx.arc(cx, cy, Math.min(W, H) * 0.42, 0, Math.PI * 2); ctx.stroke();
        // Inner pentagram
        ctx.beginPath();
        for (let i = 0; i < 5; i++) {
            const ang = (Math.PI * 2 / 5) * i * 2 - Math.PI * 0.5;
            const px = cx + Math.cos(ang) * Math.min(W, H) * 0.4;
            const py = cy + Math.sin(ang) * Math.min(W, H) * 0.4;
            if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.stroke();
    });

    // 267. Living Shadow Tendrils Creeping
    reg(['ch_altar_chromatic_aberration', 'item_267', 'ch_creeping_shadow_tendrils'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
        ctx.fillRect(0, 0, W, H);
        ctx.fillStyle = '#000000';
        for (let x = 0; x < W; x += 30) {
            const reach = H * 0.4 + Math.sin(time * 3 * speed + x) * 20;
            ctx.fillRect(x, 0, 20, reach);
        }
    });

    // 268. Phosphorescent Ghost Slime Coating
    reg(['ch_crttv_ghost_static', 'item_268', 'ch_ectoplasm_slime_coating'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#064e3b';
        ctx.fillRect(0, 0, W, H);
        FX.drawRadialGlow(ctx, W * 0.5, H * 0.5, 5, Math.min(W, H) * 0.5, `rgba(52, 211, 153, ${0.85 * intensity})`, 'rgba(6, 78, 59, 0)');
    });

    // 269. Knee-High Crypt Spectral Mist
    reg(['ch_gravity_inversion_room', 'item_269', 'ch_spectral_mist_floor'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        for (let s = 0; s < 5; s++) {
            const sy = H * 0.65 + Math.sin(time * 2 + s) * 10;
            ctx.fillStyle = `rgba(241, 245, 249, ${(0.35 + rough * 0.1) * intensity})`;
            ctx.fillRect(0, sy, W, 20 * elScale);
        }
    });

    // 270. Eldritch Reality-Warping Optical Haze
    reg(['ch_burning_eldritch_runes', 'item_270', 'ch_hallucinatory_distortion'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = 'rgba(88, 28, 135, 0.35)';
        ctx.fillRect(0, 0, W, H);
        for (let y = 10; y < H; y += 20) {
            ctx.fillStyle = `rgba(236, 72, 153, ${0.25 * intensity})`;
            ctx.fillRect(Math.sin(time * 5 + y) * 14, y, W, 4);
        }
    });

    // 271. Rolling Graveyard Fog
    reg(['ch_midnight_cobblestone_rain', 'item_271', 'ch_drifting_cemetery_fog'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        for (let f = 0; f < 6; f++) {
            const fx = ((time * 40 * speed + f * 50) % (W + 80)) - 40;
            FX.drawRadialGlow(ctx, fx, H * 0.5, 2, 45 * elScale, `rgba(241, 245, 249, ${0.35 * intensity})`, 'rgba(241, 245, 249, 0)');
        }
    });

    // 272. Weeping Stone Ceiling Droplets
    reg(['ch_crypt_ceiling_cobwebs', 'item_272', 'ch_dripping_dungeon_ceiling'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(0, 0, W, H);
        const drops = Math.round(15 + rough * 20);
        for (let d = 0; d < drops; d++) {
            const dx = FX.hash(d * 19) * W;
            const dy = (time * 120 * speed + FX.hash(d * 37) * H) % H;
            ctx.fillStyle = '#94a3b8';
            ctx.beginPath(); ctx.arc(dx, dy, 2, 0, Math.PI * 2); ctx.fill();
        }
    });

    // 273. Buzzing Swarm of Black Blowflies
    reg(['ch_chimney_woodsmoke', 'item_273', 'ch_swarming_flies_carcass'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const flies = Math.round(35 + rough * 45);
        ctx.fillStyle = '#020617';
        for (let f = 0; f < flies; f++) {
            const fx = (FX.hash(f * 13) * W + Math.sin(time * 12 + f) * 15);
            const fy = (FX.hash(f * 29) * H + Math.cos(time * 12 + f) * 15);
            ctx.fillRect(fx, fy, 2, 2);
        }
    });

    // 274. Crematorium Chimney Soot Curtain
    reg(['ch_frosted_pacing_shadows', 'item_274', 'ch_chimney_soot_curtain'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = 'rgba(15, 23, 42, 0.5)';
        ctx.fillRect(0, 0, W, H);
        for (let s = 0; s < 15; s++) {
            const sx = FX.hash(s * 17) * W;
            const sy = (time * 45 * speed + FX.hash(s * 31) * H) % H;
            ctx.fillStyle = '#1e293b';
            ctx.fillRect(sx, sy, 3, 3);
        }
    });

    // 275. Winged Shadows Crawling on Rafters
    reg(['ch_crimescene_soot', 'item_275', 'ch_moving_shadows_rafters'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const shadowX = ((time * 70 * speed) % (W + 150)) - 75;
        ctx.fillStyle = `rgba(0, 0, 0, ${0.55 * intensity})`;
        ctx.beginPath(); ctx.ellipse(shadowX, H * 0.4, 60 * elScale, 25 * elScale, 0.2, 0, Math.PI * 2); ctx.fill();
    });

    // =========================================================================
    // C. SPOT / SINGLE FOCAL OBJECTS (276 - 300)
    // =========================================================================

    // 276. Guttering Tallow Candle on Skull
    reg(['ch_bankers_desklamp', 'item_276', 'ch_dripping_tallow_candle'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.55;
        // Human skull candleholder
        ctx.fillStyle = '#e2e8f0';
        ctx.beginPath(); ctx.arc(cx, cy, 18 * elScale, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#0f172a'; // Eye sockets
        ctx.beginPath(); ctx.arc(cx - 6 * elScale, cy - 2 * elScale, 4 * elScale, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(cx + 6 * elScale, cy - 2 * elScale, 4 * elScale, 0, Math.PI * 2); ctx.fill();
        // Candle flame guttering
        const flick = 0.8 + 0.2 * Math.sin(time * 15 * speed);
        FX.drawRadialGlow(ctx, cx, cy - 26 * elScale, 1, 28 * elScale, `rgba(254, 215, 170, ${flick * intensity})`, 'rgba(234, 88, 12, 0)');
    });

    // 277. Creaking Iron Graveyard Lantern
    reg(['ch_london_gaslamp', 'item_277', 'ch_creaking_iron_lantern'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.45;
        const sway = Math.sin(time * 2.5 * speed) * 0.3;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(sway);
        ctx.fillStyle = '#1c1917';
        ctx.fillRect(-12 * elScale, 0, 24 * elScale, 36 * elScale);
        FX.drawRadialGlow(ctx, 0, 18 * elScale, 2, 45 * elScale, `rgba(254, 240, 138, ${0.9 * intensity})`, 'rgba(234, 179, 8, 0)');
        ctx.restore();
    });

    // 278. Victorian Gas Streetlamp
    reg(['ch_skull_tallow_candles', 'item_278', 'ch_gas_streetlamp_flicker'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.45;
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(cx - 3, cy, 6, H - cy);
        // Gas lamp mantle
        FX.drawRadialGlow(ctx, cx, cy, 2, 45 * elScale, `rgba(254, 240, 138, ${0.95 * intensity})`, 'rgba(234, 179, 8, 0)');
    });

    // 279. Skull Fireplace Embers
    reg(['ch_purple_flame_lantern', 'item_279', 'ch_fireplace_skull_embers'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.55;
        ctx.fillStyle = '#292524';
        ctx.fillRect(cx - 28 * elScale, cy - 20 * elScale, 56 * elScale, 40 * elScale);
        // Burning skull inside
        ctx.fillStyle = '#44403c';
        ctx.beginPath(); ctx.arc(cx, cy, 16 * elScale, 0, Math.PI * 2); ctx.fill();
        // Embers in eye sockets
        const eyeGlow = 0.7 + 0.3 * Math.sin(time * 5 * speed);
        FX.drawRadialGlow(ctx, cx - 6 * elScale, cy - 2 * elScale, 1, 8 * elScale, `rgba(234, 88, 12, ${eyeGlow * intensity})`, 'rgba(0,0,0,0)');
        FX.drawRadialGlow(ctx, cx + 6 * elScale, cy - 2 * elScale, 1, 8 * elScale, `rgba(234, 88, 12, ${eyeGlow * intensity})`, 'rgba(0,0,0,0)');
    });

    // 280. Green Unholy Witch-Fire Brazier
    reg(['ch_pocket_lighter_flicker', 'item_280', 'ch_ritual_brazier_green_fire'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.55;
        ctx.fillStyle = '#451a03';
        ctx.fillRect(cx - 20 * elScale, cy, 40 * elScale, 20 * elScale);
        // Eerie green flames
        FX.drawRadialGlow(ctx, cx, cy - 8 * elScale, 2, 38 * elScale, `rgba(167, 243, 208, ${0.95 * intensity})`, 'rgba(5, 150, 105, 0)');
    });

    // 281. Snapping Iron Maiden
    reg(['ch_bleeding_ritual_dagger', 'item_281', 'ch_snapping_iron_maiden'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        const open = Math.abs(Math.sin(time * 2 * speed)) * (20 * elScale);
        ctx.fillStyle = '#1c1917';
        ctx.fillRect(cx - 20 * elScale - open, cy - 35 * elScale, 20 * elScale, 70 * elScale);
        ctx.fillRect(cx + open, cy - 35 * elScale, 20 * elScale, 70 * elScale);
    });

    // 282. Swinging Crescent Pendulum Blade
    reg(['ch_manhole_sewer_fumes', 'item_282', 'ch_swinging_pendulum_blade'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5;
        const swing = Math.sin(time * 3 * speed) * (35 * elScale);
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(cx, 0); ctx.lineTo(cx + swing, H * 0.75); ctx.stroke();
        // Crescent razor head
        ctx.fillStyle = '#e2e8f0';
        ctx.beginPath();
        ctx.arc(cx + swing, H * 0.75, 22 * elScale, Math.PI * 0.2, Math.PI * 0.8);
        ctx.stroke();
    });

    // 283. Concealed Spiked Floor Trap
    reg(['ch_iron_maiden_closing', 'item_283', 'ch_spiked_floor_trap'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(cx - 25 * elScale, cy - 25 * elScale, 50 * elScale, 50 * elScale);
        if (Math.sin(time * 3 * speed) > 0.4) {
            ctx.fillStyle = '#94a3b8';
            for (let x = -2; x <= 2; x++) {
                for (let y = -2; y <= 2; y++) {
                    ctx.beginPath(); ctx.arc(cx + x * 9 * elScale, cy + y * 9 * elScale, 2.5 * elScale, 0, Math.PI * 2); ctx.fill();
                }
            }
        }
    });

    // 284. Writhing Floor Fissure Tentacle
    reg(['ch_lab_pit_viper', 'item_284', 'ch_writhing_tentacle_crack'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.6;
        // Stone fissure crack
        ctx.fillStyle = '#0a0a0a';
        ctx.fillRect(cx - 25 * elScale, cy, 50 * elScale, 10 * elScale);
        // Thrashing tentacle
        ctx.strokeStyle = '#581c87';
        ctx.lineWidth = 8 * elScale;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.quadraticCurveTo(cx + Math.sin(time * 6 * speed) * 30, cy - 25 * elScale, cx + Math.cos(time * 6 * speed) * 15, cy - 45 * elScale);
        ctx.stroke();
    });

    // 285. Acid-Dripping Gargoyle Basin
    reg(['ch_elevator_cable_whip', 'item_285', 'ch_acid_dripping_gargoyle'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.45;
        ctx.fillStyle = '#475569';
        ctx.beginPath(); ctx.arc(cx, cy - 10 * elScale, 18 * elScale, 0, Math.PI * 2); ctx.fill();
        // Dripping green acid into basin
        const dropY = (cy + ((time * 60 * speed) % 35));
        ctx.fillStyle = '#10b981';
        ctx.beginPath(); ctx.arc(cx, dropY, 3 * elScale, 0, Math.PI * 2); ctx.fill();
    });

    // 286. Grandfather Clock Pendulum
    reg(['ch_antique_gramophone', 'item_286', 'ch_grandfathers_clock_pendulum'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        ctx.fillStyle = '#451a03';
        ctx.fillRect(cx - 16 * elScale, cy - 35 * elScale, 32 * elScale, 70 * elScale);
        // Swinging brass pendulum
        const pend = Math.sin(time * 3 * speed) * 10;
        ctx.fillStyle = '#fbbf24';
        ctx.beginPath(); ctx.arc(cx + pend, cy + 15 * elScale, 6 * elScale, 0, Math.PI * 2); ctx.fill();
    });

    // 287. Disembodied Eye in Crystal Ball
    reg(['ch_grandfather_clock', 'item_287', 'ch_crystal_ball_swirling_eye'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        // Velvet stand
        ctx.fillStyle = '#4c0519';
        ctx.fillRect(cx - 14 * elScale, cy + 18 * elScale, 28 * elScale, 10 * elScale);
        // Crystal ball
        ctx.fillStyle = '#0f172a';
        ctx.beginPath(); ctx.arc(cx, cy, 24 * elScale, 0, Math.PI * 2); ctx.fill();
        // Disembodied yellow eye inside
        ctx.fillStyle = '#fef08a';
        ctx.beginPath(); ctx.ellipse(cx, cy, 14 * elScale, 8 * elScale, 0, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#1c1917';
        ctx.beginPath(); ctx.arc(cx + Math.sin(time * 2) * 4, cy, 5 * elScale, 0, Math.PI * 2); ctx.fill();
    });

    // 288. Moving Ouija Planchette
    reg(['ch_offhook_telephone', 'item_288', 'ch_ouija_planchette_moving'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5 + Math.sin(time * 1.5 * speed) * 20;
        const cy = H * 0.5 + Math.cos(time * 1.8 * speed) * 15;
        ctx.fillStyle = '#d97706';
        ctx.beginPath();
        ctx.moveTo(cx, cy - 14 * elScale); ctx.lineTo(cx + 12 * elScale, cy + 10 * elScale); ctx.lineTo(cx - 12 * elScale, cy + 10 * elScale);
        ctx.closePath();
        ctx.fill();
    });

    // 289. Pharaonic Sarcophagus Curse
    reg(['ch_detective_ceiling_fan', 'item_289', 'ch_iron_maiden_sarcophagus'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        ctx.fillStyle = '#78350f';
        ctx.fillRect(cx - 18 * elScale, cy - 35 * elScale, 36 * elScale, 70 * elScale);
        // Glowing pharaonic curse eyes
        const eyeGlow = Math.sin(time * 4 * speed) > 0;
        FX.drawRadialGlow(ctx, cx - 6 * elScale, cy - 20 * elScale, 1, 8 * elScale, eyeGlow ? '#38bdf8' : '#0369a1', 'rgba(0,0,0,0)');
        FX.drawRadialGlow(ctx, cx + 6 * elScale, cy - 20 * elScale, 1, 8 * elScale, eyeGlow ? '#38bdf8' : '#0369a1', 'rgba(0,0,0,0)');
    });

    // 290. Blinking Creepy Porcelain Doll
    reg(['ch_autopsy_table_drain', 'item_290', 'ch_creepy_porcelain_doll'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        // White doll head
        ctx.fillStyle = '#f8fafc';
        ctx.beginPath(); ctx.arc(cx, cy - 10 * elScale, 16 * elScale, 0, Math.PI * 2); ctx.fill();
        // Blinking black glass eyes
        const blink = Math.sin(time * 3 * speed) > 0.8;
        if (!blink) {
            ctx.fillStyle = '#020617';
            ctx.beginPath(); ctx.arc(cx - 5 * elScale, cy - 10 * elScale, 3 * elScale, 0, Math.PI * 2); ctx.fill();
            ctx.beginPath(); ctx.arc(cx + 5 * elScale, cy - 10 * elScale, 3 * elScale, 0, Math.PI * 2); ctx.fill();
        }
    });

    // 291. Stone-Embedded Eldritch Eye
    reg(['ch_sweating_cthulhu_idol', 'item_291', 'ch_eldritch_eye_opening'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        ctx.fillStyle = '#334155';
        ctx.fillRect(0, 0, W, H);
        // Eye lid opening
        const openH = Math.abs(Math.sin(time * 1.5 * speed)) * (16 * elScale);
        ctx.fillStyle = '#fef08a';
        ctx.beginPath(); ctx.ellipse(cx, cy, 28 * elScale, openH, 0, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#450a0a';
        ctx.beginPath(); ctx.arc(cx, cy, 8 * elScale, 0, Math.PI * 2); ctx.fill();
    });

    // 292. Translucent Weeping Spectral Woman
    reg(['ch_floating_grimoire', 'item_292', 'ch_spectral_apparition_fade'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        const alpha = 0.35 + 0.35 * Math.sin(time * 2 * speed);
        ctx.fillStyle = `rgba(224, 242, 254, ${alpha * intensity})`;
        ctx.beginPath(); ctx.arc(cx, cy - 18 * elScale, 10 * elScale, 0, Math.PI * 2); ctx.fill();
        ctx.fillRect(cx - 12 * elScale, cy - 8 * elScale, 24 * elScale, 40 * elScale);
    });

    // 293. Malevolent Demonic Black Smoke
    reg(['ch_seance_spirit_trumpet', 'item_293', 'ch_possession_black_smoke'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        for (let s = 0; s < 6; s++) {
            const rot = time * 3 * speed + s * 1.05;
            const sx = cx + Math.cos(rot) * (18 * elScale);
            const sy = cy + Math.sin(rot) * (18 * elScale);
            ctx.fillStyle = '#0a0a0a';
            ctx.beginPath(); ctx.arc(sx, sy, 12 * elScale, 0, Math.PI * 2); ctx.fill();
        }
    });

    // 294. Poltergeist Kinetic Shatter
    reg(['ch_skull_ghostfire', 'item_294', 'ch_poltergeist_shatter'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        const shards = 8;
        for (let s = 0; s < shards; s++) {
            const phase = (time * 2.5 * speed + s * 0.12) % 1.0;
            const dist = phase * (45 * elScale);
            const ang = (Math.PI * 2 / shards) * s;
            ctx.fillStyle = '#f8fafc';
            ctx.fillRect(cx + Math.cos(ang) * dist, cy + Math.sin(ang) * dist, 4 * elScale, 4 * elScale);
        }
    });

    // 295. Necromantic Grave Resurrection
    reg(['ch_liquid_mirror_ripple', 'item_295', 'ch_necromantic_resurrection'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.55;
        // Open soil mound
        ctx.fillStyle = '#1c1917';
        ctx.beginPath(); ctx.ellipse(cx, cy, 30 * elScale, 16 * elScale, 0, 0, Math.PI * 2); ctx.fill();
        // Skeletal fingers rising
        ctx.strokeStyle = '#e2e8f0';
        ctx.lineWidth = 2;
        const armH = Math.min(30 * elScale, (time * 25 * speed) % (45 * elScale));
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx, cy - armH); ctx.stroke();
    });

    // 296. Cathedral Cornice Gargoyle in Rain
    reg(['ch_dripping_black_umbrella', 'item_296', 'ch_gargoyle_perch_rain'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        ctx.fillStyle = '#334155';
        ctx.beginPath(); ctx.arc(cx, cy, 22 * elScale, 0, Math.PI * 2); ctx.fill();
        // Rain droplets
        for (let d = 0; d < 8; d++) {
            const dy = (time * 120 + d * 20) % H;
            ctx.fillStyle = '#94a3b8';
            ctx.fillRect(cx + (d - 4) * 6, dy, 1.5, 6);
        }
    });

    // 297. Hissing Arched-Back Black Cat
    reg(['ch_dead_rose_vase', 'item_297', 'ch_black_cat_arched_back'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.55;
        ctx.fillStyle = '#050505';
        ctx.beginPath(); ctx.arc(cx, cy - 8 * elScale, 14 * elScale, Math.PI, 0); ctx.fill();
        // Glowing yellow slit eyes
        ctx.fillStyle = '#fef08a';
        ctx.fillRect(cx - 6 * elScale, cy - 12 * elScale, 2, 4);
        ctx.fillRect(cx + 4 * elScale, cy - 12 * elScale, 2, 4);
    });

    // 298. Raven Pecking at Skull
    reg(['ch_asylum_metronome', 'item_298', 'ch_crow_pecking_skull'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.55;
        // Skull
        ctx.fillStyle = '#e2e8f0';
        ctx.beginPath(); ctx.arc(cx, cy, 14 * elScale, 0, Math.PI * 2); ctx.fill();
        // Raven pecking
        const peck = (Math.sin(time * 6 * speed) > 0.4);
        ctx.fillStyle = '#020617';
        ctx.beginPath(); ctx.arc(cx + 8 * elScale, cy - (peck ? 8 : 16) * elScale, 6 * elScale, 0, Math.PI * 2); ctx.fill();
    });

    // 299. Funnel Cobweb with Moving Spider
    reg(['ch_gargoyle_pigeon', 'item_299', 'ch_cobweb_swaying_corner'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.strokeStyle = `rgba(226, 232, 240, ${0.45 * intensity})`;
        ctx.lineWidth = 1.2;
        ctx.strokeRect(10, 10, 60 * elScale, 60 * elScale);
        // Spider moving in web
        const sx = 40 * elScale + Math.sin(time * 3 * speed) * 8;
        const sy = 40 * elScale + Math.cos(time * 3 * speed) * 8;
        ctx.fillStyle = '#0f172a';
        ctx.beginPath(); ctx.arc(sx, sy, 4 * elScale, 0, Math.PI * 2); ctx.fill();
    });

    // 300. Skeletal Gibbet Cage Swinging
    reg(['ch_curbside_wet_box', 'item_300', 'ch_creaking_hanging_cage'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5;
        const sway = Math.sin(time * 2.2 * speed) * (18 * elScale);
        ctx.strokeStyle = '#52525b';
        ctx.lineWidth = 2.5;
        ctx.beginPath(); ctx.moveTo(cx, 0); ctx.lineTo(cx + sway, H * 0.4); ctx.stroke();
        // Iron cage
        ctx.strokeRect(cx + sway - 14 * elScale, H * 0.4, 28 * elScale, 45 * elScale);
    });

})();
