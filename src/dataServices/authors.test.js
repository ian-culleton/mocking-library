import { describe, expect, it } from 'vitest';
import { getAllAuthors } from './authors';

import { server } from './mockServer';

describe('authors data service', () => {
  it('Should fetch all authors', async () => {
    let allAuthors = await getAllAuthors()
    expect(allAuthors).toHaveLength(9);
  })
})