import fs from 'fs';
import path from 'path';
import parser from './parsers.js';
import format from './formatters/index.js';
import buildTree from './buildTree.js';

const data = (file) => fs.readFileSync(path.resolve(file), 'utf-8');
const dataFormat = (file) => path.extname(file);

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const file1format = dataFormat(filepath1);
  const file2format = dataFormat(filepath2);
  const file1data = data(filepath1);
  const file2data = data(filepath2);
  const file1 = parser(file1format, file1data);
  const file2 = parser(file2format, file2data);
  const tree = buildTree(file1, file2);
  return format(tree, formatName);
};
export default genDiff;
