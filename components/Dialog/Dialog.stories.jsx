import React, { useState } from 'react';
import Dialog from './Dialog';
const contentDefaultValue =
  'Lemon Energy offers a range of innovative energy solutions, including solar panels, wind turbines, and energy storage systems.\n\nOur solar panels are the most efficient on the market, ensuring maximum energy output and savings for our customers. Our wind turbines are designed to harness the power of the wind and provide clean, renewable energy. And our energy storage systems allow you to store excess energy and use it when you need it most. With our products, you can reduce your carbon footprint and save money on your energy bills.\n\nContact us today to learn more about our products and services!' +
  'Lemon Energy offers a range of innovative energy solutions, including solar panels, wind turbines, and energy storage systems.\n\nOur solar panels are the most efficient on the market, ensuring maximum energy output and savings for our customers. Our wind turbines are designed to harness the power of the wind and provide clean, renewable energy. And our energy storage systems allow you to store excess energy and use it when you need it most. With our products, you can reduce your carbon footprint and save money on your energy bills.\n\nContact us today to learn more about our products and services!';

export default {
  title: 'Components/Dialog',
  component: Dialog,
  decorators: [
    (Story) => {
      const [isOpen, setIsOpen] = useState(false);

      const handleClose = () => {
        setIsOpen(false);
      };

      return (
        <>
          <button onClick={() => setIsOpen(true)}>Open Dialog</button>
          <Story isOpen={isOpen} onClose={handleClose} />
        </>
      );
    },
  ],
  argTypes: {
    content: {
      control: {
        content: contentDefaultValue,
        type: 'text',
      },
    },
  },
};

const Template = ({ content, ...args }) => {
  return <Dialog {...args}>{content}</Dialog>;
};

export const Open = Template.bind({});
Open.args = {
  isOpen: true,
  title: 'Our Products',
  closeOnOverlayClick: false,
  content: contentDefaultValue,
};
