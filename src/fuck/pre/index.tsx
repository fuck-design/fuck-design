import React from 'react';
import { PreProps } from './types';

export { PreProps };

/**
 * Pre 组件
 * @param props
 * @returns
 */
export const Pre: React.FC<PreProps> = (props: PreProps) => {
  const { text } = props;

  return <pre>{text}</pre>;
};
