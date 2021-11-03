import {take, race, delay, put} from 'redux-saga/effects' ;
import { fetchQuestionsSuccess } from '../slices/test';
import {finishTest} from '../slices/testInit';
import {answerQuestion, nextQuestion} from '../slices/test'

function* answersSaga() {
    for(let i = 0; i < 5; i++) {
        yield take(answerQuestion.type);
        yield put(nextQuestion());
    }
}

export default function* testSaga() {
    while(true) {
        yield take(fetchQuestionsSuccess.type);
        
        yield race({
            delay: delay(30000),
            done: answersSaga()
        });
        yield put(finishTest());
    }
}