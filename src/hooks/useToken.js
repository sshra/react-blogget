import { useState, useEffect } from 'react';

export const useToken = () => {
  const [token, setToken] = useState(localStorage.getItem('bearer'));
  const delToken = () => setToken(null);
  console.log(token);

  useEffect(() => {
    if (location.pathname.includes('/auth')) {
      const token = new URLSearchParams(location.hash.substring(1))
        .get('access_token');
      console.log(token);
      setToken(token);
    } else {
      const localValue = localStorage.getItem('bearer');
      if (localValue && token !== localValue) {
        console.log(`Get token value from local storage`);
        setToken(localValue);
      }
    }
  }, []);

  useEffect(() => {
    if (token) {
      console.log(`set token on token.change event ${token}`);
      localStorage.setItem('bearer', token);
    }
    if (token === null) {
      console.log(`remove empty token on token.change event`);
      localStorage.removeItem('bearer');
    }
  }, [token]);

  return [token, delToken];
};

