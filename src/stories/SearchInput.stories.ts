import type { Meta, StoryObj } from "@storybook/svelte";
import SearchInput from "../lib/molecules/SearchInput/SearchInput.svelte";

const meta: Meta<typeof SearchInput> = {
    title: "Molecules/SearchInput",
    component: SearchInput,
    argTypes: {
        placeholder: { control: "text" },
        value: { control: "text" },
    },
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

export const Empty: Story = {
    args: {
        placeholder: "Search for movies or TV series",
        value: "",
    },
};
