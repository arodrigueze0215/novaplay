import type { Meta, StoryObj } from "@storybook/svelte";
import Card from "../lib/molecules/Card/card.svelte";

type StoryArgs = {
  image: string;
  year: number;
  category: string;
  rating: string;
  title: string;
};

const meta: Meta<StoryArgs> = {
  title: "Molecules/Card",
  tags: ["autodocs"],
  argTypes: {
    image: {
      control: "text",
    },
    year: {
      control: "number",
    },
    category: {
      control: "text",
    },
    rating: {
      control: "select",
      options: ["E", "PG", "PG-13", "R", "NC-17"],
    },
    title: {
      control: "text",
    },
  },
};

export default meta;

const render = (args: StoryArgs) => ({
  Component: Card,
  props: args,
});

export const Default: StoryObj<StoryArgs> = {
  args: {
    image: "https://placehold.co/164x110",
    year: 2025,
    category: "Movie",
    rating: "PG",
    title: "Card Title",
  },
  render,
};
