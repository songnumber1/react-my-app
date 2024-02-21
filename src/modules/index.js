import { combineReducers } from 'redux';
import counter from './counter';
import api from './axois';

const rootReducer = combineReducers({ counter, api });

export default rootReducer;
