var mime = require('mime-types');

mime.lookup('json')             // 'application/json'
mime.lookup('.md')              // 'text/markdown'
mime.lookup('file.html')        // 'text/html'
mime.lookup('folder/file.js')   // 'application/javascript'
mime.lookup('folder/.htaccess') // false

console.error(mime.lookup('mp3'));
console.error(mime.lookup('mp4'));
console.error(mime.lookup('xml'));
console.error(mime.lookup('test.css'));