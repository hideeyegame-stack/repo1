import { Tournament, UserProfile } from '@/types';

export const mockUser: UserProfile = {
  uid: 'mock-uid',
  displayName: 'Player One',
  points: 1200,
};

export const mockTournaments: Tournament[] = [
  {
    id: 't1',
    title: 'Free Fire Duo 8pm',
    mode: '2v2',
    entryPoints: 50,
    startAtIso: new Date().toISOString(),
    createdByUsername: 'Player One',
    createdAtIso: new Date().toISOString(),
    options: {
      limitedAmmo: false,
      rounds: 3,
      characterSkills: true,
      coinInGame: true,
      gunAttributes: true,
      headshot: false,
    },
  },
];
