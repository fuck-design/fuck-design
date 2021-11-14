import React from 'react';
import { LabelProps } from './types';

export { LabelProps };

/**
 * Label 组件
 * @param props
 * @returns
 */
export const Label: React.FC<LabelProps> = props => {
  const { text } = props;
  return <label>{text}</label>;
};
