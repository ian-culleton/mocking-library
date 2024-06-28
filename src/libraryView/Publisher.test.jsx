import { afterEach, describe, expect, it } from 'vitest';
import React, {act} from 'react';
import Publisher from './Publisher'
import { cleanup, render } from '@testing-library/react';

const testPublisher = {
  "id": 1,
  "title": "The Lord of the Rings",
  "publisher": "J.R.R. Tolkien",
  "publisher": "George Allen & Unwin",
  "summary": "An epic fantasy trilogy about the quest to destroy the One Ring and the battle against the Dark Lord Sauron."
}

describe('Publisher', () => {
  afterEach(cleanup)

  it('Should render a publisher title', () => {
    const { queryAllByText } = render(<Publisher publisher={testPublisher} />);
    expect(
      queryAllByText("The Lord of the Rings")
    ).toHaveLength(1);
  })

  it('Should render a publisher publisher', () => {
    const { queryAllByText } = render(<Publisher publisher={testPublisher} />);
    expect(
      queryAllByText("J.R.R. Tolkien")
    ).toHaveLength(1);
  })

  it('Should render a publisher publisher', () => {
    const { queryAllByText } = render(<Publisher publisher={testPublisher} />);
    expect(
      queryAllByText("George Allen & Unwin")
    ).toHaveLength(1);
  })

  it('Should render a publisher summary', () => {
    const { queryAllByText } = render(<Publisher publisher={testPublisher} />);
    expect(
      queryAllByText(testPublisher.summary)
    ).toHaveLength(1);
  })
})