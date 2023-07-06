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
  return (
    <table {...props} className={(cn(props.className), "flex flex-wrap")} />
  );
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
        "vt-item flex items-center uppercase p-1 border-t-2 border-t-emerald-200 border-opacity-40 h-10",
        fullRow && "vt-item__row"
      )}
    >
      <span className="vt-item__header mr-2" role="columnheader">
        <Text weight="bold">{header}</Text>
      </span>
      <span className="vt-item__value" role="cell">
        <Text>{value}</Text>
      </span>
    </div>
  );
}
