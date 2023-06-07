import styled from "@emotion/styled";
import { Box, Button, Divider, FormControl, FormGroup, Modal, TextField, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { wait } from "next/dist/build/output/log";
import { sleep } from "@/libs/helpers";

type Props = {
  title: string;
  defaultValue?: string;
  submit: (v: string) => void;
};

export default function TextareaModal({ title, defaultValue, submit }: Props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string>(defaultValue ?? "");

  const input = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setValue("");
  }, [open]);

  const _open = async () => {
    setOpen(true);
    await sleep(10);
    input.current?.focus();
  };

  return (
    <>
      <Button onClick={_open}>{title}</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Container>
          <Typography>{title}</Typography>
          <Divider sx={{ m: "8px 0" }} />
          <Typography mb={0.5}>* 기존에 설정했던 데이터는 모두 초기화됩니다. 필요한 경우 미리 내보내기해주세요.</Typography>
          <Typography mb={0.5}>* 데이터를 잘못 가져올 경우 계산기에 오류가 발생할 수 있습니다.</Typography>
          <Typography>* 오류 발생 시 전체 초기화 후 진행하거나, 다시 가져오기를 진행해주세요.</Typography>
          <FormGroup sx={{ m: "16px 0" }}>
            <FormControl>
              <TextField
                inputRef={input}
                multiline
                rows={5}
                value={value}
                onChange={e => setValue(e.currentTarget.value)}
                sx={{
                  "& > .MuiInputBase-root": {
                    bgcolor: "#fff",
                    color: "#000",
                  },
                }}
              />
            </FormControl>
          </FormGroup>
          <Box display={"flex"} justifyContent={"space-between"} sx={{ gap: 0.5, "& > .MuiButton-root": { flex: 1 } }}>
            <Button
              onClick={() => {
                submit(value);
                setOpen(false);
              }}
            >
              가져오기
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
