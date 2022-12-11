import style from './Auth.module.css';
import PropTypes from 'prop-types';
import Svg from '../../../UI/Svg';

export const Auth = ({auth}) =>
  <button className={style.button}>
    {auth ? auth :
      <Svg iconName='login' className={style.svg} />
    }
  </button>
;

Auth.propTypes = {
  auth: PropTypes.string,
};
