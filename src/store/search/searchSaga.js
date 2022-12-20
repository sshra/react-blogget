import axios from 'axios';
import { put, takeLatest, select } from 'redux-saga/effects';
import { URL_API } from '../../api/const';
import { searchRequestFail, searchRequestSuccess, SEARCH_REQUEST }
  from './action';

function* fetchSearch(action) {
  const token = yield select(state => state.token.token);

  try {
    const request = yield axios(`${URL_API}/search?q=${action.search}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
    yield put(searchRequestSuccess(request.data.data));
  } catch (error) {
    yield put(searchRequestFail(error));
  }
}

export function* watchSearch() {
  yield takeLatest(SEARCH_REQUEST, fetchSearch);
}

/*

ASYNC sample

const fetchSearch = async (search, token) => {

  const request = await axios(`${URL_API}/search?q={search}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  });

  return request.data;
};

function* workerSearch(action) {
  const token = yield select(state => state.token.token);
  const { data } = yield call(fetchSearch, action.search, token);
  yield put(searchRequestSuccess(data));
}

export function* watchSearch() {
  yield takeLatest(SEARCH_REQUEST, workerSearch);
}

*/
