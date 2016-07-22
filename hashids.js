var Hashids = require('hashids'),
hashids = new Hashids("this is my salt", 10);

console.log(hashids.encode(1,2,3));
console.log(hashids.decode('LGlaHquq06'));
	
var x = 0;
while (x++ < 10) {
	//	console.log(hashids.encode(new Date().getTime()));
	console.log(hashids.encode(x));
}