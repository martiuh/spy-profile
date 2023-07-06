import { H1, Text } from "../../components/Text";
import { useAgent } from "./hooks/useAgent";

export function AgentView() {
  const { agent } = useAgent();

  return (
    <div className="grid place-items-center h-screen max-h-screen bg-slate-400 dark:bg-slate-800">
      <Text>{agent?.dob.age}</Text>
      <p>{agent?.eyeColor}</p>
    </div>
  );
}
