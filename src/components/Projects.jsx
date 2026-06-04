/* External link icon */
const ExternalIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

/* GitHub icon */
const GitHubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const projects = [
  {
    id: 'project-webrtc',
    image: '/project-webrtc.png',
    accentColor: '#2980b9',
    accentGlow: 'rgba(41, 128, 185, 0.3)',
    badge: '🎥 Real-Time',
    tags: ['WebRTC', 'React', 'Next.js', 'Socket.IO', 'TypeScript'],
    title: 'WebRTC Video Chat Application',
    desc: 'Built a real-time video communication platform supporting peer-to-peer communication using WebRTC and scalable frontend architecture. Designed for low-latency communication with room-based interactions and seamless user experience.',
    github: 'https://github.com/Dhanasirikoppisetti/video_chat',
    demo: 'https://video-chat-2-lg6z.onrender.com/',
  },
  {
    id: 'project-payment',
    image: '/project-payment.png',
    accentColor: '#f97316',
    accentGlow: 'rgba(249, 115, 22, 0.3)',
    badge: '💳 Payments',
    tags: ['Node.js', 'Redis', 'Webhooks', 'Backend', 'Async Processing'],
    title: 'Production-Ready Payment Gateway',
    desc: 'Developed an asynchronous payment processing system with secure webhook handling, Redis queue management, refund workflows, and scalable backend architecture for reliable transaction processing.',
    github: 'https://github.com/Dhanasirikoppisetti/payment-gateway-async',
    demo: null,
  },
  {
    id: 'project-sql',
    image: '/project-sql.png',
    accentColor: '#7c3aed',
    accentGlow: 'rgba(124, 58, 237, 0.3)',
    badge: '🗄️ Database',
    tags: ['Python', 'SQL', 'DBMS', 'CSV', 'Query Engine'],
    title: 'Mini SQL Database Engine',
    desc: 'Built a lightweight in-memory SQL engine supporting query execution, filtering, aggregation, CSV dataset operations, and SQL parsing to understand database internals and execution flow.',
    github: 'https://github.com/Dhanasirikoppisetti/mini_sql_engine',
    demo: null,
  },
];

const Projects = () => (
  <section className="projects" id="projects">
    <div className="section-container">

      <div className="section-header animate-in">
        <p className="section-tag">FEATURED PROJECTS</p>
        <h2 className="section-title">
          <span className="title-line title-line--left"></span>
          Featured <span className="highlight">Projects</span>
          <span className="title-line title-line--right"></span>
        </h2>
      </div>

      <div className="projects-grid">
        {projects.map((p) => (
          <div
            className="project-card animate-in"
            id={p.id}
            key={p.id}
            style={{ '--proj-accent': p.accentColor, '--proj-glow': p.accentGlow }}
          >
            {/* ── Image banner ── */}
            <div className="project-img-wrapper">
              <img
                src={p.image}
                alt={p.title}
                className="project-banner-img"
                loading="lazy"
              />
              {/* Overlay on hover */}
              <div className="project-overlay">
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    id={`${p.id}-demo`}
                  >
                    <ExternalIcon /> Live Demo
                  </a>
                )}
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  id={`${p.id}-code`}
                >
                  <GitHubIcon /> GitHub
                </a>
              </div>
            </div>

            {/* ── Info ── */}
            <div className="project-info">
              <div className="project-tags">
                <span className="tag tag--badge">{p.badge}</span>
                {p.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>

              {/* ── Action buttons ── */}
              <div className="project-actions">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="proj-btn proj-btn--ghost"
                  id={`${p.id}-gh-btn`}
                >
                  <GitHubIcon /> GitHub
                </a>
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-btn proj-btn--accent"
                    id={`${p.id}-demo-btn`}
                  >
                    <ExternalIcon /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── CTA ── */}
      <div className="projects-cta">
        <a
          href="https://github.com/Dhanasirikoppisetti"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline"
          id="btn-more-projects"
        >
          Explore More Projects →
        </a>
      </div>

    </div>
  </section>
);

export default Projects;
