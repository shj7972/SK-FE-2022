// src/api/books.json 모듈을 불러와 booksApi 이름으로 사용합니다.
import { books } from '../../api/books.json';

export const fetchBooks = (timeout = 1000, shouldReject = false) => {
  // Promise 객체를 반환합니다.
  return new Promise((resolve, reject) => {
    // timeout 초가 흐른 뒤, 타이머가 작동하도록 설정합니다.
    setTimeout(() => {
      const errorInfo = {
        name: 'UNKNOWN_ERORR',
        message: '알 수 없는 오류가 발생했습니다.',
      };

      shouldReject
        ? // shouldReject 값에 따라 오류 객체를 전송하거나,
          reject(errorInfo)
        : // booksApi.books 값을 전송합니다.
          resolve(books);
    }, timeout);
  });
};
