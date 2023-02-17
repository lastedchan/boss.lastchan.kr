import styled from "@emotion/styled";
import { CLEARBOARD } from "@/constants/clearboard";
import SelectBossItem from "@/components/molecules/selectBossItem";
import { Box, List } from "@mui/material";
import SelectBossHead from "@/components/molecules/selectBossHead";
import { useState } from "react";
import { BossType } from "@/types/boss";

type Props = {
  type: BossType;
};

export default function SelectBossPanel({ type }: Props) {
  // const { selected, toggleSelected } = useCharacter(0);
  const [selected, setSelected] = useState<{ difficulty: number; name: string }[]>([]);

  const toggleSelected = (difficulty: number, name: string) => {
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
          p: 0,
          borderBottomLeftRadius: 8,
          borderBottomRightRadius: 8,
          backgroundColor: "transparent",
          overflow: "hidden",
          "& li:nth-of-type(2n+1) > div:first-of-type": { backgroundColor: "#555" },
          "& li:nth-of-type(2n+1) > div:last-of-type": { backgroundColor: "#444" },
          "& li:nth-of-type(2n) > div:first-of-type": { backgroundColor: "#444" },
          "& li:nth-of-type(2n) > div:last-of-type": { backgroundColor: "#333" },
        }}
      >
        <SelectBossHead />
        <Box sx={{ "& > li:first-of-type > div": { pt: 0.5 }, "& > li:last-of-type > div": { pb: 0.25 } }}>
          {CLEARBOARD.ORDER.map(i => (
            <SelectBossItem key={i} i={i} type={type} selected={selected} toggleSelected={toggleSelected} />
          ))}
        </Box>
      </List>
    </Container>
  );
}

const Container = styled.div`
  margin: 0 auto;
  padding: 8px 10px;
  width: 100%;
  border: 1px solid transparent;
  border-image: linear-gradient(to left, transparent 0%, #777 20%, #777 80%, transparent 100%) 1;
  border-radius: 8px;
  background: #222;
`;
