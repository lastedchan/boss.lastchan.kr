import styled from "@emotion/styled";
import { Button, List, ListItem, ListItemText, Switch, TextField, Typography } from "@mui/material";
import { useRecoilState } from "recoil";
import { isRebootRecoil } from "@/recoils/clearboard";
import BossWrapper from "@/components/molecules/bossWrapper";
import BossHead from "@/components/molecules/bossHead";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { ChangeEvent, useState } from "react";
import useAxios from "@/hooks/useAxios";

export default function Settings() {
  const axios = useAxios();
  const [isReboot, setIsReboot] = useRecoilState(isRebootRecoil);
  const [loginInput, setLoginInput] = useState({ name: "", password: "" });

  const onLoginInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setLoginInput(prev => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <Container>
      <Item>
        <ListItemText>
          <TextField
            variant={"standard"}
            type={"text"}
            name={"name"}
            placeholder={"이름"}
            value={loginInput.name}
            onChange={onLoginInputChange}
          />
          <TextField
            variant={"standard"}
            type={"password"}
            name={"password"}
            placeholder={"비밀번호"}
            value={loginInput.password}
            onChange={onLoginInputChange}
          />
        </ListItemText>
        <ListItemText sx={{ justifyContent: "center" }}>
          <Button
            variant={"contained"}
            onClick={() =>
              (loginInput.name && loginInput.password && axios(`/api/auth/login`, { method: "POST", data: loginInput })) ||
              alert("이름과 비밀번호를 모두 입력해주세요.")
            }
          >
            로그인
            <KeyboardDoubleArrowRightIcon />
          </Button>
        </ListItemText>
      </Item>
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
