
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
      className="
        relative isolate
        min-h-screen
        w-full
        overflow-x-clip
        bg-slate-950
        text-white
      "
    >
      {/* BACKGROUND EFFECTS */}
      <SiteBackground />

      {/* MOUSE-FOLLOWING BUBBLE */}
      {/* Hidden on touch devices by InteractiveLines */}
      <InteractiveLines />

      {/* RESPONSIVE STICKY NAVIGATION */}
      <div className="sticky top-0 z-50 w-full">
        <Navbar />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 w-full min-w-0">

        {/* HERO */}
        <ScrollReveal>
          <Hero />
        </ScrollReveal>

        {/* ABOUT */}
        <ScrollReveal>
          <About />
        </ScrollReveal>

        {/* EDUCATION */}
        <ScrollReveal>
          <Journey />
        </ScrollReveal>

        {/* PROJECTS AND EXPERIENCE */}
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
        <ScrollReveal>
          <Footer />
        </ScrollReveal>

      </div>
    </main>
  );
}
