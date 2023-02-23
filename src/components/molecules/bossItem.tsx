import { Boss } from "@/types/boss";
import { BOSS_DIFFICULTY_LABEL, BOSS_IMAGES } from "@/constants/boss";
import { Box, ListItem, ListItemText } from "@mui/material";
import BossIcon from "@/components/atoms/bossIcon";
import styled from "@emotion/styled";
import { useBoss } from "@/swrs/boss";
import BossDifficultyItem from "@/components/atoms/bossDifficultyItem";
import useCharacterList from "@/hooks/useCharacterList";
import useCharacter from "@/hooks/useCharacter";
import { useRecoilValue } from "recoil";
import { selectedType } from "@/recoils/clearboard";

type Props = {
  i: number;
  boss: Boss;
  type: "select" | "clear";
};

export default function BossItem({ i, boss, type }: Props) {
  const { idx } = useCharacterList();
  const { selected, clear, toggleSelected, toggleClear } = useCharacter(idx);
  const period = useRecoilValue(selectedType);
  const { boss: data } = useBoss(i, period);

  if (!boss) return null;

  // console.log(data?.difficulty);

  return (
    <Item>
      <BossName role={"boss-name"}>
        <BossIcon src={BOSS_IMAGES.PATHNAME + i + BOSS_IMAGES.ICON} />
        <ListItemText sx={{ ml: 0.75 }}>{boss?.name}</ListItemText>
      </BossName>
      <DifficultyItem role={"difficulty-item"}>
        {data?.difficulty?.map(item =>
          item && item.period === period ? (
            <BossDifficultyItem
              key={item.difficulty}
              difficulty={BOSS_DIFFICULTY_LABEL.findIndex(_ => _ === item.difficulty)}
              name={boss.name}
              selected={true}
              clear={false}
              toggle={type === "select" ? toggleSelected : toggleClear}
            />
          ) : null
        )}
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
