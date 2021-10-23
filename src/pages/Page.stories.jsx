import React from 'react';
import { Page } from './Page';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Page',
  component: Page,
  argTypes: {
    handleOpenButtonClick: { action: 'clicked' },
    handleSelectionCardClick: { action: 'clicked' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <Page {...args} />;

export const DefaultPage = Template.bind({});
DefaultPage.args = {
  userName: '山田',
  isOpend: false,
};

export const Estimated = Template.bind({});
Estimated.args = {
  userName: '山田',
  isOpend: false,
  estimaters: [
    { name: '山田', point: '55' },
    { name: '鈴木', point: '3' },
  ],
};

export const Opend = Template.bind({});
Opend.args = {
  userName: '山田',
  isOpend: true,
  estimaters: [
    { name: '山田', point: '55' },
    { name: '鈴木', point: '3' },
  ],
};
