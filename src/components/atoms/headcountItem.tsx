import { Box, Typography } from "@mui/material";
import { SelectedBoss } from "@/types/crystalCalc";
import useCharacterList from "@/hooks/useCharacterList";
import useCharacter from "@/hooks/useCharacter";

type Props = {
  item: SelectedBoss;
};

export default function HeadcountItem({ item }: Props) {
  const { idx } = useCharacterList();
  const { setHeadcount } = useCharacter(idx);
  return (
    <Box>
      <Typography
        textAlign={"right"}
        lineHeight={"19px"}
        sx={{ cursor: "pointer" }}
        onClick={() =>
          setHeadcount(
            item.difficulty,
            item.name,
            Number(prompt("1부터 6 사이의 수를 입력해주세요.", String(item.headcount)) ?? item.headcount)
          )
        }
      >
        ({item.headcount + "인"})
      </Typography>
    </Box>
  );
}
