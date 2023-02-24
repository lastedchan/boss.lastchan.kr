import styled from "@emotion/styled";
import { List, ListItem, ListItemText, Switch, Typography } from "@mui/material";
import { useRecoilState } from "recoil";
import { isRebootRecoil } from "@/recoils/clearboard";
import BossWrapper from "@/components/molecules/bossWrapper";
import BossHead from "@/components/molecules/bossHead";

export default function Settings() {
  const [isReboot, setIsReboot] = useRecoilState(isRebootRecoil);

  return (
    <Container>
      <BossWrapper>
        <BossHead style={{ padding: "0 16px" }}>
          <Typography flex={1} pl={1}>
            항목
          </Typography>
          <Typography flex={"0 100px"} textAlign={"center"}>
            설정
          </Typography>
        </BossHead>
        <Item>
          <ListItemText>리부트</ListItemText>
          <ListItemText>
            <Switch checked={isReboot} onChange={(e, v) => setIsReboot(v)} />
          </ListItemText>
        </Item>
      </BossWrapper>
    </Container>
  );
}

const Container = styled(List)`
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

const Item = styled(ListItem)`
  & > :first-of-type {
    flex: 1;
    display: flex;
    gap: 4px;
    align-items: center;

    & .MuiTypography-root {
      font-weight: bold;
    }
  }

  & > :nth-of-type(2) {
    flex: 0 0 100px;
    text-align: center;
  }
`;
