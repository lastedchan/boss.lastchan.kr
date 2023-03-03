import styled from "@emotion/styled";
import { Box, BoxProps } from "@mui/material";
import { isArray } from "lodash";

type Props = {
  tab: any;
  value: any;
  children?: JSX.Element | (JSX.Element | null)[] | null;
};

export default function TabPanel({ tab, value, children, ...props }: Props & BoxProps) {
  return (
    <Container hidden={isArray(tab) ? !tab.find(_ => _ === value) : tab !== value} {...props}>
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
