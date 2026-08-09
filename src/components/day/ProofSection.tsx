import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, CheckCircle2, ShieldCheck, ArrowRight, Loader2, AlertCircle } from 'lucide-react';
import { SectionReveal } from '../common/SectionReveal';
import { isValidGithubUrl, isValidLinkedinUrl } from '../../data/challengeStore';

interface ProofSectionProps {
  dayId: number;
  initialGithubUrl?: string;
  initialLinkedinUrl?: string;
  onCompleteDay: (githubUrl: string, linkedinUrl: string) => void;
}

export const ProofSection: React.FC<ProofSectionProps> = ({
  dayId,
  initialGithubUrl = '',
  initialLinkedinUrl = '',
  onCompleteDay,
}) => {
  const [githubInput, setGithubInput] = useState(
    initialGithubUrl || `https://github.com/alexsharma/day-${dayId}-weather-dashboard`
  );
  const [linkedinInput, setLinkedinInput] = useState(
    initialLinkedinUrl || `https://linkedin.com/posts/alexsharma/day-${dayId}-weather-abtalks`
  );

  const [githubVerified, setGithubVerified] = useState(Boolean(initialGithubUrl));
  const [linkedinVerified, setLinkedinVerified] = useState(Boolean(initialLinkedinUrl));

  const [githubLoading, setGithubLoading] = useState(false);
  const [linkedinLoading, setLinkedinLoading] = useState(false);

  const [githubError, setGithubError] = useState('');
  const [linkedinError, setLinkedinError] = useState('');

  // Handle GitHub verification
  const handleVerifyGithub = () => {
    setGithubError('');
    if (!isValidGithubUrl(githubInput)) {
      setGithubError('Please enter a valid GitHub URL (e.g. https://github.com/username/repo)');
      return;
    }

    setGithubLoading(true);
    setTimeout(() => {
      setGithubLoading(false);
      setGithubVerified(true);
    }, 800);
  };

  // Handle LinkedIn verification
  const handleVerifyLinkedin = () => {
    setLinkedinError('');
    if (!isValidLinkedinUrl(linkedinInput)) {
      setLinkedinError('Please enter a valid LinkedIn post URL (e.g. https://linkedin.com/posts/username/my-build)');
      return;
    }

    setLinkedinLoading(true);
    setTimeout(() => {
      setLinkedinLoading(false);
      setLinkedinVerified(true);
    }, 800);
  };

  const isBothVerified = githubVerified && linkedinVerified;

  return (
    <SectionReveal delay={0.15}>
      <div id="proof" className="bg-[#141A27] border-2 border-[#7C5CFF]/30 rounded-2xl p-5 sm:p-6 shadow-2xl space-y-6">
        
        {/* Header */}
        <div className="pb-4 border-b border-white/10">
          <div className="flex items-center space-x-2 text-[#7C5CFF] text-xs font-mono font-bold uppercase tracking-widest mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>PROVE YOUR WORK</span>
          </div>
          <h2 className="font-heading text-2xl font-extrabold text-white">
            Submit Daily Proofs
          </h2>
          <p className="text-xs text-[#94A3B8] mt-1">
            Your build isn't complete until you show the proof. Submit both repository and post proof to unlock completion.
          </p>
        </div>

        {/* 1. GitHub Proof Card */}
        <div className={`p-4 sm:p-5 rounded-xl border transition-all ${
          githubVerified ? 'bg-[#0E1320] border-[#22D3A6]/40' : 'bg-[#0E1320] border-white/10'
        }`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Github className="w-5 h-5 text-white" />
              <h3 className="font-heading text-sm font-bold text-white">
                GitHub Proof
              </h3>
            </div>
            {githubVerified && (
              <span className="text-[11px] font-mono font-bold text-[#22D3A6] bg-[#22D3A6]/10 px-2.5 py-0.5 rounded border border-[#22D3A6]/20 flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified</span>
              </span>
            )}
          </div>

          <p className="text-xs text-[#94A3B8] mb-3">
            Submit your public repository or commit URL for Day {dayId}.
          </p>

          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="url"
                value={githubInput}
                onChange={(e) => {
                  setGithubInput(e.target.value);
                  setGithubVerified(false);
                  setGithubError('');
                }}
                placeholder="https://github.com/username/repository"
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#080B12] border border-white/10 text-xs text-white placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#7C5CFF] transition-all font-mono"
              />

              <button
                type="button"
                onClick={handleVerifyGithub}
                disabled={githubLoading || githubVerified}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1.5 cursor-pointer shrink-0 ${
                  githubVerified
                    ? 'bg-[#22D3A6]/20 text-[#22D3A6] border border-[#22D3A6]/30'
                    : 'bg-[#7C5CFF] text-white hover:bg-[#6338FF] active:scale-95'
                }`}
              >
                {githubLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Verifying...</span>
                  </>
                ) : githubVerified ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Verified ✓</span>
                  </>
                ) : (
                  <>
                    <span>Verify GitHub</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>

            {githubError && (
              <p className="text-[11px] text-[#FF5C5C] flex items-center space-x-1 font-mono">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{githubError}</span>
              </p>
            )}

            {githubVerified && (
              <p className="text-[11px] text-[#22D3A6] font-mono">
                ✓ GitHub proof verified — Repository connected.
              </p>
            )}
          </div>
        </div>

        {/* 2. LinkedIn Proof Card */}
        <div className={`p-4 sm:p-5 rounded-xl border transition-all ${
          linkedinVerified ? 'bg-[#0E1320] border-[#22D3A6]/40' : 'bg-[#0E1320] border-white/10'
        }`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Linkedin className="w-5 h-5 text-[#7C5CFF]" />
              <h3 className="font-heading text-sm font-bold text-white">
                LinkedIn Proof
              </h3>
            </div>
            {linkedinVerified && (
              <span className="text-[11px] font-mono font-bold text-[#22D3A6] bg-[#22D3A6]/10 px-2.5 py-0.5 rounded border border-[#22D3A6]/20 flex items-center space-x-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified</span>
              </span>
            )}
          </div>

          <p className="text-xs text-[#94A3B8] mb-3">
            Submit your LinkedIn post link documenting what you built today.
          </p>

          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="url"
                value={linkedinInput}
                onChange={(e) => {
                  setLinkedinInput(e.target.value);
                  setLinkedinVerified(false);
                  setLinkedinError('');
                }}
                placeholder="https://linkedin.com/posts/username/my-day-12-build"
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#080B12] border border-white/10 text-xs text-white placeholder-[#94A3B8]/50 focus:outline-none focus:border-[#7C5CFF] transition-all font-mono"
              />

              <button
                type="button"
                onClick={handleVerifyLinkedin}
                disabled={linkedinLoading || linkedinVerified}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1.5 cursor-pointer shrink-0 ${
                  linkedinVerified
                    ? 'bg-[#22D3A6]/20 text-[#22D3A6] border border-[#22D3A6]/30'
                    : 'bg-[#7C5CFF] text-white hover:bg-[#6338FF] active:scale-95'
                }`}
              >
                {linkedinLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Verifying...</span>
                  </>
                ) : linkedinVerified ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Verified ✓</span>
                  </>
                ) : (
                  <>
                    <span>Verify LinkedIn</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>

            {linkedinError && (
              <p className="text-[11px] text-[#FF5C5C] flex items-center space-x-1 font-mono">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{linkedinError}</span>
              </p>
            )}

            {linkedinVerified && (
              <p className="text-[11px] text-[#22D3A6] font-mono">
                ✓ LinkedIn proof verified — Post connected.
              </p>
            )}
          </div>
        </div>

        {/* Completion Action */}
        <div className="pt-2">
          <button
            onClick={() => onCompleteDay(githubInput, linkedinInput)}
            disabled={!isBothVerified}
            className={`w-full py-4 rounded-xl font-extrabold text-sm sm:text-base transition-all flex items-center justify-center space-x-2 cursor-pointer ${
              isBothVerified
                ? 'bg-gradient-to-r from-[#22D3A6] to-[#1ebf94] text-[#080B12] shadow-xl shadow-[#22D3A6]/30 hover:scale-[1.01] active:scale-[0.99] glow-mint'
                : 'bg-[#0E1320] border border-white/10 text-[#94A3B8] opacity-60 cursor-not-allowed'
            }`}
          >
            {isBothVerified ? (
              <>
                <span>Complete Day {dayId} 🎉</span>
                <ArrowRight className="w-5 h-5" />
              </>
            ) : (
              <span>Submit both proofs above to unlock completion</span>
            )}
          </button>
        </div>

      </div>
    </SectionReveal>
  );
};
