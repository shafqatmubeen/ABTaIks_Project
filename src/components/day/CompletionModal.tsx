import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { Flame, CheckCircle, ArrowRight, LayoutDashboard, Trophy } from 'lucide-react';

interface CompletionModalProps {
  isOpen: boolean;
  dayId: number;
  newStreak: number;
  onNextDay: () => void;
  onGoDashboard: () => void;
}

export const CompletionModal: React.FC<CompletionModalProps> = ({
  isOpen,
  dayId,
  newStreak,
  onNextDay,
  onGoDashboard,
}) => {
  useEffect(() => {
    if (isOpen) {
      // Tasteful confetti celebration burst
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#7C5CFF', '#22D3A6', '#F5C451', '#F8FAFC'],
      });
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-sm bg-[#0E1320] border-2 border-[#22D3A6] rounded-2xl p-6 shadow-2xl text-center text-white relative overflow-hidden glow-mint"
          >
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#22D3A6]/20 rounded-full blur-3xl pointer-events-none" />

            {/* Trophy & Badge Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.15, type: 'spring', stiffness: 200 }}
              className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-[#080B12] border-2 border-[#22D3A6] flex items-center justify-center text-4xl shadow-xl glow-mint"
            >
              🎉
            </motion.div>

            <span className="text-xs font-mono font-bold uppercase text-[#22D3A6] tracking-widest px-3 py-1 rounded-full bg-[#22D3A6]/10 border border-[#22D3A6]/20 inline-block mb-2">
              DAY {dayId} COMPLETE!
            </span>

            <h2 className="font-heading text-2xl font-extrabold text-white mb-1">
              Your Streak Continues!
            </h2>

            <p className="text-xs text-[#94A3B8] mb-6">
              GitHub repository proof & LinkedIn build post successfully verified.
            </p>

            {/* Streak & Completion Box */}
            <div className="bg-[#141A27] border border-white/10 rounded-xl p-4 mb-6 grid grid-cols-2 gap-3">
              <div className="text-center">
                <span className="text-[10px] font-mono text-[#94A3B8] uppercase block">Streak</span>
                <div className="flex items-center justify-center space-x-1 mt-0.5 text-[#F5C451]">
                  <Flame className="w-4 h-4 fill-[#F5C451]" />
                  <span className="font-heading font-extrabold text-lg">{newStreak} DAYS</span>
                </div>
              </div>

              <div className="text-center border-l border-white/10">
                <span className="text-[10px] font-mono text-[#94A3B8] uppercase block">Progress</span>
                <span className="font-heading font-extrabold text-lg text-[#22D3A6] block mt-0.5">
                  {dayId} / 60
                </span>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-2.5">
              <button
                onClick={onNextDay}
                className="w-full py-3 rounded-xl bg-[#22D3A6] text-[#080B12] text-xs font-extrabold hover:bg-[#1ebf94] transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-lg shadow-[#22D3A6]/20"
              >
                <span>Continue to Day {dayId + 1} →</span>
              </button>

              <button
                onClick={onGoDashboard}
                className="w-full py-3 rounded-xl bg-[#141A27] border border-white/10 text-white text-xs font-semibold hover:bg-white/10 transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <LayoutDashboard className="w-4 h-4 text-[#7C5CFF]" />
                <span>Return to Dashboard</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
