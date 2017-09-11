var crypto = require('crypto');

var str = '123456';
var md5sum = crypto.createHash('md5');
md5sum.update(str);
str = md5sum.digest('hex');
console.error(str);