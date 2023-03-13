import BossWrapper from "@/components/molecules/bossWrapper";
import BossHead from "@/components/molecules/bossHead";
import { Box, Divider, List, ListItem, Typography } from "@mui/material";
import { useRecoilValue } from "recoil";
import { characterListRecoil } from "@/recoils/clearboard";
import SummaryItem from "@/components/molecules/summaryItem";
import useCharacterList from "@/hooks/useCharacterList";
import SummaryMeso from "@/components/atoms/summaryMeso";
import SummaryCrystal from "@/components/atoms/summaryCrystal";

export default function Summary() {
  const characterList = useRecoilValue(characterListRecoil);
  const { totalAmount, soldAmount, totalPrice, soldPrice } = useCharacterList();

  return (
    <Box flex={1} display={"flex"} flexDirection={"column"} gap={1}>
      <BossWrapper
        flex={1}
        sx={{
          "& .MuiListItem-root": {
            display: "grid",
            gridAutoFlow: "column",
            gridTemplateColumns: "minmax(54px, 1fr) 52px minmax(180px, 1fr)",
          },
        }}
      >
        <BossHead>
          <Typography pl={0.5}>캐릭터명</Typography>
          <Typography pr={0.5} textAlign={"right"}>
            결정석
          </Typography>
          <Typography pr={9} textAlign={"right"}>
            메소
          </Typography>
        </BossHead>
        {characterList.map((item, i) => (
          <SummaryItem key={item.id} idx={i} />
        ))}
        <Divider />
        <ListItem sx={{ position: "sticky", bottom: 0, p: "8px 0" }} hidden={!characterList.length}>
          <Typography />
          <SummaryCrystal soldAmount={soldAmount} totalAmount={totalAmount} />
          <SummaryMeso soldPrice={soldPrice} totalPrice={totalPrice} />
        </ListItem>
      </BossWrapper>
      <Box display={"flex"} gap={0.5} width={"100%"} flexWrap={"wrap"} overflow={"hidden"}>
        <List sx={{ flex: 1, p: 0 }}>
          <BossHead sx={{ justifyContent: "center" }}>
            <Typography p={"0 8px"}>판매 가능한 결정석</Typography>
          </BossHead>
          <ListItem sx={{ p: "4px 0", bgcolor: "#555", justifyContent: "center" }}>
            <Typography textAlign={"right"}>{180 - totalAmount} / 180</Typography>
          </ListItem>
        </List>
        <List sx={{ flex: 1, p: 0 }}>
          <BossHead sx={{ justifyContent: "center" }}>
            <Typography p={"0 8px"}>총 주간 수익</Typography>
          </BossHead>
          <ListItem sx={{ p: "4px 0", bgcolor: "#555", justifyContent: "center" }}>
            <Typography textAlign={"right"}>{totalPrice.toLocaleString()}</Typography>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}
