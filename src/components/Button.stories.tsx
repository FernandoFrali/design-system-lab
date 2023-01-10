import Button from './Button';
import { Meta, StoryObj } from '@storybook/react';
import { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Lorem Ipsum',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
};

export const Large: StoryObj<ButtonProps> = {
  args: {
    size: 'lg',
  },
};

export const CustomComponent: StoryObj<ButtonProps> = {
  args: {
    asChild: true,
    children: <button>Create account</button>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
};
