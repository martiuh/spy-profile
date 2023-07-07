import { mapApiResponseToAgent } from "../domain/Agent";

export const AGENT_API = "https://randomuser.me/api/";

export const getRandomAgentKey = "get-random-agent";
export async function getRandomAgent() {
  const response = await fetch(AGENT_API);

  if (response.ok) {
    const json = await response.json();
    return mapApiResponseToAgent(json);
  }

  throw new Error("Failed to fetch agent");
}

getRandomAgent.key = getRandomAgentKey;
