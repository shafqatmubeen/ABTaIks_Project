import React from 'react';
import { UserProfile, ChallengeDay, Achievement, EdgeStateMode } from '../types';
import { StreakCard } from '../components/dashboard/StreakCard';
import { ProgressBar } from '../components/dashboard/ProgressBar';
import { TodayBuildCard } from '../components/dashboard/TodayBuildCard';
import { NextActionWidget } from '../components/dashboard/NextActionWidget';
import { AchievementsGrid } from '../components/dashboard/AchievementsGrid';
import { StandingCard } from '../components/dashboard/StandingCard';
import { FirstDayBanner } from '../components/edge/FirstDayBanner';
import { MissedDayBanner } from '../components/edge/MissedDayBanner';
import { EmptyProfileBanner } from '../components/edge/EmptyProfileBanner';
import { SectionReveal } from '../components/common/SectionReveal';
import { Sparkles, User, Settings } from 'lucide-react';

interface DashboardPageProps {
  user: UserProfile;
  todayDay: ChallengeDay;
  achievements: Achievement[];
  edgeMode: EdgeStateMode;
  onNavigate: (path: string) => void;
  onOpenProfile: () => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({
  user,
  todayDay,
  achievements,
  edgeMode,
  onNavigate,
  onOpenProfile,
}) => {
  const isFirstDay = edgeMode === 'first_day';
  const isMissedDay = edgeMode === 'missed_day';
  const isEmptyProfile = edgeMode === 'empty_profile';

  const effectiveName = isEmptyProfile ? 'Builder' : user.name;
  const effectiveStreak = isFirstDay ? 0 : isMissedDay ? user.streakCount : user.streakCount;
  const effectiveCurrentDay = isFirstDay ? 1 : todayDay.id;

  return (
    <div className="min-h-screen bg-[#080B12] text-[#F8FAFC] pb-24">
      {/* Dashboard Top Greeting Header */}
      <div className="bg-[#0E1320] border-b border-white/10 pt-6 pb-6 mb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <SectionReveal>
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-xs font-mono font-bold text-[#7C5CFF] uppercase">STUDENT DASHBOARD</span>
                <span className="text-white/20">•</span>
                <span className="text-xs font-mono text-[#22D3A6]">{user.track}</span>
              </div>
              <h1 className="font-heading text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center space-x-2">
                <span>Good evening, {effectiveName}</span>
                <span className="text-2xl animate-pulse">👋</span>
              </h1>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.05}>
            <button
              onClick={onOpenProfile}
              className="flex items-center space-x-2.5 px-3.5 py-2 rounded-xl bg-[#141A27] border border-white/10 hover:border-[#7C5CFF]/40 text-xs font-semibold text-white transition-all cursor-pointer"
            >
              <div className="w-6 h-6 rounded-lg bg-[#7C5CFF]/20 text-[#7C5CFF] flex items-center justify-center font-bold">
                {effectiveName.charAt(0)}
              </div>
              <span>Profile & Edge Test</span>
              <Settings className="w-3.5 h-3.5 text-[#94A3B8]" />
            </button>
          </SectionReveal>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        
        {/* Edge State Banners if toggled */}
        {isFirstDay && (
          <FirstDayBanner onStartDay1={() => onNavigate('/day/1')} />
        )}

        {isMissedDay && (
          <MissedDayBanner onContinue={() => onNavigate(`/day/${todayDay.id}`)} />
        )}

        {isEmptyProfile && (
          <EmptyProfileBanner onOpenProfile={onOpenProfile} />
        )}

        {/* Main Dashboard Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column (8 cols): Primary Action & Progress */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Streak Hero Card */}
            <StreakCard
              streakCount={effectiveStreak}
              missedYesterday={isMissedDay}
            />

            {/* Challenge Progress Bar */}
            <ProgressBar
              currentDay={effectiveCurrentDay}
              totalDays={60}
              completedDaysCount={isFirstDay ? 0 : user.completedDaysCount}
            />

            {/* Today's Build Primary Card */}
            <TodayBuildCard
              day={todayDay}
              onOpenDay={(dayId) => onNavigate(`/day/${dayId}`)}
            />

            {/* Thoughtful Feature: Next Best Action Widget */}
            <NextActionWidget
              githubSubmitted={Boolean(todayDay.githubUrl)}
              linkedinSubmitted={Boolean(todayDay.linkedinUrl)}
              onActionClick={() => onNavigate(`/day/${todayDay.id}#proof`)}
            />

          </div>

          {/* Right Column (4 cols): Standing & Achievements */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Student Standing Card */}
            <StandingCard
              standingPercentile={user.standingPercentile}
              completedBuilds={isFirstDay ? 0 : user.completedDaysCount}
            />

            {/* Verified Achievements Grid */}
            <AchievementsGrid achievements={achievements} />

          </div>

        </div>

      </div>
    </div>
  );
};
