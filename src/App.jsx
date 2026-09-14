import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import ErpShowcase from "./components/ErpShowcase";
import Experience from "./components/Experience";
import WorkProcess from "./components/WorkProcess";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useDarkMode } from "./hooks/useDarkMode";

export default function App() {
  const { isDark, toggle: toggleTheme } = useDarkMode();

  return (
    <div className="min-h-screen">
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ErpShowcase />
        <Services />
        <Experience />
        <WorkProcess />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
