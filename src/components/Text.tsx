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

const colors = {
  neutral: "text-neutral-100",
  inherit: "text-inherit",
};

export type FontWeightColor = keyof typeof colors;

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: FontSizeType;
  weight?: FontWeightsType;
  color?: FontWeightColor;
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

function getColor(props: TextProps) {
  switch (props.color) {
    case "inherit": {
      return colors.inherit;
    }
    case "neutral":
    default: {
      return colors.neutral;
    }
  }
}

function getTextClass(props: WithReactChildren<TextProps>) {
  const { className } = props;
  return cn(getColor(props), className, getFont(props), getWeight(props));
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
