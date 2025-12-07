import { useRef } from 'react';
import { useCompositorSpring } from '../hooks/useCompositorSpring';
import styles from './Projects.module.css';

export function AnimatedProjectCard({ project, offset, progress, gridId, index }) {
  const ref = useRef(null);
  useCompositorSpring(ref, progress);

  return (
    <div
      ref={ref}
      data-grid-id={gridId}
      style={{
        '--tx': `${offset.x}px`,
        '--ty': `${offset.y}px`,
        '--rot': `${offset.rot}deg`,
        '--sc': `${offset.s}`,
      }}
      className={styles.animatedCard}
    >
      <article className={styles.card}>
        {/* Project Image/Screenshot */}
        <div className={styles.projectImage}>
          {project.image ? (
            <img
              src={project.image}
              alt={project.name}
              style={{ objectPosition: project.imagePosition || 'center' }}
            />
          ) : (
            <div className={styles.imagePlaceholder}>
              <span>{project.name}</span>
            </div>
          )}
        </div>

        {/* Card Content */}
        <div className={styles.cardContent}>
          {/* Project Title */}
          <h3 className={styles.name}>{project.name}</h3>

          {/* Status Badge (if applicable) */}
          {project.status && (
            <span className={styles.statusBadge}>{project.status}</span>
          )}

          {/* Description */}
          <p className={styles.description}>{project.description}</p>

          {/* Tech Stack Icons */}
          <div className={styles.techStack}>
            {project.techStack.map((tech, techIndex) => (
              <span key={techIndex} className={styles.techIcon} title={tech}>
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className={styles.actions}>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnGithub}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
            <a
              href={project.liveUrl || '#'}
              target={project.liveUrl ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className={`${styles.btnDemo} ${!project.liveUrl ? styles.btnDisabled : ''}`}
              onClick={!project.liveUrl ? (e) => e.preventDefault() : undefined}
            >
              Live Demo
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
