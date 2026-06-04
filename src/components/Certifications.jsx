const certifications = [
  {
    id: 'cert-html-css',
    title: 'HTML & CSS',
    issuer: 'Certiport / Microsoft',
    image: '/htmlcsscoverimage.png',
    link: '/HTML&CSS.pdf',
  },
  {
    id: 'cert-java',
    title: 'Java SE (Oracle Certified)',
    issuer: 'Oracle',
    image: '/JAVA8OJA.jpg',
    link: '/Oracle_java.pdf',
  },
  {
    id: 'cert-python',
    title: 'Python Essentials',
    issuer: 'Cisco Networking Academy',
    image: '/pythoncoverpage.png',
    link: '/cisco_python.pdf',
  },
  {
    id: 'cert-c',
    title: 'C Programming Language',
    issuer: 'C Language Archive (CLA)',
    image: '/c_coverpage.png',
    link: '/cla_c.pdf',
  },
  {
    id: 'cert-js1',
    title: 'JavaScript Essentials 1',
    issuer: 'Cisco Networking Academy',
    image: '/js1_coverpage.png',
    link: '/23MH1A4228_JS1.pdf',
  },
  {
    id: 'cert-js2',
    title: 'JavaScript Essentials 2',
    issuer: 'Cisco Networking Academy',
    image: '/js2_coverpage.png',
    link: '/23MH1A4228_JS2.pdf',
  },
  {
    id: 'cert-mongodb',
    title: 'MongoDB Associate Developer',
    issuer: 'MongoDB University',
    image: '/mongodb-associate-developer.11.png',
    link: '/MongoDBAssociateDeveloper_Badge20260318-31-e5g16f.pdf',
  },
  {
    id: 'cert-aws',
    title: 'AWS Academy Cloud Foundations',
    issuer: 'Amazon Web Services',
    image: '/aws-academy-graduate-aws-academy-cloud-foundations.png',
    link: '/AWS.pdf',
  },
  {
    id: 'cert-dbms',
    title: 'Database Management Systems',
    issuer: 'NPTEL / IIT',
    image: '/nptelcoverpage.jpg',
    link: '/DBMS.pdf',
  },
  {
    id: 'cert-sql-inter',
    title: 'SQL (Intermediate)',
    issuer: 'HackerRank',
    image: '/sql_intercoverpage.png',
    link: '/sql_intermediate certificate.pdf',
  },
  {
    id: 'cert-genai',
    title: 'Generative AI',
    issuer: 'Oracle',
    image: '/oracle_genai_coverpage.png',
    link: '/GenAI.pdf',
  },
  {
    id: 'cert-github',
    title: 'GitHub Foundations',
    issuer: 'GitHub',
    image: '/github_coverpage.png',
    link: '/githubcert.pdf',
  },
];

const LinkIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const Certifications = () => (
  <section className="certifications" id="certifications">
    <div className="section-container">

      <div className="section-header animate-in">
        <p className="section-tag">MY CERTIFICATIONS</p>
        <h2 className="section-title">
          <span className="title-line title-line--left"></span>
          My <span className="highlight">Certifications</span>
          <span className="title-line title-line--right"></span>
        </h2>
      </div>

      <div className="cert-grid">
        {certifications.map((cert) => (
          <div className="cert-card animate-in" id={cert.id} key={cert.id}>

            {/* Clickable image */}
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-img-wrapper"
              id={`${cert.id}-img`}
              aria-label={`View ${cert.title} certificate`}
            >
              <img
                src={cert.image}
                alt={`${cert.title} certificate preview`}
                className="cert-img"
                loading="lazy"
              />
              <div className="cert-img-overlay">
                <span className="cert-view-icon">
                  <LinkIcon /> View
                </span>
              </div>
            </a>

            {/* Info */}
            <div className="cert-info">
              <span className="cert-issuer">{cert.issuer}</span>
              <h3 className="cert-title">{cert.title}</h3>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cert-btn"
                id={`${cert.id}-btn`}
              >
                <LinkIcon /> View Certificate
              </a>
            </div>

          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Certifications;
