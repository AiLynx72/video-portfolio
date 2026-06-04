const skillsData = [
  {
    id: 'skill-languages',
    gradient: 'linear-gradient(135deg, #e34f26, #f59e0b)',
    icon: (
      <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
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
    gradient: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
    icon: (
      <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
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
    gradient: 'linear-gradient(135deg, #339933, #68a063)',
    icon: (
      <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
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
    gradient: 'linear-gradient(135deg, #06b6d4, #0891b2)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" width="28" height="28">
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
    gradient: 'linear-gradient(135deg, #f05032, #e04b2a)',
    icon: (
      <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
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
    gradient: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
    icon: (
      <svg viewBox="0 0 24 24" fill="white" width="28" height="28">
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
  <section className="skills" id="skills">
    <div className="section-container">
      <div className="section-header animate-in">
        <p className="section-tag">MY SKILLS</p>
        <h2 className="section-title">
          <span className="title-line title-line--left"></span>
          My <span className="highlight">Skills</span>
          <span className="title-line title-line--right"></span>
        </h2>
      </div>

      <div className="skills-grid">
        {skillsData.map((skill) => (
          <div className="skill-card animate-in" id={skill.id} key={skill.id}>
            <div className="skill-icon" style={{ background: skill.gradient }}>
              {skill.icon}
            </div>
            <h3>{skill.title}</h3>
            <div className="skill-tags">
              {skill.tags.map((tag) => (
                <span className="stag" key={tag.label}>
                  <i style={{ background: tag.bg, color: tag.color || '#fff' }}>{tag.short}</i>
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
