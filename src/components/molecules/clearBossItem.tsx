import useCharacterList from "@/hooks/useCharacterList";
import useCharacter from "@/hooks/useCharacter";
import { useRecoilValue } from "recoil";
import { selectedType } from "@/recoils/clearboard";
import { BOSS_LIST } from "@/constants/BOSS_LIST";
import BossItem from "@/components/molecules/bossItem";
import BossDifficultyItem from "@/components/atoms/bossDifficultyItem";

type Props = {
  i: number;
};

export default function ClearBossItem({ i }: Props) {
  const { idx } = useCharacterList();
  const { selected, clear, toggleClear } = useCharacter(idx);
  const type = useRecoilValue(selectedType);

  if (!BOSS_LIST[i].difficulty?.filter(_ => _ && _.type === type).length) return null;

  return (
    <BossItem i={i} type={type}>
      {BOSS_LIST[i].difficulty?.map((item, difficulty) =>
        item && item.type === type ? (
          <BossDifficultyItem
            key={difficulty}
            difficulty={difficulty}
            name={BOSS_LIST[i].name}
            selected={!!selected.find(item => item.difficulty === difficulty && item.name === BOSS_LIST[i].name)}
            clear={!!clear?.find(item => item.difficulty === difficulty && item.name === BOSS_LIST[i].name)}
            toggle={toggleClear}
            disabled={!selected.find(item => item.difficulty === difficulty && item.name === BOSS_LIST[i].name)}
          />
        ) : null
      )}
    </BossItem>
  );
}
