import style from './Thumbnail.module.css';
import PropTypes from 'prop-types';
import notphoto from './img/notphoto.jpg';
import isUrl from 'is-url';

export const Thumbnail = ({ src, altTitle }) =>
  <img
    className={style.img}
    src={src && isUrl(src) ? src : notphoto}
    alt={altTitle} />;

Thumbnail.propTypes = {
  src: PropTypes.string,
  altTitle: PropTypes.string,
};
