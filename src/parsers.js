import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export default (file) => {
  const filename = fs.readFileSync(path.resolve(file), 'utf-8');
  const format = path.extname(file);
  let parse;
  if (format === '.json') {
    parse = JSON.parse(filename);
  } else if (format === '.yml' || format === '.yaml') {
    parse = yaml.load(filename);
  }
  return parse;
};
