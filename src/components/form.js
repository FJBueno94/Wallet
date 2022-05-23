import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { curreniciesAction, expensesAction } from '../actions';

export class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
      id: 0,
      exchangeRates: {},
    };
  }

  componentDidMount() {
    const { financialAction } = this.props;
    financialAction();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  onsubmit = async (event) => {
    event.preventDefault();
    const { criaDespesa, financialAction } = this.props;
    const data = await financialAction();
    this.setState({ exchangeRates: data });
    criaDespesa(this.state);
    this.setState((prevState) => ({
      id: prevState.id + 1,
      value: 0,
      description: '',
    }));
  };

  render() {
    const {
      value,
      description,
      currency,
      method,
      tag,
    } = this.state;

    const { currencies } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="despesas">
            Valor:
            <input
              type="text"
              id="despesas"
              name="value"
              value={ value }
              onChange={ this.handleChange }
              data-testid="value-input"
            />
          </label>
          <label htmlFor="descricao">
            Descrição:
            <input
              type="text"
              id="descricao"
              name="description"
              value={ description }
              onChange={ this.handleChange }
              data-testid="description-input"
            />
          </label>
          <label htmlFor="moedas">
            Moeda:
            <select
              name="currency"
              id="moedas"
              onChange={ this.handleChange }
              value={ currency }
            >
              {
                currencies.map((moeda) => (
                  <option
                    key={ moeda }
                  >
                    { moeda }
                  </option>
                ))
              }
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de Pagamento:
            <select
              name="method"
              id="pagamento"
              onChange={ this.handleChange }
              data-testid="method-input"
              value={ method }
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="categoria">
            Categoria:
            <select
              name="tag"
              id="categoria"
              value={ tag }
              onChange={ this.handleChange }
              data-testid="tag-input"
            >
              <option>Alimentação</option>
              <option>Lazer</option>
              <option>Trabalho</option>
              <option>Transporte</option>
              <option>Saúde</option>
            </select>
          </label>
          <button
            type="submit"
            name="'Adicionar despesa'"
            label="Adicionar despesa"
            onClick={ this.onsubmit }
          >
            Adicionar despesa
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  financialAction: () => dispatch(curreniciesAction()),
  criaDespesa: (state) => dispatch(expensesAction(state)),
});

Form.propTypes = {
  financialAction: PropTypes.func.isRequired,
  criaDespesa: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
