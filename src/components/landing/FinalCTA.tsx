import React from 'react';
import { ArrowRight, Flame, Shield, CheckCircle } from 'lucide-react';
import { SectionReveal } from '../common/SectionReveal';

interface FinalCTAProps {
  onStart: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onStart }) => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-[#080B12] via-[#0E1320] to-[#080B12] border-t border-white/[0.08]">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#7C5CFF]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <SectionReveal>
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#141A27] border border-[#7C5CFF]/30 text-xs font-mono text-[#F5C451] mb-6">
            <Flame className="w-4 h-4 fill-[#F5C451]" />
            <span>JOIN 10,000+ COLLEGE BUILDERS</span>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.05}>
          <h2 className="font-heading text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Your next 60 days can change what you build.
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <p className="text-[#94A3B8] text-base sm:text-lg max-w-2xl mx-auto mt-4 mb-8 leading-relaxed">
            Stop waiting for campus placements or perfect timing. Start Day 1 today and build public proof of your engineering capabilities.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onStart}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-[#7C5CFF] to-[#6338FF] text-white font-extrabold text-base shadow-xl shadow-[#7C5CFF]/30 hover:shadow-[#7C5CFF]/50 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center space-x-3 cursor-pointer glow-purple"
            >
              <span>Start My Challenge Now</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-[#94A3B8] font-mono">
            <span className="flex items-center space-x-1.5">
              <CheckCircle className="w-4 h-4 text-[#22D3A6]" />
              <span>100% Free for Students</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <Shield className="w-4 h-4 text-[#7C5CFF]" />
              <span>Verified Proof Badges</span>
            </span>
          </div>
        </SectionReveal>
      </div>

      {/* Minimal Footer */}
      <footer className="mt-20 pt-8 border-t border-white/5 max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#94A3B8] gap-4">
        <div className="flex items-center space-x-2">
          <span className="font-heading font-extrabold text-white">ABTalks</span>
          <span>© 2026 ABTalks 60-Day Coding Challenge. All rights reserved.</span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
          <span>•</span>
          <a href="#privacy" className="hover:text-white transition-colors">Student Guidelines</a>
          <span>•</span>
          <a href="#github" className="hover:text-white transition-colors">GitHub Rules</a>
        </div>
      </footer>
    </section>
  );
};
