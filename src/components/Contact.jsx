import { useState, useRef, useEffect } from 'react';
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaLinkedinIn,
  FaPaperPlane,
} from 'react-icons/fa';

const iconLinks = [
  {
    icon: FaMapMarkerAlt,
    href: 'https://maps.app.goo.gl/4bVg7kCs2TAEuL159',
    label: 'Location',
    target: '_blank',
  },
  {
    icon: FaEnvelope,
    href: 'mailto:koppisettidhanasiri@gmail.com',
    label: 'Email',
    target: '_self',
  },
  {
    icon: FaPhoneAlt,
    href: 'tel:+919951718354',
    label: 'Phone',
    target: '_self',
  },
  {
    icon: FaGithub,
    href: 'https://github.com/Dhanasirikoppisetti',
    label: 'GitHub',
    target: '_blank',
  },
  {
    icon: FaLinkedinIn,
    href: 'https://www.linkedin.com/in/dhanasiri-koppisetti-655565302/',
    label: 'LinkedIn',
    target: '_blank',
  },
];

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError]     = useState(false);
  const formRef  = useRef(null);
  const leftRef  = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    if (leftRef.current)  observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    const formData = new FormData(formRef.current);
    try {
      const res = await fetch('https://formspree.io/f/xqeokjoe', {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSuccess(true);
        formRef.current.reset();
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(true);
        setTimeout(() => setError(false), 4000);
      }
    } catch {
      setError(true);
      setTimeout(() => setError(false), 4000);
    }
    setSending(false);
  };

  return (
    <section className="contact" id="contact">
      <div className="section-container">

        {/* ── Section Header ── */}
        <div className="section-header animate-in">
          <p className="section-tag">GET IN TOUCH</p>
          <h2 className="section-title">
            <span className="title-line title-line--left"></span>
            Contact <span className="highlight">Me</span>
            <span className="title-line title-line--right"></span>
          </h2>
        </div>

        {/* ── Main Grid ── */}
        <div className="ct-grid">

          {/* ── LEFT: Image + icon row ── */}
          <div className="ct-left animate-in-left" ref={leftRef}>
            <div className="ct-img-col">
              <div className="ct-img-wrap">
                <img
                  src="/contact_support_girl.png"
                  alt="Contact illustration"
                  className="ct-img"
                />
              </div>

              {/* Icon row */}
              <div className="ct-icon-row">
                {iconLinks.map(({ icon: Icon, href, label, target }, i) => (
                  <a
                    key={label}
                    href={href}
                    target={target}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="ct-icon-btn"
                    style={{ animationDelay: `${i * 0.08}s` }}
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div className="ct-right animate-in-right" ref={rightRef}>
            <div className="ct-form-header">
              <h3 className="ct-form-title">Send a Message</h3>
              <p className="ct-form-sub">I'll get back to you within 24 hours.</p>
            </div>

            <form
              className="ct-form"
              ref={formRef}
              onSubmit={handleSubmit}
              method="POST"
              action="https://formspree.io/f/xqeokjoe"
            >
              <div className="ct-row">
                <div className="ct-field">
                  <input type="text"  name="name"    id="ctName"    placeholder=" " required />
                  <label htmlFor="ctName">Your Name</label>
                </div>
                <div className="ct-field">
                  <input type="email" name="email"   id="ctEmail"   placeholder=" " required />
                  <label htmlFor="ctEmail">Email Address</label>
                </div>
              </div>

              <div className="ct-field">
                <input type="text" name="subject" id="ctSubject" placeholder=" " required />
                <label htmlFor="ctSubject">Subject</label>
              </div>

              <div className="ct-field">
                <textarea name="message" id="ctMessage" placeholder=" " rows="5" required />
                <label htmlFor="ctMessage">Your Message</label>
              </div>

              {success && (
                <div className="ct-toast ct-success">
                  ✅ Message Sent Successfully! I'll get back to you soon.
                </div>
              )}
              {error && (
                <div className="ct-toast ct-error">
                  ❌ Something went wrong. Please try again.
                </div>
              )}

              <button type="submit" className="ct-btn" disabled={sending}>
                <FaPaperPlane className="ct-btn-icon" />
                {sending ? 'Sending…' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
