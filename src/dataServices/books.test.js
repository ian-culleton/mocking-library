import { beforeAll, afterAll, afterEach, describe, expect, it } from 'vitest';

describe('books data service', () => {

  it('Should fetch all books', async () => {
    let allBooks = await fetch('/books');
    allBooks = await allBooks.json();
    expect(allBooks).toHaveLength(9);
  })
})