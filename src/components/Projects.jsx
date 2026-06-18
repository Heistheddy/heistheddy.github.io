import { useScrollReveal } from '../hooks/useScrollReveal';
import { projects, videoProjects } from '../data/projects';
import './Projects.css';

export default function Projects() {
  const ref  = useScrollReveal();
  const ref2 = useScrollReveal();

  return (
    <section className="projects section" id="projects">
      <div className="section__inner">
        <div className="section__label">Work</div>

        <h2 className="section__heading" ref={ref}>
          <span className="reveal">Projects &amp; </span>
          <span className="gradient-text reveal" style={{ transitionDelay: '0.08s' }}>
            case studies
          </span>
        </h2>

        {/* NDA disclaimer */}
        <div className="nda-banner reveal" ref={useScrollReveal()}>
          <div className="nda-banner__icon" aria-hidden>🔒</div>
          <div>
            <p className="nda-banner__title">NDA Notice</p>
            <p className="nda-banner__text">
              Most of the projects I've worked on are covered by non-disclosure agreements.
              The work listed below represents what I'm permitted to share publicly.
              I'm happy to discuss my broader experience confidentially during a conversation.
            </p>
          </div>
        </div>

        {/* Web projects */}
        <div className="projects__grid" ref={ref2}>
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={i * 0.07} />
          ))}
        </div>

        {/* Video section */}
        <div className="section__label" style={{ marginTop: 72 }}>Video editing</div>
        <div className="projects__grid projects__grid--video">
          {videoProjects.map((p, i) => (
            <ProjectCard key={p.id} project={p} delay={i * 0.07} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, delay = 0 }) {
  const ref = useScrollReveal();

  return (
    <div
      className="project-card reveal"
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
    >
      {project.nda && (
        <span className="project-card__nda-badge">
          🔒 NDA
        </span>
      )}

      {project.status && (
        <span className={`project-card__status project-card__status--${project.status.toLowerCase().replace(' ', '-')}`}>
          {project.status}
        </span>
      )}

      <h3 className="project-card__title">{project.title}</h3>
      <p className="project-card__desc">{project.description}</p>

      <div className="project-card__tags">
        {project.tags.map(t => (
          <span key={t} className="project-card__tag">{t}</span>
        ))}
      </div>

      {project.link && !project.nda && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card__link"
        >
          View project
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      )}
    </div>
  );
}
