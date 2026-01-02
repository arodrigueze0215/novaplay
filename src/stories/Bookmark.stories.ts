import type { Meta, StoryObj } from '@storybook/svelte';
import Bookmark from '../lib/atoms/Bookmark/bookmark.svelte';

const meta = {
  title: 'Atoms/Bookmark',
  component: Bookmark,
  tags: ['autodocs']
} satisfies Meta<Bookmark>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
