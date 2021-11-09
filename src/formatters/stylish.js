const currentIndent = (depth, intend = 4) => ' '.repeat(intend + depth);
const stringify = (someEntity, spaceCount) => {
  const iter = (current, depth) => {
    if (typeof current !== 'object') {
      return `${current}`;
    }
    if (current === null) { return null; }
    const lines = Object
      .entries(current)
      .map(([key, value]) => `${currentIndent(depth + 4)}${key}: ${iter(value, depth + 4)}`);
    return [
      '{',
      ...lines,
      `${currentIndent(depth)}}`,
    ].join('\n');
  };

  return iter(someEntity, spaceCount);
};

const stylish = (data) => {
  const iter = (tree, depth) => tree.map((node) => {
    switch (node.type) {
      case 'add':
        return `${currentIndent(depth - 2)}+ ${node.key}: ${stringify(node.val, depth)}\n`;
      case 'remove':
        return `${currentIndent(depth - 2)}- ${node.key}: ${stringify(node.val, depth)}\n`;
      case 'same':
        return `${currentIndent(depth - 2)}  ${node.key}: ${stringify(node.val, depth)}\n`;
      case 'updated':
        return `${currentIndent(depth - 2)}- ${node.key}: ${stringify(node.val1, depth)}\n${currentIndent(depth - 2)}+ ${node.key}: ${stringify(node.val2, depth)}\n`;
      case 'recursion':
        return `${currentIndent(depth)}${node.key}: {\n${iter(node.children, depth + 4).join('')}${currentIndent(depth)}}\n`;
      default:
        throw new Error(`Этого типа не существует: ${node.type}`);
    }
  });
  return `{\n${iter(data, 0).join('')}}`;
};

export default stylish;
