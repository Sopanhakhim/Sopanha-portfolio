import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Timeline from "../components/Timeline";
import Certifications from "../components/Certifications";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import CurrentlyBuilding from "../components/CurrentlyBuilding";
import Philosophy from "../components/Philosophy";
import Journey from "../components/Journey";
import FeaturedImpact from "../components/FeaturedImpact";
import HowIWork from "../components/HowIWork";
import Toolbox from "../components/ToolBox";
import Footer from "../components/Footer";
import PremiumBackground from "../components/ui/PremiumBackground";
export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <PremiumBackground />
      <Navbar />
      <Hero />
      <FeaturedImpact />
      <About />
      <HowIWork />
      <Philosophy />
      <Journey />
      <Projects />
      <CurrentlyBuilding />
      <Toolbox />
      <Skills />
      <Timeline />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}