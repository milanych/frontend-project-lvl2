import stylish from './stylish.js';
import plain from './plain.js';

export default (getDiff, format) => {
  if (format === 'stylish') {
    return stylish(getDiff);
  }
  if (format === 'plain') {
    return plain(getDiff);
  }
  throw new Error(`Формат не поддерживается: ${format}`);
};
