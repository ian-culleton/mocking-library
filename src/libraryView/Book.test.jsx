import { afterEach, describe, expect, it } from 'vitest';
import React, {act} from 'react';
import Book from './Book'
import { cleanup, render } from '@testing-library/react';

const testBook = {
  "id": 1,
  "title": "The Lord of the Rings",
  "author": "J.R.R. Tolkien",
  "publisher": "George Allen & Unwin",
  "summary": "An epic fantasy trilogy about the quest to destroy the One Ring and the battle against the Dark Lord Sauron."
}

describe('Book', () => {
  afterEach(cleanup)

  it('Should render a book title', () => {
    const { queryAllByText } = render(<Book book={testBook} />);
    expect(
      queryAllByText("The Lord of the Rings")
    ).toHaveLength(1);
  })

  it('Should render a book author', () => {
    const { queryAllByText } = render(<Book book={testBook} />);
    expect(
      queryAllByText("J.R.R. Tolkien")
    ).toHaveLength(1);
  })

  it('Should render a book publisher', () => {
    const { queryAllByText } = render(<Book book={testBook} />);
    expect(
      queryAllByText("George Allen & Unwin")
    ).toHaveLength(1);
  })

  it('Should render a book summary', () => {
    const { queryAllByText } = render(<Book book={testBook} />);
    expect(
      queryAllByText(testBook.summary)
    ).toHaveLength(1);
  })
})