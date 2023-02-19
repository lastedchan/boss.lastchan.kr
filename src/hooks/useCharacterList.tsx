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
      setCharacterList(prev => [...prev, { name: name || `캐릭터 ${characterList.length + 1}`, selected: [] }]);
      setIdx(characterList.length);
    },
    [characterList.length, setCharacterList, setIdx]
  );

  const removeCharacter = useCallback(
    (i: number) =>
      new Promise(resolve => {
        return resolve(confirm("정말로 삭제하시겠습니까?"));
      }).then(res => res && setCharacterList(prev => changeArray(prev, i))),
    [setCharacterList]
  );

  return { characterList, idx, setIdx, addCharacter, removeCharacter };
}
