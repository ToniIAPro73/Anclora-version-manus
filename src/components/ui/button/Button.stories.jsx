// src/components/ui/button/Button.stories.jsx
import React from 'react';
import { Button } from './Button.jsx';

/**
 * Este default export es OBLIGATORIO:
 * - title: cómo aparecerá en el panel de la izquierda
 * - component: el componente que vamos a documentar
 */
export default {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],         // opcional, para habilitar MDX/autodocs
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: { type: 'select' },
      options: ['default', 'sm', 'lg', 'icon'],
    },
    onClick: { action: 'clicked' },
  },
};

/**
 * Crea un “template” que renderiza tu componente
 * recibiendo args (props).
 */
const Template = (args) => <Button {...args} />;

/** Historias concretas */
export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Secondary',
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: 'ghost',
  children: 'Ghost',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  children: 'Large Button',
};

export const Icon = Template.bind({});
Icon.args = {
  size: 'icon',
  children: <svg width="16" height="16">{/* tu icono */}</svg>,
};
