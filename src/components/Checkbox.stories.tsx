import Checkbox from './Checkbox';
import { Meta, StoryObj } from '@storybook/react';
import { CheckboxProps } from './Checkbox';
import Text from './Text';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <div className="flex items-center gap-2">
          {Story()}
          <Text size="md">Lembrar de mim por 30 dias</Text>
        </div>
      );
    },
  ],
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};
