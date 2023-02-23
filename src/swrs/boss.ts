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

export function useBossList(period?: Period) {
  const { data, error, isLoading } = useSWR(`/api/boss?period=${period ?? ""}`, useAxios<BossList>(), config);

  return { bossList: data?.data, error, isLoading };
}

export function useBoss(id: number, period?: string) {
  const { data, error, isLoading } = useSWR(`/api/boss/${id}?period=${period ?? ""}`, useAxios<Boss>(), config);

  return { boss: data?.data, error, isLoading };
}
