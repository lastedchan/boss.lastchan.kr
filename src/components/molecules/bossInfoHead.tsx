import styled from "@emotion/styled";
import { IconButton } from "@mui/material";
import BossHead from "@/components/molecules/bossHead";
import { Dispatch, SetStateAction } from "react";

type Props = {
  setOpen?: Dispatch<SetStateAction<boolean>>;
};

export default function BossInfoHead({ setOpen }: Props) {
  return (
    <Container>
      <BossHead sx={{ justifyContent: "center" }}>BOSS INFO</BossHead>
      <IconButton
        onClick={() => setOpen(false)}
        sx={{ position: "absolute", top: 0, bottom: 0, right: 8, p: 0, pt: 0.5, color: "#fff", fontSize: 16, zIndex: 10 }}
      >
        X
      </IconButton>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  grid-column: 1 / -1;
  width: 100%;
  height: 21px;
  background-color: #333;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  //opacity: 0.5;
`;
