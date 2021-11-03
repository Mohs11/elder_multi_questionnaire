import { createSlice } from "@reduxjs/toolkit";
import * as stages from '../../utils/consts';
import {fetchQuestionsSuccess, fetchQuestionsFail} from './test';

const initialState = {
    stage: stages.START_TEST,
    username: '',
}

const testState = createSlice({
    name: 'testState',
    initialState,
    reducers: {
        startTest(state, action) {
            state.username = action.payload.username;
            state.stage = stages.FETCHING_TEST;
        },
        cancelTest(state, action) {
            state.stage = stages.START_TEST;
        },
        finishTest(state, action) {
            state.stage = stages.END_TEST;
        },
        restartGame(state, action) {
            state.stage = stages.START_TEST;
        } 
    },
    extraReducers: (builder) => {
        builder.addCase(fetchQuestionsSuccess, (state) => {
            state.stage = stages.TEST;
        }).addCase(fetchQuestionsFail, (state) => {
            state.stage = stages.START_TEST;
        })
    }
})

export const { startTest, cancelTest, finishTest, restartGame } = testState.actions;

export default testState.reducer;