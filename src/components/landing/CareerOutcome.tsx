import React from 'react';
import { Sparkles, TrendingUp, Award, CheckCircle2 } from 'lucide-react';
import { SectionReveal } from '../common/SectionReveal';

export const CareerOutcome: React.FC = () => {
  const Milestones = [
    {
      day: 'DAY 01',
      quote: '"I should start coding."',
      status: 'Initial Commitment',
      desc: 'Overcome hesitation. Set up your dev environment and ship your first deployed portfolio card.',
      icon: Sparkles,
      color: 'text-[#94A3B8]',
      accentBg: 'bg-[#94A3B8]/10',
    },
    {
      day: 'DAY 30',
      quote: '"I am shipping consistently."',
      status: 'Habit Formation',
      desc: '30 completed builds in your GitHub repo. Building is second nature, and your streak is unstoppable.',
      icon: TrendingUp,
      color: 'text-[#7C5CFF]',
      accentBg: 'bg-[#7C5CFF]/10',
    },
    {
      day: 'DAY 60',
      quote: '"I have proof of what I can build."',
      status: 'Career Proof',
      desc: 'A verified 60-build portfolio ready for recruiter review, cold emails, and campus placements.',
      icon: Award,
      color: 'text-[#22D3A6]',
      accentBg: 'bg-[#22D3A6]/10',
    },
  ];

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <SectionReveal>
            <span className="text-xs font-mono font-bold uppercase text-[#7C5CFF] tracking-widest px-3 py-1 rounded-full bg-[#7C5CFF]/10 border border-[#7C5CFF]/20">
              The Student Transformation
            </span>
          </SectionReveal>
          <SectionReveal delay={0.05}>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Your consistency becomes your proof.
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed">
              Recruiters don't hire students with promises. They hire builders with a public track record of shipping code.
            </p>
          </SectionReveal>
        </div>

        {/* Transformation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Milestones.map((item, idx) => {
            const Icon = item.icon;
            return (
              <SectionReveal key={item.day} delay={0.1 + idx * 0.08}>
                <div className="bg-[#141A27] border border-white/10 rounded-2xl p-6 relative h-full flex flex-col justify-between group hover:border-white/20 transition-all duration-300">
                  
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs font-extrabold text-[#7C5CFF] bg-[#7C5CFF]/10 px-2.5 py-1 rounded-lg border border-[#7C5CFF]/20">
                        {item.day}
                      </span>
                      <div className={`p-2 rounded-xl ${item.accentBg}`}>
                        <Icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-white mb-2 italic">
                      {item.quote}
                    </h3>
                    <p className="text-xs text-[#22D3A6] font-mono mb-3 font-semibold">
                      ✓ {item.status}
                    </p>
                    <p className="text-xs text-[#94A3B8] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center space-x-2 text-[11px] font-mono text-[#94A3B8]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#22D3A6]" />
                    <span>Public GitHub + LinkedIn Proof</span>
                  </div>

                </div>
              </SectionReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
