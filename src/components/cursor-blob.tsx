"use client";

import { useEffect, useRef } from "react";

export function CursorBlob() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const onMove = (e: MouseEvent) => {
      if (ticking) return;
      requestAnimationFrame(() => {
        if (ref.current) {
          ref.current.style.left = e.clientX - 150 + "px";
          ref.current.style.top = e.clientY - 150 + "px";
        }
        ticking = false;
      });
      ticking = true;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      ref={ref}
      className="fixed w-[300px] h-[300px] rounded-full bg-primary/20 blur-3xl pointer-events-none z-0 mix-blend-multiply transition-transform"
      style={{ left: "-150px", top: "-150px" }}
    />
  );
}
