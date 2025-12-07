import { useState, useEffect } from 'react';
import styles from './Navigation.module.css';

/**
 * NAVIGATION COMPONENT
 *
 * Glassmorphic fixed navigation that hides on scroll down, shows on scroll up
 */

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show nav when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`${styles.nav} ${isVisible ? styles.visible : styles.hidden}`}>
      <div className={styles.container}>
        {/* Logo/Name */}
        <button onClick={() => scrollToSection('home')} className={styles.logo}>
          Hirko Joba
        </button>

        {/* Navigation Links */}
        <div className={styles.links}>
          <button onClick={() => scrollToSection('projects')} className={styles.link}>
            Projects
          </button>
          <button onClick={() => scrollToSection('about')} className={styles.link}>
            About Me
          </button>
          <button onClick={() => scrollToSection('skills')} className={styles.link}>
            Tech Skills
          </button>
          <button onClick={() => scrollToSection('contact')} className={styles.link}>
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
