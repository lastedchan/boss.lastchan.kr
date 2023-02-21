import { BossType } from "@/types/boss";
import { BOSS } from "@/constants/boss";
import { Box, ListItem, ListItemText } from "@mui/material";
import BossIcon from "@/components/atoms/bossIcon";
import styled from "@emotion/styled";

type Props = {
  i: number;
  type: BossType;
  children?: JSX.Element | (JSX.Element | null)[] | null;
};

export default function BossItem({ i, type, children }: Props) {
  if (!BOSS[i].difficulty?.filter(_ => _ && _.type === type).length) return null;

  return (
    <Item>
      <BossName role={"boss-name"}>
        <BossIcon i={i} />
        <ListItemText sx={{ ml: 0.75 }}>{BOSS[i].name}</ListItemText>
      </BossName>
      <DifficultyItem role={"difficulty-item"}>{children}</DifficultyItem>
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
  align-items: center;
  flex-wrap: wrap;
`;
