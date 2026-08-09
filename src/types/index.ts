export interface ChallengeDay {
  id: number;
  title: string;
  category: string;
  estimatedTime: string;
  summary: string;
  missionDetails: string[];
  successCriteria: string[];
  isCompleted: boolean;
  githubUrl?: string;
  linkedinUrl?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
  unlockedAt?: string;
  progress?: string;
}

export interface UserProfile {
  name: string;
  track: string;
  currentDay: number;
  completedDaysCount: number;
  streakCount: number;
  missedYesterday: boolean;
  isProfileEmpty: boolean;
  standingPercentile: number;
  githubConnected: boolean;
  linkedinConnected: boolean;
  avatarUrl?: string;
}

export type EdgeStateMode = 'normal' | 'first_day' | 'missed_day' | 'empty_profile';
