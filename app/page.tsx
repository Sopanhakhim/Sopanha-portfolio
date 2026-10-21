
import SiteBackground from "../components/ui/SiteBackground";
import InteractiveLines from "../components/ui/InteractiveLines";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Journey from "../components/Journey";
import Skills from "../components/Skills";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main
      id="top"
      className="relative isolate min-h-screen w-full overflow-x-clip bg-slate-950 text-white"
    >
      {/* BACKGROUND EFFECTS */}
      <SiteBackground />
      <InteractiveLines />

      {/* STICKY NAVIGATION */}
      <div className="sticky top-0 z-50 w-full">
        <Navbar />
      </div>

      {/* MAIN WEBSITE CONTENT */}
      <div className="relative z-10 w-full min-w-0">
        <Hero />

        <About />

        {/* PROJECTS / EXPERIENCE */}
        <div id="experience">
          <Projects />
        </div>

        {/* EDUCATION JOURNEY */}
        <Journey />

        <Skills />

        <Certifications />

        <Contact />

        <Footer />
      </div>
    </main>
  );
}
