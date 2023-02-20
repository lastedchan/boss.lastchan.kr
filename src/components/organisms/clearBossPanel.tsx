import styled from "@emotion/styled";
import { useState } from "react";
import { BossType } from "@/types/boss";
import { Box } from "@mui/material";
import BossTypeTab from "@/components/organisms/bossTypeTab";
import BossWrapper from "@/components/molecules/bossWrapper";
import BossHead from "@/components/molecules/bossHead";
import BossBody from "@/components/molecules/bossBody";
import ClearBossItem from "@/components/molecules/clearBossItem";
import { CLEARBOARD } from "@/constants/clearboard";

type Props = {
  isMobile: boolean;
};

export default function ClearBossPanel({ isMobile }: Props) {
  const [type, setType] = useState<BossType>("week");

  return (
    <Container sx={{ gridTemplate: isMobile ? "27px auto / 1fr" : "auto / 94px 1fr" }}>
      <BossTypeTab tab={type} setTab={setType} isMobile={isMobile} />
      <BossWrapper>
        <BossHead sx={{ flex: "0 0 auto" }} />
        <BossBody>
          {CLEARBOARD.ORDER.map(i => (
            <ClearBossItem key={i} i={i} type={type} />
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
  padding: 8px 8px 0;
  max-width: 720px;
  width: 100%;
  max-height: 100%;
  overflow: hidden;
`;
