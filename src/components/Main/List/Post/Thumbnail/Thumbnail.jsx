import style from './Thumbnail.module.css';
import PropTypes from 'prop-types';
import notphoto from './img/notphoto.jpg';

export const Thumbnail = (props) =>
  <img
    className={style.img}
    src={props.src ? props.src : notphoto}
    alt={props.altTitle} />;

Thumbnail.propTypes = {
  src: PropTypes.string,
  altTitle: PropTypes.string,
};
