var crypto = require('crypto');
var fs = require('fs');

// 打印支持的hash算法
// console.log(crypto.getHashes());

function hashAlgorithm(algorithm){
	var s1 = new Date();

	var filename = "package.json";
	var txt = fs.ReadStream(filename);

	var shasum = crypto.createHash(algorithm);
	txt.on('data', function(d) {
		shasum.update(d);
	});

	txt.on('end', function() {
		var d = shasum.digest('hex');
		var s2 = new Date();

		console.log(algorithm + ',' + (s2 - s1) + 'ms,' + d);
	});
}

function doHash(hashs){
	hashs.forEach(function(name){
		hashAlgorithm(name);
	})
}

var algs = crypto.getHashes();
doHash(algs);