import styled from "@emotion/styled";
import { BOSS_IMAGES } from "@/constants/boss";

type Props = {
  idx: number;
};

export default function BossDetail({ idx }: Props) {
  return <Container style={{ backgroundImage: `url(${BOSS_IMAGES.PATHNAME + idx + BOSS_IMAGES.MOB})` }}></Container>;
}

const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;
