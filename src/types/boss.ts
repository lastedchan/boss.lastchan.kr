export type BossList = Boss[];
export type Boss = { name: string; difficulty?: (BossDifficulty | null)[] };
export type BossDifficulty = { difficulty: Difficulty; period: Period; price: number };
export type Difficulty = "easy" | "normal" | "hard" | "chaos" | "extreme";
export type Period = "week" | "month" | "day";

export type BossDifficultyStyle = { background: string; color: string; border: string }[];
