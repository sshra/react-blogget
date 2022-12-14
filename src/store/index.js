import { createStore } from 'redux';
import { getToken, setToken } from '../api/token';


const initialState = {
  comment: 'Hello, Redux!',
  token: getToken(),
};
console.log(initialState);

const UPDATE_COMMENT = 'UPDATE_COMMENT';
const UPDATE_TOKEN = 'UPDATE_TOKEN';
const DELETE_TOKEN = 'DELETE_TOKEN';

export const updateComment = comment => ({
  type: UPDATE_COMMENT,
  comment,
});

export const deleteToken = token => ({
  type: DELETE_TOKEN,
});

export const updateToken = token => ({
  type: UPDATE_TOKEN,
  token,
});

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        comment: action.comment,
      };

    case UPDATE_TOKEN:
      setToken(action.token);
      return {
        ...state,
        token: action.token,
      };

    case DELETE_TOKEN:
      setToken(null);
      return {
        ...state,
        token: null,
      };

    default:
      return state;
  }
};
const store = createStore(rootReducer);
export default store;
