import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

// import api from '../../../services/api';

// import axios from 'axios';

import data from '../../../assets/data';

import { fetchSuccess, fetchFailure } from './actions';

export function* fetchList({ payload }) {
  try {
    const { city } = payload;

    // const response = yield call(axios.get, 'https://github.com/viridi19/mock-data/blob/master/capitals.js', {
    //  params: {
    //    city
    //  }
    //});

    yield put(fetchSuccess(data));

  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados');
    yield put(fetchFailure());
  }
}

export default all([
  takeLatest('@city/FETCH_REQUEST', fetchList),
]);
