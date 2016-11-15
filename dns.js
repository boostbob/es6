var dns = require('dns');

// 使用操作系统底层的 DNS 服务解析(不访问网络)
dns.lookup('payment.yiqijiao.net', function (err, addresses, family) {
	console.log('IP地址：%s，协议版本：%s', addresses, family);
});

// 连接到 DNS 服务器解析域名(访问网络)
dns.resolve4('payment.yiqijiao.net', function (err, addresses) {
	if (err) throw err;
	console.log('IP地址：: ' + JSON.stringify(addresses));
});