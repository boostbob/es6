var http = require('http'),
  fs = require('fs'),
  path = require('path');

var JSZip = require("jszip");
var zip = new JSZip();

http.createServer(function(request, response) {
  var file = "/tmp/test.zip";
  
  zip.file('hello.txt', 'Hello World!');
  
  zip
  .generateNodeStream({type: 'nodebuffer', streamFiles: true})
  .pipe(fs.createWriteStream(file))
  .on('finish', function () {
    var stat = fs.statSync(file);
    
    response.writeHead(200, {
      "Content-Type": "application/octet-stream",
      'Content-Length': stat.size,
      "Content-Disposition": "attachment; filename=" + path.basename(file)
    });
    
    fs.createReadStream(file).pipe(response);    
  }); 
}).listen(2000);