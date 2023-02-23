import styled from "@emotion/styled";
import { BOSS_IMAGES, BOSS_LIST } from "@/constants/boss";
import { Dispatch, SetStateAction } from "react";
import { ListItem } from "@mui/material";

type Props = {
  i: number;
  idx: number;
  setIdx: Dispatch<SetStateAction<number>>;
};

export default function MoveBossItem({ i, idx, setIdx }: Props) {
  return (
    <Item
      role={"boss-item"}
      data-name={BOSS_LIST[i].name}
      onClick={() => setIdx(i)}
      sx={
        i === idx
          ? {
              backgroundImage: `url(${BOSS_IMAGES.PATHNAME + i + BOSS_IMAGES.BTN_CHECKED})`,
            }
          : {
              backgroundImage: `url(${BOSS_IMAGES.PATHNAME + i + BOSS_IMAGES.BTN})`,
              "&:hover": {
                backgroundImage: `url(${BOSS_IMAGES.PATHNAME + i + BOSS_IMAGES.BTN_MOUSEOVER})`,
              },
            }
      }
    />
  );
}

const Item = styled(ListItem)`
  flex: 0 0 30px;
  margin: 0 auto;
  width: 135px;
  height: 30px;
`;
