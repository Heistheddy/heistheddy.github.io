import { useState, useEffect } from 'react';
import './Navbar.css';

const links = [
  { label: 'About',    href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills',   href: '#skills' },
  { label: 'Contact',  href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <a href="#hero" className="navbar__logo" onClick={close}>
        <span className="navbar__logo-bracket">&lt;</span>
        theddy
        <span className="navbar__logo-bracket"> /&gt;</span>
      </a>

      <nav className={`navbar__links${menuOpen ? ' navbar__links--open' : ''}`}>
        {links.map(({ label, href }) => (
          <a key={href} href={href} className="navbar__link" onClick={close}>
            {label}
          </a>
        ))}
        <a
          href="mailto:heistheddy@gmail.com"
          className="navbar__cta"
          onClick={close}
        >
          Hire me
        </a>
      </nav>

      <button
        className={`navbar__burger${menuOpen ? ' navbar__burger--open' : ''}`}
        onClick={() => setMenuOpen(v => !v)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
      >
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
