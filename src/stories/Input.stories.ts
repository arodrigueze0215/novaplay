import type { Meta, StoryObj } from "@storybook/svelte";

import Button from "../lib/atoms/Button/button.svelte";

// This component is rendering a button meanwhile it is being merge to main branch.
// The Imput component will come in other commit.

type StoryArgs = {
  text: string;
};
const meta: Meta<StoryArgs> = {
  title: "Atoms/Input",
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

// import Input from '../lib/atoms/Input/input.svelte';

// const meta: Meta<Input> = {
//   title: 'Atoms/Input',
//   component: Input,
//   tags: ['autodocs'],
//   argTypes: {
//     placeholder: {
//       control: 'text',
//       description: 'Placeholder text for the input',
//     },
//     type: {
//       control: 'select',
//       options: ['text', 'email', 'password', 'number'],
//       description: 'Input type',
//     },
//   },
// };

// export default meta;
// type Story = StoryObj<Input>;

// export const Text: Story = {
//   args: {
//     placeholder: 'Enter text here',
//     type: 'text',
//   },
// };

// export const Email: Story = {
//   args: {
//     placeholder: 'Enter your email',
//     type: 'email',
//   },
// };

// export const Password: Story = {
//   args: {
//     placeholder: 'Enter password',
//     type: 'password',
//   },
// };

// export const Number: Story = {
//   args: {
//     placeholder: 'Enter number',
//     type: 'number',
//   },
// };
