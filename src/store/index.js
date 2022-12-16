import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { tokenReducer, tokenMiddleware } from './tokenReducer';
import authReducer from './auth/authReducer';
import thunk from 'redux-thunk';
import postsDataReducer from './postsData/reducerPostsData';
import commentsDataReducer from './commentsData/reducerCommentsData';
import commentReducer from './commentReducer';

const rootReducer = combineReducers({
  token: tokenReducer,
  comment: commentsDataReducer,
  auth: authReducer,
  posts: postsDataReducer,
  commentForm: commentReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(
    tokenMiddleware,
    thunk
  ))
);
export default store;
