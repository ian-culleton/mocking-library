import { describe, expect, it } from 'vitest';

describe('authors data service', () => {
  it('Should fetch all authors', async () => {
    let allAuthors = await fetch('/authors');
    allAuthors = await allAuthors.json();
    expect(allAuthors).toHaveLength(9);
  })
})