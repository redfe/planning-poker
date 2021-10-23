import React from 'react';

import { CopyButton } from './CopyButton';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/CopyButton',
  component: CopyButton,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <CopyButton {...args} />;

export const DefaultCopyButton = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultCopyButton.args = {
  text: 'あいうえお',
};
