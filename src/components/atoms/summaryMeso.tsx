import { Typography } from "@mui/material";

type Props = {
  soldPrice: number;
  totalPrice: number;
};

export default function SummaryMeso({ soldPrice, totalPrice }: Props) {
  return (
    <Typography role={"number"} whiteSpace={"pre"}>
      {soldPrice.toLocaleString()}/{totalPrice.toLocaleString().padStart(13, " ")}
    </Typography>
  );
}
