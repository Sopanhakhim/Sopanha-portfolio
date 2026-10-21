
"use client";

import { useEffect, useRef } from "react";

export default function InteractiveLines() {
  const bubbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bubble = bubbleRef.current;
    if (!bubble) return;

    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    if (!finePointer.matches || reducedMotion.matches) {
      return;
    }

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let frameId = 0;
    let visible = false;

    const handleMouseMove = (event: MouseEvent) => {
      targetX = event.clientX;
      targetY = event.clientY;

      if (!visible) {
        currentX = targetX;
        currentY = targetY;
        visible = true;
      }

      bubble.style.opacity = "0.85";
    };

    const handleMouseLeave = () => {
      bubble.style.opacity = "0";
      visible = false;
    };

    const animate = () => {
      if (visible) {
        currentX += (targetX - currentX) * 0.09;
        currentY += (targetY - currentY) * 0.09;

        bubble.style.transform =
          `translate3d(${currentX - 32.5}px, ${currentY - 32.5}px, 0)`;
      }

      frameId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    frameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div
      ref={bubbleRef}
      aria-hidden="true"
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-30
        hidden
        h-[65px]
        w-[65px]
        rounded-full
        opacity-0
        md:block
      "
      style={{
        background: `
          radial-gradient(
            circle at 30% 30%,
            rgba(255,255,255,0.85) 0%,
            rgba(110,231,183,0.8) 20%,
            rgba(59,130,246,0.65) 48%,
            rgba(168,85,247,0.55) 75%,
            rgba(168,85,247,0.1) 100%
          )
        `,
        boxShadow: `
          0 0 18px rgba(110,231,183,0.3),
          0 0 35px rgba(59,130,246,0.2),
          0 0 50px rgba(168,85,247,0.15)
        `,
        filter: "blur(6px)",
        willChange: "transform",
      }}
    />
  );
}
