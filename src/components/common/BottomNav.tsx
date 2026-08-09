import React from 'react';
import { Compass, LayoutDashboard, Flame, User } from 'lucide-react';

interface BottomNavProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenProfile: () => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentPath, onNavigate, onOpenProfile }) => {
  const tabs = [
    {
      id: 'home',
      label: 'Home',
      icon: Compass,
      path: '/',
      isActive: currentPath === '/',
    },
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard,
      path: '/dashboard',
      isActive: currentPath === '/dashboard',
    },
    {
      id: 'day12',
      label: 'Day 12',
      icon: Flame,
      path: '/day/12',
      isActive: currentPath.startsWith('/day'),
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#080B12]/90 backdrop-blur-xl border-t border-white/[0.08] px-3 py-2 pb-safe">
      <div className="max-w-md mx-auto grid grid-cols-4 gap-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.path)}
              className={`flex flex-col items-center justify-center py-1.5 px-2 rounded-xl transition-all cursor-pointer relative ${
                tab.isActive
                  ? 'text-white'
                  : 'text-[#94A3B8] hover:text-white'
              }`}
            >
              {tab.isActive && (
                <div className="absolute inset-0 bg-[#7C5CFF]/15 border border-[#7C5CFF]/30 rounded-xl" />
              )}
              <Icon
                className={`w-5 h-5 relative z-10 transition-transform ${
                  tab.isActive ? 'text-[#7C5CFF] scale-110' : ''
                }`}
              />
              <span className="text-[11px] font-medium tracking-tight mt-1 relative z-10">
                {tab.label}
              </span>
            </button>
          );
        })}

        {/* Profile Tab */}
        <button
          onClick={onOpenProfile}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-[#94A3B8] hover:text-white transition-all cursor-pointer relative"
        >
          <User className="w-5 h-5 relative z-10" />
          <span className="text-[11px] font-medium tracking-tight mt-1 relative z-10">
            Profile
          </span>
        </button>
      </div>
    </div>
  );
};
