import React from 'react';

import { User } from './User';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/User',
  component: User,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <User {...args} />;

export const DefaultUser = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DefaultUser.args = {
  name: '山田',
};
