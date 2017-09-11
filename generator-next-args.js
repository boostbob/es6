function* foo(x) {
  // 遇到 yield 则暂停，后面的表达式被计算当做 value 的值
  // next 传的值的是 yield 暂停继续执行的结果
  // 第一个 next 传的参数总是被忽略掉
  var y = 2 * (yield (x + 1));
  var z = yield (y / 3);
  return (x + y + z);
}

var a = foo(5);

console.log(a.next())
console.log(a.next(12))
console.log(a.next(13))  // 5 + 24 + 13