import { useQuery } from "react-query";
import { useTransition } from "react";
import { getRandomAgent } from "../../repository/agentRepository";

export function useAgent() {
  const [isPending, startTransition] = useTransition();
  const query = useQuery(getRandomAgent.key, {
    queryFn: getRandomAgent,
    refetchOnWindowFocus: false,
  });

  function getNextAgent() {
    startTransition(() => {
      query.refetch();
    });
  }

  return {
    isPending,
    getNextAgent,
    agent: query.data,
  };
}
