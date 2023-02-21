import styled from "@emotion/styled";
import { Box, ListItem, ListItemText, Switch, Typography } from "@mui/material";
import { useRecoilState } from "recoil";
import { isRebootRecoil } from "@/recoils/clearboard";
import BossWrapper from "@/components/molecules/bossWrapper";
import Image from "next/image";

export default function Settings() {
  const [isReboot, setIsReboot] = useRecoilState(isRebootRecoil);

  return (
    <Container>
      <BossWrapper>
        <ListItem>
          <ListItemText>
            <Typography display={"flex"} gap={0.5} alignItems={"center"} fontWeight={"bold"}>
              <Image
                src={"https://ssl.nexon.com/s2/game/maplestory/renewal/common/world_icon/icon_3.png"}
                alt={""}
                width={13}
                height={13}
              />
              리부트
            </Typography>
          </ListItemText>
          <ListItemText sx={{ textAlign: "center" }}>
            <Switch checked={isReboot} onChange={(e, v) => setIsReboot(v)} />
          </ListItemText>
        </ListItem>
      </BossWrapper>
    </Container>
  );
}

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: auto;
`;
