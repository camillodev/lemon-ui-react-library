import React from 'react';
import Dialog from './Dialog';

export default {
  title: 'Components/Dialog',
  component: Dialog,
};

const Template = (args) => <Dialog {...args} />;

export const Open = Template.bind({});
Open.args = {
  isOpen: true,
  onClose: () => {},
  children: <p>Dialog content</p>,
};

export const Closed = Template.bind({});
Closed.args = {
  isOpen: false,
  onClose: () => {},
  children: <p>Dialog content</p>,
};
