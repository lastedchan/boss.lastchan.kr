import { BOSS_DIFFICULTY_LABEL, BOSS_DIFFICULTY_STYLE } from "@/constants/boss";
import { Box, Chip } from "@mui/material";
import { CLEARBOARD } from "@/constants/clearboard";
import Image from "next/image";

type Props = {
  difficulty: number;
  name: string;
  checked: boolean;
  toggleSelected: (difficulty: number, name: string) => void;
};

export default function BossDifficultyItem({ difficulty, name, checked, toggleSelected }: Props) {
  return (
    <Box position={"relative"} width={68} height={19}>
      <Chip
        label={BOSS_DIFFICULTY_LABEL[difficulty].toUpperCase()}
        component={"span"}
        clickable
        sx={{
          ...BOSS_DIFFICULTY_STYLE[difficulty],
          width: "100%",
          height: "100%",
          fontWeight: "bold",
          filter: `brightness(${checked ? 0.5 : 1})`,
          "& span": { padding: 0 },
          "&:hover": { textShadow: `0 0 4px ${BOSS_DIFFICULTY_STYLE[difficulty].color}` },
        }}
        onClick={() => toggleSelected(difficulty, name)}
      />
      {checked ? (
        <Image
          src={CLEARBOARD.CLEAR}
          alt={""}
          width={24}
          height={20}
          style={{ position: "absolute", top: 0, left: 0, right: 0, margin: "auto", pointerEvents: "none" }}
        />
      ) : null}
    </Box>
  );
}
