import cn from "classnames";
import { WithReactChildren } from "../lib/types/react";
import "./VerticalTable.css";
import { Text } from "./Text";

/**
 * Displays a table of `Header Value` cells
 */
export function VerticalTable(
  props: WithReactChildren<React.HTMLAttributes<HTMLTableElement>>
) {
  return <div {...props} className={(cn(props.className), "flex flex-wrap")} />;
}

export type VTItemType = {
  header: string;
  value: React.ReactNode;
  /**
   * Display the item in a row
   */
  fullRow?: boolean;
};

export interface VTItemProps extends VTItemType {}

export function VTItem(props: VTItemProps) {
  const { header, value, fullRow = false } = props;
  return (
    <div
      className={cn(
        "vt-item flex items-center uppercase px-1 py-2 border-t-[1px] border-t-neutral-50 h-14",
        fullRow && "vt-item__row"
      )}
    >
      <span className="vt-item__header mr-2" role="columnheader">
        <Text weight="bold" className="text-neutral-200">
          {header}
        </Text>
      </span>
      <span className="vt-item__value" role="cell">
        <Text className="text-neutral-300">{value}</Text>
      </span>
    </div>
  );
}
