import { useState, useEffect } from 'react';

const navItems = [
  { href: '#home',             label: 'Home'          },
  { href: '#about',            label: 'About'         },
  { href: '#education',        label: 'Education'     },
  { href: '#skills',           label: 'Skills'        },
  { href: '#projects',         label: 'Projects'      },
  { href: '#experience',       label: 'Experience'    },
  { href: '#certifications',   label: 'Certifications'},
  { href: '#contact',          label: 'Contact'       },
];

/* Developer-style logo:  </>  Dhana Siri */
const DevLogo = () => (
  <div className="nav-brand" aria-label="Dhana Siri – home">
    <span className="dev-logo-icon" aria-hidden="true">&lt;/&gt;</span>
    <span className="dev-logo-name">Dhana Siri</span>
  </div>
);

/* Moon SVG icon */
const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

/* Sun SVG icon */
const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1"  x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22"  y1="4.22"  x2="5.64"  y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1"  y1="12" x2="3"  y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22"  y1="19.78" x2="5.64"  y2="18.36" />
    <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22" />
  </svg>
);

const Navbar = () => {
  const [scrolled,      setScrolled]      = useState(false);
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [theme,         setTheme]         = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });
  const [rotating, setRotating] = useState(false);

  /* Apply theme to <html> on mount + change */
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  /* Scroll → glass effect */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Active section detection */
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMenuOpen(false);
  };

  const handleThemeToggle = () => {
    setRotating(true);
    setTimeout(() => setRotating(false), 420);
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
      <a href="#home" onClick={(e) => handleNavClick(e, '#home')} style={{ textDecoration: 'none' }}>
        <DevLogo />
      </a>

      <ul className={`nav-links${menuOpen ? ' open' : ''}`} id="navLinks">
        {navItems.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              className={`nav-link${activeSection === href.slice(1) ? ' active' : ''}`}
              id={`nav-${href.slice(1)}`}
              onClick={(e) => handleNavClick(e, href)}
            >
              {label}
            </a>
          </li>
        ))}
        <li className="mobile-only-hire">
          <a
            href="#contact"
            className="btn-hire btn-hire-mobile"
            onClick={(e) => handleNavClick(e, '#contact')}
          >
            Hire Me
          </a>
        </li>
      </ul>

      {/* Theme Toggle */}
      <button
        className={`theme-toggle${rotating ? ' rotating' : ''}`}
        id="themeToggle"
        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        onClick={handleThemeToggle}
      >
        {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
      </button>

      <a
        href="#contact"
        className="btn-hire"
        id="btn-hire-nav"
        onClick={(e) => handleNavClick(e, '#contact')}
      >
        Hire Me
      </a>

      <button
        className="hamburger"
        id="hamburger"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen(prev => !prev)}
      >
        <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 6px)' : '' }} />
        <span style={{ opacity: menuOpen ? '0' : '1' }} />
        <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -6px)' : '' }} />
      </button>
    </nav>
  );
};

export default Navbar;
