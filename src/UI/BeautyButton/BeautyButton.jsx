import PropTypes, { func } from 'prop-types';
import style from './BeautyButton.module.css';

export const BeautyButton = ({ children, onClick }) =>
  <button className={style.button} onClick={onClick}>
    { children }
  </button>;

BeautyButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: func,
};
