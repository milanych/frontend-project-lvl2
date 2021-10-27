import _ from 'lodash';

const buildTree = (obj1, obj2) => {
  const keys = Object.keys({ ...obj1, ...obj2 });
  const sortedKeys = _.sortBy(keys);
  return sortedKeys.map((key) => {
    if (!_.has(obj1, key)) {
      return { type: 'add', key, val: obj2[key] };
    }
    if (!_.has(obj2, key)) {
      return { type: 'remove', key, val: obj1[key] };
    }
    if (_.isPlainObject(obj1[key]) && _.isPlainObject(obj2[key])) {
      return { type: 'recursion', key, children: buildTree(obj1[key], obj2[key]) };
    }
    if (!_.isEqual(obj1[key], obj2[key])) {
      return {
        type: 'updated', key, val1: obj1[key], val2: obj2[key],
      };
    }
    return { type: 'same', key, val: obj1[key] };
  });
};

export default buildTree;
