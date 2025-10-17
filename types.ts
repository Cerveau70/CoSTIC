export interface CommitteeMember {
  name: string;
  affiliation: string;
}

export interface TimelineEvent {
  date: string;
  description: string;
  icon?: string;
  isHighlighted?: boolean;
  status?: 'completed' | 'current' | 'upcoming';
}

// FIX: Add Speaker interface as it was missing, causing an import error in SpeakerCard.tsx.
export interface Speaker {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
}