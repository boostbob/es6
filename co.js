// https://github.com/tj/co

var co = require('co');

function onerror(err) {
	// log any uncaught errors
	// co will not throw any errors you do not handle!!!
	// HANDLE ALL YOUR ERRORS!!!
	console.error(err.stack);
}

co(function *() {
	// yield any promise
	var result = yield Promise.resolve(true);
}).catch(onerror);

co(function *() {
	// resolve multiple promises in parallel
	var a = Promise.resolve(1);
	var b = Promise.resolve(2);
	var c = Promise.resolve(3);
	
	var res = yield [a, b, c];
	console.log(res);
	// => [1, 2, 3]
}).catch(onerror);

co(function *() {
	try {
		yield Promise.reject(new Error('boom'));
	} catch (err) {
		console.error(err.message); // "boom"
 	}
}).catch(onerror);

// 
co(function *() {
	var result = yield Promise.reject('boom');
	console.log('never goes here');
}).catch((err) => {
	console.error('reject triggered');
});

// 把 generator 函数包装成返回 promise 的函数
var fn = co.wrap(function *(val) {
	return yield Promise.resolve(val);
});

fn(true).then(function (val) {
	console.log(val);
});