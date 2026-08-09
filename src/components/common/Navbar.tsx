import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Rocket, LayoutDashboard, Compass, Trophy, User } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenProfile?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate, onOpenProfile }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Challenge', path: '/' },
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Day 12 Build', path: '/day/12' },
  ];

  const handleNav = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#080B12]/85 border-b border-white/[0.08] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNav('/')}
          className="flex items-center space-x-2.5 text-left focus:outline-none group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#7C5CFF] to-[#0E1320] border border-[#7C5CFF]/40 flex items-center justify-center glow-purple transition-transform group-hover:scale-105">
            <span className="font-heading text-sm font-black text-white tracking-wider">AB</span>
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <span className="font-heading text-base font-extrabold tracking-tight text-white group-hover:text-[#7C5CFF] transition-colors">
                ABTalks
              </span>
              <span className="px-1.5 py-0.5 text-[10px] font-mono font-semibold rounded bg-[#7C5CFF]/20 text-[#22D3A6] border border-[#22D3A6]/30">
                60-DAY
              </span>
            </div>
            <p className="text-[10px] text-[#94A3B8] tracking-wider uppercase font-medium">Coding Challenge</p>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <button
                key={item.path}
                onClick={() => handleNav(item.path)}
                className={`px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'text-white bg-[#141A27] border border-white/10 shadow-sm'
                    : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Desktop Right CTAs */}
        <div className="hidden md:flex items-center space-x-3">
          {onOpenProfile && (
            <button
              onClick={onOpenProfile}
              className="p-2 rounded-lg bg-[#141A27] border border-white/10 text-[#94A3B8] hover:text-white hover:border-[#7C5CFF]/40 transition-all cursor-pointer"
              title="Profile & Settings"
            >
              <User className="w-4 h-4" />
            </button>
          )}

          {currentPath === '/' ? (
            <button
              onClick={() => handleNav('/dashboard')}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#7C5CFF] to-[#6338FF] text-white text-sm font-semibold shadow-lg shadow-[#7C5CFF]/25 hover:shadow-[#7C5CFF]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center space-x-2 cursor-pointer"
            >
              <span>Go to Dashboard</span>
              <Rocket className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => handleNav('/day/12')}
              className="px-4 py-2 rounded-xl bg-[#22D3A6] text-[#080B12] text-sm font-bold shadow-lg shadow-[#22D3A6]/20 hover:shadow-[#22D3A6]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center space-x-2 cursor-pointer"
            >
              <span>Today's Build (Day 12)</span>
            </button>
          )}
        </div>

        {/* Mobile Header Right Actions */}
        <div className="flex md:hidden items-center space-x-2">
          {onOpenProfile && (
            <button
              onClick={onOpenProfile}
              className="p-2 rounded-lg bg-[#141A27] border border-white/10 text-[#94A3B8] hover:text-white active:scale-95 transition-all cursor-pointer"
              aria-label="Profile Settings"
            >
              <User className="w-5 h-5" />
            </button>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-[#141A27] border border-white/10 text-[#F8FAFC] active:scale-95 transition-all cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden border-b border-white/10 bg-[#0E1320] overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              <p className="px-3 text-[11px] font-mono text-[#94A3B8] tracking-widest uppercase">Navigation</p>
              
              <button
                onClick={() => handleNav('/')}
                className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-left text-sm font-medium transition-all cursor-pointer ${
                  currentPath === '/'
                    ? 'bg-[#7C5CFF]/20 text-white border border-[#7C5CFF]/30'
                    : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                }`}
              >
                <Compass className="w-4 h-4 text-[#7C5CFF]" />
                <span>Challenge Landing</span>
              </button>

              <button
                onClick={() => handleNav('/dashboard')}
                className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-left text-sm font-medium transition-all cursor-pointer ${
                  currentPath === '/dashboard'
                    ? 'bg-[#7C5CFF]/20 text-white border border-[#7C5CFF]/30'
                    : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                }`}
              >
                <LayoutDashboard className="w-4 h-4 text-[#22D3A6]" />
                <span>Student Dashboard</span>
              </button>

              <button
                onClick={() => handleNav('/day/12')}
                className={`w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-left text-sm font-medium transition-all cursor-pointer ${
                  currentPath.startsWith('/day')
                    ? 'bg-[#7C5CFF]/20 text-white border border-[#7C5CFF]/30'
                    : 'text-[#94A3B8] hover:text-white hover:bg-white/5'
                }`}
              >
                <Trophy className="w-4 h-4 text-[#F5C451]" />
                <span>Day 12 Challenge Build</span>
              </button>

              <div className="pt-2">
                <button
                  onClick={() => handleNav('/dashboard')}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#7C5CFF] to-[#6338FF] text-white text-sm font-bold shadow-lg shadow-[#7C5CFF]/20 active:scale-[0.98] transition-all flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <Rocket className="w-4 h-4" />
                  <span>Start / Open Dashboard</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
