import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Services', href: '#services' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        height: '80px',
        transition: 'all 0.4s ease',
        background: isScrolled
          ? 'rgba(15, 15, 15, 0.75)'
          : 'linear-gradient(to bottom, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.15), transparent)',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
      }}
      className={`flex items-center justify-between px-6 md:px-10 xl:px-[70px] ${
        isScrolled ? 'shadow-lg shadow-black/30' : ''
      }`}
    >
      {/* Left side: Logo */}
      <div className="flex items-center shrink-0">
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, '#home')}
          className="text-white text-[24px] font-[800] tracking-tight flex items-center group transition-all duration-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
        >
          <span>AILynx</span>
          <span className="text-[#ff4d00]">.</span>
        </a>
      </div>

      {/* Center: Horizontally Centered Navigation Links */}
      <nav className="hidden xl:flex items-center justify-center gap-[24px] 2xl:gap-[34px] absolute left-1/2 transform -translate-x-1/2">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => handleLinkClick(e, link.href)}
            className="text-white hover:text-[#ff7a18] text-[16px] font-[500] relative group py-1 transition-colors duration-300 drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]"
          >
            {link.label}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#ff7a18] to-[#ff4d00] transition-all duration-300 group-hover:w-full rounded-full"></span>
          </a>
        ))}
      </nav>

      {/* Right side: Rounded Hire Me Button */}
      <div className="hidden xl:flex items-center shrink-0">
        <a
          href="#contact"
          onClick={(e) => handleLinkClick(e, '#contact')}
          className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#ff7a18] to-[#ff4d00] text-white font-semibold text-[15px] tracking-wide transform hover:scale-105 shadow-[0_0_15px_rgba(255,122,24,0.4)] hover:shadow-[0_0_25px_rgba(255,122,24,0.7)] transition-all duration-300 border border-white/20"
        >
          Hire Me
        </a>
      </div>

      {/* Mobile Hamburger menu button */}
      <div className="xl:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none p-2 rounded-lg bg-black/40 border border-white/10 backdrop-blur-md"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`xl:hidden absolute top-[80px] left-0 w-full transition-all duration-400 ease-in-out overflow-hidden ${
          isOpen
            ? 'max-h-[550px] py-6 opacity-100 bg-[#0f0f0f]/95 backdrop-blur-[20px] border-b border-white/10 shadow-2xl'
            : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-white/90 hover:text-[#ff7a18] font-medium text-[16px] border-b border-white/5 pb-2 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="inline-block px-6 py-2.5 rounded-full bg-gradient-to-r from-[#ff7a18] to-[#ff4d00] text-white font-semibold text-[15px] shadow-[0_0_15px_rgba(255,122,24,0.4)] hover:shadow-[0_0_25px_rgba(255,122,24,0.7)] transition-all w-full text-center"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
