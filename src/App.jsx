import { useEffect } from 'react';
import Preloader from './components/Preloader';
import Cursor from './components/Cursor';
import BackToTop from './components/BackToTop';
import Particles from './components/Particles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { initScrollAnimations, initTilt } from './utils/animations';

function App() {
  useEffect(() => {
    // Init scroll animations after DOM is ready
    const timer = setTimeout(() => {
      initScrollAnimations();
      initTilt();
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Preloader />
      <Cursor />
      <BackToTop />
      <Particles />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
