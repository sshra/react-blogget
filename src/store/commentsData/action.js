import axios from 'axios';
import { URL_API } from '../../api/const';

export const COMMENTSDATA_REQUEST = 'COMMENTSDATA_REQUEST';
export const COMMENTSDATA_REQUEST_SUCCESS = 'COMMENTSDATA_REQUEST_SUCCESS';
export const COMMENTSDATA_REQUEST_ERROR = 'COMMENTSDATA_REQUEST_ERROR';

export const commentsDataRequest = () => ({
  type: COMMENTSDATA_REQUEST,
});

export const commentsDataRequestSuccess = (data) => ({
  type: COMMENTSDATA_REQUEST_SUCCESS,
  data,
});

export const commentsDataRequestError = (error) => ({
  type: COMMENTSDATA_REQUEST_ERROR,
  error
});

export const commentsDataRequestAsync =
  // Interpreted by the thunk middleware:
  (id) => (dispatch, getState) => {
    const token = getState().token.token;
    if (!token) return;

    dispatch(commentsDataRequest());
    axios(`${URL_API}/comments/article?article=${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(responseData => {
        const data = {
          post: responseData.data[0].data.children[0].data,
          comments: responseData.data[1].data.children,
        };
        dispatch(commentsDataRequestSuccess(data));
      })
      .catch((err) => {
        dispatch(commentsDataRequestError(err.toString()));
        console.error(err);
      });
  };
