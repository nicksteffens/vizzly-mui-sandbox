import type { Meta, StoryObj } from '@storybook/react-vite';
import InkAlert from '../src/components/InkAlert';

const meta: Meta<typeof InkAlert> = {
  title: 'Components/InkAlert',
  component: InkAlert,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: { severity: 'success', children: 'This is a success alert' },
};

export const Error: Story = {
  args: { severity: 'error', children: 'This is an error alert' },
};

export const Warning: Story = {
  args: { severity: 'warning', children: 'This is a warning alert' },
};

export const Info: Story = {
  args: { severity: 'info', children: 'This is an info alert' },
};
