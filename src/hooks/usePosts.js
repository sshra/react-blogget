import { useState, useEffect } from 'react';
import { URL_API } from '../api/const';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToken } from '../store/tokenReducer';

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();
  const token = useSelector(state => state.token.token);

  useEffect(() => {
    if (!token) return;
    fetch(`${URL_API}/new?limit=20`, {
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
