import stringify, { currentIndent } from './stringify.js';

const stylish = (data) => {
  const iter = (tree, depth) => tree.map((node) => {
    if (node.type === 'add') {
      return `${currentIndent(depth - 2)}+ ${node.key}: ${stringify(node.val, depth)}\n`;
    }
    if (node.type === 'remove') {
      return `${currentIndent(depth - 2)}- ${node.key}: ${stringify(node.val, depth)}\n`;
    }
    if (node.type === 'same') {
      return `${currentIndent(depth - 2)}  ${node.key}: ${stringify(node.val, depth)}\n`;
    }
    if (node.type === 'updated') {
      return `${currentIndent(depth - 2)}- ${node.key}: ${stringify(node.val1, depth)}\n${currentIndent(depth - 2)}+ ${node.key}: ${stringify(node.val2, depth)}\n`;
    }
    return `${currentIndent(depth)}${node.key}: {\n${iter(node.children, depth + 4).join('')}${currentIndent(depth)}}\n`;
  });
  return `{\n${iter(data, 0).join('')}}`;
};

export default stylish;
