// 装饰器可以参数化，就可以变装饰器的行为
function testable(isTestable) {
  return function(target) {
    target.isTestable = isTestable;
  }
}

@testable(true)
class MyTestableClass {}
// MyTestableClass.isTestable // true

@testable(false)
class MyClass {}
// MyClass.isTestable // false
