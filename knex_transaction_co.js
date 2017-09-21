var Promise = require('bluebird');
var co = require('co');

var knex = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '',
    database : 'test'
  }
});

knex.transaction(co.wrap(function *(trx) {
  // try {
    let result = yield trx.insert({ name: 'Javascripts' }).into('catalogues');
    return result
  // } catch (err) {
  //   console.error(err);
  // }
}))
.catch((err) => console.error(err));