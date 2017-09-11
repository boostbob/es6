// Proxy 修改默认的行为
// Reflect 总是访问内在的行为

var obj = new Proxy({}, {
  get: function (target, key, receiver) {
    console.log(`getting ${key}!`);
    return Reflect.get(target, key, receiver);
  },
  set: function (target, key, value, receiver) {
    console.log(`setting ${key}!`);
    return Reflect.set(target, key, value, receiver);
  }
});

// setting count!
obj.count = 1; 

// getting count!
// setting count!
++obj.count;

// getting count!
console.log('---');
console.log(obj.count);