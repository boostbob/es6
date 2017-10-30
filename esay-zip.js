// 依赖于 JSZip 库
var EasyZip = require('easy-zip').EasyZip;
var zip = new EasyZip();

//add text  
zip.file('hello.txt', 'Hello World!');

zip.writeToFile('/tmp/test.zip', function() {
  console.error('done');
});