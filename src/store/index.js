import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleweare from 'redux-saga';
import rooterReducer from './reducer';
import rootSaga from './saga';

const sagaMiddleweare = createSagaMiddleweare();

const store = configureStore({
    reducer: rooterReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({ thunk: false}).concat(sagaMiddleweare),
});

sagaMiddleweare.run(rootSaga);

export default store;