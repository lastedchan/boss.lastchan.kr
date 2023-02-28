import styled from "@emotion/styled";
import BossTabs from "@/components/molecules/bossTabs";
import BossTab from "@/components/atoms/bossTab";
import { useState } from "react";
import TabPanel from "@/components/organisms/tabPanel";
import CharacterTabs from "@/components/organisms/characterTabs";
import { inRange } from "lodash";
import SettingsIcon from "@mui/icons-material/Settings";
import Settings from "@/components/organisms/settings";
import BossPanel from "@/components/organisms/bossPanel";
import Summary from "@/components/organisms/summary";

export default function CrystalCalc() {
  const [tab, setTab] = useState(0);

  return (
    <Container>
      <BossTabs variant={"fullWidth"} value={tab} onChange={(e, v) => setTab(v)} sx={{ flex: "0 0 auto", mb: 1 }}>
        <BossTab label={"보스 선택"} />
        <BossTab label={"클리어 현황"} />
        <BossTab label={"결산"} />
        <BossTab label={<SettingsIcon />} sx={{ flex: "0 auto" }} />
      </BossTabs>
      {inRange(tab, 0, 2) && <CharacterTabs />}
      <Wrapper>
        <TabPanel idx={0} value={tab}>
          <BossPanel type={"select"} />
        </TabPanel>
        <TabPanel idx={1} value={tab}>
          <BossPanel type={"clear"} />
        </TabPanel>
        <TabPanel idx={2} value={tab}>
          <Summary />
        </TabPanel>
        <TabPanel idx={3} value={tab}>
          <Settings />
        </TabPanel>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: auto;
  padding: 8px;
  max-width: 720px;
  max-height: 920px;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
  background-color: #333;
  color: #fff;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
