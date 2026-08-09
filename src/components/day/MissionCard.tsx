import React from 'react';
import { motion } from 'motion/react';
import { Target, CheckCircle2, Award, Clock, Sparkles } from 'lucide-react';
import { SectionReveal } from '../common/SectionReveal';
import { ChallengeDay } from '../../types';

interface MissionCardProps {
  day: ChallengeDay;
}

export const MissionCard: React.FC<MissionCardProps> = ({ day }) => {
  return (
    <div className="space-y-6">
      {/* Today's Mission Description */}
      <SectionReveal delay={0.05}>
        <div className="bg-[#141A27] border border-white/10 rounded-2xl p-5 sm:p-6 shadow-xl">
          <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
            <div className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-[#7C5CFF]" />
              <h2 className="font-heading text-lg font-bold text-white">
                Today's Mission
              </h2>
            </div>
            <div className="flex items-center space-x-1.5 text-xs font-mono text-[#F5C451]">
              <Clock className="w-4 h-4" />
              <span>Est. {day.estimatedTime}</span>
            </div>
          </div>

          <p className="text-sm text-[#94A3B8] leading-relaxed mb-5">
            {day.summary}
          </p>

          <h3 className="text-xs font-mono font-bold uppercase text-[#7C5CFF] tracking-wider mb-3">
            YOUR DASHBOARD SHOULD INCLUDE:
          </h3>

          <div className="space-y-2.5">
            {day.missionDetails.map((detail, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + idx * 0.05 }}
                className="flex items-start space-x-2.5 text-xs sm:text-sm text-[#F8FAFC] bg-[#0E1320] p-3 rounded-xl border border-white/5"
              >
                <CheckCircle2 className="w-4 h-4 text-[#22D3A6] shrink-0 mt-0.5" />
                <span>{detail}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* Success Criteria Section */}
      <SectionReveal delay={0.1}>
        <div className="bg-[#0E1320] border border-white/10 rounded-2xl p-5 sm:p-6 shadow-lg">
          <div className="flex items-center space-x-2 mb-4 pb-3 border-b border-white/10">
            <Award className="w-5 h-5 text-[#22D3A6]" />
            <h3 className="font-heading text-base font-bold text-white uppercase tracking-wide">
              WHAT GOOD LOOKS LIKE
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {day.successCriteria.map((criteria, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-2 text-xs font-medium text-[#94A3B8] bg-[#141A27] px-3.5 py-2.5 rounded-xl border border-white/5"
              >
                <div className="w-2 h-2 rounded-full bg-[#22D3A6]" />
                <span className="text-white">{criteria}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>
    </div>
  );
};
