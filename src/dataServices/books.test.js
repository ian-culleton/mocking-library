import {describe, expect, it } from 'vitest';

import { getAllBooks } from './books'

describe('books data service', () => {

  it('Should fetch all books', async () => {
    let allBooks = await getAllBooks();
    expect(allBooks).toHaveLength(9);
  })
})