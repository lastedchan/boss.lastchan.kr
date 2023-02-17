import { Dispatch, SetStateAction } from "react";
import { BossType } from "@/types/boss";
import BossTabs from "@/components/molecules/bossTabs";
import BossTab from "@/components/atoms/bossTab";

type Props = {
  tab: BossType;
  setTab: Dispatch<SetStateAction<BossType>>;
  isMobile: boolean;
};

export default function BossTypeTab({ tab, setTab, isMobile }: Props) {
  return (
    <BossTabs
      variant={isMobile ? "fullWidth" : "standard"}
      orientation={isMobile ? "horizontal" : "vertical"}
      value={tab}
      onChange={(e, v) => setTab(v)}
      sx={{ pt: isMobile ? 0 : 1, "& .Mui-disabled": { color: "rgba(255, 255, 255, 0.38) !important" } }}
    >
      <BossTab label={"주간"} value={"week"} />
      <BossTab label={"월간"} value={"month"} />
      <BossTab label={"일간"} value={"day"} />
    </BossTabs>
  );
}
