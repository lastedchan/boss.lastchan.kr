import BossTypeTab from "@/components/organisms/bossTypeTab";
import BossWrapper from "@/components/molecules/bossWrapper";
import BossHead from "@/components/molecules/bossHead";
import BossBody from "@/components/molecules/bossBody";
import styled from "@emotion/styled";
import { Box, List, ListItem, Typography } from "@mui/material";
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
            gridTemplateColumns: "minmax(75px, 176px) minmax(84px, 1fr) 100px",
          }}
        >
          <Typography pl={1}>보스</Typography>
          <Typography pl={3}>난이도</Typography>
          <Typography textAlign={"center"}>메소</Typography>
        </BossHead>
        <BossBody>
          {CLEARBOARD.ORDER.map(i => (
            <BossItem key={i} i={i} type={type} boss={BOSS_LIST[i]} />
          ))}
        </BossBody>
      </BossWrapper>
      <Box gridColumn={"1 / -1"}>
        {type === "select" ? (
          <Box display={"flex"} gap={0.5} width={"100%"} flexWrap={"wrap"} overflow={"hidden"}>
            <List sx={{ flex: 1, p: 0 }}>
              <BossHead sx={{ justifyContent: "center" }}>
                <Typography p={"0 8px"}>최대 판매 결정석</Typography>
              </BossHead>
              <ListItem sx={{ p: "4px 0", bgcolor: "#555", justifyContent: "center" }}>
                <Typography textAlign={"right"}>{totalAmount}</Typography>
              </ListItem>
            </List>
            <List sx={{ flex: 1, p: 0 }}>
              <BossHead sx={{ justifyContent: "center" }}>
                <Typography p={"0 8px"}>최대 주간 수익</Typography>
              </BossHead>
              <ListItem sx={{ p: "4px 0", bgcolor: "#555", justifyContent: "center" }}>
                <Typography textAlign={"right"}>{totalPrice.toLocaleString()}</Typography>
              </ListItem>
            </List>
          </Box>
        ) : (
          <Box display={"flex"} gap={0.5} width={"100%"} flexWrap={"wrap"} overflow={"hidden"}>
            <List sx={{ flex: 1, p: 0 }}>
              <BossHead sx={{ justifyContent: "center" }}>
                <Typography p={"0 8px"}>판매한 결정석</Typography>
              </BossHead>
              <ListItem sx={{ p: "4px 0", bgcolor: "#555", justifyContent: "center" }}>
                <Typography textAlign={"right"}>{soldAmount}</Typography>
              </ListItem>
            </List>
            <List sx={{ flex: 1, p: 0 }}>
              <BossHead sx={{ justifyContent: "center" }}>
                <Typography p={"0 8px"}>이번 주 수익</Typography>
              </BossHead>
              <ListItem sx={{ p: "4px 0", bgcolor: "#555", justifyContent: "center" }}>
                <Typography textAlign={"right"}>{soldPrice.toLocaleString()}</Typography>
              </ListItem>
            </List>
          </Box>
        )}
      </Box>
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
