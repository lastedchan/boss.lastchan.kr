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

export default function ClearBossItem({ i, boss }: Props) {
  const { idx } = useCharacterList();
  const { toggleClear } = useCharacter(idx);
  const type = useRecoilValue(selectedType);

  return <BossItem i={i} period={type} boss={boss} type={"clear"} toggle={toggleClear} />;
}
