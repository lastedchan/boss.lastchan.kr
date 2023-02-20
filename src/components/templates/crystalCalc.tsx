import styled from "@emotion/styled";
import SelectBossPanel from "@/components/organisms/selectBossPanel";
import BossTabs from "@/components/molecules/bossTabs";
import BossTab from "@/components/atoms/bossTab";
import { useMediaQuery } from "@mui/material";
import { useState } from "react";
import ClearBossPanel from "@/components/organisms/clearBossPanel";
import TabPanel from "@/components/molecules/tabPanel";
import CharacterTabs from "@/components/organisms/characterTabs";
import { inRange } from "lodash";
import useCharacter from "@/hooks/useCharacter";
import useCharacterList from "@/hooks/useCharacterList";

export default function CrystalCalc() {
  const [tab, setTab] = useState(0);
  const { idx } = useCharacterList();
  const { character } = useCharacter(idx);

  const isMobile = useMediaQuery("(max-width:560px)");

  return (
    <Container>
      <BossTabs variant={"fullWidth"} value={tab} onChange={(e, v) => setTab(v)} sx={{ gridColumn: "1 / -1" }}>
        <BossTab label={"보스 선택"} />
        <BossTab label={"격파 완료"} />
        <BossTab label={"결산"} />
      </BossTabs>
      <div style={{ margin: "auto", padding: "0 8px", maxWidth: 720, width: "100%" }} hidden={!inRange(tab, 0, 2)}>
        <CharacterTabs />
      </div>
      <TabPanel idx={0} value={tab}>
        {character && <SelectBossPanel isMobile={isMobile} />}
      </TabPanel>
      <TabPanel idx={1} value={tab}>
        {character && <ClearBossPanel isMobile={isMobile} />}
      </TabPanel>
      <TabPanel idx={2} value={tab}></TabPanel>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: auto;
  padding: 8px;
  max-width: 1200px;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  background-color: #333;
`;
