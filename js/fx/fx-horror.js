/**
 * AetherTable VTT - Call of Cthulhu & Gothic Horror FX (75 Unique Elements)
 * Procedural Canvas Renderers for Elements 226 through 300.
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
// A. LINEAR MOTION (226 - 250) - Gothic Horror & Call of Cthulhu
// =========================================================================

// 226. Rotating Lighthouse Fog Beam (Top-Down Battlemap View)
reg(['ch_lighthouse_beam', 'item_226'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.15, cy = H * 0.5;
    const angle = (time * 0.85 * speed) % (Math.PI * 2);
    const beamLen = W * 0.95;

    // 1. Sweeping 360-deg Fresnel lens beam cutting through sea fog
    FX.drawVolumetricCone(ctx, cx, cy, angle - 0.2, beamLen, 0.4 + rough * 0.12, `rgba(254, 240, 138, ${0.9 * intensity})`, 'rgba(234, 179, 8, 0)');

    // 2. Swirling coastal harbor fog motes illuminated by the passing beam
    for (let f = 0; f < 16; f++) {
        const dist = 50 + ((f * 67 + time * 35 * speed) % (beamLen * 0.85));
        const fogAng = (angle + (f - 8) * 0.08);
        const fx = cx + Math.cos(fogAng) * dist;
        const fy = cy + Math.sin(fogAng) * dist;
        const fogR = (20 + (f % 5) * 8 + rough * 15) * elScale;
        ctx.fillStyle = `rgba(226, 232, 240, ${(0.08 + (f % 3) * 0.04) * intensity})`;
        ctx.beginPath();
        ctx.arc(fx, fy, fogR, 0, Math.PI * 2);
        ctx.fill();
    }

    // 3. Top-Down Circular Stone Lighthouse Tower & Lantern Room (90-deg Overhead)
    // Outer stone gallery walkway ring
    ctx.fillStyle = '#1e293b';
    ctx.beginPath();
    ctx.arc(cx, cy, 32 * elScale, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 3 * elScale;
    ctx.stroke();

    // Iron gallery perimeter safety railing
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 1.5 * elScale;
    ctx.beginPath();
    ctx.arc(cx, cy, 30 * elScale, 0, Math.PI * 2);
    ctx.stroke();

    // Central glazed lantern housing ring with inner glow
    const lanternGlow = ctx.createRadialGradient(cx, cy, 2, cx, cy, 20 * elScale);
    lanternGlow.addColorStop(0, `rgba(255, 255, 255, ${0.95 * intensity})`);
    lanternGlow.addColorStop(0.4, `rgba(254, 240, 138, ${0.85 * intensity})`);
    lanternGlow.addColorStop(0.8, `rgba(234, 179, 8, ${0.4 * intensity})`);
    lanternGlow.addColorStop(1, 'rgba(15, 23, 42, 0.8)');
    ctx.fillStyle = lanternGlow;
    ctx.beginPath();
    ctx.arc(cx, cy, 20 * elScale, 0, Math.PI * 2);
    ctx.fill();

    // Conical copper/lead roof cap with radiating ribs seen from above
    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    ctx.arc(cx, cy, 14 * elScale, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 1.5 * elScale;
    ctx.stroke();

    // 8 radial copper roof seam ribs
    for (let r = 0; r < 8; r++) {
        const rAng = (r / 8) * Math.PI * 2;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(rAng) * 14 * elScale, cy + Math.sin(rAng) * 14 * elScale);
        ctx.stroke();
    }

    // Central brass lightning-rod finial ball
    ctx.fillStyle = '#d97706';
    ctx.beginPath();
    ctx.arc(cx, cy, 4 * elScale, 0, Math.PI * 2);
    ctx.fill();
});

// 227. Dying Streetlamp Chain (extinguishing one by one down an alley - Top-Down Battlemap View)
reg(['ch_flickering_streetlamps', 'ch_flickering_streetlamp', 'item_227'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numLamps = 6;
    // Alley line along the curb/wall
    const cycle = (time * 0.45 * speed) % 8.0; // 8-second repeating cycle

    for (let i = 0; i < numLamps; i++) {
        const lx = W * 0.12 + (i / (numLamps - 1)) * (W * 0.76);
        const ly = H * 0.5 + Math.sin(i * 1.2) * 14 * elScale;

        // Darkness wave propagates down the alley: L0 -> L1 -> L2 -> L3 -> L4 -> L5
        const deathStart = i * 0.7;
        const deathEnd = deathStart + 0.55;
        const reviveStart = 5.2 + i * 0.4;

        let lampState = 'on'; // 'on', 'dying', 'dead', 'igniting'
        let flicker = 1.0;
        let emberAlpha = 0;

        if (cycle < deathStart) {
            // Normal living gaslamp: gentle atmospheric breathing
            lampState = 'on';
            flicker = 0.85 + 0.15 * Math.sin(time * 12 + i * 2.3);
        } else if (cycle >= deathStart && cycle < deathEnd) {
            // Sputtering death throes: violent high-frequency gas flicker
            lampState = 'dying';
            const sputter = Math.sin(time * 48 + i * 19) * Math.cos(time * 29);
            flicker = sputter > 0.1 ? 0.95 : 0.05;
        } else if (cycle >= deathEnd && cycle < reviveStart) {
            // Completely dead: light pool extinguished, glowing dying ember fades out
            lampState = 'dead';
            flicker = 0;
            const deadElapsed = cycle - deathEnd;
            emberAlpha = Math.max(0, 1.0 - deadElapsed / 1.6);
        } else {
            // Surge / reignition cascade
            lampState = 'igniting';
            const igniteProg = cycle - reviveStart;
            if (igniteProg < 0.18) {
                flicker = (Math.sin(time * 60) > 0 ? 1.4 : 0.2); // Intense electrical spark surge
            } else {
                flicker = 0.85 + 0.15 * Math.sin(time * 12 + i * 2.3);
            }
        }

        flicker *= intensity;

        // 1. Ground Light Pool (Radial Gaslamp Illumination on Wet Cobblestones)
        if (flicker > 0.04) {
            const poolR = (55 + rough * 18) * elScale;
            const groundGlow = ctx.createRadialGradient(lx, ly, 3 * elScale, lx, ly, poolR);
            groundGlow.addColorStop(0, `rgba(254, 240, 138, ${0.82 * flicker})`);
            groundGlow.addColorStop(0.35, `rgba(245, 158, 11, ${0.42 * flicker})`);
            groundGlow.addColorStop(0.75, `rgba(180, 83, 9, ${0.12 * flicker})`);
            groundGlow.addColorStop(1, 'rgba(180, 83, 9, 0)');

            ctx.fillStyle = groundGlow;
            ctx.beginPath();
            ctx.ellipse(lx, ly, poolR, poolR * 0.82, 0, 0, Math.PI * 2);
            ctx.fill();

            // Wet cobblestone specular glimmers under active light
            for (let c = 0; c < 4; c++) {
                const cxOffset = Math.sin(i * 5 + c * 2.1) * (poolR * 0.55);
                const cyOffset = Math.cos(i * 3 + c * 3.4) * (poolR * 0.42);
                ctx.fillStyle = `rgba(255, 255, 255, ${(0.15 + 0.1 * Math.sin(time * 6 + c)) * flicker})`;
                ctx.beginPath();
                ctx.arc(lx + cxOffset, ly + cyOffset, (1.8 + (c % 2)) * elScale, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // 2. Cast-Iron Ground Post Base & Cantilever Arm (Top-Down Overhead View)
        // Bolted circular base plate on the ground / curb
        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.arc(lx - 12 * elScale, ly, 5.5 * elScale, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 1.2 * elScale;
        ctx.stroke();

        // 4 iron mounting bolt heads seen from above
        ctx.fillStyle = '#64748b';
        for (let b = 0; b < 4; b++) {
            const bAng = (b / 4) * Math.PI * 2 + 0.35;
            ctx.fillRect(lx - 12 * elScale + Math.cos(bAng) * 3.5 * elScale - 0.75, ly + Math.sin(bAng) * 3.5 * elScale - 0.75, 1.5, 1.5);
        }

        // Forged-iron horizontal scroll arm extending outward to lantern
        ctx.strokeStyle = '#1e293b';
        ctx.lineWidth = 2.8 * elScale;
        ctx.beginPath();
        ctx.moveTo(lx - 12 * elScale, ly);
        ctx.lineTo(lx, ly);
        ctx.stroke();

        // 3. Hexagonal Wrought-Iron Lantern Hood (90-deg Overhead Top-Down View)
        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        for (let h = 0; h < 6; h++) {
            const hAng = (h / 6) * Math.PI * 2;
            const hx = lx + Math.cos(hAng) * 11 * elScale;
            const hy = ly + Math.sin(hAng) * 11 * elScale;
            if (h === 0) ctx.moveTo(hx, hy);
            else ctx.lineTo(hx, hy);
        }
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 1.8 * elScale;
        ctx.stroke();

        // Hexagonal hood hip ridges converging to central finial
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 1.0 * elScale;
        for (let h = 0; h < 6; h++) {
            const hAng = (h / 6) * Math.PI * 2;
            ctx.beginPath();
            ctx.moveTo(lx, ly);
            ctx.lineTo(lx + Math.cos(hAng) * 11 * elScale, ly + Math.sin(hAng) * 11 * elScale);
            ctx.stroke();
        }

        // Warm rim glow escaping past the edges of the hood when lit
        if (flicker > 0.05) {
            ctx.strokeStyle = `rgba(253, 224, 71, ${0.45 * flicker})`;
            ctx.lineWidth = 2.0 * elScale;
            ctx.beginPath();
            ctx.arc(lx, ly, 12 * elScale, 0, Math.PI * 2);
            ctx.stroke();
        }

        // Central Finial Spike / Vent Cap
        if (lampState === 'dead' && emberAlpha > 0.01) {
            // Dying red-hot filament / ember fading in the darkness
            ctx.fillStyle = `rgba(239, 68, 68, ${0.9 * emberAlpha * intensity})`;
            ctx.beginPath();
            ctx.arc(lx, ly, 3.5 * elScale, 0, Math.PI * 2);
            ctx.fill();

            // Delicate rising smoke wisp
            const smokeY = ly - (1.0 - emberAlpha) * 18 * elScale;
            const smokeX = lx + Math.sin(time * 3 + i) * 6 * elScale;
            ctx.fillStyle = `rgba(148, 163, 184, ${0.25 * emberAlpha * intensity})`;
            ctx.beginPath();
            ctx.arc(smokeX, smokeY, (3 + (1.0 - emberAlpha) * 5) * elScale, 0, Math.PI * 2);
            ctx.fill();
        } else {
            // Brass finial ball
            ctx.fillStyle = flicker > 0.05 ? '#d97706' : '#334155';
            ctx.beginPath();
            ctx.arc(lx, ly, 3.2 * elScale, 0, Math.PI * 2);
            ctx.fill();
        }

        // Spark pops when sputtering
        if (lampState === 'dying' && Math.sin(time * 30 + i) > 0.4) {
            for (let sp = 0; sp < 3; sp++) {
                const spAng = FX.hash(time * 20 + i + sp) * Math.PI * 2;
                const spDist = (12 + FX.hash(time * 15 + sp) * 14) * elScale;
                ctx.fillStyle = '#fef08a';
                ctx.beginPath();
                ctx.arc(lx + Math.cos(spAng) * spDist, ly + Math.sin(spAng) * spDist, 1.2 * elScale, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }
});

// 228. 1930s Sedan Headlights (noir pursuit headlights slicing across wet cobblestones)
reg(['ch_sedan_headlights', 'item_228'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const t = (time * 120 * speed) % (W + 200) - 100;
    const cy = H * 0.5;
    // 1930s heavy coupe bumper and twin round headlamps
    ctx.fillStyle = '#09090b';
    ctx.fillRect(t - 30 * elScale, cy - 25 * elScale, 30 * elScale, 50 * elScale);
    // Twin headlights
    const h1 = cy - 16 * elScale, h2 = cy + 16 * elScale;
    ctx.fillStyle = '#e2e8f0';
    ctx.beginPath();
    ctx.arc(t, h1, 6 * elScale, 0, Math.PI * 2);
    ctx.arc(t, h2, 6 * elScale, 0, Math.PI * 2);
    ctx.fill();
    // Parabolic headlight cones slicing forward
    const beamLen = W * 0.65;
    FX.drawVolumetricCone(ctx, t, h1, 0, beamLen, 0.32, `rgba(254, 249, 195, ${0.75 * intensity})`, 'rgba(254, 249, 195, 0)');
    FX.drawVolumetricCone(ctx, t, h2, 0, beamLen, 0.32, `rgba(254, 249, 195, ${0.75 * intensity})`, 'rgba(254, 249, 195, 0)');
    // Wet cobblestone specular glints reflecting the beams
    for (let c = 0; c < 15; c++) {
        const cx = t + 30 + ((c * 47) % (beamLen * 0.9));
        const cyOff = cy + Math.sin(c * 17) * 35 * elScale;
        ctx.fillStyle = `rgba(255, 255, 255, ${(0.4 + Math.sin(time * 15 + c) * 0.3) * intensity})`;
        ctx.fillRect(cx, cyOff, (8 + (c % 5) * 2) * elScale, 3 * elScale);
    }
});

// 229. Floating Spectral Taper Candle (Top-Down Battlemap View)
reg(['ch_floating_taper', 'item_229'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = (W * 0.15) + ((time * 38 * speed) % (W * 0.7));
    const cy = H * 0.5 + Math.sin(time * 2.2 * speed) * 18 * elScale;
    const flicker = 0.88 + Math.sin(time * 24 * speed) * 0.12;

    ctx.save();
    // 1. Spectral violet-blue light aura illuminating the floor below the floating candle
    const auraR = (70 + rough * 15) * elScale;
    const aura = ctx.createRadialGradient(cx, cy, 3, cx, cy, auraR);
    aura.addColorStop(0, `rgba(192, 132, 252, ${0.75 * flicker * intensity})`);
    aura.addColorStop(0.35, `rgba(147, 51, 234, ${0.35 * flicker * intensity})`);
    aura.addColorStop(0.7, `rgba(88, 28, 135, ${0.12 * flicker * intensity})`);
    aura.addColorStop(1, 'rgba(88, 28, 135, 0)');
    ctx.fillStyle = aura;
    ctx.beginPath();
    ctx.arc(cx, cy, auraR, 0, Math.PI * 2);
    ctx.fill();

    // 2. White wax taper candle head seen from directly above (circular top)
    const waxR = 7 * elScale;
    ctx.fillStyle = '#f8fafc';
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 1.2 * elScale;
    ctx.beginPath();
    ctx.arc(cx, cy, waxR, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Small droplets of melted tallow dripping over the rim
    for (let d = 0; d < 4; d++) {
        const da = (d * Math.PI * 0.5) + 0.3;
        const dx = cx + Math.cos(da) * (waxR + 2 * elScale);
        const dy = cy + Math.sin(da) * (waxR + 2 * elScale);
        ctx.fillStyle = '#f1f5f9';
        ctx.beginPath();
        ctx.arc(dx, dy, 2 * elScale, 0, Math.PI * 2);
        ctx.fill();
    }

    // 3. Central black wick seen from above
    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    ctx.arc(cx, cy, 1.8 * elScale, 0, Math.PI * 2);
    ctx.fill();

    // 4. Ghostly blue-violet flame point shining upward at the overhead camera
    const flameR = (4.5 + Math.sin(time * 18) * 1) * elScale;
    const flameGrad = ctx.createRadialGradient(cx, cy, 0.5, cx, cy, flameR * 2);
    flameGrad.addColorStop(0, '#ffffff');
    flameGrad.addColorStop(0.35, '#c084fc');
    flameGrad.addColorStop(0.7, '#7c3aed');
    flameGrad.addColorStop(1, 'rgba(124, 58, 237, 0)');
    ctx.fillStyle = flameGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, flameR * 2, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
});

// 230. Blood-Moon Eclipse Shadow (creeping steadily across stone courtyard - Top-Down Battlemap View)
reg(['ch_bloodmoon_shadow', 'ch_blood_moon_shadow', 'ch_eclipse_shadow', 'item_230'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    // Smooth creeping oscillation across the courtyard: ALWAYS visible within the frame
    // Sweeps between 18% and 82% of width with ominous, creeping celestial momentum
    const progress = 0.5 + 0.32 * Math.sin(time * 0.35 * speed);
    const sweepX = W * progress;
    const pulse = 0.82 + 0.18 * Math.sin(time * 2.2);

    ctx.save();

    // 1. Un-eclipsed Courtyard Cold Silvery Moonlight (Subtle contrast on right side)
    const moonGlow = ctx.createLinearGradient(sweepX, 0, W, 0);
    moonGlow.addColorStop(0, 'rgba(191, 219, 254, 0)');
    moonGlow.addColorStop(0.3, `rgba(191, 219, 254, ${0.08 * intensity})`);
    moonGlow.addColorStop(1, `rgba(224, 242, 254, ${0.14 * intensity})`);
    ctx.fillStyle = moonGlow;
    ctx.fillRect(sweepX, 0, W - sweepX, H);

    // 2. Creeping Curved Umbral Shadow Disc (Astronomical eclipse arc across stone courtyard)
    const arcPoints = [];
    const steps = 30;
    for (let s = 0; s <= steps; s++) {
        const y = (s / steps) * H;
        const normY = (y - H * 0.5) / (H * 0.5); // -1 to 1
        // Deep spherical arc curvature of planetary shadow
        const arcCurve = (1.0 - normY * normY) * (45 * elScale);
        // Atmospheric undulating edge ripple from atmospheric heat waves
        const ripple = Math.sin(y * 0.035 + time * 1.6) * (10 + rough * 16) * elScale
                     + Math.cos(y * 0.08 - time * 2.1) * (5 + rough * 8) * elScale;
        const x = sweepX + arcCurve + ripple;
        arcPoints.push({ x, y });
    }

    // Draw deep eclipsed blood-moon shadow field (Left side up to arc)
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(arcPoints[0].x, 0);
    for (let p = 0; p < arcPoints.length; p++) {
        ctx.lineTo(arcPoints[p].x, arcPoints[p].y);
    }
    ctx.lineTo(arcPoints[arcPoints.length - 1].x, H);
    ctx.lineTo(0, H);
    ctx.closePath();

    // Eclipsed shadow gradient: deep abyss near left, crimson-tinted twilight near the boundary
    const shadowGrad = ctx.createLinearGradient(0, 0, sweepX + 50 * elScale, 0);
    shadowGrad.addColorStop(0, `rgba(18, 4, 8, ${0.68 * intensity})`);
    shadowGrad.addColorStop(0.55, `rgba(45, 8, 16, ${0.62 * intensity})`);
    shadowGrad.addColorStop(0.88, `rgba(88, 12, 28, ${0.52 * intensity})`);
    shadowGrad.addColorStop(1, `rgba(127, 29, 29, ${0.40 * intensity})`);
    ctx.fillStyle = shadowGrad;
    ctx.fill();

    // 3. Glowing Blood-Red Penumbral Halo & Chromatic Aberration Fringe along the arc
    // Broad soft ambient crimson glow
    ctx.strokeStyle = `rgba(220, 38, 38, ${0.35 * pulse * intensity})`;
    ctx.lineWidth = (28 + rough * 20) * elScale;
    ctx.beginPath();
    ctx.moveTo(arcPoints[0].x, arcPoints[0].y);
    for (let p = 1; p < arcPoints.length; p++) ctx.lineTo(arcPoints[p].x, arcPoints[p].y);
    ctx.stroke();

    // Intense vibrant ruby penumbra boundary
    ctx.strokeStyle = `rgba(239, 68, 68, ${0.85 * pulse * intensity})`;
    ctx.lineWidth = (6 + rough * 8) * elScale;
    ctx.beginPath();
    ctx.moveTo(arcPoints[0].x, arcPoints[0].y);
    for (let p = 1; p < arcPoints.length; p++) ctx.lineTo(arcPoints[p].x, arcPoints[p].y);
    ctx.stroke();

    // Searing hot crimson-orange inner refraction razor line
    ctx.strokeStyle = `rgba(254, 202, 202, ${0.92 * pulse * intensity})`;
    ctx.lineWidth = 1.8 * elScale;
    ctx.beginPath();
    ctx.moveTo(arcPoints[0].x, arcPoints[0].y);
    for (let p = 1; p < arcPoints.length; p++) ctx.lineTo(arcPoints[p].x, arcPoints[p].y);
    ctx.stroke();

    // 4. Low-Lying Blood Mist Wisps Drifting Over the Courtyard Flagstones
    const numWisps = 7;
    for (let w = 0; w < numWisps; w++) {
        const wispU = (time * 0.08 * speed + w / numWisps) % 1.0;
        const wx = (sweepX * 0.85) * wispU;
        const wy = (H * 0.15) + (w / numWisps) * (H * 0.7) + Math.sin(time * 1.5 + w * 2.3) * (18 * elScale);
        const wispR = (22 + (w % 3) * 12 + rough * 15) * elScale;

        const wispGrad = ctx.createRadialGradient(wx, wy, 2, wx, wy, wispR);
        wispGrad.addColorStop(0, `rgba(185, 28, 28, ${0.22 * intensity})`);
        wispGrad.addColorStop(0.6, `rgba(127, 29, 29, ${0.10 * intensity})`);
        wispGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = wispGrad;
        ctx.beginPath();
        ctx.arc(wx, wy, wispR, 0, Math.PI * 2);
        ctx.fill();
    }

    // 5. Floating Occult Eclipse Ash / Glowing Red Cinder Motes in the Shadow Zone
    const moteCount = 14;
    for (let m = 0; m < moteCount; m++) {
        const seed = m * 71.3;
        const mx = (FX.hash(seed) * (sweepX * 0.95));
        const my = ((time * 22 * speed + FX.hash(seed + 1) * H) % H);
        const motePulse = 0.5 + 0.5 * Math.sin(time * 4 + m * 1.7);
        const moteR = (1.2 + FX.hash(seed + 2) * 1.6) * elScale;

        ctx.fillStyle = `rgba(248, 113, 113, ${0.85 * motePulse * intensity})`;
        ctx.beginPath();
        ctx.arc(mx, my, moteR, 0, Math.PI * 2);
        ctx.fill();
    }

    ctx.restore();
});

// 231. Viscous Black Ichor Oozing Rapidly Under Locked Cellar Door
reg(['ch_cellar_ichor', 'item_231'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const doorY = H * 0.25;
    ctx.save();

    // 1. Heavy cellar threshold iron & stone seam
    ctx.strokeStyle = '#262626';
    ctx.lineWidth = 7 * elScale;
    ctx.beginPath();
    ctx.moveTo(W * 0.08, doorY);
    ctx.lineTo(W * 0.92, doorY);
    ctx.stroke();

    // Weathered threshold seam shadow
    ctx.strokeStyle = '#09090b';
    ctx.lineWidth = 3 * elScale;
    ctx.beginPath();
    ctx.moveTo(W * 0.08, doorY + 3 * elScale);
    ctx.lineTo(W * 0.92, doorY + 3 * elScale);
    ctx.stroke();

    // 2. Spreading viscous black ichor tendrils with iridescent purple/crimson oil sheen
    const numTendrils = 9;
    for (let i = 0; i < numTendrils; i++) {
        const tx = W * 0.18 + (i / (numTendrils - 1)) * (W * 0.64);
        const reach = ((time * 42 * speed + i * 29) % (H * 0.68));
        const cp1x = tx + Math.sin(time * 2 + i) * (18 + rough * 20);
        const cp1y = doorY + reach * 0.5;
        const endX = tx + Math.cos(time * 1.5 + i * 2) * (25 + rough * 30);
        const endY = doorY + reach;
        const width = (7 + (i % 4) * 2.5) * elScale;

        // Outer iridescent eldritch oil sheen (Vivid purple/magenta against dark maps)
        ctx.strokeStyle = (i % 2 === 0) ? `rgba(147, 51, 234, ${0.45 * intensity})` : `rgba(225, 29, 72, ${0.4 * intensity})`;
        ctx.lineWidth = width + 6 * elScale;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(tx, doorY);
        ctx.quadraticCurveTo(cp1x, cp1y, endX, endY);
        ctx.stroke();

        // Dark obsidian ichor body
        ctx.strokeStyle = '#09090b';
        ctx.lineWidth = width;
        ctx.beginPath();
        ctx.moveTo(tx, doorY);
        ctx.quadraticCurveTo(cp1x, cp1y, endX, endY);
        ctx.stroke();

        // High-contrast wet fluid specular gloss line along the spine
        ctx.strokeStyle = `rgba(224, 231, 255, ${0.72 * intensity})`;
        ctx.lineWidth = Math.max(1, width * 0.22);
        ctx.beginPath();
        ctx.moveTo(tx, doorY);
        ctx.quadraticCurveTo(cp1x - 1.5 * elScale, cp1y - 1 * elScale, endX - 1.5 * elScale, endY - 1 * elScale);
        ctx.stroke();

        // Bulbing glossy droplet at the leading head of each tendril
        const bulbR = (width * 0.85);
        ctx.fillStyle = '#09090b';
        ctx.beginPath();
        ctx.arc(endX, endY, bulbR, 0, Math.PI * 2);
        ctx.fill();

        // Specular gloss reflection dot on droplet
        ctx.fillStyle = `rgba(255, 255, 255, ${0.85 * intensity})`;
        ctx.beginPath();
        ctx.arc(endX - 2 * elScale, endY - 2 * elScale, Math.max(1.2, bulbR * 0.32), 0, Math.PI * 2);
        ctx.fill();
    }

    ctx.restore();
});

// 232. Living Shadow Tendrils Slithering Toward Light
reg(['ch_shadow_tendrils', 'item_232'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const targetX = W * 0.85, targetY = H * 0.5;
    ctx.save();

    // 1. Warm sanctuary light source drawing the shadows forward
    const lightGlow = ctx.createRadialGradient(targetX, targetY, 3, targetX, targetY, 65 * elScale);
    lightGlow.addColorStop(0, `rgba(255, 247, 237, ${0.95 * intensity})`);
    lightGlow.addColorStop(0.35, `rgba(251, 191, 36, ${0.65 * intensity})`);
    lightGlow.addColorStop(0.7, `rgba(217, 119, 6, ${0.25 * intensity})`);
    lightGlow.addColorStop(1, 'rgba(180, 83, 9, 0)');
    ctx.fillStyle = lightGlow;
    ctx.beginPath();
    ctx.arc(targetX, targetY, 65 * elScale, 0, Math.PI * 2);
    ctx.fill();

    // 2. Multiple living shadowy tendrils crawling from dark corners toward the light
    const count = 7;
    for (let i = 0; i < count; i++) {
        const startX = W * 0.05 + i * 15;
        const startY = H * 0.15 + (i / count) * (H * 0.7);
        const steps = 8;
        const pts = [{ x: startX, y: startY }];

        for (let s = 1; s <= steps; s++) {
            const frac = s / steps;
            const px = startX + (targetX - startX) * frac * (0.45 + 0.5 * Math.sin(time * speed + i * 0.7));
            const py = startY + (targetY - startY) * frac + Math.sin(time * 5 * speed + s * 1.4 + i) * (14 + rough * 20);
            pts.push({ x: px, y: py });
        }

        const tWidth = (6 + Math.sin(time * 4 + i) * 2.5) * elScale;

        // Ethereal shadow penumbra aura (Indigo/violet glow makes it clearly visible on black/dark grids)
        ctx.strokeStyle = `rgba(129, 140, 248, ${0.45 * intensity})`;
        ctx.lineWidth = tWidth + 8 * elScale;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for (let p = 1; p < pts.length; p++) ctx.lineTo(pts[p].x, pts[p].y);
        ctx.stroke();

        // Obsidian void tendril core
        ctx.strokeStyle = '#050508';
        ctx.lineWidth = tWidth;
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        for (let p = 1; p < pts.length; p++) ctx.lineTo(pts[p].x, pts[p].y);
        ctx.stroke();

        // Dissolving shadowy ash cinders at the tips
        const tip = pts[pts.length - 1];
        ctx.fillStyle = `rgba(167, 139, 250, ${0.75 * intensity})`;
        ctx.beginPath();
        ctx.arc(tip.x, tip.y, (2.5 + Math.sin(time * 8 + i) * 1) * elScale, 0, Math.PI * 2);
        ctx.fill();
    }

    ctx.restore();
});

// 233. Tide of Brown Cockroaches Pouring Down Wooden Stairwell
reg(['ch_roach_stair_tide', 'item_233'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    // Crawling roach horde swarming downward
    const numRoaches = 36;
    for (let r = 0; r < numRoaches; r++) {
        const seed = r * 137.5;
        const rx = (W * 0.1) + ((seed + Math.sin(r + time * speed) * 30) % (W * 0.8));
        const ry = ((time * 85 * speed + r * 25) % (H + 40)) - 20;
        const angle = Math.PI * 0.5 + Math.sin(time * 12 + r) * 0.35;
        ctx.save();
        ctx.translate(rx, ry);
        ctx.rotate(angle);
        // Roach oval body
        ctx.fillStyle = '#451a03';
        ctx.beginPath();
        ctx.ellipse(0, 0, 4 * elScale, 9 * elScale, 0, 0, Math.PI * 2);
        ctx.fill();
        // Antennae
        ctx.strokeStyle = '#78350f';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(-1, 9 * elScale);
        ctx.lineTo(-4 * elScale, 16 * elScale + Math.sin(time * 20 + r) * 3);
        ctx.moveTo(1, 9 * elScale);
        ctx.lineTo(4 * elScale, 16 * elScale + Math.cos(time * 20 + r) * 3);
        // Six rapid scuttling legs
        for (let leg = -1; leg <= 1; leg++) {
            const legY = leg * 5 * elScale;
            const legKick = Math.sin(time * 25 + r + leg) * 3;
            ctx.moveTo(-3 * elScale, legY);
            ctx.lineTo(-9 * elScale, legY + legKick);
            ctx.moveTo(3 * elScale, legY);
            ctx.lineTo(9 * elScale, legY - legKick);
        }
        ctx.stroke();
        ctx.restore();
    }
});

// 234. Crimson Blood Droplets Dripping Upward (Top-Down Forced Perspective)
reg(['ch_inverted_blood', 'item_234'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    ctx.save();
    // Inverted gravity: Blood droplets rise from floor UPWARD toward the overhead camera!
    // Forced perspective: They start small and dark on the floor, expanding in scale and brightness as they rise toward the ceiling lens.
    const numDrops = Math.round(28 + rough * 18);
    for (let d = 0; d < numDrops; d++) {
        const seed = d * 43.7;
        const dx = (W * 0.1) + ((seed * 17) % (W * 0.8));
        const dy = (H * 0.1) + ((seed * 31) % (H * 0.8));

        // Droplet rise cycle: 0 = on floor, 1 = reaching camera / ceiling
        const cycle = (time * (0.8 + (d % 4) * 0.3) * speed + seed) % 1;
        const zScale = 0.4 + cycle * 2.6; // Expands from 0.4 up to 3.0x scale as it approaches camera!
        const r = (2 + (d % 3) * 1.5) * elScale * zScale;
        const alpha = Math.min(1, cycle * 1.2) * (1 - Math.max(0, cycle - 0.85) * 6) * intensity;

        // Concentric depth ring on floor where droplet detached
        if (cycle < 0.25) {
            ctx.strokeStyle = 'rgba(153, 27, 27, ' + (0.8 * intensity) + ')';
            ctx.lineWidth = 1 * elScale;
            ctx.beginPath();
            ctx.arc(dx, dy, (8 + cycle * 20) * elScale, 0, Math.PI * 2);
            ctx.stroke();
        }

        // Spherical blood bead expanding toward camera
        const dropGrad = ctx.createRadialGradient(dx - r * 0.3, dy - r * 0.3, 1, dx, dy, r);
        dropGrad.addColorStop(0, 'rgba(254, 202, 202, ' + alpha + ')'); // Specular highlight
        dropGrad.addColorStop(0.3, 'rgba(220, 38, 38, ' + alpha + ')'); // Vibrant arterial red
        dropGrad.addColorStop(0.85, 'rgba(127, 29, 29, ' + alpha + ')'); // Deep coagulated rim
        dropGrad.addColorStop(1, 'rgba(69, 10, 10, ' + (alpha * 0.5) + ')');

        ctx.fillStyle = dropGrad;
        ctx.beginPath();
        ctx.arc(dx, dy, r, 0, Math.PI * 2);
        ctx.fill();

        // Soft floor shadow beneath rising droplet (shadow expands and blurs as distance increases)
        const shadowDist = cycle * 14 * elScale;
        const shadowR = r * (1 + cycle * 0.8);
        ctx.fillStyle = 'rgba(30, 10, 10, ' + (0.8 * intensity) + ')';
        ctx.beginPath();
        ctx.ellipse(dx + shadowDist, dy + shadowDist, shadowR, shadowR * 0.6, 0, 0, Math.PI * 2);
        ctx.fill();
    }
    ctx.restore();
});

// 235. Rolling Wall of Unnatural Freezing Grave-Fog
reg(['ch_gravefog_wall', 'item_235'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const frontX = ((time * 40 * speed) % (W + 250)) - 100;
    // Rolling ominous fog bank with fractal lobes
    ctx.save();
    for (let b = 0; b < 10; b++) {
        const bx = frontX - b * 25 * elScale;
        const by = H * 0.5 + Math.sin(time * 2 + b * 1.5) * (H * 0.35);
        const rad = (60 + b * 12 + rough * 40) * elScale;
        const fogGrad = ctx.createRadialGradient(bx, by, 5, bx, by, rad);
        fogGrad.addColorStop(0, `rgba(203, 213, 225, ${(0.45 - b * 0.03) * intensity})`);
        fogGrad.addColorStop(0.6, `rgba(148, 163, 184, ${(0.25 - b * 0.02) * intensity})`);
        fogGrad.addColorStop(1, 'rgba(148, 163, 184, 0)');
        ctx.fillStyle = fogGrad;
        ctx.beginPath();
        ctx.arc(bx, by, rad, 0, Math.PI * 2);
        ctx.fill();
    }
    // Creeping ground frost spikes advancing ahead of fog
    ctx.strokeStyle = `rgba(224, 242, 254, ${0.8 * intensity})`;
    ctx.lineWidth = 2 * elScale;
    for (let s = 0; s < 12; s++) {
        const sx = frontX + (s * 15 * elScale);
        const sy = H * 0.85 + (s % 3) * 10;
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(sx + 10 * elScale, sy - 8 * elScale);
        ctx.lineTo(sx + 18 * elScale, sy);
        ctx.stroke();
    }
    ctx.restore();
});

// 236. Grimy 1920s Subway Car Screeching Past Platform
reg(['ch_vintage_subway', 'item_236'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cy = H * 0.5;
    // Subway tunnel rails
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(0, cy + 30 * elScale);
    ctx.lineTo(W, cy + 30 * elScale);
    ctx.moveTo(0, cy + 42 * elScale);
    ctx.lineTo(W, cy + 42 * elScale);
    ctx.stroke();
    // Fast screeching train carriage
    const trainX = ((time * 350 * speed) % (W + 600)) - 500;
    const trainW = 420 * elScale, trainH = 65 * elScale;
    // Grimy riveted olive-drab steel carriage
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(trainX, cy - trainH * 0.5, trainW, trainH);
    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 3;
    ctx.strokeRect(trainX, cy - trainH * 0.5, trainW, trainH);
    // Yellow illuminated windows blurring past
    ctx.fillStyle = 'rgba(254, 240, 138, 0.75)';
    for (let w = 0; w < 7; w++) {
        const wx = trainX + 25 * elScale + w * 55 * elScale;
        ctx.fillRect(wx, cy - 15 * elScale, 35 * elScale, 25 * elScale);
    }
    // Flying steel wheel sparks
    for (let sp = 0; sp < 8; sp++) {
        const spx = trainX + 80 * elScale + (sp * 35) + Math.random() * 20;
        const spy = cy + 35 * elScale;
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath();
        ctx.arc(spx, spy - Math.random() * 10, 2 * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 237. Brass Elevator Floor Needle Ticking Past Top Floor
reg(['ch_elevator_needle', 'item_237'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const r = Math.min(W, H) * 0.38 * elScale;
    // Ornate semicircular brass floor indicator dial
    ctx.fillStyle = '#1e293b';
    ctx.beginPath();
    ctx.arc(cx, cy, r, Math.PI, 0, false);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 4 * elScale;
    ctx.stroke();
    // Roman numeral floor ticks (1 to 13)
    for (let f = 0; f <= 13; f++) {
        const theta = Math.PI - (f / 13) * Math.PI;
        const tx1 = cx + Math.cos(theta) * (r - 4 * elScale);
        const ty1 = cy - Math.sin(theta) * (r - 4 * elScale);
        const tx2 = cx + Math.cos(theta) * (r - 14 * elScale);
        const ty2 = cy - Math.sin(theta) * (r - 14 * elScale);
        ctx.strokeStyle = f === 13 ? '#ef4444' : '#fbbf24';
        ctx.lineWidth = 2 * elScale;
        ctx.beginPath();
        ctx.moveTo(tx1, ty1);
        ctx.lineTo(tx2, ty2);
        ctx.stroke();
    }
    // Erratically ticking needle vibrating into forbidden zone past 13
    const needlePhase = (time * 2.5 * speed) % 5;
    const angle = needlePhase > 3.5 ? -0.25 + Math.sin(time * 30) * (0.15 + rough * 0.1) : Math.PI - (needlePhase / 3.5) * Math.PI;
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 3 * elScale;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(angle) * (r - 8 * elScale), cy - Math.sin(angle) * (r - 8 * elScale));
    ctx.stroke();
    // Central brass hub
    ctx.fillStyle = '#f59e0b';
    ctx.beginPath();
    ctx.arc(cx, cy, 7 * elScale, 0, Math.PI * 2);
    ctx.fill();
});

// 238. Vintage Ghost Typewriter (carriage sliding & keys striking alone)
reg(['ch_ghost_typewriter', 'item_238'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    // Typewriter chassis
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(cx - 50 * elScale, cy - 25 * elScale, 100 * elScale, 60 * elScale);
    // Sliding black platen carriage
    const carriageShift = Math.sin(time * 2 * speed) * 20 * elScale;
    ctx.fillStyle = '#334155';
    ctx.fillRect(cx - 60 * elScale + carriageShift, cy - 40 * elScale, 120 * elScale, 16 * elScale);
    // White paper feed sticking out
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(cx - 35 * elScale + carriageShift, cy - 65 * elScale, 70 * elScale, 28 * elScale);
    // Typebar key striking up rhythmically
    const strikeKey = Math.floor((time * 12 * speed) % 5);
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 2 * elScale;
    ctx.beginPath();
    ctx.moveTo(cx - 20 * elScale + strikeKey * 10 * elScale, cy + 10 * elScale);
    ctx.lineTo(cx, cy - 35 * elScale);
    ctx.stroke();
    // Keyboard key rows
    for (let r = 0; r < 3; r++) {
        for (let k = 0; k < 7; k++) {
            ctx.fillStyle = (r === 1 && k === strikeKey) ? '#38bdf8' : '#e2e8f0';
            ctx.beginPath();
            ctx.arc(cx - 35 * elScale + k * 12 * elScale, cy + 15 * elScale + r * 8 * elScale, 2.5 * elScale, 0, Math.PI * 2);
            ctx.fill();
        }
    }
});

// 239. Wooden Dumbwaiter Lift Creaking Downward (Top-Down Forced Perspective)
reg(['ch_dumbwaiter_lift', 'item_239'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const shaftW = 85 * elScale, shaftH = 85 * elScale;

    ctx.save();
    // 1. Shaft Opening Cutout in Floorboards
    ctx.fillStyle = '#09080d'; // Deep vertical shaft void
    ctx.fillRect(cx - shaftW * 0.5, cy - shaftH * 0.5, shaftW, shaftH);

    // Heavy wooden coaming / floorboard frame around shaft
    ctx.strokeStyle = '#3e2723';
    ctx.lineWidth = 5 * elScale;
    ctx.strokeRect(cx - shaftW * 0.5, cy - shaftH * 0.5, shaftW, shaftH);

    // Corner iron bracket plates
    ctx.fillStyle = '#1c1917';
    const brSize = 8 * elScale;
    ctx.fillRect(cx - shaftW * 0.5, cy - shaftH * 0.5, brSize, brSize);
    ctx.fillRect(cx + shaftW * 0.5 - brSize, cy - shaftH * 0.5, brSize, brSize);
    ctx.fillRect(cx - shaftW * 0.5, cy + shaftH * 0.5 - brSize, brSize, brSize);
    ctx.fillRect(cx + shaftW * 0.5 - brSize, cy + shaftH * 0.5 - brSize, brSize);

    // Shaft vertical corner guide rails receding into the center vanishing point
    ctx.strokeStyle = '#27272a';
    ctx.lineWidth = 2 * elScale;
    ctx.beginPath();
    ctx.moveTo(cx - shaftW * 0.5, cy - shaftH * 0.5); ctx.lineTo(cx, cy);
    ctx.moveTo(cx + shaftW * 0.5, cy - shaftH * 0.5); ctx.lineTo(cx, cy);
    ctx.moveTo(cx - shaftW * 0.5, cy + shaftH * 0.5); ctx.lineTo(cx, cy);
    ctx.moveTo(cx + shaftW * 0.5, cy + shaftH * 0.5); ctx.lineTo(cx, cy);
    ctx.stroke();

    // 2. Forced Perspective Lift Descent Cycle
    // Cycle: at floor level (scale 0.95), creaking down into the dark abyss (scale 0.22), then resets
    const cycle = (time * 0.6 * speed) % 1;
    const zDepth = cycle; // 0 = floor level, 1 = deep down in shaft
    const carScale = (1 - zDepth * 0.75); // Car shrinks from 1.0 down to 0.25 as it moves away
    const darkness = zDepth * 0.85; // Gets engulfed in darkness as it descends

    const carW = (shaftW - 12 * elScale) * carScale;
    const carH = (shaftH - 12 * elScale) * carScale;

    // Slight mechanical shudder
    const shudderX = (Math.random() - 0.5) * (2 * elScale) * (1 - zDepth);
    const shudderY = (Math.random() - 0.5) * (2 * elScale) * (1 - zDepth);

    // Car Box Roof & Interior viewed from directly above
    ctx.save();
    ctx.translate(cx + shudderX, cy + shudderY);

    // Wooden dumbwaiter car top
    const woodColor = zDepth > 0.7 ? '#1a120b' : (zDepth > 0.4 ? '#3e2723' : '#6d4c41');
    ctx.fillStyle = woodColor;
    ctx.fillRect(-carW * 0.5, -carH * 0.5, carW, carH);
    ctx.strokeStyle = '#1c1917';
    ctx.lineWidth = 2 * elScale * carScale;
    ctx.strokeRect(-carW * 0.5, -carH * 0.5, carW, carH);

    // Interior shelf compartment opening (looking down on silver serving cloche)
    if (carScale > 0.4) {
        ctx.fillStyle = '#0f0e11';
        ctx.fillRect(-carW * 0.35, -carH * 0.35, carW * 0.7, carH * 0.7);

        // Silver serving cloche dome seen from above (circular)
        ctx.fillStyle = '#94a3b8';
        ctx.beginPath();
        ctx.arc(0, 0, 10 * elScale * carScale, 0, Math.PI * 2);
        ctx.fill();
        // Central handle knob
        ctx.fillStyle = '#e2e8f0';
        ctx.beginPath();
        ctx.arc(0, 0, 3 * elScale * carScale, 0, Math.PI * 2);
        ctx.fill();
    }

    // Suspension hemp rope dropping down to the center eyelet
    ctx.strokeStyle = '#d7ccc8';
    ctx.lineWidth = Math.max(1, 2.5 * elScale * carScale);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, 4 * elScale * carScale, 0, Math.PI * 2);
    ctx.stroke();

    // Darkness shadow veil over descending car
    ctx.fillStyle = 'rgba(0, 0, 0, ' + darkness + ')';
    ctx.fillRect(-carW * 0.5, -carH * 0.5, carW, carH);

    ctx.restore();

    // Central braided suspension rope extending from overhead winch straight down into the car
    ctx.strokeStyle = '#a1887f';
    ctx.lineWidth = 2 * elScale;
    ctx.beginPath();
    ctx.moveTo(cx, cy - shaftH * 0.5);
    ctx.lineTo(cx, cy);
    ctx.stroke();

    // Falling dust / splinter motes tumbling down into the shaft
    for (let d = 0; d < 5; d++) {
        const dtMote = (time * 1.5 + d * 0.3) % 1;
        const moteScale = 1 - dtMote * 0.7;
        const moteX = cx + (Math.sin(d * 2.3 + time * 3) * shaftW * 0.25 * moteScale);
        const moteY = cy + (Math.cos(d * 1.7 + time * 3) * shaftH * 0.25 * moteScale);
        ctx.fillStyle = 'rgba(215, 204, 200, ' + (1 - dtMote) * 0.6 + ')';
        ctx.beginPath();
        ctx.arc(moteX, moteY, 2 * elScale * moteScale, 0, Math.PI * 2);
        ctx.fill();
    }
    ctx.restore();
});

// 240. 16mm Film Projector Casting Flickering Reel
reg(['ch_film_projector_beam', 'item_240'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const px = W * 0.1, py = H * 0.5;
    // Film projector body and twin spinning reels
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(px - 15 * elScale, py - 20 * elScale, 30 * elScale, 40 * elScale);
    // Top & bottom reels
    const reelAng = time * 8 * speed;
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 2 * elScale;
    ctx.beginPath();
    ctx.arc(px - 8 * elScale, py - 35 * elScale, 16 * elScale, 0, Math.PI * 2);
    ctx.arc(px - 8 * elScale, py + 35 * elScale, 16 * elScale, 0, Math.PI * 2);
    ctx.stroke();
    // Rapidly flickering volumetric light beam
    const flicker = 0.6 + Math.sin(time * 48) * 0.3 + (Math.random() - 0.5) * 0.2;
    FX.drawVolumetricCone(ctx, px + 15 * elScale, py, 0, W * 0.85, 0.38 + rough * 0.1, `rgba(248, 250, 252, ${flicker * intensity})`, 'rgba(248, 250, 252, 0)');
    // Flickering dust motes dancing in the beam
    for (let d = 0; d < 12; d++) {
        const dx = px + 40 + ((time * 50 + d * 45) % (W * 0.7));
        const dy = py + Math.sin(time * 3 + d) * 25 * elScale;
        ctx.fillStyle = `rgba(255, 255, 255, ${(0.5 + Math.sin(time * 20 + d) * 0.4) * intensity})`;
        ctx.beginPath();
        ctx.arc(dx, dy, 2 * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 241. Non-Euclidean Shifting Floor Tile Patterns
reg(['ch_noneuclidean_tiles', 'item_241'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const gridSize = 45 * elScale;
    const nx = Math.ceil(W / gridSize), ny = Math.ceil(H / gridSize);
    for (let y = 0; y < ny; y++) {
        for (let x = 0; x < nx; x++) {
            // Warping non-Euclidean perspective distortion
            const warpX = Math.sin(x * 0.4 + time * speed) * (12 + rough * 15);
            const warpY = Math.cos(y * 0.4 + time * speed) * (12 + rough * 15);
            const isBlack = (x + y) % 2 === 0;
            ctx.fillStyle = isBlack ? `rgba(15, 23, 42, ${0.75 * intensity})` : `rgba(241, 245, 249, ${0.65 * intensity})`;
            ctx.beginPath();
            ctx.moveTo(x * gridSize + warpX, y * gridSize + warpY);
            ctx.lineTo((x + 1) * gridSize + warpX, y * gridSize + warpY);
            ctx.lineTo((x + 1) * gridSize + warpX, (y + 1) * gridSize + warpY);
            ctx.lineTo(x * gridSize + warpX, (y + 1) * gridSize + warpY);
            ctx.closePath();
            ctx.fill();
            ctx.strokeStyle = 'rgba(71, 85, 105, 0.4)';
            ctx.lineWidth = 1;
            ctx.stroke();
        }
    }
});

// 242. Reality Void Tear in Floral Wallpaper
reg(['ch_wallpaper_void_tear', 'item_242'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    // Jagged vertical tear in the fabric of space
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(cx, cy - 80 * elScale);
    const tearSteps = 8;
    for (let s = 1; s < tearSteps; s++) {
        const sy = cy - 80 * elScale + (s / tearSteps) * 160 * elScale;
        const sx = cx + Math.sin(s * 1.8 + time * 2) * (20 + rough * 25) * elScale;
        ctx.lineTo(sx, sy);
    }
    ctx.lineTo(cx, cy + 80 * elScale);
    for (let s = tearSteps - 1; s > 0; s--) {
        const sy = cy - 80 * elScale + (s / tearSteps) * 160 * elScale;
        const sx = cx - Math.cos(s * 1.5 + time * 2) * (18 + rough * 22) * elScale;
        ctx.lineTo(sx, sy);
    }
    ctx.closePath();
    // Pitch-black cosmic void within the tear
    ctx.fillStyle = '#020617';
    ctx.fill();
    ctx.clip();
    // Swirling alien stars inside the tear
    for (let star = 0; star < 20; star++) {
        const stX = cx - 40 * elScale + ((star * 23 + time * 10 * speed) % (80 * elScale));
        const stY = cy - 70 * elScale + ((star * 37) % (140 * elScale));
        ctx.fillStyle = star % 3 === 0 ? '#a855f7' : '#38bdf8';
        ctx.beginPath();
        ctx.arc(stX, stY, (1 + (star % 3)) * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
    ctx.restore();
    // Glowing purple dimensional fracture edge
    ctx.strokeStyle = `rgba(168, 85, 247, ${0.85 * intensity})`;
    ctx.lineWidth = (3 + rough * 3) * elScale;
    ctx.stroke();
});

// 243. Psychic Madness Ripples Distorting Air Around Basalt Idol
reg(['ch_madness_ripples', 'item_243'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    // Central ancient basalt idol silhouette
    ctx.fillStyle = '#09090b';
    ctx.beginPath();
    ctx.moveTo(cx - 15 * elScale, cy + 30 * elScale);
    ctx.lineTo(cx - 20 * elScale, cy - 10 * elScale);
    ctx.lineTo(cx, cy - 35 * elScale);
    ctx.lineTo(cx + 20 * elScale, cy - 10 * elScale);
    ctx.lineTo(cx + 15 * elScale, cy + 30 * elScale);
    ctx.closePath();
    ctx.fill();
    // Expanding warped psychic shockwaves rippling outward
    for (let r = 0; r < 5; r++) {
        const radius = ((time * 60 * speed + r * 35) % (Math.min(W, H) * 0.5));
        const alpha = Math.max(0, 1 - radius / (Math.min(W, H) * 0.5));
        ctx.strokeStyle = `rgba(192, 132, 252, ${alpha * 0.7 * intensity})`;
        ctx.lineWidth = (2 + rough * 4) * elScale;
        ctx.beginPath();
        for (let a = 0; a <= Math.PI * 2; a += 0.2) {
            const radDistort = radius + Math.sin(a * 7 + time * 5) * (8 + rough * 12);
            const px = cx + Math.cos(a) * radDistort;
            const py = cy + Math.sin(a) * radDistort;
            if (a === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.stroke();
    }
});

// 244. Translucent Victorian Apparition Drifting Through Bookshelves
reg(['ch_drifting_apparition', 'item_244'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const ax = ((time * 45 * speed) % (W + 200)) - 100;
    const ay = H * 0.5 + Math.sin(time * 1.8) * 15 * elScale;
    // Ghostly spectral Victorian lady silhouette with trailing veil
    const ghostGrad = ctx.createRadialGradient(ax, ay, 5, ax, ay, 65 * elScale);
    ghostGrad.addColorStop(0, `rgba(224, 231, 255, ${0.8 * intensity})`);
    ghostGrad.addColorStop(0.5, `rgba(165, 180, 252, ${0.4 * intensity})`);
    ghostGrad.addColorStop(1, 'rgba(165, 180, 252, 0)');
    ctx.fillStyle = ghostGrad;
    ctx.beginPath();
    ctx.arc(ax, ay, 65 * elScale, 0, Math.PI * 2);
    ctx.fill();
    // Ethereal Victorian gown & veil
    ctx.fillStyle = `rgba(241, 245, 249, ${0.65 * intensity})`;
    ctx.beginPath();
    ctx.moveTo(ax, ay - 30 * elScale);
    ctx.quadraticCurveTo(ax + 20 * elScale, ay + 10 * elScale, ax + 25 * elScale + Math.sin(time * 4) * 8, ay + 45 * elScale);
    ctx.lineTo(ax - 25 * elScale + Math.cos(time * 4) * 8, ay + 45 * elScale);
    ctx.quadraticCurveTo(ax - 20 * elScale, ay + 10 * elScale, ax, ay - 30 * elScale);
    ctx.fill();
    // Hollow ghostly eyes
    ctx.fillStyle = '#312e81';
    ctx.beginPath();
    ctx.arc(ax - 5 * elScale, ay - 20 * elScale, 2 * elScale, 0, Math.PI * 2);
    ctx.arc(ax + 5 * elScale, ay - 20 * elScale, 2 * elScale, 0, Math.PI * 2);
    ctx.fill();
});

// 245. Cursed Violet Mist Curling Along Ritual Room Baseboards
reg(['ch_ritual_violet_mist', 'item_245'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const baseboardY = H * 0.8;
    // Rolling curling violet smoke tendrils
    const numClouds = 14;
    for (let c = 0; c < numClouds; c++) {
        const cx = ((time * 35 * speed + c * 50) % (W + 60)) - 30;
        const cy = baseboardY - 10 * elScale - Math.sin(time * 2 + c) * 15 * elScale;
        const rad = (20 + (c % 4) * 6 + rough * 12) * elScale;
        const mistGrad = ctx.createRadialGradient(cx, cy, 2, cx, cy, rad);
        mistGrad.addColorStop(0, `rgba(192, 132, 252, ${0.6 * intensity})`);
        mistGrad.addColorStop(0.6, `rgba(147, 51, 234, ${0.25 * intensity})`);
        mistGrad.addColorStop(1, 'rgba(147, 51, 234, 0)');
        ctx.fillStyle = mistGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, rad, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 246. Thick Coastal Fog Rolling Relentlessly Across Rotting Pier (Top-Down Pier Deck)
reg(['ch_pier_coastal_fog', 'item_246'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    // Weathered rotting pier planks (top-down deck floor)
    const deckW = 100 * elScale, deckH = 70 * elScale;
    const plankW = 16 * elScale;
    const startX = cx - deckW * 0.5;
    const numPlanks = Math.ceil(deckW / plankW);

    ctx.save();
    for (let p = 0; p < numPlanks; p++) {
        const px = startX + p * plankW;
        ctx.fillStyle = p % 2 === 0 ? 'rgba(68, 64, 60, 0.45)' : 'rgba(87, 83, 78, 0.4)';
        ctx.fillRect(px, cy - deckH * 0.5, plankW - 2 * elScale, deckH);
        // Iron spike heads
        ctx.fillStyle = '#292524';
        ctx.fillRect(px + 3 * elScale, cy - deckH * 0.45, 2 * elScale, 2 * elScale);
        ctx.fillRect(px + 3 * elScale, cy + deckH * 0.45 - 2 * elScale, 2 * elScale, 2 * elScale);
    }

    // Heavy cold sea fog banks sweeping across planks
    for (let f = 0; f < 8; f++) {
        const fang = (time * 0.6 * speed + f * 0.8);
        const fdist = (Math.sin(time * 0.8 + f) * 0.5 + 0.5) * (deckW * 0.6);
        const fx = cx + Math.cos(fang) * fdist;
        const fy = cy + Math.sin(fang * 1.2) * (deckH * 0.4);
        const fr = (35 + f * 6 + rough * 20) * elScale;
        const fog = ctx.createRadialGradient(fx, fy, 4, fx, fy, fr);
        fog.addColorStop(0, `rgba(203, 213, 225, ${0.45 * intensity})`);
        fog.addColorStop(1, 'rgba(203, 213, 225, 0)');
        ctx.fillStyle = fog;
        ctx.beginPath();
        ctx.arc(fx, fy, fr, 0, Math.PI * 2);
        ctx.fill();
    }
    ctx.restore();
});

// 247. Rain Streaks Tapping Against Gothic Stained-Glass Window (Floor Light Projection)
reg(['ch_stainedglass_rain', 'item_247'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    // Jeweled stained-glass light projections falling across the floor
    const colors = [
        `rgba(220, 38, 38, ${0.35 * intensity})`,
        `rgba(37, 99, 235, ${0.35 * intensity})`,
        `rgba(147, 51, 234, ${0.35 * intensity})`,
        `rgba(234, 179, 8, ${0.35 * intensity})`
    ];
    for (let c = 0; c < 4; c++) {
        const px = cx + (c % 2 === 0 ? -1 : 1) * 35 * elScale;
        const py = cy + (c < 2 ? -1 : 1) * 35 * elScale;
        const pGrad = ctx.createRadialGradient(px, py, 2, px, py, 45 * elScale);
        pGrad.addColorStop(0, colors[c]);
        pGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = pGrad;
        ctx.beginPath();
        ctx.arc(px, py, 45 * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
    // Diagonal rain streaks tapping down the floor
    const numStreaks = 25;
    ctx.strokeStyle = `rgba(186, 230, 253, ${0.75 * intensity})`;
    ctx.lineWidth = (1.5 + rough * 1.5) * elScale;
    for (let r = 0; r < numStreaks; r++) {
        const sx = ((r * 47 + time * 120 * speed) % (W * 0.8)) + W * 0.1;
        const sy = ((time * 250 * speed + r * 63) % (H * 0.85)) + H * 0.05;
        const len = (18 + (r % 4) * 8) * elScale;
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(sx - len * 0.4, sy + len);
        ctx.stroke();
    }
});

// 248. Crisp Dead Leaves Swirling Across Cemetery Path
reg(['ch_cemetery_leaves', 'item_248'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numLeaves = 22;
    for (let l = 0; l < numLeaves; l++) {
        const lx = ((time * 65 * speed + l * 43) % (W + 60)) - 30;
        const ly = H * 0.5 + Math.sin(time * 3 * speed + l * 0.8) * (H * 0.35);
        const rot = time * 5 + l;
        ctx.save();
        ctx.translate(lx, ly);
        ctx.rotate(rot);
        ctx.fillStyle = l % 3 === 0 ? '#78350f' : (l % 3 === 1 ? '#9a3412' : '#451a03');
        ctx.beginPath();
        ctx.ellipse(0, 0, (6 + rough * 3) * elScale, (3 + rough * 2) * elScale, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
});

// 249. Murder of Crows Flying Across Pale Full Moon
reg(['ch_crows_fullmoon', 'item_249'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const mx = W * 0.5, my = H * 0.5, mr = Math.min(W, H) * 0.32 * elScale;
    // Pale glowing full moon
    const moonGrad = ctx.createRadialGradient(mx, my, mr * 0.2, mx, my, mr);
    moonGrad.addColorStop(0, `rgba(254, 252, 232, ${0.9 * intensity})`);
    moonGrad.addColorStop(0.7, `rgba(254, 240, 138, ${0.65 * intensity})`);
    moonGrad.addColorStop(1, 'rgba(254, 240, 138, 0)');
    ctx.fillStyle = moonGrad;
    ctx.beginPath();
    ctx.arc(mx, my, mr, 0, Math.PI * 2);
    ctx.fill();
    // Flock of dark silhouettes of flapping crows
    const numCrows = 11;
    for (let c = 0; c < numCrows; c++) {
        const cx = ((time * 110 * speed + c * 55) % (W + 100)) - 50;
        const cy = my - 40 * elScale + Math.sin(c * 1.3) * 50 * elScale;
        const flap = Math.sin(time * 16 * speed + c);
        ctx.fillStyle = '#09090b';
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx - 8 * elScale, cy - flap * 8 * elScale);
        ctx.lineTo(cx - 14 * elScale, cy - flap * 4 * elScale);
        ctx.lineTo(cx - 5 * elScale, cy + 2 * elScale);
        ctx.lineTo(cx - 14 * elScale, cy + flap * 4 * elScale);
        ctx.lineTo(cx - 8 * elScale, cy + flap * 8 * elScale);
        ctx.closePath();
        ctx.fill();
    }
});

// 250. Blue Cigarette Smoke Drifting Across Detective Banker Lamp (Top-Down Desk)
reg(['ch_cigarette_smoke_lamp', 'item_250'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;

    // Warm emerald light oval cast onto desk surface from overhead green shade
    const lampGrad = ctx.createRadialGradient(cx, cy, 5, cx, cy, 65 * elScale);
    lampGrad.addColorStop(0, `rgba(52, 211, 153, ${0.75 * intensity})`);
    lampGrad.addColorStop(0.5, `rgba(16, 185, 129, ${0.4 * intensity})`);
    lampGrad.addColorStop(1, 'rgba(16, 185, 129, 0)');
    ctx.fillStyle = lampGrad;
    ctx.beginPath();
    ctx.ellipse(cx, cy, 65 * elScale, 45 * elScale, 0, 0, Math.PI * 2);
    ctx.fill();

    // Top-down banker lamp hood (rounded green glass rectangle)
    ctx.fillStyle = '#065f46';
    ctx.fillRect(cx - 24 * elScale, cy - 8 * elScale, 48 * elScale, 16 * elScale);
    ctx.strokeStyle = '#d97706'; // Brass frame
    ctx.lineWidth = 2 * elScale;
    ctx.strokeRect(cx - 24 * elScale, cy - 8 * elScale, 48 * elScale, 16 * elScale);

    // Brass circular ashtray
    const ashX = cx + 38 * elScale, ashY = cy + 12 * elScale;
    ctx.fillStyle = '#b45309';
    ctx.beginPath();
    ctx.arc(ashX, ashY, 10 * elScale, 0, Math.PI * 2);
    ctx.fill();

    // Slender cigarette with glowing cherry tip
    ctx.fillStyle = '#f8fafc';
    ctx.fillRect(ashX - 8 * elScale, ashY - 2 * elScale, 12 * elScale, 4 * elScale);
    ctx.fillStyle = '#ef4444';
    ctx.beginPath();
    ctx.arc(ashX - 8 * elScale, ashY, 2.5 * elScale, 0, Math.PI * 2);
    ctx.fill();

    // Wispy blue cigarette smoke curling upward toward camera
    ctx.strokeStyle = `rgba(186, 230, 253, ${0.6 * intensity})`;
    ctx.lineWidth = (1.5 + rough * 2) * elScale;
    ctx.beginPath();
    let sx = ashX - 8 * elScale, sy = ashY;
    ctx.moveTo(sx, sy);
    for (let seg = 1; seg <= 6; seg++) {
        sx += Math.sin(time * 2.5 + seg) * 8 * elScale;
        sy -= 8 * elScale + Math.cos(time * 2 + seg) * 4;
        ctx.lineTo(sx, sy);
    }
    ctx.stroke();
});

// =========================================================================
// B. ANIMATED TEXTURES & VOLUMES (251 - 275) - Gothic Horror & Call of Cthulhu
// =========================================================================

// 251. Venetian Blind Shadow Stripes Shifting Across Office Floor (Floor Light Pool)
reg(['ch_venetian_blind_stripes', 'item_251'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    // Angled pool of warm amber window light on the floor
    const amberGlow = ctx.createRadialGradient(cx, cy, 10, cx, cy, Math.min(W, H) * 0.55);
    amberGlow.addColorStop(0, `rgba(245, 158, 11, ${0.35 * intensity})`);
    amberGlow.addColorStop(0.7, `rgba(217, 119, 6, ${0.15 * intensity})`);
    amberGlow.addColorStop(1, 'rgba(245, 158, 11, 0)');
    ctx.fillStyle = amberGlow;
    ctx.beginPath();
    ctx.arc(cx, cy, Math.min(W, H) * 0.55, 0, Math.PI * 2);
    ctx.fill();

    // Soft feathered shadow slats within the light pool
    const numStripes = 7;
    const stripeGap = (H * 0.8) / (numStripes + 1);
    const sway = Math.sin(time * 1.5 * speed) * (8 + rough * 8);
    ctx.fillStyle = `rgba(15, 23, 42, ${0.25 * intensity})`;
    for (let i = 0; i <= numStripes; i++) {
        const sy = H * 0.1 + i * stripeGap + sway;
        ctx.fillRect(W * 0.15, sy, W * 0.7, stripeGap * 0.35);
    }
});

// 252. Indigo Harbor Moonlight Rippling Across Oily Water
reg(['ch_harbor_indigo_moon', 'item_252'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    // Rippling iridescent indigo water surface
    const numRipples = 12;
    for (let i = 0; i < numRipples; i++) {
        const ry = (i / numRipples) * H;
        const waveH = Math.sin(time * 2.5 * speed + i * 0.8) * (8 + rough * 10);
        ctx.strokeStyle = `rgba(99, 102, 241, ${(0.25 + (i % 3) * 0.1) * intensity})`;
        ctx.lineWidth = (2 + (i % 2) * 2) * elScale;
        ctx.beginPath();
        for (let x = 0; x <= W; x += 25) {
            const y = ry + waveH + Math.sin(x * 0.04 + time * 3 + i) * 6;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
    }
    // Shimmering petroleum oil slick reflections
    for (let s = 0; s < 6; s++) {
        const sx = (W * 0.2) + ((s * 75 + time * 15 * speed) % (W * 0.6));
        const sy = H * 0.3 + (s * 35) % (H * 0.5);
        ctx.fillStyle = s % 2 === 0 ? `rgba(168, 85, 247, ${0.2 * intensity})` : `rgba(45, 212, 191, ${0.18 * intensity})`;
        ctx.beginPath();
        ctx.ellipse(sx, sy, (25 + s * 4) * elScale, 8 * elScale, 0.15, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 253. Sickly Green Gaslight in Damp Victorian Brick Sewer
reg(['ch_sewer_green_gaslight', 'item_253'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    // Sickly toxic green gaslight ambient gradient
    const cx = W * 0.5, cy = H * 0.4;
    const flicker = 0.85 + Math.sin(time * 16 * speed) * 0.15 + (Math.sin(time * 43) > 0.8 ? -0.2 : 0);
    const gasGlow = ctx.createRadialGradient(cx, cy, 10, cx, cy, Math.max(W, H) * 0.6);
    gasGlow.addColorStop(0, `rgba(74, 222, 128, ${0.45 * flicker * intensity})`);
    gasGlow.addColorStop(0.5, `rgba(22, 101, 52, ${0.25 * flicker * intensity})`);
    gasGlow.addColorStop(1, 'rgba(22, 101, 52, 0)');
    ctx.fillStyle = gasGlow;
    ctx.beginPath();
    ctx.arc(cx, cy, Math.max(W, H) * 0.6, 0, Math.PI * 2);
    ctx.fill();
    // Condensation drips down damp sewer brickwork
    ctx.strokeStyle = `rgba(134, 239, 172, ${0.6 * intensity})`;
    ctx.lineWidth = 1.5;
    for (let d = 0; d < 8; d++) {
        const dx = (d * 55 + W * 0.1) % (W * 0.8);
        const dy = ((time * 65 * speed + d * 35) % (H * 0.7)) + H * 0.15;
        ctx.beginPath();
        ctx.moveTo(dx, dy);
        ctx.lineTo(dx, dy + 10 * elScale);
        ctx.stroke();
    }
});

// 254. Forked Lightning Flashes Revealing Silhouettes Through Frosted Glass
reg(['ch_frosted_lightning_flash', 'item_254'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    // Lightning stroke trigger cycle
    const cycle = (time * speed) % 4.5;
    const isFlash = cycle < 0.2 || (cycle > 0.35 && cycle < 0.48);
    if (isFlash) {
        // Soft radial lightning flash illumination
        const cx = W * 0.5, cy = H * 0.5;
        const flashGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, Math.max(W, H) * 0.65);
        flashGrad.addColorStop(0, `rgba(240, 249, 255, ${0.75 * intensity})`);
        flashGrad.addColorStop(0.6, `rgba(224, 242, 254, ${0.45 * intensity})`);
        flashGrad.addColorStop(1, 'rgba(224, 242, 254, 0)');
        ctx.fillStyle = flashGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, Math.max(W, H) * 0.65, 0, Math.PI * 2);
        ctx.fill();

        // Terrifying lurking shadow silhouette
        ctx.fillStyle = `rgba(15, 23, 42, ${0.85 * intensity})`;
        const cx = W * 0.5, cy = H * 0.5;
        ctx.beginPath();
        // Head and shoulders
        ctx.arc(cx, cy - 25 * elScale, 18 * elScale, 0, Math.PI * 2);
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(cx - 35 * elScale, cy + 50 * elScale);
        ctx.lineTo(cx - 20 * elScale, cy - 5 * elScale);
        ctx.lineTo(cx + 20 * elScale, cy - 5 * elScale);
        ctx.lineTo(cx + 35 * elScale, cy + 50 * elScale);
        ctx.closePath();
        ctx.fill();
    }
    // Frosted glass condensation droplets
    ctx.fillStyle = `rgba(255, 255, 255, ${0.12 * intensity})`;
    for (let i = 0; i < 20; i++) {
        const rx = (i * 67) % W, ry = (i * 89) % H;
        ctx.beginPath();
        ctx.arc(rx, ry, (2 + (i % 3)) * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 255. Flickering Candle Shadows Dancing Across Chalk Ritual Circles
reg(['ch_ritual_chalk_candles', 'item_255'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5, rad = Math.min(W, H) * 0.35 * elScale;
    // Chalk ritual circles with occult runes
    ctx.strokeStyle = `rgba(241, 245, 249, ${0.55 * intensity})`;
    ctx.lineWidth = 2 * elScale;
    ctx.beginPath();
    ctx.arc(cx, cy, rad, 0, Math.PI * 2);
    ctx.arc(cx, cy, rad * 0.65, 0, Math.PI * 2);
    ctx.stroke();
    // Inner pentagram / heptagram lines
    ctx.beginPath();
    for (let p = 0; p < 5; p++) {
        const a1 = (p * 4 * Math.PI) / 5 - Math.PI * 0.5;
        const px = cx + Math.cos(a1) * (rad * 0.65);
        const py = cy + Math.sin(a1) * (rad * 0.65);
        if (p === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.stroke();
    // Wild dancing flame shadows swinging across chalk
    for (let s = 0; s < 5; s++) {
        const candAngle = (s / 5) * Math.PI * 2;
        const cX = cx + Math.cos(candAngle) * rad;
        const cY = cy + Math.sin(candAngle) * rad;
        const flicker = Math.sin(time * 18 * speed + s * 2) * 15 * elScale;
        ctx.fillStyle = `rgba(15, 23, 42, ${0.5 * intensity})`;
        ctx.beginPath();
        ctx.ellipse(cX + flicker, cY + 5 * elScale, 18 * elScale, 8 * elScale, candAngle, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 256. Dark Harbor Water Writhing With Shadowy Tentacles
reg(['ch_harbor_tentacle_water', 'item_256'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numTentacles = 5;
    for (let t = 0; t < numTentacles; t++) {
        const rootX = W * 0.2 + (t / (numTentacles - 1)) * (W * 0.6);
        const rootY = H * 0.85;
        ctx.strokeStyle = `rgba(15, 23, 42, ${(0.75 + (t % 2) * 0.15) * intensity})`;
        ctx.lineWidth = (8 + (t % 3) * 3) * elScale;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(rootX, rootY);
        let currX = rootX, currY = rootY;
        const segments = 6;
        for (let s = 1; s <= segments; s++) {
            const frac = s / segments;
            const undulate = Math.sin(time * 3 * speed + s * 0.9 + t) * (20 + rough * 15);
            currX += undulate * 0.5;
            currY -= (H * 0.5) / segments;
            ctx.lineTo(currX, currY);
        }
        ctx.stroke();
        // Sucker discs along the tentacle
        ctx.fillStyle = `rgba(76, 29, 149, ${0.65 * intensity})`;
        ctx.beginPath();
        ctx.arc(currX - 3 * elScale, currY + 4 * elScale, 3 * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 257. Rotting Floorboards Splintering and Collapsing Into Pit
reg(['ch_collapsing_floorboards', 'item_257'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    // Central jagged pitch-black chasm pit
    ctx.save();
    ctx.beginPath();
    ctx.ellipse(cx, cy, 75 * elScale, 45 * elScale, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#020617';
    ctx.fill();
    // Splintered snapped wooden planks hanging into the abyss
    ctx.strokeStyle = '#78350f';
    ctx.lineWidth = 4 * elScale;
    for (let p = 0; p < 8; p++) {
        const ang = (p / 8) * Math.PI * 2;
        const outerX = cx + Math.cos(ang) * 95 * elScale;
        const outerY = cy + Math.sin(ang) * 60 * elScale;
        const sag = Math.sin(time * 2 + p) * 6 * elScale;
        const innerX = cx + Math.cos(ang) * 45 * elScale;
        const innerY = cy + Math.sin(ang) * 30 * elScale + sag;
        ctx.beginPath();
        ctx.moveTo(outerX, outerY);
        ctx.lineTo(innerX, innerY);
        ctx.stroke();
    }
    ctx.restore();
    // Falling dust and wood splinters
    for (let d = 0; d < 10; d++) {
        const dx = cx - 30 * elScale + ((d * 23 + time * 15) % (60 * elScale));
        const dy = cy - 20 * elScale + ((time * 50 * speed + d * 35) % (60 * elScale));
        ctx.fillStyle = '#b45309';
        ctx.beginPath();
        ctx.arc(dx, dy, 1.5 * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 258. Endless Carpet of Pale Maggots Writhing Across Crypt Floor
reg(['ch_crypt_maggot_carpet', 'item_258'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numMaggots = 42;
    for (let m = 0; m < numMaggots; m++) {
        const seed = m * 97.3;
        const mx = (seed * 11) % (W * 0.9) + W * 0.05;
        const my = (seed * 23) % (H * 0.9) + H * 0.05;
        const wiggle = Math.sin(time * 8 * speed + m) * 0.45;
        const maggotLen = (9 + (m % 4) * 2) * elScale;
        ctx.save();
        ctx.translate(mx, my);
        ctx.rotate((m * 1.7) + wiggle);
        // Creamy pale translucent maggot body
        ctx.strokeStyle = `rgba(241, 245, 249, ${0.85 * intensity})`;
        ctx.lineWidth = 3.5 * elScale;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(-maggotLen * 0.5, 0);
        ctx.quadraticCurveTo(0, wiggle * 6 * elScale, maggotLen * 0.5, 0);
        ctx.stroke();
        // Tiny dark head tip
        ctx.fillStyle = '#451a03';
        ctx.beginPath();
        ctx.arc(maggotLen * 0.5, 0, 1.2 * elScale, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
});

// 259. Bubbling Pool of Black Tar Whispering With Trapped Souls
reg(['ch_whispering_tar_pool', 'item_259'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    // Inky black viscous tar pool
    ctx.fillStyle = '#09090b';
    ctx.beginPath();
    ctx.ellipse(cx, cy, 90 * elScale, 55 * elScale, 0, 0, Math.PI * 2);
    ctx.fill();
    // Bursting viscous tar domes
    for (let b = 0; b < 6; b++) {
        const bx = cx - 50 * elScale + ((b * 47) % (100 * elScale));
        const by = cy - 25 * elScale + ((b * 31) % (50 * elScale));
        const bubblePhase = (time * 2.5 * speed + b * 1.4) % 3;
        const bubbleRad = bubblePhase < 2 ? (bubblePhase / 2) * 12 * elScale : 0;
        if (bubbleRad > 0) {
            ctx.fillStyle = '#18181b';
            ctx.beginPath();
            ctx.arc(bx, by, bubbleRad, 0, Math.PI * 2);
            ctx.fill();
            // Highlight
            ctx.fillStyle = `rgba(161, 161, 170, ${0.5 * intensity})`;
            ctx.beginPath();
            ctx.arc(bx - bubbleRad * 0.3, by - bubbleRad * 0.3, bubbleRad * 0.25, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    // Translucent anguished face screaming from the tar
    const facePhase = Math.sin(time * 1.8 * speed);
    if (facePhase > 0.4) {
        const faceAlpha = (facePhase - 0.4) * 0.8 * intensity;
        ctx.strokeStyle = `rgba(212, 212, 216, ${faceAlpha})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(cx, cy - 5 * elScale, 15 * elScale, 0, Math.PI * 2); // face outline
        ctx.stroke();
        ctx.fillStyle = `rgba(212, 212, 216, ${faceAlpha})`;
        ctx.beginPath();
        ctx.arc(cx - 5 * elScale, cy - 8 * elScale, 2 * elScale, 0, Math.PI * 2); // eye L
        ctx.arc(cx + 5 * elScale, cy - 8 * elScale, 2 * elScale, 0, Math.PI * 2); // eye R
        ctx.fill();
        ctx.beginPath();
        ctx.ellipse(cx, cy + 3 * elScale, 4 * elScale, 7 * elScale, 0, 0, Math.PI * 2); // screaming mouth
        ctx.stroke();
    }
});

// 260. Cursed Black Hoarfrost Creeping Rapidly Over Surfaces
reg(['ch_creeping_hoarfrost', 'item_260'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const numBranches = 10;
    const maxReach = Math.min(W, H) * 0.42 * elScale;
    ctx.strokeStyle = `rgba(15, 23, 42, ${0.85 * intensity})`;
    ctx.lineWidth = (2 + rough * 2) * elScale;
    for (let b = 0; b < numBranches; b++) {
        const baseAng = (b / numBranches) * Math.PI * 2;
        const reach = ((time * 30 * speed + b * 25) % maxReach);
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        let px = cx, py = cy;
        const steps = 5;
        for (let s = 1; s <= steps; s++) {
            const frac = s / steps;
            const dist = reach * frac;
            const ang = baseAng + Math.sin(s * 2.5 + b) * (0.35 + rough * 0.2);
            px = cx + Math.cos(ang) * dist;
            py = cy + Math.sin(ang) * dist;
            ctx.lineTo(px, py);
        }
        ctx.stroke();
    }
});

// 261. Towering Library Bookshelves Shuddering & Groaning
reg(['ch_rattling_bookshelves', 'item_261'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numShelves = 4;
    for (let s = 0; s < numShelves; s++) {
        const sy = H * 0.2 + (s / (numShelves - 1)) * (H * 0.6);
        // Shelf plank
        ctx.fillStyle = '#451a03';
        ctx.fillRect(W * 0.1, sy, W * 0.8, 8 * elScale);
        // Shuddering row of leather tomes
        const numBooks = 16;
        for (let b = 0; b < numBooks; b++) {
            const bx = W * 0.12 + b * 22 * elScale;
            const bookH = (26 + (b % 5) * 6) * elScale;
            const rattle = Math.sin(time * 22 * speed + b * 1.5 + s) * (1.8 + rough * 2);
            ctx.fillStyle = b % 3 === 0 ? '#7f1d1d' : (b % 3 === 1 ? '#1e3a8a' : '#14532d');
            ctx.fillRect(bx, sy - bookH + rattle, 18 * elScale, bookH);
        }
    }
});

// 262. Stainless Steel Morgue Cold-Storage Doors Rattling Violently
reg(['ch_morgue_freezer_rattle', 'item_262'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const doorW = 90 * elScale, doorH = 65 * elScale;
    const startX = W * 0.5 - doorW, startY = H * 0.5 - doorH;
    for (let r = 0; r < 2; r++) {
        for (let c = 0; c < 2; c++) {
            const dx = startX + c * (doorW + 10 * elScale);
            const dy = startY + r * (doorH + 10 * elScale);
            // Violent rattling shake on drawer #3
            const isViolent = (r === 1 && c === 0);
            const rattleX = isViolent ? Math.sin(time * 38 * speed) * (3.5 + rough * 3) : 0;
            const rattleY = isViolent ? Math.cos(time * 32 * speed) * (2.5 + rough * 2) : 0;
            // Stainless steel door plate
            ctx.fillStyle = isViolent ? '#94a3b8' : '#cbd5e1';
            ctx.fillRect(dx + rattleX, dy + rattleY, doorW, doorH);
            ctx.strokeStyle = '#475569';
            ctx.lineWidth = 2 * elScale;
            ctx.strokeRect(dx + rattleX, dy + rattleY, doorW, doorH);
            // Chrome latch handle
            ctx.fillStyle = '#0f172a';
            ctx.fillRect(dx + rattleX + doorW - 20 * elScale, dy + rattleY + doorH * 0.45, 12 * elScale, 6 * elScale);
            // Blood handprint smearing on rattling door
            if (isViolent) {
                ctx.fillStyle = `rgba(185, 28, 28, ${0.8 * intensity})`;
                ctx.beginPath();
                ctx.arc(dx + rattleX + doorW * 0.4, dy + rattleY + doorH * 0.4, 8 * elScale, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }
});

// 263. Padded Asylum Cell Walls Expanding & Contracting Like Lungs
reg(['ch_breathing_padded_walls', 'item_263'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const breath = Math.sin(time * 2 * speed) * (15 + rough * 15);
    const numRows = 4, numCols = 6;
    const padW = W / numCols, padH = H / numRows;
    for (let r = 0; r < numRows; r++) {
        for (let c = 0; c < numCols; c++) {
            const px = c * padW, py = r * padH;
            const distCenter = Math.hypot((c - numCols * 0.5), (r - numRows * 0.5));
            const bulg = Math.sin(time * 2 * speed - distCenter * 0.4) * 8 * elScale;
            // Padded leather tile
            ctx.fillStyle = `rgba(226, 232, 240, ${(0.35 + bulg * 0.02) * intensity})`;
            ctx.fillRect(px + 4, py + 4, padW - 8, padH - 8);
            // Central tufted button
            ctx.fillStyle = '#475569';
            ctx.beginPath();
            ctx.arc(px + padW * 0.5, py + padH * 0.5, 3.5 * elScale, 0, Math.PI * 2);
            ctx.fill();
        }
    }
});

// 264. Oily Street Puddle Reflecting Alien Cosmos With Two Moons
reg(['ch_cosmic_asphalt_puddle', 'item_264'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    ctx.save();
    // Organic irregular puddle outline
    ctx.beginPath();
    ctx.ellipse(cx, cy, 95 * elScale, 55 * elScale, 0, 0, Math.PI * 2);
    ctx.fillStyle = '#020617';
    ctx.fill();
    ctx.clip();
    // Swirling alien purple-cyan nebula reflection
    const nebGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, 80 * elScale);
    nebGrad.addColorStop(0, `rgba(147, 51, 234, ${0.85 * intensity})`);
    nebGrad.addColorStop(0.6, `rgba(6, 182, 212, ${0.45 * intensity})`);
    nebGrad.addColorStop(1, 'rgba(15, 23, 42, 0.9)');
    ctx.fillStyle = nebGrad;
    ctx.beginPath();
    ctx.ellipse(cx, cy, 95 * elScale, 55 * elScale, 0, 0, Math.PI * 2);
    ctx.fill();
    // Two twin alien moons reflecting in the puddle
    ctx.fillStyle = '#fef08a';
    ctx.beginPath();
    ctx.arc(cx - 30 * elScale, cy - 15 * elScale, 14 * elScale, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#f43f5e';
    ctx.beginPath();
    ctx.arc(cx + 35 * elScale, cy + 10 * elScale, 9 * elScale, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
    // Wet asphalt puddle rim glint
    ctx.strokeStyle = `rgba(148, 163, 184, ${0.5 * intensity})`;
    ctx.lineWidth = 2 * elScale;
    ctx.beginPath();
    ctx.ellipse(cx, cy, 96 * elScale, 56 * elScale, 0, 0, Math.PI * 2);
    ctx.stroke();
});

// 265. Ornate Victorian Wallpaper Patterns Shifting Into Blinking Eyes
reg(['ch_wallpaper_blinking_eyes', 'item_265'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numEyes = 8;
    for (let e = 0; e < numEyes; e++) {
        const ex = (W * 0.15) + (e % 4) * (W * 0.24);
        const ey = (H * 0.25) + Math.floor(e / 4) * (H * 0.5);
        // Periodic sinister eye blinking cycle
        const blinkCycle = Math.sin(time * 3 * speed + e * 1.7);
        const isOpen = blinkCycle > 0.2;
        const eyeOpenH = isOpen ? (blinkCycle * 14 * elScale) : 0;
        // Ornate damask floral background motif
        ctx.strokeStyle = `rgba(185, 28, 28, ${0.4 * intensity})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(ex, ey, 22 * elScale, 0, Math.PI * 2);
        ctx.stroke();
        // Revealing golden eye
        if (eyeOpenH > 1) {
            ctx.fillStyle = '#fef08a';
            ctx.beginPath();
            ctx.ellipse(ex, ey, 18 * elScale, eyeOpenH, 0, 0, Math.PI * 2);
            ctx.fill();
            // Slit pupil tracking
            ctx.fillStyle = '#0f172a';
            ctx.beginPath();
            ctx.ellipse(ex + Math.sin(time * 2 + e) * 4, ey, 3 * elScale, eyeOpenH * 0.85, 0, 0, Math.PI * 2);
            ctx.fill();
        }
    }
});

// 266. Monochrome Noir Film Grain & Scratches
reg(['ch_noir_filmgrain', 'item_266'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    // Dancing vertical emulsion hair scratches
    ctx.strokeStyle = `rgba(241, 245, 249, ${0.45 * intensity})`;
    ctx.lineWidth = 1;
    for (let s = 0; s < 4; s++) {
        const sx = ((time * 350 * speed + s * 140) % W);
        ctx.beginPath();
        ctx.moveTo(sx, 0);
        ctx.lineTo(sx + (Math.random() - 0.5) * 4, H);
        ctx.stroke();
    }
    // High-frequency film grain specks
    for (let g = 0; g < 45; g++) {
        const gx = Math.random() * W, gy = Math.random() * H;
        ctx.fillStyle = Math.random() > 0.5 ? `rgba(255, 255, 255, ${0.35 * intensity})` : `rgba(0, 0, 0, ${0.35 * intensity})`;
        ctx.fillRect(gx, gy, (1 + Math.random() * 2) * elScale, (1 + Math.random() * 2) * elScale);
    }
});

// 267. Reality-Warping Chromatic Aberration Around Summoning Altar
reg(['ch_altar_chromatic_aberration', 'item_267'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const pulse = Math.sin(time * 4 * speed) * (15 + rough * 15);
    // Triple offset RGB distortion rings
    const rad = 70 * elScale + pulse;
    // Red channel ring
    ctx.strokeStyle = `rgba(239, 68, 68, ${0.65 * intensity})`;
    ctx.lineWidth = 4 * elScale;
    ctx.beginPath();
    ctx.arc(cx - 5 * elScale, cy, rad, 0, Math.PI * 2);
    ctx.stroke();
    // Green channel ring
    ctx.strokeStyle = `rgba(34, 197, 94, ${0.65 * intensity})`;
    ctx.beginPath();
    ctx.arc(cx, cy - 3 * elScale, rad, 0, Math.PI * 2);
    ctx.stroke();
    // Blue channel ring
    ctx.strokeStyle = `rgba(59, 130, 246, ${0.65 * intensity})`;
    ctx.beginPath();
    ctx.arc(cx + 5 * elScale, cy + 3 * elScale, rad, 0, Math.PI * 2);
    ctx.stroke();
});

// 268. Static Snow Shifting Into Ghostly Faces Across CRT TVs
reg(['ch_crttv_ghost_static', 'item_268'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const tvW = 120 * elScale, tvH = 90 * elScale;
    // Curved CRT monitor chassis
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(cx - tvW * 0.5, cy - tvH * 0.5, tvW, tvH);
    // CRT glass phosphor screen
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(cx - tvW * 0.5 + 8 * elScale, cy - tvH * 0.5 + 8 * elScale, tvW - 16 * elScale, tvH - 16 * elScale);
    // Noise static dots
    for (let i = 0; i < 35; i++) {
        const sx = cx - tvW * 0.5 + 10 * elScale + Math.random() * (tvW - 20 * elScale);
        const sy = cy - tvH * 0.5 + 10 * elScale + Math.random() * (tvH - 20 * elScale);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.5 * intensity})`;
        ctx.fillRect(sx, sy, 2 * elScale, 2 * elScale);
    }
    // Emerging ghostly face from the static
    const facePhase = Math.sin(time * 2.5 * speed);
    if (facePhase > 0.2) {
        ctx.fillStyle = `rgba(186, 230, 253, ${(facePhase - 0.2) * 0.7 * intensity})`;
        ctx.beginPath();
        ctx.arc(cx, cy - 5 * elScale, 16 * elScale, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#020617';
        ctx.beginPath();
        ctx.arc(cx - 5 * elScale, cy - 8 * elScale, 3 * elScale, 0, Math.PI * 2);
        ctx.arc(cx + 5 * elScale, cy - 8 * elScale, 3 * elScale, 0, Math.PI * 2);
        ctx.arc(cx, cy + 4 * elScale, 4 * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 269. Localized Gravity Inversion Zone (Top-Down Forced Perspective)
reg(['ch_gravity_inversion', 'item_269'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    ctx.save();
    // Inversion field boundary ring on the floor
    const fieldR = 85 * elScale;
    ctx.strokeStyle = 'rgba(168, 85, 247, ' + (0.8 * intensity) + ')';
    ctx.lineWidth = 2 * elScale;
    ctx.beginPath();
    ctx.arc(cx, cy, fieldR, 0, Math.PI * 2);
    ctx.stroke();

    // Floating objects (books, chairs, papers) lifting off floor toward camera
    const numObjects = 10;
    for (let o = 0; o < numObjects; o++) {
        const seed = o * 31.7;
        const oAng = seed + time * 0.5 * speed;
        const oDist = (seed * 13) % (fieldR * 0.75);
        const ox = cx + Math.cos(oAng) * oDist;
        const oy = cy + Math.sin(oAng) * oDist;

        // Vertical levitation oscillation: Z-axis height
        const zHeight = Math.sin(time * 2 * speed + o * 1.5) * 0.5 + 0.5; // 0 (floor) to 1.0 (ceiling)
        const objScale = 0.85 + zHeight * 0.45; // Expands as it gets closer to camera

        // 1. Expanding, soft floor shadow beneath floating object
        const shadowSpread = (12 + zHeight * 16) * elScale;
        const shadowAlpha = (0.4 - zHeight * 0.25) * intensity;
        ctx.fillStyle = 'rgba(15, 23, 42, ' + shadowAlpha + ')';
        ctx.beginPath();
        ctx.ellipse(ox + zHeight * 10 * elScale, oy + zHeight * 10 * elScale, shadowSpread, shadowSpread * 0.6, 0, 0, Math.PI * 2);
        ctx.fill();

        // 2. Floating object viewed from above
        ctx.save();
        ctx.translate(ox, oy);
        ctx.rotate(time * (1 + (o % 3)) + o);
        ctx.scale(objScale, objScale);

        if (o % 3 === 0) {
            // Floating spellbook viewed from above
            ctx.fillStyle = '#451a03'; // Leather cover
            ctx.fillRect(-10 * elScale, -14 * elScale, 20 * elScale, 28 * elScale);
            ctx.fillStyle = '#fef3c7'; // Parchment pages edge
            ctx.fillRect(-8 * elScale, -12 * elScale, 16 * elScale, 24 * elScale);
        } else if (o % 3 === 1) {
            // Levitating chair seat seen from overhead
            ctx.fillStyle = '#78350f';
            ctx.fillRect(-12 * elScale, -12 * elScale, 24 * elScale, 24 * elScale);
            // Chair back rail
            ctx.fillStyle = '#451a03';
            ctx.fillRect(-12 * elScale, -12 * elScale, 24 * elScale, 4 * elScale);
        } else {
            // Loose fluttering parchment sheet
            ctx.fillStyle = '#fef08a';
            ctx.fillRect(-8 * elScale, -10 * elScale, 16 * elScale, 20 * elScale);
        }
        ctx.restore();
    }

    // Upward-drifting violet energy particles rising toward camera
    for (let p = 0; p < 8; p++) {
        const pt = (time * 1.5 + p * 0.4) % 1;
        const px = cx + Math.cos(p * 2 + time) * (pt * fieldR * 0.8);
        const py = cy + Math.sin(p * 2 + time) * (pt * fieldR * 0.8);
        const pSize = (2 + pt * 4) * elScale;
        ctx.fillStyle = 'rgba(192, 132, 252, ' + (1 - pt) * 0.7 * intensity + ')';
        ctx.beginPath();
        ctx.arc(px, py, pSize, 0, Math.PI * 2);
        ctx.fill();
    }
    ctx.restore();
});

// 270. Glowing Eldritch Runes Burning Sequentially Into Floorboards
reg(['ch_burning_eldritch_runes', 'item_270'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numRunes = 6;
    for (let r = 0; r < numRunes; r++) {
        const rx = (W * 0.18) + (r / (numRunes - 1)) * (W * 0.64);
        const ry = H * 0.5 + Math.sin(r * 1.2) * 20 * elScale;
        // Sequential burning activation
        const activePhase = (time * 1.5 * speed - r * 0.6) % 4;
        const isBurning = activePhase > 0 && activePhase < 2.5;
        if (isBurning) {
            const glow = ctx.createRadialGradient(rx, ry, 2, rx, ry, 35 * elScale);
            glow.addColorStop(0, `rgba(239, 68, 68, ${0.9 * intensity})`);
            glow.addColorStop(0.5, `rgba(249, 115, 22, ${0.5 * intensity})`);
            glow.addColorStop(1, 'rgba(239, 68, 68, 0)');
            ctx.fillStyle = glow;
            ctx.beginPath();
            ctx.arc(rx, ry, 35 * elScale, 0, Math.PI * 2);
            ctx.fill();
        }
        // Charred arcane rune sigil
        ctx.strokeStyle = isBurning ? '#fef08a' : '#1c1917';
        ctx.lineWidth = (2.5 + rough * 2) * elScale;
        ctx.beginPath();
        ctx.moveTo(rx - 10 * elScale, ry - 12 * elScale);
        ctx.lineTo(rx + 10 * elScale, ry + 12 * elScale);
        ctx.moveTo(rx + 10 * elScale, ry - 12 * elScale);
        ctx.lineTo(rx - 10 * elScale, ry + 12 * elScale);
        ctx.arc(rx, ry, 8 * elScale, 0, Math.PI * 1.5);
        ctx.stroke();
    }
});

// 271. Heavy Midnight Downpour Splashing Into Cobblestone Puddles
reg(['ch_midnight_cobblestone_rain', 'item_271'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    // Fast vertical driving rain needles
    ctx.strokeStyle = `rgba(186, 230, 253, ${0.65 * intensity})`;
    ctx.lineWidth = 1.5 * elScale;
    for (let r = 0; r < 30; r++) {
        const rx = (r * 43 + time * 60) % W;
        const ry = (time * 400 * speed + r * 71) % H;
        ctx.beginPath();
        ctx.moveTo(rx, ry);
        ctx.lineTo(rx - 4, ry + 18 * elScale);
        ctx.stroke();
    }
    // Expanding impact splash rings on puddles
    for (let s = 0; s < 8; s++) {
        const sx = ((s * 113) % (W * 0.8)) + W * 0.1;
        const sy = ((s * 79) % (H * 0.8)) + H * 0.1;
        const splashAge = (time * 3 * speed + s * 0.8) % 1;
        const splashR = splashAge * 22 * elScale;
        ctx.strokeStyle = `rgba(224, 242, 254, ${(1 - splashAge) * 0.75 * intensity})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.ellipse(sx, sy, splashR, splashR * 0.45, 0, 0, Math.PI * 2);
        ctx.stroke();
    }
});

// 272. Thick Cobwebs Trembling in Unseen Draft Across Ceiling
reg(['ch_crypt_ceiling_cobwebs', 'item_272'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const sway = Math.sin(time * 2.5 * speed) * (8 + rough * 10);
    // Interlaced web strands anchored across top corners
    ctx.strokeStyle = `rgba(226, 232, 240, ${0.5 * intensity})`;
    ctx.lineWidth = 1.2 * elScale;
    for (let i = 0; i < 7; i++) {
        const wx = (i / 6) * W;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(wx * 0.5 + sway, H * 0.35 + sway * 0.5, wx, 0);
        ctx.stroke();
    }
    // Trapped dust motes shaking in web
    for (let d = 0; d < 10; d++) {
        const dx = (d * 67 + sway) % (W * 0.8);
        const dy = (d * 23) % (H * 0.3);
        ctx.fillStyle = `rgba(241, 245, 249, ${0.45 * intensity})`;
        ctx.beginPath();
        ctx.arc(dx, dy, 2 * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 273. Faint Wisp of Fireplace Smoke Curling From Brick Chimney (Top-Down Rooftop Flue)
reg(['ch_chimney_woodsmoke', 'item_273'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    // Brick chimney stack top viewed from straight above
    ctx.fillStyle = '#78350f';
    ctx.fillRect(cx - 24 * elScale, cy - 20 * elScale, 48 * elScale, 40 * elScale);
    ctx.strokeStyle = '#451a03';
    ctx.lineWidth = 3 * elScale;
    ctx.strokeRect(cx - 24 * elScale, cy - 20 * elScale, 48 * elScale, 40 * elScale);

    // Ceramic flue tile pot opening
    ctx.fillStyle = '#1c1917';
    ctx.beginPath();
    ctx.arc(cx, cy, 12 * elScale, 0, Math.PI * 2);
    ctx.fill();

    // Billowing smoke puffs expanding in forced perspective as they rise toward camera
    for (let s = 0; s < 10; s++) {
        const age = (time * 0.7 * speed + s * 0.1) % 1;
        const driftX = Math.sin(time * 2 + s) * (18 + age * 30 * elScale);
        const driftY = -age * (25 * elScale) + Math.cos(time * 1.5 + s) * 10 * elScale;
        const rad = (10 + age * 45 + rough * 15) * elScale;
        const sx = cx + driftX, sy = cy + driftY;

        const smoke = ctx.createRadialGradient(sx, sy, 2, sx, sy, rad);
        smoke.addColorStop(0, `rgba(203, 213, 225, ${(1 - age) * 0.5 * intensity})`);
        smoke.addColorStop(1, 'rgba(203, 213, 225, 0)');
        ctx.fillStyle = smoke;
        ctx.beginPath();
        ctx.arc(sx, sy, rad, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 274. Whispering Shadow Silhouettes Pacing Behind Frosted Glass
reg(['ch_frosted_pacing_shadows', 'item_274'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const paceX = (W * 0.2) + ((Math.sin(time * 1.5 * speed) + 1) * 0.5) * (W * 0.6);
    const cy = H * 0.5;
    // Dark ominous pacing humanoid silhouette
    ctx.fillStyle = `rgba(15, 23, 42, ${0.65 * intensity})`;
    ctx.beginPath();
    // Head
    ctx.arc(paceX, cy - 35 * elScale, 18 * elScale, 0, Math.PI * 2);
    ctx.fill();
    // Broad coat silhouette
    ctx.beginPath();
    ctx.moveTo(paceX - 28 * elScale, cy + 60 * elScale);
    ctx.lineTo(paceX - 16 * elScale, cy - 12 * elScale);
    ctx.lineTo(paceX + 16 * elScale, cy - 12 * elScale);
    ctx.lineTo(paceX + 28 * elScale, cy + 60 * elScale);
    ctx.closePath();
    ctx.fill();
});

// 275. Floating Soot Particles Drifting Over Burned Crime Scene
reg(['ch_crimescene_soot', 'item_275'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numSoot = 35;
    for (let s = 0; s < numSoot; s++) {
        const sx = ((s * 53 + time * 20 * speed) % (W + 40)) - 20;
        const sy = H - ((time * 35 * speed + s * 41) % (H + 40));
        const rot = time * 3 + s;
        ctx.save();
        ctx.translate(sx, sy);
        ctx.rotate(rot);
        ctx.fillStyle = s % 4 === 0 ? `rgba(239, 68, 68, ${0.7 * intensity})` : `rgba(30, 41, 59, ${0.75 * intensity})`;
        ctx.beginPath();
        ctx.rect(-2 * elScale, -2 * elScale, (3 + (s % 3)) * elScale, (3 + (s % 3)) * elScale);
        ctx.fill();
        ctx.restore();
    }
});

// =========================================================================
// C. SINGLE ELEMENTS / SPOT PROPS (276 - 300) - Gothic Horror & Call of Cthulhu
// =========================================================================

// 276. Green Banker's Desk Lamp Flickering Over Case Files (Top-Down Battlemap View)
reg(['ch_bankers_desklamp', 'item_276'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.46;
    const flicker = 0.85 + Math.sin(time * 24 * speed) * 0.15;

    ctx.save();
    // 1. Warm emerald and bright white light pool cast down onto desk surface & case files
    const poolR = (65 + rough * 15) * elScale;
    const deskGlow = ctx.createRadialGradient(cx, cy + 8 * elScale, 4, cx, cy + 8 * elScale, poolR);
    deskGlow.addColorStop(0, `rgba(254, 252, 232, ${0.85 * flicker * intensity})`);
    deskGlow.addColorStop(0.35, `rgba(52, 211, 153, ${0.55 * flicker * intensity})`);
    deskGlow.addColorStop(0.7, `rgba(5, 150, 105, ${0.2 * flicker * intensity})`);
    deskGlow.addColorStop(1, 'rgba(5, 150, 105, 0)');
    ctx.fillStyle = deskGlow;
    ctx.beginPath();
    ctx.arc(cx, cy + 8 * elScale, poolR, 0, Math.PI * 2);
    ctx.fill();

    // 2. Scattered paper case files on desk illuminated by the lamp
    ctx.fillStyle = 'rgba(254, 243, 199, 0.45)';
    ctx.save();
    ctx.translate(cx - 20 * elScale, cy + 18 * elScale);
    ctx.rotate(0.2);
    ctx.fillRect(-15 * elScale, -10 * elScale, 30 * elScale, 20 * elScale);
    ctx.restore();

    ctx.save();
    ctx.translate(cx + 18 * elScale, cy + 14 * elScale);
    ctx.rotate(-0.15);
    ctx.fillRect(-12 * elScale, -14 * elScale, 24 * elScale, 28 * elScale);
    ctx.restore();

    // 3. Heavy stepped circular brass base on the desk surface (Top-Down)
    ctx.fillStyle = '#b45309';
    ctx.strokeStyle = '#78350f';
    ctx.lineWidth = 1.5 * elScale;
    ctx.beginPath();
    ctx.arc(cx, cy - 10 * elScale, 11 * elScale, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Inner brass tier
    ctx.fillStyle = '#d97706';
    ctx.beginPath();
    ctx.arc(cx, cy - 10 * elScale, 7 * elScale, 0, Math.PI * 2);
    ctx.fill();

    // Brass curved neck arm extending forward from base to shade
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 3.5 * elScale;
    ctx.beginPath();
    ctx.moveTo(cx, cy - 10 * elScale);
    ctx.lineTo(cx, cy + 4 * elScale);
    ctx.stroke();

    // 4. Emerald green glass cylindrical hood seen from directly overhead
    const shadeW = 34 * elScale;
    const shadeD = 15 * elScale;
    ctx.fillStyle = '#065f46';
    ctx.fillRect(cx - shadeW * 0.5, cy + 4 * elScale - shadeD * 0.5, shadeW, shadeD);
    ctx.strokeStyle = '#047857';
    ctx.lineWidth = 2 * elScale;
    ctx.strokeRect(cx - shadeW * 0.5, cy + 4 * elScale - shadeD * 0.5, shadeW, shadeD);

    // Glass glossy highlight along top curvature
    ctx.strokeStyle = `rgba(167, 243, 208, ${0.75 * intensity})`;
    ctx.lineWidth = 1.5 * elScale;
    ctx.beginPath();
    ctx.moveTo(cx - shadeW * 0.42, cy + 4 * elScale - shadeD * 0.2);
    ctx.lineTo(cx + shadeW * 0.42, cy + 4 * elScale - shadeD * 0.2);
    ctx.stroke();

    // Brass pull-chain bead seen from above
    ctx.fillStyle = '#f59e0b';
    ctx.beginPath();
    ctx.arc(cx + shadeW * 0.35, cy + 4 * elScale + shadeD * 0.5 + 4 * elScale, 2 * elScale, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
});

// 277. Black-Iron Streetlamp Flickering in Damp London Fog (Top-Down Hexagonal Hood)
reg(['ch_london_gaslamp', 'item_277'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const flicker = 0.78 + Math.sin(time * 18 * speed) * 0.18 + (Math.sin(time * 37) > 0.8 ? -0.25 : 0);

    // Warm amber-yellow circular light pool on wet cobblestones (360 degrees)
    const glowR = (75 + rough * 20) * elScale;
    const glow = ctx.createRadialGradient(cx, cy, 4, cx, cy, glowR);
    glow.addColorStop(0, `rgba(253, 224, 71, ${0.85 * flicker * intensity})`);
    glow.addColorStop(0.4, `rgba(245, 158, 11, ${0.4 * flicker * intensity})`);
    glow.addColorStop(0.8, `rgba(217, 119, 6, ${0.15 * flicker * intensity})`);
    glow.addColorStop(1, 'rgba(217, 119, 6, 0)');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(cx, cy, glowR, 0, Math.PI * 2);
    ctx.fill();

    // Top-down hexagonal wrought-iron lantern hood seen from above
    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
        const ang = (i / 6) * Math.PI * 2;
        const hx = cx + Math.cos(ang) * 16 * elScale;
        const hy = cy + Math.sin(ang) * 16 * elScale;
        if (i === 0) ctx.moveTo(hx, hy);
        else ctx.lineTo(hx, hy);
    }
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 2 * elScale;
    ctx.stroke();

    // Finial spike at the top of the hood
    ctx.fillStyle = '#475569';
    ctx.beginPath();
    ctx.arc(cx, cy, 5 * elScale, 0, Math.PI * 2);
    ctx.fill();

    // Piercing yellow gas jet flame glow under glass
    ctx.fillStyle = '#ffffff';
    ctx.shadowColor = '#fef08a';
    ctx.shadowBlur = 8;
    ctx.beginPath();
    ctx.arc(cx, cy, 3 * elScale, 0, Math.PI * 2);
    ctx.fill();
    ctx.shadowBlur = 0;
});

// 278. Three Dripping Tallow Candles Stuck to Human Skull (Top-Down Battlemap View)
reg(['ch_skull_tallow_candles', 'item_278'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;

    ctx.save();
    // 1. Warm candlelight pool on altar stone around skull
    const glowR = (60 + rough * 15) * elScale;
    const glow = ctx.createRadialGradient(cx, cy, 5, cx, cy, glowR);
    glow.addColorStop(0, `rgba(254, 240, 138, ${0.75 * intensity})`);
    glow.addColorStop(0.4, `rgba(245, 158, 11, ${0.35 * intensity})`);
    glow.addColorStop(1, 'rgba(245, 158, 11, 0)');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(cx, cy, glowR, 0, Math.PI * 2);
    ctx.fill();

    // 2. Human cranium seen looking straight down from above (Top-Down cranial vault / crown)
    ctx.fillStyle = '#e2e8f0';
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 1.5 * elScale;
    // Oval cranial dome
    ctx.beginPath();
    ctx.ellipse(cx, cy, 22 * elScale, 27 * elScale, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Brow & nasal bone ridge protruding slightly forward (South/down)
    ctx.fillStyle = '#cbd5e1';
    ctx.beginPath();
    ctx.ellipse(cx, cy + 22 * elScale, 11 * elScale, 6 * elScale, 0, 0, Math.PI * 2);
    ctx.fill();

    // Sagittal and coronal suture lines zig-zagging across the cranial vault
    ctx.strokeStyle = 'rgba(71, 85, 105, 0.55)';
    ctx.lineWidth = 1 * elScale;
    ctx.beginPath();
    ctx.moveTo(cx, cy - 20 * elScale);
    ctx.lineTo(cx - 2 * elScale, cy - 8 * elScale);
    ctx.lineTo(cx + 2 * elScale, cy + 4 * elScale);
    ctx.lineTo(cx, cy + 18 * elScale);
    ctx.moveTo(cx - 16 * elScale, cy - 5 * elScale);
    ctx.lineTo(cx, cy - 6 * elScale);
    ctx.lineTo(cx + 16 * elScale, cy - 5 * elScale);
    ctx.stroke();

    // 3. Three melted wax candle pools stuck to the top crown
    const candlePos = [
        { x: cx - 10 * elScale, y: cy - 7 * elScale, r: 5.5 * elScale },
        { x: cx + 2 * elScale,  y: cy - 14 * elScale, r: 6.5 * elScale },
        { x: cx + 9 * elScale,  y: cy + 4 * elScale,  r: 5.0 * elScale }
    ];

    // Melted tallow dripping radially down skull sides
    ctx.fillStyle = '#f8fafc';
    for (let d = 0; d < 6; d++) {
        const da = (d / 6) * Math.PI * 2;
        const dist = (20 + (d % 3) * 6) * elScale;
        ctx.beginPath();
        ctx.arc(cx + Math.cos(da) * dist, cy + Math.sin(da) * dist, (2 + (d % 2)) * elScale, 0, Math.PI * 2);
        ctx.fill();
    }

    candlePos.forEach((c, idx) => {
        // Wax puddle pool
        ctx.fillStyle = '#f8fafc';
        ctx.strokeStyle = '#e2e8f0';
        ctx.lineWidth = 1 * elScale;
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Black charred wick in center
        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.arc(c.x, c.y, 1.2 * elScale, 0, Math.PI * 2);
        ctx.fill();

        // Flickering golden flame point viewed from directly above
        const fFlicker = Math.sin(time * 20 * speed + idx * 2.3) * (1 * elScale);
        const fR = (3.5 + fFlicker) * elScale;
        const flameGrad = ctx.createRadialGradient(c.x, c.y, 0.5, c.x, c.y, fR * 2);
        flameGrad.addColorStop(0, '#ffffff');
        flameGrad.addColorStop(0.4, '#fef08a');
        flameGrad.addColorStop(0.75, '#f59e0b');
        flameGrad.addColorStop(1, 'rgba(239, 68, 68, 0)');
        ctx.fillStyle = flameGrad;
        ctx.beginPath();
        ctx.arc(c.x, c.y, fR * 2, 0, Math.PI * 2);
        ctx.fill();
    });

    ctx.restore();
});

// 279. Ornate Brass Lantern Burning With Eerie Purple Flame (Top-Down Battlemap View)
reg(['ch_purple_flame_lantern', 'item_279'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const flicker = 0.85 + Math.sin(time * 18 * speed) * 0.15;

    ctx.save();
    // 1. Radiant otherworldly violet light pool on floor tiles (360-deg circular coverage)
    const glowR = (80 + rough * 20) * elScale;
    const glow = ctx.createRadialGradient(cx, cy, 5, cx, cy, glowR);
    glow.addColorStop(0, `rgba(216, 180, 254, ${0.9 * flicker * intensity})`);
    glow.addColorStop(0.35, `rgba(168, 85, 247, ${0.55 * flicker * intensity})`);
    glow.addColorStop(0.7, `rgba(126, 34, 206, ${0.2 * flicker * intensity})`);
    glow.addColorStop(1, 'rgba(126, 34, 206, 0)');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(cx, cy, glowR, 0, Math.PI * 2);
    ctx.fill();

    // 2. Hexagonal ornate brass lantern hood seen from directly above (Top-Down)
    const hoodR = 18 * elScale;
    ctx.fillStyle = '#b45309';
    ctx.strokeStyle = '#78350f';
    ctx.lineWidth = 2 * elScale;
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
        const ang = (i / 6) * Math.PI * 2;
        const hx = cx + Math.cos(ang) * hoodR;
        const hy = cy + Math.sin(ang) * hoodR;
        if (i === 0) ctx.moveTo(hx, hy); else ctx.lineTo(hx, hy);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // 6 Decorative radial brass ribs from center to corners
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 1.5 * elScale;
    for (let i = 0; i < 6; i++) {
        const ang = (i / 6) * Math.PI * 2;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(ang) * hoodR, cy + Math.sin(ang) * hoodR);
        ctx.stroke();
    }

    // 3. Piercing violet witchfire glowing through central top vent
    const ventR = 8 * elScale;
    const ventGrad = ctx.createRadialGradient(cx, cy, 1, cx, cy, ventR);
    ventGrad.addColorStop(0, '#ffffff');
    ventGrad.addColorStop(0.4, '#f0abfc');
    ventGrad.addColorStop(0.8, '#c084fc');
    ventGrad.addColorStop(1, '#7e22ce');
    ctx.fillStyle = ventGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, ventR, 0, Math.PI * 2);
    ctx.fill();

    // 4. Central brass finial & hanging ring viewed from above
    ctx.fillStyle = '#451a03';
    ctx.beginPath();
    ctx.arc(cx, cy, 3.5 * elScale, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 1.8 * elScale;
    ctx.beginPath();
    ctx.ellipse(cx, cy - 2 * elScale, 5 * elScale, 2.5 * elScale, 0, 0, Math.PI * 2);
    ctx.stroke();

    // Floating purple witchfire motes drifting outward in forced perspective
    for (let m = 0; m < 5; m++) {
        const mAng = time * 3 + m * 1.3;
        const mDist = (12 + ((time * 25 + m * 18) % 45)) * elScale;
        const mx = cx + Math.cos(mAng) * mDist;
        const my = cy + Math.sin(mAng) * mDist;
        ctx.fillStyle = '#e879f9';
        ctx.beginPath();
        ctx.arc(mx, my, (1.5 + (m % 2)) * elScale, 0, Math.PI * 2);
        ctx.fill();
    }

    ctx.restore();
});

// 280. Pocket Zippo Lighter Snapping Open & Trembling in Hand
reg(['ch_pocket_lighter_flicker', 'item_280'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.55;
    const trembleX = Math.sin(time * 26 * speed) * (1.5 + rough * 2);
    const trembleY = Math.cos(time * 22 * speed) * (1.2 + rough * 1.5);
    // Silver lighter casing
    ctx.fillStyle = '#cbd5e1';
    ctx.fillRect(cx - 12 * elScale + trembleX, cy + trembleY, 24 * elScale, 36 * elScale);
    // Open flipped lid
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 3 * elScale;
    ctx.beginPath();
    ctx.moveTo(cx - 12 * elScale + trembleX, cy + trembleY);
    ctx.lineTo(cx - 24 * elScale + trembleX, cy - 12 * elScale + trembleY);
    ctx.stroke();
    // Chimney wick with trembling yellow flame
    const flameFlicker = Math.sin(time * 28 * speed) * 3;
    ctx.fillStyle = '#f59e0b';
    ctx.beginPath();
    ctx.ellipse(cx + trembleX, cy - 10 * elScale + trembleY, 4 * elScale, (10 + flameFlicker) * elScale, 0, 0, Math.PI * 2);
    ctx.fill();
});

// 281. Dark Ritual Dagger Vibrating & Bleeding Crimson Drops
reg(['ch_bleeding_ritual_dagger', 'item_281'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.45;
    const vib = Math.sin(time * 45 * speed) * (1.5 + rough * 1.8);
    // Obsidian wavy kris blade
    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 5 * elScale;
    ctx.beginPath();
    ctx.moveTo(cx + vib, cy - 35 * elScale);
    ctx.quadraticCurveTo(cx + 8 * elScale + vib, cy - 10 * elScale, cx + vib, cy + 15 * elScale);
    ctx.stroke();
    // Bone hilt with brass crossguard
    ctx.fillStyle = '#78350f';
    ctx.fillRect(cx - 10 * elScale + vib, cy + 15 * elScale, 20 * elScale, 6 * elScale);
    ctx.fillStyle = '#f1f5f9';
    ctx.fillRect(cx - 4 * elScale + vib, cy + 21 * elScale, 8 * elScale, 22 * elScale);
    // Crimson blood droplets welling on blade and dripping to floor
    for (let d = 0; d < 5; d++) {
        const dropProgress = (time * 2.5 * speed + d * 0.6) % 2;
        if (dropProgress < 1.2) {
            const dy = cy - 15 * elScale + dropProgress * 65 * elScale;
            ctx.fillStyle = `rgba(220, 38, 38, ${0.9 * intensity})`;
            ctx.beginPath();
            ctx.arc(cx + vib, dy, (2.5 + (d % 2)) * elScale, 0, Math.PI * 2);
            ctx.fill();
        }
    }
});

// 282. Open Manhole Bubbling With Putrid Green Sewer Gas
reg(['ch_manhole_sewer_fumes', 'item_282'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.55;
    // Cast-iron circular manhole ring
    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    ctx.ellipse(cx, cy, 45 * elScale, 22 * elScale, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 4 * elScale;
    ctx.stroke();
    // Ajar iron lid shifted to side
    ctx.fillStyle = '#1e293b';
    ctx.beginPath();
    ctx.ellipse(cx + 28 * elScale, cy - 8 * elScale, 40 * elScale, 18 * elScale, 0.2, 0, Math.PI * 2);
    ctx.fill();
    // Rising billows of nauseating chartreuse sewer gas
    for (let g = 0; g < 7; g++) {
        const age = (time * 0.9 * speed + g * 0.16) % 1;
        const gx = cx - 15 * elScale + Math.sin(time * 3 + g) * (20 + age * 25 * elScale);
        const gy = cy - age * (H * 0.55);
        const rad = (12 + age * 28 + rough * 15) * elScale;
        const gas = ctx.createRadialGradient(gx, gy, 2, gx, gy, rad);
        gas.addColorStop(0, `rgba(132, 204, 22, ${(1 - age) * 0.5 * intensity})`);
        gas.addColorStop(1, 'rgba(132, 204, 22, 0)');
        ctx.fillStyle = gas;
        ctx.beginPath();
        ctx.arc(gx, gy, rad, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 283. Iron Maiden Door Slowly Creaking Shut With Spikes
reg(['ch_iron_maiden_closing', 'item_283'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    // Sarcophagus body (back shell)
    ctx.fillStyle = '#1e293b';
    ctx.beginPath();
    ctx.ellipse(cx, cy, 32 * elScale, 55 * elScale, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 3 * elScale;
    ctx.stroke();
    // Ominously swinging heavy spiked door
    const swing = Math.sin(time * 1.2 * speed);
    const doorW = (28 * elScale) * Math.abs(swing);
    ctx.fillStyle = '#334155';
    ctx.fillRect(cx - 32 * elScale, cy - 50 * elScale, doorW, 100 * elScale);
    // Vicious rusted iron spikes pointing inward
    ctx.fillStyle = '#7f1d1d';
    for (let sp = 0; sp < 5; sp++) {
        const spy = cy - 35 * elScale + sp * 18 * elScale;
        ctx.beginPath();
        ctx.moveTo(cx - 32 * elScale + doorW, spy);
        ctx.lineTo(cx - 32 * elScale + doorW + 12 * elScale, spy + 3 * elScale);
        ctx.lineTo(cx - 32 * elScale + doorW, spy + 6 * elScale);
        ctx.closePath();
        ctx.fill();
    }
});

// 284. Coiled Pit Viper Hissing Behind Overturned Lab Beaker
reg(['ch_lab_pit_viper', 'item_284'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.55;
    // Overturned glass Erlenmeyer beaker
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.7)';
    ctx.lineWidth = 2 * elScale;
    ctx.beginPath();
    ctx.moveTo(cx - 25 * elScale, cy + 15 * elScale);
    ctx.lineTo(cx - 5 * elScale, cy - 25 * elScale);
    ctx.lineTo(cx + 15 * elScale, cy - 25 * elScale);
    ctx.lineTo(cx + 35 * elScale, cy + 15 * elScale);
    ctx.closePath();
    ctx.stroke();
    // Coiled venomous green serpent body
    ctx.strokeStyle = '#15803d';
    ctx.lineWidth = 7 * elScale;
    ctx.beginPath();
    ctx.arc(cx, cy + 10 * elScale, 18 * elScale, 0, Math.PI * 1.8);
    ctx.stroke();
    // Raised diamond-shaped head
    const strikeAng = Math.sin(time * 4 * speed) * 0.2;
    ctx.save();
    ctx.translate(cx + 12 * elScale, cy - 10 * elScale);
    ctx.rotate(strikeAng);
    ctx.fillStyle = '#166534';
    ctx.beginPath();
    ctx.moveTo(0, -6 * elScale);
    ctx.lineTo(12 * elScale, 0);
    ctx.lineTo(0, 6 * elScale);
    ctx.closePath();
    ctx.fill();
    // Flicking forked red tongue
    if (Math.sin(time * 12 * speed) > 0.3) {
        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(12 * elScale, 0);
        ctx.lineTo(20 * elScale, 0);
        ctx.lineTo(24 * elScale, -3 * elScale);
        ctx.moveTo(20 * elScale, 0);
        ctx.lineTo(24 * elScale, 3 * elScale);
        ctx.stroke();
    }
    ctx.restore();
});

// 285. Severed Elevator Cable Whipping Violently in Shaft
reg(['ch_elevator_cable_whip', 'item_285'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5;
    // Thrashing braided steel cable whipping against shaft walls
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 4 * elScale;
    ctx.beginPath();
    ctx.moveTo(cx, 0);
    let px = cx, py = 0;
    const segs = 7;
    for (let s = 1; s <= segs; s++) {
        const frac = s / segs;
        py += (H * 0.8) / segs;
        const whip = Math.sin(time * 16 * speed + s * 1.2) * (frac * 65 * elScale + rough * 25);
        px = cx + whip;
        ctx.lineTo(px, py);
    }
    ctx.stroke();
    // Flying friction sparks where cable strikes
    for (let sp = 0; sp < 6; sp++) {
        const spx = px + (Math.random() - 0.5) * 20 * elScale;
        const spy = py + (Math.random() - 0.5) * 20 * elScale;
        ctx.fillStyle = '#fbbf24';
        ctx.beginPath();
        ctx.arc(spx, spy, 2 * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 286. Brass Gramophone Playing Scratched Vinyl as Needle Bobs
reg(['ch_antique_gramophone', 'item_286'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.45, cy = H * 0.55;
    // Polished mahogany cabinet base
    ctx.fillStyle = '#78350f';
    ctx.fillRect(cx - 30 * elScale, cy, 60 * elScale, 25 * elScale);
    // Spinning black vinyl record on turntable
    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    ctx.ellipse(cx, cy, 32 * elScale, 10 * elScale, 0, 0, Math.PI * 2);
    ctx.fill();
    // Bobbing tonearm with needle
    const needleBob = Math.sin(time * 12 * speed) * 1.5;
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 2.5 * elScale;
    ctx.beginPath();
    ctx.moveTo(cx + 35 * elScale, cy - 10 * elScale);
    ctx.lineTo(cx + 10 * elScale, cy - 2 * elScale + needleBob);
    ctx.stroke();
    // Large fluted brass morning-glory horn
    ctx.fillStyle = '#d97706';
    ctx.beginPath();
    ctx.moveTo(cx + 25 * elScale, cy - 15 * elScale);
    ctx.quadraticCurveTo(cx + 45 * elScale, cy - 45 * elScale, cx + 70 * elScale, cy - 55 * elScale);
    ctx.lineTo(cx + 70 * elScale, cy - 15 * elScale);
    ctx.closePath();
    ctx.fill();
    // Floating eerie scratchy musical notes
    for (let n = 0; n < 3; n++) {
        const nx = cx + 70 * elScale + ((time * 30 + n * 25) % 40);
        const ny = cy - 40 * elScale - ((time * 25 + n * 20) % 35);
        ctx.fillStyle = `rgba(253, 224, 71, ${0.75 * intensity})`;
        ctx.beginPath();
        ctx.arc(nx, ny, 2.5 * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 287. Mahogany Grandfather Clock (Top-Down Battlemap View)
reg(['ch_pendulum_clock', 'item_287'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.45;
    ctx.save();
    // Top-down footprint against manor wall
    const clockW = 54 * elScale;
    const clockD = 36 * elScale; // Depth out from wall

    // Wall position guideline
    ctx.strokeStyle = '#292524';
    ctx.lineWidth = 2 * elScale;
    ctx.beginPath();
    ctx.moveTo(cx - 50 * elScale, cy - clockD * 0.5);
    ctx.lineTo(cx + 50 * elScale, cy - clockD * 0.5);
    ctx.stroke();

    // Carved mahogany clock cabinet top / pediment
    ctx.fillStyle = '#3e1a06';
    ctx.fillRect(cx - clockW * 0.5, cy - clockD * 0.5, clockW, clockD);
    ctx.strokeStyle = '#1c0a02';
    ctx.lineWidth = 2 * elScale;
    ctx.strokeRect(cx - clockW * 0.5, cy - clockD * 0.5, clockW, clockD);

    // Beveled glass hood top viewing port
    const glassW = clockW - 12 * elScale;
    const glassD = clockD - 10 * elScale;
    ctx.fillStyle = 'rgba(254, 240, 138, 0.12)';
    ctx.fillRect(cx - glassW * 0.5, cy - glassD * 0.5 + 2 * elScale, glassW, glassD);

    // White Roman numeral dial face seen through the top glass
    ctx.fillStyle = '#fafaf9';
    ctx.beginPath();
    ctx.ellipse(cx, cy + 2 * elScale, 14 * elScale, 10 * elScale, 0, 0, Math.PI * 2);
    ctx.fill();

    // Clock hands
    ctx.strokeStyle = '#18181b';
    ctx.lineWidth = 1.5 * elScale;
    ctx.beginPath();
    ctx.moveTo(cx, cy + 2 * elScale); ctx.lineTo(cx + 6 * elScale, cy - 3 * elScale);
    ctx.moveTo(cx, cy + 2 * elScale); ctx.lineTo(cx - 3 * elScale, cy + 5 * elScale);
    ctx.stroke();

    // Brass pendulum glint swinging back-and-forth rhythmically
    const swingAng = Math.sin(time * 3.14 * speed);
    const swingX = cx + swingAng * (16 * elScale);

    ctx.fillStyle = '#f59e0b'; // Polished brass disc glint
    ctx.beginPath();
    ctx.ellipse(swingX, cy + clockD * 0.5 - 4 * elScale, 5 * elScale, 3 * elScale, 0, 0, Math.PI * 2);
    ctx.fill();

    // Rhythmic ticking light pulse and shadow cast onto floor in front of clock
    const tickPulse = Math.abs(Math.sin(time * 3.14 * speed));
    const floorGlow = ctx.createRadialGradient(cx, cy + clockD * 0.5 + 15 * elScale, 2, cx, cy + clockD * 0.5 + 15 * elScale, 40 * elScale);
    floorGlow.addColorStop(0, 'rgba(245, 158, 11, ' + (0.8 * intensity) + ')');
    floorGlow.addColorStop(1, 'rgba(245, 158, 11, 0)');
    ctx.fillStyle = floorGlow;
    ctx.beginPath();
    ctx.ellipse(cx, cy + clockD * 0.5 + 15 * elScale, 35 * elScale, 18 * elScale, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
});

// 288. Distressed Rotary Telephone With Receiver Off Hook & Buzzing
reg(['ch_offhook_telephone', 'item_288'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.55;
    // Heavy black Bakelite telephone base
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(cx - 28 * elScale, cy - 10 * elScale, 56 * elScale, 35 * elScale);
    // Rotary dial wheel
    ctx.fillStyle = '#f1f5f9';
    ctx.beginPath();
    ctx.arc(cx, cy + 8 * elScale, 12 * elScale, 0, Math.PI * 2);
    ctx.fill();
    // Cradle prongs (empty)
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 3 * elScale;
    ctx.beginPath();
    ctx.moveTo(cx - 18 * elScale, cy - 10 * elScale);
    ctx.lineTo(cx - 18 * elScale, cy - 16 * elScale);
    ctx.moveTo(cx + 18 * elScale, cy - 10 * elScale);
    ctx.lineTo(cx + 18 * elScale, cy - 16 * elScale);
    ctx.stroke();
    // Receiver lying off the hook on table, buzzing violently
    const buzz = Math.sin(time * 50 * speed) * (2 + rough * 2);
    const recX = cx - 35 * elScale + buzz;
    const recY = cy + 18 * elScale + buzz * 0.5;
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(recX - 8 * elScale, recY - 6 * elScale, 16 * elScale, 32 * elScale);
    // Coiled black telephone cord connecting base to receiver
    ctx.strokeStyle = '#020617';
    ctx.lineWidth = 2 * elScale;
    ctx.beginPath();
    ctx.moveTo(cx - 20 * elScale, cy + 20 * elScale);
    for (let c = 1; c <= 5; c++) {
        const cxMid = cx - 20 * elScale - c * 3;
        const cyMid = cy + 20 * elScale + Math.sin(c * 2) * 4;
        ctx.lineTo(cxMid, cyMid);
    }
    ctx.lineTo(recX, recY + 16 * elScale);
    ctx.stroke();
    // Visible soundwave ripples from open earpiece
    for (let w = 1; w <= 3; w++) {
        ctx.strokeStyle = `rgba(148, 163, 184, ${(0.6 - w * 0.15) * intensity})`;
        ctx.beginPath();
        ctx.arc(recX - 6 * elScale, recY, w * 8 * elScale, Math.PI * 0.7, Math.PI * 1.3);
        ctx.stroke();
    }
});

// 289. Ceiling Paddle Fan Turning Slowly in Smoky Detective Agency
reg(['ch_detective_ceiling_fan', 'item_289'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const angle = time * 2.2 * speed;
    const bladeLen = 65 * elScale, bladeW = 14 * elScale;
    // Central brass motor housing
    ctx.fillStyle = '#b45309';
    ctx.beginPath();
    ctx.arc(cx, cy, 14 * elScale, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#78350f';
    ctx.lineWidth = 2.5 * elScale;
    ctx.stroke();
    // 4 spinning wooden paddle blades
    for (let b = 0; b < 4; b++) {
        const bAng = angle + (b * Math.PI * 0.5);
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(bAng);
        // Dark mahogany blade with bracket
        ctx.fillStyle = '#451a03';
        ctx.fillRect(12 * elScale, -bladeW * 0.5, bladeLen, bladeW);
        ctx.strokeStyle = '#292524';
        ctx.lineWidth = 1.5;
        ctx.strokeRect(12 * elScale, -bladeW * 0.5, bladeLen, bladeW);
        ctx.restore();
    }
    // Rotating shadow projected downward
    ctx.fillStyle = `rgba(15, 23, 42, ${0.25 * intensity})`;
    ctx.beginPath();
    ctx.arc(cx, cy + 15 * elScale, bladeLen * 0.9, 0, Math.PI * 2);
    ctx.fill();
});

// 290. Cast-Iron Morgue Autopsy Table With Blood Gutter Drain
reg(['ch_autopsy_table_drain', 'item_290'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const tabW = 110 * elScale, tabH = 65 * elScale;
    // Cast-iron morgue table slab
    ctx.fillStyle = '#475569';
    ctx.fillRect(cx - tabW * 0.5, cy - tabH * 0.5, tabW, tabH);
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 3 * elScale;
    ctx.strokeRect(cx - tabW * 0.5, cy - tabH * 0.5, tabW, tabH);
    // Recessed rim perimeter gutter
    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 2.5 * elScale;
    ctx.strokeRect(cx - tabW * 0.5 + 6 * elScale, cy - tabH * 0.5 + 6 * elScale, tabW - 12 * elScale, tabH - 12 * elScale);
    // Drain hole at foot of table
    const drainX = cx + tabW * 0.5 - 18 * elScale, drainY = cy;
    ctx.fillStyle = '#020617';
    ctx.beginPath();
    ctx.arc(drainX, drainY, 7 * elScale, 0, Math.PI * 2);
    ctx.fill();
    // Flowing rivulets of dark arterial blood streaming into the drain
    ctx.strokeStyle = `rgba(185, 28, 28, ${0.85 * intensity})`;
    ctx.lineWidth = (2.5 + rough * 1.5) * elScale;
    ctx.beginPath();
    ctx.moveTo(cx - 30 * elScale, cy - 12 * elScale);
    ctx.lineTo(cx + 10 * elScale, cy - 4 * elScale);
    ctx.lineTo(drainX, drainY);
    ctx.moveTo(cx - 20 * elScale, cy + 15 * elScale);
    ctx.lineTo(cx + 15 * elScale, cy + 6 * elScale);
    ctx.lineTo(drainX, drainY);
    ctx.stroke();
});

// 291. Carved Basalt Cthulhu Idol Sweating Oily Black Liquid
reg(['ch_sweating_cthulhu_idol', 'item_291'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.55;
    // Carved black basalt pedestal
    ctx.fillStyle = '#09090b';
    ctx.fillRect(cx - 35 * elScale, cy + 20 * elScale, 70 * elScale, 18 * elScale);
    // Cthulhu idol torso, clawed arms & winged back
    ctx.fillStyle = '#18181b';
    ctx.beginPath();
    // Winged crest
    ctx.moveTo(cx - 30 * elScale, cy - 25 * elScale);
    ctx.lineTo(cx, cy - 45 * elScale);
    ctx.lineTo(cx + 30 * elScale, cy - 25 * elScale);
    ctx.lineTo(cx + 18 * elScale, cy + 18 * elScale);
    ctx.lineTo(cx - 18 * elScale, cy + 18 * elScale);
    ctx.closePath();
    ctx.fill();
    // Cephalopod tentacle cluster beard hanging from face
    ctx.strokeStyle = '#27272a';
    ctx.lineWidth = 3 * elScale;
    for (let t = -3; t <= 3; t++) {
        ctx.beginPath();
        ctx.moveTo(cx + t * 4 * elScale, cy - 10 * elScale);
        ctx.quadraticCurveTo(cx + t * 6 * elScale + Math.sin(time + t) * 2, cy + 5 * elScale, cx + t * 3 * elScale, cy + 16 * elScale);
        ctx.stroke();
    }
    // Glistening beads of oily black liquid sweating down the idol
    for (let b = 0; b < 6; b++) {
        const bx = cx - 18 * elScale + ((b * 37) % (36 * elScale));
        const by = cy - 25 * elScale + ((time * 25 * speed + b * 20) % (45 * elScale));
        ctx.fillStyle = `rgba(15, 23, 42, ${0.95 * intensity})`;
        ctx.beginPath();
        ctx.arc(bx, by, (2 + (b % 2)) * elScale, 0, Math.PI * 2);
        ctx.fill();
        // Oily specular glint
        ctx.fillStyle = `rgba(168, 85, 247, ${0.7 * intensity})`;
        ctx.beginPath();
        ctx.arc(bx - 1, by - 1, 1 * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 292. Open Occult Grimoire Floating in Mid-Air With Smoking Pages
reg(['ch_floating_grimoire', 'item_292'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5;
    const floatY = H * 0.5 + Math.sin(time * 2.5 * speed) * 12 * elScale;
    // Ancient open tome wings
    ctx.fillStyle = '#78350f'; // leather cover
    ctx.beginPath();
    ctx.moveTo(cx, floatY + 20 * elScale);
    ctx.lineTo(cx - 45 * elScale, floatY + 12 * elScale);
    ctx.lineTo(cx - 42 * elScale, floatY - 22 * elScale);
    ctx.lineTo(cx, floatY - 14 * elScale);
    ctx.lineTo(cx + 42 * elScale, floatY - 22 * elScale);
    ctx.lineTo(cx + 45 * elScale, floatY + 12 * elScale);
    ctx.closePath();
    ctx.fill();
    // Yellowed parchment pages
    ctx.fillStyle = '#fef08a';
    ctx.fillRect(cx - 38 * elScale, floatY - 16 * elScale, 36 * elScale, 30 * elScale);
    ctx.fillRect(cx + 2 * elScale, floatY - 16 * elScale, 36 * elScale, 30 * elScale);
    // Wisps of sulfurous purple smoke drifting from the binding
    for (let s = 0; s < 5; s++) {
        const sx = cx + Math.sin(time * 3 + s) * 15 * elScale;
        const sy = floatY - 20 * elScale - ((time * 35 * speed + s * 22) % 45);
        ctx.fillStyle = `rgba(192, 132, 252, ${(0.6 - (s * 0.1)) * intensity})`;
        ctx.beginPath();
        ctx.arc(sx, sy, (4 + s * 2) * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 293. Spirit Trumpet Levitating Above S??ance Table Releasing Ectoplasm
reg(['ch_seance_spirit_trumpet', 'item_293'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5;
    const floatY = H * 0.5 + Math.sin(time * 2 * speed) * 15 * elScale;
    const tilt = Math.sin(time * 1.5 * speed) * 0.25;
    ctx.save();
    ctx.translate(cx, floatY);
    ctx.rotate(tilt);
    // Aluminum spirit trumpet cone
    ctx.fillStyle = '#94a3b8';
    ctx.beginPath();
    ctx.moveTo(-35 * elScale, -6 * elScale);
    ctx.lineTo(35 * elScale, -18 * elScale);
    ctx.lineTo(35 * elScale, 18 * elScale);
    ctx.lineTo(-35 * elScale, 6 * elScale);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 2 * elScale;
    ctx.stroke();
    // Ectoplasmic green-white mist pouring from bell of trumpet
    for (let e = 0; e < 6; e++) {
        const ex = 35 * elScale + ((time * 40 * speed + e * 20) % 55);
        const ey = Math.sin(time * 3 + e) * 15 * elScale;
        ctx.fillStyle = `rgba(187, 247, 208, ${(0.55 - e * 0.08) * intensity})`;
        ctx.beginPath();
        ctx.arc(ex, ey, (8 + e * 3) * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
    ctx.restore();
});

// 294. Human Skull With Green Ghost-Fire Burning in Eye Sockets
reg(['ch_skull_ghostfire', 'item_294'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.55;
    // Weathered bone skull
    ctx.fillStyle = '#e2e8f0';
    ctx.beginPath();
    ctx.arc(cx, cy - 8 * elScale, 28 * elScale, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillRect(cx - 16 * elScale, cy + 8 * elScale, 32 * elScale, 18 * elScale);
    // Deep black eye sockets
    ctx.fillStyle = '#020617';
    ctx.beginPath();
    ctx.arc(cx - 11 * elScale, cy - 4 * elScale, 8 * elScale, 0, Math.PI * 2);
    ctx.arc(cx + 11 * elScale, cy - 4 * elScale, 8 * elScale, 0, Math.PI * 2);
    ctx.fill();
    // Green ghost-fire jets roaring out of eye sockets
    const flameH1 = (12 + Math.sin(time * 20 * speed) * 4) * elScale;
    const flameH2 = (12 + Math.cos(time * 20 * speed) * 4) * elScale;
    ctx.fillStyle = '#4ade80';
    ctx.beginPath();
    ctx.ellipse(cx - 11 * elScale, cy - 4 * elScale - flameH1 * 0.5, 4 * elScale, flameH1, 0, 0, Math.PI * 2);
    ctx.ellipse(cx + 11 * elScale, cy - 4 * elScale - flameH2 * 0.5, 4 * elScale, flameH2, 0, 0, Math.PI * 2);
    ctx.fill();
});

// 295. Antique Mirror Surface Rippling Like Liquid
reg(['ch_liquid_mirror_ripple', 'item_295'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const mirW = 75 * elScale, mirH = 100 * elScale;
    // Ornate baroque gilded mirror frame
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 6 * elScale;
    ctx.strokeRect(cx - mirW * 0.5, cy - mirH * 0.5, mirW, mirH);
    // Liquid mercury silver surface
    ctx.fillStyle = '#94a3b8';
    ctx.fillRect(cx - mirW * 0.5 + 4 * elScale, cy - mirH * 0.5 + 4 * elScale, mirW - 8 * elScale, mirH - 8 * elScale);
    // Expanding concentric liquid ripples on mirror glass
    for (let r = 0; r < 4; r++) {
        const rad = ((time * 45 * speed + r * 22) % (mirW * 0.45));
        const alpha = Math.max(0, 1 - rad / (mirW * 0.45));
        ctx.strokeStyle = `rgba(241, 245, 249, ${alpha * 0.8 * intensity})`;
        ctx.lineWidth = 2 * elScale;
        ctx.beginPath();
        ctx.arc(cx, cy, rad, 0, Math.PI * 2);
        ctx.stroke();
    }
});

// 296. Black Umbrella Dripping on Entryway Rug (Top-Down Battlemap View)
reg(['ch_dripping_umbrella', 'item_296'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    ctx.save();
    // Entryway woven welcome rug viewed from above
    ctx.fillStyle = '#292524';
    ctx.fillRect(cx - 50 * elScale, cy - 40 * elScale, 100 * elScale, 80 * elScale);
    ctx.strokeStyle = '#44403c';
    ctx.lineWidth = 2 * elScale;
    ctx.strokeRect(cx - 50 * elScale, cy - 40 * elScale, 100 * elScale, 80 * elScale);

    // Folded black umbrella lying across the mat (or in brass stand) viewed from overhead
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(-0.4);

    // Brass umbrella stand rim
    ctx.fillStyle = '#78350f';
    ctx.beginPath();
    ctx.arc(0, 0, 16 * elScale, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 2 * elScale;
    ctx.stroke();

    // Black folded umbrella canopy top viewed from overhead
    ctx.fillStyle = '#09090b';
    ctx.beginPath();
    ctx.ellipse(0, 0, 12 * elScale, 9 * elScale, 0, 0, Math.PI * 2);
    ctx.fill();

    // Curved polished wood crook handle extending
    ctx.strokeStyle = '#92400e';
    ctx.lineWidth = 3 * elScale;
    ctx.beginPath();
    ctx.arc(0, -18 * elScale, 8 * elScale, Math.PI * 0.8, Math.PI * 1.8);
    ctx.stroke();
    ctx.restore();

    // Concentric rippling water rings expanding into pools on the rug
    for (let r = 0; r < 4; r++) {
        const rt = (time * 1.5 * speed + r * 0.35) % 1.2;
        const ringR = (14 + rt * 30) * elScale;
        const alpha = (1 - rt / 1.2) * 0.45 * intensity;

        ctx.strokeStyle = 'rgba(186, 230, 253, ' + alpha + ')';
        ctx.lineWidth = 1.5 * elScale;
        ctx.beginPath();
        ctx.ellipse(cx + 8 * elScale, cy + 8 * elScale, ringR, ringR * 0.65, 0, 0, Math.PI * 2);
        ctx.stroke();
    }

    // Wet reflective puddle sheen on rug
    ctx.fillStyle = 'rgba(147, 197, 253, ' + (0.8 * intensity) + ')';
    ctx.beginPath();
    ctx.ellipse(cx + 8 * elScale, cy + 8 * elScale, 36 * elScale, 22 * elScale, 0, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
});

// 297. Dead Rose in Crystal Vase Losing Dry Petals One by One
reg(['ch_dead_rose_vase', 'item_297'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.55;
    // Crystal vase
    ctx.fillStyle = 'rgba(224, 231, 255, 0.35)';
    ctx.fillRect(cx - 10 * elScale, cy, 20 * elScale, 35 * elScale);
    ctx.strokeStyle = 'rgba(199, 210, 254, 0.7)';
    ctx.lineWidth = 2 * elScale;
    ctx.strokeRect(cx - 10 * elScale, cy, 20 * elScale, 35 * elScale);
    // Thorny dried stem
    ctx.strokeStyle = '#3f6212';
    ctx.lineWidth = 2.5 * elScale;
    ctx.beginPath();
    ctx.moveTo(cx, cy + 25 * elScale);
    ctx.quadraticCurveTo(cx - 8 * elScale, cy - 10 * elScale, cx - 2 * elScale, cy - 30 * elScale);
    ctx.stroke();
    // Withered dark crimson rose bloom
    ctx.fillStyle = '#450a0a';
    ctx.beginPath();
    ctx.arc(cx - 2 * elScale, cy - 32 * elScale, 9 * elScale, 0, Math.PI * 2);
    ctx.fill();
    // Falling dry crimson petal drifting downward
    const petalAge = (time * 1.5 * speed) % 1;
    const petX = cx - 2 * elScale + Math.sin(petalAge * 8) * 15 * elScale;
    const petY = cy - 25 * elScale + petalAge * 60 * elScale;
    ctx.fillStyle = '#7f1d1d';
    ctx.beginPath();
    ctx.ellipse(petX, petY, 4 * elScale, 2.5 * elScale, petalAge * 4, 0, Math.PI * 2);
    ctx.fill();
});

// 298. Ticking Metronome on Asylum Desk (Top-Down Battlemap View)
reg(['ch_asylum_metronome', 'item_298'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.52;
    ctx.save();
    // Oak desk surface
    ctx.fillStyle = '#3e2723';
    ctx.fillRect(cx - 55 * elScale, cy - 45 * elScale, 110 * elScale, 90 * elScale);

    // Pyramidal wooden metronome casing viewed from directly overhead
    // Truncated square pyramid: base is wider, top face is smaller square
    const baseW = 44 * elScale, baseH = 44 * elScale;
    const topW = 20 * elScale, topH = 20 * elScale;

    // Sloped wooden sides
    ctx.fillStyle = '#5d4037';
    ctx.beginPath();
    ctx.moveTo(cx - baseW * 0.5, cy - baseH * 0.5);
    ctx.lineTo(cx + baseW * 0.5, cy - baseH * 0.5);
    ctx.lineTo(cx + topW * 0.5, cy - topH * 0.5);
    ctx.lineTo(cx - topW * 0.5, cy - topH * 0.5);
    ctx.closePath();
    ctx.fill();

    // Top square face
    ctx.fillStyle = '#8d6e63';
    ctx.fillRect(cx - topW * 0.5, cy - topH * 0.5, topW, topH);
    ctx.strokeStyle = '#271c19';
    ctx.lineWidth = 1.5 * elScale;
    ctx.strokeRect(cx - topW * 0.5, cy - topH * 0.5, topW, topH);

    // Slotted scale track on front face
    ctx.fillStyle = '#f5f5f4';
    ctx.fillRect(cx - 14 * elScale, cy, 28 * elScale, 16 * elScale);

    // Metronome steel wand swinging in top-down angular arc
    const swing = Math.sin(time * 4 * speed) * (18 * elScale);
    ctx.strokeStyle = '#e2e8f0';
    ctx.lineWidth = 2 * elScale;
    ctx.beginPath();
    ctx.moveTo(cx, cy + 20 * elScale);
    ctx.lineTo(cx + swing, cy - 10 * elScale);
    ctx.stroke();

    // Brass sliding counterweight
    ctx.fillStyle = '#f59e0b';
    ctx.beginPath();
    ctx.arc(cx + swing * 0.6, cy + 5 * elScale, 4 * elScale, 0, Math.PI * 2);
    ctx.fill();

    // Acoustic sound wave tick pulse
    const tickCycle = Math.abs(Math.sin(time * 4 * speed));
    if (tickCycle > 0.8) {
        ctx.strokeStyle = 'rgba(245, 158, 11, ' + (0.8 * intensity) + ')';
        ctx.lineWidth = 1.5 * elScale;
        ctx.beginPath();
        ctx.arc(cx, cy, (25 + (1 - tickCycle) * 30) * elScale, 0, Math.PI * 2);
        ctx.stroke();
    }
    ctx.restore();
});

// 299. Gray Pigeon Cooing and Bobbing Head on Stone Gargoyle
reg(['ch_gargoyle_pigeon', 'item_299'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    // Weathered stone gargoyle cornice snout
    ctx.fillStyle = '#475569';
    ctx.fillRect(cx - 40 * elScale, cy + 12 * elScale, 80 * elScale, 25 * elScale);
    // Plump gray pigeon body perched on stone
    ctx.fillStyle = '#64748b';
    ctx.beginPath();
    ctx.ellipse(cx, cy + 2 * elScale, 16 * elScale, 11 * elScale, 0.1, 0, Math.PI * 2);
    ctx.fill();
    // Bobbing pigeon head
    const headBob = Math.sin(time * 8 * speed) * (3 * elScale);
    ctx.fillStyle = '#475569';
    ctx.beginPath();
    ctx.arc(cx + 12 * elScale + headBob, cy - 8 * elScale, 6 * elScale, 0, Math.PI * 2);
    ctx.fill();
    // Iridescent neck sheen
    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(cx + 9 * elScale + headBob * 0.5, cy - 4 * elScale, 3 * elScale, 0, Math.PI * 2);
    ctx.fill();
    // Tiny orange beak & eye
    ctx.fillStyle = '#f97316';
    ctx.beginPath();
    ctx.arc(cx + 17 * elScale + headBob, cy - 8 * elScale, 2 * elScale, 0, Math.PI * 2);
    ctx.fill();
});

// 300. Wet Cardboard Box Sitting on Curb Leaking Dirty Rain Runoff
reg(['ch_curbside_wet_box', 'item_300'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    // Concrete street curb line
    ctx.fillStyle = '#64748b';
    ctx.fillRect(W * 0.1, cy + 20 * elScale, W * 0.8, 20 * elScale);
    // Soggy brown soggy cardboard box with collapsed flap
    ctx.fillStyle = '#78350f';
    ctx.fillRect(cx - 26 * elScale, cy - 14 * elScale, 52 * elScale, 34 * elScale);
    ctx.strokeStyle = '#451a03';
    ctx.lineWidth = 2 * elScale;
    ctx.strokeRect(cx - 26 * elScale, cy - 14 * elScale, 52 * elScale, 34 * elScale);
    // Dark waterlogged bottom stain
    ctx.fillStyle = '#292524';
    ctx.fillRect(cx - 26 * elScale, cy + 6 * elScale, 52 * elScale, 14 * elScale);
    // Murky dirty water runoff stream trickling toward gutter
    ctx.strokeStyle = `rgba(120, 53, 15, ${0.7 * intensity})`;
    ctx.lineWidth = (3 + rough * 2) * elScale;
    ctx.beginPath();
    ctx.moveTo(cx - 10 * elScale, cy + 20 * elScale);
    for (let s = 1; s <= 4; s++) {
        const streamX = cx - 10 * elScale - s * 14 * elScale;
        const streamY = cy + 20 * elScale + s * 4 * elScale + Math.sin(time * 3 + s) * 2;
        ctx.lineTo(streamX, streamY);
    }
    ctx.stroke();
});


})();
