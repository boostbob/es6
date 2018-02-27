//var proto = {};
//var proto = function () {};
var proto = class {
  get name() { return 'zhangsan'; }
};
var obj = Object.create(proto);

console.error(typeof proto);
console.error(Object.getPrototypeOf(obj) === proto);
console.error(proto.name); // proto
