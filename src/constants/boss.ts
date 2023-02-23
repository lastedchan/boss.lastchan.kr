import { BossDifficultyStyle } from "@/types/boss";

export const ORDER_BOSS = [14, 0, 1, 10, 3, 21, 22, 4, 5, 6, 7, 8, 2, 9, 11, 12, 13, 15, 29, 19, 23, 26, 24, 27, 25, 28, 30, 31];
export const BOSS_DIFFICULTY_LABEL = ["easy", "normal", "hard", "chaos", "extreme"];
export const BOSS_DIFFICULTY_STYLE: BossDifficultyStyle = [
  { background: "linear-gradient(#999, #777)", color: "#fff", border: "1px solid #aaa" },
  { background: "linear-gradient(#4bb, #289)", color: "#fff", border: "1px solid #5cd" },
  { background: "linear-gradient(#d69, #b36)", color: "#fff", border: "1px solid #d58" },
  { background: "linear-gradient(#444, #222)", color: "#db8", border: "1px solid #db8" },
  { background: "linear-gradient(#444, #222)", color: "#fff", border: "1px solid #e36" },
];

export const BOSS_IMAGES = {
  PATHNAME: "/images/boss/",
  BACKGROUND: "Main.Move_wnd.backgrnd.png",
  BTN: ".btBoss.normal.0.png",
  BTN_MOUSEOVER: ".btBoss.mouseOver.0.png",
  BTN_CHECKED: ".btBoss.checked.0.png",
  ICON: ".Icon.normal.0.png",
  MOB: ".mob.png",
};
