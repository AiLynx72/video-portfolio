import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Preloader from './components/Preloader';
import Cursor from './components/Cursor';
import BackToTop from './components/BackToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import CodingProfiles from './components/CodingProfiles';
import Projects from './components/Projects';
import Services from './components/Services';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Initialize AOS animations globally
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-quad',
    });
  }, []);

  return (
    <>
      <Preloader />
      <Cursor />
      <BackToTop />
      <Navbar />
      <main className="bg-black text-white overflow-hidden">
        <Hero />
        <About />
        <Education />
        <Skills />
        <CodingProfiles />
        <Projects />
        <Services />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
