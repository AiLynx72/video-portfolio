import { useEffect, useRef } from 'react';

const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const ringX = useRef(0);
  const ringY = useRef(0);
  const dotX = useRef(0);
  const dotY = useRef(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    const onMouseMove = (e) => {
      dotX.current = e.clientX;
      dotY.current = e.clientY;
      dot.style.left = e.clientX + 'px';
      dot.style.top = e.clientY + 'px';
    };

    const animateRing = () => {
      ringX.current += (dotX.current - ringX.current) * 0.12;
      ringY.current += (dotY.current - ringY.current) * 0.12;
      ring.style.left = ringX.current + 'px';
      ring.style.top = ringY.current + 'px';
      rafRef.current = requestAnimationFrame(animateRing);
    };

    const onMouseLeave = () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };

    const onMouseEnter = () => {
      dot.style.opacity = '1';
      ring.style.opacity = '1';
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    rafRef.current = requestAnimationFrame(animateRing);

    const interactives = document.querySelectorAll(
      'a, button, .skill-card, .project-card, .social-icon, .btn-primary, .btn-secondary'
    );
    interactives.forEach(el => {
      el.addEventListener('mouseenter', () => ring.classList.add('hovered'));
      el.addEventListener('mouseleave', () => ring.classList.remove('hovered'));
    });

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
};

export default Cursor;
