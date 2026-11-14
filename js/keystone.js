/**
 * Keystone Correction Engine
 * 4-Point Homography / Projective Transformation using CSS 3D matrix3d
 */

class KeystoneEngine {
    constructor() {
        // Default inset (6% from screen edges) for touch safety and projector table margins
        this.defaultInset = 6.0;
        this.corners = {
            tl: { x: 6.0, y: 6.0 },
            tr: { x: 94.0, y: 6.0 },
            br: { x: 94.0, y: 94.0 },
            bl: { x: 6.0, y: 94.0 }
        };

        this.activeCorner = 'tl';
        this.isCalibrating = false;
        this.testPattern = 'grid'; // 'grid', 'circles', 'crosshair', 'none'
        this.listeners = [];

        this.viewportEl = null;
        this.calibrationOverlayEl = null;
        this.containerEl = null;

        // Micro-adjustment step
        this.nudgeStep = 0.2; // in percentage
    }

    init(containerEl, viewportEl, calibrationOverlayEl) {
        this.containerEl = containerEl;
        this.viewportEl = viewportEl;
        this.calibrationOverlayEl = calibrationOverlayEl;

        this.loadSettings();
        this.setupEventListeners();
        this.applyTransform();
        this.updateHandles();
    }

    onChange(callback) {
        this.listeners.push(callback);
    }

    notify() {
        const data = this.getState();
        this.listeners.forEach(cb => cb(data));
        this.saveSettings();
    }

    getState() {
        return {
            corners: JSON.parse(JSON.stringify(this.corners)),
            isCalibrating: this.isCalibrating,
            testPattern: this.testPattern
        };
    }

    setState(state) {
        if (!state) return;
        if (state.corners) {
            this.corners = JSON.parse(JSON.stringify(state.corners));
        }
        if (typeof state.isCalibrating === 'boolean') {
            this.setCalibrating(state.isCalibrating);
        }
        if (state.testPattern) {
            this.setTestPattern(state.testPattern);
        }
        this.applyTransform();
        this.updateHandles();
    }

    setCalibrating(enabled) {
        this.isCalibrating = enabled;
        if (this.calibrationOverlayEl) {
            this.calibrationOverlayEl.classList.toggle('active', enabled);
        }
        if (this.containerEl) {
            this.containerEl.classList.toggle('calibrating', enabled);
        }
        this.updateHandles();
        this.notify();
    }

    toggleCalibrating() {
        this.setCalibrating(!this.isCalibrating);
    }

    setTestPattern(pattern) {
        this.testPattern = pattern;
        if (this.calibrationOverlayEl) {
            this.calibrationOverlayEl.setAttribute('data-pattern', pattern);
            const patternEl = this.calibrationOverlayEl.querySelector('.test-pattern-canvas');
            if (patternEl) {
                this.renderTestPattern(patternEl);
            }
        }
        this.notify();
    }

    reset(inset = 6.0) {
        this.corners = {
            tl: { x: inset, y: inset },
            tr: { x: 100 - inset, y: inset },
            br: { x: 100 - inset, y: 100 - inset },
            bl: { x: inset, y: 100 - inset }
        };
        this.applyTransform();
        this.updateHandles();
        this.notify();
    }

    setInset(insetPct) {
        const inset = Math.max(0, Math.min(25, insetPct));
        this.corners = {
            tl: { x: inset, y: inset },
            tr: { x: 100 - inset, y: inset },
            br: { x: 100 - inset, y: 100 - inset },
            bl: { x: inset, y: 100 - inset }
        };
        this.applyTransform();
        this.updateHandles();
        this.notify();
    }

    setActiveCorner(cornerKey) {
        if (!['tl', 'tr', 'br', 'bl'].includes(cornerKey)) return;
        this.activeCorner = cornerKey;
        if (this.calibrationOverlayEl) {
            this.calibrationOverlayEl.querySelectorAll('.keystone-handle').forEach(h => {
                h.classList.toggle('selected', h.getAttribute('data-corner') === cornerKey);
            });
        }
        this.updatePanelCornerSelection(cornerKey);
    }

    updatePanelCornerSelection(cornerKey) {
        document.querySelectorAll('.keystone-corner-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-corner') === cornerKey);
        });
        const ind = document.getElementById('active-corner-indicator');
        if (ind) ind.textContent = cornerKey.toUpperCase();
    }

    nudge(cornerKey, dx, dy) {
        if (!this.corners[cornerKey]) return;
        this.corners[cornerKey].x = Math.max(-25, Math.min(125, this.corners[cornerKey].x + dx));
        this.corners[cornerKey].y = Math.max(-25, Math.min(125, this.corners[cornerKey].y + dy));
        this.applyTransform();
        this.updateHandles();
        this.notify();
    }

    /**
     * Solves the 8-parameter 2D projective transformation (Homography)
     * Maps rectangle [0,0, W, H] to arbitrary 4 points in destination space.
     */
    applyTransform() {
        if (!this.viewportEl || !this.containerEl) return;

        const rect = this.containerEl.getBoundingClientRect();
        const W = rect.width || window.innerWidth;
        const H = rect.height || window.innerHeight;

        // Source points (unwarped rectangle)
        const src = [
            { x: 0, y: 0 },
            { x: W, y: 0 },
            { x: W, y: H },
            { x: 0, y: H }
        ];

        // Destination points (warped by corners in pixels)
        const dst = [
            { x: (this.corners.tl.x / 100) * W, y: (this.corners.tl.y / 100) * H },
            { x: (this.corners.tr.x / 100) * W, y: (this.corners.tr.y / 100) * H },
            { x: (this.corners.br.x / 100) * W, y: (this.corners.br.y / 100) * H },
            { x: (this.corners.bl.x / 100) * W, y: (this.corners.bl.y / 100) * H }
        ];

        const matrix = this.computeHomography(src, dst);
        if (matrix) {
            // CSS matrix3d format (column-major order)
            const cssMatrix = [
                matrix[0].toFixed(9), matrix[3].toFixed(9), 0, matrix[6].toFixed(9),
                matrix[1].toFixed(9), matrix[4].toFixed(9), 0, matrix[7].toFixed(9),
                0, 0, 1, 0,
                matrix[2].toFixed(9), matrix[5].toFixed(9), 0, 1
            ].join(',');

            this.viewportEl.style.transformOrigin = '0 0';
            this.viewportEl.style.transform = `matrix3d(${cssMatrix})`;
        }

        // Draw visual outline on calibration overlay
        this.drawOverlayOutline(dst);
    }

    computeHomography(src, dst) {
        // Solve Ah = b for 8 unknowns
        const A = [];
        const b = [];

        for (let i = 0; i < 4; i++) {
            const u = src[i].x;
            const v = src[i].y;
            const x = dst[i].x;
            const y = dst[i].y;

            A.push([u, v, 1, 0, 0, 0, -u * x, -v * x]);
            b.push(x);
            A.push([0, 0, 0, u, v, 1, -u * y, -v * y]);
            b.push(y);
        }

        const h = this.solveGaussian(A, b);
        if (!h) return null;
        return [
            h[0], h[1], h[2],
            h[3], h[4], h[5],
            h[6], h[7], 1
        ];
    }

    solveGaussian(A, b) {
        const n = 8;
        for (let i = 0; i < n; i++) {
            let maxRow = i;
            for (let k = i + 1; k < n; k++) {
                if (Math.abs(A[k][i]) > Math.abs(A[maxRow][i])) {
                    maxRow = k;
                }
            }

            const tempA = A[i]; A[i] = A[maxRow]; A[maxRow] = tempA;
            const tempB = b[i]; b[i] = b[maxRow]; b[maxRow] = tempB;

            if (Math.abs(A[i][i]) < 1e-12) return null;

            for (let k = 0; k < n; k++) {
                if (k !== i) {
                    const factor = A[k][i] / A[i][i];
                    for (let j = i; j < n; j++) {
                        A[k][j] -= factor * A[i][j];
                    }
                    b[k] -= factor * b[i];
                }
            }
        }

        const res = [];
        for (let i = 0; i < n; i++) {
            res.push(b[i] / A[i][i]);
        }
        return res;
    }

    updateHandles() {
        if (!this.calibrationOverlayEl) return;
        const labels = {
            tl: '↖ TL',
            tr: '↗ TR',
            br: '↘ BR',
            bl: '↙ BL'
        };
        ['tl', 'tr', 'br', 'bl'].forEach(key => {
            const handle = this.calibrationOverlayEl.querySelector(`.keystone-handle[data-corner="${key}"]`);
            if (handle) {
                handle.style.left = `${this.corners[key].x}%`;
                handle.style.top = `${this.corners[key].y}%`;
                const label = handle.querySelector('.handle-coord');
                if (label) {
                    label.textContent = `${labels[key]} ${this.corners[key].x.toFixed(1)}%, ${this.corners[key].y.toFixed(1)}%`;
                }
            }
        });
    }

    drawOverlayOutline(dst) {
        if (!this.calibrationOverlayEl) return;
        const svg = this.calibrationOverlayEl.querySelector('.keystone-outline-svg');
        if (!svg) return;

        const path = svg.querySelector('polygon');
        if (path) {
            const points = dst.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(' ');
            path.setAttribute('points', points);
        }
    }

    renderTestPattern(canvas) {
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width || window.innerWidth;
        canvas.height = rect.height || window.innerHeight;
        const ctx = canvas.getContext('2d');
        const W = canvas.width;
        const H = canvas.height;

        ctx.clearRect(0, 0, W, H);

        if (this.testPattern === 'none') return;

        ctx.save();
        ctx.strokeStyle = 'rgba(0, 255, 200, 0.45)';
        ctx.lineWidth = 1;

        if (this.testPattern === 'grid' || this.testPattern === 'all') {
            // High-precision alignment grid
            const step = 40;
            ctx.beginPath();
            for (let x = 0; x <= W; x += step) {
                ctx.moveTo(x, 0);
                ctx.lineTo(x, H);
            }
            for (let y = 0; y <= H; y += step) {
                ctx.moveTo(0, y);
                ctx.lineTo(W, y);
            }
            ctx.stroke();

            // Diagonal reference lines for verifying aspect ratio and corner alignment
            ctx.strokeStyle = 'rgba(255, 100, 200, 0.5)';
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(0, 0);
            ctx.lineTo(W, H);
            ctx.moveTo(W, 0);
            ctx.lineTo(0, H);
            ctx.stroke();
        }

        if (this.testPattern === 'circles' || this.testPattern === 'all') {
            // Concentric alignment circles
            ctx.strokeStyle = 'rgba(255, 230, 0, 0.5)';
            ctx.lineWidth = 1.5;
            const cx = W / 2;
            const cy = H / 2;
            const maxR = Math.min(W, H) / 2;
            for (let r = 50; r <= maxR; r += 50) {
                ctx.beginPath();
                ctx.arc(cx, cy, r, 0, Math.PI * 2);
                ctx.stroke();
            }

            // Crosshair through center
            ctx.beginPath();
            ctx.moveTo(cx, 0);
            ctx.lineTo(cx, H);
            ctx.moveTo(0, cy);
            ctx.lineTo(W, cy);
            ctx.stroke();
        }

        // Corner 90-degree squareness test markers
        ctx.strokeStyle = 'rgba(0, 255, 100, 0.8)';
        ctx.lineWidth = 2;
        const boxSize = 60;
        // TL
        ctx.strokeRect(10, 10, boxSize, boxSize);
        // TR
        ctx.strokeRect(W - 10 - boxSize, 10, boxSize, boxSize);
        // BR
        ctx.strokeRect(W - 10 - boxSize, H - 10 - boxSize, boxSize, boxSize);
        // BL
        ctx.strokeRect(10, H - 10 - boxSize, boxSize, boxSize);

        // Center text guide
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.font = 'bold 16px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('PROJECTOR KEYSTONE CALIBRATION', W / 2, H / 2 - 20);
        ctx.font = '12px monospace';
        ctx.fillText('Adjust corner pins until lines form true rectangles on table surface', W / 2, H / 2 + 10);
        ctx.fillText('Arrow keys: Fine nudge (Shift: 5x, Alt: 0.2x)', W / 2, H / 2 + 30);

        ctx.restore();
    }

    setupEventListeners() {
        let isDragging = false;
        let dragTarget = null;
        let activePointerId = null;

        const startDrag = (cornerKey, pointerId, clientX, clientY, targetEl, e) => {
            isDragging = true;
            dragTarget = cornerKey;
            this.activeCorner = cornerKey;
            activePointerId = pointerId;

            if (targetEl && targetEl.setPointerCapture && pointerId !== undefined) {
                try {
                    targetEl.setPointerCapture(pointerId);
                } catch (err) {}
            }

            // Highlight selected handle
            if (this.calibrationOverlayEl) {
                this.calibrationOverlayEl.querySelectorAll('.keystone-handle').forEach(h => {
                    h.classList.remove('selected', 'is-dragging');
                });
                const handle = this.calibrationOverlayEl.querySelector(`.keystone-handle[data-corner="${cornerKey}"]`);
                if (handle) {
                    handle.classList.add('selected', 'is-dragging');
                }
            }

            this.updatePanelCornerSelection(cornerKey);

            if (e) {
                e.stopPropagation();
                if (e.cancelable) e.preventDefault();
            }
        };

        const moveDrag = (clientX, clientY, e) => {
            if (!isDragging || !dragTarget || !this.containerEl) return;
            const rect = this.containerEl.getBoundingClientRect();
            const px = ((clientX - rect.left) / rect.width) * 100;
            const py = ((clientY - rect.top) / rect.height) * 100;

            this.corners[dragTarget].x = Math.max(-25, Math.min(125, px));
            this.corners[dragTarget].y = Math.max(-25, Math.min(125, py));

            this.applyTransform();
            this.updateHandles();
            this.notify();

            if (e && e.cancelable) e.preventDefault();
        };

        const endDrag = (pointerId, targetEl) => {
            if (isDragging) {
                if (targetEl && targetEl.releasePointerCapture && pointerId !== undefined) {
                    try {
                        targetEl.releasePointerCapture(pointerId);
                    } catch (err) {}
                }
                if (this.calibrationOverlayEl) {
                    this.calibrationOverlayEl.querySelectorAll('.keystone-handle').forEach(h => {
                        h.classList.remove('is-dragging');
                    });
                }
                isDragging = false;
                dragTarget = null;
                activePointerId = null;
            }
        };

        // Attach modern pointer events to each handle
        if (this.calibrationOverlayEl) {
            ['tl', 'tr', 'br', 'bl'].forEach(key => {
                const handle = this.calibrationOverlayEl.querySelector(`.keystone-handle[data-corner="${key}"]`);
                if (handle) {
                    handle.addEventListener('pointerdown', (e) => {
                        startDrag(key, e.pointerId, e.clientX, e.clientY, handle, e);
                    });

                    handle.addEventListener('pointermove', (e) => {
                        if (isDragging && dragTarget === key && e.pointerId === activePointerId) {
                            moveDrag(e.clientX, e.clientY, e);
                        }
                    });

                    const stopPointer = (e) => {
                        if (isDragging && e.pointerId === activePointerId) {
                            endDrag(e.pointerId, handle);
                        }
                    };

                    handle.addEventListener('pointerup', stopPointer);
                    handle.addEventListener('pointercancel', stopPointer);

                    // Touch fallback for older tablet webviews
                    handle.addEventListener('touchstart', (e) => {
                        if (e.touches && e.touches.length > 0) {
                            const t = e.touches[0];
                            startDrag(key, t.identifier, t.clientX, t.clientY, handle, e);
                        }
                    }, { passive: false });
                }
            });
        }

        window.addEventListener('pointermove', (e) => {
            if (isDragging && e.pointerId === activePointerId) {
                moveDrag(e.clientX, e.clientY, e);
            }
        });

        window.addEventListener('pointerup', (e) => {
            if (isDragging && e.pointerId === activePointerId) {
                endDrag(e.pointerId);
            }
        });

        window.addEventListener('pointercancel', (e) => {
            if (isDragging && e.pointerId === activePointerId) {
                endDrag(e.pointerId);
            }
        });

        window.addEventListener('touchmove', (e) => {
            if (isDragging && e.touches && e.touches.length > 0) {
                const t = e.touches[0];
                moveDrag(t.clientX, t.clientY, e);
            }
        }, { passive: false });

        window.addEventListener('touchend', () => {
            if (isDragging) endDrag();
        });

        window.addEventListener('touchcancel', () => {
            if (isDragging) endDrag();
        });

        // Keyboard arrow nudging for active corner
        window.addEventListener('keydown', (e) => {
            if (!this.isCalibrating || !this.activeCorner) return;

            let step = this.nudgeStep;
            if (e.shiftKey) step *= 5;
            if (e.altKey) step *= 0.2;

            switch (e.key) {
                case 'ArrowLeft':
                    this.nudge(this.activeCorner, -step, 0);
                    e.preventDefault();
                    break;
                case 'ArrowRight':
                    this.nudge(this.activeCorner, step, 0);
                    e.preventDefault();
                    break;
                case 'ArrowUp':
                    this.nudge(this.activeCorner, 0, -step);
                    e.preventDefault();
                    break;
                case 'ArrowDown':
                    this.nudge(this.activeCorner, 0, step);
                    e.preventDefault();
                    break;
                case 'Tab':
                    // Cycle active corners
                    const order = ['tl', 'tr', 'br', 'bl'];
                    const idx = order.indexOf(this.activeCorner);
                    this.activeCorner = order[(idx + 1) % 4];
                    this.calibrationOverlayEl.querySelectorAll('.keystone-handle').forEach(h => h.classList.remove('selected'));
                    const h = this.calibrationOverlayEl.querySelector(`.keystone-handle[data-corner="${this.activeCorner}"]`);
                    if (h) h.classList.add('selected');
                    e.preventDefault();
                    break;
            }
        });

        // Window resize update
        window.addEventListener('resize', () => {
            this.applyTransform();
            this.updateHandles();
            const patternEl = this.calibrationOverlayEl?.querySelector('.test-pattern-canvas');
            if (patternEl) this.renderTestPattern(patternEl);
        });
    }

    saveSettings() {
        try {
            localStorage.setItem('ttrpg_keystone_settings', JSON.stringify(this.corners));
        } catch (e) {}
    }

    loadSettings() {
        try {
            const saved = localStorage.getItem('ttrpg_keystone_settings');
            if (saved) {
                const parsed = JSON.parse(saved);
                if (parsed.tl && parsed.tr && parsed.br && parsed.bl) {
                    // Migrate old un-inset 0%/100% outer edges to new touch-friendly inset
                    if (parsed.tl.x === 0 && parsed.tl.y === 0 &&
                        parsed.tr.x === 100 && parsed.tr.y === 0 &&
                        parsed.br.x === 100 && parsed.br.y === 100 &&
                        parsed.bl.x === 0 && parsed.bl.y === 100) {
                        this.corners = {
                            tl: { x: 6.0, y: 6.0 },
                            tr: { x: 94.0, y: 6.0 },
                            br: { x: 94.0, y: 94.0 },
                            bl: { x: 6.0, y: 94.0 }
                        };
                    } else {
                        this.corners = Object.assign(this.corners, parsed);
                    }
                }
            }
        } catch (e) {}
    }

    savePreset(name) {
        try {
            const presets = JSON.parse(localStorage.getItem('ttrpg_keystone_presets') || '{}');
            presets[name] = this.corners;
            localStorage.setItem('ttrpg_keystone_presets', JSON.stringify(presets));
            return true;
        } catch (e) {
            return false;
        }
    }

    loadPreset(name) {
        try {
            const presets = JSON.parse(localStorage.getItem('ttrpg_keystone_presets') || '{}');
            if (presets[name]) {
                this.corners = JSON.parse(JSON.stringify(presets[name]));
                this.applyTransform();
                this.updateHandles();
                this.notify();
                return true;
            }
        } catch (e) {}
        return false;
    }

    getPresets() {
        try {
            return JSON.parse(localStorage.getItem('ttrpg_keystone_presets') || '{}');
        } catch (e) {
            return {};
        }
    }
}

// Global instance
window.keystoneEngine = new KeystoneEngine();
