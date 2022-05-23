import { FINANCIAL_INFO, EXPENSES_INFO } from '../actions/index';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const moneyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case FINANCIAL_INFO:
    return {
      ...state, currencies: action.state,
    };
  case EXPENSES_INFO:
    return {
      ...state, expenses: [...state.expenses, { ...action.state }],
    };
  default:

    return state;
  }
};

export default moneyReducer;
