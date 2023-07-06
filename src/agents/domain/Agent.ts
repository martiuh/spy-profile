import { faker } from "@faker-js/faker";
interface AgentResponse {
  name: {
    first: string;
    last: string;
  };
  location: {
    city: string;
    state: string;
    country: string;
  };
  timezone: {
    offset: string;
    description: string;
  };
  login: {
    username: string;
  };
  gender: string;
  dob: {
    date: string;
    age: number;
  };
  eyeColor: string;
  picture: {
    large: string;
  };
}

export interface Agent extends AgentResponse {
  eyeColor: string;
}

interface ApiResponse {
  results: AgentResponse[];
}

const eyeColors = ["blue", "brown", "green", "hazel", "grey"];

export function mapApiResponseToAgent(response: ApiResponse): Agent {
  const [agent] = response.results;
  const eyeColor = faker.helpers.arrayElement(eyeColors);
  return { ...agent, eyeColor };
}
