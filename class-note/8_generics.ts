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
