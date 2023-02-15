import styled from "@emotion/styled";
import { CLEARBOARD } from "@/constants/clearboard";
import { BOSS } from "@/constants/boss";
import Image from "next/image";

type Props = {
  i: number;
};

export default function BossIcon({ i }: Props) {
  return (
    <Container>
      <Image src={BOSS.PATHNAME + i + BOSS.ICON} alt={""} width={25} height={25} />
    </Container>
  );
}

const Container = styled.div`
  padding: 2px;
  width: 29px;
  height: 29px;
  background-image: url(${CLEARBOARD.ICON_BASE});
`;
