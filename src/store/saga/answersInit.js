import { take, fork, call, put, cancel } from 'redux-saga/effects';
import { finishTest } from '../slices/testInit';
import { fetchAnswers } from '../../utils/api';
import { fetchResultsSuccess, fetchResultsFail } from '../slices/test';

function* fetchResultsSaga() {
    try {
        const data = yield call(fetchAnswers);
        yield put(fetchResultsSuccess(data));
    } catch (error) {
        yield put(fetchResultsFail('There was an error fetching the results'))
    }
}

function* cancelFetchResultsSaga(forkedSaga) {
    while(true) {
        yield take(finishTest.type);
        yield cancel(forkedSaga);
    }
}

export default function* resultsTestSaga() {
    yield take(finishTest.type);
    const forkedSaga = yield fork(fetchResultsSaga);
    yield fork(cancelFetchResultsSaga, forkedSaga)
    
}

