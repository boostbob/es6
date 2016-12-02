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

console.log(moment().add(-1, 'd').format('YYYY-MM-DD HH:mm:ss'));

console.log(moment.unix(1318781876).format('YYYY-MM-DD HH:mm:ss'));

console.log(moment().unix());

'use strict';

class TimeProgress {
  /**
	* 以当前时间为标准，计算到期进度
	* 
	* @static
	* @param {any} start 字符串或者 moment 构造的对象，moment 是可以重复包装的
	* @param {any} end 字符串或者 moment 构造的对象，moment 是可以重复包装的
	* @returns
	*/
	static currentProgress(start, end) {
	 let now = moment().unix();
	 start   = moment(start).unix();
	 end     = moment(end).unix();

	 if (start > now) return 0;
	 if (now > end) return 100;
	  return ((now - start) * 100.0 / (end - start)).toFixed(2);
  }

}

console.log(TimeProgress.currentProgress('2016-01-01', '2016-12-31'));

console.log(moment.unix(0).format('YYYY-MM-DD'));

console.log(moment().unix());
console.log(moment().valueOf());

console.log(moment('2016-08-04T08:43:50.403Z').format('YYYY-MM-DD'));
console.log(moment(null || moment()).format('YYYY-MM-DD'));


console.log(moment.unix(1472629313).format('YYYY-MM-DD HH:mm:ss'));
console.log(moment.unix(1524585599).format('YYYY-MM-DD HH:mm:ss'));

console.error(moment('2016-09-15 00:00:00').format('YYYY-MM-DD HH:mm:ss'));

//console.log(moment.unix(1476342865));
//console.log(moment.unix(1380000000));
console.log(moment('2016-11-12 10:00:00').valueOf());
console.log(moment.unix(1481299199).format('YYYY-MM-DD HH:mm:ss'));

console.log(moment().valueOf());