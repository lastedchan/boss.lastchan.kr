import styled from "@emotion/styled";
import { CLEARBOARD } from "@/constants/clearboard";
import { Icon } from "@mui/material";

type Props = {
  src: string;
};

export default function BossIcon({ src }: Props) {
  return (
    <Container>
      {/*<Box sx={{}} />*/}
      <Icon sx={{ background: `url(${src})`, fontSize: 25 }} />
    </Container>
  );
}

const Container = styled.div<{ i?: number }>`
  padding: 2px;
  width: 29px;
  height: 29px;
  background: url(${CLEARBOARD.ICON_BASE});
`;
