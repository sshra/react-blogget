import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postsDataRequestAsync } from '../store/postsData/action';

export const usePosts = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.token.token);
  const postsData = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(postsDataRequestAsync());
  }, [token]);

  return [postsData.posts, postsData.loading];
};
