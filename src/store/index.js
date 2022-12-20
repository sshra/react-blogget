import { tokenReducer, tokenMiddleware } from './tokenReducer';
import authReducer from './auth/authReducer';
import postsReducer from './postsData/postsSlice';
import commentsReducer from './commentsData/commentsSlice';
import commentReducer from './commentReducer';
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import rootSaga from './saga';
import { searchSlice } from './search/searchSlice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    token: tokenReducer,
    comment: commentsReducer, // article + comments list
    auth: authReducer,
    posts: postsReducer,
    commentForm: commentReducer,
    search: searchSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // immutableCheck: false,
      // serializableCheck: false,
      // thunk: true
    }).concat(tokenMiddleware, sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export default store;
