Object.defineProperty(global, '__stack', {
  get: function(){
    var orig = Error.prepareStackTrace;
    Error.prepareStackTrace = function(_, stack){ return stack; };
    var err = new Error;
    Error.captureStackTrace(err, arguments.callee);
    var stack = err.stack;
    Error.prepareStackTrace = orig;
    return stack;
  }
});

Object.defineProperty(global, '__line', {
  get: function(){
    return __stack[1].getLineNumber();
  }
});

Object.defineProperty(global, '__file', {
  get: function(){
    return __stack[1].getFileName().split('/').slice(-1)[0];
  }
});

function _elog(data) {
  console.error(data);
}

function _ilog(data) {
  console.log(data);
}

function plog(...items) {
  console.log(__filename + ':' + __line);
  console.log(__file + ':' + __line);
  
  items.forEach(function(item) {
    if (item instanceof Error) _elog(item);
    else _ilog(item);
  });
}

plog('test', 'hallo', {a: 1, b: 2}, new Object({a: 1}));