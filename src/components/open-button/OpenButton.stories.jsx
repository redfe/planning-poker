import React from 'react';

import { OpenButton } from './OpenButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/OpenButton',
  component: OpenButton,
  argTypes: { handleClick: { action: 'clicked' } },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <OpenButton {...args} />;

export const Closed = Template.bind({});
Closed.args = {
  isOpend: false,
};

export const Opend = Template.bind({});
Opend.args = {
  isOpend: true,
};
