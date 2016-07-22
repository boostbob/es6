const Chance = require('chance');
let chance = new Chance();

console.log(chance.hash({length: 8}));

console.log(chance.pickone(['export_review_book', 'see_all_answer']));
console.log(chance.weighted(['export_review_book', 'see_all_answer'], [1, 1]));

console.error(chance.guid());