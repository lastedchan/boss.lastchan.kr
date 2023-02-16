import { Dispatch, SetStateAction } from "react";
import { Tab, Tabs } from "@mui/material";
import styled from "@emotion/styled";
import { BossType } from "@/types/boss";

type Props = {
  tab: BossType;
  setTab: Dispatch<SetStateAction<BossType>>;
  isMobile: boolean;
};

export default function BossTypeTab({ tab, setTab, isMobile }: Props) {
  return (
    <Container
      variant={isMobile ? "fullWidth" : "standard"}
      orientation={isMobile ? "horizontal" : "vertical"}
      value={tab}
      onChange={(e, v) => setTab(v)}
      className={isMobile ? "horizontal" : "vertical"}
    >
      <Item label={"주간"} value={"week"} />
      <Item label={"월간"} value={"month"} />
      <Item label={"일간"} value={"day"} />
    </Container>
  );
}

const Container = styled(Tabs)`
  position: sticky;
  top: 10px;
  left: 0;
  padding-top: 9px;
  min-height: auto;

  &.horizontal {
    margin-bottom: 8px;
    border-bottom: 2px solid transparent;
    border-image: linear-gradient(to left, transparent 0%, #777 10%, #777 90%, transparent 100%) 1;
  }

  & .MuiTabs-flexContainer {
    gap: 5px;
  }

  & .MuiTabs-indicator {
    display: none;
  }
`;

const Item = styled(Tab)`
  min-width: unset;
  min-height: unset;
  background-image: linear-gradient(#666, #111);
  align-items: flex-start;
  color: #fff;
  font-weight: bold;

  .vertical & {
    width: 94px;
    height: 29px;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    box-shadow: 0 2px 0 0 #111;
  }

  .horizontal & {
    max-width: calc(50% - 4px);
    width: 187px;
    height: 27px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }

  &.Mui-selected {
    background-image: linear-gradient(#3bc, #156);
    color: #fff;
  }
`;
