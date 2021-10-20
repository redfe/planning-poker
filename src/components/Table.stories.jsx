import React from 'react';
import { Table } from './Table';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Table',
  component: Table,
  argTypes: { handleOpenButtonClick: { action: "clicked" } }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Table {...args} />;

export const ClosedTable = Template.bind({});
ClosedTable.args = {
  isOpend: false,
  estimaters: [{ name: "山田", point: "55" }, { name: "鈴木", point: "3" }]
};

export const OpendTable = Template.bind({});
OpendTable.args = {
  isOpend: true,
  estimaters: [{ name: "山田", point: "55" }, { name: "鈴木", point: "3" }]
};

export const EmptyTable = Template.bind({});
EmptyTable.args = {
  isOpend: false,
  estimaters: []
};
