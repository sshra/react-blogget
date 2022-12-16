import {
  POSTSDATA_REQUEST,
  POSTSDATA_REQUEST_ERROR,
  POSTSDATA_REQUEST_SUCCESS } from './action';

const initialState = {
  loading: false,
  posts: [],
  error: '',
};

const postsDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case POSTSDATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case POSTSDATA_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.data,
        error: '',
      };
    case POSTSDATA_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default postsDataReducer;
