import cn from "classnames";
import { WithReactChildren } from "../lib/types/react";

const sizes = {
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

export type FontSizeType = keyof typeof sizes;

export interface TextProps {
  size?: FontSizeType;
}

function getFont(props: TextProps) {
  switch (props.size) {
    case "lg": {
      return sizes.lg;
    }
    case "xl": {
      return sizes.xl;
    }
    case "md":
    default: {
      return sizes.md;
    }
  }
}

function getTextClass(props: WithReactChildren<TextProps>) {
  return cn(getFont(props));
}

export function Text(props: WithReactChildren<TextProps>) {
  return <p className={getTextClass(props)}>{props.children}</p>;
}

export function H1(props: WithReactChildren<TextProps>) {
  return <h1 className={getTextClass(props)} {...props} />;
}

H2.defaultProps = {
  size: "xl",
};

export function H2(props: WithReactChildren<TextProps>) {
  return <h2 className={getTextClass(props)} {...props} />;
}

H2.defaultProps = {
  size: "lg",
};
