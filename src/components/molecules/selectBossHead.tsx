import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";

export default function SelectBossHead() {
  return (
    <Box>
      <Head>
        <Typography pl={"21px"} fontSize={"0.75rem"}>
          보스
        </Typography>
        <Typography pl={"44px"} fontSize={"0.75rem"}>
          난이도
        </Typography>
      </Head>
      <li style={{ display: "grid", gridTemplateColumns: "171px 1fr", height: 5 }}>
        <div style={{ height: "100%", background: "#555 linear-gradient(#333,transparent)" }} />
        <div style={{ height: "100%", background: "#444 linear-gradient(#333,transparent)" }} />
      </li>
    </Box>
  );
}

const Head = styled.li`
  display: grid;
  grid-template-columns: 171px 1fr;
  height: 21px;
  border-top: 1px solid transparent;
  border-radius: 4px;
  align-items: center;
  color: #fdb;
  border-image: linear-gradient(to left, transparent 0%, #777 20%, #777 80%, transparent 100%) 1;
  background-image: linear-gradient(#444, #333);
`;
