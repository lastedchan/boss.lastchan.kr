import styled from "@emotion/styled";
import { BOSS } from "@/constants/boss";

type Props = {
  idx: number;
};

export default function BossDetail({ idx }: Props) {
  return <Container style={{ backgroundImage: `url(${BOSS.PATHNAME + idx + BOSS.MOB})` }}></Container>;
}

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;
