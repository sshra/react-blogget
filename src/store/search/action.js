export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const SEARCH_REQUEST_SUCCESS = 'SEARCH_REQUEST_SUCCESS';
export const SEARCH_REQUEST_FAIL = 'SEARCH_REQUEST_FAIL';

export const searchRequest = (search) => ({
  type: SEARCH_REQUEST,
  search
});

export const searchRequestSuccess = ({ children, after }) => ({
  type: SEARCH_REQUEST_SUCCESS,
  posts: children,
  after
});

export const searchRequestFail = (error) => ({
  type: SEARCH_REQUEST_FAIL,
  error
});
