String.prototype.replaceAll = function (search, replacement) {
  var target = this;
  return target.replace(new RegExp(search, 'g'), replacement);
};

var str = "this is a this test this".replaceAll("this", "that");
console.error(str);