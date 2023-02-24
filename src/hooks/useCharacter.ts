import { useRecoilState } from "recoil";
import { characterSelector, isRebootRecoil } from "@/recoils/clearboard";
import { useMemo } from "react";
import { useBossListSWR } from "@/swrs/boss";

export default function useCharacter(idx: number) {
  const { bossList, error, isLoading } = useBossListSWR();

  const [isReboot, setIsReboot] = useRecoilState(isRebootRecoil);
  const [character, setCharacter] = useRecoilState(characterSelector(idx));

  const selected = useMemo(() => character?.boss.filter(_ => _.selected), [character]);
  const toggleSelected = (difficulty: string, name: string) => {};

  const clear = useMemo(() => character?.boss.filter(_ => _.clear), [character]);
  const toggleClear = (difficulty: string, name: string) => {};

  const toggleReboot = () => setIsReboot(prev => !prev);

  return { isReboot, toggleReboot, character, setCharacter, selected, toggleSelected, clear, toggleClear };
}
