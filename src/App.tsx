import { getRandomAgent } from "./agents/repository/agentRepository";
import { AgentView } from "./agents/ui/AgentView";
import { QueryClient, QueryClientProvider } from "react-query";

const qc = new QueryClient();

qc.fetchQuery(getRandomAgent.key, getRandomAgent);

export default function App() {
  return (
    <QueryClientProvider client={qc}>
      <div className="bg-gradient-to-r from-base-900 to-base-800 flex flex-col items-center min-h-screen">
        <AgentView />
      </div>
    </QueryClientProvider>
  );
}
