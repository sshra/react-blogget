import {
  AUTH_LOGOUT,
  AUTH_REQUEST,
  AUTH_REQUEST_ERROR,
  AUTH_REQUEST_SUCCESS } from './action';

const UPDATE_AUTH = 'UPDATE_AUTH';

const initialState = {
  loading: false,
  data: {},
  error: '',
};

export const updateAuth = auth => ({
  type: UPDATE_AUTH,
  auth,
});

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case AUTH_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: '',
      };
    case AUTH_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        loading: false,
        data: {},
      };
    default:
      return state;
  }
};

export default authReducer;
