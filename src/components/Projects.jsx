import React from 'react';

const projects = [
  {
    id: 'project-webrtc',
    image: '/project-webrtc.png',
    accentColor: '#ff2a2a',
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
    accentColor: '#ff2a2a',
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
    accentColor: '#ff2a2a',
    badge: '🗄️ Database',
    tags: ['Python', 'SQL', 'DBMS', 'CSV', 'Query Engine'],
    title: 'Mini SQL Database Engine',
    desc: 'Built a lightweight in-memory SQL engine supporting query execution, filtering, aggregation, CSV dataset operations, and SQL parsing to understand database internals and execution flow.',
    github: 'https://github.com/Dhanasirikoppisetti/mini_sql_engine',
    demo: null,
  },
];

const ExternalIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

const Projects = () => (
  <section id="projects" className="bg-black py-24 px-6 md:px-12 w-full relative overflow-hidden font-sans m-0 max-w-full border-t border-white/5">
    <div className="max-w-6xl mx-auto">

      {/* Header */}
      <div data-aos="fade-up" className="text-center mb-16">
        <p className="text-[#ff2a2a] text-sm font-black tracking-widest uppercase mb-3">FEATURED PROJECTS</p>
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
          Featured <span className="text-transparent [-webkit-text-stroke:1px_white]">Projects</span>
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, index) => (
          <div
            key={p.id}
            data-aos="fade-up"
            data-aos-delay={index * 150}
            className="bg-[#111] border border-white/5 rounded-3xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:border-[#ff2a2a]/30 group hover:shadow-[0_15px_35px_rgba(255,42,42,0.03)] flex flex-col h-full"
          >
            {/* Image Wrap */}
            <div className="relative aspect-video w-full overflow-hidden bg-neutral-900 shrink-0">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop"; // fallback image
                }}
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 z-10">
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white text-black hover:bg-[#ff2a2a] hover:text-white transition-colors duration-200"
                    title="Live Demo"
                  >
                    <ExternalIcon />
                  </a>
                )}
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white text-black hover:bg-[#ff2a2a] hover:text-white transition-colors duration-200"
                  title="GitHub Repository"
                >
                  <GitHubIcon />
                </a>
              </div>
            </div>

            {/* Content Info */}
            <div className="p-6 flex flex-col flex-1 justify-between">
              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#ff2a2a]/10 border border-[#ff2a2a]/20 text-[#ff2a2a] text-[10px] font-black uppercase tracking-wider">
                    {p.badge}
                  </span>
                  {p.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-full bg-white/5 text-white/50 text-[10px] font-bold">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-black text-white mb-3 tracking-tight leading-tight group-hover:text-[#ff2a2a] transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="text-white/60 text-xs md:text-sm font-medium leading-relaxed mb-6">
                  {p.desc}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 rounded-full border border-white/10 text-white hover:bg-white/5 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors duration-200"
                >
                  <GitHubIcon /> Code
                </a>
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 rounded-full bg-white text-black hover:bg-[#ff2a2a] hover:text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all duration-200"
                  >
                    <ExternalIcon /> Demo
                  </a>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* CTA Bottom */}
      <div data-aos="fade-up" className="text-center mt-16">
        <a
          href="https://github.com/Dhanasirikoppisetti"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-white/20 text-white hover:bg-white hover:text-black font-bold transition-all duration-300"
        >
          Explore More Projects
        </a>
      </div>

    </div>
  </section>
);

export default Projects;
