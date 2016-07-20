// 当前作用域总是能够访问外部作用域中的变量
// 函数是 JavaScript 中唯一拥有自身作用域的结构，因此闭包的创建依赖于函数
function Counter(start) {
	var count = start;
	
	return {
		increment: function() {
			// 对外部作用域 Counter 的引用
			count++;
		},

		get: function() {
			// 对外部作用域 Counter 的引用
			return count;
		}
	}
}

var foo = Counter(4);
foo.increment();
console.log(foo.get());

// 不会改变定义在 Counter 作用域中的 count 变量的值
// foo.hack 没有 定义在那个作用域内
// 将会创建或者覆盖全局变量 count
var foo = new Counter(4);
foo.hack = function() {
	count = 1337;
};

foo.increment();
console.log(foo.get());


// 错误
for(var i = 0; i < 10; i++) {
	setTimeout(function() {
		console.log(i);  // always 10
	}, 1000);
}

for(var i = 0; i < 10; i++) {
	// 匿名函数马上执行，完成对i的拷贝
	(function(e) {
		setTimeout(function() {
			console.log(e);  
		}, 1000);
	})(i);
}