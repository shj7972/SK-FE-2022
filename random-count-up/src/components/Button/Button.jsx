/* eslint-disable no-unused-vars */

import styles from './Button.module.scss';
import { node, element, string, oneOf, oneOfType } from 'prop-types';
import { nullType } from 'types';

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
  children: oneOfType([element, string, nullType]).isRequired,
  // children: node.isRequired,
};
