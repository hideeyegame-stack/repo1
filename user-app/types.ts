export type TournamentMode = '1v1' | '2v2' | '3v3' | '4v4';

export interface Tournament {
  id: string;
  title: string;
  mode: TournamentMode;
  entryPoints: number;
  startAtIso: string;
  createdByUsername: string;
  createdAtIso: string;
  options: {
    limitedAmmo: boolean;
    rounds: number;
    characterSkills: boolean;
    coinInGame: boolean;
    gunAttributes: boolean;
    headshot: boolean;
  };
}

export interface UserProfile {
  uid: string;
  displayName: string;
  points: number;
}
