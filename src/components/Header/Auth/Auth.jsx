import { useState } from 'react';
import style from './Auth.module.css';
import Svg from '../../../UI/Svg';
import { urlAuth } from '../../../api/auth';
import { Text } from '../../../UI/Text';
import { useDispatch } from 'react-redux';
import { deleteToken } from '../../../store/tokenReducer';
import { useAuth } from '../../../hooks/useAuth';
import { AuthLoader } from './AuthLoader/AuthLoader';

export const Auth = () => {
  const dispatch = useDispatch();
  const [isProfileMenu, setIsProfileMenu] = useState(false);
  const [auth, loading, clearAuth] = useAuth();
  console.log(auth);
  const profileMenuSwitch = () => {
    setIsProfileMenu(!isProfileMenu);
  };

  const logOut = () => {
    dispatch(deleteToken());
    clearAuth();
  };

  return (
    <div className={style.container}>
      {loading ? (<AuthLoader/>) :
        auth?.name ? (
        <>
          <button className={style.btn} onClick={profileMenuSwitch}>
            <img
              className={style.img}
              src={auth.img} title={auth.name}
              alt={`Avatar ${auth.name}`}
            />
          </button>
          { isProfileMenu &&
            <a href="/" onClick={logOut}>
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
