import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authLogout, authRequestAsync } from '../store/auth/action';

export const useAuth = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.token.token);
  const { data: auth, loading, error } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(authRequestAsync());
  }, [token]);

  const clearAuth = () => dispatch(authLogout());
  return [auth, loading, clearAuth, error];
};
