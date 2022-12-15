import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { tokenReducer, tokenMiddleware } from './tokenReducer';
import commentReducer from './commentReducer';
import authReducer from './auth/authReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  token: tokenReducer,
  comment: commentReducer,
  auth: authReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(
    tokenMiddleware,
    thunk
  ))
);
export default store;
