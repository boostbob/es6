var OSS = require('ali-oss').Wrapper;

var client = new OSS({
	region: 'oss-cn-shanghai',
	accessKeyId: 'xxx',
	accessKeySecret: 'xxx',
	bucket: 'moreteacher-development'
});

client.list().then(function(result) {
	// console.log(result.objects);
	result.objects.forEach((item, _) => {
		// console.error(item.url);
	});
}).catch(function(err) {
	console.error(err);
});

//client.put('test/fish_underwater_swimming_beautiful_65130_1920x1080.jpg', '/Users/wangbo/Pictures/fish_underwater_swimming_beautiful_65130_1920x1080.jpg').then(function (val) {
//	console.log(val.res);
//	return client.get('object');
//}).then(function (val) {
//	console.log(val.res);
//	console.log(val.content.toString());
//});

client.get('test/fish_underwater_swimming_beautiful_65130_1920x1080.jpg').then((val) => {
	console.log(val.res.requestUrls[0]);
});