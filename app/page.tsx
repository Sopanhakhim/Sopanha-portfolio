
import SiteBackground from "../components/ui/SiteBackground";
import InteractiveLines from "../components/ui/InteractiveLines";
import ScrollReveal from "../components/ScrollReveal";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Journey from "../components/Journey";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main
      id="top"
      className="relative min-h-screen overflow-x-clip bg-slate-950 text-white"
    >
      {/* BACKGROUND AND INTERACTIVE MOUSE EFFECTS */}
      <SiteBackground />
      <InteractiveLines />

      {/* STICKY NAVIGATION */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* MAIN WEBSITE CONTENT */}
      <div className="relative z-10">

        {/* HERO */}
        <Hero />

        {/* ABOUT ME */}
        <ScrollReveal>
          <About />
        </ScrollReveal>

        {/* EDUCATION & JOURNEY */}
        <ScrollReveal>
          <Journey />
        </ScrollReveal>

        {/* PROJECTS & EXPERIENCE */}
        <div id="experience">
          <ScrollReveal>
            <Projects />
          </ScrollReveal>
        </div>

        {/* SKILLS */}
        <ScrollReveal>
          <Skills />
        </ScrollReveal>

        {/* CERTIFICATIONS */}
        <ScrollReveal>
          <Certifications />
        </ScrollReveal>

        {/* CONTACT */}
        <ScrollReveal>
          <Contact />
        </ScrollReveal>

        {/* FOOTER */}
        <Footer />

      </div>
    </main>
  );
}
