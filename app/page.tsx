import SiteBackground from "../components/ui/SiteBackground";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeaturedImpact from "../components/FeaturedImpact";
import About from "../components/About";
import HowIWork from "../components/HowIWork";
import Projects from "../components/Projects";
import Journey from "../components/Journey";
import Timeline from "../components/Timeline";
import Skills from "../components/Skills";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main
      id="top"
      className="relative min-h-screen overflow-hidden bg-slate-950 text-white"
    >
      <SiteBackground />

      <div className="relative z-10">
        <Navbar />

        {/* Hero */}
        <Hero />

        {/* Quick Introduction */}
        <FeaturedImpact />

        {/* About Me */}
        <About />

        {/* How I Work */}
        <HowIWork />

        {/* Featured Projects */}
        <Projects />

        {/* My Journey */}
        <Journey />

        {/* Professional Experience */}
        <Timeline />

        {/* Skills */}
        <Skills />

        {/* Certifications */}
        <Certifications />

        {/* Contact */}
        <Contact />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}