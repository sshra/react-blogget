import { useState, useEffect } from 'react';
import { URL_API } from '../api/const';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToken } from '../store/tokenReducer';

export const useCommentsData = (id) => {
  const [commentData, setCommentData] = useState({
    post: null,
    comments: null }
  );
  const dispatch = useDispatch();
  const token = useSelector(state => state.token.token);

  useEffect(() => {
    if (!token) return;
    fetch(`${URL_API}/comments/article?article=${id}`, {
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
      .then((data) => {
        setCommentData(
          {
            post: data[0].data.children[0].data,
            comments: data[1].data.children,
          }
        );
      })
      .catch((err) => {
        console.error(err);
        setCommentData([]);
        dispatch(deleteToken());
      });
  }, [token]);

  return commentData;
};
