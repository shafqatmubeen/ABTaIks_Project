import React, { useState, useEffect } from 'react';
import { LandingPage } from './pages/LandingPage';
import { DashboardPage } from './pages/DashboardPage';
import { ChallengeDayPage } from './pages/ChallengeDayPage';
import { Navbar } from './components/common/Navbar';
import { BottomNav } from './components/common/BottomNav';
import { PageLoader } from './components/common/PageLoader';
import { ProfileModal } from './components/common/ProfileModal';
import { INITIAL_USER, INITIAL_ACHIEVEMENTS, MOCK_DAYS } from './data/challengeStore';
import { UserProfile, ChallengeDay, Achievement, EdgeStateMode } from './types';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  const [user, setUser] = useState<UserProfile>(INITIAL_USER);
  const [achievements, setAchievements] = useState<Achievement[]>(INITIAL_ACHIEVEMENTS);
  const [days, setDays] = useState<ChallengeDay[]>(MOCK_DAYS);
  const [edgeMode, setEdgeMode] = useState<EdgeStateMode>('normal');
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Sync state with browser location/back-forward navigation
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Helper to complete a day
  const handleCompleteDay = (dayId: number, githubUrl: string, linkedinUrl: string) => {
    setDays((prev) =>
      prev.map((d) =>
        d.id === dayId
          ? { ...d, isCompleted: true, githubUrl, linkedinUrl }
          : d
      )
    );

    setUser((prev) => ({
      ...prev,
      completedDaysCount: Math.max(prev.completedDaysCount, dayId),
      streakCount: prev.streakCount + 1,
    }));
  };

  // Reset local state
  const handleResetProgress = () => {
    setUser(INITIAL_USER);
    setAchievements(INITIAL_ACHIEVEMENTS);
    setDays(MOCK_DAYS);
    setEdgeMode('normal');
    setIsProfileOpen(false);
  };

  // Parse path to route
  const renderRoute = () => {
    if (currentPath === '/dashboard') {
      const todayDay = days.find((d) => d.id === user.currentDay) || days[11];
      return (
        <DashboardPage
          user={user}
          todayDay={todayDay}
          achievements={achievements}
          edgeMode={edgeMode}
          onNavigate={navigate}
          onOpenProfile={() => setIsProfileOpen(true)}
        />
      );
    }

    if (currentPath.startsWith('/day/')) {
      const dayId = parseInt(currentPath.split('/day/')[1], 10) || 12;
      const dayData = days.find((d) => d.id === dayId) || days[11];
      return (
        <ChallengeDayPage
          day={dayData}
          currentStreak={user.streakCount}
          onNavigate={navigate}
          onCompleteDay={handleCompleteDay}
        />
      );
    }

    // Default: Landing Page '/'
    return (
      <LandingPage
        days={days}
        currentDay={user.currentDay}
        onNavigate={navigate}
      />
    );
  };

  return (
    <div className="min-h-screen bg-[#080B12] text-[#F8FAFC] flex flex-col font-sans selection:bg-[#7C5CFF]/30 selection:text-white">
      {/* Launch Loader */}
      <PageLoader />

      {/* Header Bar */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenProfile={() => setIsProfileOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {renderRoute()}
      </main>

      {/* Mobile Fixed Bottom Navigation */}
      <BottomNav
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenProfile={() => setIsProfileOpen(true)}
      />

      {/* Profile & Edge State Testing Modal */}
      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
        user={user}
        edgeMode={edgeMode}
        onSetEdgeMode={(mode) => setEdgeMode(mode)}
        onResetProgress={handleResetProgress}
      />
    </div>
  );
}
