import { Box, List } from "@mui/material";
import styled from "@emotion/styled";

type Props = {
  children?: JSX.Element | (JSX.Element | null)[] | null;
};

export default function BossBody({ children }: Props) {
  return (
    <Container>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
}

const Container = styled(Box)`
  flex: 1;
  width: 100%;
  height: 100%;
  background: #555;
  overflow: auto;
`;

const Wrapper = styled(List)`
  padding: 0;
  width: 100%;
  overflow: hidden;

  & > li:first-of-type {
    padding-top: 4px;
  }

  & > li:last-of-type {
    padding-bottom: 4px;
  }

  & li:nth-of-type(2n + 1) {
    background-color: #555;
  }

  & li:nth-of-type(2n) {
    background-color: #444;
  }
`;
