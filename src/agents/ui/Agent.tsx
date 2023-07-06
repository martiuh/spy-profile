import { useAgent } from "./hooks/useAgent";

export function Agent() {
  const { agent } = useAgent();

  return (
    <div>
      <h1>Agent</h1>
      <p>{agent?.dob.age}</p>
      <p>{agent?.eyeColor}</p>
    </div>
  );
}
