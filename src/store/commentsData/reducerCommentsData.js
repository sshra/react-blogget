import {
  COMMENTSDATA_REQUEST,
  COMMENTSDATA_REQUEST_ERROR,
  COMMENTSDATA_REQUEST_SUCCESS } from './action';

const initialState = {
  loading: false,
  data: { post: null, comments: null },
  error: '',
};

const commentsDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTSDATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case COMMENTSDATA_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: '',
      };
    case COMMENTSDATA_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        data: { post: null, comments: null },
        error: action.error,
      };
    default:
      return state;
  }
};

export default commentsDataReducer;
