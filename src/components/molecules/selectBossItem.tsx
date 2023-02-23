import useCharacterList from "@/hooks/useCharacterList";
import useCharacter from "@/hooks/useCharacter";
import { useRecoilValue } from "recoil";
import { selectedType } from "@/recoils/clearboard";
import BossItem from "@/components/molecules/bossItem";
import { Boss } from "@/types/boss";

type Props = {
  i: number;
  boss: Boss;
};

export default function SelectBossItem({ i, boss }: Props) {
  const { idx } = useCharacterList();
  const { toggleSelected } = useCharacter(idx);
  const type = useRecoilValue(selectedType);

  // if (!BOSS_LIST[i].difficulty?.filter(_ => _ && _.period === type).length) return null;

  return <BossItem i={i} period={type} boss={boss} type={"select"} toggle={toggleSelected} />;
}
