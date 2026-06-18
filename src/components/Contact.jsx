import { useScrollReveal } from '../hooks/useScrollReveal';
import './Contact.css';

export default function Contact() {
  const ref = useScrollReveal();

  return (
    <section className="contact section" id="contact">
      <div className="section__inner">
        <div className="contact__inner" ref={ref}>
          <div className="contact__orb" aria-hidden />
          <p className="section__label">Let's talk</p>
          <h2 className="section__heading">
            Got a project? <span className="gradient-text">Let's build it.</span>
          </h2>
          <p className="contact__sub">
            Whether it's a fintech product, a SaaS tool, or a video production —
            I'm open to interesting work. Drop me a line.
          </p>

          <div className="contact__actions">
            <a href="mailto:onibudotheddy@gmail.com" className="btn btn--primary">
              onibudotheddy@gmail.com
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path d="M2 4l6 5 6-5M2 4h12v8H2V4z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/onibudo-olatade" target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
