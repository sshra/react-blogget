import { tokenReducer, tokenMiddleware } from './tokenReducer';
import authReducer from './auth/authReducer';
import postsReducer from './postsData/postsSlice';
import commentsReducer from './commentsData/commentsSlice';
import commentReducer from './commentReducer';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    comment: commentsReducer, // article + comments list
    auth: authReducer,
    posts: postsReducer,
    commentForm: commentReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // immutableCheck: false,
      // serializableCheck: false,
      // thunk: true
    }).concat(tokenMiddleware)
});

export default store;
