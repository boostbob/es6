class RangeIterator {
	constructor(start, stop) {
		this.value = start;
		this.stop = stop;
	}

	[Symbol.iterator]() { return this; }

	next() {
		var value = this.value;
		
		if (value < this.stop) {
			this.value++;
			return {done: false, value: value};
		} else {
			return {done: true, value: undefined};
		}
	}
}

// 返回一个新的迭代器，可以从start到stop计数
function range(start, stop) {
	return new RangeIterator(start, stop);
}

// for-in循环用来遍历对象属性
// for-of循环用来遍历数据—例如数组中的值
for(let x of range(1,100)) {
	console.log(x);
}