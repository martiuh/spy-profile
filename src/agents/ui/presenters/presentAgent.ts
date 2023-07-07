import type { Agent } from "../../domain/Agent";

function formatDate(date: string) {
  const d = new Date(date);
  return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
}

function getForeignTime(offset: string) {
  const d = new Date();
  const offsetNumber = parseInt(offset, 10) * 60;
  const localOffset = d.getTimezoneOffset();
  d.setHours(Math.abs(offsetNumber + localOffset) / 60);
  return `${d.getHours()}:${d.getMinutes()}`;
}

export function presentAgentView(agent: Agent) {
  const { eyeColor, gender: sex, dob, location } = agent;
  const { timezone } = location;
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
    time: getForeignTime(timezone.offset),
  };
}
