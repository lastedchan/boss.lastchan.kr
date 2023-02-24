export type BossList = Boss[];
export type Boss = { name: string; difficulty: BossDifficulty[] };
export type BossDifficulty = { difficulty: Difficulty; period: Period; price: number };
export type Difficulty = "easy" | "normal" | "hard" | "chaos" | "extreme";
export type Period = "week" | "month" | "day";

export type BossDifficultyStyle = { [p: string]: DifficultyStyle };
export type DifficultyStyle = { background: string; color: string; border: string };
