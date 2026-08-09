import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PageLoaderProps {
  onComplete?: () => void;
  forceShow?: boolean;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ onComplete, forceShow = false }) => {
  const [isVisible, setIsVisible] = useState<boolean>(() => {
    if (forceShow) return true;
    const hasLoaded = sessionStorage.getItem('abtalks_has_loaded');
    return !hasLoaded;
  });

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      if (onComplete) onComplete();
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            sessionStorage.setItem('abtalks_has_loaded', 'true');
            setIsVisible(false);
            if (onComplete) onComplete();
          }, 250);
          return 100;
        }
        return prev + 5;
      });
    }, 45);

    return () => clearInterval(interval);
  }, [isVisible, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="launch-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98, filter: 'blur(8px)' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#080B12] px-6"
        >
          {/* Ambient Glow */}
          <div className="absolute w-72 h-72 rounded-full bg-[#7C5CFF]/15 blur-3xl pointer-events-none animate-pulse" />

          {/* Logo Brand Mark */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative mb-8 flex items-center justify-center"
          >
            {/* Animated Ring */}
            <div className="relative w-20 h-20 rounded-2xl bg-[#0E1320] border border-[#7C5CFF]/30 flex items-center justify-center glow-purple">
              <span className="font-heading text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#7C5CFF] via-[#F8FAFC] to-[#22D3A6]">
                AB
              </span>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-2xl border-t-2 border-r-2 border-[#22D3A6] opacity-70"
              />
            </div>
          </motion.div>

          {/* Title & Micro Tag */}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-center"
          >
            <p className="text-xs font-semibold tracking-widest text-[#7C5CFF] uppercase mb-2">
              ABTalks 60-Day Challenge
            </p>
            <h2 className="font-heading text-sm font-medium tracking-wider text-[#94A3B8] uppercase">
              BUILDING YOUR MOMENTUM
            </h2>
          </motion.div>

          {/* Progress Indicator */}
          <div className="w-48 mt-6 bg-[#0E1320] border border-white/5 h-1.5 rounded-full overflow-hidden p-0.5">
            <motion.div
              className="h-full bg-gradient-to-r from-[#7C5CFF] to-[#22D3A6] rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>

          <p className="mt-2 text-[11px] font-mono text-[#94A3B8]/70">
            {progress}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
