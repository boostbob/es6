var fs = require("fs");
var JSZip = require("jszip");
var zip = new JSZip();

zip.file('hello.txt', 'Hello World!');

zip.generateNodeStream({type: 'nodebuffer', streamFiles: true})
.pipe(fs.createWriteStream('/tmp/test.zip'))
.on('finish', function () {
  // JSZip generates a readable stream with a "end" event,
  // but is piped here in a writable stream which emits a "finish" event.
  console.log('done');
});