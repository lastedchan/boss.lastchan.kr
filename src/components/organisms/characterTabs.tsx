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
import { CLEARBOARD } from "@/constants/clearboard";
import Image from "next/image";

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
    setAnchorEl((e.currentTarget.tagName === "BUTTON" ? e.currentTarget : e.currentTarget.parentElement) as HTMLDivElement);
  };

  return (
    <Box>
      <BossTabs value={idx} onChange={(e, v) => isNumber(v) && v >= 0 && setIdx(v)} variant={"scrollable"} sx={{ gridColumn: "1 / -1" }}>
        {characterList.map((item, i) => {
          let allClear = !!item.boss.find(item => item.selected);
          if (allClear) {
            item.boss.forEach(item => {
              if (item.selected && !item.clear) allClear = false;
            });
          }
          return (
            <BossTab
              key={item.id}
              data-idx={i}
              label={
                <Box pl={3}>
                  <Image
                    src={CLEARBOARD.CLEAR}
                    alt={"CLEAR"}
                    width={24}
                    height={20}
                    style={{
                      position: "absolute",
                      top: 0,
                      bottom: 0,
                      left: 8,
                      margin: "auto",
                      filter: allClear ? "" : "grayscale(1)",
                    }}
                  />
                  {item.name}
                </Box>
              }
              value={i}
              sx={{ width: "auto" }}
              onContextMenu={openContextMenu}
            />
          );
        })}
        <CreateCharacterModal />
      </BossTabs>
      <CharacterContextMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </Box>
  );
}
