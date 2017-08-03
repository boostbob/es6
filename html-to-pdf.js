var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('/Users/wangbo//Desktop/test.html', 'utf8');
var options = {format: 'A4'};

pdf.create(html, options).toFile('/Users/wangbo//Desktop/test.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res);
});