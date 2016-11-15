var crypto = require('crypto'),
	algorithm = 'aes-256-gcm', //算法
	password = 'uscpZkyMW04jBCAghjKSLYYJYKQcpLWj', //加密规则
	iv = 'zFdr80ouDsCx' //偏移向量
 
function encrypt(text) {
	var cipher = crypto.createCipheriv(algorithm, password, iv)
	var encrypted = cipher.update(text, 'utf8', 'hex') //更新内容
	encrypted += cipher.final('hex'); //返回剩余内容结合更新内容
	var tag = cipher.getAuthTag();
	
	return encrypted;
}
 
function decrypt(encrypted) {
	var decipher = crypto.createDecipheriv(algorithm, password, iv)
	var dec = decipher.update(encrypted, 'hex', 'utf8')
	return dec;
}
 
var hw = encrypt("hello world 中文呢?");
console.log(hw);
console.log(decrypt(hw));