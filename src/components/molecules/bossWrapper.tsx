import { Box, BoxProps } from "@mui/material";
import styled from "@emotion/styled";

export default function BossWrapper(props: BoxProps) {
  return <Container {...props} />;
}

const Container = styled(Box)`
  padding: 10px;
  width: 100%;
  max-height: 100%;
  border: 1px solid transparent;
  border-radius: 8px;
  background: linear-gradient(#222, #222) padding-box,
    linear-gradient(to bottom, transparent 8px, #777 64px, #777 calc(100% - 64px), transparent calc(100% - 8px)) border-box,
    linear-gradient(to bottom, transparent, #222 calc(100% - 1px), #222) border-box,
    linear-gradient(to left, transparent 8px, #777 64px, #777 calc(100% - 64px), transparent calc(100% - 8px)) border-box;
  overflow: hidden;
`;
