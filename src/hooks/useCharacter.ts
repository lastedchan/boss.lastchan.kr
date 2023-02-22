import { useRecoilState } from "recoil";
import { characterSelector, isRebootRecoil } from "@/recoils/clearboard";
import { useMemo } from "react";
import { BOSS_LIST } from "@/constants/BOSS_LIST";
import { changeArray } from "@/libs/helpers";

export default function useCharacter(idx: number) {
  const [isReboot, setIsReboot] = useRecoilState(isRebootRecoil);
  const [character, setCharacter] = useRecoilState(characterSelector(idx));

  const selected = useMemo(() => character?.boss.filter(_ => _.selected), [character]);
  const toggleSelected = (difficulty: number, name: string) => {
    const type = BOSS_LIST.find(_ => _.name === name)?.difficulty[difficulty]?.type;
    const idx = character?.boss.findIndex(item => item.difficulty === difficulty && item.name === name);
    if (idx !== -1) {
      setCharacter(prev => ({ ...prev, boss: changeArray(prev.boss, idx, { ...prev.boss[idx], selected: !prev.boss[idx].selected }) }));
    } else {
      const sameTypeIdx = character?.boss.findIndex(
        item => item.name === name && BOSS_LIST.find(_ => _.name === item.name)?.difficulty[item.difficulty]?.type === type
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
