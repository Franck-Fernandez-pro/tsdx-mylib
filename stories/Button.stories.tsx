import { Meta, Story } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button, Props } from '../src/Button';

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    children: {
      defaultValue: 'Lorem ispum',
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Button {...args} />;

// export const Default = () => <Button variant="primary">Click me</Button>;
// export const Secondary = () => <Button variant="secondary">Click me</Button>;
export const Default = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Hello there',
  onClick: action('Secondary clicked'),
};
