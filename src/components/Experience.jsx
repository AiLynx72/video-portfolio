import React from 'react';

/* ── SVG Icons ── */
const BuildingIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <line x1="9" y1="22" x2="9" y2="16" />
    <line x1="15" y1="22" x2="15" y2="16" />
    <line x1="9" y1="16" x2="15" y2="16" />
    <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M12 6h.01M12 10h.01" />
  </svg>
);

const CalendarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const UserIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const ProjectIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);

const DocIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
  </svg>
);

const TrophyIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34" />
    <path d="M12 2a6 6 0 0 1 6 6v1H6V8a6 6 0 0 1 6-6z" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387
      .599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416
      -.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729
      1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997
      .107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931
      0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0
      1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005
      2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653
      .242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807
      5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694
      .801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

/* ── Data ── */
const experiences = [
  {
    id: 'exp-techhub',
    role: 'Full-Stack Development with React Native Trainee',
    badge: 'Trainee',
    org: 'Technical Hub',
    orgShort: 'May 2025 – May 2026',
    duration: '05 May 2025 – 12 May 2026',
    roleLabel: 'App Developer',
    project: 'PolicyGuard AI',
    image: '/projectspace_project.jpeg',
    imageTags: ['App Developer', 'React Native', 'AI Integration', 'Project Space'],
    descriptions: [
      'Completed Full-Stack Development with React Native training at Technical Hub with practical exposure to real-world development, project collaboration, and AI-integrated application development. Built PolicyGuard AI, an Android privacy protection application that analyzes installed applications, calculates privacy risks, monitors newly installed apps, and provides smart safety recommendations.',
    ],
    responsibilities: [
      'Developed mobile application screens using React Native',
      'Implemented Android monitoring functionality',
      'Created UI interactions and user workflows',
      'Contributed to AI-integrated features',
      'Participated in Project Space activities',
      'Collaborated within a cross-functional team',
    ],
    techStack: [
      'React Native', 'React', 'Kotlin', 'JavaScript',
      'TypeScript', 'Android', 'Axios', 'Jest', 'AI Integration',
    ],
    resources: [
      { id: 'res-course',        type: 'link',        label: '📄 Course Certificate',        url: '/fsd_completion.jpeg' },
      { id: 'res-participation', type: 'link',        label: '🏆 Participation Certificate', url: '/project_space_participation.jpeg' },
      { id: 'res-apk',          type: 'download',    label: '📥 Download APK',              url: '/policyguard.apk' },
      { id: 'res-github',       type: 'link',        label: '📂 Repository',                url: 'https://github.com/Sushmitadasari/PolicyGuard-AI' },
      { id: 'res-letter',       type: 'coming_soon', label: '📜 Internship Letter' },
    ],
  },
];

/* ── Component ── */
const Experience = () => (
  <section className="experience" id="experience">
    <div className="section-container">

      {/* Header */}
      <div className="section-header animate-in">
        <p className="section-tag">MY JOURNEY</p>
        <h2 className="section-title">
          <span className="title-line title-line--left"></span>
          Work <span className="highlight">Experience</span>
          <span className="title-line title-line--right"></span>
        </h2>
      </div>

      {/* Cards */}
      <div className="exp-stack">
        {experiences.map((exp) => (
          <div className="exp-card" id={exp.id} key={exp.id}>

            {/* Glow accents */}
            <div className="exp-accent exp-accent--tl" />
            <div className="exp-accent exp-accent--br" />

            {/* ── Two-column body ── */}
            <div className="exp-body">

              {/* ── LEFT COLUMN ── */}
              <div className="exp-left">

                {/* Project image */}
                <div className="exp-img-wrap">
                  <img
                    src={exp.image}
                    alt={`${exp.org} project showcase`}
                    className="exp-img"
                    loading="lazy"
                  />
                  <div className="exp-img-overlay" />
                </div>

                {/* Tag chips under image */}
                <div className="exp-img-tags">
                  {exp.imageTags.map((tag, i) => (
                    <span className="exp-img-tag" key={i}>{tag}</span>
                  ))}
                </div>

                {/* Mini org card */}
                <div className="exp-org-card">
                  <div className="exp-org-card-title">
                    <BuildingIcon />
                    <span className="exp-org-name">{exp.org}</span>
                  </div>
                  <span className="exp-org-period">
                    <CalendarIcon /> {exp.orgShort}
                  </span>
                  <span className="exp-org-badge">
                    Internship / Training
                  </span>
                </div>

              </div>

              {/* ── RIGHT COLUMN ── */}
              <div className="exp-right">

                {/* Title row */}
                <div className="exp-title-row">
                  <h3 className="exp-role-title">{exp.role}</h3>
                </div>

                {/* Meta row */}
                <div className="exp-meta">
                  <span className="exp-meta-item">
                    <BuildingIcon />
                    <span className="exp-meta-label">Org:</span>
                    <span className="exp-meta-value">{exp.org}</span>
                  </span>
                  <span className="exp-meta-sep">·</span>
                  <span className="exp-meta-item">
                    <CalendarIcon />
                    <span className="exp-meta-label">Duration:</span>
                    <span className="exp-meta-value">{exp.duration}</span>
                  </span>
                  <span className="exp-meta-sep">·</span>
                  <span className="exp-meta-item" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <UserIcon />
                    <span className="exp-meta-label">Role:</span>
                    <span className="exp-meta-value" style={{ marginRight: '4px' }}>{exp.roleLabel}</span>
                    <span className="exp-badge-pill">{exp.badge}</span>
                  </span>
                  <span className="exp-meta-sep">·</span>
                  <span className="exp-meta-item">
                    <ProjectIcon />
                    <span className="exp-meta-label">Project:</span>
                    <span className="exp-meta-value exp-meta-project">{exp.project}</span>
                  </span>
                </div>

                {/* Descriptions */}
                <div className="exp-desc">
                  {exp.descriptions.map((para, i) => (
                    <p key={i} className="exp-desc-para">{para}</p>
                  ))}
                </div>

                {/* Responsibilities */}
                <ul className="exp-resp-grid">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i} className="exp-resp-item">{item}</li>
                  ))}
                </ul>

                {/* Tech chips */}
                <div className="exp-tech-row">
                  {exp.techStack.map((tech, i) => (
                    <span className="exp-tech-chip" key={i}>{tech}</span>
                  ))}
                </div>

              </div>
            </div>

            {/* ── RESOURCES ROW (Spans full width at the bottom) ── */}
            <div className="exp-resources">
              {exp.resources.map((res) => {
                if (res.type === 'coming_soon') {
                  return (
                    <div className="exp-res-btn exp-res-btn--disabled" key={res.id}>
                      <span>{res.label} (Coming Soon)</span>
                    </div>
                  );
                }
                if (res.type === 'download') {
                  return (
                    <a href={res.url} download className="exp-res-btn exp-res-btn--apk"
                      key={res.id} id={res.id}>
                      <span>{res.label}</span>
                    </a>
                  );
                }
                return (
                  <a href={res.url} target="_blank" rel="noopener noreferrer"
                    className="exp-res-btn" key={res.id} id={res.id}>
                    <span>{res.label}</span>
                    <ExternalIcon />
                  </a>
                );
              })}
            </div>

          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Experience;
