var fs = require('fs');
var archiver = require('archiver');

var output = fs.createWriteStream('/Users/wangbo/Desktop/test.zip');
var archive = archiver('zip', {
  zlib: {level: 9}
});

archive.pipe(output);
archive.glob('/Users/wangbo/Desktop/*.pdf');
archive.finalize();

//output.on('close', function() {
//  console.log(archive.pointer() + ' total bytes');
//  console.log('done');
//});

var onSync = Meteor.wrapAsync(output.on, output);
onSync('close');
console.log('done');