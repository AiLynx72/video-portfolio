import React from 'react';

const educationData = [
  {
    id: 'edu-college',
    icon: '🎓',
    institution: 'School of Engineering & Technology',
    period: '2023 – Present',
    degree: 'B.Tech – Artificial Intelligence & Machine Learning',
    result: 'CGPA: 8.68',
    current: true,
  },
  {
    id: 'edu-junior',
    icon: '📚',
    institution: 'Higher Secondary Academy',
    period: '2021 – 2023',
    degree: 'Senior Secondary (Class XII)',
    result: 'Percentage: 87.80%',
    current: false,
  },
  {
    id: 'edu-school',
    icon: '🏫',
    institution: 'Secondary High School',
    period: '2020 – 2021',
    degree: 'Secondary (Class X)',
    result: 'CGPA: 10.0',
    current: false,
  },
];

const Education = () => (
  <section id="education" className="bg-[#0a0a0d] py-24 px-6 md:px-12 w-full relative overflow-hidden font-sans m-0 max-w-full border-t border-white/5 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:32px_32px]">
    {/* Ambient background glow orbs */}
    <div className="absolute top-10 right-0 w-96 h-96 bg-[#ff4d00]/10 rounded-full blur-[120px] pointer-events-none"></div>
    <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#ff2a2a]/10 rounded-full blur-[120px] pointer-events-none"></div>

    <div className="max-w-6xl mx-auto relative z-10">

      {/* Header */}
      <div data-aos="fade-up" className="text-center mb-16">
        <p className="text-[#ff4d00] text-sm font-black tracking-widest uppercase mb-3">MY JOURNEY</p>
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7a18] to-[#ff4d00]">Education</span>
        </h2>
      </div>

      {/* Timeline wrapper */}
      <div className="relative border-l border-white/10 ml-4 md:ml-12 pl-8 md:pl-16 space-y-12">
        {educationData.map((item, index) => (
          <div 
            key={item.id} 
            data-aos="fade-up" 
            data-aos-delay={index * 150}
            className="relative flex flex-col md:flex-row gap-6 md:gap-12 items-start"
          >
            {/* Timeline node icon */}
            <div className={`absolute -left-[53px] md:-left-[85px] w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 z-10 transition-all duration-300 ${
              item.current 
                ? 'bg-gradient-to-r from-[#ff7a18] to-[#ff4d00] border-[#ff7a18] text-white shadow-[0_0_25px_rgba(255,122,24,0.6)]' 
                : 'bg-neutral-900 border-white/20 text-white/70 shadow-md'
            }`}>
              <span className="text-base md:text-lg">{item.icon}</span>
            </div>

            {/* Content Card */}
            <div className={`w-full rounded-2xl p-6 md:p-8 backdrop-blur-xl transition-all duration-300 hover:scale-[1.01] ${
              item.current 
                ? 'bg-gradient-to-br from-red-950/40 via-neutral-900/80 to-black border border-[#ff4d00]/40 shadow-[0_15px_35px_rgba(255,77,0,0.12)]' 
                : 'bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.05] shadow-[0_10px_30px_rgba(0,0,0,0.4)]'
            }`}>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-4">
                <span className={`text-xs font-mono tracking-wider font-bold ${
                  item.current ? 'text-[#ff7a18]' : 'text-white/50'
                }`}>{item.period}</span>
                {item.current && (
                  <span className="px-3.5 py-1 rounded-full bg-gradient-to-r from-[#ff7a18]/20 to-[#ff4d00]/20 border border-[#ff7a18]/40 text-[#ff7a18] text-[10px] font-black tracking-wider uppercase w-fit shadow-sm">
                    Current
                  </span>
                )}
              </div>
              
              <h3 className="text-xl md:text-2xl font-black text-white mb-2 tracking-tight">{item.institution}</h3>
              <p className="text-white/70 text-sm md:text-base font-semibold mb-4">{item.degree}</p>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-white/50">Result:</span>
                <span className="text-[#ff7a18] text-sm font-black tracking-wide">{item.result}</span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Education;
