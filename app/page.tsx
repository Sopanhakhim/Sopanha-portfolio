import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Timeline from "../components/Timeline";
import Certifications from "../components/Certifications";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f7f4] text-slate-950">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.16),transparent_35%),radial-gradient(circle_at_top_right,rgba(15,23,42,0.10),transparent_30%)]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:80px_80px] opacity-40" />

      <nav className="fixed left-1/2 top-4 z-50 flex -translate-x-1/2 items-center gap-6 rounded-full border border-slate-200 bg-white/80 px-6 py-3 text-sm font-medium text-slate-600 shadow-sm backdrop-blur">
        <a href="#about" className="transition hover:text-violet-600">
          About
        </a>
        <a href="#work" className="transition hover:text-violet-600">
          Work
        </a>
        <a href="#experience" className="transition hover:text-violet-600">
          Experience
        </a>
        <a href="#skills" className="transition hover:text-violet-600">
          Skills
        </a>
        <a href="#contact" className="transition hover:text-violet-600">
          Contact
        </a>
      </nav>

      <Hero />
      <About />
      <Projects />
      <Timeline />
      <Certifications />
    </main>
  );
}