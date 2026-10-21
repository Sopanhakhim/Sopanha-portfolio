
"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#experience" },
  { label: "Journey", href: "#journey" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [hoveredSection, setHoveredSection] = useState("");

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 180;

      let currentSection = "";

      for (const link of links) {
        const section = document.querySelector(link.href);

        if (section instanceof HTMLElement) {
          if (scrollPosition >= section.offsetTop) {
            currentSection = link.href;
          }
        }
      }

      if (window.scrollY < 100) {
        currentSection = "";
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <header className="relative z-50 w-full px-4 pt-4 sm:px-6 lg:px-10">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-[1.75rem] border border-white/10 bg-slate-950/95 px-4 py-3 shadow-xl backdrop-blur-xl lg:px-6"
      >
        {/* BRAND */}
        <a
          href="#top"
          className="flex shrink-0 items-center gap-3"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-lg font-bold text-cyan-300">
            SK
          </div>

          <div>
            <p className="text-base font-bold tracking-wide text-white">
              Sopanha Khim
            </p>

            <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-slate-400">
              Web &amp; Digital Professional
            </p>
          </div>
        </a>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-6 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 lg:flex">
          {links.map((link) => {
            const isActive = activeSection === link.href;
            const isHovered = hoveredSection === link.href;

            return (
              <a
                key={link.label}
                href={link.href}
                onMouseEnter={() => setHoveredSection(link.href)}
                onMouseLeave={() => setHoveredSection("")}
                aria-current={isActive ? "location" : undefined}
                className={`group relative pb-2 text-sm font-medium transition-colors duration-300 ${
                  isActive || isHovered
                    ? "text-white"
                    : "text-slate-300 hover:text-cyan-300"
                }`}
              >
                {link.label}

                {/* BLUE / PURPLE / GREEN UNDERLINE */}
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute bottom-0 left-0 h-[3px] w-full origin-center rounded-full bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400 shadow-[0_0_12px_rgba(34,211,238,0.4)] transition-all duration-500 ease-out ${
                    isActive || isHovered
                      ? "scale-x-100 opacity-100"
                      : "scale-x-0 opacity-0"
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* DESKTOP RIGHT SIDE */}
        <div className="hidden items-center gap-3 lg:flex">

          {/* AVAILABILITY STATUS */}
          <div className="flex items-center gap-2 rounded-full border border-emerald-300/10 bg-emerald-300/5 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

            <span className="text-xs font-medium text-slate-300">
              Open to opportunities
            </span>
          </div>

          {/* CONTACT BUTTON */}
          <a
            href="#contact"
            className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 px-5 py-3 text-sm font-semibold text-white transition-all hover:border-cyan-300/50 hover:bg-cyan-300/20"
          >
            Let&apos;s Connect ↗
          </a>
        </div>

        {/* MOBILE NAVIGATION */}
        <details className="relative lg:hidden">
          <summary
            aria-label="Toggle navigation menu"
            className="cursor-pointer list-none rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300 [&::-webkit-details-marker]:hidden"
          >
            Menu
          </summary>

          <div className="absolute right-0 top-full z-50 mt-3 flex w-52 flex-col gap-1 rounded-2xl border border-white/10 bg-slate-950 p-3 shadow-2xl">
            {links.map((link) => {
              const isActive = activeSection === link.href;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative rounded-lg px-3 py-3 text-sm transition-colors ${
                    isActive
                      ? "bg-white/[0.06] text-white"
                      : "text-slate-300 hover:bg-white/10 hover:text-cyan-300"
                  }`}
                >
                  {link.label}

                  {/* MOBILE ACTIVE UNDERLINE */}
                  <span
                    aria-hidden="true"
                    className={`absolute bottom-1 left-3 h-[2px] w-12 rounded-full bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400 transition-all duration-300 ${
                      isActive
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0"
                    }`}
                  />
                </a>
              );
            })}
          </div>
        </details>
      </nav>
    </header>
  );
}
