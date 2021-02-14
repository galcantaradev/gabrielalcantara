import { formattedTags } from '../formattedTags';

describe('formattedTags.test.ts', () => {
  it('should format one tag', () => {
    const formatted = formattedTags(['react']);

    expect(formatted).toEqual('react');
  });

  it('should format more than one tag', () => {
    const formatted = formattedTags(['react', 'next.js']);

    expect(formatted).toEqual('react, next.js');
  });
});
