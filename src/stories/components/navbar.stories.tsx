import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Navbar } from "@/components";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Navigation/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "fullscreen"
  }
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => (
  <BrowserRouter>
    <div
      style={{
        padding: "1rem"
      }}
    >
      <Navbar />
    </div>
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
