import { motion } from 'framer-motion';

/**
 * ANIMATED ELEMENT COMPONENT
 *
 * Scroll-triggered animation wrapper - elements fade in and slide when scrolled into view
 * Based on Austin Serb's portfolio animation system
 *
 * USAGE:
 * <AnimatedElement element="div" delay={0.2} fadeDirection="left">
 *   Your content here
 * </AnimatedElement>
 *
 * PROPS:
 * - element: HTML element type ("div", "h1", "p", "span", etc.)
 * - delay: Animation delay in seconds (default: 0)
 * - duration: Animation duration in seconds (default: 0.5)
 * - fadeDirection: "left" | "right" | "top" | "bottom" | "none" (default: "none")
 * - offsetPx: How far to offset initially in pixels (default: 500)
 * - margin: Viewport margin for triggering (default: "0px 0px 100px 0px")
 * - blur: Whether to add blur effect (default: true)
 * - scale: Whether to add scale effect (default: false)
 * - scaleFrom: Initial scale value (default: 0.5)
 * - useSpring: Use spring physics instead of easing (default: false)
 * - springConfig: Spring configuration {stiffness, damping} (default: {stiffness: 100, damping: 10})
 */

const directionOffset = (dir, offset) => {
  switch (dir) {
    case 'left':
      return { x: -offset };
    case 'right':
      return { x: offset };
    case 'top':
      return { y: -offset };
    case 'bottom':
      return { y: offset };
    default:
      return {};
  }
};

export const AnimatedElement = ({
  element = 'div',
  delay = 0,
  duration = 0.5,
  fadeDirection = 'none',
  offsetPx = 40,
  margin = '0px 0px 100px 0px',
  blur = true,
  scale = false,
  scaleFrom = 0.5,
  useSpring = false,
  springConfig = { stiffness: 100, damping: 10 },
  className = '',
  children,
  ...rest
}) => {
  const MotionComponent = motion[element] || motion.div;

  const variants = {
    hidden: {
      opacity: 0,
      filter: blur ? 'blur(10px)' : 'blur(0px)',
      ...(scale ? { scale: scaleFrom } : {}),
      ...directionOffset(fadeDirection, offsetPx),
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      x: 0,
      y: 0,
      ...(scale ? { scale: 1 } : {}),
      transition: useSpring
        ? {
            type: 'spring',
            ...springConfig,
            delay,
          }
        : {
            duration,
            delay,
            ease: [0.2, 0.65, 0.3, 0.9], // Custom easing from Austin's portfolio
          },
    },
  };

  return (
    <MotionComponent
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin }}
      variants={variants}
      className={className}
      {...rest}
    >
      {children}
    </MotionComponent>
  );
};
