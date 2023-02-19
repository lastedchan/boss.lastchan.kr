import styled from "@emotion/styled";
import { Box, List, useMediaQuery } from "@mui/material";
import SelectBossHead from "@/components/molecules/selectBossHead";
import { useState } from "react";
import { BossType } from "@/types/boss";
import SelectBossBody from "@/components/molecules/selectBossBody";
import BossTypeTab from "@/components/organisms/bossTypeTab";
import BossWrapper from "@/components/molecules/bossWrapper";
import CharacterTabs from "@/components/organisms/characterTabs";
import useCharacterList from "@/hooks/useCharacterList";
import useCharacter from "@/hooks/useCharacter";

export default function SelectBossPanel() {
  const { idx } = useCharacterList();
  const { character } = useCharacter(idx);
  const [type, setType] = useState<BossType>("week");

  const isMobile = useMediaQuery("(max-width:540px)");

  return (
    <Container sx={{ gridTemplate: isMobile ? "27px 27px auto / 1fr" : "27px auto / 94px 1fr" }}>
      <CharacterTabs />
      {character && (
        <>
          <BossTypeTab tab={type} setTab={setType} isMobile={isMobile} />
          <BossWrapper>
            <Wrapper>
              <SelectBossHead sx={{ flex: "0 0 auto" }} />
              <Box flex={1} width={"100%"} height={"100%"} overflow={"auto"}>
                <SelectBossBody type={type} />
              </Box>
            </Wrapper>
          </BossWrapper>
        </>
      )}
    </Container>
  );
}

const Container = styled(Box)`
  flex: 1;
  display: grid;
  row-gap: 8px;
  margin: 0 auto;
  padding: 8px;
  max-width: 720px;
  width: 100%;
  overflow: hidden;
`;

const Wrapper = styled(List)`
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
