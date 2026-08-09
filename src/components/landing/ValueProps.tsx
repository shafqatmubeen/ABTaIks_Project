import React from 'react';
import { Hammer, Share2, Briefcase } from 'lucide-react';
import { SectionReveal } from '../common/SectionReveal';

export const ValueProps: React.FC = () => {
  const blocks = [
    {
      step: '01',
      title: 'BUILD DAILY',
      description: 'Practice by shipping real, functional projects every single day for 60 consecutive days.',
      icon: Hammer,
      color: 'text-[#7C5CFF]',
      borderColor: 'border-[#7C5CFF]/30',
      bgColor: 'bg-[#7C5CFF]/10',
    },
    {
      step: '02',
      title: 'SHOW YOUR WORK',
      description: 'Submit verified GitHub repository commits and LinkedIn post proof to maintain your streak.',
      icon: Share2,
      color: 'text-[#22D3A6]',
      borderColor: 'border-[#22D3A6]/30',
      bgColor: 'bg-[#22D3A6]/10',
    },
    {
      step: '03',
      title: 'BUILD YOUR CAREER',
      description: 'Turn your consistency into a verified, public portfolio that hiring managers and recruiters trust.',
      icon: Briefcase,
      color: 'text-[#F5C451]',
      borderColor: 'border-[#F5C451]/30',
      bgColor: 'bg-[#F5C451]/10',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#0E1320]/60 border-y border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <SectionReveal>
            <span className="text-xs font-mono font-bold uppercase text-[#7C5CFF] tracking-widest px-3 py-1 rounded-full bg-[#7C5CFF]/10 border border-[#7C5CFF]/20">
              The Proof-First Approach
            </span>
          </SectionReveal>
          <SectionReveal delay={0.05}>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Don't just learn.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#22D3A6] to-[#7C5CFF]">
                Build proof.
              </span>
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed">
              Every day you build something real, document your progress, and create public proof of your engineering skills.
            </p>
          </SectionReveal>
        </div>

        {/* 3 Compact Feature Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blocks.map((block, idx) => {
            const Icon = block.icon;
            return (
              <SectionReveal key={block.step} delay={0.1 + idx * 0.08}>
                <div className="h-full bg-[#141A27] border border-white/10 rounded-2xl p-6 relative group hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
                  {/* Step Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-black text-white/20 group-hover:text-white/40 transition-colors">
                      {block.step}
                    </span>
                    <div className={`p-3 rounded-xl ${block.bgColor} border ${block.borderColor}`}>
                      <Icon className={`w-5 h-5 ${block.color}`} />
                    </div>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-white tracking-wide mb-2">
                    {block.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed font-normal">
                    {block.description}
                  </p>
                </div>
              </SectionReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};
