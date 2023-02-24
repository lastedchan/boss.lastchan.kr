import { Boss } from "@/types/boss";
import { Box, ListItem, ListItemText, Typography } from "@mui/material";
import BossIcon from "@/components/atoms/bossIcon";
import styled from "@emotion/styled";
import BossDifficultyItem from "@/components/atoms/bossDifficultyItem";
import { useRecoilValue } from "recoil";
import { selectedType } from "@/recoils/clearboard";
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
  const { character } = useCharacter(idx);

  const period = useRecoilValue(selectedType);

  if (!boss.difficulty.filter(_ => _.period === period).length) return null;

  const selected = character?.boss.find(item => item.name === boss.name && item.selected);

  return (
    <Item>
      <BossName role={"boss-name"}>
        <BossIcon src={BOSS_IMAGES.PATHNAME + i + BOSS_IMAGES.ICON} />
        <ListItemText sx={{ ml: 0.75 }}>
          <Typography>{boss.name}</Typography>
          {
            <Typography>
              {(selected &&
                (
                  (boss.difficulty.find(item => item.difficulty === selected.difficulty)?.price ?? 0) / selected.headcount ?? 0
                ).toLocaleString()) ||
                0}
            </Typography>
          }
        </ListItemText>
      </BossName>
      <DifficultyItem role={"difficulty-item"}>
        {boss.difficulty
          .filter(_ => _.period === period)
          .map(item => (
            <BossDifficultyItem key={item.difficulty} type={type} boss={boss} difficulty={item} />
          ))}
      </DifficultyItem>
    </Item>
  );
}

const Item = styled(ListItem)`
  display: grid;
  grid-template: 1fr / 144px 1fr;
  padding: 0;
  width: 100%;
  min-height: 35px;
  background-image: linear-gradient(to right, transparent 144px, rgba(0, 0, 0, 0.4) 145px, rgba(0, 0, 0, 0.2) 152px);
  color: #fff;
`;

const BossName = styled(Box)`
  display: flex;
  padding: 0 4px;
  align-items: center;
`;

const DifficultyItem = styled(Box)`
  display: flex;
  gap: 8px;
  padding: 8px 8px 8px 12px;
  min-height: 35px;
  align-items: center;
  flex-wrap: wrap;
`;
