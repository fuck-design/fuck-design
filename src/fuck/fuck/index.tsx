import React from 'react';
import { FuckProps } from './types';

export { FuckProps };

/**
 * Fuck 组件
 * @param props
 * @returns
 */
export const Fuck: React.FC<FuckProps> = (props: FuckProps) => {
  const { children } = props;

  // @ts-expect-error
  return <fuck>{children}</fuck>;
};
