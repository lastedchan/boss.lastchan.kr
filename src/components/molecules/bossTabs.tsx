import { Tabs, TabsProps } from "@mui/material";
import styled from "@emotion/styled";

export default function BossTabs(props: TabsProps) {
  return <Container {...props} />;
}

const Container = styled(Tabs)`
  flex: 0 0;
  min-height: 27px;
  margin: 0 -8px;
  padding: 0 8px;
  border-bottom: 2px solid transparent;
  border-image: linear-gradient(to right, transparent 0, #777 32px, #777 calc(100% - 32px), transparent 100%) 1;

  &.MuiTabs-vertical {
    margin: 0;
    padding: 0;
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
