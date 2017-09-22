// nvm use 8.5.0
// node --expose-gc leak.js
var memwatch = require('memwatch-next');

memwatch.on('leak', function(info) {
  console.log('leak event');
  console.error(info);
});

memwatch.on('stats', function(stats) {
    console.log('stats event');
  console.error(stats);
});

var person = {name: 'zhangsan', age: 20};
person.age++;
console.error(person);

global.gc();