// A small tool to see node.js errors with less clutter
var PrettyError = require('pretty-error');
var pe = new PrettyError();

var renderedError = pe.render(new Error('Some error message'));
console.log(renderedError);