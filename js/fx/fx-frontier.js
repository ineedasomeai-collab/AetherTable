/**
 * AetherTable VTT - Weird West & Frontier FX (75 Unique Elements)
 * Procedural Canvas Renderers for Elements 76 through 150.
 * Every element features bespoke geometry, distinct kinetic animation,
 * and dynamic integration with the Fractal / Detail slider.
 */
(function() {
    'use strict';
    const reg = window.VTT_FX_DISPATCHER ? window.VTT_FX_DISPATCHER.register : null;
    if (!reg) return;
    const FX = window.VTT_FX || {};

    // =========================================================================
    // A. LINEAR MOTION (76 - 100)
    // =========================================================================

    // 76. Steam Locomotive Headlamp Beam
    reg(['ww_locomotive_beam', 'item_76'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        // Pitch black desert night backdrop
        ctx.fillStyle = '#05070d';
        ctx.fillRect(0, 0, W, H);
        // Heavy brass locomotive headlamp housing
        ctx.fillStyle = '#b45309';
        ctx.fillRect(15, cy - 16 * elScale, 28 * elScale, 32 * elScale);
        ctx.strokeStyle = '#78350f';
        ctx.lineWidth = 2;
        ctx.strokeRect(15, cy - 16 * elScale, 28 * elScale, 32 * elScale);
        // Massive piercing parabolic headlamp beam cutting through darkness
        const beamLen = W * 0.9;
        FX.drawVolumetricCone(ctx, 43 * elScale, cy, 0, beamLen, 0.46, `rgba(254, 240, 138, ${0.92 * intensity})`, 'rgba(234, 179, 8, 0)');
        // Billowing black coal smoke and fiery sparks drifting over the beam
        for (let s = 0; s < 8; s++) {
            const sx = 20 + ((time * 80 * speed + s * 35) % (W * 0.8));
            const sy = cy - 25 * elScale - Math.sin(time * 2 + s) * 12;
            ctx.fillStyle = `rgba(15, 23, 42, ${(0.6 - s * 0.06) * intensity})`;
            ctx.beginPath();
            ctx.arc(sx, sy, (12 + s * 4) * elScale, 0, Math.PI * 2);
            ctx.fill();
        }
    });

    // 77. Oil Lantern Swaying on Moving Stagecoach
    reg(['ww_stagecoach_lantern', 'item_77'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.4;
        const sway = Math.sin(time * 3.5 * speed) * 0.45;
        // Moving stagecoach rear wooden wall
        ctx.fillStyle = '#451a03';
        ctx.fillRect(0, 0, W * 0.35, H);
        // Iron lantern hook
        ctx.strokeStyle = '#1e293b';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(W * 0.35, cy - 25 * elScale);
        ctx.lineTo(cx, cy - 20 * elScale);
        ctx.stroke();
        // Swaying brass kerosene lantern
        ctx.save();
        ctx.translate(cx, cy - 20 * elScale);
        ctx.rotate(sway);
        // Lantern frame
        ctx.fillStyle = '#b45309';
        ctx.fillRect(-10 * elScale, 0, 20 * elScale, 32 * elScale);
        // Glass chimney with warm flickering kerosene flame
        FX.drawRadialGlow(ctx, 0, 16 * elScale, 2, 65 * elScale, `rgba(254, 215, 170, ${0.95 * intensity})`, 'rgba(234, 88, 12, 0)');
        ctx.restore();
        // Kicked up road dust
        for (let d = 0; d < 6; d++) {
            const dx = cx + (d * 18 + time * 60) % (W * 0.5);
            const dy = H * 0.75 + (d % 3) * 6;
            ctx.fillStyle = `rgba(180, 83, 9, ${0.25 * intensity})`;
            ctx.beginPath(); ctx.arc(dx, dy, (8 + d * 3) * elScale, 0, Math.PI * 2); ctx.fill();
        }
    });

    // 78. Ignited Kerosene Trail Racing Across Floorboards
    reg(['ww_kerosene_trail', 'item_78'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        // Weathered saloon wooden floorboards
        ctx.fillStyle = '#78350f';
        ctx.fillRect(0, 0, W, H);
        ctx.strokeStyle = '#451a03';
        ctx.lineWidth = 1.5;
        for (let y = 15; y < H; y += 22) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
        // Racing fire front position
        const fireHead = ((time * 190 * speed) % (W + 80)) - 40;
        // Charred black scorch line left behind
        ctx.strokeStyle = '#1c1917';
        ctx.lineWidth = 6 * elScale;
        ctx.beginPath(); ctx.moveTo(0, cy); ctx.lineTo(fireHead, cy); ctx.stroke();
        // Licking flames along the kerosene line
        for (let x = 0; x < fireHead; x += 18) {
            const flick = Math.sin(time * 12 + x) * 6;
            const fr = (10 + (x % 3) * 4) * elScale;
            FX.drawRadialGlow(ctx, x, cy + flick, 1, fr, `rgba(255, 237, 213, ${0.95 * intensity})`, 'rgba(234, 88, 12, 0)');
        }
    });

    // 79. Canyon Sunbeams Shifting
    reg(['ww_canyon_sunbeams', 'item_79'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        // Red-rock canyon floor backdrop
        ctx.fillStyle = '#7c2d12';
        ctx.fillRect(0, 0, W, H);
        // Slanting desert sunbeams sweeping across
        const shift = Math.sin(time * 0.5 * speed) * (W * 0.15);
        for (let b = 0; b < 4; b++) {
            const bx = b * (W * 0.3) + shift;
            const beamGrad = ctx.createLinearGradient(bx, 0, bx + 80, H);
            beamGrad.addColorStop(0, `rgba(254, 240, 138, ${0.45 * intensity})`);
            beamGrad.addColorStop(0.7, `rgba(251, 146, 60, ${0.25 * intensity})`);
            beamGrad.addColorStop(1, 'rgba(124, 45, 18, 0)');
            ctx.fillStyle = beamGrad;
            ctx.beginPath();
            ctx.moveTo(bx, 0); ctx.lineTo(bx + 60, 0);
            ctx.lineTo(bx + 140, H); ctx.lineTo(bx + 80, H);
            ctx.closePath();
            ctx.fill();
        }
    });

    // 80. Railroad Ghost-Lights
    reg(['ww_ghost_lights', 'item_80'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        // Abandoned wooden railroad ties
        ctx.fillStyle = '#292524';
        for (let x = 10; x < W; x += 32) {
            ctx.fillRect(x - 5, cy - 22 * elScale, 10, 44 * elScale);
        }
        // Iron rail tracks
        ctx.strokeStyle = '#57534e';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(0, cy - 14 * elScale); ctx.lineTo(W, cy - 14 * elScale);
        ctx.moveTo(0, cy + 14 * elScale); ctx.lineTo(W, cy + 14 * elScale);
        ctx.stroke();
        // Drifting pale blue ghost-lights bobbing down ties
        const orbs = 3;
        for (let o = 0; o < orbs; o++) {
            const ox = ((time * (65 + o * 20) * speed + o * (W * 0.4)) % (W + 60)) - 30;
            const oy = cy + Math.sin(time * 2.5 + o * 2) * (12 * elScale);
            FX.drawRadialGlow(ctx, ox, oy, 2, (18 + o * 4) * elScale, `rgba(224, 242, 254, ${0.95 * intensity})`, 'rgba(56, 189, 248, 0)');
        }
    });

    // 81. Desert Arroyo Flash-Flood Water
    reg(['ww_flash_flood', 'item_81'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        const washH = 55 * elScale;
        // Dry red canyon wash bed
        ctx.fillStyle = '#7c2d12';
        ctx.fillRect(0, cy - washH * 0.6, W, washH * 1.2);
        // Surging muddy brown wall of water
        const floodFront = ((time * 240 * speed) % (W + 150)) - 50;
        ctx.fillStyle = `rgba(120, 53, 15, ${0.9 * intensity})`;
        ctx.fillRect(0, cy - washH * 0.5, floodFront, washH);
        // Frothing churning muddy white foam head
        const foamW = 35 * elScale;
        const foamGrad = ctx.createLinearGradient(floodFront - foamW, 0, floodFront, 0);
        foamGrad.addColorStop(0, 'rgba(120, 53, 15, 0.8)');
        foamGrad.addColorStop(0.7, `rgba(254, 243, 199, ${0.95 * intensity})`);
        foamGrad.addColorStop(1, '#ffffff');
        ctx.fillStyle = foamGrad;
        ctx.beginPath();
        ctx.arc(floodFront, cy, washH * 0.5, -Math.PI * 0.5, Math.PI * 0.5);
        ctx.fill();
        // Tumbling rocks and debris
        for (let r = 0; r < 5; r++) {
            const rx = floodFront - 20 - (r * 35);
            if (rx > 0) {
                ctx.fillStyle = '#451a03';
                ctx.beginPath(); ctx.arc(rx, cy + Math.sin(r * 4) * (washH * 0.3), 5 * elScale, 0, Math.PI * 2); ctx.fill();
            }
        }
    });

    // 82. Runaway Minecart Hurtling on Tracks
    reg(['ww_runaway_orecart', 'item_82'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        // Rickety wooden mine ties & rails
        ctx.fillStyle = '#44403c';
        for (let x = 12; x < W; x += 30) { ctx.fillRect(x - 4, cy - 18 * elScale, 8, 36 * elScale); }
        ctx.strokeStyle = '#78716c';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(0, cy - 11 * elScale); ctx.lineTo(W, cy - 11 * elScale);
        ctx.moveTo(0, cy + 11 * elScale); ctx.lineTo(W, cy + 11 * elScale);
        ctx.stroke();
        // Runaway ore cart speeding across
        const cartX = ((time * 360 * speed) % (W + 100)) - 50;
        ctx.save();
        ctx.translate(cartX, cy);
        // Wooden cart box
        ctx.fillStyle = '#78350f';
        ctx.fillRect(-22 * elScale, -14 * elScale, 44 * elScale, 28 * elScale);
        ctx.strokeStyle = '#292524'; // Iron straps
        ctx.lineWidth = 2;
        ctx.strokeRect(-22 * elScale, -14 * elScale, 44 * elScale, 28 * elScale);
        // Piled raw gold/silver ore chunks
        ctx.fillStyle = '#fbbf24';
        for (let o = -2; o <= 2; o++) {
            ctx.beginPath(); ctx.arc(o * 7 * elScale, -15 * elScale, 4 * elScale, 0, Math.PI * 2); ctx.fill();
        }
        // Iron wheels sparking on rails
        for (let s = 0; s < 4; s++) {
            const sx = (s % 2 === 0 ? -16 : 16) * elScale;
            const sy = (s < 2 ? -11 : 11) * elScale;
            FX.drawRadialGlow(ctx, sx, sy, 1, 8, '#ffffff', 'rgba(251, 191, 36, 0)');
        }
        ctx.restore();
    });

    // 83. Stampeding Longhorn Cattle
    reg(['ww_stampede_dust', 'item_83', 'ww_stampeding_cattle'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        // Rolling dust wall kicked up by hooves
        for (let d = 0; d < 8; d++) {
            const dx = ((d * (W / 8) + time * 160 * speed) % (W + 60)) - 30;
            const dy = cy + (Math.sin(d * 3) * 20);
            ctx.fillStyle = `rgba(180, 83, 9, ${(0.35 + rough * 0.15) * intensity})`;
            ctx.beginPath(); ctx.arc(dx, dy, (25 + d * 5) * elScale, 0, Math.PI * 2); ctx.fill();
        }
        // Stampeding steers galloping in wave
        const steers = 5;
        for (let s = 0; s < steers; s++) {
            const sx = ((s * (W / steers) + time * 180 * speed) % (W + 80)) - 40;
            const sy = cy + (Math.sin(s * 2.5) * 18 * elScale);
            ctx.save();
            ctx.translate(sx, sy);
            // Steer body
            ctx.fillStyle = (s % 2 === 0) ? '#451a03' : '#78350f';
            ctx.beginPath(); ctx.ellipse(0, 0, 16 * elScale, 10 * elScale, 0, 0, Math.PI * 2); ctx.fill();
            // Steer head
            ctx.beginPath(); ctx.arc(14 * elScale, 0, 6 * elScale, 0, Math.PI * 2); ctx.fill();
            // Wide curved longhorns
            ctx.strokeStyle = '#fef3c7';
            ctx.lineWidth = 2.0;
            ctx.beginPath();
            ctx.moveTo(14 * elScale, -4 * elScale); ctx.quadraticCurveTo(18 * elScale, -16 * elScale, 26 * elScale, -14 * elScale);
            ctx.moveTo(14 * elScale, 4 * elScale); ctx.quadraticCurveTo(18 * elScale, 16 * elScale, 26 * elScale, 14 * elScale);
            ctx.stroke();
            ctx.restore();
        }
    });

    // 84. Flaming Tumbleweeds
    reg(['ww_flaming_tumbleweed', 'item_84', 'ww_flaming_tumbleweeds'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        const balls = 2;
        for (let b = 0; b < balls; b++) {
            const bx = ((time * (110 + b * 40) * speed + b * (W * 0.55)) % (W + 60)) - 30;
            const bounce = Math.abs(Math.sin(time * 5 + b)) * (22 * elScale);
            const by = cy - bounce;
            const rot = time * 6 + b;
            ctx.save();
            ctx.translate(bx, by);
            ctx.rotate(rot);
            // Twiggy tumbleweed structure
            ctx.strokeStyle = '#78350f';
            ctx.lineWidth = 1.5;
            for (let a = 0; a < 6; a++) {
                ctx.beginPath();
                ctx.arc(0, 0, (12 + (a % 3) * 3) * elScale, a, a + Math.PI * 0.7);
                ctx.stroke();
            }
            // Enveloping orange fireball flames
            FX.drawRadialGlow(ctx, 0, 0, 2, 28 * elScale, `rgba(255, 237, 213, ${0.95 * intensity})`, 'rgba(234, 88, 12, 0)');
            ctx.restore();
        }
    });

    // 85. Hand-Cranked Gatling Gun Tracers
    reg(['ww_gatling_tracers', 'item_85'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        // Brass Gatling gun tripod & 6 barrels on left
        ctx.fillStyle = '#b45309';
        ctx.fillRect(10, cy - 10 * elScale, 22 * elScale, 20 * elScale);
        ctx.fillStyle = '#451a03';
        ctx.fillRect(32 * elScale, cy - 6 * elScale, 16 * elScale, 12 * elScale);
        // Rapid rhythmic lead bullet streaks
        const shots = 4;
        for (let s = 0; s < shots; s++) {
            const sPhase = (time * 8 * speed + s * 0.25) % 1.0;
            const sx = 48 * elScale + sPhase * (W - 48 * elScale);
            const sy = cy + (Math.sin(s * 4) * 6);
            ctx.strokeStyle = `rgba(254, 240, 138, ${0.9 * intensity})`;
            ctx.lineWidth = 2.0;
            ctx.beginPath(); ctx.moveTo(sx - 35 * elScale, sy); ctx.lineTo(sx, sy); ctx.stroke();
            FX.drawRadialGlow(ctx, sx, sy, 1, 6, '#ffffff', 'rgba(245, 158, 11, 0)');
        }
        // Billowing white gunsmoke puff from muzzle
        for (let p = 0; p < 4; p++) {
            const px = 55 * elScale + ((time * 40 + p * 15) % 60);
            ctx.fillStyle = `rgba(226, 232, 240, ${(0.45 - p * 0.1) * intensity})`;
            ctx.beginPath(); ctx.arc(px, cy, (8 + p * 4) * elScale, 0, Math.PI * 2); ctx.fill();
        }
    });

    // 86. Wooden Stagecoach Wheels Spinning
    reg(['ww_stagecoach_wheels', 'item_86', 'ww_spinning_coach_wheels'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.45;
        const rot = time * 12 * speed;
        // Large wooden 12-spoke wheel with iron rim
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(rot);
        ctx.strokeStyle = '#451a03';
        ctx.lineWidth = 4 * elScale;
        ctx.beginPath(); ctx.arc(0, 0, 32 * elScale, 0, Math.PI * 2); ctx.stroke();
        // Spokes
        ctx.lineWidth = 2 * elScale;
        for (let s = 0; s < 12; s++) {
            const ang = (Math.PI / 6) * s;
            ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(Math.cos(ang) * 32 * elScale, Math.sin(ang) * 32 * elScale); ctx.stroke();
        }
        ctx.restore();
        // Rooster-tail trail dust kicked up by wheel
        for (let d = 0; d < 6; d++) {
            const dx = cx - 25 * elScale - ((time * 60 + d * 15) % 60);
            const dy = cy + 28 * elScale - Math.sin(d) * 12;
            ctx.fillStyle = `rgba(217, 119, 6, ${(0.4 - d * 0.05) * intensity})`;
            ctx.beginPath(); ctx.arc(dx, dy, (6 + d * 3) * elScale, 0, Math.PI * 2); ctx.fill();
        }
    });

    // 87. Iron Steam Locomotive Train
    reg(['ww_locomotive_smoke', 'item_87', 'ww_steam_locomotive_train'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        const trainX = ((time * 160 * speed) % (W + 200)) - 100;
        ctx.save();
        ctx.translate(trainX, cy);
        // Black iron boiler body
        ctx.fillStyle = '#1c1917';
        ctx.fillRect(-60 * elScale, -18 * elScale, 100 * elScale, 36 * elScale);
        // Smokebox & brass cowcatcher on front
        ctx.fillStyle = '#78350f';
        ctx.beginPath();
        ctx.moveTo(40 * elScale, -18 * elScale);
        ctx.lineTo(55 * elScale, 0);
        ctx.lineTo(40 * elScale, 18 * elScale);
        ctx.closePath();
        ctx.fill();
        // Cab on rear
        ctx.fillStyle = '#44403c';
        ctx.fillRect(-65 * elScale, -26 * elScale, 26 * elScale, 52 * elScale);
        // Red glow inside cab
        FX.drawRadialGlow(ctx, -52 * elScale, 0, 2, 16 * elScale, 'rgba(249, 115, 22, 0.85)', 'rgba(234, 88, 12, 0)');
        // Billowing chimney steam puffs
        for (let p = 0; p < 6; p++) {
            const px = 20 * elScale - (p * 18);
            const py = -32 * elScale - (p * 6);
            ctx.fillStyle = `rgba(203, 213, 225, ${(0.6 - p * 0.08) * intensity})`;
            ctx.beginPath(); ctx.arc(px, py, (10 + p * 4) * elScale, 0, Math.PI * 2); ctx.fill();
        }
        ctx.restore();
    });

    // 88. Wooden Gold-Panning Sluice Box
    reg(['ww_gold_sluice', 'item_88'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        const sluiceH = 38 * elScale;
        // Weathered pine timber sluice trough
        ctx.fillStyle = '#78350f';
        ctx.fillRect(0, cy - sluiceH * 0.5, W, sluiceH);
        ctx.strokeStyle = '#451a03';
        ctx.lineWidth = 3;
        ctx.strokeRect(0, cy - sluiceH * 0.5, W, sluiceH);
        // Riffles (wooden slats) trapping gold
        for (let x = 20; x < W; x += 35) {
            ctx.fillStyle = '#292524';
            ctx.fillRect(x, cy - sluiceH * 0.45, 4, sluiceH * 0.9);
            // Trapped golden nuggets behind riffles
            ctx.fillStyle = '#fbbf24';
            ctx.beginPath(); ctx.arc(x + 6, cy + Math.sin(x) * 8, 2.5 * elScale, 0, Math.PI * 2); ctx.fill();
        }
        // Rapidly flowing muddy creek water
        const waterGrad = ctx.createLinearGradient(0, cy - sluiceH * 0.4, 0, cy + sluiceH * 0.4);
        waterGrad.addColorStop(0, `rgba(180, 83, 9, ${0.75 * intensity})`);
        waterGrad.addColorStop(0.5, `rgba(217, 119, 6, ${0.65 * intensity})`);
        waterGrad.addColorStop(1, `rgba(180, 83, 9, ${0.75 * intensity})`);
        ctx.fillStyle = waterGrad;
        ctx.fillRect(0, cy - sluiceH * 0.4, W, sluiceH * 0.8);
    });

    // 89. Sternwheeler Riverboat Paddlewheel
    reg(['ww_riverboat_wheel', 'item_89', 'ww_sternwheeler_paddle'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.45;
        const rot = time * 5 * speed;
        // Rotating wooden paddlewheel hub and slats
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(rot);
        const blades = 10;
        ctx.fillStyle = '#451a03';
        ctx.strokeStyle = '#78350f';
        ctx.lineWidth = 2;
        for (let b = 0; b < blades; b++) {
            ctx.rotate(Math.PI * 2 / blades);
            ctx.fillRect(-3, -32 * elScale, 6, 32 * elScale);
        }
        ctx.restore();
        // Churning frothing white spray & muddy Mississippi wake
        const foamGrad = ctx.createLinearGradient(cx, cy + 15 * elScale, cx, H);
        foamGrad.addColorStop(0, `rgba(255, 255, 255, ${0.85 * intensity})`);
        foamGrad.addColorStop(0.5, `rgba(180, 83, 9, ${0.65 * intensity})`);
        foamGrad.addColorStop(1, 'rgba(120, 53, 15, 0)');
        ctx.fillStyle = foamGrad;
        ctx.fillRect(cx - 35 * elScale, cy + 15 * elScale, 70 * elScale, H - (cy + 15 * elScale));
    });

    // 90. Brass Telegraph Ticker Paper
    reg(['ww_telegraph_ticker', 'item_90'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        // Brass telegraph housing on left
        ctx.fillStyle = '#b45309';
        ctx.fillRect(15, cy - 20 * elScale, 30 * elScale, 40 * elScale);
        ctx.fillStyle = '#fbbf24'; // Brass dome
        ctx.beginPath(); ctx.arc(30 * elScale, cy - 20 * elScale, 10 * elScale, Math.PI, 0); ctx.fill();
        // Moving paper tape ribbon feeding out
        ctx.fillStyle = '#fef3c7';
        ctx.fillRect(45 * elScale, cy - 6 * elScale, W - 45 * elScale, 12 * elScale);
        ctx.strokeStyle = '#d97706';
        ctx.lineWidth = 1;
        ctx.strokeRect(45 * elScale, cy - 6 * elScale, W - 45 * elScale, 12 * elScale);
        // Morse code dashes and dots
        const tapeOffset = (time * 65 * speed) % 24;
        ctx.fillStyle = '#1c1917';
        for (let x = 50 * elScale - tapeOffset; x < W; x += 18) {
            ctx.fillRect(x, cy - 2, (x % 36 === 0 ? 8 : 3), 4);
        }
    });

    // 91. Sputtering Dynamite Fuse
    reg(['ww_dynamite_fuse', 'item_91'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        // Red dynamite sticks on right
        ctx.fillStyle = '#dc2626';
        ctx.fillRect(W - 45 * elScale, cy - 14 * elScale, 40 * elScale, 28 * elScale);
        ctx.fillStyle = '#1c1917'; // TNT label
        ctx.font = `bold ${Math.round(10 * elScale)}px sans-serif`;
        ctx.fillText('TNT', W - 35 * elScale, cy + 4 * elScale);
        // Rapidly burning fuse line
        const fuseBurnX = ((time * 50 * speed) % (W - 55 * elScale));
        ctx.strokeStyle = '#d97706'; // Twisted hemp
        ctx.lineWidth = 2.5;
        ctx.beginPath(); ctx.moveTo(fuseBurnX, cy); ctx.lineTo(W - 45 * elScale, cy); ctx.stroke();
        // Violent spitting gunpowder spark at fuse burn point
        FX.drawRadialGlow(ctx, fuseBurnX, cy, 2, 22 * elScale, `rgba(255, 255, 255, ${0.98 * intensity})`, 'rgba(234, 88, 12, 0)');
        for (let s = 0; s < 6; s++) {
            const sAng = s * 1.05 + time * 12;
            ctx.fillStyle = '#fbbf24';
            ctx.fillRect(fuseBurnX + Math.cos(sAng) * 12, cy + Math.sin(sAng) * 12, 2, 2);
        }
    });

    // 92. Translucent Phantom Ghost-Train
    reg(['ww_ghost_train', 'item_92', 'ww_phantom_train'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        const trainX = ((time * 180 * speed) % (W + 200)) - 100;
        ctx.save();
        ctx.translate(trainX, cy);
        // Ethereal ghostly blue-green locomotive silhouette
        ctx.fillStyle = `rgba(167, 243, 208, ${0.35 * intensity})`;
        ctx.strokeStyle = `rgba(52, 211, 153, ${0.85 * intensity})`;
        ctx.lineWidth = 2;
        ctx.fillRect(-60 * elScale, -18 * elScale, 100 * elScale, 36 * elScale);
        ctx.strokeRect(-60 * elScale, -18 * elScale, 100 * elScale, 36 * elScale);
        // Spectral cowcatcher
        ctx.beginPath();
        ctx.moveTo(40 * elScale, -18 * elScale); ctx.lineTo(58 * elScale, 0); ctx.lineTo(40 * elScale, 18 * elScale);
        ctx.closePath();
        ctx.stroke();
        // Pale ghost headlight
        FX.drawRadialGlow(ctx, 42 * elScale, 0, 2, 35 * elScale, 'rgba(209, 250, 229, 0.95)', 'rgba(16, 185, 129, 0)');
        ctx.restore();
    });

    // 93. Spinning Desert Dust Devil
    reg(['ww_dust_devil', 'item_93'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5 + Math.sin(time * 1.2 * speed) * (W * 0.25);
        // Funnel vortex spinning in 360 degrees
        const rot = time * 14 * speed;
        for (let y = 10; y < H - 10; y += 8) {
            const widthAtY = (6 + (y / H) * 45) * elScale;
            const swirlX = cx + Math.sin(rot + y * 0.2) * (widthAtY * 0.5);
            ctx.fillStyle = `rgba(217, 119, 6, ${(0.35 + rough * 0.15) * intensity})`;
            ctx.beginPath();
            ctx.ellipse(swirlX, y, widthAtY * 0.5, 4, 0, 0, Math.PI * 2);
            ctx.fill();
        }
    });

    // 94. Ricocheting Lead Bullet Sparks
    reg(['ww_bullet_sparks', 'item_94', 'ww_ricocheting_bullets'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        // Granite boulder in center
        ctx.fillStyle = '#57534e';
        ctx.beginPath(); ctx.ellipse(cx, cy, 32 * elScale, 24 * elScale, 0, 0, Math.PI * 2); ctx.fill();
        // High-velocity bullet ping sparks
        if (Math.sin(time * 10 * speed) > 0.4) {
            const pingX = cx - 20 * elScale, pingY = cy - 8 * elScale;
            FX.drawRadialGlow(ctx, pingX, pingY, 2, 28 * elScale, '#ffffff', 'rgba(245, 158, 11, 0)');
            // Bullet ricochet trail
            ctx.strokeStyle = '#fef08a';
            ctx.lineWidth = 2.0;
            ctx.beginPath(); ctx.moveTo(0, cy + 25 * elScale); ctx.lineTo(pingX, pingY); ctx.lineTo(W, cy - 35 * elScale); ctx.stroke();
        }
    });

    // 95. Towering Haboob Sandstorm Wall
    reg(['ww_haboob_wall', 'item_95', 'ww_haboob_sandstorm'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        // Advancing wall of dense red-orange sandstorm
        const wallProgress = ((time * 85 * speed) % (W + 100)) - 50;
        const haboobGrad = ctx.createLinearGradient(wallProgress - 80, 0, wallProgress, 0);
        haboobGrad.addColorStop(0, `rgba(124, 45, 18, ${0.9 * intensity})`);
        haboobGrad.addColorStop(0.7, `rgba(180, 83, 9, ${0.85 * intensity})`);
        haboobGrad.addColorStop(1, 'rgba(217, 119, 6, 0)');
        ctx.fillStyle = haboobGrad;
        ctx.fillRect(0, 0, wallProgress, H);
        // Swirling dust billows on leading edge
        for (let b = 0; b < 6; b++) {
            const by = (b * (H / 6)) + 15;
            const bx = wallProgress - 20 + Math.sin(time * 3 + b) * 15;
            ctx.fillStyle = `rgba(234, 88, 12, ${0.45 * intensity})`;
            ctx.beginPath(); ctx.arc(bx, by, 30 * elScale, 0, Math.PI * 2); ctx.fill();
        }
    });

    // 96. Dry Bouncing Tumbleweeds
    reg(['ww_tumbleweed_street', 'item_96', 'ww_bouncing_tumbleweeds'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.65;
        const tx = ((time * 80 * speed) % (W + 60)) - 30;
        const bounce = Math.abs(Math.sin(time * 4 * speed)) * (26 * elScale);
        ctx.save();
        ctx.translate(tx, cy - bounce);
        ctx.rotate(time * 5);
        ctx.strokeStyle = '#78350f';
        ctx.lineWidth = 1.5;
        for (let a = 0; a < 8; a++) {
            ctx.beginPath(); ctx.arc(0, 0, 16 * elScale, a * 0.8, a * 0.8 + Math.PI * 0.6); ctx.stroke();
        }
        ctx.restore();
    });

    // 97. Clear Canyon River
    reg(['ww_canyon_river', 'item_97'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        const rH = 50 * elScale;
        // Deep turquoise canyon river
        const riverGrad = ctx.createLinearGradient(0, cy - rH * 0.5, 0, cy + rH * 0.5);
        riverGrad.addColorStop(0, '#065f46');
        riverGrad.addColorStop(0.5, `rgba(16, 185, 129, ${0.85 * intensity})`);
        riverGrad.addColorStop(1, '#064e3b');
        ctx.fillStyle = riverGrad;
        ctx.fillRect(0, cy - rH * 0.5, W, rH);
        // White water ripples
        ctx.strokeStyle = `rgba(209, 250, 229, ${0.65 * intensity})`;
        ctx.lineWidth = 1.2;
        for (let r = 0; r < 8; r++) {
            const rx = (r * (W / 8) + time * 65 * speed) % W;
            ctx.beginPath(); ctx.arc(rx, cy + Math.sin(r) * (rH * 0.25), 10, 0, Math.PI); ctx.stroke();
        }
    });

    // 98. Circling Turkey Vultures
    reg(['ww_circling_vultures', 'item_98'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        const vultures = 3;
        for (let v = 0; v < vultures; v++) {
            const ang = time * 0.65 * speed + (v * (Math.PI * 2 / vultures));
            const dist = (55 + v * 18) * elScale;
            const vx = cx + Math.cos(ang) * dist;
            const vy = cy + Math.sin(ang) * (dist * 0.6);
            // Moving soft ground shadow
            ctx.fillStyle = 'rgba(0, 0, 0, 0.22)';
            ctx.beginPath(); ctx.ellipse(vx + 12, vy + 35, 14 * elScale, 6 * elScale, ang, 0, Math.PI * 2); ctx.fill();
            // Black bird silhouette with broad wings & finger feathers
            ctx.save();
            ctx.translate(vx, vy);
            ctx.rotate(ang + Math.PI * 0.5);
            ctx.fillStyle = '#1c1917';
            ctx.beginPath();
            ctx.moveTo(0, 8 * elScale);
            ctx.lineTo(18 * elScale, -6 * elScale);
            ctx.lineTo(0, -2 * elScale);
            ctx.lineTo(-18 * elScale, -6 * elScale);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }
    });

    // 99. Undulating Diamondback Rattlesnake
    reg(['ww_slithering_snake', 'item_99', 'ww_slithering_rattlesnake'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        const segments = 18;
        const segLen = 6 * elScale;
        const headX = ((time * 45 * speed) % (W + 60)) - 30;
        // Undulating sinuous body segments
        for (let s = segments; s >= 0; s--) {
            const sx = headX - s * segLen;
            const sy = cy + Math.sin(time * 6 * speed - s * 0.4) * (14 * elScale);
            const r = (s === 0 ? 6 : (s === segments ? 3 : 5)) * elScale;
            // Diamondback scale colors
            ctx.fillStyle = (s % 2 === 0) ? '#78350f' : '#d97706';
            ctx.beginPath(); ctx.arc(sx, sy, r, 0, Math.PI * 2); ctx.fill();
        }
        // Flicking forked red tongue at head
        if (Math.sin(time * 12) > 0.4) {
            ctx.strokeStyle = '#dc2626';
            ctx.lineWidth = 1.2;
            const hy = cy + Math.sin(time * 6 * speed) * (14 * elScale);
            ctx.beginPath(); ctx.moveTo(headX + 6 * elScale, hy); ctx.lineTo(headX + 14 * elScale, hy - 3);
            ctx.moveTo(headX + 6 * elScale, hy); ctx.lineTo(headX + 14 * elScale, hy + 3);
            ctx.stroke();
        }
    });

    // 100. Desert Grit Wind Gusts
    reg(['ww_boardwalk_grit', 'item_100', 'ww_desert_grit_wind'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        // Red dust particles blowing across boardwalk
        const motes = Math.round(35 + rough * 50);
        ctx.fillStyle = `rgba(217, 119, 6, ${0.65 * intensity})`;
        for (let m = 0; m < motes; m++) {
            const mx = (FX.hash(m * 17) * W + time * 320 * speed) % (W + 40) - 20;
            const my = (FX.hash(m * 37) * H) + Math.sin(time * 4 + m) * 4;
            ctx.fillRect(mx, my, 2.5, 1.2);
        }
    });

    // =========================================================================
    // B. ANIMATED TEXTURES & AREA-FILLS (101 - 125)
    // =========================================================================

    // 101. Dappled Afternoon Sunlight Through Cottonwoods
    reg(['ww_cottonwood_sun', 'item_101', 'ww_dappled_cottonwoods'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        // Shaded ground base
        ctx.fillStyle = '#3f2c1d';
        ctx.fillRect(0, 0, W, H);
        // Dappled golden sunlight patches moving gently in breeze
        const patches = Math.round(18 + rough * 24);
        for (let p = 0; p < patches; p++) {
            const px = (FX.hash(p * 13) * W) + Math.sin(time * 1.5 * speed + p) * 12;
            const py = (FX.hash(p * 29) * H) + Math.cos(time * 1.2 * speed + p) * 10;
            const pr = (14 + (p % 4) * 6) * elScale;
            FX.drawRadialGlow(ctx, px, py, 1, pr, `rgba(254, 240, 138, ${0.45 * intensity})`, 'rgba(254, 240, 138, 0)');
        }
    });

    // 102. Sickly Green Moonlight on Boot-Hill
    reg(['ww_boothill_moon', 'item_102', 'ww_green_boothill_moon'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        // Cursed cemetery earth
        ctx.fillStyle = '#062c1e';
        ctx.fillRect(0, 0, W, H);
        // Eerie pale green lunar wash
        const moonGrad = ctx.createRadialGradient(W * 0.5, H * 0.4, 10, W * 0.5, H * 0.4, Math.max(W, H) * 0.65);
        moonGrad.addColorStop(0, `rgba(167, 243, 208, ${0.45 * intensity})`);
        moonGrad.addColorStop(0.6, `rgba(52, 211, 153, ${0.25 * intensity})`);
        moonGrad.addColorStop(1, 'rgba(6, 78, 59, 0)');
        ctx.fillStyle = moonGrad;
        ctx.fillRect(0, 0, W, H);
        // Wooden grave markers / crosses
        const graves = 5;
        for (let g = 0; g < graves; g++) {
            const gx = (g + 0.5) * (W / graves);
            const gy = H * 0.55 + (g % 2) * 20;
            ctx.fillStyle = '#1c1917';
            ctx.fillRect(gx - 3, gy - 20 * elScale, 6, 24 * elScale);
            ctx.fillRect(gx - 10 * elScale, gy - 14 * elScale, 20 * elScale, 5);
        }
    });

    // 103. Amber Saloon Window Light on Mud Puddles
    reg(['ww_saloon_puddle_light', 'item_103', 'ww_saloon_puddle_glow'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        // Muddy frontier main street
        ctx.fillStyle = '#29180c';
        ctx.fillRect(0, 0, W, H);
        // Warm flickering amber window light trapezoid
        const flick = 0.8 + 0.2 * Math.sin(time * 6 * speed);
        const winGrad = ctx.createLinearGradient(0, 0, W * 0.8, H);
        winGrad.addColorStop(0, `rgba(251, 191, 36, ${0.65 * flick * intensity})`);
        winGrad.addColorStop(1, 'rgba(180, 83, 9, 0)');
        ctx.fillStyle = winGrad;
        ctx.beginPath();
        ctx.moveTo(0, 0); ctx.lineTo(W * 0.45, 0); ctx.lineTo(W * 0.8, H); ctx.lineTo(0, H);
        ctx.closePath();
        ctx.fill();
        // Mud puddle reflecting window
        const px = W * 0.45, py = H * 0.55;
        ctx.fillStyle = `rgba(254, 215, 170, ${0.45 * flick * intensity})`;
        ctx.beginPath(); ctx.ellipse(px, py, 35 * elScale, 18 * elScale, 0.2, 0, Math.PI * 2); ctx.fill();
    });

    // 104. White Salt Flat Heat Shimmer
    reg(['ww_saltflat_shimmer', 'item_104', 'ww_saltflat_heat_shimmer'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        // Bleached white alkaline salt flat
        ctx.fillStyle = '#f8fafc';
        ctx.fillRect(0, 0, W, H);
        // Cracked mud hex lines
        ctx.strokeStyle = '#cbd5e1';
        ctx.lineWidth = 1.2;
        for (let x = 0; x < W; x += 30) {
            for (let y = 0; y < H; y += 30) { ctx.strokeRect(x, y, 30, 30); }
        }
        // Blinding heat shimmer convection waves
        ctx.fillStyle = `rgba(255, 255, 255, ${0.35 * intensity})`;
        for (let y = 10; y < H; y += 18) {
            const waveX = Math.sin(time * 8 * speed + y) * 8;
            ctx.fillRect(waveX, y, W, 3);
        }
    });

    // 105. Prairie Sheet Lightning
    reg(['ww_prairie_lightning', 'item_105', 'ww_sheet_lightning_prairie'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        // Pitch-black thunderstorm prairie
        ctx.fillStyle = '#090d16';
        ctx.fillRect(0, 0, W, H);
        // Intermittent violent sheet lightning flash
        const isFlash = (Math.sin(time * 3 * speed) > 0.85);
        if (isFlash) {
            ctx.fillStyle = `rgba(224, 242, 254, ${0.85 * intensity})`;
            ctx.fillRect(0, 0, W, H);
            // Silhouette of prairie grass horizon
            ctx.fillStyle = '#020617';
            ctx.fillRect(0, H * 0.75, W, H * 0.25);
        }
    });

    // 106. Churning Quicksand Pit
    reg(['ww_quicksand_wash', 'item_106', 'ww_quicksand_pit'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        // Quicksand circular pit
        const sandGrad = ctx.createRadialGradient(cx, cy, 5, cx, cy, Math.min(W, H) * 0.45);
        sandGrad.addColorStop(0, '#78350f');
        sandGrad.addColorStop(0.7, '#92400e');
        sandGrad.addColorStop(1, '#451a03');
        ctx.fillStyle = sandGrad;
        ctx.beginPath(); ctx.arc(cx, cy, Math.min(W, H) * 0.45, 0, Math.PI * 2); ctx.fill();
        // Slow churning vortex swirl
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(time * 0.8 * speed);
        ctx.strokeStyle = `rgba(254, 215, 170, ${0.45 * intensity})`;
        ctx.lineWidth = 2;
        for (let a = 0; a < 4; a++) {
            ctx.beginPath();
            ctx.arc(0, 0, (15 + a * 12) * elScale, a * 1.5, a * 1.5 + Math.PI * 0.8);
            ctx.stroke();
        }
        ctx.restore();
    });

    // 107. Bubbling Crude Oil Gusher Pool
    reg(['ww_crude_oil_gusher', 'item_107', 'ww_bubbling_crude_oil'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        // Thick viscous black crude oil
        ctx.fillStyle = '#09090b';
        ctx.fillRect(0, 0, W, H);
        // Glossy iridescent reflections
        const oilGrad = ctx.createLinearGradient(0, 0, W, H);
        oilGrad.addColorStop(0, `rgba(161, 98, 7, ${0.25 * intensity})`);
        oilGrad.addColorStop(0.5, `rgba(59, 130, 246, ${0.25 * intensity})`);
        oilGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = oilGrad;
        ctx.fillRect(0, 0, W, H);
        // Sluggish popping oil bubbles
        const bubbles = Math.round(6 + rough * 10);
        for (let b = 0; b < bubbles; b++) {
            const bx = FX.hash(b * 19) * W;
            const by = FX.hash(b * 37) * H;
            const phase = (time * 1.8 * speed + b * 0.3) % 1.0;
            const br = Math.sin(phase * Math.PI) * 12 * elScale;
            if (br > 0) {
                ctx.fillStyle = '#27272a';
                ctx.beginPath(); ctx.arc(bx, by, br, 0, Math.PI * 2); ctx.fill();
                ctx.strokeStyle = '#52525b';
                ctx.lineWidth = 1.2;
                ctx.stroke();
            }
        }
    });

    // 108. Fast-Moving Prairie Brushfire
    reg(['ww_prairie_brushfire', 'item_108'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        // Burnt blackened ash ground
        ctx.fillStyle = '#1c1917';
        ctx.fillRect(0, 0, W, H);
        // Advancing wall of brush flames
        const fireX = ((time * 120 * speed) % (W + 80)) - 40;
        const flames = 12;
        for (let f = 0; f < flames; f++) {
            const fy = f * (H / flames) + 10;
            const flick = Math.sin(time * 12 + f) * 8;
            FX.drawRadialGlow(ctx, fireX + flick, fy, 2, 28 * elScale, `rgba(255, 237, 213, ${0.95 * intensity})`, 'rgba(234, 88, 12, 0)');
        }
        // Billowing white-gray grass smoke
        for (let s = 0; s < 8; s++) {
            const sx = fireX - 25 - (s * 18);
            const sy = (s * (H / 8)) + Math.sin(time * 2 + s) * 15;
            ctx.fillStyle = `rgba(203, 213, 225, ${(0.4 - s * 0.04) * intensity})`;
            ctx.beginPath(); ctx.arc(sx, sy, 22 * elScale, 0, Math.PI * 2); ctx.fill();
        }
    });

    // 109. Canyon Whitewater Rapids
    reg(['ww_canyon_rapids', 'item_109', 'ww_whitewater_rapids'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        // Deep turquoise surging rapids
        ctx.fillStyle = '#0d9488';
        ctx.fillRect(0, 0, W, H);
        // Boulders in rapids
        const rocks = 4;
        for (let r = 0; r < rocks; r++) {
            const rx = (r + 0.5) * (W / rocks);
            const ry = H * 0.5 + Math.sin(r * 3) * (H * 0.2);
            ctx.fillStyle = '#44403c';
            ctx.beginPath(); ctx.arc(rx, ry, 16 * elScale, 0, Math.PI * 2); ctx.fill();
            // Violent white water frothing wakes around boulders
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.85 * intensity})`;
            ctx.lineWidth = 3;
            ctx.beginPath(); ctx.arc(rx, ry, 22 * elScale, -Math.PI * 0.4, Math.PI * 0.4); ctx.stroke();
        }
    });

    // 110. Cursed Black Ichor Between Saloon Floorboards
    reg(['ww_ghosttown_ichor', 'item_110', 'ww_cursed_black_ichor'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        // Wooden planks
        ctx.fillStyle = '#573318';
        ctx.fillRect(0, 0, W, H);
        // Black ichor oozing out of floorboard cracks
        ctx.fillStyle = '#050505';
        for (let y = 18; y < H; y += 28) {
            ctx.fillRect(0, y - 4, W, 8);
            // Pulsing tendril bubbles along the seams
            for (let x = 20; x < W; x += 45) {
                const pulse = Math.sin(time * 3 * speed + x) * 4;
                ctx.beginPath(); ctx.arc(x, y, 6 * elScale + pulse, 0, Math.PI * 2); ctx.fill();
            }
        }
    });

    // 111. Golden Wheat Fields Swaying
    reg(['ww_wheat_field', 'item_111', 'ww_golden_wheat_waves'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        // Rich amber golden field
        ctx.fillStyle = '#d97706';
        ctx.fillRect(0, 0, W, H);
        // Wind wave ripples across wheat
        const wave = Math.sin(time * 2.2 * speed);
        for (let x = 0; x < W; x += 15) {
            const tilt = Math.sin(time * 3 * speed + x * 0.08) * 8;
            ctx.strokeStyle = `rgba(254, 240, 138, ${0.75 * intensity})`;
            ctx.lineWidth = 1.5;
            for (let y = 10; y < H; y += 22) {
                ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + tilt, y - 14 * elScale); ctx.stroke();
            }
        }
    });

    // 112. Tall Buffalo Grass Waves
    reg(['ww_buffalo_grass', 'item_112', 'ww_buffalo_grass_waves'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#65a30d';
        ctx.fillRect(0, 0, W, H);
        // Ocean-like rolling wind ripples
        for (let x = 0; x < W; x += 18) {
            const tilt = Math.sin(time * 2.5 * speed + x * 0.06) * 10;
            ctx.strokeStyle = `rgba(190, 242, 100, ${0.75 * intensity})`;
            ctx.lineWidth = 2;
            for (let y = 12; y < H; y += 26) {
                ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x + tilt, y - 16 * elScale); ctx.stroke();
            }
        }
    });

    // 113. Crushed Silver Mine Tailings
    reg(['ww_rope_bridge', 'item_113', 'ww_silver_mine_tailings'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#475569';
        ctx.fillRect(0, 0, W, H);
        // Sliding gravel texture
        const pebbles = Math.round(30 + rough * 40);
        ctx.fillStyle = '#94a3b8';
        for (let p = 0; p < pebbles; p++) {
            const px = FX.hash(p * 17) * W;
            const py = (FX.hash(p * 31) * H + time * 15 * speed) % H;
            ctx.fillRect(px, py, 4 * elScale, 4 * elScale);
        }
    });

    // 114. Slaughterhouse Blood Drainage Slats
    reg(['ww_mineshaft_timbers', 'item_114', 'ww_slaughterhouse_blood_drain'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#291812';
        ctx.fillRect(0, 0, W, H);
        // Thick crimson slaughterhouse blood draining between slats
        ctx.fillStyle = `rgba(153, 27, 27, ${0.9 * intensity})`;
        for (let y = 14; y < H; y += 24) {
            ctx.fillRect(0, y, W, 6);
            // Thick dripping clots
            for (let x = 30; x < W; x += 60) {
                ctx.beginPath(); ctx.arc(x, y + 3, 5 * elScale, 0, Math.PI * 2); ctx.fill();
            }
        }
    });

    // 115. Stacked Whiskey Barrels with Fumes
    reg(['ww_muddy_corral', 'item_115', 'ww_whiskey_barrel_stack'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        // Stack of oak barrels
        const barrels = 4;
        const bW = W / barrels;
        for (let b = 0; b < barrels; b++) {
            const bx = b * bW + 4;
            ctx.fillStyle = '#78350f';
            ctx.fillRect(bx, 10, bW - 8, H - 20);
            ctx.strokeStyle = '#1c1917'; // Iron hoops
            ctx.lineWidth = 2.5;
            ctx.strokeRect(bx, 10, bW - 8, H - 20);
            ctx.beginPath(); ctx.moveTo(bx, H * 0.35); ctx.lineTo(bx + bW - 8, H * 0.35); ctx.stroke();
            ctx.beginPath(); ctx.moveTo(bx, H * 0.65); ctx.lineTo(bx + bW - 8, H * 0.65); ctx.stroke();
            // Leaking amber whiskey puddle & fumes
            FX.drawRadialGlow(ctx, bx + bW * 0.5, H - 12, 1, 15 * elScale, `rgba(245, 158, 11, ${0.5 * intensity})`, 'rgba(245, 158, 11, 0)');
        }
    });

    // 116. Cardsharp Smoke Haze
    reg(['ww_ghostrock_crater', 'item_116', 'ww_cardsharp_smoke_haze'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        // Saloon poker den warm amber ambience
        ctx.fillStyle = 'rgba(69, 26, 3, 0.4)';
        ctx.fillRect(0, 0, W, H);
        // Swirling blue-white tobacco cigar smoke layers
        for (let s = 0; s < 5; s++) {
            const sy = H * (0.2 + s * 0.16);
            const waveX = Math.sin(time * 1.5 * speed + s) * 20;
            ctx.fillStyle = `rgba(148, 163, 184, ${(0.25 + rough * 0.1) * intensity})`;
            ctx.fillRect(waveX, sy, W, 14 * elScale);
        }
    });

    // 117. Locomotive Soot Plume
    reg(['ww_gunsmoke_haze', 'item_117', 'ww_locomotive_soot_plume'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const plumes = Math.round(12 + rough * 18);
        for (let p = 0; p < plumes; p++) {
            const px = (FX.hash(p * 19) * W + time * 60 * speed) % (W + 60) - 30;
            const py = (FX.hash(p * 37) * H) + Math.sin(time * 2 + p) * 12;
            ctx.fillStyle = `rgba(15, 23, 42, ${(0.45 - (p % 4) * 0.08) * intensity})`;
            ctx.beginPath(); ctx.arc(px, py, (20 + (p % 3) * 8) * elScale, 0, Math.PI * 2); ctx.fill();
        }
    });

    // 118. White Alkali Dust Eddies
    reg(['ww_locust_swarm', 'item_118', 'ww_alkali_dust_eddy'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        const rot = time * 2.5 * speed;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(rot);
        ctx.strokeStyle = `rgba(241, 245, 249, ${0.45 * intensity})`;
        ctx.lineWidth = 1.5;
        for (let a = 0; a < 5; a++) {
            ctx.beginPath();
            ctx.arc(0, 0, (14 + a * 12) * elScale, a * 1.2, a * 1.2 + Math.PI * 0.6);
            ctx.stroke();
        }
        ctx.restore();
    });

    // 119. Translucent Green Ectoplasmic Saloon Floor
    reg(['ww_shifting_dunes', 'item_119', 'ww_ectoplasm_saloon_floor'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#29180c';
        ctx.fillRect(0, 0, W, H);
        // Pulsing green ectoplasm pool
        const ectoGrad = ctx.createRadialGradient(W * 0.5, H * 0.5, 10, W * 0.5, H * 0.5, Math.min(W, H) * 0.5);
        ectoGrad.addColorStop(0, `rgba(52, 211, 153, ${0.75 * intensity})`);
        ectoGrad.addColorStop(1, 'rgba(6, 78, 59, 0)');
        ctx.fillStyle = ectoGrad;
        ctx.fillRect(0, 0, W, H);
    });

    // 120. Ghost Stampede Spectral Dust
    reg(['ww_blood_mist', 'item_120', 'ww_ghost_stampede_dust'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const dusts = 10;
        for (let d = 0; d < dusts; d++) {
            const dx = ((d * (W / dusts) + time * 140 * speed) % (W + 60)) - 30;
            const dy = H * 0.5 + Math.sin(time * 3 + d) * 18;
            ctx.fillStyle = `rgba(167, 243, 208, ${0.35 * intensity})`;
            ctx.beginPath(); ctx.arc(dx, dy, (22 + d * 4) * elScale, 0, Math.PI * 2); ctx.fill();
        }
    });

    // 121. Blinding White Desert Sun Glare
    reg(['ww_mesa_wind', 'item_121', 'ww_desert_sun_glare'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#ca8a04';
        ctx.fillRect(0, 0, W, H);
        // Blinding white sun glare core
        FX.drawRadialGlow(ctx, W * 0.5, H * 0.3, 10, Math.max(W, H) * 0.75, `rgba(255, 255, 255, ${0.75 * intensity})`, 'rgba(254, 240, 138, 0)');
    });

    // 122. Prairie Grasshopper / Locust Swarm
    reg(['ww_shallow_creek', 'item_122', 'ww_prairie_grasshopper_swarm'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const locusts = Math.round(35 + rough * 50);
        ctx.fillStyle = '#65a30d';
        for (let l = 0; l < locusts; l++) {
            const lx = (FX.hash(l * 17) * W + time * 75 * speed) % W;
            const ly = (FX.hash(l * 31) * H) + Math.abs(Math.sin(time * 8 + l)) * 14;
            ctx.fillRect(lx, ly, 3 * elScale, 1.5 * elScale);
        }
    });

    // 123. Creekbed Driftwood Bobbing
    reg(['ww_prairie_rain', 'item_123', 'ww_creekbed_driftwood'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        // Murky water
        ctx.fillStyle = '#065f46';
        ctx.fillRect(0, 0, W, H);
        // Bobbing driftwood logs
        for (let d = 0; d < 3; d++) {
            const dx = (d + 0.5) * (W / 3);
            const dy = H * 0.5 + Math.sin(time * 2 * speed + d) * 8;
            ctx.fillStyle = '#451a03';
            ctx.beginPath(); ctx.ellipse(dx, dy, 24 * elScale, 6 * elScale, 0.15, 0, Math.PI * 2); ctx.fill();
        }
    });

    // 124. Locomotive Coal Sparks Drifting
    reg(['ww_mountain_snow', 'item_124', 'ww_locomotive_sparks_drift'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const sparks = Math.round(25 + rough * 35);
        for (let s = 0; s < sparks; s++) {
            const sx = (FX.hash(s * 19) * W + time * 180 * speed) % (W + 40) - 20;
            const sy = (FX.hash(s * 41) * H) + Math.sin(time * 4 + s) * 6;
            ctx.fillStyle = `rgba(251, 146, 60, ${0.9 * intensity})`;
            ctx.beginPath(); ctx.arc(sx, sy, 1.8, 0, Math.PI * 2); ctx.fill();
        }
    });

    // 125. Canyon Wind Gusts Dust Curtains
    reg(['ww_depot_leaves', 'item_125', 'ww_canyon_wind_gusts'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        for (let w = 0; w < 4; w++) {
            const wx = ((time * 220 * speed + w * (W * 0.35)) % (W + 100)) - 50;
            const windGrad = ctx.createLinearGradient(wx - 40, 0, wx + 40, 0);
            windGrad.addColorStop(0, 'rgba(217, 119, 6, 0)');
            windGrad.addColorStop(0.5, `rgba(217, 119, 6, ${0.45 * intensity})`);
            windGrad.addColorStop(1, 'rgba(217, 119, 6, 0)');
            ctx.fillStyle = windGrad;
            ctx.fillRect(wx - 40, 0, 80, H);
        }
    });

    // =========================================================================
    // C. SPOT / SINGLE FOCAL OBJECTS (126 - 150)
    // =========================================================================

    // 126. Swaying Saloon Chandelier
    reg(['ww_trail_campfire', 'item_126', 'ww_swaying_saloon_chandelier'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.45;
        const sway = Math.sin(time * 2.5 * speed) * 0.35;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(sway);
        // Wrought-iron 8-lamp wheel
        ctx.strokeStyle = '#1c1917';
        ctx.lineWidth = 4 * elScale;
        ctx.beginPath(); ctx.arc(0, 0, 32 * elScale, 0, Math.PI * 2); ctx.stroke();
        // 8 kerosene lamps glowing on wheel rim
        for (let l = 0; l < 8; l++) {
            const ang = (Math.PI / 4) * l;
            const lx = Math.cos(ang) * 32 * elScale;
            const ly = Math.sin(ang) * 32 * elScale;
            FX.drawRadialGlow(ctx, lx, ly, 2, 22 * elScale, `rgba(254, 215, 170, ${0.95 * intensity})`, 'rgba(234, 88, 12, 0)');
        }
        ctx.restore();
    });

    // 127. Flickering Hearth Fireplace
    reg(['ww_porch_lantern', 'item_127', 'ww_flickering_hearth_fireplace'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.55;
        // Stone hearth firebox
        ctx.fillStyle = '#44403c';
        ctx.fillRect(cx - 30 * elScale, cy - 20 * elScale, 60 * elScale, 40 * elScale);
        ctx.fillStyle = '#1c1917';
        ctx.fillRect(cx - 24 * elScale, cy - 14 * elScale, 48 * elScale, 34 * elScale);
        // Roaring hearth fire
        FX.drawRadialGlow(ctx, cx, cy + 4 * elScale, 2, 45 * elScale, `rgba(255, 237, 213, ${0.95 * intensity})`, 'rgba(234, 88, 12, 0)');
    });

    // 128. Miner's Hissing Carbide Lamp
    reg(['ww_blacksmith_forge', 'item_128', 'ww_hissing_carbide_lamp'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.35, cy = H * 0.5;
        // Brass carbide canister
        ctx.fillStyle = '#b45309';
        ctx.fillRect(cx - 10 * elScale, cy - 15 * elScale, 20 * elScale, 30 * elScale);
        // Piercing white acetylene flame jet & reflector cone
        FX.drawVolumetricCone(ctx, cx + 10 * elScale, cy, 0, Math.max(W, H) * 0.85, 0.45, `rgba(255, 255, 255, ${0.95 * intensity})`, 'rgba(254, 240, 138, 0)');
    });

    // 129. Railroad Switch Stand Lantern
    reg(['ww_saloon_chandelier', 'item_129', 'ww_railroad_switch_lantern'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        // Iron switch stand post
        ctx.fillStyle = '#1c1917';
        ctx.fillRect(cx - 4 * elScale, cy - 25 * elScale, 8 * elScale, 50 * elScale);
        // Lantern head with rotating lens (Green safe / Red caution)
        const isGreen = (Math.sin(time * 1.5 * speed) > 0);
        const col = isGreen ? 'rgba(34, 197, 94, 0.95)' : 'rgba(239, 68, 68, 0.95)';
        FX.drawRadialGlow(ctx, cx, cy - 15 * elScale, 2, 28 * elScale, col, 'rgba(0, 0, 0, 0)');
    });

    // 130. Spooky Jack-o'-Lantern
    reg(['ww_crossing_signal', 'item_130', 'ww_spooky_jack_o_lantern'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        // Carved pumpkin body
        ctx.fillStyle = '#ea580c';
        ctx.beginPath(); ctx.ellipse(cx, cy, 26 * elScale, 22 * elScale, 0, 0, Math.PI * 2); ctx.fill();
        // Flickering candle glow inside carved face
        const flick = 0.8 + 0.2 * Math.sin(time * 14 * speed);
        ctx.fillStyle = `rgba(254, 240, 138, ${flick * intensity})`;
        // Triangular eyes & toothy grin
        ctx.beginPath();
        ctx.moveTo(cx - 10 * elScale, cy - 6 * elScale); ctx.lineTo(cx - 4 * elScale, cy - 6 * elScale); ctx.lineTo(cx - 7 * elScale, cy - 12 * elScale);
        ctx.moveTo(cx + 4 * elScale, cy - 6 * elScale); ctx.lineTo(cx + 10 * elScale, cy - 6 * elScale); ctx.lineTo(cx + 7 * elScale, cy - 12 * elScale);
        ctx.fill();
    });

    // 131. Sputtering Dynamite Bundle
    reg(['ww_dynamite_bundle', 'item_131', 'ww_sputtering_dynamite_bundle'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.55;
        // 3 red dynamite sticks bound in hemp
        ctx.fillStyle = '#dc2626';
        ctx.fillRect(cx - 18 * elScale, cy - 14 * elScale, 36 * elScale, 28 * elScale);
        ctx.fillStyle = '#1c1917'; // Twine
        ctx.fillRect(cx - 18 * elScale, cy - 4 * elScale, 36 * elScale, 8 * elScale);
        // Sputtering fuse spark
        const fx = cx, fy = cy - 25 * elScale;
        FX.drawRadialGlow(ctx, fx, fy, 2, 22 * elScale, '#ffffff', 'rgba(234, 88, 12, 0)');
    });

    // 132. Coiled Diamondback Rattlesnake
    reg(['ww_coiled_rattler', 'item_132', 'ww_coiled_rattlesnake_strike'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.55;
        // Coiled concentric coils
        ctx.strokeStyle = '#78350f';
        ctx.lineWidth = 7 * elScale;
        ctx.beginPath(); ctx.arc(cx, cy, 22 * elScale, 0, Math.PI * 2); ctx.stroke();
        // Raised striking head
        ctx.fillStyle = '#d97706';
        ctx.beginPath(); ctx.arc(cx, cy - 16 * elScale, 8 * elScale, 0, Math.PI * 2); ctx.fill();
        // Vibrating tail rattle with sound ripples
        const rx = cx + 22 * elScale, ry = cy - 10 * elScale;
        const ratVib = Math.sin(time * 35 * speed) * 3;
        ctx.fillStyle = '#fef08a';
        ctx.fillRect(rx + ratVib, ry, 6 * elScale, 10 * elScale);
    });

    // 133. Steam Boiler Overpressure Valve
    reg(['ww_beartrap', 'item_133', 'ww_steam_boiler_overpressure'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.65;
        // Boiler dome
        ctx.fillStyle = '#1c1917';
        ctx.beginPath(); ctx.arc(cx, cy, 32 * elScale, Math.PI, 0); ctx.fill();
        // Brass relief valve rattling
        const vHiss = (Math.sin(time * 8 * speed) > 0.4);
        ctx.fillStyle = '#b45309';
        ctx.fillRect(cx - 6 * elScale, cy - 40 * elScale, 12 * elScale, 16 * elScale);
        // High pressure conical steam jet
        if (vHiss) {
            FX.drawVolumetricCone(ctx, cx, cy - 40 * elScale, -Math.PI * 0.5, 55 * elScale, 0.45, `rgba(255, 255, 255, ${0.9 * intensity})`, 'rgba(241, 245, 249, 0)');
        }
    });

    // 134. Snapping Bear Trap
    reg(['ww_boiler_valve', 'item_134', 'ww_bear_trap_snapping'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        // Rusty iron trap base ring
        ctx.strokeStyle = '#44403c';
        ctx.lineWidth = 4 * elScale;
        ctx.beginPath(); ctx.arc(cx, cy, 26 * elScale, 0, Math.PI * 2); ctx.stroke();
        // Jagged saw-toothed jaws
        const isSnap = (Math.sin(time * 3 * speed) > 0.8);
        ctx.fillStyle = '#78716c';
        const jawOpen = isSnap ? 4 : 18;
        ctx.fillRect(cx - 24 * elScale, cy - jawOpen * elScale, 48 * elScale, 5 * elScale);
        ctx.fillRect(cx - 24 * elScale, cy + (jawOpen - 5) * elScale, 48 * elScale, 5 * elScale);
    });

    // 135. Derailed Handcar Friction Sparks
    reg(['ww_gallows_trapdoor', 'item_135', 'ww_derailed_handcar_sparks'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        // Overturned wooden handcar
        ctx.fillStyle = '#451a03';
        ctx.fillRect(cx - 25 * elScale, cy - 14 * elScale, 50 * elScale, 28 * elScale);
        // Spinning metal wheel throwing sparks
        const wx = cx + 18 * elScale, wy = cy + 12 * elScale;
        FX.drawRadialGlow(ctx, wx, wy, 1, 25 * elScale, '#ffffff', 'rgba(245, 158, 11, 0)');
    });

    // 136. Creaking Frontier Windpump
    reg(['ww_saloon_doors', 'item_136', 'ww_creaking_windpump'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.45;
        const rot = time * 2.2 * speed;
        // Timber tower lattice
        ctx.strokeStyle = '#451a03';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(cx - 22 * elScale, H); ctx.lineTo(cx, cy);
        ctx.moveTo(cx + 22 * elScale, H); ctx.lineTo(cx, cy);
        ctx.stroke();
        // Revolving 8-blade wooden fan
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(rot);
        ctx.fillStyle = '#78350f';
        for (let b = 0; b < 8; b++) {
            ctx.rotate(Math.PI / 4);
            ctx.fillRect(-3, -28 * elScale, 6, 28 * elScale);
        }
        ctx.restore();
    });

    // 137. Saloon Upright Piano Self-Playing
    reg(['ww_windmill_pump', 'item_137', 'ww_saloon_upright_piano'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        // Wooden piano cabinet
        ctx.fillStyle = '#29180c';
        ctx.fillRect(cx - 30 * elScale, cy - 25 * elScale, 60 * elScale, 50 * elScale);
        // Moving piano keys
        ctx.fillStyle = '#fef3c7';
        ctx.fillRect(cx - 26 * elScale, cy + 5 * elScale, 52 * elScale, 10 * elScale);
        ctx.fillStyle = '#1c1917';
        for (let k = 0; k < 6; k++) {
            const press = Math.sin(time * 8 * speed + k) * 2;
            ctx.fillRect(cx - 22 * elScale + k * (8 * elScale), cy + 5 * elScale + press, 5 * elScale, 6 * elScale);
        }
    });

    // 138. Copper Moonshine Still Coils
    reg(['ww_oil_derrick_pump', 'item_138', 'ww_whiskey_still_coils'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        // Copper pot still
        ctx.fillStyle = '#b45309';
        ctx.beginPath(); ctx.arc(cx - 15 * elScale, cy, 22 * elScale, 0, Math.PI * 2); ctx.fill();
        // Spiral copper worm condenser coil
        ctx.strokeStyle = '#d97706';
        ctx.lineWidth = 3.5;
        for (let c = 0; c < 4; c++) {
            ctx.strokeRect(cx + 12 * elScale, cy - 14 * elScale + c * (7 * elScale), 20 * elScale, 5 * elScale);
        }
        // Dripping distillate droplet
        ctx.fillStyle = `rgba(254, 215, 170, ${0.9 * intensity})`;
        ctx.beginPath(); ctx.arc(cx + 22 * elScale, cy + 22 * elScale, 2.5, 0, Math.PI * 2); ctx.fill();
    });

    // 139. Rusty Iron Jail Cell Door
    reg(['ww_player_piano', 'item_139', 'ww_iron_jail_cell_door'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        ctx.strokeStyle = '#44403c';
        ctx.lineWidth = 4 * elScale;
        ctx.strokeRect(cx - 25 * elScale, cy - 35 * elScale, 50 * elScale, 70 * elScale);
        for (let b = cx - 18 * elScale; b < cx + 25 * elScale; b += 8 * elScale) {
            ctx.beginPath(); ctx.moveTo(b, cy - 35 * elScale); ctx.lineTo(b, cy + 35 * elScale); ctx.stroke();
        }
    });

    // 140. Hanging Gallows Noose Swaying
    reg(['ww_hangmans_noose', 'item_140', 'ww_hanging_gallows_noose'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.3;
        const sway = Math.sin(time * 2 * speed) * 0.35;
        // Gallows wooden beam
        ctx.fillStyle = '#451a03';
        ctx.fillRect(cx - 35 * elScale, cy, 70 * elScale, 8 * elScale);
        // Swaying hemp rope noose
        ctx.save();
        ctx.translate(cx, cy + 8 * elScale);
        ctx.rotate(sway);
        ctx.strokeStyle = '#d97706';
        ctx.lineWidth = 2.5;
        ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, 30 * elScale); ctx.stroke();
        ctx.beginPath(); ctx.ellipse(0, 38 * elScale, 7 * elScale, 11 * elScale, 0, 0, Math.PI * 2); ctx.stroke();
        ctx.restore();
    });

    // 141. Shaman Smoke Pipe Coils
    reg(['ww_ghostrock_ore', 'item_141', 'ww_shaman_smoke_pipe'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.65;
        // Carved stone peace pipe
        ctx.fillStyle = '#78350f';
        ctx.fillRect(cx - 20 * elScale, cy, 40 * elScale, 6 * elScale);
        ctx.fillStyle = '#991b1b'; // Red pipestone bowl
        ctx.fillRect(cx + 12 * elScale, cy - 12 * elScale, 10 * elScale, 14 * elScale);
        // Swirling aromatic smoke rings
        for (let r = 0; r < 4; r++) {
            const ry = cy - 20 * elScale - ((time * 25 * speed + r * 15) % 45);
            const rx = cx + 17 * elScale + Math.sin(time * 2 + r) * 8;
            ctx.strokeStyle = `rgba(241, 245, 249, ${(0.6 - r * 0.12) * intensity})`;
            ctx.lineWidth = 1.5;
            ctx.beginPath(); ctx.ellipse(rx, ry, (6 + r * 3) * elScale, (3 + r * 1.5) * elScale, 0, 0, Math.PI * 2); ctx.stroke();
        }
    });

    // 142. Spectral Poker Game Floating Cards
    reg(['ww_cursed_pokerdeck', 'item_142', 'ww_spectral_poker_game'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        // Floating green spectral cards dealing themselves
        const cards = 5;
        for (let c = 0; c < cards; c++) {
            const ang = (Math.PI * 2 / cards) * c + time * speed;
            const dist = (22 + Math.sin(time * 3 + c) * 6) * elScale;
            ctx.save();
            ctx.translate(cx + Math.cos(ang) * dist, cy + Math.sin(ang) * dist);
            ctx.rotate(ang);
            ctx.fillStyle = `rgba(167, 243, 208, ${0.45 * intensity})`;
            ctx.strokeStyle = `rgba(52, 211, 153, ${0.9 * intensity})`;
            ctx.lineWidth = 1.5;
            ctx.fillRect(-8 * elScale, -12 * elScale, 16 * elScale, 24 * elScale);
            ctx.strokeRect(-8 * elScale, -12 * elScale, 16 * elScale, 24 * elScale);
            ctx.restore();
        }
    });

    // 143. Bubbling Occult Snake-Oil Bottle
    reg(['ww_medium_crystalball', 'item_143', 'ww_occult_medicine_bottle'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.55;
        // Glass medicine flask
        ctx.fillStyle = `rgba(168, 85, 247, ${0.85 * intensity})`;
        ctx.beginPath(); ctx.ellipse(cx, cy, 18 * elScale, 25 * elScale, 0, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = '#581c87';
        ctx.lineWidth = 2;
        ctx.stroke();
        // Bubbling violet elixir
        FX.drawRadialGlow(ctx, cx, cy, 2, 28 * elScale, `rgba(216, 180, 254, ${0.9 * intensity})`, 'rgba(147, 51, 234, 0)');
    });

    // 144. Glowing Red-Hot Demonic Brand
    reg(['ww_gatling_barrels', 'item_144', 'ww_demonic_brand_glow'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        // Scorched wooden plank
        ctx.fillStyle = '#451a03';
        ctx.fillRect(0, 0, W, H);
        // Incandescent glowing demonic branding iron head
        const brandHeat = 0.8 + 0.2 * Math.sin(time * 8 * speed);
        ctx.strokeStyle = `rgba(249, 115, 22, ${brandHeat * intensity})`;
        ctx.lineWidth = 4 * elScale;
        ctx.shadowColor = '#ea580c';
        ctx.shadowBlur = 14;
        ctx.strokeRect(cx - 18 * elScale, cy - 18 * elScale, 36 * elScale, 36 * elScale);
        ctx.beginPath(); ctx.moveTo(cx - 18 * elScale, cy - 18 * elScale); ctx.lineTo(cx + 18 * elScale, cy + 18 * elScale); ctx.stroke();
        ctx.shadowBlur = 0;
    });

    // 145. Mine Shaft Spirit Portal
    reg(['ww_geothermal_geyser', 'item_145', 'ww_spirit_portal_mine_shaft'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        // Mine shaft timber frame
        ctx.fillStyle = '#1c1917';
        ctx.fillRect(cx - 28 * elScale, cy - 35 * elScale, 56 * elScale, 70 * elScale);
        // Pulsing ethereal turquoise portal vortex inside
        FX.drawRadialGlow(ctx, cx, cy, 4, 32 * elScale, `rgba(45, 212, 191, ${0.95 * intensity})`, 'rgba(13, 148, 136, 0)');
    });

    // 146. Buzzard Perched on Wooden Cross
    reg(['ww_wanted_posters', 'item_146', 'ww_buzzard_wooden_cross'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.55;
        // Weathered wooden cemetery cross
        ctx.fillStyle = '#44403c';
        ctx.fillRect(cx - 4 * elScale, cy - 25 * elScale, 8 * elScale, 50 * elScale);
        ctx.fillRect(cx - 16 * elScale, cy - 15 * elScale, 32 * elScale, 8 * elScale);
        // Hunchbacked buzzard silhouette
        ctx.fillStyle = '#0f172a';
        ctx.beginPath(); ctx.ellipse(cx, cy - 32 * elScale, 8 * elScale, 11 * elScale, 0.2, 0, Math.PI * 2); ctx.fill();
        ctx.beginPath(); ctx.arc(cx - 6 * elScale, cy - 40 * elScale, 4 * elScale, 0, Math.PI * 2); ctx.fill();
    });

    // 147. Howling Coyote on Desert Ridge
    reg(['ww_hitching_mustang', 'item_147', 'ww_howling_coyote_ridge'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.55;
        // Sandstone crag ridge
        ctx.fillStyle = '#7c2d12';
        ctx.beginPath();
        ctx.moveTo(0, H); ctx.lineTo(cx + 20 * elScale, cy + 10 * elScale); ctx.lineTo(W, H);
        ctx.closePath();
        ctx.fill();
        // Coyote silhouette lifting head to howl
        ctx.fillStyle = '#1c1917';
        ctx.beginPath();
        ctx.ellipse(cx, cy, 14 * elScale, 9 * elScale, -0.2, 0, Math.PI * 2); // Body
        ctx.moveTo(cx - 8 * elScale, cy - 6 * elScale); ctx.lineTo(cx - 16 * elScale, cy - 18 * elScale); // Raised snout
        ctx.stroke();
    });

    // 148. Antique Pocket Watch Ticking
    reg(['ww_spitroast_rabbit', 'item_148', 'ww_pocket_watch_ticking'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        // Gold pocket watch casing
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath(); ctx.arc(cx, cy, 26 * elScale, 0, Math.PI * 2); ctx.fill();
        // White enamel dial face
        ctx.fillStyle = '#fef3c7';
        ctx.beginPath(); ctx.arc(cx, cy, 21 * elScale, 0, Math.PI * 2); ctx.fill();
        // Sweeping second hand
        const handAng = time * 6 * speed;
        ctx.strokeStyle = '#1c1917';
        ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + Math.cos(handAng) * 18 * elScale, cy + Math.sin(handAng) * 18 * elScale); ctx.stroke();
    });

    // 149. Gramophone Phonograph Horn Playing
    reg(['ww_creaking_shutter', 'item_149', 'ww_phonograph_horn_sound'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        // Wooden cabinet base
        ctx.fillStyle = '#451a03';
        ctx.fillRect(cx - 18 * elScale, cy + 6 * elScale, 36 * elScale, 20 * elScale);
        // Brass morning-glory flared horn
        ctx.fillStyle = '#d97706';
        ctx.beginPath();
        ctx.moveTo(cx, cy + 6 * elScale);
        ctx.lineTo(cx + 28 * elScale, cy - 22 * elScale);
        ctx.lineTo(cx - 14 * elScale, cy - 28 * elScale);
        ctx.closePath();
        ctx.fill();
        // Translucent acoustic sound rings emitting from horn
        for (let r = 1; r <= 3; r++) {
            const phase = (time * 2 * speed + r * 0.33) % 1.0;
            ctx.strokeStyle = `rgba(254, 240, 138, ${(1 - phase) * 0.75 * intensity})`;
            ctx.lineWidth = 1.5;
            ctx.beginPath(); ctx.arc(cx + 10 * elScale, cy - 25 * elScale, phase * 26 * elScale, -Math.PI * 0.7, -Math.PI * 0.1); ctx.stroke();
        }
    });

    // 150. Roast Jackrabbit on Campfire Spit
    reg(['ww_boot_hill_crow', 'item_150', 'ww_roasting_jackrabbit_spit'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.55;
        // Burning campfire bed below
        FX.drawRadialGlow(ctx, cx, cy + 12 * elScale, 2, 28 * elScale, `rgba(255, 237, 213, ${0.95 * intensity})`, 'rgba(234, 88, 12, 0)');
        // Wooden spit crossbar
        ctx.strokeStyle = '#451a03';
        ctx.lineWidth = 3 * elScale;
        ctx.beginPath(); ctx.moveTo(cx - 30 * elScale, cy); ctx.lineTo(cx + 30 * elScale, cy); ctx.stroke();
        // Rotating roast jackrabbit on spit
        const rot = time * 1.5 * speed;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(rot);
        ctx.fillStyle = '#78350f';
        ctx.beginPath(); ctx.ellipse(0, 0, 14 * elScale, 8 * elScale, 0, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
    });

})();
