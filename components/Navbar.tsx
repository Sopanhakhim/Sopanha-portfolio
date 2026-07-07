export default function Navbar() {
  const navItems = [
    ["About", "#about"],
    ["Projects", "#work"],
    ["Experience", "#experience"],
    ["Skills", "#skills"],
    ["Contact", "#contact"],
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/60 backdrop-blur-2xl">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/5 via-transparent to-violet-500/5 blur-3xl" />

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#about" className="group flex items-center gap-3">
          <div className="relative">
            <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.9)]" />
            <div className="absolute inset-0 animate-ping rounded-full bg-cyan-400/40" />
          </div>

          <div>
            <p className="text-lg font-semibold tracking-wide text-white transition duration-300 group-hover:text-cyan-200">
              Sopanha Khim
            </p>
            <p className="mt-0.5 text-xs uppercase tracking-[0.25em] text-cyan-300">
              Known as Stella
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-10 text-sm font-medium text-slate-300 md:flex">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="group relative pb-2 transition-all duration-300 hover:text-white"
            >
              {label}

              <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-cyan-300 transition-all duration-500 ease-out group-hover:w-full" />

              <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-cyan-300 to-violet-400 blur-sm transition-all duration-500 ease-out group-hover:w-full" />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}