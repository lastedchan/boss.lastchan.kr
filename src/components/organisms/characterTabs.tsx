import BossTabs from "@/components/molecules/bossTabs";
import BossTab from "@/components/atoms/bossTab";
import { MouseEvent, useEffect, useState } from "react";
import useCharacterList from "@/hooks/useCharacterList";
import CharacterContextMenu from "@/components/molecules/characterContextMenu";
import { inRange, isNumber } from "lodash";
import { Box } from "@mui/material";
import { useRecoilValue } from "recoil";
import { characterListRecoil } from "@/recoils/clearboard";
import CreateCharacterModal from "@/components/molecules/createCharacterModal";

export default function CharacterTabs() {
  const { idx, setIdx, addCharacter } = useCharacterList();
  const characterList = useRecoilValue(characterListRecoil);

  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (characterList.length === 0) addCharacter("캐릭터 1");
  }, [addCharacter, characterList.length]);

  if (!inRange(idx, 0, characterList.length)) return null;

  const openContextMenu = (e: MouseEvent<HTMLDivElement> | MouseEvent<SVGSVGElement>) => {
    e.preventDefault();
    console.log(e.currentTarget.tagName);
    setAnchorEl((e.currentTarget.tagName === "BUTTON" ? e.currentTarget : e.currentTarget.parentElement) as HTMLDivElement);
  };

  return (
    <Box>
      <BossTabs value={idx} onChange={(e, v) => isNumber(v) && v >= 0 && setIdx(v)} variant={"scrollable"} sx={{ gridColumn: "1 / -1" }}>
        {characterList.map((item, i) => (
          <BossTab key={item.id} data-idx={i} label={item.name} value={i} sx={{ width: "auto" }} onContextMenu={openContextMenu} />
        ))}
        <CreateCharacterModal />
      </BossTabs>
      <CharacterContextMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </Box>
  );
}
