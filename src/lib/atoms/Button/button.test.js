import { render, screen } from '@testing-library/svelte';
import Button from './button.svelte';
import { describe, it, expect } from 'vitest';

describe('Button', () => {
  it('renders the button with text', () => {
    render(Button, { props: { text: 'Click Me' } });
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });
});
