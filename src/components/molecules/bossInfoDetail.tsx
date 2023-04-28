import styled from "@emotion/styled";
import { BOSS_IMAGES, BOSS_INFO_TITLE, BOSS_LIST } from "@/constants/boss";
import { Box, Typography } from "@mui/material";
import BossDifficultyItem from "@/components/atoms/bossDifficultyItem";
import { toLocaleString } from "@/libs/helpers";
import { isNumber } from "lodash";
import { useEffect, useMemo, useState } from "react";
import { useRecoilValue } from "recoil";
import { isRebootRecoil } from "@/recoils/clearboard";

type Props = {
  idx: number;
};

export default function BossInfoDetail({ idx }: Props) {
  const isReboot = useRecoilValue(isRebootRecoil);

  const [difficulty, setDifficulty] = useState(0);
  const item = useMemo(() => BOSS_LIST[idx].difficulty[difficulty], [idx, difficulty]);

  useEffect(() => setDifficulty(0), [idx]);

  return (
    <Container>
      <Wrapper idx={idx}>
        <Box position={"absolute"} top={24} right={16} display={"flex"} flexDirection={"column"} gap={1}>
          {BOSS_LIST[idx].difficulty.map((item, i) => (
            <BossDifficultyItem key={i} difficulty={item} selected={i === difficulty} onClick={() => setDifficulty(i)} />
          ))}
        </Box>
        <Box display={"flex"} flex={1} flexDirection={"column"} gap={1} mt={10} ml={4}>
          {item?.info &&
            Object.entries(item.info).map(([k, v]) => (
              <Typography key={k}>
                {Object.entries(BOSS_INFO_TITLE).find(_ => _[0] === k)?.[1]} : {isNumber(v) ? toLocaleString(v) : v}
              </Typography>
            ))}
          <Typography>강렬한 힘의 결정 : {item && (item.price * (isReboot ? 5 : 1)).toLocaleString()}</Typography>
        </Box>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  padding: 12px 8px 8px 16px;
  width: 100%;
  height: 100%;
  background: url(${BOSS_IMAGES.PATHNAME}${BOSS_IMAGES.BACKGROUND}) top -6px left -161px no-repeat content-box, #333;
`;

const Wrapper = styled.div<{ idx: number }>`
  position: relative;
  padding: 2px 1px;
  width: 100%;
  height: 100%;
  background: url(${_ => BOSS_IMAGES.PATHNAME + _.idx + BOSS_IMAGES.MOB}) top left no-repeat content-box;

  & p {
    font-size: 1.2rem;
    text-shadow: -1px 0 0 #000, 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000;
  }
`;
