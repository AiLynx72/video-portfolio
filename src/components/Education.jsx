const educationData = [
  {
    id: 'edu-college',
    icon: '🎓',
    institution: 'Aditya College of Engineering and Technology',
    period: '2023 – Present',
    degree: 'B.Tech – Artificial Intelligence & Machine Learning',
    result: 'CGPA: 8.68',
    current: true,
  },
  {
    id: 'edu-junior',
    icon: '📚',
    institution: 'Sri Chaitanya Junior College',
    period: '2021 – 2023',
    degree: 'Senior Secondary (Class XII)',
    result: 'Percentage: 87.80%',
    current: false,
  },
  {
    id: 'edu-school',
    icon: '🏫',
    institution: 'Surya Public School',
    period: '2020 – 2021',
    degree: 'Secondary (Class X)',
    result: 'CGPA: 10.0',
    current: false,
  },
];

const Education = () => (
  <section className="education" id="education">
    <div className="section-container">

      <div className="section-header animate-in">
        <p className="section-tag">MY JOURNEY</p>
        <h2 className="section-title">
          <span className="title-line title-line--left"></span>
          My <span className="highlight">Education</span>
          <span className="title-line title-line--right"></span>
        </h2>
      </div>

      <div className="edu-timeline">
        {educationData.map((item, index) => (
          <div className="edu-item animate-in" id={item.id} key={item.id}>

            {/* Vertical line connector */}
            {index < educationData.length - 1 && (
              <div className="edu-connector" />
            )}

            {/* Icon node */}
            <div className={`edu-node${item.current ? ' edu-node--active' : ''}`}>
              <span className="edu-node-icon">{item.icon}</span>
            </div>

            {/* Card */}
            <div className={`edu-card${item.current ? ' edu-card--active' : ''}`}>
              <div className="edu-card-top">
                <span className="edu-period">{item.period}</span>
                {item.current && <span className="edu-badge">Current</span>}
              </div>
              <h3 className="edu-institution">{item.institution}</h3>
              <p className="edu-degree">{item.degree}</p>
              <span className="edu-result">{item.result}</span>
            </div>

          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Education;
