import { combineReducers } from 'redux';
import counter from './counter';
import api from './axois';
import progress from './loading';

const rootReducer = combineReducers({ counter, api, progress });

export default rootReducer;
