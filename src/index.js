import fs from 'fs';
import path from 'path';
import makeParse from './parsers.js';
import format from './formatters/index.js';
import buildTree from './buildTree.js';

const getData = (filename) => fs.readFileSync(path.resolve(process.cwd(), filename.trim()), 'utf-8');
const extractFormat = (filename) => path.extname(filename).slice(1);

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const file1format = extractFormat(filepath1);
  const file2format = extractFormat(filepath2);
  const file1data = getData(filepath1);
  const file2data = getData(filepath2);
  const file1 = makeParse(file1format, file1data);
  const file2 = makeParse(file2format, file2data);
  const tree = buildTree(file1, file2);
  const formatDiff = format(tree, formatName);
  return formatDiff;
};
export default genDiff;
