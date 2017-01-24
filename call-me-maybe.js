var maybe = require("call-me-maybe");

// callback 无效就返回 promise，否则返回 undefined
// promise => callback(null, result) or callback(err)

module.exports = function asyncFunc(callback) {
	return maybe(callback, new Promise(function(resolve, reject) {
		// 
	}));
}