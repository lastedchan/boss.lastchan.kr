import { ListItem, ListItemProps } from "@mui/material";
import styled from "@emotion/styled";

export default function BossHead(props: ListItemProps) {
  return <Head {...props} />;
}

const Head = styled(ListItem)`
  display: flex;
  padding: 0;
  height: 21px;
  border-top: 1px solid transparent;
  border-radius: 4px;
  align-items: center;
  color: #fdb;
  border-image: linear-gradient(to left, transparent 0%, #777 20%, #777 80%, transparent 100%) 1;
  background: transparent linear-gradient(#444, #333);
  box-shadow: 0 1px 4px #222;
  text-shadow: 0 1px 0 #000;
  z-index: 10;
`;
