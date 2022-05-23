import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  result = () => {
    const { expenses } = this.props;
    let total = 0;
    expenses.forEach((e) => {
      const moeda = e.currency;
      const despesa = Number(e.value);
      const cambio = Number(e.exchangeRates[moeda].ask);
      const conversão = despesa * cambio;
      total += conversão;
    });
    return total.toFixed(2);
  };

  render() {
    const { email } = this.props;
    return (
      <div>
        <header>
          <p data-testid="email-field">
            { email }
          </p>
          <p data-testid="total-field">
            { this.result() }
          </p>
          <p data-testid="header-currency-field">
            BRL
          </p>
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.objectOf.isRequired,
};

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
