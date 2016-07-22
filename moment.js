var moment = require('moment');
var dt = moment('2016-12-31 12:01:01');

console.log(dt > new Date());

console.log(typeof(undefined));
console.log(typeof(xxx));

console.log("asdsad asdsd ddd".split(","));

class Person {
	say() {
		console.log("hi");
		return true;
	}
}

let p = new Person();
console.log(p.say.call());


console.log(moment().format('YYYY-MM-DD HH:mm:ss'));