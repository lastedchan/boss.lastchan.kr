import styled from "@emotion/styled";
import { Box, List, useMediaQuery } from "@mui/material";
import SelectBossHead from "@/components/molecules/selectBossHead";
import { useState } from "react";
import { BossType } from "@/types/boss";
import SelectBossBody from "@/components/molecules/selectBossBody";
import BossTypeTab from "@/components/organisms/bossTypeTab";
import BossWrapper from "@/components/molecules/bossWrapper";

export default function SelectBossPanel() {
  const [type, setType] = useState<BossType>("week");

  const isMobile = useMediaQuery("(max-width:540px)");

  return (
    <Box flex={1} display={"flex"} flexDirection={isMobile ? "column" : "row"} overflow={"hidden"}>
      <Box pt={isMobile ? 0 : 1}>
        <BossTypeTab tab={type} setTab={setType} isMobile={isMobile} />
      </Box>
      <Box flex={1} display={"flex"} flexDirection={"column"}>
        <BossWrapper>
          <Container>
            <SelectBossHead sx={{ flex: "0 0 auto" }} />
            <Box flex={1} width={"100%"} height={"100%"} overflow={"auto"}>
              <SelectBossBody type={type} />
            </Box>
          </Container>
        </BossWrapper>
      </Box>
    </Box>
  );
}

const Container = styled(List)`
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 100%;
  max-height: 100%;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: transparent;
  overflow: hidden;
`;
