let parseString = require('xml2js').parseString;

let xml = `
<xml>
	<ToUserName><![CDATA[toUser]]></ToUserName>
	<FromUserName><![CDATA[FromUser]]></FromUserName>
	<CreateTime>123456789</CreateTime>
	<MsgType><![CDATA[event]]></MsgType>
	<Event><![CDATA[subscribe]]></Event>
</xml>
`;

xml = `
<xml>
	<ToUserName><![CDATA[toUser]]></ToUserName>
 	<FromUserName><![CDATA[fromUser]]></FromUserName> 
 	<CreateTime>1348831860</CreateTime>
 	<MsgType><![CDATA[text]]></MsgType>
 	<Content><![CDATA[this is a test]]></Content>
 	<MsgId>1234567890123456</MsgId>
</xml>
`;

const formatMessage = function (result) {
	var message = {};
	if (typeof result === 'object') {
		for (var key in result) {
			if (!(result[key] instanceof Array) || result[key].length === 0) {
				continue;
			} 
			if (result[key].length === 1) {
				var val = result[key][0];
				if (typeof val === 'object') {
					message[key] = formatMessage(val);
				} else {
					message[key] = (val || '').trim();
				}
			} else {
				message[key] = [];
				result[key].forEach(function (item) {
					message[key].push(formatMessage(item));
				});
			}
		}
		return message;
	} else {
		return result;
	}
};

parseString(xml, {trim: true}, function (err, result) {
	console.dir(result);
	console.dir(formatMessage(result));
});