import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Container } from "@/components";

export default {
  title: "Layout/Container",
  component: Container,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "fullscreen"
  }
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container
    {...args}
    style={{ background: "#FFF", marginTop: "2rem", padding: "2rem 1rem" }}
  >
    <span>Content</span>
  </Container>
);

export const Default = Template.bind({});
Default.args = {};
