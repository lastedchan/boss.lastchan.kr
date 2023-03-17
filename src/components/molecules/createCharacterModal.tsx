import { Box, Button, Divider, FormControlLabel, FormGroup, MenuItem, Modal, Select, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import BossTab from "@/components/atoms/bossTab";
import useCharacterList from "@/hooks/useCharacterList";

export default function CreateCharacterModal() {
  const { addCharacter } = useCharacterList();

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState<string>("");
  const [preset, setPreset] = useState<number>(0);

  useEffect(() => setInput(""), []);

  return (
    <>
      <BossTab label={"+"} value={null} sx={{ width: "auto" }} onClick={() => setOpen(true)} />
      <Modal open={open} onClose={() => setOpen(false)}>
        <Container>
          <Typography>캐릭터 추가</Typography>
          <Divider sx={{ m: "8px 0" }} />
          <FormGroup sx={{ m: "16px 0" }}>
            <FormControlLabel
              control={<TextField size={"small"} value={input} onChange={e => setInput(e.currentTarget.value)} sx={{ flex: 1 }} />}
              label={"캐릭터명"}
              labelPlacement={"start"}
              sx={{ m: 0, pl: 0.5 }}
            />
            <FormControlLabel
              control={
                <Select value={preset} onChange={e => setPreset(Number(e.target.value))} sx={{ flex: 1 }}>
                  <MenuItem value={0}>선택 안함</MenuItem>
                  <MenuItem value={1}>카룻돌이</MenuItem>
                  <MenuItem value={2}>스데돌이</MenuItem>
                  <MenuItem value={3}>가엔슬돌이</MenuItem>
                </Select>
              }
              label={"프리셋　"}
              labelPlacement={"start"}
              sx={{ m: 0, pl: 0.5 }}
            />
          </FormGroup>
          <Box display={"flex"} justifyContent={"space-between"} sx={{ gap: 0.5, "& > .MuiButton-root": { flex: 1 } }}>
            <Button
              onClick={() => {
                addCharacter(input, preset);
                setOpen(false);
              }}
            >
              추가
            </Button>
            <Button onClick={() => setOpen(false)}>닫기</Button>
          </Box>
        </Container>
      </Modal>
    </>
  );
}

const Container = styled(Box)`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  margin: auto;
  padding: 16px;
  width: 100%;
  max-width: 320px;
  background: #222;
  border-radius: 8px;
  color: #fff;
  transform: translateY(-50%);
`;
