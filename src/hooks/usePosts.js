import { useState, useEffect } from 'react';
import { URL_API } from '../api/const';
import { deleteToken } from '../store';
import { useDispatch, useSelector } from 'react-redux';

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();
  const token = useSelector(state => state.token);

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
        dispatch(deleteToken());
      });
  }, [token]);

  return [posts];
};
