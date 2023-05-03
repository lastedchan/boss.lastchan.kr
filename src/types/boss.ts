export type BossList = Boss[];
export type Boss = { name: string; difficulty: BossDifficulty[] };
export type BossDifficulty = { difficulty: Difficulty; period: Period; price: number; info?: BossInfo };
export type Difficulty = "easy" | "normal" | "hard" | "chaos" | "extreme";
export type Period = "week" | "month" | "day";
export type BossInfo = {
  phase: {
    name?: string;
    level: number;
    arcaneForce?: number;
    authenticForce?: number;
    hp: number;
    physicalDefence: number;
    magicDefence: number;
  }[];
  entranceLevel: number;
  deathCount: number;
  timeLimitM: number;
};

export type BossDifficultyStyle = { [p: string]: DifficultyStyle };
export type DifficultyStyle = { background: string; color: string; border: string };
