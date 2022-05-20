import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { curreniciesAction } from '../actions';

export class Form extends Component {
  constructor() {
    super();

    this.state = {
      despesas: 0,
      descricao: '',
    };
  }

  componentDidMount() {
    const { financialAction } = this.props;
    financialAction();
  }

  render() {
    const {
      despesas,
      descricao,
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
              value={ despesas }
              data-testid="value-input"
            />
          </label>
          <label htmlFor="descricao">
            Descrição:
            <input
              type="text"
              id="descricao"
              value={ descricao }
              data-testid="description-input"
            />
          </label>
          <label htmlFor="moedas">
            Moeda:
            <select name="moedas" id="moedas">
              {
                currencies.map((moeda) => (
                  <option
                    key={ moeda }
                    value={ moeda }
                  >
                    { moeda }
                  </option>
                ))
              }
            </select>
          </label>
          <label htmlFor="pagamento">
            Método de Pagamento:
            <select name="pagamento" id="pagamento" data-testid="method-input">
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="categoria">
            Categoria:
            <select name="categoria" id="categoria" data-testid="tag-input">
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
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
});

Form.propTypes = {
  financialAction: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
