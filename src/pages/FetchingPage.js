import React from 'react'
import {cancelTest} from '../store/slices/testInit';
import {useDispatch} from 'react-redux';
import Button from '../components/button'

const FetchingPage = () => {
    const dispatch = useDispatch()
    return (
        <div className="flex flex-col justify-center items-center mt-80">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center mb-12 justify-center">
                <div className="w-12 h-12 bg-green-200 rounded-full animate-bounce"></div>
            </div>           
            <Button onClick={() => {
                dispatch(cancelTest());
            }}>Cancel</Button>
        </div>
    )
}

export default FetchingPage
