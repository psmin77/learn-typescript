// interface Person {
//   name: string;
//   age: number;
// }
type Person = {
  name: string,
  age: number
}

let gildong: Person = {
  name: '길동',
  age: 10
}

type MyString = string;
let str: MyString = 'hello type';

type Todo = {
  id: string;
  title: string,
  done: boolean
}
function getTodo(todo: Todo) {}
