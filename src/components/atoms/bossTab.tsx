import { Tab, TabProps } from "@mui/material";
import styled from "@emotion/styled";

export default function BossTab(props: TabProps) {
  return <Item sx={{ width: 187 }} {...props} />;
}

const Item = styled(Tab)`
  flex-direction: row;
  padding: 3px 8px;
  min-width: unset;
  min-height: unset;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background-image: linear-gradient(#666, #111);
  align-items: center;
  word-break: keep-all;
  line-height: 2;
  font-weight: bold;
  color: #fff;

  .MuiTabs-flexContainerVertical > & {
    width: 94px;
    height: 27px;
    border-top-left-radius: 6px;
    border-top-right-radius: 0;
    border-bottom-left-radius: 6px;
    align-items: flex-start;
    box-shadow: 0 2px 0 0 #111;
  }

  &.Mui-selected {
    background-image: linear-gradient(#3bc, #156);
    color: #fff;
  }
`;
