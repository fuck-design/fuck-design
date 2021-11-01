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


  React.useEffect(() => {
    const onFuckClick = () => {
      console.log('fuck! don\'t touch me')
    }

    const onFuckHover = () => {
      console.log('fuck! don\'t touch me')
    }

    const fuckElement = document.querySelector('fuck')
    fuckElement.addEventListener('click', onFuckClick)
    fuckElement.addEventListener('hover', onFuckHover)

    return () => {
      fuckElement.removeEventListener('click', onFuckClick)
      fuckElement.removeEventListener('hover', onFuckHover)
    }
  },[])

  // @ts-expect-error
  return <fuck>{children}</fuck>;
};
