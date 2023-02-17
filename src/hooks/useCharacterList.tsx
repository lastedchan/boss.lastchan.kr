import { useRecoilState } from "recoil";
import { characterListRecoil, selectedCharacter } from "@/recoils/clearboard";
import { useCallback } from "react";

export default function useCharacterList() {
  const [idx, setIdx] = useRecoilState(selectedCharacter);

  const [characterList, setCharacterList] = useRecoilState(characterListRecoil);

  const addCharacter = useCallback(
    (name?: string) => {
      setCharacterList(prev => [...prev, { name: name || `캐릭터 ${characterList.length + 1}`, selected: [] }]);
    },
    [characterList.length, setCharacterList]
  );

  return { characterList, idx, setIdx, addCharacter };
}
