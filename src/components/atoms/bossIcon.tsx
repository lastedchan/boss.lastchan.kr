import styled from "@emotion/styled";
import { CLEARBOARD } from "@/constants/clearboard";
import { Box, BoxProps, Icon } from "@mui/material";
import BossInfo from "@/components/organisms/bossInfo";
import { useState } from "react";
import { BOSS_IMAGES } from "@/constants/boss";

type Props = {
  i: number;
};

export default function BossIcon({ i, ...props }: BoxProps & Props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Container {...props} onClick={() => setOpen(true)}>
        <Icon sx={{ background: `url(${BOSS_IMAGES.PATHNAME + i + BOSS_IMAGES.ICON})`, fontSize: 25 }} />
      </Container>
      {open && (
        <Box position={"fixed"} top={0} bottom={0} left={0} right={0} bgcolor={"rgba(0, 0, 0, .7)"} zIndex={100}>
          <Box onClick={() => setOpen(false)} sx={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0, zIndex: -1 }} />
          <BossInfo initIdx={i} setOpen={setOpen} />
        </Box>
      )}
    </>
  );
}

const Container = styled(Box)<{ i?: number }>`
  padding: 2px;
  width: 29px;
  height: 29px;
  background: url(${CLEARBOARD.ICON_BASE});
  cursor: pointer;
`;
