/* -------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                       */
/* -------------------------------------------------------------------------- */

// 함수 선언문
// function fibonacci(n) {
//   if (n <= 1) return 1;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }

// 함수 (표현)식
// JavaScript 함수는 그 자체로 "리터럴(값)"
// 함수와 식의 공통점 (값을 반환)
// 문과 식의 차이점 (값의 반환 여부)
const numberWithComma = (n) =>
  n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

// (뚱뚱한) 화살표 함수 식
// let 프리미티브 타입 (숫자, 문자, 불리언, null, undefined, Symbol)
// const 객체 타입 (함수, 배열, 객체)
//       - 타입 선언할 때 타입이 더 이상 변경되지 않도록 조치
const fibonacci = n => (n <= 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2));

console.log(numberWithComma(typeof 17e3));
console.log(fibonacci(17));
