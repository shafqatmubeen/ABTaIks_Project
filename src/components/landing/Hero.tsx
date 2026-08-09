import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Flame, ShieldCheck, Github, Linkedin, Code2, Sparkles, Terminal } from 'lucide-react';
import { SectionReveal } from '../common/SectionReveal';

interface HeroProps {
  onStart: () => void;
  onSeeHow: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStart, onSeeHow }) => {
  return (
    <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[600px] sm:h-[600px] bg-[#7C5CFF]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-64 h-64 bg-[#22D3A6]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Tagline Badge */}
            <SectionReveal delay={0.05}>
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#141A27] border border-[#7C5CFF]/30 text-xs font-semibold text-[#F8FAFC]">
                <span className="flex h-2 w-2 rounded-full bg-[#22D3A6] animate-pulse" />
                <span className="text-[#22D3A6] font-mono">60-DAY CHALLENGE</span>
                <span className="text-white/40">|</span>
                <span className="text-[#94A3B8]">For All College Students</span>
              </div>
            </SectionReveal>

            {/* Main Headline */}
            <SectionReveal delay={0.1}>
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                60 Days.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C5CFF] via-[#A892FF] to-[#22D3A6]">
                  60 Builds.
                </span>{' '}
                <br />
                One Stronger You.
              </h1>
            </SectionReveal>

            {/* Supporting Text */}
            <SectionReveal delay={0.15}>
              <p className="text-base sm:text-lg text-[#94A3B8] max-w-xl leading-relaxed font-normal">
                Build every day. Prove your progress. Turn consistency into a public portfolio recruiters can actually see and verify.
              </p>
            </SectionReveal>

            {/* CTAs */}
            <SectionReveal delay={0.2}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
                <button
                  onClick={onStart}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#7C5CFF] to-[#6338FF] text-white font-bold text-base shadow-xl shadow-[#7C5CFF]/30 hover:shadow-[#7C5CFF]/50 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center space-x-2.5 cursor-pointer glow-purple"
                >
                  <span>Start Your 60-Day Journey</span>
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button
                  onClick={onSeeHow}
                  className="px-6 py-3.5 rounded-xl bg-[#141A27] border border-white/10 text-[#F8FAFC] font-semibold text-base hover:bg-white/5 hover:border-white/20 transition-all text-center cursor-pointer"
                >
                  See How It Works
                </button>
              </div>
            </SectionReveal>

            {/* Trust Metrics Pill */}
            <SectionReveal delay={0.25}>
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#94A3B8]">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-[#22D3A6]" />
                  <span>Verified GitHub Proofs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Flame className="w-4 h-4 text-[#F5C451]" />
                  <span>Real Streak System</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Code2 className="w-4 h-4 text-[#7C5CFF]" />
                  <span>Career-Ready Portfolio</span>
                </div>
              </div>
            </SectionReveal>
          </div>

          {/* Right Column: Interactive Progress & Streak Showcase Card */}
          <div className="lg:col-span-5">
            <SectionReveal delay={0.2} direction="left">
              <div className="relative mx-auto max-w-sm sm:max-w-md bg-[#0E1320] border border-white/10 rounded-2xl p-5 sm:p-6 shadow-2xl backdrop-blur-xl">
                
                {/* Floating Badge Top */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                  <div className="flex items-center space-x-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#22D3A6] animate-pulse" />
                    <span className="text-xs font-mono uppercase font-semibold text-[#22D3A6]">LIVE BUILD TRACKER</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#7C5CFF]/20 text-[#7C5CFF] border border-[#7C5CFF]/30">
                    DAY 12 / 60
                  </span>
                </div>

                {/* Circular Progress & Flame Widget */}
                <div className="relative my-4 flex items-center justify-center">
                  <div className="relative w-44 h-44 rounded-full bg-[#080B12] border-4 border-[#7C5CFF]/20 flex flex-col items-center justify-center p-4 glow-purple">
                    {/* Ring Animated Overlay */}
                    <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 176 176">
                      <circle
                        cx="88"
                        cy="88"
                        r="80"
                        stroke="currentColor"
                        strokeWidth="6"
                        className="text-[#7C5CFF]"
                        strokeDasharray="502"
                        strokeDashoffset="401" /* 20% complete */
                        strokeLinecap="round"
                        fill="transparent"
                      />
                    </svg>

                    <div className="relative z-10 text-center">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        className="inline-block"
                      >
                        <Flame className="w-8 h-8 text-[#F5C451] fill-[#F5C451] mx-auto drop-shadow-[0_0_12px_rgba(245,196,81,0.6)]" />
                      </motion.div>
                      <h3 className="font-heading text-3xl font-extrabold text-white mt-1">11</h3>
                      <p className="text-[10px] font-mono text-[#F5C451] uppercase tracking-widest font-bold">
                        DAY STREAK
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating Proof Micro-Chips */}
                <div className="space-y-2.5 mt-6">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#141A27] border border-white/5 text-xs">
                    <div className="flex items-center space-x-2">
                      <Github className="w-4 h-4 text-white" />
                      <span className="text-[#F8FAFC] font-medium text-xs">Day 11: REST Rate Limiter</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#22D3A6] bg-[#22D3A6]/10 px-2 py-0.5 rounded border border-[#22D3A6]/20">
                      ✓ Verified
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#141A27] border border-white/5 text-xs">
                    <div className="flex items-center space-x-2">
                      <Linkedin className="w-4 h-4 text-[#7C5CFF]" />
                      <span className="text-[#F8FAFC] font-medium text-xs">LinkedIn Proof Post</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#22D3A6] bg-[#22D3A6]/10 px-2 py-0.5 rounded border border-[#22D3A6]/20">
                      ✓ Connected
                    </span>
                  </div>
                </div>

                {/* Bottom Active Action Trigger */}
                <div className="mt-5 pt-4 border-t border-white/10 text-center">
                  <p className="text-xs text-[#94A3B8] mb-2 font-medium">Today's Mission: <span className="text-white font-semibold">Weather Dashboard</span></p>
                  <button
                    onClick={onStart}
                    className="w-full py-2.5 rounded-xl bg-[#22D3A6] text-[#080B12] text-xs font-extrabold uppercase tracking-wider hover:bg-[#1ebf94] transition-all cursor-pointer flex items-center justify-center space-x-2"
                  >
                    <span>Open Day 12 Build →</span>
                  </button>
                </div>
              </div>
            </SectionReveal>
          </div>

        </div>
      </div>
    </section>
  );
};
