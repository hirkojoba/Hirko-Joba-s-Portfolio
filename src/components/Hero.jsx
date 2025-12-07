import { AnimatedElement } from './AnimatedElement';
import { AnimatedWords } from './AnimatedWords';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

/**
 * HERO SECTION
 *
 * This is the first section visitors see - make it count!
 *
 * TO CUSTOMIZE:
 * - Update the name, title, and location below
 * - Edit the tagline to reflect your unique value proposition
 * - Update the GitHub link (or remove if you don't want to show it)
 * - Optionally add a "Download Resume" link
 */

export default function Hero() {
  // ===== EDIT YOUR INFO HERE =====
  const personalInfo = {
    name: "Hirko Joba",
    title: "Hirko Joba's Portfolio",
    location: "Winnipeg, Manitoba, Canada (Open to relocate)(Open for remote)",
    description: "I build practical, user-focused applications that solve real problems with clean code and thoughtful design. Specialized in full-stack development, mobile applications, and cloud solutions.",
    githubUsername: "hirkojoba",
  };

  // Scroll to projects section when button is clicked
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero} id="home">
      <div className="container">

        {/* Stack Target - Where cards stack initially */}
        <div className={styles.stackTarget} data-stack-target-id="projects-stack" />

        <div className={styles.content}>

          {/* Location Badge */}
          <AnimatedElement
            element="div"
            delay={0.2}
            fadeDirection="top"
            offsetPx={30}
            className={styles.locationBadge}
          >
            <span className={styles.pulse}></span>
            <span className={styles.locationText}>{personalInfo.location}</span>
          </AnimatedElement>

          {/* Main Headline */}
          <AnimatedElement
            element="h1"
            delay={0.2}
            fadeDirection="left"
            offsetPx={40}
            className={styles.headline}
          >
            {personalInfo.title}
          </AnimatedElement>

          {/* Description */}
          <AnimatedElement
            element="p"
            delay={0.4}
            fadeDirection="left"
            offsetPx={40}
            className={styles.description}
          >
            {personalInfo.description}
          </AnimatedElement>

          {/* CTA Buttons */}
          <div className={styles.cta}>
            <motion.button
              onClick={scrollToProjects}
              className="btn btn-primary"
              initial={{ opacity: 0, filter: 'blur(5px)', scale: 0.8 }}
              animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.7,
                ease: [0.2, 0.65, 0.3, 0.9],
              }}
            >
              View Latest Projects
            </motion.button>
            {personalInfo.githubUsername && (
              <motion.a
                href={`https://github.com/${personalInfo.githubUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                initial={{ opacity: 0, filter: 'blur(5px)', scale: 0.8 }}
                animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.85,
                  ease: [0.2, 0.65, 0.3, 0.9],
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </motion.a>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
