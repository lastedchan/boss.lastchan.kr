import { Dispatch, SetStateAction, useEffect, useState } from "react";
import BossInfoList from "@/components/molecules/bossInfoList";
import BossInfoDetail from "@/components/molecules/bossInfoDetail";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import BossInfoHead from "@/components/molecules/bossInfoHead";

type Props = {
  initIdx?: number;
  setOpen?: Dispatch<SetStateAction<boolean>>;
};

export default function BossInfo({ initIdx, setOpen }: Props) {
  const [idx, setIdx] = useState<number>(initIdx ?? 14);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const onresize = () => {
      setScale(Math.min(window.innerWidth / 472, 1));
    };
    onresize();
    window.addEventListener("resize", onresize);
    return () => window.removeEventListener("resize", onresize);
  }, [setScale]);

  return (
    <Container sx={{ transform: `scale(${scale})`, transformOrigin: `top left` }}>
      <Wrapper>
        <BossInfoHead setOpen={setOpen} />
        <BossInfoList idx={idx} setIdx={setIdx} />
        <BossInfoDetail idx={idx} />
      </Wrapper>
    </Container>
  );
}

const Container = styled(Box)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  padding: 0 12px;
  width: 472px;
  height: 545px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template: auto 524px / auto 1fr;
  width: 100%;
  height: 100%;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  overflow: hidden;
`;
