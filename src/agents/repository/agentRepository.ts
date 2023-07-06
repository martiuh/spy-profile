import { mapApiResponseToAgent } from "../domain/Agent";

export const getRandomAgentKey = "get-random-agent";
export async function getRandomAgent() {
  const response = await fetch("https://randomuser.me/api/");

  if (response.ok) {
    const json = await response.json();
    return mapApiResponseToAgent(json);
  }

  throw new Error("Failed to fetch agent");
}

getRandomAgent.key = getRandomAgentKey;
