import React from 'react';
import '../styles/global.css';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface TextProps {
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  asChild?: boolean;
}

export function Text({ size = 'md', children, asChild }: TextProps) {
  const Comp = asChild ? Slot : 'span';

  return (
    <div>
      <Comp
        className={clsx('text-gray-100 font-sans', {
          'text-xs': size === 'sm',
          'text-sm': size === 'md',
          'text-md': size === 'lg',
        })}
      >
        {children}
      </Comp>
    </div>
  );
}

export default Text;
