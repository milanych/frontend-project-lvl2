import stylish from './stylish.js';
import plain from './plain.js';

export default (getDiff, format) => {
  if (format === 'stylish') {
    return stylish(getDiff);
  }
  if (format === 'plain') {
    return plain(getDiff);
  }
  if (format === 'json') {
    return JSON.stringify(getDiff);
  }
  throw new Error(`Формат не поддерживается: ${format}`);
};
