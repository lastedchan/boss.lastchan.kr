import { BOSS_LIST } from "@/constants/boss";
import { Period } from "@/types/boss";
import { SelectedBoss } from "@/types/crystalCalc";

export default function useBoss() {
  const getPeriod = (boss: SelectedBoss): Period | undefined =>
    BOSS_LIST?.find(_ => _.name === boss.name)?.difficulty.find(_ => _.difficulty !== boss.difficulty)?.period;

  return { getPeriod };
}
