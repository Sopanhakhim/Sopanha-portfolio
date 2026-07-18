"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#about");
  const [mobileOpen, setMobileOpen] = useState(false);

  // Add a stronger glass background after scrolling.
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track the section currently visible on the page.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => Boolean(section));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);

        if (visibleEntry) {
          setActive(`#${visibleEntry.target.id}`);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Prevent background scrolling while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setActive(href);
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/[0.08] bg-slate-950/80 shadow-[0_12px_40px_rgba(2,6,23,0.22)] backdrop-blur-2xl"
          : "border-b border-transparent bg-slate-950/20 backdrop-blur-md"
      }`}
    >
      {/* Subtle ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-1/3 bg-cyan-500/[0.04] blur-3xl" />
        <div className="absolute right-0 top-0 h-full w-1/3 bg-violet-500/[0.04] blur-3xl" />
      </div>

      <nav
        className="relative mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10"
        aria-label="Primary navigation"
      >
        {/* Brand */}
        <a
          href="#about"
          onClick={() => handleNavClick("#about")}
          className="group flex min-w-fit items-center gap-3"
          aria-label="Go to About section"
        >
          <span className="relative flex h-3 w-3 items-center justify-center">
            <span className="absolute h-3 w-3 rounded-full bg-cyan-400/25 blur-sm transition duration-300 group-hover:bg-cyan-300/40" />
            <span className="relative h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(103,232,249,0.75)]" />
          </span>

          <span className="leading-tight">
            <span className="block font-[Sora] text-[15px] font-semibold tracking-[0.04em] text-white transition-colors duration-300 group-hover:text-cyan-100">
              Sopanha Khim
            </span>

            <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.32em] text-cyan-300/75">
              Stella
            </span>
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 md:block">
          <ul className="flex items-center rounded-full border border-white/[0.08] bg-white/[0.035] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] backdrop-blur-xl">
            {navItems.map((item) => {
              const isActive = active === item.href;

              return (
                <li key={item.href} className="relative">
                  <a
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className={`relative z-10 block rounded-full px-4 py-2 text-[13px] font-medium tracking-[0.01em] transition-colors duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-slate-400 hover:text-slate-100"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </a>

                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 rounded-full border border-white/[0.08] bg-gradient-to-r from-cyan-400/[0.12] via-blue-400/[0.08] to-violet-400/[0.12] shadow-[0_0_22px_rgba(34,211,238,0.06)]"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 34,
                      }}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          onClick={() => handleNavClick("#contact")}
          className="group hidden items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.05] px-4 py-2.5 text-[13px] font-medium text-cyan-100 transition-all duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/[0.09] hover:text-white md:inline-flex"
        >
          Let&apos;s talk

          <ArrowUpRight
            size={15}
            strokeWidth={1.8}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileOpen((current) => !current)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.04] text-slate-200 transition-colors duration-300 hover:bg-white/[0.08] hover:text-white md:hidden"
          aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 top-20 -z-10 bg-slate-950/60 backdrop-blur-sm md:hidden"
            />

            <motion.div
              id="mobile-navigation"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: 0.28,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="overflow-hidden border-t border-white/[0.08] bg-slate-950/95 shadow-2xl backdrop-blur-2xl md:hidden"
            >
              <div className="px-6 py-5">
                <ul className="space-y-1">
                  {navItems.map((item) => {
                    const isActive = active === item.href;

                    return (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          onClick={() => handleNavClick(item.href)}
                          className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                            isActive
                              ? "border border-white/[0.08] bg-gradient-to-r from-cyan-400/[0.1] to-violet-400/[0.08] text-white"
                              : "border border-transparent text-slate-400 hover:bg-white/[0.04] hover:text-white"
                          }`}
                          aria-current={isActive ? "page" : undefined}
                        >
                          {item.label}

                          {isActive && (
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(103,232,249,0.8)]" />
                          )}
                        </a>
                      </li>
                    );
                  })}
                </ul>

                <a
                  href="#contact"
                  onClick={() => handleNavClick("#contact")}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-300/20 bg-cyan-300/[0.07] px-4 py-3 text-sm font-medium text-cyan-100 transition-colors hover:bg-cyan-300/[0.12] hover:text-white"
                >
                  Let&apos;s talk
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}