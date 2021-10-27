const plain = (data) => {
  const iter = (tree, parent) => tree
    .filter((node) => node.type !== 'same')
    .map((node) => {
      const property = parent ? `${parent}.${node.key}` : node.key;
      const isObject = (obj) => {
        if (typeof obj === 'object' && obj !== null) {
          return '[complex value]';
        } if (typeof obj === 'string') {
          return `'${obj}'`;
        } if (obj === null) {
          return null;
        }
        return obj;
      };
      if (node.val === null) { return null; }
      if (node.type === 'add') {
        return `Property '${property}' was added with value: ${isObject(node.val)}`;
      }
      if (node.type === 'remove') {
        return `Property '${property}' was removed`;
      }
      if (node.type === 'updated') {
        return `Property '${property}' was updated. From ${isObject(node.val1)} to ${isObject(node.val2)}`;
      }
      return `${iter(node.children, property).join('\n')}`;
    });
  return `${iter(data, 0).join('\n')}`;
};

export default plain;
