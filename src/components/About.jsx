const Accent = ({ children }) => (
  <span className="about-accent">{children}</span>
);

const About = () => {
  const handleClick = (e) => {
    e.preventDefault();
    document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="about" id="about">
      <div className="section-container">

        <div className="section-header animate-in">
          <p className="section-tag">Get To Know Me</p>
          <h2 className="section-title">
            <span className="title-line title-line--left"></span>
            About <span className="highlight">Me</span>
            <span className="title-line title-line--right"></span>
          </h2>
        </div>

        <div className="about-content">

          {/* ── Left: Coding GIF ────────────────────── */}
          <div className="about-gif-wrapper animate-in-left">
            <div className="about-gif-glow" />
            <div className="about-gif-frame">
              <img
                src="/girl-coder.png"
                alt="Girl developer coding illustration"
                className="about-gif"
                loading="lazy"
              />
            </div>
          </div>

          {/* ── Right: Text ──────────────────────────── */}
          <div className="about-text animate-in">

            <p className="about-description">
              I am a B.Tech student specializing in{' '}
              <Accent>Artificial Intelligence</Accent> and{' '}
              <Accent>Machine Learning</Accent> with a strong interest in{' '}
              <Accent>software development</Accent> and problem solving.
            </p>

            <p className="about-description">
              I enjoy building <Accent>scalable web applications</Accent>, backend systems,
              and real-world solutions that combine creativity with technology.
            </p>

            <p className="about-description">
              My goal is to create impactful digital solutions while continuously improving
              my skills in software engineering, AI, databases, and modern web development.
            </p>

            <a
              href="#skills"
              className="btn-primary"
              id="btn-about-explore"
              onClick={handleClick}
            >
              Explore More →
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
