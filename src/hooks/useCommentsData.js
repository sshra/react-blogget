import { useState, useEffect, useContext } from 'react';
import { URL_API } from '../api/const';
import { tokenContext } from '../context/tokenContext';

export const useCommentsData = (id) => {
  const [commentData, setCommentData] = useState({
    post: null,
    comments: null }
  );
  const { token, delToken } = useContext(tokenContext);

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
        delToken();
      });
  }, [token]);

  return commentData;
};
