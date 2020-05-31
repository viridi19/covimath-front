import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';

import { fetchSuccess, fetchFailure } from './actions';

export function* fetchList({ payload }) {
  try {
    const { name } = payload;

    const response = yield call(api.get, `data?city=${name}`);

    let { similar, ...data } = response.data;

    data.name = data.searched_city

    yield put(fetchSuccess(data, similar));

  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados');
    yield put(fetchFailure());
  }
}

export default all([
  takeLatest('@city/FETCH_REQUEST', fetchList),
]);
