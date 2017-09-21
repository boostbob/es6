var Promise = require('bluebird');
var knex = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '',
    database : 'test'
  }
});

knex.transaction(function(trx) {
  var books = [
    {title: 'Canterbury Tales'},
    {title: 'Moby Dick'},
    {title: 'Hamlet'}
  ];

  return trx
    .insert({name: 'Old Books'}, 'id')
    .into('catalogues')
    .then(function(ids) {
      throw new Error('can rollback?');
      // return Promise.reject('can rollback?');
      
      return Promise.map(books, function(book) {
        book.catalogue_id = ids[0];
        return trx.insert(book).into('books');
      });
    });
})
.then(function(inserts) {
  console.log(inserts.length + ' new books saved.');
})
.catch(function(error) {
  // If we get here, that means that neither the 'Old Books' catalogues insert,
  // nor any of the books inserts will have taken place.
  console.error(error);
});