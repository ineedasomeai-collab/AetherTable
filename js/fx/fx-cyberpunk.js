/**
 * AetherTable VTT - Cyberpunk & Dystopian Sci-Fi FX (75 Unique Elements)
 * Procedural Canvas Renderers for Elements 1 through 75.
 * Every element features bespoke geometry, distinct kinetic animation,
 * and dynamic integration with the Fractal / Detail slider.
 */
(function() {
    'use strict';
    const reg = window.VTT_FX_DISPATCHER ? window.VTT_FX_DISPATCHER.register : null;
    if (!reg) return;
    const FX = window.VTT_FX = window.FX = window.VTT_FX || {};
    const VTT_FX = FX;

    // =========================================================================
    // A. LINEAR MOTION (1 - 25)
    // =========================================================================

    // 1. Flying Car Headlight Beams
    reg(['cp_flying_headlights', 'item_1'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const sweep = Math.sin(time * 1.8 * speed) * 0.35;
        const beamLen = Math.max(W, H) * 0.95 * elScale;
        const cy = H * 0.5;
        // Rain road streaks modulated by fractal slider (transparent asphalt backdrop)
        const streaks = Math.round(12 + rough * 24);
        ctx.strokeStyle = `rgba(148, 163, 184, ${0.15 + rough * 0.15})`;
        ctx.lineWidth = 1;
        for (let i = 0; i < streaks; i++) {
            const sx = (FX.hash(i * 7 + Math.floor(time * 8)) * W);
            const sy = (FX.hash(i * 13) * H);
            ctx.beginPath();
            ctx.moveTo(sx, sy);
            ctx.lineTo(sx - 18, sy + 3);
            ctx.stroke();
        }
        // Vehicle chassis indicator
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(W * 0.05, cy - 18 * elScale, 40 * elScale, 36 * elScale);
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2;
        ctx.strokeRect(W * 0.05, cy - 18 * elScale, 40 * elScale, 36 * elScale);
        // Twin aerodynamic headlight cones
        FX.drawVolumetricCone(ctx, W * 0.05 + 40 * elScale, cy - 10 * elScale, sweep - 0.06, beamLen, 0.42, `rgba(240, 249, 255, ${0.85 * intensity})`, 'rgba(56, 189, 248, 0)');
        FX.drawVolumetricCone(ctx, W * 0.05 + 40 * elScale, cy + 10 * elScale, sweep + 0.06, beamLen, 0.42, `rgba(240, 249, 255, ${0.85 * intensity})`, 'rgba(56, 189, 248, 0)');
    });

    // 2. Police Spinner Lightbars
    reg(['cp_spinner_lightbar', 'item_2'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        const rot = time * 7.5 * speed;
        ctx.fillStyle = '#090d16';
        ctx.beginPath();
        ctx.roundRect ? ctx.roundRect(cx - 35 * elScale, cy - 16 * elScale, 70 * elScale, 32 * elScale, 8) : ctx.rect(cx - 35 * elScale, cy - 16 * elScale, 70 * elScale, 32 * elScale);
        ctx.fill();
        ctx.strokeStyle = '#1e293b';
        ctx.lineWidth = 2;
        ctx.stroke();
        const redBeam = Math.sin(rot);
        const blueBeam = Math.cos(rot);
        FX.drawVolumetricCone(ctx, cx - 18 * elScale, cy, rot, Math.max(W, H) * 0.85, 0.55, `rgba(239, 68, 68, ${Math.max(0, redBeam) * 0.9 * intensity})`, 'rgba(239, 68, 68, 0)');
        FX.drawVolumetricCone(ctx, cx + 18 * elScale, cy, rot + Math.PI, Math.max(W, H) * 0.85, 0.55, `rgba(59, 130, 246, ${Math.max(0, blueBeam) * 0.9 * intensity})`, 'rgba(59, 130, 246, 0)');
        FX.drawRadialGlow(ctx, cx - 18 * elScale, cy, 2, 28 * elScale, `rgba(255, 100, 100, ${Math.abs(redBeam) * intensity})`, 'rgba(239, 68, 68, 0)');
        FX.drawRadialGlow(ctx, cx + 18 * elScale, cy, 2, 28 * elScale, `rgba(147, 197, 253, ${Math.abs(blueBeam) * intensity})`, 'rgba(59, 130, 246, 0)');
    });

    // 3. Fiber-Optic Data Conduit
    reg(['cp_fiber_conduit', 'item_3'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        const conduitH = Math.max(24, 38 * elScale);
        // Modular mounting clips every 90px instead of opaque background bar
        for (let x = 30; x < W; x += 90) {
            ctx.fillStyle = 'rgba(71, 85, 105, 0.6)';
            ctx.fillRect(x - 4 * elScale, cy - conduitH * 0.45, 8 * elScale, conduitH * 0.9);
            ctx.fillStyle = 'rgba(148, 163, 184, 0.85)';
            ctx.fillRect(x - 2 * elScale, cy - conduitH * 0.45, 4 * elScale, 3 * elScale);
            ctx.fillRect(x - 2 * elScale, cy + conduitH * 0.45 - 3 * elScale, 4 * elScale, 3 * elScale);
        }
        const fiberCount = Math.round(3 + rough * 5);
        for (let f = 0; f < fiberCount; f++) {
            const fy = cy - conduitH * 0.35 + (conduitH * 0.7 / (fiberCount - 1 || 1)) * f;
            ctx.strokeStyle = (f % 2 === 0) ? `rgba(0, 255, 200, ${0.5 * intensity})` : `rgba(236, 72, 153, ${0.5 * intensity})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(0, fy);
            ctx.lineTo(W, fy);
            ctx.stroke();
            const pSpeed = (180 + f * 45) * speed;
            const px = (time * pSpeed) % (W + 60) - 30;
            const pLen = 25 + f * 8;
            ctx.fillStyle = (f % 2 === 0) ? `rgba(0, 255, 200, ${0.95 * intensity})` : `rgba(236, 72, 153, ${0.95 * intensity})`;
            ctx.shadowColor = (f % 2 === 0) ? '#00ffc8' : '#ec4899';
            ctx.shadowBlur = 10;
            ctx.fillRect(px, fy - 1.5, pLen, 3);
            ctx.shadowBlur = 0;
        }
    });

    // 4. Patrol Drone Searchlight
    reg(['cp_drone_searchlight', 'item_4'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const t = time * 0.9 * speed;
        const dx = W * (0.35 + 0.3 * Math.sin(t * 1.3));
        const dy = H * (0.35 + 0.2 * Math.cos(t * 1.7));
        const searchTargetX = W * (0.5 + 0.4 * Math.sin(t * 2.1));
        const searchTargetY = H * (0.6 + 0.25 * Math.cos(t * 1.5));
        const angle = Math.atan2(searchTargetY - dy, searchTargetX - dx);
        const dist = Math.hypot(searchTargetX - dx, searchTargetY - dy);
        FX.drawVolumetricCone(ctx, dx, dy, angle, dist * 1.25, 0.48, `rgba(255, 255, 255, ${0.75 * intensity})`, 'rgba(56, 189, 248, 0)');
        FX.drawRadialGlow(ctx, searchTargetX, searchTargetY, 4, 38 * elScale, `rgba(255, 255, 255, ${0.85 * intensity})`, 'rgba(56, 189, 248, 0)');
        ctx.save();
        ctx.translate(dx, dy);
        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.arc(0, 0, 14 * elScale, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2;
        ctx.stroke();
        FX.drawRadialGlow(ctx, 0, 0, 1, 10 * elScale, 'rgba(56, 189, 248, 0.9)', 'rgba(56, 189, 248, 0)');
        ctx.fillStyle = '#ef4444';
        ctx.beginPath();
        ctx.arc(Math.cos(angle) * 8 * elScale, Math.sin(angle) * 8 * elScale, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    });

    // 5. Elevated Monorail Window Lights
    reg(['cp_monorail_blur', 'item_5'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        // Twin magnetic guideway lines with blue glow on transparent ground
        ctx.strokeStyle = `rgba(56, 189, 248, ${0.4 * intensity})`;
        ctx.lineWidth = 2 * elScale;
        ctx.beginPath();
        ctx.moveTo(0, cy - 6 * elScale); ctx.lineTo(W, cy - 6 * elScale);
        ctx.moveTo(0, cy + 6 * elScale); ctx.lineTo(W, cy + 6 * elScale);
        ctx.stroke();
        const tLen = W * 0.65;
        const tX = ((time * 380 * speed) % (W + tLen * 1.5)) - tLen;
        const blurGrad = ctx.createLinearGradient(tX, 0, tX + tLen, 0);
        blurGrad.addColorStop(0, 'rgba(56, 189, 248, 0)');
        blurGrad.addColorStop(0.3, `rgba(56, 189, 248, ${0.4 * intensity})`);
        blurGrad.addColorStop(0.85, `rgba(240, 249, 255, ${0.9 * intensity})`);
        blurGrad.addColorStop(1, '#ffffff');
        ctx.fillStyle = blurGrad;
        ctx.fillRect(tX, cy - 14 * elScale, tLen, 28 * elScale);
        const windows = 10;
        for (let w = 0; w < windows; w++) {
            const wx = tX + (tLen / windows) * w + 6;
            ctx.fillStyle = `rgba(254, 240, 138, ${0.95 * intensity})`;
            ctx.fillRect(wx, cy - 8 * elScale, (tLen / windows) - 10, 16 * elScale);
        }
    });

    // 6. Security Laser Grid
    reg(['cp_laser_grid', 'item_6'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const numBeams = Math.round(5 + rough * 6);
        const sweepPhase = Math.sin(time * 2.2 * speed);
        ctx.lineWidth = 2.0;
        ctx.shadowColor = '#ef4444';
        ctx.shadowBlur = 10;
        for (let i = 0; i < numBeams; i++) {
            const startY = (H / (numBeams + 1)) * (i + 1);
            const endY = startY + sweepPhase * (H * 0.25);
            ctx.strokeStyle = `rgba(239, 68, 68, ${0.85 * intensity})`;
            ctx.beginPath();
            ctx.moveTo(0, startY);
            ctx.lineTo(W, endY);
            ctx.stroke();
            FX.drawRadialGlow(ctx, 4, startY, 1, 8, 'rgba(255, 200, 200, 0.95)', 'rgba(239, 68, 68, 0)');
            FX.drawRadialGlow(ctx, W - 4, endY, 1, 8, 'rgba(255, 200, 200, 0.95)', 'rgba(239, 68, 68, 0)');
        }
        ctx.shadowBlur = 0;
    });

    // 7. High-Speed Mag-Lev Subway (Top-Down Battlemap View)
    reg(['cp_maglev_subway', 'item_7'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        const trackW = 56 * elScale;
        ctx.save();

        // Twin magnetic levitation guideway rails
        ctx.strokeStyle = 'rgba(0, 255, 200, ' + (0.8 * intensity) + ')';
        ctx.lineWidth = 2.5 * elScale;
        ctx.beginPath();
        ctx.moveTo(0, cy - trackW * 0.5); ctx.lineTo(W, cy - trackW * 0.5);
        ctx.moveTo(0, cy + trackW * 0.5); ctx.lineTo(W, cy + trackW * 0.5);
        ctx.stroke();

        // Cross-track structural ties & electromagnetic induction coils
        const tieSpacing = 30 * elScale;
        ctx.strokeStyle = 'rgba(71, 85, 105, 0.5)';
        ctx.lineWidth = 2 * elScale;
        for (let x = 0; x < W; x += tieSpacing) {
            ctx.beginPath();
            ctx.moveTo(x, cy - trackW * 0.45); ctx.lineTo(x, cy + trackW * 0.45);
            ctx.stroke();
        }

        // Mag-Lev train hurtling along track (Top-Down overhead roof view)
        const trainLen = Math.min(W * 0.75, 420 * elScale);
        const trainHalfW = 20 * elScale;
        const trainX = ((time * 650 * speed) % (W + trainLen * 2)) - trainLen;

        // Train drop shadow onto track bed
        ctx.fillStyle = 'rgba(15, 23, 42, ' + (0.8 * intensity) + ')';
        ctx.fillRect(trainX, cy - trainHalfW + 6 * elScale, trainLen, trainHalfW * 2);

        // Aerodynamic bullet train roof seen from DIRECTLY ABOVE
        ctx.save();
        ctx.translate(trainX, cy);

        // Train body shell
        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.moveTo(trainLen, 0); // Pointed nose cone
        ctx.lineTo(trainLen - 35 * elScale, -trainHalfW);
        ctx.lineTo(0, -trainHalfW);
        ctx.lineTo(0, trainHalfW);
        ctx.lineTo(trainLen - 35 * elScale, trainHalfW);
        ctx.closePath();
        ctx.fill();

        // Neon cyan rim highlight / magnetic shielding glow
        ctx.strokeStyle = 'rgba(0, 255, 200, ' + (0.8 * intensity) + ')';
        ctx.lineWidth = 2 * elScale;
        ctx.stroke();

        // Tinted panoramic roof skylights & cabin windows
        ctx.fillStyle = 'rgba(254, 240, 138, ' + (0.8 * intensity) + ')';
        const winCount = 8;
        const winW = 16 * elScale;
        for (let w = 0; w < winCount; w++) {
            const wx = 20 * elScale + w * (winW + 12 * elScale);
            if (wx < trainLen - 50 * elScale) {
                ctx.fillRect(wx, -8 * elScale, winW, 16 * elScale);
            }
        }

        // Forward high-intensity headlights casting beam ahead
        const beamLen = 140 * elScale;
        const beamGrad = ctx.createRadialGradient(trainLen, 0, 5, trainLen + beamLen, 0, beamLen * 0.6);
        beamGrad.addColorStop(0, 'rgba(255, 255, 255, ' + (0.8 * intensity) + ')');
        beamGrad.addColorStop(0.3, 'rgba(0, 255, 200, ' + (0.8 * intensity) + ')');
        beamGrad.addColorStop(1, 'rgba(0, 255, 200, 0)');
        ctx.fillStyle = beamGrad;
        ctx.beginPath();
        ctx.moveTo(trainLen, 0);
        ctx.lineTo(trainLen + beamLen, -beamLen * 0.35);
        ctx.lineTo(trainLen + beamLen, beamLen * 0.35);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
        ctx.restore();
    });

    // 8. Chemical Runoff Culvert (Transparent Bio-Luminescent Sludge Stream)
    reg(['cp_chemical_culvert', 'item_8'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        const culvertW = Math.max(36, 50 * elScale);
        // Soft toxic fluid flow without solid opaque casing
        const chemGrad = ctx.createLinearGradient(0, cy - culvertW * 0.45, 0, cy + culvertW * 0.45);
        chemGrad.addColorStop(0, 'rgba(6, 78, 59, 0)');
        chemGrad.addColorStop(0.2, `rgba(6, 95, 70, ${0.55 * intensity})`);
        chemGrad.addColorStop(0.5, `rgba(16, 185, 129, ${0.85 * intensity})`);
        chemGrad.addColorStop(0.8, `rgba(6, 95, 70, ${0.55 * intensity})`);
        chemGrad.addColorStop(1, 'rgba(6, 78, 59, 0)');
        ctx.fillStyle = chemGrad;
        ctx.fillRect(0, cy - culvertW * 0.45, W, culvertW * 0.9);
        const ripples = 18;
        ctx.strokeStyle = `rgba(110, 231, 183, ${0.75 * intensity})`;
        ctx.lineWidth = 1.5;
        for (let r = 0; r < ripples; r++) {
            const rx = (r * (W / ripples) + time * 120 * speed) % W;
            const ry = cy + Math.sin(time * 3 + r * 1.5) * (culvertW * 0.25);
            ctx.beginPath();
            ctx.arc(rx, ry, 6 + (r % 4) * 2, 0, Math.PI);
            ctx.stroke();
        }
        for (let b = 0; b < 6; b++) {
            const bx = (FX.hash(b * 31 + Math.floor(time * 2)) * W);
            const by = cy + (FX.hash(b * 19) - 0.5) * culvertW * 0.6;
            FX.drawRadialGlow(ctx, bx, by, 1, 8 * (1 + rough * 0.5), 'rgba(209, 250, 229, 0.95)', 'rgba(16, 185, 129, 0)');
        }
    });

    // 9. Industrial Conveyor Belts (Scrap Smelter - Transparent Bed)
    reg(['cp_smelter_conveyor', 'item_9'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        const beltH = 46 * elScale;
        // Twin industrial guide rails
        ctx.strokeStyle = 'rgba(100, 116, 139, 0.6)';
        ctx.lineWidth = 2 * elScale;
        ctx.beginPath();
        ctx.moveTo(0, cy - beltH * 0.45); ctx.lineTo(W, cy - beltH * 0.45);
        ctx.moveTo(0, cy + beltH * 0.45); ctx.lineTo(W, cy + beltH * 0.45);
        ctx.stroke();
        const treadSpacing = 16;
        const offset = (time * 70 * speed) % treadSpacing;
        ctx.strokeStyle = 'rgba(51, 65, 85, 0.5)';
        ctx.lineWidth = 1.5;
        for (let x = -treadSpacing; x < W + treadSpacing; x += treadSpacing) {
            ctx.beginPath();
            ctx.moveTo(x + offset, cy - beltH * 0.4);
            ctx.lineTo(x + offset, cy + beltH * 0.4);
            ctx.stroke();
        }
        const chunks = 8;
        for (let c = 0; c < chunks; c++) {
            const cxChunk = ((c * (W / chunks) + time * 70 * speed) % (W + 40)) - 20;
            const cyChunk = cy + (FX.hash(c * 17) - 0.5) * (beltH * 0.4);
            const sz = (10 + (c % 3) * 4) * elScale;
            ctx.fillStyle = (c % 2 === 0) ? '#64748b' : '#94a3b8';
            ctx.beginPath();
            ctx.moveTo(cxChunk - sz * 0.5, cyChunk - sz * 0.4);
            ctx.lineTo(cxChunk + sz * 0.6, cyChunk - sz * 0.2);
            ctx.lineTo(cxChunk + sz * 0.4, cyChunk + sz * 0.5);
            ctx.lineTo(cxChunk - sz * 0.5, cyChunk + sz * 0.3);
            ctx.closePath();
            ctx.fill();
            ctx.strokeStyle = '#1e293b';
            ctx.lineWidth = 1;
            ctx.stroke();
        }
        const smelterGrad = ctx.createLinearGradient(W - 60, 0, W, 0);
        smelterGrad.addColorStop(0, 'rgba(249, 115, 22, 0)');
        smelterGrad.addColorStop(1, `rgba(249, 115, 22, ${0.75 * intensity})`);
        ctx.fillStyle = smelterGrad;
        ctx.fillRect(W - 60, cy - beltH * 0.7, 60, beltH * 1.4);
    });

    // 10. Armed Patrol Drones (Top-Down Overhead Battlemap View)
    reg(['cp_patrol_track', 'item_10'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        ctx.save();

        // Overhead suspended guide cable / perimeter rail
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 2 * elScale;
        ctx.beginPath();
        ctx.moveTo(0, cy); ctx.lineTo(W, cy);
        ctx.stroke();

        // Support pylons / sensor nodes along perimeter
        for (let x = 30; x < W; x += 60 * elScale) {
            ctx.fillStyle = '#1e293b';
            ctx.fillRect(x - 3 * elScale, cy - 8 * elScale, 6 * elScale, 16 * elScale);
            ctx.fillStyle = '#ef4444';
            ctx.beginPath();
            ctx.arc(x, cy, 1.8 * elScale, 0, Math.PI * 2);
            ctx.fill();
        }

        // Armed patrol drone gliding along track (Top-Down Quadcopter View)
        const droneX = ((time * 110 * speed) % (W + 100)) - 50;
        const bobY = cy + Math.sin(time * 3) * 4 * elScale;

        // Floor drop-shadow beneath drone (indicates flight altitude)
        ctx.fillStyle = 'rgba(15, 23, 42, ' + (0.8 * intensity) + ')';
        ctx.beginPath();
        ctx.ellipse(droneX, bobY + 22 * elScale, 20 * elScale, 10 * elScale, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.save();
        ctx.translate(droneX, bobY);

        // 4 Carbon-fiber rotor arms in X-formation
        const armLen = 22 * elScale;
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 2.5 * elScale;
        ctx.beginPath();
        ctx.moveTo(-armLen * 0.7, -armLen * 0.7); ctx.lineTo(armLen * 0.7, armLen * 0.7);
        ctx.moveTo(-armLen * 0.7, armLen * 0.7); ctx.lineTo(armLen * 0.7, -armLen * 0.7);
        ctx.stroke();

        // 4 Spinning translucent rotor discs with rotational blur
        const rotorR = 11 * elScale;
        const rotorCorners = [
            { x: -armLen * 0.7, y: -armLen * 0.7 }, { x: armLen * 0.7, y: -armLen * 0.7 },
            { x: -armLen * 0.7, y: armLen * 0.7 }, { x: armLen * 0.7, y: armLen * 0.7 }
        ];
        for (let r = 0; r < rotorCorners.length; r++) {
            const rc = rotorCorners[r];
            ctx.fillStyle = 'rgba(56, 189, 248, ' + (0.8 * intensity) + ')';
            ctx.beginPath();
            ctx.arc(rc.x, rc.y, rotorR, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = 'rgba(224, 242, 254, ' + (0.8 * intensity) + ')';
            ctx.lineWidth = 1 * elScale;
            ctx.stroke();
        }

        // Central armored fuselage pod (Top-Down hex)
        ctx.fillStyle = '#0f172a';
        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth = 1.5 * elScale;
        ctx.beginPath();
        ctx.arc(0, 0, 10 * elScale, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Blinking status beacon
        const beaconBlink = Math.sin(time * 6) > 0;
        ctx.fillStyle = beaconBlink ? '#ef4444' : '#38bdf8';
        ctx.beginPath();
        ctx.arc(0, 0, 3.5 * elScale, 0, Math.PI * 2);
        ctx.fill();

        // Forward targeting laser & floor scan cone
        const scanLen = 75 * elScale;
        const scanGrad = ctx.createRadialGradient(0, 0, 5, scanLen, 0, scanLen * 0.5);
        scanGrad.addColorStop(0, 'rgba(239, 68, 68, ' + (0.8 * intensity) + ')');
        scanGrad.addColorStop(1, 'rgba(239, 68, 68, 0)');
        ctx.fillStyle = scanGrad;
        ctx.beginPath();
        ctx.moveTo(10 * elScale, 0);
        ctx.lineTo(scanLen, -scanLen * 0.3);
        ctx.lineTo(scanLen, scanLen * 0.3);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
        ctx.restore();
    });

    // 11. Pneumatic Message Canisters
    reg(['cp_pneumatic_tube', 'item_11'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        const tubeH = 26 * elScale;
        // Brass mounting brackets
        for (let x = 30; x < W; x += 80) {
            ctx.fillStyle = '#b45309';
            ctx.fillRect(x - 5, cy - tubeH * 0.7, 10, tubeH * 1.4);
        }
        // Transparent acrylic tube with glass reflections
        ctx.fillStyle = 'rgba(224, 242, 254, 0.15)';
        ctx.fillRect(0, cy - tubeH * 0.5, W, tubeH);
        ctx.strokeStyle = `rgba(56, 189, 248, ${0.75 * intensity})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(0, cy - tubeH * 0.5); ctx.lineTo(W, cy - tubeH * 0.5);
        ctx.moveTo(0, cy + tubeH * 0.5); ctx.lineTo(W, cy + tubeH * 0.5);
        ctx.stroke();
        // Canister whooshing through
        const canX = ((time * 340 * speed) % (W + 120)) - 60;
        // High-pressure air condensation rings behind canister
        for (let ring = 1; ring <= 4; ring++) {
            const rx = canX - ring * 22;
            if (rx > 0 && rx < W) {
                ctx.strokeStyle = `rgba(255, 255, 255, ${(0.6 - ring * 0.12) * intensity})`;
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.arc(rx, cy, tubeH * 0.42, -Math.PI * 0.5, Math.PI * 0.5);
                ctx.stroke();
            }
        }
        // Cylindrical brass canister
        ctx.fillStyle = '#f59e0b';
        ctx.fillRect(canX - 20 * elScale, cy - tubeH * 0.38, 40 * elScale, tubeH * 0.76);
        ctx.strokeStyle = '#78350f';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(canX - 20 * elScale, cy - tubeH * 0.38, 40 * elScale, tubeH * 0.76);
        // Canister rubber bumpers
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(canX - 22 * elScale, cy - tubeH * 0.42, 4 * elScale, tubeH * 0.84);
        ctx.fillRect(canX + 18 * elScale, cy - tubeH * 0.42, 4 * elScale, tubeH * 0.84);
    });

    // 12. Wheeled Delivery Bots
    reg(['cp_delivery_bots', 'item_12'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        // Magnetic floor guide line
        ctx.strokeStyle = '#0284c7';
        ctx.lineWidth = 4;
        ctx.setLineDash([12, 8]);
        ctx.beginPath();
        ctx.moveTo(0, cy); ctx.lineTo(W, cy);
        ctx.stroke();
        ctx.setLineDash([]);
        // Delivery rovers following track
        const bots = 2;
        for (let b = 0; b < bots; b++) {
            const bx = ((time * 85 * speed + b * (W * 0.55)) % (W + 80)) - 40;
            ctx.save();
            ctx.translate(bx, cy);
            // Chassis
            ctx.fillStyle = '#f8fafc';
            ctx.fillRect(-22 * elScale, -14 * elScale, 44 * elScale, 28 * elScale);
            ctx.strokeStyle = '#f59e0b'; // Hazard yellow striping
            ctx.lineWidth = 2.5;
            ctx.strokeRect(-22 * elScale, -14 * elScale, 44 * elScale, 28 * elScale);
            // 6 knobby all-terrain wheels
            ctx.fillStyle = '#0f172a';
            for (let w = -1; w <= 1; w++) {
                ctx.fillRect((w * 13 - 4) * elScale, -18 * elScale, 8 * elScale, 4 * elScale);
                ctx.fillRect((w * 13 - 4) * elScale, 14 * elScale, 8 * elScale, 4 * elScale);
            }
            // Blinking status beacon on roof
            const blink = Math.sin(time * 8 + b * 2) > 0.2;
            FX.drawRadialGlow(ctx, -8 * elScale, 0, 1, 8 * elScale, blink ? 'rgba(245, 158, 11, 0.95)' : 'rgba(245, 158, 11, 0.2)', 'rgba(245, 158, 11, 0)');
            // Front lidar dome
            ctx.fillStyle = '#38bdf8';
            ctx.beginPath();
            ctx.arc(18 * elScale, 0, 4 * elScale, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    });

    // 13. Mega-Mall Escalators (Transparent Base)
    reg(['cp_megamall_escalator', 'item_13'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        const escW = 54 * elScale;
        // Neon green illuminated handrails
        ctx.strokeStyle = `rgba(0, 255, 200, ${0.9 * intensity})`;
        ctx.lineWidth = 3;
        ctx.shadowColor = '#00ffc8';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.moveTo(0, cy - escW * 0.48); ctx.lineTo(W, cy - escW * 0.48);
        ctx.moveTo(0, cy + escW * 0.48); ctx.lineTo(W, cy + escW * 0.48);
        ctx.stroke();
        ctx.shadowBlur = 0;
        // Continuous moving grooved step treads on transparent ground
        const stepPitch = 18;
        const stepOffset = (time * 45 * speed) % stepPitch;
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 1.5;
        for (let x = -stepPitch; x < W + stepPitch; x += stepPitch) {
            ctx.fillStyle = 'rgba(30, 41, 59, 0.7)';
            ctx.fillRect(x + stepOffset, cy - escW * 0.38, stepPitch - 2, escW * 0.76);
            // Yellow safety border edge
            ctx.fillStyle = 'rgba(234, 179, 8, 0.75)';
            ctx.fillRect(x + stepOffset + stepPitch - 4, cy - escW * 0.38, 2, escW * 0.76);
        }
    });

    // 14. Overhead Gantry Welder (Top-Down Industrial Crane & Robotic Welder)
    reg(['cp_gantry_welder', 'item_14'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.save();

        // 1. Runway Rails & Wall Corbel Brackets (Top & Bottom of work bay)
        const railTopY = 16 * elScale;
        const railBotY = H - 16 * elScale;

        // Concrete / steel corbel support brackets along the runways
        ctx.fillStyle = '#1e293b';
        ctx.strokeStyle = '#0f172a';
        ctx.lineWidth = 1.5;
        const bracketPitch = Math.max(40, W / 6);
        for (let bx = bracketPitch * 0.5; bx < W; bx += bracketPitch) {
            // Top brackets
            ctx.fillRect(bx - 6 * elScale, 0, 12 * elScale, railTopY + 4 * elScale);
            ctx.strokeRect(bx - 6 * elScale, 0, 12 * elScale, railTopY + 4 * elScale);
            // Bottom brackets
            ctx.fillRect(bx - 6 * elScale, railBotY - 4 * elScale, 12 * elScale, H - railBotY + 4 * elScale);
            ctx.strokeRect(bx - 6 * elScale, railBotY - 4 * elScale, 12 * elScale, H - railBotY + 4 * elScale);
        }

        // Heavy steel runway I-beams
        ctx.fillStyle = '#334155';
        ctx.fillRect(0, railTopY - 6 * elScale, W, 12 * elScale);
        ctx.fillRect(0, railBotY - 6 * elScale, W, 12 * elScale);

        // Polished steel rail heads (running surface)
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 3.5 * elScale;
        ctx.beginPath();
        ctx.moveTo(0, railTopY); ctx.lineTo(W, railTopY);
        ctx.moveTo(0, railBotY); ctx.lineTo(W, railBotY);
        ctx.stroke();

        // Geared rack teeth along the runway rails
        ctx.strokeStyle = '#64748b';
        ctx.lineWidth = 1.0;
        ctx.beginPath();
        for (let rx = 4; rx < W; rx += 8 * elScale) {
            ctx.moveTo(rx, railTopY - 5 * elScale); ctx.lineTo(rx, railTopY - 1 * elScale);
            ctx.moveTo(rx, railBotY + 1 * elScale); ctx.lineTo(rx, railBotY + 5 * elScale);
        }
        ctx.stroke();

        // 2. Workpiece on Floor (Steel hull plate with weld seam)
        const seamX1 = W * 0.2;
        const seamX2 = W * 0.8;
        const seamY = H * 0.52;

        // Underlying steel plate seam
        ctx.strokeStyle = '#0f172a';
        ctx.lineWidth = 3 * elScale;
        ctx.beginPath();
        ctx.moveTo(seamX1, seamY);
        ctx.lineTo(seamX2, seamY);
        ctx.stroke();

        // Heat-affected zone (temper colors around the weld line)
        ctx.strokeStyle = `rgba(180, 83, 9, ${0.35 * intensity})`;
        ctx.lineWidth = 14 * elScale;
        ctx.beginPath();
        ctx.moveTo(seamX1, seamY);
        ctx.lineTo(seamX2, seamY);
        ctx.stroke();

        ctx.strokeStyle = `rgba(124, 58, 237, ${0.25 * intensity})`;
        ctx.lineWidth = 8 * elScale;
        ctx.beginPath();
        ctx.moveTo(seamX1, seamY);
        ctx.lineTo(seamX2, seamY);
        ctx.stroke();

        // 3. Dynamic Motion Calculations
        // Gantry bridge traverses horizontally across the work bay
        const bridgeProgress = 0.5 + 0.5 * Math.sin(time * 0.5 * speed);
        const bridgeX = W * (0.24 + 0.52 * bridgeProgress);

        // Welding trolley traverses along the bridge girder (vertically across Y)
        const trolleyProgress = 0.5 + 0.5 * Math.sin(time * 0.9 * speed + 0.7);
        const trolleyMinY = railTopY + 45 * elScale;
        const trolleyMaxY = railBotY - 45 * elScale;
        const trolleyY = trolleyMinY + (trolleyMaxY - trolleyMinY) * trolleyProgress;

        // Robotic arm kinematics in overhead projection
        const armBaseX = bridgeX;
        const armBaseY = trolleyY;
        const armAngle = Math.sin(time * 1.4 * speed) * 0.7 + Math.PI * 0.15;
        const armLen1 = 28 * elScale;
        const elbowX = armBaseX + Math.cos(armAngle) * armLen1;
        const elbowY = armBaseY + Math.sin(armAngle) * armLen1;

        const forearmAngle = armAngle + 0.6 + Math.sin(time * 2.2 * speed) * 0.4;
        const armLen2 = 22 * elScale;
        const torchX = elbowX + Math.cos(forearmAngle) * armLen2;
        const torchY = elbowY + Math.sin(forearmAngle) * armLen2;

        // Welding duty cycle: weld bursts followed by brief repositioning
        const cycle = (time * 2.0 * speed) % 5.0;
        const isWelding = (cycle < 3.8);

        // 4. Glowing Solidified Weld Bead on the floor trailing the torch
        const numBeads = 18;
        for (let b = 0; b < numBeads; b++) {
            const bx = seamX1 + (seamX2 - seamX1) * (b / (numBeads - 1));
            const distToTorch = Math.abs(bx - torchX);
            if (bx <= torchX + 10 * elScale) {
                const heat = Math.max(0, 1.0 - (distToTorch / (90 * elScale)));
                if (heat > 0.05) {
                    ctx.fillStyle = heat > 0.65 ? '#fef08a' : (heat > 0.35 ? '#f97316' : '#991b1b');
                    ctx.beginPath();
                    ctx.arc(bx, seamY, (2.8 + heat * 1.5) * elScale, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        }

        // 5. Gantry Bridge Structure (Top-Down View)
        const bridgeW = 34 * elScale;
        const halfBW = bridgeW * 0.5;

        // Drop shadow from high overhead bridge onto the floor
        ctx.fillStyle = 'rgba(0, 0, 0, 0.42)';
        ctx.fillRect(bridgeX - halfBW + 10 * elScale, railTopY + 10 * elScale, bridgeW, (railBotY - railTopY));

        // Dual structural steel box girders
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(bridgeX - halfBW, railTopY, 10 * elScale, railBotY - railTopY);
        ctx.fillRect(bridgeX + halfBW - 10 * elScale, railTopY, 10 * elScale, railBotY - railTopY);

        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 1.2;
        ctx.strokeRect(bridgeX - halfBW, railTopY, 10 * elScale, railBotY - railTopY);
        ctx.strokeRect(bridgeX + halfBW - 10 * elScale, railTopY, 10 * elScale, railBotY - railTopY);

        // Structural diagonal cross-truss lattice between the two girders
        ctx.strokeStyle = '#64748b';
        ctx.lineWidth = 2.0 * elScale;
        ctx.beginPath();
        const trussStep = 24 * elScale;
        for (let ty = railTopY + 12 * elScale; ty < railBotY - 12 * elScale; ty += trussStep) {
            ctx.moveTo(bridgeX - halfBW + 10 * elScale, ty);
            ctx.lineTo(bridgeX + halfBW - 10 * elScale, ty + trussStep);
            ctx.moveTo(bridgeX + halfBW - 10 * elScale, ty);
            ctx.lineTo(bridgeX - halfBW + 10 * elScale, ty + trussStep);
        }
        ctx.stroke();

        // End-truck bogies riding on the runway rails
        // Top end-truck
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(bridgeX - halfBW - 6 * elScale, railTopY - 10 * elScale, bridgeW + 12 * elScale, 20 * elScale);
        ctx.strokeStyle = '#eab308';
        ctx.lineWidth = 2.0;
        ctx.strokeRect(bridgeX - halfBW - 6 * elScale, railTopY - 10 * elScale, bridgeW + 12 * elScale, 20 * elScale);

        // Bottom end-truck
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(bridgeX - halfBW - 6 * elScale, railBotY - 10 * elScale, bridgeW + 12 * elScale, 20 * elScale);
        ctx.strokeStyle = '#eab308';
        ctx.lineWidth = 2.0;
        ctx.strokeRect(bridgeX - halfBW - 6 * elScale, railBotY - 10 * elScale, bridgeW + 12 * elScale, 20 * elScale);

        // Industrial hazard stripes on end-trucks
        ctx.fillStyle = '#eab308';
        for (let s = -halfBW - 4 * elScale; s < halfBW + 8 * elScale; s += 8 * elScale) {
            ctx.beginPath();
            ctx.moveTo(bridgeX + s, railTopY - 10 * elScale);
            ctx.lineTo(bridgeX + s + 4 * elScale, railTopY - 10 * elScale);
            ctx.lineTo(bridgeX + s, railTopY + 10 * elScale);
            ctx.lineTo(bridgeX + s - 4 * elScale, railTopY + 10 * elScale);
            ctx.closePath();
            ctx.fill();

            ctx.beginPath();
            ctx.moveTo(bridgeX + s, railBotY - 10 * elScale);
            ctx.lineTo(bridgeX + s + 4 * elScale, railBotY - 10 * elScale);
            ctx.lineTo(bridgeX + s, railBotY + 10 * elScale);
            ctx.lineTo(bridgeX + s - 4 * elScale, railBotY + 10 * elScale);
            ctx.closePath();
            ctx.fill();
        }

        // 6. Traversing Welding Trolley (Top-Down View)
        const trolleyW = 42 * elScale;
        const trolleyH = 34 * elScale;

        // Trolley drop shadow
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(armBaseX - trolleyW * 0.5 + 8 * elScale, armBaseY - trolleyH * 0.5 + 8 * elScale, trolleyW, trolleyH);

        // Trolley yellow chassis
        ctx.fillStyle = '#eab308';
        ctx.fillRect(armBaseX - trolleyW * 0.5, armBaseY - trolleyH * 0.5, trolleyW, trolleyH);
        ctx.strokeStyle = '#0f172a';
        ctx.lineWidth = 2.2;
        ctx.strokeRect(armBaseX - trolleyW * 0.5, armBaseY - trolleyH * 0.5, trolleyW, trolleyH);

        // Chamfered dark protective corners & bumper pads
        ctx.fillStyle = '#1e293b';
        const cpad = 6 * elScale;
        ctx.fillRect(armBaseX - trolleyW * 0.5, armBaseY - trolleyH * 0.5, cpad, cpad);
        ctx.fillRect(armBaseX + trolleyW * 0.5 - cpad, armBaseY - trolleyH * 0.5, cpad, cpad);
        ctx.fillRect(armBaseX - trolleyW * 0.5, armBaseY + trolleyH * 0.5 - cpad, cpad, cpad);
        ctx.fillRect(armBaseX + trolleyW * 0.5 - cpad, armBaseY + trolleyH * 0.5 - cpad, cpad, cpad);

        // Trolley top ventilation louvers / cooling radiator
        ctx.fillStyle = '#0f172a';
        for (let v = -trolleyH * 0.3; v <= trolleyH * 0.3; v += 5 * elScale) {
            ctx.fillRect(armBaseX - trolleyW * 0.32, armBaseY + v, trolleyW * 0.28, 2 * elScale);
        }

        // Flashing warning beacon on trolley
        const beaconPulse = Math.sin(time * 8 * speed) > 0;
        ctx.fillStyle = isWelding ? (beaconPulse ? '#38bdf8' : '#0284c7') : (beaconPulse ? '#f59e0b' : '#78350f');
        ctx.beginPath();
        ctx.arc(armBaseX + trolleyW * 0.3, armBaseY - trolleyH * 0.28, 3.5 * elScale, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#0f172a';
        ctx.lineWidth = 1.0;
        ctx.stroke();

        // 7. Articulated Robotic Arm in Overhead (Plan) Projection
        // Rotating Turret Base Ring on Trolley Deck
        ctx.fillStyle = '#334155';
        ctx.beginPath();
        ctx.arc(armBaseX, armBaseY, 11 * elScale, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#0f172a';
        ctx.lineWidth = 2.0;
        ctx.stroke();

        ctx.fillStyle = '#64748b';
        ctx.beginPath();
        ctx.arc(armBaseX, armBaseY, 6 * elScale, 0, Math.PI * 2);
        ctx.fill();

        // Arm drop shadow onto floor
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.4)';
        ctx.lineWidth = 7 * elScale;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(armBaseX + 6 * elScale, armBaseY + 6 * elScale);
        ctx.lineTo(elbowX + 6 * elScale, elbowY + 6 * elScale);
        ctx.lineTo(torchX + 6 * elScale, torchY + 6 * elScale);
        ctx.stroke();

        // Upper arm segment (heavy articulated industrial arm)
        ctx.strokeStyle = '#1e293b';
        ctx.lineWidth = 7 * elScale;
        ctx.beginPath();
        ctx.moveTo(armBaseX, armBaseY);
        ctx.lineTo(elbowX, elbowY);
        ctx.stroke();

        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 3.5 * elScale;
        ctx.beginPath();
        ctx.moveTo(armBaseX, armBaseY);
        ctx.lineTo(elbowX, elbowY);
        ctx.stroke();

        // Elbow joint servo hub
        ctx.fillStyle = '#eab308';
        ctx.beginPath();
        ctx.arc(elbowX, elbowY, 5.5 * elScale, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#0f172a';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Forearm segment extending to torch
        ctx.strokeStyle = '#1e293b';
        ctx.lineWidth = 5 * elScale;
        ctx.beginPath();
        ctx.moveTo(elbowX, elbowY);
        ctx.lineTo(torchX, torchY);
        ctx.stroke();

        ctx.strokeStyle = '#cbd5e1';
        ctx.lineWidth = 2.5 * elScale;
        ctx.beginPath();
        ctx.moveTo(elbowX, elbowY);
        ctx.lineTo(torchX, torchY);
        ctx.stroke();

        // Wrist rotator & welding torch nozzle
        ctx.fillStyle = '#475569';
        ctx.beginPath();
        ctx.arc(torchX, torchY, 4 * elScale, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#0f172a';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // 8. Welding Torch Arc, Sparks & Thermal Floor Glow
        if (isWelding) {
            // Intense high-frequency electrical arc strobe
            const jitter = (Math.random() - 0.5) * 1.5 * elScale;
            const tx = torchX + jitter;
            const ty = torchY + jitter;

            // Wide ambient floor glow
            FX.drawRadialGlow(ctx, tx, ty, 5 * elScale, 75 * elScale * intensity, `rgba(56, 189, 248, ${0.45 * intensity})`, 'rgba(14, 165, 233, 0)');

            // Secondary warm molten glow
            FX.drawRadialGlow(ctx, tx, ty, 2 * elScale, 38 * elScale * intensity, `rgba(254, 215, 170, ${0.65 * intensity})`, 'rgba(234, 88, 12, 0)');

            // Searing white arc flash core
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(tx, ty, (4.5 + Math.random() * 2.5) * elScale, 0, Math.PI * 2);
            ctx.fill();

            // Active molten weld puddle
            ctx.fillStyle = '#fef08a';
            ctx.beginPath();
            ctx.ellipse(tx, ty + 1 * elScale, 5 * elScale, 3.5 * elScale, 0, 0, Math.PI * 2);
            ctx.fill();

            // Shower of 360-degree ballistic molten sparks across the floor
            const numSparks = Math.round(18 + rough * 16);
            for (let s = 0; s < numSparks; s++) {
                const sAngle = FX.hash(s * 23 + Math.floor(time * 25)) * Math.PI * 2;
                const sDist = (8 + FX.hash(s * 11 + Math.floor(time * 20)) * 55) * elScale;
                const spx = tx + Math.cos(sAngle) * sDist;
                const spy = ty + Math.sin(sAngle) * sDist;

                // Spark color transitions as it flies outward
                const sparkCol = sDist < 25 * elScale ? '#ffffff' : (sDist < 42 * elScale ? '#fde047' : '#f97316');
                ctx.fillStyle = sparkCol;
                ctx.beginPath();
                ctx.arc(spx, spy, (1.2 + (s % 3) * 0.4) * elScale, 0, Math.PI * 2);
                ctx.fill();

                // Spark motion streak
                if (sDist > 16 * elScale) {
                    ctx.strokeStyle = `rgba(251, 146, 60, ${0.6 * intensity})`;
                    ctx.lineWidth = 1.0;
                    ctx.beginPath();
                    ctx.moveTo(spx, spy);
                    ctx.lineTo(spx - Math.cos(sAngle) * (4 * elScale), spy - Math.sin(sAngle) * (4 * elScale));
                    ctx.stroke();
                }
            }
        } else {
            // Repositioning mode: Aiming laser dot on the seam
            ctx.fillStyle = '#ef4444';
            ctx.beginPath();
            ctx.arc(torchX, torchY, 2.5 * elScale, 0, Math.PI * 2);
            ctx.fill();

            // Targeting laser crosshair ring
            ctx.strokeStyle = `rgba(239, 68, 68, ${0.65 * intensity})`;
            ctx.lineWidth = 1.0;
            ctx.beginPath();
            ctx.arc(torchX, torchY, 6 * elScale, 0, Math.PI * 2);
            ctx.moveTo(torchX - 9 * elScale, torchY); ctx.lineTo(torchX + 9 * elScale, torchY);
            ctx.moveTo(torchX, torchY - 9 * elScale); ctx.lineTo(torchX, torchY + 9 * elScale);
            ctx.stroke();

            // Lingering warm residual puddle
            ctx.fillStyle = 'rgba(234, 88, 12, 0.4)';
            ctx.beginPath();
            ctx.arc(torchX, torchY, 3.5 * elScale, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.restore();
    });

    // 15. Spaceport Baggage Carousels
    reg(['cp_baggage_carousel', 'item_15'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        const rx = W * 0.42, ry = H * 0.35;
        // Brushed chrome center island
        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.ellipse(cx, cy, rx * 0.65, ry * 0.65, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2;
        ctx.stroke();
        // Revolving carousel track rim
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 24 * elScale;
        ctx.beginPath();
        ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
        ctx.stroke();
        // Luggage bags rotating around
        const bags = 9;
        for (let b = 0; b < bags; b++) {
            const angle = time * 0.55 * speed + (b * (Math.PI * 2 / bags));
            const bx = cx + Math.cos(angle) * rx;
            const by = cy + Math.sin(angle) * ry;
            ctx.save();
            ctx.translate(bx, by);
            ctx.rotate(angle + Math.PI * 0.5);
            // Suitcases & tech cases with varied colors
            const bagColors = ['#dc2626', '#2563eb', '#16a34a', '#ca8a04', '#475569'];
            ctx.fillStyle = bagColors[b % bagColors.length];
            ctx.fillRect(-10 * elScale, -6 * elScale, 20 * elScale, 12 * elScale);
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 1;
            ctx.strokeRect(-10 * elScale, -6 * elScale, 20 * elScale, 12 * elScale);
            ctx.restore();
        }
    });

    // 16. Smart-Gun Tracer Rounds & Railgun Trails
    reg(['cp_railgun_tracers', 'item_16'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        // Periodic high-speed bullet burst
        const bullets = 3;
        for (let b = 0; b < bullets; b++) {
            const bPhase = (time * 4.5 * speed + b * 0.33) % 1.0;
            const bx = bPhase * (W + 150) - 100;
            const by = cy + (Math.sin(b * 3.7) * 22) * elScale;
            // Hyper-velocity kinetic tracer line
            const trailLen = 95 * elScale;
            const tracerGrad = ctx.createLinearGradient(bx - trailLen, by, bx, by);
            tracerGrad.addColorStop(0, 'rgba(56, 189, 248, 0)');
            tracerGrad.addColorStop(0.7, `rgba(56, 189, 248, ${0.85 * intensity})`);
            tracerGrad.addColorStop(1, '#ffffff');
            ctx.strokeStyle = tracerGrad;
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.moveTo(bx - trailLen, by);
            ctx.lineTo(bx, by);
            ctx.stroke();
            // Blinding bullet head
            FX.drawRadialGlow(ctx, bx, by, 1, 12 * elScale, `rgba(255, 255, 255, ${0.95 * intensity})`, 'rgba(56, 189, 248, 0)');
        }
    });

    // 17. Blue EMP Shockwave Rings
    reg(['cp_emp_shockwave', 'item_17'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        const maxR = Math.max(W, H) * 0.65;
        const waves = 3;
        for (let w = 0; w < waves; w++) {
            const phase = (time * 1.4 * speed + w * 0.33) % 1.0;
            const r = phase * maxR;
            const alpha = (1 - phase) * 0.9 * intensity;
            // Expanding shock ring
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 3.5 * (1 - phase);
            ctx.beginPath();
            ctx.arc(cx, cy, r, 0, Math.PI * 2);
            ctx.stroke();
            // Crackling lightning branches on shockwave perimeter
            const arcs = Math.round(6 + rough * 10);
            for (let a = 0; a < arcs; a++) {
                const ang = (a * (Math.PI * 2 / arcs)) + time * 2;
                const ax1 = cx + Math.cos(ang) * (r - 6);
                const ay1 = cy + Math.sin(ang) * (r - 6);
                const ax2 = cx + Math.cos(ang + 0.15) * (r + 10);
                const ay2 = cy + Math.sin(ang + 0.15) * (r + 10);
                ctx.strokeStyle = `rgba(224, 242, 254, ${alpha})`;
                ctx.lineWidth = 1.2;
                ctx.beginPath();
                ctx.moveTo(ax1, ay1); ctx.lineTo(ax2, ay2); ctx.stroke();
            }
        }
    });

    // 18. Holographic Riot-Control Barrier Waves
    reg(['cp_riot_barrier_wave', 'item_18'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        // Vertical translucent energy shield pulsing waves
        const waveProgress = (time * 120 * speed) % (W + 60) - 30;
        // Harmonic force waves rolling across
        for (let w = 0; w < 3; w++) {
            const wx = (waveProgress + w * 70) % W;
            const waveGrad = ctx.createLinearGradient(wx - 25, 0, wx + 25, 0);
            waveGrad.addColorStop(0, 'rgba(59, 130, 246, 0)');
            waveGrad.addColorStop(0.5, `rgba(147, 197, 253, ${0.75 * intensity})`);
            waveGrad.addColorStop(1, 'rgba(59, 130, 246, 0)');
            ctx.fillStyle = waveGrad;
            ctx.fillRect(wx - 25, H * 0.08, 50, H * 0.84);
            // Hexagonal shield cell nodes along wave
            ctx.strokeStyle = `rgba(191, 219, 254, ${0.65 * intensity})`;
            ctx.lineWidth = 1.2;
            for (let y = H * 0.12; y < H * 0.88; y += 30) {
                ctx.beginPath();
                ctx.arc(wx, y, 6 * elScale, 0, Math.PI * 2);
                ctx.stroke();
            }
        }
    });

    // 19. Netrunner Ice-Breaker Code Streams (Transparent Background Matrix)
    reg(['cp_netrunner_stream', 'item_19'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        // Flowing green/cyan hex data packets on transparent ground
        const streams = Math.round(3 + rough * 4);
        ctx.font = `${Math.round(11 * elScale)}px monospace`;
        ctx.shadowColor = '#10b981';
        ctx.shadowBlur = 8;
        for (let s = 0; s < streams; s++) {
            const sy = cy - 14 * elScale + s * (14 * elScale);
            const strOffset = ((time * 160 * speed * (1 + s * 0.2)) % 200);
            ctx.fillStyle = `rgba(16, 185, 129, ${0.9 * intensity})`;
            for (let x = -strOffset; x < W + 100; x += 110) {
                const hex = `0x${((Math.floor(x * 13 + time * 50) % 65535)).toString(16).toUpperCase().padStart(4, '0')}`;
                ctx.fillText(hex, x, sy);
            }
        }
        ctx.shadowBlur = 0;
    });

    // 20. Acid Rain Skylight Rivulets
    reg(['cp_skylight_rivulets', 'item_20'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        // Streaming diagonal rivulets
        const rivulets = Math.round(10 + rough * 16);
        ctx.strokeStyle = `rgba(110, 231, 183, ${0.65 * intensity})`;
        ctx.lineWidth = 1.5;
        for (let r = 0; r < rivulets; r++) {
            const rx = (FX.hash(r * 23) * W);
            const flowY = ((time * (80 + r * 15) * speed + FX.hash(r * 41) * H) % (H + 40)) - 20;
            ctx.beginPath();
            ctx.moveTo(rx, flowY);
            ctx.lineTo(rx - 8, flowY + 35);
            ctx.stroke();
            // Droplet bead at head
            ctx.fillStyle = `rgba(209, 250, 229, ${0.85 * intensity})`;
            ctx.beginPath();
            ctx.arc(rx - 8, flowY + 35, 2.2, 0, Math.PI * 2);
            ctx.fill();
        }
    });

    // 21. Multi-Tiered Sky-Traffic Lanes
    reg(['cp_skytraffic_lanes', 'item_21'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const lanes = 2;
        for (let l = 0; l < lanes; l++) {
            const ly = H * (0.32 + l * 0.36);
            // Holographic flight corridor lanes
            ctx.strokeStyle = (l === 0) ? 'rgba(56, 189, 248, 0.35)' : 'rgba(239, 68, 68, 0.35)';
            ctx.lineWidth = 2;
            ctx.setLineDash([8, 12]);
            ctx.beginPath(); ctx.moveTo(0, ly); ctx.lineTo(W, ly); ctx.stroke();
            ctx.setLineDash([]);
            // Hover vehicles cruising along corridor
            const vehicles = 4;
            const dir = (l === 0) ? 1 : -1;
            for (let v = 0; v < vehicles; v++) {
                const vx = ((time * (110 + v * 25) * speed * dir + v * (W / vehicles)) % (W + 60));
                const actX = (dir === 1) ? vx : (W - vx);
                ctx.save();
                ctx.translate(actX, ly);
                // Car body
                ctx.fillStyle = '#0f172a';
                ctx.fillRect(-14 * elScale, -6 * elScale, 28 * elScale, 12 * elScale);
                // White headlights / Red taillights
                if (dir === 1) {
                    ctx.fillStyle = '#f8fafc'; ctx.fillRect(12 * elScale, -4 * elScale, 3, 8 * elScale);
                    ctx.fillStyle = '#ef4444'; ctx.fillRect(-14 * elScale, -4 * elScale, 2, 8 * elScale);
                } else {
                    ctx.fillStyle = '#f8fafc'; ctx.fillRect(-14 * elScale, -4 * elScale, 3, 8 * elScale);
                    ctx.fillStyle = '#ef4444'; ctx.fillRect(12 * elScale, -4 * elScale, 2, 8 * elScale);
                }
                ctx.restore();
            }
        }
    });

    // 22. Windblown Neon Flyers & Wrappers
    reg(['cp_windblown_flyers', 'item_22'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        const count = Math.round(8 + rough * 12);
        for (let i = 0; i < count; i++) {
            const seed = i * 17.3;
            const fx = ((time * (90 + (i % 4) * 35) * speed + FX.hash(seed) * W) % (W + 40)) - 20;
            const fy = cy + Math.sin(time * 3 + seed) * (H * 0.32);
            const rot = time * (4 + (i % 3) * 2) + seed;
            ctx.save();
            ctx.translate(fx, fy);
            ctx.rotate(rot);
            const flyerColors = ['#ec4899', '#06b6d4', '#eab308', '#a855f7'];
            ctx.fillStyle = flyerColors[i % flyerColors.length];
            ctx.fillRect(-7 * elScale, -4 * elScale, 14 * elScale, 8 * elScale);
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 0.8;
            ctx.strokeRect(-7 * elScale, -4 * elScale, 14 * elScale, 8 * elScale);
            ctx.restore();
        }
    });

    // 23. Ruptured Alley Steam Pipe
    reg(['cp_steam_pipe_vent', 'item_23'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        // Heavy rusted cast iron pipe on left
        ctx.fillStyle = '#334155';
        ctx.fillRect(0, cy - 14 * elScale, 24 * elScale, 28 * elScale);
        ctx.fillStyle = '#b45309'; // Rust collar
        ctx.fillRect(20 * elScale, cy - 16 * elScale, 6 * elScale, 32 * elScale);
        // Pressurized horizontal conical steam jet
        const steamLen = W * 0.85;
        const steamGrad = ctx.createRadialGradient(26 * elScale, cy, 2, 26 * elScale + steamLen * 0.5, cy, steamLen);
        steamGrad.addColorStop(0, `rgba(255, 255, 255, ${0.92 * intensity})`);
        steamGrad.addColorStop(0.4, `rgba(226, 232, 240, ${0.55 * intensity})`);
        steamGrad.addColorStop(1, 'rgba(203, 213, 225, 0)');
        ctx.fillStyle = steamGrad;
        ctx.beginPath();
        ctx.moveTo(26 * elScale, cy - 6 * elScale);
        ctx.lineTo(26 * elScale + steamLen, cy - 40 * elScale);
        ctx.quadraticCurveTo(26 * elScale + steamLen * 1.1, cy, 26 * elScale + steamLen, cy + 40 * elScale);
        ctx.lineTo(26 * elScale, cy + 6 * elScale);
        ctx.closePath();
        ctx.fill();
        // Billowing turbulent puff circles
        for (let p = 0; p < 8; p++) {
            const px = 26 * elScale + (p * (steamLen / 8) + time * 140 * speed) % steamLen;
            const py = cy + Math.sin(time * 5 + p) * (14 + p * 3);
            ctx.fillStyle = `rgba(248, 250, 252, ${(0.4 - p * 0.04) * intensity})`;
            ctx.beginPath();
            ctx.arc(px, py, (8 + p * 4) * elScale, 0, Math.PI * 2);
            ctx.fill();
        }
    });

    // 24. Platform Cyber-Rats (Transparent Ground Scurry)
    reg(['cp_cyber_rats_line', 'item_24'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        // Line of cybernetic rats scurrying in single file across the floor
        const rats = 4;
        for (let r = 0; r < rats; r++) {
            const rx = ((time * 140 * speed + r * 60) % (W + 60)) - 30;
            ctx.save();
            ctx.translate(rx, cy - 4);
            // Metallic rat body
            ctx.fillStyle = '#475569';
            ctx.beginPath();
            ctx.ellipse(0, 0, 10 * elScale, 5 * elScale, 0, 0, Math.PI * 2);
            ctx.fill();
            // Pointed snout
            ctx.beginPath();
            ctx.moveTo(8 * elScale, -3 * elScale);
            ctx.lineTo(14 * elScale, 0);
            ctx.lineTo(8 * elScale, 3 * elScale);
            ctx.fill();
            // Glowing red optical sensor
            ctx.fillStyle = '#ef4444';
            ctx.beginPath();
            ctx.arc(11 * elScale, -1.5 * elScale, 1.2, 0, Math.PI * 2);
            ctx.fill();
            // Sinuous segmented wire tail
            ctx.strokeStyle = '#94a3b8';
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(-10 * elScale, 0);
            ctx.quadraticCurveTo(-15 * elScale, Math.sin(time * 15 + r) * 6, -20 * elScale, Math.cos(time * 15 + r) * 4);
            ctx.stroke();
            ctx.restore();
        }
    });

    // 25. High-Rise Smog Banks
    reg(['cp_highrise_smog', 'item_25'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        // Toxic yellowish-brown photochemical smog
        const smogGrad = ctx.createLinearGradient(0, 0, W, H);
        smogGrad.addColorStop(0, `rgba(161, 98, 7, ${0.35 * intensity})`);
        smogGrad.addColorStop(0.5, `rgba(113, 63, 18, ${0.45 * intensity})`);
        smogGrad.addColorStop(1, 'rgba(69, 26, 3, 0)');
        // Swirling volumetric billows
        const billows = 6;
        for (let b = 0; b < billows; b++) {
            const bx = ((b * (W / billows) + time * 30 * speed) % (W + 100)) - 50;
            const by = H * (0.3 + (b % 3) * 0.2);
            const br = (45 + (b % 4) * 15) * elScale;
            ctx.fillStyle = `rgba(202, 138, 4, ${(0.15 + rough * 0.1) * intensity})`;
            ctx.beginPath();
            ctx.arc(bx, by, br, 0, Math.PI * 2);
            ctx.fill();
        }
    });

    // =========================================================================
    // B. ANIMATED TEXTURES & AREA-FILLS (26 - 50)
    // =========================================================================

    // 26. Neon Oily Puddle Refraction
    reg(['cp_puddle_reflections', 'item_26'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        // Oily water puddle body (transparent asphalt)
        const prX = W * 0.45, prY = H * 0.4;
        ctx.save();
        ctx.beginPath();
        ctx.ellipse(cx, cy, prX, prY, 0, 0, Math.PI * 2);
        ctx.fillStyle = '#040711';
        ctx.fill();
        // Iridescent rainbow oil sheen bands
        const sheenGrad = ctx.createLinearGradient(cx - prX, cy - prY, cx + prX, cy + prY);
        sheenGrad.addColorStop(0, `rgba(236, 72, 153, ${0.45 * intensity})`);
        sheenGrad.addColorStop(0.25, `rgba(59, 130, 246, ${0.5 * intensity})`);
        sheenGrad.addColorStop(0.5, `rgba(16, 185, 129, ${0.45 * intensity})`);
        sheenGrad.addColorStop(0.75, `rgba(234, 179, 8, ${0.5 * intensity})`);
        sheenGrad.addColorStop(1, `rgba(236, 72, 153, ${0.45 * intensity})`);
        ctx.fillStyle = sheenGrad;
        ctx.fill();
        // Rippling water waves
        const ripples = Math.round(3 + rough * 4);
        for (let r = 0; r < ripples; r++) {
            const phase = (time * 1.5 * speed + r * 0.35) % 1.0;
            ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - phase) * 0.45 * intensity})`;
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.ellipse(cx, cy, prX * phase, prY * phase, 0, 0, Math.PI * 2);
            ctx.stroke();
        }
        ctx.restore();
    });

    // 27. Biotech Algae Vat Glow
    reg(['cp_algae_vat_glow', 'item_27'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        // Subterranean circular vat fluid container
        const vatGrad = ctx.createRadialGradient(W * 0.5, H * 0.5, 10, W * 0.5, H * 0.5, Math.min(W, H) * 0.46);
        vatGrad.addColorStop(0, `rgba(16, 185, 129, ${0.85 * intensity})`);
        vatGrad.addColorStop(0.7, `rgba(5, 150, 105, ${0.75 * intensity})`);
        vatGrad.addColorStop(1, 'rgba(2, 44, 34, 0.45)');
        ctx.fillStyle = vatGrad;
        ctx.beginPath();
        ctx.ellipse(W * 0.5, H * 0.5, W * 0.44, H * 0.44, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = `rgba(5, 150, 105, ${0.85 * intensity})`;
        ctx.lineWidth = 3;
        ctx.stroke();
        // Bioluminescent algae cell motes & bubbles rising
        const bubbles = Math.round(20 + rough * 30);
        for (let b = 0; b < bubbles; b++) {
            const bx = (FX.hash(b * 19) * W);
            const by = ((H - time * (30 + b * 5) * speed) % (H + 20)) - 10;
            const r = (2 + (b % 4)) * elScale;
            ctx.fillStyle = `rgba(167, 243, 208, ${0.8 * intensity})`;
            ctx.beginPath();
            ctx.arc(bx, by, r, 0, Math.PI * 2);
            ctx.fill();
        }
    });

    // 28. Nightclub Strobe Grid (Top-Down Overhead Truss & Sweeping Spotlights)
    reg(['cp_club_strobe_grid', 'item_28'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        const beat = time * 3.5 * speed;
        const strobePulse = Math.sin(beat * Math.PI * 2);
        const isStrobe = strobePulse > 0.82;

        ctx.save();
        // Overhead lighting truss frame centered at (cx, cy)
        const trussW = 55 * elScale, trussH = 55 * elScale;
        ctx.strokeStyle = 'rgba(71, 85, 105, 0.6)';
        ctx.lineWidth = 2.5 * elScale;
        ctx.strokeRect(cx - trussW, cy - trussH, trussW * 2, trussH * 2);

        // Internal cross-braces
        ctx.strokeStyle = 'rgba(100, 116, 139, 0.4)';
        ctx.lineWidth = 1.2 * elScale;
        ctx.beginPath();
        ctx.moveTo(cx - trussW, cy - trussH); ctx.lineTo(cx + trussW, cy + trussH);
        ctx.moveTo(cx + trussW, cy - trussH); ctx.lineTo(cx - trussW, cy + trussH);
        ctx.stroke();

        // 4 Gimbal spotlights at truss corners sweeping across the dance floor
        const numBeams = 4;
        const corners = [
            { x: cx - trussW, y: cy - trussH },
            { x: cx + trussW, y: cy - trussH },
            { x: cx + trussW, y: cy + trussH },
            { x: cx - trussW, y: cy + trussH }
        ];

        for (let b = 0; b < numBeams; b++) {
            const beamT = (time * 1.8 * speed + b * (Math.PI * 0.5));
            const targetX = cx + Math.cos(beamT) * (70 + rough * 25) * elScale;
            const targetY = cy + Math.sin(beamT * 1.3) * (70 + rough * 25) * elScale;
            const isPink = b % 2 === 0;
            const beamRgb = isPink ? '236, 72, 153' : '6, 182, 212';

            // Sweeping light beam cone on floor
            const poolGrad = ctx.createRadialGradient(targetX, targetY, 2, targetX, targetY, 28 * elScale);
            poolGrad.addColorStop(0, `rgba(${beamRgb}, ${0.75 * intensity})`);
            poolGrad.addColorStop(0.5, `rgba(${beamRgb}, ${0.35 * intensity})`);
            poolGrad.addColorStop(1, `rgba(${beamRgb}, 0)`);
            ctx.fillStyle = poolGrad;
            ctx.beginPath();
            ctx.arc(targetX, targetY, 28 * elScale, 0, Math.PI * 2);
            ctx.fill();

            // Beam line from fixture to floor pool
            ctx.strokeStyle = `rgba(${beamRgb}, ${0.65 * intensity})`;
            ctx.lineWidth = (1.5 + rough) * elScale;
            ctx.beginPath();
            ctx.moveTo(corners[b].x, corners[b].y);
            ctx.lineTo(targetX, targetY);
            ctx.stroke();

            // Fixture head
            ctx.fillStyle = '#1e293b';
            ctx.beginPath();
            ctx.arc(corners[b].x, corners[b].y, 4 * elScale, 0, Math.PI * 2);
            ctx.fill();
        }

        // Central blinding strobe flash
        if (isStrobe) {
            const flare = ctx.createRadialGradient(cx, cy, 4, cx, cy, 75 * elScale * intensity);
            flare.addColorStop(0, 'rgba(255, 255, 255, ' + (0.9 * intensity) + ')');
            flare.addColorStop(0.3, 'rgba(236, 72, 153, ' + (0.5 * intensity) + ')');
            flare.addColorStop(1, 'rgba(236, 72, 153, 0)');
            ctx.fillStyle = flare;
            ctx.beginPath();
            ctx.arc(cx, cy, 75 * elScale * intensity, 0, Math.PI * 2);
            ctx.fill();
        }

        ctx.restore();
    });

    // 29. Server-Rack LED Matrix
    reg(['cp_server_led_matrix', 'item_29'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        ctx.save();
        const rw = 120 * elScale, rh = 140 * elScale;
        const rx = cx - rw * 0.5, ry = cy - rh * 0.5;

        ctx.fillStyle = '#0f172a';
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 2 * elScale;
        ctx.fillRect(rx, ry, rw, rh);
        ctx.strokeRect(rx, ry, rw, rh);

        ctx.fillStyle = '#1e293b';
        ctx.fillRect(rx, ry, 10 * elScale, rh);
        ctx.fillRect(rx + rw - 10 * elScale, ry, 10 * elScale, rh);
        ctx.fillStyle = '#475569';
        for (let sc = 8; sc < rh; sc += 16 * elScale) {
            ctx.fillRect(rx + 3 * elScale, ry + sc, 3 * elScale, 3 * elScale);
            ctx.fillRect(rx + rw - 7 * elScale, ry + sc, 3 * elScale, 3 * elScale);
        }

        const numBlades = 4;
        const bladeH = (rh - 20 * elScale) / numBlades;
        for (let b = 0; b < numBlades; b++) {
            const by = ry + 10 * elScale + b * bladeH;
            ctx.strokeStyle = '#1e293b';
            ctx.lineWidth = 1 * elScale;
            ctx.beginPath();
            ctx.moveTo(rx + 10 * elScale, by + bladeH);
            ctx.lineTo(rx + rw - 10 * elScale, by + bladeH);
            ctx.stroke();

            ctx.fillStyle = '#020617';
            for (let v = 0; v < 3; v++) {
                ctx.fillRect(rx + 14 * elScale, by + 4 * elScale + v * 4 * elScale, 25 * elScale, 2 * elScale);
            }

            const numLEDs = 8;
            for (let l = 0; l < numLEDs; l++) {
                const lx = rx + 45 * elScale + l * 7 * elScale;
                const ly = by + 7 * elScale;
                const bitVal = Math.sin(time * (12 + b * 4) * speed + l * 1.8 + b * 2.3);
                const isOn = bitVal > (0.1 - rough * 0.2);

                let ledColor;
                if (b === 0) ledColor = isOn ? '#10b981' : '#064e3b';
                else if (b === 1) ledColor = isOn ? '#38bdf8' : '#0c4a6e';
                else if (b === 2) ledColor = isOn ? '#f59e0b' : '#78350f';
                else ledColor = isOn ? '#a855f7' : '#581c87';

                ctx.fillStyle = ledColor;
                ctx.fillRect(lx, ly, 4 * elScale, 4 * elScale);

                if (isOn) {
                    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
                    ctx.fillRect(lx + 1 * elScale, ly + 1 * elScale, 2 * elScale, 2 * elScale);
                }
            }

            const meterHeight = (bladeH - 8 * elScale) * Math.abs(Math.sin(time * 6 + b * 3));
            ctx.fillStyle = '#22c55e';
            ctx.fillRect(rx + rw - 16 * elScale, by + bladeH - meterHeight - 3 * elScale, 3 * elScale, meterHeight);
        }

        ctx.strokeStyle = '#0284c7';
        ctx.lineWidth = 3 * elScale;
        ctx.beginPath();
        ctx.moveTo(rx + 25 * elScale, ry + rh);
        ctx.quadraticCurveTo(rx + 20 * elScale, ry + rh + 15 * elScale, rx + 10 * elScale, ry + rh + 25 * elScale);
        ctx.stroke();
        ctx.strokeStyle = '#e11d48';
        ctx.beginPath();
        ctx.moveTo(rx + 32 * elScale, ry + rh);
        ctx.quadraticCurveTo(rx + 35 * elScale, ry + rh + 18 * elScale, rx + 45 * elScale, ry + rh + 25 * elScale);
        ctx.stroke();

        ctx.restore();
    });

    // 30. Harsh Smog-Filtered Slanted Sunlight
    reg(['cp_slatted_megarays', 'item_30', 'cp_smog_slanted_sun'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        // Slanted sunlight bars cutting diagonally (transparent ambient)
        const bars = 5;
        for (let b = 0; b < bars; b++) {
            const bx = (b * (W / bars) + Math.sin(time * 0.4 * speed + b) * 15);
            ctx.save();
            const beamGrad = ctx.createLinearGradient(bx, 0, bx + 120, H);
            beamGrad.addColorStop(0, `rgba(254, 240, 138, ${0.45 * intensity})`);
            beamGrad.addColorStop(0.5, `rgba(234, 179, 8, ${0.28 * intensity})`);
            beamGrad.addColorStop(1, 'rgba(202, 138, 4, 0)');
            ctx.fillStyle = beamGrad;
            ctx.beginPath();
            ctx.moveTo(bx, 0);
            ctx.lineTo(bx + 40, 0);
            ctx.lineTo(bx + 160, H);
            ctx.lineTo(bx + 120, H);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }
        // Floating illuminated dust motes
        const motes = Math.round(15 + rough * 25);
        for (let m = 0; m < motes; m++) {
            const mx = (FX.hash(m * 29 + Math.floor(time * 3)) * W);
            const my = (FX.hash(m * 17) * H);
            FX.drawParticle(ctx, mx, my, 1.5, `rgba(254, 240, 138, ${0.85 * intensity})`, '#fef08a');
        }
    });

    // 31. Electrified Diamond-Plate Floor
    reg(['cp_electrified_deck', 'item_31', 'cp_electrified_floor'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        // Diamond plate metal pattern (transparent deck)
        ctx.strokeStyle = `rgba(51, 65, 85, ${0.55 * intensity})`;
        ctx.lineWidth = 1;
        for (let x = 0; x < W; x += 20) {
            for (let y = 0; y < H; y += 20) {
                ctx.beginPath();
                ctx.moveTo(x + 5, y + 5); ctx.lineTo(x + 15, y + 15);
                ctx.moveTo(x + 15, y + 5); ctx.lineTo(x + 5, y + 15);
                ctx.stroke();
            }
        }
        // Crackling electric voltage arcs across the plate
        const arcs = Math.round(4 + rough * 8);
        ctx.strokeStyle = `rgba(56, 189, 248, ${0.9 * intensity})`;
        ctx.lineWidth = 2.0;
        ctx.shadowColor = '#38bdf8';
        ctx.shadowBlur = 10;
        for (let a = 0; a < arcs; a++) {
            const x1 = FX.hash(a * 11 + Math.floor(time * 12 * speed)) * W;
            const y1 = FX.hash(a * 17 + Math.floor(time * 12 * speed)) * H;
            const x2 = x1 + (FX.hash(a * 23) - 0.5) * 60;
            const y2 = y1 + (FX.hash(a * 29) - 0.5) * 60;
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo((x1 + x2) * 0.5 + (FX.hash(a * 31) - 0.5) * 20, (y1 + y2) * 0.5);
            ctx.lineTo(x2, y2);
            ctx.stroke();
        }
        ctx.shadowBlur = 0;
    });

    // 32. Bubbling Corrosive Solvent Vat
    reg(['cp_solvent_vats', 'item_32', 'cp_solvent_vat'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        // Deep amber-green corrosive chemical vat container
        const vatGrad = ctx.createRadialGradient(W * 0.5, H * 0.5, 10, W * 0.5, H * 0.5, Math.min(W, H) * 0.48);
        vatGrad.addColorStop(0, `rgba(132, 204, 22, ${0.85 * intensity})`);
        vatGrad.addColorStop(0.7, `rgba(101, 163, 13, ${0.7 * intensity})`);
        vatGrad.addColorStop(1, 'rgba(26, 46, 5, 0.5)');
        ctx.fillStyle = vatGrad;
        ctx.beginPath();
        ctx.roundRect ? ctx.roundRect(8, 8, W - 16, H - 16, 12) : ctx.rect(8, 8, W - 16, H - 16);
        ctx.fill();
        // Dissolving acid foam rim
        ctx.strokeStyle = `rgba(236, 252, 203, ${0.75 * intensity})`;
        ctx.lineWidth = 3;
        ctx.stroke();
        // Bubbles forming and popping violently
        const bubbles = Math.round(12 + rough * 18);
        for (let b = 0; b < bubbles; b++) {
            const bx = (FX.hash(b * 37) * W);
            const by = (FX.hash(b * 53) * H);
            const phase = (time * 2.5 * speed + b * 0.25) % 1.0;
            const br = Math.sin(phase * Math.PI) * (10 + (b % 4) * 3) * elScale;
            if (br > 0) {
                ctx.fillStyle = `rgba(217, 249, 157, ${0.9 * intensity})`;
                ctx.beginPath();
                ctx.arc(bx, by, br, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    });

    // 33. Churning Sewage with Plastic Refuse
    reg(['cp_sewage_churn', 'item_33', 'cp_churning_sewage'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        // Swirling vortex currents (transparent drainage channel)
        const currents = 4;
        for (let c = 0; c < currents; c++) {
            const cx = (c + 0.5) * (W / currents);
            const cy = H * 0.5;
            const rot = time * (1.2 + c * 0.3) * speed;
            ctx.save();
            ctx.translate(cx, cy);
            ctx.rotate(rot);
            ctx.strokeStyle = `rgba(68, 64, 60, ${0.65 * intensity})`;
            ctx.lineWidth = 2.5;
            ctx.beginPath();
            ctx.arc(0, 0, 30 * elScale, 0, Math.PI * 1.5);
            ctx.stroke();
            ctx.restore();
        }
        // Floating neon plastic debris & bottles
        const trash = 9;
        for (let t = 0; t < trash; t++) {
            const tx = (FX.hash(t * 19 + Math.floor(time * 0.5)) * W);
            const ty = (FX.hash(t * 31) * H) + Math.sin(time * 2 + t) * 6;
            ctx.fillStyle = (t % 2 === 0) ? '#f43f5e' : '#06b6d4';
            ctx.fillRect(tx - 6, ty - 3, 12 * elScale, 6 * elScale);
        }
    });

    // 34. Radioactive Sludge Pools
    reg(['cp_radioactive_sludge', 'item_34'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        // Simmering neon-lime toxic organic pool
        const radGrad = ctx.createRadialGradient(W * 0.5, H * 0.5, 10, W * 0.5, H * 0.5, Math.min(W, H) * 0.46);
        radGrad.addColorStop(0, `rgba(34, 197, 94, ${0.9 * intensity})`);
        radGrad.addColorStop(0.7, `rgba(22, 101, 52, ${0.75 * intensity})`);
        radGrad.addColorStop(1, 'rgba(5, 46, 22, 0)');
        ctx.fillStyle = radGrad;
        ctx.beginPath();
        ctx.ellipse(W * 0.5, H * 0.5, W * 0.45, H * 0.42, 0, 0, Math.PI * 2);
        ctx.fill();
        // Rising toxic vapor blisters
        const blisters = Math.round(8 + rough * 12);
        for (let b = 0; b < blisters; b++) {
            const bx = FX.hash(b * 43) * W;
            const by = FX.hash(b * 61) * H;
            const pulse = Math.sin(time * 3 * speed + b) * 0.5 + 0.5;
            FX.drawRadialGlow(ctx, bx, by, 2, (15 + pulse * 12) * elScale, `rgba(187, 247, 208, ${0.9 * intensity})`, 'rgba(34, 197, 94, 0)');
        }
    });

    // 35. Molten Slag Heap
    reg(['cp_molten_slag_heap', 'item_35'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        // Glowing incandescent orange magma veins (transparent terrain)
        const veins = Math.round(5 + rough * 8);
        ctx.strokeStyle = `rgba(249, 115, 22, ${0.85 * intensity})`;
        ctx.lineWidth = 3.5;
        ctx.shadowColor = '#f97316';
        ctx.shadowBlur = 12;
        for (let v = 0; v < veins; v++) {
            const vy = (H / (veins + 1)) * (v + 1);
            ctx.beginPath();
            ctx.moveTo(0, vy);
            for (let x = 20; x < W; x += 30) {
                const jY = vy + (FX.hash(v * 17 + x) - 0.5) * 18;
                ctx.lineTo(x, jY);
            }
            ctx.lineTo(W, vy);
            ctx.stroke();
        }
        ctx.shadowBlur = 0;
    });

    // 36. Bank of CRT Monitors Wall
    reg(['cp_crt_telemetry_wall', 'item_36', 'cp_crt_monitor_wall'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const rows = 3, cols = 4;
        const mW = W / cols, mH = H / rows;
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const mx = c * mW + 4, my = r * mH + 4;
                ctx.fillStyle = '#020617';
                ctx.fillRect(mx, my, mW - 8, mH - 8);
                ctx.strokeStyle = '#38bdf8';
                ctx.lineWidth = 1;
                ctx.strokeRect(mx, my, mW - 8, mH - 8);
                // Rolling static band
                const rollY = my + ((time * 80 * speed + (r + c) * 30) % (mH - 8));
                ctx.fillStyle = `rgba(56, 189, 248, ${0.35 * intensity})`;
                ctx.fillRect(mx, rollY, mW - 8, 4);
            }
        }
    });

    // 37. Hydroponic Crop Trays
    reg(['cp_hydroponic_misting', 'item_37', 'cp_hydroponic_crop_trays'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        // Hydroponic tray rows (transparent floor)
        const trays = 4;
        const trayH = H / trays;
        for (let t = 0; t < trays; t++) {
            const ty = t * trayH;
            ctx.fillStyle = '#1e1b4b';
            ctx.fillRect(4, ty + 2, W - 8, trayH - 4);
            // Rows of engineered luminescent greens
            for (let x = 15; x < W - 15; x += 18) {
                ctx.fillStyle = `rgba(52, 211, 153, ${0.85 * intensity})`;
                ctx.beginPath();
                ctx.arc(x, ty + trayH * 0.5, 5 * elScale, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    });

    // 38. Sparking E-Waste Pile
    reg(['cp_ewaste_pile_sparks', 'item_38', 'cp_sparking_ewaste_pile'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.55;
        ctx.save();
        const pcbConfigs = [
            { x: -35, y: 15, w: 42, h: 26, rot: -0.15, col: '#064e3b' },
            { x: 12, y: 18, w: 48, h: 28, rot: 0.12, col: '#0f3d64' },
            { x: -15, y: -5, w: 38, h: 32, rot: 0.05, col: '#1e293b' },
            { x: 20, y: -8, w: 32, h: 22, rot: -0.22, col: '#064e3b' }
        ];

        for (let p = 0; p < pcbConfigs.length; p++) {
            const pcb = pcbConfigs[p];
            ctx.save();
            ctx.translate(cx + pcb.x * elScale, cy + pcb.y * elScale);
            ctx.rotate(pcb.rot);

            ctx.fillStyle = pcb.col;
            ctx.fillRect(-pcb.w * 0.5 * elScale, -pcb.h * 0.5 * elScale, pcb.w * elScale, pcb.h * elScale);
            ctx.strokeStyle = '#334155';
            ctx.lineWidth = 1 * elScale;
            ctx.strokeRect(-pcb.w * 0.5 * elScale, -pcb.h * 0.5 * elScale, pcb.w * elScale, pcb.h * elScale);

            ctx.strokeStyle = '#d97706';
            ctx.lineWidth = 1 * elScale;
            ctx.beginPath();
            ctx.moveTo(-pcb.w * 0.4 * elScale, 0);
            ctx.lineTo(0, 0);
            ctx.lineTo(pcb.w * 0.2 * elScale, -pcb.h * 0.3 * elScale);
            ctx.moveTo(-pcb.w * 0.2 * elScale, pcb.h * 0.3 * elScale);
            ctx.lineTo(pcb.w * 0.3 * elScale, pcb.h * 0.3 * elScale);
            ctx.stroke();

            ctx.fillStyle = '#fbbf24';
            for (let g = 0; g < 5; g++) {
                ctx.fillRect((-pcb.w * 0.4 + g * 6) * elScale, pcb.h * 0.4 * elScale, 3 * elScale, 3 * elScale);
            }

            ctx.fillStyle = '#0a0a0a';
            ctx.fillRect(-8 * elScale, -8 * elScale, 16 * elScale, 16 * elScale);
            ctx.restore();
        }

        ctx.fillStyle = '#475569';
        ctx.fillRect(cx - 16 * elScale, cy - 24 * elScale, 32 * elScale, 16 * elScale);
        ctx.fillStyle = '#ef4444';
        ctx.fillRect(cx - 12 * elScale, cy - 27 * elScale, 5 * elScale, 4 * elScale);
        ctx.fillStyle = '#3b82f6';
        ctx.fillRect(cx + 7 * elScale, cy - 27 * elScale, 5 * elScale, 4 * elScale);

        const sparkCycle = Math.sin(time * 14 * speed);
        if (sparkCycle > 0.4) {
            const arcStart = { x: cx - 10 * elScale, y: cy - 27 * elScale };
            const arcEnd = { x: cx + 9 * elScale, y: cy - 27 * elScale };
            const midY = cy - 35 * elScale - Math.random() * 8 * elScale;

            ctx.strokeStyle = '#67e8f9';
            ctx.lineWidth = 2.5 * elScale;
            ctx.beginPath();
            ctx.moveTo(arcStart.x, arcStart.y);
            ctx.lineTo(cx - 2 * elScale, midY);
            ctx.lineTo(cx + 3 * elScale, midY + 4 * elScale);
            ctx.lineTo(arcEnd.x, arcEnd.y);
            ctx.stroke();

            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 1 * elScale;
            ctx.stroke();

            for (let s = 0; s < 8; s++) {
                const sAng = s * 0.8 + time * 20;
                const sDist = (6 + Math.random() * 22) * elScale;
                ctx.fillStyle = (s % 2 === 0) ? '#fef08a' : '#f97316';
                ctx.fillRect(cx + Math.cos(sAng) * sDist, cy - 26 * elScale + Math.sin(sAng) * sDist, 2 * elScale, 2 * elScale);
            }

            const smkY = cy - 30 * elScale - ((time * 25) % 20) * elScale;
            ctx.fillStyle = 'rgba(148, 163, 184, 0.35)';
            ctx.beginPath();
            ctx.arc(cx + Math.sin(time * 4) * 8 * elScale, smkY, 5 * elScale, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
    });

    // 39. Subfloor Liquid Coolant
    reg(['cp_acrylic_coolant_floor', 'item_39', 'cp_subfloor_coolant'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        // Fast-moving fluorocarbon coolant ripples (transparent acrylic subfloor)
        const ripples = 12;
        ctx.strokeStyle = `rgba(186, 230, 253, ${0.65 * intensity})`;
        ctx.lineWidth = 2;
        for (let r = 0; r < ripples; r++) {
            const ry = (r * (H / ripples) + time * 60 * speed) % H;
            ctx.beginPath();
            ctx.moveTo(0, ry);
            ctx.bezierCurveTo(W * 0.33, ry + 10, W * 0.66, ry - 10, W, ry);
            ctx.stroke();
        }
        // Transparent acrylic tile joint rivets at corners instead of full cage lines
        ctx.fillStyle = 'rgba(56, 189, 248, 0.6)';
        for (let x = 30; x < W; x += 60) {
            for (let y = 30; y < H; y += 60) {
                ctx.beginPath();
                ctx.arc(x, y, 2.5 * elScale, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    });

    // 40. Vibrating Stacked Shipping Containers
    reg(['cp_shipping_containers', 'item_40', 'cp_vibrating_containers'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const containers = 3;
        const cH = H / containers;
        const vib = Math.sin(time * 25 * speed) * 1.5;
        for (let c = 0; c < containers; c++) {
            const cy = c * cH + vib;
            const cColors = ['#b91c1c', '#1d4ed8', '#b45309'];
            ctx.fillStyle = cColors[c % cColors.length];
            ctx.fillRect(6, cy + 4, W - 12, cH - 8);
            // Corrugated vertical ridges
            ctx.fillStyle = 'rgba(0, 0, 0, 0.35)';
            for (let x = 16; x < W - 16; x += 14) {
                ctx.fillRect(x, cy + 4, 3, cH - 8);
            }
        }
    });

    // 41. Cyberspace Glitch Grid (Localized Chromatic Aberration Tears)
    reg(['cp_cyberspace_glitch', 'item_41', 'cp_cyberspace_glitch_grid'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        // Localized digital glitch blocks jumping around center
        const glitchTears = Math.round(4 + rough * 6);
        for (let g = 0; g < glitchTears; g++) {
            const tSeed = Math.floor(time * 9 + g * 3);
            const gx = cx + (FX.hash(tSeed * 13) - 0.5) * (W * 0.7);
            const gy = cy + (FX.hash(tSeed * 29) - 0.5) * (H * 0.7);
            const gw = (30 + FX.hash(tSeed * 7) * 90) * elScale;
            const gh = (3 + FX.hash(tSeed * 11) * 8) * elScale;
            // Chromatic aberration RGB shift blocks
            ctx.fillStyle = (g % 3 === 0) ? `rgba(236, 72, 153, ${0.85 * intensity})` : (g % 3 === 1) ? `rgba(56, 189, 248, ${0.85 * intensity})` : `rgba(250, 204, 21, ${0.85 * intensity})`;
            ctx.fillRect(gx, gy, gw, gh);
        }
    });

    // 42. Hexagonal Energy Shield
    reg(['cp_hangar_shield', 'item_42', 'cp_hex_energy_shield'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        // Honeycomb hex grid (transparent shield barrier)
        const hexR = 24 * elScale;
        ctx.strokeStyle = `rgba(56, 189, 248, ${(0.45 + 0.25 * Math.sin(time * 3 * speed)) * intensity})`;
        ctx.lineWidth = 1.5;
        for (let y = 0; y < H + hexR; y += hexR * 1.5) {
            for (let x = 0; x < W + hexR; x += hexR * 1.732) {
                ctx.beginPath();
                for (let a = 0; a < 6; a++) {
                    const ang = (Math.PI / 3) * a;
                    const hx = x + Math.cos(ang) * hexR;
                    const hy = y + Math.sin(ang) * hexR;
                    if (a === 0) ctx.moveTo(hx, hy); else ctx.lineTo(hx, hy);
                }
                ctx.closePath();
                ctx.stroke();
            }
        }
    });

    // 43. Thick Clouds of White Tear Gas
    reg(['cp_riot_teargas_cloud', 'item_43', 'cp_tear_gas_cloud'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const clouds = Math.round(10 + rough * 15);
        for (let c = 0; c < clouds; c++) {
            const cx = (FX.hash(c * 17) * W) + Math.sin(time * 0.8 * speed + c) * 20;
            const cy = (FX.hash(c * 31) * H) + Math.cos(time * 0.6 * speed + c) * 15;
            const cr = (40 + (c % 4) * 15) * elScale;
            const grad = ctx.createRadialGradient(cx, cy, 2, cx, cy, cr);
            grad.addColorStop(0, `rgba(241, 245, 249, ${0.45 * intensity})`);
            grad.addColorStop(0.7, `rgba(226, 232, 240, ${0.25 * intensity})`);
            grad.addColorStop(1, 'rgba(203, 213, 225, 0)');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(cx, cy, cr, 0, Math.PI * 2);
            ctx.fill();
        }
    });

    // 44. Thermal-Vision Heat Distortion
    reg(['cp_thermal_heatmap', 'item_44', 'cp_thermal_distortion'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        // Localized shimmering thermal heat distortion plumes
        const plumes = 8;
        for (let p = 0; p < plumes; p++) {
            const px = ((p * 73 + time * 20 * speed) % (W + 60)) - 30;
            const py = H * 0.7 - Math.sin(time * 3 + p) * 20 * elScale - (p * 15 * elScale);
            const pr = (24 + (p % 3) * 10 + rough * 8) * elScale;
            const grad = ctx.createRadialGradient(px, py, 2, px, py, pr);
            grad.addColorStop(0, `rgba(239, 68, 68, ${0.45 * intensity})`);
            grad.addColorStop(0.4, `rgba(234, 179, 8, ${0.25 * intensity})`);
            grad.addColorStop(0.8, `rgba(168, 85, 247, ${0.1 * intensity})`);
            grad.addColorStop(1, 'rgba(168, 85, 247, 0)');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(px, py, pr, 0, Math.PI * 2);
            ctx.fill();
        }
    });

    // 45. Gray Nanobot Swarm
    reg(['cp_nanobot_deck_swarm', 'item_45', 'cp_nanobot_swarm'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.save();
        const numDunes = 5;
        for (let d = 0; d < numDunes; d++) {
            const duneBaseY = H * (0.2 + d * 0.16);
            const duneAmp = (8 + d * 3 + rough * 8) * elScale;
            const duneSpeed = (0.8 + d * 0.3) * speed;

            ctx.fillStyle = d % 2 === 0 ? 'rgba(71, 85, 105, 0.65)' : 'rgba(51, 65, 85, 0.75)';
            ctx.beginPath();
            ctx.moveTo(0, duneBaseY + duneAmp);
            for (let x = 0; x <= W; x += 20) {
                const y = duneBaseY + Math.sin((x * 0.03) + time * duneSpeed + d * 1.5) * duneAmp;
                ctx.lineTo(x, y);
            }
            ctx.lineTo(W, duneBaseY + 30 * elScale);
            ctx.lineTo(0, duneBaseY + 30 * elScale);
            ctx.closePath();
            ctx.fill();
        }

        const grainCount = Math.round(55 + rough * 45);
        for (let g = 0; g < grainCount; g++) {
            const gSeed = g * 13.7;
            const gx = (FX.hash(gSeed) * W + Math.sin(time * 1.5 * speed + g) * 25) % W;
            const gy = (FX.hash(gSeed + 5) * H + Math.cos(time * 1.2 * speed + g) * 18) % H;

            const isSpecular = Math.sin(time * 8 + g * 2.3) > 0.6;
            ctx.fillStyle = isSpecular ? 'rgba(248, 250, 252, 0.95)' : 'rgba(148, 163, 184, 0.7)';
            ctx.fillRect(gx, gy, (isSpecular ? 2.5 : 1.5) * elScale, (isSpecular ? 2.5 : 1.5) * elScale);

            if (g % 8 === 0 && isSpecular) {
                ctx.fillStyle = 'rgba(6, 182, 212, 0.6)';
                ctx.beginPath();
                ctx.arc(gx, gy, 4 * elScale, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        ctx.restore();
    });

    // 46. Diagonal Cyberpunk Rain with Splashes
    reg(['cp_asphalt_rain', 'item_46', 'cp_diagonal_cyber_rain'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const drops = Math.round(35 + rough * 50);
        ctx.strokeStyle = `rgba(56, 189, 248, ${0.65 * intensity})`;
        ctx.lineWidth = 1.2;
        for (let d = 0; d < drops; d++) {
            const dx = (FX.hash(d * 19) * W + time * 180 * speed) % (W + 60) - 30;
            const dy = (FX.hash(d * 43) * H + time * 450 * speed) % (H + 40) - 20;
            ctx.beginPath();
            ctx.moveTo(dx, dy);
            ctx.lineTo(dx - 12, dy + 28);
            ctx.stroke();
            // Ground splash ring
            if (dy > H * 0.8) {
                ctx.strokeRect(dx - 14, dy + 26, 6, 2);
            }
        }
    });

    // 47. Subway Grate Vapor
    reg(['cp_street_grate_vapor', 'item_47', 'cp_subway_grate_vapor'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.55;
        const gw = 110 * elScale, gh = 65 * elScale;
        const gx = cx - gw * 0.5, gy = cy - gh * 0.5;

        ctx.save();
        const tunnelGlow = ctx.createLinearGradient(0, gy, 0, gy + gh);
        tunnelGlow.addColorStop(0, 'rgba(245, 158, 11, ' + (0.8 * intensity) + ')');
        tunnelGlow.addColorStop(0.5, 'rgba(234, 88, 12, ' + (0.8 * intensity) + ')');
        tunnelGlow.addColorStop(1, 'rgba(0, 0, 0, 0.6)');
        ctx.fillStyle = tunnelGlow;
        ctx.fillRect(gx + 6 * elScale, gy + 6 * elScale, gw - 12 * elScale, gh - 12 * elScale);

        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 4 * elScale;
        ctx.strokeRect(gx, gy, gw, gh);

        ctx.fillStyle = '#64748b';
        ctx.fillRect(gx + 2 * elScale, gy + 2 * elScale, 4 * elScale, 4 * elScale);
        ctx.fillRect(gx + gw - 6 * elScale, gy + 2 * elScale, 4 * elScale, 4 * elScale);
        ctx.fillRect(gx + 2 * elScale, gy + gh - 6 * elScale, 4 * elScale, 4 * elScale);
        ctx.fillRect(gx + gw - 6 * elScale, gy + gh - 6 * elScale, 4 * elScale, 4 * elScale);

        const numBars = 12;
        const barSpacing = (gw - 12 * elScale) / numBars;
        ctx.fillStyle = '#1e293b';
        ctx.strokeStyle = '#0f172a';
        ctx.lineWidth = 1 * elScale;
        for (let b = 0; b < numBars; b++) {
            const bx = gx + 6 * elScale + b * barSpacing;
            ctx.fillRect(bx, gy + 5 * elScale, barSpacing * 0.55, gh - 10 * elScale);
            ctx.strokeRect(bx, gy + 5 * elScale, barSpacing * 0.55, gh - 10 * elScale);
        }

        const numPuffs = 10;
        for (let s = 0; s < numPuffs; s++) {
            const st = (time * 1.8 * speed + s * 0.2) % 1.5;
            const puffY = gy + gh * 0.3 - st * (80 * elScale);
            const spread = (st * 35 + rough * 15) * elScale;
            const puffX = cx + Math.sin(s * 1.7 + time * 3) * spread;
            const puffR = (10 + st * 22) * elScale;
            const alpha = (1 - st / 1.5) * 0.45 * intensity;

            const steamGrad = ctx.createRadialGradient(puffX, puffY, 2, puffX, puffY, puffR);
            steamGrad.addColorStop(0, 'rgba(248, 250, 252, ' + alpha + ')');
            steamGrad.addColorStop(0.6, 'rgba(226, 232, 240, ' + (alpha * 0.6) + ')');
            steamGrad.addColorStop(1, 'rgba(203, 213, 225, 0)');
            ctx.fillStyle = steamGrad;
            ctx.beginPath();
            ctx.arc(puffX, puffY, puffR, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
    });

    // 48. Falling Black Soot and Ash
    reg(['cp_slum_soot_fall', 'item_48', 'cp_black_soot_fall'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const flakes = Math.round(25 + rough * 35);
        for (let f = 0; f < flakes; f++) {
            const fx = (FX.hash(f * 13) * W + Math.sin(time * 2 + f) * 15);
            const fy = (time * (25 + (f % 4) * 8) * speed + FX.hash(f * 31) * H) % H;
            const isEmber = (f % 5 === 0);
            ctx.fillStyle = isEmber ? `rgba(249, 115, 22, ${0.9 * intensity})` : 'rgba(30, 41, 59, 0.75)';
            ctx.beginPath();
            ctx.arc(fx, fy, isEmber ? 2.0 : 2.5, 0, Math.PI * 2);
            ctx.fill();
        }
    });

    // 49. Swirling Eddies of Trash in Plaza Corner
    reg(['cp_plaza_trash_eddy', 'item_49', 'cp_trash_wind_eddies'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        const items = Math.round(12 + rough * 16);
        for (let i = 0; i < items; i++) {
            const ang = time * (3 + (i % 3)) * speed + i * 0.6;
            const dist = (20 + (i % 5) * 18) * elScale;
            const tx = cx + Math.cos(ang) * dist;
            const ty = cy + Math.sin(ang) * (dist * 0.6);
            ctx.save();
            ctx.translate(tx, ty);
            ctx.rotate(ang + time * 5);
            ctx.fillStyle = (i % 2 === 0) ? '#f59e0b' : '#e2e8f0';
            ctx.fillRect(-5, -3, 10 * elScale, 6 * elScale);
            ctx.restore();
        }
    });

    // 50. Overhead Sky-Traffic Shadows
    reg(['cp_skytraffic_shadows', 'item_50', 'cp_overhead_traffic_shadows'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.save();
        const vehicles = [
            { speedMult: 1.6, yRatio: 0.35, scale: 1.0, type: 'spinner' },
            { speedMult: 0.9, yRatio: 0.68, scale: 1.4, type: 'hauler' }
        ];

        for (let v = 0; v < vehicles.length; v++) {
            const veh = vehicles[v];
            const travel = (time * 120 * veh.speedMult * speed + v * (W * 0.55)) % (W + 280) - 140;
            const sy = H * veh.yRatio + Math.sin(time * 0.8 + v) * 15 * elScale;

            ctx.save();
            ctx.translate(travel, sy);
            ctx.rotate(0.08);

            ctx.fillStyle = 'rgba(15, 23, 42, ' + (0.8 * intensity) + ')';

            if (veh.type === 'spinner') {
                ctx.beginPath();
                ctx.moveTo(35 * elScale, 0);
                ctx.lineTo(-20 * elScale, -16 * elScale);
                ctx.lineTo(-32 * elScale, -10 * elScale);
                ctx.lineTo(-22 * elScale, 0);
                ctx.lineTo(-32 * elScale, 10 * elScale);
                ctx.lineTo(-20 * elScale, 16 * elScale);
                ctx.closePath();
                ctx.fill();

                ctx.fillStyle = 'rgba(56, 189, 248, ' + (0.8 * intensity) + ')';
                ctx.beginPath();
                ctx.arc(-24 * elScale, -8 * elScale, 6 * elScale, 0, Math.PI * 2);
                ctx.arc(-24 * elScale, 8 * elScale, 6 * elScale, 0, Math.PI * 2);
                ctx.fill();
            } else {
                ctx.beginPath();
                ctx.roundRect(-45 * elScale, -20 * elScale, 90 * elScale, 40 * elScale, 8 * elScale);
                ctx.fill();
                ctx.fillRect(-35 * elScale, -28 * elScale, 16 * elScale, 8 * elScale);
                ctx.fillRect(19 * elScale, -28 * elScale, 16 * elScale, 8 * elScale);
                ctx.fillRect(-35 * elScale, 20 * elScale, 16 * elScale, 8 * elScale);
                ctx.fillRect(19 * elScale, 20 * elScale, 16 * elScale, 8 * elScale);

                if (Math.sin(time * 8) > 0.3) {
                    ctx.fillStyle = 'rgba(245, 158, 11, ' + (0.8 * intensity) + ')';
                    ctx.beginPath();
                    ctx.arc(0, 0, 8 * elScale, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
            ctx.restore();
        }
        ctx.restore();
    });

    // =========================================================================
    // C. SPOT / SINGLE FOCAL OBJECTS (51 - 75)
    // =========================================================================

    // 51. Broken Neon Storefront Sign
    reg(['cp_flickering_neon', 'item_51', 'cp_broken_neon_sign'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        const buzz = Math.sin(time * 35 * speed);
        const dropout = FX.hash(Math.floor(time * 18)) > 0.22;
        const isLit = buzz > -0.4 && dropout;

        ctx.save();
        ctx.fillStyle = '#0f172a';
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 2 * elScale;
        ctx.fillRect(cx - 75 * elScale, cy - 38 * elScale, 150 * elScale, 76 * elScale);
        ctx.strokeRect(cx - 75 * elScale, cy - 38 * elScale, 150 * elScale, 76 * elScale);

        ctx.fillStyle = '#1e293b';
        ctx.fillRect(cx - 70 * elScale, cy - 32 * elScale, 24 * elScale, 22 * elScale);
        ctx.fillStyle = '#eab308';
        ctx.font = 'bold ' + Math.floor(10 * elScale) + 'px sans-serif';
        ctx.fillText('\u26A1', cx - 64 * elScale, cy - 16 * elScale);

        ctx.font = '900 ' + Math.floor(24 * elScale) + 'px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        ctx.fillStyle = '#475569';
        for (let st = -40; st <= 40; st += 20) {
            ctx.fillRect(cx + st * elScale, cy - 12 * elScale, 3 * elScale, 6 * elScale);
            ctx.fillRect(cx + st * elScale, cy + 14 * elScale, 3 * elScale, 6 * elScale);
        }

        if (isLit) {
            ctx.shadowColor = '#f43f5e';
            ctx.shadowBlur = 18 * intensity;
            ctx.fillStyle = 'rgba(251, 113, 133, ' + (0.8 * intensity) + ')';
            ctx.fillText('BAR', cx, cy - 10 * elScale);

            ctx.shadowColor = '#06b6d4';
            ctx.shadowBlur = 18 * intensity;
            ctx.fillStyle = 'rgba(103, 232, 249, ' + (0.8 * intensity) + ')';
            ctx.fillText('\u30CD\u30AA\u30F3', cx, cy + 18 * elScale);
            ctx.shadowBlur = 0;

            ctx.fillStyle = '#ffffff';
            ctx.fillText('BAR', cx, cy - 10 * elScale);
            ctx.fillText('\u30CD\u30AA\u30F3', cx, cy + 18 * elScale);
        } else {
            ctx.fillStyle = '#334155';
            ctx.fillText('BAR', cx, cy - 10 * elScale);
            ctx.fillText('\u30CD\u30AA\u30F3', cx, cy + 18 * elScale);

            if (Math.sin(time * 20) > 0.5) {
                const spx = cx + 32 * elScale;
                const spy = cy - 10 * elScale;
                ctx.strokeStyle = '#c084fc';
                ctx.lineWidth = 1.5 * elScale;
                ctx.beginPath();
                ctx.moveTo(spx, spy);
                ctx.lineTo(spx + 8 * elScale, spy - 6 * elScale);
                ctx.lineTo(spx + 12 * elScale, spy - 2 * elScale);
                ctx.stroke();
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(spx + 10 * elScale, spy - 4 * elScale, 2 * elScale, 2 * elScale);
            }
        }
        ctx.restore();
    });

    // 52. Holographic Corporate Billboard (Top-Down Floor Emitter & Hovering 3D Hologram)
    reg(['cp_holo_billboard', 'item_52', 'cp_holo_corporate_billboard'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        // Circular recessed floor projector housing
        ctx.fillStyle = '#090d16';
        ctx.beginPath();
        ctx.arc(cx, cy, 38 * elScale, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 2.5 * elScale;
        ctx.stroke();

        // Glowing emitter ring
        ctx.strokeStyle = `rgba(56, 189, 248, ${0.75 * intensity})`;
        ctx.lineWidth = 2 * elScale;
        ctx.beginPath();
        ctx.arc(cx, cy, 30 * elScale, 0, Math.PI * 2);
        ctx.stroke();

        // Holographic floor glow wash
        const floorGlow = ctx.createRadialGradient(cx, cy, 5, cx, cy, 60 * elScale);
        floorGlow.addColorStop(0, `rgba(56, 189, 248, ${0.45 * intensity})`);
        floorGlow.addColorStop(0.6, `rgba(0, 255, 200, ${0.2 * intensity})`);
        floorGlow.addColorStop(1, 'rgba(0, 255, 200, 0)');
        ctx.fillStyle = floorGlow;
        ctx.beginPath();
        ctx.arc(cx, cy, 60 * elScale, 0, Math.PI * 2);
        ctx.fill();

        // Rotating 3D wireframe corporate logo hovering at center
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(time * 1.5 * speed);
        ctx.strokeStyle = `rgba(0, 255, 200, ${0.95 * intensity})`;
        ctx.lineWidth = 2.2 * elScale;
        ctx.shadowColor = '#00ffc8';
        ctx.shadowBlur = 10 * intensity;
        ctx.strokeRect(-22 * elScale, -22 * elScale, 44 * elScale, 44 * elScale);
        ctx.beginPath();
        ctx.arc(0, 0, 16 * elScale, 0, Math.PI * 2);
        ctx.stroke();
        ctx.shadowBlur = 0;
        ctx.restore();

        // Digital scanline interference ripples
        FX.drawScanlines(ctx, cx - 45 * elScale, cy - 45 * elScale, 90 * elScale, 90 * elScale, 4, 0.3);
    });

    // 53. Bent Sputtering Streetlamp (Top-Down Overhead Finial & 360 Radial Light Pool)
    reg(['cp_bent_streetlamp', 'item_53', 'cp_bent_sputtering_streetlamp'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        // Sputtering sodium bulb flicker
        const lampOn = (Math.sin(time * 28 * speed) > -0.4) && (FX.hash(Math.floor(time * 8)) > 0.2);

        // Radial warm sodium light pool on ground plane (360 degrees)
        if (lampOn) {
            const glowR = (80 + rough * 20) * elScale;
            const groundLight = ctx.createRadialGradient(cx, cy, 4, cx, cy, glowR);
            groundLight.addColorStop(0, `rgba(254, 240, 138, ${0.85 * intensity})`);
            groundLight.addColorStop(0.35, `rgba(234, 179, 8, ${0.45 * intensity})`);
            groundLight.addColorStop(0.75, `rgba(202, 138, 4, ${0.15 * intensity})`);
            groundLight.addColorStop(1, 'rgba(202, 138, 4, 0)');
            ctx.fillStyle = groundLight;
            ctx.beginPath();
            ctx.arc(cx, cy, glowR, 0, Math.PI * 2);
            ctx.fill();
        }

        // Cast shadow of the bent arm extending outward
        ctx.fillStyle = 'rgba(15, 23, 42, 0.55)';
        ctx.beginPath();
        ctx.ellipse(cx + 8 * elScale, cy + 8 * elScale, 14 * elScale, 6 * elScale, Math.PI * 0.25, 0, Math.PI * 2);
        ctx.fill();

        // Overhead round lamppost hood / finial seen straight down
        ctx.fillStyle = '#1e293b';
        ctx.beginPath();
        ctx.arc(cx, cy, 10 * elScale, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 2 * elScale;
        ctx.stroke();

        // Central incandescent bulb tip
        if (lampOn) {
            ctx.fillStyle = '#ffffff';
            ctx.shadowColor = '#fef08a';
            ctx.shadowBlur = 8;
            ctx.beginPath();
            ctx.arc(cx, cy, 3.5 * elScale, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
        }
    });

    // 54. Burning Trash-Can Fire Barrel
    reg(['cp_trash_firebarrel', 'item_54', 'cp_trashcan_fire_barrel'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.58;
        // 55-gallon steel drum
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(cx - 18 * elScale, cy - 20 * elScale, 36 * elScale, 40 * elScale);
        ctx.strokeStyle = '#0f172a';
        ctx.lineWidth = 2;
        ctx.strokeRect(cx - 18 * elScale, cy - 20 * elScale, 36 * elScale, 40 * elScale);
        // Venting air holes glowing with internal coals
        for (let h = -1; h <= 1; h++) {
            ctx.fillStyle = '#f97316';
            ctx.beginPath();
            ctx.arc(cx + h * 10 * elScale, cy + 10 * elScale, 2.5 * elScale, 0, Math.PI * 2);
            ctx.fill();
        }
        // Roaring flames licking out of top
        const flames = 5;
        for (let f = 0; f < flames; f++) {
            const fx = cx - 12 * elScale + f * (6 * elScale) + Math.sin(time * 10 + f) * 3;
            const fy = cy - 22 * elScale - Math.abs(Math.sin(time * 12 + f * 2)) * 26 * elScale;
            const fr = (7 + (f % 3) * 3) * elScale;
            FX.drawRadialGlow(ctx, fx, fy, 1, fr, `rgba(255, 237, 213, ${0.95 * intensity})`, 'rgba(234, 88, 12, 0)');
        }
        // Rising glowing embers
        for (let e = 0; e < 6; e++) {
            const ex = cx + (FX.hash(e * 13) - 0.5) * 30 * elScale;
            const ey = cy - 25 * elScale - ((time * 40 * speed + e * 18) % 45);
            ctx.fillStyle = '#fed7aa';
            ctx.fillRect(ex, ey, 2, 2);
        }
    });

    // 55. Rotating Amber Warning Beacon
    reg(['cp_amber_warning_beacon', 'item_55'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        const rot = time * 6.5 * speed;
        // Industrial base collar
        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.arc(cx, cy, 22 * elScale, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#ca8a04';
        ctx.lineWidth = 3;
        ctx.stroke();
        // Sweeping amber volumetric beam
        FX.drawVolumetricCone(ctx, cx, cy, rot, Math.max(W, H) * 0.8, 0.55, `rgba(245, 158, 11, ${0.85 * intensity})`, 'rgba(245, 158, 11, 0)');
        // Bright central lens dome
        FX.drawRadialGlow(ctx, cx, cy, 2, 16 * elScale, `rgba(255, 251, 235, ${0.98 * intensity})`, 'rgba(217, 119, 6, 0)');
    });

    // 56. Severed High-Voltage Power Cable
    reg(['cp_whipping_cable', 'item_56', 'cp_severed_power_cable'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        // Whip kinematics calculation
        const whipX = cx + Math.sin(time * 14 * speed) * (35 * elScale);
        const whipY = cy + Math.abs(Math.cos(time * 14 * speed)) * (25 * elScale);
        // Heavy black rubber cable
        ctx.strokeStyle = '#0f172a';
        ctx.lineWidth = 5 * elScale;
        ctx.beginPath();
        ctx.moveTo(0, cy - 20 * elScale);
        ctx.quadraticCurveTo(cx * 0.5, cy, whipX, whipY);
        ctx.stroke();
        // Violet/blue electrical explosion at ground contact
        if (Math.abs(Math.sin(time * 14 * speed)) > 0.7) {
            FX.drawRadialGlow(ctx, whipX, whipY, 2, 35 * elScale, `rgba(255, 255, 255, ${0.98 * intensity})`, 'rgba(59, 130, 246, 0)');
            // Flying copper sparks
            for (let s = 0; s < 10; s++) {
                const sAng = s * 0.62 + time * 5;
                const sDist = (12 + FX.hash(s * 19) * 25) * elScale;
                ctx.fillStyle = '#93c5fd';
                ctx.beginPath();
                ctx.arc(whipX + Math.cos(sAng) * sDist, whipY + Math.sin(sAng) * sDist, 2, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    });

    // 57. Automated Ceiling Turret (Top-Down Overhead Battlemap View)
    reg(['cp_ceiling_turret', 'item_57', 'cp_automated_ceiling_turret'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.4;
        const pan = Math.sin(time * 1.5 * speed) * 0.85;
        ctx.save();

        // Ceiling mounting base flange ring bolted to ceiling
        const baseR = 32 * elScale;
        ctx.fillStyle = '#1e293b';
        ctx.beginPath();
        ctx.arc(cx, cy, baseR, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 3 * elScale;
        ctx.stroke();

        // Hex bolts around the outer ring
        for (let b = 0; b < 6; b++) {
            const bAng = (b / 6) * Math.PI * 2;
            const bx = cx + Math.cos(bAng) * (baseR - 5 * elScale);
            const by = cy + Math.sin(bAng) * (baseR - 5 * elScale);
            ctx.fillStyle = '#64748b';
            ctx.beginPath();
            ctx.arc(bx, by, 2 * elScale, 0, Math.PI * 2);
            ctx.fill();
        }

        // 360-degree rotating gimbal turntable ring
        const gimbalR = 20 * elScale;
        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.arc(cx, cy, gimbalR, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 2 * elScale;
        ctx.stroke();

        // Swiveling turret pod & dual autocannons (seen from directly overhead)
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(pan + Math.PI * 0.5); // Aiming downward toward battlemap floor

        // Ball turret central dome
        ctx.fillStyle = '#334155';
        ctx.beginPath();
        ctx.arc(0, 0, 13 * elScale, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#64748b';
        ctx.lineWidth = 1.5 * elScale;
        ctx.stroke();

        // Twin heavy autocannon barrels extending forward
        const barrelLen = 30 * elScale;
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(-6 * elScale, 8 * elScale, 3.5 * elScale, barrelLen);
        ctx.fillRect(2.5 * elScale, 8 * elScale, 3.5 * elScale, barrelLen);

        // Muzzle flash / heat glow at barrel tips
        const heatGlow = Math.sin(time * 8) * 0.3 + 0.7;
        ctx.fillStyle = 'rgba(249, 115, 22, ' + (0.8 * intensity) + ')';
        ctx.fillRect(-6 * elScale, 8 * elScale + barrelLen - 2, 3.5 * elScale, 3 * elScale);
        ctx.fillRect(2.5 * elScale, 8 * elScale + barrelLen - 2, 3.5 * elScale, 3 * elScale);

        // Red laser targeting beam projecting onto battlemap floor
        const laserReach = Math.min(H * 0.55, 180 * elScale);
        ctx.strokeStyle = 'rgba(239, 68, 68, ' + (0.8 * intensity) + ')';
        ctx.lineWidth = 1.8 * elScale;
        ctx.beginPath();
        ctx.moveTo(0, 8 * elScale + barrelLen);
        ctx.lineTo(0, 8 * elScale + barrelLen + laserReach);
        ctx.stroke();

        // Targeting laser dot & reticle dancing on the floor
        const dotY = 8 * elScale + barrelLen + laserReach;
        const dotJitterX = (Math.sin(time * 12) + Math.cos(time * 17)) * 2 * elScale;
        const dotJitterY = (Math.cos(time * 14) + Math.sin(time * 19)) * 2 * elScale;

        // Laser dot glow
        ctx.fillStyle = '#ef4444';
        ctx.beginPath();
        ctx.arc(dotJitterX, dotY + dotJitterY, 3.5 * elScale, 0, Math.PI * 2);
        ctx.fill();

        // Concentric targeting crosshair reticle
        ctx.strokeStyle = 'rgba(239, 68, 68, ' + (0.8 * intensity) + ')';
        ctx.lineWidth = 1 * elScale;
        ctx.beginPath();
        ctx.arc(dotJitterX, dotY + dotJitterY, 9 * elScale, 0, Math.PI * 2);
        ctx.stroke();

        ctx.restore();
        ctx.restore();
    });

    // 58. Blinking Laser Tripwire
    reg(['cp_laser_tripwire', 'item_58'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        // Twin chrome emitter posts on left and right
        ctx.fillStyle = '#334155';
        ctx.fillRect(10, cy - 14 * elScale, 12 * elScale, 28 * elScale);
        ctx.fillRect(W - 22, cy - 14 * elScale, 12 * elScale, 28 * elScale);
        // Pulsing ruby laser beam
        const pulse = 0.7 + 0.3 * Math.sin(time * 12 * speed);
        ctx.strokeStyle = `rgba(239, 68, 68, ${pulse * intensity})`;
        ctx.lineWidth = 2.0;
        ctx.shadowColor = '#ef4444';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.moveTo(22, cy); ctx.lineTo(W - 22, cy);
        ctx.stroke();
        ctx.shadowBlur = 0;
        // Emitter glow pips
        FX.drawRadialGlow(ctx, 22, cy, 1, 8 * elScale, 'rgba(255, 200, 200, 0.95)', 'rgba(239, 68, 68, 0)');
        FX.drawRadialGlow(ctx, W - 22, cy, 1, 8 * elScale, 'rgba(255, 200, 200, 0.95)', 'rgba(239, 68, 68, 0)');
    });

    // 59. Overheating Plasma Generator
    reg(['cp_plasma_generator', 'item_59', 'cp_overheating_generator'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        const heat = 0.65 + 0.35 * Math.sin(time * 4 * speed);
        // Heavy reactor turbine housing
        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.arc(cx, cy, 38 * elScale, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = `rgba(239, 68, 68, ${heat * intensity})`;
        ctx.lineWidth = 3.5;
        ctx.stroke();
        // Alarming red core heat glow
        FX.drawRadialGlow(ctx, cx, cy, 4, 34 * elScale, `rgba(239, 68, 68, ${heat * intensity})`, 'rgba(239, 68, 68, 0)');
        // Intermittent white steam pressure release burst
        if (Math.sin(time * 6 * speed) > 0.5) {
            for (let v = 0; v < 4; v++) {
                const ang = (Math.PI * 0.5) * v;
                FX.drawVolumetricCone(ctx, cx, cy, ang, 45 * elScale, 0.45, `rgba(255, 255, 255, ${0.85 * intensity})`, 'rgba(241, 245, 249, 0)');
            }
        }
    });

    // 60. Industrial Exhaust Fan with Spinning Blades
    reg(['cp_exhaust_fan', 'item_60', 'cp_industrial_exhaust_fan'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        const rot = time * 14 * speed;
        // Amber backlit vent glow behind fan
        FX.drawRadialGlow(ctx, cx, cy, 4, 45 * elScale, `rgba(245, 158, 11, ${0.65 * intensity})`, 'rgba(245, 158, 11, 0)');
        // Square vent duct housing
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 4 * elScale;
        ctx.strokeRect(cx - 38 * elScale, cy - 38 * elScale, 76 * elScale, 76 * elScale);
        // 6 spinning razor-sharp steel fan blades
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(rot);
        const blades = 6;
        ctx.fillStyle = '#0f172a';
        for (let b = 0; b < blades; b++) {
            ctx.rotate(Math.PI * 2 / blades);
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(8 * elScale, -34 * elScale);
            ctx.lineTo(-8 * elScale, -34 * elScale);
            ctx.closePath();
            ctx.fill();
        }
        // Center hub
        ctx.fillStyle = '#475569';
        ctx.beginPath();
        ctx.arc(0, 0, 10 * elScale, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    });

    // 61. 3D Holographic City Map
    reg(['cp_holo_city_map', 'item_61', 'cp_3d_holo_city_map'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        // War room table rim
        ctx.strokeStyle = '#1e293b';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(cx, cy, 48 * elScale, 0, Math.PI * 2);
        ctx.stroke();
        // Rotating 3D wireframe skyscraper pillars
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(time * 0.6 * speed);
        ctx.strokeStyle = `rgba(0, 255, 200, ${0.85 * intensity})`;
        ctx.lineWidth = 1.2;
        ctx.shadowColor = '#00ffc8';
        ctx.shadowBlur = 8;
        const bldgs = 8;
        for (let b = 0; b < bldgs; b++) {
            const ang = (Math.PI * 2 / bldgs) * b;
            const dist = (14 + (b % 3) * 10) * elScale;
            const bx = Math.cos(ang) * dist;
            const by = Math.sin(ang) * dist;
            const bH = (12 + (b % 4) * 8) * elScale;
            ctx.strokeRect(bx - 5 * elScale, by - 5 * elScale, 10 * elScale, 10 * elScale);
        }
        ctx.shadowBlur = 0;
        ctx.restore();
    });

    // 62. Hacked Terminal Scrolling Matrix Code
    reg(['cp_matrix_terminal', 'item_62', 'cp_hacked_terminal_matrix'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        // Monitor bezel
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(cx - 45 * elScale, cy - 35 * elScale, 90 * elScale, 70 * elScale);
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2;
        ctx.strokeRect(cx - 45 * elScale, cy - 35 * elScale, 90 * elScale, 70 * elScale);
        // Green matrix code cascade
        ctx.save();
        ctx.beginPath();
        ctx.rect(cx - 42 * elScale, cy - 32 * elScale, 84 * elScale, 64 * elScale);
        ctx.clip();
        ctx.fillStyle = '#022c22';
        ctx.fill();
        ctx.font = `${Math.round(8 * elScale)}px monospace`;
        ctx.fillStyle = `rgba(52, 211, 153, ${0.95 * intensity})`;
        for (let c = 0; c < 6; c++) {
            const colX = cx - 38 * elScale + c * (14 * elScale);
            const offset = (time * (40 + c * 10) * speed) % 60;
            ctx.fillText('0101', colX, cy - 20 * elScale + offset);
            ctx.fillText('7F3A', colX, cy - 5 * elScale + offset);
            ctx.fillText('ROOT', colX, cy + 10 * elScale + offset);
        }
        ctx.restore();
    });

    // 63. Street-Food Noodle Stall Steam
    reg(['cp_noodle_stall_steam', 'item_63'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.58;
        ctx.save();
        ctx.fillStyle = '#5c2b0e';
        ctx.fillRect(cx - 45 * elScale, cy - 5 * elScale, 90 * elScale, 45 * elScale);
        ctx.fillStyle = '#3d1b08';
        ctx.fillRect(cx - 50 * elScale, cy - 10 * elScale, 100 * elScale, 8 * elScale);

        ctx.fillStyle = '#475569';
        ctx.beginPath();
        ctx.moveTo(cx - 55 * elScale, cy - 45 * elScale);
        ctx.lineTo(cx + 55 * elScale, cy - 45 * elScale);
        ctx.lineTo(cx + 60 * elScale, cy - 35 * elScale);
        ctx.lineTo(cx - 60 * elScale, cy - 35 * elScale);
        ctx.closePath();
        ctx.fill();

        const lanX = cx - 35 * elScale;
        const lanY = cy - 25 * elScale;
        const lanSwing = Math.sin(time * 2 * speed) * 3 * elScale;

        ctx.strokeStyle = '#1e293b';
        ctx.lineWidth = 1.5 * elScale;
        ctx.beginPath();
        ctx.moveTo(lanX, cy - 35 * elScale);
        ctx.lineTo(lanX + lanSwing, lanY);
        ctx.stroke();

        ctx.fillStyle = '#dc2626';
        ctx.beginPath();
        ctx.ellipse(lanX + lanSwing, lanY + 10 * elScale, 10 * elScale, 14 * elScale, 0, 0, Math.PI * 2);
        ctx.fill();

        const lanGlow = ctx.createRadialGradient(lanX + lanSwing, lanY + 10 * elScale, 2, lanX + lanSwing, lanY + 10 * elScale, 28 * elScale);
        lanGlow.addColorStop(0, 'rgba(254, 240, 138, ' + (0.8 * intensity) + ')');
        lanGlow.addColorStop(0.5, 'rgba(239, 68, 68, ' + (0.8 * intensity) + ')');
        lanGlow.addColorStop(1, 'rgba(239, 68, 68, 0)');
        ctx.fillStyle = lanGlow;
        ctx.beginPath();
        ctx.arc(lanX + lanSwing, lanY + 10 * elScale, 28 * elScale, 0, Math.PI * 2);
        ctx.fill();

        const potX = cx + 15 * elScale, potY = cy - 18 * elScale;
        ctx.fillStyle = '#94a3b8';
        ctx.fillRect(potX - 18 * elScale, potY, 36 * elScale, 22 * elScale);
        ctx.fillStyle = '#cbd5e1';
        ctx.fillRect(potX - 20 * elScale, potY - 2 * elScale, 40 * elScale, 4 * elScale);

        ctx.fillStyle = '#b45309';
        ctx.beginPath();
        ctx.ellipse(potX, potY, 16 * elScale, 4 * elScale, 0, 0, Math.PI * 2);
        ctx.fill();

        for (let s = 0; s < 8; s++) {
            const st = (time * 1.6 * speed + s * 0.25) % 1.4;
            const sy = potY - st * (60 * elScale);
            const sx = potX + Math.sin(time * 3 + s * 1.5) * (st * 28 * elScale);
            const sr = (8 + st * 18) * elScale;
            const sAlpha = (1 - st / 1.4) * 0.5 * intensity;

            const stmGrad = ctx.createRadialGradient(sx, sy, 2, sx, sy, sr);
            stmGrad.addColorStop(0, 'rgba(255, 255, 255, ' + sAlpha + ')');
            stmGrad.addColorStop(0.7, 'rgba(241, 245, 249, ' + (sAlpha * 0.5) + ')');
            stmGrad.addColorStop(1, 'rgba(241, 245, 249, 0)');
            ctx.fillStyle = stmGrad;
            ctx.beginPath();
            ctx.arc(sx, sy, sr, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
    });

    // 64. Flickering Vending Machine (Top-Down Battlemap View)
    reg(['cp_dim_vending_machine', 'item_64', 'cp_flickering_vending_machine'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.42;
        const machW = 58 * elScale;
        const machD = 28 * elScale;
        const flick = (Math.sin(time * 18 * speed) > -0.28) ? (0.85 + Math.sin(time * 36) * 0.15) : 0.12;

        ctx.save();
        // 1. Trapezoidal neon light beam projected forward onto the pavement (South into room)
        const frontY = cy + machD * 0.5;
        const beamH = (48 + rough * 16) * elScale;
        const beamGrad = ctx.createLinearGradient(cx, frontY, cx, frontY + beamH);
        beamGrad.addColorStop(0, `rgba(56, 189, 248, ${0.75 * flick * intensity})`);
        beamGrad.addColorStop(0.4, `rgba(14, 165, 233, ${0.35 * flick * intensity})`);
        beamGrad.addColorStop(1, 'rgba(14, 165, 233, 0)');
        ctx.fillStyle = beamGrad;
        ctx.beginPath();
        ctx.moveTo(cx - machW * 0.45, frontY);
        ctx.lineTo(cx + machW * 0.45, frontY);
        ctx.lineTo(cx + machW * 0.75, frontY + beamH);
        ctx.lineTo(cx - machW * 0.75, frontY + beamH);
        ctx.closePath();
        ctx.fill();

        // 2. Vending machine cabinet roof seen from above (Top-Down)
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(cx - machW * 0.5, cy - machD * 0.5, machW, machD);
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 2 * elScale;
        ctx.strokeRect(cx - machW * 0.5, cy - machD * 0.5, machW, machD);

        // Circular exhaust cooling fan on top roof
        ctx.fillStyle = '#1e293b';
        ctx.beginPath();
        ctx.arc(cx - 14 * elScale, cy, 7 * elScale, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 1 * elScale;
        ctx.stroke();

        // Ventilation grille louvers on right side of roof
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 1.2 * elScale;
        for (let g = -6; g <= 6; g += 3) {
            ctx.beginPath();
            ctx.moveTo(cx + 6 * elScale, cy + g * elScale);
            ctx.lineTo(cx + 22 * elScale, cy + g * elScale);
            ctx.stroke();
        }

        // 3. Illuminated front neon fascia overhang edge (facing forward)
        ctx.fillStyle = `rgba(56, 189, 248, ${flick * intensity})`;
        ctx.fillRect(cx - machW * 0.48, frontY - 3 * elScale, machW * 0.96, 4 * elScale);

        // Blinking red power/coin-return LED on front-right corner
        const ledBlink = Math.sin(time * 4) > 0;
        ctx.fillStyle = ledBlink ? '#ef4444' : '#7f1d1d';
        ctx.beginPath();
        ctx.arc(cx + machW * 0.4, frontY, 2 * elScale, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    });

    // 65. Ripperdoc Surgical Chair
    reg(['cp_ripperdoc_chair', 'item_65'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        // Reclined surgical bed
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(cx - 18 * elScale, cy - 35 * elScale, 36 * elScale, 70 * elScale);
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 2;
        ctx.strokeRect(cx - 18 * elScale, cy - 35 * elScale, 36 * elScale, 70 * elScale);
        // Overhead articulated lamp
        FX.drawRadialGlow(ctx, cx, cy - 10 * elScale, 2, 28 * elScale, `rgba(240, 249, 255, ${0.85 * intensity})`, 'rgba(56, 189, 248, 0)');
        // Heart-rate monitor ECG wave
        const ecgX = cx - 14 * elScale + ((time * 45 * speed) % (28 * elScale));
        ctx.fillStyle = '#10b981';
        ctx.fillRect(ecgX, cy + 20 * elScale, 3, 3);
    });

    // 66. Cyberspace Avatar Spawn Pad
    reg(['cp_avatar_spawn_pad', 'item_66'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        // Octagonal floor transmat base
        ctx.strokeStyle = `rgba(0, 255, 200, ${0.85 * intensity})`;
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        for (let a = 0; a < 8; a++) {
            const ang = (Math.PI / 4) * a;
            const px = cx + Math.cos(ang) * (36 * elScale);
            const py = cy + Math.sin(ang) * (36 * elScale);
            if (a === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.stroke();
        // Ascending vertical laser scan rings
        const ringY = cy + 25 * elScale - ((time * 50 * speed) % (50 * elScale));
        ctx.strokeStyle = `rgba(56, 189, 248, ${0.9 * intensity})`;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.ellipse(cx, ringY, 24 * elScale, 10 * elScale, 0, 0, Math.PI * 2);
        ctx.stroke();
        // Wireframe human silhouette
        ctx.strokeStyle = `rgba(240, 249, 255, ${0.75 * intensity})`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(cx, cy - 18 * elScale, 7 * elScale, 0, Math.PI * 2); // Head
        ctx.moveTo(cx, cy - 11 * elScale); ctx.lineTo(cx, cy + 12 * elScale); // Spine
        ctx.moveTo(cx - 12 * elScale, cy - 2 * elScale); ctx.lineTo(cx + 12 * elScale, cy - 2 * elScale); // Arms
        ctx.stroke();
    });

    // 67. Sonic Riot-Suppressor Dish
    reg(['cp_sonic_suppressor', 'item_67', 'cp_sonic_suppressor_dish'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        // Parabolic acoustic dish
        ctx.fillStyle = '#1e293b';
        ctx.beginPath();
        ctx.arc(cx - 15 * elScale, cy, 24 * elScale, -Math.PI * 0.45, Math.PI * 0.45);
        ctx.stroke();
        // Expanding concentric air shockwaves
        for (let w = 1; w <= 3; w++) {
            const phase = (time * 2.2 * speed + w * 0.33) % 1.0;
            const r = phase * (55 * elScale);
            ctx.strokeStyle = `rgba(147, 197, 253, ${(1 - phase) * 0.8 * intensity})`;
            ctx.lineWidth = 2.5 * (1 - phase);
            ctx.beginPath();
            ctx.arc(cx - 10 * elScale, cy, r, -Math.PI * 0.45, Math.PI * 0.45);
            ctx.stroke();
        }
    });

    // 68. Holographic Decoy Projection
    reg(['cp_holo_decoy', 'item_68', 'cp_holo_decoy_projection'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        // Shimmering mercenary silhouette
        ctx.save();
        const glitch = (Math.sin(time * 30 * speed) > 0.8) ? 6 : 0;
        ctx.translate(cx + glitch, cy);
        ctx.strokeStyle = `rgba(56, 189, 248, ${0.85 * intensity})`;
        ctx.lineWidth = 2;
        ctx.shadowColor = '#38bdf8';
        ctx.shadowBlur = 10;
        ctx.strokeRect(-16 * elScale, -30 * elScale, 32 * elScale, 60 * elScale);
        ctx.shadowBlur = 0;
        // Horizontal scanlines
        FX.drawScanlines(ctx, -16 * elScale, -30 * elScale, 32 * elScale, 60 * elScale, 3, 0.4);
        ctx.restore();
    });

    // 69. Armed EMP Grenade Sparking
    reg(['cp_emp_grenade', 'item_69', 'cp_emp_grenade_sparking'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        // Cylindrical grenade body
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(cx - 8 * elScale, cy - 14 * elScale, 16 * elScale, 28 * elScale);
        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(cx - 8 * elScale, cy - 14 * elScale, 16 * elScale, 28 * elScale);
        // Blinking red detonation LED
        const blink = Math.sin(time * 16 * speed) > 0;
        ctx.fillStyle = blink ? '#ef4444' : '#7f1d1d';
        ctx.beginPath();
        ctx.arc(cx, cy - 8 * elScale, 2.5 * elScale, 0, Math.PI * 2);
        ctx.fill();
        // Crackling pre-detonation blue arcs
        if (Math.sin(time * 8 * speed) > 0.3) {
            FX.drawRadialGlow(ctx, cx, cy, 1, 20 * elScale, 'rgba(255, 255, 255, 0.95)', 'rgba(56, 189, 248, 0)');
        }
    });

    // 70. Cryo-Stasis Unsealing Pod
    reg(['cp_cryo_stasis_pod', 'item_70', 'cp_cryostasis_pod_vent'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.52;
        const pw = 68 * elScale, ph = 115 * elScale;
        const px = cx - pw * 0.5, py = cy - ph * 0.5;

        ctx.save();
        ctx.fillStyle = '#1e293b';
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 3 * elScale;
        ctx.beginPath();
        ctx.roundRect(px, py, pw, ph, 14 * elScale);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#0f172a';
        ctx.fillRect(px + 12 * elScale, py + 8 * elScale, pw - 24 * elScale, 16 * elScale);
        ctx.strokeStyle = '#22c55e';
        ctx.lineWidth = 1.5 * elScale;
        ctx.beginPath();
        const ecgX = px + 14 * elScale;
        const ecgY = py + 16 * elScale;
        ctx.moveTo(ecgX, ecgY);
        ctx.lineTo(ecgX + 10 * elScale, ecgY);
        ctx.lineTo(ecgX + 14 * elScale, ecgY - 6 * elScale);
        ctx.lineTo(ecgX + 18 * elScale, ecgY + 5 * elScale);
        ctx.lineTo(ecgX + 22 * elScale, ecgY);
        ctx.lineTo(ecgX + (pw - 28 * elScale), ecgY);
        ctx.stroke();

        const winX = px + 10 * elScale, winY = py + 28 * elScale;
        const winW = pw - 20 * elScale, winH = ph - 42 * elScale;

        const bioGrad = ctx.createLinearGradient(0, winY, 0, winY + winH);
        bioGrad.addColorStop(0, 'rgba(56, 189, 248, ' + (0.8 * intensity) + ')');
        bioGrad.addColorStop(0.5, 'rgba(6, 182, 212, ' + (0.8 * intensity) + ')');
        bioGrad.addColorStop(1, 'rgba(14, 116, 144, ' + (0.8 * intensity) + ')');
        ctx.fillStyle = bioGrad;
        ctx.fillRect(winX, winY, winW, winH);

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.lineWidth = 1 * elScale;
        ctx.beginPath();
        ctx.moveTo(winX, winY + 10 * elScale);
        ctx.lineTo(winX + 12 * elScale, winY + 16 * elScale);
        ctx.moveTo(winX + winW, winY + winH - 12 * elScale);
        ctx.lineTo(winX + winW - 14 * elScale, winY + winH - 18 * elScale);
        ctx.stroke();

        const unsealGap = (Math.sin(time * 2 * speed) * 0.5 + 0.5) * 4 * elScale;
        ctx.fillStyle = '#0284c7';
        ctx.fillRect(winX + winW - 3 * elScale + unsealGap, winY, 4 * elScale, winH);

        const numVapors = 12;
        for (let v = 0; v < numVapors; v++) {
            const vt = (time * 1.5 * speed + v * 0.18) % 1.3;
            const vy = winY + winH * 0.4 + vt * (55 * elScale);
            const vx = winX + winW + unsealGap + Math.sin(v * 2.3 + time * 3) * (vt * 22 * elScale);
            const vr = (8 + vt * 16) * elScale;
            const vAlpha = (1 - vt / 1.3) * 0.55 * intensity;

            const fogGrad = ctx.createRadialGradient(vx, vy, 2, vx, vy, vr);
            fogGrad.addColorStop(0, 'rgba(240, 249, 255, ' + vAlpha + ')');
            fogGrad.addColorStop(0.5, 'rgba(186, 230, 253, ' + (vAlpha * 0.6) + ')');
            fogGrad.addColorStop(1, 'rgba(186, 230, 253, 0)');
            ctx.fillStyle = fogGrad;
            ctx.beginPath();
            ctx.arc(vx, vy, vr, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
    });

    // 71. Wall-Mounted Surveillance Camera (Top-Down Overhead Battlemap View)
    reg(['cp_security_cam', 'item_71', 'cp_surveillance_cam_panning'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.35;
        const pan = Math.sin(time * 1.2 * speed) * 0.65;
        ctx.save();

        // Wall mounting flange plate attached to wall edge (Top-Down)
        ctx.fillStyle = '#334155';
        ctx.fillRect(cx - 20 * elScale, cy - 6 * elScale, 40 * elScale, 8 * elScale);
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 1.5 * elScale;
        ctx.strokeRect(cx - 20 * elScale, cy - 6 * elScale, 40 * elScale, 8 * elScale);

        // Articulated panning swivel knuckle & camera housing
        ctx.save();
        ctx.translate(cx, cy + 2 * elScale);
        ctx.rotate(pan + Math.PI * 0.5); // Angled down onto the floor plane

        // Camera body chassis (Top-Down rectangular housing)
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(-8 * elScale, 0, 16 * elScale, 24 * elScale);
        ctx.strokeStyle = '#64748b';
        ctx.lineWidth = 1.5 * elScale;
        ctx.strokeRect(-8 * elScale, 0, 16 * elScale, 24 * elScale);

        // Front optical lens glass aperture
        ctx.fillStyle = '#38bdf8';
        ctx.beginPath();
        ctx.arc(0, 24 * elScale, 5 * elScale, 0, Math.PI);
        ctx.fill();

        // Blinking red recording tally light
        const recBlink = Math.sin(time * 5) > 0;
        ctx.fillStyle = recBlink ? '#ef4444' : '#450a0a';
        ctx.beginPath();
        ctx.arc(-4 * elScale, 6 * elScale, 2 * elScale, 0, Math.PI * 2);
        ctx.fill();

        // Volumetric surveillance cone projected across floor grid
        const coneReach = 110 * elScale;
        const coneGrad = ctx.createRadialGradient(0, 24 * elScale, 5, 0, 24 * elScale + coneReach, coneReach * 0.6);
        coneGrad.addColorStop(0, 'rgba(239, 68, 68, ' + (0.8 * intensity) + ')');
        coneGrad.addColorStop(0.7, 'rgba(239, 68, 68, ' + (0.8 * intensity) + ')');
        coneGrad.addColorStop(1, 'rgba(239, 68, 68, 0)');
        ctx.fillStyle = coneGrad;
        ctx.beginPath();
        ctx.moveTo(0, 24 * elScale);
        ctx.lineTo(-coneReach * 0.45, 24 * elScale + coneReach);
        ctx.lineTo(coneReach * 0.45, 24 * elScale + coneReach);
        ctx.closePath();
        ctx.fill();

        ctx.restore();
        ctx.restore();
    });

    // 72. Fire Escape Cyber-Cat (Top-Down Overhead Battlemap View)
    reg(['cp_stray_cybercat', 'item_72', 'cp_cyber_cat_fire_escape'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        ctx.save();

        // Steel mesh fire escape grating platform (Top-Down open grid)
        const platW = 90 * elScale, platH = 70 * elScale;
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 2 * elScale;
        ctx.strokeRect(cx - platW * 0.5, cy - platH * 0.5, platW, platH);

        // Crosshatched steel grating bars (transparent underneath)
        ctx.strokeStyle = 'rgba(71, 85, 105, 0.45)';
        ctx.lineWidth = 1 * elScale;
        for (let gx = cx - platW * 0.5 + 8 * elScale; gx < cx + platW * 0.5; gx += 10 * elScale) {
            ctx.beginPath(); ctx.moveTo(gx, cy - platH * 0.5); ctx.lineTo(gx, cy + platH * 0.5); ctx.stroke();
        }
        for (let gy = cy - platH * 0.5 + 8 * elScale; gy < cy + platH * 0.5; gy += 10 * elScale) {
            ctx.beginPath(); ctx.moveTo(cx - platW * 0.5, gy); ctx.lineTo(cx + platW * 0.5, gy); ctx.stroke();
        }

        // Stray cyber-cat seen from DIRECTLY ABOVE (Top-Down)
        const catX = cx - 5 * elScale, catY = cy - 2 * elScale;
        ctx.save();
        ctx.translate(catX, catY);

        // Feline body drop shadow on grating
        ctx.fillStyle = 'rgba(15, 23, 42, ' + (0.8 * intensity) + ')';
        ctx.beginPath();
        ctx.ellipse(0, 0, 16 * elScale, 9 * elScale, 0.1, 0, Math.PI * 2);
        ctx.fill();

        // Sleek obsidian-black feline body (torso & flanks)
        ctx.fillStyle = '#090d16';
        ctx.beginPath();
        ctx.ellipse(0, 0, 14 * elScale, 7.5 * elScale, 0.1, 0, Math.PI * 2);
        ctx.fill();

        // Cat head seen from directly overhead
        const headX = 14 * elScale, headY = 1 * elScale;
        ctx.beginPath();
        ctx.arc(headX, headY, 7 * elScale, 0, Math.PI * 2);
        ctx.fill();

        // Pointed triangular ears facing forward
        ctx.beginPath();
        ctx.moveTo(headX + 2 * elScale, headY - 6 * elScale);
        ctx.lineTo(headX + 8 * elScale, headY - 9 * elScale);
        ctx.lineTo(headX + 5 * elScale, headY - 2 * elScale);
        ctx.closePath();
        ctx.moveTo(headX + 2 * elScale, headY + 6 * elScale);
        ctx.lineTo(headX + 8 * elScale, headY + 9 * elScale);
        ctx.lineTo(headX + 5 * elScale, headY + 2 * elScale);
        ctx.closePath();
        ctx.fill();

        // Glowing cyan cybernetic eyes (looking ahead)
        ctx.fillStyle = '#22d3ee';
        ctx.fillRect(headX + 5 * elScale, headY - 4 * elScale, 2 * elScale, 2 * elScale);
        ctx.fillRect(headX + 5 * elScale, headY + 2 * elScale, 2 * elScale, 2 * elScale);

        // Dorsal cybernetic spine LED strip along backbone
        ctx.strokeStyle = 'rgba(34, 211, 238, ' + (0.8 * intensity) + ')';
        ctx.lineWidth = 1.5 * elScale;
        ctx.beginPath();
        ctx.moveTo(-10 * elScale, 0); ctx.lineTo(8 * elScale, 0);
        ctx.stroke();

        // Chrome articulated cyber-tail swishing lazily
        const tailSwing = Math.sin(time * 3 * speed) * 0.45;
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 2 * elScale;
        ctx.beginPath();
        ctx.moveTo(-13 * elScale, 0);
        ctx.quadraticCurveTo(-22 * elScale, tailSwing * 18 * elScale, -30 * elScale, tailSwing * 24 * elScale);
        ctx.stroke();

        // Glowing tail-tip diode
        ctx.fillStyle = '#38bdf8';
        ctx.beginPath();
        ctx.arc(-30 * elScale, tailSwing * 24 * elScale, 2 * elScale, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
        ctx.restore();
    });

    // 73. Bobbing Neon Rain-Umbrella (Top-Down Battlemap View)
    reg(['cp_neon_umbrella', 'item_73', 'cp_neon_rain_umbrella'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        const bob = Math.sin(time * 2 * speed) * 3 * elScale;
        const rot = Math.sin(time * 0.8 * speed) * 0.15;
        ctx.save();

        // Expanding water puddle ripples radiating from umbrella
        const numRipples = 3;
        for (let r = 0; r < numRipples; r++) {
            const rt = (time * 0.8 * speed + r / numRipples) % 1;
            const curR = 26 * elScale + rt * 36 * elScale;
            ctx.strokeStyle = 'rgba(56, 189, 248, ' + (0.8 * intensity) + ')';
            ctx.lineWidth = 1.5 * elScale;
            ctx.beginPath();
            ctx.ellipse(cx, cy, curR * 1.2, curR * 0.85, 0, 0, Math.PI * 2);
            ctx.stroke();
        }

        // Open umbrella seen from DIRECTLY ABOVE floating in puddle
        ctx.save();
        ctx.translate(cx, cy + bob);
        ctx.rotate(rot);

        // Umbrella drop shadow in the water
        const canopyR = 34 * elScale;
        ctx.fillStyle = 'rgba(15, 23, 42, ' + (0.8 * intensity) + ')';
        ctx.beginPath();
        ctx.arc(4 * elScale, 4 * elScale, canopyR, 0, Math.PI * 2);
        ctx.fill();

        // Translucent pink vinyl 360-degree canopy (Top-Down round dome)
        const vinylGrad = ctx.createRadialGradient(0, 0, 4 * elScale, 0, 0, canopyR);
        vinylGrad.addColorStop(0, 'rgba(244, 114, 182, ' + (0.8 * intensity) + ')');
        vinylGrad.addColorStop(0.8, 'rgba(236, 72, 153, ' + (0.8 * intensity) + ')');
        vinylGrad.addColorStop(1, 'rgba(219, 39, 119, ' + (0.8 * intensity) + ')');
        ctx.fillStyle = vinylGrad;
        ctx.beginPath();
        ctx.arc(0, 0, canopyR, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = 'rgba(244, 114, 182, ' + (0.8 * intensity) + ')';
        ctx.lineWidth = 1.8 * elScale;
        ctx.stroke();

        // 8 Radial neon fiber-optic ribs radiating from central ferrule tip
        const ribs = 8;
        ctx.strokeStyle = 'rgba(251, 207, 232, ' + (0.8 * intensity) + ')';
        ctx.lineWidth = 1.5 * elScale;
        for (let i = 0; i < ribs; i++) {
            const ang = (i / ribs) * Math.PI * 2;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(Math.cos(ang) * canopyR, Math.sin(ang) * canopyR);
            ctx.stroke();
        }

        // Chrome central ferrule cap in dead-center
        ctx.fillStyle = '#f8fafc';
        ctx.beginPath();
        ctx.arc(0, 0, 3.5 * elScale, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
        ctx.restore();
    });

    // 74. Rusty Window AC Unit Dripping
    reg(['cp_window_ac_drips', 'item_74', 'cp_window_ac_dripping'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.35;
        // Weathered rectangular air conditioner box
        ctx.fillStyle = '#64748b';
        ctx.fillRect(cx - 26 * elScale, cy - 18 * elScale, 52 * elScale, 36 * elScale);
        ctx.strokeStyle = '#b45309'; // Rust streaks
        ctx.lineWidth = 2;
        ctx.strokeRect(cx - 26 * elScale, cy - 18 * elScale, 52 * elScale, 36 * elScale);
        // Exhaust vent grill
        ctx.fillStyle = '#1e293b';
        for (let y = cy - 12 * elScale; y < cy + 14 * elScale; y += 6 * elScale) {
            ctx.fillRect(cx - 20 * elScale, y, 40 * elScale, 2.5 * elScale);
        }
        // Steady dripping condensation droplets
        const dropPhase = (time * 3 * speed) % 1.0;
        const dropY = (cy + 18 * elScale) + dropPhase * (H * 0.5);
        ctx.fillStyle = `rgba(186, 230, 253, ${0.9 * intensity})`;
        ctx.beginPath();
        ctx.arc(cx + 10 * elScale, dropY, 2, 0, Math.PI * 2);
        ctx.fill();
    });

    // 75. Digital Spraypaint Shifting Graffiti
    reg(['cp_shifting_graffiti', 'item_75', 'cp_digital_spraypaint_wall'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        // Shifting RGB chromatic color (transparent wall graffiti)
        const hue = (time * 45 * speed) % 360;
        ctx.font = `bold italic ${Math.round(26 * elScale)}px sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = `hsl(${hue}, 100%, 65%)`;
        ctx.shadowColor = `hsl(${hue}, 100%, 50%)`;
        ctx.shadowBlur = 16;
        ctx.fillText('NEO-TOKYO', cx, cy);
        ctx.shadowBlur = 0;
    });

})();
