import React from 'react';
import '../styles/global.css';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps {
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  asChild?: boolean;
}

export function Button({ size = 'md', children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : 'span';

  return (
    <div>
      <Comp
        className={clsx(
          'py-4 px-3 bg-cyan-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 ring-white',
          {
            'text-xs': size === 'sm',
            'text-sm': size === 'md',
            'text-md': size === 'lg',
          }
        )}
      >
        {children}
      </Comp>
    </div>
  );
}

export default Button;
