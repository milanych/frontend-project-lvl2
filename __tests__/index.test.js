import genDiff from '../src/index.js';

test('genDiff', () => {
  expect(genDiff(file1, file2)).toBe(null);
});
