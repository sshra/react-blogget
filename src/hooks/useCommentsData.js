import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { pending } from '../store/commentsData/commentsSlice';

export const useCommentsData = (id) => {
  const dispatch = useDispatch();
  const commentData = useSelector(state => state.comment);
  const token = useSelector(state => state.token.token);

  useEffect(() => {
    dispatch({ type: pending.type, id });
  }, [token]);

  return commentData;
};
