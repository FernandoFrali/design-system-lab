import React from 'react';
import '../styles/global.css';
import { clsx } from 'clsx';
import { Slot } from '@radix-ui/react-slot';
// export interface TextInputProps
//   extends React.InputHTMLAttributes<HTMLInputElement> {}

export interface TextInputRootProps {
  children: React.ReactNode;
}

function TextInputRoot(props: TextInputRootProps) {
  return (
    <div
      className={
        'flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus:ring-2 ring-cyan-300 focus-within:ring-2'
      }
    >
      {props.children}
    </div>
  );
}

export interface TextInputIconProps {
  children: React.ReactNode;
}

function TextInputIcon(props: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{props.children}</Slot>;
}

export interface TextInputInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
      {...props}
    />
  );
}

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  Icon: TextInputIcon,
};

export default TextInput;
