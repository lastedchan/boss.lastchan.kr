import useCharacterList from "@/hooks/useCharacterList";
import useCharacter from "@/hooks/useCharacter";
import { useRecoilValue } from "recoil";
import { selectedType } from "@/recoils/clearboard";
import { BOSS } from "@/constants/boss";
import BossItem from "@/components/molecules/bossItem";
import BossDifficultyItem from "@/components/atoms/bossDifficultyItem";

type Props = {
  i: number;
};

export default function ClearBossItem({ i }: Props) {
  const { idx } = useCharacterList();
  const { selected, clear, toggleClear } = useCharacter(idx);
  const type = useRecoilValue(selectedType);

  if (!BOSS[i].difficulty?.filter(_ => _ && _.type === type).length) return null;

  return (
    <BossItem i={i} type={type}>
      {BOSS[i].difficulty?.map((item, difficulty) =>
        item && item.type === type ? (
          <BossDifficultyItem
            key={difficulty}
            difficulty={difficulty}
            name={BOSS[i].name}
            selected={!!selected.find(item => item.difficulty === difficulty && item.name === BOSS[i].name)}
            clear={!!clear?.find(item => item.difficulty === difficulty && item.name === BOSS[i].name)}
            toggle={toggleClear}
            disabled={!selected.find(item => item.difficulty === difficulty && item.name === BOSS[i].name)}
          />
        ) : null
      )}
    </BossItem>
  );
}
