import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  data: { post: null, comments: null },
  error: '',
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    pending(state) {
      state.loading = true;
      state.error = '';
    },
    success(state, action) {
      console.log(action);
      state.loading = false;
      state.data = action.payload;
      state.error = '';
    },
    fail(state, action) {
      console.log(action);
      state.loading = false;
      state.data = { post: null, comments: null };
      state.error = action.payload.error;
    },
  },
  extraReducers: {},
});

export const { pending, success, fail } = commentsSlice.actions;
export default commentsSlice.reducer;
