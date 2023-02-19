import { List } from "@mui/material";
import { CLEARBOARD } from "@/constants/clearboard";
import SelectBossItem from "@/components/molecules/selectBossItem";
import { BossType } from "@/types/boss";
import styled from "@emotion/styled";

type Props = {
  type: BossType;
};

export default function SelectBossBody({ type }: Props) {
  return (
    <Container>
      {CLEARBOARD.ORDER.map(i => (
        <SelectBossItem key={i} i={i} type={type} />
      ))}
    </Container>
  );
}

const Container = styled(List)`
  padding: 4px 0 0;
  width: 100%;
  min-height: 70px;
  background: #555
    linear-gradient(to right, transparent 0, transparent 150px, rgba(0, 0, 0, 0.4) 151px, rgba(0, 0, 0, 0.2) 158px, rgba(0, 0, 0, 0.2) 100%);
  overflow: hidden;

  & > li:first-of-type {
    //padding-top: 4px;
  }

  & > li:last-of-type {
    padding-bottom: 4px;
  }

  & li:nth-of-type(2n + 1) {
    background-color: #555;
  }

  & li:nth-of-type(2n) {
    background-color: #444;
  }
`;
