var fs = require('fs');
var pdf = require('html-pdf');
var html = fs.readFileSync('/tmp/test.html', 'utf8');
var options = { format: 'Letter' };

pdf.create(html, options).toFile('/tmp/test.pdf', function(err, res) {
  if (err) return console.log(err);
  console.log(res);
});