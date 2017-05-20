// 假设我们这里有个数据模型
var model = {};

// 我们来对它进行监听
Object.observe(model, function(changes) {
	// 这个异步回调函数将被执行
	changes.forEach(function(change) {
		// 我们知道了都发生了哪些变化
		console.log(change.type, change.name, change.oldValue);
	});
});

model.age = 20;
model.city = 'meishan';
model.city = 'chengdu';