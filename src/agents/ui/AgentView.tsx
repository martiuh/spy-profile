import "./AgentView.css";
import cn from "classnames";
import { H1, Text } from "../../components/Text";
import { VerticalTable, VTItem } from "../../components/VerticalTable";
import type { VTItemType } from "../../components/VerticalTable";
import { AgentImg } from "./AgentImg";
import { useAgent } from "./hooks/useAgent";
import { presentAgentView } from "./presenters/presentAgent";

export function AgentView() {
  const { agent, getNextAgent, isPending } = useAgent();

  if (typeof agent === "undefined") {
    return <Text>Loading...</Text>;
  }

  const {
    fullName: name,
    src,
    alt,
    code,
    dob,
    eyeColor,
    sex,
    address,
  } = presentAgentView(agent);

  const vtRows: VTItemType[] = [
    {
      header: "Sex",
      value: sex,
    },
    {
      header: "D.O.B",
      value: dob,
    },
    {
      header: "Eyes",
      value: eyeColor,
    },
    {
      header: "Address",
      value: `${address}`,
      fullRow: true,
    },
  ];

  return (
    <div className={cn(!isPending && "puff-in-center")}>
      <H1 className="flex items-center justify-center mt-4">
        <span className="mr-2 font-bold uppercase">Agent</span>
        <span>{name}</span>
      </H1>
      <div className="max-w-md flex flex-col items-center">
        <div className="mt-4 relative">
          <AgentImg src={src} alt={alt} />
          <div
            className={`flex items-center uppercase absolute bottom-0 left-0 p-1 ml-2 mb-2  bg-opacity-70 bg-base-50 rounded-sm text-primary-800 max-w-[95%] overflow-hidden`}
          >
            <Text size="sm" weight="bold" className="mr-2 text-inherit">
              codename
            </Text>
            <Text className="text-inherit">{code}</Text>
          </div>
          <div className="absolute top-0 left-0 w-full h-full border-4 border-neutral-300 bg-base-600 bg-opacity-10"></div>
        </div>
        <div className="mt-8">
          <VerticalTable>
            {vtRows.map((vt) => (
              <VTItem key={`${vt.header}${vt.value}`} {...vt} />
            ))}
          </VerticalTable>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="bg-transparent border-2 border-neutral-50 text-neutral-50 p-3 rounded-sm uppercase font-bold"
          type="button"
          onClick={() => getNextAgent()}
        >
          <div className="flex flex-col">
            <span>Next</span>
            <span>Asset</span>
          </div>
        </button>
      </div>
    </div>
  );
}
