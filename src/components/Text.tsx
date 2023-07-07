import cn from "classnames";
import { WithReactChildren } from "../lib/types/react";

const sizes = {
  sm: "text-sm",
  md: "text-base",
  xl: "text-xl",
  "3xl": "text-3xl",
};

export type FontSizeType = keyof typeof sizes;

const weights = {
  bold: "font-bold",
};

export type FontWeightsType = keyof typeof weights;

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: FontSizeType;
  weight?: FontWeightsType;
}

function getFont(props: TextProps) {
  switch (props.size) {
    case "xl": {
      return sizes.xl;
    }
    case "3xl": {
      return sizes["3xl"];
    }
    case "sm": {
      return sizes.sm;
    }
    case "md":
    default: {
      return sizes.md;
    }
  }
}

function getWeight(props: TextProps) {
  switch (props.weight) {
    case "bold": {
      return weights.bold;
    }
    default: {
      return null;
    }
  }
}

function getTextClass(props: WithReactChildren<TextProps>) {
  const { className } = props;
  return cn(className, getFont(props), getWeight(props), "text-neutral-100");
}

export function Text(props: WithReactChildren<TextProps>) {
  return (
    <p {...props} className={getTextClass(props)}>
      {props.children}
    </p>
  );
}

export function H1(props: WithReactChildren<TextProps>) {
  return <h1 {...props} className={getTextClass(props)} />;
}

H1.defaultProps = {
  size: "3xl",
};

export function H2(props: WithReactChildren<TextProps>) {
  return <h2 {...props} className={getTextClass(props)} />;
}

H2.defaultProps = {
  size: "xl",
};
