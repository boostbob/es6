// https://github.com/janl/mustache.js
const Mustache = require('mustache');

var view = {
  "beatles": [
    { "firstName": "John", "lastName": "Lennon" },
    { "firstName": "Paul", "lastName": "McCartney" },
    { "firstName": "George", "lastName": "Harrison" },
    { "firstName": "Ringo", "lastName": "Starr" }
  ],
  "name": function () {
    return this.firstName + " " + this.lastName;
  }
}

var output = Mustache.render("{{#beatles}}* {{name}}\n{{/beatles}}", view);
console.error(output);

var view2 = {
  "name": "Tater",
  "bold": function () {
    return function (text, render) {
      // 参数 text 是没有编译的节点内容 
      console.error(text);
      return "<b>" + render(text) + "</b>";
    }
  }
};

var output2 = Mustache.render("{{#bold}}Hi {{name}}.{{/bold}}", view2);
console.error(output2);