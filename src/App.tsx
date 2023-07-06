import { getRandomAgent } from "./agents/repository/agentRepository";
import { Agent } from "./agents/ui/Agent";
import "./styles.css";
import { QueryClient, QueryClientProvider } from "react-query";

const qc = new QueryClient();

qc.fetchQuery(getRandomAgent.key, getRandomAgent);

export default function App() {
  return (
    <QueryClientProvider client={qc}>
      <div className="App">
        <Agent />
      </div>
    </QueryClientProvider>
  );
}
