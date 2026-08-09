import React from 'react';
import { motion } from 'motion/react';

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  staggerChildren?: boolean;
}

export const SectionReveal: React.FC<SectionRevealProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  staggerChildren = false,
}) => {
  const getInitialOffset = () => {
    switch (direction) {
      case 'up':
        return { y: 24, x: 0 };
      case 'down':
        return { y: -24, x: 0 };
      case 'left':
        return { x: 24, y: 0 };
      case 'right':
        return { x: -24, y: 0 };
      case 'none':
        return { x: 0, y: 0 };
    }
  };

  const initial = {
    opacity: 0,
    scale: 0.98,
    ...getInitialOffset(),
  };

  return (
    <motion.div
      initial={initial}
      whileInView={{
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1],
        ...(staggerChildren && { staggerChildren: 0.1 }),
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
