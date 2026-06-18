import { useState, useEffect } from 'react';
import './Hero.css';

const ROLES = [
  'Full-Stack Developer',
  'Fintech Builder',
  'Video Editor',
  'Creative Technologist',
];

export default function Hero() {
  const [roleIdx, setRoleIdx]   = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  /* Typewriter effect */
  useEffect(() => {
    const target = ROLES[roleIdx];
    let timeout;

    if (!isDeleting) {
      if (displayed.length < target.length) {
        timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2200);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length - 1)), 45);
      } else {
        setIsDeleting(false);
        setRoleIdx(i => (i + 1) % ROLES.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIdx]);

  return (
    <section className="hero" id="hero">
      {/* Ambient background orbs */}
      <div className="hero__orb hero__orb--1" aria-hidden />
      <div className="hero__orb hero__orb--2" aria-hidden />
      <div className="hero__orb hero__orb--3" aria-hidden />

      <div className="hero__content">
        <p className="hero__eyebrow">
          <span className="hero__dot" />
          Available for work
        </p>

        <h1 className="hero__name">
          Hi, I'm{' '}
          <span className="gradient-text">Olatade</span>
          <span className="hero__wave" aria-hidden>.</span>
        </h1>

        <p className="hero__role">
          <span className="hero__role-prefix">I'm a </span>
          <span className="hero__role-text">{displayed}</span>
          <span className="hero__cursor" aria-hidden>|</span>
        </p>

        <p className="hero__bio">
          I build products that live at the intersection of code and clarity —
          from fintech platforms and SaaS tools to cinematic video edits.
          Based in Lagos, shipping worldwide.
        </p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">
            View my work
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#contact" className="btn btn--ghost">Get in touch</a>
        </div>

        <div className="hero__stats">
          {[
            { value: '7+',  label: 'Years experience' },
            { value: '10+', label: 'Web projects'     },
            { value: '10+', label: 'Videos edited'    },
          ].map(({ value, label }) => (
            <div key={label} className="hero__stat">
              <span className="hero__stat-value gradient-text">{value}</span>
              <span className="hero__stat-label">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden>
        <div className="hero__scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  );
}
