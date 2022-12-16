import PropTypes from 'prop-types';
import style from './Preloader.module.css';
import { RingLoader } from 'react-spinners';

export const Preloader = ({ color, size, height }) =>
  <div className={style.preloaderContainer}
    style={{ [`height`]: height }}>
    <RingLoader className={style.preloader}
      color={color}
      size={size} />
  </div>;

Preloader.defaultProps = {
  color: 'var(--orange)',
  size: 30,
};

Preloader.propTypes = {
  size: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
};
