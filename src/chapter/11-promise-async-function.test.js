/* utils 모듈에서 fetchBooks를 추출해 비동기 처리 코드를 작성하세요. -------------------------------- */
import { fetchBooks } from './utils/index.js';

// test runner : Jest

// 데이터 패치 성공 시뮬레이션 코드 예시
test('Jest 테스트 코드', () => {
  let condition = false;
  expect(condition).not.toBeTruthy();
});

test('fetchBooks Promise 테스트 (case: resolve)', () => {
  return fetchBooks(500)
    .then((books) => expect(books).toHaveLength(7))
    .catch((error) => expect(error).toThrowError());
});

test('fetchBooks Promise 테스트 (case: reject)', () => {
  return fetchBooks(1000, true)
    .then((books) => expect(books).toHaveLength(7))
    .catch((error) => expect(error.message).toMatch(/오류가 발생/i));
});

// 데이터 패치 실패 시뮬레이션 코드 예시
test('fetchBooks Async 함수 테스트 (case: resolve)', async () => {
  const books = await fetchBooks(1500);
  expect(books).toHaveLength(7);
});

test('fetchBooks Async 함수 테스트 (case: reject)', async () => {
  try {
    const books = await fetchBooks(2000, true);
    expect(books).toHaveLength(7);
  } catch (error) {
    expect(error.message).toMatch(/오류가 발생/i);
  }
});
