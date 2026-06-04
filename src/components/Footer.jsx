import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  { icon: FaGithub,     href: 'https://github.com/Dhanasirikoppisetti',                     label: 'GitHub',   id: 'footer-github'   },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/dhanasiri-koppisetti-655565302/', label: 'LinkedIn', id: 'footer-linkedin' },
  { icon: FaEnvelope,   href: 'mailto:koppisettidhanasiri@gmail.com',                        label: 'Email',    id: 'footer-email'    },
];

const Footer = () => (
  <footer className="footer">
    {/* Sparkle blobs */}
    <span className="ft-blob ft-blob--1" aria-hidden="true" />
    <span className="ft-blob ft-blob--2" aria-hidden="true" />
    <span className="ft-blob ft-blob--3" aria-hidden="true" />

    <div className="ft-inner">
      {/* Floating cursive sentence */}
      <p className="ft-cursive">
        Built with precision and passion by Dhana Siri Koppisetti
      </p>

      {/* Social icons */}
      <div className="ft-icons">
        {socialLinks.map(({ icon: Icon, href, label, id }, i) => (
          <a
            key={id}
            id={id}
            href={href}
            target={href.startsWith('mailto') ? '_self' : '_blank'}
            rel="noopener noreferrer"
            aria-label={label}
            className="ft-icon-btn"
            style={{ animationDelay: `${i * 0.12}s` }}
          >
            <Icon />
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p className="ft-copy">© 2026</p>
    </div>
  </footer>
);

export default Footer;
