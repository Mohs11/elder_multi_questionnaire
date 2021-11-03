import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { restartGame } from '../store/slices/testInit';
import Button from '../components/button';

const EndTestPage = () => {
    const dispatch = useDispatch();
    const getAnswers = useSelector(state => state.test.answers);
    const results = useSelector(state => state.test.results);
    const name = useSelector(state => state.testState.username);
    let score = 0;
    let answers = JSON.parse(JSON.stringify(getAnswers));
    answers.filter(function (answer) {
        return results.some(function (result) {
            if (answer.answers === result.answer) {
                score++;
                return answer.result = true;
            } else {
                return answer.result = false;
            }
        });
    });
    const restartHandler = () => {
        dispatch(restartGame());
    }
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl text-green-500 my-4">Test Complete</h1>
            <p className="text-2xl mb-4"> {name}'s score was: <span className="text-green-500"> {score}</span> / 5 </p>
            <Button onClick={restartHandler}>Restart Test</Button>
            <div className="mt-4 p-4">
                {answers.map(answer =>
                    <div key={answer.questionId} className={`${answer.result === true ? 'bg-green-100' : 'bg-red-100'} border-b-2 border-green-500 flex justify-between p-3`}>
                        <ul>
                            <li>
                                <p>{answer.question}</p>
                            </li>
                            <li>
                                <p>Your answer: {answer.answers}</p>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default EndTestPage
