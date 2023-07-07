import "@testing-library/jest-dom";
import { rest } from "msw";
import { setupServer } from "msw/node";
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AgentView } from "./AgentView";
import { AGENT_API } from "../repository/agentRepository";
import { fabricateAgentResponse } from "../domain/AgentFactory";
import { presentAgentView } from "./presenters/presentAgent";
import { QueryClient, QueryClientProvider } from "react-query";

const worker = setupServer();

const qc = new QueryClient();

function setup() {
  return render(
    <QueryClientProvider client={qc}>
      <AgentView />
    </QueryClientProvider>
  );
}

function getRandomAgentHandler() {
  const response = fabricateAgentResponse();
  const handler = rest.get(AGENT_API, (req, res, ctx) => {
    return res(ctx.json(response));
  });

  return { user: response.results[0], handler };
}

describe("AgentView", () => {
  beforeAll(() => worker.listen());
  afterEach(() => worker.resetHandlers());
  afterAll(() => worker.close());
  it("Renders correctly", async () => {
    const { user, handler } = getRandomAgentHandler();
    worker.use(handler);

    setup();

    const s = screen.queryByText(/loading/i);
    const agent = presentAgentView(user);

    await waitForElementToBeRemoved(s);

    const keys: [RegExp, string | number][] = [
      [/Agent/, agent.fullName],
      [/Sex/, agent.sex],
      [/D\.O\.B/, agent.dob],
      [/Eyes/, agent.eyeColor],
      [/Time/, agent.time],
      [/Address/, agent.address],
    ];
    keys.forEach(([key, value]) => {
      expect(screen.getByText(key)).toBeInTheDocument();
      expect(screen.getByText(value)).toBeInTheDocument();
    });

    const codenameTag = within(screen.getByTestId("codename"));

    expect(codenameTag.getByText(/codename/i)).toBeInTheDocument();
    expect(codenameTag.getByText(agent.code)).toBeInTheDocument();
  });
  it("calls next asset", async () => {
    const response1 = getRandomAgentHandler();
    worker.use(response1.handler);

    setup();

    const agent1 = presentAgentView(response1.user);

    await waitFor(() =>
      expect(screen.getByText(agent1.fullName)).toBeInTheDocument()
    );

    worker.resetHandlers();
    const response2 = getRandomAgentHandler();
    worker.use(response2.handler);

    const button = screen.getByRole("button");

    userEvent.click(button);

    const agent2 = presentAgentView(response2.user);
    await waitFor(() =>
      expect(screen.getByText(agent2.fullName)).toBeInTheDocument()
    );
  });
});
