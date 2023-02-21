import BossTabs from "@/components/molecules/bossTabs";
import BossTab from "@/components/atoms/bossTab";
import { useEffect, useState } from "react";
import useCharacterList from "@/hooks/useCharacterList";
import CharacterContextMenu from "@/components/molecules/characterContextMenu";
import { isNumber } from "lodash";
import { Box } from "@mui/material";

export default function CharacterTabs() {
  const { characterList, idx, setIdx, addCharacter } = useCharacterList();

  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (characterList.length === 0) addCharacter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box display={"flex"}>
      <BossTabs value={idx} onChange={(e, v) => isNumber(v) && v >= 0 && setIdx(v)} variant={"scrollable"} sx={{ gridColumn: "1 / -1" }}>
        {characterList.map((item, i) => (
          <BossTab
            key={i}
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
