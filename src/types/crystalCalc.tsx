import { Difficulty } from "@/types/boss";

export type SelectedBoss = {
  difficulty: Difficulty;
  name: string;
  selected: boolean;
  headcount: number;
  clear: boolean;
};
export type Character = { id: number; name: string; boss: SelectedBoss[] };
export type CharacterList = Character[];

export type PanelType = "select" | "headcount" | "clear" | "none";
