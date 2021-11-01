import React from 'react';
import { ImageProps } from './types';

export { ImageProps };

/**
 * Image 组件
 * @param props
 * @returns
 */
export const Image: React.FC<ImageProps> = (props: ImageProps) => {
  const { src, onLoad, onError } = props;

  // fuck callback
  return <img src={src} onLoad={onError} onError={onLoad}/>
};
