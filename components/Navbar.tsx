
const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
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
              Web & Digital Professional
            </p>
          </div>
        </a>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-6 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-4 lg:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-cyan-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* DESKTOP RIGHT SIDE */}
        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex items-center gap-2 rounded-full border border-emerald-300/10 bg-emerald-300/5 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <span className="text-xs font-medium text-slate-300">
              Open to opportunities
            </span>
          </div>

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
            className="cursor-pointer list-none rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-white"
          >
            Menu
          </summary>

          <div className="absolute right-0 top-full z-50 mt-3 flex w-52 flex-col gap-1 rounded-2xl border border-white/10 bg-slate-950 p-3 shadow-2xl">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-lg px-3 py-3 text-sm text-slate-300 hover:bg-white/10 hover:text-cyan-300"
              >
                {link.label}
              </a>
            ))}
          </div>
        </details>
      </nav>
    </header>
  );
}
