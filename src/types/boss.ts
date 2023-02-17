export type Boss = {
  name: string;
  difficulty: (BossDifficulty | null)[];
}[];
export type BossDifficulty = { type: BossType; price: number };
export type BossType = "week" | "month" | "day";

export type BossDifficultyStyle = { background: string; color: string; border: string }[];
