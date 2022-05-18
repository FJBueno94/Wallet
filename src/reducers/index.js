import { combineReducers } from 'redux';
import userReducer from './user';
import moneyReducer from './wallet';

const rootReducer = combineReducers({ userReducer, moneyReducer });

export default rootReducer;
