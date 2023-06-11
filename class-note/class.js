function Person(name, age) {
  this.name = name;
  this.age = age;
}
const person1 = new Person('홍길동', 100);

class Person {
  constructor(name, age) {
    console.log('생성 되었습니다.');
    this.name = name;
    this.age = age;
  }
}
const person2 = new Person('철수', 30);
console.log(person);