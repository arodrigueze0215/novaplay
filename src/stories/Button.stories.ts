import type { Meta, StoryObj } from "@storybook/svelte";
import Button from "../lib/atoms/Button/button.svelte";

type StoryArgs = {
  text: string;
};
const meta: Meta<StoryArgs> = {
  title: "Atoms/Button",
  argTypes: {
    text: {
      control: "text",
    },
  },
};

const args: StoryArgs = {
  text: "Click Me",
};

export const Default: StoryObj<StoryArgs> = {
  args,
  render: (args) => ({
    Component: Button,
    props: args,
  }),
};
export default meta;
