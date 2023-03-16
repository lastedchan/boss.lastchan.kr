import styled from "@emotion/styled";
import { Box, Button, ButtonGroup, Divider, FormControl, FormGroup, Modal, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

type Props = {
  title: string;
  defaultValue?: string;
  submit: (v: string) => void;
};

export default function TextareaModal({ title, defaultValue, submit }: Props) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState<string>(defaultValue ?? "");

  useEffect(() => {
    setInput("");
  }, [open]);

  return (
    <>
      <Button onClick={() => setOpen(true)}>{title}</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Container>
          <Typography>{title}</Typography>
          <Divider sx={{ m: "8px 0" }} />
          <Typography>
            * 기존에 설정했던 데이터는 모두 초기화됩니다. 필요한 경우 미리 내보내기해주세요.
            <br />* 데이터를 잘못 가져올 경우 계산기에 오류가 발생할 수 있습니다.
            <br />* 오류 발생 시 전체 초기화 후 진행하거나, 다시 가져오기를 진행해주세요.
          </Typography>
          <FormGroup>
            <FormControl>
              <TextField value={input} onChange={e => setInput(e.currentTarget.value)} />
            </FormControl>
          </FormGroup>
          <ButtonGroup fullWidth>
            <Button
              onClick={() => {
                submit(input);
                setOpen(false);
              }}
            >
              가져오기
            </Button>
            <Button onClick={() => setOpen(false)}>닫기</Button>
          </ButtonGroup>
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
  background: #fff;
  border-radius: 8px;
  transform: translateY(-50%);
`;
