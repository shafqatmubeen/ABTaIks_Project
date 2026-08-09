import React from 'react';
import { Target, Code, CheckCircle2, Flame, ArrowRight } from 'lucide-react';
import { SectionReveal } from '../common/SectionReveal';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Choose Your Track',
      desc: 'Pick your engineering focus: Full-Stack Web, AI Engineering, Systems & Backend, or Frontend UI/UX.',
      tag: 'Select Track',
      icon: Target,
      color: 'text-[#7C5CFF]',
      borderColor: 'border-[#7C5CFF]/30',
      bgColor: 'bg-[#7C5CFF]/10',
    },
    {
      num: '02',
      title: 'Build Every Day',
      desc: 'Get a daily mission spec with requirements, estimated time (2-3 hrs), and exact success criteria.',
      tag: '2-3 Hrs / Day',
      icon: Code,
      color: 'text-[#22D3A6]',
      borderColor: 'border-[#22D3A6]/30',
      bgColor: 'bg-[#22D3A6]/10',
    },
    {
      num: '03',
      title: 'Submit Your Proof',
      desc: 'Verify your GitHub repository link and LinkedIn build post to lock in your daily completion.',
      tag: 'GitHub + LinkedIn',
      icon: CheckCircle2,
      color: 'text-[#F5C451]',
      borderColor: 'border-[#F5C451]/30',
      bgColor: 'bg-[#F5C451]/10',
    },
    {
      num: '04',
      title: 'Keep Your Streak',
      desc: 'Stack up your streak, earn verified badges, and climb the public student standing leaderboard.',
      tag: 'Leaderboard & Badges',
      icon: Flame,
      color: 'text-[#7C5CFF]',
      borderColor: 'border-[#7C5CFF]/30',
      bgColor: 'bg-[#7C5CFF]/10',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 relative overflow-hidden bg-[#080B12]">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#7C5CFF]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <SectionReveal>
            <span className="text-xs font-mono font-bold uppercase text-[#22D3A6] tracking-widest px-3.5 py-1.5 rounded-full bg-[#22D3A6]/10 border border-[#22D3A6]/20 inline-block">
              The 4-Step Method
            </span>
          </SectionReveal>
          <SectionReveal delay={0.05}>
            <h2 className="font-heading text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              How The 60-Day Challenge Works
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="text-[#94A3B8] text-xs sm:text-base leading-relaxed">
              Designed specifically for students to build real discipline and engineering output without interfering with exams or classes.
            </p>
          </SectionReveal>
        </div>

        {/* Steps Grid Container */}
        <div className="relative">
          {/* Desktop Horizontal Connecting Line */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#7C5CFF]/40 via-[#22D3A6]/40 via-[#F5C451]/40 to-[#7C5CFF]/40 z-0 pointer-events-none" />

          {/* Mobile Vertical Connecting Line */}
          <div className="block lg:hidden absolute top-6 bottom-12 left-5 sm:left-6 w-[2px] bg-gradient-to-b from-[#7C5CFF]/40 via-[#22D3A6]/40 to-[#F5C451]/40 z-0 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <SectionReveal key={step.num} delay={0.08 * idx}>
                  <div className="relative pl-12 sm:pl-14 lg:pl-0 h-full flex flex-col">
                    
                    {/* Step Icon Node */}
                    <div className="absolute left-0 top-0 lg:relative lg:left-auto lg:top-auto lg:mx-auto mb-4 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#0E1320] border border-white/15 flex items-center justify-center z-20 shadow-xl group-hover:scale-105 transition-transform">
                      <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${step.color}`} />
                    </div>

                    {/* Step Card */}
                    <div className="flex-1 bg-[#141A27] border border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-white/20 transition-all duration-300 shadow-xl hover:-translate-y-1">
                      <div>
                        {/* Top Meta */}
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-mono text-[11px] font-extrabold text-[#94A3B8] tracking-wider uppercase">
                            STEP {step.num}
                          </span>
                          <span className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md ${step.bgColor} ${step.color} border ${step.borderColor}`}>
                            {step.tag}
                          </span>
                        </div>

                        {/* Title & Description */}
                        <h3 className="font-heading text-base sm:text-lg font-bold text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                          {step.desc}
                        </p>
                      </div>

                      {/* Card Footer Indicator */}
                      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#94A3B8]/70">
                        <span>Milestone {step.num}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-white/30" />
                      </div>
                    </div>

                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

