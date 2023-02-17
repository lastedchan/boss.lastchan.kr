import BossTabs from "@/components/molecules/bossTabs";
import BossTab from "@/components/atoms/bossTab";
import { useEffect } from "react";
import useCharacterList from "@/hooks/useCharacterList";

export default function CharacterTabs() {
  const { characterList, idx, setIdx, addCharacter } = useCharacterList();

  useEffect(() => {
    if (characterList.length === 0) addCharacter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (characterList.length) {
      if (idx === -1) setIdx(0);
      else if (idx > characterList.length - 1) setIdx(characterList.length);
    }
  }, [characterList.length, idx, setIdx]);

  return (
    <BossTabs value={idx} onChange={(e, v) => setIdx(v)} variant={"scrollable"} sx={{ gridColumn: "1 / -1" }}>
      {characterList.map((item, i) => (
        <BossTab key={i} label={item.name} value={i} sx={{ width: "auto !important" }} />
      ))}
    </BossTabs>
  );
}
