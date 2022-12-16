import style from './Thumbnail.module.css';
import PropTypes from 'prop-types';
import notphoto from './img/notphoto.jpg';

export const Thumbnail = ({ src, altTitle }) =>
  <img
    className={style.img}
    src={src &&
      !(['self', 'spoiler', 'default']).includes(src) ? src : notphoto}
    alt={altTitle} />;

Thumbnail.propTypes = {
  src: PropTypes.string,
  altTitle: PropTypes.string,
};
