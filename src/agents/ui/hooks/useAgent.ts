import { useQuery } from "react-query";
import { getRandomAgent } from "../../repository/agentRepository";

export function useAgent() {
  const query = useQuery(getRandomAgent.key, {
    queryFn: getRandomAgent,
    refetchOnWindowFocus: false,
  });

  return {
    agent: query.data,
  };
}