import { BossDifficultyStyle, BossList } from "@/types/boss";

export const BOSS_LIST: BossList = [
  {
    name: "발록",
    difficulty: [{ difficulty: "easy", period: "day", price: 0 }],
  },
  {
    name: "자쿰",
    difficulty: [
      { difficulty: "easy", period: "day", price: 119835 },
      { difficulty: "normal", period: "day", price: 366997 },
      { difficulty: "chaos", period: "week", price: 9741285 },
    ],
  },
  {
    name: "혼테일",
    difficulty: [
      { difficulty: "easy", period: "day", price: 528474 },
      { difficulty: "normal", period: "day", price: 606666 },
      { difficulty: "chaos", period: "day", price: 810086 },
    ],
  },
  {
    name: "힐라",
    difficulty: [
      { difficulty: "normal", period: "day", price: 479343 },
      { difficulty: "hard", period: "week", price: 6936489 },
    ],
  },
  {
    name: "피에르",
    difficulty: [
      { difficulty: "normal", period: "day", price: 580003 },
      { difficulty: "chaos", period: "week", price: 9838932 },
    ],
  },
  {
    name: "반반",
    difficulty: [
      { difficulty: "normal", period: "day", price: 580003 },
      { difficulty: "chaos", period: "week", price: 9818154 },
    ],
  },
  {
    name: "블러디퀸",
    difficulty: [
      { difficulty: "normal", period: "day", price: 580003 },
      { difficulty: "chaos", period: "week", price: 9806780 },
    ],
  },
  {
    name: "벨룸",
    difficulty: [
      { difficulty: "normal", period: "day", price: 580003 },
      { difficulty: "chaos", period: "week", price: 12590202 },
    ],
  },
  {
    name: "반 레온",
    difficulty: [
      { difficulty: "easy", period: "day", price: 633927 },
      { difficulty: "normal", period: "day", price: 873601 },
      { difficulty: "hard", period: "day", price: 1467984 },
    ],
  },
  {
    name: "아카이럼",
    difficulty: [
      { difficulty: "easy", period: "day", price: 690249 },
      { difficulty: "normal", period: "day", price: 1510227 },
    ],
  },
  {
    name: "매그너스",
    difficulty: [
      { difficulty: "easy", period: "day", price: 432605 },
      { difficulty: "normal", period: "day", price: 1553066 },
      {
        difficulty: "hard",
        period: "week",
        price: 11579023,
        info: {
          entranceLevel: 175,
          level: 190,
          hp: 120000000000,
          physicalDefence: "120%",
          magicDefence: "120%",
          deathCount: 10,
          timeLimitM: 30,
        },
      },
    ],
  },
  {
    name: "핑크빈",
    difficulty: [
      { difficulty: "normal", period: "day", price: 841544 },
      { difficulty: "chaos", period: "week", price: 7923110 },
    ],
  },
  {
    name: "시그너스",
    difficulty: [
      { difficulty: "easy", period: "week", price: 5496394 },
      { difficulty: "normal", period: "week", price: 9039130 },
    ],
  },
  {
    name: "스우",
    difficulty: [
      { difficulty: "normal", period: "week", price: 33942566 },
      { difficulty: "hard", period: "week", price: 118294192 },
    ],
  },
  { name: "우르스", difficulty: [{ difficulty: "normal", period: "day", price: 20000000 }] },
  {
    name: "데미안",
    difficulty: [
      { difficulty: "normal", period: "week", price: 35517853 },
      { difficulty: "hard", period: "week", price: 112480613 },
    ],
  },
  { name: "밸러드", difficulty: [] },
  { name: "란마루", difficulty: [] },
  { name: "노히메", difficulty: [] },
  {
    name: "루시드",
    difficulty: [
      { difficulty: "easy", period: "week", price: 48058319 },
      { difficulty: "normal", period: "week", price: 57505626 },
      { difficulty: "hard", period: "week", price: 131095655 },
    ],
  },
  { name: "크루스", difficulty: [] },
  { name: "카웅", difficulty: [{ difficulty: "normal", period: "day", price: 748970 }] },
  {
    name: "파풀라투스",
    difficulty: [
      { difficulty: "easy", period: "day", price: 410135 },
      { difficulty: "normal", period: "day", price: 1596506 },
      { difficulty: "chaos", period: "week", price: 26725937 },
    ],
  },
  {
    name: "윌",
    difficulty: [
      { difficulty: "easy", period: "week", price: 52139127 },
      { difficulty: "normal", period: "week", price: 66311463 },
      { difficulty: "hard", period: "week", price: 145038483 },
    ],
  },
  {
    name: "진 힐라",
    difficulty: [
      { difficulty: "normal", period: "week", price: 148112376 },
      { difficulty: "hard", period: "week", price: 190159452 },
    ],
  },
  {
    name: "검은 마법사",
    difficulty: [
      { difficulty: "hard", period: "month", price: 148112376 },
      { difficulty: "extreme", period: "month", price: 190159452 },
    ],
  },
  {
    name: "더스크",
    difficulty: [
      { difficulty: "normal", period: "week", price: 71054562 },
      { difficulty: "chaos", period: "week", price: 160173752 },
    ],
  },
  {
    name: "듄켈",
    difficulty: [
      { difficulty: "normal", period: "week", price: 76601412 },
      { difficulty: "chaos", period: "week", price: 168609280 },
    ],
  },
  {
    name: "선택받은 세렌",
    difficulty: [
      { difficulty: "normal", period: "week", price: 196904752 },
      { difficulty: "hard", period: "week", price: 267825621 },
      { difficulty: "extreme", period: "week", price: 1071302484 },
    ],
  },
  {
    name: "가디언 엔젤 슬라임",
    difficulty: [
      { difficulty: "normal", period: "week", price: 46935874 },
      { difficulty: "chaos", period: "week", price: 155492141 },
    ],
  },
  { name: "감시자 칼로스", difficulty: [{ difficulty: "chaos", period: "week", price: 300000000 }] },
  { name: "카링", difficulty: [{ difficulty: "normal", period: "week", price: 350000000 }] },
];

export const BOSS_INFO_TITLE = {
  entranceLevel: "입장 레벨",
  level: "레벨",
  arcaneForce: "아케인 포스",
  authenticForce: "어센틱 포스",
  hp: "HP",
  physicalDefence: "물리 방어",
  magicDefence: "마법 방어",
  deathCount: "데스 카운트",
  timeLimitM: "제한 시간(분)",
};

export const ORDER_BOSS = [14, 0, 1, 10, 3, 21, 22, 4, 5, 6, 7, 8, 2, 9, 11, 12, 13, 15, 29, 19, 23, 26, 24, 27, 25, 28, 30, 31];
export const BOSS_DIFFICULTY_LABEL = ["easy", "normal", "hard", "chaos", "extreme"];
export const BOSS_DIFFICULTY_STYLE: BossDifficultyStyle = {
  easy: { background: "linear-gradient(#999, #777)", color: "#fff", border: "1px solid #aaa" },
  normal: { background: "linear-gradient(#4bb, #289)", color: "#fff", border: "1px solid #5cd" },
  hard: { background: "linear-gradient(#d69, #b36)", color: "#fff", border: "1px solid #d58" },
  chaos: { background: "linear-gradient(#444, #222)", color: "#db8", border: "1px solid #db8" },
  extreme: { background: "linear-gradient(#444, #222)", color: "#fff", border: "1px solid #e36" },
};

export const BOSS_IMAGES = {
  PATHNAME: "/images/boss/",
  BACKGROUND: "Main.Move_wnd.backgrnd.png",
  BTN: ".btBoss.normal.0.png",
  BTN_MOUSEOVER: ".btBoss.mouseOver.0.png",
  BTN_CHECKED: ".btBoss.checked.0.png",
  ICON: ".Icon.normal.0.png",
  MOB: ".mob.png",
};
