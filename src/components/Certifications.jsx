import React from 'react';

const dummyCertifications = [
  {
    id: 'cert-aws',
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'Issued 2024',
    badgeBg: 'from-amber-500 to-orange-600',
    iconText: 'AWS',
  },
  {
    id: 'cert-meta',
    title: 'Meta Front-End Developer',
    issuer: 'Meta Professional',
    date: 'Issued 2024',
    badgeBg: 'from-blue-600 to-cyan-500',
    iconText: 'META',
  },
  {
    id: 'cert-mongo',
    title: 'MongoDB Certified Associate',
    issuer: 'MongoDB University',
    date: 'Issued 2023',
    badgeBg: 'from-emerald-600 to-green-500',
    iconText: 'MDB',
  },
  {
    id: 'cert-gcp',
    title: 'Google Cloud Associate Engineer',
    issuer: 'Google Cloud Platform',
    date: 'Issued 2023',
    badgeBg: 'from-red-600 to-rose-500',
    iconText: 'GCP',
  },
];

const Certifications = () => (
  <section id="certifications" className="bg-gradient-to-b from-[#0a0a0d] via-[#120a0f] to-[#0a0a0d] py-20 px-6 md:px-12 w-full relative overflow-hidden font-sans m-0 max-w-full border-t border-white/5 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:32px_32px]">
    {/* Ambient glowing background orbs */}
    <div className="absolute top-10 right-10 w-80 h-80 bg-[#ff7a18]/10 rounded-full blur-[130px] pointer-events-none"></div>

    <div className="max-w-5xl mx-auto relative z-10">

      {/* Header */}
      <div data-aos="fade-up" className="text-center mb-12">
        <p className="text-[#ff7a18] text-xs font-black tracking-widest uppercase mb-2">CREDENTIALS</p>
        <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
          Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7a18] to-[#ff4d00]">Badges</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {dummyCertifications.map((cert, index) => (
          <div 
            key={cert.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-5 flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.03] hover:border-[#ff7a18]/40 hover:bg-white/[0.05] group hover:shadow-[0_15px_30px_rgba(255,122,24,0.12)]"
          >
            {/* Badge Icon */}
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.badgeBg} flex items-center justify-center text-white font-black text-xs tracking-wider shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
              {cert.iconText}
            </div>

            <span className="text-[10px] font-black text-[#ff7a18] uppercase tracking-widest block mb-1">
              {cert.issuer}
            </span>
            <h3 className="text-sm font-black text-white leading-snug tracking-tight mb-3 group-hover:text-[#ff7a18] transition-colors duration-300">
              {cert.title}
            </h3>
            
            <span className="text-[10px] font-mono text-white/50 font-semibold mt-auto">
              {cert.date}
            </span>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Certifications;
