import { ComponentStory, ComponentMeta } from "@storybook/react";
import { EnvelopeSimple } from "phosphor-react";

import { Input } from "@/components";

export default {
  title: "Form/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    onInput: { action: "input" }
  },
  args: {
    label: "E-mail",
    name: "email",
    initialValue: "",
    placeholder: "john.doe@gmail.com",
    disabled: false
  },
  parameters: {}
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <div
    style={{
      padding: "1rem"
    }}
  >
    <Input {...args} />
  </div>
);

export const Basic = Template.bind({});
Basic.args = {};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: <EnvelopeSimple />
};
WithIcon.argTypes = {
  iconPosition: {
    options: ["left", "right"],
    control: { type: "select" }
  }
};

export const WithRightIcon = Template.bind({});
WithRightIcon.args = {
  icon: <EnvelopeSimple />,
  iconPosition: "right"
};
WithRightIcon.argTypes = {
  iconPosition: {
    options: ["left", "right"],
    control: { type: "select" }
  }
};

export const WhithError = Template.bind({});
WhithError.args = {
  error: "Ops...something is wrong"
};
