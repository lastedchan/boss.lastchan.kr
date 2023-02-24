import { Boss } from "@/types/boss";
import { Box, ListItem, ListItemText } from "@mui/material";
import BossIcon from "@/components/atoms/bossIcon";
import styled from "@emotion/styled";
import { useBossSWR } from "@/swrs/boss";
import BossDifficultyItem from "@/components/atoms/bossDifficultyItem";
import { useRecoilValue } from "recoil";
import { selectedType } from "@/recoils/clearboard";

type Props = {
  i: number;
  type: "select" | "clear";
  boss?: Boss;
};

export default function BossItem({ i, type, boss }: Props) {
  const period = useRecoilValue(selectedType);
  const { boss: data } = useBossSWR(i, period);

  if (!boss) return null;

  // console.log(data?.difficulty);

  return (
    <Item>
      <BossName role={"boss-name"}>
        <BossIcon src={boss.icon} />
        <ListItemText sx={{ ml: 0.75 }}>{boss.name}</ListItemText>
      </BossName>
      <DifficultyItem role={"difficulty-item"}>
        {data?.difficulty?.map(item =>
          item && item.period === period ? (
            <BossDifficultyItem
              key={item.difficulty}
              type={type}
              difficulty={item.difficulty}
              name={boss.name}
              selected={true}
              clear={false}
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
