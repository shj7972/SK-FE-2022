import styles from './Button.module.scss';

export const Button = ({ type, children, ...restProps }) => (
  <button type={type} className={styles.container} {...restProps}>
    {children}
  </button>
);

Button.defaultProps = {
  type: 'button',
};

// props에 대한 타입 검사
// - 전달 받는 prop의 타입 결정
// - 필수, 선택 유무 설정

// props 매뉴얼 검사
Button.propTypes = {
  type(props, propName, componentName) {
    // 검사 코드 작성
    // 검사 조건 통과가 안되면 오류를 출력
    // `오류 메시지 작성`
  },
};
// 라이브러리 검사
