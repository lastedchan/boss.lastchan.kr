import { Boss } from "@/types/boss";
import { Box, ListItem, ListItemText, Typography } from "@mui/material";
import BossIcon from "@/components/atoms/bossIcon";
import styled from "@emotion/styled";
import BossDifficultyItem from "@/components/atoms/bossDifficultyItem";
import { useRecoilValue } from "recoil";
import { isRebootRecoil, selectedType } from "@/recoils/clearboard";
import { BOSS_IMAGES } from "@/constants/boss";
import useCharacter from "@/hooks/useCharacter";
import useCharacterList from "@/hooks/useCharacterList";

type Props = {
  i: number;
  type: "select" | "clear";
  boss: Boss;
};

export default function BossItem({ i, type, boss }: Props) {
  const { idx } = useCharacterList();
  const { selectedList, clearList, setHeadcount } = useCharacter(idx);
  const isReboot = useRecoilValue(isRebootRecoil);

  const period = useRecoilValue(selectedType);

  const selected = selectedList.find(
    item => item.name === boss.name && boss.difficulty.find(_ => _.difficulty === item.difficulty)?.period === period
  );
  const clear = clearList.find(item => item.name === boss.name);

  if (!boss.difficulty.filter(_ => _.period === period).length || (type === "clear" && !selected)) return null;

  return (
    <Item>
      <BossName role={"boss-name"}>
        <BossIcon src={BOSS_IMAGES.PATHNAME + i + BOSS_IMAGES.ICON} />
        <ListItemText sx={{ ml: 0.75 }}>
          <Box display={"flex"}>
            <Typography overflow={"hidden"} whiteSpace={"nowrap"} textOverflow={"ellipsis"}>
              {boss.name}
            </Typography>
            {selected && (
              <Typography
                flex={"0 0 32px"}
                textAlign={"right"}
                fontSize={"1.05rem"}
                sx={{ cursor: "pointer" }}
                onClick={() =>
                  setHeadcount(
                    selected.difficulty,
                    selected.name,
                    Number(prompt("1부터 6 사이의 수를 입력해주세요.", String(selected.headcount)) ?? selected.headcount)
                  )
                }
              >
                ({selected.headcount + "인"})
              </Typography>
            )}
          </Box>
        </ListItemText>
      </BossName>
      <DifficultyItem role={"difficulty-item"}>
        {boss.difficulty
          .filter(_ => _.period === period)
          .map(item => (
            <BossDifficultyItem key={item.difficulty} type={type} boss={boss} difficulty={item} />
          ))}
      </DifficultyItem>
      <Box display={"flex"} p={"0 4px"} justifyContent={"flex-end"}>
        <Typography role={"number"} flex={1} sx={{ opacity: clear ? 1 : 0.38 }}>
          {(selected &&
            Math.floor(
              ((boss.difficulty.find(item => item.difficulty === selected.difficulty)?.price ?? 0) * (isReboot ? 5 : 1)) /
                selected.headcount
            ).toLocaleString()) ||
            0}
        </Typography>
      </Box>
    </Item>
  );
}

const Item = styled(ListItem)`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: minmax(75px, 176px) minmax(84px, 1fr) 100px;
  padding: 0;
  width: 100%;
  min-height: 35px;
  color: #fff;

  &:nth-of-type(2n + 1) {
    background-color: #555;
  }

  &:nth-of-type(2n) {
    background-color: #444;
  }

  &:first-of-type {
    padding-top: 4px;
  }

  &:first-of-type > div {
    margin-top: -4px;
    padding-top: 4px;
  }

  &:first-of-type > [role="difficulty-item"] {
    padding-top: 12px;
  }

  &:last-of-type > div {
    padding-bottom: 4px;
  }

  &:last-of-type > [role="difficulty-item"] {
    padding-bottom: 12px;
  }
`;

const BossName = styled(Box)`
  //flex: 0 1 144px;
  display: grid;
  grid-template-columns: 29px 1fr;
  padding: 0 4px;
  min-width: 35px;
  align-items: center;
  overflow: hidden;
`;

const DifficultyItem = styled(Box)`
  //flex: 1 0 84px;
  display: flex;
  gap: 8px;
  padding: 8px 8px 8px 8px;
  min-height: 35px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.4) 1px,
    rgba(0, 0, 0, 0.2) 8px,
    rgba(0, 0, 0, 0.2) calc(100% - 8px),
    rgba(0, 0, 0, 0.4) 100%
  );
  align-items: center;
  flex-wrap: wrap;
`;
