import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { answerQuestion } from '../store/slices/test'
import {finishTest} from '../store/slices/testInit';
import Button from '../components/button';

const TestPage = () => {
    const dispatch = useDispatch()
    const [timeLeft, setTimeLeft] = useState(30);
    const currentQuestion = useSelector((state) => state.test.questions[state.test.currentQuestionIndex].question)
    const currentQuestionIndex = useSelector((state) => state.test.currentQuestionIndex)
    const currentQuestionAnswers = useSelector((state) => state.test.questions[state.test.currentQuestionIndex]
    .answers.map(answer => (<Button addClassName="m-1" onClick={() => answerHandler(answer)} key={answer}>{answer}</Button>)))

    const answerHandler = (answer) => {
        dispatch(answerQuestion(answer));
    };

    const endTestHandler = () => {
        dispatch(finishTest());
    }

    useEffect( () =>  {
        const interval = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    },[])


    return (
        <div className="flex flex-col items-center relative">
            <p className="absolute top-4 left-4 text-2xl text-green-500">{currentQuestionIndex} / 5</p> 
            <p className="h-20 w-20 flex justify-center items-center border-4 border-green-500 rounded-full my-4 text-3xl text-green-500">{timeLeft}</p>
            <p className="p-7 bg-white rounded shadow" dangerouslySetInnerHTML={{__html: currentQuestion}}></p>
            <div className="flex justify-between w-110 mt-10 mb-10">
                {currentQuestionAnswers}
            </div>
            <Button onClick={endTestHandler} type="error">Tap Out</Button>
        </div>
    )
}

export default TestPage
