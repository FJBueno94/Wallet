import React, { Component } from 'react';
// import connect from 'react-redux';

export class Table extends Component {
  render() {
    // const { expenses } = this.props;

    return (
      <div>
        <table>
          <th>Descrição</th>
          <th>Tag</th>
          <th>Método de pagamento</th>
          <th>Valor</th>
          <th>Moeda</th>
          <th>Câmbio utilizado</th>
          <th>Valor convertido</th>
          <th>Moeda de conversão</th>
          <th>Editar/Excluir</th>
        </table>
      </div>
    );
  }
}

// const mapStateToProps = (state) => ({
//   expenses: state.wallet.expenses,
// });

export default Table;
