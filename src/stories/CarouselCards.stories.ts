import type { Meta, StoryObj } from "@storybook/svelte";
import TrendingCardsHelper from "./helpers/TrendingCardsHelper.svelte";

const meta = {
  title: "Layout/TrendingCards",
  component: TrendingCardsHelper,
} satisfies Meta<TrendingCardsHelper>;

export default meta;
type Story = StoryObj<TrendingCardsHelper>;

export const Default: Story = {};
