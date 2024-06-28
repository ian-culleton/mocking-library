import { afterEach, describe, expect, it } from 'vitest';
import React, {act} from 'react';
import Author from './Author'
import { cleanup, render } from '@testing-library/react';

const testAuthor = {
  "id": 1,
  "title": "The Lord of the Rings",
  "author": "J.R.R. Tolkien",
  "publisher": "George Allen & Unwin",
  "summary": "An epic fantasy trilogy about the quest to destroy the One Ring and the battle against the Dark Lord Sauron."
}

describe('Author', () => {
  afterEach(cleanup)

  it('Should render a author title', () => {
    const { queryAllByText } = render(<Author author={testAuthor} />);
    expect(
      queryAllByText("The Lord of the Rings")
    ).toHaveLength(1);
  })

  it('Should render a author author', () => {
    const { queryAllByText } = render(<Author author={testAuthor} />);
    expect(
      queryAllByText("J.R.R. Tolkien")
    ).toHaveLength(1);
  })

  it('Should render a author publisher', () => {
    const { queryAllByText } = render(<Author author={testAuthor} />);
    expect(
      queryAllByText("George Allen & Unwin")
    ).toHaveLength(1);
  })

  it('Should render a author summary', () => {
    const { queryAllByText } = render(<Author author={testAuthor} />);
    expect(
      queryAllByText(testAuthor.summary)
    ).toHaveLength(1);
  })
})