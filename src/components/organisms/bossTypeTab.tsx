import BossTabs from "@/components/molecules/bossTabs";
import BossTab from "@/components/atoms/bossTab";
import { useRecoilState } from "recoil";
import { selectedType } from "@/recoils/clearboard";
import useIsMobile from "@/hooks/useIsMobile";

export default function BossTypeTab() {
  const isMobile = useIsMobile();
  const [type, setType] = useRecoilState(selectedType);
  return (
    <BossTabs
      variant={isMobile ? "fullWidth" : "standard"}
      orientation={isMobile ? "horizontal" : "vertical"}
      value={type}
      onChange={(e, v) => setType(v)}
      sx={{ pt: isMobile ? 0 : 1, "& .Mui-disabled": { color: "rgba(255, 255, 255, 0.38) !important" } }}
    >
      <BossTab label={"주간"} value={"week"} />
      <BossTab label={"월간"} value={"month"} disabled />
      <BossTab label={"일간"} value={"day"} disabled />
    </BossTabs>
  );
}
