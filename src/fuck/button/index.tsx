import React from 'react';
import { ButtonProps } from './types';

export { ButtonProps };

/**
 * Button 组件
 * @param props
 * @returns
 */
export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const { text, onClick } = props;

  return <button onClick={onClick}>{ text }</button>;
};
