var Redis = require('ioredis');
var redis = new Redis();

redis.set('key', 1, 'NX', 'EX', 60).
  then(res => {
    console.error(res);
  });