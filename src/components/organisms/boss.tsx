import { BOSS } from "@/constants/boss";
import { useState } from "react";
import BossList from "@/components/molecules/bossList";
import BossDetail from "@/components/molecules/bossDetail";
import styled from "@emotion/styled";

export default function Boss() {
  const [idx, setIdx] = useState<number>(14);

  return (
    <Container>
      <BossList idx={idx} setIdx={setIdx} />
      <BossDetail idx={idx} />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 141px 1fr;
  gap: 10px;
  margin: 0 auto;
  padding: 8px 11px 14px 11px;
  width: 595px;
  height: 522px;
  background: url(${BOSS.PATHNAME}${BOSS.BACKGROUND}) no-repeat;
  background-size: auto 100%;
`;
