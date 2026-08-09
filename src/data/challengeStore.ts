import { ChallengeDay, Achievement, UserProfile, EdgeStateMode } from '../types';

export const INITIAL_USER: UserProfile = {
  name: 'Alex Sharma',
  track: 'Full-Stack Web Dev',
  currentDay: 12,
  completedDaysCount: 11,
  streakCount: 11,
  missedYesterday: false,
  isProfileEmpty: false,
  standingPercentile: 20, // Top 20%
  githubConnected: true,
  linkedinConnected: true,
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
};

export const INITIAL_ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first_build',
    title: 'First Build',
    description: 'Shipped Day 1 project and submitted proof.',
    icon: '🏆',
    unlocked: true,
    unlockedAt: '11 days ago',
  },
  {
    id: '7_day_streak',
    title: '7 Day Streak',
    description: 'Built for 7 consecutive days without missing.',
    icon: '🔥',
    unlocked: true,
    unlockedAt: '4 days ago',
  },
  {
    id: '10_builds',
    title: '10 Builds',
    description: 'Reached 10 shipped projects in your portfolio.',
    icon: '⚡',
    unlocked: true,
    unlockedAt: '2 days ago',
  },
  {
    id: '25_builds',
    title: '25 Builds',
    description: 'Quarter-way milestone through the 60 days.',
    icon: '🚀',
    unlocked: false,
    progress: '11/25 completed',
  },
  {
    id: '30_day_streak',
    title: '30 Day Streak',
    description: 'Halfway through the streak journey!',
    icon: '🔒',
    unlocked: false,
    progress: '11/30 days',
  },
  {
    id: '60_day_graduate',
    title: '60-Day Graduate',
    description: 'Completed the entire 60-day ABTalks challenge.',
    icon: '🎓',
    unlocked: false,
    progress: '11/60 days',
  },
];

export const MOCK_DAYS: ChallengeDay[] = Array.from({ length: 60 }, (_, i) => {
  const dayNum = i + 1;
  const isCompleted = dayNum < 12;

  let title = `Build Mission ${dayNum}`;
  let category = 'Web Development';
  let estimatedTime = '2–3 hours';
  let summary = `Ship a production-grade component or API for Day ${dayNum}.`;
  let missionDetails = [
    'Implement clean modular architecture',
    'Ensure mobile-first responsive layout',
    'Deploy to public URL & verify repo',
  ];
  let successCriteria = [
    'Functional UI',
    'No console errors',
    'Responsive at 390px mobile',
  ];

  if (dayNum === 1) {
    title = 'Personal Portfolio Card';
    summary = 'Create a slick personal bio card with direct social proof & project links.';
  } else if (dayNum === 5) {
    title = 'Interactive Habit Tracker';
    summary = 'Build a localized micro habit tracker with dark mode and streak counts.';
  } else if (dayNum === 10) {
    title = 'REST API Rate Limiter';
    summary = 'Design an Express token-bucket rate limiter middleware with unit tests.';
  } else if (dayNum === 12) {
    title = 'Weather Dashboard';
    category = 'API & Frontend';
    estimatedTime = '2–3 hours';
    summary = 'Build a responsive weather dashboard that displays live weather information and a 5-day forecast.';
    missionDetails = [
      'Current temperature & weather conditions',
      'Dynamic search for worldwide cities',
      '5-day extended weather forecast cards',
      'Responsive mobile design optimized for 390px',
      'Deployed live preview link + public repo',
    ];
    successCriteria = [
      'Functional live weather API integration',
      'Responsive at 390px mobile width',
      'Clean UI with high typography contrast',
      'Deployed project link',
      'GitHub repository & LinkedIn update post',
    ];
  } else if (dayNum === 13) {
    title = 'Markdown Notes Engine';
    summary = 'Build a browser-persisted Markdown note taker with split preview.';
  } else if (dayNum === 20) {
    title = 'Realtime Chat UI';
    summary = 'Implement a reactive chat interface with typing indicators and timestamps.';
  } else if (dayNum === 30) {
    title = 'Full-Stack Auth & Dashboard';
    summary = 'Midway capstone: JWT authentication flow paired with protected dashboard.';
  } else if (dayNum === 60) {
    title = 'Grand Capstone Project';
    summary = 'Final 60-day culmination SaaS platform launch ready for recruiter review.';
  }

  return {
    id: dayNum,
    title,
    category,
    estimatedTime,
    summary,
    missionDetails,
    successCriteria,
    isCompleted,
    githubUrl: isCompleted ? `https://github.com/alexsharma/day-${dayNum}-build` : undefined,
    linkedinUrl: isCompleted ? `https://linkedin.com/posts/alexsharma/day-${dayNum}-abtalks` : undefined,
  };
});

// Helper for GitHub URL validation
export function isValidGithubUrl(url: string): boolean {
  if (!url || typeof url !== 'string') return false;
  const trimmed = url.trim();
  return (
    (trimmed.startsWith('https://github.com/') || trimmed.startsWith('http://github.com/')) &&
    trimmed.length > 20 &&
    trimmed.includes('/')
  );
}

// Helper for LinkedIn URL validation
export function isValidLinkedinUrl(url: string): boolean {
  if (!url || typeof url !== 'string') return false;
  const trimmed = url.trim();
  return (
    (trimmed.startsWith('https://linkedin.com/') ||
      trimmed.startsWith('https://www.linkedin.com/')) &&
    trimmed.length > 22
  );
}
