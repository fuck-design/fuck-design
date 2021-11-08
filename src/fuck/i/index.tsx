import React from 'react';
import { IProps } from './types';

export { IProps };

/**
 * i 组件
 * @param props
 * @returns
 */
export const I: React.FC<IProps> = props => {
  const { text } = props;
  return <i>{text}</i>;
};
