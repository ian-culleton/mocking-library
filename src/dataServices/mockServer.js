/** BEGIN SOLUTION CODE */
import books from '../../proxy/books.json'
import authors from '../../proxy/authors.json'
import publishers from '../../proxy/publishers.json'
import {beforeAll, afterAll, afterEach} from 'vitest';

import { HttpResponse, http } from 'msw'
import { setupServer } from 'msw/node'

export const restHandlers = [ 
  http.get('/books', () => { return HttpResponse.json(books)}),
  http.get('/authors', () => { return HttpResponse.json(authors)}),
  http.get('/publishers', () => { return HttpResponse.json(publishers)}),

]

export const server = setupServer(...restHandlers);


// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

//  Close server after all tests
afterAll(() => server.close())

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers())
/** END SOLUTION CODE */
