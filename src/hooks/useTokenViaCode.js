import { useState, useEffect } from 'react';
import {
  URL_ACCESS_TOKEN,
  REDIRECT_URI,
  CLIENT_ID,
  CLIENT_SECRET
} from '../api/const';

export const useToken = (state) => {
  const [code, setCode] = useState(state);

  useEffect(() => {
    if (location.pathname.includes('/auth')) {
      const code = new URLSearchParams(location.href)
        .get('code');
      const formData = new FormData();
      formData.append('grant_type', 'authorization_code');
      formData.append('code', code);
      formData.append('redirect_url', REDIRECT_URI);

      fetch(`${URL_ACCESS_TOKEN}`, {
        method: 'post',
        body: formData,
        headers: {
        //          'Autorization': `bearer ${token}`,
          'Authorization': 'Basic ' +
            window.btoa(`${CLIENT_ID}:${CLIENT_SECRET}`),
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setCode('');
        });

      console.log('code: ', code);
      //      const token = new URLSearchParams(location.hash.substring(1))
      //        .get('access_token');
      //      setCode(code);
    }
  }, []);

  return [code];
};
