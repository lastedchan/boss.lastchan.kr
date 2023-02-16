import { BOSS_DIFFICULTY, BOSS_LIST } from "@/constants/boss";
import { Box, ListItem, ListItemText } from "@mui/material";
import BossIcon from "@/components/atoms/bossIcon";
import BossDifficulty from "@/components/atoms/bossDifficulty";

type Props = {
  i: number;
  selected: { difficulty: 0 | 1 | 2 | 3 | 4; name: string }[];
  toggleSelected: (difficulty: 0 | 1 | 2 | 3 | 4, name: string) => void;
};

export default function SelectBossItem({ i, selected, toggleSelected }: Props) {
  return (
    <ListItem
      sx={{
        display: "grid",
        gridTemplate: "1fr / 171px 1fr",
        p: 0,
        width: "100%",
        minHeight: 35,
        color: "#fff",
      }}
    >
      <Box display={"flex"} p={"0 4px 0 16px"} height={"100%"} alignItems={"center"}>
        <BossIcon key={i} i={i} />
        <ListItemText sx={{ ml: 1.25 }}>{BOSS_LIST[i]}</ListItemText>
      </Box>
      <Box display={"flex"} gap={"4px 8px"} p={1} alignItems={"center"} height={"100%"} flexWrap={"wrap"}>
        {BOSS_DIFFICULTY[i].difficulty.map(j => (
          <BossDifficulty
            key={j}
            difficulty={j}
            name={BOSS_LIST[i]}
            checked={!!selected.find(item => item.difficulty === j && item.name === BOSS_LIST[i])}
            toggleSelected={toggleSelected}
          />
        ))}
      </Box>
    </ListItem>
  );
}
