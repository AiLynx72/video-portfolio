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
  <section id="experience" className="bg-[#050505] py-20 px-6 md:px-12 w-full relative overflow-hidden font-sans m-0 max-w-full border-t border-white/5">
    <div className="max-w-4xl mx-auto">

      {/* Header */}
      <div data-aos="fade-up" className="text-center mb-12">
        <p className="text-[#ff2a2a] text-xs font-black tracking-widest uppercase mb-2">CAREER PATH</p>
        <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
          Work <span className="text-transparent [-webkit-text-stroke:1px_white]">Experience</span>
        </h2>
      </div>

      {/* Experience list */}
      <div className="flex flex-col gap-6">
        {experiences.map((exp, index) => (
          <div 
            key={exp.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="bg-[#111] border border-white/5 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:border-[#ff2a2a]/30 group hover:shadow-[0_10px_25px_rgba(255,42,42,0.02)]"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
              <div>
                <h3 className="text-lg md:text-xl font-black text-white group-hover:text-[#ff2a2a] transition-colors duration-300">
                  {exp.role}
                </h3>
                <p className="text-white/60 text-xs md:text-sm font-semibold">{exp.company}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#ff2a2a] font-bold">{exp.period}</span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-white/50 text-[10px] font-bold uppercase">
                  {exp.type}
                </span>
              </div>
            </div>

            <p className="text-white/60 text-xs md:text-sm font-medium leading-relaxed mb-4">
              {exp.desc}
            </p>

            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
              {exp.skills.map((skill, i) => (
                <span key={i} className="px-2.5 py-0.5 rounded-full bg-white/5 text-white/40 text-[10px] font-bold">
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
