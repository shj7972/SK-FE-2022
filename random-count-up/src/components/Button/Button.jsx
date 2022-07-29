import styles from './Button.module.scss';
import { node, oneOf } from 'prop-types';

export const Button = ({ type, children, ...restProps }) => (
  <button type={type} className={styles.container} {...restProps}>
    {children}
  </button>
);

Button.defaultProps = {
  type: 'button',
};

Button.propTypes = {
  type: oneOf(['submit', 'reset', 'button']),
  // children: oneOfType([element, string]).isRequired,
  children: node.isRequired,
};
