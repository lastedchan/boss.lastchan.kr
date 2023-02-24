import useSWR, { SWRConfiguration } from "swr";
import useAxios from "@/hooks/useAxios";
import { Boss, BossList, Period } from "@/types/boss";

const config: SWRConfiguration = {
  refreshWhenHidden: false,
  revalidateOnFocus: false,
  revalidateOnMount: true,
  revalidateIfStale: false,
  revalidateOnReconnect: false,
};

export function useBossListSWR(period?: Period) {
  const { data, error, isLoading } = useSWR<BossList>(`/api/boss?period=${period ?? ""}`, useAxios(), config);

  return { bossList: data, error, isLoading };
}

export function useBossSWR(id: number, period?: string) {
  const { data, error, isLoading } = useSWR<Boss>(`/api/boss/${id}?period=${period ?? ""}`, useAxios(), config);

  return { boss: data, error, isLoading };
}
