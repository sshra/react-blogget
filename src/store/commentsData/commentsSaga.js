import axios from 'axios';
import { put, takeLatest, select } from 'redux-saga/effects';
import { URL_API } from '../../api/const';
import { fail, pending, success } from './commentsSlice';

function* fetchComments({ id }) {
  const token = yield select(state => state.token.token);
  if (!token) return;

  try {
    const request = yield axios(`${URL_API}/comments/article?article=${id}`, {
      headers: { Authorization: `bearer ${token}` },
    });
    const data = {
      post: request.data[0].data.children[0].data,
      comments: request.data[1].data.children,
    };
    yield put(success(data));
  } catch (error) {
    yield put(fail({ error: error.message }));
  }
}

export function* watchComments() {
  yield takeLatest(pending.type, fetchComments);
}
