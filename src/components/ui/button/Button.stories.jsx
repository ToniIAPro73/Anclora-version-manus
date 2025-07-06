import React from 'react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primario = Template.bind({});
Primario.args = {
  children: 'Click me',
  variant: 'primary',
};
