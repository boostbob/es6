var g = function* () {
  try {
    yield;
  } catch (e) {
    // 如果内部不捕获就会外部捕获
    console.log('内部捕获', e);
  }
};

var i = g();
i.next();

try {
  i.throw('a');
  i.throw('b');
} catch (e) {
  console.log('外部捕获', e);
}