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
      moedas: 'USD',
      pagamento: 'Dinheiro',
      categoria: 'Alimentação',
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

  render() {
    const {
      despesas,
      descricao,
      moedas,
      pagamento,
      categoria,
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
              name="despesas"
              value={ despesas }
              onChange={ this.handleChange }
              data-testid="value-input"
            />
          </label>
          <label htmlFor="descricao">
            Descrição:
            <input
              type="text"
              id="descricao"
              name="descricao"
              value={ descricao }
              onChange={ this.handleChange }
              data-testid="description-input"
            />
          </label>
          <label htmlFor="moedas">
            Moeda:
            <select
              name="moedas"
              id="moedas"
              onChange={ this.handleChange }
              value={ moedas }
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
              name="pagamento"
              id="pagamento"
              onChange={ this.handleChange }
              data-testid="method-input"
              value={ pagamento }
            >
              <option>Dinheiro</option>
              <option>Cartão de crédito</option>
              <option>Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="categoria">
            Categoria:
            <select
              name="categoria"
              id="categoria"
              value={ categoria }
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
