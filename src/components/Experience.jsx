import React from 'react';

const experiences = [
  {
    id: 'exp-1',
    role: 'Full-Stack Developer Intern',
    company: 'Tech Solutions Inc.',
    period: '2024 – Present',
    type: 'Internship',
    desc: 'Assisted in building modern, responsive web applications using React, Node.js, and cloud APIs. Collaborated with cross-functional teams to implement new features and optimize performance.',
    skills: ['React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
  },
  {
    id: 'exp-2',
    role: 'Software Engineer Trainee',
    company: 'Apex Innovations',
    period: '2023 – 2024',
    type: 'Trainee',
    desc: 'Participated in full-lifecycle software development, creating mobile UI layouts and optimizing database queries for scalable cloud services.',
    skills: ['Python', 'JavaScript', 'MongoDB', 'SQL', 'Git'],
  },
];

const Experience = () => (
  <section id="experience" className="bg-[#0a0a0d] py-20 px-6 md:px-12 w-full relative overflow-hidden font-sans m-0 max-w-full border-t border-white/5 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:32px_32px]">
    {/* Ambient glowing background orbs */}
    <div className="absolute top-10 left-1/3 w-80 h-80 bg-[#ff7a18]/10 rounded-full blur-[130px] pointer-events-none"></div>

    <div className="max-w-4xl mx-auto relative z-10">

      {/* Header */}
      <div data-aos="fade-up" className="text-center mb-12">
        <p className="text-[#ff7a18] text-xs font-black tracking-widest uppercase mb-2">CAREER PATH</p>
        <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
          Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff7a18] to-[#ff4d00]">Experience</span>
        </h2>
      </div>

      {/* Experience list */}
      <div className="flex flex-col gap-6">
        {experiences.map((exp, index) => (
          <div 
            key={exp.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-[#ff7a18]/40 hover:bg-white/[0.05] group hover:shadow-[0_15px_30px_rgba(255,122,24,0.12)]"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
              <div>
                <h3 className="text-lg md:text-xl font-black text-white group-hover:text-[#ff7a18] transition-colors duration-300">
                  {exp.role}
                </h3>
                <p className="text-white/60 text-xs md:text-sm font-semibold">{exp.company}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#ff7a18] font-bold">{exp.period}</span>
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#ff7a18]/20 to-[#ff4d00]/20 border border-[#ff7a18]/30 text-[#ff7a18] text-[10px] font-bold uppercase shadow-sm">
                  {exp.type}
                </span>
              </div>
            </div>

            <p className="text-white/70 text-xs md:text-sm font-medium leading-relaxed mb-4">
              {exp.desc}
            </p>

            <div className="flex flex-wrap gap-2 pt-3 border-t border-white/10">
              {exp.skills.map((skill, i) => (
                <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-[10px] font-bold shadow-sm">
                  {skill}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Experience;
