import BossTypeTab from "@/components/organisms/bossTypeTab";
import BossWrapper from "@/components/molecules/bossWrapper";
import BossHead from "@/components/molecules/bossHead";
import BossBody from "@/components/molecules/bossBody";
import styled from "@emotion/styled";
import { Box, IconButton, Typography } from "@mui/material";
import useIsMobile from "@/hooks/useIsMobile";
import { CLEARBOARD } from "@/constants/clearboard";
import BossItem from "@/components/molecules/bossItem";
import { BOSS_LIST } from "@/constants/boss";
import useCharacter from "@/hooks/useCharacter";
import useCharacterList from "@/hooks/useCharacterList";
import { PanelType } from "@/types/crystalCalc";
import BossModal from "@/components/organisms/bossModal";
import Image from "next/image";

type Props = {
  type: PanelType;
};

export default function BossPanel({ type }: Props) {
  const { idx } = useCharacterList();
  const { totalAmount, totalPrice, soldAmount, soldPrice, toggleClearAll } = useCharacter(idx);
  const isMobile = useIsMobile();

  if (idx === -1) return null;

  return (
    <Container sx={{ gridTemplate: isMobile ? "27px 1fr auto / 1fr" : "1fr auto / 94px 1fr" }}>
      <BossTypeTab />
      <BossWrapper minHeight={119}>
        <BossHead
          sx={{
            position: "sticky",
            top: 0,
            flex: "0 0 auto",
            display: "grid",
            gridAutoFlow: "column",
            gridTemplateColumns: "minmax(36px, 168px) minmax(84px, 1fr) 100px",
          }}
        >
          <Typography pl={1}>보스</Typography>
          <Typography pl={1}>
            <IconButton
              onClick={toggleClearAll}
              sx={{ height: 16, filter: totalAmount && totalAmount === soldAmount ? "" : "grayscale(1)" }}
            >
              <Image src={CLEARBOARD.CLEAR} alt={"CLEAR"} width={18} height={15} />
            </IconButton>
            난이도
          </Typography>
          <Typography textAlign={"center"}>메소</Typography>
        </BossHead>
        <BossBody>
          {CLEARBOARD.ORDER.map(i => (
            <BossItem key={i} i={i} type={type} boss={BOSS_LIST[i]} />
          ))}
        </BossBody>
      </BossWrapper>
      <Box gridColumn={"1 / -1"}>
        <Box display={"flex"} gap={0.5} width={"100%"} flexWrap={"wrap"} overflow={"hidden"}>
          <BossModal
            title={type !== "clear" ? "최대 판매 결정석" : "판매한 결정석"}
            content={type !== "clear" ? totalAmount : soldAmount}
            sx={{ flex: 1, p: 0 }}
          />
          <BossModal
            title={type !== "clear" ? "최대 주간 수익" : "이번 주 수익"}
            content={(type !== "clear" ? totalPrice : soldPrice).toLocaleString()}
            sx={{ flex: 1, p: 0 }}
          />
        </Box>
      </Box>
    </Container>
  );
}

const Container = styled(Box)`
  display: grid;
  row-gap: 8px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
