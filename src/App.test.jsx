import { describe, expect, it } from 'vitest';
import App from './App';
import React from 'react';
import { render } from '@testing-library/react';

describe('suite name', () => {
  it('foo', () => {
    console.log('hello from the tes file')
    const { getByText } = render(<LibraryView />);
    expect(
      getByText('Library')
    ).toBeInTheDocument();
  })
})