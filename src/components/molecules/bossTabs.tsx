import { Tabs, TabsProps } from "@mui/material";
import styled from "@emotion/styled";

export default function BossTabs(props: TabsProps) {
  return <Container {...props} />;
}

const Container = styled(Tabs)`
  min-height: 27px;
  margin-bottom: 4px;
  border-bottom: 2px solid transparent;
  border-image: linear-gradient(to left, transparent 0%, #777 10%, #777 90%, transparent 100%) 1;

  &.MuiTabs-vertical {
    margin-bottom: 0;
    border: none;
    border-image: none;
  }

  & .MuiTabs-flexContainer {
    gap: 5px;
  }

  & .MuiTabs-indicator {
    display: none;
  }
`;
