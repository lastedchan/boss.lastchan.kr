import { useRecoilState, useRecoilValue } from "recoil";
import { characterListRecoil, isRebootRecoil, selectedCharacter } from "@/recoils/clearboard";
import { useCallback, useEffect, useMemo } from "react";
import { changeArray } from "@/libs/helpers";
import { BOSS_LIST } from "@/constants/boss";
import { SelectedBoss } from "@/types/crystalCalc";

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
    (name: string, preset?: number) => {
      if (!name.trim().length) return alert("캐릭터명을 입력해주세요.");
      let boss: SelectedBoss[] = [];
      if (preset) {
        if (preset >= 1) {
          boss = [
            { name: "자쿰", difficulty: "chaos", selected: true, headcount: 1, clear: false },
            { name: "매그너스", difficulty: "hard", selected: true, headcount: 1, clear: false },
            { name: "힐라", difficulty: "hard", selected: true, headcount: 1, clear: false },
            { name: "파풀라투스", difficulty: "chaos", selected: true, headcount: 1, clear: false },
            { name: "피에르", difficulty: "chaos", selected: true, headcount: 1, clear: false },
            { name: "반반", difficulty: "chaos", selected: true, headcount: 1, clear: false },
            { name: "블러디퀸", difficulty: "chaos", selected: true, headcount: 1, clear: false },
            { name: "벨룸", difficulty: "chaos", selected: true, headcount: 1, clear: false },
            { name: "핑크빈", difficulty: "chaos", selected: true, headcount: 1, clear: false },
            { name: "시그너스", difficulty: "normal", selected: true, headcount: 1, clear: false },
          ];
          if (preset >= 2) {
            boss = [
              ...boss,
              { name: "스우", difficulty: "normal", selected: true, headcount: 1, clear: false },
              { name: "데미안", difficulty: "normal", selected: true, headcount: 1, clear: false },
            ];
            if (preset >= 3) {
              boss = [...boss, { name: "가디언 엔젤 슬라임", difficulty: "normal", selected: true, headcount: 1, clear: false }];
            }
          }
        }
      }
      setCharacterList(prev => [...prev, { id: +new Date(), name: name, boss: boss }]);
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
