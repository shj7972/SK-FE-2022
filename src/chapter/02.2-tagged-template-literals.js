/* -------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                       */
/* -------------------------------------------------------------------------- */

// 가상 노드
// DOM 노드 추상화
const virtualNode = {
  name: 'figure',
  className: 'tagged-template-literals',
  style: { cssText: '' },
};

const styled = (styleRules, targetNode) => {
  // targetNode.style.cssText = styleRules.replace(/\n|\s+/g, '');
  targetNode.style.cssText = styleRules
    .reduce((rules, currentRule) => rules + currentRule, '')
    .replace(/(\n|\s)+/g, '');
  return targetNode;
};

// 태그 템플릿 방법으로 함수 호출
// let result = styled`
//   ${virtualNode}
//   font-size: 2rem;
//   line-height: 1.5;
// `;

// console.log(result);

// 잘 알려진 함수 호출 방법
// styled(
//   `
//     font-size: 2rem;
//     line-height: 1.5;
//     margin: 1rem 0;
//   `,
//   virtualNode
// );

// DOM 스크립트
// 제목 노드를 찾아서 스타일링 하기
const headlineNode = document.querySelector('.headline');

// styled`
//   ${headlineNode}
//   background: #ff0;
//   color: #111;
//   padding: 3rem;
// `;

// 함수를 내보냅니다.
// JS 함수는 값이므로 내보낼 수 있다.
// 모듈 패턴
// 노출 패턴
// 내보내진 함수는 클로저입니다.
// const $styled = function (node) {
//   return function (styleRules) {
//     return styled(styleRules, node);
//   };
// };

const $styled = (node) => (styleRules) => styled(styleRules, node);

$styled(headlineNode)`
  background: #ff0;
  color: #111;
  padding: 3rem;
`;
