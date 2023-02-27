import { Box, BoxProps, List } from "@mui/material";
import styled from "@emotion/styled";

type Props = {
  children?: JSX.Element | (JSX.Element | null)[] | null;
};

export default function BossBody({ children, ...props }: Props & BoxProps) {
  return (
    <Container {...props}>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
}

const Container = styled(Box)`
  flex: 1;
  width: 100%;
`;

const Wrapper = styled(List)`
  padding: 0;
  width: 100%;
  min-height: 43px;
  overflow: hidden;
`;
