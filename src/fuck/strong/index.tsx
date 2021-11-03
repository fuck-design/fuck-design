import React from 'react';
import { StrongProps } from './types';

export { StrongProps };

/**
 * Strong 组件
 * @param props
 * @returns
 */
export const Strong: React.FC<StrongProps> = props => {
  const { text } = props;
  return <strong>{text}</strong>;
};
