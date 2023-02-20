import { Box, List } from "@mui/material";
import styled from "@emotion/styled";

type Props = {
  children?: JSX.Element | JSX.Element[];
};

export default function BossBody({ children }: Props) {
  return (
    <Box flex={1} width={"100%"} height={"100%"} overflow={"auto"}>
      <Container>{children}</Container>
    </Box>
  );
}

const Container = styled(List)`
  padding: 4px 0 0;
  width: 100%;
  min-height: 78px;
  background: #555
    linear-gradient(to right, transparent 0, transparent 150px, rgba(0, 0, 0, 0.4) 151px, rgba(0, 0, 0, 0.2) 158px, rgba(0, 0, 0, 0.2) 100%);
  overflow: hidden;

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
