// https://github.com/mroderick/pubsubjs

var PubSub = require('pubsub-js');

var token = PubSub.subscribe('MY TOPIC', function(msg, data) {
  console.log(msg, data);
});

PubSub.publish('MY TOPIC', 'hello world');
