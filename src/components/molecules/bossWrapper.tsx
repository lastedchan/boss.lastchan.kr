import { Box, BoxProps, List } from "@mui/material";
import styled from "@emotion/styled";

export default function BossWrapper(props: BoxProps) {
  return (
    <Container {...props}>
      <Wrapper>{props.children}</Wrapper>
    </Container>
  );
}

const Container = styled(Box)`
  padding: 10px;
  width: 100%;
  max-height: 100%;
  border: 1px solid transparent;
  border-radius: 8px;
  background: linear-gradient(#222, #222) padding-box,
    linear-gradient(to bottom, transparent 8px, #777 32px, #777 calc(100% - 32px), transparent calc(100% - 8px)) border-box,
    linear-gradient(to bottom, transparent, #222 calc(100% - 1px), #222) border-box,
    linear-gradient(to left, transparent 8px, #777 32px, #777 calc(100% - 32px), transparent calc(100% - 8px)) border-box;
  overflow: auto hidden;
`;

const Wrapper = styled(List)`
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 100%;
  min-width: 336px;
  max-height: 100%;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: transparent;
  overflow: auto;
`;
