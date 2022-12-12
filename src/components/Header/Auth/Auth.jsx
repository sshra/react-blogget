import {useState} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import Svg from '../../../UI/Svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {useAuth} from '../../../hooks/useAuth';

export const Auth = ({token, delToken}) => {
  const [auth] = useAuth({});
  const [isProfileMenu, setIsProfileMenu] = useState(false);

  return (
    <div className={style.container}>
      {auth.name ? (
        <>
          <button className={style.btn}>
            <img
              className={style.img}
              src={auth.img} title={auth.name}
              alt={`Avatar ${auth.name}`}
              onClick={() => setIsProfileMenu(!isProfileMenu)}
            />
          </button>
          { isProfileMenu &&
            <a href="/" onClick={() => delToken()}>
              <Text
                className={style.logout}
                size={14} color='white'>
                Logout
              </Text>
              <Svg iconName='logout' className={style.logoutIcon}/>
            </a>
          }
        </>
        ) : (
        <Text As='a' href={urlAuth} className={style.authLink}>
          <Svg iconName='login' className={style.svg} />
        </Text>
        )
      }
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
