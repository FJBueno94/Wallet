import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/header';
import { curreniciesAction } from '../actions/index';

class Wallet extends React.Component {
  componentDidMount() {
    const { financialAction } = this.props;
    financialAction();
  }

  render() {
    const { currencies } = this.props;
    return (
      <>
        <Header />
        <div>
          <p>
            { currencies }
          </p>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  financialAction: () => dispatch(curreniciesAction()),
});

Wallet.propTypes = {
  financialAction: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
