import { describe, expect, it } from 'vitest';
import { getAllPublishers } from './publishers';
import './mockServer'

describe('publishers data service', () => {
  it('Should fetch all publishers', async () => {
    let allPublishers = await getAllPublishers()
    expect(allPublishers).toHaveLength(9);
  })
})