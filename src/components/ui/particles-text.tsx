"use client";

import { useEffect, useRef } from "react";

interface Particle {
  alpha: number;
  color: string;
  originX: number;
  originY: number;
  size: number;
  targetAlpha: number;
  vx: number;
  vy: number;
  x: number;
  y: number;
}

interface TextParticlesProps {
  colors?: string[];
  fontSize?: number;
  gap?: number;
  mouseRadius?: number;
  particleSize?: number;
  repulsionStrength?: number;
  returnSpeed?: number;
  text: string;
}

function buildParticles(
  width: number,
  height: number,
  text: string,
  fontSize: number,
  gap: number,
  particleSize: number,
  colors: string[]
): Particle[] {
  const offscreen = document.createElement("canvas");
  offscreen.width = width;
  offscreen.height = height;
  const ctx = offscreen.getContext("2d");
  if (!ctx) {
    return [];
  }

  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#ffffff";
  ctx.font = `900 ${fontSize}px 'Inter', 'Segoe UI', sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  const words = text.split(" ");
  if (words.length > 1) {
    const lineHeight = fontSize * 1.15;
    const lines: string[] = [];
    let current = "";
    for (const word of words) {
      const test = current ? `${current} ${word}` : word;
      if (ctx.measureText(test).width > width * 0.9 && current) {
        lines.push(current);
        current = word;
      } else {
        current = test;
      }
    }
    if (current) {
      lines.push(current);
    }
    const totalH = lines.length * lineHeight;
    lines.forEach((line, i) => {
      ctx.fillText(
        line,
        width / 2,
        height / 2 - totalH / 2 + i * lineHeight + lineHeight / 2
      );
    });
  } else {
    ctx.fillText(text, width / 2, height / 2);
  }

  const { data } = ctx.getImageData(0, 0, width, height);
  const particles: Particle[] = [];

  for (let y = 0; y < height; y += gap) {
    for (let x = 0; x < width; x += gap) {
      if (data[(y * width + x) * 4 + 3] > 128) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          originX: x,
          originY: y,
          vx: 0,
          vy: 0,
          size: particleSize * (0.6 + Math.random() * 0.8),
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 0,
          targetAlpha: 0.7 + Math.random() * 0.3,
        });
      }
    }
  }

  return particles;
}

export default function TextParticles({
  text,
  fontSize = 120,
  particleSize = 3,
  gap = 5,
  mouseRadius = 120,
  repulsionStrength = 5,
  returnSpeed = 0.08,
  colors = ["#a78bfa", "#818cf8", "#60a5fa", "#34d399", "#f472b6", "#fb923c"],
}: TextParticlesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  // Keep latest props accessible inside the RAF without re-subscribing
  const propsRef = useRef({ mouseRadius, repulsionStrength, returnSpeed });
  propsRef.current = { mouseRadius, repulsionStrength, returnSpeed };

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!(container && canvas)) {
      return;
    }
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }

    // Capture narrowed references so nested functions keep the non-null type
    const _container = container;
    const _canvas = canvas;
    const _ctx = ctx;

    let rafId = 0;

    // ── Rebuild particles for the current canvas size ──────────────────────
    function rebuild() {
      const w = _container.clientWidth;
      const h = _container.clientHeight;
      _canvas.width = w;
      _canvas.height = h;
      particlesRef.current = buildParticles(
        w,
        h,
        text,
        fontSize,
        gap,
        particleSize,
        colors
      );
    }

    // ── Animation loop ─────────────────────────────────────────────────────
    function animate() {
      _ctx.clearRect(0, 0, _canvas.width, _canvas.height);

      const {
        mouseRadius: mr,
        repulsionStrength: rs,
        returnSpeed: rv,
      } = propsRef.current;
      const mouse = mouseRef.current;

      for (const p of particlesRef.current) {
        const dx = p.originX - p.x;
        const dy = p.originY - p.y;

        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const dist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (dist < mr) {
          const force = (mr - dist) / mr;
          const angle = Math.atan2(mdy, mdx);
          p.vx += Math.cos(angle) * force * rs;
          p.vy += Math.sin(angle) * force * rs;
        }

        p.vx += dx * rv;
        p.vy += dy * rv;
        p.vx *= 0.88;
        p.vy *= 0.88;
        p.x += p.vx;
        p.y += p.vy;

        if (p.alpha < p.targetAlpha) {
          p.alpha = Math.min(p.targetAlpha, p.alpha + 0.02);
        }

        _ctx.globalAlpha = p.alpha;
        _ctx.fillStyle = p.color;
        _ctx.beginPath();
        _ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        _ctx.fill();
      }

      _ctx.globalAlpha = 1;
      rafId = requestAnimationFrame(animate);
    }

    // ── ResizeObserver ─────────────────────────────────────────────────────
    const ro = new ResizeObserver(() => rebuild());
    ro.observe(_container);

    rebuild();
    rafId = requestAnimationFrame(animate);

    return () => {
      ro.disconnect();
      cancelAnimationFrame(rafId);
    };
    // Re-run only when particle-shape props change (not mouse interaction props)
  }, [text, fontSize, gap, particleSize, colors]);

  // ── Pointer handlers (stable, no deps) ──────────────────────────────────
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) {
      return;
    }
    mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const handleMouseLeave = () => {
    mouseRef.current = { x: -9999, y: -9999 };
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) {
      return;
    }
    const t = e.touches[0];
    mouseRef.current = { x: t.clientX - rect.left, y: t.clientY - rect.top };
  };

  const handleTouchEnd = () => {
    mouseRef.current = { x: -9999, y: -9999 };
  };

  return (
    <div className="h-full w-full" ref={containerRef}>
      <canvas
        className="h-full w-full cursor-crosshair"
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onTouchEnd={handleTouchEnd}
        onTouchMove={handleTouchMove}
        ref={canvasRef}
      />
    </div>
  );
}
