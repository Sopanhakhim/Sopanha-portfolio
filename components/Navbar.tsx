"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      if (window.scrollY < window.innerHeight * 0.45) {
        setActiveSection("");
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((section): section is Element => Boolean(section));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (first, second) =>
              second.intersectionRatio - first.intersectionRatio
          );

        const currentSection = visibleSections[0];

        if (currentSection) {
          setActiveSection(`#${currentSection.target.id}`);
        }
      },
      {
        rootMargin: "-28% 0px -58% 0px",
        threshold: [0, 0.15, 0.3, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const handleNavigation = (href: string) => {
    setActiveSection(href);
    setMobileOpen(false);
  };

  const handleBrandClick = () => {
    setActiveSection("");
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Primary navigation"
          className={`relative flex items-center justify-between rounded-2xl border px-4 transition-all duration-500 sm:px-5 ${
            scrolled
              ? "h-[68px] border-white/[0.1] bg-slate-950/78 shadow-[0_18px_60px_rgba(2,6,23,0.45)] backdrop-blur-3xl"
              : "h-[76px] border-white/[0.07] bg-slate-950/45 shadow-[0_12px_40px_rgba(2,6,23,0.18)] backdrop-blur-2xl"
          }`}
        >
          {/* Premium surface */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
            <div className="absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/35 to-transparent" />

            <div className="absolute -left-16 top-1/2 h-24 w-40 -translate-y-1/2 rounded-full bg-cyan-400/[0.06] blur-3xl" />

            <div className="absolute -right-16 top-1/2 h-24 w-40 -translate-y-1/2 rounded-full bg-violet-400/[0.06] blur-3xl" />
          </div>

          {/* Brand */}
          <a
            href="#top"
            onClick={handleBrandClick}
            aria-label="Return to the top of the page"
            className="group relative z-10 flex min-w-fit items-center gap-3"
          >
            <span className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/15 bg-gradient-to-br from-cyan-300/[0.11] via-white/[0.035] to-violet-300/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] transition duration-300 group-hover:border-cyan-300/30 group-hover:bg-cyan-300/[0.12]">
              <span className="absolute h-5 w-5 rounded-full bg-cyan-300/15 blur-md" />

              <span className="relative text-sm font-bold tracking-tight text-cyan-200">
                SK
              </span>
            </span>

            <span className="hidden leading-tight sm:block">
              <span className="block font-[Sora] text-[14px] font-semibold tracking-[0.035em] text-white transition-colors duration-300 group-hover:text-cyan-100">
                Sopanha Khim
              </span>

              <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.23em] text-slate-500 transition-colors duration-300 group-hover:text-cyan-300/80">
                Known As Stella
              </span>
            </span>
          </a>

          {/* Desktop navigation */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 lg:block">
            <ul className="flex items-center gap-1 rounded-xl border border-white/[0.07] bg-white/[0.025] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]">
              {navItems.map((item) => {
                const isActive = activeSection === item.href;

                return (
                  <li key={item.href} className="relative">
                    <a
                      href={item.href}
                      onClick={() => handleNavigation(item.href)}
                      aria-current={isActive ? "location" : undefined}
                      className={`group relative z-10 block overflow-hidden rounded-lg px-4 py-2.5 text-[12px] font-medium tracking-[0.015em] transition-colors duration-300 ${
                        isActive
                          ? "text-white"
                          : "text-slate-400 hover:text-slate-100"
                      }`}
                    >
                      <span className="relative z-10">{item.label}</span>

                      {!isActive && (
                        <span className="absolute inset-x-4 bottom-1.5 h-px origin-left scale-x-0 bg-gradient-to-r from-cyan-300 to-violet-300 transition-transform duration-300 group-hover:scale-x-100" />
                      )}
                    </a>

                    {isActive && (
                      <motion.span
                        layoutId="premium-navbar-active"
                        className="absolute inset-0 rounded-lg border border-cyan-300/[0.13] bg-gradient-to-r from-cyan-300/[0.08] via-white/[0.045] to-violet-300/[0.07] shadow-[0_0_20px_rgba(34,211,238,0.05)]"
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 36,
                        }}
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Desktop status and CTA */}
          <div className="relative z-10 hidden items-center gap-3 md:flex">
            <div className="hidden items-center gap-2 rounded-full border border-emerald-300/10 bg-emerald-300/[0.035] px-3 py-2 xl:flex">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-20" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
              </span>

              <span className="text-[11px] font-medium text-emerald-100/80">
                Open to opportunities
              </span>
            </div>

            <a
              href="#contact"
              onClick={() => handleNavigation("#contact")}
              className="group inline-flex items-center gap-2 rounded-xl border border-cyan-300/20 bg-gradient-to-r from-cyan-300/[0.09] to-violet-300/[0.07] px-4 py-2.5 text-[12px] font-semibold text-cyan-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/35 hover:bg-cyan-300/[0.12] hover:shadow-[0_12px_30px_rgba(34,211,238,0.09)]"
            >
              Let&apos;s Connect

              <ArrowUpRight
                size={14}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {/* Mobile button */}
          <button
            type="button"
            onClick={() => setMobileOpen((current) => !current)}
            aria-label={
              mobileOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            className="relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.1] bg-white/[0.04] text-slate-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-all duration-300 hover:border-cyan-300/20 hover:bg-cyan-300/[0.06] hover:text-white md:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileOpen ? "close" : "menu"}
                initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 20, scale: 0.8 }}
                transition={{ duration: 0.18 }}
              >
                {mobileOpen ? <X size={19} /> : <Menu size={19} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </nav>
      </div>

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
              className="fixed inset-0 top-0 -z-10 bg-slate-950/75 backdrop-blur-md md:hidden"
            />

            <motion.div
              id="mobile-navigation"
              initial={{
                opacity: 0,
                y: -12,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -12,
                scale: 0.98,
              }}
              transition={{
                duration: 0.24,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mx-4 mt-2 overflow-hidden rounded-2xl border border-white/[0.1] bg-slate-950/95 shadow-[0_30px_90px_rgba(2,6,23,0.7)] backdrop-blur-3xl md:hidden"
            >
              <div className="border-b border-white/[0.08] px-5 py-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/15 bg-cyan-300/[0.07]">
                    <BriefcaseBusiness
                      size={17}
                      className="text-cyan-200"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-white">
                      Explore my portfolio
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Work, experience, skills, and more.
                    </p>
                  </div>
                </div>
              </div>

              <div className="px-4 py-4">
                <ul className="space-y-1">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.href;

                    return (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: index * 0.035,
                        }}
                      >
                        <a
                          href={item.href}
                          onClick={() => handleNavigation(item.href)}
                          aria-current={isActive ? "location" : undefined}
                          className={`flex items-center justify-between rounded-xl border px-4 py-3.5 text-sm font-medium transition-all duration-300 ${
                            isActive
                              ? "border-cyan-300/[0.14] bg-gradient-to-r from-cyan-300/[0.09] to-violet-300/[0.06] text-white"
                              : "border-transparent text-slate-400 hover:border-white/[0.07] hover:bg-white/[0.035] hover:text-white"
                          }`}
                        >
                          <span className="flex items-center gap-3">
                            <span
                              className={`text-[10px] font-semibold ${
                                isActive
                                  ? "text-cyan-300"
                                  : "text-slate-600"
                              }`}
                            >
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            {item.label}
                          </span>

                          {isActive && (
                            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-cyan-300/15 bg-cyan-300/[0.08] text-cyan-200">
                              <Check size={13} />
                            </span>
                          )}
                        </a>
                      </motion.li>
                    );
                  })}
                </ul>

                <div className="mt-4 border-t border-white/[0.08] pt-4">
                  <div className="mb-3 flex items-center gap-2 px-1 text-xs text-slate-500">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-20" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-300" />
                    </span>

                    Open to web, software, and digital opportunities
                  </div>

                  <a
                    href="#contact"
                    onClick={() => handleNavigation("#contact")}
                    className="group flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-300/20 bg-gradient-to-r from-cyan-300/[0.1] to-violet-300/[0.08] px-4 py-3.5 text-sm font-semibold text-cyan-50 transition-all duration-300 hover:border-cyan-300/35 hover:bg-cyan-300/[0.13]"
                  >
                    Let&apos;s Connect

                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}