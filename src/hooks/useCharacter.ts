import { useRecoilState } from "recoil";
import { characterSelector, isRebootRecoil } from "@/recoils/clearboard";
import { useMemo } from "react";
import { BOSS_LIST } from "@/constants/boss";
import { changeArray } from "@/libs/helpers";
import { Difficulty } from "@/types/boss";

export default function useCharacter(idx: number) {
  const [isReboot, setIsReboot] = useRecoilState(isRebootRecoil);
  const [character, setCharacter] = useRecoilState(characterSelector(idx));

  const selectedList = useMemo(() => character?.boss.filter(_ => _.selected), [character]);
  const toggleSelected = (difficulty: Difficulty, name: string) => {
    const period = BOSS_LIST?.find(_ => _.name === name)?.difficulty.find(_ => _.difficulty === difficulty)?.period;
    const idx = character?.boss.findIndex(item => item.difficulty === difficulty && item.name === name);
    if (idx === -1) {
      const sameTypeIdx = character?.boss.findIndex(
        item =>
          item.name === name &&
          BOSS_LIST?.find(_ => _.name === item.name)?.difficulty.find(_ => _.difficulty === item.difficulty)?.period === period
      );
      setCharacter(prev => ({
        ...prev,
        boss: changeArray(prev.boss, sameTypeIdx, {
          ...prev.boss[sameTypeIdx],
          name,
          difficulty,
          selected: true,
          headcount: 1,
          clear: false,
        }),
      }));
    } else {
      setCharacter(prev => ({
        ...prev,
        boss: changeArray(prev.boss, idx, { ...prev.boss[idx], selected: !prev.boss[idx].selected }),
      }));
    }
  };

  const clear = useMemo(() => character?.boss.filter(_ => _.clear), [character]);
  const toggleClear = (difficulty: string, name: string) => {
    const idx = character?.boss.findIndex(item => item.difficulty === difficulty && item.name === name);
    if (idx !== -1) {
      setCharacter(prev => ({ ...prev, boss: changeArray(prev.boss, idx, { ...prev.boss[idx], clear: !prev.boss[idx].clear }) }));
    }
  };

  const toggleReboot = () => setIsReboot(prev => !prev);

  return { isReboot, toggleReboot, character, setCharacter, selectedList, toggleSelected, clear, toggleClear };
}
