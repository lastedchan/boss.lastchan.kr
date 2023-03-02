import styled from "@emotion/styled";
import { Button, Divider, List, ListItem, ListItemText, Switch, Typography } from "@mui/material";
import { useRecoilState, useSetRecoilState } from "recoil";
import { characterListRecoil, isRebootRecoil } from "@/recoils/clearboard";
import BossWrapper from "@/components/molecules/bossWrapper";
import BossHead from "@/components/molecules/bossHead";
import useCharacterList from "@/hooks/useCharacterList";
import { useCallback } from "react";

export default function Settings() {
  const [isReboot, setIsReboot] = useRecoilState(isRebootRecoil);
  const { resetClear } = useCharacterList();
  const setCharacterList = useSetRecoilState(characterListRecoil);

  const reset = useCallback(() => setCharacterList([]), [setCharacterList]);

  return (
    <Container>
      <BossWrapper flex={1} sx={{ "& > ul": { minHeight: "100%" } }}>
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
        <Divider />
        <Item>
          <ListItemText>클리어 현황 초기화</ListItemText>
          <ListItemText sx={{ textAlign: "center" }}>
            <Button onClick={() => confirm("정말로 클리어 현황을 초기화하시겠습니까?") && resetClear()}>초기화</Button>
          </ListItemText>
        </Item>
        <Item>
          <ListItemText>전체 초기화</ListItemText>
          <ListItemText sx={{ textAlign: "center" }}>
            <Button onClick={() => confirm("정말로 수익 계산기를 초기화하시겠습니까?") && reset()}>초기화</Button>
          </ListItemText>
        </Item>
        <Item sx={{ flex: 1 }}></Item>
        <Item>
          <ListItemText sx={{ justifyContent: "center" }}>Copyright 2023. LASTCHAN All rights reserved.</ListItemText>
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
