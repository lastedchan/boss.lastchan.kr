import styled from "@emotion/styled";
import BossTabs from "@/components/molecules/bossTabs";
import BossTab from "@/components/atoms/bossTab";
import { useState } from "react";
import TabPanel from "@/components/organisms/tabPanel";
import CharacterTabs from "@/components/organisms/characterTabs";
import SettingsIcon from "@mui/icons-material/Settings";
import Settings from "@/components/organisms/settings";
import BossPanel from "@/components/organisms/bossPanel";
import Summary from "@/components/organisms/summary";
import { PanelType } from "@/types/crystalCalc";

export default function CrystalCalc() {
  const [tab, setTab] = useState("select");

  return (
    <Container>
      <BossTabs variant={"fullWidth"} value={tab} onChange={(e, v) => setTab(v)} sx={{ flex: "0 0 auto", mb: 1 }}>
        <BossTab label={"보스 선택"} value={"select"} />
        <BossTab label={"인원 설정"} value={"headcount"} />
        <BossTab label={"클리어 현황"} value={"clear"} />
        <BossTab label={"결산"} value={"summary"} />
        <BossTab label={<SettingsIcon />} value={"settings"} sx={{ flex: "0 auto" }} />
      </BossTabs>
      {["select", "headcount", "clear"].find(_ => _ === tab) && <CharacterTabs />}
      <Wrapper>
        <TabPanel tab={["select", "headcount", "clear"]} value={tab}>
          <BossPanel type={tab as PanelType} />
        </TabPanel>
        <TabPanel tab={"summary"} value={tab}>
          <Summary />
        </TabPanel>
        <TabPanel tab={"settings"} value={tab}>
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
