import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import Button from './Button';

describe('Button', () => {
  test('renders the Button component', () => {
    render(<Button>Test</Button>);
    expect(screen.getByRole('button').innerHTML).toEqual('Test');
  });

  test('click', async () => {
    render(<Button>Test</Button>);
    const element = screen.getByRole('button');
    userEvent.hover(element);
    await waitFor(() => expect(element.className).toContain('outline'));
  });
});
