import { createSlice } from '@reduxjs/toolkit';
import { commentsDataRequestAsync } from './action';

const initialState = {
  loading: false,
  data: { post: null, comments: null },
  error: '',
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
  },
  extraReducers: {
    [commentsDataRequestAsync.pending.type]: (state) => {
      state.loading = true;
      state.error = '';
    },
    [commentsDataRequestAsync.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = '';
    },
    [commentsDataRequestAsync.rejected.type]: (state, action) => {
      state.loading = false;
      state.data = { post: null, comments: null };
      state.error = action.payload.error;
    },
  },
});

export default commentsSlice.reducer;
