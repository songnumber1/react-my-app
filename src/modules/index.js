import { combineReducers } from 'redux';
import counter from './counter';
import api from './api';

const rootReducer = combineReducers({ counter, api });

export default rootReducer;
