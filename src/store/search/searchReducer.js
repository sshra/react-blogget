import { SEARCH_REQUEST, SEARCH_REQUEST_FAIL, SEARCH_REQUEST_SUCCESS }
  from './action';

const initialState = {
  loading: false,
  posts: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
  depth: 0,
  pageSize: 10,
  requestId: '',
};

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case SEARCH_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        posts: action.posts,
        after: action.after,
      };
    case SEARCH_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};
