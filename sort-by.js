var _ = require('underscore');

var array = [{num: 2}, {num: 1}];
console.error(_.sortBy(array, 'num'));