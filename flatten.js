var _ = require('underscore');

// flatten 合并多个数组会有问题? 写写法问题!!!
console.error(_.flatten(0, [1, 2])); // []
console.error(_.flatten([0], [1, 2])); // [ 0 ]

// 注意参数值是1个素组
console.error(_.flatten([1, [2], [3, [[4]]]]));

// shallow mode: the array will only be flattened a single level
console.error(_.flatten([1, [2], [3, [[4]]]], true));