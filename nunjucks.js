var nunjucks = require('nunjucks');

var data = { 
  username: 'Bob Wang', 
  person: {
    age: 35,
    bio: 'born to try'
  }
};

// 从字符串编译
//var str = 'fullname = {{username}}，age = {{person.age}}, bio = {{person.bio}}';
//var res = nunjucks.renderString(str, data);

// 从文件编译
var res = nunjucks.render('./person.njk', data);
console.error(res);