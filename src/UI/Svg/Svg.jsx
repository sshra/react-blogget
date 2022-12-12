import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {ReactComponent as LogoutIcon} from './img/exit.svg';
import {ReactComponent as TrashCan} from './img/trash.svg';
import {ReactComponent as RatingUp} from './img/up.svg';
import {ReactComponent as RatingDown} from './img/down.svg';
import {ReactComponent as SearchIcon} from './img/search.svg';
// import style from './Svg.module.css';

const iconList = {
  login: LoginIcon,
  logout: LogoutIcon,
  trashCan: TrashCan,
  ratingUp: RatingUp,
  ratingDown: RatingDown,
  search: SearchIcon,
};

export const Svg = ({iconName, className}) => {
  if (iconList[iconName]) {
    const RC = iconList[iconName];
    return <RC className={className}/>;
  }
  console.log('Wrong iconName has been supplied!');
  return '';
};

Svg.propTypes = {
  iconName: PropTypes.string.isRequired,
  className: PropTypes.string,
};
