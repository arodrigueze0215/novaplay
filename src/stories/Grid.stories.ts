import type { Meta, StoryObj } from "@storybook/svelte";
import GridWithCards from "./helpers/GridWithCards.svelte";

const meta = {
  title: "Layout/Grid",
  component: GridWithCards,
  tags: ["autodocs"],
} satisfies Meta<GridWithCards>;

export default meta;
type Story = StoryObj<GridWithCards>;

export const Default: Story = {};
