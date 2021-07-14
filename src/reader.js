import fs from 'fs';
import path from 'path';

const readJSON = (file) => {
  const readFile = fs.readFileSync(path.resolve(file), 'utf-8');
  const parseFile = JSON.parse(readFile);
  return parseFile;
};
export default readJSON;
