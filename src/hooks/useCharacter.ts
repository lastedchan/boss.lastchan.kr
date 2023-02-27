import { useRecoilState, useRecoilValue } from "recoil";
import { characterSelector, isRebootRecoil } from "@/recoils/clearboard";
import { useMemo } from "react";
import { BOSS_LIST } from "@/constants/boss";
import { changeArray } from "@/libs/helpers";
import { Difficulty } from "@/types/boss";
import useBoss from "@/hooks/useBoss";

export default function useCharacter(idx: number) {
  const isReboot = useRecoilValue(isRebootRecoil);
  const [character, setCharacter] = useRecoilState(characterSelector(idx));
  const boss = useBoss();

  const selectedList = useMemo(() => character?.boss.filter(_ => _.selected), [character]);
  const toggleSelected = (difficulty: Difficulty, name: string) => {
    const period = BOSS_LIST?.find(_ => _.name === name)?.difficulty.find(_ => _.difficulty === difficulty)?.period;
    const idx = character?.boss.findIndex(item => item.difficulty === difficulty && item.name === name);

    const selectedSameTypeIdx = character?.boss.findIndex(
      item => item.name === name && item.selected && item.difficulty !== difficulty && boss.getPeriod(item) === period
    );
    if (selectedSameTypeIdx !== -1) {
      setCharacter(prev => ({
        ...prev,
        boss: changeArray(prev.boss, selectedSameTypeIdx, { ...prev.boss[selectedSameTypeIdx], selected: false }),
      }));
    }

    if (idx === -1) {
      setCharacter(prev => ({
        ...prev,
        boss: changeArray(prev.boss, idx, { name, difficulty, selected: true, headcount: 1, clear: false }),
      }));
    } else {
      setCharacter(prev => ({
        ...prev,
        boss: changeArray(prev.boss, idx, { ...prev.boss[idx], selected: !prev.boss[idx].selected }),
      }));
    }
  };

  const clearList = useMemo(() => character?.boss.filter(_ => _.selected && _.clear), [character]);
  const toggleClear = (difficulty: string, name: string) => {
    const idx = character?.boss.findIndex(item => item.difficulty === difficulty && item.name === name);
    if (idx !== -1) {
      setCharacter(prev => ({ ...prev, boss: changeArray(prev.boss, idx, { ...prev.boss[idx], clear: !prev.boss[idx].clear }) }));
    }
  };

  const totalAmount = useMemo(() => selectedList.length, [selectedList]);
  const soldAmount = useMemo(() => clearList.length, [clearList]);

  const totalPrice = useMemo(
    () =>
      selectedList.reduce(
        (prev, item) =>
          prev +
          (BOSS_LIST.find(_ => _.name === item.name)?.difficulty.find(_ => _.difficulty === item.difficulty)?.price ?? 0) *
            (isReboot ? 5 : 1),
        0
      ),
    [isReboot, selectedList]
  );
  const soldPrice = useMemo(
    () =>
      clearList.reduce(
        (prev, item) =>
          prev +
          (BOSS_LIST.find(_ => _.name === item.name)?.difficulty.find(_ => _.difficulty === item.difficulty)?.price ?? 0) *
            (isReboot ? 5 : 1),
        0
      ),
    [isReboot, clearList]
  );

  return { selectedList, toggleSelected, clearList, toggleClear, totalAmount, totalPrice, soldAmount, soldPrice };
}
