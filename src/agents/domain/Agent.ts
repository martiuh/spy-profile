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
    timezone: {
      offset: string;
      description: string;
    };
  };
  login: {
    username: string;
  };
  gender: string;
  dob: {
    date: string;
    age: number;
  };
  picture: {
    large: string;
  };
  eyeColor?: string;
}

export interface Agent extends Required<AgentResponse> {}

interface ApiResponse {
  results: AgentResponse[];
}

const eyeColors = ["blue", "brown", "green", "hazel", "grey"];

export function guessEyeColor() {
  return faker.helpers.arrayElement(eyeColors);
}

export function mapApiResponseToAgent(response: ApiResponse): Agent {
  const [agent] = response.results;
  const eyeColor = agent?.eyeColor ?? guessEyeColor();
  return { eyeColor, ...agent };
}
