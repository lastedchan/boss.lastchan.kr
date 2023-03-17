import BossTabs from "@/components/molecules/bossTabs";
import BossTab from "@/components/atoms/bossTab";
import { MouseEvent, useEffect, useState } from "react";
import useCharacterList from "@/hooks/useCharacterList";
import CharacterContextMenu from "@/components/molecules/characterContextMenu";
import { inRange, isNumber } from "lodash";
import { Box, Typography } from "@mui/material";
import { useRecoilValue } from "recoil";
import { characterListRecoil } from "@/recoils/clearboard";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function CharacterTabs() {
  const { idx, setIdx, addCharacter } = useCharacterList();
  const characterList = useRecoilValue(characterListRecoil);

  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (characterList.length === 0) addCharacter();
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
          <BossTab
            key={item.id}
            data-idx={i}
            label={
              <>
                <Typography>{item.name}</Typography>
                <MoreVertIcon
                  onClick={openContextMenu}
                  sx={{ ml: 1, pointerEvents: "none", ".Mui-selected > &": { pointerEvents: "all" } }}
                />
              </>
            }
            value={i}
            sx={{ width: "auto" }}
            onContextMenu={openContextMenu}
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
