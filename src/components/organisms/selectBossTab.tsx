import styled from "@emotion/styled";
import { CLEARBOARD } from "@/constants/clearboard";
import SelectBossItem from "@/components/molecules/selectBossItem";
import { List } from "@mui/material";

export default function SelectBossTab() {
  return (
    <Container>
      <List
        sx={{
          p: 1,
          "& > li:nth-child(2n+1) > div:first-child": { backgroundColor: "#555" },
          "& > li:nth-child(2n+1) > div:last-child": { backgroundColor: "#444" },
          "& > li:nth-child(2n) > div:first-child": { backgroundColor: "#444" },
          "& > li:nth-child(2n) > div:last-child": { backgroundColor: "#333" },
        }}
      >
        {CLEARBOARD.ORDER.map(i => (
          <SelectBossItem i={i} />
        ))}
      </List>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  background: #222; //url(${CLEARBOARD.BACKGROUND});
`;
