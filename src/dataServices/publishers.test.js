import { describe, expect, it } from 'vitest';

describe('publishers data service', () => {
  it('Should fetch all publishers', async () => {
    let allPublishers = await fetch('/publishers');
    allPublishers = await allPublishers.json();
    expect(allPublishers).toHaveLength(9);
  })
})