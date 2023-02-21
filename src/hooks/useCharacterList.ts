import { useRecoilState } from "recoil";
import { characterListRecoil, selectedCharacter } from "@/recoils/clearboard";
import { useCallback, useEffect } from "react";
import { changeArray } from "@/libs/helpers";

export default function useCharacterList() {
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
      setCharacterList(prev => [...prev, { name: name || `캐릭터 ${characterList.length + 1}`, boss: [] }]);
      setIdx(characterList.length);
    },
    [characterList.length, setCharacterList, setIdx]
  );

  const renameCharacter = useCallback(
    (i: number) => {
      const name = prompt("변경할 닉네임을 입력해주세요.", characterList[i].name);
      if (name) {
        setCharacterList(prev => changeArray(prev, i, { name, boss: prev[i].boss }));
      }
      return true;
    },
    [characterList, setCharacterList]
  );

  const removeCharacter = useCallback(
    (i: number) => {
      if (confirm("정말로 삭제하시겠습니까?")) {
        if (idx > characterList.length - 2) {
          setIdx(characterList.length - 2);
        }
        setCharacterList(prev => changeArray(prev, i));
      }
      return true;
    },
    [characterList.length, idx, setCharacterList, setIdx]
  );

  return { characterList, idx, setIdx, addCharacter, renameCharacter, removeCharacter };
}
