"use client";

import { useEffect, useRef } from "react";

export function EtheralShadow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Draw multiple animated shadow circles
      for (let i = 0; i < 5; i++) {
        const radius = 100 + i * 60 + Math.sin(time * 0.001 + i) * 20;
        const x = centerX + Math.sin(time * 0.0005 + i * 1.2) * 100;
        const y = centerY + Math.cos(time * 0.0008 + i * 0.8) * 80;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, `rgba(120, 119, 198, ${0.15 - i * 0.02})`);
        gradient.addColorStop(1, "rgba(120, 119, 198, 0)");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      time++;
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 opacity-60 dark:opacity-40"
      style={{ pointerEvents: "none" }}
    />
  );
}
