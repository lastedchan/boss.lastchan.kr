import { ListItem, ListItemProps, Typography } from "@mui/material";
import styled from "@emotion/styled";

export default function BossHead(props: ListItemProps) {
  return (
    <Head {...props}>
      <Typography pl={"10px"} sx={{ textShadow: "0 1px 0 #000" }}>
        보스
      </Typography>
      <Typography pl={"25px"} sx={{ textShadow: "0 1px 0 0 #000" }}>
        난이도
      </Typography>
    </Head>
  );
}

const Head = styled(ListItem)`
  display: grid;
  grid-template-columns: 150px 1fr;
  padding: 0;
  height: 21px;
  border-top: 1px solid transparent;
  border-radius: 4px;
  align-items: center;
  color: #fdb;
  border-image: linear-gradient(to left, transparent 0%, #777 20%, #777 80%, transparent 100%) 1;
  background: transparent linear-gradient(#444, #333);
  box-shadow: 0 1px 4px #222;
  z-index: 10;
`;
