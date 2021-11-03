import { take, put } from 'redux-saga/effects';
import { fetchResultsSuccess } from '../slices/test';
import { finishTest } from '../slices/testInit';

export default function* resultsSaga() {
    while (true) {
        yield take(fetchResultsSuccess.type);
        yield put(finishTest());
    }
}