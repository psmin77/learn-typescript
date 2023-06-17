// 타입 단언
let a;
a = 10;
a = 'abc'
let b = a as string;

// DOM API 조작
// <div id="app"></div>

let div = document.querySelector('div') as HTMLDivElement;
div.innerText = 'hi';