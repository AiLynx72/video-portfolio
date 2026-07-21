import React from 'react';

const skillsData = [
  {
    id: 'skill-languages',
    gradient: 'from-orange-600 to-amber-500',
    icon: (
      <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
        <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
      </svg>
    ),
    title: 'Languages',
    tags: [
      { bg: '#a8b9cc', label: 'C', short: 'C' },
      { bg: '#3776ab', label: 'Python', short: 'Py' },
      { bg: '#f0db4f', color: '#333', label: 'JavaScript', short: 'JS' },
      { bg: '#f89820', label: 'Java', short: 'Jv' },
      { bg: '#00599c', label: 'C++', short: 'C+' },
      { bg: '#3178c6', label: 'TypeScript', short: 'TS' },
    ],
  },
  {
    id: 'skill-frontend',
    gradient: 'from-blue-600 to-indigo-500',
    icon: (
      <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Frontend',
    tags: [
      { bg: '#e34c26', label: 'HTML', short: 'H5' },
      { bg: '#264de4', label: 'CSS', short: 'C3' },
      { bg: '#61dafb', color: '#222', label: 'React.js', short: 'Re' },
      { bg: '#000', label: 'Next.js', short: 'Nx' },
      { bg: '#06b6d4', label: 'Tailwind', short: 'Tw' },
    ],
  },
  {
    id: 'skill-backend',
    gradient: 'from-emerald-600 to-green-500',
    icon: (
      <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
        <path d="M5 12H3l9-9 9 9h-2M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
      </svg>
    ),
    title: 'Backend',
    tags: [
      { bg: '#339933', label: 'Node.js', short: 'Nd' },
      { bg: '#888', label: 'Express.js', short: 'Ex' },
      { bg: '#ff6c37', label: 'REST APIs', short: '🌐' },
      { bg: '#0496ff', label: 'WebRTC', short: '📡' },
      { bg: '#f97316', label: 'Webhooks', short: '🔗' },
    ],
  },
  {
    id: 'skill-databases',
    gradient: 'from-cyan-600 to-sky-500',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" width="24" height="24">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    title: 'Databases',
    tags: [
      { bg: '#336791', label: 'PostgreSQL', short: 'Pg' },
      { bg: '#4479a1', label: 'MySQL', short: 'My' },
      { bg: '#dc382d', label: 'Redis', short: 'Rd' },
      { bg: '#f59e0b', label: 'SQL', short: '🗃️' },
    ],
  },
  {
    id: 'skill-tools',
    gradient: 'from-red-600 to-rose-500',
    icon: (
      <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
        <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
      </svg>
    ),
    title: 'Tools & Platforms',
    tags: [
      { bg: '#f05032', label: 'Git', short: 'Gt' },
      { bg: '#24292e', label: 'GitHub', short: 'GH' },
      { bg: '#2496ed', label: 'Docker', short: '🐳' },
      { bg: '#000', label: 'Vercel', short: '▲' },
      { bg: '#00c7b7', label: 'Netlify', short: 'Nf' },
    ],
  },
  {
    id: 'skill-concepts',
    gradient: 'from-purple-600 to-fuchsia-500',
    icon: (
      <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Core Concepts',
    tags: [
      { bg: '#f97316', label: 'DSA', short: 'DS' },
      { bg: '#06b6d4', label: 'DBMS', short: 'DB' },
      { bg: '#8b5cf6', label: 'System Design', short: 'SD' },
      { bg: '#10b981', label: 'OOP', short: 'OO' },
      { bg: '#f59e0b', label: 'Async Processing', short: '⚡' },
    ],
  },
];

const Skills = () => (
  <section id="skills" className="bg-black py-24 px-6 md:px-12 w-full relative overflow-hidden font-sans m-0 max-w-full border-t border-white/5">
    <div className="max-w-6xl mx-auto">
      
      {/* Header */}
      <div data-aos="fade-up" className="text-center mb-16">
        <p className="text-[#ff2a2a] text-sm font-black tracking-widest uppercase mb-3">MY SKILLS</p>
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          Tech <span className="text-transparent [-webkit-text-stroke:1px_white]">Stack</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((skill, index) => (
          <div 
            key={skill.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="bg-[#111] border border-white/5 rounded-3xl p-6 hover:border-[#ff2a2a]/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_15px_30px_rgba(255,42,42,0.03)] group"
          >
            {/* Title / Icon Row */}
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${skill.gradient} flex items-center justify-center shadow-md`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-black text-white group-hover:text-[#ff2a2a] transition-colors duration-300">{skill.title}</h3>
            </div>

            {/* Tags wrapper */}
            <div className="flex flex-wrap gap-2.5">
              {skill.tags.map((tag) => (
                <span 
                  key={tag.label}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white/80 hover:text-white text-xs font-bold transition-all duration-200 border border-white/5"
                >
                  <i 
                    className="w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-black italic not-italic font-mono"
                    style={{ background: tag.bg, color: tag.color || '#fff' }}
                  >
                    {tag.short}
                  </i>
                  {tag.label}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
