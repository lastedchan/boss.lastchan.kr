import { ListItem, Typography } from "@mui/material";
import useCharacter from "@/hooks/useCharacter";
import { useRecoilValue } from "recoil";
import { characterSelector } from "@/recoils/clearboard";

type Props = {
  idx: number;
};

export default function SummaryItem({ idx }: Props) {
  const character = useRecoilValue(characterSelector(idx));
  const { totalAmount, totalPrice, soldAmount, soldPrice } = useCharacter(idx);

  return (
    <ListItem
      sx={{
        p: "8px 0",
      }}
    >
      <Typography pl={0.5} overflow={"hidden"} whiteSpace={"nowrap"} textOverflow={"ellipsis"}>
        {character.name}
      </Typography>
      <Typography role={"number"}>
        {soldAmount.toLocaleString()}/{totalAmount.toLocaleString()}
      </Typography>
      <Typography role={"number"}>
        {soldPrice.toLocaleString().padStart(13, " ")} / {totalPrice.toLocaleString().padStart(13, " ")}
      </Typography>
    </ListItem>
  );
}
