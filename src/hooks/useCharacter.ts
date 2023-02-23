import { useRecoilState } from "recoil";
import { characterSelector, isRebootRecoil } from "@/recoils/clearboard";
import { useMemo } from "react";
import { changeArray } from "@/libs/helpers";
import { useBossList } from "@/swrs/boss";

export default function useCharacter(idx: number) {
  const { bossList, error, isLoading } = useBossList();

  const [isReboot, setIsReboot] = useRecoilState(isRebootRecoil);
  const [character, setCharacter] = useRecoilState(characterSelector(idx));

  const selected = useMemo(() => character?.boss.filter(_ => _.selected), [character]);
  const toggleSelected = (difficulty: number, name: string) => {
    const type = bossList?.find(_ => _.name === name)?.difficulty[difficulty]?.period;
    const idx = character?.boss.findIndex(item => item.difficulty === difficulty && item.name === name);
    if (idx !== -1) {
      setCharacter(prev => ({ ...prev, boss: changeArray(prev.boss, idx, { ...prev.boss[idx], selected: !prev.boss[idx].selected }) }));
    } else {
      const sameTypeIdx = character?.boss.findIndex(
        item => item.name === name && bossList?.find(_ => _.name === item.name)?.difficulty[item.difficulty]?.period === type
      );
      setCharacter(prev => ({ ...prev, boss: changeArray(prev.boss, sameTypeIdx, { difficulty, name, selected: true }) }));
    }
  };

  const clear = useMemo(() => character?.boss.filter(_ => _.clear), [character]);
  const toggleClear = (difficulty: number, name: string) => {
    const idx = character?.boss.findIndex(item => item.difficulty === difficulty && item.name === name);
    if (idx !== -1) {
      setCharacter(prev => ({ ...prev, boss: changeArray(prev.boss, idx, { ...prev.boss[idx], clear: !prev.boss[idx].clear }) }));
    }
  };

  const toggleReboot = () => setIsReboot(prev => !prev);

  return { isReboot, toggleReboot, character, setCharacter, selected, toggleSelected, clear, toggleClear };
}
