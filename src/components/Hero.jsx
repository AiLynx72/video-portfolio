import React, { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroVideo from '../assets/hero video/Developer_introduces_self_and_sk…_202606051918.mp4';

const roles = [
  'AI & ML Student',
  'Software Developer',
  'Full Stack Developer',
  'Backend Engineer',
  'Problem Solver',
];

const useTyped = () => {
  const [text, setText] = useState('');
  const roleIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);

  useEffect(() => {
    let timeout;

    const typeEffect = () => {
      const current = roles[roleIndex.current];
      if (isDeleting.current) {
        charIndex.current--;
        setText(current.substring(0, charIndex.current));
      } else {
        charIndex.current++;
        setText(current.substring(0, charIndex.current));
      }

      if (!isDeleting.current && charIndex.current === current.length) {
        isDeleting.current = true;
        timeout = setTimeout(typeEffect, 1800);
        return;
      }
      if (isDeleting.current && charIndex.current === 0) {
        isDeleting.current = false;
        roleIndex.current = (roleIndex.current + 1) % roles.length;
      }
      timeout = setTimeout(typeEffect, isDeleting.current ? 50 : 100);
    };

    timeout = setTimeout(typeEffect, 1000);
    return () => clearTimeout(timeout);
  }, []);

  return text;
};

const Hero = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const typedRole = useTyped();

  useEffect(() => {
    // Autoplay video on load but muted to satisfy browser policies
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => {
        console.log("Autoplay blocked, user interaction required:", err);
      });
    }
  }, []);

  const toggleVideo = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden bg-black m-0 p-0 max-w-full">
      {/* Background Video */}
      <video
        ref={videoRef}
        loop
        muted={isMuted}
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-40"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Subtle overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent z-10" />

      {/* Content Container */}
      <div className="absolute inset-0 z-20 px-6 pb-20 md:pb-[8%] md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end text-left w-full h-full">
        
        {/* Left Side: Text and Buttons */}
        <div className="flex flex-col items-start text-left max-w-2xl w-full">
          <p 
            data-aos="fade-up" 
            className="text-[#ff2a2a] text-xs md:text-sm font-black tracking-[0.25em] uppercase mb-4"
          >
            AI & ML Engineer
          </p>

          <h1 
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-white text-5xl md:text-8xl font-black mb-6 tracking-tighter leading-none"
          >
            AI<span className="text-[#ff2a2a]">Lynx</span>
          </h1>

          {/* Typing Roles Container */}
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-white text-2xl md:text-4xl font-extrabold mb-8 tracking-tight min-h-[48px]"
          >
            I build <span className="text-[#ff2a2a]">{typedRole}</span> solutions
            <span className="text-[#ff2a2a] animate-pulse">|</span>
          </p>

          <p 
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-white/60 text-sm md:text-base font-semibold mb-10 max-w-md leading-relaxed"
          >
            Engineering smart systems, responsive full-stack architectures, and creative AI & ML integrations.
          </p>

          {/* Action Buttons */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row flex-wrap items-center gap-3 w-full"
          >
            <a 
              href="#services"
              onClick={(e) => handleNavClick(e, '#services')}
              className="px-8 py-3.5 text-xs md:text-sm rounded-full bg-white text-black font-bold hover:bg-[#ff2a2a] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Work
            </a>
            
            <a 
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="px-8 py-3.5 text-xs md:text-sm rounded-full bg-black/40 border border-white/20 text-white font-bold hover:bg-black/60 hover:border-white/50 transition-all duration-300 backdrop-blur-md"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side: Play Video Button */}
        <div 
          data-aos="zoom-in"
          data-aos-delay="500"
          className="mt-8 md:mt-0 flex flex-row md:flex-col items-center gap-3 cursor-pointer group self-start md:self-auto"
          onClick={toggleVideo}
        >
          <div className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-white/20 bg-black/30 backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-[#ff2a2a] group-hover:border-transparent transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_40px_rgba(255,42,42,0.5)]">
            {!isPlaying ? (
              // Play Icon
              <svg className="w-5 h-5 md:w-8 md:h-8 text-white ml-0.5 md:ml-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              // Pause Icon
              <svg className="w-5 h-5 md:w-8 md:h-8 text-white transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            )}
          </div>
          <span className="text-white text-[10px] md:text-xs font-black tracking-widest uppercase opacity-75 group-hover:opacity-100 transition-opacity">
            {!isPlaying ? "Play Intro" : "Pause Reel"}
          </span>
        </div>
      </div>

      {/* Downward Bounce Arrow */}
      <div 
        data-aos="fade-up"
        data-aos-delay="600"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-white/50" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="3" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
