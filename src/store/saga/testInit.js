import { take, fork, call, put, delay, cancel } from 'redux-saga/effects';
import { startTest, cancelTest } from '../slices/testInit';
import {fetchQuestions} from '../../utils/api';
import {fetchQuestionsFail, fetchQuestionsSuccess} from '../slices/test';

function* fetchQuestionsSaga() {
    try {
        yield delay(1000);
        const data = yield call(fetchQuestions);
        yield put(fetchQuestionsSuccess(data))
    } catch (error) {
        yield put(fetchQuestionsFail('There was an error fetching the questions'))
    }
}

function* cancelFetchTest(forkedSaga) {
    while(true) {
        yield take(cancelTest.type);
        yield cancel(forkedSaga);
    }
}

export default function* startTestSaga() {
    while (true) {
        yield take(startTest.type);
        const forkedSaga = yield fork(fetchQuestionsSaga);
        yield fork(cancelFetchTest, forkedSaga)
    }
}

