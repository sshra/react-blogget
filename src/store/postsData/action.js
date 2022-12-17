import axios from 'axios';
import { URL_API } from '../../api/const';

export const POSTSDATA_REQUEST = 'POSTSDATA_REQUEST';
export const POSTSDATA_REQUEST_SUCCESS = 'POSTSDATA_REQUEST_SUCCESS';
export const POSTSDATA_REQUEST_ERROR = 'POSTSDATA_REQUEST_ERROR';
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const
  POSTSDATA_REQUEST_SUCCESS_AFTER = 'POSTSDATA_REQUEST_SUCCESS_AFTER';

export const postsDataRequest = () => ({
  type: POSTSDATA_REQUEST,
});

export const postsDataRequestSuccess = (data) => ({
  type: POSTSDATA_REQUEST_SUCCESS,
  posts: data.data.children,
  after: data.data.after,
});

export const postsDataRequestSuccessAfter = (data) => ({
  type: POSTSDATA_REQUEST_SUCCESS_AFTER,
  posts: data.data.children,
  after: data.data.after,
});

export const postsDataRequestError = (error) => ({
  type: POSTSDATA_REQUEST_ERROR,
  error
});

export const changePage = (page) => ({
  type: CHANGE_PAGE,
  page,
});


export const postsDataRequestAsync =
  // Interpreted by the thunk middleware:
  (newPage) => (dispatch, getState) => {
    let page = getState().posts.page;
    if (newPage) {
      page = newPage;
      dispatch(changePage(page));
    }

    const token = getState().token.token;
    const { after, loading, isLast } = getState().posts;
    if (!token || loading || isLast) return;
    dispatch(postsDataRequest());

    axios(`${URL_API}/${page}?limit=4&${after ? `after=${after}` : ''}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(posts => {
        if (after) {
          dispatch(postsDataRequestSuccessAfter(posts.data));
        } else {
          dispatch(postsDataRequestSuccess(posts.data));
        }
      })
      .catch((err) => {
        console.error(err);
        dispatch(postsDataRequestError(err.toString()));
      });
  };
