class Goods {
	construct() {
		concole.log("goods construct");
	}
}

var goodsHandler = {
	// 构造器 
	construct(target, args, newTarget) {
		if (args[0] == 1)
			return new Object("obj");
		if (args[0] == 2)
			return new String("str");
	}
}

var ProxyGoods = new Proxy(Goods, goodsHandler);
var pg = new ProxyGoods(1);
console.log(pg instanceof String);
console.log(pg);