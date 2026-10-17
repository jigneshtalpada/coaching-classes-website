"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  // Position and hover refs for 60-120fps tracking without triggering React re-renders on clicks or moves
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const isHoveredRef = useRef(false);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Only enable on desktop/laptop devices with mouse/trackpad pointer
    if (typeof window === "undefined") return;
    const finePointerMedia = window.matchMedia("(pointer: fine) and (hover: hover)");
    if (!finePointerMedia.matches) return;

    setEnabled(true);

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Instant hardware-accelerated update for the center dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Check if mouse is hovering an interactive element (button, link, card)
      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest(
          'a, button, input, select, textarea, [role="button"], .card-hover, [data-cursor="pointer"]'
        );
        const hovered = !!interactive;
        isHoveredRef.current = hovered;

        if (ringRef.current) {
          if (hovered) {
            ringRef.current.style.borderColor = "rgba(49, 94, 247, 0.85)";
            ringRef.current.style.backgroundColor = "rgba(49, 94, 247, 0.08)";
            ringRef.current.style.boxShadow = "0 0 20px rgba(49, 94, 247, 0.3)";
          } else {
            ringRef.current.style.borderColor = "rgba(49, 94, 247, 0.4)";
            ringRef.current.style.backgroundColor = "rgba(49, 94, 247, 0.02)";
            ringRef.current.style.boxShadow = "none";
          }
        }
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    // Smooth linear interpolation (lerp) loop for trailing outer aura ring
    const animate = () => {
      const ease = 0.22; // Smooth tracking speed
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ease;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ease;

      if (ringRef.current) {
        const scale = isHoveredRef.current ? 1.45 : 1;
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) scale(${scale})`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [isVisible]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 999999,
        pointerEvents: "none",
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.2s ease",
      }}
      className="custom-cursor-wrapper"
    >
      {/* Precision Core Laser Dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          top: "-4px",
          left: "-4px",
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "#315EF7",
          boxShadow: "0 0 8px rgba(49, 94, 247, 0.8)",
          pointerEvents: "none",
          willChange: "transform",
        }}
      />

      {/* Trailing Fluid Outer Aura Ring - Perfectly Centered, Zero Click Displacement */}
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          top: "-18px",
          left: "-18px",
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          border: "1.5px solid rgba(49, 94, 247, 0.4)",
          backgroundColor: "rgba(49, 94, 247, 0.02)",
          transformOrigin: "center center",
          pointerEvents: "none",
          transition: "border-color 0.2s ease, background-color 0.2s ease, box-shadow 0.2s ease",
          willChange: "transform",
        }}
      />
    </div>
  );
}
