import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: ''
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchQuery: (state, action) => {
      state.search = action.payload.search;
    },
  }
});

const { actions, reducer } = searchSlice;
export const { searchQuery } = actions;
export default reducer;
