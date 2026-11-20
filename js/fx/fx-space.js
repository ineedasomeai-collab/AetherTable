/**
 * AetherTable VTT - Deep Space & Hard Sci-Fi FX (75 Unique Elements)
 * Procedural Canvas Renderers for Elements 151 through 225.
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
// A. LINEAR MOTION (151 - 175) - Deep Space & Hard Sci-Fi
// =========================================================================

// 151. FTL Star-Streak Warp (Omnidirectional Hyper-Drive Star-Streaks & Relativistic Slipstream)
reg(['ds_ftl_starstreak', 'item_151'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const maxR = Math.hypot(W, H) * 0.65;
    const numStars = 110;

    // Check if drawn along a custom directional path
    const hasPath = (ctx._isDrawnPath && Array.isArray(ctx._samples) && ctx._samples.length >= 2);
    const pathSamples = hasPath ? ctx._samples : null;

    ctx.save();

    if (hasPath) {
        // Relativistic hyperspace slipstream traveling along the user-drawn path
        for (let s = 0; s < numStars; s++) {
            const starSpeed = 0.8 + (((s * 7 + 5) % 17) / 17) * 0.8;
            const phase = ((s * 13 + 11) % 29) / 29;
            const progress = (time * 1.8 * speed * starSpeed + phase) % 1.0;
            const laneOffset = ((((s * 11 + 3) % 23) / 23) - 0.5) * (ctx._strokeW || 60 * elScale);

            const idxFloat = progress * (pathSamples.length - 1);
            const idx = Math.min(Math.floor(idxFloat), pathSamples.length - 2);
            const frac = idxFloat - idx;
            const p0 = pathSamples[idx];
            const p1 = pathSamples[idx + 1];
            const dx = p1.x - p0.x;
            const dy = p1.y - p0.y;
            const segLen = Math.hypot(dx, dy) || 1;
            const nx = -dy / segLen;
            const ny = dx / segLen;

            const hx = (p0.x + dx * frac) + nx * laneOffset;
            const hy = (p0.y + dy * frac) + ny * laneOffset;
            const streakLen = (20 + progress * 80 + rough * 40) * elScale;
            const tx = hx - (dx / segLen) * streakLen;
            const ty = hy - (dy / segLen) * streakLen;

            let alpha = Math.sin(progress * Math.PI) * intensity;
            if (alpha <= 0.02) continue;

            const streakGrad = ctx.createLinearGradient(tx, ty, hx, hy);
            streakGrad.addColorStop(0, 'rgba(56, 189, 248, 0)');
            streakGrad.addColorStop(0.6, `rgba(186, 230, 253, ${alpha * 0.75})`);
            streakGrad.addColorStop(1, `rgba(255, 255, 255, ${alpha})`);

            ctx.strokeStyle = streakGrad;
            ctx.lineWidth = (1.0 + progress * 2.2) * elScale;
            ctx.beginPath();
            ctx.moveTo(tx, ty);
            ctx.lineTo(hx, hy);
            ctx.stroke();

            // Searing tip
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.beginPath();
            ctx.arc(hx, hy, (1.2 + progress * 1.2) * elScale, 0, Math.PI * 2);
            ctx.fill();
        }
    } else {
        // Omnidirectional Hyper-Drive Warp Field
        // 1. Central blinding Cherenkov singularity core glow
        const corePulse = 0.85 + 0.15 * Math.sin(time * 6 * speed);
        const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, (24 + corePulse * 8) * elScale);
        coreGrad.addColorStop(0, `rgba(255, 255, 255, ${0.98 * intensity})`);
        coreGrad.addColorStop(0.25, `rgba(224, 242, 254, ${0.85 * corePulse * intensity})`);
        coreGrad.addColorStop(0.55, `rgba(56, 189, 248, ${0.45 * intensity})`);
        coreGrad.addColorStop(0.85, `rgba(99, 102, 241, ${0.18 * intensity})`);
        coreGrad.addColorStop(1, 'rgba(15, 23, 42, 0)');
        ctx.fillStyle = coreGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, (24 + corePulse * 8) * elScale, 0, Math.PI * 2);
        ctx.fill();

        // 2. Gravitational lensing accretion ring
        ctx.strokeStyle = `rgba(56, 189, 248, ${0.32 * corePulse * intensity})`;
        ctx.lineWidth = (2.5 + rough * 2) * elScale;
        ctx.beginPath();
        ctx.arc(cx, cy, (34 + Math.sin(time * 4) * 4) * elScale, 0, Math.PI * 2);
        ctx.stroke();

        // 3. Dense, mathematically uniform Golden-Angle star-streaks (ZERO quadrant clumping, ZERO aliasing)
        // Golden angle: 2.399963229728653 rad (~137.507764 deg)
        const goldenAngle = 2.399963229728653;

        for (let s = 0; s < numStars; s++) {
            // Golden angle sequence ensures perfectly uniform omnidirectional distribution
            const ang = (s * goldenAngle) % (Math.PI * 2);
            // De-correlated speeds and phases via prime modulus
            const starSpeed = 0.72 + (((s * 11 + 7) % 19) / 19) * 0.75;
            const phase = ((s * 17 + 13) % 31) / 31;

            // Progress accelerates rapidly outward from center (relativistic lorentz contraction)
            const progress = (time * 1.5 * speed * starSpeed + phase) % 1.0;
            const normR = Math.pow(progress, 1.65);
            const rHead = normR * maxR;

            // Streak elongates proportionally to velocity and distance from vanishing point
            const streakLen = (16 + normR * 125 + rough * 50) * elScale;
            const rTail = Math.max(0, rHead - streakLen);

            const cosA = Math.cos(ang);
            const sinA = Math.sin(ang);

            const xHead = cx + cosA * rHead;
            const yHead = cy + sinA * rHead;
            const xTail = cx + cosA * rTail;
            const yTail = cy + sinA * rTail;

            // Fade in smoothly from center, fade out cleanly at perimeter
            let alpha = 1.0;
            if (normR < 0.10) {
                alpha = normR / 0.10;
            } else if (normR > 0.84) {
                alpha = Math.max(0, (1.0 - normR) / 0.16);
            }
            alpha *= intensity;

            if (alpha <= 0.01) continue;

            // Doppler color shift: blue-shifted cyan-white leading tip, violet trailing wake
            const colorMod = s % 5;
            let midColor;
            if (colorMod < 3) {
                midColor = `rgba(186, 230, 253, ${alpha * 0.88})`; // Intense cyan-white
            } else if (colorMod === 3) {
                midColor = `rgba(199, 210, 254, ${alpha * 0.82})`; // Violet-white
            } else {
                midColor = `rgba(254, 240, 138, ${alpha * 0.75})`; // Golden relativistic burst
            }

            // Streak vector gradient from tail to head
            const streakGrad = ctx.createLinearGradient(xTail, yTail, xHead, yHead);
            streakGrad.addColorStop(0, 'rgba(255, 255, 255, 0)');
            streakGrad.addColorStop(0.55, midColor);
            streakGrad.addColorStop(1, `rgba(255, 255, 255, ${alpha})`);

            ctx.strokeStyle = streakGrad;
            ctx.lineWidth = (0.8 + normR * 2.4) * elScale;
            ctx.lineCap = 'round';

            ctx.beginPath();
            ctx.moveTo(xTail, yTail);
            ctx.lineTo(xHead, yHead);
            ctx.stroke();

            // Pinpoint searing tip star
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
            ctx.beginPath();
            ctx.arc(xHead, yHead, (0.9 + normR * 1.5) * elScale, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    ctx.restore();
});

// 152. Pulsing Amber Runway Approach Lights Guiding Shuttles
reg(['ds_runway_lights', 'item_152'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numLights = 10;
    for (let i = 0; i < numLights; i++) {
        const lx = W * 0.15 + (i / (numLights - 1)) * (W * 0.7);
        const ly1 = H * 0.35, ly2 = H * 0.65;
        // Traveling sequential pulse wave
        const wavePhase = (time * 4 * speed - i * 0.5) % 3;
        const isLit = wavePhase > 0 && wavePhase < 0.8;
        const brightness = isLit ? 1.0 : 0.2;
        
        // Runway light fixtures
        for (let side = 0; side < 2; side++) {
            const ly = side === 0 ? ly1 : ly2;
            ctx.fillStyle = '#1e293b';
            ctx.fillRect(lx - 4 * elScale, ly - 4 * elScale, 8 * elScale, 8 * elScale);
            // Amber lens glow
            const glow = ctx.createRadialGradient(lx, ly, 1, lx, ly, 20 * elScale);
            glow.addColorStop(0, `rgba(245, 158, 11, ${brightness * intensity})`);
            glow.addColorStop(1, 'rgba(245, 158, 11, 0)');
            ctx.fillStyle = glow;
            ctx.beginPath();
            ctx.arc(lx, ly, 20 * elScale, 0, Math.PI * 2);
            ctx.fill();
        }
    }
});

// 153. Golden Solar Flare Radiation Wave
reg(['ds_solar_flare_wave', 'item_153'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const sweepX = ((time * 75 * speed) % (W + 200)) - 100;
    // Roaring solar plasma wave front
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(sweepX - 80, 0);
    for (let y = 0; y <= H; y += 25) {
        const x = sweepX + Math.sin(y * 0.04 + time * 3) * (20 + rough * 25);
        ctx.lineTo(x, y);
    }
    ctx.lineTo(0, H);
    ctx.lineTo(0, 0);
    ctx.closePath();
    const flareGrad = ctx.createLinearGradient(sweepX - 80, 0, sweepX, 0);
    flareGrad.addColorStop(0, `rgba(234, 179, 8, ${0.45 * intensity})`);
    flareGrad.addColorStop(1, `rgba(254, 240, 138, ${0.85 * intensity})`);
    ctx.fillStyle = flareGrad;
    ctx.fill();
    ctx.strokeStyle = `rgba(255, 255, 255, ${0.9 * intensity})`;
    ctx.lineWidth = (4 + rough * 4) * elScale;
    ctx.stroke();
    ctx.restore();
});

// 154. Green Tactical Sensor Sweep Beam (Top-Down Radar Sweep)
reg(['ds_sensor_sweep', 'item_154'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const maxR = Math.min(W, H) * 0.45;
    const ang = time * 2.5 * speed;

    // Tactical range rings
    ctx.strokeStyle = `rgba(34, 197, 94, ${0.3 * intensity})`;
    ctx.lineWidth = 1.2 * elScale;
    for (let r = 1; r <= 3; r++) {
        ctx.beginPath();
        ctx.arc(cx, cy, (maxR / 3) * r, 0, Math.PI * 2);
        ctx.stroke();
    }

    // 360-degree rotating sensor sweep sector
    const sweepSector = 0.55;
    const grad = ctx.createRadialGradient(cx, cy, 2, cx, cy, maxR);
    grad.addColorStop(0, `rgba(74, 222, 128, ${0.4 * intensity})`);
    grad.addColorStop(1, 'rgba(34, 197, 94, 0)');
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, maxR, ang - sweepSector, ang);
    ctx.closePath();
    ctx.fill();

    // Leading sweep line
    ctx.strokeStyle = `rgba(134, 239, 172, ${0.9 * intensity})`;
    ctx.lineWidth = 2 * elScale;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(ang) * maxR, cy + Math.sin(ang) * maxR);
    ctx.stroke();

    // Blip contacts
    for (let b = 0; b < 3; b++) {
        const bAng = b * 2.1 + 0.4;
        const bDist = (0.35 + b * 0.25) * maxR;
        const bx = cx + Math.cos(bAng) * bDist;
        const by = cy + Math.sin(bAng) * bDist;
        const diff = (ang - bAng) % (Math.PI * 2);
        const normDiff = (diff + Math.PI * 2) % (Math.PI * 2);
        if (normDiff < 1.2) {
            const blipAlpha = Math.max(0, 1 - normDiff / 1.2);
            ctx.fillStyle = `rgba(254, 240, 138, ${blipAlpha * intensity})`;
            ctx.beginPath();
            ctx.arc(bx, by, 3 * elScale, 0, Math.PI * 2);
            ctx.fill();
        }
    }
});

// 155. Emergency Evacuation Light Chevrons
reg(['ds_evac_chevrons', 'item_155'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numChevrons = 8;
    const cy = H * 0.5;
    for (let c = 0; c < numChevrons; c++) {
        const cx = W * 0.1 + (c / (numChevrons - 1)) * (W * 0.8);
        const wave = (time * 5 * speed - c * 0.6) % 3;
        const isLit = wave > 0 && wave < 0.9;
        ctx.strokeStyle = isLit ? `rgba(239, 68, 68, ${0.95 * intensity})` : `rgba(127, 29, 29, ${0.35 * intensity})`;
        ctx.lineWidth = 4 * elScale;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(cx - 10 * elScale, cy - 14 * elScale);
        ctx.lineTo(cx + 8 * elScale, cy);
        ctx.lineTo(cx - 10 * elScale, cy + 14 * elScale);
        ctx.stroke();
    }
});

// 156. Explosive Decompression Wind Sucking Loose Tools Toward Breach
reg(['ds_decompression_wind', 'item_156'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const breachX = W - 20, breachY = H * 0.5;
    // Converging rushing air streaks toward breach
    ctx.strokeStyle = `rgba(203, 213, 225, ${0.65 * intensity})`;
    ctx.lineWidth = 1.8 * elScale;
    for (let s = 0; s < 14; s++) {
        const startX = ((s * 47) % (W * 0.8));
        const startY = (s * 31) % H;
        const t = (time * 4 * speed + s * 0.2) % 1.0;
        const curX = startX + (breachX - startX) * t;
        const curY = startY + (breachY - startY) * t;
        ctx.beginPath();
        ctx.moveTo(curX - 18 * elScale, curY);
        ctx.lineTo(curX, curY);
        ctx.stroke();
    }
});

// 157. Superheated Plasma Arcing Down Ruptured Coolant Conduit
reg(['ds_plasma_coolant_arc', 'item_157'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const isArcing = (Math.sin(time * 12 * speed) > 0.1);
    if (!isArcing) return;
    
    ctx.strokeStyle = `rgba(244, 114, 182, ${0.95 * intensity})`;
    ctx.lineWidth = (3 + rough * 3) * elScale;
    ctx.shadowColor = '#ec4899';
    ctx.shadowBlur = 10 * intensity;
    ctx.beginPath();
    ctx.moveTo(20, H * 0.5);
    for (let x = 20; x <= W - 20; x += 30) {
        const y = H * 0.5 + (Math.random() - 0.5) * (30 + rough * 25);
        ctx.lineTo(x, y);
    }
    ctx.stroke();
    ctx.shadowBlur = 0;
});

// 158. Micrometeoroid Shower Streaking Across Catwalk
reg(['ds_micrometeoroid_shower', 'item_158'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numMeteors = 18;
    ctx.strokeStyle = `rgba(254, 240, 138, ${0.85 * intensity})`;
    ctx.lineWidth = 1.5;
    for (let m = 0; m < numMeteors; m++) {
        const mx = ((time * 450 * speed + m * 55) % (W + 150)) - 50;
        const my = (m * 29) % H;
        const len = (25 + (m % 4) * 15) * elScale;
        ctx.beginPath();
        ctx.moveTo(mx, my);
        ctx.lineTo(mx - len, my - len * 0.4);
        ctx.stroke();
    }
});

// 159. Heavy Hydraulic Bulkheads Slamming Shut Sequentially (Pure 90-deg Top-Down Overhead Battlemap View)
reg(['ds_hydraulic_bulkheads', 'ds_bulkhead_doors', 'item_159'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cy = H * 0.5;

    // 2 Sequential Bulkhead Stations spaced down the corridor
    const numStations = (W > 300 * elScale) ? 2 : 1;

    ctx.save();

    for (let s = 0; s < numStations; s++) {
        const bx = numStations === 1 ? (W * 0.5) : (W * (0.32 + s * 0.36));

        // Sequential timing cascade: Station 0 slams shut, then Station 1 slams shut
        const stationOffset = s * 1.5;
        const cycle = ((time * 0.75 * speed + stationOffset) % 4.0); // 4-second cycle

        // State machine: 0 to 0.7 (open/alarm), 0.7 to 1.1 (slamming shut), 1.1 to 2.8 (locked shut), 2.8 to 3.4 (retracting open), 3.4 to 4.0 (idle open)
        let closeProgress = 0; // 0 = fully open, 1 = slammed shut
        let isSlamming = false;
        let isLocked = false;
        let justSlammed = false;

        if (cycle < 0.7) {
            closeProgress = 0; // open, pre-closing alarm
        } else if (cycle < 1.1) {
            // Rapid violent pneumatic slam
            const t = (cycle - 0.7) / 0.4;
            closeProgress = Math.min(1.0, Math.pow(t, 2.8)); // accelerate rapidly
            isSlamming = true;
        } else if (cycle < 2.8) {
            closeProgress = 1.0; // locked tight
            isLocked = true;
            if (cycle < 1.35) justSlammed = true;
        } else if (cycle < 3.4) {
            // Smooth hydraulic retraction
            const t = (cycle - 2.8) / 0.6;
            closeProgress = 1.0 - t;
        } else {
            closeProgress = 0;
        }

        // Geometry dimensions in pure 90-deg top-down overhead perspective
        const jambW = (24 + rough * 8) * elScale;
        const wallDepth = Math.min(H * 0.28, 45 * elScale);
        const corridorSpan = H - wallDepth * 2;
        const maxDoorTravel = corridorSpan * 0.5;
        const currentTravel = closeProgress * maxDoorTravel;

        // 1. DECK FLOOR THRESHOLD SILL & CAUTION CHEVRONS (Between Wall Jambs)
        const sillX = bx - jambW * 0.5;
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(sillX, wallDepth, jambW, corridorSpan);

        // Recessed steel floor guide track where the door leaves meet
        ctx.fillStyle = '#020617';
        ctx.fillRect(bx - 3 * elScale, wallDepth, 6 * elScale, corridorSpan);
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 1 * elScale;
        ctx.strokeRect(bx - 3 * elScale, wallDepth, 6 * elScale, corridorSpan);

        // Industrial safety hazard chevron stripes on either side of the threshold track
        ctx.save();
        ctx.beginPath();
        ctx.rect(sillX, wallDepth, jambW, corridorSpan);
        ctx.clip();
        for (let chY = wallDepth - jambW; chY < H - wallDepth + jambW; chY += 12 * elScale) {
            ctx.fillStyle = '#f59e0b'; // Safety Amber
            ctx.beginPath();
            ctx.moveTo(bx - jambW * 0.5, chY);
            ctx.lineTo(bx, chY + 8 * elScale);
            ctx.lineTo(bx + jambW * 0.5, chY);
            ctx.lineTo(bx + jambW * 0.5, chY + 5 * elScale);
            ctx.lineTo(bx, chY + 13 * elScale);
            ctx.lineTo(bx - jambW * 0.5, chY + 5 * elScale);
            ctx.fill();
        }
        ctx.restore();

        // 2. REINFORCED UPPER & LOWER BLAST DOOR LEAVES (Top-Down Armored Slabs)
        const leafThick = 12 * elScale;
        const doorY_TopEdge = wallDepth + currentTravel;
        const doorY_BottomEdge = H - wallDepth - currentTravel;

        // Top door leaf extending downward across corridor
        if (currentTravel > 1) {
            const topLeafH = currentTravel;
            ctx.fillStyle = '#1e293b';
            ctx.fillRect(bx - leafThick * 0.5, wallDepth, leafThick, topLeafH);

            // Armored bevel highlight & shadow
            ctx.strokeStyle = '#475569';
            ctx.lineWidth = 1.5 * elScale;
            ctx.strokeRect(bx - leafThick * 0.5, wallDepth, leafThick, topLeafH);

            // Heavy reinforced ribbing along the top of the door slab
            ctx.strokeStyle = '#64748b';
            ctx.lineWidth = 1.0 * elScale;
            ctx.beginPath();
            ctx.moveTo(bx, wallDepth); ctx.lineTo(bx, doorY_TopEdge);
            ctx.stroke();

            // Interlocking teeth along the leading mating edge
            ctx.fillStyle = '#334155';
            for (let t = -leafThick * 0.5; t < leafThick * 0.5; t += 4 * elScale) {
                ctx.fillRect(bx + t, doorY_TopEdge - 2 * elScale, 2 * elScale, 2 * elScale);
            }
        }

        // Bottom door leaf extending upward across corridor
        if (currentTravel > 1) {
            const bottomLeafH = currentTravel;
            ctx.fillStyle = '#1e293b';
            ctx.fillRect(bx - leafThick * 0.5, doorY_BottomEdge, leafThick, bottomLeafH);

            // Armored bevel highlight & shadow
            ctx.strokeStyle = '#475569';
            ctx.lineWidth = 1.5 * elScale;
            ctx.strokeRect(bx - leafThick * 0.5, doorY_BottomEdge, leafThick, bottomLeafH);

            // Reinforced spine
            ctx.strokeStyle = '#64748b';
            ctx.lineWidth = 1.0 * elScale;
            ctx.beginPath();
            ctx.moveTo(bx, doorY_BottomEdge); ctx.lineTo(bx, H - wallDepth);
            ctx.stroke();

            // Interlocking teeth along the bottom mating edge
            ctx.fillStyle = '#334155';
            for (let t = -leafThick * 0.5; t < leafThick * 0.5; t += 4 * elScale) {
                ctx.fillRect(bx + t, doorY_BottomEdge, 2 * elScale, 2 * elScale);
            }
        }

        // Center magnetic pressure seal glow when locked shut
        if (isLocked) {
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.85 * intensity})`;
            ctx.lineWidth = 2 * elScale;
            ctx.beginPath();
            ctx.moveTo(bx - leafThick * 0.5, cy);
            ctx.lineTo(bx + leafThick * 0.5, cy);
            ctx.stroke();
        }

        // 3. TOP & BOTTOM HEAVY CORRIDOR WALL POCKETS / JAMBS (Seen from 90-deg overhead)
        const pocketW = jambW + 16 * elScale;

        // Top Wall Pocket Frame
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(bx - pocketW * 0.5, 0, pocketW, wallDepth);
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 2 * elScale;
        ctx.strokeRect(bx - pocketW * 0.5, 0, pocketW, wallDepth);

        // Top hydraulic piston actuator visible through maintenance grating
        ctx.fillStyle = '#475569';
        ctx.fillRect(bx - 3 * elScale, 4 * elScale, 6 * elScale, wallDepth - 8 * elScale);

        // Bottom Wall Pocket Frame
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(bx - pocketW * 0.5, H - wallDepth, pocketW, wallDepth);
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 2 * elScale;
        ctx.strokeRect(bx - pocketW * 0.5, H - wallDepth, pocketW, wallDepth);

        // Bottom hydraulic piston actuator
        ctx.fillStyle = '#475569';
        ctx.fillRect(bx - 3 * elScale, H - wallDepth + 4 * elScale, 6 * elScale, wallDepth - 8 * elScale);

        // 4. PRESSURIZED PNEUMATIC STEAM JETS UPON SLAMMING IMPACT
        if (justSlammed) {
            const steamAge = (cycle - 1.1) / 0.25; // 0 to 1
            const steamLen = (35 + steamAge * 45) * elScale;
            const steamAlpha = (1.0 - steamAge) * 0.75 * intensity;

            // Lateral steam jets blasting West and East along the corridor
            const steamGradW = ctx.createLinearGradient(bx, cy, bx - steamLen, cy);
            steamGradW.addColorStop(0, `rgba(255, 255, 255, ${steamAlpha})`);
            steamGradW.addColorStop(0.5, `rgba(224, 242, 254, ${steamAlpha * 0.6})`);
            steamGradW.addColorStop(1, 'rgba(255, 255, 255, 0)');
            ctx.fillStyle = steamGradW;
            ctx.beginPath();
            ctx.arc(bx - steamLen * 0.5, cy, (6 + steamAge * 10) * elScale, 0, Math.PI * 2);
            ctx.fill();

            const steamGradE = ctx.createLinearGradient(bx, cy, bx + steamLen, cy);
            steamGradE.addColorStop(0, `rgba(255, 255, 255, ${steamAlpha})`);
            steamGradE.addColorStop(0.5, `rgba(224, 242, 254, ${steamAlpha * 0.6})`);
            steamGradE.addColorStop(1, 'rgba(255, 255, 255, 0)');
            ctx.fillStyle = steamGradE;
            ctx.beginPath();
            ctx.arc(bx + steamLen * 0.5, cy, (6 + steamAge * 10) * elScale, 0, Math.PI * 2);
            ctx.fill();
        }

        // 5. ROTATING OVERHEAD ALARM STROBE BEACONS (Mounted on wall coamings)
        const alarmActive = (cycle < 1.6 || cycle > 3.6);
        const beaconSpeed = 16 * speed;
        const beaconAng = time * beaconSpeed + s * Math.PI;

        const topBx = bx;
        const topBy = wallDepth * 0.45;
        const botBx = bx;
        const botBy = H - wallDepth * 0.45;

        [ { x: topBx, y: topBy }, { x: botBx, y: botBy } ].forEach(b => {
            // Heavy circular beacon housing
            ctx.fillStyle = '#1e293b';
            ctx.beginPath();
            ctx.arc(b.x, b.y, 6.5 * elScale, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = '#64748b';
            ctx.lineWidth = 1.2 * elScale;
            ctx.stroke();

            if (alarmActive) {
                // Sweeping directional light beam pool on deck
                const beamLen = 38 * elScale;
                const bGrad = ctx.createRadialGradient(b.x, b.y, 2, b.x, b.y, beamLen);
                bGrad.addColorStop(0, `rgba(239, 68, 68, ${0.85 * intensity})`);
                bGrad.addColorStop(0.4, `rgba(249, 115, 22, ${0.45 * intensity})`);
                bGrad.addColorStop(1, 'rgba(239, 68, 68, 0)');
                ctx.fillStyle = bGrad;
                ctx.beginPath();
                ctx.moveTo(b.x, b.y);
                ctx.arc(b.x, b.y, beamLen, beaconAng - 0.5, beaconAng + 0.5);
                ctx.closePath();
                ctx.fill();

                // Blinding beacon bulb core
                ctx.fillStyle = '#ffffff';
                ctx.beginPath();
                ctx.arc(b.x, b.y, 2.5 * elScale, 0, Math.PI * 2);
                ctx.fill();
            } else {
                // Dim standby bulb
                ctx.fillStyle = '#450a0a';
                ctx.beginPath();
                ctx.arc(b.x, b.y, 2.5 * elScale, 0, Math.PI * 2);
                ctx.fill();
            }
        });
    }

    ctx.restore();
});

// 160. Industrial Mining Laser Slicing Across Asteroid
reg(['ds_mining_laser', 'item_160'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const lx = W * 0.15, ly = H * 0.5;
    const targetX = W * 0.85;
    const targetY = H * 0.5 + Math.sin(time * 3 * speed) * 35 * elScale;
    
    // Intense cutting ruby beam
    ctx.strokeStyle = `rgba(239, 68, 68, ${0.95 * intensity})`;
    ctx.lineWidth = 3.5 * elScale;
    ctx.shadowColor = '#ef4444';
    ctx.shadowBlur = 12 * intensity;
    ctx.beginPath();
    ctx.moveTo(lx, ly);
    ctx.lineTo(targetX, targetY);
    ctx.stroke();
    ctx.shadowBlur = 0;
    
    // Impact molten spray sparks
    for (let sp = 0; sp < 8; sp++) {
        const sx = targetX - (Math.random() * 25 * elScale);
        const sy = targetY + (Math.random() - 0.5) * 25 * elScale;
        ctx.fillStyle = '#fef08a';
        ctx.beginPath();
        ctx.arc(sx, sy, 2 * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 161. Automated Cargo Rails Sliding Fuel Rods Into Reactor Core
reg(['ds_fuelrod_rails', 'item_161'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cy = H * 0.5;
    // Cargo rails
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 3 * elScale;
    ctx.beginPath();
    ctx.moveTo(0, cy - 14 * elScale); ctx.lineTo(W, cy - 14 * elScale);
    ctx.moveTo(0, cy + 14 * elScale); ctx.lineTo(W, cy + 14 * elScale);
    ctx.stroke();
    
    // Sliding glowing green fuel rod canisters
    const numRods = 4;
    for (let r = 0; r < numRods; r++) {
        const rx = ((time * 80 * speed + r * 90) % (W + 100)) - 50;
        ctx.fillStyle = '#15803d';
        ctx.fillRect(rx - 15 * elScale, cy - 10 * elScale, 30 * elScale, 20 * elScale);
        ctx.strokeStyle = '#4ade80';
        ctx.lineWidth = 2 * elScale;
        ctx.strokeRect(rx - 15 * elScale, cy - 10 * elScale, 30 * elScale, 20 * elScale);
    }
});

// 162. Tracked Hull Repair Drone (Top-Down Battlemap View)
reg(['ds_tracked_repair_drone', 'item_162'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cy = H * 0.5;
    const dx = ((time * 55 * speed) % (W + 120)) - 60;

    ctx.save();
    // Hull deck plate seam line being welded
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 3 * elScale;
    ctx.beginPath();
    ctx.moveTo(0, cy); ctx.lineTo(W, cy);
    ctx.stroke();

    ctx.translate(dx, cy);

    // Drone viewed from 90 degrees overhead (Top-Down)
    const bodyW = 42 * elScale, bodyH = 26 * elScale;
    const treadH = 7 * elScale;

    // Dual caterpillar treads on top and bottom of chassis
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(-bodyW * 0.5, -bodyH * 0.5 - treadH, bodyW, treadH);
    ctx.fillRect(-bodyW * 0.5, bodyH * 0.5, bodyW, treadH);

    // Tread segment cleats moving
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 1 * elScale;
    const treadOffset = (time * 40 * speed) % (6 * elScale);
    for (let t = -bodyW * 0.5; t < bodyW * 0.5; t += 6 * elScale) {
        ctx.beginPath();
        ctx.moveTo(t + treadOffset, -bodyH * 0.5 - treadH);
        ctx.lineTo(t + treadOffset, -bodyH * 0.5);
        ctx.moveTo(t + treadOffset, bodyH * 0.5);
        ctx.lineTo(t + treadOffset, bodyH * 0.5 + treadH);
        ctx.stroke();
    }

    // Main armored central avionics chassis
    ctx.fillStyle = '#1e293b';
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 2 * elScale;
    ctx.beginPath();
    ctx.roundRect(-bodyW * 0.45, -bodyH * 0.5, bodyW * 0.9, bodyH, 4 * elScale);
    ctx.fill();
    ctx.stroke();

    // Hazard yellow/black diagonal warning stripes on chassis roof
    ctx.fillStyle = '#eab308';
    ctx.fillRect(-10 * elScale, -6 * elScale, 20 * elScale, 12 * elScale);

    // Articulated robotic welding manipulator arm extending forward
    const armX = bodyW * 0.45;
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 2.5 * elScale;
    ctx.beginPath();
    ctx.moveTo(bodyW * 0.35, 0);
    ctx.lineTo(armX + 12 * elScale, -4 * elScale);
    ctx.lineTo(armX + 22 * elScale, 0);
    ctx.stroke();

    // Sputtering plasma arc welding flash
    const arcX = armX + 22 * elScale;
    const arcFlash = Math.sin(time * 30 * speed) > -0.2;
    if (arcFlash) {
        // High-intensity white-hot core
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(arcX, 0, 4 * elScale, 0, Math.PI * 2);
        ctx.fill();

        // Brilliant blue plasma glow flare
        const flare = ctx.createRadialGradient(arcX, 0, 2, arcX, 0, 35 * elScale * intensity);
        flare.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
        flare.addColorStop(0.3, 'rgba(56, 189, 248, ' + (0.8 * intensity) + ')');
        flare.addColorStop(1, 'rgba(56, 189, 248, 0)');
        ctx.fillStyle = flare;
        ctx.beginPath();
        ctx.arc(arcX, 0, 35 * elScale * intensity, 0, Math.PI * 2);
        ctx.fill();

        // Molten slag sparks spraying sideways from weld seam
        for (let s = 0; s < 6; s++) {
            const sAng = (s / 6) * Math.PI * 2 + time * 15;
            const sDist = (6 + Math.random() * 16) * elScale;
            ctx.fillStyle = s % 2 === 0 ? '#fef08a' : '#f97316';
            ctx.fillRect(arcX + Math.cos(sAng) * sDist, Math.sin(sAng) * sDist, 2 * elScale, 2 * elScale);
        }
    }
    ctx.restore();
});

// 163. Vertical Anti-Gravity Lift Shaft (Top-Down Forced Perspective)
reg(['ds_antigrav_lift', 'item_163'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const shaftR = 65 * elScale;

    ctx.save();
    // Octagonal deck cutout frame (looking down into vertical shaft)
    ctx.fillStyle = '#030712'; // Deep shaft void
    ctx.beginPath();
    for (let i = 0; i < 8; i++) {
        const ang = (i / 8) * Math.PI * 2 + Math.PI / 8;
        const x = cx + Math.cos(ang) * shaftR;
        const y = cy + Math.sin(ang) * shaftR;
        if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fill();

    // Heavy reinforced deck coaming collar
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 5 * elScale;
    ctx.stroke();

    // Hazard yellow chevron pads at collar facets
    ctx.fillStyle = '#eab308';
    for (let c = 0; c < 8; c += 2) {
        const ang = (c / 8) * Math.PI * 2;
        ctx.fillRect(cx + Math.cos(ang) * (shaftR - 4 * elScale) - 4 * elScale, cy + Math.sin(ang) * (shaftR - 4 * elScale) - 4 * elScale, 8 * elScale, 8 * elScale);
    }

    // Concentric glowing cyan containment forcefield rings receding into the depth (Forced Perspective)
    const numRings = 5;
    for (let r = 1; r <= numRings; r++) {
        const depth = r / numRings; // 0.2 to 1.0 (deeper)
        const ringR = shaftR * (1 - depth * 0.65); // Rings shrink toward the center vanishing point
        const pulse = 0.5 + Math.sin(time * 3 * speed - depth * 3) * 0.5;

        ctx.strokeStyle = 'rgba(56, 189, 248, ' + (0.8 * intensity) + ')';
        ctx.lineWidth = Math.max(1, (3 - depth * 1.5) * elScale);
        ctx.beginPath();
        ctx.arc(cx, cy, ringR, 0, Math.PI * 2);
        ctx.stroke();
    }

    // Upward-drifting anti-gravity light motes rising toward the camera (Forced Perspective)
    const numMotes = 16;
    for (let m = 0; m < numMotes; m++) {
        const seed = m * 23.3;
        const mAng = seed + time * 0.2;
        const mDistRatio = (seed * 7) % 1; // Distance from center

        // Z-axis ascent: 0 = deep down in shaft (tiny, dark), 1 = reaching floor camera level (large, bright)
        const zProg = (time * (0.8 + (m % 3) * 0.3) * speed + seed) % 1;
        const moteScale = 0.2 + zProg * 2.2; // Expands as it ascends toward camera!
        const curDist = mDistRatio * shaftR * (0.3 + zProg * 0.6);
        const mx = cx + Math.cos(mAng) * curDist;
        const my = cy + Math.sin(mAng) * curDist;

        const alpha = Math.min(1, zProg * 1.5) * (1 - Math.max(0, zProg - 0.85) * 6) * intensity;
        const moteR = (2 + (m % 3)) * elScale * moteScale;

        const moteGrad = ctx.createRadialGradient(mx, my, 1, mx, my, moteR);
        moteGrad.addColorStop(0, 'rgba(255, 255, 255, ' + alpha + ')');
        moteGrad.addColorStop(0.4, 'rgba(56, 189, 248, ' + (alpha * 0.8) + ')');
        moteGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');
        ctx.fillStyle = moteGrad;
        ctx.beginPath();
        ctx.arc(mx, my, moteR, 0, Math.PI * 2);
        ctx.fill();
    }
    ctx.restore();
});

// 164. Orbital Space-Elevator Car (Top-Down Forced Perspective)
reg(['ds_space_elevator', 'item_164'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const viewR = 75 * elScale;

    ctx.save();
    // Circular station deck viewport collar (looking down on planetary curve)
    ctx.fillStyle = '#020617'; // Cosmic void
    ctx.beginPath();
    ctx.arc(cx, cy, viewR, 0, Math.PI * 2);
    ctx.fill();

    // Curved atmosphere crescent of planet Earth/exoplanet below
    const planetGrad = ctx.createRadialGradient(cx, cy + 180 * elScale, 100 * elScale, cx, cy + 180 * elScale, 240 * elScale);
    planetGrad.addColorStop(0, 'rgba(14, 116, 144, ' + (0.8 * intensity) + ')');
    planetGrad.addColorStop(0.5, 'rgba(56, 189, 248, ' + (0.8 * intensity) + ')');
    planetGrad.addColorStop(1, 'rgba(2, 6, 23, 0)');
    ctx.fillStyle = planetGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, viewR - 2 * elScale, 0, Math.PI * 2);
    ctx.fill();

    // Reinforced viewport bezel rim with bolts
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 6 * elScale;
    ctx.beginPath();
    ctx.arc(cx, cy, viewR, 0, Math.PI * 2);
    ctx.stroke();

    // Central carbon-nanotube tether line running straight down into planet vanishing point
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 2.5 * elScale;
    ctx.beginPath();
    ctx.moveTo(cx, cy - viewR);
    ctx.lineTo(cx, cy + viewR);
    ctx.stroke();

    // Climber Car Ascent/Descent Cycle (Forced Perspective Z-Axis)
    // 0 = distant speck in upper atmosphere, 1 = docking at station floor level
    const cycle = (time * 0.45 * speed) % 1;
    const zScale = 0.15 + cycle * 0.85; // Expands from 0.15 up to 1.0 as it ascends toward station!
    const carSize = 36 * elScale * zScale;

    // Climber car hexagonal module seen from above
    ctx.save();
    ctx.translate(cx, cy);
    ctx.scale(zScale, zScale);

    ctx.fillStyle = '#1e293b';
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2 * elScale;
    ctx.beginPath();
    for (let h = 0; h < 6; h++) {
        const hang = (h / 6) * Math.PI * 2;
        const hx = Math.cos(hang) * 22 * elScale;
        const hy = Math.sin(hang) * 22 * elScale;
        if (h === 0) ctx.moveTo(hx, hy); else ctx.lineTo(hx, hy);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Central tether pass-through collar
    ctx.fillStyle = '#475569';
    ctx.beginPath();
    ctx.arc(0, 0, 6 * elScale, 0, Math.PI * 2);
    ctx.fill();

    // Flashing xenon navigation strobes on car corners
    const strobe = Math.sin(time * 12) > 0.4;
    if (strobe) {
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(-18 * elScale, 0, 3 * elScale, 0, Math.PI * 2);
        ctx.arc(18 * elScale, 0, 3 * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
    ctx.restore();

    ctx.restore();
});

// 165. Heavy Steel Docking Clamps Extending and Locking (Top-Down Overhead Docking Ring)
reg(['ds_docking_clamps', 'item_165'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const cycle = Math.sin(time * 2 * speed);
    const clampIn = Math.max(0, cycle) * 20 * elScale;
    const ringR = 48 * elScale;

    // Central circular docking collar on hull floor
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 4 * elScale;
    ctx.beginPath();
    ctx.arc(cx, cy, ringR, 0, Math.PI * 2);
    ctx.stroke();

    // Inner hatch aperture
    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    ctx.arc(cx, cy, ringR - 6 * elScale, 0, Math.PI * 2);
    ctx.fill();

    // 4 Heavy hydraulic clamp jaws gripping the ring from cardinal directions
    const angles = [0, Math.PI * 0.5, Math.PI, Math.PI * 1.5];
    for (let i = 0; i < 4; i++) {
        const ang = angles[i];
        const jawDist = ringR + 18 * elScale - clampIn;
        const jx = cx + Math.cos(ang) * jawDist;
        const jy = cy + Math.sin(ang) * jawDist;

        ctx.save();
        ctx.translate(jx, jy);
        ctx.rotate(ang + Math.PI * 0.5);

        // Heavy steel claw block
        ctx.fillStyle = '#475569';
        ctx.fillRect(-12 * elScale, -8 * elScale, 24 * elScale, 16 * elScale);
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 2 * elScale;
        ctx.strokeRect(-12 * elScale, -8 * elScale, 24 * elScale, 16 * elScale);

        // Warning amber indicator
        ctx.fillStyle = clampIn > 10 * elScale ? '#22c55e' : '#f59e0b';
        ctx.fillRect(-4 * elScale, -6 * elScale, 8 * elScale, 3 * elScale);

        ctx.restore();
    }
});

// 166. Blue Ion Thruster Plumes Flaring Behind Starfighter
reg(['ds_ion_thruster_plume', 'item_166'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const fx = W * 0.35, fy = H * 0.5;
    // Starfighter hull bracket
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(fx - 25 * elScale, fy - 18 * elScale, 25 * elScale, 36 * elScale);
    // Twin ion thruster nozzles
    const plumeLen = (65 + Math.sin(time * 30 * speed) * 12 + rough * 20) * elScale;
    for (let n = -1; n <= 1; n += 2) {
        const ny = fy + n * 10 * elScale;
        const grad = ctx.createLinearGradient(fx, ny, fx + plumeLen, ny);
        grad.addColorStop(0, `rgba(255, 255, 255, ${0.95 * intensity})`);
        grad.addColorStop(0.3, `rgba(56, 189, 248, ${0.85 * intensity})`);
        grad.addColorStop(1, 'rgba(56, 189, 248, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.moveTo(fx, ny - 5 * elScale);
        ctx.lineTo(fx + plumeLen, ny);
        ctx.lineTo(fx, ny + 5 * elScale);
        ctx.closePath();
        ctx.fill();
    }
});

// 167. Holographic Sonar Ping Expanding Across Command Table
reg(['ds_holo_sonar_ping', 'item_167'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    for (let p = 0; p < 3; p++) {
        const age = (time * 1.5 * speed + p * 0.33) % 1;
        const rad = age * (Math.min(W, H) * 0.45);
        ctx.strokeStyle = `rgba(6, 182, 212, ${(1 - age) * 0.85 * intensity})`;
        ctx.lineWidth = 2 * elScale;
        ctx.beginPath();
        ctx.arc(cx, cy, rad, 0, Math.PI * 2);
        ctx.stroke();
    }
});

// 168. Matter-Transporter Beam Dematerializing Golden Particles (Top-Down Pad & Swirling Column)
reg(['ds_transporter_beam', 'item_168'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const padR = 45 * elScale;

    // Circular transporter floor pad
    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    ctx.arc(cx, cy, padR, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 3 * elScale;
    ctx.stroke();

    // Concentric glowing energy emitter rings
    for (let r = 1; r <= 3; r++) {
        const ringR = padR * (r / 3);
        const pulse = Math.sin(time * 5 * speed + r) * 0.2 + 0.8;
        ctx.strokeStyle = `rgba(234, 179, 8, ${0.75 * pulse * intensity})`;
        ctx.lineWidth = 2 * elScale;
        ctx.beginPath();
        ctx.arc(cx, cy, ringR, 0, Math.PI * 2);
        ctx.stroke();
    }

    // Dematerialization golden radial glow
    const glow = ctx.createRadialGradient(cx, cy, 5, cx, cy, padR * 1.2);
    glow.addColorStop(0, `rgba(253, 224, 71, ${0.5 * intensity})`);
    glow.addColorStop(0.7, `rgba(234, 179, 8, ${0.2 * intensity})`);
    glow.addColorStop(1, 'rgba(234, 179, 8, 0)');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(cx, cy, padR * 1.2, 0, Math.PI * 2);
    ctx.fill();

    // Dematerializing golden particle motes swirling in concentric orbits
    for (let p = 0; p < 24; p++) {
        const ang = time * 2.5 * speed + p * (Math.PI * 2 / 24);
        const dist = ((p * 13 + time * 30 * speed) % padR);
        const px = cx + Math.cos(ang) * dist;
        const py = cy + Math.sin(ang) * dist;
        ctx.fillStyle = p % 2 === 0 ? '#ffffff' : '#fef08a';
        ctx.beginPath();
        ctx.arc(px, py, (1.5 + (p % 3) * 0.8) * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 169. Containment Force-Field Energy Ripple From Impact
reg(['ds_containment_ripple', 'item_169'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    for (let r = 0; r < 4; r++) {
        const age = (time * 2 * speed + r * 0.25) % 1;
        const rad = age * 65 * elScale;
        ctx.strokeStyle = `rgba(168, 85, 247, ${(1 - age) * 0.85 * intensity})`;
        ctx.lineWidth = (2 + rough * 2) * elScale;
        ctx.beginPath();
        ctx.arc(cx, cy, rad, 0, Math.PI * 2);
        ctx.stroke();
    }
});

// 170. Freezing White Nitrogen Coolant Gas Venting Across Floor
reg(['ds_nitrogen_coolant_vent', 'item_170'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cy = H * 0.75;
    // Floor vent grating
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(0, cy - 8 * elScale, 30 * elScale, 16 * elScale);
    // Expanding horizontal white nitrogen vapor fog
    for (let v = 0; v < 8; v++) {
        const vx = ((time * 120 * speed + v * 45) % (W + 60)) - 20;
        const vy = cy + Math.sin(time * 3 + v) * 8 * elScale;
        const rad = (16 + v * 5 + rough * 15) * elScale;
        const fog = ctx.createRadialGradient(vx, vy, 2, vx, vy, rad);
        fog.addColorStop(0, `rgba(240, 249, 255, ${0.65 * intensity})`);
        fog.addColorStop(1, 'rgba(240, 249, 255, 0)');
        ctx.fillStyle = fog;
        ctx.beginPath();
        ctx.arc(vx, vy, rad, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 171. Jagged Asteroids Tumbling Slowly Past Observation Window
reg(['ds_tumbling_asteroids', 'item_171'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numRocks = 4;
    for (let r = 0; r < numRocks; r++) {
        const rx = ((time * 25 * speed + r * 95) % (W + 100)) - 50;
        const ry = H * 0.3 + (r % 2) * 45 * elScale;
        const rot = time * 0.8 * speed + r;
        ctx.save();
        ctx.translate(rx, ry);
        ctx.rotate(rot);
        ctx.fillStyle = '#475569';
        ctx.beginPath();
        ctx.ellipse(0, 0, 16 * elScale, 11 * elScale, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#1e293b';
        ctx.lineWidth = 2 * elScale;
        ctx.stroke();
        ctx.restore();
    }
});

// 172. Derelict Satellite Debris & Solar Panels Drifting in Orbit
reg(['ds_satellite_debris', 'item_172'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const dx = ((time * 35 * speed) % (W + 120)) - 60;
    const dy = H * 0.5;
    const rot = time * 0.6 * speed;
    ctx.save();
    ctx.translate(dx, dy);
    ctx.rotate(rot);
    // Satellite chassis
    ctx.fillStyle = '#cbd5e1';
    ctx.fillRect(-12 * elScale, -12 * elScale, 24 * elScale, 24 * elScale);
    // Blue photovoltaic solar panel wings
    ctx.fillStyle = '#1d4ed8';
    ctx.fillRect(-35 * elScale, -8 * elScale, 20 * elScale, 16 * elScale);
    ctx.fillRect(15 * elScale, -8 * elScale, 20 * elScale, 16 * elScale);
    ctx.restore();
});

// 173. Spherical Zero-Gravity Water Droplets Floating Across Cabin
reg(['ds_zerog_water_droplets', 'item_173'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numBlobs = 6;
    for (let b = 0; b < numBlobs; b++) {
        const bx = (b * 67 + Math.sin(time + b) * 25) % W;
        const by = (b * 97 + Math.cos(time * 0.8 + b) * 20) % H;
        const blobR = (8 + (b % 3) * 4) * elScale;
        
        const grad = ctx.createRadialGradient(bx - blobR * 0.3, by - blobR * 0.3, 1, bx, by, blobR);
        grad.addColorStop(0, `rgba(255, 255, 255, ${0.9 * intensity})`);
        grad.addColorStop(0.5, `rgba(56, 189, 248, ${0.65 * intensity})`);
        grad.addColorStop(1, `rgba(14, 165, 233, ${0.35 * intensity})`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(bx, by, blobR, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 174. Colorful Deep-Space Nebula Clouds Shifting Slowly
reg(['ds_nebula_drift', 'item_174'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    for (let n = 0; n < 5; n++) {
        const nx = ((time * 15 * speed + n * 80) % (W + 120)) - 60;
        const ny = H * 0.5 + Math.sin(time * 0.6 + n) * 30 * elScale;
        const rad = (70 + n * 12 + rough * 30) * elScale;
        const grad = ctx.createRadialGradient(nx, ny, 10, nx, ny, rad);
        grad.addColorStop(0, n % 2 === 0 ? `rgba(168, 85, 247, ${0.35 * intensity})` : `rgba(244, 114, 182, ${0.35 * intensity})`);
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(nx, ny, rad, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 175. Majestic Planetary Ice Rings Rotating Outside Lounge
reg(['ds_planetary_rings', 'item_175'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    for (let r = 0; r < 4; r++) {
        const radX = (90 + r * 22) * elScale;
        const radY = (35 + r * 9) * elScale;
        ctx.strokeStyle = `rgba(186, 230, 253, ${(0.45 - r * 0.08) * intensity})`;
        ctx.lineWidth = 3 * elScale;
        ctx.beginPath();
        ctx.ellipse(cx, cy, radX, radY, 0.25, 0, Math.PI * 2);
        ctx.stroke();
    }
});

// =========================================================================
// B. ANIMATED TEXTURES & VOLUMES (176 - 200) - Deep Space & Hard Sci-Fi
// =========================================================================

// 176. Eerie Blue Cherenkov Radiation Glowing Beneath Submerged Fission Core
reg(['ds_cherenkov_radiation', 'item_176'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const pulse = 0.8 + Math.sin(time * 3 * speed) * 0.2;
    // Submerged radioactive reactor pool
    const cherenkovGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, Math.min(W, H) * 0.5);
    cherenkovGrad.addColorStop(0, `rgba(56, 189, 248, ${0.9 * pulse * intensity})`);
    cherenkovGrad.addColorStop(0.5, `rgba(14, 165, 233, ${0.45 * pulse * intensity})`);
    cherenkovGrad.addColorStop(1, 'rgba(3, 105, 161, 0)');
    ctx.fillStyle = cherenkovGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, Math.min(W, H) * 0.5, 0, Math.PI * 2);
    ctx.fill();
    // Heavy cylindrical uranium fuel bundle core
    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    ctx.arc(cx, cy, 26 * elScale, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 3 * elScale;
    ctx.stroke();
});

// 177. Red-Alert Klaxon Strobes Washing Rhythmically Over Decking (Top-Down Beacon)
reg(['ds_redalert_strobes', 'item_177'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const maxR = Math.max(W, H) * 0.6;
    const rot = time * 4 * speed;
    const pulse = 0.5 + Math.sin(time * 6 * speed) * 0.5;

    // Dual rotating warning light beam cones
    for (let b = 0; b < 2; b++) {
        const ang = rot + b * Math.PI;
        const bGrad = ctx.createRadialGradient(cx, cy, 5, cx, cy, maxR);
        bGrad.addColorStop(0, `rgba(239, 68, 68, ${0.75 * intensity})`);
        bGrad.addColorStop(0.5, `rgba(220, 38, 38, ${0.4 * intensity})`);
        bGrad.addColorStop(1, 'rgba(220, 38, 38, 0)');
        ctx.fillStyle = bGrad;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, maxR, ang - 0.4, ang + 0.4);
        ctx.closePath();
        ctx.fill();
    }

    // Central ceiling klaxon dome
    FX.drawRadialGlow(ctx, cx, cy, 2, 45 * elScale, `rgba(254, 202, 202, ${pulse * 0.8 * intensity})`, 'rgba(239, 68, 68, 0)');
    ctx.fillStyle = '#991b1b';
    ctx.beginPath();
    ctx.arc(cx, cy, 14 * elScale, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#f87171';
    ctx.lineWidth = 2 * elScale;
    ctx.stroke();
});

// 178. Bioluminescent Alien Moss Pulsing Across Terraforming Bio-Dome
reg(['ds_biolum_moss', 'item_178'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numPatches = 12;
    for (let p = 0; p < numPatches; p++) {
        const px = (p * 57) % (W * 0.85) + W * 0.08;
        const py = (p * 79) % (H * 0.85) + H * 0.08;
        const pulse = 0.6 + Math.sin(time * 2.5 * speed + p * 0.8) * 0.4;
        const rad = (18 + (p % 4) * 6 + rough * 10) * elScale;
        
        const glow = ctx.createRadialGradient(px, py, 2, px, py, rad);
        glow.addColorStop(0, `rgba(74, 222, 128, ${pulse * 0.85 * intensity})`);
        glow.addColorStop(0.7, `rgba(22, 163, 74, ${pulse * 0.35 * intensity})`);
        glow.addColorStop(1, 'rgba(22, 163, 74, 0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(px, py, rad, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 179. Crisp Deep-Space Starlight Twinkling Steadily
reg(['ds_void_starlight', 'item_179'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    ctx.save();
    const numStars = Math.round(40 + rough * 25);
    for (let s = 0; s < numStars; s++) {
        const sx = (s * 83 + Math.sin(s * 7) * 20) % W;
        const sy = (s * 47 + Math.cos(s * 11) * 20) % H;
        const twinkle = 0.35 + Math.sin(time * (4 + (s % 5)) * speed + s * 1.7) * 0.65;
        const isBright = s % 8 === 0;

        if (isBright) {
            // Bright beacon star with 4-point diffraction spike
            ctx.fillStyle = 'rgba(255, 255, 255, ' + (0.8 * intensity) + ')';
            ctx.beginPath();
            ctx.arc(sx, sy, 2.2 * elScale, 0, Math.PI * 2);
            ctx.fill();

            ctx.strokeStyle = 'rgba(186, 230, 253, ' + (0.8 * intensity) + ')';
            ctx.lineWidth = 1 * elScale;
            ctx.beginPath();
            ctx.moveTo(sx - 6 * elScale, sy); ctx.lineTo(sx + 6 * elScale, sy);
            ctx.moveTo(sx, sy - 6 * elScale); ctx.lineTo(sx, sy + 6 * elScale);
            ctx.stroke();
        } else {
            // Spectral colored twinkling star
            const starColor = (s % 3 === 0) ? 'rgba(186, 230, 253, ' + (0.8 * intensity) + ')' :
                              ((s % 3 === 1) ? 'rgba(254, 240, 138, ' + (0.8 * intensity) + ')' : 'rgba(255, 255, 255, ' + (0.8 * intensity) + ')');
            ctx.fillStyle = starColor;
            ctx.beginPath();
            ctx.arc(sx, sy, (1.0 + (s % 3) * 0.5) * elScale, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Fleeting micrometeorite streak
    const meteorCycle = (time * 1.5 * speed) % 6;
    if (meteorCycle < 0.25) {
        const mt = meteorCycle / 0.25;
        const mx1 = (W * 0.2) + mt * (W * 0.4);
        const my1 = (H * 0.1) + mt * (H * 0.35);
        ctx.strokeStyle = 'rgba(255, 255, 255, ' + (0.8 * intensity) + ')';
        ctx.lineWidth = 1.5 * elScale;
        ctx.beginPath();
        ctx.moveTo(mx1 - 25 * elScale, my1 - 22 * elScale);
        ctx.lineTo(mx1, my1);
        ctx.stroke();
    }
    ctx.restore();
});

// 180. Sub-Floor Quantum Processor Grid Pulsing With Golden Data
reg(['ds_quantum_proc_grid', 'item_180'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const gridSize = 35 * elScale;
    const nx = Math.ceil(W / gridSize), ny = Math.ceil(H / gridSize);
    for (let y = 0; y < ny; y++) {
        for (let x = 0; x < nx; x++) {
            const pulse = Math.sin(time * 4 * speed + (x + y) * 0.5);
            if (pulse > 0.4) {
                ctx.strokeStyle = `rgba(245, 158, 11, ${(pulse - 0.4) * 1.5 * intensity})`;
                ctx.lineWidth = 1.5;
                ctx.strokeRect(x * gridSize + 2, y * gridSize + 2, gridSize - 4, gridSize - 4);
                // Gold bus traces
                ctx.fillStyle = '#fef08a';
                ctx.fillRect(x * gridSize + gridSize * 0.5 - 2, y * gridSize + gridSize * 0.5 - 2, 4, 4);
            }
        }
    }
});

// 181. Boiling Radioactive Reactor Coolant Flooding Engineering Bay (Top-Down Organic Puddle)
reg(['ds_radioactive_coolant_flood', 'item_181'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const poolR = Math.min(W, H) * 0.42;

    // Organic caustic puddle boundary
    ctx.save();
    const radGrad = ctx.createRadialGradient(cx, cy, 5, cx, cy, poolR);
    radGrad.addColorStop(0, `rgba(132, 204, 22, ${0.75 * intensity})`);
    radGrad.addColorStop(0.6, `rgba(101, 163, 13, ${0.55 * intensity})`);
    radGrad.addColorStop(1, 'rgba(101, 163, 13, 0)');
    ctx.fillStyle = radGrad;

    ctx.beginPath();
    const numPts = 16;
    for (let p = 0; p < numPts; p++) {
        const ang = (p / numPts) * Math.PI * 2;
        const wave = Math.sin(time * 3 * speed + p * 1.5) * (8 + rough * 8) * elScale;
        const r = poolR + wave;
        const px = cx + Math.cos(ang) * r;
        const py = cy + Math.sin(ang) * r;
        if (p === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fill();

    // Boiling surface bubbles popping within puddle
    for (let b = 0; b < 12; b++) {
        const bang = (b * 1.7 + time * 0.8 * speed);
        const bdist = ((b * 19 + time * 25 * speed) % (poolR * 0.75));
        const bx = cx + Math.cos(bang) * bdist;
        const by = cy + Math.sin(bang) * bdist;
        const bsize = (3 + (b % 4) * 2) * elScale;
        ctx.fillStyle = '#bef264';
        ctx.beginPath();
        ctx.arc(bx, by, bsize, 0, Math.PI * 2);
        ctx.fill();
    }
    ctx.restore();
});

// 182. Pulsing Organic Alien Hive Biomass Creeping Across Bulkheads
reg(['ds_alien_biomass', 'item_182'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numTendrils = 8;
    for (let t = 0; t < numTendrils; t++) {
        const rootX = (t / numTendrils) * W;
        const pulse = Math.sin(time * 2 * speed + t) * (10 + rough * 12);
        ctx.strokeStyle = '#581c87';
        ctx.lineWidth = (6 + (t % 3) * 2) * elScale;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(rootX, 0);
        ctx.quadraticCurveTo(rootX + pulse, H * 0.4, rootX + pulse * 1.5, H * 0.7);
        ctx.stroke();
        // Biological egg sacs along biomass
        ctx.fillStyle = '#9333ea';
        ctx.beginPath();
        ctx.arc(rootX + pulse, H * 0.4, 7 * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 183. Cryo-Frozen Metal Decking Cracking With Spreading Frost
reg(['ds_frost_fractals', 'item_183'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    ctx.strokeStyle = `rgba(224, 242, 254, ${0.85 * intensity})`;
    ctx.lineWidth = (1.5 + rough * 1.5) * elScale;
    for (let r = 0; r < 8; r++) {
        const a = (r / 8) * Math.PI * 2;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        let px = cx, py = cy;
        for (let s = 1; s <= 4; s++) {
            px += Math.cos(a + Math.sin(s + r) * 0.3) * (18 * elScale);
            py += Math.sin(a + Math.sin(s + r) * 0.3) * (18 * elScale);
            ctx.lineTo(px, py);
        }
        ctx.stroke();
    }
});

// 184. Electrified Hull Grating Arcing Wildly During Ion Storm
reg(['ds_ion_storm_deck', 'item_184'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const isArc = (Math.sin(time * 16 * speed) > 0.2);
    if (!isArc) return;
    ctx.strokeStyle = `rgba(56, 189, 248, ${0.9 * intensity})`;
    ctx.lineWidth = (2.5 + rough * 2) * elScale;
    ctx.beginPath();
    ctx.moveTo(Math.random() * W, 0);
    for (let y = 20; y <= H; y += 30) {
        ctx.lineTo(W * 0.5 + (Math.random() - 0.5) * (40 + rough * 30), y);
    }
    ctx.stroke();
});

// 185. Yellow Acidic Alien Spore Clouds Blanketing Quarantine Chamber
reg(['ds_xenospore_quarantine', 'item_185'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    for (let c = 0; c < 7; c++) {
        const cx = ((time * 25 * speed + c * 75) % (W + 100)) - 50;
        const cy = H * 0.5 + Math.sin(time + c) * 30 * elScale;
        const rad = (35 + c * 6 + rough * 15) * elScale;
        const cloud = ctx.createRadialGradient(cx, cy, 2, cx, cy, rad);
        cloud.addColorStop(0, `rgba(234, 179, 8, ${0.45 * intensity})`);
        cloud.addColorStop(1, 'rgba(234, 179, 8, 0)');
        ctx.fillStyle = cloud;
        ctx.beginPath();
        ctx.arc(cx, cy, rad, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 186. Tiered Hydroponic Garden Beds Misting Engineered Space-Crops
reg(['ds_hydroponic_beds', 'item_186'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numTiers = 3;
    for (let t = 0; t < numTiers; t++) {
        const ty = H * 0.25 + t * (H * 0.25);
        // Hydroponic nutrient conduit tube (transparent ground)
        ctx.strokeStyle = `rgba(56, 189, 248, ${0.45 * intensity})`;
        ctx.lineWidth = 3 * elScale;
        ctx.beginPath();
        ctx.moveTo(W * 0.12, ty); ctx.lineTo(W * 0.88, ty);
        ctx.stroke();
        // Engineered green crop clusters
        for (let p = 0; p < 8; p++) {
            const px = W * 0.16 + p * (W * 0.72 / 7);
            ctx.fillStyle = '#22c55e';
            ctx.beginPath();
            ctx.arc(px, ty - 6 * elScale, 6 * elScale, 0, Math.PI * 2);
            ctx.fill();
        }
        // Aerosol nutrient mist puffs
        for (let m = 0; m < 4; m++) {
            const mx = W * 0.2 + m * (W * 0.6 / 3);
            FX.drawRadialGlow(ctx, mx, ty - 8 * elScale, 2, 16 * elScale, `rgba(224, 242, 254, ${0.35 * intensity})`, 'rgba(224, 242, 254, 0)');
        }
    }
});

// 187. Honeycomb Wall of Cryo-Sleep Pods Blinking With Green Vitals
reg(['ds_cryopod_honeycomb', 'item_187'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numRows = 3, numCols = 4;
    const podW = 45 * elScale, podH = 26 * elScale;
    for (let r = 0; r < numRows; r++) {
        for (let c = 0; c < numCols; c++) {
            const px = W * 0.15 + c * (podW + 12 * elScale);
            const py = H * 0.2 + r * (podH + 12 * elScale);
            ctx.fillStyle = '#0f172a';
            ctx.fillRect(px, py, podW, podH);
            ctx.strokeStyle = '#334155';
            ctx.lineWidth = 2 * elScale;
            ctx.strokeRect(px, py, podW, podH);
            // Blinking green vital telemetry LED
            const pulse = (Math.sin(time * 4 * speed + (r + c)) > 0);
            ctx.fillStyle = pulse ? '#22c55e' : '#14532d';
            ctx.beginPath();
            ctx.arc(px + podW - 8 * elScale, py + 8 * elScale, 3 * elScale, 0, Math.PI * 2);
            ctx.fill();
        }
    }
});

// 188. Automated Drone Charging Floor With Blinking Battery LEDs
reg(['ds_drone_charging_floor', 'item_188'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    for (let d = 0; d < 6; d++) {
        const dx = W * 0.2 + (d % 3) * (W * 0.3);
        const dy = H * 0.3 + Math.floor(d / 3) * (H * 0.4);
        // Hexagonal charging pad
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 2 * elScale;
        ctx.strokeRect(dx - 18 * elScale, dy - 18 * elScale, 36 * elScale, 36 * elScale);
        // Amber blinking battery LED
        const blink = Math.sin(time * 6 * speed + d) > 0;
        ctx.fillStyle = blink ? '#fbbf24' : '#78350f';
        ctx.beginPath();
        ctx.arc(dx, dy, 4 * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 189. Heavy-Duty Conveyor Grating Moving Asteroid Ore Into Crusher
reg(['ds_ore_conveyor_crusher', 'item_189'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cy = H * 0.5;
    // Moving steel grating tracks
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 2;
    for (let x = 0; x <= W; x += 25) {
        const mx = (x + time * 60 * speed) % W;
        ctx.beginPath(); ctx.moveTo(mx, cy - 20 * elScale); ctx.lineTo(mx, cy + 20 * elScale); ctx.stroke();
    }
    // Tumbling ore chunks
    for (let o = 0; o < 5; o++) {
        const ox = ((time * 60 * speed + o * 70) % (W + 60)) - 30;
        ctx.fillStyle = '#64748b';
        ctx.beginPath();
        ctx.ellipse(ox, cy, 10 * elScale, 7 * elScale, 0, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 190. Reinforced Glass Bridge Floor Revealing Spinning Gyroscopes (Top-Down Circular Viewport)
reg(['ds_gyroscope_floor', 'item_190'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    // Circular reinforced glass viewport rim on transparent deck
    ctx.strokeStyle = `rgba(56, 189, 248, ${0.65 * intensity})`;
    ctx.lineWidth = 3 * elScale;
    ctx.beginPath();
    ctx.arc(cx, cy, 68 * elScale, 0, Math.PI * 2);
    ctx.stroke();
    // Inner bevel ring
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.45)';
    ctx.lineWidth = 1.5 * elScale;
    ctx.beginPath();
    ctx.arc(cx, cy, 64 * elScale, 0, Math.PI * 2);
    ctx.stroke();
    // Spinning brass gimbal rings beneath glass
    const rot = time * 3 * speed;
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 4 * elScale;
    ctx.beginPath();
    ctx.ellipse(cx, cy, 55 * elScale, 55 * elScale * Math.abs(Math.cos(rot)), rot, 0, Math.PI * 2);
    ctx.stroke();
});

// 191. Swirling Blue Hyperspace Wormhole Tunnel Surrounding Starship
reg(['ds_wormhole_tunnel', 'item_191'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const numRings = 6;
    for (let r = 1; r <= numRings; r++) {
        const rad = ((time * 80 * speed + r * 35) % (Math.min(W, H) * 0.55));
        const alpha = Math.max(0, 1 - rad / (Math.min(W, H) * 0.55));
        ctx.strokeStyle = `rgba(56, 189, 248, ${alpha * 0.85 * intensity})`;
        ctx.lineWidth = (3 + rough * 3) * elScale;
        ctx.beginPath();
        ctx.arc(cx, cy, rad, 0, Math.PI * 2);
        ctx.stroke();
    }
});

// 192. Gravitational Lensing Warping Starlight Around Singularity
reg(['ds_gravitational_lens', 'item_192'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    // Black hole event horizon
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(cx, cy, 28 * elScale, 0, Math.PI * 2);
    ctx.fill();
    // Glowing Einstein ring photon sphere
    const ringGrad = ctx.createRadialGradient(cx, cy, 28 * elScale, cx, cy, 55 * elScale);
    ringGrad.addColorStop(0, `rgba(254, 240, 138, ${0.9 * intensity})`);
    ringGrad.addColorStop(0.5, `rgba(249, 115, 22, ${0.5 * intensity})`);
    ringGrad.addColorStop(1, 'rgba(239, 68, 68, 0)');
    ctx.fillStyle = ringGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, 55 * elScale, 0, Math.PI * 2);
    ctx.fill();
});

// 193. Translucent Energy Shield Dome Shimmering Across Lunar Outpost
reg(['ds_outpost_shield_dome', 'item_193'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.7;
    const rad = Math.min(W, H) * 0.45 * elScale;
    const pulse = 0.75 + Math.sin(time * 3 * speed) * 0.25;
    ctx.fillStyle = `rgba(56, 189, 248, ${0.2 * pulse * intensity})`;
    ctx.beginPath();
    ctx.arc(cx, cy, rad, Math.PI, 0, false);
    ctx.fill();
    ctx.strokeStyle = `rgba(186, 230, 253, ${0.85 * pulse * intensity})`;
    ctx.lineWidth = 3 * elScale;
    ctx.stroke();
});

// 194. Full-Room Holographic Star-Chart Projection Filling Deck
reg(['ds_fullroom_starchart', 'item_194'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    // Concentric orbital grid rings
    ctx.strokeStyle = `rgba(6, 182, 212, ${0.4 * intensity})`;
    ctx.lineWidth = 1.5;
    for (let r = 1; r <= 3; r++) {
        ctx.beginPath();
        ctx.arc(cx, cy, r * 40 * elScale, 0, Math.PI * 2);
        ctx.stroke();
    }
    // Rotating holographic system nodes
    for (let n = 0; n < 6; n++) {
        const a = time * 0.8 * speed + (n / 6) * Math.PI * 2;
        const rad = (30 + (n % 3) * 35) * elScale;
        const nx = cx + Math.cos(a) * rad;
        const ny = cy + Math.sin(a) * rad * 0.6;
        ctx.fillStyle = '#67e8f9';
        ctx.beginPath();
        ctx.arc(nx, ny, 3.5 * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 195. Zero-Gravity Floating Clipboards, Pens & Dust in Derelict
reg(['ds_zerog_debris_field', 'item_195'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numItems = 8;
    for (let i = 0; i < numItems; i++) {
        const ix = (i * 73 + Math.sin(time * speed + i) * 20) % W;
        const iy = (i * 97 + Math.cos(time * 0.8 * speed + i) * 18) % H;
        const rot = time * 1.5 + i;
        ctx.save();
        ctx.translate(ix, iy);
        ctx.rotate(rot);
        if (i % 2 === 0) {
            // Floating rectangular datapad
            ctx.fillStyle = '#334155';
            ctx.fillRect(-10 * elScale, -14 * elScale, 20 * elScale, 28 * elScale);
        } else {
            // Floating pen
            ctx.fillStyle = '#f8fafc';
            ctx.fillRect(-2 * elScale, -8 * elScale, 4 * elScale, 16 * elScale);
        }
        ctx.restore();
    }
});

// 196. Sterile White Air-Scrubber Mist Drifting Across Medical Lab
reg(['ds_air_scrubber_mist', 'item_196'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    for (let m = 0; m < 6; m++) {
        const mx = ((time * 40 * speed + m * 85) % (W + 120)) - 60;
        const my = H * 0.6 + Math.sin(time + m) * 15 * elScale;
        const rad = (45 + m * 8 + rough * 20) * elScale;
        const mist = ctx.createRadialGradient(mx, my, 5, mx, my, rad);
        mist.addColorStop(0, `rgba(240, 249, 255, ${0.4 * intensity})`);
        mist.addColorStop(1, 'rgba(240, 249, 255, 0)');
        ctx.fillStyle = mist;
        ctx.beginPath();
        ctx.arc(mx, my, rad, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 197. Sweeping Shadows of Rotating Comms Dishes Passing Over Regolith
reg(['ds_comms_dish_shadows', 'item_197'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const rotSpeed = time * 0.8 * speed;
    const sweep = Math.sin(rotSpeed) * (W * 0.32);
    const dishW = 75 * elScale;
    const dishH = 34 * elScale;

    ctx.save();
    ctx.translate(cx + sweep, cy);
    ctx.rotate(0.25);

    // Parabolic comms dish shadow on cratered regolith
    ctx.fillStyle = 'rgba(15, 23, 42, ' + (0.8 * intensity) + ')';
    ctx.beginPath();
    ctx.ellipse(0, 0, dishW, dishH, 0, 0, Math.PI * 2);
    ctx.fill();

    // Central sub-reflector feed tripod shadow
    ctx.strokeStyle = 'rgba(15, 23, 42, ' + (0.8 * intensity) + ')';
    ctx.lineWidth = 2 * elScale;
    ctx.beginPath();
    ctx.moveTo(0, 0); ctx.lineTo(-dishW * 0.4, -dishH * 0.7);
    ctx.moveTo(0, 0); ctx.lineTo(dishW * 0.4, -dishH * 0.7);
    ctx.moveTo(0, 0); ctx.lineTo(0, dishH * 0.8);
    ctx.stroke();

    // Feed horn apex shadow dot
    ctx.fillStyle = 'rgba(15, 23, 42, ' + (0.8 * intensity) + ')';
    ctx.beginPath();
    ctx.arc(0, 0, 6 * elScale, 0, Math.PI * 2);
    ctx.fill();

    // Antenna mast shadow casting outward
    ctx.lineWidth = 4 * elScale;
    ctx.beginPath();
    ctx.moveTo(0, dishH * 0.6);
    ctx.lineTo(dishW * 0.6, dishH * 1.4);
    ctx.stroke();

    ctx.restore();
});

// 198. Glowing Microscopic Spores Floating in Exoplanet Jungle
reg(['ds_exoplanet_spores', 'item_198'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numSpores = 25;
    for (let s = 0; s < numSpores; s++) {
        const sx = (s * 47 + Math.sin(time * 2 + s) * 15) % W;
        const sy = (s * 83 + Math.cos(time * 1.8 + s) * 15) % H;
        const pulse = 0.5 + Math.sin(time * 6 * speed + s) * 0.5;
        ctx.fillStyle = s % 2 === 0 ? `rgba(168, 85, 247, ${pulse * intensity})` : `rgba(45, 212, 191, ${pulse * intensity})`;
        ctx.beginPath();
        ctx.arc(sx, sy, 2 * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 199. Gentle Water Ripples Inside Zero-G Aquatic Xenobiology Tank
reg(['ds_xenobio_aquatank', 'item_199'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const tankR = Math.min(W, H) * 0.42 * elScale;
    // Spherical water boundary
    ctx.fillStyle = `rgba(6, 182, 212, ${0.35 * intensity})`;
    ctx.beginPath();
    ctx.arc(cx, cy, tankR, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#bae6fd';
    ctx.lineWidth = 3 * elScale;
    ctx.stroke();
    // Inner fluid waves
    for (let w = 0; w < 3; w++) {
        const rad = tankR * (0.4 + w * 0.25) + Math.sin(time * 3 * speed + w) * 6;
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.4 * intensity})`;
        ctx.beginPath();
        ctx.arc(cx, cy, rad, 0, Math.PI * 2);
        ctx.stroke();
    }
});

// 200. Subtle Thermal Shimmer Rising From Engine Manifolds (Top-Down Hexagonal Vent)
reg(['ds_manifold_thermal_shimmer', 'item_200'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const ventR = 38 * elScale;

    // Hexagonal manifold exhaust housing
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 3 * elScale;
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
        const ang = (i / 6) * Math.PI * 2;
        const hx = cx + Math.cos(ang) * ventR;
        const hy = cy + Math.sin(ang) * ventR;
        if (i === 0) ctx.moveTo(hx, hy);
        else ctx.lineTo(hx, hy);
    }
    ctx.closePath();
    ctx.stroke();

    // Concentric expanding distorted thermal shimmer waves radiating outward from center
    for (let r = 0; r < 4; r++) {
        const age = (time * 1.5 * speed + r * 0.25) % 1;
        const rad = ventR * (0.3 + age * 1.4);
        const alpha = (1 - age) * 0.45 * intensity;
        ctx.strokeStyle = `rgba(254, 240, 138, ${alpha})`;
        ctx.lineWidth = (1.5 + rough * 2) * elScale;
        ctx.beginPath();
        for (let a = 0; a < 12; a++) {
            const ang = (a / 12) * Math.PI * 2;
            const shim = Math.sin(time * 10 * speed + a * 2) * (3 + rough * 4) * elScale;
            const sx = cx + Math.cos(ang) * (rad + shim);
            const sy = cy + Math.sin(ang) * (rad + shim);
            if (a === 0) ctx.moveTo(sx, sy);
            else ctx.lineTo(sx, sy);
        }
        ctx.closePath();
        ctx.stroke();
    }
});

// =========================================================================
// C. SINGLE ELEMENTS / SPOT PROPS (201 - 225) - Deep Space & Hard Sci-Fi
// =========================================================================

// 201. Central Fusion Reactor Core Pulsing With White-Blue Plasma
reg(['ds_fusion_reactor_core', 'item_201'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const pulse = 0.85 + Math.sin(time * 6 * speed) * 0.15;
    // Core containment magnetic rings
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 4 * elScale;
    ctx.beginPath();
    ctx.arc(cx, cy, 45 * elScale, 0, Math.PI * 2);
    ctx.stroke();
    // Blinding white-blue core plasma ball
    const coreGrad = ctx.createRadialGradient(cx, cy, 2, cx, cy, 40 * elScale * pulse);
    coreGrad.addColorStop(0, `rgba(255, 255, 255, ${0.98 * intensity})`);
    coreGrad.addColorStop(0.3, `rgba(56, 189, 248, ${0.85 * intensity})`);
    coreGrad.addColorStop(0.8, `rgba(37, 99, 235, ${0.45 * intensity})`);
    coreGrad.addColorStop(1, 'rgba(37, 99, 235, 0)');
    ctx.fillStyle = coreGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, 40 * elScale * pulse, 0, Math.PI * 2);
    ctx.fill();
});

// 202. Loose LED Ceiling Panel Dangling by Wire and Flickering (Top-Down Battlemap View)
reg(['ds_dangling_led_panel', 'item_202'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.48;
    // 2D overhead suspension sway orbit
    const swayX = Math.sin(time * 2.2 * speed) * (15 * elScale);
    const swayY = Math.cos(time * 4.4 * speed) * (6 * elScale);
    const px = cx + swayX;
    const py = cy + swayY;
    const flicker = (Math.sin(time * 26 * speed) > 0.15) ? (0.88 + Math.sin(time * 52) * 0.12) : 0.08;

    ctx.save();
    // 1. Overhead ceiling conduit frame opening (dark recessed ceiling pocket)
    ctx.fillStyle = 'rgba(15, 23, 42, 0.6)';
    ctx.fillRect(cx - 30 * elScale, cy - 20 * elScale, 60 * elScale, 40 * elScale);
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 1.5 * elScale;
    ctx.strokeRect(cx - 30 * elScale, cy - 20 * elScale, 60 * elScale, 40 * elScale);

    // 2. Flickering white-cyan light pool cast onto the steel deck floor below
    const poolW = (75 + rough * 20) * elScale;
    const poolH = (55 + rough * 15) * elScale;
    const lightGrad = ctx.createRadialGradient(px - swayX * 0.3, py - swayY * 0.3, 4, px - swayX * 0.3, py - swayY * 0.3, poolW);
    lightGrad.addColorStop(0, `rgba(240, 249, 255, ${0.85 * flicker * intensity})`);
    lightGrad.addColorStop(0.4, `rgba(56, 189, 248, ${0.4 * flicker * intensity})`);
    lightGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');
    ctx.fillStyle = lightGrad;
    ctx.beginPath();
    ctx.ellipse(px - swayX * 0.3, py - swayY * 0.3, poolW, poolH, 0.1, 0, Math.PI * 2);
    ctx.fill();

    // 3. Trailing power cable cords from ceiling pocket to suspended panel
    ctx.strokeStyle = '#020617';
    ctx.lineWidth = 2 * elScale;
    ctx.beginPath();
    ctx.moveTo(cx - 18 * elScale, cy - 12 * elScale);
    ctx.quadraticCurveTo(cx - 10 * elScale, cy - 5 * elScale, px - 14 * elScale, py - 8 * elScale);
    ctx.moveTo(cx + 18 * elScale, cy - 12 * elScale);
    ctx.quadraticCurveTo(cx + 12 * elScale, cy - 5 * elScale, px + 14 * elScale, py - 8 * elScale);
    ctx.stroke();

    // 4. Dangling LED panel frame seen from directly above (angled rectangle)
    ctx.save();
    ctx.translate(px, py);
    ctx.rotate(Math.sin(time * 2.2 * speed) * 0.15); // gentle angular tilt

    // Panel chassis
    const panW = 48 * elScale, panH = 26 * elScale;
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(-panW * 0.5, -panH * 0.5, panW, panH);
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 2 * elScale;
    ctx.strokeRect(-panW * 0.5, -panH * 0.5, panW, panH);

    // Glowing diffuser face
    ctx.fillStyle = `rgba(224, 242, 254, ${flicker * intensity})`;
    ctx.fillRect(-panW * 0.42, -panH * 0.38, panW * 0.84, panH * 0.76);

    // Occasional bright electrical spark from frayed wire corner
    if (flicker < 0.2 && Math.sin(time * 30) > 0.4) {
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(-panW * 0.42, -panH * 0.42, 3 * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
    ctx.restore();

    ctx.restore();
});

// 203. Handheld Magnesium Distress Flare Burning Bright Red
reg(['ds_magnesium_flare', 'item_203'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.55;
    // Flare casing
    ctx.fillStyle = '#7f1d1d';
    ctx.fillRect(cx - 18 * elScale, cy - 4 * elScale, 36 * elScale, 8 * elScale);
    // Roaring blinding magnesium red flame
    const flareR = (22 + Math.sin(time * 25 * speed) * 6) * elScale;
    const flareGrad = ctx.createRadialGradient(cx + 18 * elScale, cy, 2, cx + 18 * elScale, cy, flareR);
    flareGrad.addColorStop(0, `rgba(255, 255, 255, ${0.98 * intensity})`);
    flareGrad.addColorStop(0.3, `rgba(239, 68, 68, ${0.9 * intensity})`);
    flareGrad.addColorStop(1, 'rgba(239, 68, 68, 0)');
    ctx.fillStyle = flareGrad;
    ctx.beginPath();
    ctx.arc(cx + 18 * elScale, cy, flareR, 0, Math.PI * 2);
    ctx.fill();
});

// 204. Rotating Holographic QUARANTINE Warning Icon Hovering
reg(['ds_quarantine_holo_icon', 'item_204'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const rot = time * 2 * speed;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(rot);
    // Yellow biohazard hazard triangle
    ctx.strokeStyle = `rgba(245, 158, 11, ${0.9 * intensity})`;
    ctx.lineWidth = 3.5 * elScale;
    ctx.beginPath();
    ctx.moveTo(0, -28 * elScale);
    ctx.lineTo(26 * elScale, 20 * elScale);
    ctx.lineTo(-26 * elScale, 20 * elScale);
    ctx.closePath();
    ctx.stroke();
    // Exclamation point
    ctx.fillStyle = '#fbbf24';
    ctx.fillRect(-2 * elScale, -12 * elScale, 4 * elScale, 16 * elScale);
    ctx.beginPath();
    ctx.arc(0, 12 * elScale, 2.5 * elScale, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
});

// 205. Phosphorescent Alien Jellyfish Pulsing in Cylinder
reg(['ds_specimen_jellyfish', 'item_205'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    // Glass specimen cylinder
    ctx.fillStyle = 'rgba(6, 182, 212, 0.15)';
    ctx.fillRect(cx - 24 * elScale, cy - 45 * elScale, 48 * elScale, 90 * elScale);
    ctx.strokeStyle = '#bae6fd';
    ctx.lineWidth = 2 * elScale;
    ctx.strokeRect(cx - 24 * elScale, cy - 45 * elScale, 48 * elScale, 90 * elScale);
    // Pulsing phosphorescent jellyfish bell
    const pulse = 0.75 + Math.sin(time * 3 * speed) * 0.25;
    const bellY = cy - 10 * elScale + Math.sin(time * 2) * 8 * elScale;
    ctx.fillStyle = `rgba(168, 85, 247, ${0.85 * intensity})`;
    ctx.beginPath();
    ctx.arc(cx, bellY, 15 * elScale * pulse, Math.PI, 0, false);
    ctx.fill();
    // Trailing glowing tentacles
    ctx.strokeStyle = '#c084fc';
    ctx.lineWidth = 1.5;
    for (let t = -2; t <= 2; t++) {
        ctx.beginPath();
        ctx.moveTo(cx + t * 4 * elScale, bellY);
        ctx.quadraticCurveTo(cx + t * 6 * elScale + Math.sin(time * 4 + t) * 4, bellY + 18 * elScale, cx + t * 3 * elScale, bellY + 30 * elScale);
        ctx.stroke();
    }
});

// 206. Heavy Plasma-Arc Cutting Torch Slicing Through Blast Door
reg(['ds_plasma_torch_cutter', 'item_206'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const cutY = cy - 25 * elScale + ((time * 30 * speed) % (50 * elScale));
    // Torch nozzle
    ctx.fillStyle = '#64748b';
    ctx.fillRect(cx - 35 * elScale, cutY - 4 * elScale, 25 * elScale, 8 * elScale);
    // Blue-white piercing plasma arc
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(cx - 10 * elScale, cutY, 4 * elScale, 0, Math.PI * 2);
    ctx.fill();
    // Flying incandescent sparks
    for (let sp = 0; sp < 8; sp++) {
        const sx = cx - 10 * elScale + Math.random() * 20 * elScale;
        const sy = cutY + (Math.random() - 0.5) * 16 * elScale;
        ctx.fillStyle = '#f59e0b';
        ctx.beginPath();
        ctx.arc(sx, sy, 1.8 * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 207. Escape Pod Thruster Nozzles Firing Stabilization Bursts
reg(['ds_escape_pod_thrusters', 'item_207'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    // Hexagonal escape pod hull
    ctx.fillStyle = '#334155';
    ctx.beginPath();
    ctx.arc(cx, cy, 32 * elScale, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 3 * elScale;
    ctx.stroke();
    // RCS stabilization bursts from nozzles
    const isBurst = (Math.sin(time * 5 * speed) > 0.2);
    if (isBurst) {
        ctx.fillStyle = `rgba(56, 189, 248, ${0.85 * intensity})`;
        ctx.beginPath();
        ctx.moveTo(cx + 32 * elScale, cy - 4 * elScale);
        ctx.lineTo(cx + 52 * elScale, cy);
        ctx.lineTo(cx + 32 * elScale, cy + 4 * elScale);
        ctx.closePath();
        ctx.fill();
    }
});

// 208. Ruptured Sub-Floor Pipe Spraying Liquid Nitrogen Coolant
reg(['ds_subfloor_coolant_leak', 'item_208'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.35, cy = H * 0.65;
    ctx.save();
    // Industrial reinforced deck conduit flange
    ctx.fillStyle = '#1e293b';
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 2 * elScale;
    ctx.fillRect(cx - 25 * elScale, cy - 12 * elScale, 30 * elScale, 24 * elScale);
    ctx.strokeRect(cx - 25 * elScale, cy - 12 * elScale, 30 * elScale, 24 * elScale);

    // Rupture fracture tear with frost rim
    ctx.fillStyle = '#0284c7';
    ctx.fillRect(cx + 2 * elScale, cy - 6 * elScale, 6 * elScale, 12 * elScale);
    ctx.strokeStyle = '#e0f2fe';
    ctx.lineWidth = 1 * elScale;
    ctx.strokeRect(cx + 1 * elScale, cy - 7 * elScale, 8 * elScale, 14 * elScale);

    // High velocity cryogenic spray cone
    const sprayLen = (W * 0.55 + rough * 25) * elScale;
    const coneGrad = ctx.createLinearGradient(cx + 5 * elScale, cy, cx + sprayLen, cy - 35 * elScale);
    coneGrad.addColorStop(0, 'rgba(240, 249, 255, ' + (0.8 * intensity) + ')');
    coneGrad.addColorStop(0.4, 'rgba(186, 230, 253, ' + (0.8 * intensity) + ')');
    coneGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');
    ctx.fillStyle = coneGrad;
    ctx.beginPath();
    ctx.moveTo(cx + 6 * elScale, cy - 4 * elScale);
    ctx.lineTo(cx + sprayLen, cy - 45 * elScale);
    ctx.lineTo(cx + sprayLen, cy + 25 * elScale);
    ctx.lineTo(cx + 6 * elScale, cy + 4 * elScale);
    ctx.closePath();
    ctx.fill();

    // Billowing freezing vapor tumbling across floor plates
    for (let v = 0; v < 8; v++) {
        const vt = (time * 2 * speed + v * 0.2) % 1.4;
        const vx = cx + 25 * elScale + vt * (sprayLen * 0.85);
        const vy = cy - 10 * elScale + Math.sin(time * 4 + v) * (vt * 25 * elScale);
        const vr = (8 + vt * 20) * elScale;
        const vAlpha = (1 - vt / 1.4) * 0.45 * intensity;

        const fg = ctx.createRadialGradient(vx, vy, 2, vx, vy, vr);
        fg.addColorStop(0, 'rgba(255, 255, 255, ' + vAlpha + ')');
        fg.addColorStop(0.7, 'rgba(224, 242, 254, ' + (vAlpha * 0.5) + ')');
        fg.addColorStop(1, 'rgba(186, 230, 253, 0)');
        ctx.fillStyle = fg;
        ctx.beginPath();
        ctx.arc(vx, vy, vr, 0, Math.PI * 2);
        ctx.fill();
    }
    ctx.restore();
});

// 209. Pulsing Alien Egg Sac Twitching as Larva Breaks Out
reg(['ds_alien_larva_hatching', 'item_209'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.55;
    const twitch = Math.sin(time * 12 * speed) * 1.5;
    // Leathery alien egg sac
    ctx.fillStyle = '#3b0764';
    ctx.beginPath();
    ctx.ellipse(cx + twitch, cy, 24 * elScale, 32 * elScale, 0, 0, Math.PI * 2);
    ctx.fill();
    // Peeling top petals revealing green glowing interior
    ctx.fillStyle = '#22c55e';
    ctx.beginPath();
    ctx.arc(cx + twitch, cy - 20 * elScale, 8 * elScale, 0, Math.PI * 2);
    ctx.fill();
});

// 210. Airlock Manual Override Lever Flashing Red With Sparks
reg(['ds_airlock_override_lever', 'item_210'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    // Emergency yellow-striped wall housing
    ctx.fillStyle = '#f59e0b';
    ctx.fillRect(cx - 24 * elScale, cy - 35 * elScale, 48 * elScale, 70 * elScale);
    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 3 * elScale;
    ctx.strokeRect(cx - 24 * elScale, cy - 35 * elScale, 48 * elScale, 70 * elScale);
    // Red pull-down lever arm
    const pull = (Math.sin(time * 3 * speed) + 1) * 0.5 * 25 * elScale;
    ctx.strokeStyle = '#ef4444';
    ctx.lineWidth = 5 * elScale;
    ctx.beginPath();
    ctx.moveTo(cx, cy - 15 * elScale);
    ctx.lineTo(cx, cy - 15 * elScale + pull);
    ctx.stroke();
    // Handle knob
    ctx.fillStyle = '#dc2626';
    ctx.beginPath();
    ctx.arc(cx, cy - 15 * elScale + pull, 6 * elScale, 0, Math.PI * 2);
    ctx.fill();
});

// 211. Rotating 3D Holographic Planet Projection
reg(['ds_holo_planet_globe', 'item_211'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const r = 32 * elScale;
    const rot = time * 2 * speed;
    // Wireframe holographic globe
    ctx.strokeStyle = `rgba(56, 189, 248, ${0.85 * intensity})`;
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.stroke();
    // Latitude and longitude lines
    for (let l = 1; l <= 2; l++) {
        ctx.beginPath();
        ctx.ellipse(cx, cy, r, r * (l / 3), 0, 0, Math.PI * 2);
        ctx.stroke();
    }
    // Rotating meridians
    ctx.beginPath();
    ctx.ellipse(cx, cy, r * Math.abs(Math.cos(rot)), r, 0, 0, Math.PI * 2);
    ctx.stroke();
});

// 212. Horizontal Cryo-Pod Sliding Open With Escaping Frost
reg(['ds_cryopod_hatch_open', 'item_212'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const podW = 75 * elScale, podH = 34 * elScale;
    // Base chamber
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(cx - podW * 0.5, cy - podH * 0.5, podW, podH);
    // Sliding glass hatch opening upwards
    const open = Math.abs(Math.sin(time * 1.5 * speed)) * 18 * elScale;
    ctx.fillStyle = 'rgba(186, 230, 253, 0.4)';
    ctx.fillRect(cx - podW * 0.5, cy - podH * 0.5 - open, podW, podH);
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2 * elScale;
    ctx.strokeRect(cx - podW * 0.5, cy - podH * 0.5 - open, podW, podH);
    // Escaping cold frost mist
    for (let f = 0; f < 6; f++) {
        const fx = cx - 25 * elScale + f * 10 * elScale;
        const fy = cy - open - ((time * 25 + f * 15) % 25);
        ctx.fillStyle = `rgba(240, 249, 255, ${0.45 * intensity})`;
        ctx.beginPath();
        ctx.arc(fx, fy, 6 * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 213. Dish-Shaped Communications Array Rotating on Exterior Hull
reg(['ds_hull_comms_dish', 'item_213'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.55;
    const pan = Math.sin(time * 1.2 * speed);
    // Base mount
    ctx.fillStyle = '#334155';
    ctx.fillRect(cx - 10 * elScale, cy + 15 * elScale, 20 * elScale, 15 * elScale);
    // Parabolic dish
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(pan * 0.35);
    ctx.fillStyle = '#94a3b8';
    ctx.beginPath();
    ctx.ellipse(0, 0, 36 * elScale, 14 * elScale, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 2 * elScale;
    ctx.stroke();
    // Central transceiver feed horn
    ctx.strokeStyle = '#0284c7';
    ctx.lineWidth = 2 * elScale;
    ctx.beginPath();
    ctx.moveTo(0, 0); ctx.lineTo(0, -18 * elScale);
    ctx.stroke();
    ctx.restore();
});

// 214. Articulated Laser-Welding Arm Assembling Fighter Wing
reg(['ds_drydock_welder_arm', 'item_214'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.35, cy = H * 0.2;
    // Robotic shoulder & elbow joints
    const ang1 = Math.sin(time * 2 * speed) * 0.35;
    const ang2 = Math.cos(time * 2 * speed) * 0.45;
    const j1x = cx + Math.sin(ang1) * 35 * elScale;
    const j1y = cy + Math.cos(ang1) * 35 * elScale;
    const tipX = j1x + Math.sin(ang1 + ang2) * 35 * elScale;
    const tipY = j1y + Math.cos(ang1 + ang2) * 35 * elScale;
    
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 4 * elScale;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(j1x, j1y);
    ctx.lineTo(tipX, tipY);
    ctx.stroke();
    // Welding spark flash
    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.arc(tipX, tipY, 4 * elScale, 0, Math.PI * 2);
    ctx.fill();
});

// 215. Brass-and-Steel Artificial Gravity Ring Spinning on Gimbals
reg(['ds_antigrav_gimbal_ring', 'item_215'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const rot = time * 2.5 * speed;
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 3.5 * elScale;
    ctx.beginPath();
    ctx.ellipse(cx, cy, 45 * elScale, 45 * elScale * Math.abs(Math.sin(rot)), 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.strokeStyle = '#64748b';
    ctx.beginPath();
    ctx.ellipse(cx, cy, 32 * elScale * Math.abs(Math.cos(rot)), 32 * elScale, 0, 0, Math.PI * 2);
    ctx.stroke();
});

// 216. Glowing Antimatter Containment Cell With Pinch Fields
reg(['ds_antimatter_containment', 'item_216'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    // Outer magnetic cage
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 3 * elScale;
    ctx.strokeRect(cx - 24 * elScale, cy - 35 * elScale, 48 * elScale, 70 * elScale);
    // Levitating violet antimatter pellet
    const pulse = 0.8 + Math.sin(time * 8 * speed) * 0.2;
    ctx.fillStyle = '#c084fc';
    ctx.beginPath();
    ctx.arc(cx, cy, 8 * elScale * pulse, 0, Math.PI * 2);
    ctx.fill();
});

// 217. Stealth Cloak Emitter Causing Optical Distortion Ripples
reg(['ds_stealth_shroud_distortion', 'item_217'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    for (let r = 0; r < 3; r++) {
        const age = (time * 1.5 * speed + r * 0.33) % 1;
        const rad = age * 55 * elScale;
        ctx.strokeStyle = `rgba(148, 163, 184, ${(1 - age) * 0.6 * intensity})`;
        ctx.lineWidth = 2 * elScale;
        ctx.beginPath();
        ctx.arc(cx, cy, rad, 0, Math.PI * 2);
        ctx.stroke();
    }
});

// 218. Overcharged EMP Capacitor Discharging Violet Static Arcs
reg(['ds_emp_capacitor_arc', 'item_218'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    // Twin capacitor cylindrical poles
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(cx - 25 * elScale, cy - 20 * elScale, 14 * elScale, 40 * elScale);
    ctx.fillRect(cx + 11 * elScale, cy - 20 * elScale, 14 * elScale, 40 * elScale);
    // Violet spark discharge
    if (Math.sin(time * 15 * speed) > 0.2) {
        ctx.strokeStyle = '#a855f7';
        ctx.lineWidth = 2 * elScale;
        ctx.beginPath();
        ctx.moveTo(cx - 11 * elScale, cy);
        ctx.lineTo(cx, cy + (Math.random() - 0.5) * 15);
        ctx.lineTo(cx + 11 * elScale, cy);
        ctx.stroke();
    }
});

// 219. Tachyonic Sensor Array Emitting Concentric Ripples
reg(['ds_tachyonic_sensor_array', 'item_219'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    // Central sensor mast
    ctx.fillStyle = '#0284c7';
    ctx.fillRect(cx - 4 * elScale, cy - 15 * elScale, 8 * elScale, 30 * elScale);
    // Concentric radar waves
    for (let w = 1; w <= 3; w++) {
        const rad = ((time * 40 * speed + w * 25) % 65) * elScale;
        ctx.strokeStyle = `rgba(6, 182, 212, ${0.75 * intensity})`;
        ctx.lineWidth = 2 * elScale;
        ctx.beginPath();
        ctx.arc(cx, cy, rad, 0, Math.PI * 2);
        ctx.stroke();
    }
});

// 220. Orbital Defense Cannon Charging With Converging Rings
reg(['ds_orbital_cannon_charge', 'item_220'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    // Heavy cannon barrel
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(cx - 12 * elScale, cy - 35 * elScale, 24 * elScale, 70 * elScale);
    // Converging charge rings
    for (let r = 1; r <= 3; r++) {
        const age = 1 - ((time * 2 * speed + r * 0.3) % 1);
        const rad = age * 45 * elScale;
        ctx.strokeStyle = `rgba(239, 68, 68, ${0.9 * intensity})`;
        ctx.lineWidth = 2.5 * elScale;
        ctx.beginPath();
        ctx.arc(cx, cy, rad, 0, Math.PI * 2);
        ctx.stroke();
    }
});

// 221. Med-Bay Telemetry Screen Scrolling Green ECG Line
reg(['ds_medbay_ecg_screen', 'item_221'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const monW = 85 * elScale, monH = 50 * elScale;
    // Monitor screen frame
    ctx.fillStyle = '#020617';
    ctx.fillRect(cx - monW * 0.5, cy - monH * 0.5, monW, monH);
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 2 * elScale;
    ctx.strokeRect(cx - monW * 0.5, cy - monH * 0.5, monW, monH);
    // Scrolling ECG line
    ctx.strokeStyle = '#22c55e';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    const startX = cx - monW * 0.5 + 4 * elScale;
    const endX = cx + monW * 0.5 - 4 * elScale;
    for (let x = startX; x <= endX; x += 4) {
        const phase = (x - startX + time * 60 * speed) % 50;
        let y = cy;
        if (phase > 20 && phase < 26) y = cy - 12 * elScale;
        else if (phase >= 26 && phase < 32) y = cy + 12 * elScale;
        if (x === startX) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.stroke();
});

// 222. Small Round Hull-Cleaning Bot Bumping Against Bulkhead
reg(['ds_hull_cleaner_droid', 'item_222'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5 + Math.sin(time * 2 * speed) * 20 * elScale;
    const cy = H * 0.5;
    // Round white cleaning bot body
    ctx.fillStyle = '#f8fafc';
    ctx.beginPath();
    ctx.arc(cx, cy, 14 * elScale, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#cbd5e1';
    ctx.lineWidth = 2 * elScale;
    ctx.stroke();
    // Blue sensor eye dome
    ctx.fillStyle = '#0284c7';
    ctx.beginPath();
    ctx.arc(cx, cy, 4 * elScale, 0, Math.PI * 2);
    ctx.fill();
});

// 223. Sealed Zero-G Drink Pouch Floating and Rotating in Air
reg(['ds_floating_drink_pouch', 'item_223'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5;
    const floatY = H * 0.5 + Math.sin(time * 2 * speed) * 10 * elScale;
    const rot = time * 1.5 * speed;
    ctx.save();
    ctx.translate(cx, floatY);
    ctx.rotate(rot);
    // Silver foil pouch
    ctx.fillStyle = '#94a3b8';
    ctx.fillRect(-12 * elScale, -16 * elScale, 24 * elScale, 32 * elScale);
    // Orange liquid label
    ctx.fillStyle = '#f97316';
    ctx.fillRect(-8 * elScale, -8 * elScale, 16 * elScale, 16 * elScale);
    // Straw nozzle
    ctx.fillStyle = '#f1f5f9';
    ctx.fillRect(-2 * elScale, -22 * elScale, 4 * elScale, 6 * elScale);
    ctx.restore();
});

// 224. Navigation Console Standby LEDs Blinking in Idle Loop
reg(['ds_nav_console_standby', 'item_224'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    // Console panel
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(cx - 35 * elScale, cy - 12 * elScale, 70 * elScale, 24 * elScale);
    // Row of 5 indicator LEDs
    const colors = ['#22c55e', '#38bdf8', '#f59e0b', '#ec4899', '#a855f7'];
    for (let i = 0; i < 5; i++) {
        const lx = cx - 24 * elScale + i * 12 * elScale;
        const blink = Math.sin(time * 5 * speed + i) > 0;
        ctx.fillStyle = blink ? colors[i] : '#334155';
        ctx.beginPath();
        ctx.arc(lx, cy, 3 * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 225. Six-Legged Alien Beetle Skittering Across Viewport
reg(['ds_viewport_alien_beetle', 'item_225'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const bx = ((time * 50 * speed) % (W + 60)) - 30;
    const by = H * 0.5 + Math.sin(time * 4) * 8 * elScale;
    // Alien beetle body
    ctx.fillStyle = '#15803d';
    ctx.beginPath();
    ctx.ellipse(bx, by, 10 * elScale, 6 * elScale, 0, 0, Math.PI * 2);
    ctx.fill();
    // Six scuttling jointed legs
    ctx.strokeStyle = '#166534';
    ctx.lineWidth = 1.5;
    for (let l = -1; l <= 1; l++) {
        const kick = Math.sin(time * 20 * speed + l) * 3;
        ctx.beginPath();
        ctx.moveTo(bx + l * 4 * elScale, by - 5 * elScale);
        ctx.lineTo(bx + l * 6 * elScale, by - 12 * elScale + kick);
        ctx.moveTo(bx + l * 4 * elScale, by + 5 * elScale);
        ctx.lineTo(bx + l * 6 * elScale, by + 12 * elScale - kick);
        ctx.stroke();
    }
});


})();
