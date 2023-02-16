import styled from "@emotion/styled";
import { CLEARBOARD } from "@/constants/clearboard";
import SelectBossItem from "@/components/molecules/selectBossItem";
import { Box, List } from "@mui/material";
import SelectBossHead from "@/components/molecules/selectBossHead";
import { useState } from "react";

export default function SelectBossTab() {
  const [selected, setSelected] = useState<{ difficulty: 0 | 1 | 2 | 3 | 4; name: string }[]>([]);

  console.log(selected);

  const toggleSelected = (difficulty: 0 | 1 | 2 | 3 | 4, name: string) => {
    const idx = selected.findIndex(item => item.difficulty === difficulty && item.name === name);
    if (idx !== -1) {
      setSelected(prev => [...prev.slice(0, idx), ...prev.slice(idx + 1)]);
    } else {
      setSelected(prev => [...prev, { difficulty, name }]);
    }
  };

  return (
    <Container role={"select-boss"}>
      <List
        sx={{
          p: "8px 10px",
          borderRadius: 2,
          borderTop: "1px solid transparent",
          borderImage: "linear-gradient(to left, transparent 0%,#777 20%, #777 80%,transparent 100%) 1",
          backgroundColor: "#222",
          "& li:nth-child(2n+1) > div:first-child": { backgroundColor: "#555" },
          "& li:nth-child(2n+1) > div:last-child": { backgroundColor: "#444" },
          "& li:nth-child(2n) > div:first-child": { backgroundColor: "#444" },
          "& li:nth-child(2n) > div:last-child": { backgroundColor: "#333" },
        }}
      >
        <SelectBossHead />
        <Box>
          {CLEARBOARD.ORDER.map(i => (
            <SelectBossItem key={i} i={i} selected={selected} toggleSelected={toggleSelected} />
          ))}
        </Box>
      </List>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  padding: 4px 2px;
  width: 100%;
  background: #333;
`;
