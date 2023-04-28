import { BOSS_DIFFICULTY_STYLE } from "@/constants/boss";
import { Box, Chip } from "@mui/material";
import { CLEARBOARD } from "@/constants/clearboard";
import Image from "next/image";
import { BossDifficulty, Difficulty } from "@/types/boss";

type Props = {
  selected: boolean;
  checked?: boolean;
  disabled?: boolean;
  bossName?: string;
  difficulty: BossDifficulty;
  onClick?: (difficulty: Difficulty, name: string) => void;
};

export default function BossDifficultyItem({ selected, checked, disabled, bossName, difficulty, onClick }: Props) {
  if (disabled) return null;

  return (
    <Box position={"relative"} width={68} height={19}>
      <Chip
        label={difficulty.difficulty.toUpperCase()}
        component={"span"}
        clickable
        sx={{
          ...BOSS_DIFFICULTY_STYLE[difficulty.difficulty],
          width: "100%",
          height: "100%",
          fontWeight: "bold",
          filter: `brightness(${selected ? (checked ? 0.5 : 1) : 0.38})`,
          "& span": { padding: 0 },
          "&:hover": { textShadow: `0 0 4px ${BOSS_DIFFICULTY_STYLE[difficulty.difficulty].color}` },
        }}
        onClick={() => onClick && onClick(difficulty.difficulty, bossName ?? "")}
        disabled={disabled}
      />
      {checked ? (
        <Image
          src={CLEARBOARD.CLEAR}
          alt={"CLEAR"}
          width={24}
          height={20}
          style={{ position: "absolute", top: 0, left: 0, right: 0, margin: "auto", pointerEvents: "none" }}
        />
      ) : null}
    </Box>
  );
}
