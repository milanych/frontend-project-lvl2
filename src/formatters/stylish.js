const indent = (depth, spaceCount = 4) => ' '.repeat(spaceCount + depth);
const stringify = (data, treeDepth) => {
  if (typeof data !== 'object') {
    return `${data}`;
  }
  if (data === null) { return null; }
  const lines = Object
    .entries(data)
    .map(([key, value]) => `${indent(treeDepth + 4)}${key}: ${stringify(value, treeDepth + 4)}`);
  return [
    '{',
    ...lines,
    `${indent(treeDepth)}}`,
  ].join('\n');
};
const stylish = (innerTree) => {
  const iter = (tree, depth) => tree.map((node) => {
    const getValue = (value, sign) => `${indent(depth - 2)}${sign} ${node.key}: ${stringify(value, depth)}\n`;
    switch (node.type) {
      case 'add':
        return getValue(node.val, '+');
      case 'remove':
        return getValue(node.val, '-');
      case 'same':
        return getValue(node.val, ' ');
      case 'updated':
        return `${getValue(node.val1, '-')}${getValue(node.val2, '+')}`;
      case 'recursion':
        return `${indent(depth)}${node.key}: {\n${iter(node.children, depth + 4).join('')}${indent(depth)}}\n`;
      default:
        throw new Error(`Этого типа не существует: ${node.type}`);
    }
  });
  return `{\n${iter(innerTree, 0).join('')}}`;
};

export default stylish;
