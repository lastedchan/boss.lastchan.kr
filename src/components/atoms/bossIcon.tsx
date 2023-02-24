import styled from "@emotion/styled";
import { CLEARBOARD } from "@/constants/clearboard";
import { Box, BoxProps, Icon } from "@mui/material";

type Props = {
  src: string;
};

export default function BossIcon({ src, ...props }: BoxProps & Props) {
  return (
    <Container {...props}>
      <Icon sx={{ background: `url(${src})`, fontSize: 25 }} />
    </Container>
  );
}

const Container = styled(Box)<{ i?: number }>`
  padding: 2px;
  width: 29px;
  height: 29px;
  background: url(${CLEARBOARD.ICON_BASE});
`;
