import styled from "@emotion/styled";
import { CLEARBOARD } from "@/constants/clearboard";
import { BOSS_IMAGES } from "@/constants/BOSS_LIST";

type Props = {
  i: number;
};

export default function BossIcon({ i }: Props) {
  return <Container i={i}></Container>;
}

const Container = styled.div<{ i: number }>`
  padding: 2px;
  width: 29px;
  height: 29px;
  background: url(${_ => BOSS_IMAGES.PATHNAME + _.i + BOSS_IMAGES.ICON}) content-box, url(${CLEARBOARD.ICON_BASE}) padding-box;
`;
