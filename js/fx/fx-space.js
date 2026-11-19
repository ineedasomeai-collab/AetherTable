/**
 * AetherTable VTT - Deep Space & Cosmic FX (75 Unique Elements)
 * Procedural Canvas Renderers for Elements 151 through 225.
 * Every element features bespoke geometry, distinct kinetic animation,
 * and dynamic integration with the Fractal / Detail slider.
 */
(function() {
    'use strict';
    const reg = window.VTT_FX_DISPATCHER ? window.VTT_FX_DISPATCHER.register : null;
    if (!reg) return;
    const FX = window.VTT_FX || {};

    // =========================================================================
    // A. LINEAR MOTION (151 - 175)
    // =========================================================================

    // 151. FTL Star-Streak Warp
    reg(['ds_ftl_starstreak', 'item_151'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#02040a';
        ctx.fillRect(0, 0, W, H);
        const stars = Math.round(35 + rough * 45);
        ctx.strokeStyle = `rgba(240, 249, 255, ${0.9 * intensity})`;
        ctx.lineWidth = 1.5;
        for (let s = 0; s < stars; s++) {
            const sx = (FX.hash(s * 19) * W + time * 650 * speed) % (W + 200) - 100;
            const sy = FX.hash(s * 37) * H;
            const len = (45 + (s % 5) * 25) * elScale;
            ctx.beginPath();
            ctx.moveTo(sx - len, sy); ctx.lineTo(sx, sy);
            ctx.stroke();
            FX.drawRadialGlow(ctx, sx, sy, 1, 4, '#ffffff', 'rgba(56, 189, 248, 0)');
        }
    });

    // 152. Runway Approach Lights
    reg(['ds_runway_lights', 'item_152'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        // Docking bay floor runway
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(0, cy - 20 * elScale, W, 40 * elScale);
        // Sequenced amber approach strobe lights
        const lights = 8;
        const phase = (time * 5 * speed) % lights;
        for (let l = 0; l < lights; l++) {
            const lx = (W / lights) * (l + 0.5);
            const active = (Math.floor(phase) === l);
            const col = active ? `rgba(245, 158, 11, ${0.98 * intensity})` : 'rgba(120, 53, 15, 0.4)';
            FX.drawRadialGlow(ctx, lx, cy - 14 * elScale, 1, active ? 16 * elScale : 4, col, 'rgba(245, 158, 11, 0)');
            FX.drawRadialGlow(ctx, lx, cy + 14 * elScale, 1, active ? 16 * elScale : 4, col, 'rgba(245, 158, 11, 0)');
        }
    });

    // 153. Solar Flare Radiation Wave
    reg(['ds_solar_flare_wave', 'item_153'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const waveX = ((time * 140 * speed) % (W + 150)) - 75;
        const flareGrad = ctx.createLinearGradient(waveX - 80, 0, waveX + 80, 0);
        flareGrad.addColorStop(0, 'rgba(234, 88, 12, 0)');
        flareGrad.addColorStop(0.5, `rgba(254, 240, 138, ${0.85 * intensity})`);
        flareGrad.addColorStop(1, 'rgba(234, 88, 12, 0)');
        ctx.fillStyle = flareGrad;
        ctx.fillRect(waveX - 80, 0, 160, H);
        // Ionized radiation filaments
        for (let f = 0; f < 6; f++) {
            const fy = f * (H / 6);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.9 * intensity})`;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(waveX - 40, fy);
            ctx.quadraticCurveTo(waveX + 30, fy + Math.sin(time * 6 + f) * 18, waveX + 60, fy);
            ctx.stroke();
        }
    });

    // 154. Tactical Sensor Sweep
    reg(['ds_sensor_sweep', 'item_154'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#05070f';
        ctx.fillRect(0, 0, W, H);
        const sweepX = ((time * 160 * speed) % (W + 60)) - 30;
        // Green radar/sensor scan beam line
        const scanGrad = ctx.createLinearGradient(sweepX - 45, 0, sweepX, 0);
        scanGrad.addColorStop(0, 'rgba(16, 185, 129, 0)');
        scanGrad.addColorStop(1, `rgba(52, 211, 153, ${0.9 * intensity})`);
        ctx.fillStyle = scanGrad;
        ctx.fillRect(sweepX - 45, 0, 45, H);
        ctx.strokeStyle = '#34d399';
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.moveTo(sweepX, 0); ctx.lineTo(sweepX, H); ctx.stroke();
    });

    // 155. Evacuation Light Chevrons
    reg(['ds_evac_chevrons', 'item_155'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        ctx.fillStyle = '#090d16';
        ctx.fillRect(0, cy - 14 * elScale, W, 28 * elScale);
        const chevrons = 8;
        const phase = (time * 6 * speed) % chevrons;
        ctx.lineWidth = 3.5;
        for (let c = 0; c < chevrons; c++) {
            const cx = (W / chevrons) * c;
            const active = ((c + Math.floor(phase)) % chevrons < 3);
            ctx.strokeStyle = active ? `rgba(239, 68, 68, ${0.95 * intensity})` : 'rgba(127, 29, 29, 0.4)';
            ctx.beginPath();
            ctx.moveTo(cx, cy - 10 * elScale);
            ctx.lineTo(cx + 12 * elScale, cy);
            ctx.lineTo(cx, cy + 10 * elScale);
            ctx.stroke();
        }
    });

    // 156. Laser Defense Grid
    reg(['ds_decompression_wind', 'item_156', 'ds_laser_defense_grid'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#020617';
        ctx.fillRect(0, 0, W, H);
        const beams = Math.round(4 + rough * 5);
        ctx.lineWidth = 2.0;
        ctx.shadowColor = '#06b6d4';
        ctx.shadowBlur = 10;
        for (let b = 0; b < beams; b++) {
            const startY = (H / (beams + 1)) * (b + 1);
            const sweep = Math.sin(time * 3 * speed + b) * (H * 0.3);
            ctx.strokeStyle = `rgba(6, 182, 212, ${0.9 * intensity})`;
            ctx.beginPath();
            ctx.moveTo(0, startY); ctx.lineTo(W, startY + sweep);
            ctx.stroke();
        }
        ctx.shadowBlur = 0;
    });

    // 157. Plasma Exhaust Plume
    reg(['ds_plasma_coolant_arc', 'item_157', 'ds_plasma_exhaust_plume'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        // Engine bell nozzle on left
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(0, cy - 20 * elScale, 24 * elScale, 40 * elScale);
        // Blinding cyan plasma plume
        const plumeLen = W * 0.9;
        const plumeGrad = ctx.createLinearGradient(24 * elScale, 0, 24 * elScale + plumeLen, 0);
        plumeGrad.addColorStop(0, '#ffffff');
        plumeGrad.addColorStop(0.2, `rgba(56, 189, 248, ${0.95 * intensity})`);
        plumeGrad.addColorStop(0.7, `rgba(14, 165, 233, ${0.65 * intensity})`);
        plumeGrad.addColorStop(1, 'rgba(2, 132, 199, 0)');
        ctx.fillStyle = plumeGrad;
        ctx.beginPath();
        ctx.moveTo(24 * elScale, cy - 14 * elScale);
        ctx.lineTo(24 * elScale + plumeLen, cy);
        ctx.lineTo(24 * elScale, cy + 14 * elScale);
        ctx.closePath();
        ctx.fill();
        // Shock diamonds inside plume
        for (let d = 1; d <= 4; d++) {
            const dx = 24 * elScale + d * (35 * elScale);
            FX.drawRadialGlow(ctx, dx, cy, 1, 10 * elScale, '#ffffff', 'rgba(56, 189, 248, 0)');
        }
    });

    // 158. Magnetic Catapult Launch Rail
    reg(['ds_micrometeoroid_shower', 'item_158', 'ds_magnetic_catapult'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        // Acceleration coil rings
        const rings = 6;
        for (let r = 0; r < rings; r++) {
            const rx = (W / rings) * (r + 0.5);
            ctx.strokeStyle = '#475569';
            ctx.lineWidth = 4 * elScale;
            ctx.strokeRect(rx - 6, cy - 25 * elScale, 12, 50 * elScale);
        }
        // High-velocity probe launching through coils
        const probeX = ((time * 480 * speed) % (W + 120)) - 60;
        ctx.fillStyle = '#38bdf8';
        ctx.fillRect(probeX - 16 * elScale, cy - 6 * elScale, 32 * elScale, 12 * elScale);
        FX.drawRadialGlow(ctx, probeX + 16 * elScale, cy, 1, 24 * elScale, '#ffffff', 'rgba(56, 189, 248, 0)');
    });

    // 159. Space Elevator Carbon-Tether
    reg(['ds_hydraulic_bulkheads', 'item_159', 'ds_space_elevator_cable'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5;
        // Glowing vertical carbon-nanotube ribbon
        ctx.strokeStyle = `rgba(56, 189, 248, ${0.9 * intensity})`;
        ctx.lineWidth = 5 * elScale;
        ctx.shadowColor = '#38bdf8';
        ctx.shadowBlur = 12;
        ctx.beginPath(); ctx.moveTo(cx, 0); ctx.lineTo(cx, H); ctx.stroke();
        ctx.shadowBlur = 0;
        // Climber car ascending
        const carY = (H - ((time * 90 * speed) % (H + 40)));
        ctx.fillStyle = '#f8fafc';
        ctx.fillRect(cx - 12 * elScale, carY, 24 * elScale, 20 * elScale);
    });

    // 160. Meteor Fragment Atmospheric Streak
    reg(['ds_mining_laser', 'item_160', 'ds_meteor_fragment_streak'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        const meteorX = ((time * 420 * speed) % (W + 150)) - 75;
        // Fiery ionized trail
        const trailLen = 120 * elScale;
        const trailGrad = ctx.createLinearGradient(meteorX - trailLen, cy, meteorX, cy);
        trailGrad.addColorStop(0, 'rgba(234, 88, 12, 0)');
        trailGrad.addColorStop(0.7, `rgba(251, 146, 60, ${0.85 * intensity})`);
        trailGrad.addColorStop(1, '#ffffff');
        ctx.strokeStyle = trailGrad;
        ctx.lineWidth = 3.5;
        ctx.beginPath(); ctx.moveTo(meteorX - trailLen, cy); ctx.lineTo(meteorX, cy); ctx.stroke();
        FX.drawRadialGlow(ctx, meteorX, cy, 2, 18 * elScale, '#ffffff', 'rgba(234, 88, 12, 0)');
    });

    // 161. Pressurized Docking Umbilical Tube
    reg(['ds_fuelrod_rails', 'item_161', 'ds_docking_umbilical_tube'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        const tubeH = 34 * elScale;
        // Accordion bellows ribbed tube
        ctx.fillStyle = '#334155';
        ctx.fillRect(0, cy - tubeH * 0.5, W, tubeH);
        ctx.strokeStyle = '#0f172a';
        ctx.lineWidth = 2;
        for (let x = 0; x < W; x += 14) {
            ctx.beginPath(); ctx.moveTo(x, cy - tubeH * 0.5); ctx.lineTo(x, cy + tubeH * 0.5); ctx.stroke();
        }
        // Interior walkway lights glowing through observation ports
        for (let x = 20; x < W; x += 40) {
            FX.drawRadialGlow(ctx, x, cy, 1, 8 * elScale, `rgba(254, 240, 138, ${0.8 * intensity})`, 'rgba(254, 240, 138, 0)');
        }
    });

    // 162. Cargo Crane Gantry
    reg(['ds_tracked_repair_drone', 'item_162', 'ds_cargo_crane_gantry'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(0, cy - 6, W, 12);
        // Automated gantry hoist carrying cargo pod
        const hoistX = W * (0.3 + 0.4 * Math.sin(time * 0.8 * speed));
        ctx.save();
        ctx.translate(hoistX, cy);
        ctx.fillStyle = '#eab308';
        ctx.fillRect(-18 * elScale, -12 * elScale, 36 * elScale, 24 * elScale);
        // Suspended shipping container
        ctx.fillStyle = '#2563eb';
        ctx.fillRect(-16 * elScale, 20 * elScale, 32 * elScale, 18 * elScale);
        ctx.restore();
    });

    // 163. Service Rail Maintenance Droid
    reg(['ds_antigrav_lift', 'item_163', 'ds_service_rail_droid'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        // Exterior hull guide rail
        ctx.strokeStyle = '#475569'; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(0, cy); ctx.lineTo(W, cy); ctx.stroke();
        // Droid crawling along rail
        const droidX = ((time * 75 * speed) % (W + 60)) - 30;
        ctx.save();
        ctx.translate(droidX, cy);
        ctx.fillStyle = '#f8fafc';
        ctx.beginPath(); ctx.arc(0, -6 * elScale, 10 * elScale, 0, Math.PI * 2); ctx.fill();
        // Blinking welding laser
        if (Math.sin(time * 12) > 0.4) {
            FX.drawRadialGlow(ctx, 8 * elScale, -6 * elScale, 1, 12, '#ffffff', 'rgba(56, 189, 248, 0)');
        }
        ctx.restore();
    });

    // 164. Cryo-Coolant Chute
    reg(['ds_space_elevator', 'item_164', 'ds_cryo_coolant_chute'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(0, cy - 16 * elScale, W, 32 * elScale);
        // Rushing liquid nitrogen coolant
        const coolGrad = ctx.createLinearGradient(0, cy - 12 * elScale, 0, cy + 12 * elScale);
        coolGrad.addColorStop(0, '#0284c7');
        coolGrad.addColorStop(0.5, `rgba(224, 242, 254, ${0.9 * intensity})`);
        coolGrad.addColorStop(1, '#0369a1');
        ctx.fillStyle = coolGrad;
        ctx.fillRect(0, cy - 12 * elScale, W, 24 * elScale);
    });

    // 165. Automated Ore Sorter Conveyor
    reg(['ds_docking_clamps', 'item_165', 'ds_conveyor_sorter'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(0, cy - 18 * elScale, W, 36 * elScale);
        // Traveling space ore chunks
        for (let c = 0; c < 5; c++) {
            const cxChunk = ((c * (W / 5) + time * 65 * speed) % (W + 40)) - 20;
            ctx.fillStyle = (c % 2 === 0) ? '#38bdf8' : '#e2e8f0';
            ctx.beginPath(); ctx.arc(cxChunk, cy, 7 * elScale, 0, Math.PI * 2); ctx.fill();
        }
    });

    // 166. Hyper-Velocity Railgun Slug
    reg(['ds_ion_thruster_plume', 'item_166', 'ds_railgun_slug_tracer'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        const slugX = ((time * 650 * speed) % (W + 200)) - 100;
        const tracerGrad = ctx.createLinearGradient(slugX - 140 * elScale, cy, slugX, cy);
        tracerGrad.addColorStop(0, 'rgba(56, 189, 248, 0)');
        tracerGrad.addColorStop(0.8, `rgba(56, 189, 248, ${0.9 * intensity})`);
        tracerGrad.addColorStop(1, '#ffffff');
        ctx.strokeStyle = tracerGrad;
        ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(slugX - 140 * elScale, cy); ctx.lineTo(slugX, cy); ctx.stroke();
        FX.drawRadialGlow(ctx, slugX, cy, 1, 14 * elScale, '#ffffff', 'rgba(56, 189, 248, 0)');
    });

    // 167. Coherent Particle Beam Lance
    reg(['ds_holo_sonar_ping', 'item_167', 'ds_particle_beam_lance'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        // Continuous blinding ruby particle beam
        ctx.strokeStyle = `rgba(239, 68, 68, ${0.95 * intensity})`;
        ctx.lineWidth = 4 * elScale;
        ctx.shadowColor = '#ef4444';
        ctx.shadowBlur = 14;
        ctx.beginPath(); ctx.moveTo(0, cy); ctx.lineTo(W, cy); ctx.stroke();
        // Blinding white core
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1.5 * elScale;
        ctx.beginPath(); ctx.moveTo(0, cy); ctx.lineTo(W, cy); ctx.stroke();
        ctx.shadowBlur = 0;
    });

    // 168. Deflector Shield Collapse
    reg(['ds_transporter_beam', 'item_168', 'ds_shield_collapse_wave'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const collapseX = ((time * 220 * speed) % (W + 80)) - 40;
        ctx.strokeStyle = `rgba(239, 68, 68, ${0.85 * intensity})`;
        ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(collapseX, 0); ctx.lineTo(collapseX, H); ctx.stroke();
        // Shattered hex shards
        for (let s = 0; s < 8; s++) {
            const sy = s * (H / 8) + 10;
            ctx.strokeRect(collapseX - 15, sy - 10, 20, 20);
        }
    });

    // 169. Tachyon Spacetime Rift
    reg(['ds_containment_ripple', 'item_169', 'ds_tachyon_rift_crack'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        // Jagged violet tear in space
        ctx.strokeStyle = `rgba(168, 85, 247, ${0.95 * intensity})`;
        ctx.lineWidth = 3.5;
        ctx.shadowColor = '#a855f7';
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.moveTo(0, cy);
        for (let x = 30; x < W; x += 30) {
            ctx.lineTo(x, cy + (FX.hash(x + Math.floor(time * 6)) - 0.5) * 25);
        }
        ctx.lineTo(W, cy);
        ctx.stroke();
        ctx.shadowBlur = 0;
    });

    // 170. Hull Decompression Blast
    reg(['ds_nitrogen_coolant_vent', 'item_170', 'ds_decompression_vent'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        // Hull opening on left
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(0, cy - 25 * elScale, 15, 50 * elScale);
        // Expanding vacuum blast plume
        FX.drawVolumetricCone(ctx, 15, cy, 0, W * 0.85, 0.65, `rgba(240, 249, 255, ${0.85 * intensity})`, 'rgba(56, 189, 248, 0)');
    });

    // 171. Asteroid Belt Debris Stream
    reg(['ds_tumbling_asteroids', 'item_171', 'ds_asteroid_debris_stream'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        const rocks = Math.round(15 + rough * 20);
        for (let r = 0; r < rocks; r++) {
            const rx = ((r * (W / rocks) + time * 45 * speed) % (W + 60)) - 30;
            const ry = cy + Math.sin(r * 2.5) * (H * 0.35);
            ctx.fillStyle = (r % 2 === 0) ? '#64748b' : '#475569';
            ctx.beginPath(); ctx.arc(rx, ry, (4 + (r % 4) * 3) * elScale, 0, Math.PI * 2); ctx.fill();
        }
    });

    // 172. Solar Wind Aurora Curtains
    reg(['ds_satellite_debris', 'item_172', 'ds_solar_wind_aurora'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const auroraGrad = ctx.createLinearGradient(0, 0, 0, H);
        auroraGrad.addColorStop(0, `rgba(52, 211, 153, ${0.45 * intensity})`);
        auroraGrad.addColorStop(0.5, `rgba(168, 85, 247, ${0.4 * intensity})`);
        auroraGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = auroraGrad;
        ctx.fillRect(0, 0, W, H);
        // Shimmering vertical curtain folds
        for (let x = 0; x < W; x += 35) {
            const h = H * (0.4 + 0.3 * Math.sin(time * 2 * speed + x * 0.05));
            ctx.fillStyle = `rgba(110, 231, 183, ${0.35 * intensity})`;
            ctx.fillRect(x, 0, 15, h);
        }
    });

    // 173. Derelict Satellite Debris Tumbling
    reg(['ds_zerog_water_droplets', 'item_173', 'ds_satellite_debris'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        const items = 3;
        for (let i = 0; i < items; i++) {
            const ix = ((time * 40 * speed + i * (W * 0.35)) % (W + 60)) - 30;
            const iy = cy + Math.sin(time + i) * 15;
            ctx.save();
            ctx.translate(ix, iy);
            ctx.rotate(time * 1.5 + i);
            ctx.fillStyle = '#fbbf24'; // Gold foil solar panel
            ctx.fillRect(-12 * elScale, -6 * elScale, 24 * elScale, 12 * elScale);
            ctx.restore();
        }
    });

    // 174. Autonomous Survey Probe Sweep
    reg(['ds_nebula_drift', 'item_174', 'ds_survey_probe_sweep'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        const probeX = ((time * 95 * speed) % (W + 60)) - 30;
        ctx.fillStyle = '#f8fafc';
        ctx.beginPath(); ctx.arc(probeX, cy, 6 * elScale, 0, Math.PI * 2); ctx.fill();
        // Sweeping sensor cones
        FX.drawVolumetricCone(ctx, probeX, cy, time * 2, 70 * elScale, 0.5, `rgba(56, 189, 248, ${0.5 * intensity})`, 'rgba(56, 189, 248, 0)');
    });

    // 175. Hydrazine Fuel Leak Droplets
    reg(['ds_planetary_rings', 'item_175', 'ds_fuel_leak_droplets'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cy = H * 0.5;
        const drops = Math.round(15 + rough * 20);
        for (let d = 0; d < drops; d++) {
            const dx = ((d * (W / drops) + time * 70 * speed) % (W + 40)) - 20;
            const dy = cy + Math.sin(time * 3 + d) * (18 * elScale);
            ctx.fillStyle = `rgba(244, 114, 182, ${0.85 * intensity})`;
            ctx.beginPath(); ctx.arc(dx, dy, 3.5 * elScale, 0, Math.PI * 2); ctx.fill();
        }
    });

    // =========================================================================
    // B. ANIMATED TEXTURES & AREA-FILLS (176 - 200)
    // =========================================================================

    // 176. Rotating Pulsar Radiation Sweeps
    reg(['ds_cherenkov_radiation', 'item_176', 'ds_pulsar_beam_sweep'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#030712';
        ctx.fillRect(0, 0, W, H);
        const rot = time * 3.5 * speed;
        FX.drawVolumetricCone(ctx, W * 0.5, H * 0.5, rot, Math.max(W, H) * 0.8, 0.55, `rgba(168, 85, 247, ${0.75 * intensity})`, 'rgba(168, 85, 247, 0)');
        FX.drawVolumetricCone(ctx, W * 0.5, H * 0.5, rot + Math.PI, Math.max(W, H) * 0.8, 0.55, `rgba(56, 189, 248, ${0.75 * intensity})`, 'rgba(56, 189, 248, 0)');
    });

    // 177. Zero-G Bioluminescent Moss
    reg(['ds_redalert_strobes', 'item_177', 'ds_biolum_moss_hydroponics'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#064e3b';
        ctx.fillRect(0, 0, W, H);
        const patches = Math.round(20 + rough * 30);
        for (let p = 0; p < patches; p++) {
            const px = FX.hash(p * 17) * W;
            const py = FX.hash(p * 31) * H;
            const pulse = 0.7 + 0.3 * Math.sin(time * 2 * speed + p);
            FX.drawRadialGlow(ctx, px, py, 1, 14 * elScale, `rgba(52, 211, 153, ${pulse * intensity})`, 'rgba(5, 150, 105, 0)');
        }
    });

    // 178. Viewport Starlight Wash
    reg(['ds_biolum_moss', 'item_178', 'ds_viewport_starlight_wash'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#030712';
        ctx.fillRect(0, 0, W, H);
        FX.drawRadialGlow(ctx, W * 0.5, H * 0.4, 10, Math.max(W, H) * 0.65, `rgba(186, 230, 253, ${0.45 * intensity})`, 'rgba(15, 23, 42, 0)');
    });

    // 179. Hull Breach Red Alert Strobes
    reg(['ds_void_starlight', 'item_179', 'ds_emergency_red_strobe'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(0, 0, W, H);
        const strobe = (Math.sin(time * 6 * speed) > 0);
        if (strobe) {
            ctx.fillStyle = `rgba(239, 68, 68, ${0.55 * intensity})`;
            ctx.fillRect(0, 0, W, H);
        }
    });

    // 180. Antimatter Reactor Ambient Glow
    reg(['ds_quantum_proc_grid', 'item_180', 'ds_reactor_core_ambient_glow'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#020617';
        ctx.fillRect(0, 0, W, H);
        const pulse = 0.8 + 0.2 * Math.sin(time * 3 * speed);
        FX.drawRadialGlow(ctx, W * 0.5, H * 0.5, 15, Math.min(W, H) * 0.5, `rgba(56, 189, 248, ${pulse * intensity})`, 'rgba(2, 132, 199, 0)');
    });

    // 181. Decompression Void Suction
    reg(['ds_radioactive_coolant_flood', 'item_181', 'ds_hull_breach_decompression'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#090d16';
        ctx.fillRect(0, 0, W, H);
        const breachX = W * 0.5, breachY = H * 0.5;
        // Cyclone swirling toward breach
        const debris = 15;
        for (let d = 0; d < debris; d++) {
            const phase = (time * 1.5 * speed + d * 0.1) % 1.0;
            const dist = (1 - phase) * (Math.min(W, H) * 0.45);
            const ang = d * 1.2 + time * 5;
            ctx.fillStyle = '#e2e8f0';
            ctx.fillRect(breachX + Math.cos(ang) * dist, breachY + Math.sin(ang) * dist, 3, 3);
        }
    });

    // 182. Zero-G Plasma Fire Balls
    reg(['ds_alien_biomass', 'item_182', 'ds_plasma_fire_conflagration'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#0a0a14';
        ctx.fillRect(0, 0, W, H);
        const balls = 5;
        for (let b = 0; b < balls; b++) {
            const bx = W * (0.3 + (b % 3) * 0.25) + Math.sin(time + b) * 15;
            const by = H * (0.3 + Math.floor(b / 3) * 0.4) + Math.cos(time + b) * 15;
            FX.drawRadialGlow(ctx, bx, by, 2, 28 * elScale, `rgba(168, 85, 247, ${0.85 * intensity})`, 'rgba(126, 34, 206, 0)');
        }
    });

    // 183. Xenomorph Acid Sizzle Pool
    reg(['ds_frost_fractals', 'item_183', 'ds_corrosive_xenomorph_acid'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(0, 0, W, H);
        // Bright neon-yellow acid sizzle
        const acidGrad = ctx.createRadialGradient(W * 0.5, H * 0.5, 5, W * 0.5, H * 0.5, Math.min(W, H) * 0.45);
        acidGrad.addColorStop(0, `rgba(234, 179, 8, ${0.9 * intensity})`);
        acidGrad.addColorStop(1, '#713f12');
        ctx.fillStyle = acidGrad;
        ctx.beginPath(); ctx.arc(W * 0.5, H * 0.5, Math.min(W, H) * 0.45, 0, Math.PI * 2); ctx.fill();
        // Hissing white acid vapor
        for (let s = 0; s < 6; s++) {
            const sx = W * 0.5 + Math.sin(time * 4 + s) * 20;
            const sy = H * 0.5 - ((time * 30 + s * 10) % 35);
            FX.drawRadialGlow(ctx, sx, sy, 1, 8 * elScale, 'rgba(255, 255, 255, 0.45)', 'rgba(255, 255, 255, 0)');
        }
    });

    // 184. Overheating Fusion Meltdown Core
    reg(['ds_ion_storm_deck', 'item_184', 'ds_reactor_meltdown_core'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#1c1917';
        ctx.fillRect(0, 0, W, H);
        FX.drawRadialGlow(ctx, W * 0.5, H * 0.5, 10, Math.min(W, H) * 0.55, `rgba(255, 255, 255, ${0.98 * intensity})`, 'rgba(239, 68, 68, 0)');
    });

    // 185. Zero-G Floating Fuel Clumps
    reg(['ds_xenospore_quarantine', 'item_185', 'ds_zero_g_fuel_spill'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#090d16';
        ctx.fillRect(0, 0, W, H);
        const clumps = 6;
        for (let c = 0; c < clumps; c++) {
            const cx = (FX.hash(c * 19) * W) + Math.sin(time * 1.5 + c) * 15;
            const cy = (FX.hash(c * 37) * H) + Math.cos(time * 1.2 + c) * 15;
            FX.drawRadialGlow(ctx, cx, cy, 2, (12 + c * 3) * elScale, `rgba(244, 114, 182, ${0.75 * intensity})`, 'rgba(219, 39, 119, 0)');
        }
    });

    // 186. Stacked Hexagonal Cargo Pods
    reg(['ds_hydroponic_beds', 'item_186', 'ds_stacked_cargo_pods'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(0, 0, W, H);
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2;
        for (let x = 10; x < W; x += 45) {
            for (let y = 10; y < H; y += 45) {
                ctx.strokeRect(x, y, 35, 35);
                ctx.fillStyle = '#0284c7';
                ctx.fillRect(x + 4, y + 4, 6, 6);
            }
        }
    });

    // 187. Supercomputer Quantum Core
    reg(['ds_cryopod_honeycomb', 'item_187', 'ds_server_supercomputer_arrays'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#020617';
        ctx.fillRect(0, 0, W, H);
        for (let y = 12; y < H; y += 24) {
            ctx.fillStyle = `rgba(56, 189, 248, ${0.75 * intensity})`;
            for (let x = 12; x < W; x += 18) {
                if (FX.hash2D(x, y + Math.floor(time * 6)) > 0.4) {
                    ctx.fillRect(x, y, 8, 4);
                }
            }
        }
    });

    // 188. Orbital Solar Panel Array
    reg(['ds_drone_charging_floor', 'item_188', 'ds_orbital_solar_arrays'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#1e3a8a';
        ctx.fillRect(0, 0, W, H);
        ctx.strokeStyle = '#fbbf24';
        ctx.lineWidth = 1.5;
        for (let x = 0; x < W; x += 30) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
        for (let y = 0; y < H; y += 30) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }
    });

    // 189. Life-Support Algae Oxygen Pool
    reg(['ds_ore_conveyor_crusher', 'item_189', 'ds_algae_filtration_pool'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#047857';
        ctx.fillRect(0, 0, W, H);
        for (let b = 0; b < 12; b++) {
            const bx = FX.hash(b * 13) * W;
            const by = (H - ((time * 40 * speed + b * 20) % H));
            ctx.fillStyle = `rgba(209, 250, 229, ${0.85 * intensity})`;
            ctx.beginPath(); ctx.arc(bx, by, 4 * elScale, 0, Math.PI * 2); ctx.fill();
        }
    });

    // 190. Cryo-Sleep Bay Floor Pods
    reg(['ds_gyroscope_floor', 'item_190', 'ds_cryo_containment_bay'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(0, 0, W, H);
        const pods = 4;
        for (let p = 0; p < pods; p++) {
            const px = (p + 0.5) * (W / pods);
            ctx.fillStyle = '#1e293b';
            ctx.fillRect(px - 18 * elScale, 15, 36 * elScale, H - 30);
            FX.drawRadialGlow(ctx, px, H * 0.5, 2, 22 * elScale, `rgba(56, 189, 248, ${0.45 * intensity})`, 'rgba(56, 189, 248, 0)');
        }
    });

    // 191. Warp Bubble Gravitational Lensing
    reg(['ds_wormhole_tunnel', 'item_191', 'ds_warp_bubble_gravitational'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#030712';
        ctx.fillRect(0, 0, W, H);
        // Distorting concentric gravitational rings
        for (let r = 1; r <= 4; r++) {
            ctx.strokeStyle = `rgba(168, 85, 247, ${0.5 * intensity})`;
            ctx.lineWidth = 2;
            ctx.beginPath(); ctx.arc(W * 0.5, H * 0.5, r * (30 * elScale), 0, Math.PI * 2); ctx.stroke();
        }
    });

    // 192. Deflector Shield Energy Mesh
    reg(['ds_gravitational_lens', 'item_192', 'ds_hexagonal_deflector_grid'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = `rgba(56, 189, 248, ${0.15 * intensity})`;
        ctx.fillRect(0, 0, W, H);
        ctx.strokeStyle = `rgba(56, 189, 248, ${0.65 * intensity})`;
        ctx.lineWidth = 1.5;
        for (let x = 0; x < W; x += 30) {
            for (let y = 0; y < H; y += 30) {
                ctx.strokeRect(x, y, 25, 25);
            }
        }
    });

    // 193. Magnetic Containment Flashes
    reg(['ds_outpost_shield_dome', 'item_193', 'ds_antimatter_containment_spark'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#090d16';
        ctx.fillRect(0, 0, W, H);
        if (Math.sin(time * 10 * speed) > 0.3) {
            const sx = FX.hash(Math.floor(time * 8)) * W;
            const sy = FX.hash(Math.floor(time * 8) + 3) * H;
            FX.drawRadialGlow(ctx, sx, sy, 2, 35 * elScale, '#ffffff', 'rgba(168, 85, 247, 0)');
        }
    });

    // 194. Dense Volumetric Nebula Cloud
    reg(['ds_fullroom_starchart', 'item_194', 'ds_nebula_volumetric_gas'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const nebGrad = ctx.createRadialGradient(W * 0.5, H * 0.5, 10, W * 0.5, H * 0.5, Math.max(W, H) * 0.65);
        nebGrad.addColorStop(0, `rgba(168, 85, 247, ${0.65 * intensity})`);
        nebGrad.addColorStop(0.5, `rgba(236, 72, 153, ${0.45 * intensity})`);
        nebGrad.addColorStop(1, 'rgba(15, 23, 42, 0)');
        ctx.fillStyle = nebGrad;
        ctx.fillRect(0, 0, W, H);
    });

    // 195. Nanotech Hull Repair Bed
    reg(['ds_zerog_debris_field', 'item_195', 'ds_nanotech_repair_lathe'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#334155';
        ctx.fillRect(0, 0, W, H);
        const nanites = Math.round(30 + rough * 40);
        ctx.fillStyle = `rgba(56, 189, 248, ${0.9 * intensity})`;
        for (let n = 0; n < nanites; n++) {
            const nx = (FX.hash(n * 17) * W + time * 40) % W;
            const ny = FX.hash(n * 31) * H;
            ctx.fillRect(nx, ny, 2, 2);
        }
    });

    // 196. Ion Drive Convection Shimmer
    reg(['ds_air_scrubber_mist', 'item_196', 'ds_engine_room_heat_shimmer'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = 'rgba(15, 23, 42, 0.4)';
        ctx.fillRect(0, 0, W, H);
        for (let y = 10; y < H; y += 20) {
            ctx.fillStyle = `rgba(240, 249, 255, ${0.2 * intensity})`;
            ctx.fillRect(Math.sin(time * 6 + y) * 10, y, W, 4);
        }
    });

    // 197. Atmosphere Recycling Vapor
    reg(['ds_comms_dish_shadows', 'item_197', 'ds_ventilation_steam_curtain'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        for (let s = 0; s < 5; s++) {
            const sy = (s * (H / 5) + time * 35 * speed) % H;
            ctx.fillStyle = `rgba(224, 242, 254, ${(0.3 - s * 0.04) * intensity})`;
            ctx.fillRect(0, sy, W, 18 * elScale);
        }
    });

    // 198. Zero-G Cabin Debris Floating
    reg(['ds_exoplanet_spores', 'item_198', 'ds_zero_g_floating_debris'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(0, 0, W, H);
        for (let d = 0; d < 8; d++) {
            const dx = FX.hash(d * 19) * W + Math.sin(time + d) * 12;
            const dy = FX.hash(d * 43) * H + Math.cos(time + d) * 12;
            ctx.fillStyle = (d % 2 === 0) ? '#38bdf8' : '#cbd5e1';
            ctx.fillRect(dx, dy, 6 * elScale, 6 * elScale);
        }
    });

    // 199. Cosmic Ray Sensor Artifacts
    reg(['ds_xenobio_aquatank', 'item_199', 'ds_cosmic_ray_pixel_bursts'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        ctx.fillStyle = '#020617';
        ctx.fillRect(0, 0, W, H);
        if (Math.sin(time * 16 * speed) > 0.5) {
            for (let p = 0; p < 6; p++) {
                const px = FX.hash(p * 23 + Math.floor(time * 12)) * W;
                const py = FX.hash(p * 47) * H;
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(px, py, 4, 4);
            }
        }
    });

    // 200. Orbital Station Eclipse Shadow
    reg(['ds_manifold_thermal_shimmer', 'item_200', 'ds_space_station_shadow'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const shadowX = ((time * 45 * speed) % (W + 250)) - 125;
        ctx.fillStyle = `rgba(0, 0, 0, ${0.65 * intensity})`;
        ctx.beginPath(); ctx.ellipse(shadowX, H * 0.5, 90 * elScale, 45 * elScale, 0.2, 0, Math.PI * 2); ctx.fill();
    });

    // =========================================================================
    // C. SPOT / SINGLE FOCAL OBJECTS (201 - 225)
    // =========================================================================

    // 201. Deep Space Navigation Buoy
    reg(['ds_fusion_reactor_core', 'item_201', 'ds_pulsing_beacon_buoy'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        // Spherical buoy body
        ctx.fillStyle = '#1e293b';
        ctx.beginPath(); ctx.arc(cx, cy, 22 * elScale, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 2.5;
        ctx.stroke();
        // Pulsing navigation strobe
        const pulse = Math.sin(time * 4 * speed) > 0.4;
        FX.drawRadialGlow(ctx, cx, cy, 2, 45 * elScale, pulse ? `rgba(245, 158, 11, ${0.98 * intensity})` : 'rgba(120, 53, 15, 0.2)', 'rgba(245, 158, 11, 0)');
    });

    // 202. Glitching Bridge Console
    reg(['ds_dangling_led_panel', 'item_202', 'ds_flickering_terminal_screen'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(cx - 35 * elScale, cy - 25 * elScale, 70 * elScale, 50 * elScale);
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2;
        ctx.strokeRect(cx - 35 * elScale, cy - 25 * elScale, 70 * elScale, 50 * elScale);
        // Radar sweep inside terminal
        ctx.save();
        ctx.translate(cx, cy);
        ctx.strokeStyle = `rgba(56, 189, 248, ${0.85 * intensity})`;
        ctx.beginPath(); ctx.arc(0, 0, 18 * elScale, 0, Math.PI * 2); ctx.stroke();
        ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(Math.cos(time * 3 * speed) * 18 * elScale, Math.sin(time * 3 * speed) * 18 * elScale); ctx.stroke();
        ctx.restore();
    });

    // 203. Bulkhead Warning Light Cluster
    reg(['ds_magnesium_flare', 'item_203', 'ds_status_light_cluster'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(cx - 28 * elScale, cy - 12 * elScale, 56 * elScale, 24 * elScale);
        const cols = ['#ef4444', '#f59e0b', '#10b981', '#38bdf8'];
        for (let c = 0; c < 4; c++) {
            const lx = cx - 21 * elScale + c * (14 * elScale);
            const on = (Math.sin(time * 5 + c) > 0);
            FX.drawRadialGlow(ctx, lx, cy, 1, 8 * elScale, on ? cols[c] : 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0)');
        }
    });

    // 204. Chem-Lum Emergency Flare Stick
    reg(['ds_quarantine_holo_icon', 'item_204', 'ds_glow_stick_marker'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        // Dropped green glow stick cylinder
        ctx.fillStyle = '#22c55e';
        ctx.fillRect(cx - 15 * elScale, cy - 3 * elScale, 30 * elScale, 6 * elScale);
        FX.drawRadialGlow(ctx, cx, cy, 2, 45 * elScale, `rgba(74, 222, 128, ${0.92 * intensity})`, 'rgba(34, 197, 94, 0)');
    });

    // 205. Maneuvering RCS Thruster Bursts
    reg(['ds_specimen_jellyfish', 'item_205', 'ds_fusion_torch_plume'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        // Thruster nozzle
        ctx.fillStyle = '#334155';
        ctx.fillRect(cx - 10 * elScale, cy - 8 * elScale, 20 * elScale, 16 * elScale);
        // Intermittent white reaction control gas burst
        if (Math.sin(time * 6 * speed) > 0.4) {
            FX.drawVolumetricCone(ctx, cx + 10 * elScale, cy, 0, 50 * elScale, 0.45, `rgba(255, 255, 255, ${0.95 * intensity})`, 'rgba(56, 189, 248, 0)');
        }
    });

    // 206. Damaged High-Voltage Plasma Relay
    reg(['ds_liquid_oxygen_spray', 'item_206', 'ds_sparking_high_voltage_relay'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(cx - 20 * elScale, cy - 20 * elScale, 40 * elScale, 40 * elScale);
        // Violent purple plasma spark discharges
        if (Math.sin(time * 14 * speed) > 0.3) {
            FX.drawRadialGlow(ctx, cx, cy, 1, 35 * elScale, '#ffffff', 'rgba(168, 85, 247, 0)');
        }
    });

    // 207. Automated Plasma Welding Head
    reg(['ds_sparking_surgical_arm', 'item_207', 'ds_plasma_cutter_torch'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        ctx.fillStyle = '#eab308';
        ctx.fillRect(cx - 8 * elScale, cy - 25 * elScale, 16 * elScale, 25 * elScale);
        // Cutting arc torch
        FX.drawRadialGlow(ctx, cx, cy, 1, 35 * elScale, '#ffffff', 'rgba(56, 189, 248, 0)');
    });

    // 208. Micro-Singularity Anomaly
    reg(['ds_alien_eggsac', 'item_208', 'ds_unstable_gravity_distortion'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        // Black event horizon core
        ctx.fillStyle = '#000000';
        ctx.beginPath(); ctx.arc(cx, cy, 14 * elScale, 0, Math.PI * 2); ctx.fill();
        // Swirling violet accretion vortex
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(time * 4 * speed);
        ctx.strokeStyle = `rgba(168, 85, 247, ${0.9 * intensity})`;
        ctx.lineWidth = 2.5;
        for (let a = 0; a < 4; a++) {
            ctx.beginPath(); ctx.arc(0, 0, (18 + a * 6) * elScale, a * 1.5, a * 1.5 + Math.PI * 0.7); ctx.stroke();
        }
        ctx.restore();
    });

    // 209. Thermal Radiator Heat Sink
    reg(['ds_plasma_capacitor_arc', 'item_209', 'ds_overheating_heat_sink'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        const heat = 0.7 + 0.3 * Math.sin(time * 3 * speed);
        ctx.fillStyle = `rgba(234, 88, 12, ${heat * intensity})`;
        for (let f = -3; f <= 3; f++) {
            ctx.fillRect(cx + f * (8 * elScale), cy - 25 * elScale, 4 * elScale, 50 * elScale);
        }
    });

    // 210. Quad Attitude Thruster
    reg(['ds_airlock_override_lever', 'item_210', 'ds_venting_thruster_quad'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        ctx.fillStyle = '#334155';
        ctx.fillRect(cx - 12 * elScale, cy - 12 * elScale, 24 * elScale, 24 * elScale);
        // 4-way gas jets
        const dirs = [0, Math.PI * 0.5, Math.PI, Math.PI * 1.5];
        for (let d = 0; d < 4; d++) {
            if (Math.sin(time * 4 * speed + d * 2) > 0.4) {
                FX.drawVolumetricCone(ctx, cx, cy, dirs[d], 35 * elScale, 0.4, 'rgba(255, 255, 255, 0.85)', 'rgba(56, 189, 248, 0)');
            }
        }
    });

    // 211. 3D Stellar Cartography Globe
    reg(['ds_holo_planet_globe', 'item_211', 'ds_holographic_star_globe'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(time * 0.8 * speed);
        ctx.strokeStyle = `rgba(56, 189, 248, ${0.85 * intensity})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.arc(0, 0, 32 * elScale, 0, Math.PI * 2); ctx.stroke();
        ctx.beginPath(); ctx.ellipse(0, 0, 32 * elScale, 14 * elScale, 0, 0, Math.PI * 2); ctx.stroke();
        // Central star
        FX.drawRadialGlow(ctx, 0, 0, 1, 8 * elScale, '#ffffff', 'rgba(56, 189, 248, 0)');
        ctx.restore();
    });

    // 212. Circular Iris Airlock Door
    reg(['ds_cryopod_hatch_open', 'item_212', 'ds_airlock_mechanism_cycling'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        ctx.strokeStyle = '#475569';
        ctx.lineWidth = 4 * elScale;
        ctx.beginPath(); ctx.arc(cx, cy, 32 * elScale, 0, Math.PI * 2); ctx.stroke();
        // Rotating iris blades
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(time * speed);
        ctx.fillStyle = '#1e293b';
        for (let b = 0; b < 6; b++) {
            ctx.rotate(Math.PI / 3);
            ctx.fillRect(0, -6 * elScale, 28 * elScale, 12 * elScale);
        }
        ctx.restore();
    });

    // 213. Individual Cryo Capsule
    reg(['ds_hull_comms_dish', 'item_213', 'ds_cryo_stasis_capsule'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        ctx.fillStyle = '#0f172a';
        ctx.fillRect(cx - 16 * elScale, cy - 32 * elScale, 32 * elScale, 64 * elScale);
        FX.drawRadialGlow(ctx, cx, cy, 2, 22 * elScale, `rgba(56, 189, 248, ${0.65 * intensity})`, 'rgba(56, 189, 248, 0)');
    });

    // 214. Medical Bay Scanner Arch
    reg(['ds_drydock_welder_arm', 'item_214', 'ds_medical_scanner_arc'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        const scanY = cy + Math.sin(time * 2 * speed) * (25 * elScale);
        ctx.strokeStyle = `rgba(56, 189, 248, ${0.9 * intensity})`;
        ctx.lineWidth = 2.5;
        ctx.beginPath(); ctx.arc(cx, scanY, 30 * elScale, Math.PI, 0); ctx.stroke();
    });

    // 215. Quantum Gyroscope Gimbal Rings
    reg(['ds_antigrav_gimbal_ring', 'item_215', 'ds_navigation_gyroscope'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.ellipse(0, 0, 32 * elScale, 32 * elScale * Math.abs(Math.cos(time * 1.5 * speed)), 0, 0, Math.PI * 2); ctx.stroke();
        ctx.strokeStyle = '#f59e0b';
        ctx.beginPath(); ctx.ellipse(0, 0, 24 * elScale * Math.abs(Math.sin(time * 1.5 * speed)), 24 * elScale, 0, 0, Math.PI * 2); ctx.stroke();
        ctx.restore();
    });

    // 216. Mini Wormhole Distortion
    reg(['ds_lab_spatial_tear', 'item_216', 'ds_wormhole_singularity'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        ctx.fillStyle = '#000000';
        ctx.beginPath(); ctx.arc(cx, cy, 12 * elScale, 0, Math.PI * 2); ctx.fill();
        FX.drawRadialGlow(ctx, cx, cy, 14 * elScale, 45 * elScale, `rgba(168, 85, 247, ${0.95 * intensity})`, 'rgba(168, 85, 247, 0)');
    });

    // 217. Transmat Teleportation Pad
    reg(['ds_escape_pod_launch', 'item_217', 'ds_quantum_transmat_pad'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.55;
        ctx.strokeStyle = '#00ffc8';
        ctx.lineWidth = 3;
        ctx.beginPath(); ctx.arc(cx, cy, 32 * elScale, 0, Math.PI * 2); ctx.stroke();
        // Ascending vertical transmat beam
        FX.drawVolumetricCone(ctx, cx, cy, -Math.PI * 0.5, 60 * elScale, 0.45, `rgba(0, 255, 200, ${0.75 * intensity})`, 'rgba(0, 255, 200, 0)');
    });

    // 218. Armed Magnetic Hull Mine
    reg(['ds_stasis_field_beam', 'item_218', 'ds_plasma_grenade_detonation'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        ctx.fillStyle = '#1e293b';
        ctx.beginPath(); ctx.arc(cx, cy, 16 * elScale, 0, Math.PI * 2); ctx.fill();
        const blink = Math.sin(time * 10 * speed) > 0;
        ctx.fillStyle = blink ? '#ef4444' : '#450a0a';
        ctx.beginPath(); ctx.arc(cx, cy, 5 * elScale, 0, Math.PI * 2); ctx.fill();
    });

    // 219. Optical Camouflage Distortion
    reg(['ds_holo_ai_avatar', 'item_219', 'ds_cloaking_distortion_shimmer'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        ctx.strokeStyle = `rgba(240, 249, 255, ${0.45 * intensity})`;
        ctx.lineWidth = 1.5;
        for (let r = 10; r < 40; r += 10) {
            ctx.beginPath(); ctx.arc(cx, cy, r * elScale + Math.sin(time * 5 + r) * 3, 0, Math.PI * 2); ctx.stroke();
        }
    });

    // 220. Security Forcefield Doorway
    reg(['ds_orbital_cannon_charge', 'item_220', 'ds_forcefield_doorway_barrier'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        ctx.fillStyle = `rgba(56, 189, 248, ${0.45 * intensity})`;
        ctx.fillRect(cx - 25 * elScale, cy - 35 * elScale, 50 * elScale, 70 * elScale);
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2;
        ctx.strokeRect(cx - 25 * elScale, cy - 35 * elScale, 50 * elScale, 70 * elScale);
    });

    // 221. Tri-Rotor Utility Drone Hovering
    reg(['ds_medbay_ecg_screen', 'item_221', 'ds_autonomous_drone_hover'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5 + Math.sin(time * 3 * speed) * 4;
        ctx.fillStyle = '#f8fafc';
        ctx.beginPath(); ctx.arc(cx, cy, 12 * elScale, 0, Math.PI * 2); ctx.fill();
        FX.drawVolumetricCone(ctx, cx, cy, Math.PI * 0.5, 45 * elScale, 0.4, 'rgba(56, 189, 248, 0.4)', 'rgba(56, 189, 248, 0)');
    });

    // 222. Zero-G Hydro-Spanner Floating
    reg(['ds_hull_cleaner_droid', 'item_222', 'ds_floating_tool_zero_g'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(time * 1.2 * speed);
        ctx.fillStyle = '#94a3b8';
        ctx.fillRect(-18 * elScale, -4 * elScale, 36 * elScale, 8 * elScale);
        ctx.restore();
    });

    // 223. Drifting Severed Cable Harness
    reg(['ds_floating_drink_pouch', 'item_223', 'ds_loose_wiring_drift'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2;
        for (let w = 0; w < 4; w++) {
            ctx.beginPath();
            ctx.moveTo(cx - 20 * elScale, cy + w * 5);
            ctx.quadraticCurveTo(cx, cy + Math.sin(time * 3 + w) * 15, cx + 20 * elScale, cy + w * 5);
            ctx.stroke();
        }
    });

    // 224. Communications Radar Dish Mast
    reg(['ds_nav_console_standby', 'item_224', 'ds_hull_exterior_sensor_mast'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        ctx.fillStyle = '#475569';
        ctx.fillRect(cx - 4 * elScale, cy - 25 * elScale, 8 * elScale, 50 * elScale);
        // Rotating radar dish
        ctx.save();
        ctx.translate(cx, cy - 25 * elScale);
        ctx.rotate(time * 2 * speed);
        ctx.strokeStyle = '#e2e8f0';
        ctx.lineWidth = 2;
        ctx.beginPath(); ctx.ellipse(0, 0, 18 * elScale, 6 * elScale, 0, 0, Math.PI * 2); ctx.stroke();
        ctx.restore();
    });

    // 225. Fighter Cockpit HUD Targeting Reticle
    reg(['ds_viewport_alien_beetle', 'item_225', 'ds_cockpit_hud_target_reticle'], function(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale) {
        const cx = W * 0.5, cy = H * 0.5;
        ctx.strokeStyle = `rgba(16, 185, 129, ${0.9 * intensity})`;
        ctx.lineWidth = 1.5;
        ctx.beginPath(); ctx.arc(cx, cy, 28 * elScale, 0, Math.PI * 2); ctx.stroke();
        ctx.beginPath(); ctx.arc(cx, cy, 8 * elScale, 0, Math.PI * 2); ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(cx - 35 * elScale, cy); ctx.lineTo(cx + 35 * elScale, cy);
        ctx.moveTo(cx, cy - 35 * elScale); ctx.lineTo(cx, cy + 35 * elScale);
        ctx.stroke();
    });

})();
