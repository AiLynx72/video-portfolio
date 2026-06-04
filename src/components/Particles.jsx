import { useEffect } from 'react';

const Particles = () => {
  useEffect(() => {
    const container = document.getElementById('particles');
    if (!container) return;

    const colors = [
      'rgba(249,115,22,0.55)',
      'rgba(251,146,60,0.35)',
      'rgba(245,158,11,0.45)',
      'rgba(255,255,255,0.12)',
      'rgba(249,115,22,0.25)',
    ];

    for (let i = 0; i < 40; i++) {
      const p = document.createElement('div');
      p.classList.add('particle');
      const size = Math.random() * 5 + 1.5;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const left = Math.random() * 100;
      const duration = Math.random() * 16 + 20;
      const delay = Math.random() * 14;

      p.style.cssText = `
        width:${size}px;height:${size}px;
        left:${left}%;
        background:${color};
        animation-duration:${duration}s;
        animation-delay:-${delay}s;
      `;
      container.appendChild(p);
    }

    return () => { if (container) container.innerHTML = ''; };
  }, []);

  return <div className="particles" id="particles" />;
};

export default Particles;
