import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { URL_API } from '../../api/const';

export const commentsDataRequestAsync = createAsyncThunk(
  'comments/fetch',
  (id, { getState }) => {
    const token = getState().token.token;
    if (!token) return;

    return axios(`${URL_API}/comments/article?article=${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(responseData => {
        const data = {
          post: responseData.data[0].data.children[0].data,
          comments: responseData.data[1].data.children,
        };
        return data;
      })
      .catch((err) => {
        console.error(err);
        return { error: err.toString() };
      });
  }
);
