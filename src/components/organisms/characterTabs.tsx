import BossTabs from "@/components/molecules/bossTabs";
import BossTab from "@/components/atoms/bossTab";
import { useEffect, useState } from "react";
import useCharacterList from "@/hooks/useCharacterList";
import { ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

export default function CharacterTabs() {
  const { characterList, idx, setIdx, addCharacter, removeCharacter } = useCharacterList();

  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (characterList.length === 0) addCharacter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <BossTabs value={idx} onChange={(e, v) => v !== null && setIdx(v)} variant={"scrollable"} sx={{ gridColumn: "1 / -1" }}>
        {characterList.map((item, i) => (
          <BossTab
            key={i}
            data-idx={i}
            label={item.name}
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
          sx={{ position: "sticky", right: 0, width: "auto" }}
          onClick={() => {
            const name = prompt("캐릭터 이름을 입력해주세요.", `캐릭터 ${characterList.length + 1}`);
            name && addCharacter(name);
          }}
        />
      </BossTabs>
      <Menu open={!!anchorEl} onClose={() => setAnchorEl(null)} anchorEl={anchorEl}>
        <MenuItem>
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
          <ListItemText>이름 변경</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={async () => anchorEl?.dataset.idx && (await removeCharacter(Number(anchorEl?.dataset.idx))) && setAnchorEl(null)}
        >
          <ListItemIcon>
            <DeleteIcon color={"error"} />
          </ListItemIcon>
          <ListItemText>삭제</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}
