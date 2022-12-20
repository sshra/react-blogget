import { put, takeLatest } from 'redux-saga/effects';
import { postsPending } from '../postsData/postsSlice';
import { searchQuery } from './searchSlice';

function* fetchSearch(action) {
  yield put(postsPending({
    newPage: 'search',
    newPageSize: 5,
    query: action.payload.search
  }));
}

export function* watchSearch() {
  yield takeLatest(searchQuery.type, fetchSearch);
}
