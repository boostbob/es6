var str = "abc哈哈";
var re = /^[\u4E00-\u9FA5]+$/;

if (!re.test(str)) {
	console.log('不全是中文');
	
	if (escape(str).indexOf("%u") < 0) {
		console.log("没有包含中文");
	}
}