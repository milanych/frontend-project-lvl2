import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => readFileSync(getFixturePath(filename), 'utf-8');

test('plain', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');
  const result = readFile('resultplain.txt');

  expect(genDiff(file1, file2, 'plain')).toBe(result);
});

const cases = [[getFixturePath('file1.json'), getFixturePath('file2.json'), readFile('result.txt')],
  [getFixturePath('file1.yml'), getFixturePath('file2.yml'), readFile('resultyml.txt')]];

test.each(cases)(
  '%f',
  (firstArg, secondArg, expectedResult) => {
    const result = genDiff(firstArg, secondArg);
    expect(result).toEqual(expectedResult);
  },
);
