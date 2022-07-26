/* -------------------------------------------------------------------------- */
/* ECMAScript NEXT를 사용해 함수를 작성합니다.                                       */
/* -------------------------------------------------------------------------- */

const state = Object.freeze({
  loading: false,
  error: null,
  data: [
    { id: 'kwdvj2ke1', title: 'euid' },
    { id: 'zwecr8kip', title: 'react' },
    { id: 'jdw1vkke1', title: 'gitbook' },
  ],
});

{
  // console.table(state);

  // 객체 속성과 일치하는 변수 선언 후, 속성 값 할당
  // let loading = state.loading;
  // const error = state.error;
  // const data = state.data;
  const { data, loading } = state;

  // console.log('DEBUG ~ loading', loading);
  // console.log('DEBUG ~ error', error);
  console.table(data);

  // 배열의 첫번째 아이템, 나머지 집합 추출
  const [firstData, ...restData] = data;
  // const firstData = data[0];
  // const restData = data.slice(1);
  console.log('DEBUG ~ firstData', firstData);
  console.log('DEBUG ~ restData', restData);
}
