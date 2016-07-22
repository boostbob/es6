var shortid = require('shortid');
//shortid.characters('ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ①②③④⑤⑥⑦⑧⑨⑩⑪⑫');

shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');

shortid.seed(new Date().getTime());

var x = 0;
var array = [];

while(x++ < 1000) {
	var code = shortid.generate();
	console.log(code);
	
	if (code.indexOf("-") < 0 && code.indexOf("_") < 0)
		array.push(code);
}

console.log(array.length * 100 / 1000.0);

// urn42AJORMi
// 9r34khGORM1
// console.log(array.join(" "));