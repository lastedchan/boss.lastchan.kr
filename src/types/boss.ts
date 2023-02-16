export type Boss = {
  name: string;
  difficulty: (0 | 1 | 2 | 3 | 4)[];
  month: BossDifficulty[];
  week: BossDifficulty[];
  day: BossDifficulty[];
}[];
export type BossType = "week" | "month" | "day";
export type BossDifficulty = 0 | 1 | 2 | 3 | 4;

export type BossDifficultyColor = { background: string; color: string; border: string }[];
