import {useState, useEffect} from 'react';
import {URL_API} from '../api/const';
import {useToken} from './useToken';

export const useAuth = (state) => {
  const [auth, setAuth] = useState({});
  const [token, delToken] = useToken('');

  useEffect(() => {
    if (!token) return;
    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else if (response.status === 401) {
          delToken();
          setAuth({});
        }
      })
      .then((data) => {
        console.log(data);
        setAuth({
          name: data.name,
          img: data.icon_img.replace(/\?.*$/, ''),
        });
      })
      .catch((err) => {
        console.log(err);
        setAuth({});
      });
  }, [token]);

  return [auth, setAuth];
};
