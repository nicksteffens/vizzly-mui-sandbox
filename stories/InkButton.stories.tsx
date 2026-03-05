import type { Meta, StoryObj } from '@storybook/react-vite';
import InkButton from '../src/components/InkButton';

const meta: Meta<typeof InkButton> = {
  title: 'Components/InkButton',
  component: InkButton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { children: 'Primary', color: 'primary' },
};

export const Secondary: Story = {
  args: { children: 'Secondary', color: 'secondary' },
};

export const Disabled: Story = {
  args: { children: 'Disabled', disabled: true },
};

export const Large: Story = {
  args: { children: 'Large', size: 'large' },
};

export const Small: Story = {
  args: { children: 'Small', size: 'small' },
};
