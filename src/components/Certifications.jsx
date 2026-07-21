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
  <section id="certifications" className="bg-black py-20 px-6 md:px-12 w-full relative overflow-hidden font-sans m-0 max-w-full border-t border-white/5">
    <div className="max-w-5xl mx-auto">

      {/* Header */}
      <div data-aos="fade-up" className="text-center mb-12">
        <p className="text-[#ff2a2a] text-xs font-black tracking-widest uppercase mb-2">CREDENTIALS</p>
        <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
          Certifications & <span className="text-transparent [-webkit-text-stroke:1px_white]">Badges</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {dummyCertifications.map((cert, index) => (
          <div 
            key={cert.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="bg-[#111] border border-white/5 rounded-2xl p-5 flex flex-col items-center text-center transition-all duration-300 hover:scale-[1.02] hover:border-[#ff2a2a]/30 group hover:shadow-[0_10px_25px_rgba(255,42,42,0.02)]"
          >
            {/* Badge Icon */}
            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cert.badgeBg} flex items-center justify-center text-white font-black text-xs tracking-wider shadow-md mb-4`}>
              {cert.iconText}
            </div>

            <span className="text-[10px] font-black text-[#ff2a2a] uppercase tracking-widest block mb-1">
              {cert.issuer}
            </span>
            <h3 className="text-sm font-black text-white leading-snug tracking-tight mb-3 group-hover:text-[#ff2a2a] transition-colors duration-300">
              {cert.title}
            </h3>
            
            <span className="text-[10px] font-mono text-white/40 font-semibold mt-auto">
              {cert.date}
            </span>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Certifications;
