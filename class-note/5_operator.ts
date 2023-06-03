function logMessage(value: string | number) {
  // 타입 가드: 특정 타입으로 타입의 범위를 필터링하는 과정
  if (typeof value === 'number') { // 숫자 형식일 때
    value.toLocaleString();

  } else { // 문자 형식일 때
    value.toString();
  }
  throw new TypeError('value must be string or number');
}
logMessage(10);
logMessage('hello');


interface Developer {
  name: string;
  skill: string;
}
interface Person {
  name: string;
  age: number;
}
// function askSomeone(someone: Developer | Person) {
//   someone.name;
//   someone.skill;
//   someone.age;
// }
// askSomeone({ name: '길동', skill: 'ts'});
// askSomeone({ name: '캡틴', age: 100 })

function askSomeone(someone: Developer & Person) {
  someone.name;
  someone.skill;
  someone.age;
}
askSomeone({ name: '길동', skill: 'ts', age: 50 })