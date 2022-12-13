import {useState, useContext} from 'react';
import style from './Auth.module.css';
import Svg from '../../../UI/Svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {tokenContext} from '../../../context/tokenContext';
import {authContext} from '../../../context/authContext';

export const Auth = () => {
  const {delToken} = useContext(tokenContext);
  const [isProfileMenu, setIsProfileMenu] = useState(false);
  const {auth, clearAuth} = useContext(authContext);

  const profileMenuSwitch = () => {
    setIsProfileMenu(!isProfileMenu);
  };

  const logOut = () => {
    delToken();
    clearAuth();
  };

  return (
    <div className={style.container}>
      {auth.name ? (
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
