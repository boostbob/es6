function testable(target) {
  // 添加实例属性
  target.prototype.isTestable = true;
}

@testable
class MyTestableClass {}

let obj = new MyTestableClass();
// obj.isTestable // true
