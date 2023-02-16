import { DIFFICULTY, BOSS_DIFFICULTY_COLOR } from "@/constants/boss";
import { Chip } from "@mui/material";
import { CLEARBOARD } from "@/constants/clearboard";

type Props = {
  difficulty: 0 | 1 | 2 | 3 | 4;
  name: string;
  checked: boolean;
  toggleSelected: (difficulty: 0 | 1 | 2 | 3 | 4, name: string) => void;
};

export default function BossDifficulty({ difficulty, name, checked, toggleSelected }: Props) {
  return (
    <Chip
      label={DIFFICULTY[difficulty]}
      component={"span"}
      clickable
      sx={{
        ...BOSS_DIFFICULTY_COLOR[difficulty],
        width: 68,
        height: 19,
        fontWeight: "bold",
        // filter: `brightness(${checked ? 0.5 : 1})`,
        "::before": checked
          ? {
              content: `url(${CLEARBOARD.CLEAR})`,
              position: "absolute",
              width: 24,
              height: 20,
            }
          : {},
        "& span": {
          padding: 0,
        },
      }}
      onClick={() => toggleSelected(difficulty, name)}
    />
  );
}
