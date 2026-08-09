import React from 'react';
import { Hero } from '../components/landing/Hero';
import { ValueProps } from '../components/landing/ValueProps';
import { HowItWorks } from '../components/landing/HowItWorks';
import { VisualGrid } from '../components/landing/VisualGrid';
import { CareerOutcome } from '../components/landing/CareerOutcome';
import { TrackSelector } from '../components/landing/TrackSelector';
import { FinalCTA } from '../components/landing/FinalCTA';
import { ChallengeDay } from '../types';

interface LandingPageProps {
  days: ChallengeDay[];
  currentDay: number;
  onNavigate: (path: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ days, currentDay, onNavigate }) => {
  const scrollToHowItWorks = () => {
    const el = document.getElementById('how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      onNavigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-[#080B12] text-[#F8FAFC]">
      <Hero
        onStart={() => onNavigate('/dashboard')}
        onSeeHow={scrollToHowItWorks}
      />
      <ValueProps />
      <HowItWorks />
      <VisualGrid
        days={days}
        currentDay={currentDay}
        onSelectDay={(dayId) => onNavigate(`/day/${dayId}`)}
      />
      <CareerOutcome />
      <TrackSelector />
      <FinalCTA onStart={() => onNavigate('/dashboard')} />
    </div>
  );
};
