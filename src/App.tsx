import { getRandomAgent } from "./agents/repository/agentRepository";
import { AgentView } from "./agents/ui/AgentView";
import { QueryClient, QueryClientProvider } from "react-query";

const qc = new QueryClient();

qc.fetchQuery(getRandomAgent.key, getRandomAgent);

export default function App() {
  return (
    <QueryClientProvider client={qc}>
      <AgentView />
    </QueryClientProvider>
  );
}
