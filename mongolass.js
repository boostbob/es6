const Mongolass = require('mongolass');
const Schema = Mongolass.Schema;
const mongolass = new Mongolass();

mongolass.connect('mongodb://localhost:27017/test');

const UserSchema = new Schema('UserSchema', {
  name: { type: 'string' },
  age: { type: 'number' }
});

// table: users
const User = mongolass.model('User', UserSchema);

User
  .insertOne({ name: 'zhangsan', age: 25 })
  .exec()
  .then(console.log)
  .catch(function (e) {
    console.error(e);
    console.error(e.stack);
  });
  
User.find().exec().then(res => console.log(res));
