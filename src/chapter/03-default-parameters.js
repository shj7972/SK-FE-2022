/* -------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                       */
/* -------------------------------------------------------------------------- */

const getRandomOneOrZero = () => (Math.random() > 0.5 ? 1 : 0);
const getRandomMinMax = (min = 10, max = 100) =>
  Math.round(Math.random() * (max - min) + min);

console.log(getRandomMinMax(30, 80));
console.log(getRandomMinMax(30, 80));
console.log(getRandomMinMax(30, 80));
console.log(getRandomMinMax(30, 80));
console.log(getRandomMinMax(30, 80));
console.log(getRandomMinMax(30, 80));
console.log(getRandomMinMax(30, 80));

// 정적인 값만 함수의 매개변수 기본값으로 사용 가능할까? No!
// 동적으로 처리되는 값을 반환하는 함수를 매개변수 기본 값에 설정할 수도 있다.
const truncateText = (text, limit = getRandomMinMax(30, 80)) => {
  return `${text.slice(0, limit).trim()}...`;
};

let desc = `
  기본 매개변수(Default Paramters)는 함수 매개변수의 
  기본 값을 선언적으로 표현하는 강력한 방법입니다.
`.trim();

console.log(truncateText(desc, 16));
