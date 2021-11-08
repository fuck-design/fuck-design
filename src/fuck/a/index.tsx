import React from "react";
import { AProps } from "./types";

export { AProps };

/**
 * Anchor 组件
 * @param props
 * @returns
 */
export const A: React.FC<AProps> = (props) => {
  const { children, ...restProps } = props;
  return <a {...restProps}>{children}</a>;
};
