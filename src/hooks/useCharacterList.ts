import { useRecoilState, useRecoilValue } from "recoil";
import { characterListRecoil, isRebootRecoil, selectedCharacter } from "@/recoils/clearboard";
import { useCallback, useEffect, useMemo } from "react";
import { changeArray } from "@/libs/helpers";
import { BOSS_LIST } from "@/constants/boss";

export default function useCharacterList() {
  const isReboot = useRecoilValue(isRebootRecoil);
  const [idx, setIdx] = useRecoilState(selectedCharacter);
  const [characterList, setCharacterList] = useRecoilState(characterListRecoil);

  useEffect(() => {
    if (characterList.length) {
      if (idx === -1) setIdx(0);
      else if (idx > characterList.length - 1) setIdx(characterList.length - 1);
    }
  }, [characterList.length, idx, setIdx]);

  const addCharacter = useCallback(
    (name?: string) => {
      setCharacterList(prev => [...prev, { id: +new Date(), name: name || `캐릭터 ${characterList.length + 1}`, boss: [] }]);
      setIdx(characterList.length);
    },
    [characterList.length, setCharacterList, setIdx]
  );

  const copyCharacter = useCallback(
    (idx: number, name?: string) => {
      setCharacterList(prev => [...prev, { ...prev[idx], id: +new Date(), name: name ?? prev[idx].name }]);
      setIdx(characterList.length);
      return true;
    },
    [characterList.length, setCharacterList, setIdx]
  );

  const renameCharacter = useCallback(
    (i: number) => {
      const name = prompt("변경할 닉네임을 입력해주세요.", characterList[i].name);
      if (name) {
        setCharacterList(prev => changeArray(prev, i, { ...prev[i], name }));
      }
      return true;
    },
    [characterList, setCharacterList]
  );

  const removeCharacter = useCallback(
    (i: number) => {
      if (confirm("정말로 삭제하시겠습니까?")) {
        setCharacterList(prev => changeArray(prev, i));
      }
      return true;
    },
    [setCharacterList]
  );

  const resetClear = useCallback(
    () => setCharacterList(prev => prev.map(item => ({ ...item, boss: item.boss.map(item => ({ ...item, clear: false })) }))),
    [setCharacterList]
  );

  const totalAmount = useMemo(
    () => characterList.reduce((prev, character) => prev + character.boss.filter(_ => _.selected).length, 0),
    [characterList]
  );
  const soldAmount = useMemo(
    () => characterList.reduce((prev, character) => prev + character.boss.filter(_ => _.clear).length, 0),
    [characterList]
  );
  const totalPrice = useMemo(
    () =>
      characterList.reduce(
        (prev, character) =>
          prev +
          character.boss
            .filter(_ => _.selected)
            .reduce(
              (prev, item) =>
                prev +
                Math.floor(
                  ((BOSS_LIST.find(_ => _.name === item.name)?.difficulty.find(_ => _.difficulty === item.difficulty)?.price ?? 0) *
                    (isReboot ? 5 : 1)) /
                    item.headcount
                ),
              0
            ),
        0
      ),
    [characterList, isReboot]
  );
  const soldPrice = useMemo(
    () =>
      characterList.reduce(
        (prev, character) =>
          prev +
          character.boss
            .filter(_ => _.clear)
            .reduce(
              (prev, item) =>
                prev +
                Math.floor(
                  ((BOSS_LIST.find(_ => _.name === item.name)?.difficulty.find(_ => _.difficulty === item.difficulty)?.price ?? 0) *
                    (isReboot ? 5 : 1)) /
                    item.headcount
                ),
              0
            ),
        0
      ),
    [characterList, isReboot]
  );

  return {
    idx,
    setIdx,
    addCharacter,
    copyCharacter,
    renameCharacter,
    removeCharacter,
    resetClear,
    totalAmount,
    soldAmount,
    totalPrice,
    soldPrice,
  };
}
