import styles from './Banner.module.css';
import { getPublicAsset } from 'utils';
import { A11yHidden } from 'components';

export const Banner = ({
  url,
  width,
  height,
  style,
  children,
  ...restProps
}) => {
  return (
    <figure
      className={styles.container}
      style={{ margin: 0, ...style }}
      {...restProps}
    >
      <img src={getPublicAsset(url)} alt="" height={height} width={width} />
      <A11yHidden as="figcaption">{children}</A11yHidden>
    </figure>
  );
};

Banner.defaultProps = {
  width: 'auto',
  height: 'auto',
};
