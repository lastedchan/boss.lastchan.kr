import { useRecoilState } from "recoil";
import { characterSelector, isRebootRecoil } from "@/recoils/clearboard";
import { useMemo } from "react";
import { BOSS } from "@/constants/boss";
import { changeArray } from "@/libs/helpers";

export default function useCharacter(idx: number) {
  const [isReboot, setIsReboot] = useRecoilState(isRebootRecoil);
  const [character, setCharacter] = useRecoilState(characterSelector(idx));

  const selected = useMemo(() => character?.selected, [character]);

  const toggleSelected = (difficulty: number, name: string) => {
    const type = BOSS.find(_ => _.name === name)?.difficulty[difficulty]?.type;
    const idx = selected?.findIndex(item => item.difficulty === difficulty && item.name === name);
    if (idx !== -1) {
      setCharacter(prev => ({ ...prev, selected: changeArray(prev.selected, idx) }));
    } else {
      const sameTypeIdx = selected?.findIndex(
        item => item.name === name && BOSS.find(_ => _.name === item.name)?.difficulty[item.difficulty]?.type === type
      );
      setCharacter(prev => ({ ...prev, selected: changeArray(prev.selected, sameTypeIdx, { difficulty, name }) }));
    }
  };

  const toggleReboot = () => setIsReboot(prev => !prev);

  return { isReboot, toggleReboot, character, setCharacter, selected, toggleSelected };
}
