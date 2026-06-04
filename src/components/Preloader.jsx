import { useState, useEffect, useRef } from 'react';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    intervalRef.current = setInterval(() => {
      setProgress(prev => {
        const next = prev + Math.random() * 18 + 5;
        if (next >= 100) {
          clearInterval(intervalRef.current);
          setTimeout(() => {
            setHidden(true);
            document.body.style.overflow = '';
          }, 350);
          return 100;
        }
        return next;
      });
    }, 120);

    return () => {
      clearInterval(intervalRef.current);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className={`preloader${hidden ? ' hidden' : ''}`} id="preloader">
      <div className="preloader-inner">
        <div className="preloader-logo">Dhana Siri Koppisetti's Portfolio</div>
        <div className="preloader-bar">
          <div className="preloader-fill" style={{ width: `${progress}%` }} />
        </div>
        <p className="preloader-text">Loading Portfolio...</p>
      </div>
    </div>
  );
};

export default Preloader;
