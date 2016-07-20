var fetch = require('node-fetch');

function* gen(){
	// 中断 here
	var url = 'https://api.github.com/users/github';
	// 中断 here，fetch 返回的是个 promise
	var result = yield fetch(url);
	
	// 调用 next 后恢复
	console.log(result.bio);
}

var g = gen();
var result = g.next();

result.value.then(function(data){
	return data.json();
}).then(function(data){
	g.next(data);
	console.log(g.next(data));
	console.log(g.next(data));
	console.log(g.next(data));
});