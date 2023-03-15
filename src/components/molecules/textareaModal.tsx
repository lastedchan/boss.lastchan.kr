import styled from "@emotion/styled";
import { Box, Button, Modal } from "@mui/material";
import { useState } from "react";

type Props = {
  title: string;
  value?: string;
  submit?: (v: string) => void;
};

export default function TextareaModal({ title, value, submit }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>{title}</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Container></Container>
      </Modal>
    </>
  );
}

const Container = styled(Box)`
  z-index: 1000;
`;
