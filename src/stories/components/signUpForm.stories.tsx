import { BrowserRouter } from "react-router-dom";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Form, SignUpForm } from "@/components";

export default {
  title: "Form/SignUpForm",
  component: SignUpForm,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "fullscreen"
  }
} as ComponentMeta<typeof SignUpForm>;

const Template: ComponentStory<typeof SignUpForm> = () => (
  <BrowserRouter>
    <div
      style={{
        padding: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Form title="Sign up">
        <SignUpForm />
      </Form>
    </div>
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
