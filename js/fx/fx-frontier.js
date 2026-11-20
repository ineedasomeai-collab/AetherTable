/**
 * AetherTable VTT - Weird West & Frontier FX (75 Unique Elements)
 * Procedural Canvas Renderers for Elements 76 through 150.
 * Every single entry across all 75 items has its own bespoke physical geometry,
 * distinct kinetic animation, 100% transparent battlemap backdrops,
 * and dynamic integration with the Fractal / Detail slider.
 */
(function() {
    'use strict';
    const reg = window.VTT_FX_DISPATCHER ? window.VTT_FX_DISPATCHER.register : null;
    if (!reg) return;
    const FX = window.VTT_FX = window.FX = window.VTT_FX || {};
    const VTT_FX = FX;

// =========================================================================
// A. LINEAR MOTION (76 - 100) - Weird West & Frontier
// =========================================================================

// 76. Steam Locomotive Headlamp Beam (Top-Down Battlemap View)
reg(['ww_locomotive_beam', 'item_76'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cy = H * 0.5;
    ctx.save();
    // Iron railroad tracks laid on wooden ties (Top-Down)
    ctx.strokeStyle = '#523a28';
    ctx.lineWidth = 3 * elScale;
    for (let t = 0; t < W; t += 18 * elScale) {
        ctx.beginPath();
        ctx.moveTo(t, cy - 18 * elScale); ctx.lineTo(t, cy + 18 * elScale);
        ctx.stroke();
    }
    ctx.strokeStyle = '#71717a';
    ctx.lineWidth = 2 * elScale;
    ctx.beginPath();
    ctx.moveTo(0, cy - 14 * elScale); ctx.lineTo(W, cy - 14 * elScale);
    ctx.moveTo(0, cy + 14 * elScale); ctx.lineTo(W, cy + 14 * elScale);
    ctx.stroke();

    // Cylindrical locomotive boiler nose viewed from overhead (Top-Down)
    const locoX = 35 * elScale;
    ctx.fillStyle = '#18181b';
    ctx.fillRect(0, cy - 15 * elScale, locoX, 30 * elScale);

    // Front cowcatcher wedge extending forward
    ctx.fillStyle = '#3f3f46';
    ctx.beginPath();
    ctx.moveTo(locoX, cy - 16 * elScale);
    ctx.lineTo(locoX + 16 * elScale, cy);
    ctx.lineTo(locoX, cy + 16 * elScale);
    ctx.closePath();
    ctx.fill();

    // Brass headlamp housing on the front nose
    ctx.fillStyle = '#b45309';
    ctx.fillRect(locoX + 8 * elScale, cy - 7 * elScale, 8 * elScale, 14 * elScale);

    // Piercing parabolic volumetric beam cutting through desert darkness
    const beamLen = W * 0.85;
    FX.drawVolumetricCone(ctx, locoX + 16 * elScale, cy, 0, beamLen, 0.45 + rough * 0.1, 'rgba(254, 240, 138, ' + (0.8 * intensity) + ')', 'rgba(234, 179, 8, 0)');

    // Billowing dark coal puffs drifting backward over the train roof
    for (let s = 0; s < 6; s++) {
        const sx = locoX - ((time * 60 * speed + s * 22) % (W * 0.3));
        const sy = cy + Math.sin(time * 2 + s) * (8 * elScale);
        ctx.fillStyle = 'rgba(15, 23, 42, ' + (0.8 * intensity) + ')';
        ctx.beginPath();
        ctx.arc(sx, sy, (8 + s * 3) * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
    ctx.restore();
});

// 77. Oil Lantern Swaying From Rear Rack of Moving Stagecoach (Pure 90-deg Top-Down Overhead Battlemap View)
reg(['ww_stagecoach_lantern', 'ww_lantern_sway', 'item_77'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.52, cy = H * 0.5;
    // Stagecoach kinetic sway creates an elliptical orbital oscillation seen from directly overhead
    const swayX = Math.sin(time * 3.2 * speed) * (18 * elScale);
    const swayY = Math.cos(time * 6.4 * speed) * (6 * elScale);
    const lx = cx + swayX;
    const ly = cy + swayY;
    const flicker = 0.86 + Math.sin(time * 26 * speed) * 0.08 + Math.cos(time * 41 * speed) * 0.06;

    ctx.save();

    // 1. DYNAMIC GROUND LIGHT POOL & CARRIAGE SHADOW CAST ONTO DIRT ROAD
    const groundLx = lx - swayX * 0.45;
    const groundLy = ly - swayY * 0.45;
    const poolR = (85 + rough * 22) * elScale;

    // Broad warm oil lamp illumination on the ground/road
    const groundPool = ctx.createRadialGradient(groundLx, groundLy, 4 * elScale, groundLx, groundLy, poolR);
    groundPool.addColorStop(0, `rgba(254, 240, 138, ${0.88 * flicker * intensity})`);
    groundPool.addColorStop(0.35, `rgba(245, 158, 11, ${0.48 * flicker * intensity})`);
    groundPool.addColorStop(0.7, `rgba(180, 83, 9, ${0.16 * flicker * intensity})`);
    groundPool.addColorStop(1, 'rgba(180, 83, 9, 0)');
    ctx.fillStyle = groundPool;
    ctx.beginPath();
    ctx.arc(groundLx, groundLy, poolR, 0, Math.PI * 2);
    ctx.fill();

    // Shadow cast on ground by swaying lantern housing
    ctx.fillStyle = `rgba(15, 23, 42, ${0.35 * intensity})`;
    ctx.beginPath();
    ctx.ellipse(groundLx + swayX * 0.35, groundLy + swayY * 0.35 + 8 * elScale, 14 * elScale, 8 * elScale, 0.2, 0, Math.PI * 2);
    ctx.fill();

    // 2. STAGECOACH REAR RACK / TAILGATE CORNER (Top-Down Weathered Timber & Iron)
    // Left-side wooden stagecoach roof/rack frame where the lantern is mounted
    const rackW = W * 0.24;
    const rackH = H * 0.58;
    const rackX = W * 0.04;
    const rackY = cy - rackH * 0.5;

    // Weathered oak planks
    ctx.fillStyle = '#451a03';
    ctx.fillRect(rackX, rackY, rackW, rackH);

    // Individual plank seams and grain lines
    ctx.strokeStyle = '#271003';
    ctx.lineWidth = 2 * elScale;
    for (let p = 1; p < 4; p++) {
        const py = rackY + (p / 4) * rackH;
        ctx.beginPath();
        ctx.moveTo(rackX, py);
        ctx.lineTo(rackX + rackW, py);
        ctx.stroke();
    }

    // Heavy black iron corner bracket
    ctx.fillStyle = '#1c1917';
    ctx.strokeStyle = '#44403c';
    ctx.lineWidth = 1.5 * elScale;
    ctx.beginPath();
    ctx.rect(rackX + rackW - 14 * elScale, rackY + 6 * elScale, 14 * elScale, rackH - 12 * elScale);
    ctx.fill();
    ctx.stroke();

    // Iron rivet heads along the bracket
    ctx.fillStyle = '#78716c';
    for (let r = 0; r < 5; r++) {
        const ry = rackY + 14 * elScale + r * ((rackH - 28 * elScale) / 4);
        ctx.beginPath();
        ctx.arc(rackX + rackW - 7 * elScale, ry, 2 * elScale, 0, Math.PI * 2);
        ctx.fill();
    }

    // 3. WROUGHT-IRON CANTILEVER LANTERN BOOM ARM & SUSPENSION CHAIN
    const mountX = rackX + rackW;
    const mountY = cy;

    // Forged iron support bracket extending out from carriage corner
    ctx.strokeStyle = '#0c0a09';
    ctx.lineWidth = 3.5 * elScale;
    ctx.beginPath();
    ctx.moveTo(mountX, mountY);
    ctx.lineTo(cx - 10 * elScale, mountY);
    ctx.lineTo(cx, cy);
    ctx.stroke();

    // Hanging iron chain links swinging to the lantern mount point
    ctx.strokeStyle = '#292524';
    ctx.lineWidth = 2 * elScale;
    const chainLinks = 4;
    for (let c = 0; c < chainLinks; c++) {
        const t0 = c / chainLinks;
        const t1 = (c + 1) / chainLinks;
        const x0 = cx + t0 * swayX;
        const y0 = cy + t0 * swayY;
        const x1 = cx + t1 * swayX;
        const y1 = cy + t1 * swayY;
        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.lineTo(x1, y1);
        ctx.stroke();
    }

    // 4. SWAYING BRASS/GLASS OIL LANTERN HOUSING (Pure 90-deg Top-Down Overhead View)
    const hoodR = 15 * elScale;

    // Hexagonal brass hood rim seen from above
    ctx.fillStyle = '#78350f';
    ctx.strokeStyle = '#451a03';
    ctx.lineWidth = 2 * elScale;
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
        const a = (i * Math.PI) / 3 + 0.25;
        const hx = lx + Math.cos(a) * hoodR;
        const hy = ly + Math.sin(a) * hoodR;
        if (i === 0) ctx.moveTo(hx, hy); else ctx.lineTo(hx, hy);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Hexagonal peaked roof ribs converging to central chimney
    ctx.strokeStyle = '#92400e';
    ctx.lineWidth = 1.2 * elScale;
    for (let i = 0; i < 6; i++) {
        const a = (i * Math.PI) / 3 + 0.25;
        ctx.beginPath();
        ctx.moveTo(lx, ly);
        ctx.lineTo(lx + Math.cos(a) * hoodR, ly + Math.sin(a) * hoodR);
        ctx.stroke();
    }

    // Glowing beveled glass core under the hood louvers
    const coreGrad = ctx.createRadialGradient(lx, ly, 1, lx, ly, 9 * elScale);
    coreGrad.addColorStop(0, '#ffffff');
    coreGrad.addColorStop(0.35, `rgba(254, 240, 138, ${0.95 * flicker})`);
    coreGrad.addColorStop(0.75, `rgba(245, 158, 11, ${0.85 * flicker})`);
    coreGrad.addColorStop(1, 'rgba(180, 83, 9, 0)');
    ctx.fillStyle = coreGrad;
    ctx.beginPath();
    ctx.arc(lx, ly, 9 * elScale, 0, Math.PI * 2);
    ctx.fill();

    // Central brass chimney flue cap & top suspension ring
    ctx.fillStyle = '#292524';
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 1.2 * elScale;
    ctx.beginPath();
    ctx.arc(lx, ly, 4.5 * elScale, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Brass carrying ring
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 1.6 * elScale;
    ctx.beginPath();
    ctx.ellipse(lx, ly - 3.5 * elScale, 5 * elScale, 2.5 * elScale, 0, 0, Math.PI * 2);
    ctx.stroke();

    ctx.restore();
});

// 78. Ignited Kerosene Trail Racing Across Floor (Organic Spilled Fluid Fire Trail - Top-Down Battlemap View)
reg(['ww_kerosene_trail', 'ww_kerosene_fire_trail', 'item_78'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cy = H * 0.5;
    const startX = W * 0.05;
    const endX = W * 0.95;
    const trailSpan = endX - startX;
    const progress = (time * 0.52 * speed) % 1.0;
    const burnHeadX = startX + progress * trailSpan;

    // Organic meandering spilled kerosene trajectory (NO rigid straight line, NO floorboard bars)
    function getSpillY(x) {
        return cy + Math.sin(x * 0.022 + 0.4) * (14 * elScale)
                  + Math.sin(x * 0.058 + 1.8) * (8 * elScale)
                  + Math.cos(x * 0.11 + 3.1) * (4 * elScale);
    }

    ctx.save();

    // 1. UNIGNITED WET KEROSENE SHEEN AHEAD OF RACING FLAME FRONT
    const wetAheadLen = Math.min(burnHeadX + 110 * elScale, endX);
    if (wetAheadLen > burnHeadX) {
        ctx.strokeStyle = `rgba(180, 83, 9, ${0.48 * intensity})`;
        ctx.lineWidth = (9 + rough * 4) * elScale;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        for (let x = burnHeadX; x <= wetAheadLen; x += 8) {
            const y = getSpillY(x);
            if (x === burnHeadX) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Glossy fuel surface specular highlight
        ctx.strokeStyle = `rgba(254, 240, 138, ${0.25 * intensity})`;
        ctx.lineWidth = 2.5 * elScale;
        ctx.beginPath();
        for (let x = burnHeadX; x <= wetAheadLen; x += 10) {
            const y = getSpillY(x) - 1.5 * elScale;
            if (x === burnHeadX) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Unignited spilled fluid puddle patches ahead
        for (let p = 0; p < 3; p++) {
            const px = burnHeadX + (p + 1) * 28 * elScale;
            if (px < endX) {
                const py = getSpillY(px) + Math.sin(p * 3.7) * (5 * elScale);
                ctx.fillStyle = `rgba(146, 64, 14, ${0.42 * intensity})`;
                ctx.beginPath();
                ctx.ellipse(px, py, (10 + p * 3) * elScale, (6 + p * 2) * elScale, 0.2, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }

    // 2. CHARRED SOOT & SCORCHED GROUND WAKE BEHIND THE FLAME FRONT
    ctx.strokeStyle = `rgba(24, 24, 27, ${0.72 * intensity})`;
    ctx.lineWidth = (14 + rough * 7) * elScale;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    for (let x = startX; x <= burnHeadX; x += 8) {
        const y = getSpillY(x);
        if (x === startX) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Charred scorch spots and carbonized puddle footprints
    for (let s = startX + 15 * elScale; s < burnHeadX - 20 * elScale; s += 38 * elScale) {
        const sy = getSpillY(s) + Math.sin(s * 1.7) * (6 * elScale);
        ctx.fillStyle = `rgba(15, 23, 42, ${0.55 * intensity})`;
        ctx.beginPath();
        ctx.ellipse(s, sy, 12 * elScale, 7 * elScale, Math.sin(s), 0, Math.PI * 2);
        ctx.fill();
    }

    // 3. RADIANT HEAT & GROUND GLOW ALONG ACTIVE BURNING ZONE
    const activeBurnStart = Math.max(startX, burnHeadX - 220 * elScale);
    ctx.strokeStyle = `rgba(234, 88, 12, ${0.38 * intensity})`;
    ctx.lineWidth = (26 + rough * 14) * elScale;
    ctx.beginPath();
    for (let x = activeBurnStart; x <= burnHeadX; x += 8) {
        const y = getSpillY(x);
        if (x === activeBurnStart) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // 4. WHITE-HOT INTENSE FLAME CORE
    const coreStart = Math.max(startX, burnHeadX - 160 * elScale);
    ctx.strokeStyle = `rgba(255, 255, 255, ${0.92 * intensity})`;
    ctx.lineWidth = 4 * elScale;
    ctx.beginPath();
    for (let x = coreStart; x <= burnHeadX; x += 6) {
        const y = getSpillY(x);
        if (x === coreStart) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // 5. BILLOWING DANCING FLAME TONGUES LEAPING FROM SPILLED KEROSENE
    const flameCount = 18;
    for (let f = 0; f < flameCount; f++) {
        const fx = burnHeadX - (f / flameCount) * Math.min(burnHeadX - startX, 220 * elScale);
        if (fx < startX) continue;
        const fyBase = getSpillY(fx);
        const flameSeed = f * 37.1;
        const fy = fyBase + Math.sin(time * 22 * speed + flameSeed) * (9 + rough * 10) * elScale;
        const fR = (5 + Math.cos(time * 16 + f * 2.3) * 2.5 + (1 - f / flameCount) * 9) * elScale;

        const fGrad = ctx.createRadialGradient(fx, fy, 1, fx, fy, fR);
        fGrad.addColorStop(0, 'rgba(255, 255, 255, 0.98)');
        fGrad.addColorStop(0.3, `rgba(254, 240, 138, ${0.95 * intensity})`);
        fGrad.addColorStop(0.65, `rgba(249, 115, 22, ${0.82 * intensity})`);
        fGrad.addColorStop(1, 'rgba(220, 38, 38, 0)');
        ctx.fillStyle = fGrad;
        ctx.beginPath();
        ctx.arc(fx, fy, fR, 0, Math.PI * 2);
        ctx.fill();
    }

    // 6. RISING SMOKE PUFFS & DRIFTING INCANDESCENT EMBERS
    for (let e = 0; e < 12; e++) {
        const ex = burnHeadX - (e * 18 + ((time * 48 * speed) % 90)) * elScale;
        if (ex > startX) {
            const ey = getSpillY(ex) - (6 + Math.sin(time * 10 + e * 4) * (14 + e * 2.5)) * elScale;
            // Fiery sparks
            ctx.fillStyle = (e % 2 === 0) ? `rgba(254, 240, 138, ${0.9 * intensity})` : `rgba(239, 68, 68, ${0.8 * intensity})`;
            ctx.beginPath();
            ctx.arc(ex, ey, (1.2 + (e % 3) * 0.9) * elScale, 0, Math.PI * 2);
            ctx.fill();

            // Wispy gray smoke clouds rising above the charred wake
            if (e % 3 === 0) {
                const smokeY = ey - (12 + e * 3) * elScale;
                ctx.fillStyle = `rgba(71, 85, 105, ${0.25 * intensity})`;
                ctx.beginPath();
                ctx.arc(ex + Math.sin(time * 3 + e) * 8 * elScale, smokeY, (10 + e * 2) * elScale, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }

    ctx.restore();
});

// 79. Desert Sunbeams Shifting Across Red-Rock Canyon Floor
reg(['ww_canyon_sunbeams', 'item_79'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numBeams = 4;
    for (let b = 0; b < numBeams; b++) {
        const topX = W * 0.2 + (b / 3) * (W * 0.5);
        const shift = Math.sin(time * 0.6 * speed + b) * (20 + rough * 15);
        const grad = ctx.createLinearGradient(topX, 0, topX + 50 + shift, H);
        grad.addColorStop(0, `rgba(254, 240, 138, ${0.4 * intensity})`);
        grad.addColorStop(1, 'rgba(245, 158, 11, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.moveTo(topX - 20 * elScale, 0);
        ctx.lineTo(topX + 20 * elScale, 0);
        ctx.lineTo(topX + 80 * elScale + shift, H);
        ctx.lineTo(topX + 20 * elScale + shift, H);
        ctx.closePath();
        ctx.fill();
    }
});

// 80. Pale Blue Ghost-Lights Drifting Along Abandoned Railroad Ties
reg(['ww_ghost_lights_tracks', 'item_80'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cy = H * 0.55;
    // Abandoned wooden ties & iron rails
    ctx.strokeStyle = '#451a03';
    ctx.lineWidth = 4 * elScale;
    for (let x = 10; x < W; x += 30) {
        ctx.beginPath(); ctx.moveTo(x, cy - 15 * elScale); ctx.lineTo(x, cy + 15 * elScale); ctx.stroke();
    }
    // Pale ethereal blue ghost orbs drifting
    const numOrbs = 3;
    for (let o = 0; o < numOrbs; o++) {
        const ox = ((time * 45 * speed + o * 110) % (W + 60)) - 30;
        const oy = cy + Math.sin(time * 3 + o) * 12 * elScale;
        const glow = ctx.createRadialGradient(ox, oy, 2, ox, oy, 28 * elScale);
        glow.addColorStop(0, `rgba(186, 230, 253, ${0.9 * intensity})`);
        glow.addColorStop(0.5, `rgba(56, 189, 248, ${0.45 * intensity})`);
        glow.addColorStop(1, 'rgba(56, 189, 248, 0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(ox, oy, 28 * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 81. Muddy Flash-Flood Water Surging Down Dry Desert Arroyo (Pure 90-deg Top-Down Overhead Battlemap View)
reg(['ww_arroyo_flashflood', 'ww_flash_flood', 'item_81'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const waveX = ((time * 160 * speed) % (W + 280)) - 140;

    ctx.save();

    // 1. Red-rock desert arroyo canyon banks (top and bottom edges)
    const bankH = H * 0.22;
    // North canyon cliff edge
    ctx.fillStyle = '#7c2d12';
    ctx.beginPath();
    ctx.moveTo(0, 0); ctx.lineTo(W, 0); ctx.lineTo(W, bankH);
    for (let x = W; x >= 0; x -= 25) {
        ctx.lineTo(x, bankH + Math.sin(x * 0.03 + 1.2) * (10 + rough * 12) * elScale);
    }
    ctx.closePath();
    ctx.fill();

    // South canyon cliff edge
    ctx.beginPath();
    ctx.moveTo(0, H); ctx.lineTo(W, H); ctx.lineTo(W, H - bankH);
    for (let x = W; x >= 0; x -= 25) {
        ctx.lineTo(x, H - bankH - Math.sin(x * 0.03 + 2.5) * (10 + rough * 12) * elScale);
    }
    ctx.closePath();
    ctx.fill();

    // 2. Churning red-clay silt water torrent filling the canyon channel
    const riverY = bankH + 8 * elScale;
    const riverH = H - bankH * 2 - 16 * elScale;
    const floodLen = Math.min(W, Math.max(0, waveX));

    if (floodLen > 0) {
        // Deep muddy silt riverbed
        ctx.fillStyle = `rgba(120, 53, 15, ${0.92 * intensity})`;
        ctx.fillRect(0, riverY, floodLen, riverH);

        // High-velocity brown surface streamlines
        ctx.strokeStyle = `rgba(217, 119, 6, ${0.65 * intensity})`;
        ctx.lineWidth = 2.5 * elScale;
        for (let s = 0; s < 7; s++) {
            const sy = riverY + (s + 0.5) * (riverH / 7);
            ctx.beginPath();
            for (let x = 0; x <= floodLen; x += 25) {
                const y = sy + Math.sin(x * 0.04 + time * 6 * speed + s) * (6 + rough * 6) * elScale;
                if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
            }
            ctx.stroke();
        }

        // 3. Wall of frothing churning mud surge at the leading flood wave front
        if (waveX > -20 && waveX < W + 100) {
            // Roaring froth wave crest
            for (let f = 0; f < 14; f++) {
                const fy = riverY + (f / 13) * riverH + Math.sin(f * 2.3 + time * 12) * 6 * elScale;
                const fx = waveX - Math.abs(f - 6.5) * 4 * elScale + Math.sin(time * 18 + f) * 5 * elScale;
                const fR = (12 + (f % 3) * 5 + rough * 8) * elScale;

                const fGrad = ctx.createRadialGradient(fx, fy, 2, fx, fy, fR);
                fGrad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
                fGrad.addColorStop(0.35, `rgba(254, 243, 199, ${0.90 * intensity})`);
                fGrad.addColorStop(0.75, `rgba(217, 119, 6, ${0.65 * intensity})`);
                fGrad.addColorStop(1, 'rgba(120, 53, 15, 0)');
                ctx.fillStyle = fGrad;
                ctx.beginPath();
                ctx.arc(fx, fy, fR, 0, Math.PI * 2);
                ctx.fill();
            }

            // Churning tumbling river boulders caught in the surge
            for (let b = 0; b < 4; b++) {
                const bx = waveX - (25 + b * 22) * elScale;
                const by = riverY + (b + 1) * (riverH / 5) + Math.sin(time * 8 + b) * 8 * elScale;
                if (bx > 0 && bx < W) {
                    ctx.fillStyle = '#451a03';
                    ctx.beginPath();
                    ctx.arc(bx, by, (9 + (b % 2) * 4) * elScale, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.strokeStyle = '#271003';
                    ctx.lineWidth = 1.5 * elScale;
                    ctx.stroke();
                }
            }
        }
    }

    ctx.restore();
});

// 82. Runaway Ore Cart on Mine Tracks (Top-Down Battlemap View)
reg(['ww_runaway_orecart', 'item_82'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cy = H * 0.55;
    const cartX = ((time * 220 * speed) % (W + 200)) - 100;
    const cartW = 55 * elScale, cartH = 34 * elScale;

    ctx.save();
    // Mine rail track ties viewed from above
    ctx.strokeStyle = '#543d2b';
    ctx.lineWidth = 3.5 * elScale;
    for (let t = 0; t < W; t += 20 * elScale) {
        ctx.beginPath();
        ctx.moveTo(t, cy - 22 * elScale); ctx.lineTo(t, cy + 22 * elScale);
        ctx.stroke();
    }
    // Twin iron rails
    ctx.strokeStyle = '#85858f';
    ctx.lineWidth = 2 * elScale;
    ctx.beginPath();
    ctx.moveTo(0, cy - 16 * elScale); ctx.lineTo(W, cy - 16 * elScale);
    ctx.moveTo(0, cy + 16 * elScale); ctx.lineTo(W, cy + 16 * elScale);
    ctx.stroke();

    // Heavy iron ore cart bucket viewed from DIRECTLY ABOVE (Top-Down)
    ctx.save();
    ctx.translate(cartX, cy);
    const wobble = (Math.random() - 0.5) * (2 * elScale);
    ctx.rotate(wobble * 0.05);

    // Cart rim / heavy steel flange
    ctx.fillStyle = '#27272a';
    ctx.fillRect(-cartW * 0.5, -cartH * 0.5, cartW, cartH);
    ctx.strokeStyle = '#52525b';
    ctx.lineWidth = 2 * elScale;
    ctx.strokeRect(-cartW * 0.5, -cartH * 0.5, cartW, cartH);

    // Open top bucket filled with raw golden ore chunks/rocks
    ctx.fillStyle = '#18181b';
    ctx.fillRect(-cartW * 0.42, -cartH * 0.38, cartW * 0.84, cartH * 0.76);

    // Gold ore chunks glinting
    for (let g = 0; g < 7; g++) {
        const gx = -cartW * 0.32 + (g % 4) * (11 * elScale);
        const gy = -cartH * 0.2 + Math.floor(g / 4) * (12 * elScale);
        ctx.fillStyle = g % 2 === 0 ? '#d97706' : '#fbbf24';
        ctx.fillRect(gx, gy, 7 * elScale, 6 * elScale);
    }
    ctx.restore();

    // Flying friction sparks spraying outward laterally from rail heads
    for (let sp = 0; sp < 8; sp++) {
        const spx = cartX + (Math.random() - 0.5) * cartW;
        const spy = cy + (Math.random() > 0.5 ? 16 : -16) * elScale;
        ctx.fillStyle = '#fef08a';
        ctx.fillRect(spx, spy, 2 * elScale, 2 * elScale);
    }
    ctx.restore();
});

// 83. Stampeding Longhorn Cattle Kicking Up Rolling Wall of Dust
reg(['ww_longhorn_stampede', 'item_83'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numCattle = 5;
    for (let c = 0; c < numCattle; c++) {
        const cx = ((time * 140 * speed + c * 80) % (W + 150)) - 75;
        const cy = H * 0.45 + (c % 3) * 25 * elScale + Math.sin(time * 8 + c) * 4;
        // Brown horned cattle silhouette
        ctx.fillStyle = '#451a03';
        ctx.beginPath();
        ctx.ellipse(cx, cy, 22 * elScale, 12 * elScale, 0, 0, Math.PI * 2);
        ctx.fill();
        // Spreading long horns
        ctx.strokeStyle = '#f8fafc';
        ctx.lineWidth = 2 * elScale;
        ctx.beginPath();
        ctx.moveTo(cx + 18 * elScale, cy - 8 * elScale);
        ctx.lineTo(cx + 28 * elScale, cy - 18 * elScale);
        ctx.moveTo(cx + 18 * elScale, cy + 8 * elScale);
        ctx.lineTo(cx + 28 * elScale, cy + 18 * elScale);
        ctx.stroke();
    }
    // Rolling desert dust clouds kicked up behind herd
    for (let d = 0; d < 8; d++) {
        const dx = (d * 50 + time * 60) % W;
        const dy = H * 0.65 + Math.sin(d) * 15 * elScale;
        ctx.fillStyle = `rgba(217, 119, 6, ${(0.35 - (d % 3) * 0.08) * intensity})`;
        ctx.beginPath();
        ctx.arc(dx, dy, (25 + d * 4) * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 84. Flaming Tumbleweeds Bouncing Rapidly Across Prairie (Pure 90-deg Top-Down Overhead Battlemap View)
reg(['ww_flaming_tumbleweeds', 'ww_flaming_tumbleweed', 'item_84'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numWeeds = 3;

    ctx.save();

    for (let w = 0; w < numWeeds; w++) {
        // Distinct wind corridors distributed across the prairie terrain (NO single 2D baseline)
        const laneY = H * 0.22 + (w / (numWeeds - 1)) * (H * 0.56);
        // Natural wind turbulence drift
        const driftY = Math.sin(time * 1.8 * speed + w * 2.7) * (14 * elScale);
        const gy = laneY + driftY;

        // Tumbleweeds hurtling across the map driven by prairie gale
        const spanX = W + 160 * elScale;
        const weedSpeed = (140 + w * 35) * speed;
        const gx = ((time * weedSpeed + w * 170 * elScale) % spanX) - 80 * elScale;

        // Ground altitude bounce in Z-axis (height above ground, perpendicular to top-down camera)
        const bouncePhase = (time * 5.5 * speed + w * 2.3);
        const bounce = Math.abs(Math.sin(bouncePhase));
        const maxAlt = 38 * elScale;
        const altitude = bounce * maxAlt;
        const isTouching = altitude < 3 * elScale;

        // Perspective scale: rises slightly toward the camera as altitude increases
        const curScale = (1.0 + (altitude / maxAlt) * 0.22) * elScale;
        const bRad = 16 * curScale;

        // 1. DYNAMIC GROUND PLANE (Ground Shadow, Light Pool, and Rolling Scorch Wake)
        // Shadow cast on the ground separates based on altitude (sun elevation ~45 deg South-East)
        const shadowDist = altitude * 0.65;
        const shadowX = gx + shadowDist * 0.35;
        const shadowY = gy + shadowDist * 0.75;
        const shadowAlpha = (0.55 - (altitude / maxAlt) * 0.25) * intensity;

        // Soft ground shadow of the spherical bramble ball
        ctx.fillStyle = `rgba(15, 23, 42, ${shadowAlpha})`;
        ctx.beginPath();
        ctx.ellipse(shadowX, shadowY, bRad * (1.1 + (altitude / maxAlt) * 0.2), bRad * (0.8 + (altitude / maxAlt) * 0.15), 0.3, 0, Math.PI * 2);
        ctx.fill();

        // Dynamic warm flickering ground light pool beneath burning tumbleweed
        const poolRadius = (32 + altitude * 0.4 + Math.sin(time * 20 + w) * 5) * elScale;
        const groundGlow = ctx.createRadialGradient(gx, gy, 3, gx, gy, poolRadius);
        groundGlow.addColorStop(0, `rgba(254, 240, 138, ${0.75 * intensity})`);
        groundGlow.addColorStop(0.35, `rgba(245, 158, 11, ${0.42 * intensity})`);
        groundGlow.addColorStop(0.75, `rgba(220, 38, 38, ${0.12 * intensity})`);
        groundGlow.addColorStop(1, 'rgba(220, 38, 38, 0)');
        ctx.fillStyle = groundGlow;
        ctx.beginPath();
        ctx.arc(gx, gy, poolRadius, 0, Math.PI * 2);
        ctx.fill();

        // Charred prairie scorch spots & burning cinder trail left behind in the grass
        for (let t = 1; t <= 4; t++) {
            const tx = gx - t * 24 * elScale;
            if (tx > -20 && tx < W + 20) {
                const ty = gy + Math.sin(time * 2 + t + w) * 6 * elScale;
                const tAlpha = (0.65 - t * 0.14) * intensity;
                // Blackened scorch mark on the ground
                ctx.fillStyle = `rgba(18, 12, 8, ${tAlpha * 0.8})`;
                ctx.beginPath();
                ctx.ellipse(tx, ty, 6 * elScale, 3.5 * elScale, 0.2, 0, Math.PI * 2);
                ctx.fill();

                // Smoldering ember in wake
                if (t <= 2) {
                    ctx.fillStyle = `rgba(249, 115, 22, ${tAlpha})`;
                    ctx.beginPath();
                    ctx.arc(tx, ty, 1.4 * elScale, 0, Math.PI * 2);
                    ctx.fill();
                }
            }
        }

        // Ground impact puff of dust and sparks when landing
        if (isTouching) {
            ctx.fillStyle = `rgba(180, 83, 9, ${0.35 * intensity})`;
            ctx.beginPath();
            ctx.arc(gx, gy, (bRad * 1.4 + rough * 6), 0, Math.PI * 2);
            ctx.fill();
        }

        // 2. ROLLING TUMBLEWEED BRAMBLE SPHERE (Pure 90-deg Overhead Top-Down View)
        ctx.save();
        ctx.translate(gx, gy);
        // 3D rolling angle: continuous roll along terrain
        const rollAng = time * 7.5 * speed + w * 4.1;
        ctx.rotate(rollAng);

        // Intricate spherical thorn knotwork (curved bramble arcs viewed from above)
        ctx.lineWidth = 1.4 * elScale;
        const branchCount = 14;
        for (let b = 0; b < branchCount; b++) {
            const bAng = (b / branchCount) * Math.PI * 2;
            const bR = (0.45 + (b % 3) * 0.25) * bRad;

            ctx.strokeStyle = (b % 2 === 0) ? '#78350f' : '#92400e';
            ctx.beginPath();
            ctx.arc(Math.cos(bAng) * (bRad * 0.3), Math.sin(bAng) * (bRad * 0.3), bR, bAng, bAng + Math.PI * 1.3);
            ctx.stroke();

            // Prickly thorn barbs along outer perimeter
            const tx = Math.cos(bAng) * bRad;
            const ty = Math.sin(bAng) * bRad;
            ctx.strokeStyle = '#451a03';
            ctx.beginPath();
            ctx.moveTo(tx * 0.82, ty * 0.82);
            ctx.lineTo(tx * 1.15, ty * 1.15);
            ctx.stroke();
        }

        // Dense inner dried root core
        ctx.fillStyle = '#451a03';
        ctx.beginPath();
        ctx.arc(0, 0, bRad * 0.35, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();

        // 3. ENGULFING FLAMES & BILLOWING FIRE TONGUES (Whipping Eastward in Gale)
        // Radiant fiery core glow
        const flameGrad = ctx.createRadialGradient(gx, gy, 2, gx, gy, bRad * 1.35);
        flameGrad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
        flameGrad.addColorStop(0.28, `rgba(254, 240, 138, ${0.92 * intensity})`);
        flameGrad.addColorStop(0.65, `rgba(249, 115, 22, ${0.80 * intensity})`);
        flameGrad.addColorStop(1, 'rgba(220, 38, 38, 0)');
        ctx.fillStyle = flameGrad;
        ctx.beginPath();
        ctx.arc(gx, gy, bRad * 1.35, 0, Math.PI * 2);
        ctx.fill();

        // Wind-whipped flame tongues leaping backward (-X direction) from the rolling tumbleweed
        const tongueCount = 6;
        for (let ft = 0; ft < tongueCount; ft++) {
            const ftAng = Math.PI + (ft - (tongueCount - 1) * 0.5) * 0.45;
            const ftLen = (bRad * 1.2 + Math.sin(time * 24 + ft * 3 + w) * (6 * elScale));
            const ftX = gx + Math.cos(ftAng) * ftLen;
            const ftY = gy + Math.sin(ftAng) * ftLen * 0.6;
            const ftR = (4.5 + Math.cos(time * 18 + ft) * 2) * elScale;

            const tGrad = ctx.createRadialGradient(ftX, ftY, 1, ftX, ftY, ftR);
            tGrad.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
            tGrad.addColorStop(0.4, `rgba(254, 240, 138, ${0.85 * intensity})`);
            tGrad.addColorStop(0.8, `rgba(239, 68, 68, ${0.65 * intensity})`);
            tGrad.addColorStop(1, 'rgba(239, 68, 68, 0)');
            ctx.fillStyle = tGrad;
            ctx.beginPath();
            ctx.arc(ftX, ftY, ftR, 0, Math.PI * 2);
            ctx.fill();
        }

        // Flying incandescent sparks & smoke wisps trailing in the prairie wind
        for (let sp = 0; sp < 5; sp++) {
            const spDist = (bRad + (sp * 14 + ((time * 70 * speed) % 65))) * elScale;
            const spX = gx - spDist;
            const spY = gy + Math.sin(time * 12 + sp * 4) * (10 * elScale);
            ctx.fillStyle = (sp % 2 === 0) ? `rgba(254, 240, 138, ${0.9 * intensity})` : `rgba(249, 115, 22, ${0.8 * intensity})`;
            ctx.beginPath();
            ctx.arc(spX, spY, (1.2 + (sp % 3) * 0.8) * elScale, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    ctx.restore();
});

// 85. Hand-Cranked Gatling Gun Tracer Rounds Ripping Down Main Street
reg(['ww_gatling_tracers', 'item_85'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numRounds = 6;
    for (let r = 0; r < numRounds; r++) {
        const rx = ((time * 450 * speed + r * 60) % (W + 150)) - 50;
        const ry = H * 0.5 + (r % 3) * 6 * elScale;
        // Fiery lead bullet tracer streak
        const streak = ctx.createLinearGradient(rx - 30 * elScale, ry, rx, ry);
        streak.addColorStop(0, 'rgba(239, 68, 68, 0)');
        streak.addColorStop(0.7, `rgba(245, 158, 11, ${0.85 * intensity})`);
        streak.addColorStop(1, `rgba(255, 255, 255, ${0.95 * intensity})`);
        ctx.strokeStyle = streak;
        ctx.lineWidth = 2.5 * elScale;
        ctx.beginPath();
        ctx.moveTo(rx - 30 * elScale, ry);
        ctx.lineTo(rx, ry);
        ctx.stroke();
    }
});

// 86. Wooden Stagecoach Wheels Spinning and Kicking Up Dust (Pure 90-deg Top-Down Overhead Battlemap View)
reg(['ww_stagecoach_wheels', 'ww_stagecoach_dust', 'item_86'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    ctx.save();

    const cy = H * 0.5;
    // Stagecoach center position (leading on the right side of the track)
    const coachX = W * 0.68;
    // High-speed chassis suspension vibration over bumpy trail
    const roadVibeY = Math.sin(time * 22 * speed) * (1.2 * elScale);
    const roadVibeX = Math.cos(time * 19 * speed) * (0.8 * elScale);
    const coachY = cy + roadVibeY;

    // Track heading angle (slight natural trail drift)
    const heading = Math.sin(time * 1.5 * speed) * 0.025;

    // 1. Dry Prairie Dirt Trail & Deep Dual Wheel Ruts on Ground
    const rutHalfSpan = 26 * elScale;
    const rutTopY = cy - rutHalfSpan;
    const rutBotY = cy + rutHalfSpan;

    // Churned soil trail strip
    ctx.fillStyle = 'rgba(120, 53, 15, 0.18)';
    ctx.beginPath();
    ctx.rect(0, cy - rutHalfSpan - 12 * elScale, coachX + 40 * elScale, (rutHalfSpan + 12 * elScale) * 2);
    ctx.fill();

    // Two deep wheel ruts pressed into the earth trailing behind
    ctx.strokeStyle = 'rgba(69, 26, 3, 0.55)';
    ctx.lineWidth = 4.5 * elScale;
    ctx.beginPath();
    ctx.moveTo(0, rutTopY); ctx.lineTo(coachX, rutTopY);
    ctx.moveTo(0, rutBotY); ctx.lineTo(coachX, rutBotY);
    ctx.stroke();

    // Inner compressed tire track grooves
    ctx.strokeStyle = 'rgba(30, 20, 10, 0.4)';
    ctx.lineWidth = 2.0 * elScale;
    ctx.beginPath();
    ctx.moveTo(0, rutTopY); ctx.lineTo(coachX, rutTopY);
    ctx.moveTo(0, rutBotY); ctx.lineTo(coachX, rutBotY);
    ctx.stroke();

    // Horse team hoof print marks along the trail ahead and under coach
    ctx.fillStyle = 'rgba(69, 26, 3, 0.35)';
    const hoofPitch = 22 * elScale;
    const hoofShift = (time * 120 * speed) % hoofPitch;
    for (let hx = 10; hx < coachX + 60 * elScale; hx += hoofPitch) {
        const xPos = hx + hoofShift;
        if (xPos > coachX + 65 * elScale) continue;
        // Dual horseshoe crescent marks
        ctx.beginPath();
        ctx.arc(xPos, cy - 10 * elScale, 2.5 * elScale, 0.2, Math.PI - 0.2);
        ctx.arc(xPos + 8 * elScale, cy + 10 * elScale, 2.5 * elScale, 0.2, Math.PI - 0.2);
        ctx.fill();
    }

    // 2. Churning, Billowing Expanding Dust Wake (The Dust Trail)
    // Primary turbulent billowing clouds expanding backwards from the wheels
    const numPuffs = Math.round(24 + rough * 16);
    for (let p = 0; p < numPuffs; p++) {
        // Continuous flow backward from the coach wheels
        const puffAge = (time * 1.8 * speed + p / numPuffs) % 1.0;
        const puffDist = puffAge * (coachX + 30 * elScale);
        const px = (coachX - 20 * elScale) - puffDist;
        if (px < -40 * elScale) continue;

        // Dispersion spreads outward away from center as it travels back
        const spread = (10 + puffAge * 55) * elScale;
        const sideSign = (p % 2 === 0) ? 1 : -1;
        const py = cy + sideSign * (rutHalfSpan * (0.8 + puffAge * 1.2)) + Math.sin(p * 3.7 + time * 2) * (12 * elScale * puffAge);

        // Size expands from small tire puff to huge billowing cloud
        const radius = (12 * elScale) + puffAge * (42 * elScale);

        // Opacity fades as the cloud billows and dissipates
        const alpha = (1.0 - puffAge) * (0.38 * intensity);

        // Warm desert ochre dust gradient
        const pGrad = ctx.createRadialGradient(px, py, radius * 0.15, px, py, radius);
        pGrad.addColorStop(0, `rgba(251, 191, 36, ${alpha * 1.2})`);
        pGrad.addColorStop(0.5, `rgba(217, 119, 6, ${alpha * 0.85})`);
        pGrad.addColorStop(0.85, `rgba(180, 83, 9, ${alpha * 0.4})`);
        pGrad.addColorStop(1, 'rgba(120, 53, 15, 0)');

        ctx.fillStyle = pGrad;
        ctx.beginPath();
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.fill();
    }

    // Violent rooster-tail grit & flying gravel flung backward from wheels
    const numPebbles = Math.round(20 + rough * 18);
    for (let g = 0; g < numPebbles; g++) {
        const gSeed = g * 17.3 + Math.floor(time * 35);
        const gAge = ((time * 3.5 * speed + g * 0.05) % 1.0);
        const gDist = gAge * (coachX * 0.45);
        const gx = (coachX - 35 * elScale) - gDist;
        const gWheel = (g % 2 === 0) ? -rutHalfSpan : rutHalfSpan;
        const gy = cy + gWheel + (FX.hash(gSeed) - 0.5) * (14 * elScale);

        ctx.fillStyle = g % 3 === 0 ? '#451a03' : (g % 3 === 1 ? '#78350f' : '#b45309');
        ctx.beginPath();
        ctx.arc(gx, gy, (1.2 + FX.hash(g * 9) * 1.6) * elScale, 0, Math.PI * 2);
        ctx.fill();
    }

    // 3. Stagecoach Body & Chassis (Pure 90-degree Overhead Top-Down View)
    ctx.save();
    ctx.translate(coachX, coachY);
    ctx.rotate(heading);

    // Drop shadow under carriage onto the road
    ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
    ctx.beginPath();
    ctx.roundRect(-42 * elScale + 4 * elScale, -rutHalfSpan - 3 * elScale + 4 * elScale, 84 * elScale, (rutHalfSpan * 2 + 6 * elScale), 6 * elScale);
    ctx.fill();

    // Under-chassis wooden running gear & iron axle bars
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 3.5 * elScale;
    ctx.beginPath();
    // Front axle (under front wheels)
    ctx.moveTo(25 * elScale, -rutHalfSpan - 5 * elScale);
    ctx.lineTo(25 * elScale, rutHalfSpan + 5 * elScale);
    // Rear axle (under rear wheels)
    ctx.moveTo(-25 * elScale, -rutHalfSpan - 5 * elScale);
    ctx.lineTo(-25 * elScale, rutHalfSpan + 5 * elScale);
    // Longitudinal reach perch pole
    ctx.moveTo(-35 * elScale, 0);
    ctx.lineTo(38 * elScale, 0);
    ctx.stroke();

    // 4 Top-Down Heavy Wooden Wheels with Iron Tires (Tread viewed from 90 deg directly overhead)
    const wheelConfigs = [
        { x: -25 * elScale, y: -rutHalfSpan, w: 26 * elScale, h: 6.5 * elScale },
        { x: -25 * elScale, y: rutHalfSpan, w: 26 * elScale, h: 6.5 * elScale },
        { x: 25 * elScale, y: -rutHalfSpan, w: 22 * elScale, h: 5.5 * elScale },
        { x: 25 * elScale, y: rutHalfSpan, w: 22 * elScale, h: 5.5 * elScale }
    ];

    for (let w = 0; w < wheelConfigs.length; w++) {
        const wh = wheelConfigs[w];
        ctx.save();
        ctx.translate(wh.x, wh.y);

        // Spinning spoke striae along tire tread
        const spinOffset = (time * 180 * speed) % (wh.w * 0.4);

        // Outer iron tire band
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(-wh.w * 0.5, -wh.h * 0.5, wh.w, wh.h);

        // Wooden wheel felloe rim
        ctx.fillStyle = '#78350f';
        ctx.fillRect(-wh.w * 0.46, -wh.h * 0.35, wh.w * 0.92, wh.h * 0.7);

        // Spinning tire treads / iron rivet studs on tread surface
        ctx.fillStyle = '#475569';
        for (let st = -wh.w * 0.4; st <= wh.w * 0.4; st += 5 * elScale) {
            ctx.fillRect(st + (spinOffset % (5 * elScale)), -wh.h * 0.5, 1.2 * elScale, wh.h);
        }

        // Protruding cylindrical iron hub & linchpin on wheel exterior
        const hubY = wh.y < 0 ? -wh.h * 0.5 - 2 * elScale : wh.h * 0.5;
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(-3 * elScale, hubY, 6 * elScale, 2 * elScale);

        ctx.restore();
    }

    // 4. Main Stagecoach Cab / Concord Body (Top-Down Silhouette)
    const cabW = 68 * elScale;
    const cabH = 38 * elScale;

    // Curved wooden stagecoach body (rich Western crimson lacquer with varnished mahogany)
    ctx.fillStyle = '#7f1d1d';
    ctx.beginPath();
    ctx.roundRect(-cabW * 0.5, -cabH * 0.5, cabW, cabH, [8 * elScale, 6 * elScale, 6 * elScale, 8 * elScale]);
    ctx.fill();
    ctx.strokeStyle = '#450a0a';
    ctx.lineWidth = 1.8;
    ctx.stroke();

    // Curved cab roof contour (slightly arched varnished wood roof)
    const roofW = cabW * 0.74;
    const roofH = cabH * 0.82;
    ctx.fillStyle = '#991b1b';
    ctx.beginPath();
    ctx.roundRect(-cabW * 0.48, -roofH * 0.5, roofW, roofH, 4 * elScale);
    ctx.fill();

    // Roof timber longitudinal slats
    ctx.strokeStyle = 'rgba(69, 10, 10, 0.5)';
    ctx.lineWidth = 1.2;
    for (let r = -roofH * 0.35; r <= roofH * 0.35; r += 5 * elScale) {
        ctx.beginPath();
        ctx.moveTo(-cabW * 0.46, r);
        ctx.lineTo(-cabW * 0.46 + roofW, r);
        ctx.stroke();
    }

    // Brass/iron roof luggage railing
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 1.4 * elScale;
    ctx.strokeRect(-cabW * 0.44, -roofH * 0.42, roofW * 0.88, roofH * 0.84);

    // Stowed luggage & cargo on the roof rack:
    // Canvas-wrapped Wells Fargo gold treasure chest / strongbox
    ctx.fillStyle = '#451a03';
    ctx.fillRect(-cabW * 0.28, -8 * elScale, 16 * elScale, 16 * elScale);
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 1.0;
    ctx.strokeRect(-cabW * 0.28, -8 * elScale, 16 * elScale, 16 * elScale);
    ctx.beginPath();
    ctx.moveTo(-cabW * 0.28 + 8 * elScale, -8 * elScale); ctx.lineTo(-cabW * 0.28 + 8 * elScale, 8 * elScale);
    ctx.stroke();

    // Canvas mail sacks and traveler bedrolls stowed around the strongbox
    ctx.fillStyle = '#d4d4d8';
    ctx.beginPath();
    ctx.ellipse(-cabW * 0.08, -6 * elScale, 7 * elScale, 5 * elScale, 0.4, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#71717a';
    ctx.lineWidth = 0.8;
    ctx.stroke();

    ctx.fillStyle = '#1e3a8a';
    ctx.beginPath();
    ctx.roundRect(-cabW * 0.08, 3 * elScale, 12 * elScale, 5 * elScale, 2 * elScale);
    ctx.fill();

    // 5. Driver's Bench / Box (Front) & Reins
    const boxX = cabW * 0.5 - 10 * elScale;
    ctx.fillStyle = '#365314';
    ctx.fillRect(boxX, -cabH * 0.38, 10 * elScale, cabH * 0.76);
    ctx.strokeStyle = '#14532d';
    ctx.lineWidth = 1.0;
    ctx.strokeRect(boxX, -cabH * 0.38, 10 * elScale, cabH * 0.76);

    // Driver's wide-brim Stetson hat (seen from directly overhead)
    ctx.fillStyle = '#292524';
    ctx.beginPath();
    ctx.arc(boxX + 4 * elScale, -cabH * 0.12, 6.5 * elScale, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#44403c';
    ctx.beginPath();
    ctx.arc(boxX + 4 * elScale, -cabH * 0.12, 3.8 * elScale, 0, Math.PI * 2);
    ctx.fill();

    // Leather reins extending forward from driver towards horses ahead
    ctx.strokeStyle = '#451a03';
    ctx.lineWidth = 1.0;
    ctx.beginPath();
    ctx.moveTo(boxX + 5 * elScale, -cabH * 0.12);
    ctx.lineTo(boxX + 38 * elScale, -8 * elScale);
    ctx.moveTo(boxX + 5 * elScale, -cabH * 0.12);
    ctx.lineTo(boxX + 38 * elScale, 8 * elScale);
    ctx.stroke();

    // 6. Rear Triangular Leather Luggage Boot (Back)
    ctx.fillStyle = '#1c1917';
    ctx.beginPath();
    ctx.moveTo(-cabW * 0.5, -cabH * 0.38);
    ctx.lineTo(-cabW * 0.5 - 14 * elScale, -cabH * 0.22);
    ctx.lineTo(-cabW * 0.5 - 14 * elScale, cabH * 0.22);
    ctx.lineTo(-cabW * 0.5, cabH * 0.38);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#44403c';
    ctx.lineWidth = 1.2;
    ctx.stroke();

    ctx.restore();
    ctx.restore();
});

// 87. Iron Horse Steam Locomotive (Top-Down Battlemap View)
reg(['ww_locomotive_smoke', 'item_87'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cy = H * 0.5;
    ctx.save();
    // Wooden ties & steel rails
    ctx.strokeStyle = '#543d2b'; ctx.lineWidth = 3 * elScale;
    for (let t = 0; t < W; t += 20 * elScale) {
        ctx.beginPath(); ctx.moveTo(t, cy - 20 * elScale); ctx.lineTo(t, cy + 20 * elScale); ctx.stroke();
    }
    ctx.strokeStyle = '#71717a'; ctx.lineWidth = 2 * elScale;
    ctx.beginPath(); ctx.moveTo(0, cy - 15 * elScale); ctx.lineTo(W, cy - 15 * elScale); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, cy + 15 * elScale); ctx.lineTo(W, cy + 15 * elScale); ctx.stroke();

    // Locomotive train body viewed from directly above (Top-Down)
    const locoX = W * 0.35;
    const bodyW = 110 * elScale, bodyH = 28 * elScale;

    // Cylindrical black boiler top
    ctx.fillStyle = '#1c1917';
    ctx.fillRect(locoX - bodyW * 0.5, cy - bodyH * 0.5, bodyW, bodyH);

    // Rounded boiler front cap
    ctx.beginPath();
    ctx.arc(locoX + bodyW * 0.5, cy, bodyH * 0.5, -Math.PI * 0.5, Math.PI * 0.5);
    ctx.fill();

    // Engineer cab roof at rear
    ctx.fillStyle = '#292524';
    ctx.fillRect(locoX - bodyW * 0.5, cy - bodyH * 0.55, 34 * elScale, bodyH * 1.1);

    // Amber firebox glow through cab window
    ctx.fillStyle = 'rgba(245, 158, 11, ' + (0.8 * intensity) + ')';
    ctx.fillRect(locoX - bodyW * 0.45, cy - 4 * elScale, 10 * elScale, 8 * elScale);

    // Circular smokestack opening on front of boiler
    const stackX = locoX + bodyW * 0.3;
    ctx.fillStyle = '#0a0a0a';
    ctx.beginPath();
    ctx.arc(stackX, cy, 6 * elScale, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#d97706'; ctx.lineWidth = 1.5 * elScale; ctx.stroke();

    // Dense billowing black & gray coal smoke clouds expanding backward
    for (let s = 0; s < 12; s++) {
        const st = (time * 1.8 * speed + s * 0.18) % 1.5;
        const sx = stackX - st * (W * 0.45);
        const spread = (st * 24 + rough * 15) * elScale;
        const sy = cy + Math.sin(time * 3 + s * 1.3) * spread;
        const sr = (8 + st * 28) * elScale;
        const alpha = (1 - st / 1.5) * 0.65 * intensity;

        ctx.fillStyle = s % 2 === 0 ? 'rgba(28, 25, 23, ' + (0.8 * intensity) + ')' : 'rgba(41, 37, 36, ' + (0.8 * intensity) + ')';
        ctx.beginPath();
        ctx.arc(sx, sy, sr, 0, Math.PI * 2);
        ctx.fill();
    }
    ctx.restore();
});

// 88. Wooden Gold-Panning Sluice Box Rushing With Muddy Creek Water (Top-Down Trough)
reg(['ww_sluice_box_water', 'item_88'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const boxW = W * 0.85;
    const startX = cx - boxW * 0.5;
    // Sluice box timber channels (self-contained with transparent battlemap around it)
    ctx.fillStyle = '#78350f';
    ctx.fillRect(startX, cy - 18 * elScale, boxW, 36 * elScale);
    // Fast muddy creek water rushing through
    ctx.fillStyle = `rgba(180, 83, 9, ${0.75 * intensity})`;
    ctx.fillRect(startX, cy - 14 * elScale, boxW, 28 * elScale);
    // Riffle baffles with settling gold flakes
    for (let x = startX + 25 * elScale; x < startX + boxW - 15 * elScale; x += 45 * elScale) {
        ctx.fillStyle = '#451a03';
        ctx.fillRect(x, cy - 14 * elScale, 4 * elScale, 28 * elScale);
        // Trapped glitter gold specks
        ctx.fillStyle = '#fef08a';
        ctx.beginPath();
        ctx.arc(x - 3 * elScale, cy, 2 * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 89. Sternwheeler Riverboat Paddlewheel Churning Mississippi Water (Top-Down Battlemap View)
reg(['ww_riverboat_paddlewheel', 'item_89'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.42, cy = H * 0.5;
    const wheelW = 32 * elScale;
    const wheelH = 74 * elScale;
    const rot = time * 4 * speed;

    ctx.save();
    // 1. Churning, frothing white & muddy water wake streaming behind the paddlewheel (to the right)
    for (let f = 0; f < 14; f++) {
        const prog = ((time * 1.5 * speed + f * 0.12) % 1.0);
        const fx = cx + wheelW * 0.5 + prog * (W * 0.45);
        const spread = (prog * 36 + Math.sin(f * 3 + time * 4) * 12) * elScale;
        const fy = cy + (f % 2 === 0 ? spread : -spread);
        const fr = (6 + prog * 18 + (f % 3) * 4) * elScale;
        ctx.fillStyle = f % 3 === 0 ? `rgba(254, 243, 199, ${0.85 * (1 - prog) * intensity})` : `rgba(226, 232, 240, ${0.75 * (1 - prog) * intensity})`;
        ctx.beginPath();
        ctx.arc(fx, fy, fr, 0, Math.PI * 2);
        ctx.fill();
    }

    // 2. Iron support gantry arms extending from boat transom to paddlewheel axle
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 3.5 * elScale;
    ctx.beginPath();
    ctx.moveTo(W * 0.15, cy - wheelH * 0.5); ctx.lineTo(cx, cy - wheelH * 0.5);
    ctx.moveTo(W * 0.15, cy + wheelH * 0.5); ctx.lineTo(cx, cy + wheelH * 0.5);
    ctx.stroke();

    // 3. Central iron rotation axle
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 4 * elScale;
    ctx.beginPath();
    ctx.moveTo(cx, cy - wheelH * 0.52);
    ctx.lineTo(cx, cy + wheelH * 0.52);
    ctx.stroke();

    // 4. Horizontal red wooden paddle slats rotating in overhead perspective
    const numSlats = 8;
    for (let p = 0; p < numSlats; p++) {
        const a = rot + (p / numSlats) * Math.PI * 2;
        const slatOffX = Math.cos(a) * (wheelW * 0.5);
        const depthCos = Math.sin(a); // visible when dipping near top surface
        if (depthCos > -0.2) {
            ctx.fillStyle = '#b91c1c';
            ctx.fillRect(cx + slatOffX - 2.5 * elScale, cy - wheelH * 0.48, 5 * elScale, wheelH * 0.96);
            ctx.strokeStyle = '#7f1d1d';
            ctx.lineWidth = 1 * elScale;
            ctx.strokeRect(cx + slatOffX - 2.5 * elScale, cy - wheelH * 0.48, 5 * elScale, wheelH * 0.96);
        }
    }

    // Water splashing over the wheel slats
    for (let s = 0; s < 8; s++) {
        const sx = cx + (Math.sin(time * 12 + s) * 12) * elScale;
        const sy = cy - wheelH * 0.4 + (s / 7) * (wheelH * 0.8);
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(sx, sy, (2.5 + (s % 2) * 1.5) * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
    ctx.restore();
});

// 90. Brass Telegraph Ticker Feeding Paper Tape
reg(['ww_telegraph_ticker', 'item_90'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.35, cy = H * 0.55;
    // Polished brass telegraph base
    ctx.fillStyle = '#d97706';
    ctx.fillRect(cx - 25 * elScale, cy, 50 * elScale, 20 * elScale);
    // Tapping brass sounder lever
    const tap = Math.sin(time * 18 * speed) * 3;
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 3 * elScale;
    ctx.beginPath();
    ctx.moveTo(cx - 10 * elScale, cy);
    ctx.lineTo(cx + 10 * elScale, cy - 12 * elScale + tap);
    ctx.stroke();
    // Feeding white paper tape stream
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(cx + 25 * elScale, cy + 5 * elScale, W * 0.5, 6 * elScale);
});

// 91. Sputtering Dynamite Fuse Spark Burning Rapidly
reg(['ww_dynamite_fuse_spark', 'item_91'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cy = H * 0.55;
    const fuseLen = W * 0.6;
    const progress = (time * 0.8 * speed) % 1.0;
    const sparkX = W * 0.2 + (1 - progress) * fuseLen;
    // Twisted hemp fuse cord
    ctx.strokeStyle = '#78350f';
    ctx.lineWidth = 3 * elScale;
    ctx.beginPath();
    ctx.moveTo(W * 0.2, cy);
    ctx.lineTo(sparkX, cy);
    ctx.stroke();
    // Fizzing sparkling head
    const sparkGrad = ctx.createRadialGradient(sparkX, cy, 1, sparkX, cy, 18 * elScale);
    sparkGrad.addColorStop(0, '#ffffff');
    sparkGrad.addColorStop(0.3, '#fef08a');
    sparkGrad.addColorStop(0.7, '#f97316');
    sparkGrad.addColorStop(1, 'rgba(239, 68, 68, 0)');
    ctx.fillStyle = sparkGrad;
    ctx.beginPath();
    ctx.arc(sparkX, cy, 18 * elScale, 0, Math.PI * 2);
    ctx.fill();
});

// 92. Translucent Phantom Ghost-Train Roaring Silently Along Cursed Rails
reg(['ww_phantom_train', 'item_92'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const trainX = ((time * 160 * speed) % (W + 400)) - 300;
    const cy = H * 0.5;
    // Translucent ghostly cyan spectral train locomotive
    ctx.fillStyle = `rgba(165, 243, 252, ${0.45 * intensity})`;
    ctx.fillRect(trainX, cy - 30 * elScale, 180 * elScale, 45 * elScale);
    ctx.strokeStyle = `rgba(224, 242, 254, ${0.85 * intensity})`;
    ctx.lineWidth = 2 * elScale;
    ctx.strokeRect(trainX, cy - 30 * elScale, 180 * elScale, 45 * elScale);
    // Glowing eerie headlamp cone
    FX.drawVolumetricCone(ctx, trainX + 180 * elScale, cy - 10 * elScale, 0, W * 0.5, 0.45, `rgba(103, 232, 249, ${0.75 * intensity})`, 'rgba(6, 182, 212, 0)');
});

// 93. Spinning Desert Dust Devil Swirling Across Alkali Flat
reg(['ww_dust_devil', 'item_93'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5 + Math.sin(time * 1.5 * speed) * 45 * elScale;
    const numLayers = 10;
    for (let l = 0; l < numLayers; l++) {
        const ly = H * 0.85 - l * 12 * elScale;
        const rad = (8 + l * 4 + rough * 8) * elScale;
        const spin = time * 12 * speed + l * 0.5;
        const sx = cx + Math.sin(spin) * 6;
        ctx.strokeStyle = `rgba(217, 119, 6, ${(0.6 - l * 0.04) * intensity})`;
        ctx.lineWidth = 2 * elScale;
        ctx.beginPath();
        ctx.ellipse(sx, ly, rad, rad * 0.4, 0, 0, Math.PI * 2);
        ctx.stroke();
    }
});

// 94. Ricocheting Lead Bullet Sparks Pinging Off Iron Rails
reg(['ww_bullet_ricochet_sparks', 'item_94'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const isPinging = (Math.sin(time * 8 * speed) > 0.3);
    if (!isPinging) return;
    const cx = W * 0.5, cy = H * 0.55;
    ctx.fillStyle = '#fef08a';
    for (let s = 0; s < 8; s++) {
        const ang = (s / 8) * Math.PI + Math.PI;
        const dist = Math.random() * 25 * elScale;
        ctx.beginPath();
        ctx.arc(cx + Math.cos(ang) * dist, cy + Math.sin(ang) * dist, 2 * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 95. Towering Haboob Sandstorm Wall Advancing
reg(['ww_haboob_sandstorm', 'item_95'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const frontX = ((time * 65 * speed) % (W + 200)) - 100;
    for (let b = 0; b < 8; b++) {
        const bx = frontX - b * 22 * elScale;
        const by = H * 0.5 + Math.sin(time * 2 + b) * (H * 0.35);
        const rad = (55 + b * 10 + rough * 25) * elScale;
        const grad = ctx.createRadialGradient(bx, by, 5, bx, by, rad);
        grad.addColorStop(0, `rgba(180, 83, 9, ${(0.6 - b * 0.05) * intensity})`);
        grad.addColorStop(1, 'rgba(180, 83, 9, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(bx, by, rad, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 96. Dry Tumbleweeds Bouncing Lazily Down Main Street (Pure 90-deg Top-Down Overhead Battlemap View)
reg(['ww_tumbleweed_street', 'ww_tumbleweeds_mainstreet', 'item_96'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    ctx.save();
    const numWeeds = 3;

    for (let w = 0; w < numWeeds; w++) {
        // Multiple wind corridors distributed across the street width
        const laneY = H * 0.22 + (w / (numWeeds - 1)) * (H * 0.56);
        // Wind gusts causing lateral street drift
        const driftY = Math.sin(time * 1.6 * speed + w * 2.5) * (18 * elScale);
        const gy = laneY + driftY;

        // Tumbleweed rolling across main street from west to east
        const spanX = W + 120 * elScale;
        const rollSpeed = (65 + w * 22) * speed;
        const gx = ((time * rollSpeed + w * 150) % spanX) - 60 * elScale;

        // Z-axis vertical bounce kinematics (bouncing along dry dirt street)
        const bouncePhase = time * (3.8 + w * 0.6) * speed + w * 2.1;
        const altitude = Math.abs(Math.sin(bouncePhase)) * (18 * elScale);
        const zScale = 1.0 + (altitude / (70 * elScale));
        const rotAngle = time * (3.2 + w * 0.5) * speed;

        // 1. Separate Ground Drop Shadow on Main Street Earth
        const shadowX = gx - 3 * elScale;
        const shadowY = gy + 4 * elScale + altitude * 0.4;
        const shadowW = Math.max(7, (18 - altitude * 0.25)) * elScale;
        const shadowH = Math.max(4, (10 - altitude * 0.15)) * elScale;
        const shadowAlpha = Math.max(0.12, 0.42 - (altitude / (45 * elScale)));

        ctx.fillStyle = `rgba(15, 23, 42, ${shadowAlpha})`;
        ctx.beginPath();
        ctx.ellipse(shadowX, shadowY, shadowW, shadowH, 0, 0, Math.PI * 2);
        ctx.fill();

        // Ground impact dust puff when touching the street
        if (altitude < 3 * elScale) {
            ctx.fillStyle = `rgba(217, 119, 6, ${0.35 * intensity})`;
            ctx.beginPath();
            ctx.arc(gx - 8 * elScale, gy, 4 * elScale, 0, Math.PI * 2);
            ctx.arc(gx + 6 * elScale, gy + 2 * elScale, 3 * elScale, 0, Math.PI * 2);
            ctx.fill();
        }

        // Skittering broken dry twigs & seed pods left behind
        if (w === 0) {
            for (let s = 0; s < 4; s++) {
                const sx = gx - (15 + s * 14) * elScale;
                const sy = gy + Math.sin(s * 3.1) * (6 * elScale);
                ctx.fillStyle = '#78350f';
                ctx.fillRect(sx, sy, 2 * elScale, 1.2 * elScale);
            }
        }

        // 2. Rolling Tumbleweed Bramble Sphere (Pure 90-degree Overhead Top-Down View)
        ctx.save();
        ctx.translate(gx, gy);
        ctx.scale(zScale, zScale);
        ctx.rotate(rotAngle);

        const weedRadius = (16 + (w % 2) * 3) * elScale;

        // Tangled organic thorny bramble branches radiating from center
        const brambleCount = 14;
        for (let b = 0; b < brambleCount; b++) {
            const bAngle = (b / brambleCount) * Math.PI * 2;
            const bCurv = (b % 2 === 0 ? 1 : -1) * 0.6;
            const bLen = weedRadius * (0.75 + (b % 3) * 0.12);

            ctx.strokeStyle = (b % 3 === 0) ? '#451a03' : ((b % 2 === 0) ? '#78350f' : '#b45309');
            ctx.lineWidth = (1.2 + (b % 3) * 0.3) * elScale;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.quadraticCurveTo(
                Math.cos(bAngle + bCurv) * (bLen * 0.65),
                Math.sin(bAngle + bCurv) * (bLen * 0.65),
                Math.cos(bAngle) * bLen,
                Math.sin(bAngle) * bLen
            );
            ctx.stroke();

            // Thorny barbs and prickly side-twigs
            if (b % 2 === 0) {
                const barbDist = bLen * 0.55;
                const bx = Math.cos(bAngle) * barbDist;
                const by = Math.sin(bAngle) * barbDist;
                ctx.beginPath();
                ctx.moveTo(bx, by);
                ctx.lineTo(bx + Math.cos(bAngle + 1.2) * (4 * elScale), by + Math.sin(bAngle + 1.2) * (4 * elScale));
                ctx.stroke();
            }
        }

        // Interlaced outer rim thorns
        ctx.strokeStyle = '#92400e';
        ctx.lineWidth = 1.2 * elScale;
        ctx.beginPath();
        for (let a = 0; a < 8; a++) {
            const thAngle = (a / 8) * Math.PI * 2;
            const thRad = weedRadius * (0.85 + (a % 2) * 0.15);
            const tx = Math.cos(thAngle) * thRad;
            const ty = Math.sin(thAngle) * thRad;
            if (a === 0) ctx.moveTo(tx, ty);
            else ctx.lineTo(tx, ty);
        }
        ctx.closePath();
        ctx.stroke();

        // Core tangled dry briar seed cluster
        ctx.fillStyle = '#451a03';
        ctx.beginPath();
        ctx.arc(0, 0, 3.5 * elScale, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    }
    ctx.restore();
});

// 97. Clear Canyon River Flowing Steadily Past Fishing Pier
reg(['ww_canyon_river', 'item_97'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    ctx.save();

    // 1. Terraced Sandstone Canyon Cliffs (North & South Canyon Rim)
    // North canyon cliff shelf
    ctx.fillStyle = '#7c2d12'; // Deep terracotta
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(W, 0);
    ctx.lineTo(W, H * 0.22);
    for (let x = W; x >= 0; x -= 30) {
        const ny = H * 0.22 + Math.sin(x * 0.015 + 1.2) * (H * 0.04);
        ctx.lineTo(x, ny);
    }
    ctx.closePath();
    ctx.fill();

    // North lower sandstone step
    ctx.fillStyle = '#9a3412';
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(W, 0);
    ctx.lineTo(W, H * 0.16);
    for (let x = W; x >= 0; x -= 30) {
        const ny = H * 0.16 + Math.cos(x * 0.018 + 0.8) * (H * 0.03);
        ctx.lineTo(x, ny);
    }
    ctx.closePath();
    ctx.fill();

    // South canyon cliff shelf
    ctx.fillStyle = '#7c2d12';
    ctx.beginPath();
    ctx.moveTo(0, H);
    ctx.lineTo(W, H);
    ctx.lineTo(W, H * 0.78);
    for (let x = W; x >= 0; x -= 30) {
        const sy = H * 0.78 + Math.sin(x * 0.016 + 2.5) * (H * 0.04);
        ctx.lineTo(x, sy);
    }
    ctx.closePath();
    ctx.fill();

    // South lower sandstone step
    ctx.fillStyle = '#9a3412';
    ctx.beginPath();
    ctx.moveTo(0, H);
    ctx.lineTo(W, H);
    ctx.lineTo(W, H * 0.84);
    for (let x = W; x >= 0; x -= 30) {
        const sy = H * 0.84 + Math.cos(x * 0.014 + 1.7) * (H * 0.03);
        ctx.lineTo(x, sy);
    }
    ctx.closePath();
    ctx.fill();

    // 2. Clear Turquoise River Water Channel
    const riverY1 = H * 0.24;
    const riverY2 = H * 0.76;
    const waterGrad = ctx.createLinearGradient(0, riverY1, 0, riverY2);
    waterGrad.addColorStop(0, 'rgba(6, 182, 212, 0.88)');
    waterGrad.addColorStop(0.3, 'rgba(14, 116, 144, 0.95)');
    waterGrad.addColorStop(0.7, 'rgba(14, 116, 144, 0.95)');
    waterGrad.addColorStop(1, 'rgba(6, 182, 212, 0.88)');

    ctx.fillStyle = waterGrad;
    ctx.beginPath();
    for (let x = 0; x <= W; x += 25) {
        const yTop = riverY1 + Math.sin(x * 0.015 + 1.2) * (H * 0.04);
        if (x === 0) ctx.moveTo(x, yTop);
        else ctx.lineTo(x, yTop);
    }
    for (let x = W; x >= 0; x -= 25) {
        const yBot = riverY2 + Math.sin(x * 0.016 + 2.5) * (H * 0.04);
        ctx.lineTo(x, yBot);
    }
    ctx.closePath();
    ctx.fill();

    // Submerged riverbed stones visible through clear water
    for (let s = 0; s < 14; s++) {
        const sx = ((s * 73 + 41) % Math.floor(W));
        const sy = H * 0.35 + ((s * 37) % Math.floor(H * 0.3));
        const sr = 4 * elScale + (s % 3) * 2;
        ctx.fillStyle = s % 2 === 0 ? 'rgba(120, 53, 15, 0.5)' : 'rgba(15, 118, 110, 0.45)';
        ctx.beginPath();
        ctx.ellipse(sx, sy, sr * 1.4, sr * 0.8, s, 0, Math.PI * 2);
        ctx.fill();
    }

    // Moving sunlit caustics & flow streamlines
    ctx.lineWidth = 1.6 * elScale;
    for (let l = 0; l < 7; l++) {
        const baseCy = riverY1 + (l + 1) * ((riverY2 - riverY1) / 8);
        ctx.strokeStyle = l % 2 === 0 ? `rgba(224, 242, 254, ${(0.45 + (l % 3) * 0.1) * intensity})` : `rgba(254, 240, 138, ${0.35 * intensity})`;
        ctx.beginPath();
        for (let x = 0; x <= W; x += 20) {
            const wave = Math.sin(x * 0.02 + time * 3.2 * speed + l * 0.9) * (6 * elScale);
            const cy = baseCy + wave;
            if (x === 0) ctx.moveTo(x, cy);
            else ctx.lineTo(x, cy);
        }
        ctx.stroke();
    }

    // Drifting foam flecks and water sparkles
    for (let f = 0; f < 8; f++) {
        const fx = ((time * 45 * speed + f * 97) % (W + 40)) - 20;
        const fy = riverY1 + ((f * 31) % Math.floor(riverY2 - riverY1 - 20)) + 10;
        ctx.fillStyle = `rgba(240, 253, 250, ${0.7 * intensity})`;
        ctx.beginPath();
        ctx.arc(fx, fy, (2.5 + (f % 2)) * elScale, 0, Math.PI * 2);
        ctx.fill();
    }

    // 3. Weathered Wooden Fishing Pier Extending from North Bank
    const pierX = W * 0.38;
    const pierW = 28 * elScale;
    const pierTop = riverY1 + Math.sin(pierX * 0.015 + 1.2) * (H * 0.04) - 15 * elScale;
    const pierLen = 70 * elScale;
    const pierBot = pierTop + pierLen;

    // Heavy round wood pilings submerged in water with ripples
    for (let pl = 0; pl < 3; pl++) {
        const plY = pierTop + (pl + 1) * (pierLen / 3.4);
        const plL = pierX - pierW * 0.42;
        const plR = pierX + pierW * 0.42;
        const pr = 3.5 * elScale;

        // Ripples in current
        ctx.strokeStyle = `rgba(207, 250, 254, ${0.55 * intensity})`;
        ctx.lineWidth = 1.2 * elScale;
        ctx.beginPath();
        ctx.arc(plL, plY, pr + 3.0 + Math.sin(time * 3 + pl) * 1.5, 0, Math.PI * 2);
        ctx.arc(plR, plY, pr + 3.0 + Math.sin(time * 3 + pl + 1) * 1.5, 0, Math.PI * 2);
        ctx.stroke();

        // Pilings
        ctx.fillStyle = '#291b12';
        ctx.beginPath();
        ctx.arc(plL, plY, pr, 0, Math.PI * 2);
        ctx.arc(plR, plY, pr, 0, Math.PI * 2);
        ctx.fill();
    }

    // Deck planks
    const plankH = 7 * elScale;
    const numPlanks = Math.floor(pierLen / plankH);
    for (let p = 0; p < numPlanks; p++) {
        const py = pierTop + p * plankH;
        ctx.fillStyle = p % 2 === 0 ? '#78350f' : '#854d0e';
        ctx.fillRect(pierX - pierW * 0.5, py, pierW, plankH - 1.2);
        ctx.strokeStyle = '#451a03';
        ctx.lineWidth = 1.0;
        ctx.strokeRect(pierX - pierW * 0.5, py, pierW, plankH - 1.2);

        // Nails
        ctx.fillStyle = '#1c1917';
        ctx.fillRect(pierX - pierW * 0.4, py + 2, 1.5, 1.5);
        ctx.fillRect(pierX + pierW * 0.4 - 1.5, py + 2, 1.5, 1.5);
    }

    // Fishing gear on pier
    // Wooden bait bucket
    const bktX = pierX - pierW * 0.22;
    const bktY = pierBot - 12 * elScale;
    ctx.fillStyle = '#451a03';
    ctx.beginPath();
    ctx.arc(bktX, bktY, 4.5 * elScale, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#d6d3d1';
    ctx.lineWidth = 1.0;
    ctx.stroke();

    // Slender fishing rod extending out over river current
    const rodEndX = pierX + pierW * 0.35 + 24 * elScale;
    const rodEndY = pierBot + 28 * elScale;
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 1.8 * elScale;
    ctx.beginPath();
    ctx.moveTo(pierX + pierW * 0.1, pierBot - 6 * elScale);
    ctx.lineTo(rodEndX, rodEndY);
    ctx.stroke();

    // Fishing line with red/white bobber in water
    const bobberX = rodEndX + 8 * elScale;
    const bobberY = rodEndY + 12 * elScale + Math.sin(time * 3) * (2 * elScale);
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.75)';
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    ctx.moveTo(rodEndX, rodEndY);
    ctx.lineTo(bobberX, bobberY);
    ctx.stroke();

    // Red/White bobber
    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.arc(bobberX, bobberY, 2.5 * elScale, 0, Math.PI * 2);
    ctx.fill();

    // Bobber ripple
    ctx.strokeStyle = `rgba(255, 255, 255, ${0.6 * intensity})`;
    ctx.lineWidth = 1.0;
    ctx.beginPath();
    ctx.arc(bobberX, bobberY, (5 + Math.sin(time * 4) * 1.5) * elScale, 0, Math.PI * 2);
    ctx.stroke();

    ctx.restore();
});

// 98. Turkey Vultures Circling Slowly Overhead Casting Ground Shadows
reg(['ww_circling_vultures', 'item_98'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    for (let v = 0; v < 3; v++) {
        const a = time * 0.8 * speed + (v / 3) * Math.PI * 2;
        const vx = cx + Math.cos(a) * (W * 0.3);
        const vy = cy + Math.sin(a) * (H * 0.25);
        ctx.fillStyle = `rgba(15, 23, 42, ${0.45 * intensity})`;
        ctx.beginPath();
        ctx.ellipse(vx, vy, 12 * elScale, 5 * elScale, a, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 99. Diamondback Rattlesnake Slithering Across Sandstone
reg(['ww_rattlesnake_slither', 'item_99'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const headX = ((time * 40 * speed) % (W + 100)) - 50;
    const cy = H * 0.6;
    ctx.strokeStyle = '#78350f';
    ctx.lineWidth = 5 * elScale;
    ctx.lineCap = 'round';
    ctx.beginPath();
    ctx.moveTo(headX, cy);
    for (let seg = 1; seg <= 6; seg++) {
        const sx = headX - seg * 12 * elScale;
        const sy = cy + Math.sin(time * 6 * speed + seg) * (10 * elScale);
        ctx.lineTo(sx, sy);
    }
    ctx.stroke();
});

// 100. Fine Red Desert Grit Blowing Across Boardwalk Planks
reg(['ww_boardwalk_dust_wind', 'item_100'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    // Blowing fine red sand streams
    ctx.strokeStyle = `rgba(217, 119, 6, ${0.5 * intensity})`;
    ctx.lineWidth = 1.5;
    for (let s = 0; s < 12; s++) {
        const sx = ((s * 43 + time * 160 * speed) % (W + 60)) - 30;
        const sy = (s * 37) % H;
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(sx - 25 * elScale, sy - 4);
        ctx.stroke();
    }
});

// =========================================================================
// B. ANIMATED TEXTURES & VOLUMES (101 - 125) - Weird West & Frontier
// =========================================================================

// 101. Dappled Afternoon Sunlight Filtering Through Cottonwood Leaves
reg(['ww_cottonwood_dappled_sun', 'item_101'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numDapples = 16;
    for (let d = 0; d < numDapples; d++) {
        const dx = (d * 57 + Math.sin(time * speed + d) * 15) % W;
        const dy = (d * 83 + Math.cos(time * 0.8 * speed + d) * 12) % H;
        const shimmer = 0.5 + Math.sin(time * 3 * speed + d * 1.5) * 0.5;
        const grad = ctx.createRadialGradient(dx, dy, 2, dx, dy, (25 + rough * 15) * elScale);
        grad.addColorStop(0, `rgba(254, 240, 138, ${0.45 * shimmer * intensity})`);
        grad.addColorStop(1, 'rgba(254, 240, 138, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(dx, dy, (25 + rough * 15) * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 102. Sickly Green Moonlight Bathing Cursed Boot-Hill Cemetery (Top-Down Overhead)
reg(['ww_cursed_boothill_moonlight', 'item_102'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const pulse = 0.8 + Math.sin(time * 1.5 * speed) * 0.2;
    // Soft eerie green moonlight pool on ground
    const moonGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, Math.min(W, H) * 0.55);
    moonGrad.addColorStop(0, `rgba(74, 222, 128, ${0.4 * pulse * intensity})`);
    moonGrad.addColorStop(0.7, `rgba(20, 83, 45, ${0.18 * pulse * intensity})`);
    moonGrad.addColorStop(1, 'rgba(20, 83, 45, 0)');
    ctx.fillStyle = moonGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, Math.min(W, H) * 0.55, 0, Math.PI * 2);
    ctx.fill();

    // Top-down overhead headstones (rounded masonry slabs with soft northwest shadows)
    const stones = [
        { ox: -70 * elScale, oy: -35 * elScale, w: 22 * elScale, d: 8 * elScale },
        { ox: 50 * elScale, oy: -40 * elScale, w: 26 * elScale, d: 9 * elScale },
        { ox: -30 * elScale, oy: 45 * elScale, w: 20 * elScale, d: 7 * elScale },
        { ox: 65 * elScale, oy: 35 * elScale, w: 24 * elScale, d: 8 * elScale }
    ];
    for (let s of stones) {
        const sx = cx + s.ox, sy = cy + s.oy;
        // Soft ground shadow
        ctx.fillStyle = 'rgba(15, 23, 42, 0.35)';
        ctx.beginPath();
        ctx.ellipse(sx + 5 * elScale, sy + 4 * elScale, s.w * 0.6, s.d * 0.8, -0.2, 0, Math.PI * 2);
        ctx.fill();
        // Overhead weathered stone top
        ctx.fillStyle = '#78716c';
        ctx.beginPath();
        ctx.roundRect(sx - s.w * 0.5, sy - s.d * 0.5, s.w, s.d, 3 * elScale);
        ctx.fill();
    }
    // Drifting graveyard ground mist
    for (let m = 0; m < 4; m++) {
        const mx = cx + Math.sin(time * 0.6 * speed + m * 1.5) * 60 * elScale;
        const my = cy + Math.cos(time * 0.5 * speed + m * 2.1) * 40 * elScale;
        FX.drawRadialGlow(ctx, mx, my, 4, 35 * elScale, `rgba(187, 247, 208, ${0.25 * intensity})`, 'rgba(187, 247, 208, 0)');
    }
});

// 103. Warm Amber Saloon Window Light Rippling Across Puddles
reg(['ww_saloon_window_light', 'item_103'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    // Window pane shadow mullions
    const glow = ctx.createRadialGradient(cx, cy, 10, cx, cy, Math.min(W, H) * 0.5);
    glow.addColorStop(0, `rgba(245, 158, 11, ${0.45 * intensity})`);
    glow.addColorStop(1, 'rgba(245, 158, 11, 0)');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(cx, cy, Math.min(W, H) * 0.5, 0, Math.PI * 2);
    ctx.fill();
    // Rippling water puddle reflections
    for (let r = 0; r < 4; r++) {
        const age = (time * 1.8 * speed + r * 0.25) % 1;
        ctx.strokeStyle = `rgba(254, 240, 138, ${(1 - age) * 0.6 * intensity})`;
        ctx.lineWidth = 2 * elScale;
        ctx.beginPath();
        ctx.ellipse(cx, cy + 15 * elScale, age * 65 * elScale, age * 28 * elScale, 0, 0, Math.PI * 2);
        ctx.stroke();
    }
});

// 104. Intense Heat Shimmer Distorting Air Over Salt Flats
reg(['ww_saltflat_heat_shimmer', 'item_104'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    for (let l = 0; l < 8; l++) {
        const ly = (l / 7) * H;
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.25 * intensity})`;
        ctx.lineWidth = (2 + rough * 2) * elScale;
        ctx.beginPath();
        for (let x = 0; x <= W; x += 35) {
            const y = ly + Math.sin(x * 0.05 + time * 6 * speed + l) * 8;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
    }
});

// 105. Sheet Lightning Flashes Illuminating Prairie Thunderstorm
reg(['ww_prairie_sheet_lightning', 'item_105'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cycle = (time * speed) % 5;
    const isFlash = cycle < 0.15 || (cycle > 0.3 && cycle < 0.42);
    if (isFlash) {
        // Soft radial lightning illumination
        const cx = W * 0.5, cy = H * 0.5;
        const flashGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, Math.max(W, H) * 0.65);
        flashGrad.addColorStop(0, `rgba(240, 249, 255, ${0.65 * intensity})`);
        flashGrad.addColorStop(0.6, `rgba(224, 242, 254, ${0.35 * intensity})`);
        flashGrad.addColorStop(1, 'rgba(224, 242, 254, 0)');
        ctx.fillStyle = flashGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, Math.max(W, H) * 0.65, 0, Math.PI * 2);
        ctx.fill();
    }
    // Rain streaks drumming down
    ctx.strokeStyle = `rgba(186, 230, 253, ${0.45 * intensity})`;
    ctx.lineWidth = 1.5;
    for (let r = 0; r < 25; r++) {
        const rx = (r * 37 + time * 60) % W;
        const ry = (time * 300 * speed + r * 71) % H;
        ctx.beginPath();
        ctx.moveTo(rx, ry);
        ctx.lineTo(rx - 6, ry + 16 * elScale);
        ctx.stroke();
    }
});

// 106. Churning Quicksand Pit Bubbling Slowly in Canyon Wash
reg(['ww_quicksand_pit', 'item_106'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    // Granular quicksand swirl
    ctx.fillStyle = `rgba(180, 83, 9, ${0.65 * intensity})`;
    ctx.beginPath();
    ctx.ellipse(cx, cy, 85 * elScale, 50 * elScale, 0, 0, Math.PI * 2);
    ctx.fill();
    // Swirling Archimedean vortex lines
    ctx.strokeStyle = '#78350f';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    for (let a = 0; a < Math.PI * 6; a += 0.2) {
        const r = (a / (Math.PI * 6)) * 75 * elScale;
        const rot = a + time * 1.5 * speed;
        const px = cx + Math.cos(rot) * r;
        const py = cy + Math.sin(rot) * r * 0.55;
        if (a === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
    }
    ctx.stroke();
});

// 107. Thick Black Crude Oil Bubbling Up From Ruptured Gusher
reg(['ww_crude_oil_gusher', 'item_107'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.6;
    // Spreading thick black oil pool
    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    ctx.ellipse(cx, cy, 90 * elScale, 45 * elScale, 0, 0, Math.PI * 2);
    ctx.fill();
    // Oil gusher fountain erupting
    const jetH = (45 + Math.sin(time * 12 * speed) * 10) * elScale;
    ctx.fillStyle = '#020617';
    ctx.beginPath();
    ctx.moveTo(cx - 10 * elScale, cy);
    ctx.lineTo(cx, cy - jetH);
    ctx.lineTo(cx + 10 * elScale, cy);
    ctx.closePath();
    ctx.fill();
});

// 108. Fast-Moving Prairie Brushfire Spreading Across Scrub
reg(['ww_brushfire_spread', 'item_108'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const burnX = ((time * 85 * speed) % (W + 200)) - 100;
    for (let f = 0; f < 8; f++) {
        const fx = burnX - f * 12 * elScale;
        const fy = H * 0.6 + Math.sin(time * 4 + f) * 20 * elScale;
        const rad = (25 + f * 4 + rough * 15) * elScale;
        const flame = ctx.createRadialGradient(fx, fy, 2, fx, fy, rad);
        flame.addColorStop(0, `rgba(254, 240, 138, ${0.9 * intensity})`);
        flame.addColorStop(0.5, `rgba(249, 115, 22, ${0.8 * intensity})`);
        flame.addColorStop(1, 'rgba(239, 68, 68, 0)');
        ctx.fillStyle = flame;
        ctx.beginPath();
        ctx.arc(fx, fy, rad, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 109. White-Water Canyon Rapids Swirling Around Jagged Boulders
reg(['ww_canyon_rapids', 'item_109'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numRocks = 4;
    for (let r = 0; r < numRocks; r++) {
        const rx = W * 0.2 + (r / 3) * (W * 0.6);
        const ry = H * 0.5 + Math.sin(r * 2) * 20 * elScale;
        // Jagged brown boulder
        ctx.fillStyle = '#78350f';
        ctx.beginPath();
        ctx.arc(rx, ry, 16 * elScale, 0, Math.PI * 2);
        ctx.fill();
        // Foaming water eddies
        ctx.strokeStyle = `rgba(240, 249, 255, ${0.85 * intensity})`;
        ctx.lineWidth = 3 * elScale;
        ctx.beginPath();
        ctx.arc(rx, ry, 22 * elScale, 0, Math.PI * 1.5);
        ctx.stroke();
    }
});

// 110. Cursed Black Ichor Oozing Between Floorboards in Ghost Town (Top-Down Organic Slime Pool)
reg(['ww_ghosttown_ichor', 'item_110'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    // Central glistening dark ichor puddle
    ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
    ctx.beginPath();
    ctx.ellipse(cx, cy, 65 * elScale, 38 * elScale, 0.2, 0, Math.PI * 2);
    ctx.fill();

    // Creeping oozing tendrils
    const tendrils = 6;
    for (let t = 0; t < tendrils; t++) {
        const ang = (t / tendrils) * Math.PI * 2 + Math.sin(time * 0.8 * speed + t) * 0.3;
        const len = (45 + Math.sin(time * 2 + t * 2) * 15) * elScale;
        ctx.strokeStyle = 'rgba(15, 23, 42, 0.85)';
        ctx.lineWidth = (4 + (t % 2) * 2) * elScale;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.quadraticCurveTo(cx + Math.cos(ang + 0.3) * (len * 0.5), cy + Math.sin(ang + 0.3) * (len * 0.5), cx + Math.cos(ang) * len, cy + Math.sin(ang) * len);
        ctx.stroke();
    }

    // Bubbling toxic ichor vesicles with specular highlights
    for (let b = 0; b < 7; b++) {
        const bx = cx + (FX.hash(b * 19) - 0.5) * 80 * elScale;
        const by = cy + (FX.hash(b * 31) - 0.5) * 45 * elScale;
        const bRad = (3 + Math.sin(time * 4 * speed + b * 1.5) * 2) * elScale;
        if (bRad > 1.5) {
            ctx.fillStyle = '#090d16';
            ctx.beginPath();
            ctx.arc(bx, by, bRad, 0, Math.PI * 2);
            ctx.fill();
            // Glistening specular glint
            ctx.fillStyle = `rgba(148, 163, 184, ${0.7 * intensity})`;
            ctx.beginPath();
            ctx.arc(bx - bRad * 0.3, by - bRad * 0.3, bRad * 0.35, 0, Math.PI * 2);
            ctx.fill();
        }
    }
});

// 111. Golden Wheat Fields Swaying in Wind-Blown Waves (Top-Down Overhead Swaths)
reg(['ww_golden_wheat_field', 'item_111'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numTufts = 36;
    const windPhase = time * 2.5 * speed;
    for (let t = 0; t < numTufts; t++) {
        const tx = (FX.hash(t * 17) * (W * 0.85)) + W * 0.075;
        const ty = (FX.hash(t * 43) * (H * 0.85)) + H * 0.075;
        const sway = Math.sin(windPhase + tx * 0.02 + ty * 0.01) * 6 * elScale;
        // Overhead radiating wheat awns
        ctx.strokeStyle = t % 2 === 0 ? '#fbbf24' : '#d97706';
        ctx.lineWidth = 1.6 * elScale;
        ctx.beginPath();
        ctx.moveTo(tx - 4 * elScale, ty);
        ctx.lineTo(tx + 4 * elScale + sway, ty + sway * 0.5);
        ctx.moveTo(tx, ty - 4 * elScale);
        ctx.lineTo(tx + sway * 0.5, ty + 5 * elScale + sway);
        ctx.stroke();
    }
    // Overhead wind gusts rolling across field
    for (let w = 0; w < 3; w++) {
        const wx = ((time * 80 * speed + w * 120) % (W + 100)) - 50;
        const windGrad = ctx.createRadialGradient(wx, H * 0.5, 10, wx, H * 0.5, 90 * elScale);
        windGrad.addColorStop(0, `rgba(254, 240, 138, ${0.25 * intensity})`);
        windGrad.addColorStop(1, 'rgba(254, 240, 138, 0)');
        ctx.fillStyle = windGrad;
        ctx.beginPath();
        ctx.ellipse(wx, H * 0.5, 90 * elScale, 45 * elScale, 0.2, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 112. Tall Buffalo Grass Rippling Like Ocean Across Plains (Top-Down Clumps)
reg(['ww_buffalo_grass_waves', 'item_112'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numClumps = 40;
    const windPhase = time * 2.2 * speed;
    for (let c = 0; c < numClumps; c++) {
        const cxClump = (FX.hash(c * 23) * (W * 0.85)) + W * 0.075;
        const cyClump = (FX.hash(c * 53) * (H * 0.85)) + H * 0.075;
        const sway = Math.sin(windPhase + cxClump * 0.025) * 7 * elScale;
        ctx.strokeStyle = c % 3 === 0 ? '#ca8a04' : (c % 3 === 1 ? '#a16207' : '#854d0e');
        ctx.lineWidth = 2 * elScale;
        ctx.beginPath();
        ctx.moveTo(cxClump, cyClump);
        ctx.quadraticCurveTo(cxClump + sway * 0.5, cyClump + 4 * elScale, cxClump + sway, cyClump + 8 * elScale);
        ctx.stroke();
    }
});

// 113. Rope-and-Plank Suspension Bridge Swaying Over Gorge
reg(['ww_swaying_rope_bridge', 'item_113'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cy = H * 0.5;
    const sway = Math.sin(time * 2 * speed) * (12 + rough * 10);
    // Main suspension hemp ropes
    ctx.strokeStyle = '#78350f';
    ctx.lineWidth = 4 * elScale;
    ctx.beginPath();
    ctx.moveTo(0, cy - 25 * elScale);
    ctx.quadraticCurveTo(W * 0.5, cy + 25 * elScale + sway, W, cy - 25 * elScale);
    ctx.stroke();
    // Wooden foot planks
    ctx.fillStyle = '#451a03';
    for (let p = 15; p < W; p += 30) {
        ctx.fillRect(p - 6 * elScale, cy + 10 * elScale + sway * 0.5, 12 * elScale, 4 * elScale);
    }
});

// 114. Mine Shaft Ceiling Timbers Groaning and Dropping Dust (Top-Down Centered Frame)
reg(['ww_mine_timber_groan', 'item_114'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.4;
    // Heavy timber cross-beam centered on passage
    ctx.fillStyle = '#451a03';
    ctx.fillRect(W * 0.15, cy - 10 * elScale, W * 0.7, 20 * elScale);
    ctx.strokeStyle = '#290f02';
    ctx.lineWidth = 2 * elScale;
    ctx.strokeRect(W * 0.15, cy - 10 * elScale, W * 0.7, 20 * elScale);
    // Dust trickles falling from beam
    for (let d = 0; d < 12; d++) {
        const dx = W * 0.2 + (d * 37) % (W * 0.6);
        const dy = cy + 10 * elScale + ((time * 65 * speed + d * 31) % (H * 0.5));
        ctx.fillStyle = `rgba(217, 119, 6, ${0.5 * intensity})`;
        ctx.beginPath();
        ctx.arc(dx, dy, (1.5 + (d % 3) * 0.5) * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 115. Desert Telegraph Wires Humming and Vibrating in Crosswind
reg(['ww_telegraph_wire_vibration', 'item_115'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cy = H * 0.45;
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 1.5;
    for (let w = -1; w <= 1; w++) {
        const wy = cy + w * 18 * elScale;
        ctx.beginPath();
        ctx.moveTo(0, wy);
        for (let x = 0; x <= W; x += 30) {
            const vib = Math.sin(time * 24 * speed + x * 0.05 + w) * (3 + rough * 3);
            ctx.lineTo(x, wy + vib);
        }
        ctx.stroke();
    }
});

// 116. Glowing Blue Ghost-Rock Radiation Pulsing Beneath Crater
reg(['ww_ghostrock_radiation', 'item_116'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const pulse = 0.75 + Math.sin(time * 3 * speed) * 0.25;
    const radGrad = ctx.createRadialGradient(cx, cy, 5, cx, cy, 75 * elScale);
    radGrad.addColorStop(0, `rgba(56, 189, 248, ${0.85 * pulse * intensity})`);
    radGrad.addColorStop(0.5, `rgba(2, 132, 199, ${0.4 * pulse * intensity})`);
    radGrad.addColorStop(1, 'rgba(2, 132, 199, 0)');
    ctx.fillStyle = radGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, 75 * elScale, 0, Math.PI * 2);
    ctx.fill();
    // Glowing mineral veins
    ctx.strokeStyle = '#e0f2fe';
    ctx.lineWidth = 2 * elScale;
    ctx.beginPath();
    ctx.moveTo(cx - 25 * elScale, cy - 10 * elScale);
    ctx.lineTo(cx, cy + 15 * elScale);
    ctx.lineTo(cx + 25 * elScale, cy - 5 * elScale);
    ctx.stroke();
});

// 117. Thick Gray Black-Powder Gunsmoke Hanging Low After Duel
reg(['ww_blackpowder_smoke', 'item_117'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    for (let s = 0; s < 7; s++) {
        const sx = ((time * 20 * speed + s * 80) % (W + 120)) - 60;
        const sy = H * 0.6 + Math.sin(time + s) * 15 * elScale;
        const rad = (45 + s * 8 + rough * 15) * elScale;
        const smoke = ctx.createRadialGradient(sx, sy, 5, sx, sy, rad);
        smoke.addColorStop(0, `rgba(203, 213, 225, ${0.5 * intensity})`);
        smoke.addColorStop(1, 'rgba(203, 213, 225, 0)');
        ctx.fillStyle = smoke;
        ctx.beginPath();
        ctx.arc(sx, sy, rad, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 118. Shimmering False-Water Mirage Wavering Across Playa
reg(['ww_mirage_water_shimmer', 'item_118'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cy = H * 0.55;
    ctx.fillStyle = `rgba(186, 230, 253, ${0.35 * intensity})`;
    ctx.beginPath();
    ctx.ellipse(W * 0.5, cy, W * 0.45, 18 * elScale, 0, 0, Math.PI * 2);
    ctx.fill();
    // Shimmer distortion waves
    ctx.strokeStyle = `rgba(255, 255, 255, ${0.6 * intensity})`;
    ctx.lineWidth = 1.5;
    for (let x = W * 0.1; x <= W * 0.9; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, cy - 4 * elScale);
        ctx.lineTo(x + 20 * elScale, cy + Math.sin(time * 6 + x) * 4);
        ctx.stroke();
    }
});

// 119. Wind-Rippled Sand Patterns Shifting Across Dunes
reg(['ww_shifting_sand_dunes', 'item_119'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    for (let d = 0; d < 6; d++) {
        const dy = (d / 5) * H;
        ctx.strokeStyle = `rgba(217, 119, 6, ${(0.4 + (d % 2) * 0.15) * intensity})`;
        ctx.lineWidth = 3 * elScale;
        ctx.beginPath();
        for (let x = 0; x <= W; x += 30) {
            const y = dy + Math.sin(x * 0.02 + time * 1.5 * speed + d) * 12;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
    }
});

// 120. Blood-Red Spectral Mist Rising From Battlefield
reg(['ww_battlefield_blood_mist', 'item_120'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    for (let m = 0; m < 6; m++) {
        const mx = ((time * 25 * speed + m * 85) % (W + 100)) - 50;
        const my = H * 0.65 - Math.sin(time + m) * 20 * elScale;
        const rad = (45 + m * 6 + rough * 18) * elScale;
        const mist = ctx.createRadialGradient(mx, my, 5, mx, my, rad);
        mist.addColorStop(0, `rgba(185, 28, 28, ${0.45 * intensity})`);
        mist.addColorStop(1, 'rgba(185, 28, 28, 0)');
        ctx.fillStyle = mist;
        ctx.beginPath();
        ctx.arc(mx, my, rad, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 121. Desert Wind Gusts Blowing Fine Sand Across Mesa
reg(['ww_mesa_wind_dust', 'item_121'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    ctx.strokeStyle = `rgba(245, 158, 11, ${0.45 * intensity})`;
    ctx.lineWidth = 1.5;
    for (let s = 0; s < 15; s++) {
        const sx = ((s * 47 + time * 180 * speed) % (W + 60)) - 30;
        const sy = (s * 31) % H;
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(sx - 30 * elScale, sy - 2);
        ctx.stroke();
    }
});

// 122. Shallow Creek Water Rippling Gently Over Smooth Pebbles
reg(['ww_pebble_creek_flow', 'item_122'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    // Smooth riverbed pebbles
    for (let p = 0; p < 18; p++) {
        const px = (p * 53) % W, py = (p * 79) % H;
        ctx.fillStyle = p % 2 === 0 ? '#78350f' : '#64748b';
        ctx.beginPath();
        ctx.ellipse(px, py, 10 * elScale, 6 * elScale, 0.2, 0, Math.PI * 2);
        ctx.fill();
    }
    // Rippling clear water stream
    ctx.strokeStyle = `rgba(56, 189, 248, ${0.45 * intensity})`;
    ctx.lineWidth = 2 * elScale;
    for (let y = 15; y < H; y += 30) {
        ctx.beginPath();
        for (let x = 0; x <= W; x += 30) {
            const wy = y + Math.sin(x * 0.04 + time * 3 * speed) * 4;
            if (x === 0) ctx.moveTo(x, wy);
            else ctx.lineTo(x, wy);
        }
        ctx.stroke();
    }
});

// 123. Heavy Prairie Rain Drumming Onto Dirt Roads
reg(['ww_heavy_prairie_rain', 'item_123'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    ctx.strokeStyle = `rgba(186, 230, 253, ${0.65 * intensity})`;
    ctx.lineWidth = 1.5;
    for (let r = 0; r < 25; r++) {
        const rx = (r * 41 + time * 50) % W;
        const ry = (time * 350 * speed + r * 63) % H;
        ctx.beginPath();
        ctx.moveTo(rx, ry);
        ctx.lineTo(rx - 4, ry + 16 * elScale);
        ctx.stroke();
    }
});

// 124. Snowflakes Drifting Silently Over High-Altitude Pass
reg(['ww_rocky_mountain_snow', 'item_124'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    ctx.save();
    // High-altitude mountain pass wind draft
    const windSpeed = 35 * speed;
    const numFlakes = Math.round(35 + rough * 25);

    // Drifting snow particles with crystalline variations
    for (let f = 0; f < numFlakes; f++) {
        const seed = f * 17.3;
        const drift = Math.sin(time * 1.5 + f * 0.4) * (20 + rough * 15);
        const fx = (f * 47 + time * windSpeed + drift) % (W + 40) - 20;
        const fy = (time * (40 + (f % 4) * 15) * speed + seed * 19) % (H + 30) - 15;
        const isForeground = f % 6 === 0;

        if (isForeground) {
            // Detailed 6-arm crystalline snowflake
            ctx.save();
            ctx.translate(fx, fy);
            ctx.rotate(time * 2 + f);
            ctx.strokeStyle = 'rgba(255, 255, 255, ' + (0.8 * intensity) + ')';
            ctx.lineWidth = 1 * elScale;
            for (let a = 0; a < 3; a++) {
                ctx.beginPath();
                ctx.moveTo(-5 * elScale, 0);
                ctx.lineTo(5 * elScale, 0);
                ctx.stroke();
                ctx.rotate(Math.PI / 3);
            }
            ctx.restore();
        } else {
            // Soft rounded snowflake
            const r = (1.2 + (f % 3) * 0.8) * elScale;
            const alpha = (0.5 + (f % 4) * 0.12) * intensity;
            ctx.fillStyle = 'rgba(240, 248, 255, ' + (0.8 * intensity) + ')';
            ctx.beginPath();
            ctx.arc(fx, fy, r, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Occasional ground crystalline frost sparkle
    for (let s = 0; s < 4; s++) {
        const sparkT = (time * 4 + s * 1.7) % 2;
        if (sparkT < 0.4) {
            const sx = (s * 85 + 40) * elScale;
            const sy = H - (12 + s * 5) * elScale;
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(sx, sy, 2 * elScale, 2 * elScale);
        }
    }
    ctx.restore();
});

// 125. Crisp Autumn Leaves Blowing Across Depot Platform
reg(['ww_autumn_depot_leaves', 'item_125'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numLeaves = 18;
    for (let l = 0; l < numLeaves; l++) {
        const lx = ((time * 75 * speed + l * 45) % (W + 60)) - 30;
        const ly = H * 0.65 + Math.sin(time * 3 + l) * 25 * elScale;
        ctx.save();
        ctx.translate(lx, ly);
        ctx.rotate(time * 4 + l);
        ctx.fillStyle = l % 3 === 0 ? '#b45309' : '#dc2626';
        ctx.beginPath();
        ctx.ellipse(0, 0, 6 * elScale, 3 * elScale, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
});


    // 126: Trail Campfire & Coffee
    reg(['ww_trail_campfire', 'item_126'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        var cx = W * 0.5, cy = H * 0.6;
        // Stone ring
        ctx.save();
        for (var i = 0; i < 8; i++) {
            var ang = (i / 8) * Math.PI * 2;
            var rx = cx + Math.cos(ang) * 45 * elScale;
            var ry = cy + Math.sin(ang) * 25 * elScale;
            ctx.fillStyle = '#4a3f35';
            ctx.beginPath();
            ctx.ellipse(rx, ry, 10 * elScale, 6 * elScale, ang, 0, Math.PI * 2);
            ctx.fill();
        }
        // Glowing logs
        ctx.strokeStyle = '#2b1d0c';
        ctx.lineWidth = 8 * elScale;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(cx - 30 * elScale, cy + 10 * elScale);
        ctx.lineTo(cx + 30 * elScale, cy - 5 * elScale);
        ctx.moveTo(cx - 25 * elScale, cy - 8 * elScale);
        ctx.lineTo(cx + 25 * elScale, cy + 8 * elScale);
        ctx.stroke();

        // Fire flames
        for (var f = 0; f < 6; f++) {
            var tOff = time * (3 + f * 0.5) + f * 1.3;
            var fx = cx + Math.sin(tOff * 1.5) * (15 + f * 2) * elScale;
            var fh = (35 + Math.sin(tOff * 2) * 15 + rough * 10) * elScale * intensity;
            var grad = ctx.createLinearGradient(fx, cy, fx, cy - fh);
            grad.addColorStop(0, 'rgba(255, 100, 0, 0.8)');
            grad.addColorStop(0.5, 'rgba(255, 200, 20, 0.7)');
            grad.addColorStop(1, 'rgba(255, 255, 150, 0)');
            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.moveTo(fx - 10 * elScale, cy);
            ctx.quadraticCurveTo(fx, cy - fh * 0.5, fx, cy - fh);
            ctx.quadraticCurveTo(fx + 2, cy - fh * 0.5, fx + 10 * elScale, cy);
            ctx.fill();
        }

        // Speckled blue coffee pot on iron grate
        var px = cx + 18 * elScale, py = cy - 12 * elScale;
        // Grate
        ctx.strokeStyle = '#1a1a1a';
        ctx.lineWidth = 3 * elScale;
        ctx.beginPath();
        ctx.moveTo(px - 18 * elScale, py + 12 * elScale);
        ctx.lineTo(px + 18 * elScale, py + 12 * elScale);
        ctx.stroke();
        // Pot body
        ctx.fillStyle = '#1c4966';
        ctx.beginPath();
        ctx.moveTo(px - 10 * elScale, py + 12 * elScale);
        ctx.lineTo(px - 7 * elScale, py - 15 * elScale);
        ctx.lineTo(px + 7 * elScale, py - 15 * elScale);
        ctx.lineTo(px + 10 * elScale, py + 12 * elScale);
        ctx.closePath();
        ctx.fill();
        // White speckles
        ctx.fillStyle = '#d0e5f2';
        for (var s = 0; s < 5; s++) {
            var sx = px + (Math.sin(s * 1.7) * 6) * elScale;
            var sy = py - 8 * elScale + (s * 3.5) * elScale;
            ctx.fillRect(sx, sy, 1.5 * elScale, 1.5 * elScale);
        }
        // Lid & spout
        ctx.fillStyle = '#16384f';
        ctx.beginPath();
        ctx.arc(px, py - 16 * elScale, 6 * elScale, Math.PI, 0);
        ctx.fill();
        // Boiling steam & bubbling over
        for (var sm = 0; sm < 4; sm++) {
            var stime = (time * 2 + sm * 0.7) % 2;
            var sty = py - 18 * elScale - stime * 25 * elScale;
            var stx = px - 6 * elScale + Math.sin(stime * 4 + sm) * 6 * elScale;
            ctx.fillStyle = 'rgba(255, 255, 255, ' + (1 - stime * 0.5) * 0.4 + ')';
            ctx.beginPath();
            ctx.arc(stx, sty, (3 + stime * 5) * elScale, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
    });

    // 127: Swinging Porch Lantern
    reg(['ww_porch_lantern', 'item_127'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        var cx = W * 0.5, cy = 20 * elScale;
        var swing = Math.sin(time * 2 * speed) * (0.2 + rough * 0.1);
        var len = 70 * elScale;
        var lx = cx + Math.sin(swing) * len;
        var ly = cy + Math.cos(swing) * len;

        ctx.save();
        // Iron mounting hook
        ctx.strokeStyle = '#2d2d2d';
        ctx.lineWidth = 4 * elScale;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(cx - 20 * elScale, cy - 10 * elScale);
        ctx.lineTo(cx, cy);
        ctx.stroke();

        // Chain/rod
        ctx.strokeStyle = '#3a3a3a';
        ctx.lineWidth = 2 * elScale;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(lx, ly);
        ctx.stroke();

        // Lantern body
        ctx.translate(lx, ly);
        ctx.rotate(-swing * 0.5);

        // Brass cap & base
        ctx.fillStyle = '#b8860b';
        ctx.fillRect(-12 * elScale, -4 * elScale, 24 * elScale, 6 * elScale);
        ctx.fillRect(-14 * elScale, 28 * elScale, 28 * elScale, 8 * elScale);

        // Glass globe
        ctx.fillStyle = 'rgba(255, 230, 160, 0.25)';
        ctx.strokeStyle = '#8b6508';
        ctx.lineWidth = 1.5 * elScale;
        ctx.beginPath();
        ctx.arc(0, 13 * elScale, 14 * elScale, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Kerosene flame inside
        var flWobble = Math.sin(time * 12) * 2 * elScale;
        var flGrad = ctx.createRadialGradient(flWobble, 14 * elScale, 1, 0, 14 * elScale, 12 * elScale);
        flGrad.addColorStop(0, 'rgba(255, 255, 220, 0.95)');
        flGrad.addColorStop(0.3, 'rgba(255, 180, 40, 0.8)');
        flGrad.addColorStop(1, 'rgba(255, 80, 0, 0)');
        ctx.fillStyle = flGrad;
        ctx.beginPath();
        ctx.arc(flWobble, 14 * elScale, 10 * elScale, 0, Math.PI * 2);
        ctx.fill();

        // Lantern warm glow on surroundings
        var glow = ctx.createRadialGradient(0, 14 * elScale, 10 * elScale, 0, 14 * elScale, 70 * elScale * intensity);
        glow.addColorStop(0, 'rgba(255, 180, 50, ' + (0.35 * intensity) + ')');
        glow.addColorStop(1, 'rgba(255, 150, 0, 0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(0, 14 * elScale, 70 * elScale * intensity, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    });

    // 128: Blacksmith Forge Coals
    reg(['ww_blacksmith_forge', 'item_128'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        var cx = W * 0.5, cy = H * 0.55;
        ctx.save();
        // Hearth rim
        ctx.strokeStyle = '#36312a';
        ctx.lineWidth = 12 * elScale;
        ctx.beginPath();
        ctx.arc(cx, cy, 60 * elScale, 0, Math.PI * 2);
        ctx.stroke();

        // Bed of hot coals
        for (var i = 0; i < 22; i++) {
            var ang = i * 2.4;
            var dist = (12 + (i % 5) * 8) * elScale;
            var x = cx + Math.cos(ang) * dist;
            var y = cy + Math.sin(ang) * (dist * 0.65);
            var pulse = Math.sin(time * 3 + i * 1.1) * 0.3 + 0.7;
            ctx.fillStyle = (i % 2 === 0) ?
                'rgba(255, ' + Math.floor(70 * pulse) + ', 0, 0.85)' :
                'rgba(255, ' + Math.floor(180 * pulse) + ', 30, 0.9)';
            ctx.beginPath();
            ctx.arc(x, y, (6 + (i % 4) * 2) * elScale, 0, Math.PI * 2);
            ctx.fill();
        }

        // Branding iron resting in coals
        ctx.strokeStyle = '#222';
        ctx.lineWidth = 6 * elScale;
        ctx.beginPath();
        ctx.moveTo(cx - 75 * elScale, cy + 45 * elScale);
        ctx.lineTo(cx + 10 * elScale, cy - 8 * elScale);
        ctx.stroke();

        // Cherry red branding head
        var headPulse = Math.sin(time * 5) * 0.2 + 0.8;
        ctx.strokeStyle = 'rgba(255, ' + Math.floor(120 * headPulse) + ', 20, 0.95)';
        ctx.lineWidth = 8 * elScale;
        ctx.beginPath();
        ctx.moveTo(cx + 10 * elScale, cy - 8 * elScale);
        ctx.lineTo(cx + 35 * elScale, cy - 22 * elScale);
        ctx.stroke();

        // Cherry red brand shape ('W')
        ctx.strokeStyle = 'rgba(255, 240, 180, 0.95)';
        ctx.lineWidth = 3 * elScale;
        ctx.beginPath();
        ctx.moveTo(cx + 25 * elScale, cy - 28 * elScale);
        ctx.lineTo(cx + 30 * elScale, cy - 18 * elScale);
        ctx.lineTo(cx + 35 * elScale, cy - 26 * elScale);
        ctx.lineTo(cx + 40 * elScale, cy - 16 * elScale);
        ctx.stroke();

        // Rising embers
        for (var e = 0; e < 8; e++) {
            var et = (time * 1.5 + e * 0.4) % 1.5;
            var ex = cx + Math.sin(et * 4 + e) * 25 * elScale;
            var ey = cy - et * 50 * elScale;
            ctx.fillStyle = 'rgba(255, 200, 50, ' + (1 - et / 1.5) + ')';
            ctx.fillRect(ex, ey, 2 * elScale, 2 * elScale);
        }
        ctx.restore();
    });

    // 129: Wagon-Wheel Chandelier
    reg(['ww_saloon_chandelier', 'item_129'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        var cx = W * 0.5, cy = H * 0.48;
        var swayX = Math.sin(time * 1.5 * speed) * 8 * elScale;
        var swayY = Math.cos(time * 1.5 * speed) * 3 * elScale;
        cx += swayX;
        cy += swayY;

        ctx.save();
        // Suspension chains
        ctx.strokeStyle = '#443f38';
        ctx.lineWidth = 2 * elScale;
        ctx.beginPath();
        ctx.moveTo(W * 0.5, 0);
        ctx.lineTo(cx - 50 * elScale, cy);
        ctx.moveTo(W * 0.5, 0);
        ctx.lineTo(cx + 50 * elScale, cy);
        ctx.stroke();

        // Wooden wheel rim
        ctx.strokeStyle = '#5a3d28';
        ctx.lineWidth = 9 * elScale;
        ctx.beginPath();
        ctx.ellipse(cx, cy, 65 * elScale, 28 * elScale, 0, 0, Math.PI * 2);
        ctx.stroke();

        // Iron outer band
        ctx.strokeStyle = '#2b2927';
        ctx.lineWidth = 2.5 * elScale;
        ctx.beginPath();
        ctx.ellipse(cx, cy, 70 * elScale, 30 * elScale, 0, 0, Math.PI * 2);
        ctx.stroke();

        // Wheel hub
        ctx.fillStyle = '#3d2b1f';
        ctx.beginPath();
        ctx.ellipse(cx, cy, 14 * elScale, 7 * elScale, 0, 0, Math.PI * 2);
        ctx.fill();

        // 8 Spokes
        for (var s = 0; s < 8; s++) {
            var sang = (s / 8) * Math.PI * 2;
            ctx.strokeStyle = '#4a3320';
            ctx.lineWidth = 3 * elScale;
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.lineTo(cx + Math.cos(sang) * 65 * elScale, cy + Math.sin(sang) * 28 * elScale);
            ctx.stroke();
        }

        // 8 Wax candles with flickering flames
        for (var c = 0; c < 8; c++) {
            var cang = (c / 8) * Math.PI * 2;
            var canX = cx + Math.cos(cang) * 65 * elScale;
            var canY = cy + Math.sin(cang) * 28 * elScale;

            // White candle body
            ctx.fillStyle = '#eedcbf';
            ctx.fillRect(canX - 2.5 * elScale, canY - 14 * elScale, 5 * elScale, 14 * elScale);

            // Flickering flame
            var flFlick = Math.sin(time * 10 + c * 2) * 1.5 * elScale;
            var flH = (8 + Math.cos(time * 12 + c) * 3) * elScale;
            var flGrad = ctx.createLinearGradient(canX, canY - 14 * elScale, canX + flFlick, canY - 14 * elScale - flH);
            flGrad.addColorStop(0, 'rgba(255, 120, 0, 0.85)');
            flGrad.addColorStop(0.6, 'rgba(255, 230, 80, 0.9)');
            flGrad.addColorStop(1, 'rgba(255, 255, 200, 0)');
            ctx.fillStyle = flGrad;
            ctx.beginPath();
            ctx.ellipse(canX + flFlick * 0.5, canY - 14 * elScale - flH * 0.5, 3 * elScale, flH * 0.6, 0, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
    });

    // 130: Railroad Crossing Signal
    reg(['ww_crossing_signal', 'item_130'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        var cx = W * 0.5, cy = H * 0.6;
        ctx.save();
        // Tall cast iron mast
        ctx.strokeStyle = '#2b2c2e';
        ctx.lineWidth = 7 * elScale;
        ctx.beginPath();
        ctx.moveTo(cx, cy + 50 * elScale);
        ctx.lineTo(cx, cy - 60 * elScale);
        ctx.stroke();

        // Wooden crossbuck ('X')
        ctx.save();
        ctx.translate(cx, cy - 45 * elScale);
        ctx.fillStyle = '#e8e8e8';
        ctx.strokeStyle = '#1a1a1a';
        ctx.lineWidth = 1.5 * elScale;
        // Blade 1
        ctx.rotate(0.6);
        ctx.fillRect(-35 * elScale, -5 * elScale, 70 * elScale, 10 * elScale);
        ctx.strokeRect(-35 * elScale, -5 * elScale, 70 * elScale, 10 * elScale);
        // Blade 2
        ctx.rotate(-1.2);
        ctx.fillRect(-35 * elScale, -5 * elScale, 70 * elScale, 10 * elScale);
        ctx.strokeRect(-35 * elScale, -5 * elScale, 70 * elScale, 10 * elScale);
        ctx.restore();

        // Horizontal signal arm
        var armY = cy - 15 * elScale;
        ctx.strokeStyle = '#3a3a3a';
        ctx.lineWidth = 5 * elScale;
        ctx.beginPath();
        ctx.moveTo(cx - 35 * elScale, armY);
        ctx.lineTo(cx + 35 * elScale, armY);
        ctx.stroke();

        // Two alternating flashing red lanterns
        var blinkLeft = Math.floor(time * 2 * speed) % 2 === 0;
        var leftAlpha = blinkLeft ? (0.8 + 0.2 * Math.sin(time * 20)) : 0.15;
        var rightAlpha = (!blinkLeft) ? (0.8 + 0.2 * Math.sin(time * 20)) : 0.15;

        // Left lantern
        ctx.fillStyle = '#111';
        ctx.beginPath();
        ctx.arc(cx - 35 * elScale, armY, 12 * elScale, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = 'rgba(255, 20, 20, ' + leftAlpha + ')';
        ctx.beginPath();
        ctx.arc(cx - 35 * elScale, armY, 8 * elScale, 0, Math.PI * 2);
        ctx.fill();
        if (blinkLeft) {
            var redGlowL = ctx.createRadialGradient(cx - 35 * elScale, armY, 5 * elScale, cx - 35 * elScale, armY, 40 * elScale * intensity);
            redGlowL.addColorStop(0, 'rgba(255, 30, 30, 0.5)');
            redGlowL.addColorStop(1, 'rgba(255, 0, 0, 0)');
            ctx.fillStyle = redGlowL;
            ctx.beginPath();
            ctx.arc(cx - 35 * elScale, armY, 40 * elScale * intensity, 0, Math.PI * 2);
            ctx.fill();
        }

        // Right lantern
        ctx.fillStyle = '#111';
        ctx.beginPath();
        ctx.arc(cx + 35 * elScale, armY, 12 * elScale, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = 'rgba(255, 20, 20, ' + rightAlpha + ')';
        ctx.beginPath();
        ctx.arc(cx + 35 * elScale, armY, 8 * elScale, 0, Math.PI * 2);
        ctx.fill();
        if (!blinkLeft) {
            var redGlowR = ctx.createRadialGradient(cx + 35 * elScale, armY, 5 * elScale, cx + 35 * elScale, armY, 40 * elScale * intensity);
            redGlowR.addColorStop(0, 'rgba(255, 30, 30, 0.5)');
            redGlowR.addColorStop(1, 'rgba(255, 0, 0, 0)');
            ctx.fillStyle = redGlowR;
            ctx.beginPath();
            ctx.arc(cx + 35 * elScale, armY, 40 * elScale * intensity, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
    });

    // 131: Fizzing Dynamite Bundle
    reg(['ww_dynamite_bundle', 'item_131'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        var cx = W * 0.5, cy = H * 0.55;
        ctx.save();
        // 5 Red dynamite sticks bound in bundle
        var stickOffsets = [
            { x: -16, y: -8 }, { x: 0, y: -14 }, { x: 16, y: -8 },
            { x: -8, y: 8 }, { x: 8, y: 8 }
        ];
        ctx.fillStyle = '#b3221b';
        ctx.strokeStyle = '#5a0d0a';
        ctx.lineWidth = 1.5 * elScale;

        for (var i = 0; i < stickOffsets.length; i++) {
            var so = stickOffsets[i];
            var sx = cx + so.x * elScale;
            var sy = cy + so.y * elScale;
            ctx.fillRect(sx - 7 * elScale, sy - 28 * elScale, 14 * elScale, 56 * elScale);
            ctx.strokeRect(sx - 7 * elScale, sy - 28 * elScale, 14 * elScale, 56 * elScale);
        }

        // Black friction tape binding
        ctx.fillStyle = '#222';
        ctx.fillRect(cx - 26 * elScale, cy - 14 * elScale, 52 * elScale, 8 * elScale);
        ctx.fillRect(cx - 26 * elScale, cy + 8 * elScale, 52 * elScale, 8 * elScale);

        // Fuse cords gathering to a sparking point
        var fuseX = cx + Math.sin(time * 3) * 6 * elScale;
        var fuseY = cy - 45 * elScale - (rough * 8);
        ctx.strokeStyle = '#f5deb3';
        ctx.lineWidth = 2.5 * elScale;
        ctx.beginPath();
        ctx.moveTo(cx, cy - 28 * elScale);
        ctx.quadraticCurveTo(cx - 10 * elScale, cy - 38 * elScale, fuseX, fuseY);
        ctx.stroke();

        // Fizzing spark explosion
        for (var sp = 0; sp < 12; sp++) {
            var sAng = (sp / 12) * Math.PI * 2 + time * 15;
            var sDist = (4 + (Math.sin(time * 20 + sp) * 0.5 + 0.5) * 16) * elScale * intensity;
            ctx.strokeStyle = (sp % 2 === 0) ? '#fffb77' : '#ff7a18';
            ctx.lineWidth = 1.5 * elScale;
            ctx.beginPath();
            ctx.moveTo(fuseX, fuseY);
            ctx.lineTo(fuseX + Math.cos(sAng) * sDist, fuseY + Math.sin(sAng) * sDist);
            ctx.stroke();
        }

        // White core spark
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(fuseX, fuseY, 3.5 * elScale, 0, Math.PI * 2);
        ctx.fill();

        // Drifting smoke puff
        var smokeY = fuseY - ((time * 30) % 25) * elScale;
        ctx.fillStyle = 'rgba(180, 180, 180, 0.35)';
        ctx.beginPath();
        ctx.arc(fuseX + Math.sin(time * 5) * 8 * elScale, smokeY, 6 * elScale, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    });

    // 132: Coiled Timber Rattler
    reg(['ww_coiled_rattler', 'item_132'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        var cx = W * 0.5, cy = H * 0.55;
        ctx.save();
        // Desert sandstone rock behind snake
        ctx.fillStyle = '#8a6845';
        ctx.beginPath();
        ctx.moveTo(cx - 50 * elScale, cy + 25 * elScale);
        ctx.quadraticCurveTo(cx - 30 * elScale, cy - 40 * elScale, cx + 45 * elScale, cy - 20 * elScale);
        ctx.quadraticCurveTo(cx + 60 * elScale, cy + 30 * elScale, cx - 50 * elScale, cy + 25 * elScale);
        ctx.fill();

        // Coiled snake body (layers of concentric loops)
        var bodyColor = '#5c4827';
        var diamondColor = '#a8894f';
        ctx.lineWidth = 11 * elScale;
        ctx.lineCap = 'round';
        ctx.strokeStyle = bodyColor;
        ctx.beginPath();
        ctx.ellipse(cx, cy + 10 * elScale, 36 * elScale, 20 * elScale, 0, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.ellipse(cx, cy + 2 * elScale, 28 * elScale, 15 * elScale, 0, 0, Math.PI * 2);
        ctx.stroke();

        // Diamond patterns
        ctx.fillStyle = diamondColor;
        for (var d = 0; d < 8; d++) {
            var dang = (d / 8) * Math.PI * 2;
            var dx = cx + Math.cos(dang) * 32 * elScale;
            var dy = cy + 10 * elScale + Math.sin(dang) * 16 * elScale;
            ctx.fillRect(dx - 3 * elScale, dy - 2 * elScale, 6 * elScale, 4 * elScale);
        }

        // Raised neck & triangular viper head
        var headBob = Math.sin(time * 3 * speed) * 3 * elScale;
        var hx = cx - 12 * elScale;
        var hy = cy - 20 * elScale + headBob;
        ctx.strokeStyle = bodyColor;
        ctx.lineWidth = 8 * elScale;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.quadraticCurveTo(hx + 8 * elScale, hy + 12 * elScale, hx, hy);
        ctx.stroke();

        // Triangular head
        ctx.fillStyle = '#423319';
        ctx.beginPath();
        ctx.moveTo(hx - 12 * elScale, hy);
        ctx.lineTo(hx + 4 * elScale, hy - 7 * elScale);
        ctx.lineTo(hx + 4 * elScale, hy + 7 * elScale);
        ctx.closePath();
        ctx.fill();

        // Yellow slit eyes
        ctx.fillStyle = '#e8c82e';
        ctx.fillRect(hx - 2 * elScale, hy - 4 * elScale, 2 * elScale, 2 * elScale);

        // Forked tongue flicking
        if (Math.sin(time * 7) > 0.3) {
            ctx.strokeStyle = '#c92a2a';
            ctx.lineWidth = 1.5 * elScale;
            ctx.beginPath();
            ctx.moveTo(hx - 12 * elScale, hy);
            ctx.lineTo(hx - 22 * elScale, hy);
            ctx.lineTo(hx - 26 * elScale, hy - 3 * elScale);
            ctx.moveTo(hx - 22 * elScale, hy);
            ctx.lineTo(hx - 26 * elScale, hy + 3 * elScale);
            ctx.stroke();
        }

        // Tail rattle held high & buzzing
        var rattleX = cx + 32 * elScale;
        var rattleY = cy - 8 * elScale;
        var rattleVibe = (Math.random() - 0.5) * 4 * elScale * speed;
        ctx.fillStyle = '#d2b48c';
        ctx.beginPath();
        ctx.arc(rattleX + rattleVibe, rattleY - 4 * elScale, 4 * elScale, 0, Math.PI * 2);
        ctx.arc(rattleX + rattleVibe, rattleY - 10 * elScale, 3.5 * elScale, 0, Math.PI * 2);
        ctx.arc(rattleX + rattleVibe, rattleY - 15 * elScale, 3 * elScale, 0, Math.PI * 2);
        ctx.fill();

        // Buzzing sound waves
        ctx.strokeStyle = 'rgba(210, 180, 140, 0.4)';
        ctx.lineWidth = 1.5 * elScale;
        ctx.beginPath();
        ctx.arc(rattleX, rattleY - 10 * elScale, 12 * elScale, -0.8, 0.8);
        ctx.stroke();
        ctx.restore();
    });

    // 133: Steel Bear Trap
    reg(['ww_beartrap', 'item_133'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        var cx = W * 0.5, cy = H * 0.55;
        // Snap cycle: open for 3 seconds, snap shut violently, reset
        var cycle = (time * speed) % 4;
        var snapAngle = (cycle > 2.8 && cycle < 3.8) ? 0.05 : 0.85;

        ctx.save();
        // Heavy iron base frame
        ctx.strokeStyle = '#3e3d3b';
        ctx.lineWidth = 6 * elScale;
        ctx.beginPath();
        ctx.ellipse(cx, cy, 48 * elScale, 24 * elScale, 0, 0, Math.PI * 2);
        ctx.stroke();

        // Round central trigger pan (pressure plate)
        ctx.fillStyle = '#54524f';
        ctx.beginPath();
        ctx.ellipse(cx, cy, 14 * elScale, 8 * elScale, 0, 0, Math.PI * 2);
        ctx.fill();

        // Serrated curved jaws
        var jawSpan = 46 * elScale;
        // Top jaw
        ctx.save();
        ctx.translate(cx, cy);
        ctx.scale(1, Math.sin(snapAngle));
        ctx.strokeStyle = '#5a5854';
        ctx.lineWidth = 5 * elScale;
        ctx.beginPath();
        ctx.arc(0, 0, jawSpan, Math.PI, 0);
        ctx.stroke();
        // Serrated teeth on jaw
        ctx.fillStyle = '#7a7771';
        for (var t = 0; t < 7; t++) {
            var tang = Math.PI + (t / 6) * Math.PI;
            var tx = Math.cos(tang) * jawSpan;
            var ty = Math.sin(tang) * jawSpan;
            ctx.beginPath();
            ctx.moveTo(tx - 3 * elScale, ty);
            ctx.lineTo(tx + 3 * elScale, ty);
            ctx.lineTo(tx, ty + 8 * elScale);
            ctx.closePath();
            ctx.fill();
        }
        ctx.restore();

        // Bottom jaw
        ctx.save();
        ctx.translate(cx, cy);
        ctx.scale(1, -Math.sin(snapAngle));
        ctx.strokeStyle = '#5a5854';
        ctx.lineWidth = 5 * elScale;
        ctx.beginPath();
        ctx.arc(0, 0, jawSpan, Math.PI, 0);
        ctx.stroke();
        for (var bt = 0; bt < 7; bt++) {
            var btang = Math.PI + (bt / 6) * Math.PI;
            var btx = Math.cos(btang) * jawSpan;
            var bty = Math.sin(btang) * jawSpan;
            ctx.beginPath();
            ctx.moveTo(btx - 3 * elScale, bty);
            ctx.lineTo(btx + 3 * elScale, bty);
            ctx.lineTo(btx, bty + 8 * elScale);
            ctx.closePath();
            ctx.fill();
        }
        ctx.restore();

        // Heavy tension leaf springs on each side
        ctx.strokeStyle = '#2b2a29';
        ctx.lineWidth = 4 * elScale;
        ctx.beginPath();
        ctx.moveTo(cx - 48 * elScale, cy);
        ctx.lineTo(cx - 65 * elScale, cy);
        ctx.moveTo(cx + 48 * elScale, cy);
        ctx.lineTo(cx + 65 * elScale, cy);
        ctx.stroke();

        // Sparks if snap just occurred
        if (cycle >= 2.8 && cycle <= 3.0) {
            for (var sp = 0; sp < 8; sp++) {
                var sx = cx + (Math.random() - 0.5) * 30 * elScale;
                var sy = cy + (Math.random() - 0.5) * 15 * elScale;
                ctx.fillStyle = '#ffe066';
                ctx.fillRect(sx, sy, 2 * elScale, 2 * elScale);
            }
        }
        ctx.restore();
    });

    // 134: Boiler Pressure Valve
    reg(['ww_boiler_valve', 'item_134'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        var cx = W * 0.5, cy = H * 0.65;
        ctx.save();
        // Boiler curved hull
        ctx.fillStyle = '#26282b';
        ctx.beginPath();
        ctx.arc(cx, cy + 70 * elScale, 80 * elScale, Math.PI * 1.1, Math.PI * 1.9);
        ctx.lineTo(cx + 70 * elScale, cy + 50 * elScale);
        ctx.lineTo(cx - 70 * elScale, cy + 50 * elScale);
        ctx.fill();

        // Heavy valve riser pipe
        ctx.fillStyle = '#b57a2b'; // Brass
        ctx.fillRect(cx - 14 * elScale, cy - 25 * elScale, 28 * elScale, 40 * elScale);

        // Pressure dial gauge
        var gx = cx - 35 * elScale, gy = cy - 10 * elScale;
        ctx.fillStyle = '#f0ebe1';
        ctx.strokeStyle = '#8a5c1e';
        ctx.lineWidth = 3 * elScale;
        ctx.beginPath();
        ctx.arc(gx, gy, 16 * elScale, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Vibrating red needle in danger zone
        var needleAng = 0.5 + Math.sin(time * 25) * 0.3 * intensity;
        ctx.strokeStyle = '#c41d1d';
        ctx.lineWidth = 2 * elScale;
        ctx.beginPath();
        ctx.moveTo(gx, gy);
        ctx.lineTo(gx + Math.cos(needleAng) * 12 * elScale, gy + Math.sin(needleAng) * 12 * elScale);
        ctx.stroke();

        // Pressure relief valve poppet rattling
        var rattleY = Math.sin(time * 35) * 3 * elScale;
        ctx.fillStyle = '#d49b42';
        ctx.fillRect(cx - 18 * elScale, cy - 32 * elScale + rattleY, 36 * elScale, 8 * elScale);

        // Weighted lever arm
        ctx.strokeStyle = '#1f1f1f';
        ctx.lineWidth = 3.5 * elScale;
        ctx.beginPath();
        ctx.moveTo(cx - 15 * elScale, cy - 30 * elScale + rattleY);
        ctx.lineTo(cx + 35 * elScale, cy - 38 * elScale + rattleY * 1.5);
        ctx.stroke();
        // Cast iron weight ball
        ctx.fillStyle = '#222';
        ctx.beginPath();
        ctx.arc(cx + 32 * elScale, cy - 36 * elScale + rattleY * 1.5, 7 * elScale, 0, Math.PI * 2);
        ctx.fill();

        // High-pressure steam jet venting
        for (var s = 0; s < 10; s++) {
            var st = (time * 4 + s * 0.25) % 1.2;
            var sy = cy - 35 * elScale - st * 65 * elScale;
            var spread = (st * 30 + rough * 10) * elScale;
            var sx = cx + (Math.sin(s * 2.3 + time * 5) * spread);
            var alpha = (1 - st / 1.2) * 0.55 * intensity;
            ctx.fillStyle = 'rgba(240, 245, 255, ' + alpha + ')';
            ctx.beginPath();
            ctx.arc(sx, sy, (6 + st * 12) * elScale, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
    });

// 135. Gallows Trapdoor (Top-Down Battlemap View)
reg(['ww_gallows_trapdoor', 'item_135'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const tw = 65 * elScale, th = 65 * elScale;

    ctx.save();
    // Gallows timber platform planks surrounding the trapdoor
    ctx.fillStyle = '#452a17';
    ctx.fillRect(cx - tw * 0.8, cy - th * 0.8, tw * 1.6, th * 1.6);
    ctx.strokeStyle = '#27170c';
    ctx.lineWidth = 2 * elScale;
    for (let p = -th * 0.8; p <= th * 0.8; p += 14 * elScale) {
        ctx.beginPath();
        ctx.moveTo(cx - tw * 0.8, cy + p); ctx.lineTo(cx + tw * 0.8, cy + p);
        ctx.stroke();
    }

    // Trapdoor floor opening cutout (deep dark pit below)
    ctx.fillStyle = '#0c0a09';
    ctx.fillRect(cx - tw * 0.5, cy - th * 0.5, tw, th);
    ctx.strokeStyle = '#1c1917';
    ctx.lineWidth = 3 * elScale;
    ctx.strokeRect(cx - tw * 0.5, cy - th * 0.5, tw, th);

    // Trapdoor flap opening downward into the pit (Forced Perspective)
    const creakCycle = Math.sin(time * 3 * speed);
    const dropAng = (creakCycle > 0.4) ? 0.45 : 0.08; // Flap drops downward under tension
    const flapScale = Math.cos(dropAng); // Foreshortening as it drops into depth

    ctx.save();
    ctx.translate(cx - tw * 0.5, cy);
    ctx.scale(flapScale, 1);
    ctx.fillStyle = '#5c381e';
    ctx.fillRect(0, -th * 0.5, tw, th);
    ctx.strokeStyle = '#27170c';
    ctx.lineWidth = 2 * elScale;
    ctx.strokeRect(0, -th * 0.5, tw, th);

    // Heavy iron strap hinges
    ctx.fillStyle = '#18181b';
    ctx.fillRect(-4 * elScale, -th * 0.35, 18 * elScale, 6 * elScale);
    ctx.fillRect(-4 * elScale, th * 0.25, 18 * elScale, 6 * elScale);
    ctx.restore();

    // Release bolt pin on right edge
    ctx.fillStyle = '#71717a';
    ctx.fillRect(cx + tw * 0.45, cy - 4 * elScale, 10 * elScale, 8 * elScale);

    ctx.restore();
});

// 136. Batwing Wooden Saloon Doors (Top-Down Battlemap View)
reg(['ww_saloon_doors', 'item_136'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const doorSpan = 45 * elScale;
    const swingAng = Math.sin(time * 3 * speed) * 0.75;

    ctx.save();
    // Timber doorframe hinge posts (Top-Down, compact posts on transparent map)
    const postThick = 14 * elScale;
    const postWidth = 10 * elScale;
    ctx.fillStyle = '#3e2723';
    ctx.fillRect(cx - doorSpan - postWidth, cy - postThick * 0.5, postWidth, postThick);
    ctx.fillRect(cx + doorSpan, cy - postThick * 0.5, postWidth, postThick);

    // Left Batwing Door Panel pivoting around left hinge (Top-Down rotation)
    ctx.save();
    ctx.translate(cx - doorSpan, cy);
    ctx.rotate(swingAng);
    ctx.fillStyle = '#8d6e63';
    ctx.fillRect(0, -2 * elScale, doorSpan - 2 * elScale, 4 * elScale);
    ctx.strokeStyle = '#4e342e';
    ctx.lineWidth = 1 * elScale;
    ctx.strokeRect(0, -2 * elScale, doorSpan - 2 * elScale, 4 * elScale);

    // Brass hinge pin
    ctx.fillStyle = '#d97706';
    ctx.beginPath();
    ctx.arc(0, 0, 3.5 * elScale, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Right Batwing Door Panel pivoting around right hinge (Top-Down rotation)
    ctx.save();
    ctx.translate(cx + doorSpan, cy);
    ctx.rotate(-swingAng);
    ctx.fillStyle = '#8d6e63';
    ctx.fillRect(-(doorSpan - 2 * elScale), -2 * elScale, doorSpan - 2 * elScale, 4 * elScale);
    ctx.strokeStyle = '#4e342e';
    ctx.lineWidth = 1 * elScale;
    ctx.strokeRect(-(doorSpan - 2 * elScale), -2 * elScale, doorSpan - 2 * elScale, 4 * elScale);

    ctx.fillStyle = '#d97706';
    ctx.beginPath();
    ctx.arc(0, 0, 3.5 * elScale, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    ctx.restore();
});

    // 137: Windmill Water Pump
    reg(['ww_windmill_pump', 'item_137'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        var cx = W * 0.5, cy = H * 0.42;
        ctx.save();
        // Wooden lattice tower
        ctx.strokeStyle = '#5a4632';
        ctx.lineWidth = 4 * elScale;
        ctx.beginPath();
        // Legs
        ctx.moveTo(cx - 15 * elScale, cy);
        ctx.lineTo(cx - 45 * elScale, cy + 90 * elScale);
        ctx.moveTo(cx + 15 * elScale, cy);
        ctx.lineTo(cx + 45 * elScale, cy + 90 * elScale);
        // Cross braces
        for (var b = 1; b <= 3; b++) {
            var by = cy + b * 25 * elScale;
            var bw = (15 + b * 10) * elScale;
            ctx.moveTo(cx - bw, by);
            ctx.lineTo(cx + bw, by);
            ctx.moveTo(cx - bw, by - 25 * elScale);
            ctx.lineTo(cx + bw, by);
        }
        ctx.stroke();

        // Water trough below
        ctx.fillStyle = '#4a3728';
        ctx.fillRect(cx - 30 * elScale, cy + 85 * elScale, 60 * elScale, 18 * elScale);
        ctx.fillStyle = 'rgba(70, 140, 180, 0.7)';
        ctx.fillRect(cx - 26 * elScale, cy + 88 * elScale, 52 * elScale, 12 * elScale);

        // Plunging pump rod
        var pumpStroke = Math.sin(time * 6 * speed) * 8 * elScale;
        ctx.strokeStyle = '#999';
        ctx.lineWidth = 2.5 * elScale;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx, cy + 88 * elScale + pumpStroke);
        ctx.stroke();

        // Water splashing into trough
        if (pumpStroke > 2 * elScale) {
            for (var sp = 0; sp < 5; sp++) {
                var spx = cx + (Math.random() - 0.5) * 20 * elScale;
                var spy = cy + 86 * elScale - Math.random() * 8 * elScale;
                ctx.fillStyle = 'rgba(180, 225, 255, 0.8)';
                ctx.fillRect(spx, spy, 2 * elScale, 2 * elScale);
            }
        }

        // Spinning Windmill Head (16 galvanized steel blades)
        var spinAng = time * 4 * speed;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(spinAng);

        // Blade ring
        ctx.strokeStyle = '#717882';
        ctx.lineWidth = 2 * elScale;
        ctx.beginPath();
        ctx.arc(0, 0, 42 * elScale, 0, Math.PI * 2);
        ctx.stroke();

        // 16 Blades
        for (var bl = 0; bl < 16; bl++) {
            var bang = (bl / 16) * Math.PI * 2;
            ctx.save();
            ctx.rotate(bang);
            ctx.fillStyle = (bl % 2 === 0) ? '#8d96a3' : '#b2bcc9';
            ctx.beginPath();
            ctx.moveTo(-3 * elScale, 15 * elScale);
            ctx.lineTo(3 * elScale, 15 * elScale);
            ctx.lineTo(5 * elScale, 45 * elScale);
            ctx.lineTo(-5 * elScale, 45 * elScale);
            ctx.closePath();
            ctx.fill();
            ctx.restore();
        }

        // Central hub
        ctx.fillStyle = '#3a3e45';
        ctx.beginPath();
        ctx.arc(0, 0, 9 * elScale, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        ctx.restore();
    });

    // 138: Oil Derrick Rocker
    reg(['ww_oil_derrick_pump', 'item_138'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        var cx = W * 0.5, cy = H * 0.6;
        var rockAng = Math.sin(time * 2 * speed) * 0.22;

        ctx.save();
        // Samson post (A-frame pivot stand)
        ctx.strokeStyle = '#2b2c2d';
        ctx.lineWidth = 6 * elScale;
        ctx.beginPath();
        ctx.moveTo(cx, cy - 25 * elScale);
        ctx.lineTo(cx - 28 * elScale, cy + 45 * elScale);
        ctx.moveTo(cx, cy - 25 * elScale);
        ctx.lineTo(cx + 28 * elScale, cy + 45 * elScale);
        ctx.stroke();

        // Wellhead casing on the left
        var wellX = cx - 65 * elScale;
        ctx.fillStyle = '#1c1c1c';
        ctx.fillRect(wellX - 8 * elScale, cy + 20 * elScale, 16 * elScale, 25 * elScale);

        // Walking beam (rocking lever)
        ctx.save();
        ctx.translate(cx, cy - 25 * elScale);
        ctx.rotate(rockAng);

        ctx.fillStyle = '#3d3f42';
        ctx.strokeStyle = '#18191a';
        ctx.lineWidth = 2 * elScale;
        ctx.fillRect(-70 * elScale, -6 * elScale, 140 * elScale, 12 * elScale);
        ctx.strokeRect(-70 * elScale, -6 * elScale, 140 * elScale, 12 * elScale);

        // Horsehead curved nose on left tip
        ctx.fillStyle = '#222326';
        ctx.beginPath();
        ctx.arc(-70 * elScale, 0, 18 * elScale, Math.PI * 0.6, Math.PI * 1.4);
        ctx.lineTo(-70 * elScale, 0);
        ctx.fill();

        // Counterweight block on right tail
        ctx.fillStyle = '#1b1c1e';
        ctx.fillRect(52 * elScale, -12 * elScale, 18 * elScale, 24 * elScale);
        ctx.restore();

        // Polished sucker rod plunging into wellhead
        var rodY = cy - 25 * elScale - Math.sin(rockAng) * 70 * elScale;
        ctx.strokeStyle = '#c0c5cc';
        ctx.lineWidth = 3.5 * elScale;
        ctx.beginPath();
        ctx.moveTo(wellX, rodY);
        ctx.lineTo(wellX, cy + 30 * elScale);
        ctx.stroke();

        // Black oil sheen / drip around wellhead
        ctx.fillStyle = 'rgba(10, 10, 12, 0.9)';
        ctx.beginPath();
        ctx.ellipse(wellX, cy + 42 * elScale, 16 * elScale, 6 * elScale, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    });

// 139. Ghost Player Piano (Top-Down Battlemap View)
reg(['ww_player_piano', 'item_139'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.45;
    const pianoW = 105 * elScale, pianoD = 38 * elScale;

    ctx.save();
    // Upright piano cabinet top against the wall (Top-Down)
    ctx.fillStyle = '#3e1509';
    ctx.fillRect(cx - pianoW * 0.5, cy - pianoD * 0.5, pianoW, pianoD);
    ctx.strokeStyle = '#1a0803';
    ctx.lineWidth = 2 * elScale;
    ctx.strokeRect(cx - pianoW * 0.5, cy - pianoD * 0.5, pianoW, pianoD);

    // Music roll compartment glass cover on top
    ctx.fillStyle = '#1c0a04';
    ctx.fillRect(cx - 28 * elScale, cy - pianoD * 0.35, 56 * elScale, 14 * elScale);
    ctx.fillStyle = '#fef3c7'; // Perforated paper roll
    ctx.fillRect(cx - 24 * elScale, cy - pianoD * 0.3, 48 * elScale, 10 * elScale);

    // Protruding keyboard bed extending forward toward the player (Top-Down)
    const keyBedY = cy + pianoD * 0.5;
    const keyBedH = 16 * elScale;
    ctx.fillStyle = '#260d05';
    ctx.fillRect(cx - pianoW * 0.48, keyBedY, pianoW * 0.96, keyBedH);

    // 14 White keys depressing independently from above
    const numKeys = 14;
    const kw = (pianoW * 0.94) / numKeys;
    for (let k = 0; k < numKeys; k++) {
        const kx = cx - pianoW * 0.47 + k * kw;
        const isDepressed = Math.sin(time * 9 * speed + k * 1.6) > 0.35;
        ctx.fillStyle = isDepressed ? '#cbd5e1' : '#f8fafc';
        ctx.fillRect(kx, keyBedY + 1 * elScale, kw - 1 * elScale, keyBedH - 2 * elScale);
    }

    // Black sharps keys
    for (let bk = 0; bk < numKeys - 1; bk++) {
        if (bk === 2 || bk === 6 || bk === 9) continue;
        const bkx = cx - pianoW * 0.47 + bk * kw + kw * 0.65;
        const bIsDown = Math.cos(time * 9 * speed + bk * 2.1) > 0.45;
        ctx.fillStyle = bIsDown ? '#1e293b' : '#020617';
        ctx.fillRect(bkx, keyBedY + 1 * elScale, kw * 0.65, keyBedH * 0.58);
    }

    // Ghostly musical notes floating UP toward the camera (Forced Perspective)
    for (let n = 0; n < 4; n++) {
        const nt = (time * 1.4 + n * 0.65) % 1.5;
        const nx = cx - 25 * elScale + n * 18 * elScale + Math.sin(nt * 4) * 8 * elScale;
        const ny = keyBedY - nt * 35 * elScale;
        const nScale = 0.8 + nt * 0.8;
        const nAlpha = (1 - nt / 1.5) * 0.7 * intensity;

        ctx.fillStyle = 'rgba(165, 243, 252, ' + nAlpha + ')';
        ctx.font = 'bold ' + Math.floor(14 * elScale * nScale) + 'px sans-serif';
        ctx.fillText(n % 2 === 0 ? '\u266A' : '\u266B', nx, ny);
    }
    ctx.restore();
});

    // 140: Swaying Hangman Noose (Top-Down Battlemap View)
    reg(['ww_hangmans_noose', 'item_140'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        // Ominous slow wind sway in 2D overhead orbit
        const swayX = Math.sin(time * 1.8 * speed) * (18 * elScale);
        const swayY = Math.cos(time * 3.6 * speed) * (6 * elScale);
        const nx = cx + swayX;
        const ny = cy + swayY;

        ctx.save();

        // 1. Weathered gallows beam overhead (Top-Down crossbeam viewed from above)
        ctx.fillStyle = '#271c14';
        ctx.strokeStyle = '#18110c';
        ctx.lineWidth = 1.5 * elScale;
        ctx.fillRect(cx - 70 * elScale, cy - 35 * elScale, 140 * elScale, 16 * elScale);
        ctx.strokeRect(cx - 70 * elScale, cy - 35 * elScale, 140 * elScale, 16 * elScale);

        // Heavy iron eye-bolt on underside of beam
        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.arc(cx, cy - 27 * elScale, 4 * elScale, 0, Math.PI * 2);
        ctx.fill();

        // 2. Cast shadow of the swaying noose loop on the scaffold trapdoor planks below
        const shadowX = nx + 16 * elScale;
        const shadowY = ny + 20 * elScale;
        ctx.fillStyle = 'rgba(0, 0, 0, 0.35)';
        ctx.beginPath();
        ctx.ellipse(shadowX, shadowY, 18 * elScale, 24 * elScale, 0.15, 0, Math.PI * 2);
        ctx.fill();

        // 3. Braided hemp rope suspension dropping away towards camera
        ctx.strokeStyle = '#a1824a';
        ctx.lineWidth = 4 * elScale;
        ctx.beginPath();
        ctx.moveTo(cx, cy - 27 * elScale);
        ctx.lineTo(nx, ny - 24 * elScale);
        ctx.stroke();

        // 4. Hangman's 13-turn knot barrel seen from above
        ctx.fillStyle = '#785c32';
        ctx.strokeStyle = '#4a371c';
        ctx.lineWidth = 1.5 * elScale;
        ctx.beginPath();
        ctx.ellipse(nx, ny - 18 * elScale, 7 * elScale, 9 * elScale, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Knot coil ridges
        for (let k = -2; k <= 2; k++) {
            ctx.strokeStyle = '#c4aa79';
            ctx.lineWidth = 1.2 * elScale;
            ctx.beginPath();
            ctx.moveTo(nx - 6 * elScale, ny - 18 * elScale + k * 3 * elScale);
            ctx.lineTo(nx + 6 * elScale, ny - 18 * elScale + k * 3 * elScale);
            ctx.stroke();
        }

        // 5. Open teardrop noose loop seen from directly above (looking down onto scaffold trapdoor)
        ctx.strokeStyle = '#c2a67a';
        ctx.lineWidth = 4 * elScale;
        ctx.beginPath();
        ctx.ellipse(nx, ny + 8 * elScale, 16 * elScale, 22 * elScale, 0, 0, Math.PI * 2);
        ctx.stroke();

        // Inner rope texture
        ctx.strokeStyle = '#dfcaa2';
        ctx.lineWidth = 1.5 * elScale;
        ctx.beginPath();
        ctx.ellipse(nx, ny + 8 * elScale, 15 * elScale, 21 * elScale, 0, 0, Math.PI * 2);
        ctx.stroke();

        ctx.restore();
    });

    // 141: Unstable Ghost-Rock Ore
    reg(['ww_ghostrock_ore', 'item_141'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        var cx = W * 0.5, cy = H * 0.52;
        ctx.save();
        // Pulsing radioactive violet aura
        var pulse = Math.sin(time * 5 * speed) * 0.25 + 0.75;
        var aura = ctx.createRadialGradient(cx, cy, 10 * elScale, cx, cy, 65 * elScale * pulse * intensity);
        aura.addColorStop(0, 'rgba(180, 50, 255, ' + (0.5 * intensity) + ')');
        aura.addColorStop(0.6, 'rgba(120, 0, 220, ' + (0.2 * intensity) + ')');
        aura.addColorStop(1, 'rgba(80, 0, 150, 0)');
        ctx.fillStyle = aura;
        ctx.beginPath();
        ctx.arc(cx, cy, 65 * elScale * pulse * intensity, 0, Math.PI * 2);
        ctx.fill();

        // Jagged raw mineral chunk facets
        var pts = [
            [-32, 10], [-20, -25], [5, -35], [30, -18],
            [35, 12], [18, 30], [-15, 28]
        ];
        ctx.fillStyle = '#1c1724'; // Pitch black coal base
        ctx.strokeStyle = '#4a2b6d';
        ctx.lineWidth = 2 * elScale;
        ctx.beginPath();
        ctx.moveTo(cx + pts[0][0] * elScale, cy + pts[0][1] * elScale);
        for (var p = 1; p < pts.length; p++) {
            ctx.lineTo(cx + pts[p][0] * elScale, cy + pts[p][1] * elScale);
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Glowing screaming violet veins
        ctx.strokeStyle = 'rgba(215, 95, 255, ' + pulse + ')';
        ctx.lineWidth = 2.5 * elScale;
        ctx.beginPath();
        ctx.moveTo(cx - 20 * elScale, cy - 25 * elScale);
        ctx.lineTo(cx - 5 * elScale, cy + 2 * elScale);
        ctx.lineTo(cx + 18 * elScale, cy + 30 * elScale);
        ctx.moveTo(cx - 5 * elScale, cy + 2 * elScale);
        ctx.lineTo(cx + 30 * elScale, cy - 18 * elScale);
        ctx.stroke();

        // Electric arc crackles leaping from facets
        for (var a = 0; a < 3; a++) {
            var arcAng = time * 8 + a * 2.1;
            var ax = cx + Math.cos(arcAng) * 28 * elScale;
            var ay = cy + Math.sin(arcAng) * 25 * elScale;
            ctx.strokeStyle = '#f3c7ff';
            ctx.lineWidth = 1.5 * elScale;
            ctx.beginPath();
            ctx.moveTo(ax, ay);
            ctx.lineTo(ax + Math.cos(arcAng) * 16 * elScale, ay + Math.sin(arcAng) * 16 * elScale);
            ctx.stroke();
        }

        // Tiny floating levitating rock shards
        for (var s = 0; s < 4; s++) {
            var st = time * 2 + s * 1.5;
            var sx = cx + Math.sin(st) * 40 * elScale;
            var sy = cy + Math.cos(st * 0.8) * 35 * elScale;
            ctx.fillStyle = '#2d183d';
            ctx.fillRect(sx, sy, 4 * elScale, 4 * elScale);
        }
        ctx.restore();
    });

    // 142: Cursed Self-Shuffling Deck
    reg(['ww_cursed_pokerdeck', 'item_142'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        var cx = W * 0.5, cy = H * 0.52;
        var levitate = Math.sin(time * 3 * speed) * 8 * elScale;
        cy += levitate;

        ctx.save();
        // Green felt poker table surface preview
        ctx.fillStyle = 'rgba(18, 56, 30, 0.4)';
        ctx.beginPath();
        ctx.ellipse(cx, cy + 35 * elScale, 60 * elScale, 18 * elScale, 0, 0, Math.PI * 2);
        ctx.fill();

        // Riffle shuffle cycle: 2 stacks parting and cascading cards
        var riffle = Math.sin(time * 4 * speed);
        var split = Math.abs(riffle) * 22 * elScale;

        // Left card stack
        ctx.save();
        ctx.translate(cx - split, cy);
        ctx.rotate(-riffle * 0.15);
        ctx.fillStyle = '#eee8d5';
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 1 * elScale;
        ctx.fillRect(-14 * elScale, -22 * elScale, 28 * elScale, 44 * elScale);
        ctx.strokeRect(-14 * elScale, -22 * elScale, 28 * elScale, 44 * elScale);
        // Red card back pattern
        ctx.fillStyle = '#a62424';
        ctx.fillRect(-11 * elScale, -19 * elScale, 22 * elScale, 38 * elScale);
        ctx.restore();

        // Right card stack
        ctx.save();
        ctx.translate(cx + split, cy);
        ctx.rotate(riffle * 0.15);
        ctx.fillStyle = '#eee8d5';
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 1 * elScale;
        ctx.fillRect(-14 * elScale, -22 * elScale, 28 * elScale, 44 * elScale);
        ctx.strokeRect(-14 * elScale, -22 * elScale, 28 * elScale, 44 * elScale);
        ctx.fillStyle = '#a62424';
        ctx.fillRect(-11 * elScale, -19 * elScale, 22 * elScale, 38 * elScale);
        ctx.restore();

        // Flying cards bridging in midair
        for (var c = 0; c < 5; c++) {
            var cProg = (time * 6 + c * 0.2) % 1;
            var arcX = cx + (cProg - 0.5) * 36 * elScale;
            var arcY = cy - 25 * elScale - Math.sin(cProg * Math.PI) * 18 * elScale;
            ctx.save();
            ctx.translate(arcX, arcY);
            ctx.rotate((cProg - 0.5) * 1.2);
            ctx.fillStyle = '#fffdf7';
            ctx.fillRect(-7 * elScale, -11 * elScale, 14 * elScale, 22 * elScale);
            // Ace of Spades pip
            ctx.fillStyle = (c % 2 === 0) ? '#111' : '#b81414';
            ctx.font = Math.floor(8 * elScale) + 'px sans-serif';
            ctx.fillText(c % 2 === 0 ? '\u2660' : '\u2665', -4 * elScale, 2 * elScale);
            ctx.restore();
        }

        // Cursed green ectoplasmic wisps
        ctx.strokeStyle = 'rgba(70, 255, 140, ' + (0.35 * intensity) + ')';
        ctx.lineWidth = 1.5 * elScale;
        ctx.beginPath();
        ctx.arc(cx, cy, 38 * elScale, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
    });

    // 143: Medium's Crystal Ball
    reg(['ww_medium_crystalball', 'item_143'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        var cx = W * 0.5, cy = H * 0.5;
        ctx.save();
        // Velvet tablecloth drape
        ctx.fillStyle = '#30132b';
        ctx.beginPath();
        ctx.ellipse(cx, cy + 45 * elScale, 55 * elScale, 18 * elScale, 0, 0, Math.PI * 2);
        ctx.fill();

        // Ornate brass clawfoot stand
        ctx.strokeStyle = '#c49a37';
        ctx.lineWidth = 4 * elScale;
        ctx.beginPath();
        ctx.moveTo(cx - 24 * elScale, cy + 38 * elScale);
        ctx.lineTo(cx, cy + 24 * elScale);
        ctx.lineTo(cx + 24 * elScale, cy + 38 * elScale);
        ctx.moveTo(cx, cy + 24 * elScale);
        ctx.lineTo(cx, cy + 42 * elScale);
        ctx.stroke();

        // Crystal sphere outer glass
        var radius = 34 * elScale;
        var sphereGrad = ctx.createRadialGradient(cx - 10 * elScale, cy - 12 * elScale, 4, cx, cy, radius);
        sphereGrad.addColorStop(0, 'rgba(240, 245, 255, 0.85)');
        sphereGrad.addColorStop(0.5, 'rgba(180, 160, 220, 0.4)');
        sphereGrad.addColorStop(0.9, 'rgba(80, 50, 120, 0.6)');
        sphereGrad.addColorStop(1, 'rgba(40, 20, 60, 0.85)');
        ctx.fillStyle = sphereGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fill();

        // Swirling internal smoky desert visions
        ctx.save();
        ctx.beginPath();
        ctx.arc(cx, cy, radius - 2 * elScale, 0, Math.PI * 2);
        ctx.clip();

        for (var s = 0; s < 4; s++) {
            var sAng = time * (1.2 + s * 0.4) + s * 1.5;
            var sx = cx + Math.cos(sAng) * (10 + s * 4) * elScale;
            var sy = cy + Math.sin(sAng) * (8 + s * 3) * elScale;
            var smkGrad = ctx.createRadialGradient(sx, sy, 2, sx, sy, 18 * elScale);
            smkGrad.addColorStop(0, s % 2 === 0 ? 'rgba(255, 180, 80, 0.6)' : 'rgba(160, 80, 255, 0.6)');
            smkGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
            ctx.fillStyle = smkGrad;
            ctx.beginPath();
            ctx.arc(sx, sy, 18 * elScale, 0, Math.PI * 2);
            ctx.fill();
        }

        // Fleeting spectral skull apparition in crystal
        if (Math.sin(time * 2) > 0.3) {
            ctx.fillStyle = 'rgba(230, 220, 255, 0.25)';
            ctx.beginPath();
            ctx.arc(cx, cy - 2 * elScale, 8 * elScale, 0, Math.PI * 2);
            ctx.fill();
            // Eye sockets
            ctx.fillStyle = 'rgba(20, 10, 30, 0.4)';
            ctx.fillRect(cx - 5 * elScale, cy - 3 * elScale, 3 * elScale, 3 * elScale);
            ctx.fillRect(cx + 2 * elScale, cy - 3 * elScale, 3 * elScale, 3 * elScale);
        }
        ctx.restore();

        // Bright curved glass glare
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.lineWidth = 2.5 * elScale;
        ctx.beginPath();
        ctx.arc(cx - 8 * elScale, cy - 10 * elScale, 18 * elScale, -1.8, -0.6);
        ctx.stroke();

        ctx.restore();
    });

    // 144: Spinning Gatling Barrels
    reg(['ww_gatling_barrels', 'item_144'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        var cx = W * 0.45, cy = H * 0.52;
        var spinAng = time * 25 * speed;

        ctx.save();
        // Heavy brass gun frame & receiver
        ctx.fillStyle = '#6e511b';
        ctx.strokeStyle = '#3d2b09';
        ctx.lineWidth = 2 * elScale;
        ctx.fillRect(cx - 55 * elScale, cy - 22 * elScale, 45 * elScale, 44 * elScale);
        ctx.strokeRect(cx - 55 * elScale, cy - 22 * elScale, 45 * elScale, 44 * elScale);

        // Hand crank spinning on side
        var crankAng = time * 20 * speed;
        ctx.strokeStyle = '#222';
        ctx.lineWidth = 3 * elScale;
        ctx.beginPath();
        ctx.moveTo(cx - 35 * elScale, cy);
        ctx.lineTo(cx - 35 * elScale + Math.cos(crankAng) * 14 * elScale, cy + Math.sin(crankAng) * 14 * elScale);
        ctx.stroke();

        // 6 Heavy rifled bronze barrels extending horizontally
        var numBarrels = 6;
        for (var b = 0; b < numBarrels; b++) {
            var bAng = spinAng + (b / numBarrels) * Math.PI * 2;
            var by = cy + Math.sin(bAng) * 16 * elScale;
            var depth = Math.cos(bAng); // Front/back layering

            ctx.fillStyle = depth > 0 ? '#b8860b' : '#6b4e07';
            ctx.fillRect(cx - 10 * elScale, by - 3 * elScale, 55 * elScale, 6 * elScale);
            // Barrel muzzle ring
            ctx.fillStyle = '#222';
            ctx.fillRect(cx + 43 * elScale, by - 3 * elScale, 3 * elScale, 6 * elScale);
        }

        // Circular barrel support plates
        ctx.fillStyle = '#8a6410';
        ctx.fillRect(cx + 12 * elScale, cy - 20 * elScale, 6 * elScale, 40 * elScale);
        ctx.fillRect(cx + 40 * elScale, cy - 20 * elScale, 6 * elScale, 40 * elScale);

        // Muzzle flashes with gas rings from active firing barrel
        var flash = Math.sin(time * 30) > 0.2;
        if (flash) {
            var fx = cx + 46 * elScale;
            var fy = cy - 8 * elScale;

            // Flash starburst
            ctx.fillStyle = '#fff4a3';
            ctx.beginPath();
            ctx.arc(fx + 8 * elScale, fy, 10 * elScale * intensity, 0, Math.PI * 2);
            ctx.fill();

            // Expanding gunpowder flame cone
            var flGrad = ctx.createLinearGradient(fx, fy, fx + 35 * elScale, fy);
            flGrad.addColorStop(0, 'rgba(255, 230, 80, 0.95)');
            flGrad.addColorStop(0.5, 'rgba(255, 110, 10, 0.8)');
            flGrad.addColorStop(1, 'rgba(255, 0, 0, 0)');
            ctx.fillStyle = flGrad;
            ctx.beginPath();
            ctx.moveTo(fx, fy - 6 * elScale);
            ctx.lineTo(fx + 35 * elScale * intensity, fy - 14 * elScale);
            ctx.lineTo(fx + 35 * elScale * intensity, fy + 14 * elScale);
            ctx.lineTo(fx, fy + 6 * elScale);
            ctx.closePath();
            ctx.fill();

            // Ejected spinning brass cartridge casings
            for (var c = 0; c < 3; c++) {
                var cTime = (time * 5 + c * 0.3) % 1;
                var cxPos = cx - 18 * elScale + cTime * 20 * elScale;
                var cyPos = cy - 25 * elScale - Math.sin(cTime * Math.PI) * 15 * elScale + cTime * 35 * elScale;
                ctx.fillStyle = '#e6b422';
                ctx.fillRect(cxPos, cyPos, 5 * elScale, 2.5 * elScale);
            }
        }
        ctx.restore();
    });

// 145. Erupting Hot Geyser (Top-Down Battlemap View)
reg(['ww_geothermal_geyser', 'item_145'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    ctx.save();
    // Fissure crater rim with sulfur crust rings (Top-Down)
    ctx.fillStyle = '#453a29';
    ctx.beginPath();
    ctx.arc(cx, cy, 60 * elScale, 0, Math.PI * 2);
    ctx.fill();

    // Yellow sulfur mineral crust
    ctx.strokeStyle = '#ca8a04';
    ctx.lineWidth = 5 * elScale;
    ctx.beginPath();
    ctx.arc(cx, cy, 48 * elScale, 0, Math.PI * 2);
    ctx.stroke();

    // Boiling deep vent opening
    ctx.fillStyle = '#171410';
    ctx.beginPath();
    ctx.arc(cx, cy, 26 * elScale, 0, Math.PI * 2);
    ctx.fill();

    // Eruption cycle: violent boiling water column erupting UP toward camera
    const surge = Math.sin(time * 2.2 * speed);
    const isErupting = surge > 0;
    const eruptScale = isErupting ? (0.5 + surge * 1.8) : 0.3;

    // Expanding scalding foam blast ring
    const blastGrad = ctx.createRadialGradient(cx, cy, 5 * elScale, cx, cy, 50 * elScale * eruptScale);
    blastGrad.addColorStop(0, 'rgba(255, 255, 255, ' + (0.8 * intensity) + ')');
    blastGrad.addColorStop(0.5, 'rgba(186, 230, 253, ' + (0.8 * intensity) + ')');
    blastGrad.addColorStop(1, 'rgba(186, 230, 253, 0)');
    ctx.fillStyle = blastGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, 50 * elScale * eruptScale, 0, Math.PI * 2);
    ctx.fill();

    // Radial boiling water droplets spraying in 360 degrees
    if (isErupting) {
        for (let p = 0; p < 18; p++) {
            const pt = (time * 3 + p * 0.22) % 1;
            const pAng = (p / 18) * Math.PI * 2 + Math.sin(p);
            const pDist = (20 + pt * 65 * eruptScale) * elScale;
            const px = cx + Math.cos(pAng) * pDist;
            const py = cy + Math.sin(pAng) * pDist;
            const pr = (2 + (1 - pt) * 4) * elScale;
            ctx.fillStyle = 'rgba(240, 249, 255, ' + (1 - pt) * 0.8 + ')';
            ctx.beginPath();
            ctx.arc(px, py, pr, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    ctx.restore();
});

    // 146: Fluttering Wanted Posters
    reg(['ww_wanted_posters', 'item_146'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        var cx = W * 0.5, cy = H * 0.5;
        ctx.save();
        // Weathered pine sheriff's office bulletin board
        ctx.fillStyle = '#543b24';
        ctx.strokeStyle = '#2b1b0e';
        ctx.lineWidth = 3 * elScale;
        ctx.fillRect(cx - 60 * elScale, cy - 55 * elScale, 120 * elScale, 110 * elScale);
        ctx.strokeRect(cx - 60 * elScale, cy - 55 * elScale, 120 * elScale, 110 * elScale);

        // Poster 1: Back/tilted poster
        ctx.save();
        ctx.translate(cx + 18 * elScale, cy - 8 * elScale);
        ctx.rotate(0.12);
        ctx.fillStyle = '#cfbe97';
        ctx.fillRect(-22 * elScale, -30 * elScale, 44 * elScale, 60 * elScale);
        ctx.restore();

        // Poster 2: Main WANTED poster with fluttering bottom corner
        var flap = Math.sin(time * 8 * speed) * (8 + rough * 6) * elScale;
        ctx.save();
        ctx.translate(cx - 15 * elScale, cy - 5 * elScale);
        ctx.rotate(-0.06);

        // Paper body
        ctx.fillStyle = '#f2e4c9';
        ctx.strokeStyle = '#3b2f21';
        ctx.lineWidth = 1 * elScale;
        ctx.beginPath();
        ctx.moveTo(-24 * elScale, -35 * elScale);
        ctx.lineTo(24 * elScale, -35 * elScale);
        ctx.lineTo(24 * elScale, 30 * elScale);
        ctx.lineTo(-24 * elScale + flap, 35 * elScale - Math.abs(flap) * 0.3);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // 'WANTED' bold headline
        ctx.fillStyle = '#1c1712';
        ctx.font = 'bold ' + Math.floor(7 * elScale) + 'px serif';
        ctx.textAlign = 'center';
        ctx.fillText('WANTED', 0, -25 * elScale);

        // Rough outlaw bust sketch
        ctx.fillStyle = '#3a3127';
        ctx.beginPath();
        // Hat
        ctx.fillRect(-10 * elScale, -19 * elScale, 20 * elScale, 3 * elScale);
        ctx.fillRect(-6 * elScale, -24 * elScale, 12 * elScale, 5 * elScale);
        // Face & shoulders
        ctx.arc(0, -12 * elScale, 5 * elScale, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(0, -3 * elScale, 9 * elScale, 5 * elScale, 0, 0, Math.PI);
        ctx.fill();

        // Reward text lines
        ctx.strokeStyle = '#524536';
        ctx.lineWidth = 1 * elScale;
        ctx.beginPath();
        ctx.moveTo(-16 * elScale, 6 * elScale);
        ctx.lineTo(16 * elScale, 6 * elScale);
        ctx.moveTo(-12 * elScale, 12 * elScale);
        ctx.lineTo(12 * elScale, 12 * elScale);
        ctx.stroke();

        ctx.fillStyle = '#8f1c1c';
        ctx.font = 'bold ' + Math.floor(6 * elScale) + 'px sans-serif';
        ctx.fillText('$5,000', 0, 22 * elScale);

        // Iron tack holding top
        ctx.fillStyle = '#111';
        ctx.beginPath();
        ctx.arc(0, -32 * elScale, 2.5 * elScale, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        ctx.restore();
    });

// 147. Hitching-Post Mustang (Top-Down Battlemap View)
reg(['ww_hitching_mustang', 'item_147'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.48, cy = H * 0.52;
    ctx.save();
    // Wooden hitching rail post on the ground (Top-Down)
    ctx.fillStyle = '#452a17';
    ctx.fillRect(cx - 50 * elScale, cy - 35 * elScale, 100 * elScale, 8 * elScale);

    // Tied leather reins
    ctx.strokeStyle = '#27170c';
    ctx.lineWidth = 2 * elScale;
    ctx.beginPath();
    ctx.moveTo(cx - 10 * elScale, cy - 35 * elScale);
    ctx.lineTo(cx - 6 * elScale, cy - 20 * elScale);
    ctx.stroke();

    // Mustang Pony viewed from 90 DEGREES DIRECTLY OVERHEAD (Top-Down)
    ctx.save();
    ctx.translate(cx, cy);

    // Tail swishing motion
    const tailSwish = Math.sin(time * 4 * speed) * (0.35);

    // Muscular Chestnut Body (Overhead Torso Oval)
    ctx.fillStyle = '#7c2d12'; // Rich chestnut coat
    ctx.beginPath();
    ctx.ellipse(0, 0, 16 * elScale, 28 * elScale, 0, 0, Math.PI * 2);
    ctx.fill();

    // Saddle / saddle-blanket on back
    ctx.fillStyle = '#1c1917';
    ctx.fillRect(-13 * elScale, -8 * elScale, 26 * elScale, 16 * elScale);
    ctx.fillStyle = '#b45309';
    ctx.fillRect(-11 * elScale, -6 * elScale, 22 * elScale, 12 * elScale);

    // Arched neck & head extending forward toward hitching post
    const headBob = Math.sin(time * 2.5 * speed) * (2 * elScale);
    ctx.fillStyle = '#7c2d12';
    ctx.beginPath();
    ctx.ellipse(0, -22 * elScale + headBob, 8 * elScale, 12 * elScale, 0, 0, Math.PI * 2);
    ctx.fill();

    // Alert twitching horse ears
    ctx.fillStyle = '#451a03';
    ctx.beginPath();
    ctx.moveTo(-5 * elScale, -26 * elScale + headBob); ctx.lineTo(-8 * elScale, -32 * elScale + headBob); ctx.lineTo(-3 * elScale, -28 * elScale + headBob);
    ctx.moveTo(5 * elScale, -26 * elScale + headBob); ctx.lineTo(8 * elScale, -32 * elScale + headBob); ctx.lineTo(3 * elScale, -28 * elScale + headBob);
    ctx.fill();

    // Dark mane running down the spine
    ctx.fillStyle = '#18181b';
    ctx.fillRect(-2 * elScale, -24 * elScale + headBob, 4 * elScale, 16 * elScale);

    // Black tail flowing behind haunches
    ctx.save();
    ctx.translate(0, 26 * elScale);
    ctx.rotate(tailSwish);
    ctx.fillStyle = '#18181b';
    ctx.beginPath();
    ctx.moveTo(-3 * elScale, 0);
    ctx.lineTo(3 * elScale, 0);
    ctx.lineTo(5 * elScale, 24 * elScale);
    ctx.lineTo(-5 * elScale, 24 * elScale);
    ctx.closePath();
    ctx.fill();
    ctx.restore();

    ctx.restore();

    // Dust puff from hoof pawing the dirt
    if (Math.sin(time * 5 * speed) > 0.6) {
        ctx.fillStyle = 'rgba(217, 185, 155, 0.45)';
        ctx.beginPath();
        ctx.arc(cx - 12 * elScale, cy - 10 * elScale, 6 * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
    ctx.restore();
});

    // 148: Spit-Roast Campfire
    reg(['ww_spitroast_rabbit', 'item_148'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        var cx = W * 0.5, cy = H * 0.55;
        ctx.save();
        // Y-shaped wooden support stakes on each side
        ctx.strokeStyle = '#3b2816';
        ctx.lineWidth = 4 * elScale;
        // Left Y
        ctx.beginPath();
        ctx.moveTo(cx - 45 * elScale, cy + 30 * elScale);
        ctx.lineTo(cx - 45 * elScale, cy - 10 * elScale);
        ctx.lineTo(cx - 52 * elScale, cy - 20 * elScale);
        ctx.moveTo(cx - 45 * elScale, cy - 10 * elScale);
        ctx.lineTo(cx - 38 * elScale, cy - 20 * elScale);
        // Right Y
        ctx.moveTo(cx + 45 * elScale, cy + 30 * elScale);
        ctx.lineTo(cx + 45 * elScale, cy - 10 * elScale);
        ctx.lineTo(cx + 38 * elScale, cy - 20 * elScale);
        ctx.moveTo(cx + 45 * elScale, cy - 10 * elScale);
        ctx.lineTo(cx + 52 * elScale, cy - 20 * elScale);
        ctx.stroke();

        // Bed of glowing coals beneath
        for (var c = 0; c < 12; c++) {
            var cxpos = cx - 30 * elScale + c * 5.5 * elScale;
            var cPulse = Math.sin(time * 4 + c) * 0.3 + 0.7;
            ctx.fillStyle = 'rgba(255, ' + Math.floor(100 * cPulse) + ', 10, 0.85)';
            ctx.beginPath();
            ctx.arc(cxpos, cy + 22 * elScale, (4 + (c % 3) * 2) * elScale, 0, Math.PI * 2);
            ctx.fill();
        }

        // Horizontal iron spit skewer
        ctx.strokeStyle = '#222';
        ctx.lineWidth = 3 * elScale;
        ctx.beginPath();
        ctx.moveTo(cx - 55 * elScale, cy - 12 * elScale);
        ctx.lineTo(cx + 55 * elScale, cy - 12 * elScale);
        ctx.stroke();

        // Slow spit turn angle
        var rotAng = time * 2 * speed;
        var rabbitScaleY = Math.cos(rotAng);

        // Whole cleaned rabbit roasting golden brown
        ctx.save();
        ctx.translate(cx, cy - 12 * elScale);
        ctx.scale(1, rabbitScaleY);

        ctx.fillStyle = rabbitScaleY > 0 ? '#99582a' : '#6b3815'; // Crispy roast brown
        ctx.strokeStyle = '#42210b';
        ctx.lineWidth = 1.5 * elScale;

        // Torso
        ctx.beginPath();
        ctx.ellipse(0, 0, 24 * elScale, 11 * elScale, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Bound roasting legs
        ctx.fillRect(-22 * elScale, -6 * elScale, 12 * elScale, 5 * elScale);
        ctx.fillRect(12 * elScale, -6 * elScale, 12 * elScale, 5 * elScale);
        ctx.restore();

        // Sizzling fat drip popping into coals
        var dripT = (time * 3) % 1;
        var dripY = cy - 10 * elScale + dripT * 32 * elScale;
        ctx.fillStyle = 'rgba(255, 230, 150, ' + (1 - dripT) + ')';
        ctx.fillRect(cx + 4 * elScale, dripY, 1.5 * elScale, 3 * elScale);
        if (dripT > 0.9) {
            // Sizzle flare
            ctx.fillStyle = '#ff7700';
            ctx.beginPath();
            ctx.arc(cx + 4 * elScale, cy + 22 * elScale, 4 * elScale, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
    });

    // 149: Banging Town Shutter
    reg(['ww_creaking_shutter', 'item_149'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        var cx = W * 0.5, cy = H * 0.5;
        // Violent slamming against wall and rebounding in gale
        var cycle = (time * 3 * speed) % (Math.PI * 2);
        var bangAngle = Math.abs(Math.sin(cycle));
        var isBanging = bangAngle < 0.12;

        ctx.save();
        // Weathered ghost-town timber wall
        ctx.fillStyle = '#4a3a2a';
        ctx.fillRect(cx - 60 * elScale, cy - 55 * elScale, 120 * elScale, 110 * elScale);

        // Window opening (dark interior)
        var wx = cx - 20 * elScale, wy = cy - 35 * elScale;
        var ww = 45 * elScale, wh = 70 * elScale;
        ctx.fillStyle = '#14110e';
        ctx.fillRect(wx, wy, ww, wh);
        ctx.strokeStyle = '#2b2117';
        ctx.lineWidth = 3 * elScale;
        ctx.strokeRect(wx, wy, ww, wh);

        // Banging Shutter hinged on left side of window
        ctx.save();
        ctx.translate(wx, cy);
        var shutterScaleX = Math.cos(bangAngle * 1.5);
        ctx.scale(shutterScaleX, 1);

        ctx.fillStyle = '#6e553d'; // Weathered cedar
        ctx.strokeStyle = '#241a11';
        ctx.lineWidth = 2 * elScale;
        ctx.fillRect(-ww, -wh * 0.5, ww, wh);
        ctx.strokeRect(-ww, -wh * 0.5, ww, wh);

        // Louver slats
        for (var s = -25; s <= 25; s += 8) {
            ctx.strokeStyle = '#4a3826';
            ctx.lineWidth = 1.5 * elScale;
            ctx.beginPath();
            ctx.moveTo(-ww + 4 * elScale, s * elScale);
            ctx.lineTo(-4 * elScale, s * elScale);
            ctx.stroke();
        }

        // Rusty iron hinges
        ctx.fillStyle = '#30261e';
        ctx.fillRect(-6 * elScale, -wh * 0.4, 10 * elScale, 6 * elScale);
        ctx.fillRect(-6 * elScale, wh * 0.35, 10 * elScale, 6 * elScale);
        ctx.restore();

        // Dust shockwave puff when shutter bangs shut against wall
        if (isBanging) {
            for (var d = 0; d < 6; d++) {
                var dx = wx - ww + (Math.random() - 0.5) * 12 * elScale;
                var dy = cy + (Math.random() - 0.5) * 45 * elScale;
                ctx.fillStyle = 'rgba(210, 190, 160, 0.5)';
                ctx.beginPath();
                ctx.arc(dx, dy, (2 + Math.random() * 4) * elScale, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        ctx.restore();
    });

// 150. Boot-Hill Raven & Grave Cross (Top-Down Battlemap View)
reg(['ww_boot_hill_crow', 'item_150'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.52;
    ctx.save();
    // Grave dirt mound oval on desert earth
    ctx.fillStyle = '#453a29';
    ctx.beginPath();
    ctx.ellipse(cx, cy, 55 * elScale, 30 * elScale, 0, 0, Math.PI * 2);
    ctx.fill();

    // Wooden grave cross viewed from overhead (Top-Down T-cross shape shadow)
    ctx.fillStyle = '#292524';
    // Cross horizontal arm
    ctx.fillRect(cx - 30 * elScale, cy - 8 * elScale, 24 * elScale, 5 * elScale);
    // Cross vertical post
    ctx.fillRect(cx - 20 * elScale, cy - 18 * elScale, 5 * elScale, 26 * elScale);

    // Black Raven hopping and pecking on the dirt viewed from DIRECTLY OVERHEAD (Top-Down)
    const peckCycle = Math.sin(time * 3 * speed);
    const isPecking = peckCycle > 0.4;
    const rx = cx + 16 * elScale;
    const ry = cy + 4 * elScale;

    ctx.save();
    ctx.translate(rx, ry);

    // Glossy jet-black body & folded wings
    ctx.fillStyle = '#09090b';
    ctx.beginPath();
    ctx.ellipse(0, 0, 9 * elScale, 15 * elScale, 0.2, 0, Math.PI * 2);
    ctx.fill();

    // Glossy wing feathers sheen
    ctx.strokeStyle = '#27272a';
    ctx.lineWidth = 1 * elScale;
    ctx.beginPath();
    ctx.ellipse(-2 * elScale, 0, 6 * elScale, 12 * elScale, 0.2, 0, Math.PI * 2);
    ctx.stroke();

    // Tail feathers extending backward
    ctx.fillStyle = '#18181b';
    ctx.beginPath();
    ctx.moveTo(-4 * elScale, 12 * elScale);
    ctx.lineTo(4 * elScale, 12 * elScale);
    ctx.lineTo(6 * elScale, 24 * elScale);
    ctx.lineTo(-6 * elScale, 24 * elScale);
    ctx.closePath();
    ctx.fill();

    // Head bobbing down to peck dirt
    const headOffset = isPecking ? 4 * elScale : 0;
    ctx.fillStyle = '#09090b';
    ctx.beginPath();
    ctx.arc(0, -14 * elScale + headOffset, 5 * elScale, 0, Math.PI * 2);
    ctx.fill();

    // Sharp beak pointing forward
    ctx.fillStyle = '#27272a';
    ctx.beginPath();
    ctx.moveTo(-2 * elScale, -18 * elScale + headOffset);
    ctx.lineTo(2 * elScale, -18 * elScale + headOffset);
    ctx.lineTo(0, -26 * elScale + headOffset);
    ctx.closePath();
    ctx.fill();

    ctx.restore();

    // Pecking dust specks
    if (isPecking) {
        ctx.fillStyle = 'rgba(217, 185, 155, 0.6)';
        ctx.fillRect(rx - 2 * elScale, ry - 22 * elScale, 2 * elScale, 2 * elScale);
    }
    ctx.restore();
});



})();
