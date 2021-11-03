import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import {startTest} from '../store/slices/testInit';
import Button from '../components/button';

const StartTestPage = () => {
    const [username, setUsername] = useState('');
    const dispatch = useDispatch();
    const startTestHandler = () => {
        dispatch(startTest({username}))
    }
    return (
        <div className="flex flex-col justify-center items-center mt-80">
            <input value={username} onChange={e => setUsername(e.target.value)} 
            placeholder="Your Name" className="py-2 p-4 outline-non rounded shadow w-64 mb-6"/>
            <Button onClick={startTestHandler}>Start Test</Button>
        </div>
    )
}

export default StartTestPage