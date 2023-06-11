// function logText(text) {
//   console.log(text);
//   return text;
// }
// logText(10); // number
// logText('hello'); // string
// logText(true); // boolean

// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }
// logText<string>('hello');

// function logText(text: string) {
//   console.log(text);
//   return text;
// }
// function logNumber(num: number) {
//   console.log(num);
//   return num;
// }
// const num = logNumber(10);
// logText(true);

// function logText(text: string | number) {
//   console.log(text);
//   return text;
// }
// logText('a');
// logText(10);

function logText<T>(text: T): T {
  console.log(text);
  return text;
}

const str = logText<string>('abc');
str.split('');
const login = logText<boolean>(true);

interface Dropdown<T> {
  value: T;
  selected: boolean;
}
const obj: Dropdown<string> = {
  value: 'str',
  selected: true
}

// 제네릭 타입 제한 1
// function logTextLength<T> (text: T[]): T[] {
//   console.log(text.length);
//   text.forEach(t  => {
//     console.log(t);
//   });
//   return text;
// }
// logTextLength(['hello', 'world']);

// 제네릭 타입 제한 2 - 정의된 타입 이용하기
// interface LengthType {
//   length: number;
// }
// function logTextLength<T extends LengthType> (text: T): T {
//   text.length;
//   return text;
// }
// logTextLength(10);
// logTextLength({ length: 10});

// 제네릭 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}
getShoppingItemOption('stock');