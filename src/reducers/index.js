import { combineReducers } from 'redux';
import userReducer from './user';
import moneyReducer from './wallet';

const rootReducer = combineReducers({ user: userReducer, wallet: moneyReducer });

export default rootReducer;
