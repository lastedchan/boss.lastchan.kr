import BossTypeTab from "@/components/organisms/bossTypeTab";
import BossWrapper from "@/components/molecules/bossWrapper";
import BossHead from "@/components/molecules/bossHead";
import BossBody from "@/components/molecules/bossBody";
import styled from "@emotion/styled";
import { Box, ListItem, Typography } from "@mui/material";
import useIsMobile from "@/hooks/useIsMobile";
import { CLEARBOARD } from "@/constants/clearboard";
import BossItem from "@/components/molecules/bossItem";
import { BOSS_LIST } from "@/constants/boss";
import useCharacter from "@/hooks/useCharacter";
import useCharacterList from "@/hooks/useCharacterList";

type Props = {
  type: "select" | "clear";
};

export default function BossPanel({ type }: Props) {
  const { idx } = useCharacterList();
  const { totalAmount, totalPrice, soldAmount, soldPrice } = useCharacter(idx);
  const isMobile = useIsMobile();

  return (
    <Container sx={{ gridTemplate: isMobile ? "27px 1fr auto / 1fr" : "1fr auto / 94px 1fr" }}>
      <BossTypeTab />
      <BossWrapper minHeight={119}>
        <BossHead sx={{ position: "sticky", top: 0, flex: "0 0 auto" }}>
          <Typography pl={1} flex={"0 1 144px"}>
            보스
          </Typography>
          <Typography pl={3} flex={"1 0 84px"}>
            난이도
          </Typography>
          <Typography flex={"0 0 100px"} textAlign={"center"}>
            판매금액
          </Typography>
        </BossHead>
        <BossBody>
          {CLEARBOARD.ORDER.map(i => (
            <BossItem key={i} i={i} type={type} boss={BOSS_LIST[i]} />
          ))}
        </BossBody>
      </BossWrapper>
      <BossWrapper gridColumn={"1 / -1"}>
        <BossHead>
          <Typography pl={2} flex={1}>
            총 판매할 수량
          </Typography>
          <Typography pl={2} flex={1}>
            판매한 수량
          </Typography>
          <Typography flex={"0 0 100px"} pr={1} textAlign={"right"}>
            총 주간 수익
          </Typography>
          <Typography flex={"0 0 100px"} pr={1} textAlign={"right"}>
            이번 주 수익
          </Typography>
        </BossHead>
        <ListItem sx={{ p: "8px 0", bgcolor: "#555" }}>
          <Typography pl={3} flex={1}>
            {totalAmount}
          </Typography>
          <Typography pl={3} flex={1}>
            {soldAmount}
          </Typography>
          <Typography pr={1} flex={"0 0 100px"} textAlign={"right"}>
            {totalPrice.toLocaleString()}
          </Typography>
          <Typography pr={1} flex={"0 0 100px"} textAlign={"right"}>
            {soldPrice.toLocaleString()}
          </Typography>
        </ListItem>
      </BossWrapper>
    </Container>
  );
}

const Container = styled(Box)`
  display: grid;
  row-gap: 8px;
  margin: 0 auto;
  max-width: 720px;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
