import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    questions: [],
    error: null,
    currentQuestionIndex: null,
    answers: [],
    results: [],
}

const testSlice = createSlice({
    name: 'Test',
    initialState,
    reducers: {
        fetchQuestionsSuccess(state, action) {
            state.questions = action.payload;
            state.currentQuestionIndex = 0;
            state.answers = [];
            state.results = [];
        },
        fetchQuestionsFail(state, action) {
            state.error = action.payload;
        },
        answerQuestion(state, action) {
            const currentQuestion = state.questions[state.currentQuestionIndex];
            state.answers.push({
                question: currentQuestion.question,
                questionId: currentQuestion.id,
                answers: action.payload,
                result: false
            })

        },
        nextQuestion(state, action) {
            state.currentQuestionIndex += 1;
        },
        fetchResultsSuccess(state, action) {
            state.results = action.payload;
        },
        fetchResultsFail(state, action) {
            state.error = action.payload;
        },
    },
});

export const { fetchQuestionsSuccess, fetchQuestionsFail, answerQuestion, nextQuestion, fetchResultsSuccess, fetchResultsFail } = testSlice.actions;

export default testSlice.reducer;