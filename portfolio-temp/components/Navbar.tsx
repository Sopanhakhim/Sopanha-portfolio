"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Journey", href: "#timeline" },
  { label: "Projects", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-violet-500/20 bg-[#04050f]/90 shadow-[0_10px_40px_rgba(88,28,135,0.18)] backdrop-blur-2xl"
            : "border-b border-white/5 bg-[#04050f]/35 backdrop-blur-xl"
        }`}
        aria-label="Main navigation"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
          <a href="#" aria-label="Sopanha Khim home" className="group select-none">
            <h1 className="relative text-3xl font-black leading-none tracking-[-0.04em] md:text-4xl">
              <span className="text-white transition duration-300 group-hover:text-violet-100">
                Sopanha
              </span>{" "}
              <span className="relative inline-block">
                <span className="absolute inset-0 rounded-full bg-violet-500/30 blur-xl opacity-70 animate-[pulse_3s_ease-in-out_infinite]" />
                <span className="relative bg-gradient-to-r from-violet-300 via-purple-400 to-sky-300 bg-clip-text text-transparent transition duration-300 group-hover:brightness-125">
                  Khim
                </span>
              </span>
            </h1>
          </a>

          <div className="hidden items-center gap-8 text-lg font-semibold text-white/72 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative py-2 transition duration-300 hover:text-white"
              >
                {link.label}

                <span className="absolute -bottom-1 left-0 h-[3px] w-0 rounded-full bg-gradient-to-r from-violet-400 via-purple-400 to-sky-300 transition-all duration-500 group-hover:w-full" />
                <span className="absolute -bottom-1 left-0 h-[3px] w-0 rounded-full bg-violet-400/40 blur-md transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </div>

          <a
            href="/Sopanha-Khim-Resume.pdf"
            download
            className="hidden rounded-full border border-violet-500/30 bg-violet-500/10 px-6 py-2.5 text-sm font-bold tracking-wide text-violet-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-300 hover:bg-violet-500/20 hover:text-white hover:shadow-[0_0_30px_rgba(139,92,246,0.35)] md:inline-flex"
          >
            Resume
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl border border-violet-500/25 bg-white/5 transition hover:bg-violet-500/10 md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block h-px w-5 bg-white transition-all duration-300 ${
                mobileOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-white transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-white transition-all duration-300 ${
                mobileOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#04050f]/95 backdrop-blur-2xl md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex h-full flex-col items-center justify-center gap-3 px-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="w-full rounded-2xl px-6 py-4 text-center text-xl font-semibold text-white/75 transition hover:bg-violet-500/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}

           <a
  href="/Sopanha-Khim-Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden rounded-full border border-violet-500/30 bg-violet-500/5 px-5 py-2 text-sm font-semibold tracking-wide text-violet-300 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400 hover:bg-violet-500/15 hover:text-white md:inline-flex"
>
  View Resume ↗
</a>
          </div>
        </div>
      )}
    </>
  );
}