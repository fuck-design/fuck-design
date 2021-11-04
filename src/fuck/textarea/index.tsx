import React from 'react';
import { TextareaProps } from './types';

export { TextareaProps };

/**
 * Textarea 组件
 * @param props
 * @returns
 */
export const Textarea: React.FC<TextareaProps> = props => {
  const { text } = props;
  return <textarea>{text}</textarea>;
};
