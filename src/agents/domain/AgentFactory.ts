import { faker } from "@faker-js/faker";
import { guessEyeColor } from "./Agent";
import type { Agent } from "./Agent";

export function fabricateAgent(): Agent {
  const dateOfBirth = faker.date.birthdate({ min: 18, mode: "age" });
  const d = new Date();
  const age = d.getFullYear() - dateOfBirth.getFullYear();

  return {
    dob: {
      date: dateOfBirth.toUTCString(),
      age,
    },
    eyeColor: guessEyeColor(),
    gender: faker.person.sex(),
    location: {
      city: faker.location.city(),
      country: faker.location.country(),
      state: faker.location.state(),
      timezone: {
        offset: faker.number.int({ min: -12, max: 12 }).toString(),
        description: faker.location.timeZone(),
      },
    },
    login: {
      username: faker.internet.userName(),
    },
    name: {
      first: faker.person.firstName(),
      last: faker.person.lastName(),
    },
    picture: {
      large: faker.image.url(),
    },
  };
}

export function fabricateAgentResponse() {
  return {
    results: [fabricateAgent()],
  };
}
