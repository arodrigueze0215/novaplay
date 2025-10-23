import type { Meta, StoryObj } from "@storybook/svelte";
import Bookmark from "../lib/atoms/Bookmark/bookmark.svelte";

const meta: Meta = {
  title: "Atoms/Bookmark",
  tags: ["autodocs"],
};

export default meta;

export const Default: StoryObj = {
  render: () => ({
    Component: Bookmark,
  }),
};
