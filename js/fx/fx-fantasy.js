/**
 * AetherTable VTT - High Fantasy FX (Elements 301 - 375)
 * Dedicated procedural canvas renderers for High Fantasy & Sword-and-Sorcery.
 */
(function() {
    'use strict';
    const FX = window.VTT_FX;
    const reg = window.VTT_FX_DISPATCHER ? window.VTT_FX_DISPATCHER.register : function(){};

    // =========================================================================
    // A. LINEAR MOTION (301 - 325)
    // =========================================================================
// A. LINEAR MOTION (301 - 325)
    // =========================================================================

    // 301. Magic Missile Darts
    reg(['hf_magic_missiles', 'item_301'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        const darts = 3;
        for (let d = 0; d < darts; d++) {
            const phase = (time * 3 * speed + d * 0.33) % 1.0;
            const dx = phase * (W + 60) - 30;
            const dy = cy + Math.sin(time * 12 * speed + d * 2) * (18 * elScale);
            // Glowing corkscrew magic missile
            FX.drawRadialGlow(ctx, dx, dy, 2, 14 * elScale, `rgba(168, 85, 247, ${0.95 * intensity})`, 'rgba(126, 34, 206, 0)');
            // Trailing spiral motes
            for (let m = 1; m <= 4; m++) {
                ctx.fillStyle = `rgba(216, 180, 254, ${(1 - m * 0.2) * intensity})`;
                ctx.beginPath(); ctx.arc(dx - m * 8, dy - Math.sin(m) * 6, 2, 0, Math.PI * 2); ctx.fill();
            }
        }
    });

    // 302. Flaming Arrow Volley
    reg(['hf_flaming_arrows', 'item_302'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const arrows = 4;
        for (let a = 0; a < arrows; a++) {
            const phase = (time * 4 * speed + a * 0.25) % 1.0;
            const ax = phase * (W + 80) - 40;
            const ay = H * 0.3 + a * 18 + Math.sin(phase * Math.PI) * -20;
            // Fiery arrow shaft
            ctx.strokeStyle = `rgba(249, 115, 22, ${0.9 * intensity})`;
            ctx.lineWidth = 2.5;
            ctx.beginPath(); ctx.moveTo(ax - 28 * elScale, ay); ctx.lineTo(ax, ay); ctx.stroke();
            FX.drawRadialGlow(ctx, ax, ay, 1, 10 * elScale, '#ffffff', 'rgba(234, 88, 12, 0)');
        }
    });

    // 303. Bobbing Will-o'-the-Wisp
    reg(['hf_will_o_wisp', 'item_303'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        const wx = ((time * 65 * speed) % (W + 60)) - 30;
        const wy = cy + Math.sin(time * 3 * speed) * (16 * elScale);
        FX.drawRadialGlow(ctx, wx, wy, 2, 32 * elScale, `rgba(167, 243, 208, ${0.95 * intensity})`, 'rgba(16, 185, 129, 0)');
    });

    // 304. Cathedral Golden Sunbeams
    reg(['hf_cathedral_sunbeams', 'item_304'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = 'rgba(15, 23, 42, 0.4)';
        ctx.fillRect(0, 0, W, H);
        for (let b = 0; b < 3; b++) {
            const bx = b * (W * 0.35) + Math.sin(time * 0.5 + b) * 15;
            const beamGrad = ctx.createLinearGradient(bx, 0, bx + 100, H);
            beamGrad.addColorStop(0, `rgba(254, 240, 138, ${0.45 * intensity})`);
            beamGrad.addColorStop(1, 'rgba(234, 179, 8, 0)');
            ctx.fillStyle = beamGrad;
            ctx.fillRect(bx, 0, 70, H);
        }
    });

    // 305. Bioluminescent Stalactite Drips
    reg(['hf_biolum_stalactite_drips', 'item_305'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        for (let s = 0; s < 4; s++) {
            const sx = (s + 0.5) * (W / 4);
            ctx.fillStyle = '#0f766e';
            ctx.beginPath(); ctx.moveTo(sx - 8, 0); ctx.lineTo(sx + 8, 0); ctx.lineTo(sx, 30 * elScale); ctx.closePath(); ctx.fill();
            // Glowing cyan drop falling
            const dropY = (time * 70 * speed + s * 25) % H;
            FX.drawRadialGlow(ctx, sx, dropY, 1, 6 * elScale, `rgba(45, 212, 191, ${0.95 * intensity})`, 'rgba(13, 148, 136, 0)');
        }
    });

    // 306. Roaring Alpine River Rapids
    reg(['hf_dragonfire_wave', 'item_306', 'hf_roaring_river_rapids'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        const rH = 50 * elScale;
        ctx.fillStyle = '#0284c7';
        ctx.fillRect(0, cy - rH * 0.5, W, rH);
        // Foam crests
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.85 * intensity})`;
        ctx.lineWidth = 2.5;
        for (let r = 0; r < 8; r++) {
            const rx = (r * (W / 8) + time * 140 * speed) % W;
            ctx.beginPath(); ctx.arc(rx, cy + Math.sin(r) * (rH * 0.25), 8, 0, Math.PI); ctx.stroke();
        }
    });

    // 307. Volcanic Lava Chasm Fissure
    reg(['hf_rolling_boulder', 'item_307', 'hf_lava_chasm_fissure'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        const fH = 45 * elScale;
        ctx.fillStyle = '#1c1917';
        ctx.fillRect(0, 0, W, H);
        // Molten magma chasm
        const magmaGrad = ctx.createLinearGradient(0, cy - fH * 0.5, 0, cy + fH * 0.5);
        magmaGrad.addColorStop(0, '#ea580c');
        magmaGrad.addColorStop(0.5, `rgba(254, 240, 138, ${0.98 * intensity})`);
        magmaGrad.addColorStop(1, '#ea580c');
        ctx.fillStyle = magmaGrad;
        ctx.fillRect(0, cy - fH * 0.5, W, fH);
    });

    // 308. Rolling Stone Boulder Trap
    reg(['hf_cavern_river', 'item_308', 'hf_rolling_boulder_trap'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        const bX = ((time * 180 * speed) % (W + 100)) - 50;
        ctx.save();
        ctx.translate(bX, cy);
        ctx.rotate(time * 6 * speed);
        ctx.fillStyle = '#78716c';
        ctx.beginPath(); ctx.arc(0, 0, 24 * elScale, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = '#292524';
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.restore();
    });

    // 309. Wall Poison Dart Spray
    reg(['hf_scarab_beetle_swarm', 'item_309', 'hf_poison_dart_wall_spray'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const darts = 5;
        for (let d = 0; d < darts; d++) {
            const phase = (time * 6 * speed + d * 0.2) % 1.0;
            const dx = phase * W;
            const dy = H * 0.3 + d * 14;
            ctx.fillStyle = '#22c55e';
            ctx.fillRect(dx - 12 * elScale, dy - 1.5, 12 * elScale, 3);
        }
    });

    // 310. Creeping Thorny Briar Vines
    reg(['hf_pendulum_blades', 'item_310', 'hf_thorns_brambles_creeping'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        ctx.strokeStyle = '#451a03';
        ctx.lineWidth = 4 * elScale;
        ctx.beginPath();
        ctx.moveTo(0, cy);
        for (let x = 20; x < W; x += 25) {
            ctx.lineTo(x, cy + Math.sin(time * 2 + x * 0.08) * 12);
        }
        ctx.stroke();
    });

    // 311. Dwarven Mithril Minecart
    reg(['hf_watermill_wheel', 'item_311', 'hf_minecart_tracks_ore'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        const cartX = ((time * 220 * speed) % (W + 100)) - 50;
        ctx.fillStyle = '#44403c';
        ctx.fillRect(cartX - 20 * elScale, cy - 12 * elScale, 40 * elScale, 24 * elScale);
        // Glowing blue mithril ore
        FX.drawRadialGlow(ctx, cartX, cy - 8 * elScale, 1, 18 * elScale, `rgba(56, 189, 248, ${0.95 * intensity})`, 'rgba(56, 189, 248, 0)');
    });

    // 312. Castle Drawbridge Chains
    reg(['hf_portcullis_chains', 'item_312', 'hf_drawbridge_chains'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5;
        ctx.strokeStyle = '#57534e';
        ctx.lineWidth = 4 * elScale;
        const vib = Math.sin(time * 8 * speed) * 4;
        ctx.beginPath(); ctx.moveTo(cx - 25 * elScale, 0); ctx.lineTo(cx - 25 * elScale + vib, H); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(cx + 25 * elScale, 0); ctx.lineTo(cx + 25 * elScale - vib, H); ctx.stroke();
    });

    // 313. Gristmill Timber Waterwheel
    reg(['hf_dwarven_minecarts', 'item_313', 'hf_waterwheel_sluice'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(time * 3 * speed);
        ctx.fillStyle = '#78350f';
        for (let b = 0; b < 8; b++) {
            ctx.rotate(Math.PI / 4);
            ctx.fillRect(-3, -28 * elScale, 6, 28 * elScale);
        }
        ctx.restore();
    });

    // 314. Floating Canal Barge
    reg(['hf_royal_carriage_wheels', 'item_314', 'hf_floating_barge_canal'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        ctx.fillStyle = '#065f46';
        ctx.fillRect(0, cy - 25 * elScale, W, 50 * elScale);
        const bargeX = ((time * 45 * speed) % (W + 120)) - 60;
        ctx.fillStyle = '#78350f';
        ctx.fillRect(bargeX - 35 * elScale, cy - 12 * elScale, 70 * elScale, 24 * elScale);
    });

    // 315. Granite Gristmill Grindstone
    reg(['hf_tavern_sail_awning', 'item_315', 'hf_gristmill_grindstone'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(time * 2 * speed);
        ctx.fillStyle = '#78716c';
        ctx.beginPath(); ctx.arc(0, 0, 32 * elScale, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
    });

    // 316. Chain Lightning Arc
    reg(['hf_chain_lightning_arc', 'item_316'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        ctx.strokeStyle = `rgba(56, 189, 248, ${0.95 * intensity})`;
        ctx.lineWidth = 3;
        ctx.shadowColor = '#38bdf8';
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.moveTo(0, cy);
        for (let x = 25; x < W; x += 25) {
            ctx.lineTo(x, cy + (FX.hash(x + Math.floor(time * 16)) - 0.5) * 28);
        }
        ctx.lineTo(W, cy);
        ctx.stroke();
        ctx.shadowBlur = 0;
    });

    // 317. Sweeping Prismatic Rainbow Ray
    reg(['hf_rainbow_bridge', 'item_317', 'hf_rainbow_prismatic_ray'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        const rainbow = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#06b6d4', '#3b82f6', '#a855f7'];
        for (let c = 0; c < 7; c++) {
            ctx.strokeStyle = rainbow[c];
            ctx.lineWidth = 2.5;
            ctx.beginPath(); ctx.moveTo(0, cy - 9 + c * 3); ctx.lineTo(W, cy - 9 + c * 3); ctx.stroke();
        }
    });

    // 318. Expanding Frost Nova Ring
    reg(['hf_phantom_cavalry', 'item_318', 'hf_frost_nova_expanding'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        const phase = (time * 1.5 * speed) % 1.0;
        ctx.strokeStyle = `rgba(186, 230, 253, ${(1 - phase) * 0.9 * intensity})`;
        ctx.lineWidth = 3.5;
        ctx.beginPath(); ctx.arc(cx, cy, phase * (Math.min(W, H) * 0.5), 0, Math.PI * 2); ctx.stroke();
    });

    // 319. Descending Flaming Meteor Trail
    reg(['hf_pixiedust_leaf_vortex', 'item_319', 'hf_meteor_strike_trail'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const phase = (time * 2.5 * speed) % 1.0;
        const mx = phase * W;
        const my = phase * H;
        FX.drawRadialGlow(ctx, mx, my, 2, 22 * elScale, '#ffffff', 'rgba(234, 88, 12, 0)');
    });

    // 320. Phoenix Solar Rebirth Fireflash
    reg(['hf_cone_of_cold', 'item_320', 'hf_phoenix_rebirth_flash'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        const pulse = 0.7 + 0.3 * Math.sin(time * 4 * speed);
        FX.drawRadialGlow(ctx, cx, cy, 10, 55 * elScale, `rgba(254, 240, 138, ${pulse * intensity})`, 'rgba(234, 88, 12, 0)');
    });

    // 321. Golden Faerie Pollen Breeze
    reg(['hf_mountain_river', 'item_321', 'hf_pollen_golden_breeze'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const motes = Math.round(30 + rough * 40);
        ctx.fillStyle = `rgba(254, 240, 138, ${0.85 * intensity})`;
        for (let m = 0; m < motes; m++) {
            const mx = (FX.hash(m * 17) * W + time * 65 * speed) % W;
            const my = (FX.hash(m * 31) * H) + Math.sin(time * 3 + m) * 8;
            ctx.fillRect(mx, my, 2.5, 2.5);
        }
    });

    // 322. Horned Dragon Flyover Shadow
    reg(['hf_circling_dragon', 'item_322', 'hf_dragon_flyover_shadow'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const dX = ((time * 140 * speed) % (W + 200)) - 100;
        ctx.fillStyle = `rgba(0, 0, 0, ${0.45 * intensity})`;
        ctx.beginPath(); ctx.ellipse(dX, H * 0.5, 80 * elScale, 45 * elScale, 0.2, 0, Math.PI * 2); ctx.fill();
    });

    // 323. Sparkling Fairy Motes
    reg(['hf_trout_stream', 'item_323', 'hf_swarming_fairy_motes'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        for (let f = 0; f < 8; f++) {
            const fx = (FX.hash(f * 13) * W + Math.sin(time * 4 + f) * 20);
            const fy = (FX.hash(f * 29) * H + Math.cos(time * 4 + f) * 20);
            FX.drawRadialGlow(ctx, fx, fy, 1, 10 * elScale, `rgba(244, 114, 182, ${0.9 * intensity})`, 'rgba(168, 85, 247, 0)');
        }
    });

    // 324. Alpine Glacier Meltwater Cascade
    reg(['hf_bounding_deer', 'item_324', 'hf_glacier_meltwater_trickle'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        ctx.fillStyle = '#0284c7';
        ctx.fillRect(0, cy - 14 * elScale, W, 28 * elScale);
        ctx.strokeStyle = '#bae6fd';
        ctx.lineWidth = 1.5;
        for (let r = 0; r < 5; r++) {
            const rx = (r * (W / 5) + time * 50 * speed) % W;
            ctx.beginPath(); ctx.arc(rx, cy, 6, 0, Math.PI); ctx.stroke();
        }
    });

    // 325. Golden Maple Autumn Leaves Path
    reg(['hf_dandelion_down', 'item_325', 'hf_autumn_leaves_path'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const leaves = Math.round(15 + rough * 20);
        for (let l = 0; l < leaves; l++) {
            const lx = ((l * (W / leaves) + time * 50 * speed) % (W + 40)) - 20;
            const ly = H * 0.5 + Math.sin(time * 2 + l) * 15;
            ctx.fillStyle = (l % 2 === 0) ? '#ea580c' : '#eab308';
            ctx.fillRect(lx, ly, 6 * elScale, 4 * elScale);
        }
    });

    // =========================================================================
    // B. ANIMATED TEXTURES & VOLUMES (326 - 350)
    // =========================================================================
// B. ANIMATED TEXTURES & AREA-FILLS (326 - 350)
    // =========================================================================

    // 326. Bioluminescent Faerie Ring Mushrooms
    reg(['hf_godrays_stainedglass', 'item_326', 'hf_faerie_ring_biolum'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#064e3b';
        ctx.fillRect(0, 0, W, H);
        const cx = W * 0.5, cy = H * 0.5;
        const shrooms = 12;
        for (let s = 0; s < shrooms; s++) {
            const ang = (Math.PI * 2 / shrooms) * s;
            const sx = cx + Math.cos(ang) * (36 * elScale);
            const sy = cy + Math.sin(ang) * (36 * elScale);
            FX.drawRadialGlow(ctx, sx, sy, 1, 14 * elScale, `rgba(52, 211, 153, ${0.95 * intensity})`, 'rgba(5, 150, 105, 0)');
        }
    });

    // 327. Dappled Ancient Oak Canopy Sunlight
    reg(['hf_underdark_toadstools', 'item_327', 'hf_dappled_forest_sunlight'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#14532d';
        ctx.fillRect(0, 0, W, H);
        for (let p = 0; p < 18; p++) {
            const px = FX.hash(p * 13) * W + Math.sin(time * 1.5 + p) * 10;
            const py = FX.hash(p * 29) * H + Math.cos(time * 1.2 + p) * 8;
            FX.drawRadialGlow(ctx, px, py, 1, 16 * elScale, `rgba(254, 240, 138, ${0.45 * intensity})`, 'rgba(254, 240, 138, 0)');
        }
    });

    // 328. Glowing Underdark Amethyst Crystals
    reg(['hf_underwater_caustics', 'item_328', 'hf_underdark_crystal_glow'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#09090b';
        ctx.fillRect(0, 0, W, H);
        for (let c = 0; c < 15; c++) {
            const cx = FX.hash(c * 17) * W;
            const cy = FX.hash(c * 31) * H;
            FX.drawRadialGlow(ctx, cx, cy, 1, 18 * elScale, `rgba(168, 85, 247, ${0.85 * intensity})`, 'rgba(126, 34, 206, 0)');
        }
    });

    // 329. Aurora Borealis Temple Ruins
    reg(['hf_astral_nebula_islands', 'item_329', 'hf_aurora_borealis_temple'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const aurGrad = ctx.createLinearGradient(0, 0, 0, H);
        aurGrad.addColorStop(0, `rgba(52, 211, 153, ${0.45 * intensity})`);
        aurGrad.addColorStop(0.5, `rgba(168, 85, 247, ${0.45 * intensity})`);
        aurGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = aurGrad;
        ctx.fillRect(0, 0, W, H);
    });

    // 330. Incandescent Molten Magma Lake
    reg(['hf_twilight_fireflies', 'item_330', 'hf_molten_lava_ambient'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#ea580c';
        ctx.fillRect(0, 0, W, H);
        FX.drawRadialGlow(ctx, W * 0.5, H * 0.5, 10, Math.min(W, H) * 0.5, `rgba(254, 240, 138, ${0.95 * intensity})`, 'rgba(234, 88, 12, 0)');
    });

    // 331. Emerald Acid Bog Geysers
    reg(['hf_crusty_lavapit', 'item_331', 'hf_bubbling_acid_geyser'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#065f46';
        ctx.fillRect(0, 0, W, H);
        for (let g = 0; g < 4; g++) {
            const gx = (g + 0.5) * (W / 4);
            const gy = H * 0.5;
            if (Math.sin(time * 3 * speed + g) > 0.4) {
                FX.drawVolumetricCone(ctx, gx, gy, -Math.PI * 0.5, 45 * elScale, 0.45, `rgba(52, 211, 153, ${0.85 * intensity})`, 'rgba(6, 95, 70, 0)');
            }
        }
    });

    // 332. Sucking Quicksand Sinkhole
    reg(['hf_emerald_acid_pool', 'item_332', 'hf_quicksand_sinkhole'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#78350f';
        ctx.fillRect(0, 0, W, H);
        const rot = time * 1.5 * speed;
        ctx.save();
        ctx.translate(W * 0.5, H * 0.5);
        ctx.rotate(rot);
        ctx.strokeStyle = '#451a03';
        ctx.lineWidth = 2.5;
        for (let r = 10; r < 45; r += 10) {
            ctx.beginPath(); ctx.arc(0, 0, r * elScale, 0, Math.PI * 1.5); ctx.stroke();
        }
        ctx.restore();
    });

    // 333. Freezing Crystalline Ice Sheet
    reg(['hf_cracking_lake_ice', 'item_333', 'hf_freezing_ice_sheet'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#e0f2fe';
        ctx.fillRect(0, 0, W, H);
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 1.5;
        for (let x = 0; x < W; x += 35) {
            ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x + 15, H); ctx.stroke();
        }
    });

    // 334. Cursed Swamp Duckweed Mire
    reg(['hf_assassin_vines', 'item_334', 'hf_cursed_swamp_mire'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#14532d';
        ctx.fillRect(0, 0, W, H);
        for (let b = 0; b < 6; b++) {
            const bx = FX.hash(b * 19) * W;
            const by = FX.hash(b * 37) * H;
            ctx.fillStyle = '#064e3b';
            ctx.beginPath(); ctx.arc(bx, by, 6 * elScale, 0, Math.PI * 2); ctx.fill();
        }
    });

    // 335. Smoldering Dragon Ash Battlefield
    reg(['hf_peat_bog_gas', 'item_335', 'hf_smoldering_dragon_ash'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#18181b';
        ctx.fillRect(0, 0, W, H);
        for (let e = 0; e < 15; e++) {
            const ex = FX.hash(e * 17) * W;
            const ey = FX.hash(e * 31) * H;
            FX.drawRadialGlow(ctx, ex, ey, 1, 8 * elScale, `rgba(249, 115, 22, ${0.85 * intensity})`, 'rgba(234, 88, 12, 0)');
        }
    });

    // 336. Dragon Gold Treasure Hoard
    reg(['hf_forest_canopy_wind', 'item_336', 'hf_stacked_treasure_gold'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#d97706';
        ctx.fillRect(0, 0, W, H);
        for (let g = 0; g < 35; g++) {
            const gx = FX.hash(g * 13) * W;
            const gy = FX.hash(g * 29) * H;
            ctx.fillStyle = '#fbbf24';
            ctx.beginPath(); ctx.arc(gx, gy, 4 * elScale, 0, Math.PI * 2); ctx.fill();
        }
    });

    // 337. Wizard Library Runic Shelves
    reg(['hf_kelp_coral_reef', 'item_337', 'hf_runic_library_shelves'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#29180c';
        ctx.fillRect(0, 0, W, H);
        for (let y = 15; y < H; y += 30) {
            ctx.fillStyle = '#78350f';
            ctx.fillRect(0, y, W, 6);
            FX.drawRadialGlow(ctx, W * 0.5, y, 1, 16 * elScale, `rgba(56, 189, 248, ${0.75 * intensity})`, 'rgba(56, 189, 248, 0)');
        }
    });

    // 338. Stacked Ale Cellar Casks
    reg(['hf_meadow_grass_breeze', 'item_338', 'hf_stacked_casks_ale_cellar'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#1c1917';
        ctx.fillRect(0, 0, W, H);
        for (let x = 15; x < W; x += 40) {
            ctx.fillStyle = '#78350f';
            ctx.fillRect(x, 15, 30 * elScale, H - 30);
        }
    });

    // 339. Ancient Hero Sarcophagi Wards
    reg(['hf_rainy_townsquare', 'item_339', 'hf_ancient_tomb_sarcophagi'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#292524';
        ctx.fillRect(0, 0, W, H);
        for (let s = 0; s < 3; s++) {
            const sx = (s + 0.5) * (W / 3);
            ctx.fillStyle = '#44403c';
            ctx.fillRect(sx - 16 * elScale, 15, 32 * elScale, H - 30);
            FX.drawRadialGlow(ctx, sx, H * 0.5, 2, 22 * elScale, `rgba(56, 189, 248, ${0.45 * intensity})`, 'rgba(56, 189, 248, 0)');
        }
    });

    // 340. Blacksmith Weapon Armory Racks
    reg(['hf_dragon_gold_hoard', 'item_340', 'hf_blacksmith_weapon_racks'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#1c1917';
        ctx.fillRect(0, 0, W, H);
        for (let x = 20; x < W; x += 30) {
            ctx.strokeStyle = '#94a3b8';
            ctx.lineWidth = 2.5;
            ctx.beginPath(); ctx.moveTo(x, 10); ctx.lineTo(x, H - 10); ctx.stroke();
        }
    });

    // 341. Concentric Prismatic Wall
    reg(['hf_arcane_summoning_circle', 'item_341', 'hf_prismatic_barrier_wall'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const rainbow = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#06b6d4', '#3b82f6', '#a855f7'];
        for (let r = 0; r < 7; r++) {
            ctx.fillStyle = rainbow[r];
            ctx.fillRect(0, r * (H / 7), W, H / 7);
        }
    });

    // 342. Anti-Magic Suppression Field
    reg(['hf_wizard_golden_dome', 'item_342', 'hf_anti_magic_field_null'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = 'rgba(71, 85, 105, 0.45)';
        ctx.fillRect(0, 0, W, H);
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(W * 0.5, H * 0.5, Math.min(W, H) * 0.45, 0, Math.PI * 2); ctx.stroke();
    });

    // 343. Cloying Purple Miasma Bog
    reg(['hf_astral_void_silk', 'item_343', 'hf_cloying_miasma_bog'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        for (let m = 0; m < 5; m++) {
            const my = H * (0.3 + m * 0.15);
            ctx.fillStyle = `rgba(168, 85, 247, ${(0.35 + rough * 0.1) * intensity})`;
            ctx.fillRect(0, my, W, 18 * elScale);
        }
    });

    // 344. Alchemical Transmutation Circle
    reg(['hf_flagstone_frost_spread', 'item_344', 'hf_transmutation_circle_pulse'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        ctx.strokeStyle = `rgba(245, 158, 11, ${0.9 * intensity})`;
        ctx.lineWidth = 2.5;
        ctx.beginPath(); ctx.arc(cx, cy, Math.min(W, H) * 0.4, 0, Math.PI * 2); ctx.stroke();
        ctx.beginPath(); ctx.arc(cx, cy, Math.min(W, H) * 0.25, 0, Math.PI * 2); ctx.stroke();
    });

    // 345. Sacred Healing Spring Caustics
    reg(['hf_magical_darkness_swirl', 'item_345', 'hf_healing_spring_glimmer'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#0284c7';
        ctx.fillRect(0, 0, W, H);
        FX.drawRadialGlow(ctx, W * 0.5, H * 0.5, 10, Math.min(W, H) * 0.5, `rgba(224, 242, 254, ${0.85 * intensity})`, 'rgba(2, 132, 199, 0)');
    });

    // 346. Pink Cherry Blossom Petal Shower
    reg(['hf_cave_drip_pond_ripples', 'item_346', 'hf_drifting_cherry_blossom'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const petals = Math.round(25 + rough * 35);
        ctx.fillStyle = `rgba(244, 114, 182, ${0.85 * intensity})`;
        for (let p = 0; p < petals; p++) {
            const px = (FX.hash(p * 17) * W + time * 55 * speed) % W;
            const py = (FX.hash(p * 31) * H + time * 40 * speed) % H;
            ctx.fillRect(px, py, 4 * elScale, 3 * elScale);
        }
    });

    // 347. Swirling Waterfall Rainbow Mist
    reg(['hf_castle_morning_mist', 'item_347', 'hf_swirling_mist_waterfall'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        for (let m = 0; m < 6; m++) {
            const mx = ((time * 40 + m * 45) % (W + 60)) - 30;
            FX.drawRadialGlow(ctx, mx, H * 0.5, 2, 38 * elScale, `rgba(240, 249, 255, ${0.45 * intensity})`, 'rgba(240, 249, 255, 0)');
        }
    });

    // 348. Fungal Forest Spore Motes
    reg(['hf_thatched_roof_snowfall', 'item_348', 'hf_spores_fungal_forest'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(0, 0, W, H);
        for (let s = 0; s < 25; s++) {
            const sx = FX.hash(s * 19) * W;
            const sy = (H - ((time * 30 * speed + s * 15) % H));
            FX.drawRadialGlow(ctx, sx, sy, 1, 6 * elScale, `rgba(52, 211, 153, ${0.85 * intensity})`, 'rgba(52, 211, 153, 0)');
        }
    });

    // 349. Sunlit Floating Crypt Dust
    reg(['hf_mountain_cloud_shadows', 'item_349', 'hf_floating_dust_crypt'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        for (let d = 0; d < 30; d++) {
            const dx = FX.hash(d * 13) * W + Math.sin(time + d) * 6;
            const dy = FX.hash(d * 29) * H + Math.cos(time + d) * 6;
            ctx.fillStyle = `rgba(254, 240, 138, ${0.65 * intensity})`;
            ctx.fillRect(dx, dy, 2, 2);
        }
    });

    // 350. Dancing Twilight Meadow Fireflies
    reg(['hf_fairy_dust_glade', 'item_350', 'hf_dancing_fireflies_meadow'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#064e3b';
        ctx.fillRect(0, 0, W, H);
        for (let f = 0; f < 20; f++) {
            const fx = FX.hash(f * 17) * W + Math.sin(time * 3 + f) * 12;
            const fy = FX.hash(f * 31) * H + Math.cos(time * 3 + f) * 12;
            const on = Math.sin(time * 5 + f) > 0;
            if (on) {
                FX.drawRadialGlow(ctx, fx, fy, 1, 10 * elScale, `rgba(254, 240, 138, ${0.95 * intensity})`, 'rgba(234, 179, 8, 0)');
            }
        }
    });

    // =========================================================================
    // C. SPOT / SINGLE FOCAL OBJECTS (351 - 375)
    // =========================================================================
// =========================================================================
    // C. SPOT / SINGLE FOCAL OBJECTS (351 - 375)
    // =========================================================================

    // 351. Adventurer's Campfire
    reg(['hf_adventurer_campfire', 'item_351'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.55;
        // Radial warm flickering illumination
        const flick = Math.sin(time * 12 * speed) * 0.08 + Math.cos(time * 18 * speed) * 0.05;
        FX.drawRadialGlow(ctx, cx, cy, 5, 120 * elScale, `rgba(255, 160, 40, ${(0.85 + flick) * intensity})`, 'rgba(234, 88, 12, 0)');

        // Stone fire-ring
        ctx.fillStyle = '#475569';
        for (let i = 0; i < 8; i++) {
            const a = (i / 8) * Math.PI * 2;
            const sx = cx + Math.cos(a) * 32 * elScale;
            const sy = cy + Math.sin(a) * 22 * elScale;
            ctx.beginPath();
            ctx.ellipse(sx, sy, 7 * elScale, 5 * elScale, a, 0, Math.PI * 2);
            ctx.fill();
        }

        // Criss-crossed burning timber logs
        ctx.strokeStyle = '#3e2723';
        ctx.lineWidth = 7 * elScale;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(cx - 24 * elScale, cy + 10 * elScale); ctx.lineTo(cx + 24 * elScale, cy - 8 * elScale);
        ctx.moveTo(cx + 22 * elScale, cy + 12 * elScale); ctx.lineTo(cx - 22 * elScale, cy - 10 * elScale);
        ctx.moveTo(cx, cy + 16 * elScale); ctx.lineTo(cx, cy - 14 * elScale);
        ctx.stroke();

        // Glowing orange-yellow ember bed
        ctx.fillStyle = '#ff3d00';
        ctx.beginPath();
        ctx.ellipse(cx, cy, 18 * elScale, 10 * elScale, 0, 0, Math.PI * 2);
        ctx.fill();

        // Active dancing flame tongues
        for (let f = 0; f < 6; f++) {
            const fa = f * 1.05 + time * 4 * speed;
            const fx = cx + Math.sin(fa) * 12 * elScale;
            const fh = (28 + Math.sin(time * 10 * speed + f * 2) * 14) * elScale;
            const fy = cy - fh;
            const fg = ctx.createLinearGradient(fx, cy, fx, fy);
            fg.addColorStop(0, 'rgba(255, 235, 59, 0.95)');
            fg.addColorStop(0.5, 'rgba(255, 87, 34, 0.85)');
            fg.addColorStop(1, 'rgba(221, 44, 0, 0)');
            ctx.fillStyle = fg;
            ctx.beginPath();
            ctx.moveTo(fx - 6 * elScale, cy);
            ctx.quadraticCurveTo(fx, fy * 0.7, fx, fy);
            ctx.quadraticCurveTo(fx + 3 * elScale, cy * 0.5, fx + 6 * elScale, cy);
            ctx.fill();
        }

        // Rising spark motes
        for (let s = 0; s < 10; s++) {
            const prog = ((time * (0.8 + s * 0.2) * speed + s * 0.1) % 1.0);
            const sx = cx + (FX.hash(s, 1) - 0.5) * 35 * elScale + Math.sin(time * 3 + s) * 10;
            const sy = cy - prog * 70 * elScale;
            ctx.fillStyle = `rgba(254, 240, 138, ${(1 - prog) * intensity})`;
            ctx.beginPath();
            ctx.arc(sx, sy, (1.8 - prog * 0.8) * elScale, 0, Math.PI * 2);
            ctx.fill();
        }
    });

    // 352. Forged-Iron Sconce Torch
    reg(['hf_iron_sconce_torch', 'item_352'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.6;
        // Wrought iron wall mount & curled arm
        ctx.strokeStyle = '#1e293b';
        ctx.lineWidth = 5 * elScale;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(cx - 15 * elScale, cy + 20 * elScale);
        ctx.quadraticCurveTo(cx, cy + 18 * elScale, cx, cy - 10 * elScale);
        ctx.stroke();

        // Iron basket holder
        ctx.fillStyle = '#334155';
        ctx.beginPath();
        ctx.moveTo(cx - 10 * elScale, cy - 10 * elScale);
        ctx.lineTo(cx + 10 * elScale, cy - 10 * elScale);
        ctx.lineTo(cx + 6 * elScale, cy);
        ctx.lineTo(cx - 6 * elScale, cy);
        ctx.closePath();
        ctx.fill();

        // Wrapped pitch torch head
        ctx.fillStyle = '#451a03';
        ctx.fillRect(cx - 6 * elScale, cy - 22 * elScale, 12 * elScale, 12 * elScale);

        // Warm torch firelight glow
        const flick = Math.sin(time * 15 * speed) * 0.1;
        FX.drawRadialGlow(ctx, cx, cy - 28 * elScale, 4, 90 * elScale, `rgba(251, 146, 60, ${(0.82 + flick) * intensity})`, 'rgba(234, 88, 12, 0)');

        // Flickering torch flame teardrop
        const flameH = (26 + Math.sin(time * 12 * speed) * 8) * elScale;
        const flameSway = Math.sin(time * 5 * speed) * 4 * elScale;
        const tg = ctx.createLinearGradient(cx, cy - 15 * elScale, cx + flameSway, cy - 22 * elScale - flameH);
        tg.addColorStop(0, '#fef08a');
        tg.addColorStop(0.4, '#f97316');
        tg.addColorStop(1, 'rgba(220, 38, 38, 0)');
        ctx.fillStyle = tg;
        ctx.beginPath();
        ctx.moveTo(cx - 7 * elScale, cy - 20 * elScale);
        ctx.quadraticCurveTo(cx - 8 * elScale, cy - 22 * elScale - flameH * 0.5, cx + flameSway, cy - 22 * elScale - flameH);
        ctx.quadraticCurveTo(cx + 8 * elScale, cy - 22 * elScale - flameH * 0.5, cx + 7 * elScale, cy - 20 * elScale);
        ctx.fill();
    });

    // 353. Tavern Hearth Fireplace
    reg(['hf_tavern_hearth_fireplace', 'item_353'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.55;
        // Stone chimney breast & arch
        ctx.fillStyle = '#334155';
        ctx.fillRect(cx - 45 * elScale, cy - 35 * elScale, 90 * elScale, 60 * elScale);
        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.arc(cx, cy + 5 * elScale, 30 * elScale, Math.PI, 0);
        ctx.fillRect(cx - 30 * elScale, cy + 5 * elScale, 60 * elScale, 20 * elScale);
        ctx.fill();

        // Cast-iron grate
        ctx.strokeStyle = '#1e293b';
        ctx.lineWidth = 3 * elScale;
        ctx.beginPath();
        ctx.moveTo(cx - 24 * elScale, cy + 18 * elScale); ctx.lineTo(cx + 24 * elScale, cy + 18 * elScale);
        for (let g = -20; g <= 20; g += 8) {
            ctx.moveTo(cx + g * elScale, cy + 22 * elScale); ctx.lineTo(cx + g * elScale, cy + 12 * elScale);
        }
        ctx.stroke();

        // Hearth fire glow
        const flick = Math.sin(time * 8 * speed) * 0.08;
        FX.drawRadialGlow(ctx, cx, cy + 5 * elScale, 6, 110 * elScale, `rgba(255, 140, 20, ${(0.88 + flick) * intensity})`, 'rgba(220, 38, 38, 0)');

        // Roaring stacked oak logs & lively hearth flame
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath();
        ctx.moveTo(cx - 20 * elScale, cy + 16 * elScale);
        for (let i = 0; i < 7; i++) {
            const hx = cx - 20 * elScale + i * 6 * elScale;
            const hy = cy + 16 * elScale - (18 + Math.sin(time * 10 * speed + i) * 10) * elScale;
            ctx.lineTo(hx, hy);
        }
        ctx.lineTo(cx + 20 * elScale, cy + 16 * elScale);
        ctx.closePath();
        ctx.fill();
    });

    // 354. Spinning Pedestal Crystal
    reg(['hf_floating_pedestal_crystal', 'item_354'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.52;
        // Fluted marble pedestal
        ctx.fillStyle = '#cbd5e1';
        ctx.fillRect(cx - 22 * elScale, cy + 25 * elScale, 44 * elScale, 10 * elScale);
        ctx.fillRect(cx - 16 * elScale, cy + 10 * elScale, 32 * elScale, 16 * elScale);
        ctx.fillRect(cx - 20 * elScale, cy + 6 * elScale, 40 * elScale, 6 * elScale);

        // Hovering & bobbing crystal
        const bob = Math.sin(time * 2.5 * speed) * (8 * elScale);
        const cryY = cy - 20 * elScale + bob;
        const rot = time * 1.5 * speed;

        // Amethyst celestial glow
        FX.drawRadialGlow(ctx, cx, cryY, 4, 65 * elScale, `rgba(192, 132, 252, ${0.9 * intensity})`, 'rgba(147, 51, 234, 0)');

        // Floating spinning amethyst crystal prism
        ctx.save();
        ctx.translate(cx, cryY);
        ctx.rotate(rot);
        const w = 14 * elScale;
        const h = 28 * elScale;
        ctx.fillStyle = 'rgba(168, 85, 247, 0.9)';
        ctx.beginPath();
        ctx.moveTo(0, -h); ctx.lineTo(w, 0); ctx.lineTo(0, h); ctx.lineTo(-w, 0); ctx.closePath();
        ctx.fill();
        ctx.fillStyle = 'rgba(233, 213, 255, 0.85)';
        ctx.beginPath();
        ctx.moveTo(0, -h); ctx.lineTo(w, 0); ctx.lineTo(0, 0); ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = '#f3e8ff';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.restore();

        // Orbiting rune particles
        for (let p = 0; p < 4; p++) {
            const pa = rot * 2 + (p / 4) * Math.PI * 2;
            const px = cx + Math.cos(pa) * 32 * elScale;
            const py = cryY + Math.sin(pa) * 12 * elScale;
            ctx.fillStyle = '#f0abfc';
            ctx.fillRect(px - 2 * elScale, py - 2 * elScale, 4 * elScale, 4 * elScale);
        }
    });

    // 355. Wizard Desk Beeswax Candles
    reg(['hf_desk_beeswax_candles', 'item_355'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.58;
        // Aged wood desktop / book surface
        ctx.fillStyle = '#78350f';
        ctx.fillRect(cx - 35 * elScale, cy + 12 * elScale, 70 * elScale, 8 * elScale);

        // Trio of beeswax candles of varying heights
        const candles = [
            { x: -14, h: 26, r: 5 },
            { x: 0,   h: 36, r: 6 },
            { x: 15,  h: 20, r: 5 }
        ];

        candles.forEach((c, idx) => {
            const bx = cx + c.x * elScale;
            const by = cy + 12 * elScale - c.h * elScale;
            // Candle wax pillar with drips
            ctx.fillStyle = '#fef3c7';
            ctx.fillRect(bx - c.r * elScale, by, c.r * 2 * elScale, c.h * elScale);
            // Black wick
            ctx.strokeStyle = '#1e293b';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(bx, by); ctx.lineTo(bx, by - 4 * elScale);
            ctx.stroke();

            // Flickering candle flame
            const fsway = Math.sin(time * (10 + idx * 3) * speed) * (2 * elScale);
            const fh = (9 + Math.sin(time * 14 * speed + idx) * 3) * elScale;
            FX.drawRadialGlow(ctx, bx + fsway, by - 6 * elScale, 2, 40 * elScale, `rgba(253, 224, 71, ${0.85 * intensity})`, 'rgba(245, 158, 11, 0)');
            ctx.fillStyle = '#f59e0b';
            ctx.beginPath();
            ctx.ellipse(bx + fsway, by - 6 * elScale, 3 * elScale, fh, 0, 0, Math.PI * 2);
            ctx.fill();
        });
    });

    // 356. Spring-Loaded Spike Trap
    reg(['hf_iron_spike_floortrap', 'item_356'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        // Stone pit frame
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(cx - 36 * elScale, cy - 36 * elScale, 72 * elScale, 72 * elScale);
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 3 * elScale;
        ctx.strokeRect(cx - 36 * elScale, cy - 36 * elScale, 72 * elScale, 72 * elScale);

        // Cyclic snap thrust and retraction
        const cycle = (time * 0.8 * speed) % 2.0;
        const snap = cycle < 0.25 ? Math.sin((cycle / 0.25) * Math.PI) : 0;
        const spikeLen = (6 + snap * 24) * elScale;

        // Steel spiked rows
        for (let r = -20; r <= 20; r += 20) {
            for (let c = -20; c <= 20; c += 20) {
                const sx = cx + c * elScale;
                const sy = cy + r * elScale;
                // Hole
                ctx.fillStyle = '#020617';
                ctx.beginPath(); ctx.arc(sx, sy, 4 * elScale, 0, Math.PI * 2); ctx.fill();
                // Sharp steel pyramid spike
                if (spikeLen > 6) {
                    ctx.fillStyle = snap > 0.8 ? '#cbd5e1' : '#94a3b8';
                    ctx.beginPath();
                    ctx.moveTo(sx - 3 * elScale, sy);
                    ctx.lineTo(sx, sy - spikeLen);
                    ctx.lineTo(sx + 3 * elScale, sy);
                    ctx.closePath();
                    ctx.fill();
                }
            }
        }
    });

    // 357. Dragon-Head Flame Trap
    reg(['hf_dragonhead_flame_sconce', 'item_357'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.55;
        // Carved stone dragon head
        ctx.fillStyle = '#475569';
        ctx.beginPath();
        ctx.moveTo(cx - 24 * elScale, cy + 15 * elScale);
        ctx.lineTo(cx + 10 * elScale, cy + 15 * elScale);
        ctx.lineTo(cx + 25 * elScale, cy - 4 * elScale);
        ctx.lineTo(cx + 10 * elScale, cy - 18 * elScale);
        ctx.lineTo(cx - 24 * elScale, cy - 18 * elScale);
        ctx.closePath();
        ctx.fill();
        // Dragon eye
        ctx.fillStyle = '#ef4444';
        ctx.beginPath(); ctx.arc(cx, cy - 8 * elScale, 3 * elScale, 0, Math.PI * 2); ctx.fill();

        // Sudden blast of roaring dragonfire cone
        const blastCycle = (time * speed) % 3.0;
        const firing = blastCycle < 1.0;
        if (firing) {
            const p = blastCycle / 1.0;
            const jetW = (18 + Math.sin(time * 30) * 8) * elScale;
            const jetL = (60 + Math.sin(time * 20) * 20) * elScale;
            const fg = ctx.createRadialGradient(cx + 25 * elScale, cy - 4 * elScale, 4, cx + 25 * elScale + jetL, cy - 4 * elScale, jetW * 2);
            fg.addColorStop(0, '#ffffff');
            fg.addColorStop(0.3, '#facc15');
            fg.addColorStop(0.7, '#ea580c');
            fg.addColorStop(1, 'rgba(185, 28, 28, 0)');
            ctx.fillStyle = fg;
            ctx.beginPath();
            ctx.moveTo(cx + 25 * elScale, cy - 6 * elScale);
            ctx.lineTo(cx + 25 * elScale + jetL, cy - 4 * elScale - jetW);
            ctx.lineTo(cx + 25 * elScale + jetL, cy - 4 * elScale + jetW);
            ctx.closePath();
            ctx.fill();
        }
    });

    // 358. Snapping Mimic Chest
    reg(['hf_mimic_chest', 'item_358'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.55;
        // Chest base (wood with iron bands)
        ctx.fillStyle = '#78350f';
        ctx.fillRect(cx - 26 * elScale, cy, 52 * elScale, 24 * elScale);
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 3 * elScale;
        ctx.strokeRect(cx - 26 * elScale, cy, 52 * elScale, 24 * elScale);

        // Mimic snapping jaw lid
        const snap = Math.abs(Math.sin(time * 2.5 * speed));
        const lidOpen = snap * 18 * elScale;

        // Red slimy mouth interior
        ctx.fillStyle = '#991b1b';
        ctx.fillRect(cx - 24 * elScale, cy - lidOpen, 48 * elScale, lidOpen + 4 * elScale);

        // Writhing purple tongue
        const twiggle = Math.sin(time * 8 * speed) * (8 * elScale);
        ctx.strokeStyle = '#a855f7';
        ctx.lineWidth = 5 * elScale;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(cx, cy + 2 * elScale);
        ctx.quadraticCurveTo(cx + twiggle, cy - lidOpen * 0.6, cx + twiggle * 1.5, cy - lidOpen - 4 * elScale);
        ctx.stroke();

        // Jagged white mimic teeth
        ctx.fillStyle = '#f8fafc';
        for (let t = -20; t <= 20; t += 8) {
            // Lower teeth
            ctx.beginPath();
            ctx.moveTo(cx + t * elScale - 3 * elScale, cy);
            ctx.lineTo(cx + t * elScale, cy - 6 * elScale);
            ctx.lineTo(cx + t * elScale + 3 * elScale, cy);
            ctx.fill();
            // Upper teeth
            ctx.beginPath();
            ctx.moveTo(cx + t * elScale - 3 * elScale, cy - lidOpen);
            ctx.lineTo(cx + t * elScale, cy - lidOpen + 6 * elScale);
            ctx.lineTo(cx + t * elScale + 3 * elScale, cy - lidOpen);
            ctx.fill();
        }

        // Chest lid
        ctx.fillStyle = '#92400e';
        ctx.fillRect(cx - 28 * elScale, cy - lidOpen - 12 * elScale, 56 * elScale, 12 * elScale);
    });

    // 359. Giant Snapping Flytrap
    reg(['hf_flytrap_monster_plant', 'item_359'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.6;
        // Twisted green stem
        ctx.strokeStyle = '#15803d';
        ctx.lineWidth = 8 * elScale;
        ctx.beginPath();
        ctx.moveTo(cx, cy + 25 * elScale);
        ctx.quadraticCurveTo(cx + Math.sin(time * 2 * speed) * 10 * elScale, cy + 5 * elScale, cx, cy - 10 * elScale);
        ctx.stroke();

        // Snapping lobes (jaws)
        const snap = Math.abs(Math.sin(time * 1.8 * speed));
        const jawAngle = (1 - snap) * 0.55;

        ctx.save();
        ctx.translate(cx, cy - 10 * elScale);
        // Left lobe
        ctx.save();
        ctx.rotate(-jawAngle);
        ctx.fillStyle = '#16a34a';
        ctx.beginPath(); ctx.ellipse(-14 * elScale, 0, 18 * elScale, 10 * elScale, 0, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#dc2626';
        ctx.beginPath(); ctx.ellipse(-14 * elScale, 0, 12 * elScale, 6 * elScale, 0, 0, Math.PI * 2); ctx.fill();
        // Spines
        ctx.strokeStyle = '#bbf7d0';
        ctx.lineWidth = 2 * elScale;
        for (let s = -24; s <= -4; s += 5) {
            ctx.beginPath(); ctx.moveTo(s * elScale, -8 * elScale); ctx.lineTo(s * elScale, -14 * elScale); ctx.stroke();
        }
        ctx.restore();

        // Right lobe
        ctx.save();
        ctx.rotate(jawAngle);
        ctx.fillStyle = '#16a34a';
        ctx.beginPath(); ctx.ellipse(14 * elScale, 0, 18 * elScale, 10 * elScale, 0, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#dc2626';
        ctx.beginPath(); ctx.ellipse(14 * elScale, 0, 12 * elScale, 6 * elScale, 0, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = '#bbf7d0';
        ctx.lineWidth = 2 * elScale;
        for (let s = 4; s <= 24; s += 5) {
            ctx.beginPath(); ctx.moveTo(s * elScale, -8 * elScale); ctx.lineTo(s * elScale, -14 * elScale); ctx.stroke();
        }
        ctx.restore();
        ctx.restore();
    });

    // 360. Trembling Limestone Stalactite
    reg(['hf_falling_stalactite', 'item_360'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.4;
        const tremble = (Math.sin(time * 30 * speed) * 1.5) * elScale;

        // Rock ceiling base
        ctx.fillStyle = '#334155';
        ctx.fillRect(cx - 30 * elScale, cy - 25 * elScale, 60 * elScale, 10 * elScale);

        // Pointed limestone cone
        ctx.fillStyle = '#64748b';
        ctx.beginPath();
        ctx.moveTo(cx - 16 * elScale + tremble, cy - 15 * elScale);
        ctx.lineTo(cx + 16 * elScale + tremble, cy - 15 * elScale);
        ctx.lineTo(cx + tremble, cy + 32 * elScale);
        ctx.closePath();
        ctx.fill();

        // Water drip forming on tip
        const dripCycle = (time * 2 * speed) % 1.0;
        ctx.fillStyle = '#38bdf8';
        ctx.beginPath();
        ctx.arc(cx + tremble, cy + 32 * elScale + dripCycle * 20 * elScale, 2.5 * elScale, 0, Math.PI * 2);
        ctx.fill();
    });

    // 361. Bubbling Witch's Cauldron
    reg(['hf_bubbling_witch_cauldron', 'item_361'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.55;
        // Iron tripod feet
        ctx.strokeStyle = '#0f172a';
        ctx.lineWidth = 4 * elScale;
        ctx.beginPath();
        ctx.moveTo(cx - 20 * elScale, cy + 18 * elScale); ctx.lineTo(cx - 28 * elScale, cy + 30 * elScale);
        ctx.moveTo(cx + 20 * elScale, cy + 18 * elScale); ctx.lineTo(cx + 28 * elScale, cy + 30 * elScale);
        ctx.moveTo(cx, cy + 20 * elScale); ctx.lineTo(cx, cy + 32 * elScale);
        ctx.stroke();

        // Round cauldron belly
        ctx.fillStyle = '#1e293b';
        ctx.beginPath();
        ctx.arc(cx, cy + 8 * elScale, 26 * elScale, 0, Math.PI * 2);
        ctx.fill();

        // Cauldron rim
        ctx.fillStyle = '#334155';
        ctx.beginPath();
        ctx.ellipse(cx, cy - 12 * elScale, 28 * elScale, 8 * elScale, 0, 0, Math.PI * 2);
        ctx.fill();

        // Bubbling neon green potion surface
        ctx.fillStyle = '#22c55e';
        ctx.beginPath();
        ctx.ellipse(cx, cy - 12 * elScale, 24 * elScale, 6 * elScale, 0, 0, Math.PI * 2);
        ctx.fill();

        // Popping potion bubbles & vapor
        for (let b = 0; b < 6; b++) {
            const bprog = ((time * 1.5 * speed + b * 0.3) % 1.0);
            const bx = cx + (FX.hash(b, 5) - 0.5) * 36 * elScale;
            const by = cy - 12 * elScale - bprog * 25 * elScale;
            ctx.fillStyle = `rgba(134, 239, 172, ${(1 - bprog) * intensity})`;
            ctx.beginPath();
            ctx.arc(bx, by, (3 + bprog * 3) * elScale, 0, Math.PI * 2);
            ctx.fill();
        }

        // Green eerie brew glow
        FX.drawRadialGlow(ctx, cx, cy - 15 * elScale, 4, 60 * elScale, `rgba(74, 222, 128, ${0.7 * intensity})`, 'rgba(34, 197, 94, 0)');
    });

    // 362. Country Hill Windmill
    reg(['hf_country_windmill', 'item_362'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.55;
        // Stone tower base
        ctx.fillStyle = '#cbd5e1';
        ctx.beginPath();
        ctx.moveTo(cx - 20 * elScale, cy + 30 * elScale);
        ctx.lineTo(cx - 14 * elScale, cy - 15 * elScale);
        ctx.lineTo(cx + 14 * elScale, cy - 15 * elScale);
        ctx.lineTo(cx + 20 * elScale, cy + 30 * elScale);
        ctx.closePath();
        ctx.fill();

        // Conical timber roof cap
        ctx.fillStyle = '#78350f';
        ctx.beginPath();
        ctx.moveTo(cx - 16 * elScale, cy - 15 * elScale);
        ctx.lineTo(cx, cy - 30 * elScale);
        ctx.lineTo(cx + 16 * elScale, cy - 15 * elScale);
        ctx.closePath();
        ctx.fill();

        // Rotating 4-blade canvas sails
        const rot = time * 0.8 * speed;
        ctx.save();
        ctx.translate(cx, cy - 16 * elScale);
        ctx.rotate(rot);
        for (let s = 0; s < 4; s++) {
            ctx.rotate(Math.PI * 0.5);
            // Wooden spar
            ctx.strokeStyle = '#451a03';
            ctx.lineWidth = 2.5 * elScale;
            ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -36 * elScale); ctx.stroke();
            // Canvas sheet
            ctx.fillStyle = 'rgba(248, 250, 252, 0.85)';
            ctx.fillRect(2 * elScale, -34 * elScale, 9 * elScale, 28 * elScale);
        }
        ctx.restore();
    });

    // 363. Self-Flipping Spellbook
    reg(['hf_self_flipping_spellbook', 'item_363'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.52;
        // Open leather tome cover
        ctx.fillStyle = '#831843';
        ctx.fillRect(cx - 32 * elScale, cy - 18 * elScale, 64 * elScale, 36 * elScale);

        // Glowing parchment pages
        ctx.fillStyle = '#fef3c7';
        ctx.fillRect(cx - 30 * elScale, cy - 16 * elScale, 28 * elScale, 32 * elScale);
        ctx.fillRect(cx + 2 * elScale, cy - 16 * elScale, 28 * elScale, 32 * elScale);

        // Flipping center page
        const flip = Math.sin(time * 3 * speed);
        ctx.save();
        ctx.translate(cx, cy);
        ctx.scale(flip, 1.0);
        ctx.fillStyle = '#fde68a';
        ctx.fillRect(0, -16 * elScale, 28 * elScale, 32 * elScale);
        // Magic runes on page
        ctx.strokeStyle = '#3b82f6';
        ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(4 * elScale, -8 * elScale); ctx.lineTo(20 * elScale, -8 * elScale); ctx.stroke();
        ctx.restore();

        // Magic floating arcane runes
        for (let r = 0; r < 3; r++) {
            const rx = cx + (r - 1) * 16 * elScale;
            const ry = cy - 25 * elScale - Math.sin(time * 2 + r) * 6 * elScale;
            ctx.fillStyle = 'rgba(147, 51, 234, 0.85)';
            ctx.font = `${10 * elScale}px serif`;
            ctx.fillText('ᚱ', rx, ry);
        }
    });

    // 364. Forge Bellows & Coals
    reg(['hf_forge_bellows', 'item_364'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.55;
        // Leather bellows pumping motion
        const pump = (Math.sin(time * 4 * speed) + 1) * 0.5;

        // Wood & ribbed leather bellows
        ctx.fillStyle = '#78350f';
        ctx.fillRect(cx - 35 * elScale, cy - 15 * elScale, 24 * elScale, 20 * elScale);
        // Nozzle pipe
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 4 * elScale;
        ctx.beginPath();
        ctx.moveTo(cx - 11 * elScale, cy - 5 * elScale);
        ctx.lineTo(cx - 2 * elScale, cy - 5 * elScale);
        ctx.stroke();

        // Forge bed of glowing coals (brightens on pump)
        const heat = 0.5 + pump * 0.5;
        FX.drawRadialGlow(ctx, cx + 18 * elScale, cy - 5 * elScale, 4, 55 * elScale, `rgba(255, 110, 0, ${heat * intensity})`, 'rgba(234, 88, 12, 0)');

        // Coals
        ctx.fillStyle = '#451a03';
        for (let c = 0; c < 8; c++) {
            const kx = cx + 8 * elScale + (c % 3) * 10 * elScale;
            const ky = cy - 12 * elScale + Math.floor(c / 3) * 8 * elScale;
            ctx.beginPath(); ctx.arc(kx, ky, 5 * elScale, 0, Math.PI * 2); ctx.fill();
        }

        // Blown spark flurry
        if (pump > 0.6) {
            for (let s = 0; s < 5; s++) {
                const sx = cx + 15 * elScale + FX.hash(s, 1) * 25 * elScale;
                const sy = cy - 10 * elScale - FX.hash(s, 2) * 20 * elScale;
                ctx.fillStyle = '#fde047';
                ctx.fillRect(sx, sy, 2 * elScale, 2 * elScale);
            }
        }
    });

    // 365. Swinging Tavern Sign
    reg(['hf_creaking_tavern_sign', 'item_365'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.45;
        // Wall bracket beam
        ctx.strokeStyle = '#1e293b';
        ctx.lineWidth = 5 * elScale;
        ctx.beginPath();
        ctx.moveTo(cx - 28 * elScale, cy - 10 * elScale);
        ctx.lineTo(cx + 10 * elScale, cy - 10 * elScale);
        ctx.stroke();

        // Swinging wooden sign
        const sway = Math.sin(time * 2 * speed) * 0.18;
        ctx.save();
        ctx.translate(cx, cy - 10 * elScale);
        ctx.rotate(sway);

        // Iron hanging links
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 2 * elScale;
        ctx.beginPath();
        ctx.moveTo(-12 * elScale, 0); ctx.lineTo(-12 * elScale, 8 * elScale);
        ctx.moveTo(12 * elScale, 0); ctx.lineTo(12 * elScale, 8 * elScale);
        ctx.stroke();

        // Wooden signboard
        ctx.fillStyle = '#78350f';
        ctx.fillRect(-22 * elScale, 8 * elScale, 44 * elScale, 28 * elScale);
        ctx.strokeStyle = '#451a03';
        ctx.lineWidth = 2 * elScale;
        ctx.strokeRect(-22 * elScale, 8 * elScale, 44 * elScale, 28 * elScale);

        // Painted foaming ale flagon
        ctx.fillStyle = '#facc15';
        ctx.fillRect(-6 * elScale, 16 * elScale, 12 * elScale, 14 * elScale);
        ctx.fillStyle = '#ffffff';
        ctx.beginPath(); ctx.arc(0, 16 * elScale, 6 * elScale, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
    });

    // 366. Amethyst Portal Archway
    reg(['hf_amethyst_portal_arch', 'item_366'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.55;
        // Stone carved archway
        ctx.fillStyle = '#334155';
        ctx.beginPath();
        ctx.arc(cx, cy - 5 * elScale, 28 * elScale, Math.PI, 0);
        ctx.fillRect(cx - 28 * elScale, cy - 5 * elScale, 10 * elScale, 38 * elScale);
        ctx.fillRect(cx + 18 * elScale, cy - 5 * elScale, 10 * elScale, 38 * elScale);
        ctx.fill();

        // Swirling dimensional amethyst portal
        const pg = ctx.createRadialGradient(cx, cy + 5 * elScale, 2, cx, cy + 5 * elScale, 24 * elScale);
        pg.addColorStop(0, '#f5d0fe');
        pg.addColorStop(0.5, '#c084fc');
        pg.addColorStop(1, '#581c87');
        ctx.fillStyle = pg;
        ctx.beginPath();
        ctx.arc(cx, cy - 5 * elScale, 20 * elScale, Math.PI, 0);
        ctx.fillRect(cx - 20 * elScale, cy - 5 * elScale, 40 * elScale, 38 * elScale);
        ctx.fill();

        // Spiral cosmic vortex arms
        ctx.save();
        ctx.translate(cx, cy + 5 * elScale);
        ctx.rotate(time * 2 * speed);
        ctx.strokeStyle = 'rgba(232, 121, 249, 0.7)';
        ctx.lineWidth = 2 * elScale;
        for (let a = 0; a < 3; a++) {
            ctx.rotate((Math.PI * 2) / 3);
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.quadraticCurveTo(8 * elScale, -12 * elScale, 18 * elScale, 0);
            ctx.stroke();
        }
        ctx.restore();
    });

    // 367. Levitating Runed Greatsword
    reg(['hf_levitating_runed_greatsword', 'item_367'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        const bob = Math.sin(time * 2.5 * speed) * (6 * elScale);
        const swordY = cy + bob;

        // Divine vertical column of light
        const lg = ctx.createLinearGradient(cx - 15 * elScale, 0, cx + 15 * elScale, 0);
        lg.addColorStop(0, 'rgba(56, 189, 248, 0)');
        lg.addColorStop(0.5, `rgba(56, 189, 248, ${0.4 * intensity})`);
        lg.addColorStop(1, 'rgba(56, 189, 248, 0)');
        ctx.fillStyle = lg;
        ctx.fillRect(cx - 15 * elScale, cy - 45 * elScale, 30 * elScale, 90 * elScale);

        // Gleaming broadsword blade
        ctx.fillStyle = '#e2e8f0';
        ctx.beginPath();
        ctx.moveTo(cx - 5 * elScale, swordY - 25 * elScale);
        ctx.lineTo(cx, swordY - 42 * elScale);
        ctx.lineTo(cx + 5 * elScale, swordY - 25 * elScale);
        ctx.lineTo(cx + 5 * elScale, swordY + 12 * elScale);
        ctx.lineTo(cx - 5 * elScale, swordY + 12 * elScale);
        ctx.closePath();
        ctx.fill();

        // Crossguard & pommel
        ctx.fillStyle = '#eab308';
        ctx.fillRect(cx - 16 * elScale, swordY + 12 * elScale, 32 * elScale, 5 * elScale);
        ctx.fillStyle = '#78350f';
        ctx.fillRect(cx - 2.5 * elScale, swordY + 17 * elScale, 5 * elScale, 12 * elScale);
        ctx.fillStyle = '#eab308';
        ctx.beginPath(); ctx.arc(cx, swordY + 31 * elScale, 4 * elScale, 0, Math.PI * 2); ctx.fill();

        // Glowing runic fuller channel
        ctx.strokeStyle = `rgba(14, 165, 233, ${0.9 * intensity})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(cx, swordY - 32 * elScale); ctx.lineTo(cx, swordY + 8 * elScale);
        ctx.stroke();
    });

    // 368. Azure Healing Fountain
    reg(['hf_azure_healing_fountain', 'item_368'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.55;
        // Tiered circular marble basin
        ctx.fillStyle = '#cbd5e1';
        ctx.beginPath();
        ctx.ellipse(cx, cy + 18 * elScale, 35 * elScale, 14 * elScale, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#0284c7';
        ctx.beginPath();
        ctx.ellipse(cx, cy + 16 * elScale, 30 * elScale, 10 * elScale, 0, 0, Math.PI * 2);
        ctx.fill();

        // Center spout pillar
        ctx.fillStyle = '#94a3b8';
        ctx.fillRect(cx - 6 * elScale, cy - 8 * elScale, 12 * elScale, 24 * elScale);

        // Water jet springing upward
        const jetH = (18 + Math.sin(time * 6 * speed) * 4) * elScale;
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 3 * elScale;
        ctx.beginPath();
        ctx.moveTo(cx, cy - 8 * elScale);
        ctx.lineTo(cx, cy - 8 * elScale - jetH);
        ctx.stroke();

        // Cascading sparkle motes (healing sparkles)
        for (let p = 0; p < 8; p++) {
            const pa = time * 3 * speed + (p / 8) * Math.PI * 2;
            const px = cx + Math.cos(pa) * (14 + p * 1.5) * elScale;
            const py = cy - 8 * elScale + Math.sin(pa) * 6 * elScale + ((p * 3) % 15) * elScale;
            ctx.fillStyle = `rgba(186, 230, 253, ${0.9 * intensity})`;
            ctx.beginPath(); ctx.arc(px, py, 1.8 * elScale, 0, Math.PI * 2); ctx.fill();
        }
    });

    // 369. Floating Ectoplasm Skull
    reg(['hf_floating_spectral_skull', 'item_369'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        const bob = Math.sin(time * 3 * speed) * (8 * elScale);
        const skullY = cy + bob;

        // Soulfire blue radial halo
        FX.drawRadialGlow(ctx, cx, skullY, 3, 55 * elScale, `rgba(56, 189, 248, ${0.85 * intensity})`, 'rgba(3, 105, 161, 0)');

        // Translucent spectral cranium
        ctx.fillStyle = 'rgba(224, 242, 254, 0.82)';
        ctx.beginPath();
        ctx.arc(cx, skullY - 4 * elScale, 18 * elScale, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillRect(cx - 10 * elScale, skullY + 6 * elScale, 20 * elScale, 12 * elScale);

        // Deep eye sockets & nose cavity
        ctx.fillStyle = '#0369a1';
        ctx.beginPath();
        ctx.arc(cx - 6 * elScale, skullY - 2 * elScale, 4 * elScale, 0, Math.PI * 2);
        ctx.arc(cx + 6 * elScale, skullY - 2 * elScale, 4 * elScale, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(cx, skullY + 3 * elScale); ctx.lineTo(cx - 2 * elScale, skullY + 7 * elScale); ctx.lineTo(cx + 2 * elScale, skullY + 7 * elScale);
        ctx.fill();

        // Trailing wisps of spectral mist
        for (let w = 0; w < 4; w++) {
            const wx = cx + (w - 1.5) * 8 * elScale;
            const wy = skullY + 18 * elScale + Math.sin(time * 4 + w) * 6 * elScale;
            ctx.fillStyle = `rgba(125, 211, 252, ${0.45 * intensity})`;
            ctx.beginPath(); ctx.arc(wx, wy, (4 + w * 2) * elScale, 0, Math.PI * 2); ctx.fill();
        }
    });

    // 370. Storm Scrying Crystal Ball
    reg(['hf_storm_scrying_orb', 'item_370'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.52;
        // Ornate bronze claw tripod stand
        ctx.strokeStyle = '#b45309';
        ctx.lineWidth = 4 * elScale;
        ctx.beginPath();
        ctx.moveTo(cx - 16 * elScale, cy + 28 * elScale); ctx.lineTo(cx, cy + 18 * elScale);
        ctx.moveTo(cx + 16 * elScale, cy + 28 * elScale); ctx.lineTo(cx, cy + 18 * elScale);
        ctx.moveTo(cx, cy + 30 * elScale); ctx.lineTo(cx, cy + 18 * elScale);
        ctx.stroke();

        // Crystal sphere
        const orbR = 26 * elScale;
        const og = ctx.createRadialGradient(cx - 6 * elScale, cy - 6 * elScale, 2, cx, cy, orbR);
        og.addColorStop(0, '#e0f2fe');
        og.addColorStop(0.5, '#1e293b');
        og.addColorStop(1, '#020617');
        ctx.fillStyle = og;
        ctx.beginPath();
        ctx.arc(cx, cy, orbR, 0, Math.PI * 2);
        ctx.fill();

        // Miniature lightning bolts inside sphere
        ctx.strokeStyle = '#fde047';
        ctx.lineWidth = 1.5;
        for (let l = 0; l < 2; l++) {
            const lx1 = cx + (FX.hash(time * speed + l, 1) - 0.5) * 30 * elScale;
            const ly1 = cy + (FX.hash(time * speed + l, 2) - 0.5) * 30 * elScale;
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo((cx + lx1) * 0.5 + 4, (cy + ly1) * 0.5 - 3);
            ctx.lineTo(lx1, ly1);
            ctx.stroke();
        }
    });

    // 371. Rippling Castle Banners
    reg(['hf_heraldic_castle_banners', 'item_371'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.45;
        // Horizontal iron wall bracket rod
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 4 * elScale;
        ctx.beginPath();
        ctx.moveTo(cx - 25 * elScale, cy - 15 * elScale); ctx.lineTo(cx + 25 * elScale, cy - 15 * elScale);
        ctx.stroke();

        // Rippling heraldic swallowtail banner
        const wave = Math.sin(time * 4 * speed) * (6 * elScale);
        ctx.fillStyle = '#dc2626'; // Royal crimson
        ctx.beginPath();
        ctx.moveTo(cx - 20 * elScale, cy - 13 * elScale);
        ctx.lineTo(cx + 20 * elScale, cy - 13 * elScale);
        ctx.quadraticCurveTo(cx + 20 * elScale + wave, cy + 15 * elScale, cx + 18 * elScale + wave, cy + 42 * elScale);
        ctx.lineTo(cx + wave, cy + 30 * elScale); // Swallowtail notch
        ctx.lineTo(cx - 18 * elScale + wave, cy + 42 * elScale);
        ctx.quadraticCurveTo(cx - 20 * elScale + wave, cy + 15 * elScale, cx - 20 * elScale, cy - 13 * elScale);
        ctx.closePath();
        ctx.fill();

        // Golden lion crest
        ctx.fillStyle = '#fbbf24';
        ctx.beginPath();
        ctx.arc(cx + wave * 0.5, cy + 10 * elScale, 6 * elScale, 0, Math.PI * 2);
        ctx.fill();
    });

    // 372. Monarch Wildflower Flutter
    reg(['hf_monarch_wildflowers', 'item_372'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.6;
        // Blooming wildflower clump
        const flowers = [
            { x: -16, y: 10, col: '#f43f5e' },
            { x: 0,   y: 16, col: '#8b5cf6' },
            { x: 16,  y: 12, col: '#f59e0b' }
        ];
        flowers.forEach(fl => {
            const fx = cx + fl.x * elScale;
            const fy = cy + fl.y * elScale;
            ctx.fillStyle = '#15803d';
            ctx.fillRect(fx - 1 * elScale, fy, 2 * elScale, 14 * elScale);
            ctx.fillStyle = fl.col;
            ctx.beginPath(); ctx.arc(fx, fy, 5 * elScale, 0, Math.PI * 2); ctx.fill();
        });

        // Fluttering monarch butterfly
        const flap = Math.abs(Math.sin(time * 12 * speed));
        const bx = cx + Math.sin(time * 2 * speed) * 18 * elScale;
        const by = cy - 15 * elScale + Math.cos(time * 3 * speed) * 10 * elScale;

        ctx.save();
        ctx.translate(bx, by);
        // Orange & black monarch wings
        ctx.fillStyle = '#ea580c';
        ctx.beginPath();
        ctx.ellipse(-6 * flap * elScale, 0, 7 * flap * elScale, 5 * elScale, -0.2, 0, Math.PI * 2);
        ctx.ellipse(6 * flap * elScale, 0, 7 * flap * elScale, 5 * elScale, 0.2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    });

    // 373. Spit-Roast Boar Fire
    reg(['hf_roast_boar_spit', 'item_373'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.55;
        // Campfire coal bed
        FX.drawRadialGlow(ctx, cx, cy + 12 * elScale, 4, 60 * elScale, `rgba(249, 115, 22, ${0.85 * intensity})`, 'rgba(194, 65, 12, 0)');

        // Iron spit frame uprights
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 3.5 * elScale;
        ctx.beginPath();
        ctx.moveTo(cx - 30 * elScale, cy + 25 * elScale); ctx.lineTo(cx - 30 * elScale, cy - 8 * elScale);
        ctx.moveTo(cx + 30 * elScale, cy + 25 * elScale); ctx.lineTo(cx + 30 * elScale, cy - 8 * elScale);
        // Crossbar skewer
        ctx.moveTo(cx - 36 * elScale, cy - 5 * elScale); ctx.lineTo(cx + 36 * elScale, cy - 5 * elScale);
        ctx.stroke();

        // Roast boar body rotating on spit
        const rot = time * 1.5 * speed;
        ctx.save();
        ctx.translate(cx, cy - 5 * elScale);
        ctx.rotate(rot);
        ctx.fillStyle = '#78350f'; // Crisp roast skin
        ctx.beginPath();
        ctx.ellipse(0, 0, 20 * elScale, 10 * elScale, 0, 0, Math.PI * 2);
        ctx.fill();
        // Snout & curly tail
        ctx.fillRect(16 * elScale, -3 * elScale, 6 * elScale, 6 * elScale);
        ctx.restore();

        // Sizzling grease flare-ups
        if (Math.sin(time * 8 * speed) > 0.8) {
            ctx.fillStyle = '#fde047';
            ctx.beginPath(); ctx.arc(cx, cy + 10 * elScale, 4 * elScale, 0, Math.PI * 2); ctx.fill();
        }
    });

    // 374. Draining Brass Hourglass
    reg(['hf_alchemist_brass_hourglass', 'item_374'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        // Ornate brass top & bottom caps
        ctx.fillStyle = '#b45309';
        ctx.fillRect(cx - 18 * elScale, cy - 30 * elScale, 36 * elScale, 6 * elScale);
        ctx.fillRect(cx - 18 * elScale, cy + 24 * elScale, 36 * elScale, 6 * elScale);

        // Three brass support pillars
        ctx.strokeStyle = '#d97706';
        ctx.lineWidth = 2.5 * elScale;
        ctx.beginPath();
        ctx.moveTo(cx - 15 * elScale, cy - 24 * elScale); ctx.lineTo(cx - 15 * elScale, cy + 24 * elScale);
        ctx.moveTo(cx + 15 * elScale, cy - 24 * elScale); ctx.lineTo(cx + 15 * elScale, cy + 24 * elScale);
        ctx.stroke();

        // Glass bulbs
        ctx.fillStyle = 'rgba(241, 245, 249, 0.45)';
        ctx.beginPath();
        ctx.moveTo(cx - 12 * elScale, cy - 24 * elScale);
        ctx.quadraticCurveTo(cx - 12 * elScale, cy, cx - 2 * elScale, cy);
        ctx.quadraticCurveTo(cx - 12 * elScale, cy, cx - 12 * elScale, cy + 24 * elScale);
        ctx.lineTo(cx + 12 * elScale, cy + 24 * elScale);
        ctx.quadraticCurveTo(cx + 12 * elScale, cy, cx + 2 * elScale, cy);
        ctx.quadraticCurveTo(cx + 12 * elScale, cy, cx + 12 * elScale, cy - 24 * elScale);
        ctx.closePath();
        ctx.fill();

        // Flowing golden alchemical sand trickle
        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 2 * elScale;
        ctx.beginPath();
        ctx.moveTo(cx, cy - 2 * elScale); ctx.lineTo(cx, cy + 18 * elScale);
        ctx.stroke();

        // Sand pile in bottom bulb
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath();
        ctx.moveTo(cx - 10 * elScale, cy + 24 * elScale);
        ctx.lineTo(cx, cy + 14 * elScale);
        ctx.lineTo(cx + 10 * elScale, cy + 24 * elScale);
        ctx.closePath();
        ctx.fill();
    });

    // 375. Water-Lily Pad Treefrog
    reg(['hf_treefrog_lilypad', 'item_375'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.55;
        // Floating dark green water-lily pad with notch
        ctx.fillStyle = '#15803d';
        ctx.beginPath();
        ctx.arc(cx, cy, 32 * elScale, 0.2, Math.PI * 1.9);
        ctx.lineTo(cx, cy);
        ctx.closePath();
        ctx.fill();

        // Pink water-lily lotus blossom
        ctx.fillStyle = '#f472b6';
        ctx.beginPath(); ctx.arc(cx + 16 * elScale, cy - 14 * elScale, 8 * elScale, 0, Math.PI * 2); ctx.fill();

        // Bright green treefrog breathing & periodically hopping
        const hopCycle = (time * 1.2 * speed) % 2.5;
        const hopping = hopCycle < 0.4;
        const hopY = hopping ? Math.sin((hopCycle / 0.4) * Math.PI) * (14 * elScale) : 0;
        const breathe = Math.sin(time * 6 * speed) * (1.5 * elScale);

        const frogY = cy - hopY;
        ctx.fillStyle = '#22c55e';
        ctx.beginPath();
        ctx.ellipse(cx - 4 * elScale, frogY, (10 + breathe) * elScale, 8 * elScale, 0, 0, Math.PI * 2);
        ctx.fill();

        // Big black & gold frog eyes
        ctx.fillStyle = '#facc15';
        ctx.beginPath();
        ctx.arc(cx - 10 * elScale, frogY - 7 * elScale, 3.5 * elScale, 0, Math.PI * 2);
        ctx.arc(cx + 2 * elScale, frogY - 7 * elScale, 3.5 * elScale, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.arc(cx - 10 * elScale, frogY - 7 * elScale, 1.8 * elScale, 0, Math.PI * 2);
        ctx.arc(cx + 2 * elScale, frogY - 7 * elScale, 1.8 * elScale, 0, Math.PI * 2);
        ctx.fill();
    });

})();