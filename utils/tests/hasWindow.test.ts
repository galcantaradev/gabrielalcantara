import { hasWindow } from '../hasWindow';

describe('hasWindow.test.ts', () => {
  it('window should be defined', () => {
    expect(hasWindow()).toBeTruthy();
  });
});
