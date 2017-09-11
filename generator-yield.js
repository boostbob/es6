function* foo(x) {
  var y = 2 * (yield (x + 1));
  var z = yield (y / 3);
  return (x + y + z);
}

var a = foo(5);

console.log(a.next())
console.log(a.next(12))
console.log(a.next(13))  // 5+24+13