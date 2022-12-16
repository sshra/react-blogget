import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { commentsDataRequestAsync } from '../store/commentsData/action';

export const useCommentsData = (id) => {
  const dispatch = useDispatch();
  const commentData = useSelector(state => state.comment);
  const token = useSelector(state => state.token.token);

  useEffect(() => {
    dispatch(commentsDataRequestAsync(id));
  }, [token]);

  return commentData;
};
