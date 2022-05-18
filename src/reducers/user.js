import PERSONAL_INFO from '../actions/index';

const INITIAL_STATE = {
  email: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case PERSONAL_INFO:
    return {
      ...state, ...action.state,
    };
  default:
    return state;
  }
};

export default userReducer;
