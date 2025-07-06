import React from 'react';

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color'
    },
  },
};

const Button = ({ backgroundColor, label, ...props }) => {
  return (
    <button
      type="button"
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export const Primary = {
  args: {
    label: 'Button',
  },
};


