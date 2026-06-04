/**
 * Scroll reveal animations — mirrors the vanilla JS version.
 * Called once from App.jsx after first render.
 */
export function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  // Apply stagger delay to card lists (0.1s increments)
  const staggerSelectors = ['.skill-card', '.project-card', '.exp-card', '.about-card', '.stat-item'];
  staggerSelectors.forEach(sel => {
    document.querySelectorAll(sel).forEach((card, i) => {
      card.style.transitionDelay = `${i * 0.1}s`;
    });
  });

  // Observe all scroll elements
  const elements = document.querySelectorAll(
    '.section-header, .about-image-wrapper, .about-gif-wrapper, .about-text, .about-card, .skill-card, .project-card, .exp-card, .contact-info, .contact-form, .footer'
  );
  elements.forEach((el) => observer.observe(el));
}

/**
 * 3D tilt effect on cards.
 */
export function initTilt() {
  document.querySelectorAll('.project-card, .skill-card').forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotX = (y - cy) / 16;
      const rotY = (cx - x) / 16;
      card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}
