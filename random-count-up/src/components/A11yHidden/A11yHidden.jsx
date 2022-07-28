import React from 'react';
import styles from './A11yHidden.module.css';
import classNames from 'classnames';

export const A11yHidden = ({
  as: ComponentName,
  focusable,
  className,
  style,
  ...restProps
}) => {
  return (
    <ComponentName
      style={style}
      className={classNames(
        styles.container,
        {
          [styles.focusable]: focusable,
        },
        className
      )}
      {...restProps}
    />
  );
};

// 컴포넌트의 기본(default) props 값 설정
A11yHidden.defaultProps = {
  as: 'span',
  focusable: false,
};
