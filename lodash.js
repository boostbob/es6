const _ = require('lodash');

let orderGoods = [
	{goods_id: 1, order_id: 1000},
	{goods_id: 2, order_id: 1001},
	{goods_id: 1, order_id: 1002},
];

let result = _.groupBy(orderGoods, (item) => { return item.goods_id; });
console.log(result);

_.forEach(result, (orderGoodsArray, goodsId) => {
	console.log(goodsId);
});

console.log('跳过还是终止....');

_.each([1,2,3], function(v){
	// 跳过，不是 return false，打印 1 3
	if (v==2) return;
	console.log(v);
});

_.each([1,2,3], function(v){
	// 终止遍历，只会打印 1，不会打印 3
	if (v==2) return false;
	console.log(v);
});


let array = ['a', 'c'];
console.log(_.pull(['a', 'c', 'b', 'a', 'c'], ...array));

console.log(_.random(0, 12))