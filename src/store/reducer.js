import {combineReducers} from 'redux';
import testState from './slices/testInit';
import test from './slices/test';

export default combineReducers({ testState, test });