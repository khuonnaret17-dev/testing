
export enum Platform {
  FACEBOOK = 'Facebook',
  INSTAGRAM = 'Instagram',
  TIKTOK = 'TikTok',
  TELEGRAM = 'Telegram'
}

export interface Post {
  id: string;
  content: string;
  mediaUrl?: string;
  platforms: Platform[];
  scheduledAt: Date;
  status: 'draft' | 'scheduled' | 'published';
}

export interface AnalyticsData {
  date: string;
  reach: number;
  engagement: number;
  likes: number;
}

export type TabType = 'dashboard' | 'create' | 'schedule' | 'analytics' | 'automation' | 'ads' | 'booster';
