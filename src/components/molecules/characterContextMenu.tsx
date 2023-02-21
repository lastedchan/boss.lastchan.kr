import { ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import useCharacterList from "@/hooks/useCharacterList";
import { Dispatch, SetStateAction } from "react";

type Props = {
  anchorEl: HTMLDivElement | null;
  setAnchorEl: Dispatch<SetStateAction<HTMLDivElement | null>>;
};

export default function CharacterContextMenu({ anchorEl, setAnchorEl }: Props) {
  const { renameCharacter, removeCharacter } = useCharacterList();
  return (
    <Menu open={!!anchorEl} onClose={() => setAnchorEl(null)} anchorEl={anchorEl}>
      <MenuItem onClick={() => anchorEl?.dataset.idx && renameCharacter(Number(anchorEl.dataset.idx)) && setAnchorEl(null)}>
        <ListItemIcon>
          <EditIcon />
        </ListItemIcon>
        <ListItemText>이름 변경</ListItemText>
      </MenuItem>
      <MenuItem onClick={() => anchorEl?.dataset.idx && removeCharacter(Number(anchorEl.dataset.idx)) && setAnchorEl(null)}>
        <ListItemIcon>
          <DeleteIcon color={"error"} />
        </ListItemIcon>
        <ListItemText>삭제</ListItemText>
      </MenuItem>
    </Menu>
  );
}
