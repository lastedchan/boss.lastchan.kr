import BossTypeTab from "@/components/organisms/bossTypeTab";
import BossWrapper from "@/components/molecules/bossWrapper";
import BossHead from "@/components/molecules/bossHead";
import BossBody from "@/components/molecules/bossBody";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import useIsMobile from "@/hooks/useIsMobile";
import { CLEARBOARD } from "@/constants/clearboard";

type Props = {
  BossItem: ({ i }: { i: number }) => JSX.Element | null;
};

export default function BossPanel({ BossItem }: Props) {
  const isMobile = useIsMobile();

  return (
    <Container sx={{ gridTemplate: isMobile ? "27px auto / 1fr" : "auto / 94px 1fr" }}>
      <BossTypeTab />
      <BossWrapper minHeight={119}>
        <BossHead sx={{ flex: "0 0 auto" }} />
        <BossBody>
          {CLEARBOARD.ORDER.map(i => (
            <BossItem key={i} i={i} />
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
