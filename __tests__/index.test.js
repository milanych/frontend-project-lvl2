import { test, expect } from '@jest/globals';
import genDiff from '../src/index.js';

test('genDiff', () => {
  expect(genDiff(6)).toBe(3);
});
