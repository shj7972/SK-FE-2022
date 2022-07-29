import styles from './Button.module.scss';
import { string } from 'utils/PropTypes';

export const Button = ({ type, children, ...restProps }) => (
  <button type={type} className={styles.container} {...restProps}>
    {children}
  </button>
);

Button.defaultProps = {
  type: 'button',
};

Button.propTypes = {
  type: string,
  children: string,
};
