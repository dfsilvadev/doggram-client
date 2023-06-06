import { BrowserRouter } from "react-router-dom";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Form, SignInForm } from "@/components";

export default {
  title: "Form/SignInForm",
  component: SignInForm,
  tags: ["autodocs"],
  argTypes: {},
  parameters: {
    layout: "fullscreen"
  }
} as ComponentMeta<typeof SignInForm>;

const Template: ComponentStory<typeof SignInForm> = () => (
  <BrowserRouter>
    <div
      style={{
        padding: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Form title="Sign in" aria-label="sign in form">
        <SignInForm />
      </Form>
    </div>
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {};
