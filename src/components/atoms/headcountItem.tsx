import { MenuItem, Select } from "@mui/material";
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
    <Select
      value={item.headcount}
      onChange={e => setHeadcount(item.difficulty, item.name, e.target.value as number)}
      sx={{
        m: 0,
        width: 68,
        height: 19,
        fontSize: "0.75rem",
        "& > .MuiSelect-select": { pt: 0, pb: 0, height: 17, lineHeight: "17px" },
        "& > .MuiSelect-icon": { width: 19 },
      }}
    >
      <MenuItem value={1}>1인</MenuItem>
      <MenuItem value={2}>2인</MenuItem>
      <MenuItem value={3}>3인</MenuItem>
      <MenuItem value={4}>4인</MenuItem>
      <MenuItem value={5}>5인</MenuItem>
      <MenuItem value={6}>6인</MenuItem>
    </Select>
  );
}
