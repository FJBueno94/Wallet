export const FINANCIAL_INFO = 'FINANCIAL_INFO';
export const PERSONAL_INFO = 'PERSONAL_INFO';

export const financialAction = (state) => ({ type: FINANCIAL_INFO, state });
export const personalAction = (state) => ({ type: PERSONAL_INFO, state });

export const curreniciesAction = () => async (dispatch) => {
  try {
    const responseApi = await fetch('https://economia.awesomeapi.com.br/json/all');
    const dataCoins = await responseApi.json();
    const allCurrenciesCoins = Object.keys(dataCoins);
    const currenciesCoins = allCurrenciesCoins.filter((e) => e !== 'USDT');
    dispatch(financialAction(currenciesCoins));
  } catch (error) {
    console.log('Erro ao carregar as moedas!');
  }
};
