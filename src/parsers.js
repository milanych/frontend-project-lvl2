import yaml from 'js-yaml';

export default (format, data) => {
  if (format === '.json') {
    return JSON.parse(data);
  }
  if (format === '.yml' || format === '.yaml') {
    return yaml.load(data);
  }
  throw new Error(`Not supported format: ${format}`);
};
