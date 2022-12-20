import { all, fork } from 'redux-saga/effects';
import { watchComments } from './commentsData/commentsSaga';
import { watchSearch } from './search/searchSaga';

export default function* rootSaga() {
  yield all([
    fork(watchSearch),
    fork(watchComments)
  ]);
}
