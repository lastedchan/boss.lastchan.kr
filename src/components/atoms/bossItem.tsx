import styled from "@emotion/styled";
import { BOSS_LIST, BOSS } from "@/constants/boss";
import { Dispatch, SetStateAction } from "react";

type Props = {
  i: number;
  idx: number;
  setIdx: Dispatch<SetStateAction<number>>;
};

export default function BossItem({ i, idx, setIdx }: Props) {
  const Item = styled.li`
    flex: 0 0 30px;
    margin: 0 auto;
    width: 135px;
    height: 30px;
    background-image: url(${BOSS.PATHNAME + i + BOSS.BTN});

    &:hover {
      background-image: url(${BOSS.PATHNAME + i + BOSS.BTN_MOUSEOVER});
    }
  `;

  return (
    <Item
      role={"boss-item"}
      data-name={BOSS_LIST[i]}
      onClick={() => setIdx(i)}
      style={
        i === idx
          ? {
              backgroundImage: `url(${BOSS.PATHNAME + i + BOSS.BTN_CHECKED})`,
            }
          : {}
      }
    />
  );
}
