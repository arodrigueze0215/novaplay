import type { Meta, StoryObj } from "@storybook/svelte";

import Input from "../lib/atoms/Input/input.svelte";

type InputStoryArgs = {
  text: string;
  placeholder: string;
  type: "text" | "email" | "password" | "number";
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
      options: ["text", "email", "password", "number"],
      description: "Input type",
    },
  },
};

export default meta;
type Story = StoryObj<InputStoryArgs>;

const args: InputStoryArgs = {
  text: "Some text",
  placeholder: "Enter text here",
  type: "text",
};
const render = (args: InputStoryArgs) => ({
  Component: Input,
  props: args,
});

export const Text: Story = {
  args,
  render,
};

export const Email: Story = {
  args,
  render,
};

export const Password: Story = {
  args,
  render,
};

export const Number: Story = {
  args,
  render,
};
