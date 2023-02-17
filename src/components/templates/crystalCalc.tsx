import styled from "@emotion/styled";
import SelectBossPanel from "@/components/organisms/selectBossPanel";
import { Box, useMediaQuery } from "@mui/material";
import { useState } from "react";
import BossTypeTab from "@/components/organisms/bossTypeTab";
import { BossType } from "@/types/boss";
import CharacterTabs from "@/components/organisms/characterTabs";

export default function CrystalCalc() {
  const [type, setType] = useState<BossType>("week");

  const isMobile = useMediaQuery("(max-width:540px)");

  return (
    <Box bgcolor={"#333"}>
      <CharacterTabs />
      <Container isMobile={isMobile}>
        <BossTypeTab tab={type} setTab={setType} isMobile={isMobile} />
        <SelectBossPanel type={type} />
      </Container>
    </Box>
  );
}

const Container = styled.div<{ isMobile: boolean }>`
  display: flex;
  flex-direction: ${_ => (_.isMobile ? "column" : "row")};
  padding: 10px;
  width: 100%;
  background-color: #333;
`;
