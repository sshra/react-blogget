import { createSlice } from '@reduxjs/toolkit';
export const ERROR_REQUEST_SIMULTANEOUS = 'ERROR_REQUEST_SIMULTANEOUS';

const initialState = {
  loading: false,
  posts: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
  searchQuery: '',
  depth: 0,
  pageSize: 10,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postsPendingAutoLoad: (state, action) => {},
    postsPending: (state, action) => {
      console.log(action);
      const { newPage, newPageSize, query } = action.payload;
      if (newPage) {
        state.page = newPage;
        state.posts = [];
        state.after = '';
        state.isLast = false;
        state.depth = 0;
        state.searchQuery = newPage === 'search' ? query : '';
      }
      if (!state.isLast || newPage) {
        if (newPageSize) {
          state.pageSize = newPageSize;
        }
        state.loading = true;
        state.error = '';
        //        state.requestId = action.meta.requestId;
      }
    },
    postsSuccess(state, action) {
      state.loading = false;
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
    postsFail(state, action) {
      console.log(action);
      if (action.payload.error !== ERROR_REQUEST_SIMULTANEOUS) {
        state.loading = false;
        state.error = action.payload.error;
      }
    },
  },
  extraReducers: {},
});

const { actions, reducer } = postsSlice;
export const { postsPending, postsSuccess, postsFail, postsPendingAutoLoad } =
  actions;
export default reducer;
