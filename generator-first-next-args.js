// 解决 next 第一次无法传值的问题
// generator 函数拿到后就暂停，需要调用 next 启动
function wrapper(generatorFunction) {
  return function (...args) {
    let generatorObject = generatorFunction(...args);
    // 跳过第一次 next 忽略参数的情况
    generatorObject.next();
    return generatorObject;
  };
}

const wrapped = wrapper(function* () {
  console.log(`First input: ${yield}`);
  return 'DONE';
});

wrapped().next('hello!');
// First input: hello!