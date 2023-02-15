import { BOSS_LIST } from "@/constants/boss";
import { Box, ListItem, ListItemText } from "@mui/material";
import BossIcon from "@/components/atoms/bossIcon";

type Props = {
  i: number;
};

export default function SelectBossItem({ i }: Props) {
  return (
    <ListItem sx={{ display: "grid", gridTemplate: "1fr / 171px 1fr", p: 0, width: "100%", height: 35, color: "#fff" }}>
      <Box display={"flex"} flexDirection={"row"} p={"0 4px 0 8px"} alignItems={"center"}>
        <BossIcon key={i} i={i} />
        <ListItemText sx={{ ml: 0.5 }}>{BOSS_LIST[i]}</ListItemText>
      </Box>
    </ListItem>
  );
}
