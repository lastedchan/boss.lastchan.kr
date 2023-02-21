import styled from "@emotion/styled";
import { Box, BoxProps } from "@mui/material";

type Props = {
  idx: number;
  value: number;
  children?: JSX.Element | (JSX.Element | null)[] | null;
};

export default function TabPanel({ idx, value, children, ...props }: Props & BoxProps) {
  return (
    <Container hidden={idx !== value} {...props}>
      {children}
    </Container>
  );
}

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
