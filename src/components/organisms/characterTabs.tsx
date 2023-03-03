import BossTabs from "@/components/molecules/bossTabs";
import BossTab from "@/components/atoms/bossTab";
import { useEffect, useState } from "react";
import useCharacterList from "@/hooks/useCharacterList";
import CharacterContextMenu from "@/components/molecules/characterContextMenu";
import { inRange, isNumber } from "lodash";
import { Box } from "@mui/material";
import { useRecoilValue } from "recoil";
import { characterListRecoil } from "@/recoils/clearboard";

export default function CharacterTabs() {
  const { idx, setIdx, addCharacter } = useCharacterList();
  const characterList = useRecoilValue(characterListRecoil);

  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (characterList.length === 0) addCharacter();
  }, [addCharacter, characterList.length]);

  if (!inRange(idx, 0, characterList.length)) return null;

  return (
    <Box>
      <BossTabs value={idx} onChange={(e, v) => isNumber(v) && v >= 0 && setIdx(v)} variant={"scrollable"} sx={{ gridColumn: "1 / -1" }}>
        {characterList.map((item, i) => (
          <BossTab
            key={item.id}
            data-idx={i}
            label={item.name}
            value={i}
            sx={{ width: "auto" }}
            onContextMenu={e => {
              e.preventDefault();
              setAnchorEl(e.currentTarget);
            }}
          />
        ))}
        <BossTab
          label={"+"}
          value={null}
          sx={{ width: "auto" }}
          onClick={() => {
            const name = prompt("캐릭터 이름을 입력해주세요.", `캐릭터 ${characterList.length + 1}`);
            name && addCharacter(name);
          }}
        />
      </BossTabs>
      <CharacterContextMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </Box>
  );
}
