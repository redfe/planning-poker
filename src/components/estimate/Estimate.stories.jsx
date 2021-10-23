import React from 'react';

import { Estimate } from './Estimate';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Estimate',
  component: Estimate,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Estimate {...args} />;

export const ClosedEstimate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ClosedEstimate.args = {
  isOpend: false,
  point: '55',
  name: '山田',
};

export const OpendEstimate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OpendEstimate.args = {
  isOpend: true,
  point: '55',
  name: '山田',
};
