import React from 'react';

import { Card } from './Card';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Card',
  component: Card,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Card {...args} />;

export const SelectedOnSelection = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SelectedOnSelection.args = {
  point: 55,
  isSelectable: true,
  isSelected: true,
};

export const NotSelectedOnSelection = Template.bind({});
NotSelectedOnSelection.args = {
  point: 55,
  isSelectable: true,
  isSelected: false,
};

export const OpenedOnTalbe = Template.bind({});
OpenedOnTalbe.args = {
  size: "large",
  point: 55,
  isSelected: false,
  isClosed: false,
};

export const ClosedOnTable = Template.bind({});
ClosedOnTable.args = {
  size: "large",
  point: 55,
  isSelected: false,
  isClosed: true,
};
