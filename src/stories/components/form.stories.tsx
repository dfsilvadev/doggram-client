import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button, Form, Input } from "@/components";

export default {
  title: "Form/Form",
  component: Form,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "fullscreen"
  }
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => (
  <div
    style={{
      padding: "1rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}
  >
    <Form {...args}>
      <Input
        initialValue=""
        label="E-mail"
        name="email"
        placeholder="john.doe@gmail.com"
      />

      <Button type="submit" fullWidth>
        Submit
      </Button>
    </Form>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: "Title Form"
};
