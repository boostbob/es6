var request = require('then-request');
var Promise = require('bluebird');

var result = null;

result = request('GET', 'http://baidu.com').done(function (res) {
  console.log('1:' + res.getBody());
});

Promise.coroutine(function *() {
  result = yield request('GET', 'http://baidu.com');
  console.error('2:' + result.getBody('utf8'));
})();