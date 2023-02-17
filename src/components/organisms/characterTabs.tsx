import BossTabs from "@/components/molecules/bossTabs";
import BossTab from "@/components/atoms/bossTab";
import { useRecoilState } from "recoil";
import { characterListRecoil } from "@/recoils/clearboard";
import { useCallback, useEffect } from "react";

export default function CharacterTabs() {
  const [characterList, setCharacterList] = useRecoilState(characterListRecoil);

  const addCharacter = useCallback(() => {
    setCharacterList(prev => [...prev, { name: `캐릭터 ${characterList.length + 1}`, selected: [] }]);
  }, [characterList.length, setCharacterList]);

  useEffect(() => {
    if (characterList.length === 0) addCharacter();
  }, []);

  return (
    <BossTabs variant={"scrollable"} sx={{ pt: 1, pl: 1, pr: 1 }}>
      {characterList.map((item, i) => (
        <BossTab key={i} label={item.name} sx={{ width: "auto !important" }} />
      ))}
    </BossTabs>
  );
}
