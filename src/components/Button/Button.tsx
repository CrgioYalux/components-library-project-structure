import React from 'react';
import type { ButtonProps } from './Button.types';

export default function Button({ children }: ButtonProps): JSX.Element {
  return (
    <button className='bg-green-500 border-2 rounded-full hover:outline'>{children}</button>
  );
}
