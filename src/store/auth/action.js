import axios from 'axios';
import { URL_API } from '../../api/const';
import { deleteToken } from '../../store/tokenReducer';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_REQUEST_SUCCESS = 'AUTH_REQUEST_SUCCESS';
export const AUTH_REQUEST_ERROR = 'AUTH_REQUEST_ERROR';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export const authRequest = () => ({
  type: AUTH_REQUEST,
});

export const authRequestSuccess = (data) => ({
  type: AUTH_REQUEST_SUCCESS,
  data,
});

export const authRequestError = (error) => ({
  type: AUTH_REQUEST_ERROR,
  error
});

export const authLogout = (error) => ({
  type: AUTH_LOGOUT,
});

export const authRequestAsync =
  // Interpreted by the thunk middleware:
  () => (dispatch, getState) => {
    const token = getState().token.token;
    if (!token) return;
    dispatch(authRequest());

    axios(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(({ data: { name, icon_img: iconImg } }) => {
        const data = {
          name,
          img: iconImg.replace(/\?.*$/, '')
        };
        dispatch(authRequestSuccess(data));
      })
      .catch((err) => {
        console.error(err);
        dispatch(deleteToken());
        dispatch(authRequestError(err.toString()));
      });
  };
