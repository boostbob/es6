class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    console.log("hello", this.name);
  }
}


var person = new Person("zhangsan");
person.sayHello();
