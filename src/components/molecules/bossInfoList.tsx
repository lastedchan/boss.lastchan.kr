import styled from "@emotion/styled";
import { BOSS_IMAGES, ORDER_BOSS } from "@/constants/boss";
import BossInfoListItem from "@/components/atoms/bossInfoListItem";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { Box, Button } from "@mui/material";

type Props = {
  idx: number;
  setIdx: Dispatch<SetStateAction<number>>;
};

export default function BossInfoList({ idx, setIdx }: Props) {
  const [open, setOpen] = useState(false);

  const list = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const onscroll = (e: any) => {
      if (e.ctrlKey) return;
      e.preventDefault();
      if (e.type !== "mousewheel") return;
      e.currentTarget.scrollTo(0, e.currentTarget.scrollTop + (e.deltaY > 0 ? 33 : -33));
    };
    list.current?.addEventListener("scroll", onscroll, false);
    list.current?.addEventListener("mousewheel", onscroll, false);
    return () => {
      list.current?.removeEventListener("scroll", onscroll, false);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      list.current?.removeEventListener("mousewheel", onscroll, false);
    };
  }, []);

  useEffect(() => setOpen(false), [idx]);

  return (
    <Container width={open ? 151 : 0}>
      <Wrapper>
        <List ref={list}>
          {ORDER_BOSS.map(i => (
            <BossInfoListItem key={i} i={i} idx={idx} setIdx={setIdx} />
          ))}
        </List>
      </Wrapper>
      <Button
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: -24,
          m: "auto",
          width: 24,
          height: 32,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        }}
        onClick={() => setOpen(!open)}
      >
        {open ? "≪" : "≫"}
      </Button>
    </Container>
  );
}

const Container = styled(Box)`
  position: relative;
  display: flex;
  height: 100%;
  background-color: #333;
  transition: width 0.5s;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 12px;
  right: 0;
  padding: 21px 4px 32px;
  width: 143px;
  height: calc(100% - 12px);
  background: url(${BOSS_IMAGES.PATHNAME}${BOSS_IMAGES.BACKGROUND}) top -7px right -443px no-repeat;
  overflow: hidden;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 100%;
  height: 100%;
  overflow: hidden auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;
