import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { URL_API } from '../api/const';
import { deleteToken } from '../store';

export const useAuth = () => {
  const [auth, setAuth] = useState({});
  const dispatch = useDispatch();
  const token = useSelector(state => state.token);

  const clearAuth = () => setAuth({});
  useEffect(() => {
    if (!token) return;
    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 401 || !response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(({ name, icon_img: iconImg }) => {
        setAuth({
          name,
          img: iconImg.replace(/\?.*$/, '')
        });
      })
      .catch((err) => {
        console.error(err);
        setAuth({});
        dispatch(deleteToken());
      });
  }, [token]);

  return [auth, clearAuth];
};
