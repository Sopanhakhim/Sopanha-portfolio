
"use client";

import { useEffect, useRef } from "react";

type Point = {
  x: number;
  y: number;
};

export default function InteractiveLines() {
  const svgRef = useRef<SVGSVGElement>(null);
  const lineRef = useRef<SVGPathElement>(null);
  const glowRef = useRef<SVGPathElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // SCROLL PROGRESS
    const updateScroll = () => {
      const maxScroll =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        maxScroll > 0
          ? (window.scrollY / maxScroll) * 100
          : 0;

      if (progressRef.current) {
        progressRef.current.style.height = `${
          Math.min(100, Math.max(0, progress))
        }%`;
      }
    };

    window.addEventListener("scroll", updateScroll, {
      passive: true,
    });

    updateScroll();

    // ACCESSIBILITY AND MOBILE SUPPORT
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const finePointer = window.matchMedia(
      "(pointer: fine)"
    ).matches;

    if (reduceMotion || !finePointer) {
      if (svgRef.current) {
        svgRef.current.style.display = "none";
      }

      return () => {
        window.removeEventListener(
          "scroll",
          updateScroll
        );
      };
    }

    // CREATE CURSOR TRAIL
    const points: Point[] = Array.from(
      { length: 18 },
      () => ({ x: 0, y: 0 })
    );

    const mouse: Point = { x: 0, y: 0 };

    let initialized = false;
    let lastMovement = 0;
    let animationFrame = 0;

    // FOLLOW THE MOUSE
    const handlePointerMove = (event: PointerEvent) => {
      if (
        event.pointerType &&
        event.pointerType !== "mouse"
      ) {
        return;
      }

      mouse.x = event.clientX;
      mouse.y = event.clientY;
      lastMovement = performance.now();

      if (!initialized) {
        points.forEach((point) => {
          point.x = mouse.x;
          point.y = mouse.y;
        });

        initialized = true;
      }
    };

    const updateSize = () => {
      svgRef.current?.setAttribute(
        "viewBox",
        `0 0 ${window.innerWidth} ${window.innerHeight}`
      );
    };

    // SMOOTH ANIMATION
    const animate = (time: number) => {
      if (initialized) {
        let targetX = mouse.x;
        let targetY = mouse.y;

        for (const point of points) {
          point.x += (targetX - point.x) * 0.28;
          point.y += (targetY - point.y) * 0.28;

          targetX = point.x;
          targetY = point.y;
        }

        // CREATE CURVED PATH
        let path = `M ${points[0].x} ${points[0].y}`;

        for (
          let i = 1;
          i < points.length - 1;
          i++
        ) {
          const current = points[i];
          const next = points[i + 1];

          const midX = (current.x + next.x) / 2;
          const midY = (current.y + next.y) / 2;

          path +=
            ` Q ${current.x} ${current.y} ${midX} ${midY}`;
        }

        const last = points[points.length - 1];

        path += ` L ${last.x} ${last.y}`;

        lineRef.current?.setAttribute("d", path);
        glowRef.current?.setAttribute("d", path);

        // FADE WHEN MOUSE STOPS
        const idleTime = time - lastMovement;

        const opacity = Math.max(
          0,
          Math.min(1, (1600 - idleTime) / 600)
        );

        if (svgRef.current) {
          svgRef.current.style.opacity =
            String(opacity);
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    updateSize();

    window.addEventListener(
      "pointermove",
      handlePointerMove,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      updateSize
    );

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      window.removeEventListener(
        "resize",
        updateSize
      );

      window.removeEventListener(
        "scroll",
        updateScroll
      );
    };
  }, []);

  return (
    <>
      {/* MOUSE-FOLLOWING LIGHT TRAIL */}
      <svg
        ref={svgRef}
        className="pointer-events-none fixed inset-0 z-[30] h-screen w-screen"
        style={{ opacity: 0 }}
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="cursorLineGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="#67e8f9"
            />
            <stop
              offset="55%"
              stopColor="#38bdf8"
            />
            <stop
              offset="100%"
              stopColor="#a78bfa"
            />
          </linearGradient>
        </defs>

        {/* SOFT GLOW */}
        <path
          ref={glowRef}
          fill="none"
          stroke="#22d3ee"
          strokeWidth="12"
          strokeOpacity="0.14"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* THIN GRADIENT LINE */}
        <path
          ref={lineRef}
          fill="none"
          stroke="url(#cursorLineGradient)"
          strokeWidth="2"
          strokeOpacity="0.85"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* SCROLL PROGRESS INDICATOR */}
      <div
        className="pointer-events-none fixed right-3 top-1/2 z-[30] hidden h-36 w-px -translate-y-1/2 bg-white/10 lg:block"
        aria-hidden="true"
      >
        <div
          ref={progressRef}
          className="w-full bg-gradient-to-b from-cyan-300 via-sky-400 to-violet-400"
          style={{ height: "0%" }}
        />
      </div>
    </>
  );
}
