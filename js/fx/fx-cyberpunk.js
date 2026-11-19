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
    const FX = window.VTT_FX || {};

    // =========================================================================
    // A. LINEAR MOTION (1 - 25)
    // =========================================================================

    // 1. Flying Car Headlight Beams
    reg(['cp_flying_headlights', 'item_1'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const sweep = Math.sin(time * 1.8 * speed) * 0.35;
        const beamLen = Math.max(W, H) * 0.95 * elScale;
        const cy = H * 0.5;
        // Wet asphalt ground reflection
        ctx.fillStyle = `rgba(15, 23, 42, ${0.45 * intensity})`;
        ctx.fillRect(0, 0, W, H);
        // Rain road streaks modulated by fractal slider
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
        ctx.fillStyle = `rgba(10, 10, 18, ${0.5 * intensity})`;
        ctx.fillRect(0, 0, W, H);
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
        ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
        ctx.fillRect(0, cy - conduitH * 0.5, W, conduitH);
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.5)';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(0, cy - conduitH * 0.5, W, conduitH);
        const fiberCount = Math.round(3 + rough * 5);
        for (let f = 0; f < fiberCount; f++) {
            const fy = cy - conduitH * 0.35 + (conduitH * 0.7 / (fiberCount - 1 || 1)) * f;
            ctx.strokeStyle = (f % 2 === 0) ? 'rgba(0, 255, 200, 0.4)' : 'rgba(236, 72, 153, 0.4)';
            ctx.lineWidth = 1.2;
            ctx.beginPath();
            ctx.moveTo(0, fy);
            ctx.lineTo(W, fy);
            ctx.stroke();
            const pSpeed = (180 + f * 45) * speed;
            const px = (time * pSpeed) % (W + 60) - 30;
            const pLen = 25 + f * 8;
            ctx.fillStyle = (f % 2 === 0) ? `rgba(0, 255, 200, ${0.9 * intensity})` : `rgba(236, 72, 153, ${0.9 * intensity})`;
            ctx.shadowColor = (f % 2 === 0) ? '#00ffc8' : '#ec4899';
            ctx.shadowBlur = 12;
            ctx.fillRect(px, fy - 2, pLen, 4);
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
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(0, cy - 8, W, 16);
        ctx.fillStyle = '#475569';
        ctx.fillRect(0, cy - 4, W, 2);
        ctx.fillRect(0, cy + 2, W, 2);
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

    // 7. High-Speed Mag-Lev Subway
    reg(['cp_maglev_subway', 'item_7'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        ctx.fillStyle = '#0b0f19';
        ctx.fillRect(0, 0, W, H);
        ctx.strokeStyle = `rgba(0, 255, 200, ${0.45 * intensity})`;
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(0, cy - 25 * elScale); ctx.lineTo(W, cy - 25 * elScale);
        ctx.moveTo(0, cy + 25 * elScale); ctx.lineTo(W, cy + 25 * elScale);
        ctx.stroke();
        const trainW = W * 0.75;
        const progress = ((time * 550 * speed) % (W + trainW * 2)) - trainW;
        ctx.fillStyle = '#1e293b';
        ctx.beginPath();
        ctx.moveTo(progress + trainW, cy);
        ctx.lineTo(progress + trainW - 40 * elScale, cy - 22 * elScale);
        ctx.lineTo(progress, cy - 22 * elScale);
        ctx.lineTo(progress, cy + 22 * elScale);
        ctx.lineTo(progress + trainW - 40 * elScale, cy + 22 * elScale);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = '#00ffc8';
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.fillStyle = `rgba(255, 240, 160, ${0.9 * intensity})`;
        ctx.fillRect(progress + 20, cy - 10 * elScale, trainW - 70, 20 * elScale);
    });

    // 8. Chemical Runoff Culvert
    reg(['cp_chemical_culvert', 'item_8'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        const culvertW = Math.max(36, 50 * elScale);
        ctx.fillStyle = '#1f2937';
        ctx.fillRect(0, cy - culvertW * 0.6, W, culvertW * 1.2);
        ctx.strokeStyle = '#111827';
        ctx.lineWidth = 3;
        ctx.strokeRect(0, cy - culvertW * 0.6, W, culvertW * 1.2);
        const chemGrad = ctx.createLinearGradient(0, cy - culvertW * 0.45, 0, cy + culvertW * 0.45);
        chemGrad.addColorStop(0, '#064e3b');
        chemGrad.addColorStop(0.5, `rgba(16, 185, 129, ${0.9 * intensity})`);
        chemGrad.addColorStop(1, '#065f46');
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

    // 9. Industrial Conveyor Belts (Scrap Smelter)
    reg(['cp_smelter_conveyor', 'item_9'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        const beltH = 46 * elScale;
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(0, cy - beltH * 0.5, W, beltH);
        const treadSpacing = 16;
        const offset = (time * 70 * speed) % treadSpacing;
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 2;
        for (let x = -treadSpacing; x < W + treadSpacing; x += treadSpacing) {
            ctx.beginPath();
            ctx.moveTo(x + offset, cy - beltH * 0.45);
            ctx.lineTo(x + offset, cy + beltH * 0.45);
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

    // 10. Armed Patrol Drones (Fixed Perimeter Track)
    reg(['cp_patrol_track', 'item_10'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(0, cy); ctx.lineTo(W, cy);
        ctx.stroke();
        for (let x = 20; x < W; x += 50) {
            ctx.fillStyle = '#1e293b';
            ctx.fillRect(x - 4, cy - 6, 8, 12);
        }
        const droneX = ((time * 110 * speed) % (W + 60)) - 30;
        ctx.save();
        ctx.translate(droneX, cy);
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(-18 * elScale, -12 * elScale, 36 * elScale, 24 * elScale);
        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(-18 * elScale, -12 * elScale, 36 * elScale, 24 * elScale);
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(18 * elScale, -6 * elScale, 14 * elScale, 3 * elScale);
        ctx.fillRect(18 * elScale, 3 * elScale, 14 * elScale, 3 * elScale);
        ctx.strokeStyle = `rgba(239, 68, 68, ${0.75 * intensity})`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.moveTo(32 * elScale, -4.5 * elScale);
        ctx.lineTo(W, -4.5 * elScale);
        ctx.stroke();
        FX.drawRadialGlow(ctx, -18 * elScale, 0, 1, 10 * elScale, 'rgba(56, 189, 248, 0.95)', 'rgba(56, 189, 248, 0)');
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
        ctx.fillStyle = 'rgba(224, 242, 254, 0.25)';
        ctx.fillRect(0, cy - tubeH * 0.5, W, tubeH);
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.75)';
        ctx.lineWidth = 2;
        ctx.strokeRect(0, cy - tubeH * 0.5, W, tubeH);
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

    // 13. Mega-Mall Escalators
    reg(['cp_megamall_escalator', 'item_13'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        const escW = 54 * elScale;
        // Balustrade frame
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(0, cy - escW * 0.5, W, escW);
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
        // Continuous moving grooved step treads
        const stepPitch = 18;
        const stepOffset = (time * 45 * speed) % stepPitch;
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 1.5;
        for (let x = -stepPitch; x < W + stepPitch; x += stepPitch) {
            ctx.fillStyle = '#1e293b';
            ctx.fillRect(x + stepOffset, cy - escW * 0.38, stepPitch - 2, escW * 0.76);
            // Yellow safety border edge
            ctx.fillStyle = 'rgba(234, 179, 8, 0.75)';
            ctx.fillRect(x + stepOffset + stepPitch - 4, cy - escW * 0.38, 2, escW * 0.76);
        }
    });

    // 14. Overhead Gantry Welder
    reg(['cp_gantry_welder', 'item_14'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        // Steel I-beam gantry rail
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(0, cy - 8, W, 16);
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 2;
        ctx.strokeRect(0, cy - 8, W, 16);
        // Articulated robotic welding carriage
        const gantryX = W * (0.3 + 0.4 * Math.sin(time * 0.8 * speed));
        ctx.save();
        ctx.translate(gantryX, cy);
        ctx.fillStyle = '#eab308'; // Industrial yellow
        ctx.fillRect(-20 * elScale, -16 * elScale, 40 * elScale, 32 * elScale);
        ctx.strokeStyle = '#0f172a';
        ctx.lineWidth = 2;
        ctx.strokeRect(-20 * elScale, -16 * elScale, 40 * elScale, 32 * elScale);
        // Articulated welding arm extending downward
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(0, 16 * elScale);
        ctx.lineTo(8 * elScale, 34 * elScale);
        ctx.lineTo(4 * elScale, 48 * elScale);
        ctx.stroke();
        // Blinding welding spark flash bursts
        const isWelding = (Math.sin(time * 6 * speed) > 0.15);
        if (isWelding) {
            const wx = 4 * elScale;
            const wy = 48 * elScale;
            // Blinding blue-white core flash
            FX.drawRadialGlow(ctx, wx, wy, 2, 45 * elScale, `rgba(255, 255, 255, ${0.98 * intensity})`, 'rgba(56, 189, 248, 0)');
            // Flying molten orange sparks
            const numSparks = Math.round(8 + rough * 14);
            for (let s = 0; s < numSparks; s++) {
                const sAngle = FX.hash(s * 19 + Math.floor(time * 15)) * Math.PI * 2;
                const sDist = (15 + FX.hash(s * 7) * 35) * elScale;
                ctx.fillStyle = '#fdba74';
                ctx.beginPath();
                ctx.arc(wx + Math.cos(sAngle) * sDist, wy + Math.sin(sAngle) * sDist, 1.8, 0, Math.PI * 2);
                ctx.fill();
            }
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
        // Pushing barrier wall
        ctx.fillStyle = `rgba(59, 130, 246, ${0.18 * intensity})`;
        ctx.fillRect(0, 0, W, H);
        // Harmonic force waves rolling across
        for (let w = 0; w < 3; w++) {
            const wx = (waveProgress + w * 70) % W;
            const waveGrad = ctx.createLinearGradient(wx - 25, 0, wx + 25, 0);
            waveGrad.addColorStop(0, 'rgba(59, 130, 246, 0)');
            waveGrad.addColorStop(0.5, `rgba(147, 197, 253, ${0.75 * intensity})`);
            waveGrad.addColorStop(1, 'rgba(59, 130, 246, 0)');
            ctx.fillStyle = waveGrad;
            ctx.fillRect(wx - 25, 0, 50, H);
        }
        // Digital honeycomb hexagonal mesh
        FX.drawScanlines(ctx, 0, 0, W, H, 6, 0.25);
    });

    // 19. Netrunner Ice-Breaker Code Streams
    reg(['cp_netrunner_stream', 'item_19'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        // Glowing cyber-matrix stream band
        ctx.fillStyle = 'rgba(10, 15, 20, 0.88)';
        ctx.fillRect(0, cy - 25 * elScale, W, 50 * elScale);
        ctx.strokeStyle = '#10b981';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(0, cy - 25 * elScale, W, 50 * elScale);
        // Flowing hex data packets
        const streams = Math.round(3 + rough * 4);
        ctx.font = `${Math.round(11 * elScale)}px monospace`;
        for (let s = 0; s < streams; s++) {
            const sy = cy - 14 * elScale + s * (14 * elScale);
            const strOffset = ((time * 160 * speed * (1 + s * 0.2)) % 200);
            ctx.fillStyle = `rgba(16, 185, 129, ${0.85 * intensity})`;
            for (let x = -strOffset; x < W + 100; x += 110) {
                const hex = `0x${((Math.floor(x * 13 + time * 50) % 65535)).toString(16).toUpperCase().padStart(4, '0')}`;
                ctx.fillText(hex, x, sy);
            }
        }
    });

    // 20. Acid Rain Skylight Rivulets
    reg(['cp_skylight_rivulets', 'item_20'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        // Angled glass skylight frames
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 4;
        ctx.strokeRect(0, 0, W, H);
        for (let x = W * 0.33; x < W; x += W * 0.33) {
            ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
        }
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

    // 24. Platform Cyber-Rats
    reg(['cp_cyber_rats_line', 'item_24'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        // Concrete curb ledge
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(0, cy - 4, W, 20);
        ctx.strokeStyle = '#0f172a';
        ctx.lineWidth = 2;
        ctx.strokeRect(0, cy - 4, W, 20);
        // Line of cybernetic rats scurrying in single file
        const rats = 4;
        for (let r = 0; r < rats; r++) {
            const rx = ((time * 140 * speed + r * 60) % (W + 60)) - 30;
            ctx.save();
            ctx.translate(rx, cy - 8);
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
        smogGrad.addColorStop(1, `rgba(69, 26, 3, ${0.30 * intensity})`);
        ctx.fillStyle = smogGrad;
        ctx.fillRect(0, 0, W, H);
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
        // Dark wet street asphalt
        ctx.fillStyle = '#090d16';
        ctx.fillRect(0, 0, W, H);
        // Oily water puddle body
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
        // Deep subterranean vat fluid
        const vatGrad = ctx.createRadialGradient(W * 0.5, H * 0.5, 10, W * 0.5, H * 0.5, Math.max(W, H) * 0.55);
        vatGrad.addColorStop(0, `rgba(16, 185, 129, ${0.85 * intensity})`);
        vatGrad.addColorStop(0.5, `rgba(5, 150, 105, ${0.75 * intensity})`);
        vatGrad.addColorStop(1, '#022c22');
        ctx.fillStyle = vatGrad;
        ctx.fillRect(0, 0, W, H);
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
        // Submerged glass baffle grid
        ctx.strokeStyle = 'rgba(6, 78, 59, 0.45)';
        ctx.lineWidth = 2;
        for (let x = 0; x < W; x += 40) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
    });

    // 28. Nightclub Strobe Grid
    reg(['cp_club_strobe_grid', 'item_28'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const rows = 4, cols = 4;
        const cellW = W / cols, cellH = H / rows;
        const beat = Math.floor(time * 4 * speed);
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const active = ((r + c + beat) % 3 === 0);
                const color = ((r + beat) % 2 === 0) ? `rgba(236, 72, 153, ${active ? 0.9 * intensity : 0.08})` : `rgba(56, 189, 248, ${active ? 0.9 * intensity : 0.08})`;
                ctx.fillStyle = color;
                ctx.fillRect(c * cellW + 2, r * cellH + 2, cellW - 4, cellH - 4);
                if (active) {
                    FX.drawRadialGlow(ctx, (c + 0.5) * cellW, (r + 0.5) * cellH, 2, cellW * 0.6, '#ffffff', color);
                }
            }
        }
    });

    // 29. Server-Rack LED Matrix
    reg(['cp_server_led_matrix', 'item_29'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#090d16';
        ctx.fillRect(0, 0, W, H);
        const ledSpacing = 16 * elScale;
        const beat = Math.floor(time * 12 * speed);
        for (let y = 10; y < H - 10; y += ledSpacing) {
            for (let x = 10; x < W - 10; x += ledSpacing) {
                const on = (FX.hash2D(Math.floor(x), Math.floor(y + beat)) > (0.6 - rough * 0.2));
                const isGreen = ((Math.floor(y) % 32) === 0);
                const col = isGreen ? '#10b981' : (on ? '#38bdf8' : '#1e293b');
                ctx.fillStyle = col;
                ctx.fillRect(x - 2, y - 2, 4, 4);
                if (on && isGreen) {
                    FX.drawRadialGlow(ctx, x, y, 1, 6, 'rgba(16, 185, 129, 0.9)', 'rgba(16, 185, 129, 0)');
                }
            }
        }
    });

    // 30. Harsh Smog-Filtered Slanted Sunlight
    reg(['cp_slatted_megarays', 'item_30', 'cp_smog_slanted_sun'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        // Dark industrial hall backdrop
        ctx.fillStyle = 'rgba(15, 23, 42, 0.95)';
        ctx.fillRect(0, 0, W, H);
        // Slanted sunlight bars cutting diagonally
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
        // Diamond plate metal pattern
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(0, 0, W, H);
        ctx.strokeStyle = '#334155';
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
        // Deep amber-green corrosive chemical pool
        const vatGrad = ctx.createRadialGradient(W * 0.5, H * 0.5, 10, W * 0.5, H * 0.5, Math.max(W, H) * 0.6);
        vatGrad.addColorStop(0, `rgba(132, 204, 22, ${0.85 * intensity})`);
        vatGrad.addColorStop(0.6, `rgba(101, 163, 13, ${0.7 * intensity})`);
        vatGrad.addColorStop(1, '#1a2e05');
        ctx.fillStyle = vatGrad;
        ctx.fillRect(0, 0, W, H);
        // Dissolving acid foam rim
        ctx.strokeStyle = `rgba(236, 252, 203, ${0.55 * intensity})`;
        ctx.lineWidth = 4;
        ctx.strokeRect(4, 4, W - 8, H - 8);
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
        // Murky gray-brown wastewater
        ctx.fillStyle = '#1c1917';
        ctx.fillRect(0, 0, W, H);
        // Swirling vortex currents
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
        // Simmering neon-lime toxic pool
        const radGrad = ctx.createRadialGradient(W * 0.5, H * 0.5, 10, W * 0.5, H * 0.5, Math.max(W, H) * 0.55);
        radGrad.addColorStop(0, `rgba(34, 197, 94, ${0.9 * intensity})`);
        radGrad.addColorStop(0.6, `rgba(22, 101, 52, ${0.75 * intensity})`);
        radGrad.addColorStop(1, '#052e16');
        ctx.fillStyle = radGrad;
        ctx.fillRect(0, 0, W, H);
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
        // Scorched crusty black slag bed
        ctx.fillStyle = '#18181b';
        ctx.fillRect(0, 0, W, H);
        // Glowing incandescent orange magma veins
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
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(0, 0, W, H);
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
        // Deep purple UV grow light ambience
        ctx.fillStyle = 'rgba(88, 28, 135, 0.45)';
        ctx.fillRect(0, 0, W, H);
        // Hydroponic tray rows
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
        // Junkyard floor with discarded motherboards & debris
        ctx.fillStyle = '#1c1917';
        ctx.fillRect(0, 0, W, H);
        const debris = 15;
        for (let d = 0; d < debris; d++) {
            ctx.fillStyle = (d % 2 === 0) ? '#064e3b' : '#334155';
            ctx.fillRect(FX.hash(d * 13) * (W - 20), FX.hash(d * 29) * (H - 20), 22, 14);
        }
        // Intermittent short-circuit electrical sparks
        if (Math.sin(time * 8 * speed) > 0.4) {
            const sx = FX.hash(Math.floor(time * 6)) * W;
            const sy = FX.hash(Math.floor(time * 6) + 7) * H;
            FX.drawRadialGlow(ctx, sx, sy, 2, 25 * elScale, 'rgba(255, 255, 255, 0.95)', 'rgba(56, 189, 248, 0)');
        }
    });

    // 39. Subfloor Liquid Coolant
    reg(['cp_acrylic_coolant_floor', 'item_39', 'cp_subfloor_coolant'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        // Acrylic floor grid
        ctx.fillStyle = '#0369a1';
        ctx.fillRect(0, 0, W, H);
        // Fast-moving fluorocarbon coolant ripples
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
        // Floor tile borders
        ctx.strokeStyle = '#0284c7';
        ctx.lineWidth = 3;
        for (let x = 0; x < W; x += 45) { ctx.strokeRect(x, 0, 45, H); }
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

    // 41. Cyberspace Glitch Grid
    reg(['cp_cyberspace_glitch', 'item_41', 'cp_cyberspace_glitch_grid'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        // Neon wireframe grid
        ctx.fillStyle = '#05050d';
        ctx.fillRect(0, 0, W, H);
        ctx.strokeStyle = `rgba(0, 255, 200, ${0.55 * intensity})`;
        ctx.lineWidth = 1.2;
        for (let x = 0; x < W; x += 25) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
        for (let y = 0; y < H; y += 25) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
        // Horizontal glitch tears
        const glitchTears = Math.round(2 + rough * 5);
        for (let g = 0; g < glitchTears; g++) {
            const gy = (FX.hash(g * 19 + Math.floor(time * 7)) * H);
            ctx.fillStyle = (g % 2 === 0) ? 'rgba(236, 72, 153, 0.75)' : 'rgba(56, 189, 248, 0.75)';
            ctx.fillRect(0, gy, W, 4 + rough * 4);
        }
    });

    // 42. Hexagonal Energy Shield
    reg(['cp_hangar_shield', 'item_42', 'cp_hex_energy_shield'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = `rgba(14, 165, 233, ${0.2 * intensity})`;
        ctx.fillRect(0, 0, W, H);
        // Honeycomb hex grid
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
        const grad = ctx.createLinearGradient(0, H, 0, 0);
        grad.addColorStop(0, `rgba(239, 68, 68, ${0.65 * intensity})`);
        grad.addColorStop(0.35, `rgba(234, 179, 8, ${0.55 * intensity})`);
        grad.addColorStop(0.7, `rgba(168, 85, 247, ${0.45 * intensity})`);
        grad.addColorStop(1, 'rgba(30, 27, 75, 0.3)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, W, H);
        // Convection ripple waves
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
        ctx.lineWidth = 2;
        for (let y = 0; y < H; y += 30) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.bezierCurveTo(W * 0.33, y + Math.sin(time * 5 + y) * 12, W * 0.66, y - Math.sin(time * 5 + y) * 12, W, y);
            ctx.stroke();
        }
    });

    // 45. Gray Nanobot Swarm
    reg(['cp_nanobot_deck_swarm', 'item_45', 'cp_nanobot_swarm'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const count = Math.round(45 + rough * 65);
        ctx.fillStyle = `rgba(148, 163, 184, ${0.85 * intensity})`;
        for (let i = 0; i < count; i++) {
            const ang = (i * 0.2) + time * 1.8 * speed;
            const dist = (FX.hash(i * 11) * Math.min(W, H) * 0.45);
            const nx = W * 0.5 + Math.cos(ang) * dist;
            const ny = H * 0.5 + Math.sin(ang) * dist;
            ctx.fillRect(nx, ny, 2.5, 2.5);
        }
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
        // Sidewalk grate bars
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(W * 0.2, H * 0.3, W * 0.6, H * 0.4);
        ctx.fillStyle = '#0f172a';
        for (let x = W * 0.22; x < W * 0.78; x += 12) {
            ctx.fillRect(x, H * 0.32, 6, H * 0.36);
        }
        // Billowing white steam plumes
        for (let s = 0; s < 6; s++) {
            const sy = (H * 0.4 - time * 65 * speed - s * 25) % H;
            const sx = W * 0.5 + Math.sin(time * 2 + s) * 25;
            const sr = (25 + s * 8) * elScale;
            FX.drawRadialGlow(ctx, sx, sy, 2, sr, `rgba(241, 245, 249, ${0.45 * intensity})`, 'rgba(241, 245, 249, 0)');
        }
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
        const shadows = 2;
        for (let s = 0; s < shadows; s++) {
            const sx = ((time * (140 + s * 45) * speed + s * (W * 0.6)) % (W + 200)) - 100;
            const sy = H * (0.35 + s * 0.3);
            ctx.fillStyle = `rgba(0, 0, 0, ${0.38 * intensity})`;
            ctx.beginPath();
            ctx.ellipse(sx, sy, 70 * elScale, 28 * elScale, 0.15, 0, Math.PI * 2);
            ctx.fill();
        }
    });

    // =========================================================================
    // C. SPOT / SINGLE FOCAL OBJECTS (51 - 75)
    // =========================================================================

    // 51. Broken Neon Storefront Sign
    reg(['cp_flickering_neon', 'item_51', 'cp_broken_neon_sign'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        // Brick wall backdrop
        ctx.fillStyle = '#1c1917';
        ctx.fillRect(0, 0, W, H);
        // Neon letters "HOTEL / カプセル"
        const flicker = (Math.sin(time * 25 * speed) > -0.2) && (FX.hash(Math.floor(time * 12)) > 0.15);
        ctx.font = `bold ${Math.round(28 * elScale)}px sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        // Buzzing neon glow
        if (flicker) {
            ctx.shadowColor = '#ec4899';
            ctx.shadowBlur = 18;
            ctx.fillStyle = `rgba(244, 114, 182, ${0.95 * intensity})`;
            ctx.fillText('HOTEL', cx, cy - 10 * elScale);
            ctx.shadowColor = '#38bdf8';
            ctx.fillStyle = `rgba(186, 230, 253, ${0.95 * intensity})`;
            ctx.fillText('カプセル', cx, cy + 22 * elScale);
            ctx.shadowBlur = 0;
        } else {
            // Dead unlit glass tubes with faint metal reflection
            ctx.fillStyle = '#475569';
            ctx.fillText('HOTEL', cx, cy - 10 * elScale);
            ctx.fillText('カプセル', cx, cy + 22 * elScale);
            // Sparking transformer short-circuit
            if (Math.sin(time * 15) > 0.6) {
                FX.drawRadialGlow(ctx, cx + 35 * elScale, cy - 20 * elScale, 1, 14, '#ffffff', 'rgba(56, 189, 248, 0)');
            }
        }
    });

    // 52. Holographic Corporate Billboard
    reg(['cp_holo_billboard', 'item_52', 'cp_holo_corporate_billboard'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        // Projector emitter base
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(cx - 30 * elScale, H - 15, 60 * elScale, 12);
        // Holographic projector light pyramid
        const holoGrad = ctx.createLinearGradient(cx, H - 15, cx, cy - 40 * elScale);
        holoGrad.addColorStop(0, 'rgba(56, 189, 248, 0.45)');
        holoGrad.addColorStop(1, 'rgba(56, 189, 248, 0.05)');
        ctx.fillStyle = holoGrad;
        ctx.beginPath();
        ctx.moveTo(cx - 20 * elScale, H - 15);
        ctx.lineTo(cx - 55 * elScale, cy - 40 * elScale);
        ctx.lineTo(cx + 55 * elScale, cy - 40 * elScale);
        ctx.lineTo(cx + 20 * elScale, H - 15);
        ctx.closePath();
        ctx.fill();
        // Rotating 3D wireframe corporate logo
        ctx.save();
        ctx.translate(cx, cy - 10 * elScale);
        ctx.rotate(time * 1.5 * speed);
        ctx.strokeStyle = `rgba(0, 255, 200, ${0.95 * intensity})`;
        ctx.lineWidth = 2.5;
        ctx.shadowColor = '#00ffc8';
        ctx.shadowBlur = 12;
        ctx.strokeRect(-25 * elScale, -25 * elScale, 50 * elScale, 50 * elScale);
        ctx.beginPath();
        ctx.arc(0, 0, 18 * elScale, 0, Math.PI * 2);
        ctx.stroke();
        ctx.shadowBlur = 0;
        ctx.restore();
        FX.drawScanlines(ctx, cx - 60 * elScale, cy - 50 * elScale, 120 * elScale, 90 * elScale, 4, 0.35);
    });

    // 53. Bent Sputtering Streetlamp
    reg(['cp_bent_streetlamp', 'item_53', 'cp_bent_sputtering_streetlamp'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5;
        // Bent steel lamppost
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 4 * elScale;
        ctx.beginPath();
        ctx.moveTo(cx, H);
        ctx.quadraticCurveTo(cx - 10 * elScale, H * 0.5, cx - 25 * elScale, H * 0.25);
        ctx.lineTo(cx - 15 * elScale, H * 0.22);
        ctx.stroke();
        // Sputtering sodium bulb flicker
        const lampOn = (Math.sin(time * 28 * speed) > -0.4) && (FX.hash(Math.floor(time * 8)) > 0.2);
        const lx = cx - 15 * elScale, ly = H * 0.22;
        if (lampOn) {
            FX.drawRadialGlow(ctx, lx, ly, 2, 85 * elScale, `rgba(254, 240, 138, ${0.95 * intensity})`, 'rgba(234, 179, 8, 0)');
            // Volumetric ground cone
            FX.drawVolumetricCone(ctx, lx, ly, Math.PI * 0.5, H * 0.75, 0.75, `rgba(253, 224, 71, ${0.35 * intensity})`, 'rgba(202, 138, 4, 0)');
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

    // 57. Automated Ceiling Turret
    reg(['cp_ceiling_turret', 'item_57', 'cp_automated_ceiling_turret'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.35;
        const pan = Math.sin(time * 1.5 * speed) * 0.85;
        // Ceiling mounting plate
        ctx.fillStyle = '#1e293b';
        ctx.beginPath();
        ctx.arc(cx, cy, 26 * elScale, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 2.5;
        ctx.stroke();
        // Swiveling gun pod
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(pan);
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(-12 * elScale, -8 * elScale, 24 * elScale, 16 * elScale);
        // Twin heavy gun barrels
        ctx.fillStyle = '#334155';
        ctx.fillRect(10 * elScale, -6 * elScale, 22 * elScale, 4 * elScale);
        ctx.fillRect(10 * elScale, 2 * elScale, 22 * elScale, 4 * elScale);
        // Red laser targeting beam
        ctx.strokeStyle = `rgba(239, 68, 68, ${0.85 * intensity})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(32 * elScale, -4 * elScale);
        ctx.lineTo(W, -4 * elScale);
        ctx.stroke();
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
        const cx = W * 0.5, cy = H * 0.6;
        // Traditional wooden food cart
        ctx.fillStyle = '#78350f';
        ctx.fillRect(cx - 30 * elScale, cy - 10 * elScale, 60 * elScale, 24 * elScale);
        // Red glowing paper lantern
        FX.drawRadialGlow(ctx, cx - 22 * elScale, cy - 25 * elScale, 1, 16 * elScale, `rgba(239, 68, 68, ${0.95 * intensity})`, 'rgba(239, 68, 68, 0)');
        // Simmering broth pot with dense savory steam plumes
        for (let s = 0; s < 5; s++) {
            const sx = cx + 8 * elScale + Math.sin(time * 3 + s) * 6;
            const sy = cy - 15 * elScale - ((time * 35 * speed + s * 14) % 45);
            const sr = (6 + s * 3) * elScale;
            FX.drawRadialGlow(ctx, sx, sy, 1, sr, `rgba(255, 255, 255, ${0.45 * intensity})`, 'rgba(255, 255, 255, 0)');
        }
    });

    // 64. Flickering Vending Machine
    reg(['cp_dim_vending_machine', 'item_64', 'cp_flickering_vending_machine'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        const flick = (Math.sin(time * 18 * speed) > -0.3);
        // Machine chassis
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(cx - 24 * elScale, cy - 38 * elScale, 48 * elScale, 76 * elScale);
        // Backlit display window
        ctx.fillStyle = flick ? `rgba(56, 189, 248, ${0.9 * intensity})` : 'rgba(15, 23, 42, 0.8)';
        ctx.fillRect(cx - 20 * elScale, cy - 34 * elScale, 40 * elScale, 45 * elScale);
        // Colored drink cans inside
        if (flick) {
            const canColors = ['#ef4444', '#10b981', '#f59e0b', '#ec4899'];
            for (let c = 0; c < 4; c++) {
                ctx.fillStyle = canColors[c];
                ctx.fillRect(cx - 16 * elScale + (c % 2) * (18 * elScale), cy - 28 * elScale + Math.floor(c / 2) * (18 * elScale), 12 * elScale, 14 * elScale);
            }
            // Floor illumination pool
            FX.drawVolumetricCone(ctx, cx, cy + 38 * elScale, Math.PI * 0.5, 45 * elScale, 0.75, 'rgba(56, 189, 248, 0.4)', 'rgba(56, 189, 248, 0)');
        }
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

    // 70. Cryo-Stasis Pod Vent
    reg(['cp_cryo_stasis_pod', 'item_70', 'cp_cryostasis_pod_vent'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        // Upright capsule
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(cx - 20 * elScale, cy - 35 * elScale, 40 * elScale, 70 * elScale);
        // Frosted cyan glass window
        ctx.fillStyle = `rgba(186, 230, 253, ${0.45 * intensity})`;
        ctx.fillRect(cx - 14 * elScale, cy - 28 * elScale, 28 * elScale, 56 * elScale);
        // Freezing cryogenic vapor pouring from side unsealed hatch
        for (let v = 0; v < 6; v++) {
            const vx = cx + 20 * elScale + (v * 5);
            const vy = cy + 10 * elScale + ((time * 30 * speed + v * 8) % 25);
            FX.drawRadialGlow(ctx, vx, vy, 1, (10 + v * 2) * elScale, `rgba(240, 249, 255, ${0.45 * intensity})`, 'rgba(240, 249, 255, 0)');
        }
    });

    // 71. Wall-Mounted Surveillance Camera
    reg(['cp_security_cam', 'item_71', 'cp_surveillance_cam_panning'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        const pan = Math.sin(time * 1.2 * speed) * 0.75;
        // Wall mounting bracket
        ctx.fillStyle = '#334155';
        ctx.fillRect(cx - 25 * elScale, cy - 6 * elScale, 10 * elScale, 12 * elScale);
        // Panning camera arm & housing
        ctx.save();
        ctx.translate(cx - 15 * elScale, cy);
        ctx.rotate(pan);
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(0, -7 * elScale, 26 * elScale, 14 * elScale);
        // Front lens
        ctx.fillStyle = '#38bdf8';
        ctx.fillRect(24 * elScale, -5 * elScale, 3 * elScale, 10 * elScale);
        // Blinking red recording tally light
        const recBlink = Math.sin(time * 4) > 0;
        ctx.fillStyle = recBlink ? '#ef4444' : '#450a0a';
        ctx.beginPath();
        ctx.arc(8 * elScale, -9 * elScale, 2, 0, Math.PI * 2);
        ctx.fill();
        // Scanning vision cone
        FX.drawVolumetricCone(ctx, 26 * elScale, 0, 0, 60 * elScale, 0.45, `rgba(239, 68, 68, ${0.2 * intensity})`, 'rgba(239, 68, 68, 0)');
        ctx.restore();
    });

    // 72. Stray Cyber-Cat on Fire Escape
    reg(['cp_stray_cybercat', 'item_72', 'cp_cyber_cat_fire_escape'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.55;
        // Metal grating ledge
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(cx - 30 * elScale, cy + 15 * elScale); ctx.lineTo(cx + 30 * elScale, cy + 15 * elScale); ctx.stroke();
        // Cat body silhouette
        ctx.fillStyle = '#090d16';
        ctx.beginPath();
        ctx.ellipse(cx, cy, 14 * elScale, 10 * elScale, 0, 0, Math.PI * 2); // Body
        ctx.arc(cx - 10 * elScale, cy - 10 * elScale, 8 * elScale, 0, Math.PI * 2); // Head
        ctx.fill();
        // Pointed cat ears
        ctx.beginPath();
        ctx.moveTo(cx - 16 * elScale, cy - 15 * elScale); ctx.lineTo(cx - 13 * elScale, cy - 23 * elScale); ctx.lineTo(cx - 9 * elScale, cy - 16 * elScale);
        ctx.moveTo(cx - 11 * elScale, cy - 16 * elScale); ctx.lineTo(cx - 7 * elScale, cy - 23 * elScale); ctx.lineTo(cx - 4 * elScale, cy - 15 * elScale);
        ctx.fill();
        // Glowing cyan bionic optical eye
        ctx.fillStyle = '#06b6d4';
        ctx.beginPath();
        ctx.arc(cx - 12 * elScale, cy - 10 * elScale, 1.5, 0, Math.PI * 2);
        ctx.fill();
        // Sinuous flicking metallic tail
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(cx + 12 * elScale, cy + 4 * elScale);
        ctx.quadraticCurveTo(cx + 25 * elScale, cy - 15 * elScale + Math.sin(time * 5 * speed) * 8, cx + 18 * elScale, cy - 25 * elScale);
        ctx.stroke();
    });

    // 73. Discarded Neon Rain-Umbrella
    reg(['cp_neon_umbrella', 'item_73', 'cp_neon_rain_umbrella'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        const bob = Math.sin(time * 2 * speed) * 3;
        // Water puddle ripples around umbrella
        ctx.strokeStyle = `rgba(56, 189, 248, ${0.4 * intensity})`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.ellipse(cx, cy + 12 * elScale, 32 * elScale, 14 * elScale, 0, 0, Math.PI * 2);
        ctx.stroke();
        // Transparent vinyl canopy
        ctx.save();
        ctx.translate(cx, cy + bob);
        ctx.fillStyle = `rgba(244, 114, 182, ${0.35 * intensity})`;
        ctx.beginPath();
        ctx.arc(0, 0, 26 * elScale, Math.PI, 0);
        ctx.fill();
        // Glowing neon fiber-optic ribs
        ctx.strokeStyle = `rgba(236, 72, 153, ${0.95 * intensity})`;
        ctx.lineWidth = 2;
        for (let r = 0; r < 5; r++) {
            const ang = Math.PI + (Math.PI / 4) * r;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(Math.cos(ang) * 26 * elScale, Math.sin(ang) * 26 * elScale);
            ctx.stroke();
        }
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
        // Brick wall backdrop
        ctx.fillStyle = '#18181b';
        ctx.fillRect(0, 0, W, H);
        // Shifting RGB chromatic color
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
