import { FINANCIAL_INFO } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const moneyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FINANCIAL_INFO:
    return {
      ...state, ...action.state,
    };
  default:
    return state;
  }
};

export default moneyReducer;
