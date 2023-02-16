import { DIFFICULTY, BOSS_DIFFICULTY_COLOR } from "@/constants/boss";
import { Chip } from "@mui/material";

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
        filter: `brightness(${checked ? 1 : 0.5})`,
        "& span": {
          padding: 0,
        },
      }}
      onClick={() => toggleSelected(difficulty, name)}
    />
  );
}
