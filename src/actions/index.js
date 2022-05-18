const FINANCIAL_INFO = 'FINANCIAL_INFO';
const PERSONAL_INFO = 'PERSONAL_INFO';

export const financialAction = (state) => ({ type: FINANCIAL_INFO, state });
export const personalAction = (state) => ({ type: PERSONAL_INFO, state });

export default { FINANCIAL_INFO, PERSONAL_INFO };
