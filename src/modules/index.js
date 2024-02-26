import { combineReducers } from 'redux';
import counter from './counter';
import api from './axois';
import loading from './loading';

const rootReducer = combineReducers({ counter, api, loading });

export default rootReducer;
