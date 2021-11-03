import {all} from 'redux-saga/effects';
import startTestSaga from './saga/testInit';
import test from './saga/test';
import resultsTestSaga from './saga/answersInit';
import resultsSaga from './saga/answer';

export default function* rootSaga() {
    yield all([startTestSaga(), test(), resultsTestSaga(), resultsSaga()])
}