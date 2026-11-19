/**
 * AetherTable VTT - FX Common Utilities & Procedural Math Primitives
 * Provides high-performance deterministic noise, vector geometry, fractal harmonics,
 * and volumetric lighting helpers across all 375 master catalog elements.
 */
(function() {
    'use strict';

    const VTT_FX = window.VTT_FX = window.VTT_FX || {};

    // Basic Math & Clamping
    VTT_FX.clamp = function(val, min, max) {
        return Math.max(min, Math.min(max, val));
    };

    VTT_FX.lerp = function(a, b, t) {
        return a + (b - a) * t;
    };

    // Deterministic 1D & 2D Hash Noise
    VTT_FX.hash = function(n) {
        const x = Math.sin(n * 12.9898 + 78.233) * 43758.5453123;
        return x - Math.floor(x);
    };

    VTT_FX.hash2D = function(x, y) {
        const n = Math.sin(x * 37.1 + y * 583.7) * 43758.5453;
        return n - Math.floor(n);
    };

    // Multi-octave Fractal Noise for the Detail / Fractal Slider
    VTT_FX.fractalNoise = function(x, y, time, roughness) {
        const r = VTT_FX.clamp(roughness !== undefined ? roughness : 0.75, 0, 2.0);
        let val = 0;
        let amp = 1.0;
        let freq = 1.0;
        let maxAmp = 0;
        const octaves = r > 1.2 ? 4 : (r > 0.6 ? 3 : 2);

        for (let i = 0; i < octaves; i++) {
            const h = Math.sin(x * freq + time * 0.4 + i * 1.7) * Math.cos(y * freq - time * 0.3 + i * 2.3);
            val += h * amp;
            maxAmp += amp;
            amp *= (0.45 + r * 0.25);
            freq *= 2.1;
        }
        return (val / maxAmp);
    };

    // Volumetric Light Cone (Headlights, Spotlights, Searchlights, Flashlights)
    VTT_FX.drawVolumetricCone = function(ctx, ox, oy, angle, length, spreadAngle, colStart, colEnd) {
        ctx.save();
        ctx.translate(ox, oy);
        ctx.rotate(angle);

        const halfSpread = spreadAngle * 0.5;
        const x1 = Math.cos(-halfSpread) * length;
        const y1 = Math.sin(-halfSpread) * length;
        const x2 = Math.cos(halfSpread) * length;
        const y2 = Math.sin(halfSpread) * length;

        const grad = ctx.createRadialGradient(0, 0, 2, length * 0.5, 0, length);
        grad.addColorStop(0, colStart);
        grad.addColorStop(0.35, colStart.replace(/[\d\.]+\)$/, '0.65)'));
        grad.addColorStop(0.75, colEnd.replace(/[\d\.]+\)$/, '0.22)'));
        grad.addColorStop(1, colEnd);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(x1, y1);
        ctx.quadraticCurveTo(length * 1.05, 0, x2, y2);
        ctx.closePath();
        ctx.fill();
        ctx.restore();
    };

    // Radial Glow / Soft Light Pool
    VTT_FX.drawRadialGlow = function(ctx, x, y, innerR, outerR, colInner, colOuter) {
        ctx.save();
        const grad = ctx.createRadialGradient(x, y, Math.max(0.1, innerR), x, y, Math.max(innerR + 1, outerR));
        grad.addColorStop(0, colInner);
        grad.addColorStop(1, colOuter);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, outerR, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    };

    // Fast CRT Scanline / Hologram Overlay
    VTT_FX.drawScanlines = function(ctx, x, y, w, h, spacing, opacity) {
        ctx.save();
        ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
        for (let py = y; py < y + h; py += spacing) {
            ctx.fillRect(x, py, w, 1);
        }
        ctx.restore();
    };

    // Path Resampling Utility for linear motion along curves
    VTT_FX.samplePath = function(path, stepDist) {
        if (!path || path.length < 2) return path || [];
        const samples = [path[0]];
        let accum = 0;
        const step = Math.max(10, stepDist || 20);

        for (let i = 1; i < path.length; i++) {
            const pA = path[i - 1];
            const pB = path[i];
            const segLen = Math.hypot(pB.x - pA.x, pB.y - pA.y);
            if (segLen === 0) continue;
            accum += segLen;
            while (accum >= step) {
                accum -= step;
                const ratio = 1 - (accum / segLen);
                samples.push({
                    x: pA.x + (pB.x - pA.x) * ratio,
                    y: pA.y + (pB.y - pA.y) * ratio
                });
            }
        }
        if (samples.length < 2) samples.push(path[path.length - 1]);
        return samples;
    };

    // Default Linear Path Generator when placed as a rectangle rather than drawn
    VTT_FX.getDefaultLinearPoints = function(W, H, direction) {
        // default: horizontal left-to-right through center
        if (direction === 'vertical') {
            return [{ x: W * 0.5, y: 0 }, { x: W * 0.5, y: H }];
        }
        if (direction === 'diagonal') {
            return [{ x: 0, y: 0 }, { x: W, y: H }];
        }
        return [{ x: 0, y: H * 0.5 }, { x: W, y: H * 0.5 }];
    };

    // Soft Dust / Spark Particle
    VTT_FX.drawParticle = function(ctx, x, y, r, colorRgba, glow) {
        ctx.save();
        if (glow) {
            ctx.shadowColor = glow;
            ctx.shadowBlur = r * 2.5;
        }
        ctx.fillStyle = colorRgba;
        ctx.beginPath();
        ctx.arc(x, y, Math.max(0.5, r), 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    };

})();
