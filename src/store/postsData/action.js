import axios from 'axios';
import { URL_API } from '../../api/const';

export const POSTSDATA_REQUEST = 'POSTSDATA_REQUEST';
export const POSTSDATA_REQUEST_SUCCESS = 'POSTSDATA_REQUEST_SUCCESS';
export const POSTSDATA_REQUEST_ERROR = 'POSTSDATA_REQUEST_ERROR';

export const postsDataRequest = () => ({
  type: POSTSDATA_REQUEST,
});

export const postsDataRequestSuccess = (data) => ({
  type: POSTSDATA_REQUEST_SUCCESS,
  data,
});

export const postsDataRequestError = (error) => ({
  type: POSTSDATA_REQUEST_ERROR,
  error
});

export const postsDataRequestAsync =
  // Interpreted by the thunk middleware:
  () => (dispatch, getState) => {
    const token = getState().token.token;
    if (!token) return;
    dispatch(postsDataRequest());

    axios(`${URL_API}/new?limit=20`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(posts => {
        dispatch(postsDataRequestSuccess(posts.data.data.children));
      })
      .catch((err) => {
        console.error(err);
        dispatch(postsDataRequestError(err.toString()));
      });
  };
