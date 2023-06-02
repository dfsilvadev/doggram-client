import { BrowserRouter } from "react-router-dom";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Avatar } from "@/components";

export default {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "centered"
  }
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
  <BrowserRouter>
    <Avatar {...args} />
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
  src: "https://avatars.githubusercontent.com/u/16245261?v=4"
};
