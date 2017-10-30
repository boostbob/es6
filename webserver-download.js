var http = require('http'),
  fs = require('fs'),
  path = require('path'),
  util = require('util');

http.createServer(function(request, response) {
  var file = 'djbetas.mp3';
  var filePath = path.join(__dirname, file);
  var stat = fs.statSync(filePath);

  fs.exists(filePath, function(exists) {
    if (exists) {
      response.writeHead(200, {
        "Content-Type": "application/octet-stream",
        'Content-Length': stat.size,
        "Content-Disposition": "attachment; filename=" + file 
      });
      
      // 关键
      fs.createReadStream(filePath).pipe(response);
    } else {
      response.writeHead(400, {"Content-Type": "text/plain"});
      response.end("ERROR File does NOT Exists");
    }
  });
}).listen(2000);