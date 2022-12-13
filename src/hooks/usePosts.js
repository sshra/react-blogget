import { useState, useEffect, useContext } from 'react';
import { URL_API } from '../api/const';
import { tokenContext } from '../context/tokenContext';

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const { token, delToken } = useContext(tokenContext);

  useEffect(() => {
    if (!token) return;
    fetch(`${URL_API}/best`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((posts) => {
        setPosts(posts.data.children);
      })
      .catch((err) => {
        console.error(err);
        setPosts([]);
        delToken();
      });
  }, [token]);

  return [posts];
};
