import { SelectedBoss } from "@/types/crystalCalc";
import { Typography } from "@mui/material";

type Props = {
  boss: SelectedBoss;
};

export default function Crystal({ boss }: Props) {
  return <Typography textAlign={"right"}>{boss.headcount}인</Typography>;
}
