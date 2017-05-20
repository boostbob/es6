// A powerful and customizable logging library for node.js
// var logger = require('tracer').dailyfile({root:'.', maxLogFiles: 10, allLogsFileName: 'myAppName'});

var logger = require('tracer').colorConsole();

logger.log('hello');
logger.trace('hello', 'world');
logger.debug('hello %s',  'world', 123);
logger.info('hello %s %d',  'world', 123, {foo:'bar'});
logger.warn('hello %s %d %j', 'world', 123, {foo:'bar'});
logger.error('hello %s %d %j', 'world', 123, {foo:'bar'}, [1, 2, 3, 4], Object);