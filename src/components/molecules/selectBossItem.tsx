import { BOSS } from "@/constants/boss";
import { Box, ListItem, ListItemText } from "@mui/material";
import BossIcon from "@/components/atoms/bossIcon";
import BossDifficulty from "@/components/atoms/bossDifficulty";
import { BossType } from "@/types/boss";

type Props = {
  i: number;
  type: BossType;
  selected: { difficulty: 0 | 1 | 2 | 3 | 4; name: string }[];
  toggleSelected: (difficulty: 0 | 1 | 2 | 3 | 4, name: string) => void;
};

export default function SelectBossItem({ i, type, selected, toggleSelected }: Props) {
  if (!BOSS[i][type]?.length) return null;

  return (
    <ListItem
      sx={{
        display: "grid",
        gridTemplate: "1fr / 150px 1fr",
        p: 0,
        width: "100%",
        minHeight: 35,
        color: "#fff",
      }}
    >
      <Box role={"boss-name"} display={"flex"} p={"0 6px"} height={"100%"} alignItems={"center"}>
        <BossIcon key={i} i={i} />
        <ListItemText sx={{ ml: 1.25 }}>{BOSS[i].name}</ListItemText>
      </Box>
      <Box role={"difficulty-item"}>
        <Box display={"flex"} gap={1} p={1} alignItems={"center"} height={"100%"} flexWrap={"wrap"}>
          {BOSS[i][type].map(j => (
            <BossDifficulty
              key={j}
              difficulty={j}
              name={BOSS[i].name}
              checked={!!selected.find(item => item.difficulty === j && item.name === BOSS[i].name)}
              toggleSelected={toggleSelected}
            />
          ))}
        </Box>
      </Box>
    </ListItem>
  );
}
