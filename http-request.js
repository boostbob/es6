var http = require('http-request');

http.get('http://baidu.com', function (err, res) {
  if (err) {
    console.error(err);
    return;
  }
  
  console.log(res.code, res.headers, res.buffer.toString());
});