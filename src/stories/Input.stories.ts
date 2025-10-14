import type { Meta, StoryObj } from "@storybook/svelte";

import Input from "../lib/atoms/Input/input.svelte";

type InputStoryArgs = {
  text: string;
  placeholder: string;
  type: "text" | "email" | "password";
  errorMessage: string;
  required: boolean;
};

const meta: Meta<InputStoryArgs> = {
  title: "Atoms/Input",
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
      description: "Placeholder text for the input",
    },
    type: {
      control: "select",
      options: ["text", "email", "password"],
      description: "Input type",
    },
    text: {
      control: "text",
      description: "Input text",
    },
    errorMessage: {
      control: "text",
      description: "Error message",
    },
    required: {
      control: "boolean",
      description: "Is required",
    },
  },
};

export default meta;
type Story = StoryObj<InputStoryArgs>;

const render = (args: InputStoryArgs) => ({
  Component: Input,
  props: args,
});

export const Text: Story = {
  args: {
    placeholder: "Enter text here",
    type: "text",
    text: "",
    errorMessage: "Error message",
    required: true,
  },
  render,
};

export const Email: Story = {
  args: {
    placeholder: "Email address",
    type: "email",
    text: "",
    errorMessage: "Can't be empty",
    required: true,
  },
  render,
};

export const Password: Story = {
  args: {
    placeholder: "Enter password here",
    type: "password",
    text: "",
    errorMessage: "Error message",
    required: true,
  },
  render,
};
