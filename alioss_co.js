var OSS = require('ali-oss');
var co = require('co');

var client = new OSS({
	region: 'oss-cn-shanghai',
	accessKeyId: 'xxx',
	accessKeySecret: 'xxx',
	bucket: 'moreteacher-development'
});

//co(function *() {
//	var result = yield client.list();
//	console.log(result.objects);
//});

co(function *() {
	var val = yield client.get('test/fish_underwater_swimming_beautiful_65130_1920x1080.jpg');
//	console.log(val.res.requestUrls[0]);
	return val;
}).then(val => {
	console.log(val.res.requestUrls[0]);
});
