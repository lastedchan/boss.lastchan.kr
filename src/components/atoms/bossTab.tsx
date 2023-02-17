import { Tab, TabProps } from "@mui/material";
import styled from "@emotion/styled";

export default function BossTab(props: TabProps) {
  return <Item {...props} />;
}

const Item = styled(Tab)`
  min-width: unset;
  min-height: unset;
  background-image: linear-gradient(#666, #111);
  align-items: flex-start;
  color: #fff;
  font-weight: bold;
  width: 187px;
  height: 27px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  .MuiTabs-vertical & {
    width: 94px;
    height: 29px;
    border-top-left-radius: 6px;
    border-top-right-radius: 0;
    border-bottom-left-radius: 6px;
    box-shadow: 0 2px 0 0 #111;
  }

  &.Mui-selected {
    background-image: linear-gradient(#3bc, #156);
    color: #fff;
  }
`;
