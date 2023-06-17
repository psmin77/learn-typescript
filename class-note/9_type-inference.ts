// 타입 추론 기본 1
let a = 'abc';

function getB(b = 10) {
  let c = '10';
  // 10 + '10' = 1010
  return b + c;
}

// 타입 추론 기본 2
interface Dropdown<T> {
  title: string;
  value: T;
}
let shoppingItem: Dropdown<string> = {
  title: '제목',
  value: '아이템',
}

// 타입 추론 기본 3
interface DetailDropdown<K> extends Dropdown<K> {
  description: string;
  tag: K;
}
let detailedItem: DetailDropdown<string> = {
  description: '상세 설명',
  tag: '태그',
  title: '제목',
  value: '아이템'
}

// Best common type
let arr = [1,2,true];
