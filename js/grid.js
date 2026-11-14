/**
 * Grid & Physical Miniature Calibration Engine
 * Renders high-visibility tactical grids for in-person tabletop gaming
 */

class GridEngine {
    constructor() {
        this.canvas = null;
        this.ctx = null;
        this.listeners = [];

        // Grid Configuration
        this.config = {
            enabled: true,
            type: 'square', // 'square', 'hex_pointy', 'hex_flat', 'dot', 'cross', 'isometric', 'off'
            size: 64, // Cell size in pixels (calibrated to physical 1-inch)
            color: '#00ffc8',
            opacity: 0.5,
            lineWidth: 1.5,
            style: 'solid', // 'solid', 'dashed', 'dotted', 'glow'
            glowColor: '#00ffc8',
            glowIntensity: 6,
            offsetX: 0,
            offsetY: 0,
            showCoordinates: false,
            // Calibrator helper state
            showCalibrator: false,
            physicalScaleInchPx: 64 // 1 inch = X pixels
        };
    }

    init(canvasEl) {
        this.canvas = canvasEl;
        this.ctx = canvasEl.getContext('2d');
        this.loadSettings();
        this.resize();

        window.addEventListener('resize', () => {
            this.resize();
            this.render();
        });

        this.render();
    }

    onChange(callback) {
        this.listeners.push(callback);
    }

    notify() {
        this.listeners.forEach(cb => cb(this.config));
        this.saveSettings();
    }

    resize() {
        if (!this.canvas) return;
        const parent = this.canvas.parentElement;
        const rect = parent ? parent.getBoundingClientRect() : { width: window.innerWidth, height: window.innerHeight };
        this.canvas.width = rect.width || window.innerWidth;
        this.canvas.height = rect.height || window.innerHeight;
    }

    setConfig(newConfig) {
        this.config = Object.assign(this.config, newConfig);
        this.render();
        this.notify();
    }

    getState() {
        return JSON.parse(JSON.stringify(this.config));
    }

    setState(state) {
        if (!state) return;
        this.config = Object.assign(this.config, state);
        this.render();
    }

    render() {
        if (!this.ctx || !this.canvas) return;
        const ctx = this.ctx;
        const W = this.canvas.width;
        const H = this.canvas.height;

        ctx.clearRect(0, 0, W, H);

        if (!this.config.enabled || this.config.type === 'off') {
            if (this.config.showCalibrator) {
                this.renderMiniCalibrator(ctx, W, H);
            }
            return;
        }

        ctx.save();
        ctx.strokeStyle = this.config.color;
        ctx.fillStyle = this.config.color;
        ctx.globalAlpha = this.config.opacity;
        ctx.lineWidth = this.config.lineWidth;

        // Line styles
        if (this.config.style === 'dashed') {
            ctx.setLineDash([8, 6]);
        } else if (this.config.style === 'dotted') {
            ctx.setLineDash([2, 5]);
        } else {
            ctx.setLineDash([]);
        }

        // Projector High-Visibility Glow effect
        if (this.config.style === 'glow') {
            ctx.shadowColor = this.config.glowColor || this.config.color;
            ctx.shadowBlur = this.config.glowIntensity || 8;
        }

        const size = Math.max(15, this.config.size);
        const ox = (this.config.offsetX % size + size) % size;
        const oy = (this.config.offsetY % size + size) % size;

        switch (this.config.type) {
            case 'square':
                this.renderSquareGrid(ctx, W, H, size, ox, oy);
                break;
            case 'hex_pointy':
                this.renderHexGrid(ctx, W, H, size, ox, oy, true);
                break;
            case 'hex_flat':
                this.renderHexGrid(ctx, W, H, size, ox, oy, false);
                break;
            case 'dot':
                this.renderDotGrid(ctx, W, H, size, ox, oy);
                break;
            case 'cross':
                this.renderCrossGrid(ctx, W, H, size, ox, oy);
                break;
            case 'isometric':
                this.renderIsometricGrid(ctx, W, H, size, ox, oy);
                break;
        }

        ctx.restore();

        // Optional physical miniature calibrator overlay
        if (this.config.showCalibrator) {
            this.renderMiniCalibrator(ctx, W, H);
        }
    }

    renderSquareGrid(ctx, W, H, size, ox, oy) {
        ctx.beginPath();
        for (let x = ox; x <= W; x += size) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, H);
        }
        for (let y = oy; y <= H; y += size) {
            ctx.moveTo(0, y);
            ctx.lineTo(W, y);
        }
        ctx.stroke();

        // Coordinate labels (A1, B2, etc.)
        if (this.config.showCoordinates) {
            ctx.save();
            ctx.font = `${Math.min(12, size * 0.22)}px monospace`;
            ctx.fillStyle = this.config.color;
            ctx.globalAlpha = Math.min(1, this.config.opacity * 1.3);

            let colIdx = 1;
            for (let x = ox; x < W; x += size) {
                let rowIdx = 1;
                for (let y = oy; y < H; y += size) {
                    const colLetter = String.fromCharCode(64 + ((colIdx - 1) % 26) + 1);
                    const label = `${colLetter}${rowIdx}`;
                    ctx.fillText(label, x + 4, y + 14);
                    rowIdx++;
                }
                colIdx++;
            }
            ctx.restore();
        }
    }

    renderHexGrid(ctx, W, H, size, ox, oy, pointy) {
        const radius = size / 2;
        ctx.beginPath();

        if (pointy) {
            // Pointy topped hexes
            const hexHeight = radius * 2;
            const hexWidth = Math.sqrt(3) * radius;
            const horizDistance = hexWidth;
            const vertDistance = hexHeight * 0.75;

            const cols = Math.ceil(W / horizDistance) + 2;
            const rows = Math.ceil(H / vertDistance) + 2;

            for (let r = -1; r < rows; r++) {
                const y = oy + r * vertDistance;
                const xOffset = (r % 2 !== 0) ? horizDistance / 2 : 0;
                for (let c = -1; c < cols; c++) {
                    const x = ox + c * horizDistance + xOffset;
                    this.drawPointyHex(ctx, x, y, radius);
                }
            }
        } else {
            // Flat topped hexes
            const hexWidth = radius * 2;
            const hexHeight = Math.sqrt(3) * radius;
            const horizDistance = hexWidth * 0.75;
            const vertDistance = hexHeight;

            const cols = Math.ceil(W / horizDistance) + 2;
            const rows = Math.ceil(H / vertDistance) + 2;

            for (let c = -1; c < cols; c++) {
                const x = ox + c * horizDistance;
                const yOffset = (c % 2 !== 0) ? vertDistance / 2 : 0;
                for (let r = -1; r < rows; r++) {
                    const y = oy + r * vertDistance + yOffset;
                    this.drawFlatHex(ctx, x, y, radius);
                }
            }
        }
        ctx.stroke();
    }

    drawPointyHex(ctx, cx, cy, radius) {
        for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 180) * (60 * i - 30);
            const x = cx + radius * Math.cos(angle);
            const y = cy + radius * Math.sin(angle);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
    }

    drawFlatHex(ctx, cx, cy, radius) {
        for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 180) * (60 * i);
            const x = cx + radius * Math.cos(angle);
            const y = cy + radius * Math.sin(angle);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.closePath();
    }

    renderDotGrid(ctx, W, H, size, ox, oy) {
        const dotRadius = Math.max(1.5, this.config.lineWidth * 1.5);
        for (let x = ox; x <= W; x += size) {
            for (let y = oy; y <= H; y += size) {
                ctx.beginPath();
                ctx.arc(x, y, dotRadius, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }

    renderCrossGrid(ctx, W, H, size, ox, oy) {
        const arm = Math.min(10, size * 0.25);
        ctx.beginPath();
        for (let x = ox; x <= W; x += size) {
            for (let y = oy; y <= H; y += size) {
                ctx.moveTo(x - arm, y);
                ctx.lineTo(x + arm, y);
                ctx.moveTo(x, y - arm);
                ctx.lineTo(x, y + arm);
            }
        }
        ctx.stroke();
    }

    renderIsometricGrid(ctx, W, H, size, ox, oy) {
        const h = size * Math.sin(Math.PI / 6); // 30 deg
        const w = size * Math.cos(Math.PI / 6);
        ctx.beginPath();
        // 30 degree lines
        for (let y = -H; y <= H * 2; y += h * 2) {
            ctx.moveTo(0, y + oy);
            ctx.lineTo(W, y + (W / w) * h + oy);
            ctx.moveTo(0, y + oy);
            ctx.lineTo(W, y - (W / w) * h + oy);
        }
        // Vertical lines
        for (let x = ox; x <= W; x += w) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x, H);
        }
        ctx.stroke();
    }

    /**
     * Renders a real-world physical 1-inch (25mm) miniature calibration target!
     * The DM can physically set a real mini base down on the table over this box.
     */
    renderMiniCalibrator(ctx, W, H) {
        ctx.save();
        const size = this.config.size;
        const cx = W / 2;
        const cy = H / 2;

        // Dim background slightly behind calibrator
        ctx.fillStyle = 'rgba(0, 0, 0, 0.65)';
        ctx.fillRect(cx - 180, cy - 140, 360, 280);

        ctx.strokeStyle = '#ffbb00';
        ctx.lineWidth = 2;
        ctx.strokeRect(cx - 180, cy - 140, 360, 280);

        // Calibrated 1-inch (5ft RPG) box
        ctx.fillStyle = 'rgba(255, 187, 0, 0.2)';
        ctx.fillRect(cx - size / 2, cy - size / 2, size, size);

        ctx.strokeStyle = '#ffff00';
        ctx.lineWidth = 3;
        ctx.setLineDash([6, 4]);
        ctx.strokeRect(cx - size / 2, cy - size / 2, size, size);

        // Standard 25mm / 28mm mini circular base guide
        ctx.beginPath();
        ctx.arc(cx, cy, size * 0.48, 0, Math.PI * 2);
        ctx.strokeStyle = '#00ffff';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Ruler ticks along the top of the box
        ctx.setLineDash([]);
        ctx.strokeStyle = '#ffffff';
        ctx.beginPath();
        const left = cx - size / 2;
        const right = cx + size / 2;
        const top = cy - size / 2;
        for (let i = 0; i <= 8; i++) {
            const tx = left + (size * i) / 8;
            const tickH = (i === 0 || i === 8 || i === 4) ? 10 : 5;
            ctx.moveTo(tx, top);
            ctx.lineTo(tx, top - tickH);
        }
        ctx.stroke();

        // Guide text
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 15px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('PHYSICAL MINIATURE CALIBRATION', cx, cy - 105);

        ctx.font = '13px monospace';
        ctx.fillStyle = '#ffcc00';
        ctx.fillText(`Target Size: 1.0 Inch = ${size}px`, cx, cy - 85);

        ctx.fillStyle = '#dddddd';
        ctx.font = '12px sans-serif';
        ctx.fillText('1. Place physical mini base or 1" ruler on table here', cx, cy + size / 2 + 30);
        ctx.fillText('2. Adjust the Grid Size slider until box matches your mini', cx, cy + size / 2 + 50);
        ctx.fillText('3. Standard D&D / Pathfinder base: 1 inch (25.4mm)', cx, cy + size / 2 + 70);

        ctx.restore();
    }

    saveSettings() {
        try {
            localStorage.setItem('ttrpg_grid_settings', JSON.stringify(this.config));
        } catch (e) {}
    }

    loadSettings() {
        try {
            const saved = localStorage.getItem('ttrpg_grid_settings');
            if (saved) {
                this.config = Object.assign(this.config, JSON.parse(saved));
            }
        } catch (e) {}
    }
}

// Global instance
window.gridEngine = new GridEngine();
