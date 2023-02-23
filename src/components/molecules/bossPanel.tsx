import BossTypeTab from "@/components/organisms/bossTypeTab";
import BossWrapper from "@/components/molecules/bossWrapper";
import BossHead from "@/components/molecules/bossHead";
import BossBody from "@/components/molecules/bossBody";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import useIsMobile from "@/hooks/useIsMobile";
import { CLEARBOARD } from "@/constants/clearboard";
import { useBossList } from "@/swrs/boss";
import BossItem from "@/components/molecules/bossItem";
import { useRecoilValue } from "recoil";
import { selectedType } from "@/recoils/clearboard";

type Props = {
  type: "select" | "clear";
  // BossItem: ({ i }: { i: number }) => JSX.Element | null;
};

export default function BossPanel({ type }: Props) {
  const period = useRecoilValue(selectedType);
  const { bossList, error, isLoading } = useBossList(period);
  const isMobile = useIsMobile();

  if (isLoading || !bossList) return null;

  console.log(bossList);

  return (
    <Container sx={{ gridTemplate: isMobile ? "27px auto / 1fr" : "auto / 94px 1fr" }}>
      <BossTypeTab />
      <BossWrapper minHeight={119}>
        <BossHead sx={{ flex: "0 0 auto" }}>
          <Typography pl={1} width={144}>
            보스
          </Typography>
          <Typography pl={3.5}>난이도</Typography>
        </BossHead>
        <BossBody>
          {CLEARBOARD.ORDER.map(i => (
            <BossItem key={i} i={i} type={type} boss={bossList[i - 1]} />
          ))}
        </BossBody>
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
  max-height: 100%;
  overflow: hidden;
`;
