import { Typography } from "@mui/material";

type Props = {
  soldAmount: number;
  totalAmount: number;
};

export default function SummaryCrystal({ soldAmount, totalAmount }: Props) {
  return (
    <Typography role={"number"}>
      {soldAmount.toLocaleString()}/{totalAmount.toLocaleString().padStart(2, "0")}
    </Typography>
  );
}
