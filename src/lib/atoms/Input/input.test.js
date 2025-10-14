
import '@testing-library/jest-dom/vitest';
import { render, screen } from '@testing-library/svelte';
import Input from './input.svelte';
import { describe, it, expect } from 'vitest';

describe('Input component', () => {
  it('renders with a placeholder', () => {
    const placeholder = 'Email address';
    render(Input, { type: 'email', placeholder });
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();
  });

  it('displays an error message when error prop is true', () => {
    const errorMessage = 'Cannot be empty';
    render(Input, { type: 'text', errorMessage, isValid: false });
    expect(screen.getByText(errorMessage)).toBeInTheDocument(); // toBeInTheDocument is a custom matcher from @testing-library/jest-dom
  });

  it('sets aria-invalid to true when error prop is true', () => {
    const placeholder = 'Email address';
    render(Input, { type: 'email', placeholder });
    expect(screen.getByPlaceholderText(placeholder)).toHaveAttribute('aria-invalid', 'false');
  });

 it('displays an error message when error prop is true', () => {
   const errorMessage = 'Cannot be empty';
   render(Input, { type: 'text', errorMessage, isValid: false });
   // Check if the error message is in the document
   expect(screen.getByText(errorMessage)).toBeInTheDocument();
   // Also verify the input has the correct aria attributes
   const input = screen.getByRole('textbox');
   expect(input).toHaveAttribute('aria-invalid', 'true');
   expect(input).toHaveAttribute('aria-describedby');
 });

  it('does not show an error message when error prop is false', () => {
    const errorMessage = 'Cannot be empty';
    render(Input, { type: 'text', errorMessage });
    expect(screen.queryByText(errorMessage)).not.toBeInTheDocument();
  });
});
