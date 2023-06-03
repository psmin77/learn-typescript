interface User {
  age: number;
  name: string;
}

// 변수 인터페이스 적용
const chang: User = {
  age: 33,
  name: '창섭'
}

// 함수 인터페이스 적용
function getUser(user: User) {
  console.log(user);
}
const capt = {
  age: 100,
  name: '캡틴'
}
getUser(capt);

// 함수 스펙(구조) 인터페이스 적용
interface sumFunction {
  (a: number, b: number): number;
}
let sum: sumFunction;
sum = function(a: number, b: number): number{
  return a + b;
}

// 인덱싱
interface StringArray {
  [index: number]: string;
}
let arr: StringArray = ['a', 'b', 'c'];
arr[0] = '10';

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}
let obj: StringRegexDictionary = {
  cssFile: /\.css$/
}
Object.keys(obj).forEach(function(value){})

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}
interface Developer extends Person {
  language: string;
}

const person: Developer = {
  name: '홍길동',
  age: 10,
  language: 'c++'
}