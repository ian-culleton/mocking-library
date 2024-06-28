import { beforeAll, afterAll, afterEach, describe, expect, it } from 'vitest';
import LibraryView from './LibraryView';
import React, { act } from 'react';
import { render, cleanup, } from '@testing-library/react';
import books from '../../proxy/books.json'
import { HttpResponse, http } from 'msw'
import { setupServer } from 'msw/node'

export const restHandlers = [ 
  http.get('/books', () => { return HttpResponse.json(books)}),
]

const server = setupServer(...restHandlers)

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

//  Close server after all tests
afterAll(() => server.close())

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers())

describe('LibraryView', () => {
  afterEach(cleanup)

  it('Should have a library title', () => {
    const { queryAllByText } = render(<LibraryView />);
    expect(queryAllByText('Library')).toHaveLength(1);
  })

  it('should render a list of books', async () => {
    const { queryAllByTestId } = render(<LibraryView />);
    await act(() => {
      expect(
        queryAllByTestId("book-list-item")
      ).toHaveLength(9)
    })
  })
})