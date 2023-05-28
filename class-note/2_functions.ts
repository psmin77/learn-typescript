// 함수 파라미터 타입 정의
function sum(a: number, b: number) {
  return a + b;
}

// 함수 반환 타입 정의
function add(): number {
  return 10;
}

// 함수 파라미터와 반환 타입 정의
function sumsum(a: number, b: number): number {
  return a + b;
}
sum(10, 20);

// 함수 옵셔널 파라미터
function log(a: string, b?: string) {
}
log('str');
log('hello', 'typescript');