import React from 'react';
import { useSelector } from 'react-redux';
import StartTestPage from './StartTestPage';
import FetchingPage from './FetchingPage';
import TestPage from './TestPage';
import EndTestPage from './EndTestPage';
import * as stages from '../utils/consts';

const MainPage = () => {
    const currentStage = useSelector((state) => state.testState.stage)

    let displayPage;
    switch (currentStage) {
        case stages.START_TEST:
            displayPage = <StartTestPage />
            break;
        case stages.FETCHING_TEST:
            displayPage = <FetchingPage />
            break;
        case stages.TEST:
            displayPage = <TestPage />
            break;
        case stages.END_TEST:
            displayPage = <EndTestPage />
            break;
        default:
            break;
    }
    return (
        <div className='bg-green-200 min-h-screen font-sans'>
            <h1 className="bg-green-500 text-white p-4 text-2x1 text-center uppercase">React Redux Test</h1>
            {displayPage}
        </div>
    )
}

export default MainPage
