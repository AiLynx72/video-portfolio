import React from 'react';

const Footer = () => {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-[#111111] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh] border-t border-white/5 m-0 max-w-full">
      
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1">
          <p>AI & Machine Learning Student</p>
          <p>Full-Stack Software Development</p>
          <p>Dynamic UI & API Integrations</p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <p>Continuous Tech Exploration</p>
          <a 
            href="#projects" 
            onClick={(e) => handleNavClick(e, '#projects')}
            className="underline hover:text-white transition-colors mt-1 underline-offset-4 decoration-1"
          >
            View Projects
          </a>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <p>Open for Opportunities</p>
          <p>{new Date().getFullYear()}</p>
        </div>
      </div>

      {/* Middle Huge Watermark Text */}
      <div className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden">
        <h2 className="text-[14vw] md:text-[12vw] leading-none font-sans font-black tracking-tighter lowercase select-none text-[#1b1b1b] w-full text-center">
          ailynx
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-6">
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, '#contact')}
            className="underline hover:text-white transition-colors underline-offset-4 decoration-1 font-bold"
          >
            Contact
          </a>
          <p className="text-white/60 font-mono text-[9px] md:text-[10px]">
            &copy; {new Date().getFullYear()} AILynx | Crafted with React
          </p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <a href="mailto:koppisettidhanasiri@gmail.com" className="underline hover:text-white transition-colors underline-offset-4 decoration-1 lowercase">koppisettidhanasiri@gmail.com</a>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <a href="https://github.com/Dhanasirikoppisetti" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">GitHub</a>
          <a href="https://www.linkedin.com/in/dhanasiri-koppisetti-655565302/" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors underline-offset-4 decoration-1">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
