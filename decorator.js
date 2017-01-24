import 'babel-register';
//import 'babel-polyfill';

function testable(target) {
  target.isTestable = true;
}

@testable
class MyTestableClass {}

console.log(MyTestableClass.isTestable);
