import { Divider, ListItemIcon, ListItemText, Menu, MenuItem } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteIcon from "@mui/icons-material/Delete";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import useCharacterList from "@/hooks/useCharacterList";
import { Dispatch, SetStateAction, useCallback, useMemo } from "react";
import { useRecoilState } from "recoil";
import { characterListRecoil } from "@/recoils/clearboard";
import { reorder } from "@/libs/helpers";

type Props = {
  anchorEl: HTMLDivElement | null;
  setAnchorEl: Dispatch<SetStateAction<HTMLDivElement | null>>;
};

export default function CharacterContextMenu({ anchorEl, setAnchorEl }: Props) {
  const { copyCharacter, renameCharacter, removeCharacter, setIdx } = useCharacterList();
  const [characterList, setCharacterList] = useRecoilState(characterListRecoil);

  const dataIdx = useMemo(() => Number(anchorEl?.dataset.idx), [anchorEl]);

  const onClose = useCallback(() => setAnchorEl(null), [setAnchorEl]);

  const goFirst = useCallback(
    (v: number) => {
      setCharacterList(prev => reorder(prev, v, 0));
      setIdx(prev => (prev === v ? 0 : prev + 1));
      onClose();
    },
    [onClose, setCharacterList, setIdx]
  );
  const goLeft = useCallback(
    (v: number) => {
      setCharacterList(prev => reorder(prev, v, v - 1));
      setIdx(prev => (prev === v ? prev - 1 : prev === v - 1 ? prev + 1 : prev));
      onClose();
    },
    [onClose, setCharacterList, setIdx]
  );
  const goRight = useCallback(
    (v: number) => {
      setCharacterList(prev => reorder(prev, v, v + 1));
      setIdx(prev => (prev === v ? prev + 1 : prev === v + 1 ? prev - 1 : prev));
      onClose();
    },
    [onClose, setCharacterList, setIdx]
  );
  const goLast = useCallback(
    (v: number) => {
      setCharacterList(prev => reorder(prev, v, prev.length - 1));
      setIdx(prev => (prev === v ? characterList.length : prev - 1));
      onClose();
    },
    [characterList.length, onClose, setCharacterList, setIdx]
  );

  if (dataIdx === undefined) return null;

  return (
    <Menu open={!!anchorEl} onClose={onClose} anchorEl={anchorEl}>
      <MenuItem onClick={() => anchorEl?.dataset.idx && renameCharacter(Number(anchorEl.dataset.idx)) && setAnchorEl(null)}>
        <ListItemIcon>
          <EditIcon />
        </ListItemIcon>
        <ListItemText>이름 변경</ListItemText>
      </MenuItem>
      <MenuItem onClick={() => anchorEl?.dataset.idx && copyCharacter(Number(anchorEl.dataset.idx)) && setAnchorEl(null)}>
        <ListItemIcon>
          <ContentCopyIcon />
        </ListItemIcon>
        <ListItemText>캐릭터 복사</ListItemText>
      </MenuItem>
      <MenuItem onClick={() => anchorEl?.dataset.idx && removeCharacter(Number(anchorEl.dataset.idx)) && setAnchorEl(null)}>
        <ListItemIcon>
          <DeleteIcon color={"error"} />
        </ListItemIcon>
        <ListItemText>삭제</ListItemText>
      </MenuItem>
      <Divider />
      <MenuItem onClick={() => goFirst(dataIdx)} disabled={dataIdx <= 0}>
        <ListItemIcon>
          <KeyboardDoubleArrowLeftIcon />
        </ListItemIcon>
        <ListItemText primary={"맨 앞으로"} />
      </MenuItem>
      <MenuItem onClick={() => goLeft(dataIdx)} disabled={dataIdx <= 0}>
        <ListItemIcon>
          <KeyboardArrowLeftIcon />
        </ListItemIcon>
        <ListItemText primary={"한 칸 앞으로"} />
      </MenuItem>
      <MenuItem onClick={() => goRight(dataIdx)} disabled={dataIdx >= characterList.length - 1}>
        <ListItemIcon>
          <KeyboardArrowRightIcon />
        </ListItemIcon>
        <ListItemText primary={"한 칸 뒤로"} />
      </MenuItem>
      <MenuItem onClick={() => goLast(dataIdx)} disabled={dataIdx >= characterList.length - 1}>
        <ListItemIcon>
          <KeyboardDoubleArrowRightIcon />
        </ListItemIcon>
        <ListItemText primary={"맨 뒤로"} />
      </MenuItem>
    </Menu>
  );
}
