import { useEffect, useRef, useState } from 'react';

const StatItem = ({ target, label, isStatic, staticVal }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const animated = useRef(false);

  useEffect(() => {
    if (isStatic) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const duration = 1800;
          const step = Math.ceil(target / (duration / 16));
          let current = 0;
          const timer = setInterval(() => {
            current += step;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            setCount(current);
          }, 16);
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, isStatic]);

  return (
    <div className="stat-item animate-in" ref={ref}>
      <h3>{isStatic ? staticVal : <><span className="counter">{count}</span>+</>}</h3>
      <p>{label}</p>
    </div>
  );
};

const StatsStrip = () => (
  <div className="stats-strip">
    <div className="stats-grid">
      <StatItem target={3} label="Featured Projects" />
      <StatItem target={6} label="Languages Known" />
      <StatItem target={15} label="Technologies Used" />
      <StatItem isStatic staticVal="8.66" label="CGPA Achieved" />
    </div>
  </div>
);

export default StatsStrip;
