import { H1, Text } from "../../components/Text";
import { VerticalTable, VTItem } from "../../components/VerticalTable";
import type { VTItemType } from "../../components/VerticalTable";
import { AgentImg } from "./AgentImg";
import { useAgent } from "./hooks/useAgent";
import { presentAgentView } from "./presenters/presentAgent";

const background = "bg-emerald-950";

export function AgentView() {
  const { agent, getNextAgent } = useAgent();

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
    <div className={`flex flex-col items-center h-screen ${background}`}>
      <H1 className="mt-4">{name}</H1>
      <div className="max-w-md">
        <div className="mt-4 relative">
          <AgentImg src={src} alt={alt} />
          <div
            className={`flex items-center uppercase absolute bottom-0 left-0 p-2 ${background} bg-opacity-80 rounded-sm`}
          >
            <Text size="sm" className="mr-1 font-bold">
              codename
            </Text>
            <Text>{code}</Text>
          </div>
        </div>
        <div className="mt-2">
          <VerticalTable>
            {vtRows.map((vt) => (
              <VTItem key={`${vt.header}${vt.value}`} {...vt} />
            ))}
          </VerticalTable>
        </div>
      </div>
      <div className="flex mt-4">
        <button
          className="bg-emerald-50 text-emerald-600 p-3 rounded-sm"
          type="button"
          onClick={() => getNextAgent()}
        >
          Next Asset
        </button>
      </div>
    </div>
  );
}
