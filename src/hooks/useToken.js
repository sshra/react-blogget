import { useState, useEffect } from 'react';

export const useToken = () => {
  const [token, setToken] = useState(localStorage.getItem('bearer'));
  const delToken = () => setToken(null);

  useEffect(() => {
    if (location.pathname.includes('/auth')) {
      const token = new URLSearchParams(location.hash.substring(1))
        .get('access_token');
      setToken(token);
    } else {
      const localValue = localStorage.getItem('bearer');
      if (localValue && token !== localValue) {
        setToken(localValue);
      }
    }
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem('bearer', token);
    }
    if (token === null) {
      localStorage.removeItem('bearer');
    }
  }, [token]);

  return [token, delToken];
};

