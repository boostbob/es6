var Handlebars = require('handlebars');

var source = "<div class='entry'> \
  <h1>{{title}}</h1> \
  <div class='body'> \
    {{body}} \
  </div> \
</div>";

var template = Handlebars.compile(source);
var context  = {title: "My New Post", body: "This is my first post!"};
var html     = template(context);
console.error(html);