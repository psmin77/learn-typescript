// 인터페이스
interface Developer {
  name: string;
  skill: string;
}
// interface Person {
//   name: string;
// }
class Person {
  name: string;
}

let developer: Developer = {
  name: '길동',
  skill: 'type script'
};
let person: Person;

// 작은 범위 -> 큰 범위 호환 불가
// developer = person;
// developer = new Person();

// 큰 범위 -> 작은 범위 호환 가능
person = developer;

// 함수 
let add = function(a: number){}
let sum = function(a: number, b: number) {}
// add = sum; // 불가
sum = add; 

// 제네릭
interface Empty<T> {}
let empty1: Empty<string>;
let empty2: Empty<number>;
// empty1 = empty2;
// empty2 = empty1;

// 타입에 따라 데이터가 바뀌는 경우에는 호환 불가
interface NotEmpty<T> {
  data: T;
}
let notEmpty1: NotEmpty<string>;
let notEmpty2: NotEmpty<number>;
// notEmpty1 = notEmpty2;
// notEmpty2 = notEmpty1;