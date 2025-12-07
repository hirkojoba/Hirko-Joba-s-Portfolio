import { motion } from 'framer-motion';

/**
 * ANIMATED WORDS COMPONENT
 *
 * Word-by-word text animation - each word animates separately
 * Used for hero heading in Austin Serb's portfolio
 *
 * USAGE:
 * <AnimatedWords element="h1" className="headline">
 *   Software Engineer
 * </AnimatedWords>
 */

export const AnimatedWords = ({
  element = 'span',
  children,
  delay = 0,
  className = '',
  ...rest
}) => {
  const MotionComponent = motion[element] || motion.span;

  const text = typeof children === 'string' ? children : '';
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: delay,
      },
    },
  };

  const wordVariant = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <MotionComponent
      initial="hidden"
      animate="visible"
      variants={container}
      className={className}
      {...rest}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          variants={wordVariant}
          style={{ display: 'inline-block', marginRight: '0.3em' }}
        >
          {word}
        </motion.span>
      ))}
    </MotionComponent>
  );
};
