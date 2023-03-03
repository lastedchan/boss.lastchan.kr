import { BOSS_DIFFICULTY_STYLE } from "@/constants/boss";
import { Box, Chip } from "@mui/material";
import { CLEARBOARD } from "@/constants/clearboard";
import Image from "next/image";
import { Boss, BossDifficulty } from "@/types/boss";
import useCharacterList from "@/hooks/useCharacterList";
import useCharacter from "@/hooks/useCharacter";
import { PanelType } from "@/types/crystalCalc";

type Props = {
  type: PanelType;
  boss: Boss;
  difficulty: BossDifficulty;
};

export default function BossDifficultyItem({ type, boss, difficulty }: Props) {
  const { idx } = useCharacterList();
  const { selectedList, clearList, toggleSelected, toggleClear } = useCharacter(idx);

  const selected = !!selectedList?.find(item => item.difficulty === difficulty.difficulty && item.name === boss.name);
  const checked = selected && !!clearList?.find(item => item.difficulty === difficulty.difficulty && item.name === boss.name);
  const disabled = type === "clear" && !selectedList?.find(item => item.difficulty === difficulty.difficulty && item.name === boss.name);

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
        onClick={() => (type === "select" ? toggleSelected : toggleClear)(difficulty.difficulty, boss.name)}
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
