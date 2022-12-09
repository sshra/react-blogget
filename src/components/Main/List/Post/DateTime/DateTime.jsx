import formatDate from '../../../../../utils/formatDate';
import style from './DateTime.module.css';
import PropTypes from 'prop-types';

export const DateTime = (props) =>
  <time className={style.date} dateTime={props.dateTime}>
    {formatDate(props.dateTime)}
  </time>;

DateTime.propTypes = {
  dateTime: PropTypes.string,
};
