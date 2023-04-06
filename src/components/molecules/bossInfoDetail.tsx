import styled from "@emotion/styled";
import { BOSS_IMAGES } from "@/constants/boss";

type Props = {
  idx: number;
};

export default function BossInfoDetail({ idx }: Props) {
  return (
    <Container>
      <Wrapper
        style={{
          backgroundImage: `url(${BOSS_IMAGES.PATHNAME + idx + BOSS_IMAGES.MOB})`,
        }}
      ></Wrapper>
    </Container>
  );
}

const Container = styled.div`
  padding: 12px 8px 8px 16px;
  width: 100%;
  height: 100%;
  background: url(${BOSS_IMAGES.PATHNAME}${BOSS_IMAGES.BACKGROUND}) top -6px left -161px no-repeat content-box, #333;
`;

const Wrapper = styled.div`
  padding: 2px 1px;
  width: 100%;
  height: 100%;
  background: top left no-repeat content-box;
`;
