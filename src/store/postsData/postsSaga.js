import axios from 'axios';
import { put, select, takeLatest } from 'redux-saga/effects';
import { URL_API } from '../../api/const';
import { postsFail, postsPending, postsPendingAutoLoad, postsSuccess }
  from './postsSlice';

export const ERROR_REQUEST_SIMULTANEOUS = 'Prevent simultaneous requests.';

export function* fetchPostsAutoload({ payload }) {
  const depth = yield select(state => state.posts.depth);
  console.log(depth, payload.autoloadDepth);
  if (depth < payload.autoloadDepth) {
    yield put(postsPending({}));
  }
}

export function* fetchPosts({ newPage, newPageSize }) {
  const token = yield select(state => state.token.token);
  const { page, pageSize, after } =
    yield select(state => state.posts);
  const posts =
    yield select(state => state.posts);

  if (!token) return;

  /*  if (requestId !== requestId) {
    yield postsFail({ error: ERROR_REQUEST_SIMULTANEOUS });
  } */
  console.log(posts, newPage, newPageSize);

  try {
    const response = yield axios(`${URL_API}/${page}?limit=${pageSize}&${after ?
        `after=${after}` :
        ''}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
    yield put(postsSuccess({ posts: response.data.data, pageSize }));
  } catch (error) {
    yield put(postsFail({ error: error.toString() }));
  }
}

export function* watchPosts() {
  yield takeLatest(postsPending.type, fetchPosts);
  yield takeLatest(postsPendingAutoLoad.type, fetchPostsAutoload);
}
