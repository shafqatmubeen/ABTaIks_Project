import React, { useState } from 'react';
import { ChallengeDay } from '../types';
import { DayHeader } from '../components/day/DayHeader';
import { MissionCard } from '../components/day/MissionCard';
import { ProofSection } from '../components/day/ProofSection';
import { CompletionModal } from '../components/day/CompletionModal';

interface ChallengeDayPageProps {
  day: ChallengeDay;
  currentStreak: number;
  onNavigate: (path: string) => void;
  onCompleteDay: (dayId: number, githubUrl: string, linkedinUrl: string) => void;
}

export const ChallengeDayPage: React.FC<ChallengeDayPageProps> = ({
  day,
  currentStreak,
  onNavigate,
  onCompleteDay,
}) => {
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [updatedStreak, setUpdatedStreak] = useState(currentStreak);

  const handleFinishProof = (githubUrl: string, linkedinUrl: string) => {
    onCompleteDay(day.id, githubUrl, linkedinUrl);
    setUpdatedStreak(currentStreak + 1);
    setShowCompletionModal(true);
  };

  return (
    <div className="min-h-screen bg-[#080B12] text-[#F8FAFC] pb-24">
      <DayHeader
        dayId={day.id}
        totalDays={60}
        title={day.title}
        category={day.category}
        isCompleted={day.isCompleted}
        onBack={() => onNavigate('/dashboard')}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        {/* Mission Details & Success Criteria */}
        <MissionCard day={day} />

        {/* GitHub & LinkedIn Proof Verification Form */}
        <ProofSection
          dayId={day.id}
          initialGithubUrl={day.githubUrl}
          initialLinkedinUrl={day.linkedinUrl}
          onCompleteDay={handleFinishProof}
        />
      </div>

      {/* Completion Celebration Modal */}
      <CompletionModal
        isOpen={showCompletionModal}
        dayId={day.id}
        newStreak={updatedStreak}
        onNextDay={() => {
          setShowCompletionModal(false);
          onNavigate(`/day/${day.id + 1}`);
        }}
        onGoDashboard={() => {
          setShowCompletionModal(false);
          onNavigate('/dashboard');
        }}
      />
    </div>
  );
};
