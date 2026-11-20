/**
 * AetherTable VTT - FX Master Dispatcher
 * Dispatches procedural canvas rendering calls to dedicated renderers
 * for all 375 master catalog elements.
 */
(function() {
    'use strict';

    const registry = window.VTT_FX_REGISTRY = window.VTT_FX_REGISTRY || {};

    const dispatcher = window.VTT_FX_DISPATCHER = {
        register: function(idOrIds, renderFn) {
            if (Array.isArray(idOrIds)) {
                idOrIds.forEach(function(k) {
                    if (k) registry[k] = renderFn;
                });
            } else if (idOrIds) {
                registry[idOrIds] = renderFn;
            }
        },

        has: function(id) {
            return typeof registry[id] === 'function';
        },

        findRenderer: function(el) {
            if (!el) return null;
            const cfg = el.config || {};
            const id = cfg.variant || el.type;
            if (id && typeof registry[id] === 'function') return registry[id];

            // If the user explicitly chose a variant (e.g. from the inspector dropdown)
            // that differs from this catalog element's default type and variant,
            // do NOT fall back to registry[el.type] (which would ignore the user's variant)!
            // Instead, return null so livingElementsEngine renders the bespoke variant
            // via its dedicated procedural renderer for the base type!
            const cat = (typeof window !== 'undefined' && window.FEATURE_CATALOG)
                ? (window.FEATURE_CATALOG[el.type] || window.FEATURE_CATALOG[id])
                : null;
            const defaultVariant = cat ? (cat.variant || el.type) : el.type;
            if (cfg.variant && cfg.variant !== defaultVariant && cfg.variant !== el.type && cfg.variant !== 'default') {
                return null;
            }

            if (el.type && typeof registry[el.type] === 'function') return registry[el.type];
            if (cfg.num && typeof registry['item_' + cfg.num] === 'function') return registry['item_' + cfg.num];
            if (el.num && typeof registry['item_' + el.num] === 'function') return registry['item_' + el.num];
            if (cat) {
                if (cat.variant && typeof registry[cat.variant] === 'function') return registry[cat.variant];
                if (cat.num && typeof registry['item_' + cat.num] === 'function') return registry['item_' + cat.num];
            }
            return null;
        },

        render: function(el, ctx, W, H, dt) {
            if (!el || !ctx) return false;
            const fn = this.findRenderer(el);
            if (typeof fn !== 'function') return false;

            const cfg = el.config || {};
            const time = el.stateTime || 0;
            const rough = cfg.fractalRoughness !== undefined ? parseFloat(cfg.fractalRoughness) : 0.75;
            const speed = cfg.speed !== undefined ? parseFloat(cfg.speed) : 1.0;
            const intensity = cfg.intensity !== undefined ? parseFloat(cfg.intensity) : 1.0;
            // If the host already scaled the context around the center, don't scale twice
            const rawScale = Math.max(0.2, Math.min(4.0, parseFloat(cfg.elementScale !== undefined ? cfg.elementScale : (cfg.scale || 1.0))));
            const elScale = el._motifScaled ? 1.0 : rawScale;

            try {
                ctx.save();
                ctx.shadowBlur = 0;
                ctx.shadowColor = 'rgba(0, 0, 0, 0)';
                ctx.globalAlpha = 1;
                ctx.globalCompositeOperation = 'source-over';
                ctx.setLineDash([]);
                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';
                fn(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale);
                ctx.restore();
                return true;
            } catch (err) {
                console.error('Error rendering VTT FX for element:', el && (el.config && el.config.variant || el.type), err);
                ctx.restore();
                return false;
            }
        },

        renderPath: function(el, ctx, W, H, dt, samples, strokeW, isClosed) {
            if (!el || !ctx) return false;
            const fn = this.findRenderer(el);
            if (typeof fn !== 'function') return false;

            const cfg = el.config || {};
            const time = el.stateTime || 0;
            const rough = cfg.fractalRoughness !== undefined ? parseFloat(cfg.fractalRoughness) : 0.75;
            const speed = cfg.speed !== undefined ? parseFloat(cfg.speed) : 1.0;
            const intensity = cfg.intensity !== undefined ? parseFloat(cfg.intensity) : 1.0;
            const elScale = Math.max(0.2, Math.min(4.0, parseFloat(cfg.elementScale !== undefined ? cfg.elementScale : (cfg.scale || 1.0))));

            try {
                ctx.save();
                ctx._isDrawnPath = true;
                ctx._samples = samples;
                ctx._strokeW = strokeW;
                ctx._isClosed = isClosed;
                ctx._widthVariance = cfg.widthVariance !== undefined ? parseFloat(cfg.widthVariance) : 0.0;
                fn(el, ctx, W, H, dt, cfg, time, rough, speed, intensity, elScale);
                ctx.restore();
                return true;
            } catch (err) {
                console.error('Error rendering path VTT FX:', err);
                ctx.restore();
                return false;
            }
        },

        renderSpline: function(el, ctx, samples, time, opacity, intensity, qty) {
            if (!el || !ctx) return false;
            const fn = this.findRenderer(el);
            if (typeof fn !== 'function' || !fn.isSplineRenderer) return false;

            const cfg = el.config || {};
            const W = el.canvas ? el.canvas.width : (el.width || 800);
            const H = el.canvas ? el.canvas.height : (el.height || 600);
            const rough = cfg.fractalRoughness !== undefined ? parseFloat(cfg.fractalRoughness) : 0.75;
            const speed = cfg.speed !== undefined ? parseFloat(cfg.speed) : 1.0;
            const elScale = cfg.elementScale !== undefined ? parseFloat(cfg.elementScale) : 1.0;

            try {
                ctx.save();
                ctx._isSpline = true;
                ctx._samples = samples;
                fn(el, ctx, W, H, 0.016, cfg, time, rough, speed, intensity, elScale);
                ctx.restore();
                return true;
            } catch (err) {
                console.error('Error rendering spline VTT FX:', err);
                ctx.restore();
                return false;
            }
        },

        renderPolygon: function(el, ctx, nodes, time, opacity, intensity, qty) {
            if (!el || !ctx) return false;
            const fn = this.findRenderer(el);
            if (typeof fn !== 'function' || !fn.isPolygonRenderer) return false;

            const cfg = el.config || {};
            const W = el.canvas ? el.canvas.width : (el.width || 800);
            const H = el.canvas ? el.canvas.height : (el.height || 600);
            const rough = cfg.fractalRoughness !== undefined ? parseFloat(cfg.fractalRoughness) : 0.75;
            const speed = cfg.speed !== undefined ? parseFloat(cfg.speed) : 1.0;
            const elScale = cfg.elementScale !== undefined ? parseFloat(cfg.elementScale) : 1.0;

            try {
                ctx.save();
                ctx._isPolygon = true;
                ctx._nodes = nodes;
                fn(el, ctx, W, H, 0.016, cfg, time, rough, speed, intensity, elScale);
                ctx.restore();
                return true;
            } catch (err) {
                console.error('Error rendering polygon VTT FX:', err);
                ctx.restore();
                return false;
            }
        }
    };
})();
