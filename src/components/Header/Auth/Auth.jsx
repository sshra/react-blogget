import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
// import Svg from '../../../UI/Svg';

export const Auth = ({auth}) =>
  <button className={style.button}>
    {auth ? auth :
      <>
        <LoginIcon className={style.svg} />
        {/* <Svg SvgComponent={LoginIcon} className={style.svg} /> */}
      </>
    }
  </button>
;

Auth.propTypes = {
  auth: PropTypes.string,
};
