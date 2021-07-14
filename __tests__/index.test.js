import { isNull } from '../src/index.js';

test('isNull', () => {
  expect(isNull(null)).toBe(null);
  expect(isNull(1)).not.toBe(null);
});
