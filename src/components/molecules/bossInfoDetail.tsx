import styled from "@emotion/styled";
import { BOSS_IMAGES, BOSS_LIST } from "@/constants/boss";
import { Box, IconButton, Typography } from "@mui/material";
import BossDifficultyItem from "@/components/atoms/bossDifficultyItem";
import { toLocaleString } from "@/libs/helpers";
import { useEffect, useMemo, useState } from "react";
import { useRecoilValue } from "recoil";
import { isRebootRecoil } from "@/recoils/clearboard";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

type Props = {
  idx: number;
};

export default function BossInfoDetail({ idx }: Props) {
  const isReboot = useRecoilValue(isRebootRecoil);

  const [difficulty, setDifficulty] = useState(0);
  const [phase, setPhase] = useState(0);

  const item = useMemo(() => BOSS_LIST[idx].difficulty[difficulty], [idx, difficulty]);

  useEffect(() => setDifficulty(0), [idx]);

  return (
    <Container>
      <Wrapper idx={idx}>
        <Box position={"absolute"} top={16} right={16} display={"flex"} flexDirection={"column"} gap={1}>
          {BOSS_LIST[idx].difficulty.map((item, i) => (
            <BossDifficultyItem key={i} difficulty={item} selected={i === difficulty} onClick={() => setDifficulty(i)} />
          ))}
        </Box>
        <Box pt={12} pb={2} pl={2} height={"100%"}>
          <Box display={"flex"} flex={1} flexDirection={"column"} gap={1} height={"100%"} overflow={"auto"}>
            {item?.info && (
              <>
                {item.info.phase.map((item, i) => (
                  <Box key={i}>
                    <Typography sx={{ cursor: "pointer" }} onClick={() => setPhase(i)}>
                      {i + 1} 페이즈 {item.name && `: ${item.name}`}
                      <IconButton sx={{ color: "#fff", pointerEvents: "none" }}>
                        {i === phase ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                      </IconButton>
                    </Typography>
                    <Box display={"flex"} flexDirection={"column"} pl={1.5} hidden={i !== phase}>
                      {item.level && <Typography>레벨 : {item.level}</Typography>}
                      {item.hp && <Typography>HP : {toLocaleString(item.hp)}</Typography>}
                      {item.arcaneForce && (
                        <Typography>
                          아케인 포스 : {item.arcaneForce.toLocaleString()} (포뻥 : {(item.arcaneForce * 1.1).toLocaleString()} /{" "}
                          {(item.arcaneForce * 1.3).toLocaleString()} / {(item.arcaneForce * 1.5).toLocaleString()})
                        </Typography>
                      )}
                      {item.authenticForce && <Typography>어센틱 포스 : {item.authenticForce}</Typography>}
                      {!!item.physicalDefence && <Typography>물리 방어 : {item.physicalDefence}%</Typography>}
                      {!!item.magicDefence && <Typography>마법 방어 : {item.magicDefence}%</Typography>}
                    </Box>
                  </Box>
                ))}
                {item.info?.entranceLevel && <Typography>입장 레벨 : {item.info?.entranceLevel}</Typography>}
                {item.info?.deathCount && <Typography>데스 카운트 : {item.info?.deathCount}</Typography>}
                {item.info?.timeLimitM && <Typography>제한 시간 : {item.info?.timeLimitM}분</Typography>}
              </>
            )}
            <Typography>강렬한 힘의 결정 : {item && (item.price * (isReboot ? 5 : 1)).toLocaleString()} 메소</Typography>
          </Box>
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
    text-shadow: -1px -1px 2px #000, -1px 1px 2px #000, 1px -1px 2px #000, 1px 1px 2px #000;
  }

  & svg {
    filter: drop-shadow(0 -1px 0 #000) drop-shadow(0 1px 0 #000) drop-shadow(-1px 0 0 #000) drop-shadow(1px 0 0 #000);
  }
`;
