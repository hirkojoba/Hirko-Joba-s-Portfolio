import { motion } from 'framer-motion';

/**
 * ANIMATED TEXT COMPONENT
 *
 * Character-by-character text animation - each letter animates separately
 * Creates a staggered reveal effect as used in Austin Serb's portfolio
 *
 * USAGE:
 * <AnimatedText element="h2" className="section-title">
 *   Latest Projects
 * </AnimatedText>
 *
 * PROPS:
 * - element: HTML element type (default: "span")
 * - delay: Initial delay before animation starts (default: 0)
 * - staggerDelay: Delay between each character (default: 0.03)
 * - className: CSS classes to apply
 */

export const AnimatedText = ({
  element = 'span',
  children,
  delay = 0,
  staggerDelay = 0.03,
  className = '',
  ...rest
}) => {
  const MotionComponent = motion[element] || motion.span;

  // Convert text to array of characters
  const text = typeof children === 'string' ? children : '';
  const characters = text.split('');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.5,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '0px 0px -100px 0px' }}
      variants={container}
      className={className}
      {...rest}
    >
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          variants={child}
          style={{ display: 'inline-block', whiteSpace: char === ' ' ? 'pre' : 'normal' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </MotionComponent>
  );
};
