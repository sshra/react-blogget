import {
  CHANGE_PAGE,
  POSTSDATA_REQUEST,
  POSTSDATA_REQUEST_ERROR,
  POSTSDATA_REQUEST_SUCCESS,
  POSTSDATA_REQUEST_SUCCESS_AFTER } from './action';

const initialState = {
  loading: false,
  posts: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
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
        error: '',
        posts: action.posts,
        after: action.after,
        isLast: !action.after,
      };
    case POSTSDATA_REQUEST_SUCCESS_AFTER:
      return {
        ...state,
        loading: false,
        error: '',
        posts: [...state.posts, ...action.posts],
        after: action.after,
        isLast: !action.after,
      };
    case POSTSDATA_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.page,
        after: '',
        isLast: false,
      };
    default:
      return state;
  }
};

export default postsDataReducer;
