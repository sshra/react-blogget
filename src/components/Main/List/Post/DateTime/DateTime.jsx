import { formatDate, formatTimestamp } from '../../../../../utils/formatDate';
import style from './DateTime.module.css';
import PropTypes from 'prop-types';

export const DateTime = ({ timestamp, dateTime }) =>
  (timestamp ?
    <time className={style.date} dateTime={timestamp}>
      {formatTimestamp(timestamp)}
    </time> :
    <time className={style.date} dateTime={dateTime}>
      {formatDate(dateTime)}
    </time>);

DateTime.propTypes = {
  dateTime: PropTypes.string,
  timestamp: PropTypes.number,
};
