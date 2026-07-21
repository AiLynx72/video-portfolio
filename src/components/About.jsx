import React from 'react';
import reactImage from '../assets/about/react.png';
import nodeImage from '../assets/about/node.png';
import mongoImage from '../assets/about/mongodb.png';

const About = () => {
  const handleExploreClick = (e) => {
    e.preventDefault();
    const target = document.querySelector('#skills');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans m-0 max-w-full">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge Lanyard String and Card */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-4 shadow-[0_20px_40px_rgba(0,0,0,0.5)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/35 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-white/5">
                <img 
                  src="/ailynx_id.jpg" 
                  alt="AILynx Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Badge text info */}
              <div className="mt-4 text-center">
                <h4 className="text-white text-base font-black tracking-tight uppercase">AILynx</h4>
                <p className="text-white/40 text-[10px] font-mono tracking-widest uppercase mt-1">AI & ML Developer</p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Description Info */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6 tracking-tight">Hello!</h2>
          
          <p className="text-lg font-bold mb-6 leading-relaxed max-w-3xl text-red-50">
            Hi, my name is <span className="text-black text-xl font-black tracking-wide uppercase">AILynx</span>. I am a B.Tech student specializing in <span className="text-black font-black">Artificial Intelligence</span> and <span className="text-black font-black">Machine Learning</span>, with a strong passion for software engineering and technical problem solving.
          </p>

          <p className="text-base font-semibold mb-6 leading-relaxed max-w-3xl text-red-50/90">
            I specialize in crafting responsive full-stack web applications, integrating smart machine learning models, and building secure, optimized backend services.
          </p>

          <p className="text-base font-semibold mb-12 leading-relaxed max-w-3xl text-red-50/90">
            My engineering philosophy combines visual perfection with robust technical functionality, translating user-centered goals into high-impact digital products.
          </p>

          {/* Action CTA */}
          <div className="flex gap-4 items-center">
            <a
              href="#skills"
              onClick={handleExploreClick}
              className="px-6 py-3 rounded-full bg-black text-white font-bold hover:bg-white hover:text-[#ff2a2a] transition-all duration-300 transform hover:scale-105"
            >
              Explore Skills
            </a>
          </div>

          {/* Horizontal Tech Skills row */}
          <div className="flex items-center gap-8 md:gap-12 mt-16 border-t border-white/10 pt-8">
            <img 
              data-aos="zoom-in" data-aos-delay="300"
              src={reactImage} 
              alt="React" 
              className="w-16 h-16 md:w-20 md:h-20 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl" 
            />
            <img 
              data-aos="zoom-in" data-aos-delay="450"
              src={nodeImage} 
              alt="Node.js" 
              className="w-16 h-16 md:w-20 md:h-20 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl" 
            />
            <img 
              data-aos="zoom-in" data-aos-delay="600"
              src={mongoImage} 
              alt="MongoDB" 
              className="w-16 h-16 md:w-20 md:h-20 object-contain hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl" 
            />
          </div>

        </div>
      </div>

      {/* Torn paper decorative SVG divider */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-black">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Background stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-25 animate-pulse">
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-25 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
