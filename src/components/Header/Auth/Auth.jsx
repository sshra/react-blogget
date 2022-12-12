import {useEffect, useState} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import Svg from '../../../UI/Svg';
import {urlAuth} from '../../../api/auth';
import {URL_API} from '../../../api/const';
import {Text} from '../../../UI/Text';

export const Auth = ({token}) => {
  const [auth, setAuth] = useState({});

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        'Autorization': `bearer ${token}`,
      }
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAuth({
          name: data.name,
          img: data.icon_img,
        });
      });
  }, [token]);

  return (
    <div className={style.container}>
      {auth.name ? (
        <img src={'img'} title={auth.name} alt={`Avatar ${auth.name}`}/>
        ) : (
        <Text As='a' href={urlAuth}>
          <Svg iconName='login' className={style.svg} />
        </Text>
        )
      }
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
};
