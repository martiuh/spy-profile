import type { Agent } from "../../domain/Agent";

function formatDate(date: string) {
  const d = new Date(date);
  return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
}

export function presentAgentView(agent: Agent) {
  const { eyeColor, gender: sex, dob, location } = agent;
  const fullName = `${agent.name.first} ${agent.name.last}`;

  return {
    fullName,
    code: agent.login.username,
    src: agent.picture.large,
    alt: `Agent ${fullName}`,
    eyeColor,
    sex,
    dob: formatDate(dob.date),
    address: `${location.city}, ${location.state}. ${location.country}`,
  };
}
