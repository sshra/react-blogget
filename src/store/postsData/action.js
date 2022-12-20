import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL_API } from '../../api/const';

export const ERROR_REQUEST_SIMULTANEOUS = 'Prevent simultaneous requests.';

export const postsDataRequestAsync = createAsyncThunk(
  'posts/fetch',
  // Interpreted by the thunk middleware:
  ({ newPage, newPageSize }, RTK) => {
    const { getState } = RTK;
    const token = getState().token.token;
    const { page, pageSize, requestId, after } = getState().posts;

    if (!token || RTK.requestId !== requestId) {
      return RTK.rejectWithValue({ error: ERROR_REQUEST_SIMULTANEOUS });
    }
    console.log(getState().posts, newPage, newPageSize, RTK);

    return axios(`${URL_API}/${page}?limit=${pageSize}&${after ?
        `after=${after}` :
        ''}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(posts => ({ posts: posts.data.data, pageSize }))
      .catch((err) => {
        console.error(err);
        return RTK.rejectWithValue({ error: err.toString() });
      });
  });

export const postsDataAutoloadRequest =
  (autoloadDepth) => (dispatch, getState) => {
    const depth = getState().posts.depth;
    if (depth < autoloadDepth) {
      dispatch(postsDataRequestAsync({}));
    }
  };
