import React from 'react';

import { CardSelection } from './CardSelection';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/CardSelection',
  component: CardSelection,
  argTypes: { handleCardClick: { action: 'clicked' } },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <CardSelection {...args} />;

export const CardSelectionArea = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CardSelectionArea.args = {
  selectedPoint: '8',
};
