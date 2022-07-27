/* ------------------------------------------------ -------------------------- */
/* ECMAScript NEXT를 작성합니다. */
/* ------------------------------------------------ -------------------------- */

// 가상 노드
// DOM 노드화
상수  가상 노드  =  {
  이름 : '피규어' ,
  className : '태그가 붙은 템플릿 리터럴' ,
  스타일 : {  CSS텍스트 : ''  } ,
} ;

const  스타일  =  ( styleRules ,  targetNode )  =>  {
  // targetNode.style.cssText = styleRules.replace(/\n|\s+/g, '');
  대상 노드 . 스타일 . cssText  =  스타일 규칙
    . 감소 ( ( 규칙 ,  currentRule )  =>  규칙  +  currentRule ,  '' )
    . 바꾸기 ( / ( \n | \s ) + / g ,  '' ) ;
  반환  targetNode ;
} ;

// 태그 진행 방법
// let result = styled`
// ${가상노드}
// 글꼴 크기: 2rem;
// 라인 높이: 1.5;
// `;

// console.log(결과);

// 잘 실행하는 방법
// 스타일(
// `
// 글꼴 크기: 2rem;
// 라인 높이: 1.5;
// 여백: 1rem 0;
// `,
// 가상노드
// );

// DOM 펼치기
// 제목을 구성하기
const  headlineNode  =  문서 . 쿼리 선택기 ( ' .headline ' ) ;

// 스타일`
// ${headlineNode}
// 배경: #ff0;
// 색상: #111;
// 패딩: 3rem;
// `;

// 이를 내보냅니다.
// JS는 현재 값이 나가고 있다.
// 모듈 요청
// 처리 완료
// 넥슨은 클로저입니다.
// const $styled = 함수(노드) {
// 반환 함수(styleRules) {
// 반환 styled(styleRules, node);
// };
// };

const  $styled  =  ( node )  =>  ( styleRules )  =>  styled ( styleRules ,  node ) ;

$styled ( headlineNode ) `
  배경: #ff0;
  색상: #111;
  패딩: 3rem;
` ;
