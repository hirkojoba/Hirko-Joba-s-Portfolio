import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './WordCarousel.module.css';

/**
 * WORD CAROUSEL COMPONENT
 *
 * Rotating text animation - cycles through words with smooth transitions
 * Based on Austin Serb's portfolio word carousel
 *
 * USAGE:
 * <WordCarousel words={["build", "create", "design", "make"]} interval={2000} />
 */

export default function WordCarousel({ words = ['build', 'create', 'design', 'make'], interval = 2000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <div className={styles.carousel}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
          transition={{
            duration: 0.5,
            ease: [0.2, 0.65, 0.3, 0.9],
          }}
          className={styles.word}
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
