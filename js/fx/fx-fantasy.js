/**
 * AetherTable VTT - High Fantasy & Medieval Legend FX (75 Unique Elements)
 * Procedural Canvas Renderers for Elements 301 through 375.
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
// A. LINEAR MOTION (301 - 325) - High Fantasy & Medieval Legend
// =========================================================================

// 301. Magic Missile Darts (glowing arcane darts streaking in corkscrew spirals)
reg(['hf_magic_missiles', 'item_301'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numDarts = 3;
    for (let d = 0; d < numDarts; d++) {
        const t = (time * 1.8 * speed + d * 0.33) % 1.0;
        const startX = 20, startY = H * (0.3 + d * 0.2);
        const endX = W - 30, endY = H * 0.5;
        const corkscrewR = (18 + rough * 15) * elScale;
        const spiralAng = time * 18 * speed + d * 2.1;
        
        ctx.strokeStyle = `rgba(168, 85, 247, ${0.45 * intensity})`;
        ctx.lineWidth = 2 * elScale;
        ctx.beginPath();
        for (let s = 0; s <= 20; s++) {
            const frac = Math.max(0, t - s * 0.02);
            const x = startX + (endX - startX) * frac;
            const y = startY + (endY - startY) * frac + Math.sin(spiralAng - s * 0.5) * corkscrewR;
            if (s === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
        
        // Dart head
        const hx = startX + (endX - startX) * t;
        const hy = startY + (endY - startY) * t + Math.sin(spiralAng) * corkscrewR;
        const glow = ctx.createRadialGradient(hx, hy, 2, hx, hy, 16 * elScale);
        glow.addColorStop(0, `rgba(255, 255, 255, ${0.95 * intensity})`);
        glow.addColorStop(0.4, `rgba(192, 132, 252, ${0.8 * intensity})`);
        glow.addColorStop(1, 'rgba(168, 85, 247, 0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(hx, hy, 16 * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 302. Flaming Arrow Volleys (arching high through twilight sky)
reg(['hf_flaming_arrows', 'item_302'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numArrows = 7;
    for (let a = 0; a < numArrows; a++) {
        const t = (time * 1.2 * speed + a * 0.16) % 1.0;
        const sx = -20 + a * 15;
        const ex = W + 40;
        const x = sx + (ex - sx) * t;
        const peakH = (H * 0.6 + (a % 3) * 25) * elScale;
        const y = H * 0.85 - Math.sin(t * Math.PI) * peakH;
        
        // Trailing ember sparks
        for (let sp = 0; sp < 4; sp++) {
            const spX = x - sp * 6 * elScale + (Math.sin(time * 20 + a + sp) * 3);
            const spY = y + sp * 3 * elScale;
            ctx.fillStyle = sp % 2 === 0 ? '#f59e0b' : '#ef4444';
            ctx.beginPath();
            ctx.arc(spX, spY, (1.8 - sp * 0.3) * elScale, 0, Math.PI * 2);
            ctx.fill();
        }
        
        // Burning arrowhead
        ctx.fillStyle = '#fef08a';
        ctx.beginPath();
        ctx.arc(x, y, 3 * elScale, 0, Math.PI * 2);
        ctx.fill();
        // Wooden arrow shaft
        ctx.strokeStyle = '#78350f';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x - 14 * elScale, y + (t < 0.5 ? 4 : -4) * elScale);
        ctx.stroke();
    }
});

// 303. Bobbing Will-o'-the-Wisp (swamp wisp bobbing & leading travelers)
reg(['hf_will_o_wisp', 'item_303'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const wx = (W * 0.15) + ((time * 35 * speed) % (W * 0.7));
    const wy = H * 0.5 + Math.sin(time * 2.5 * speed) * 25 * elScale + Math.cos(time * 4) * 8 * elScale;
    
    // Ghostly pale-cyan luminous aura
    const aura = ctx.createRadialGradient(wx, wy, 3, wx, wy, (55 + rough * 25) * elScale);
    aura.addColorStop(0, `rgba(255, 255, 255, ${0.95 * intensity})`);
    aura.addColorStop(0.3, `rgba(103, 232, 249, ${0.75 * intensity})`);
    aura.addColorStop(0.7, `rgba(34, 197, 94, ${0.3 * intensity})`);
    aura.addColorStop(1, 'rgba(34, 197, 94, 0)');
    ctx.fillStyle = aura;
    ctx.beginPath();
    ctx.arc(wx, wy, (55 + rough * 25) * elScale, 0, Math.PI * 2);
    ctx.fill();
    
    // Orbiting fairy motes
    for (let m = 0; m < 5; m++) {
        const ma = time * 6 * speed + m * 1.25;
        const mr = (14 + m * 4) * elScale;
        ctx.fillStyle = '#fef08a';
        ctx.beginPath();
        ctx.arc(wx + Math.cos(ma) * mr, wy + Math.sin(ma) * mr * 0.6, 2 * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 304. Cathedral Golden Sunbeams (slanting golden beams shifting through high glass)
reg(['hf_cathedral_sunbeams', 'item_304'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numBeams = 5;
    for (let b = 0; b < numBeams; b++) {
        const topX = W * 0.15 + (b / (numBeams - 1)) * (W * 0.5);
        const sway = Math.sin(time * 0.8 * speed + b * 0.9) * (15 + rough * 15);
        const botX = topX + W * 0.35 + sway;
        
        const grad = ctx.createLinearGradient(topX, 0, botX, H);
        grad.addColorStop(0, `rgba(254, 240, 138, ${(0.45 + (b % 2) * 0.15) * intensity})`);
        grad.addColorStop(0.7, `rgba(245, 158, 11, ${(0.2 + (b % 2) * 0.1) * intensity})`);
        grad.addColorStop(1, 'rgba(245, 158, 11, 0)');
        
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.moveTo(topX - 12 * elScale, 0);
        ctx.lineTo(topX + 12 * elScale, 0);
        ctx.lineTo(botX + 35 * elScale, H);
        ctx.lineTo(botX - 35 * elScale, H);
        ctx.closePath();
        ctx.fill();
    }
    // Gilded cathedral dust motes drifting in the light
    for (let d = 0; d < 18; d++) {
        const dx = (d * 47 + time * 15 * speed) % W;
        const dy = (d * 83 + Math.sin(time + d) * 15) % H;
        ctx.fillStyle = `rgba(255, 255, 255, ${(0.4 + Math.sin(time * 3 + d) * 0.3) * intensity})`;
        ctx.beginPath();
        ctx.arc(dx, dy, (1.5 + (d % 3) * 0.5) * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 305. Bioluminescent Crystal Stalactites (dripping glowing drops in cavern)
reg(['hf_biolum_stalactite_drips', 'item_305'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numStalactites = 6;
    for (let i = 0; i < numStalactites; i++) {
        const sx = W * 0.12 + (i / (numStalactites - 1)) * (W * 0.76);
        const sLen = (35 + (i % 3) * 18) * elScale;
        
        // Pointed faceted crystal stalactite
        ctx.fillStyle = i % 2 === 0 ? '#38bdf8' : '#818cf8';
        ctx.beginPath();
        ctx.moveTo(sx - 10 * elScale, 0);
        ctx.lineTo(sx + 10 * elScale, 0);
        ctx.lineTo(sx + 3 * elScale, sLen * 0.7);
        ctx.lineTo(sx, sLen);
        ctx.lineTo(sx - 3 * elScale, sLen * 0.7);
        ctx.closePath();
        ctx.fill();
        
        // Dripping glowing droplet
        const dropPhase = (time * 2 * speed + i * 0.45) % 1.5;
        if (dropPhase < 1.0) {
            const dy = sLen + dropPhase * (H - sLen - 20);
            ctx.fillStyle = `rgba(186, 230, 253, ${0.9 * intensity})`;
            ctx.beginPath();
            ctx.arc(sx, dy, (2.5 + (i % 2)) * elScale, 0, Math.PI * 2);
            ctx.fill();
        }
    }
});

// 306. Dragon-Fire Scorch Wave (creeping wall of rolling dragon-fire scorching ground)
reg(['hf_dragonfire_wave', 'item_306'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const waveX = ((time * 85 * speed) % (W + 200)) - 100;
    
    // Rolling wall of roaring dragon flames
    for (let f = 0; f < 10; f++) {
        const fx = waveX - f * 12 * elScale;
        const fy = H * 0.5 + Math.sin(time * 3 + f) * 35 * elScale;
        const rad = (35 + f * 5 + rough * 20) * elScale;
        
        const flameGrad = ctx.createRadialGradient(fx, fy, 4, fx, fy, rad);
        flameGrad.addColorStop(0, `rgba(254, 240, 138, ${0.9 * intensity})`);
        flameGrad.addColorStop(0.4, `rgba(249, 115, 22, ${0.75 * intensity})`);
        flameGrad.addColorStop(0.8, `rgba(185, 28, 28, ${0.45 * intensity})`);
        flameGrad.addColorStop(1, 'rgba(185, 28, 28, 0)');
        ctx.fillStyle = flameGrad;
        ctx.beginPath();
        ctx.arc(fx, fy, rad, 0, Math.PI * 2);
        ctx.fill();
    }
    
    // Glowing embers and scorched ash patches trailing along path
    const scorchLen = Math.max(0, waveX - 40 * elScale);
    for (let s = 0; s < scorchLen; s += 30 * elScale) {
        const sy = (H * 0.5) + (FX.hash(s * 13) - 0.5) * 40 * elScale;
        ctx.fillStyle = `rgba(15, 23, 42, ${0.45 * intensity})`;
        ctx.beginPath();
        ctx.ellipse(s, sy, 18 * elScale, 8 * elScale, 0.2, 0, Math.PI * 2);
        ctx.fill();
        // Embers
        if (FX.hash(s * 29) > 0.4) {
            ctx.fillStyle = `rgba(249, 115, 22, ${0.85 * intensity})`;
            ctx.beginPath();
            ctx.arc(s + 4 * elScale, sy - 2 * elScale, 2 * elScale, 0, Math.PI * 2);
            ctx.fill();
        }
    }
});

// 307. Crushing Rolling Boulder Trap Thundering Down Hallway
reg(['hf_rolling_boulder', 'item_307'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cy = H * 0.5;
    const bx = ((time * 160 * speed) % (W + 200)) - 100;
    const bRad = 35 * elScale;
    const rot = (time * 8 * speed);
    
    // Heavy granite circular boulder rolling forward
    ctx.save();
    ctx.translate(bx, cy);
    ctx.rotate(rot);
    
    ctx.fillStyle = '#475569';
    ctx.beginPath();
    ctx.arc(0, 0, bRad, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 3 * elScale;
    ctx.stroke();
    
    // Surface cracks and stone fractures
    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 2 * elScale;
    ctx.beginPath();
    ctx.moveTo(-bRad * 0.6, -bRad * 0.2);
    ctx.lineTo(bRad * 0.2, bRad * 0.5);
    ctx.lineTo(bRad * 0.7, -bRad * 0.3);
    ctx.stroke();
    ctx.restore();
    
    // Impact dust cloud kicked up behind the boulder
    for (let d = 0; d < 8; d++) {
        const dx = bx - bRad - (d * 12 * elScale) - Math.random() * 10;
        const dy = cy + 15 * elScale + Math.sin(d) * 12 * elScale;
        ctx.fillStyle = `rgba(148, 163, 184, ${(0.4 - d * 0.04) * intensity})`;
        ctx.beginPath();
        ctx.arc(dx, dy, (10 + d * 3 + rough * 8) * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 308. Surging Underground River Rushing Through Cavern
reg(['hf_cavern_river', 'item_308'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numCurrents = 9;
    for (let c = 0; c < numCurrents; c++) {
        const ry = (c / (numCurrents - 1)) * (H * 0.7) + H * 0.15;
        const waveSpeed = (120 + (c % 3) * 35) * speed;
        
        ctx.strokeStyle = c % 2 === 0 ? `rgba(56, 189, 248, ${0.55 * intensity})` : `rgba(14, 165, 233, ${0.4 * intensity})`;
        ctx.lineWidth = (3 + (c % 3) * 2) * elScale;
        ctx.beginPath();
        for (let x = 0; x <= W; x += 30) {
            const y = ry + Math.sin(x * 0.03 + time * 4 * speed + c) * (8 + rough * 8);
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
    }
    // White-water froth crests
    for (let f = 0; f < 10; f++) {
        const fx = ((time * 180 * speed + f * 70) % (W + 60)) - 30;
        const fy = H * 0.5 + Math.sin(f * 2.3) * (H * 0.25);
        ctx.fillStyle = `rgba(255, 255, 255, ${0.75 * intensity})`;
        ctx.beginPath();
        ctx.ellipse(fx, fy, (14 + rough * 8) * elScale, 4 * elScale, 0.1, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 309. Swarm of Biting Scarab Beetles Crawling Along Corridor
reg(['hf_scarab_beetle_swarm', 'item_309'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numScarabs = 32;
    for (let s = 0; s < numScarabs; s++) {
        const sx = ((s * 43 + time * 65 * speed) % (W + 40)) - 20;
        const sy = (H * 0.2) + ((s * 89) % (H * 0.6)) + Math.sin(time * 5 + s) * 10 * elScale;
        const rot = Math.sin(time * 8 + s) * 0.35;
        
        ctx.save();
        ctx.translate(sx, sy);
        ctx.rotate(rot);
        // Iridescent golden-black carapace
        ctx.fillStyle = s % 3 === 0 ? '#d97706' : '#1e293b';
        ctx.beginPath();
        ctx.ellipse(0, 0, 5 * elScale, 7 * elScale, 0, 0, Math.PI * 2);
        ctx.fill();
        // Tiny scuttling legs
        ctx.strokeStyle = '#451a03';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(-4 * elScale, -3 * elScale); ctx.lineTo(-8 * elScale, -5 * elScale);
        ctx.moveTo(4 * elScale, -3 * elScale); ctx.lineTo(8 * elScale, -5 * elScale);
        ctx.moveTo(-4 * elScale, 3 * elScale); ctx.lineTo(-8 * elScale, 5 * elScale);
        ctx.moveTo(4 * elScale, 3 * elScale); ctx.lineTo(8 * elScale, 5 * elScale);
        ctx.stroke();
        ctx.restore();
    }
});

// 310. Sweeping Pendulum Blades in Floor Channels (Top-Down Battlemap View)
reg(['hf_pendulum_blades', 'item_310'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numChannels = 3;
    ctx.save();

    for (let c = 0; c < numChannels; c++) {
        const cx = (c + 0.5) * (W / numChannels);
        const cy = H * 0.5;
        const channelW = 28 * elScale, channelH = H * 0.75;

        // Floor channel slot carved into dungeon stone floor (Top-Down)
        ctx.fillStyle = '#0f172a'; // Deep channel slit
        ctx.fillRect(cx - channelW * 0.5, cy - channelH * 0.5, channelW, channelH);
        ctx.strokeStyle = '#334155';
        ctx.lineWidth = 2 * elScale;
        ctx.strokeRect(cx - channelW * 0.5, cy - channelH * 0.5, channelW, channelH);

        // Sweeping razor crescent scythe blade oscillating across the channel
        const swing = Math.sin(time * 3.5 * speed + c * 1.4);
        const bladeY = cy + swing * (channelH * 0.42);

        // Blade metallic slice motion blur
        ctx.fillStyle = 'rgba(226, 232, 240, ' + (0.8 * intensity) + ')';
        ctx.beginPath();
        ctx.ellipse(cx, bladeY, 26 * elScale, 8 * elScale, swing * 0.3, 0, Math.PI * 2);
        ctx.fill();

        // Razor crescent steel blade viewed from overhead
        ctx.fillStyle = '#f8fafc';
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 1.5 * elScale;
        ctx.beginPath();
        ctx.arc(cx, bladeY, 22 * elScale, -0.6, 0.6);
        ctx.lineTo(cx - 8 * elScale, bladeY);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Glinting metallic specular sheen along cutting edge
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.2 * elScale;
        ctx.beginPath();
        ctx.arc(cx, bladeY, 22 * elScale, -0.4, 0.4);
        ctx.stroke();

        // Overhead ceiling slot shadow casting down onto floor
        ctx.fillStyle = 'rgba(15, 23, 42, ' + (0.8 * intensity) + ')';
        ctx.fillRect(cx - 4 * elScale, cy - channelH * 0.5, 8 * elScale, channelH);
    }
    ctx.restore();
});

// 311. Wooden Watermill Wheel Churning River Water
reg(['hf_watermill_wheel', 'item_311'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const r = Math.min(W, H) * 0.38 * elScale;
    const rot = time * 2 * speed;
    
    // Rotating outer wooden rim & paddle spokes
    ctx.strokeStyle = '#78350f';
    ctx.lineWidth = 5 * elScale;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.stroke();
    
    // 8 wooden bucket paddles
    for (let p = 0; p < 8; p++) {
        const ang = rot + (p / 8) * Math.PI * 2;
        const px = cx + Math.cos(ang) * r;
        const py = cy + Math.sin(ang) * r;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(px, py);
        ctx.stroke();
        
        // Paddle bucket board
        ctx.fillStyle = '#451a03';
        ctx.fillRect(px - 6 * elScale, py - 6 * elScale, 12 * elScale, 12 * elScale);
    }
    
    // Churning frothing whitewater at bottom of wheel
    for (let f = 0; f < 10; f++) {
        const fx = cx - 40 * elScale + ((f * 15 + time * 60) % (80 * elScale));
        const fy = cy + r - 5 * elScale + Math.sin(time * 6 + f) * 8 * elScale;
        ctx.fillStyle = `rgba(224, 242, 254, ${0.8 * intensity})`;
        ctx.beginPath();
        ctx.arc(fx, fy, (5 + rough * 4) * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 312. Iron Drawbridge Chains Rattling as Portcullis Lowers
reg(['hf_portcullis_chains', 'item_312'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numChains = 2;
    const chainPositions = [W * 0.3, W * 0.7];
    const vib = Math.sin(time * 24 * speed) * (2 + rough * 2);
    
    for (let c = 0; c < numChains; c++) {
        const cx = chainPositions[c] + vib;
        // Heavy iron chain links
        for (let l = 0; l < 12; l++) {
            const ly = l * 18 * elScale;
            ctx.strokeStyle = '#475569';
            ctx.lineWidth = 3.5 * elScale;
            ctx.beginPath();
            ctx.ellipse(cx, ly, 6 * elScale, 10 * elScale, 0, 0, Math.PI * 2);
            ctx.stroke();
        }
    }
    // Portcullis spiked iron bottom gate bar lowering
    const gateY = H * 0.6 + Math.sin(time * 1.5 * speed) * 15 * elScale;
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(W * 0.2, gateY, W * 0.6, 12 * elScale);
    for (let sp = 0; sp < 7; sp++) {
        const spx = W * 0.25 + sp * (W * 0.5 / 6);
        ctx.beginPath();
        ctx.moveTo(spx - 4 * elScale, gateY + 12 * elScale);
        ctx.lineTo(spx, gateY + 28 * elScale);
        ctx.lineTo(spx + 4 * elScale, gateY + 12 * elScale);
        ctx.closePath();
        ctx.fill();
    }
});

// 313. Dwarven Delve Mining Carts on Rails (Top-Down Battlemap View)
reg(['hf_dwarven_minecarts', 'item_313'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cy = H * 0.55;
    const cartX = ((time * 200 * speed) % (W + 220)) - 110;
    const cartW = 60 * elScale, cartH = 36 * elScale;

    ctx.save();
    // Dwarven delve timber track ties (Top-Down)
    ctx.strokeStyle = '#543d2b';
    ctx.lineWidth = 3.5 * elScale;
    for (let t = 0; t < W; t += 22 * elScale) {
        ctx.beginPath();
        ctx.moveTo(t, cy - 24 * elScale); ctx.lineTo(t, cy + 24 * elScale);
        ctx.stroke();
    }
    // Heavy brass/steel delve rails
    ctx.strokeStyle = '#b45309';
    ctx.lineWidth = 2.5 * elScale;
    ctx.beginPath();
    ctx.moveTo(0, cy - 16 * elScale); ctx.lineTo(W, cy - 16 * elScale);
    ctx.moveTo(0, cy + 16 * elScale); ctx.lineTo(W, cy + 16 * elScale);
    ctx.stroke();

    // Reinforced dwarven iron minecart viewed from DIRECTLY ABOVE (Top-Down)
    ctx.save();
    ctx.translate(cartX, cy);

    ctx.fillStyle = '#1e293b';
    ctx.fillRect(-cartW * 0.5, -cartH * 0.5, cartW, cartH);
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 2 * elScale;
    ctx.strokeRect(-cartW * 0.5, -cartH * 0.5, cartW, cartH);

    // Cart interior cavity loaded with glowing gemstones & mithril ore
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(-cartW * 0.42, -cartH * 0.38, cartW * 0.84, cartH * 0.76);

    // Glowing faceted gems (emeralds, rubies, sapphires)
    const gems = [
        { x: -16, y: -6, col: '#10b981' }, { x: -6, y: 5, col: '#ef4444' },
        { x: 8, y: -5, col: '#3b82f6' }, { x: 16, y: 6, col: '#fbbf24' }
    ];
    for (let g = 0; g < gems.length; g++) {
        ctx.fillStyle = gems[g].col;
        ctx.fillRect(gems[g].x * elScale, gems[g].y * elScale, 7 * elScale, 7 * elScale);
    }
    ctx.restore();

    // Wheel sparks spraying laterally
    for (let s = 0; s < 6; s++) {
        const spx = cartX + (Math.random() - 0.5) * cartW;
        const spy = cy + (Math.random() > 0.5 ? 16 : -16) * elScale;
        ctx.fillStyle = '#fef08a';
        ctx.fillRect(spx, spy, 2 * elScale, 2 * elScale);
    }
    ctx.restore();
});

// 314. Horse-Drawn Royal Carriage Wheels Rolling on Cobblestones
reg(['hf_royal_carriage_wheels', 'item_314'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const wheelR = 36 * elScale;
    const rot = time * 5 * speed;
    
    // Gilded royal coach carriage rim
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 4 * elScale;
    ctx.beginPath();
    ctx.arc(cx, cy, wheelR, 0, Math.PI * 2);
    ctx.stroke();
    
    // Fine curved golden spokes
    for (let s = 0; s < 12; s++) {
        const a = rot + (s / 12) * Math.PI * 2;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(a) * wheelR, cy + Math.sin(a) * wheelR);
        ctx.stroke();
    }
    // Heavy brass hub
    ctx.fillStyle = '#fbbf24';
    ctx.beginPath();
    ctx.arc(cx, cy, 8 * elScale, 0, Math.PI * 2);
    ctx.fill();
});

// 315. Heavy Canvas Tavern Sail Awning Flapping in Sea Wind
reg(['hf_tavern_sail_awning', 'item_315'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const flap = Math.sin(time * 6 * speed) * (14 + rough * 12);
    // Canvas cloth triangular awning rippling in the wind
    ctx.fillStyle = `rgba(248, 250, 252, ${0.85 * intensity})`;
    ctx.beginPath();
    ctx.moveTo(W * 0.1, H * 0.2);
    ctx.lineTo(W * 0.9, H * 0.2);
    ctx.quadraticCurveTo(W * 0.5, H * 0.65 + flap, W * 0.5, H * 0.75 + flap);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 2 * elScale;
    ctx.stroke();
    
    // Rope lanyards holding the edges
    ctx.strokeStyle = '#b45309';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(W * 0.1, H * 0.2); ctx.lineTo(W * 0.5, H * 0.75 + flap);
    ctx.moveTo(W * 0.9, H * 0.2); ctx.lineTo(W * 0.5, H * 0.75 + flap);
    ctx.stroke();
});

// 316. Forked Chain-Lightning Bolt Arcing Between Armored Targets
reg(['hf_chain_lightning_arc', 'item_316'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const isArc = (Math.sin(time * 8 * speed) > 0.1);
    if (!isArc) return;
    
    const targets = [
        { x: W * 0.15, y: H * 0.6 },
        { x: W * 0.45, y: H * 0.35 },
        { x: W * 0.82, y: H * 0.55 }
    ];
    
    ctx.strokeStyle = `rgba(186, 230, 253, ${0.95 * intensity})`;
    ctx.lineWidth = (3 + rough * 3) * elScale;
    ctx.shadowColor = '#38bdf8';
    ctx.shadowBlur = 12 * intensity;
    
    for (let t = 0; t < targets.length - 1; t++) {
        const p1 = targets[t], p2 = targets[t + 1];
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        const segs = 6;
        for (let s = 1; s < segs; s++) {
            const frac = s / segs;
            const jx = p1.x + (p2.x - p1.x) * frac + (Math.random() - 0.5) * (30 + rough * 25);
            const jy = p1.y + (p2.y - p1.y) * frac + (Math.random() - 0.5) * (30 + rough * 25);
            ctx.lineTo(jx, jy);
        }
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
    }
    ctx.shadowBlur = 0;
});

// 317. Prismatic Bifrost Rainbow Bridge (luminous crystalline gradient path across chasm)
reg(['hf_rainbow_bridge', 'item_317'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const colors = [
        'rgba(239, 68, 68, 0.4)',
        'rgba(249, 115, 22, 0.4)',
        'rgba(234, 179, 8, 0.4)',
        'rgba(34, 197, 94, 0.4)',
        'rgba(6, 182, 212, 0.4)',
        'rgba(59, 130, 246, 0.4)',
        'rgba(168, 85, 247, 0.4)'
    ];
    const bridgeY = H * 0.45;
    const bandH = 6 * elScale;
    
    // Transparent arching prismatic bands
    for (let c = 0; c < colors.length; c++) {
        ctx.fillStyle = colors[c];
        ctx.beginPath();
        ctx.moveTo(0, bridgeY + c * bandH);
        for (let x = 0; x <= W; x += 30) {
            const y = bridgeY + c * bandH + Math.sin(x * 0.015 + time * speed) * (10 + rough * 8);
            ctx.lineTo(x, y);
        }
        ctx.lineTo(W, bridgeY + (c + 1) * bandH);
        ctx.lineTo(0, bridgeY + (c + 1) * bandH);
        ctx.closePath();
        ctx.fill();
    }
    // Prismatic crystalline glimmer sparkles
    for (let s = 0; s < 12; s++) {
        const sx = (s * 73 + time * 45 * speed) % W;
        const sy = bridgeY + (s % 7) * bandH;
        ctx.fillStyle = `rgba(255, 255, 255, ${(0.6 + Math.sin(time * 15 + s) * 0.4) * intensity})`;
        ctx.beginPath();
        ctx.arc(sx, sy, 2.5 * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 318. Ethereal Phantom Cavalry Charge Silently Across Misty Meadow
reg(['hf_phantom_cavalry', 'item_318'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numRiders = 4;
    for (let r = 0; r < numRiders; r++) {
        const rx = ((time * 110 * speed + r * 110) % (W + 200)) - 100;
        const ry = H * 0.5 + (r % 2) * 35 * elScale + Math.sin(time * 5 + r) * 6;
        
        // Translucent spectral warhorse & armored rider
        ctx.fillStyle = `rgba(165, 180, 252, ${(0.45 - r * 0.05) * intensity})`;
        ctx.beginPath();
        // Horse torso & galloping legs
        ctx.ellipse(rx, ry, 26 * elScale, 14 * elScale, 0, 0, Math.PI * 2);
        ctx.fill();
        // Horse head & arched neck
        ctx.beginPath();
        ctx.moveTo(rx + 18 * elScale, ry - 6 * elScale);
        ctx.lineTo(rx + 32 * elScale, ry - 22 * elScale);
        ctx.lineTo(rx + 24 * elScale, ry - 26 * elScale);
        ctx.closePath();
        ctx.fill();
        // Lance pointing forward
        ctx.strokeStyle = `rgba(224, 231, 255, ${0.75 * intensity})`;
        ctx.lineWidth = 2 * elScale;
        ctx.beginPath();
        ctx.moveTo(rx + 10 * elScale, ry - 18 * elScale);
        ctx.lineTo(rx + 55 * elScale, ry - 28 * elScale);
        ctx.stroke();
    }
});

// 319. Swirling Vortex of Autumn Leaves and Pixie Dust
reg(['hf_pixiedust_leaf_vortex', 'item_319'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const numParticles = 24;
    for (let p = 0; p < numParticles; p++) {
        const ang = time * 4 * speed + (p / numParticles) * Math.PI * 2;
        const rad = (30 + p * 3 + rough * 15) * elScale;
        const px = cx + Math.cos(ang) * rad;
        const py = cy + Math.sin(ang) * rad * 0.6;
        
        if (p % 2 === 0) {
            // Spinning maple leaf
            ctx.fillStyle = p % 4 === 0 ? '#b45309' : '#dc2626';
            ctx.beginPath();
            ctx.ellipse(px, py, 5 * elScale, 3 * elScale, ang, 0, Math.PI * 2);
            ctx.fill();
        } else {
            // Golden sparkling pixie mote
            ctx.fillStyle = `rgba(253, 224, 71, ${0.9 * intensity})`;
            ctx.beginPath();
            ctx.arc(px, py, 2 * elScale, 0, Math.PI * 2);
            ctx.fill();
        }
    }
});

// 320. Freezing Cone of Cold White Frost Creeping Across Floor
reg(['hf_cone_of_cold', 'item_320'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const originX = W * 0.1, originY = H * 0.5;
    const coneLen = W * 0.85;
    
    // Translucent freezing crystalline cone
    FX.drawVolumetricCone(ctx, originX, originY, 0, coneLen, 0.48 + rough * 0.15, `rgba(224, 242, 254, ${0.7 * intensity})`, 'rgba(56, 189, 248, 0)');
    
    // Spreading ice dendrite crystals along the floor
    ctx.strokeStyle = `rgba(255, 255, 255, ${0.85 * intensity})`;
    ctx.lineWidth = 1.8 * elScale;
    for (let c = 0; c < 8; c++) {
        const cx = originX + 50 * elScale + c * 40 * elScale;
        const cy = originY + Math.sin(time * 2 + c) * (c * 15 * elScale);
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + 12 * elScale, cy - 8 * elScale);
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + 12 * elScale, cy + 8 * elScale);
        ctx.stroke();
    }
});

// 321. Wild Mountain River Tumbling Over Rocks and Mossy Logs
reg(['hf_mountain_river', 'item_321'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numRocks = 5;
    for (let r = 0; r < numRocks; r++) {
        const rx = (r + 0.5) * (W / numRocks);
        const ry = H * 0.5 + Math.sin(r * 2.1) * 25 * elScale;
        
        // Granite river boulder with moss
        ctx.fillStyle = '#475569';
        ctx.beginPath();
        ctx.ellipse(rx, ry, 18 * elScale, 12 * elScale, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#15803d';
        ctx.beginPath();
        ctx.arc(rx, ry - 6 * elScale, 6 * elScale, 0, Math.PI);
        ctx.fill();
        
        // Whitewater rapids parting around the boulder
        ctx.strokeStyle = `rgba(240, 249, 255, ${0.85 * intensity})`;
        ctx.lineWidth = 2.5 * elScale;
        ctx.beginPath();
        ctx.arc(rx, ry, 22 * elScale, Math.PI * 0.8, Math.PI * 1.2);
        ctx.stroke();
    }
});

// 322. Majestic Dragon Circling High in Thermals Above Peaks
reg(['hf_circling_dragon', 'item_322'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.45;
    const circleAng = time * 0.9 * speed;
    const rX = W * 0.35, rY = H * 0.25;
    const dx = cx + Math.cos(circleAng) * rX;
    const dy = cy + Math.sin(circleAng) * rY;
    const flap = Math.sin(time * 6 * speed) * 0.35;
    
    // Flying dragon shadow silhouette
    ctx.save();
    ctx.translate(dx, dy);
    ctx.rotate(circleAng + Math.PI * 0.5);
    ctx.fillStyle = `rgba(15, 23, 42, ${0.75 * intensity})`;
    // Dragon body and serpentine tail
    ctx.beginPath();
    ctx.ellipse(0, 0, 6 * elScale, 22 * elScale, 0, 0, Math.PI * 2);
    ctx.fill();
    // Huge bat-like wings
    ctx.beginPath();
    ctx.moveTo(0, -5 * elScale);
    ctx.lineTo(-35 * elScale, -15 * elScale + flap * 10 * elScale);
    ctx.lineTo(-25 * elScale, 10 * elScale);
    ctx.lineTo(0, 5 * elScale);
    ctx.lineTo(25 * elScale, 10 * elScale);
    ctx.lineTo(35 * elScale, -15 * elScale + flap * 10 * elScale);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
});

// 323. Gentle Meadow Stream With Swimming Speckled Trout
reg(['hf_trout_stream', 'item_323'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    // Flowing clear stream water
    ctx.strokeStyle = `rgba(56, 189, 248, ${0.45 * intensity})`;
    ctx.lineWidth = 2 * elScale;
    for (let w = 0; w < 6; w++) {
        const wy = (w / 5) * H;
        ctx.beginPath();
        for (let x = 0; x <= W; x += 35) {
            const y = wy + Math.sin(x * 0.03 + time * 3 * speed + w) * 6;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
    }
    // Swimming speckled trout darting against the current
    const numFish = 4;
    for (let f = 0; f < numFish; f++) {
        const fx = W - ((time * 45 * speed + f * 90) % (W + 60));
        const fy = H * 0.3 + f * 35 * elScale + Math.sin(time * 6 + f) * 8 * elScale;
        ctx.fillStyle = '#065f46';
        ctx.beginPath();
        ctx.ellipse(fx, fy, 12 * elScale, 5 * elScale, 0, 0, Math.PI * 2);
        ctx.fill();
        // Red speckled flank dots
        ctx.fillStyle = '#ef4444';
        ctx.beginPath();
        ctx.arc(fx - 2 * elScale, fy, 1.5 * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 324. Wild Deer Herd Bounding Gracefully Across Glade
reg(['hf_bounding_deer', 'item_324'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numDeer = 3;
    for (let d = 0; d < numDeer; d++) {
        const dx = ((time * 95 * speed + d * 85) % (W + 100)) - 50;
        const boundY = H * 0.65 - Math.abs(Math.sin(time * 7 * speed + d)) * 22 * elScale;
        
        ctx.fillStyle = '#78350f';
        ctx.beginPath();
        // Slender deer body
        ctx.ellipse(dx, boundY, 18 * elScale, 9 * elScale, 0.15, 0, Math.PI * 2);
        ctx.fill();
        // Head & antlers
        ctx.beginPath();
        ctx.arc(dx + 16 * elScale, boundY - 10 * elScale, 5 * elScale, 0, Math.PI * 2);
        ctx.fill();
        if (d === 0) {
            // Stag antlers
            ctx.strokeStyle = '#b45309';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(dx + 16 * elScale, boundY - 14 * elScale);
            ctx.lineTo(dx + 22 * elScale, boundY - 24 * elScale);
            ctx.moveTo(dx + 16 * elScale, boundY - 14 * elScale);
            ctx.lineTo(dx + 12 * elScale, boundY - 24 * elScale);
            ctx.stroke();
        }
    }
});

// 325. Fluffy White Dandelion Seeds Floating Across Sunlit Pasture
reg(['hf_dandelion_down', 'item_325'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numSeeds = 28;
    for (let s = 0; s < numSeeds; s++) {
        const sx = ((s * 37 + time * 35 * speed) % (W + 40)) - 20;
        const sy = (H * 0.1) + ((s * 73) % (H * 0.8)) + Math.sin(time * 2 + s) * 12 * elScale;
        
        // Delicate white radial dandelion parachute
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.85 * intensity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        for (let r = 0; r < 5; r++) {
            const ra = (r / 5) * Math.PI - Math.PI * 0.5;
            ctx.moveTo(sx, sy);
            ctx.lineTo(sx + Math.cos(ra) * 7 * elScale, sy + Math.sin(ra) * 7 * elScale);
        }
        ctx.stroke();
        // Seed grain
        ctx.fillStyle = '#78350f';
        ctx.beginPath();
        ctx.arc(sx, sy + 3 * elScale, 1.2 * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
});

// =========================================================================
// B. ANIMATED TEXTURES & VOLUMES (326 - 350) - High Fantasy & Medieval Legend
// =========================================================================

// 326. Colorful God Rays Streaming Through Cathedral Stained-Glass
reg(['hf_godrays_stainedglass', 'item_326'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const rayColors = [
        'rgba(239, 68, 68, 0.25)',
        'rgba(59, 130, 246, 0.25)',
        'rgba(234, 179, 8, 0.25)',
        'rgba(168, 85, 247, 0.25)',
        'rgba(34, 197, 94, 0.25)'
    ];
    for (let r = 0; r < rayColors.length; r++) {
        const topX = W * 0.1 + (r / (rayColors.length - 1)) * (W * 0.6);
        const botX = topX + W * 0.3 + Math.sin(time * speed + r) * (15 + rough * 15);
        ctx.fillStyle = rayColors[r];
        ctx.beginPath();
        ctx.moveTo(topX - 15 * elScale, 0);
        ctx.lineTo(topX + 15 * elScale, 0);
        ctx.lineTo(botX + 35 * elScale, H);
        ctx.lineTo(botX - 35 * elScale, H);
        ctx.closePath();
        ctx.fill();
    }
});

// 327. Bioluminescent Giant Toadstools Pulsing in Underdark Cavern
reg(['hf_underdark_toadstools', 'item_327'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numToadstools = 5;
    for (let t = 0; t < numToadstools; t++) {
        const tx = W * 0.15 + (t / (numToadstools - 1)) * (W * 0.7);
        const ty = H * 0.65 + (t % 2) * 20 * elScale;
        const capR = (22 + (t % 3) * 6) * elScale;
        const pulse = 0.75 + Math.sin(time * 3 * speed + t * 1.4) * 0.25;
        
        // Fungal stem
        ctx.fillStyle = '#f1f5f9';
        ctx.fillRect(tx - 4 * elScale, ty, 8 * elScale, 28 * elScale);
        
        // Glowing cyan/violet mushroom cap
        const glow = ctx.createRadialGradient(tx, ty, 2, tx, ty, capR * 1.5);
        glow.addColorStop(0, t % 2 === 0 ? `rgba(6, 182, 212, ${pulse * intensity})` : `rgba(168, 85, 247, ${pulse * intensity})`);
        glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(tx, ty, capR * 1.5, 0, Math.PI * 2);
        ctx.fill();
        
        // Solid dome cap with glowing spores
        ctx.fillStyle = t % 2 === 0 ? '#0891b2' : '#7e22ce';
        ctx.beginPath();
        ctx.arc(tx, ty, capR, Math.PI, 0, false);
        ctx.fill();
    }
});

// 328. Shimmering Underwater Caustic Light Patterns on Seabed
reg(['hf_underwater_caustics', 'item_328'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    ctx.strokeStyle = `rgba(186, 230, 253, ${0.45 * intensity})`;
    ctx.lineWidth = (2 + rough * 2) * elScale;
    for (let i = 0; i < 7; i++) {
        ctx.beginPath();
        for (let x = 0; x <= W; x += 40) {
            const y = (i * (H / 6)) + Math.sin(x * 0.04 + time * 3 * speed + i) * 16 + Math.cos(x * 0.02 + time * 2) * 12;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
    }
});

// 329. Ethereal Astral-Plane Nebula Clouds Beneath Floating Islands
reg(['hf_astral_nebula_islands', 'item_329'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    // Swirling multi-hued astral mist
    for (let m = 0; m < 6; m++) {
        const mx = ((time * 25 * speed + m * 95) % (W + 150)) - 75;
        const my = H * 0.5 + Math.sin(time + m) * 35 * elScale;
        const rad = (65 + m * 8 + rough * 25) * elScale;
        const grad = ctx.createRadialGradient(mx, my, 10, mx, my, rad);
        grad.addColorStop(0, m % 2 === 0 ? `rgba(168, 85, 247, ${0.35 * intensity})` : `rgba(56, 189, 248, ${0.35 * intensity})`);
        grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(mx, my, rad, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 330. Golden Fireflies Blinking Softly Across Forest Clearing
reg(['hf_twilight_fireflies', 'item_330'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numFlies = 24;
    for (let f = 0; f < numFlies; f++) {
        const fx = (f * 53 + Math.sin(time * 1.5 + f) * 25) % W;
        const fy = (f * 89 + Math.cos(time * 1.8 + f) * 20) % H;
        const blink = Math.pow(Math.sin(time * 4 * speed + f * 1.3), 6);
        
        if (blink > 0.05) {
            const glow = ctx.createRadialGradient(fx, fy, 1, fx, fy, 12 * elScale);
            glow.addColorStop(0, `rgba(254, 240, 138, ${0.95 * blink * intensity})`);
            glow.addColorStop(0.5, `rgba(234, 179, 8, ${0.5 * blink * intensity})`);
            glow.addColorStop(1, 'rgba(234, 179, 8, 0)');
            ctx.fillStyle = glow;
            ctx.beginPath();
            ctx.arc(fx, fy, 12 * elScale, 0, Math.PI * 2);
            ctx.fill();
        }
    }
});

// 331. Crusty Lava Pit Bubbling With Popping Molten Magma Blisters
reg(['hf_crusty_lavapit', 'item_331'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    // Glowing molten magma pool
    const lavaGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, 90 * elScale);
    lavaGrad.addColorStop(0, `rgba(254, 240, 138, ${0.9 * intensity})`);
    lavaGrad.addColorStop(0.5, `rgba(239, 68, 68, ${0.85 * intensity})`);
    lavaGrad.addColorStop(1, `rgba(127, 29, 29, ${0.85 * intensity})`);
    ctx.fillStyle = lavaGrad;
    ctx.beginPath();
    ctx.ellipse(cx, cy, 95 * elScale, 55 * elScale, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Popping blisters
    for (let b = 0; b < 6; b++) {
        const bx = cx - 50 * elScale + ((b * 37) % (100 * elScale));
        const by = cy - 25 * elScale + ((b * 41) % (50 * elScale));
        const age = (time * 2.5 * speed + b * 0.6) % 1;
        const bRad = (1 - Math.abs(age - 0.5) * 2) * 12 * elScale;
        ctx.fillStyle = '#fef08a';
        ctx.beginPath();
        ctx.arc(bx, by, bRad, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 332. Oozing Emerald Acid Pool Sizzling in Alchemist's Dungeon
reg(['hf_emerald_acid_pool', 'item_332'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    // Viscous emerald pool
    const acidGrad = ctx.createRadialGradient(cx, cy, 5, cx, cy, 80 * elScale);
    acidGrad.addColorStop(0, `rgba(132, 204, 22, ${0.85 * intensity})`);
    acidGrad.addColorStop(0.6, `rgba(21, 128, 61, ${0.75 * intensity})`);
    acidGrad.addColorStop(1, 'rgba(5, 46, 22, 0.9)');
    ctx.fillStyle = acidGrad;
    ctx.beginPath();
    ctx.ellipse(cx, cy, 85 * elScale, 48 * elScale, 0, 0, Math.PI * 2);
    ctx.fill();
    
    // Sizzling acid bubbles
    for (let b = 0; b < 8; b++) {
        const bx = cx - 40 * elScale + ((b * 27) % (80 * elScale));
        const by = cy - 20 * elScale + ((b * 31) % (40 * elScale));
        const bRad = (3 + (b % 3)) * elScale;
        ctx.fillStyle = '#bef264';
        ctx.beginPath();
        ctx.arc(bx, by, bRad, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 333. Thick Lake Ice Cracking With Spreading Spiderweb Fractures
reg(['hf_cracking_lake_ice', 'item_333'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    ctx.strokeStyle = `rgba(240, 249, 255, ${0.85 * intensity})`;
    ctx.lineWidth = (2 + rough * 2) * elScale;
    const numRays = 7;
    for (let r = 0; r < numRays; r++) {
        const ang = (r / numRays) * Math.PI * 2;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        let px = cx, py = cy;
        for (let s = 1; s <= 4; s++) {
            const dist = s * 22 * elScale;
            px = cx + Math.cos(ang + Math.sin(s + r) * 0.2) * dist;
            py = cy + Math.sin(ang + Math.sin(s + r) * 0.2) * dist;
            ctx.lineTo(px, py);
        }
        ctx.stroke();
    }
});

// 334. Writhing Patch of Thorny Blood-Red Assassin Vines
reg(['hf_assassin_vines', 'item_334'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numVines = 6;
    for (let v = 0; v < numVines; v++) {
        const rootX = W * 0.2 + (v / (numVines - 1)) * (W * 0.6);
        const rootY = H * 0.85;
        ctx.strokeStyle = '#991b1b';
        ctx.lineWidth = 4 * elScale;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(rootX, rootY);
        let vx = rootX, vy = rootY;
        for (let seg = 1; seg <= 5; seg++) {
            const und = Math.sin(time * 3 * speed + seg + v) * (15 + rough * 12);
            vx += und * 0.6;
            vy -= (H * 0.55) / 5;
            ctx.lineTo(vx, vy);
        }
        ctx.stroke();
    }
});

// 335. Bubbling Peat Bog Releasing Periodic Bursts of Swamp Gas
reg(['hf_peat_bog_gas', 'item_335'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    // Murky brown bog mud
    ctx.fillStyle = `rgba(69, 26, 3, ${0.45 * intensity})`;
    ctx.beginPath();
    ctx.ellipse(W * 0.5, H * 0.5, 90 * elScale, 55 * elScale, 0, 0, Math.PI * 2);
    ctx.fill();
    // Bursting toxic sulfur gas puffs
    for (let g = 0; g < 4; g++) {
        const gx = W * 0.3 + g * 35 * elScale;
        const gy = H * 0.5 - ((time * 30 * speed + g * 20) % 45);
        ctx.fillStyle = `rgba(202, 138, 4, ${(0.5 - g * 0.1) * intensity})`;
        ctx.beginPath();
        ctx.arc(gx, gy, (10 + g * 3) * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 336. Lush Green Forest Tree Canopies Swaying in Wind
reg(['hf_forest_canopy_wind', 'item_336'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numTrees = 5;
    for (let t = 0; t < numTrees; t++) {
        const tx = W * 0.15 + (t / (numTrees - 1)) * (W * 0.7);
        const ty = H * 0.5;
        const sway = Math.sin(time * 2 * speed + t) * (14 + rough * 12);
        
        ctx.fillStyle = t % 2 === 0 ? `rgba(22, 101, 52, ${0.85 * intensity})` : `rgba(21, 128, 61, ${0.85 * intensity})`;
        ctx.beginPath();
        ctx.arc(tx + sway, ty, (35 + (t % 3) * 8) * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 337. Undulating Beds of Underwater Kelp & Colorful Coral (Top-Down Ocean Reef)
reg(['hf_kelp_coral_reef', 'item_337'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;

    // Colorful coral heads viewed from above
    const coralHeads = [
        { x: cx - 25 * elScale, y: cy - 15 * elScale, r: 16 * elScale, col: '#f43f5e' },
        { x: cx + 22 * elScale, y: cy - 10 * elScale, r: 20 * elScale, col: '#fb923c' },
        { x: cx - 5 * elScale, y: cy + 20 * elScale, r: 18 * elScale, col: '#a855f7' }
    ];

    for (let c = 0; c < coralHeads.length; c++) {
        const head = coralHeads[c];
        ctx.fillStyle = head.col;
        ctx.beginPath();
        ctx.arc(head.x, head.y, head.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1 * elScale;
        ctx.stroke();
    }

    // Undulating kelp fronds swirling in 360 ocean eddies
    const numFronds = 10;
    for (let f = 0; f < numFronds; f++) {
        const baseAng = (f / numFronds) * Math.PI * 2;
        const rootX = cx + Math.cos(baseAng) * 22 * elScale;
        const rootY = cy + Math.sin(baseAng) * 22 * elScale;
        const frondLen = (40 + (f % 3) * 12 + rough * 15) * elScale;

        ctx.strokeStyle = f % 2 === 0 ? '#15803d' : '#047857';
        ctx.lineWidth = (3.5 + rough * 1.5) * elScale;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(rootX, rootY);

        for (let s = 1; s <= 4; s++) {
            const frac = s / 4;
            const sway = Math.sin(time * 2.2 * speed + f * 0.8 + s) * (12 + rough * 8) * elScale;
            const tx = rootX + Math.cos(baseAng + sway * 0.05) * frondLen * frac;
            const ty = rootY + Math.sin(baseAng + sway * 0.05) * frondLen * frac;
            ctx.lineTo(tx, ty);
        }
        ctx.stroke();
    }
});

// 338. Thick Meadow Grass Rippling in Summer Breeze (Top-Down Grass Tufts)
reg(['hf_meadow_grass_breeze', 'item_338'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const numTufts = 7;
    const tuftCenters = [
        { x: cx, y: cy },
        { x: cx - 35 * elScale, y: cy - 20 * elScale },
        { x: cx + 38 * elScale, y: cy - 18 * elScale },
        { x: cx - 25 * elScale, y: cy + 25 * elScale },
        { x: cx + 28 * elScale, y: cy + 22 * elScale },
        { x: cx - 55 * elScale, y: cy + 5 * elScale },
        { x: cx + 55 * elScale, y: cy + 2 * elScale }
    ];

    for (let t = 0; t < tuftCenters.length; t++) {
        const tuft = tuftCenters[t];
        const numBlades = 8;
        for (let b = 0; b < numBlades; b++) {
            const baseAng = (b / numBlades) * Math.PI * 2;
            const bladeLen = (14 + (b % 3) * 6 + rough * 6) * elScale;
            const wind = Math.sin(time * 3 * speed + t * 0.5 + b * 0.3) * (0.35 + rough * 0.2);
            const ang = baseAng + wind;

            ctx.strokeStyle = b % 3 === 0 ? '#16a34a' : (b % 3 === 1 ? '#65a30d' : '#84cc16');
            ctx.lineWidth = 1.8 * elScale;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(tuft.x, tuft.y);
            ctx.lineTo(tuft.x + Math.cos(ang) * bladeLen, tuft.y + Math.sin(ang) * bladeLen);
            ctx.stroke();
        }

        // Wildflower dot at center of some tufts
        if (t % 2 === 0) {
            ctx.fillStyle = t === 0 ? '#ec4899' : (t === 2 ? '#fbbf24' : '#60a5fa');
            ctx.beginPath();
            ctx.arc(tuft.x, tuft.y, 2.5 * elScale, 0, Math.PI * 2);
            ctx.fill();
        }
    }
});

// 339. Wet Cobblestone Town Square Glistening With Raindrops
reg(['hf_rainy_townsquare', 'item_339'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    // Cobblestone grid
    ctx.strokeStyle = `rgba(71, 85, 105, ${0.4 * intensity})`;
    ctx.lineWidth = 1.5;
    for (let x = 15; x < W; x += 30) {
        for (let y = 15; y < H; y += 20) {
            ctx.strokeRect(x, y, 26, 16);
            // Wet specular glint
            if ((x + y) % 4 === 0) {
                ctx.fillStyle = `rgba(255, 255, 255, ${(0.4 + Math.sin(time * 12 + x) * 0.3) * intensity})`;
                ctx.fillRect(x + 5, y + 4, 8 * elScale, 2 * elScale);
            }
        }
    }
    // Splashing rain rings
    for (let s = 0; s < 6; s++) {
        const sx = (s * 83) % W, sy = (s * 61) % H;
        const age = (time * 3 * speed + s * 0.8) % 1;
        ctx.strokeStyle = `rgba(186, 230, 253, ${(1 - age) * 0.7 * intensity})`;
        ctx.beginPath();
        ctx.ellipse(sx, sy, age * 16 * elScale, age * 8 * elScale, 0, 0, Math.PI * 2);
        ctx.stroke();
    }
});

// 340. Dragon's Gold Coin Hoard Glittering With Metallic Reflections
reg(['hf_dragon_gold_hoard', 'item_340'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numCoins = 45;
    for (let c = 0; c < numCoins; c++) {
        const cx = (c * 37) % (W * 0.85) + W * 0.08;
        const cy = (c * 53) % (H * 0.85) + H * 0.08;
        const glint = Math.sin(time * 6 * speed + c * 1.7);
        
        ctx.fillStyle = glint > 0.6 ? '#fef08a' : (c % 2 === 0 ? '#f59e0b' : '#d97706');
        ctx.beginPath();
        ctx.ellipse(cx, cy, 7 * elScale, 4.5 * elScale, (c * 0.5), 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#b45309';
        ctx.lineWidth = 1;
        ctx.stroke();
        
        // Specular glint star
        if (glint > 0.8) {
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(cx, cy, 2 * elScale, 0, Math.PI * 2);
            ctx.fill();
        }
    }
});

// 341. Intricate Arcane Summoning Circle Pulsing With Blue Runes
reg(['hf_arcane_summoning_circle', 'item_341'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const rad = Math.min(W, H) * 0.38 * elScale;
    const pulse = 0.8 + Math.sin(time * 3 * speed) * 0.2;
    
    ctx.strokeStyle = `rgba(56, 189, 248, ${pulse * intensity})`;
    ctx.lineWidth = 2.5 * elScale;
    ctx.beginPath();
    ctx.arc(cx, cy, rad, 0, Math.PI * 2);
    ctx.arc(cx, cy, rad * 0.7, 0, Math.PI * 2);
    ctx.stroke();
    
    // Heptagram inner arcane star
    ctx.beginPath();
    const pts = 7;
    for (let p = 0; p < pts; p++) {
        const a = (p * 4 * Math.PI) / pts - Math.PI * 0.5;
        const px = cx + Math.cos(a) * (rad * 0.7);
        const py = cy + Math.sin(a) * (rad * 0.7);
        if (p === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.stroke();
});

// 342. Translucent Golden Forcefield Dome Shimmering Over Tower
reg(['hf_wizard_golden_dome', 'item_342'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const rad = Math.min(W, H) * 0.42 * elScale;
    const shim = Math.sin(time * 4 * speed) * (4 + rough * 6);
    
    // Golden energy dome
    ctx.fillStyle = `rgba(253, 224, 71, ${0.2 * intensity})`;
    ctx.beginPath();
    ctx.arc(cx, cy, rad + shim, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.strokeStyle = `rgba(234, 179, 8, ${0.75 * intensity})`;
    ctx.lineWidth = 3 * elScale;
    ctx.stroke();
    
    // Hexagonal energy grid pattern
    ctx.strokeStyle = `rgba(254, 240, 138, ${0.4 * intensity})`;
    ctx.lineWidth = 1;
    for (let a = 0; a < Math.PI * 2; a += Math.PI / 3) {
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(a) * (rad + shim), cy + Math.sin(a) * (rad + shim));
        ctx.stroke();
    }
});

// 343. Astral Plane Starry Void Rippling Like Dark Liquid Silk
reg(['hf_astral_void_silk', 'item_343'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    for (let r = 0; r < 6; r++) {
        const ry = (r / 5) * H;
        ctx.strokeStyle = `rgba(168, 85, 247, ${(0.3 + (r % 2) * 0.15) * intensity})`;
        ctx.lineWidth = 3 * elScale;
        ctx.beginPath();
        for (let x = 0; x <= W; x += 35) {
            const y = ry + Math.sin(x * 0.02 + time * 2 * speed + r) * (14 + rough * 10);
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
    }
    // Glistening starlight motes embedded in the silk
    for (let s = 0; s < 15; s++) {
        const sx = (s * 67 + time * 10) % W, sy = (s * 83) % H;
        ctx.fillStyle = '#f8fafc';
        ctx.beginPath();
        ctx.arc(sx, sy, 1.5 * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 344. Spreading Frost Crystals Freezing Across Dungeon Flagstones
reg(['hf_flagstone_frost_spread', 'item_344'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const maxR = Math.min(W, H) * 0.45 * elScale;
    const numRays = 8;
    
    ctx.strokeStyle = `rgba(224, 242, 254, ${0.85 * intensity})`;
    ctx.lineWidth = (2 + rough * 2) * elScale;
    for (let r = 0; r < numRays; r++) {
        const ang = (r / numRays) * Math.PI * 2;
        const reach = ((time * 30 * speed + r * 15) % maxR);
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(ang) * reach, cy + Math.sin(ang) * reach);
        ctx.stroke();
        // Side barb crystals
        const midX = cx + Math.cos(ang) * (reach * 0.6);
        const midY = cy + Math.sin(ang) * (reach * 0.6);
        ctx.beginPath();
        ctx.moveTo(midX, midY);
        ctx.lineTo(midX + Math.cos(ang + 0.6) * 10 * elScale, midY + Math.sin(ang + 0.6) * 10 * elScale);
        ctx.moveTo(midX, midY);
        ctx.lineTo(midX + Math.cos(ang - 0.6) * 10 * elScale, midY + Math.sin(ang - 0.6) * 10 * elScale);
        ctx.stroke();
    }
});

// 345. Pitch-Black Magical Darkness Swirling With Shadowy Wisps
reg(['hf_magical_darkness_swirl', 'item_345'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const rad = Math.min(W, H) * 0.45 * elScale;
    
    // Inky sphere of magical darkness
    const darkGrad = ctx.createRadialGradient(cx, cy, 10, cx, cy, rad);
    darkGrad.addColorStop(0, `rgba(2, 6, 23, ${0.92 * intensity})`);
    darkGrad.addColorStop(0.7, `rgba(15, 23, 42, ${0.85 * intensity})`);
    darkGrad.addColorStop(1, 'rgba(15, 23, 42, 0)');
    ctx.fillStyle = darkGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, rad, 0, Math.PI * 2);
    ctx.fill();
    
    // Swirling black tendril wisps on perimeter
    for (let w = 0; w < 6; w++) {
        const a = time * 2 * speed + (w / 6) * Math.PI * 2;
        const wx = cx + Math.cos(a) * rad;
        const wy = cy + Math.sin(a) * rad;
        ctx.strokeStyle = `rgba(15, 23, 42, ${0.9 * intensity})`;
        ctx.lineWidth = 4 * elScale;
        ctx.beginPath();
        ctx.arc(wx, wy, 15 * elScale, 0, Math.PI);
        ctx.stroke();
    }
});

// 346. Concentric Pond Ripples From Falling Cave Water Droplets
reg(['hf_cave_drip_pond_ripples', 'item_346'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numRipples = 4;
    const cx = W * 0.5, cy = H * 0.5;
    for (let r = 0; r < numRipples; r++) {
        const age = (time * 1.5 * speed + r * 0.25) % 1;
        const rad = age * 70 * elScale;
        const alpha = Math.max(0, 1 - age);
        ctx.strokeStyle = `rgba(186, 230, 253, ${alpha * 0.8 * intensity})`;
        ctx.lineWidth = 2 * elScale;
        ctx.beginPath();
        ctx.ellipse(cx, cy, rad, rad * 0.5, 0, 0, Math.PI * 2);
        ctx.stroke();
    }
});

// 347. Rolling Morning Mist Hugging Medieval Castle Courtyard
reg(['hf_castle_morning_mist', 'item_347'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    for (let m = 0; m < 7; m++) {
        const mx = ((time * 30 * speed + m * 85) % (W + 120)) - 60;
        const my = H * 0.65 + Math.sin(time + m) * 20 * elScale;
        const rad = (45 + m * 6 + rough * 15) * elScale;
        const mist = ctx.createRadialGradient(mx, my, 5, mx, my, rad);
        mist.addColorStop(0, `rgba(241, 245, 249, ${0.35 * intensity})`);
        mist.addColorStop(1, 'rgba(241, 245, 249, 0)');
        ctx.fillStyle = mist;
        ctx.beginPath();
        ctx.arc(mx, my, rad, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 348. Soft White Snowflakes Accumulating on Thatched Village Roofs
reg(['hf_thatched_roof_snowfall', 'item_348'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    ctx.save();
    const numFlakes = Math.round(35 + rough * 25);
    for (let f = 0; f < numFlakes; f++) {
        const seed = f * 19.3;
        const sway = Math.sin(time * 2 + f) * (18 + rough * 12);
        const fx = (f * 43 + sway) % W;
        const fy = (time * 38 * speed + seed * 23) % H;
        const isBig = f % 5 === 0;

        if (isBig) {
            // Feathered snow crystal
            ctx.fillStyle = 'rgba(255, 255, 255, ' + (0.8 * intensity) + ')';
            ctx.beginPath();
            ctx.arc(fx, fy, 2.8 * elScale, 0, Math.PI * 2);
            ctx.fill();
        } else {
            ctx.fillStyle = 'rgba(240, 248, 255, ' + (0.8 * intensity) + ')';
            ctx.beginPath();
            ctx.arc(fx, fy, (1.4 + (f % 3) * 0.6) * elScale, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Soft accumulated snow pillows along thatched eaves
    ctx.fillStyle = 'rgba(255, 255, 255, ' + (0.8 * intensity) + ')';
    for (let e = 0; e < 6; e++) {
        const ex = e * (W / 5);
        ctx.beginPath();
        ctx.ellipse(ex, H - 10 * elScale, 28 * elScale, 8 * elScale, 0, 0, Math.PI * 2);
        ctx.fill();
    }
    ctx.restore();
});

// 349. Drifting Cloud Shadows Passing Over Mountain Range
reg(['hf_mountain_cloud_shadows', 'item_349'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    ctx.save();
    // Soft sweeping multi-lobed cumulus cloud shadows
    const numClouds = 3;
    for (let c = 0; c < numClouds; c++) {
        const cx = ((time * 18 * speed + c * (W * 0.45)) % (W + 300)) - 150;
        const cy = H * (0.35 + c * 0.22);

        ctx.fillStyle = 'rgba(15, 23, 42, ' + (0.8 * intensity) + ')';
        ctx.beginPath();
        // Central body
        ctx.ellipse(cx, cy, 95 * elScale, 45 * elScale, 0.1, 0, Math.PI * 2);
        // Secondary lobes
        ctx.ellipse(cx - 50 * elScale, cy + 12 * elScale, 55 * elScale, 32 * elScale, 0, 0, Math.PI * 2);
        ctx.ellipse(cx + 55 * elScale, cy - 10 * elScale, 60 * elScale, 36 * elScale, 0, 0, Math.PI * 2);
        ctx.fill();
    }

    // Sunlight shafts breaking through cloud gaps
    const sunPulse = 0.5 + Math.sin(time * 1.5) * 0.3;
    const sunGrad = ctx.createLinearGradient(0, 0, W, H);
    sunGrad.addColorStop(0, 'rgba(254, 240, 138, ' + (0.8 * intensity) + ')');
    sunGrad.addColorStop(1, 'rgba(254, 240, 138, 0)');
    ctx.fillStyle = sunGrad;
    ctx.beginPath();
    ctx.moveTo(W * 0.3, 0);
    ctx.lineTo(W * 0.6, 0);
    ctx.lineTo(W * 0.85, H);
    ctx.lineTo(W * 0.45, H);
    ctx.closePath();
    ctx.fill();

    ctx.restore();
});

// 350. Sparkling Golden Fairy Dust Floating Through Enchanted Glade
reg(['hf_fairy_dust_glade', 'item_350'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numDust = 30;
    for (let d = 0; d < numDust; d++) {
        const dx = (d * 53 + Math.sin(time * 2 + d) * 18) % W;
        const dy = (d * 79 + Math.cos(time * 2.5 + d) * 14) % H;
        const shimmer = 0.5 + Math.sin(time * 10 * speed + d * 2) * 0.5;
        ctx.fillStyle = `rgba(253, 224, 71, ${shimmer * intensity})`;
        ctx.beginPath();
        ctx.arc(dx, dy, 2.2 * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
});

// =========================================================================
// C. SINGLE ELEMENTS / SPOT PROPS (351 - 375) - High Fantasy & Medieval Legend
// =========================================================================

// 351. Crackling Adventurer's Campfire With Rising Sparks
reg(['hf_adventurer_campfire', 'item_351'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.6;
    // Ring of 8 fieldstones
    for (let s = 0; s < 8; s++) {
        const a = (s / 8) * Math.PI * 2;
        ctx.fillStyle = '#64748b';
        ctx.beginPath();
        ctx.ellipse(cx + Math.cos(a) * 28 * elScale, cy + Math.sin(a) * 16 * elScale, 6 * elScale, 4 * elScale, 0, 0, Math.PI * 2);
        ctx.fill();
    }
    // Criss-cross burning wooden logs
    ctx.strokeStyle = '#78350f';
    ctx.lineWidth = 4 * elScale;
    ctx.beginPath();
    ctx.moveTo(cx - 20 * elScale, cy + 8 * elScale); ctx.lineTo(cx + 20 * elScale, cy - 8 * elScale);
    ctx.moveTo(cx + 20 * elScale, cy + 8 * elScale); ctx.lineTo(cx - 20 * elScale, cy - 8 * elScale);
    ctx.stroke();
    // Roaring crackling campfire flames
    const flameH = (28 + Math.sin(time * 18 * speed) * 8) * elScale;
    const flameGrad = ctx.createRadialGradient(cx, cy - flameH * 0.5, 2, cx, cy - flameH * 0.5, flameH);
    flameGrad.addColorStop(0, `rgba(254, 240, 138, ${0.95 * intensity})`);
    flameGrad.addColorStop(0.4, `rgba(249, 115, 22, ${0.85 * intensity})`);
    flameGrad.addColorStop(1, 'rgba(239, 68, 68, 0)');
    ctx.fillStyle = flameGrad;
    ctx.beginPath();
    ctx.arc(cx, cy - flameH * 0.5, flameH, 0, Math.PI * 2);
    ctx.fill();
    // Rising ember sparks
    for (let sp = 0; sp < 6; sp++) {
        const sx = cx + Math.sin(time * 4 + sp) * 14 * elScale;
        const sy = cy - flameH - ((time * 40 * speed + sp * 18) % 45);
        ctx.fillStyle = '#fef08a';
        ctx.beginPath();
        ctx.arc(sx, sy, 1.5 * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 352. Forged-Iron Wall Sconce Torch Casting Warm Flickering Firelight (Top-Down Battlemap View)
reg(['hf_iron_sconce_torch', 'item_352'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.45;
    const flicker = 0.86 + Math.sin(time * 18 * speed) * 0.14;

    ctx.save();
    // 1. Broad radial firelight pool illuminating stone floor & surrounding masonry (270-deg outward arc)
    const glowR = (80 + rough * 20) * elScale;
    const torchGlow = ctx.createRadialGradient(cx, cy, 5, cx, cy, glowR);
    torchGlow.addColorStop(0, `rgba(254, 240, 138, ${0.9 * flicker * intensity})`);
    torchGlow.addColorStop(0.35, `rgba(249, 115, 22, ${0.5 * flicker * intensity})`);
    torchGlow.addColorStop(0.75, `rgba(180, 83, 9, ${0.18 * flicker * intensity})`);
    torchGlow.addColorStop(1, 'rgba(180, 83, 9, 0)');
    ctx.fillStyle = torchGlow;
    ctx.beginPath();
    ctx.arc(cx, cy, glowR, 0, Math.PI * 2);
    ctx.fill();

    // 2. Iron wall bracket baseplate mounted on dungeon wall (North wall at top)
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(cx - 10 * elScale, cy - 25 * elScale, 20 * elScale, 5 * elScale);

    // Forged iron arm extending southward from wall into the chamber
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 4 * elScale;
    ctx.beginPath();
    ctx.moveTo(cx, cy - 23 * elScale);
    ctx.lineTo(cx, cy);
    ctx.stroke();

    // 3. Circular iron sconce basket / cup seen from directly overhead
    ctx.fillStyle = '#18181b';
    ctx.strokeStyle = '#3f3f46';
    ctx.lineWidth = 2 * elScale;
    ctx.beginPath();
    ctx.arc(cx, cy, 10 * elScale, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // 4. Burning pitch-soaked wood torch head & crackling fire core seen from above
    const fireR = (7 + Math.sin(time * 20) * 1.5) * elScale;
    const flameGrad = ctx.createRadialGradient(cx, cy, 1, cx, cy, fireR * 1.8);
    flameGrad.addColorStop(0, '#ffffff');
    flameGrad.addColorStop(0.3, '#fef08a');
    flameGrad.addColorStop(0.65, '#f97316');
    flameGrad.addColorStop(1, 'rgba(239, 68, 68, 0)');
    ctx.fillStyle = flameGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, fireR * 1.8, 0, Math.PI * 2);
    ctx.fill();

    // Floating fire embers drifting outward from the torch head
    for (let e = 0; e < 5; e++) {
        const eAng = time * 3 + e * 1.4;
        const eDist = (8 + ((time * 30 + e * 16) % 36)) * elScale;
        const ex = cx + Math.cos(eAng) * eDist;
        const ey = cy + Math.sin(eAng) * eDist;
        ctx.fillStyle = e % 2 === 0 ? '#fef08a' : '#ef4444';
        ctx.beginPath();
        ctx.arc(ex, ey, (1.5 + (e % 2)) * elScale, 0, Math.PI * 2);
        ctx.fill();
    }

    ctx.restore();
});

// 353. Roaring Stone Tavern Hearth Fireplace
reg(['hf_tavern_hearth_fireplace', 'item_353'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.55;
    // Granite stone hearth arch
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 8 * elScale;
    ctx.beginPath();
    ctx.arc(cx, cy - 10 * elScale, 40 * elScale, Math.PI, 0, false);
    ctx.stroke();
    // Iron fire grate
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(cx - 32 * elScale, cy + 15 * elScale, 64 * elScale, 6 * elScale);
    // Roaring fireplace fire
    const fireH = (28 + Math.sin(time * 15 * speed) * 6) * elScale;
    ctx.fillStyle = '#f97316';
    ctx.beginPath();
    ctx.moveTo(cx - 24 * elScale, cy + 15 * elScale);
    ctx.lineTo(cx, cy + 15 * elScale - fireH);
    ctx.lineTo(cx + 24 * elScale, cy + 15 * elScale);
    ctx.closePath();
    ctx.fill();
});

// 354. Faceted Enchanted Crystal Floating Above Marble Pedestal (Top-Down Marble Plinth)
reg(['hf_floating_pedestal_crystal', 'item_354'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;

    // Concentric octagonal marble plinth seen straight down
    const plinthR = 40 * elScale;
    ctx.fillStyle = '#e2e8f0';
    ctx.beginPath();
    for (let i = 0; i < 8; i++) {
        const ang = (i / 8) * Math.PI * 2;
        const px = cx + Math.cos(ang) * plinthR;
        const py = cy + Math.sin(ang) * plinthR;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 2.5 * elScale;
    ctx.stroke();

    // Etched inner arcane rune circle
    ctx.strokeStyle = `rgba(56, 189, 248, ${0.75 * intensity})`;
    ctx.lineWidth = 1.8 * elScale;
    ctx.beginPath();
    ctx.arc(cx, cy, plinthR * 0.65, 0, Math.PI * 2);
    ctx.stroke();

    // Levitating spinning cyan crystal hovering over center
    const spin = time * 2.5 * speed;
    const pulse = Math.sin(time * 3 * speed) * 0.15 + 0.85;

    // Magical crystal light glow
    const glow = ctx.createRadialGradient(cx, cy, 2, cx, cy, 55 * elScale);
    glow.addColorStop(0, `rgba(56, 189, 248, ${0.85 * pulse * intensity})`);
    glow.addColorStop(0.5, `rgba(14, 165, 233, ${0.35 * pulse * intensity})`);
    glow.addColorStop(1, 'rgba(14, 165, 233, 0)');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(cx, cy, 55 * elScale, 0, Math.PI * 2);
    ctx.fill();

    // Spinning faceted diamond crystal seen from above
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(spin);
    ctx.fillStyle = '#38bdf8';
    ctx.beginPath();
    ctx.moveTo(0, -18 * elScale);
    ctx.lineTo(14 * elScale, 0);
    ctx.lineTo(0, 18 * elScale);
    ctx.lineTo(-14 * elScale, 0);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#bae6fd';
    ctx.lineWidth = 2 * elScale;
    ctx.stroke();
    ctx.restore();
});

// 355. Dripping Beeswax Candles Burning on Wizard Oak Desk (Top-Down Battlemap View)
reg(['hf_desk_beeswax_candles', 'item_355'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;

    ctx.save();
    // 1. Warm golden candlelight radiance pooled over the wizard desk
    const deskGlow = ctx.createRadialGradient(cx, cy, 4, cx, cy, 75 * elScale);
    deskGlow.addColorStop(0, `rgba(254, 240, 138, ${0.85 * intensity})`);
    deskGlow.addColorStop(0.35, `rgba(245, 158, 11, ${0.45 * intensity})`);
    deskGlow.addColorStop(0.75, `rgba(180, 83, 9, ${0.15 * intensity})`);
    deskGlow.addColorStop(1, 'rgba(180, 83, 9, 0)');
    ctx.fillStyle = deskGlow;
    ctx.beginPath();
    ctx.arc(cx, cy, 75 * elScale, 0, Math.PI * 2);
    ctx.fill();

    // 2. Heavy oak desk surface area (dark aged timber grain seen from above)
    const deskW = 90 * elScale, deskD = 55 * elScale;
    ctx.fillStyle = '#451a03';
    ctx.fillRect(cx - deskW * 0.5, cy - deskD * 0.5, deskW, deskD);
    ctx.strokeStyle = '#270e02';
    ctx.lineWidth = 2 * elScale;
    ctx.strokeRect(cx - deskW * 0.5, cy - deskD * 0.5, deskW, deskD);

    // Ancient spell scroll parchment unrolled on desk corner
    ctx.save();
    ctx.translate(cx - 22 * elScale, cy - 8 * elScale);
    ctx.rotate(-0.15);
    ctx.fillStyle = '#fef08a';
    ctx.fillRect(-16 * elScale, -12 * elScale, 32 * elScale, 24 * elScale);
    ctx.strokeStyle = '#ca8a04';
    ctx.lineWidth = 1 * elScale;
    ctx.strokeRect(-16 * elScale, -12 * elScale, 32 * elScale, 24 * elScale);
    // Arcane glyph lines on scroll
    ctx.strokeStyle = '#78350f';
    ctx.lineWidth = 0.8 * elScale;
    for (let l = -8; l <= 8; l += 4) {
        ctx.beginPath();
        ctx.moveTo(-12 * elScale, l * elScale);
        ctx.lineTo(12 * elScale, l * elScale);
        ctx.stroke();
    }
    ctx.restore();

    // 3. Three beeswax candles stuck to the desk seen from directly above
    const candleClusters = [
        { x: cx + 16 * elScale, y: cy - 10 * elScale, r: 7.5 * elScale },
        { x: cx + 22 * elScale, y: cy + 10 * elScale, r: 6.0 * elScale },
        { x: cx - 4 * elScale,  y: cy + 12 * elScale, r: 8.5 * elScale }
    ];

    candleClusters.forEach((c, idx) => {
        // Melted wax puddle around base
        ctx.fillStyle = '#fef9c3';
        ctx.strokeStyle = '#fde047';
        ctx.lineWidth = 1.2 * elScale;
        ctx.beginPath();
        ctx.ellipse(c.x, c.y, c.r * 1.3, c.r * 1.1, idx * 0.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Wax cylinder rim seen from above
        ctx.fillStyle = '#fef08a';
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        ctx.fill();

        // Charred black wick in center
        ctx.fillStyle = '#0f172a';
        ctx.beginPath();
        ctx.arc(c.x, c.y, 1.3 * elScale, 0, Math.PI * 2);
        ctx.fill();

        // Golden dancing flame core shining upward at camera
        const fFlick = Math.sin(time * 22 * speed + idx * 2.5) * (1 * elScale);
        const fR = (4.5 + fFlick) * elScale;
        const flameGrad = ctx.createRadialGradient(c.x, c.y, 0.5, c.x, c.y, fR * 1.8);
        flameGrad.addColorStop(0, '#ffffff');
        flameGrad.addColorStop(0.35, '#fef08a');
        flameGrad.addColorStop(0.7, '#f59e0b');
        flameGrad.addColorStop(1, 'rgba(239, 68, 68, 0)');
        ctx.fillStyle = flameGrad;
        ctx.beginPath();
        ctx.arc(c.x, c.y, fR * 1.8, 0, Math.PI * 2);
        ctx.fill();
    });

    ctx.restore();
});

// 356. Concealed Floor Spike Trap (Top-Down Forced Perspective)
reg(['hf_iron_spike_floortrap', 'item_356'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const trapSize = 65 * elScale;

    ctx.save();
    // Stone floor tile frame
    ctx.fillStyle = '#334155';
    ctx.fillRect(cx - trapSize * 0.5, cy - trapSize * 0.5, trapSize, trapSize);
    ctx.strokeStyle = '#1e293b';
    ctx.lineWidth = 3 * elScale;
    ctx.strokeRect(cx - trapSize * 0.5, cy - trapSize * 0.5, trapSize, trapSize);

    // 4x4 Grid of round perforation holes in the stone tile
    const rows = 4, cols = 4;
    const cellW = trapSize / cols, cellH = trapSize / rows;

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const hx = cx - trapSize * 0.5 + (c + 0.5) * cellW;
            const hy = cy - trapSize * 0.5 + (r + 0.5) * cellH;
            ctx.fillStyle = '#090d16'; // Deep hole shadow
            ctx.beginPath();
            ctx.arc(hx, hy, 4.5 * elScale, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Trigger cycle: Spikes shoot UP toward camera in forced perspective, then snap back
    const cycle = (time * 1.5 * speed) % 3.5;
    const isErupted = cycle < 0.8;
    const spikeZ = isErupted ? Math.sin((cycle / 0.8) * Math.PI) : 0; // 0 to 1.0 (approaching camera)

    if (spikeZ > 0.05) {
        // Iron spikes shooting UPWARD toward camera (Forced Perspective)
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                const hx = cx - trapSize * 0.5 + (c + 0.5) * cellW;
                const hy = cy - trapSize * 0.5 + (r + 0.5) * cellH;
                const tipR = (2 + spikeZ * 4) * elScale; // Expands as it nears camera!

                // Spike cone body (metallic gray)
                ctx.fillStyle = '#64748b';
                ctx.beginPath();
                ctx.arc(hx, hy, tipR, 0, Math.PI * 2);
                ctx.fill();

                // Sharp gleaming tip in center
                ctx.fillStyle = '#ffffff';
                ctx.beginPath();
                ctx.arc(hx, hy, tipR * 0.45, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }
    ctx.restore();
});

// 357. Carved Stone Dragon-Head Sconce Breathing Flame Jets
reg(['hf_dragonhead_flame_sconce', 'item_357'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.35, cy = H * 0.5;
    // Carved dragon head profile in stone
    ctx.fillStyle = '#475569';
    ctx.beginPath();
    ctx.moveTo(cx - 20 * elScale, cy + 15 * elScale);
    ctx.lineTo(cx + 15 * elScale, cy + 8 * elScale); // snout
    ctx.lineTo(cx + 8 * elScale, cy - 8 * elScale);  // jaw
    ctx.lineTo(cx - 15 * elScale, cy - 20 * elScale); // horns
    ctx.closePath();
    ctx.fill();
    // Intermittent fire breath jet
    const isBreathing = (Math.sin(time * 2 * speed) > 0.2);
    if (isBreathing) {
        FX.drawVolumetricCone(ctx, cx + 15 * elScale, cy + 4 * elScale, 0, W * 0.55, 0.45, `rgba(249, 115, 22, ${0.9 * intensity})`, 'rgba(239, 68, 68, 0)');
    }
});

// 358. Mimic Treasure Chest Rattling Lid and Gnashing Teeth
reg(['hf_mimic_chest', 'item_358'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.55;
    const rattle = Math.sin(time * 20 * speed) * (2 * elScale);
    // Wooden chest base
    ctx.fillStyle = '#78350f';
    ctx.fillRect(cx - 30 * elScale + rattle, cy, 60 * elScale, 28 * elScale);
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 2 * elScale;
    ctx.strokeRect(cx - 30 * elScale + rattle, cy, 60 * elScale, 28 * elScale);
    // Ajar lid opening revealing sharp white teeth
    const mouthOpen = (10 + Math.sin(time * 6 * speed) * 8) * elScale;
    ctx.fillStyle = '#451a03';
    ctx.fillRect(cx - 30 * elScale + rattle, cy - mouthOpen - 14 * elScale, 60 * elScale, 14 * elScale);
    // Gnashing ivory fangs
    ctx.fillStyle = '#f8fafc';
    for (let t = 0; t < 6; t++) {
        const tx = cx - 22 * elScale + t * 9 * elScale + rattle;
        ctx.beginPath();
        ctx.moveTo(tx - 3 * elScale, cy);
        ctx.lineTo(tx, cy - 7 * elScale);
        ctx.lineTo(tx + 3 * elScale, cy);
        ctx.closePath();
        ctx.fill();
    }
});

// 359. Giant Snapping Venus-Flytrap Monster Plant
reg(['hf_flytrap_monster_plant', 'item_359'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.55;
    // Snapping green fleshy jaws
    const snap = Math.sin(time * 4 * speed);
    const jawAng = Math.abs(snap) * 0.45;
    
    ctx.fillStyle = '#15803d';
    // Top jaw
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(-jawAng);
    ctx.beginPath();
    ctx.arc(0, 0, 30 * elScale, Math.PI, 0, false);
    ctx.fill();
    // Thorny teeth
    ctx.fillStyle = '#f87171';
    for (let t = -3; t <= 3; t++) {
        ctx.fillRect(t * 8 * elScale, 0, 3 * elScale, 6 * elScale);
    }
    ctx.restore();
    
    // Bottom jaw
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(jawAng);
    ctx.fillStyle = '#166534';
    ctx.beginPath();
    ctx.arc(0, 0, 30 * elScale, 0, Math.PI, false);
    ctx.fill();
    ctx.restore();
});

// 360. Heavy Limestone Stalactite Trembling & Dropping From Ceiling
reg(['hf_falling_stalactite', 'item_360'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5;
    const cycle = (time * 1.2 * speed) % 3;
    const isFalling = cycle > 2.2;
    const sy = isFalling ? (cycle - 2.2) * (H * 1.2) : Math.sin(time * 30) * 1.5;
    
    // Limestone jagged stalactite cone
    ctx.fillStyle = '#64748b';
    ctx.beginPath();
    ctx.moveTo(cx - 16 * elScale, sy);
    ctx.lineTo(cx + 16 * elScale, sy);
    ctx.lineTo(cx, sy + 45 * elScale);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 2 * elScale;
    ctx.stroke();
});

// 361. Bubbling Witch's Cauldron (Top-Down Battlemap View)
reg(['hf_bubbling_witch_cauldron', 'item_361'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const cauldronR = 45 * elScale;

    ctx.save();
    // Hearth coals glowing beneath cauldron on the stone floor
    for (let c = 0; c < 8; c++) {
        const cAng = (c / 8) * Math.PI * 2;
        const cDist = cauldronR + 8 * elScale;
        const cPulse = Math.sin(time * 3 + c) * 0.3 + 0.7;
        ctx.fillStyle = 'rgba(249, 115, 22, ' + (0.8 * intensity) + ')';
        ctx.beginPath();
        ctx.arc(cx + Math.cos(cAng) * cDist, cy + Math.sin(cAng) * cDist, 6 * elScale, 0, Math.PI * 2);
        ctx.fill();
    }

    // Cast-iron cauldron body rim viewed from DIRECTLY ABOVE (Top-Down)
    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    ctx.arc(cx, cy, cauldronR, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#334155';
    ctx.lineWidth = 5 * elScale;
    ctx.stroke();

    // Boiling emerald-green potion surface in round cauldron mouth
    const potionR = cauldronR - 5 * elScale;
    const potGrad = ctx.createRadialGradient(cx, cy, 5 * elScale, cx, cy, potionR);
    potGrad.addColorStop(0, 'rgba(74, 222, 128, ' + (0.8 * intensity) + ')');
    potGrad.addColorStop(0.7, 'rgba(22, 163, 74, ' + (0.8 * intensity) + ')');
    potGrad.addColorStop(1, 'rgba(20, 83, 45, ' + (0.8 * intensity) + ')');
    ctx.fillStyle = potGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, potionR, 0, Math.PI * 2);
    ctx.fill();

    // Swirling potion foam rings in cauldron mouth
    for (let r = 0; r < 3; r++) {
        const ringT = (time * (1.2 + r * 0.4) * speed) % 1;
        ctx.strokeStyle = 'rgba(187, 247, 208, ' + (0.8 * intensity) + ')';
        ctx.lineWidth = 2 * elScale;
        ctx.beginPath();
        ctx.arc(cx, cy, (10 + ringT * (potionR - 12 * elScale)), 0, Math.PI * 2);
        ctx.stroke();
    }

    // Bursting potion bubbles on liquid surface
    for (let b = 0; b < 6; b++) {
        const bAng = b * 1.3 + time * 1.5;
        const bDist = (b * 6.5) * elScale;
        const bx = cx + Math.cos(bAng) * bDist;
        const by = cy + Math.sin(bAng) * bDist;
        const bPulse = Math.sin(time * 6 + b) * 0.5 + 0.5;

        ctx.fillStyle = '#bbf7d0';
        ctx.beginPath();
        ctx.arc(bx, by, (3 + bPulse * 3.5) * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
    ctx.restore();
});

// 362. Country Wooden Windmill Turning Steadily (Top-Down Battlemap View)
reg(['hf_country_windmill', 'item_362'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const rot = time * 2.2 * speed;
    const towerR = 36 * elScale;

    ctx.save();
    // 1. Rotating shadows of the 4 sails cast on the ground around the mill
    const shadowRot = rot + 0.3;
    for (let s = 0; s < 4; s++) {
        const sa = shadowRot + (s * Math.PI * 0.5);
        ctx.save();
        ctx.translate(cx + 8 * elScale, cy + 12 * elScale);
        ctx.rotate(sa);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.22)';
        ctx.fillRect(8 * elScale, -5 * elScale, 48 * elScale, 10 * elScale);
        ctx.restore();
    }

    // 2. Conical wooden/thatch windmill tower roof cap seen from directly overhead
    const roofGrad = ctx.createRadialGradient(cx - 6 * elScale, cy - 8 * elScale, 3, cx, cy, towerR);
    roofGrad.addColorStop(0, '#a16207');
    roofGrad.addColorStop(0.6, '#78350f');
    roofGrad.addColorStop(1, '#451a03');
    ctx.fillStyle = roofGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, towerR, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#291202';
    ctx.lineWidth = 2 * elScale;
    ctx.stroke();

    // Conical roof timber seam lines radiating outward
    ctx.strokeStyle = 'rgba(69, 26, 3, 0.6)';
    ctx.lineWidth = 1.2 * elScale;
    for (let i = 0; i < 12; i++) {
        const ra = (i / 12) * Math.PI * 2;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + Math.cos(ra) * towerR, cy + Math.sin(ra) * towerR);
        ctx.stroke();
    }

    // Central conical peak & copper weather vane hub
    ctx.fillStyle = '#15803d';
    ctx.beginPath();
    ctx.arc(cx, cy, 6 * elScale, 0, Math.PI * 2);
    ctx.fill();

    // 3. 4 Canvas windmill sails sweeping overhead in top-down rotation
    const sailLen = 50 * elScale;
    for (let s = 0; s < 4; s++) {
        const ang = rot + (s * Math.PI * 0.5);
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(ang);

        // Sail timber spar arm
        ctx.strokeStyle = '#451a03';
        ctx.lineWidth = 2.5 * elScale;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(sailLen + 6 * elScale, 0);
        ctx.stroke();

        // Canvas sail cloth stretched over spar frame
        ctx.fillStyle = 'rgba(248, 250, 252, 0.9)';
        ctx.strokeStyle = '#94a3b8';
        ctx.lineWidth = 1 * elScale;
        ctx.fillRect(8 * elScale, -6 * elScale, sailLen - 6 * elScale, 11 * elScale);
        ctx.strokeRect(8 * elScale, -6 * elScale, sailLen - 6 * elScale, 11 * elScale);

        // Lattice sail crossbars
        ctx.strokeStyle = '#78350f';
        ctx.lineWidth = 0.8 * elScale;
        for (let b = 14 * elScale; b < sailLen; b += 9 * elScale) {
            ctx.beginPath();
            ctx.moveTo(b, -6 * elScale);
            ctx.lineTo(b, 5 * elScale);
            ctx.stroke();
        }
        ctx.restore();
    }

    ctx.restore();
});

// 363. Open Spellbook Self-Flipping Its Own Glowing Pages
reg(['hf_self_flipping_spellbook', 'item_363'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.55;
    // Open leather cover
    ctx.fillStyle = '#7f1d1d';
    ctx.fillRect(cx - 38 * elScale, cy - 20 * elScale, 76 * elScale, 40 * elScale);
    // Yellow parchment pages
    ctx.fillStyle = '#fef08a';
    ctx.fillRect(cx - 34 * elScale, cy - 18 * elScale, 32 * elScale, 36 * elScale);
    ctx.fillRect(cx + 2 * elScale, cy - 18 * elScale, 32 * elScale, 36 * elScale);
    // Flipping page arc in mid-air
    const flip = Math.sin(time * 3 * speed);
    ctx.fillStyle = '#fef9c3';
    ctx.beginPath();
    ctx.moveTo(cx, cy - 18 * elScale);
    ctx.quadraticCurveTo(cx + flip * 25 * elScale, cy - 28 * elScale, cx + flip * 30 * elScale, cy + 18 * elScale);
    ctx.lineTo(cx, cy + 18 * elScale);
    ctx.closePath();
    ctx.fill();
});

// 364. Leather Blacksmith Bellows Pumping Air Into Forge Coals
reg(['hf_forge_bellows', 'item_364'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.45, cy = H * 0.55;
    const pump = Math.abs(Math.sin(time * 4 * speed)) * 12 * elScale;
    // Bellows handles & leather accordion body
    ctx.fillStyle = '#451a03';
    ctx.beginPath();
    ctx.moveTo(cx - 30 * elScale, cy - 15 * elScale + pump);
    ctx.lineTo(cx + 10 * elScale, cy);
    ctx.lineTo(cx - 30 * elScale, cy + 15 * elScale - pump);
    ctx.closePath();
    ctx.fill();
    // Iron nozzle blowing spark bursts
    ctx.fillStyle = '#64748b';
    ctx.fillRect(cx + 10 * elScale, cy - 3 * elScale, 15 * elScale, 6 * elScale);
    // Glowing forge coals flaring
    ctx.fillStyle = '#f97316';
    ctx.beginPath();
    ctx.arc(cx + 35 * elScale, cy, (12 + pump * 0.5) * elScale, 0, Math.PI * 2);
    ctx.fill();
});

// 365. Painted Wooden Tavern Sign Creaking on Hinges (Top-Down Battlemap View)
reg(['hf_creaking_tavern_sign', 'item_365'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.45;
    // Creaking wind sway creates angular tilt / yaw in overhead view
    const swingAng = Math.sin(time * 2.5 * speed) * 0.35;
    const signLen = 42 * elScale;

    ctx.save();
    // 1. Wrought-iron wall bracket extending outward from tavern wall (North wall at top)
    ctx.strokeStyle = '#0f172a';
    ctx.lineWidth = 3.5 * elScale;
    ctx.beginPath();
    ctx.moveTo(cx, cy - 22 * elScale);
    ctx.lineTo(cx, cy + 18 * elScale);
    ctx.stroke();

    // Wall mounting flange at wall interface
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(cx - 10 * elScale, cy - 25 * elScale, 20 * elScale, 4 * elScale);

    // 2. Cast shadow of swinging sign on the cobblestone walkway below
    ctx.save();
    ctx.translate(cx + 12 * elScale, cy + 24 * elScale);
    ctx.rotate(swingAng * 0.7);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.28)';
    ctx.fillRect(-signLen * 0.5, -4 * elScale, signLen, 8 * elScale);
    ctx.restore();

    // 3. Wooden tavern signboard seen from directly above (narrow timber beam edge)
    ctx.save();
    ctx.translate(cx, cy + 5 * elScale);
    ctx.rotate(swingAng);

    // Two iron chain attachment links on top edge
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 1.5 * elScale;
    ctx.beginPath();
    ctx.arc(-14 * elScale, 0, 2.5 * elScale, 0, Math.PI * 2);
    ctx.arc(14 * elScale, 0, 2.5 * elScale, 0, Math.PI * 2);
    ctx.stroke();

    // Wooden board top edge (thick carved oak plank seen from above)
    ctx.fillStyle = '#78350f';
    ctx.fillRect(-signLen * 0.5, -2.5 * elScale, signLen, 5 * elScale);
    ctx.strokeStyle = '#451a03';
    ctx.lineWidth = 1.5 * elScale;
    ctx.strokeRect(-signLen * 0.5, -2.5 * elScale, signLen, 5 * elScale);

    // Iron reinforcement band caps on left and right edges
    ctx.fillStyle = '#1e293b';
    ctx.fillRect(-signLen * 0.5, -3 * elScale, 4 * elScale, 6 * elScale);
    ctx.fillRect(signLen * 0.5 - 4 * elScale, -3 * elScale, 4 * elScale, 6 * elScale);

    ctx.restore();
    ctx.restore();
});

// 366. Swirling Amethyst Dimensional Portal Archway (Top-Down Battlemap View)
reg(['hf_amethyst_portal_arch', 'item_366'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const rot = time * 2.8 * speed;

    ctx.save();
    // 1. Swirling planar rift / cosmic energy pool on the dungeon floor (Top-Down)
    const riftW = 44 * elScale, riftH = 28 * elScale;
    const portalGrad = ctx.createRadialGradient(cx, cy, 2, cx, cy, riftW * 1.2);
    portalGrad.addColorStop(0, `rgba(244, 114, 182, ${0.95 * intensity})`);
    portalGrad.addColorStop(0.35, `rgba(192, 132, 252, ${0.85 * intensity})`);
    portalGrad.addColorStop(0.7, `rgba(147, 51, 234, ${0.45 * intensity})`);
    portalGrad.addColorStop(1, 'rgba(107, 33, 168, 0)');
    ctx.fillStyle = portalGrad;
    ctx.beginPath();
    ctx.ellipse(cx, cy, riftW * 1.2, riftH * 1.2, 0, 0, Math.PI * 2);
    ctx.fill();

    // Swirling spiral arms of arcane vortex
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(rot);
    for (let a = 0; a < 3; a++) {
        const armAng = (a * Math.PI * 2) / 3;
        ctx.strokeStyle = `rgba(232, 121, 249, ${0.75 * intensity})`;
        ctx.lineWidth = 2.5 * elScale;
        ctx.beginPath();
        for (let t = 0; t <= 20; t++) {
            const rad = (t / 20) * (34 * elScale);
            const ang = armAng + (t * 0.18);
            const px = Math.cos(ang) * rad;
            const py = Math.sin(ang) * (rad * 0.65);
            if (t === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py);
        }
        ctx.stroke();
    }
    ctx.restore();

    // 2. Two carved monolithic stone pylon bases standing on either side of the portal threshold
    const pylonDist = 48 * elScale;
    [-1, 1].forEach(side => {
        const px = cx + side * pylonDist;
        // Pylon square stone foundation
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(px - 10 * elScale, cy - 10 * elScale, 20 * elScale, 20 * elScale);
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 1.5 * elScale;
        ctx.strokeRect(px - 10 * elScale, cy - 10 * elScale, 20 * elScale, 20 * elScale);

        // Glowing amethyst rune core in each pylon
        const runePulse = 0.75 + Math.sin(time * 6 + side) * 0.25;
        ctx.fillStyle = `rgba(216, 180, 254, ${runePulse * intensity})`;
        ctx.beginPath();
        ctx.arc(px, cy, 4 * elScale, 0, Math.PI * 2);
        ctx.fill();
    });

    // 3. Violet electric arcs crackling between the two stone pylons
    if (Math.sin(time * 12) > 0.2) {
        ctx.strokeStyle = '#f5d0fe';
        ctx.lineWidth = 1.5 * elScale;
        ctx.beginPath();
        ctx.moveTo(cx - pylonDist + 8 * elScale, cy);
        for (let s = -30; s <= 30; s += 15) {
            const jx = cx + s * elScale;
            const jy = cy + (Math.sin(time * 30 + s) * 8) * elScale;
            ctx.lineTo(jx, jy);
        }
        ctx.lineTo(cx + pylonDist - 8 * elScale, cy);
        ctx.stroke();
    }

    ctx.restore();
});

// 367. Levitating Runed Greatsword Spinning in Light Beam (Top-Down Battlemap View)
reg(['hf_levitating_runed_greatsword', 'item_367'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const rot = time * 1.8 * speed;
    const levitate = Math.sin(time * 3 * speed) * 4 * elScale;
    const swordLen = 70 * elScale;

    ctx.save();
    // 1. Concentric celestial golden summoning light circles pooled on floor below
    const lightR = (60 + rough * 15) * elScale;
    const lightGrad = ctx.createRadialGradient(cx, cy, 5, cx, cy, lightR);
    lightGrad.addColorStop(0, `rgba(254, 240, 138, ${0.75 * intensity})`);
    lightGrad.addColorStop(0.4, `rgba(245, 158, 11, ${0.35 * intensity})`);
    lightGrad.addColorStop(0.8, `rgba(217, 119, 6, ${0.1 * intensity})`);
    lightGrad.addColorStop(1, 'rgba(217, 119, 6, 0)');
    ctx.fillStyle = lightGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, lightR, 0, Math.PI * 2);
    ctx.fill();

    // Runic circle ring on floor
    ctx.strokeStyle = `rgba(253, 224, 71, ${0.5 * intensity})`;
    ctx.lineWidth = 1.5 * elScale;
    ctx.beginPath();
    ctx.arc(cx, cy, 38 * elScale, 0, Math.PI * 2);
    ctx.stroke();

    // 2. Hovering cast shadow on floor directly beneath the blade (lagged rotation)
    ctx.save();
    ctx.translate(cx + 8 * elScale, cy + 12 * elScale);
    ctx.rotate(rot);
    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.fillRect(-swordLen * 0.5, -3 * elScale, swordLen, 6 * elScale);
    ctx.restore();

    // 3. Levitating greatsword seen from directly above, rotating 360-deg horizontally
    ctx.save();
    ctx.translate(cx, cy + levitate);
    ctx.rotate(rot);

    // Double-edged steel blade
    const bladeLen = 48 * elScale;
    ctx.fillStyle = '#e2e8f0';
    ctx.beginPath();
    ctx.moveTo(-swordLen * 0.5, 0); // Pointed tip
    ctx.lineTo(-swordLen * 0.5 + 8 * elScale, -4 * elScale);
    ctx.lineTo(bladeLen - swordLen * 0.5, -4 * elScale);
    ctx.lineTo(bladeLen - swordLen * 0.5, 4 * elScale);
    ctx.lineTo(-swordLen * 0.5 + 8 * elScale, 4 * elScale);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = '#94a3b8';
    ctx.lineWidth = 1 * elScale;
    ctx.stroke();

    // Central fuller ridge
    ctx.strokeStyle = '#64748b';
    ctx.lineWidth = 1 * elScale;
    ctx.beginPath();
    ctx.moveTo(-swordLen * 0.5 + 10 * elScale, 0);
    ctx.lineTo(bladeLen - swordLen * 0.5, 0);
    ctx.stroke();

    // Glowing cyan arcane runes etched along blade fuller
    const runeGlow = 0.75 + Math.sin(time * 6) * 0.25;
    ctx.fillStyle = `rgba(56, 189, 248, ${runeGlow * intensity})`;
    for (let r = 0; r < 5; r++) {
        const rx = -swordLen * 0.5 + (12 + r * 6.5) * elScale;
        ctx.fillRect(rx - 1.5 * elScale, -1.2 * elScale, 3 * elScale, 2.4 * elScale);
    }

    // Golden crossguard (quillons)
    const guardX = bladeLen - swordLen * 0.5;
    ctx.fillStyle = '#f59e0b';
    ctx.fillRect(guardX, -12 * elScale, 4.5 * elScale, 24 * elScale);
    ctx.strokeStyle = '#b45309';
    ctx.lineWidth = 1 * elScale;
    ctx.strokeRect(guardX, -12 * elScale, 4.5 * elScale, 24 * elScale);

    // Leather-wrapped hilt / grip
    const hiltLen = 14 * elScale;
    ctx.fillStyle = '#451a03';
    ctx.fillRect(guardX + 4.5 * elScale, -2.5 * elScale, hiltLen, 5 * elScale);

    // Golden pommel with sapphire gem
    ctx.fillStyle = '#f59e0b';
    ctx.beginPath();
    ctx.arc(guardX + 4.5 * elScale + hiltLen + 3 * elScale, 0, 4.5 * elScale, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#0284c7';
    ctx.beginPath();
    ctx.arc(guardX + 4.5 * elScale + hiltLen + 3 * elScale, 0, 2.5 * elScale, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();

    // 4. Floating cyan arcane motes rising upward towards the camera
    for (let m = 0; m < 5; m++) {
        const mt = (time * 1.5 + m * 0.7) % 2;
        const mx = cx + Math.sin(time * 2 + m) * 22 * elScale;
        const my = cy + Math.cos(time * 1.8 + m) * 22 * elScale;
        const mAlpha = (1 - mt / 2) * 0.75 * intensity;
        ctx.fillStyle = `rgba(56, 189, 248, ${mAlpha})`;
        ctx.beginPath();
        ctx.arc(mx, my, (1.8 + (m % 2)) * elScale, 0, Math.PI * 2);
        ctx.fill();
    }

    ctx.restore();
});

// 368. Azure Healing Fountain (Top-Down Battlemap View)
reg(['hf_azure_healing_fountain', 'item_368'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    ctx.save();

    // Tier 1: Outer marble basin (Top-Down concentric circle)
    const basinR1 = 60 * elScale;
    ctx.fillStyle = '#e2e8f0';
    ctx.beginPath(); ctx.arc(cx, cy, basinR1, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = '#94a3b8'; ctx.lineWidth = 4 * elScale; ctx.stroke();

    // Outer water pool
    ctx.fillStyle = 'rgba(56, 189, 248, ' + (0.8 * intensity) + ')';
    ctx.beginPath(); ctx.arc(cx, cy, basinR1 - 4 * elScale, 0, Math.PI * 2); ctx.fill();

    // Tier 2: Middle marble pedestal ring
    const basinR2 = 38 * elScale;
    ctx.fillStyle = '#cbd5e1';
    ctx.beginPath(); ctx.arc(cx, cy, basinR2, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = '#64748b'; ctx.lineWidth = 3 * elScale; ctx.stroke();

    // Middle water pool
    ctx.fillStyle = 'rgba(14, 165, 233, ' + (0.8 * intensity) + ')';
    ctx.beginPath(); ctx.arc(cx, cy, basinR2 - 3 * elScale, 0, Math.PI * 2); ctx.fill();

    // Tier 3: Central bubbling spout font
    const spoutR = 16 * elScale;
    ctx.fillStyle = '#f8fafc';
    ctx.beginPath(); ctx.arc(cx, cy, spoutR, 0, Math.PI * 2); ctx.fill();

    // Radial ripples overflowing outward in 360 degrees
    for (let r = 0; r < 4; r++) {
        const rt = (time * 1.5 * speed + r * 0.25) % 1;
        const curR = spoutR + rt * (basinR1 - spoutR);
        ctx.strokeStyle = 'rgba(224, 242, 254, ' + (0.8 * intensity) + ')';
        ctx.lineWidth = 1.5 * elScale;
        ctx.beginPath();
        ctx.arc(cx, cy, curR, 0, Math.PI * 2);
        ctx.stroke();
    }

    // Sparkling golden healing motes drifting UPWARD toward camera (Forced Perspective)
    for (let m = 0; m < 8; m++) {
        const mt = (time * 1.8 + m * 0.35) % 1;
        const mAng = m * 1.8 + time * 0.5;
        const mDist = mt * basinR1 * 0.85;
        const mx = cx + Math.cos(mAng) * mDist;
        const my = cy + Math.sin(mAng) * mDist;
        const mSize = (2 + mt * 3.5) * elScale;

        ctx.fillStyle = 'rgba(254, 240, 138, ' + (0.8 * intensity) + ')';
        ctx.beginPath();
        ctx.arc(mx, my, mSize, 0, Math.PI * 2);
        ctx.fill();
    }
    ctx.restore();
});

// 369. Floating Spectral Skull Trailing Ectoplasm Wisps
reg(['hf_floating_spectral_skull', 'item_369'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5;
    const floatY = H * 0.5 + Math.sin(time * 2.5 * speed) * 12 * elScale;
    // Translucent cyan ghostly skull
    ctx.fillStyle = `rgba(165, 243, 252, ${0.8 * intensity})`;
    ctx.beginPath();
    ctx.arc(cx, floatY - 5 * elScale, 20 * elScale, 0, Math.PI * 2);
    ctx.fill();
    // Hollow dark eye sockets
    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    ctx.arc(cx - 7 * elScale, floatY - 4 * elScale, 4 * elScale, 0, Math.PI * 2);
    ctx.arc(cx + 7 * elScale, floatY - 4 * elScale, 4 * elScale, 0, Math.PI * 2);
    ctx.fill();
    // Ectoplasmic mist trailing downward
    for (let e = 0; e < 5; e++) {
        const ex = cx + Math.sin(time * 3 + e) * 12 * elScale;
        const ey = floatY + 18 * elScale + e * 8 * elScale;
        ctx.fillStyle = `rgba(103, 232, 249, ${(0.6 - e * 0.1) * intensity})`;
        ctx.beginPath();
        ctx.arc(ex, ey, (6 + e * 2) * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 370. Scrying Crystal Ball Swirling With Miniature Storm Clouds
reg(['hf_storm_scrying_orb', 'item_370'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    const orbR = 30 * elScale;
    // Brass clawed stand
    ctx.strokeStyle = '#d97706';
    ctx.lineWidth = 4 * elScale;
    ctx.beginPath();
    ctx.moveTo(cx - 20 * elScale, cy + 35 * elScale);
    ctx.lineTo(cx, cy + 25 * elScale);
    ctx.lineTo(cx + 20 * elScale, cy + 35 * elScale);
    ctx.stroke();
    // Glass crystal sphere
    ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
    ctx.beginPath();
    ctx.arc(cx, cy, orbR, 0, Math.PI * 2);
    ctx.fill();
    // Swirling miniature purple lightning inside
    const flash = (Math.sin(time * 12 * speed) > 0.4);
    if (flash) {
        ctx.strokeStyle = '#c084fc';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(cx - 12 * elScale, cy - 10 * elScale);
        ctx.lineTo(cx, cy);
        ctx.lineTo(cx + 12 * elScale, cy + 10 * elScale);
        ctx.stroke();
    }
});

// 371. Heraldic Castle Banners and Pennants Rippling in Wind
reg(['hf_heraldic_castle_banners', 'item_371'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numBanners = 3;
    for (let b = 0; b < numBanners; b++) {
        const bx = W * 0.25 + b * (W * 0.25);
        const flap = Math.sin(time * 5 * speed + b * 1.5) * (8 + rough * 6);
        // Vertical heraldic red/gold banner
        ctx.fillStyle = b % 2 === 0 ? '#b91c1c' : '#1d4ed8';
        ctx.beginPath();
        ctx.moveTo(bx, H * 0.2);
        ctx.lineTo(bx + 26 * elScale, H * 0.2);
        ctx.lineTo(bx + 26 * elScale + flap, H * 0.7);
        ctx.lineTo(bx + 13 * elScale + flap, H * 0.65);
        ctx.lineTo(bx + flap, H * 0.7);
        ctx.closePath();
        ctx.fill();
    }
});

// 372. Monarch Butterflies Fluttering Around Blooming Wildflowers
reg(['hf_monarch_wildflowers', 'item_372'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const numFlies = 4;
    for (let f = 0; f < numFlies; f++) {
        const fx = W * 0.5 + Math.cos(time * 2.5 * speed + f * 1.6) * 35 * elScale;
        const fy = H * 0.5 + Math.sin(time * 3 * speed + f * 1.8) * 25 * elScale;
        const flap = Math.abs(Math.sin(time * 15 * speed + f));
        
        ctx.fillStyle = '#f97316';
        ctx.beginPath();
        ctx.ellipse(fx - 4 * elScale, fy, 5 * elScale, 4 * elScale * flap, 0, 0, Math.PI * 2);
        ctx.ellipse(fx + 4 * elScale, fy, 5 * elScale, 4 * elScale * flap, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(fx - 1, fy - 3, 2, 6);
    }
});

// 373. Whole Roast Boar Turning Slowly on Spit Over Kitchen Fire
reg(['hf_roast_boar_spit', 'item_373'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.55;
    const rot = time * 1.5 * speed;
    // Iron spit bar
    ctx.strokeStyle = '#475569';
    ctx.lineWidth = 4 * elScale;
    ctx.beginPath();
    ctx.moveTo(cx - 45 * elScale, cy); ctx.lineTo(cx + 45 * elScale, cy);
    ctx.stroke();
    // Roast boar cylinder roasting
    ctx.fillStyle = '#78350f';
    ctx.beginPath();
    ctx.ellipse(cx, cy, 28 * elScale, (14 + Math.sin(rot) * 3) * elScale, 0, 0, Math.PI * 2);
    ctx.fill();
    // Fire coals below
    ctx.fillStyle = '#f97316';
    for (let c = 0; c < 5; c++) {
        ctx.beginPath();
        ctx.arc(cx - 20 * elScale + c * 10 * elScale, cy + 22 * elScale, 4 * elScale, 0, Math.PI * 2);
        ctx.fill();
    }
});

// 374. Ornate Brass Hourglass Draining Golden Sand
reg(['hf_alchemist_brass_hourglass', 'item_374'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.5;
    // Brass top & bottom plates
    ctx.fillStyle = '#d97706';
    ctx.fillRect(cx - 20 * elScale, cy - 35 * elScale, 40 * elScale, 6 * elScale);
    ctx.fillRect(cx - 20 * elScale, cy + 29 * elScale, 40 * elScale, 6 * elScale);
    // Glass bulbs
    ctx.strokeStyle = 'rgba(203, 213, 225, 0.7)';
    ctx.lineWidth = 2 * elScale;
    ctx.beginPath();
    ctx.moveTo(cx - 16 * elScale, cy - 29 * elScale);
    ctx.lineTo(cx, cy);
    ctx.lineTo(cx - 16 * elScale, cy + 29 * elScale);
    ctx.lineTo(cx + 16 * elScale, cy + 29 * elScale);
    ctx.lineTo(cx, cy);
    ctx.lineTo(cx + 16 * elScale, cy - 29 * elScale);
    ctx.closePath();
    ctx.stroke();
    // Draining stream of golden sand
    ctx.strokeStyle = '#fef08a';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(cx, cy - 10 * elScale); ctx.lineTo(cx, cy + 25 * elScale);
    ctx.stroke();
});

// 375. Green Treefrog Hopping Onto Floating Water-Lily Pad
reg(['hf_treefrog_lilypad', 'item_375'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
    const cx = W * 0.5, cy = H * 0.55;
    // Green floating lily pad
    ctx.fillStyle = '#16a34a';
    ctx.beginPath();
    ctx.arc(cx, cy, 32 * elScale, 0.2, Math.PI * 1.8, false);
    ctx.lineTo(cx, cy);
    ctx.closePath();
    ctx.fill();
    // Treefrog hopping
    const hopPhase = Math.abs(Math.sin(time * 3 * speed));
    const frogY = cy - hopPhase * 16 * elScale;
    ctx.fillStyle = '#4ade80';
    ctx.beginPath();
    ctx.ellipse(cx, frogY, 10 * elScale, 7 * elScale, 0, 0, Math.PI * 2);
    ctx.fill();
    // Dark bulbous frog eyes
    ctx.fillStyle = '#0f172a';
    ctx.beginPath();
    ctx.arc(cx - 5 * elScale, frogY - 5 * elScale, 2.5 * elScale, 0, Math.PI * 2);
    ctx.arc(cx + 5 * elScale, frogY - 5 * elScale, 2.5 * elScale, 0, Math.PI * 2);
    ctx.fill();
});


})();
