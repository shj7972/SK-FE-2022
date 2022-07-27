/* eslint-disable no-unused-vars */

/* -------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                       */
/* -------------------------------------------------------------------------- */

/* 나머지 매개변수 (집합) -------------------------------------------------------- */

const multiplyCount = function () {
  var first = arguments[0]; // 첫번째 매개변수
  var rest = [].slice.call(arguments, 1); // 나머지 매개변수

  // for문 → Array.prototype.reduce 메서드 구문으로 변경해보세요.
  for (var i = 0, l = rest.length; i < l; ++i) {
    if (i === 0) first += rest[i];
    else first *= rest[i];
  }

  return first;
};

// const sum = (...args /* 나머지 매개변수 */) => {
//   let firstItem = args[0];
//   let restItems = args.slice(1);
// };

const sum = (firstItem, secondItem, thirdItem, ...restItems) => {
  console.log('DEBUG →  ~ firstItem', firstItem);
  console.log('DEBUG →  ~ secondItem', secondItem);
  console.log('DEBUG →  ~ thirdItem', thirdItem);
  console.log('DEBUG →  ~ restItems', restItems);
};

let result = sum(101, 202, 303, 404, 505);

console.log(result);
