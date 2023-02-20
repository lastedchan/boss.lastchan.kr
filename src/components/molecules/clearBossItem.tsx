import { BossType } from "@/types/boss";
import { Box, ListItem, ListItemText } from "@mui/material";
import BossIcon from "@/components/atoms/bossIcon";
import { BOSS } from "@/constants/boss";
import BossDifficultyItem from "@/components/atoms/bossDifficultyItem";
import useCharacterList from "@/hooks/useCharacterList";
import useCharacter from "@/hooks/useCharacter";

type Props = {
  i: number;
  type: BossType;
};

export default function ClearBossItem({ i, type }: Props) {
  const { idx } = useCharacterList();
  const { selected, clear, toggleClear } = useCharacter(idx);

  if (!BOSS[i].difficulty?.filter(_ => _ && _.type === type).length) return null;

  return (
    <ListItem
      sx={{
        display: "grid",
        gridTemplate: "1fr / 150px 1fr",
        p: 0,
        width: "100%",
        minHeight: 35,
        backgroundImage:
          "linear-gradient(to right, transparent 0, transparent 150px, rgba(0,0,0,.4) 151px, rgba(0,0,0,.2) 158px, rgba(0,0,0,.2) 100%)",
        backgroundOrigin: "border-box",
        color: "#fff",
      }}
    >
      <Box role={"boss-name"} display={"flex"} p={"0 6px"} height={"100%"} alignItems={"center"}>
        <BossIcon key={i} i={i} />
        <ListItemText sx={{ ml: 0.75 }}>{BOSS[i].name}</ListItemText>
      </Box>
      <Box role={"difficulty-item"} pl={1}>
        <Box display={"flex"} gap={1} p={1} alignItems={"center"} height={"100%"} flexWrap={"wrap"}>
          {BOSS[i].difficulty?.map((item, difficulty) =>
            item && item.type === type ? (
              <BossDifficultyItem
                key={difficulty}
                difficulty={difficulty}
                name={BOSS[i].name}
                checked={
                  !!(
                    selected.find(item => item.difficulty === difficulty && item.name === BOSS[i].name) &&
                    clear?.find(item => item.difficulty === difficulty && item.name === BOSS[i].name)
                  )
                }
                toggle={toggleClear}
                disabled={!selected.find(item => item.difficulty === difficulty && item.name === BOSS[i].name)}
              />
            ) : null
          )}
        </Box>
      </Box>
    </ListItem>
  );
}
