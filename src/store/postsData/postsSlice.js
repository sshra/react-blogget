import { createSlice } from '@reduxjs/toolkit';
import { ERROR_REQUEST_SIMULTANEOUS, postsDataRequestAsync } from './action';

const initialState = {
  loading: false,
  posts: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
  depth: 0,
  pageSize: 10,
  requestId: '',
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [postsDataRequestAsync.pending.type]: (state, action) => {
      const { newPage, newPageSize } = action.meta.arg;
      if (newPage) {
        state.page = newPage;
        state.posts = [];
        state.after = '';
        state.isLast = false;
        state.depth = 0;
        state.requestId = '';
      }
      if (!state.requestId && (!state.isLast || newPage)) {
        if (newPageSize) {
          state.pageSize = newPageSize;
        }
        state.loading = true;
        state.error = '';
        state.requestId = action.meta.requestId;
      }
    },
    [postsDataRequestAsync.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.requestId = '';
      state.error = '';
      if (state.after) {
        state.posts = [...state.posts, ...action.payload.posts.children];
        state.depth += 1;
      } else {
        state.posts = action.payload.posts.children;
        state.depth = 1;
      }
      state.after = action.payload.posts.after;
      state.isLast = !action.payload.posts.after;

      state.pageSize = action.payload.pageSize;
    },
    [postsDataRequestAsync.rejected.type]: (state, action) => {
      console.log(action);
      if (action.payload.error !== ERROR_REQUEST_SIMULTANEOUS) {
        state.loading = false;
        state.error = action.payload.error;
      }
    },
  },
});

const { actions, reducer } = postsSlice;
export const {
  changePage,
  changePageSize } = actions;
export default reducer;
